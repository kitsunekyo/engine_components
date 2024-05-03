var q=Object.defineProperty;var tt=(t,e,n)=>e in t?q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var d=(t,e,n)=>(tt(t,typeof e!="symbol"?e+"":e,n),n);import{am as et,an as nt,ao as st,ap as it,E as J,y as Q,ac as z,z as ot,C as rt,f as at,g as ft,h as k,H as ct,aH as lt,aI as gt,aJ as dt}from"./unzipit.module-RGQJWpcx.js";import{S as mt}from"./stats.min-GTpOrGrX.js";import{g as ut}from"./lil-gui.module.min-Bc0DeA9g.js";import{C as pt,E as L,a as j,S as ht,b as wt}from"./simple-camera-DRqyjNwW.js";import{W as It,S as At}from"./index-Ct1Nh5V3.js";import{G as yt}from"./index-B5YESdpL.js";import{F as V}from"./index-CUXaJgkU.js";import{F as bt,b as Ft}from"./serializer-1xMmy3Qo.js";import{I as Ut,S as Bt,a as Et,C as xt}from"./ifc-metadata-reader-BLTgeUo2.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Ct=new Set([1123145078,574549367,1675464909,2059837836,3798115385,32440307,3125803723,3207858831,2740243338,2624227202,4240577450,3615266464,3724593414,220341763,477187591,1878645084,1300840506,3303107099,1607154358,1878645084,846575682,1351298697,2417041796,3049322572,3331915920,1416205885,776857604,3285139300,3958052878,2827736869,2732653382,673634403,3448662350,4142052618,2924175390,803316827,2556980723,1809719519,2205249479,807026263,3737207727,1660063152,2347385850,3940055652,2705031697,3732776249,2485617015,2611217952,1704287377,2937912522,2770003689,1281925730,1484403080,3448662350,4142052618,3800577675,4006246654,3590301190,1383045692,2775532180,2047409740,370225590,3593883385,2665983363,4124623270,812098782,3649129432,987898635,1105321065,3510044353,1635779807,2603310189,3406155212,1310608509,4261334040,2736907675,3649129432,1136057603,1260505505,4182860854,2713105998,2898889636,59481748,3749851601,3486308946,3150382593,1062206242,3264961684,15328376,1485152156,370225590,1981873012,2859738748,45288368,2614616156,2732653382,775493141,2147822146,2601014836,2629017746,1186437898,2367409068,1213902940,3632507154,3900360178,476780140,1472233963,2804161546,3008276851,738692330,374418227,315944413,3905492369,3570813810,2571569899,178912537,2294589976,1437953363,2133299955,572779678,3092502836,388784114,2624227202,1425443689,3057273783,2347385850,1682466193,2519244187,2839578677,3958567839,2513912981,2830218821,427810014]);class Dt{async export(e,n,s=!1,o=!0){const r={},a=new Set(e.GetIfcEntityList(n)),f=new Set([et,nt,st,it,J]);for(const i of f)a.add(i);for(const i of a){if(Ct.has(i))continue;const l=f.has(i)&&o,g=e.GetLineIDsWithType(n,i);for(const m of g){const c=e.GetLine(0,m,l,s);r[c.expressID]=c}}return r}}const F=class F extends pt{constructor(n){super(n);d(this,"onIfcStartedLoading",new L);d(this,"onSetup",new L);d(this,"onDisposed",new L);d(this,"settings",new Ut);d(this,"enabled",!0);d(this,"webIfc",new Q);d(this,"_material",new z);d(this,"_spatialTree",new Bt);d(this,"_metaData",new Et);d(this,"_fragmentInstances",new Map);d(this,"_civil",new xt);d(this,"_propertyExporter",new Dt);d(this,"_visitedFragments",new Map);d(this,"_materialT",new z({transparent:!0,opacity:.5}));this.components.add(F.uuid,this),this.settings.excludedCategories.add(ot)}dispose(){this.webIfc=null,this.onDisposed.trigger(F.uuid),this.onDisposed.reset()}async setup(n){this.settings={...this.settings,...n},this.settings.autoSetWasm&&await this.autoSetWasm(),this.onSetup.trigger()}async load(n,s=!0){const o=performance.now();this.onIfcStartedLoading.trigger(),await this.readIfcFile(n);const r=await this.getAllGeometries(),a=await this._propertyExporter.export(this.webIfc,0);r.setLocalProperties(a),this.cleanUp();const f=this.components.get(V);f.groups.set(r.uuid,r);for(const i of r.items)f.list.set(i.id,i),i.mesh.uuid=i.id,i.group=r;return f.onFragmentsLoaded.trigger(r),s&&f.coordinate([r]),console.log(`Streaming the IFC took ${performance.now()-o} ms!`),r}async readIfcFile(n){const{path:s,absolute:o,logLevel:r}=this.settings.wasm;return this.webIfc.SetWasmPath(s,o),await this.webIfc.Init(),r&&this.webIfc.SetLogLevel(r),this.webIfc.OpenModel(n,this.settings.webIfc)}async getAllGeometries(){this._spatialTree.setUp(this.webIfc);const n=this.webIfc.GetIfcEntityList(0),s=new bt,{FILE_NAME:o,FILE_DESCRIPTION:r}=ct;s.ifcMetadata={name:this._metaData.get(this.webIfc,o),description:this._metaData.get(this.webIfc,r),schema:this.webIfc.GetModelSchema(0)||"IFC2X3",maxExpressID:this.webIfc.GetMaxExpressID(0)};const a=[];for(const i of n){if(!this.webIfc.IsIfcElement(i)&&i!==J||this.settings.excludedCategories.has(i))continue;const l=this.webIfc.GetLineIDsWithType(0,i),g=l.size();for(let m=0;m<g;m++){const c=l.get(m);a.push(c);const E=this._spatialTree.itemsByFloor[c]||0;s.data.set(c,[[],[E,i]])}}this._spatialTree.cleanUp(),this.webIfc.StreamMeshes(0,a,i=>{this.getMesh(i,s)});for(const i of this._visitedFragments){const{index:l,fragment:g}=i[1];s.keyFragments.set(l,g.id)}for(const i of s.items){const l=this._fragmentInstances.get(i.id);if(!l)throw new Error("Fragment not found!");const g=[];for(const[m,c]of l)g.push(c);i.add(g)}const f=this.webIfc.GetCoordinationMatrix(0);return s.coordinationMatrix.fromArray(f),s.civilData=this._civil.read(this.webIfc),s}cleanUp(){this.webIfc=null,this.webIfc=new Q,this._visitedFragments.clear(),this._fragmentInstances.clear()}getMesh(n,s){const o=n.geometries.size(),r=n.expressID;for(let a=0;a<o;a++){const f=n.geometries.get(a),{x:i,y:l,z:g,w:m}=f.color,c=m!==1,{geometryExpressID:E}=f,C=`${E}-${c}`;if(!this._visitedFragments.has(C)){const I=this.getGeometry(this.webIfc,E),K=c?this._materialT:this._material,G=new Ft(I,K,1);s.add(G.mesh),s.items.push(G);const Z=this._visitedFragments.size;this._visitedFragments.set(C,{index:Z,fragment:G})}const T=new rt().setRGB(i,l,g,"srgb"),D=new at;D.fromArray(f.flatTransformation);const S=this._visitedFragments.get(C);if(S===void 0)throw new Error("Error getting geometry data for streaming!");const O=s.data.get(r);if(!O)throw new Error("Data not found!");O[0].push(S.index);const{fragment:v}=S;this._fragmentInstances.has(v.id)||this._fragmentInstances.set(v.id,new Map);const x=this._fragmentInstances.get(v.id);if(!x)throw new Error("Instances not found!");if(x.has(r)){const I=x.get(r);if(!I)throw new Error("Instance not found!");I.transforms.push(D),I.colors&&I.colors.push(T)}else x.set(r,{id:r,transforms:[D],colors:[T]})}}getGeometry(n,s){const o=n.GetGeometry(0,s),r=n.GetIndexArray(o.GetIndexData(),o.GetIndexDataSize()),a=n.GetVertexArray(o.GetVertexData(),o.GetVertexDataSize()),f=new Float32Array(a.length/2),i=new Float32Array(a.length/2);for(let c=0;c<a.length;c+=6)f[c/2]=a[c],f[c/2+1]=a[c+1],f[c/2+2]=a[c+2],i[c/2]=a[c+3],i[c/2+1]=a[c+4],i[c/2+2]=a[c+5];const l=new ft,g=new k(f,3),m=new k(i,3);return l.setAttribute("position",g),l.setAttribute("normal",m),l.setIndex(Array.from(r)),o.delete(),l}async autoSetWasm(){const n=await fetch(`https://unpkg.com/openbim-components@${j.release}/package.json`);if(!n.ok){console.warn("Couldn't get openbim-components package.json. Set wasm settings manually.");return}const s=await n.json();if(!("web-ifc"in s.peerDependencies))console.warn("Couldn't get web-ifc from peer dependencies in openbim-components. Set wasm settings manually.");else{const o=s.peerDependencies["web-ifc"];this.settings.wasm.path=`https://unpkg.com/web-ifc@${o}/`,this.settings.wasm.absolute=!0}}};d(F,"uuid","a659add7-1418-4771-a0d6-7d4d438e4624");let _=F;"stream"in Blob.prototype||Object.defineProperty(Blob.prototype,"stream",{value(){return new Response(this).body}}),"setBigUint64"in DataView.prototype||Object.defineProperty(DataView.prototype,"setBigUint64",{value(t,e,n){const s=Number(0xffffffffn&e),o=Number(e>>32n);this.setUint32(t+(n?0:4),s,n),this.setUint32(t+(n?4:0),o,n)}});var y=t=>new DataView(new ArrayBuffer(t)),u=t=>new Uint8Array(t.buffer||t),A=t=>new TextEncoder().encode(String(t)),w=t=>Math.min(4294967295,Number(t)),P=t=>Math.min(65535,Number(t));function St(t,e){if(e===void 0||e instanceof Date||(e=new Date(e)),t instanceof File)return{isFile:1,t:e||new Date(t.lastModified),i:t.stream()};if(t instanceof Response)return{isFile:1,t:e||new Date(t.headers.get("Last-Modified")||Date.now()),i:t.body};if(e===void 0)e=new Date;else if(isNaN(e))throw new Error("Invalid modification date.");if(t===void 0)return{isFile:0,t:e};if(typeof t=="string")return{isFile:1,t:e,i:A(t)};if(t instanceof Blob)return{isFile:1,t:e,i:t.stream()};if(t instanceof Uint8Array||t instanceof ReadableStream)return{isFile:1,t:e,i:t};if(t instanceof ArrayBuffer||ArrayBuffer.isView(t))return{isFile:1,t:e,i:u(t)};if(Symbol.asyncIterator in t)return{isFile:1,t:e,i:$(t)};throw new TypeError("Unsupported input format.")}function $(t){const e="next"in t?t:t[Symbol.asyncIterator]();return new ReadableStream({async pull(n){let s=0;for(;n.desiredSize>s;){const o=await e.next();if(!o.value){n.close();break}{const r=vt(o.value);n.enqueue(r),s+=r.byteLength}}}})}function vt(t){return typeof t=="string"?A(t):t instanceof Uint8Array?t:u(t)}function H(t,e,n){if(e===void 0||e instanceof Uint8Array||(e=A(e)),t instanceof File)return{o:M(e||A(t.name)),A:BigInt(t.size)};if(t instanceof Response){const s=t.headers.get("content-disposition"),o=s&&s.match(/;\s*filename\*?=["']?(.*?)["']?$/i),r=o&&o[1]||t.url&&new URL(t.url).pathname.split("/").findLast(Boolean),a=r&&decodeURIComponent(r),f=n||+t.headers.get("content-length");return{o:M(e||A(a)),A:BigInt(f)}}return e=M(e,t!==void 0||n!==void 0),typeof t=="string"?{o:e,A:BigInt(A(t).length)}:t instanceof Blob?{o:e,A:BigInt(t.size)}:t instanceof ArrayBuffer||ArrayBuffer.isView(t)?{o:e,A:BigInt(t.byteLength)}:{o:e,A:Gt(t,n)}}function Gt(t,e){return e>-1?BigInt(e):t?void 0:0n}function M(t,e=1){if(!t||t.every(n=>n===47))throw new Error("The file must have a name.");if(e)for(;t[t.length-1]===47;)t=t.subarray(0,-1);else t[t.length-1]!==47&&(t=new Uint8Array([...t,47]));return t}var Lt=new WebAssembly.Instance(new WebAssembly.Module(Uint8Array.from(atob("AGFzbQEAAAABCgJgAABgAn9/AXwDAwIAAQUDAQACBwkCAW0CAAFjAAEIAQAKlQECSQEDfwNAIAEhAEEAIQIDQCAAQQF2IABBAXFBoIbi7X5scyEAIAJBAWoiAkEIRw0ACyABQQJ0IAA2AgAgAUEBaiIBQYACRw0ACwtJAQF/IAFBf3MhAUGAgAQhAkGAgAQgAGohAANAIAFB/wFxIAItAABzQQJ0KAIAIAFBCHZzIQEgAkEBaiICIABJDQALIAFBf3O4Cw"),t=>t.charCodeAt(0)))),{c:Mt,m:_t}=Lt.exports,Rt=u(_t).subarray(65536);function W(t,e=0){for(const n of function*(s){for(;s.length>65536;)yield s.subarray(0,65536),s=s.subarray(65536);s.length&&(yield s)}(t))Rt.set(n),e=Mt(n.length,e);return e}function X(t,e,n=0){const s=t.getSeconds()>>1|t.getMinutes()<<5|t.getHours()<<11,o=t.getDate()|t.getMonth()+1<<5|t.getFullYear()-1980<<9;e.setUint16(n,s,1),e.setUint16(n+2,o,1)}function Nt(t){const e=y(30);return e.setUint32(0,1347093252),e.setUint32(4,754976768),X(t.t,e,10),e.setUint16(26,t.o.length,1),u(e)}async function*Tt(t){let{i:e}=t;if("then"in e&&(e=await e),e instanceof Uint8Array)yield e,t.u=W(e,0),t.A=BigInt(e.length);else{t.A=0n;const n=e.getReader();for(;;){const{value:s,done:o}=await n.read();if(o)break;t.u=W(s,t.u),t.A+=BigInt(s.length),yield s}}}function Ot(t,e){const n=y(16+(e?8:0));return n.setUint32(0,1347094280),n.setUint32(4,t.isFile?t.u:0,1),e?(n.setBigUint64(8,t.A,1),n.setBigUint64(16,t.A,1)):(n.setUint32(8,w(t.A),1),n.setUint32(12,w(t.A),1)),u(n)}function Qt(t,e,n=0){const s=y(46);return s.setUint32(0,1347092738),s.setUint32(4,755182848),s.setUint16(8,2048),X(t.t,s,12),s.setUint32(16,t.isFile?t.u:0,1),s.setUint32(20,w(t.A),1),s.setUint32(24,w(t.A),1),s.setUint16(28,t.o.length,1),s.setUint16(30,n,1),s.setUint16(40,t.isFile?33204:16893,1),s.setUint32(42,w(e),1),u(s)}function zt(t,e,n){const s=y(n);return s.setUint16(0,1,1),s.setUint16(2,n-4,1),16&n&&(s.setBigUint64(4,t.A,1),s.setBigUint64(12,t.A,1)),s.setBigUint64(n-8,e,1),u(s)}function Y(t){return t instanceof File||t instanceof Response?[[t],[t]]:[[t.input,t.name,t.size],[t.input,t.lastModified]]}var kt=t=>function(e){let n=BigInt(22),s=0n,o=0;for(const r of e){if(!r.o)throw new Error("Every file must have a non-empty name.");if(r.A===void 0)throw new Error(`Missing size for file "${new TextDecoder().decode(r.o)}".`);const a=r.A>=0xffffffffn,f=s>=0xffffffffn;s+=BigInt(46+r.o.length+(a&&8))+r.A,n+=BigInt(r.o.length+46+(12*f|28*a)),o||(o=a)}return(o||s>=0xffffffffn)&&(n+=BigInt(76)),n+s}(function*(e){for(const n of e)yield H(...Y(n)[0])}(t));function Pt(t,e={}){const n={"Content-Type":"application/zip","Content-Disposition":"attachment"};return(typeof e.length=="bigint"||Number.isInteger(e.length))&&e.length>0&&(n["Content-Length"]=String(e.length)),e.metadata&&(n["Content-Length"]=String(kt(e.metadata))),new Response(Wt(t),{headers:n})}function Wt(t){return $(async function*(e){const n=[];let s=0n,o=0n,r=0;for await(const i of e){yield Nt(i),yield i.o,i.isFile&&(yield*Tt(i));const l=i.A>=0xffffffffn,g=12*(s>=0xffffffffn)|28*l;yield Ot(i,l),n.push(Qt(i,s,g)),n.push(i.o),g&&n.push(zt(i,s,g)),l&&(s+=8n),o++,s+=BigInt(46+i.o.length)+i.A,r||(r=l)}let a=0n;for(const i of n)yield i,a+=BigInt(i.length);if(r||s>=0xffffffffn){const i=y(76);i.setUint32(0,1347094022),i.setBigUint64(4,BigInt(44),1),i.setUint32(12,755182848),i.setBigUint64(24,o,1),i.setBigUint64(32,o,1),i.setBigUint64(40,a,1),i.setBigUint64(48,s,1),i.setUint32(56,1347094023),i.setBigUint64(64,s+a,1),i.setUint32(72,1,1),yield u(i)}const f=y(22);f.setUint32(0,1347093766),f.setUint16(8,P(o),1),f.setUint16(10,P(o),1),f.setUint32(12,w(a),1),f.setUint32(16,w(s),1),yield u(f)}(async function*(e){for await(const n of e){const[s,o]=Y(n);yield Object.assign(St(...o),H(...s))}}(t)))}const Jt=document.getElementById("container"),h=new j,jt=h.get(It),p=jt.create();p.scene=new ht(h);p.renderer=new At(h,Jt);p.camera=new wt(h);h.init();p.camera.controls.setLookAt(12,6,8,0,0,-10);p.scene.setup();const Vt=h.get(yt);Vt.create(p);const b=h.get(V),U=h.get(_);await U.setup();const $t=[lt,gt,dt];for(const t of $t)U.settings.excludedCategories.add(t);U.settings.webIfc.COORDINATE_TO_ORIGIN=!0;U.settings.webIfc.OPTIMIZE_PROFILES=!0;async function Ht(){const e=await(await fetch("../../../../../resources/small.ifc")).arrayBuffer(),n=new Uint8Array(e),s=await U.load(n);s.name="example",p.scene.three.add(s)}function Xt(t){const e=document.createElement("a");e.href=URL.createObjectURL(t),e.download=t.name,document.body.appendChild(e),e.click(),e.remove()}async function Yt(){if(!b.groups.size)return;const t=Array.from(b.groups.values())[0],e=b.export(t),n=new Blob([e]),s=new File([n],"small.frag"),o=[];o.push(s);const r=t.getLocalProperties();r&&o.push(new File([JSON.stringify(r)],"small.json"));const a=await Pt(o).blob(),f=new File([a],"example");Xt(f)}function Kt(){b.dispose()}const B=new mt;B.showPanel(2);document.body.append(B.dom);B.dom.style.left="0px";p.renderer.onBeforeUpdate.add(()=>B.begin());p.renderer.onAfterUpdate.add(()=>B.end());const R={loadFragments:()=>Ht(),exportFragments:()=>Yt(),disposeFragments:()=>Kt()},N=new ut;N.add(R,"loadFragments").name("Import fragments");N.add(R,"exportFragments").name("Export fragments");N.add(R,"disposeFragments").name("Dispose fragments");b.onFragmentsLoaded.add(t=>{console.log(t)});