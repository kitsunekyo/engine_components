import"./web-ifc-api-BffFJDIm.js";import{p as h,C as g,i as f,o as w,a as u,u as v}from"./index-DTZynfbV.js";import{p as y}from"./index-DyM33b1I.js";import{Z as C,C as b}from"./index-CBtjarMM.js";import{S as A}from"./stats.min-GTpOrGrX.js";import{C as B}from"./index-C99EOg5B.js";import{R as S}from"./renderer-with-2d-Cgm5UgCK.js";import"./import-wrapper-prod-BjFaIjiR.js";import"./Line2-Dv07buwS.js";import"./mark-B4GNnRgZ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DwmrAZ32.js";y.init();C.init();const l=document.getElementById("container"),o=new h,D=o.get(g),e=D.create();e.scene=new f(o);e.renderer=new S(o,l);e.camera=new w(o);o.init();e.scene.setup();e.camera.controls.setLookAt(5,5,5,0,0,0);l.appendChild(e.renderer.three2D.domElement);const E=o.get(u);E.create(e);const P=o.get(v),x=await fetch("https://thatopen.github.io/engine_components/resources/road.frag"),N=await x.arrayBuffer(),U=new Uint8Array(N),i=P.load(U);e.scene.three.add(i);const r=new b(o);r.world=e;r.draw(i);r.highlighter.hoverCurve.material.color.set(1,1,1);const{material:a}=r.highlighter.hoverPoints;if(Array.isArray(a)){const t=a[0];"color"in t&&t.color.set(1,1,1)}else"color"in a&&a.color.set(1,1,1);const s=document.getElementById("scene-2d"),c=new B(o);s.components=o;if(!s.world)throw new Error("World not found!");c.world=s.world;await c.draw(i);c.onHighlight.add(({mesh:t})=>{r.highlighter.select(t);const p=t.curve.index,d=t.curve.alignment.absolute[p];d.mesh.geometry.computeBoundingSphere();const m=d.mesh.geometry.boundingSphere;m&&e.camera.controls.fitToSphere(m,!0)});const n=new A;n.showPanel(2);document.body.append(n.dom);n.dom.style.left="0px";e.renderer.onBeforeUpdate.add(()=>n.begin());e.renderer.onAfterUpdate.add(()=>n.end());
