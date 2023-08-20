import { ModelDatabase } from "./db";
import { Component, Disposable, UI, Event } from "../../base-types";
import { Button, FloatingWindow, SimpleUICard } from "../../ui";
import { Components } from "../Components";

// TODO: Implement UI elements (this is probably just for 3d scans)

export class LocalCacher extends Component<any> implements UI, Disposable {
  name = "LocalCacher";

  enabled = true;

  fileLoaded = new Event<{ id: string }>();
  itemSaved = new Event<{ id: string }>();

  protected _components: Components;
  protected _cards: SimpleUICard[] = [];

  private _db: ModelDatabase;
  private readonly _storedModels = "open-bim-components-stored-files";

  uiElement: { main: Button; saveButton: Button; loadButton: Button };

  // TODO: Bring this to uiElement
  floatingMenu: FloatingWindow;

  get ids() {
    const serialized = localStorage.getItem(this._storedModels) || "[]";
    return JSON.parse(serialized) as string[];
  }

  constructor(components: Components) {
    super();
    this._components = components;
    this._db = new ModelDatabase();

    const main = new Button(components);
    main.materialIcon = "storage";
    main.tooltip = "Local cacher";

    const saveButton = new Button(components);
    saveButton.label = "Save";
    saveButton.materialIcon = "save";
    main.addChild(saveButton);

    const loadButton = new Button(components);
    loadButton.label = "Download";
    loadButton.materialIcon = "download";
    main.addChild(loadButton);

    this.uiElement = { main, loadButton, saveButton };

    const renderer = this._components.renderer.get();
    const viewerContainer = renderer.domElement.parentElement as HTMLElement;

    this.floatingMenu = new FloatingWindow(components, "file-list-menu");
    this.floatingMenu.title = "Saved Files";

    this.floatingMenu.visible = false;
    const savedFilesMenuHTML = this.floatingMenu.get();
    savedFilesMenuHTML.style.left = "70px";
    savedFilesMenuHTML.style.top = "100px";
    savedFilesMenuHTML.style.width = "340px";
    savedFilesMenuHTML.style.height = "400px";

    viewerContainer.appendChild(this.floatingMenu.get());

    saveButton.onclick = () => {
      if (this.floatingMenu.visible) {
        this.floatingMenu.visible = false;
      }
    };
  }

  async get(id: string) {
    if (this.exists(id)) {
      await this._db.open();
      const result = await this.getModelFromLocalCache(id);
      this._db.close();
      return result;
    }

    return null;
  }

  async save(id: string, url: string) {
    this.addStoredID(id);
    const rawData = await fetch(url);
    const file = await rawData.blob();
    await this._db.open();
    await this._db.models.add({
      id,
      file,
    });
    this._db.close();
  }

  exists(id: string) {
    const stored = localStorage.getItem(id);
    return stored !== null;
  }

  async delete(ids: string[]) {
    await this._db.open();
    for (const id of ids) {
      if (this.exists(id)) {
        this.removeStoredID(id);
        await this._db.models.where("id").equals(id).delete();
      }
    }
    this._db.close();
  }

  async deleteAll() {
    await this._db.open();
    this.clearStoredIDs();
    await this._db.delete();
    this._db = new ModelDatabase();
    this._db.close();
  }

  dispose() {
    this.fileLoaded.reset();
    this.itemSaved.reset();
    for (const card of this._cards) {
      card.dispose();
    }
    this._cards = [];
    this.uiElement.main.dispose();
    this.uiElement.saveButton.dispose();
    this.uiElement.loadButton.dispose();
    this.floatingMenu.dispose();
    (this._db as any) = null;
    (this._components as any) = null;
  }

  private async getModelFromLocalCache(id: string) {
    const found = await this._db.models.where("id").equals(id).toArray();
    return found[0].file;
  }

  private clearStoredIDs() {
    const ids = this.ids;
    for (const id of ids) {
      this.removeStoredID(id);
    }
  }

  private removeStoredID(id: string) {
    localStorage.removeItem(id);
    const allIDs = this.ids;
    const ids = allIDs.filter((savedId) => savedId !== id);
    this.setStoredIDs(ids);
  }

  private addStoredID(id: string) {
    const time = performance.now().toString();
    localStorage.setItem(id, time);
    const ids = this.ids;
    ids.push(id);
    this.setStoredIDs(ids);
  }

  private setStoredIDs(ids: string[]) {
    localStorage.setItem(this._storedModels, JSON.stringify(ids));
  }
}
