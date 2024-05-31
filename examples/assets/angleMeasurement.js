var f=Object.defineProperty;var M=(o,n,e)=>n in o?f(o,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[n]=e;var t=(o,n,e)=>(M(o,typeof n!="symbol"?n+"":n,e),e);import{V as m,h as b,B as E,b as A,M as v}from"./web-ifc-api-BffFJDIm.js";import{S as P}from"./stats.min-GTpOrGrX.js";import{D as d,J as C,p as y,C as x,i as D,k as L,a as G}from"./index-DTZynfbV.js";import"./import-wrapper-prod-BjFaIjiR.js";import{P as B}from"./index-fZR-42uS.js";import{L as _,a as V,b as K}from"./Line2-Dv07buwS.js";import{M as T}from"./mark-B4GNnRgZ.js";import{n as N}from"./dimension-mark-BiAWnjiH.js";import{G as S}from"./graphic-vertex-picker-B79FhW4W.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./renderer-with-2d-Cgm5UgCK.js";class U{constructor(n,e){t(this,"enabled",!0);t(this,"visible",!0);t(this,"points",[]);t(this,"world");t(this,"onDisposed",new d);t(this,"_lineMaterial",new _({color:6629591,linewidth:2}));t(this,"_lineGeometry",new V);t(this,"_line",new K(this._lineGeometry,this._lineMaterial));t(this,"_labelMarker");t(this,"onAngleComputed",new d);t(this,"onPointAdded",new d);this.world=n;const i=N();this._labelMarker=new T(n,i),this.labelMarker.visible=!0,this.onPointAdded.add(()=>{this.points.length===1&&n.scene.three.add(this._line),this.points.length===3&&(this.labelMarker.visible=!0)}),this.onAngleComputed.add(s=>{this.labelMarker.three.element.textContent=`${s.toFixed(2)}°`,this.labelMarker.three.position.copy(this.points[1]??new m)}),e==null||e.forEach(s=>this.setPoint(s))}set lineMaterial(n){this._lineMaterial.dispose(),this._lineMaterial=n,this._line.material=n,this._lineMaterial.resolution.set(window.innerWidth,window.innerHeight)}get lineMaterial(){return this._lineMaterial}set labelMarker(n){this._labelMarker.dispose(),this._labelMarker=n}get labelMarker(){return this._labelMarker}get angle(){return{points:this.points,angle:this.computeAngle()}}setPoint(n,e){let i;if(e?i=e:i=this.points.length===0?0:this.points.length,![0,1,2].includes(i))return;this.points[i]=n,this.onPointAdded.trigger(n);const s=this.points.map(a=>[a.x,a.y,a.z]);this._lineGeometry.setPositions(s.flat())}toggleLabel(){this.labelMarker.toggleVisibility()}computeAngle(){const n=this.points[0],e=this.points[1],i=this.points[2];if(!(n&&e&&i))return 0;const s=new m().subVectors(e,n),a=new m().subVectors(e,i),w=b.radToDeg(s.angleTo(a));return this.onAngleComputed.trigger(w),w}dispose(){this.points=[],this.labelMarker.dispose(),this.onAngleComputed.reset(),this.onPointAdded.reset(),this.labelMarker.dispose(),this._line.removeFromParent(),this._lineMaterial.dispose(),this._lineGeometry.dispose(),this.onDisposed.trigger(),this.onDisposed.reset()}}const h=class h extends C{constructor(e){super(e);t(this,"onDisposed",new d);t(this,"world");t(this,"list",[]);t(this,"_lineMaterial");t(this,"_enabled",!1);t(this,"_vertexPicker");t(this,"_currentAngleElement",null);t(this,"_clickCount",0);t(this,"create",()=>{if(!this.enabled)return;if(!this.world){console.log("No world selected for angle measurement!");return}const e=this._vertexPicker.get(this.world);if(e){if(!this._currentAngleElement){const i=new U(this.world);i.lineMaterial=this.lineMaterial,this._currentAngleElement=i}this._currentAngleElement.setPoint(e,this._clickCount),this._currentAngleElement.setPoint(e,this._clickCount+1),this._currentAngleElement.setPoint(e,this._clickCount+2),this._currentAngleElement.computeAngle(),this._clickCount++,this._clickCount===3&&this.endCreation()}});t(this,"onMouseMove",()=>{if(!this.world){console.log("No world selected for angle measurement!");return}const e=this._vertexPicker.get(this.world);e&&this._currentAngleElement&&(this._currentAngleElement.setPoint(e,this._clickCount),this._currentAngleElement.computeAngle())});t(this,"onKeyDown",e=>{this.enabled&&(e.key==="z"&&e.ctrlKey&&this._currentAngleElement,e.key==="Escape"&&(this._clickCount===0&&!this._currentAngleElement?this.enabled=!1:this.cancelCreation()))});this.components.add(h.uuid,this),this._vertexPicker=new S(e),this._lineMaterial=new _({color:6629591,linewidth:2})}set lineMaterial(e){this._lineMaterial.dispose(),this._lineMaterial=e,this._lineMaterial.resolution.set(window.innerWidth,window.innerHeight)}get lineMaterial(){return this._lineMaterial}set enabled(e){this._enabled=e,this.setupEvents(e),this._vertexPicker.enabled=e,e||this.cancelCreation()}get enabled(){return this._enabled}set workingPlane(e){this._vertexPicker.workingPlane=e}get workingPlane(){return this._vertexPicker.workingPlane}dispose(){this.setupEvents(!1),this._lineMaterial.dispose(),this._vertexPicker.dispose();for(const e of this.list)e.dispose();this._currentAngleElement&&this._currentAngleElement.dispose(),this.components=null,this.onDisposed.trigger(h.uuid),this.onDisposed.reset()}delete(){}deleteAll(){for(const e of this.list)e.dispose();this.list=[]}endCreation(){this._currentAngleElement&&(this.list.push(this._currentAngleElement),this._currentAngleElement.computeAngle(),this._currentAngleElement=null),this._clickCount=0}cancelCreation(){this._currentAngleElement&&(this._currentAngleElement.dispose(),this._currentAngleElement=null),this._clickCount=0}setupEvents(e){if(!this.world)throw new Error("No world selected for angle measurement!");if(this.world.isDisposing)return;if(!this.world.renderer)throw new Error("The given world doesn't have a renderer!");const s=this.world.renderer.three.domElement.parentElement;e?(s.addEventListener("click",this.create),s.addEventListener("mousemove",this.onMouseMove),window.addEventListener("keydown",this.onKeyDown)):(s.removeEventListener("click",this.create),s.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("keydown",this.onKeyDown))}};t(h,"uuid","622fb2c9-528c-4b0a-8a0e-6a1375f0a3aa");let g=h;const k=document.getElementById("container"),l=new y,z=l.get(x),r=z.create();r.scene=new D(l);r.renderer=new B(l,k);r.camera=new L(l);l.init();r.camera.controls.setLookAt(5,5,5,0,0,0);r.scene.setup();const F=l.get(G);F.create(r);const H=new E(3,3,3),W=new A({color:"#6528D7"}),p=new v(H,W);p.position.set(0,1.5,0);r.scene.three.add(p);r.meshes.add(p);const u=l.get(g);u.world=r;u.enabled=!0;k.ondblclick=()=>u.create();window.onkeydown=o=>{(o.code==="Delete"||o.code==="Backspace")&&u.delete()};const c=new P;c.showPanel(2);document.body.append(c.dom);c.dom.style.left="0px";r.renderer.onBeforeUpdate.add(()=>c.begin());r.renderer.onAfterUpdate.add(()=>c.end());
