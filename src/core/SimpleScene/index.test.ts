/*
Code Analysis:
- The SimpleScene class is a basic 3D scene that allows objects to be added hierarchically. It is a subclass of the Component class and implements the Disposable interface.

- The class has an enabled field that is set to true by default and a name field that is set to "SimpleScene".
- The constructor initializes a new THREE.Scene object and sets its background color to gray.
- The get() method returns the THREE.Scene object.
- The dispose() method disposes of all the children of the scene, including their geometries and materials, using the Disposer class.

Overall, the SimpleScene class provides a simple way to create and manage a 3D scene in Three.js. Its main methods are get() and dispose(), which allow access to the scene object and clean up its memory, respectively.
*/

/*
Test Plan:
- test_constructor: creates a new instance of SimpleScene. Tags: [happy path]
- test_get: gets the scene object using the get() method. Tags: [happy path]
- test_dispose_empty: disposes of a scene with no children. Tags: [edge case]
- test_dispose_no_materials: disposes of a scene with children that have no geometries or materials. Tags: [edge case]
- test_background_color: tests that the background color of the scene is set correctly. Tags: [general behavior]
- test_disposer_called: tests that the Disposer class is called correctly to dispose of the scene's children. Tags: [general behavior]
- test_dispose_no_geometries: disposes of a scene with children that have no materials. Tags: [edge case]
- test_enabled: sets the enabled field to false to disable the scene. Tags: [general behavior]
- test_name: changes the name field to give the scene a custom name. Tags: [general behavior]
- test_get_disposed: gets the scene object after it has been disposed and checks that it is undefined. Tags: [edge case]
- test_name_empty: sets the name field to an empty string. Tags: [edge case]
*/



import { Disposer } from "../MemoryComponent";
import { SimpleScene } from "./index";
import { Components } from "../../types";
import THREE = require("three");

describe('SimpleScene_class', () => {
  test("constructor", () => {
    const components = new Components();
    const scene = new SimpleScene(components);
    expect(scene).toBeInstanceOf(SimpleScene);
  });

  test("get", () => {
    const components = new Components();
    const scene = new SimpleScene(components);
    expect(scene.get()).toBeInstanceOf(THREE.Scene);
  });

  test("dispose_empty", () => {
    const components = new Components();
    const scene = new SimpleScene(components);
    expect(() => {
      scene.dispose();
    }).not.toThrow();
  });

  test("dispose_no_materials", () => {
    const components = new Components();
    const scene = new SimpleScene(components);
    const mesh = new THREE.Mesh();
    scene.get().add(mesh);
    expect(() => {
      scene.dispose();
    }).not.toThrow();
  });

  test("background_color", () => {
    const components = new Components();
    const scene = new SimpleScene(components);
    expect(scene.get().background).toEqual(new THREE.Color(0xcccccc));
  });

  test("disposer_called", () => {
    const components = new Components();
    const scene = new SimpleScene(components);
    const disposerSpy = jest.spyOn(Disposer.prototype, "dispose");
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshBasicMaterial());
    scene.get().add(mesh);
    scene.dispose();
    expect(disposerSpy).toHaveBeenCalled();
  });
})
