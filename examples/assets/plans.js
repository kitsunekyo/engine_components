var B=Object.defineProperty;var V=(n,o,e)=>o in n?B(n,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[o]=e;var r=(n,o,e)=>(V(n,typeof o!="symbol"?o+"":o,e),e);import{V as w,i as W,C as N,d as _,L as G}from"./web-ifc-api-BffFJDIm.js";import{S as H}from"./stats.min-GTpOrGrX.js";import{J as M,D as b,G as R,A as U,p as $,C as z,i as Y,o as q,a as J,u as K,c as Q,T as X}from"./index-DTZynfbV.js";import{p as Z,a as y,m as E}from"./index-DyM33b1I.js";import{E as A,C as ee}from"./index-Btpyp6vH.js";import{P as te}from"./index-fZR-42uS.js";import"./import-wrapper-prod-BjFaIjiR.js";import{H as se}from"./index-BEofs3rK.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./renderer-with-2d-Cgm5UgCK.js";const P=class P extends M{constructor(e){super(e);r(this,"onDisposed",new b);r(this,"onNavigated",new b);r(this,"onExited",new b);r(this,"enabled",!1);r(this,"currentPlan",null);r(this,"defaultSectionOffset",1.5);r(this,"defaultCameraOffset",30);r(this,"list",[]);r(this,"world");r(this,"_floorPlanViewCached",!1);r(this,"_previousCamera",new w);r(this,"_previousTarget",new w);r(this,"_previousProjection","Perspective");this.components.add(P.uuid,this)}dispose(){this.onExited.reset(),this.onNavigated.reset(),this.list=[],this.onDisposed.trigger(),this.onDisposed.reset()}async generate(e){if(!e.hasProperties)throw new Error("Properties are needed to compute plan views!");const s=await e.getAllPropertiesOfType(W);if(!s)throw new Error("Floorplans not found!");const i=e.coordinationMatrix.elements[13],h=await R.getUnits(e);for(const l of Object.values(s)){const g={value:0};this.getAbsoluteFloorHeight(l.ObjectPlacement,g);const c=g.value*h+i;this.create({name:l.Name.value,id:l.GlobalId.value,normal:new w(0,-1,0),point:new w(0,c,0),ortho:!0,offset:this.defaultSectionOffset})}}create(e){if(!this.world)throw new Error("You must set a world before creating the clipping planes!");if(this.list.find(l=>l.id===e.id)){console.warn(`There's already a plan with the id: ${e.id}`);return}const i=this.createClippingPlane(e),h={...e,plane:i};this.list.push(h)}async goTo(e,s=!1){var i;((i=this.currentPlan)==null?void 0:i.id)!==e&&(this.onNavigated.trigger({id:e}),this.storeCameraPosition(),await this.hidePreviousClippingPlane(),this.updateCurrentPlan(e),await this.activateCurrentPlan(),this.enabled||(await this.moveCameraTo2DPlanPosition(s),this.enabled=!0))}async exitPlanView(e=!1){if(!this.enabled||!this.world)return;this.enabled=!1,this.onExited.trigger(),this.cacheFloorplanView();const s=this.world.camera;s.set("Orbit"),await s.projection.set(this._previousProjection),this.currentPlan&&this.currentPlan.plane&&(this.currentPlan.plane.enabled=!1,this.currentPlan.plane.edges.enabled=!1,this.currentPlan.plane.edges.visible=!1),this.currentPlan=null,await s.controls.setLookAt(this._previousCamera.x,this._previousCamera.y,this._previousCamera.z,this._previousTarget.x,this._previousTarget.y,this._previousTarget.z,e)}storeCameraPosition(){this.enabled?this.cacheFloorplanView():this.store3dCameraPosition()}createClippingPlane(e){if(!this.world)throw new Error("World is needed to create clipping planes!");const{normal:s,point:i}=e,h=i.clone();e.offset&&(h.y+=e.offset);const l=this.components.get(U),g=l.Type;l.Type=A;const c=l.createFromNormalAndCoplanarPoint(this.world,s,h);return c.edges.update(),c.visible=!1,c.enabled=!1,c.edges.enabled=!1,c.edges.visible=!1,l.Type=g,c}cacheFloorplanView(){if(!this.world)throw new Error("World is needed to create clipping planes!");this._floorPlanViewCached=!0,this.world.camera.controls.saveState()}async moveCameraTo2DPlanPosition(e){if(!this.world)throw new Error("World is needed to create clipping planes!");const s=this.world.camera;this._floorPlanViewCached?await s.controls.reset(e):await s.controls.setLookAt(0,100,0,0,0,0,e)}async activateCurrentPlan(){if(!this.world)throw new Error("World is needed to create clipping planes!");if(!this.currentPlan)throw new Error("Current plan is not defined.");const e=this.world.camera;this.currentPlan.plane&&(this.currentPlan.plane.enabled=!0,this.currentPlan.plane.edges.fillNeedsUpdate=!0,this.currentPlan.plane.edges.visible=!0),e.set("Plan");const s=this.currentPlan.ortho?"Orthographic":"Perspective";await e.projection.set(s)}store3dCameraPosition(){if(!this.world)throw new Error("World is needed to create clipping planes!");const e=this.world.camera;e.three.getWorldPosition(this._previousCamera),e.controls.getTarget(this._previousTarget),this._previousProjection=e.projection.current}updateCurrentPlan(e){const s=this.list.find(i=>i.id===e);if(!s)throw new Error("The specified plan is undefined!");this.currentPlan=s}async hidePreviousClippingPlane(){if(this.currentPlan){const e=this.currentPlan.plane;e&&(e.enabled=!1),this.currentPlan.plane instanceof A&&(this.currentPlan.plane.edges.visible=!1)}}getAbsoluteFloorHeight(e,s){const i=e.RelativePlacement.Location.Coordinates;s.value+=i[2].value,e.PlacementRelTo&&this.getAbsoluteFloorHeight(e.PlacementRelTo,s)}};r(P,"uuid","a80874aa-1c93-43a4-80f2-df346da086b1");let v=P;const ne=document.getElementById("container"),a=new $,oe=a.get(z),t=oe.create();t.scene=new Y(a);t.renderer=new te(a,ne);t.camera=new q(a);t.renderer.postproduction.enabled=!0;t.renderer.postproduction.customEffects.outlineEnabled=!0;a.init();t.camera.controls.setLookAt(12,6,8,0,0,-10);t.scene.setup();const L=a.get(J);L.config.color.setHex(6710886);const D=L.create(t);D.three.position.y-=1;t.renderer.postproduction.customEffects.excludedMeshes.push(D.three);const T=a.get(K),re=await fetch("https://thatopen.github.io/engine_components/resources/small.frag"),ie=await re.arrayBuffer(),ae=new Uint8Array(ie),d=T.load(ae);t.scene.three.add(d);const le=await fetch("https://thatopen.github.io/engine_components/resources/small.json"),ce=await le.json();d.setLocalProperties(ce);const f=a.get(v);f.world=t;await f.generate(d);Z.init();const u=a.get(Q);u.byModel(d.uuid,d);const S=u.find({models:[d.uuid]}),C=new N("white"),de=t.scene.three.background;u.byEntity(d);const p=a.get(ee),k=a.get(se);k.setup({world:t});const pe=a.get(X),x=pe.create(t);for(const n of d.items)x.add(n.mesh);x.needsUpdate=!0;t.camera.controls.addEventListener("sleep",()=>{x.needsUpdate=!0});const ue=new _({color:"gray",side:2}),he=new G({color:"black"}),fe=new _({color:"black",opacity:.5,side:2,transparent:!0});p.styles.create("thick",new Set,t,he,ue,fe);const F=u.find({entities:["IFCWALLSTANDARDCASE","IFCWALL"]});for(const n in F){const o=T.list.get(n);if(!o)continue;const{mesh:e}=o;p.styles.list.thick.fragments[n]=new Set(F[n]),p.styles.list.thick.meshes.add(e)}p.styles.create("thin",new Set,t);const I=u.find({entities:["IFCDOOR","IFCWINDOW","IFCPLATE","IFCMEMBER"]});for(const n in I){const o=T.list.get(n);if(!o)continue;const{mesh:e}=o;p.styles.list.thin.fragments[n]=new Set(I[n]),p.styles.list.thin.meshes.add(e)}await p.update(!0);const O=y.create(()=>E`
    <bim-panel active label="Plans Tutorial" 
      style="position: fixed; top: 5px; right: 5px">
      <bim-panel-section fixed name="floorPlans" label="Plan list" style="padding-top: 10px;">
      </bim-panel-section>
    </bim-panel>
    `);document.body.append(O);const me=t.renderer.postproduction.customEffects.minGloss,j=O.querySelector("bim-panel-section[name='floorPlans']");for(const n of f.list){const o=y.create(()=>E`
      <bim-button checked label="${n.name}"
        @click="${()=>{t.renderer.postproduction.customEffects.minGloss=.1,k.backupColor=C,u.setColor(S,C),t.scene.three.background=C,f.goTo(n.id)}}">
      </bim-button>
    `);j.append(o)}const ge=y.create(()=>E`
      <bim-button checked label="Exit"
        @click="${()=>{k.backupColor=null,t.renderer.postproduction.customEffects.minGloss=me,u.resetColor(S),t.scene.three.background=de,f.exitPlanView()}}">
      </bim-button>
    `);j.append(ge);const m=new H;m.showPanel(2);document.body.append(m.dom);m.dom.style.left="0px";t.renderer.onBeforeUpdate.add(()=>m.begin());t.renderer.onAfterUpdate.add(()=>m.end());
