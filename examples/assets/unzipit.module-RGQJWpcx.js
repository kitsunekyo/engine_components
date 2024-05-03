(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))t(c);new MutationObserver(c=>{for(const w of c)if(w.type==="childList")for(const O of w.addedNodes)O.tagName==="LINK"&&O.rel==="modulepreload"&&t(O)}).observe(document,{childList:!0,subtree:!0});function n(c){const w={};return c.integrity&&(w.integrity=c.integrity),c.referrerPolicy&&(w.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?w.credentials="include":c.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function t(c){if(c.ep)return;c.ep=!0;const w=n(c);fetch(c.href,w)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bV="160",Lne={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},wz=0,O_=1,Ez=2,Bj=1,Tz=2,F6=3,ip=0,D3=1,eR=2,bN=0,y9=1,g_=2,P_=3,C_=4,Rz=5,V8=100,pz=101,mz=102,b_=103,M_=104,Dz=200,Nz=201,Az=202,Sz=203,qG=204,KG=205,Lz=206,Oz=207,gz=208,Pz=209,Cz=210,bz=211,Mz=212,xz=213,Hz=214,Bz=0,Uz=1,Fz=2,qU=3,Gz=4,Vz=5,_z=6,Wz=7,MV=0,jz=1,Yz=2,MN=0,zz=1,kz=2,qz=3,Kz=4,Qz=5,$z=6,Uj=300,m9=301,D9=302,QG=303,$G=304,tF=306,ZG=1e3,lE=1001,JG=1002,zf=1003,x_=1004,eG=1005,f2=1006,Zz=1007,FH=1008,xN=1009,Jz=1010,Xz=1011,xV=1012,Fj=1013,SN=1014,LN=1015,GH=1016,Gj=1017,Vj=1018,j8=1020,vz=1021,sE=1023,ek=1024,tk=1025,Y8=1026,N9=1027,nk=1028,_j=1029,lk=1030,Wj=1031,jj=1033,tG=33776,nG=33777,lG=33778,sG=33779,H_=35840,B_=35841,U_=35842,F_=35843,Yj=36196,G_=37492,V_=37496,__=37808,W_=37809,j_=37810,Y_=37811,z_=37812,k_=37813,q_=37814,K_=37815,Q_=37816,$_=37817,Z_=37818,J_=37819,X_=37820,v_=37821,rG=36492,eW=36494,tW=36495,sk=36283,nW=36284,lW=36285,sW=36286,zj=3e3,z8=3001,rk=3200,uk=3201,HV=0,ak=1,I2="",kf="srgb",Q7="srgb-linear",BV="display-p3",nF="display-p3-linear",KU="linear",dr="srgb",QU="rec709",$U="p3",IP=7680,rW=519,ik=512,ok=513,ck=514,kj=515,hk=516,fk=517,Ik=518,dk=519,XG=35044,One=35048,uW="300 es",vG=1035,s7=2e3,ZU=2001;class F9{addEventListener(l,n){this._listeners===void 0&&(this._listeners={});const t=this._listeners;t[l]===void 0&&(t[l]=[]),t[l].indexOf(n)===-1&&t[l].push(n)}hasEventListener(l,n){if(this._listeners===void 0)return!1;const t=this._listeners;return t[l]!==void 0&&t[l].indexOf(n)!==-1}removeEventListener(l,n){if(this._listeners===void 0)return;const c=this._listeners[l];if(c!==void 0){const w=c.indexOf(n);w!==-1&&c.splice(w,1)}}dispatchEvent(l){if(this._listeners===void 0)return;const t=this._listeners[l.type];if(t!==void 0){l.target=this;const c=t.slice(0);for(let w=0,O=c.length;w<O;w++)c[w].call(this,l);l.target=null}}}const _I=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let aW=1234567;const w9=Math.PI/180,VH=180/Math.PI;function M7(){const e=Math.random()*4294967295|0,l=Math.random()*4294967295|0,n=Math.random()*4294967295|0,t=Math.random()*4294967295|0;return(_I[e&255]+_I[e>>8&255]+_I[e>>16&255]+_I[e>>24&255]+"-"+_I[l&255]+_I[l>>8&255]+"-"+_I[l>>16&15|64]+_I[l>>24&255]+"-"+_I[n&63|128]+_I[n>>8&255]+"-"+_I[n>>16&255]+_I[n>>24&255]+_I[t&255]+_I[t>>8&255]+_I[t>>16&255]+_I[t>>24&255]).toLowerCase()}function qf(e,l,n){return Math.max(l,Math.min(n,e))}function UV(e,l){return(e%l+l)%l}function yk(e,l,n,t,c){return t+(e-l)*(c-t)/(n-l)}function wk(e,l,n){return e!==l?(n-e)/(l-e):0}function CH(e,l,n){return(1-n)*e+n*l}function Ek(e,l,n,t){return CH(e,l,1-Math.exp(-n*t))}function Tk(e,l=1){return l-Math.abs(UV(e,l*2)-l)}function Rk(e,l,n){return e<=l?0:e>=n?1:(e=(e-l)/(n-l),e*e*(3-2*e))}function pk(e,l,n){return e<=l?0:e>=n?1:(e=(e-l)/(n-l),e*e*e*(e*(e*6-15)+10))}function mk(e,l){return e+Math.floor(Math.random()*(l-e+1))}function Dk(e,l){return e+Math.random()*(l-e)}function Nk(e){return e*(.5-Math.random())}function Ak(e){e!==void 0&&(aW=e);let l=aW+=1831565813;return l=Math.imul(l^l>>>15,l|1),l^=l+Math.imul(l^l>>>7,l|61),((l^l>>>14)>>>0)/4294967296}function Sk(e){return e*w9}function Lk(e){return e*VH}function eV(e){return(e&e-1)===0&&e!==0}function Ok(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function JU(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function gk(e,l,n,t,c){const w=Math.cos,O=Math.sin,M=w(n/2),G=O(n/2),Y=w((l+t)/2),Z=O((l+t)/2),ee=w((l-t)/2),te=O((l-t)/2),v=w((t-l)/2),he=O((t-l)/2);switch(c){case"XYX":e.set(M*Z,G*ee,G*te,M*Y);break;case"YZY":e.set(G*te,M*Z,G*ee,M*Y);break;case"ZXZ":e.set(G*ee,G*te,M*Z,M*Y);break;case"XZX":e.set(M*Z,G*he,G*v,M*Y);break;case"YXY":e.set(G*v,M*Z,G*he,M*Y);break;case"ZYZ":e.set(G*he,G*v,M*Z,M*Y);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+c)}}function tR(e,l){switch(l.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function zs(e,l){switch(l.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}const gne={DEG2RAD:w9,RAD2DEG:VH,generateUUID:M7,clamp:qf,euclideanModulo:UV,mapLinear:yk,inverseLerp:wk,lerp:CH,damp:Ek,pingpong:Tk,smoothstep:Rk,smootherstep:pk,randInt:mk,randFloat:Dk,randFloatSpread:Nk,seededRandom:Ak,degToRad:Sk,radToDeg:Lk,isPowerOfTwo:eV,ceilPowerOfTwo:Ok,floorPowerOfTwo:JU,setQuaternionFromProperEuler:gk,normalize:zs,denormalize:tR};class Dl{constructor(l=0,n=0){Dl.prototype.isVector2=!0,this.x=l,this.y=n}get width(){return this.x}set width(l){this.x=l}get height(){return this.y}set height(l){this.y=l}set(l,n){return this.x=l,this.y=n,this}setScalar(l){return this.x=l,this.y=l,this}setX(l){return this.x=l,this}setY(l){return this.y=l,this}setComponent(l,n){switch(l){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+l)}return this}getComponent(l){switch(l){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+l)}}clone(){return new this.constructor(this.x,this.y)}copy(l){return this.x=l.x,this.y=l.y,this}add(l){return this.x+=l.x,this.y+=l.y,this}addScalar(l){return this.x+=l,this.y+=l,this}addVectors(l,n){return this.x=l.x+n.x,this.y=l.y+n.y,this}addScaledVector(l,n){return this.x+=l.x*n,this.y+=l.y*n,this}sub(l){return this.x-=l.x,this.y-=l.y,this}subScalar(l){return this.x-=l,this.y-=l,this}subVectors(l,n){return this.x=l.x-n.x,this.y=l.y-n.y,this}multiply(l){return this.x*=l.x,this.y*=l.y,this}multiplyScalar(l){return this.x*=l,this.y*=l,this}divide(l){return this.x/=l.x,this.y/=l.y,this}divideScalar(l){return this.multiplyScalar(1/l)}applyMatrix3(l){const n=this.x,t=this.y,c=l.elements;return this.x=c[0]*n+c[3]*t+c[6],this.y=c[1]*n+c[4]*t+c[7],this}min(l){return this.x=Math.min(this.x,l.x),this.y=Math.min(this.y,l.y),this}max(l){return this.x=Math.max(this.x,l.x),this.y=Math.max(this.y,l.y),this}clamp(l,n){return this.x=Math.max(l.x,Math.min(n.x,this.x)),this.y=Math.max(l.y,Math.min(n.y,this.y)),this}clampScalar(l,n){return this.x=Math.max(l,Math.min(n,this.x)),this.y=Math.max(l,Math.min(n,this.y)),this}clampLength(l,n){const t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(l,Math.min(n,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(l){return this.x*l.x+this.y*l.y}cross(l){return this.x*l.y-this.y*l.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(l){const n=Math.sqrt(this.lengthSq()*l.lengthSq());if(n===0)return Math.PI/2;const t=this.dot(l)/n;return Math.acos(qf(t,-1,1))}distanceTo(l){return Math.sqrt(this.distanceToSquared(l))}distanceToSquared(l){const n=this.x-l.x,t=this.y-l.y;return n*n+t*t}manhattanDistanceTo(l){return Math.abs(this.x-l.x)+Math.abs(this.y-l.y)}setLength(l){return this.normalize().multiplyScalar(l)}lerp(l,n){return this.x+=(l.x-this.x)*n,this.y+=(l.y-this.y)*n,this}lerpVectors(l,n,t){return this.x=l.x+(n.x-l.x)*t,this.y=l.y+(n.y-l.y)*t,this}equals(l){return l.x===this.x&&l.y===this.y}fromArray(l,n=0){return this.x=l[n],this.y=l[n+1],this}toArray(l=[],n=0){return l[n]=this.x,l[n+1]=this.y,l}fromBufferAttribute(l,n){return this.x=l.getX(n),this.y=l.getY(n),this}rotateAround(l,n){const t=Math.cos(n),c=Math.sin(n),w=this.x-l.x,O=this.y-l.y;return this.x=w*t-O*c+l.x,this.y=w*c+O*t+l.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gl{constructor(l,n,t,c,w,O,M,G,Y){Gl.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],l!==void 0&&this.set(l,n,t,c,w,O,M,G,Y)}set(l,n,t,c,w,O,M,G,Y){const Z=this.elements;return Z[0]=l,Z[1]=c,Z[2]=M,Z[3]=n,Z[4]=w,Z[5]=G,Z[6]=t,Z[7]=O,Z[8]=Y,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(l){const n=this.elements,t=l.elements;return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],this}extractBasis(l,n,t){return l.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),t.setFromMatrix3Column(this,2),this}setFromMatrix4(l){const n=l.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(l){return this.multiplyMatrices(this,l)}premultiply(l){return this.multiplyMatrices(l,this)}multiplyMatrices(l,n){const t=l.elements,c=n.elements,w=this.elements,O=t[0],M=t[3],G=t[6],Y=t[1],Z=t[4],ee=t[7],te=t[2],v=t[5],he=t[8],Te=c[0],oe=c[3],ie=c[6],me=c[1],fe=c[4],Ne=c[7],We=c[2],xe=c[5],je=c[8];return w[0]=O*Te+M*me+G*We,w[3]=O*oe+M*fe+G*xe,w[6]=O*ie+M*Ne+G*je,w[1]=Y*Te+Z*me+ee*We,w[4]=Y*oe+Z*fe+ee*xe,w[7]=Y*ie+Z*Ne+ee*je,w[2]=te*Te+v*me+he*We,w[5]=te*oe+v*fe+he*xe,w[8]=te*ie+v*Ne+he*je,this}multiplyScalar(l){const n=this.elements;return n[0]*=l,n[3]*=l,n[6]*=l,n[1]*=l,n[4]*=l,n[7]*=l,n[2]*=l,n[5]*=l,n[8]*=l,this}determinant(){const l=this.elements,n=l[0],t=l[1],c=l[2],w=l[3],O=l[4],M=l[5],G=l[6],Y=l[7],Z=l[8];return n*O*Z-n*M*Y-t*w*Z+t*M*G+c*w*Y-c*O*G}invert(){const l=this.elements,n=l[0],t=l[1],c=l[2],w=l[3],O=l[4],M=l[5],G=l[6],Y=l[7],Z=l[8],ee=Z*O-M*Y,te=M*G-Z*w,v=Y*w-O*G,he=n*ee+t*te+c*v;if(he===0)return this.set(0,0,0,0,0,0,0,0,0);const Te=1/he;return l[0]=ee*Te,l[1]=(c*Y-Z*t)*Te,l[2]=(M*t-c*O)*Te,l[3]=te*Te,l[4]=(Z*n-c*G)*Te,l[5]=(c*w-M*n)*Te,l[6]=v*Te,l[7]=(t*G-Y*n)*Te,l[8]=(O*n-t*w)*Te,this}transpose(){let l;const n=this.elements;return l=n[1],n[1]=n[3],n[3]=l,l=n[2],n[2]=n[6],n[6]=l,l=n[5],n[5]=n[7],n[7]=l,this}getNormalMatrix(l){return this.setFromMatrix4(l).invert().transpose()}transposeIntoArray(l){const n=this.elements;return l[0]=n[0],l[1]=n[3],l[2]=n[6],l[3]=n[1],l[4]=n[4],l[5]=n[7],l[6]=n[2],l[7]=n[5],l[8]=n[8],this}setUvTransform(l,n,t,c,w,O,M){const G=Math.cos(w),Y=Math.sin(w);return this.set(t*G,t*Y,-t*(G*O+Y*M)+O+l,-c*Y,c*G,-c*(-Y*O+G*M)+M+n,0,0,1),this}scale(l,n){return this.premultiply(uG.makeScale(l,n)),this}rotate(l){return this.premultiply(uG.makeRotation(-l)),this}translate(l,n){return this.premultiply(uG.makeTranslation(l,n)),this}makeTranslation(l,n){return l.isVector2?this.set(1,0,l.x,0,1,l.y,0,0,1):this.set(1,0,l,0,1,n,0,0,1),this}makeRotation(l){const n=Math.cos(l),t=Math.sin(l);return this.set(n,-t,0,t,n,0,0,0,1),this}makeScale(l,n){return this.set(l,0,0,0,n,0,0,0,1),this}equals(l){const n=this.elements,t=l.elements;for(let c=0;c<9;c++)if(n[c]!==t[c])return!1;return!0}fromArray(l,n=0){for(let t=0;t<9;t++)this.elements[t]=l[t+n];return this}toArray(l=[],n=0){const t=this.elements;return l[n]=t[0],l[n+1]=t[1],l[n+2]=t[2],l[n+3]=t[3],l[n+4]=t[4],l[n+5]=t[5],l[n+6]=t[6],l[n+7]=t[7],l[n+8]=t[8],l}clone(){return new this.constructor().fromArray(this.elements)}}const uG=new Gl;function qj(e){for(let l=e.length-1;l>=0;--l)if(e[l]>=65535)return!0;return!1}function XU(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Pk(){const e=XU("canvas");return e.style.display="block",e}const iW={};function bH(e){e in iW||(iW[e]=!0,console.warn(e))}const oW=new Gl().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),cW=new Gl().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),pB={[Q7]:{transfer:KU,primaries:QU,toReference:e=>e,fromReference:e=>e},[kf]:{transfer:dr,primaries:QU,toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[nF]:{transfer:KU,primaries:$U,toReference:e=>e.applyMatrix3(cW),fromReference:e=>e.applyMatrix3(oW)},[BV]:{transfer:dr,primaries:$U,toReference:e=>e.convertSRGBToLinear().applyMatrix3(cW),fromReference:e=>e.applyMatrix3(oW).convertLinearToSRGB()}},Ck=new Set([Q7,nF]),ks={enabled:!0,_workingColorSpace:Q7,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!Ck.has(e))throw new Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,l,n){if(this.enabled===!1||l===n||!l||!n)return e;const t=pB[l].toReference,c=pB[n].fromReference;return c(t(e))},fromWorkingColorSpace:function(e,l){return this.convert(e,this._workingColorSpace,l)},toWorkingColorSpace:function(e,l){return this.convert(e,l,this._workingColorSpace)},getPrimaries:function(e){return pB[e].primaries},getTransfer:function(e){return e===I2?KU:pB[e].transfer}};function E9(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function aG(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let dP;class Kj{static getDataURL(l){if(/^data:/i.test(l.src)||typeof HTMLCanvasElement>"u")return l.src;let n;if(l instanceof HTMLCanvasElement)n=l;else{dP===void 0&&(dP=XU("canvas")),dP.width=l.width,dP.height=l.height;const t=dP.getContext("2d");l instanceof ImageData?t.putImageData(l,0,0):t.drawImage(l,0,0,l.width,l.height),n=dP}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",l),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(l){if(typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&l instanceof ImageBitmap){const n=XU("canvas");n.width=l.width,n.height=l.height;const t=n.getContext("2d");t.drawImage(l,0,0,l.width,l.height);const c=t.getImageData(0,0,l.width,l.height),w=c.data;for(let O=0;O<w.length;O++)w[O]=E9(w[O]/255)*255;return t.putImageData(c,0,0),n}else if(l.data){const n=l.data.slice(0);for(let t=0;t<n.length;t++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[t]=Math.floor(E9(n[t]/255)*255):n[t]=E9(n[t]);return{data:n,width:l.width,height:l.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),l}}let bk=0;class Qj{constructor(l=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bk++}),this.uuid=M7(),this.data=l,this.version=0}set needsUpdate(l){l===!0&&this.version++}toJSON(l){const n=l===void 0||typeof l=="string";if(!n&&l.images[this.uuid]!==void 0)return l.images[this.uuid];const t={uuid:this.uuid,url:""},c=this.data;if(c!==null){let w;if(Array.isArray(c)){w=[];for(let O=0,M=c.length;O<M;O++)c[O].isDataTexture?w.push(iG(c[O].image)):w.push(iG(c[O]))}else w=iG(c);t.url=w}return n||(l.images[this.uuid]=t),t}}function iG(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Kj.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mk=0;class R0 extends F9{constructor(l=R0.DEFAULT_IMAGE,n=R0.DEFAULT_MAPPING,t=lE,c=lE,w=f2,O=FH,M=sE,G=xN,Y=R0.DEFAULT_ANISOTROPY,Z=I2){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mk++}),this.uuid=M7(),this.name="",this.source=new Qj(l),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=t,this.wrapT=c,this.magFilter=w,this.minFilter=O,this.anisotropy=Y,this.format=M,this.internalFormat=null,this.type=G,this.offset=new Dl(0,0),this.repeat=new Dl(1,1),this.center=new Dl(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gl,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof Z=="string"?this.colorSpace=Z:(bH("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=Z===z8?kf:I2),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(l=null){this.source.data=l}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(l){return this.name=l.name,this.source=l.source,this.mipmaps=l.mipmaps.slice(0),this.mapping=l.mapping,this.channel=l.channel,this.wrapS=l.wrapS,this.wrapT=l.wrapT,this.magFilter=l.magFilter,this.minFilter=l.minFilter,this.anisotropy=l.anisotropy,this.format=l.format,this.internalFormat=l.internalFormat,this.type=l.type,this.offset.copy(l.offset),this.repeat.copy(l.repeat),this.center.copy(l.center),this.rotation=l.rotation,this.matrixAutoUpdate=l.matrixAutoUpdate,this.matrix.copy(l.matrix),this.generateMipmaps=l.generateMipmaps,this.premultiplyAlpha=l.premultiplyAlpha,this.flipY=l.flipY,this.unpackAlignment=l.unpackAlignment,this.colorSpace=l.colorSpace,this.userData=JSON.parse(JSON.stringify(l.userData)),this.needsUpdate=!0,this}toJSON(l){const n=l===void 0||typeof l=="string";if(!n&&l.textures[this.uuid]!==void 0)return l.textures[this.uuid];const t={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(l).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(t.userData=this.userData),n||(l.textures[this.uuid]=t),t}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(l){if(this.mapping!==Uj)return l;if(l.applyMatrix3(this.matrix),l.x<0||l.x>1)switch(this.wrapS){case ZG:l.x=l.x-Math.floor(l.x);break;case lE:l.x=l.x<0?0:1;break;case JG:Math.abs(Math.floor(l.x)%2)===1?l.x=Math.ceil(l.x)-l.x:l.x=l.x-Math.floor(l.x);break}if(l.y<0||l.y>1)switch(this.wrapT){case ZG:l.y=l.y-Math.floor(l.y);break;case lE:l.y=l.y<0?0:1;break;case JG:Math.abs(Math.floor(l.y)%2)===1?l.y=Math.ceil(l.y)-l.y:l.y=l.y-Math.floor(l.y);break}return this.flipY&&(l.y=1-l.y),l}set needsUpdate(l){l===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return bH("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===kf?z8:zj}set encoding(l){bH("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=l===z8?kf:I2}}R0.DEFAULT_IMAGE=null;R0.DEFAULT_MAPPING=Uj;R0.DEFAULT_ANISOTROPY=1;class Hc{constructor(l=0,n=0,t=0,c=1){Hc.prototype.isVector4=!0,this.x=l,this.y=n,this.z=t,this.w=c}get width(){return this.z}set width(l){this.z=l}get height(){return this.w}set height(l){this.w=l}set(l,n,t,c){return this.x=l,this.y=n,this.z=t,this.w=c,this}setScalar(l){return this.x=l,this.y=l,this.z=l,this.w=l,this}setX(l){return this.x=l,this}setY(l){return this.y=l,this}setZ(l){return this.z=l,this}setW(l){return this.w=l,this}setComponent(l,n){switch(l){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+l)}return this}getComponent(l){switch(l){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+l)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(l){return this.x=l.x,this.y=l.y,this.z=l.z,this.w=l.w!==void 0?l.w:1,this}add(l){return this.x+=l.x,this.y+=l.y,this.z+=l.z,this.w+=l.w,this}addScalar(l){return this.x+=l,this.y+=l,this.z+=l,this.w+=l,this}addVectors(l,n){return this.x=l.x+n.x,this.y=l.y+n.y,this.z=l.z+n.z,this.w=l.w+n.w,this}addScaledVector(l,n){return this.x+=l.x*n,this.y+=l.y*n,this.z+=l.z*n,this.w+=l.w*n,this}sub(l){return this.x-=l.x,this.y-=l.y,this.z-=l.z,this.w-=l.w,this}subScalar(l){return this.x-=l,this.y-=l,this.z-=l,this.w-=l,this}subVectors(l,n){return this.x=l.x-n.x,this.y=l.y-n.y,this.z=l.z-n.z,this.w=l.w-n.w,this}multiply(l){return this.x*=l.x,this.y*=l.y,this.z*=l.z,this.w*=l.w,this}multiplyScalar(l){return this.x*=l,this.y*=l,this.z*=l,this.w*=l,this}applyMatrix4(l){const n=this.x,t=this.y,c=this.z,w=this.w,O=l.elements;return this.x=O[0]*n+O[4]*t+O[8]*c+O[12]*w,this.y=O[1]*n+O[5]*t+O[9]*c+O[13]*w,this.z=O[2]*n+O[6]*t+O[10]*c+O[14]*w,this.w=O[3]*n+O[7]*t+O[11]*c+O[15]*w,this}divideScalar(l){return this.multiplyScalar(1/l)}setAxisAngleFromQuaternion(l){this.w=2*Math.acos(l.w);const n=Math.sqrt(1-l.w*l.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=l.x/n,this.y=l.y/n,this.z=l.z/n),this}setAxisAngleFromRotationMatrix(l){let n,t,c,w;const G=l.elements,Y=G[0],Z=G[4],ee=G[8],te=G[1],v=G[5],he=G[9],Te=G[2],oe=G[6],ie=G[10];if(Math.abs(Z-te)<.01&&Math.abs(ee-Te)<.01&&Math.abs(he-oe)<.01){if(Math.abs(Z+te)<.1&&Math.abs(ee+Te)<.1&&Math.abs(he+oe)<.1&&Math.abs(Y+v+ie-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const fe=(Y+1)/2,Ne=(v+1)/2,We=(ie+1)/2,xe=(Z+te)/4,je=(ee+Te)/4,et=(he+oe)/4;return fe>Ne&&fe>We?fe<.01?(t=0,c=.707106781,w=.707106781):(t=Math.sqrt(fe),c=xe/t,w=je/t):Ne>We?Ne<.01?(t=.707106781,c=0,w=.707106781):(c=Math.sqrt(Ne),t=xe/c,w=et/c):We<.01?(t=.707106781,c=.707106781,w=0):(w=Math.sqrt(We),t=je/w,c=et/w),this.set(t,c,w,n),this}let me=Math.sqrt((oe-he)*(oe-he)+(ee-Te)*(ee-Te)+(te-Z)*(te-Z));return Math.abs(me)<.001&&(me=1),this.x=(oe-he)/me,this.y=(ee-Te)/me,this.z=(te-Z)/me,this.w=Math.acos((Y+v+ie-1)/2),this}min(l){return this.x=Math.min(this.x,l.x),this.y=Math.min(this.y,l.y),this.z=Math.min(this.z,l.z),this.w=Math.min(this.w,l.w),this}max(l){return this.x=Math.max(this.x,l.x),this.y=Math.max(this.y,l.y),this.z=Math.max(this.z,l.z),this.w=Math.max(this.w,l.w),this}clamp(l,n){return this.x=Math.max(l.x,Math.min(n.x,this.x)),this.y=Math.max(l.y,Math.min(n.y,this.y)),this.z=Math.max(l.z,Math.min(n.z,this.z)),this.w=Math.max(l.w,Math.min(n.w,this.w)),this}clampScalar(l,n){return this.x=Math.max(l,Math.min(n,this.x)),this.y=Math.max(l,Math.min(n,this.y)),this.z=Math.max(l,Math.min(n,this.z)),this.w=Math.max(l,Math.min(n,this.w)),this}clampLength(l,n){const t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(l,Math.min(n,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(l){return this.x*l.x+this.y*l.y+this.z*l.z+this.w*l.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(l){return this.normalize().multiplyScalar(l)}lerp(l,n){return this.x+=(l.x-this.x)*n,this.y+=(l.y-this.y)*n,this.z+=(l.z-this.z)*n,this.w+=(l.w-this.w)*n,this}lerpVectors(l,n,t){return this.x=l.x+(n.x-l.x)*t,this.y=l.y+(n.y-l.y)*t,this.z=l.z+(n.z-l.z)*t,this.w=l.w+(n.w-l.w)*t,this}equals(l){return l.x===this.x&&l.y===this.y&&l.z===this.z&&l.w===this.w}fromArray(l,n=0){return this.x=l[n],this.y=l[n+1],this.z=l[n+2],this.w=l[n+3],this}toArray(l=[],n=0){return l[n]=this.x,l[n+1]=this.y,l[n+2]=this.z,l[n+3]=this.w,l}fromBufferAttribute(l,n){return this.x=l.getX(n),this.y=l.getY(n),this.z=l.getZ(n),this.w=l.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xk extends F9{constructor(l=1,n=1,t={}){super(),this.isRenderTarget=!0,this.width=l,this.height=n,this.depth=1,this.scissor=new Hc(0,0,l,n),this.scissorTest=!1,this.viewport=new Hc(0,0,l,n);const c={width:l,height:n,depth:1};t.encoding!==void 0&&(bH("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===z8?kf:I2),t=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:f2,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},t),this.texture=new R0(c,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=t.generateMipmaps,this.texture.internalFormat=t.internalFormat,this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.depthTexture=t.depthTexture,this.samples=t.samples}setSize(l,n,t=1){(this.width!==l||this.height!==n||this.depth!==t)&&(this.width=l,this.height=n,this.depth=t,this.texture.image.width=l,this.texture.image.height=n,this.texture.image.depth=t,this.dispose()),this.viewport.set(0,0,l,n),this.scissor.set(0,0,l,n)}clone(){return new this.constructor().copy(this)}copy(l){this.width=l.width,this.height=l.height,this.depth=l.depth,this.scissor.copy(l.scissor),this.scissorTest=l.scissorTest,this.viewport.copy(l.viewport),this.texture=l.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},l.texture.image);return this.texture.source=new Qj(n),this.depthBuffer=l.depthBuffer,this.stencilBuffer=l.stencilBuffer,l.depthTexture!==null&&(this.depthTexture=l.depthTexture.clone()),this.samples=l.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class UN extends xk{constructor(l=1,n=1,t={}){super(l,n,t),this.isWebGLRenderTarget=!0}}class $j extends R0{constructor(l=null,n=1,t=1,c=1){super(null),this.isDataArrayTexture=!0,this.image={data:l,width:n,height:t,depth:c},this.magFilter=zf,this.minFilter=zf,this.wrapR=lE,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hk extends R0{constructor(l=null,n=1,t=1,c=1){super(null),this.isData3DTexture=!0,this.image={data:l,width:n,height:t,depth:c},this.magFilter=zf,this.minFilter=zf,this.wrapR=lE,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pne extends UN{constructor(l=1,n=1,t=1,c={}){super(l,n,c),this.isWebGLMultipleRenderTargets=!0;const w=this.texture;this.texture=[];for(let O=0;O<t;O++)this.texture[O]=w.clone(),this.texture[O].isRenderTargetTexture=!0}setSize(l,n,t=1){if(this.width!==l||this.height!==n||this.depth!==t){this.width=l,this.height=n,this.depth=t;for(let c=0,w=this.texture.length;c<w;c++)this.texture[c].image.width=l,this.texture[c].image.height=n,this.texture[c].image.depth=t;this.dispose()}this.viewport.set(0,0,l,n),this.scissor.set(0,0,l,n)}copy(l){this.dispose(),this.width=l.width,this.height=l.height,this.depth=l.depth,this.scissor.copy(l.scissor),this.scissorTest=l.scissorTest,this.viewport.copy(l.viewport),this.depthBuffer=l.depthBuffer,this.stencilBuffer=l.stencilBuffer,l.depthTexture!==null&&(this.depthTexture=l.depthTexture.clone()),this.texture.length=0;for(let n=0,t=l.texture.length;n<t;n++)this.texture[n]=l.texture[n].clone(),this.texture[n].isRenderTargetTexture=!0;return this}}class rB{constructor(l=0,n=0,t=0,c=1){this.isQuaternion=!0,this._x=l,this._y=n,this._z=t,this._w=c}static slerpFlat(l,n,t,c,w,O,M){let G=t[c+0],Y=t[c+1],Z=t[c+2],ee=t[c+3];const te=w[O+0],v=w[O+1],he=w[O+2],Te=w[O+3];if(M===0){l[n+0]=G,l[n+1]=Y,l[n+2]=Z,l[n+3]=ee;return}if(M===1){l[n+0]=te,l[n+1]=v,l[n+2]=he,l[n+3]=Te;return}if(ee!==Te||G!==te||Y!==v||Z!==he){let oe=1-M;const ie=G*te+Y*v+Z*he+ee*Te,me=ie>=0?1:-1,fe=1-ie*ie;if(fe>Number.EPSILON){const We=Math.sqrt(fe),xe=Math.atan2(We,ie*me);oe=Math.sin(oe*xe)/We,M=Math.sin(M*xe)/We}const Ne=M*me;if(G=G*oe+te*Ne,Y=Y*oe+v*Ne,Z=Z*oe+he*Ne,ee=ee*oe+Te*Ne,oe===1-M){const We=1/Math.sqrt(G*G+Y*Y+Z*Z+ee*ee);G*=We,Y*=We,Z*=We,ee*=We}}l[n]=G,l[n+1]=Y,l[n+2]=Z,l[n+3]=ee}static multiplyQuaternionsFlat(l,n,t,c,w,O){const M=t[c],G=t[c+1],Y=t[c+2],Z=t[c+3],ee=w[O],te=w[O+1],v=w[O+2],he=w[O+3];return l[n]=M*he+Z*ee+G*v-Y*te,l[n+1]=G*he+Z*te+Y*ee-M*v,l[n+2]=Y*he+Z*v+M*te-G*ee,l[n+3]=Z*he-M*ee-G*te-Y*v,l}get x(){return this._x}set x(l){this._x=l,this._onChangeCallback()}get y(){return this._y}set y(l){this._y=l,this._onChangeCallback()}get z(){return this._z}set z(l){this._z=l,this._onChangeCallback()}get w(){return this._w}set w(l){this._w=l,this._onChangeCallback()}set(l,n,t,c){return this._x=l,this._y=n,this._z=t,this._w=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(l){return this._x=l.x,this._y=l.y,this._z=l.z,this._w=l.w,this._onChangeCallback(),this}setFromEuler(l,n=!0){const t=l._x,c=l._y,w=l._z,O=l._order,M=Math.cos,G=Math.sin,Y=M(t/2),Z=M(c/2),ee=M(w/2),te=G(t/2),v=G(c/2),he=G(w/2);switch(O){case"XYZ":this._x=te*Z*ee+Y*v*he,this._y=Y*v*ee-te*Z*he,this._z=Y*Z*he+te*v*ee,this._w=Y*Z*ee-te*v*he;break;case"YXZ":this._x=te*Z*ee+Y*v*he,this._y=Y*v*ee-te*Z*he,this._z=Y*Z*he-te*v*ee,this._w=Y*Z*ee+te*v*he;break;case"ZXY":this._x=te*Z*ee-Y*v*he,this._y=Y*v*ee+te*Z*he,this._z=Y*Z*he+te*v*ee,this._w=Y*Z*ee-te*v*he;break;case"ZYX":this._x=te*Z*ee-Y*v*he,this._y=Y*v*ee+te*Z*he,this._z=Y*Z*he-te*v*ee,this._w=Y*Z*ee+te*v*he;break;case"YZX":this._x=te*Z*ee+Y*v*he,this._y=Y*v*ee+te*Z*he,this._z=Y*Z*he-te*v*ee,this._w=Y*Z*ee-te*v*he;break;case"XZY":this._x=te*Z*ee-Y*v*he,this._y=Y*v*ee-te*Z*he,this._z=Y*Z*he+te*v*ee,this._w=Y*Z*ee+te*v*he;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+O)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(l,n){const t=n/2,c=Math.sin(t);return this._x=l.x*c,this._y=l.y*c,this._z=l.z*c,this._w=Math.cos(t),this._onChangeCallback(),this}setFromRotationMatrix(l){const n=l.elements,t=n[0],c=n[4],w=n[8],O=n[1],M=n[5],G=n[9],Y=n[2],Z=n[6],ee=n[10],te=t+M+ee;if(te>0){const v=.5/Math.sqrt(te+1);this._w=.25/v,this._x=(Z-G)*v,this._y=(w-Y)*v,this._z=(O-c)*v}else if(t>M&&t>ee){const v=2*Math.sqrt(1+t-M-ee);this._w=(Z-G)/v,this._x=.25*v,this._y=(c+O)/v,this._z=(w+Y)/v}else if(M>ee){const v=2*Math.sqrt(1+M-t-ee);this._w=(w-Y)/v,this._x=(c+O)/v,this._y=.25*v,this._z=(G+Z)/v}else{const v=2*Math.sqrt(1+ee-t-M);this._w=(O-c)/v,this._x=(w+Y)/v,this._y=(G+Z)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(l,n){let t=l.dot(n)+1;return t<Number.EPSILON?(t=0,Math.abs(l.x)>Math.abs(l.z)?(this._x=-l.y,this._y=l.x,this._z=0,this._w=t):(this._x=0,this._y=-l.z,this._z=l.y,this._w=t)):(this._x=l.y*n.z-l.z*n.y,this._y=l.z*n.x-l.x*n.z,this._z=l.x*n.y-l.y*n.x,this._w=t),this.normalize()}angleTo(l){return 2*Math.acos(Math.abs(qf(this.dot(l),-1,1)))}rotateTowards(l,n){const t=this.angleTo(l);if(t===0)return this;const c=Math.min(1,n/t);return this.slerp(l,c),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(l){return this._x*l._x+this._y*l._y+this._z*l._z+this._w*l._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let l=this.length();return l===0?(this._x=0,this._y=0,this._z=0,this._w=1):(l=1/l,this._x=this._x*l,this._y=this._y*l,this._z=this._z*l,this._w=this._w*l),this._onChangeCallback(),this}multiply(l){return this.multiplyQuaternions(this,l)}premultiply(l){return this.multiplyQuaternions(l,this)}multiplyQuaternions(l,n){const t=l._x,c=l._y,w=l._z,O=l._w,M=n._x,G=n._y,Y=n._z,Z=n._w;return this._x=t*Z+O*M+c*Y-w*G,this._y=c*Z+O*G+w*M-t*Y,this._z=w*Z+O*Y+t*G-c*M,this._w=O*Z-t*M-c*G-w*Y,this._onChangeCallback(),this}slerp(l,n){if(n===0)return this;if(n===1)return this.copy(l);const t=this._x,c=this._y,w=this._z,O=this._w;let M=O*l._w+t*l._x+c*l._y+w*l._z;if(M<0?(this._w=-l._w,this._x=-l._x,this._y=-l._y,this._z=-l._z,M=-M):this.copy(l),M>=1)return this._w=O,this._x=t,this._y=c,this._z=w,this;const G=1-M*M;if(G<=Number.EPSILON){const v=1-n;return this._w=v*O+n*this._w,this._x=v*t+n*this._x,this._y=v*c+n*this._y,this._z=v*w+n*this._z,this.normalize(),this}const Y=Math.sqrt(G),Z=Math.atan2(Y,M),ee=Math.sin((1-n)*Z)/Y,te=Math.sin(n*Z)/Y;return this._w=O*ee+this._w*te,this._x=t*ee+this._x*te,this._y=c*ee+this._y*te,this._z=w*ee+this._z*te,this._onChangeCallback(),this}slerpQuaternions(l,n,t){return this.copy(l).slerp(n,t)}random(){const l=Math.random(),n=Math.sqrt(1-l),t=Math.sqrt(l),c=2*Math.PI*Math.random(),w=2*Math.PI*Math.random();return this.set(n*Math.cos(c),t*Math.sin(w),t*Math.cos(w),n*Math.sin(c))}equals(l){return l._x===this._x&&l._y===this._y&&l._z===this._z&&l._w===this._w}fromArray(l,n=0){return this._x=l[n],this._y=l[n+1],this._z=l[n+2],this._w=l[n+3],this._onChangeCallback(),this}toArray(l=[],n=0){return l[n]=this._x,l[n+1]=this._y,l[n+2]=this._z,l[n+3]=this._w,l}fromBufferAttribute(l,n){return this._x=l.getX(n),this._y=l.getY(n),this._z=l.getZ(n),this._w=l.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(l){return this._onChangeCallback=l,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class lt{constructor(l=0,n=0,t=0){lt.prototype.isVector3=!0,this.x=l,this.y=n,this.z=t}set(l,n,t){return t===void 0&&(t=this.z),this.x=l,this.y=n,this.z=t,this}setScalar(l){return this.x=l,this.y=l,this.z=l,this}setX(l){return this.x=l,this}setY(l){return this.y=l,this}setZ(l){return this.z=l,this}setComponent(l,n){switch(l){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+l)}return this}getComponent(l){switch(l){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+l)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(l){return this.x=l.x,this.y=l.y,this.z=l.z,this}add(l){return this.x+=l.x,this.y+=l.y,this.z+=l.z,this}addScalar(l){return this.x+=l,this.y+=l,this.z+=l,this}addVectors(l,n){return this.x=l.x+n.x,this.y=l.y+n.y,this.z=l.z+n.z,this}addScaledVector(l,n){return this.x+=l.x*n,this.y+=l.y*n,this.z+=l.z*n,this}sub(l){return this.x-=l.x,this.y-=l.y,this.z-=l.z,this}subScalar(l){return this.x-=l,this.y-=l,this.z-=l,this}subVectors(l,n){return this.x=l.x-n.x,this.y=l.y-n.y,this.z=l.z-n.z,this}multiply(l){return this.x*=l.x,this.y*=l.y,this.z*=l.z,this}multiplyScalar(l){return this.x*=l,this.y*=l,this.z*=l,this}multiplyVectors(l,n){return this.x=l.x*n.x,this.y=l.y*n.y,this.z=l.z*n.z,this}applyEuler(l){return this.applyQuaternion(hW.setFromEuler(l))}applyAxisAngle(l,n){return this.applyQuaternion(hW.setFromAxisAngle(l,n))}applyMatrix3(l){const n=this.x,t=this.y,c=this.z,w=l.elements;return this.x=w[0]*n+w[3]*t+w[6]*c,this.y=w[1]*n+w[4]*t+w[7]*c,this.z=w[2]*n+w[5]*t+w[8]*c,this}applyNormalMatrix(l){return this.applyMatrix3(l).normalize()}applyMatrix4(l){const n=this.x,t=this.y,c=this.z,w=l.elements,O=1/(w[3]*n+w[7]*t+w[11]*c+w[15]);return this.x=(w[0]*n+w[4]*t+w[8]*c+w[12])*O,this.y=(w[1]*n+w[5]*t+w[9]*c+w[13])*O,this.z=(w[2]*n+w[6]*t+w[10]*c+w[14])*O,this}applyQuaternion(l){const n=this.x,t=this.y,c=this.z,w=l.x,O=l.y,M=l.z,G=l.w,Y=2*(O*c-M*t),Z=2*(M*n-w*c),ee=2*(w*t-O*n);return this.x=n+G*Y+O*ee-M*Z,this.y=t+G*Z+M*Y-w*ee,this.z=c+G*ee+w*Z-O*Y,this}project(l){return this.applyMatrix4(l.matrixWorldInverse).applyMatrix4(l.projectionMatrix)}unproject(l){return this.applyMatrix4(l.projectionMatrixInverse).applyMatrix4(l.matrixWorld)}transformDirection(l){const n=this.x,t=this.y,c=this.z,w=l.elements;return this.x=w[0]*n+w[4]*t+w[8]*c,this.y=w[1]*n+w[5]*t+w[9]*c,this.z=w[2]*n+w[6]*t+w[10]*c,this.normalize()}divide(l){return this.x/=l.x,this.y/=l.y,this.z/=l.z,this}divideScalar(l){return this.multiplyScalar(1/l)}min(l){return this.x=Math.min(this.x,l.x),this.y=Math.min(this.y,l.y),this.z=Math.min(this.z,l.z),this}max(l){return this.x=Math.max(this.x,l.x),this.y=Math.max(this.y,l.y),this.z=Math.max(this.z,l.z),this}clamp(l,n){return this.x=Math.max(l.x,Math.min(n.x,this.x)),this.y=Math.max(l.y,Math.min(n.y,this.y)),this.z=Math.max(l.z,Math.min(n.z,this.z)),this}clampScalar(l,n){return this.x=Math.max(l,Math.min(n,this.x)),this.y=Math.max(l,Math.min(n,this.y)),this.z=Math.max(l,Math.min(n,this.z)),this}clampLength(l,n){const t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(l,Math.min(n,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(l){return this.x*l.x+this.y*l.y+this.z*l.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(l){return this.normalize().multiplyScalar(l)}lerp(l,n){return this.x+=(l.x-this.x)*n,this.y+=(l.y-this.y)*n,this.z+=(l.z-this.z)*n,this}lerpVectors(l,n,t){return this.x=l.x+(n.x-l.x)*t,this.y=l.y+(n.y-l.y)*t,this.z=l.z+(n.z-l.z)*t,this}cross(l){return this.crossVectors(this,l)}crossVectors(l,n){const t=l.x,c=l.y,w=l.z,O=n.x,M=n.y,G=n.z;return this.x=c*G-w*M,this.y=w*O-t*G,this.z=t*M-c*O,this}projectOnVector(l){const n=l.lengthSq();if(n===0)return this.set(0,0,0);const t=l.dot(this)/n;return this.copy(l).multiplyScalar(t)}projectOnPlane(l){return oG.copy(this).projectOnVector(l),this.sub(oG)}reflect(l){return this.sub(oG.copy(l).multiplyScalar(2*this.dot(l)))}angleTo(l){const n=Math.sqrt(this.lengthSq()*l.lengthSq());if(n===0)return Math.PI/2;const t=this.dot(l)/n;return Math.acos(qf(t,-1,1))}distanceTo(l){return Math.sqrt(this.distanceToSquared(l))}distanceToSquared(l){const n=this.x-l.x,t=this.y-l.y,c=this.z-l.z;return n*n+t*t+c*c}manhattanDistanceTo(l){return Math.abs(this.x-l.x)+Math.abs(this.y-l.y)+Math.abs(this.z-l.z)}setFromSpherical(l){return this.setFromSphericalCoords(l.radius,l.phi,l.theta)}setFromSphericalCoords(l,n,t){const c=Math.sin(n)*l;return this.x=c*Math.sin(t),this.y=Math.cos(n)*l,this.z=c*Math.cos(t),this}setFromCylindrical(l){return this.setFromCylindricalCoords(l.radius,l.theta,l.y)}setFromCylindricalCoords(l,n,t){return this.x=l*Math.sin(n),this.y=t,this.z=l*Math.cos(n),this}setFromMatrixPosition(l){const n=l.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(l){const n=this.setFromMatrixColumn(l,0).length(),t=this.setFromMatrixColumn(l,1).length(),c=this.setFromMatrixColumn(l,2).length();return this.x=n,this.y=t,this.z=c,this}setFromMatrixColumn(l,n){return this.fromArray(l.elements,n*4)}setFromMatrix3Column(l,n){return this.fromArray(l.elements,n*3)}setFromEuler(l){return this.x=l._x,this.y=l._y,this.z=l._z,this}setFromColor(l){return this.x=l.r,this.y=l.g,this.z=l.b,this}equals(l){return l.x===this.x&&l.y===this.y&&l.z===this.z}fromArray(l,n=0){return this.x=l[n],this.y=l[n+1],this.z=l[n+2],this}toArray(l=[],n=0){return l[n]=this.x,l[n+1]=this.y,l[n+2]=this.z,l}fromBufferAttribute(l,n){return this.x=l.getX(n),this.y=l.getY(n),this.z=l.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const l=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,t=Math.sqrt(1-l**2);return this.x=t*Math.cos(n),this.y=t*Math.sin(n),this.z=l,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oG=new lt,hW=new rB;class Uc{constructor(l=new lt(1/0,1/0,1/0),n=new lt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=l,this.max=n}set(l,n){return this.min.copy(l),this.max.copy(n),this}setFromArray(l){this.makeEmpty();for(let n=0,t=l.length;n<t;n+=3)this.expandByPoint(Jw.fromArray(l,n));return this}setFromBufferAttribute(l){this.makeEmpty();for(let n=0,t=l.count;n<t;n++)this.expandByPoint(Jw.fromBufferAttribute(l,n));return this}setFromPoints(l){this.makeEmpty();for(let n=0,t=l.length;n<t;n++)this.expandByPoint(l[n]);return this}setFromCenterAndSize(l,n){const t=Jw.copy(n).multiplyScalar(.5);return this.min.copy(l).sub(t),this.max.copy(l).add(t),this}setFromObject(l,n=!1){return this.makeEmpty(),this.expandByObject(l,n)}clone(){return new this.constructor().copy(this)}copy(l){return this.min.copy(l.min),this.max.copy(l.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(l){return this.isEmpty()?l.set(0,0,0):l.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(l){return this.isEmpty()?l.set(0,0,0):l.subVectors(this.max,this.min)}expandByPoint(l){return this.min.min(l),this.max.max(l),this}expandByVector(l){return this.min.sub(l),this.max.add(l),this}expandByScalar(l){return this.min.addScalar(-l),this.max.addScalar(l),this}expandByObject(l,n=!1){l.updateWorldMatrix(!1,!1);const t=l.geometry;if(t!==void 0){const w=t.getAttribute("position");if(n===!0&&w!==void 0&&l.isInstancedMesh!==!0)for(let O=0,M=w.count;O<M;O++)l.isMesh===!0?l.getVertexPosition(O,Jw):Jw.fromBufferAttribute(w,O),Jw.applyMatrix4(l.matrixWorld),this.expandByPoint(Jw);else l.boundingBox!==void 0?(l.boundingBox===null&&l.computeBoundingBox(),mB.copy(l.boundingBox)):(t.boundingBox===null&&t.computeBoundingBox(),mB.copy(t.boundingBox)),mB.applyMatrix4(l.matrixWorld),this.union(mB)}const c=l.children;for(let w=0,O=c.length;w<O;w++)this.expandByObject(c[w],n);return this}containsPoint(l){return!(l.x<this.min.x||l.x>this.max.x||l.y<this.min.y||l.y>this.max.y||l.z<this.min.z||l.z>this.max.z)}containsBox(l){return this.min.x<=l.min.x&&l.max.x<=this.max.x&&this.min.y<=l.min.y&&l.max.y<=this.max.y&&this.min.z<=l.min.z&&l.max.z<=this.max.z}getParameter(l,n){return n.set((l.x-this.min.x)/(this.max.x-this.min.x),(l.y-this.min.y)/(this.max.y-this.min.y),(l.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(l){return!(l.max.x<this.min.x||l.min.x>this.max.x||l.max.y<this.min.y||l.min.y>this.max.y||l.max.z<this.min.z||l.min.z>this.max.z)}intersectsSphere(l){return this.clampPoint(l.center,Jw),Jw.distanceToSquared(l.center)<=l.radius*l.radius}intersectsPlane(l){let n,t;return l.normal.x>0?(n=l.normal.x*this.min.x,t=l.normal.x*this.max.x):(n=l.normal.x*this.max.x,t=l.normal.x*this.min.x),l.normal.y>0?(n+=l.normal.y*this.min.y,t+=l.normal.y*this.max.y):(n+=l.normal.y*this.max.y,t+=l.normal.y*this.min.y),l.normal.z>0?(n+=l.normal.z*this.min.z,t+=l.normal.z*this.max.z):(n+=l.normal.z*this.max.z,t+=l.normal.z*this.min.z),n<=-l.constant&&t>=-l.constant}intersectsTriangle(l){if(this.isEmpty())return!1;this.getCenter(_x),DB.subVectors(this.max,_x),yP.subVectors(l.a,_x),wP.subVectors(l.b,_x),EP.subVectors(l.c,_x),WD.subVectors(wP,yP),jD.subVectors(EP,wP),ZS.subVectors(yP,EP);let n=[0,-WD.z,WD.y,0,-jD.z,jD.y,0,-ZS.z,ZS.y,WD.z,0,-WD.x,jD.z,0,-jD.x,ZS.z,0,-ZS.x,-WD.y,WD.x,0,-jD.y,jD.x,0,-ZS.y,ZS.x,0];return!cG(n,yP,wP,EP,DB)||(n=[1,0,0,0,1,0,0,0,1],!cG(n,yP,wP,EP,DB))?!1:(NB.crossVectors(WD,jD),n=[NB.x,NB.y,NB.z],cG(n,yP,wP,EP,DB))}clampPoint(l,n){return n.copy(l).clamp(this.min,this.max)}distanceToPoint(l){return this.clampPoint(l,Jw).distanceTo(l)}getBoundingSphere(l){return this.isEmpty()?l.makeEmpty():(this.getCenter(l.center),l.radius=this.getSize(Jw).length()*.5),l}intersect(l){return this.min.max(l.min),this.max.min(l.max),this.isEmpty()&&this.makeEmpty(),this}union(l){return this.min.min(l.min),this.max.max(l.max),this}applyMatrix4(l){return this.isEmpty()?this:(M6[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(l),M6[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(l),M6[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(l),M6[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(l),M6[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(l),M6[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(l),M6[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(l),M6[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(l),this.setFromPoints(M6),this)}translate(l){return this.min.add(l),this.max.add(l),this}equals(l){return l.min.equals(this.min)&&l.max.equals(this.max)}}const M6=[new lt,new lt,new lt,new lt,new lt,new lt,new lt,new lt],Jw=new lt,mB=new Uc,yP=new lt,wP=new lt,EP=new lt,WD=new lt,jD=new lt,ZS=new lt,_x=new lt,DB=new lt,NB=new lt,JS=new lt;function cG(e,l,n,t,c){for(let w=0,O=e.length-3;w<=O;w+=3){JS.fromArray(e,w);const M=c.x*Math.abs(JS.x)+c.y*Math.abs(JS.y)+c.z*Math.abs(JS.z),G=l.dot(JS),Y=n.dot(JS),Z=t.dot(JS);if(Math.max(-Math.max(G,Y,Z),Math.min(G,Y,Z))>M)return!1}return!0}const Bk=new Uc,Wx=new lt,hG=new lt;class hO{constructor(l=new lt,n=-1){this.isSphere=!0,this.center=l,this.radius=n}set(l,n){return this.center.copy(l),this.radius=n,this}setFromPoints(l,n){const t=this.center;n!==void 0?t.copy(n):Bk.setFromPoints(l).getCenter(t);let c=0;for(let w=0,O=l.length;w<O;w++)c=Math.max(c,t.distanceToSquared(l[w]));return this.radius=Math.sqrt(c),this}copy(l){return this.center.copy(l.center),this.radius=l.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(l){return l.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(l){return l.distanceTo(this.center)-this.radius}intersectsSphere(l){const n=this.radius+l.radius;return l.center.distanceToSquared(this.center)<=n*n}intersectsBox(l){return l.intersectsSphere(this)}intersectsPlane(l){return Math.abs(l.distanceToPoint(this.center))<=this.radius}clampPoint(l,n){const t=this.center.distanceToSquared(l);return n.copy(l),t>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(l){return this.isEmpty()?(l.makeEmpty(),l):(l.set(this.center,this.center),l.expandByScalar(this.radius),l)}applyMatrix4(l){return this.center.applyMatrix4(l),this.radius=this.radius*l.getMaxScaleOnAxis(),this}translate(l){return this.center.add(l),this}expandByPoint(l){if(this.isEmpty())return this.center.copy(l),this.radius=0,this;Wx.subVectors(l,this.center);const n=Wx.lengthSq();if(n>this.radius*this.radius){const t=Math.sqrt(n),c=(t-this.radius)*.5;this.center.addScaledVector(Wx,c/t),this.radius+=c}return this}union(l){return l.isEmpty()?this:this.isEmpty()?(this.copy(l),this):(this.center.equals(l.center)===!0?this.radius=Math.max(this.radius,l.radius):(hG.subVectors(l.center,this.center).setLength(l.radius),this.expandByPoint(Wx.copy(l.center).add(hG)),this.expandByPoint(Wx.copy(l.center).sub(hG))),this)}equals(l){return l.center.equals(this.center)&&l.radius===this.radius}clone(){return new this.constructor().copy(this)}}const x6=new lt,fG=new lt,AB=new lt,YD=new lt,IG=new lt,SB=new lt,dG=new lt;class lF{constructor(l=new lt,n=new lt(0,0,-1)){this.origin=l,this.direction=n}set(l,n){return this.origin.copy(l),this.direction.copy(n),this}copy(l){return this.origin.copy(l.origin),this.direction.copy(l.direction),this}at(l,n){return n.copy(this.origin).addScaledVector(this.direction,l)}lookAt(l){return this.direction.copy(l).sub(this.origin).normalize(),this}recast(l){return this.origin.copy(this.at(l,x6)),this}closestPointToPoint(l,n){n.subVectors(l,this.origin);const t=n.dot(this.direction);return t<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,t)}distanceToPoint(l){return Math.sqrt(this.distanceSqToPoint(l))}distanceSqToPoint(l){const n=x6.subVectors(l,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(l):(x6.copy(this.origin).addScaledVector(this.direction,n),x6.distanceToSquared(l))}distanceSqToSegment(l,n,t,c){fG.copy(l).add(n).multiplyScalar(.5),AB.copy(n).sub(l).normalize(),YD.copy(this.origin).sub(fG);const w=l.distanceTo(n)*.5,O=-this.direction.dot(AB),M=YD.dot(this.direction),G=-YD.dot(AB),Y=YD.lengthSq(),Z=Math.abs(1-O*O);let ee,te,v,he;if(Z>0)if(ee=O*G-M,te=O*M-G,he=w*Z,ee>=0)if(te>=-he)if(te<=he){const Te=1/Z;ee*=Te,te*=Te,v=ee*(ee+O*te+2*M)+te*(O*ee+te+2*G)+Y}else te=w,ee=Math.max(0,-(O*te+M)),v=-ee*ee+te*(te+2*G)+Y;else te=-w,ee=Math.max(0,-(O*te+M)),v=-ee*ee+te*(te+2*G)+Y;else te<=-he?(ee=Math.max(0,-(-O*w+M)),te=ee>0?-w:Math.min(Math.max(-w,-G),w),v=-ee*ee+te*(te+2*G)+Y):te<=he?(ee=0,te=Math.min(Math.max(-w,-G),w),v=te*(te+2*G)+Y):(ee=Math.max(0,-(O*w+M)),te=ee>0?w:Math.min(Math.max(-w,-G),w),v=-ee*ee+te*(te+2*G)+Y);else te=O>0?-w:w,ee=Math.max(0,-(O*te+M)),v=-ee*ee+te*(te+2*G)+Y;return t&&t.copy(this.origin).addScaledVector(this.direction,ee),c&&c.copy(fG).addScaledVector(AB,te),v}intersectSphere(l,n){x6.subVectors(l.center,this.origin);const t=x6.dot(this.direction),c=x6.dot(x6)-t*t,w=l.radius*l.radius;if(c>w)return null;const O=Math.sqrt(w-c),M=t-O,G=t+O;return G<0?null:M<0?this.at(G,n):this.at(M,n)}intersectsSphere(l){return this.distanceSqToPoint(l.center)<=l.radius*l.radius}distanceToPlane(l){const n=l.normal.dot(this.direction);if(n===0)return l.distanceToPoint(this.origin)===0?0:null;const t=-(this.origin.dot(l.normal)+l.constant)/n;return t>=0?t:null}intersectPlane(l,n){const t=this.distanceToPlane(l);return t===null?null:this.at(t,n)}intersectsPlane(l){const n=l.distanceToPoint(this.origin);return n===0||l.normal.dot(this.direction)*n<0}intersectBox(l,n){let t,c,w,O,M,G;const Y=1/this.direction.x,Z=1/this.direction.y,ee=1/this.direction.z,te=this.origin;return Y>=0?(t=(l.min.x-te.x)*Y,c=(l.max.x-te.x)*Y):(t=(l.max.x-te.x)*Y,c=(l.min.x-te.x)*Y),Z>=0?(w=(l.min.y-te.y)*Z,O=(l.max.y-te.y)*Z):(w=(l.max.y-te.y)*Z,O=(l.min.y-te.y)*Z),t>O||w>c||((w>t||isNaN(t))&&(t=w),(O<c||isNaN(c))&&(c=O),ee>=0?(M=(l.min.z-te.z)*ee,G=(l.max.z-te.z)*ee):(M=(l.max.z-te.z)*ee,G=(l.min.z-te.z)*ee),t>G||M>c)||((M>t||t!==t)&&(t=M),(G<c||c!==c)&&(c=G),c<0)?null:this.at(t>=0?t:c,n)}intersectsBox(l){return this.intersectBox(l,x6)!==null}intersectTriangle(l,n,t,c,w){IG.subVectors(n,l),SB.subVectors(t,l),dG.crossVectors(IG,SB);let O=this.direction.dot(dG),M;if(O>0){if(c)return null;M=1}else if(O<0)M=-1,O=-O;else return null;YD.subVectors(this.origin,l);const G=M*this.direction.dot(SB.crossVectors(YD,SB));if(G<0)return null;const Y=M*this.direction.dot(IG.cross(YD));if(Y<0||G+Y>O)return null;const Z=-M*YD.dot(dG);return Z<0?null:this.at(Z/O,w)}applyMatrix4(l){return this.origin.applyMatrix4(l),this.direction.transformDirection(l),this}equals(l){return l.origin.equals(this.origin)&&l.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ps{constructor(l,n,t,c,w,O,M,G,Y,Z,ee,te,v,he,Te,oe){Ps.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],l!==void 0&&this.set(l,n,t,c,w,O,M,G,Y,Z,ee,te,v,he,Te,oe)}set(l,n,t,c,w,O,M,G,Y,Z,ee,te,v,he,Te,oe){const ie=this.elements;return ie[0]=l,ie[4]=n,ie[8]=t,ie[12]=c,ie[1]=w,ie[5]=O,ie[9]=M,ie[13]=G,ie[2]=Y,ie[6]=Z,ie[10]=ee,ie[14]=te,ie[3]=v,ie[7]=he,ie[11]=Te,ie[15]=oe,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ps().fromArray(this.elements)}copy(l){const n=this.elements,t=l.elements;return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],this}copyPosition(l){const n=this.elements,t=l.elements;return n[12]=t[12],n[13]=t[13],n[14]=t[14],this}setFromMatrix3(l){const n=l.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(l,n,t){return l.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),t.setFromMatrixColumn(this,2),this}makeBasis(l,n,t){return this.set(l.x,n.x,t.x,0,l.y,n.y,t.y,0,l.z,n.z,t.z,0,0,0,0,1),this}extractRotation(l){const n=this.elements,t=l.elements,c=1/TP.setFromMatrixColumn(l,0).length(),w=1/TP.setFromMatrixColumn(l,1).length(),O=1/TP.setFromMatrixColumn(l,2).length();return n[0]=t[0]*c,n[1]=t[1]*c,n[2]=t[2]*c,n[3]=0,n[4]=t[4]*w,n[5]=t[5]*w,n[6]=t[6]*w,n[7]=0,n[8]=t[8]*O,n[9]=t[9]*O,n[10]=t[10]*O,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(l){const n=this.elements,t=l.x,c=l.y,w=l.z,O=Math.cos(t),M=Math.sin(t),G=Math.cos(c),Y=Math.sin(c),Z=Math.cos(w),ee=Math.sin(w);if(l.order==="XYZ"){const te=O*Z,v=O*ee,he=M*Z,Te=M*ee;n[0]=G*Z,n[4]=-G*ee,n[8]=Y,n[1]=v+he*Y,n[5]=te-Te*Y,n[9]=-M*G,n[2]=Te-te*Y,n[6]=he+v*Y,n[10]=O*G}else if(l.order==="YXZ"){const te=G*Z,v=G*ee,he=Y*Z,Te=Y*ee;n[0]=te+Te*M,n[4]=he*M-v,n[8]=O*Y,n[1]=O*ee,n[5]=O*Z,n[9]=-M,n[2]=v*M-he,n[6]=Te+te*M,n[10]=O*G}else if(l.order==="ZXY"){const te=G*Z,v=G*ee,he=Y*Z,Te=Y*ee;n[0]=te-Te*M,n[4]=-O*ee,n[8]=he+v*M,n[1]=v+he*M,n[5]=O*Z,n[9]=Te-te*M,n[2]=-O*Y,n[6]=M,n[10]=O*G}else if(l.order==="ZYX"){const te=O*Z,v=O*ee,he=M*Z,Te=M*ee;n[0]=G*Z,n[4]=he*Y-v,n[8]=te*Y+Te,n[1]=G*ee,n[5]=Te*Y+te,n[9]=v*Y-he,n[2]=-Y,n[6]=M*G,n[10]=O*G}else if(l.order==="YZX"){const te=O*G,v=O*Y,he=M*G,Te=M*Y;n[0]=G*Z,n[4]=Te-te*ee,n[8]=he*ee+v,n[1]=ee,n[5]=O*Z,n[9]=-M*Z,n[2]=-Y*Z,n[6]=v*ee+he,n[10]=te-Te*ee}else if(l.order==="XZY"){const te=O*G,v=O*Y,he=M*G,Te=M*Y;n[0]=G*Z,n[4]=-ee,n[8]=Y*Z,n[1]=te*ee+Te,n[5]=O*Z,n[9]=v*ee-he,n[2]=he*ee-v,n[6]=M*Z,n[10]=Te*ee+te}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(l){return this.compose(Uk,l,Fk)}lookAt(l,n,t){const c=this.elements;return P4.subVectors(l,n),P4.lengthSq()===0&&(P4.z=1),P4.normalize(),zD.crossVectors(t,P4),zD.lengthSq()===0&&(Math.abs(t.z)===1?P4.x+=1e-4:P4.z+=1e-4,P4.normalize(),zD.crossVectors(t,P4)),zD.normalize(),LB.crossVectors(P4,zD),c[0]=zD.x,c[4]=LB.x,c[8]=P4.x,c[1]=zD.y,c[5]=LB.y,c[9]=P4.y,c[2]=zD.z,c[6]=LB.z,c[10]=P4.z,this}multiply(l){return this.multiplyMatrices(this,l)}premultiply(l){return this.multiplyMatrices(l,this)}multiplyMatrices(l,n){const t=l.elements,c=n.elements,w=this.elements,O=t[0],M=t[4],G=t[8],Y=t[12],Z=t[1],ee=t[5],te=t[9],v=t[13],he=t[2],Te=t[6],oe=t[10],ie=t[14],me=t[3],fe=t[7],Ne=t[11],We=t[15],xe=c[0],je=c[4],et=c[8],ge=c[12],Le=c[1],ve=c[5],nt=c[9],ht=c[13],Xe=c[2],at=c[6],It=c[10],St=c[14],bt=c[3],Ct=c[7],Ft=c[11],kt=c[15];return w[0]=O*xe+M*Le+G*Xe+Y*bt,w[4]=O*je+M*ve+G*at+Y*Ct,w[8]=O*et+M*nt+G*It+Y*Ft,w[12]=O*ge+M*ht+G*St+Y*kt,w[1]=Z*xe+ee*Le+te*Xe+v*bt,w[5]=Z*je+ee*ve+te*at+v*Ct,w[9]=Z*et+ee*nt+te*It+v*Ft,w[13]=Z*ge+ee*ht+te*St+v*kt,w[2]=he*xe+Te*Le+oe*Xe+ie*bt,w[6]=he*je+Te*ve+oe*at+ie*Ct,w[10]=he*et+Te*nt+oe*It+ie*Ft,w[14]=he*ge+Te*ht+oe*St+ie*kt,w[3]=me*xe+fe*Le+Ne*Xe+We*bt,w[7]=me*je+fe*ve+Ne*at+We*Ct,w[11]=me*et+fe*nt+Ne*It+We*Ft,w[15]=me*ge+fe*ht+Ne*St+We*kt,this}multiplyScalar(l){const n=this.elements;return n[0]*=l,n[4]*=l,n[8]*=l,n[12]*=l,n[1]*=l,n[5]*=l,n[9]*=l,n[13]*=l,n[2]*=l,n[6]*=l,n[10]*=l,n[14]*=l,n[3]*=l,n[7]*=l,n[11]*=l,n[15]*=l,this}determinant(){const l=this.elements,n=l[0],t=l[4],c=l[8],w=l[12],O=l[1],M=l[5],G=l[9],Y=l[13],Z=l[2],ee=l[6],te=l[10],v=l[14],he=l[3],Te=l[7],oe=l[11],ie=l[15];return he*(+w*G*ee-c*Y*ee-w*M*te+t*Y*te+c*M*v-t*G*v)+Te*(+n*G*v-n*Y*te+w*O*te-c*O*v+c*Y*Z-w*G*Z)+oe*(+n*Y*ee-n*M*v-w*O*ee+t*O*v+w*M*Z-t*Y*Z)+ie*(-c*M*Z-n*G*ee+n*M*te+c*O*ee-t*O*te+t*G*Z)}transpose(){const l=this.elements;let n;return n=l[1],l[1]=l[4],l[4]=n,n=l[2],l[2]=l[8],l[8]=n,n=l[6],l[6]=l[9],l[9]=n,n=l[3],l[3]=l[12],l[12]=n,n=l[7],l[7]=l[13],l[13]=n,n=l[11],l[11]=l[14],l[14]=n,this}setPosition(l,n,t){const c=this.elements;return l.isVector3?(c[12]=l.x,c[13]=l.y,c[14]=l.z):(c[12]=l,c[13]=n,c[14]=t),this}invert(){const l=this.elements,n=l[0],t=l[1],c=l[2],w=l[3],O=l[4],M=l[5],G=l[6],Y=l[7],Z=l[8],ee=l[9],te=l[10],v=l[11],he=l[12],Te=l[13],oe=l[14],ie=l[15],me=ee*oe*Y-Te*te*Y+Te*G*v-M*oe*v-ee*G*ie+M*te*ie,fe=he*te*Y-Z*oe*Y-he*G*v+O*oe*v+Z*G*ie-O*te*ie,Ne=Z*Te*Y-he*ee*Y+he*M*v-O*Te*v-Z*M*ie+O*ee*ie,We=he*ee*G-Z*Te*G-he*M*te+O*Te*te+Z*M*oe-O*ee*oe,xe=n*me+t*fe+c*Ne+w*We;if(xe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const je=1/xe;return l[0]=me*je,l[1]=(Te*te*w-ee*oe*w-Te*c*v+t*oe*v+ee*c*ie-t*te*ie)*je,l[2]=(M*oe*w-Te*G*w+Te*c*Y-t*oe*Y-M*c*ie+t*G*ie)*je,l[3]=(ee*G*w-M*te*w-ee*c*Y+t*te*Y+M*c*v-t*G*v)*je,l[4]=fe*je,l[5]=(Z*oe*w-he*te*w+he*c*v-n*oe*v-Z*c*ie+n*te*ie)*je,l[6]=(he*G*w-O*oe*w-he*c*Y+n*oe*Y+O*c*ie-n*G*ie)*je,l[7]=(O*te*w-Z*G*w+Z*c*Y-n*te*Y-O*c*v+n*G*v)*je,l[8]=Ne*je,l[9]=(he*ee*w-Z*Te*w-he*t*v+n*Te*v+Z*t*ie-n*ee*ie)*je,l[10]=(O*Te*w-he*M*w+he*t*Y-n*Te*Y-O*t*ie+n*M*ie)*je,l[11]=(Z*M*w-O*ee*w-Z*t*Y+n*ee*Y+O*t*v-n*M*v)*je,l[12]=We*je,l[13]=(Z*Te*c-he*ee*c+he*t*te-n*Te*te-Z*t*oe+n*ee*oe)*je,l[14]=(he*M*c-O*Te*c-he*t*G+n*Te*G+O*t*oe-n*M*oe)*je,l[15]=(O*ee*c-Z*M*c+Z*t*G-n*ee*G-O*t*te+n*M*te)*je,this}scale(l){const n=this.elements,t=l.x,c=l.y,w=l.z;return n[0]*=t,n[4]*=c,n[8]*=w,n[1]*=t,n[5]*=c,n[9]*=w,n[2]*=t,n[6]*=c,n[10]*=w,n[3]*=t,n[7]*=c,n[11]*=w,this}getMaxScaleOnAxis(){const l=this.elements,n=l[0]*l[0]+l[1]*l[1]+l[2]*l[2],t=l[4]*l[4]+l[5]*l[5]+l[6]*l[6],c=l[8]*l[8]+l[9]*l[9]+l[10]*l[10];return Math.sqrt(Math.max(n,t,c))}makeTranslation(l,n,t){return l.isVector3?this.set(1,0,0,l.x,0,1,0,l.y,0,0,1,l.z,0,0,0,1):this.set(1,0,0,l,0,1,0,n,0,0,1,t,0,0,0,1),this}makeRotationX(l){const n=Math.cos(l),t=Math.sin(l);return this.set(1,0,0,0,0,n,-t,0,0,t,n,0,0,0,0,1),this}makeRotationY(l){const n=Math.cos(l),t=Math.sin(l);return this.set(n,0,t,0,0,1,0,0,-t,0,n,0,0,0,0,1),this}makeRotationZ(l){const n=Math.cos(l),t=Math.sin(l);return this.set(n,-t,0,0,t,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(l,n){const t=Math.cos(n),c=Math.sin(n),w=1-t,O=l.x,M=l.y,G=l.z,Y=w*O,Z=w*M;return this.set(Y*O+t,Y*M-c*G,Y*G+c*M,0,Y*M+c*G,Z*M+t,Z*G-c*O,0,Y*G-c*M,Z*G+c*O,w*G*G+t,0,0,0,0,1),this}makeScale(l,n,t){return this.set(l,0,0,0,0,n,0,0,0,0,t,0,0,0,0,1),this}makeShear(l,n,t,c,w,O){return this.set(1,t,w,0,l,1,O,0,n,c,1,0,0,0,0,1),this}compose(l,n,t){const c=this.elements,w=n._x,O=n._y,M=n._z,G=n._w,Y=w+w,Z=O+O,ee=M+M,te=w*Y,v=w*Z,he=w*ee,Te=O*Z,oe=O*ee,ie=M*ee,me=G*Y,fe=G*Z,Ne=G*ee,We=t.x,xe=t.y,je=t.z;return c[0]=(1-(Te+ie))*We,c[1]=(v+Ne)*We,c[2]=(he-fe)*We,c[3]=0,c[4]=(v-Ne)*xe,c[5]=(1-(te+ie))*xe,c[6]=(oe+me)*xe,c[7]=0,c[8]=(he+fe)*je,c[9]=(oe-me)*je,c[10]=(1-(te+Te))*je,c[11]=0,c[12]=l.x,c[13]=l.y,c[14]=l.z,c[15]=1,this}decompose(l,n,t){const c=this.elements;let w=TP.set(c[0],c[1],c[2]).length();const O=TP.set(c[4],c[5],c[6]).length(),M=TP.set(c[8],c[9],c[10]).length();this.determinant()<0&&(w=-w),l.x=c[12],l.y=c[13],l.z=c[14],Xw.copy(this);const Y=1/w,Z=1/O,ee=1/M;return Xw.elements[0]*=Y,Xw.elements[1]*=Y,Xw.elements[2]*=Y,Xw.elements[4]*=Z,Xw.elements[5]*=Z,Xw.elements[6]*=Z,Xw.elements[8]*=ee,Xw.elements[9]*=ee,Xw.elements[10]*=ee,n.setFromRotationMatrix(Xw),t.x=w,t.y=O,t.z=M,this}makePerspective(l,n,t,c,w,O,M=s7){const G=this.elements,Y=2*w/(n-l),Z=2*w/(t-c),ee=(n+l)/(n-l),te=(t+c)/(t-c);let v,he;if(M===s7)v=-(O+w)/(O-w),he=-2*O*w/(O-w);else if(M===ZU)v=-O/(O-w),he=-O*w/(O-w);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+M);return G[0]=Y,G[4]=0,G[8]=ee,G[12]=0,G[1]=0,G[5]=Z,G[9]=te,G[13]=0,G[2]=0,G[6]=0,G[10]=v,G[14]=he,G[3]=0,G[7]=0,G[11]=-1,G[15]=0,this}makeOrthographic(l,n,t,c,w,O,M=s7){const G=this.elements,Y=1/(n-l),Z=1/(t-c),ee=1/(O-w),te=(n+l)*Y,v=(t+c)*Z;let he,Te;if(M===s7)he=(O+w)*ee,Te=-2*ee;else if(M===ZU)he=w*ee,Te=-1*ee;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+M);return G[0]=2*Y,G[4]=0,G[8]=0,G[12]=-te,G[1]=0,G[5]=2*Z,G[9]=0,G[13]=-v,G[2]=0,G[6]=0,G[10]=Te,G[14]=-he,G[3]=0,G[7]=0,G[11]=0,G[15]=1,this}equals(l){const n=this.elements,t=l.elements;for(let c=0;c<16;c++)if(n[c]!==t[c])return!1;return!0}fromArray(l,n=0){for(let t=0;t<16;t++)this.elements[t]=l[t+n];return this}toArray(l=[],n=0){const t=this.elements;return l[n]=t[0],l[n+1]=t[1],l[n+2]=t[2],l[n+3]=t[3],l[n+4]=t[4],l[n+5]=t[5],l[n+6]=t[6],l[n+7]=t[7],l[n+8]=t[8],l[n+9]=t[9],l[n+10]=t[10],l[n+11]=t[11],l[n+12]=t[12],l[n+13]=t[13],l[n+14]=t[14],l[n+15]=t[15],l}}const TP=new lt,Xw=new Ps,Uk=new lt(0,0,0),Fk=new lt(1,1,1),zD=new lt,LB=new lt,P4=new lt,fW=new Ps,IW=new rB;class sF{constructor(l=0,n=0,t=0,c=sF.DEFAULT_ORDER){this.isEuler=!0,this._x=l,this._y=n,this._z=t,this._order=c}get x(){return this._x}set x(l){this._x=l,this._onChangeCallback()}get y(){return this._y}set y(l){this._y=l,this._onChangeCallback()}get z(){return this._z}set z(l){this._z=l,this._onChangeCallback()}get order(){return this._order}set order(l){this._order=l,this._onChangeCallback()}set(l,n,t,c=this._order){return this._x=l,this._y=n,this._z=t,this._order=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(l){return this._x=l._x,this._y=l._y,this._z=l._z,this._order=l._order,this._onChangeCallback(),this}setFromRotationMatrix(l,n=this._order,t=!0){const c=l.elements,w=c[0],O=c[4],M=c[8],G=c[1],Y=c[5],Z=c[9],ee=c[2],te=c[6],v=c[10];switch(n){case"XYZ":this._y=Math.asin(qf(M,-1,1)),Math.abs(M)<.9999999?(this._x=Math.atan2(-Z,v),this._z=Math.atan2(-O,w)):(this._x=Math.atan2(te,Y),this._z=0);break;case"YXZ":this._x=Math.asin(-qf(Z,-1,1)),Math.abs(Z)<.9999999?(this._y=Math.atan2(M,v),this._z=Math.atan2(G,Y)):(this._y=Math.atan2(-ee,w),this._z=0);break;case"ZXY":this._x=Math.asin(qf(te,-1,1)),Math.abs(te)<.9999999?(this._y=Math.atan2(-ee,v),this._z=Math.atan2(-O,Y)):(this._y=0,this._z=Math.atan2(G,w));break;case"ZYX":this._y=Math.asin(-qf(ee,-1,1)),Math.abs(ee)<.9999999?(this._x=Math.atan2(te,v),this._z=Math.atan2(G,w)):(this._x=0,this._z=Math.atan2(-O,Y));break;case"YZX":this._z=Math.asin(qf(G,-1,1)),Math.abs(G)<.9999999?(this._x=Math.atan2(-Z,Y),this._y=Math.atan2(-ee,w)):(this._x=0,this._y=Math.atan2(M,v));break;case"XZY":this._z=Math.asin(-qf(O,-1,1)),Math.abs(O)<.9999999?(this._x=Math.atan2(te,Y),this._y=Math.atan2(M,w)):(this._x=Math.atan2(-Z,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,t===!0&&this._onChangeCallback(),this}setFromQuaternion(l,n,t){return fW.makeRotationFromQuaternion(l),this.setFromRotationMatrix(fW,n,t)}setFromVector3(l,n=this._order){return this.set(l.x,l.y,l.z,n)}reorder(l){return IW.setFromEuler(this),this.setFromQuaternion(IW,l)}equals(l){return l._x===this._x&&l._y===this._y&&l._z===this._z&&l._order===this._order}fromArray(l){return this._x=l[0],this._y=l[1],this._z=l[2],l[3]!==void 0&&(this._order=l[3]),this._onChangeCallback(),this}toArray(l=[],n=0){return l[n]=this._x,l[n+1]=this._y,l[n+2]=this._z,l[n+3]=this._order,l}_onChange(l){return this._onChangeCallback=l,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sF.DEFAULT_ORDER="XYZ";class FV{constructor(){this.mask=1}set(l){this.mask=(1<<l|0)>>>0}enable(l){this.mask|=1<<l|0}enableAll(){this.mask=-1}toggle(l){this.mask^=1<<l|0}disable(l){this.mask&=~(1<<l|0)}disableAll(){this.mask=0}test(l){return(this.mask&l.mask)!==0}isEnabled(l){return(this.mask&(1<<l|0))!==0}}let Gk=0;const dW=new lt,RP=new rB,H6=new Ps,OB=new lt,jx=new lt,Vk=new lt,_k=new rB,yW=new lt(1,0,0),wW=new lt(0,1,0),EW=new lt(0,0,1),Wk={type:"added"},jk={type:"removed"};class Zf extends F9{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gk++}),this.uuid=M7(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zf.DEFAULT_UP.clone();const l=new lt,n=new sF,t=new rB,c=new lt(1,1,1);function w(){t.setFromEuler(n,!1)}function O(){n.setFromQuaternion(t,void 0,!1)}n._onChange(w),t._onChange(O),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:l},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:t},scale:{configurable:!0,enumerable:!0,value:c},modelViewMatrix:{value:new Ps},normalMatrix:{value:new Gl}}),this.matrix=new Ps,this.matrixWorld=new Ps,this.matrixAutoUpdate=Zf.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zf.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new FV,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(l){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(l),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(l){return this.quaternion.premultiply(l),this}setRotationFromAxisAngle(l,n){this.quaternion.setFromAxisAngle(l,n)}setRotationFromEuler(l){this.quaternion.setFromEuler(l,!0)}setRotationFromMatrix(l){this.quaternion.setFromRotationMatrix(l)}setRotationFromQuaternion(l){this.quaternion.copy(l)}rotateOnAxis(l,n){return RP.setFromAxisAngle(l,n),this.quaternion.multiply(RP),this}rotateOnWorldAxis(l,n){return RP.setFromAxisAngle(l,n),this.quaternion.premultiply(RP),this}rotateX(l){return this.rotateOnAxis(yW,l)}rotateY(l){return this.rotateOnAxis(wW,l)}rotateZ(l){return this.rotateOnAxis(EW,l)}translateOnAxis(l,n){return dW.copy(l).applyQuaternion(this.quaternion),this.position.add(dW.multiplyScalar(n)),this}translateX(l){return this.translateOnAxis(yW,l)}translateY(l){return this.translateOnAxis(wW,l)}translateZ(l){return this.translateOnAxis(EW,l)}localToWorld(l){return this.updateWorldMatrix(!0,!1),l.applyMatrix4(this.matrixWorld)}worldToLocal(l){return this.updateWorldMatrix(!0,!1),l.applyMatrix4(H6.copy(this.matrixWorld).invert())}lookAt(l,n,t){l.isVector3?OB.copy(l):OB.set(l,n,t);const c=this.parent;this.updateWorldMatrix(!0,!1),jx.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?H6.lookAt(jx,OB,this.up):H6.lookAt(OB,jx,this.up),this.quaternion.setFromRotationMatrix(H6),c&&(H6.extractRotation(c.matrixWorld),RP.setFromRotationMatrix(H6),this.quaternion.premultiply(RP.invert()))}add(l){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return l===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",l),this):(l&&l.isObject3D?(l.parent!==null&&l.parent.remove(l),l.parent=this,this.children.push(l),l.dispatchEvent(Wk)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",l),this)}remove(l){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.remove(arguments[t]);return this}const n=this.children.indexOf(l);return n!==-1&&(l.parent=null,this.children.splice(n,1),l.dispatchEvent(jk)),this}removeFromParent(){const l=this.parent;return l!==null&&l.remove(this),this}clear(){return this.remove(...this.children)}attach(l){return this.updateWorldMatrix(!0,!1),H6.copy(this.matrixWorld).invert(),l.parent!==null&&(l.parent.updateWorldMatrix(!0,!1),H6.multiply(l.parent.matrixWorld)),l.applyMatrix4(H6),this.add(l),l.updateWorldMatrix(!1,!0),this}getObjectById(l){return this.getObjectByProperty("id",l)}getObjectByName(l){return this.getObjectByProperty("name",l)}getObjectByProperty(l,n){if(this[l]===n)return this;for(let t=0,c=this.children.length;t<c;t++){const O=this.children[t].getObjectByProperty(l,n);if(O!==void 0)return O}}getObjectsByProperty(l,n,t=[]){this[l]===n&&t.push(this);const c=this.children;for(let w=0,O=c.length;w<O;w++)c[w].getObjectsByProperty(l,n,t);return t}getWorldPosition(l){return this.updateWorldMatrix(!0,!1),l.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(l){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jx,l,Vk),l}getWorldScale(l){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jx,_k,l),l}getWorldDirection(l){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return l.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(l){l(this);const n=this.children;for(let t=0,c=n.length;t<c;t++)n[t].traverse(l)}traverseVisible(l){if(this.visible===!1)return;l(this);const n=this.children;for(let t=0,c=n.length;t<c;t++)n[t].traverseVisible(l)}traverseAncestors(l){const n=this.parent;n!==null&&(l(n),n.traverseAncestors(l))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(l){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||l)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,l=!0);const n=this.children;for(let t=0,c=n.length;t<c;t++){const w=n[t];(w.matrixWorldAutoUpdate===!0||l===!0)&&w.updateMatrixWorld(l)}}updateWorldMatrix(l,n){const t=this.parent;if(l===!0&&t!==null&&t.matrixWorldAutoUpdate===!0&&t.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const c=this.children;for(let w=0,O=c.length;w<O;w++){const M=c[w];M.matrixWorldAutoUpdate===!0&&M.updateWorldMatrix(!1,!0)}}}toJSON(l){const n=l===void 0||typeof l=="string",t={};n&&(l={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},t.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const c={};c.uuid=this.uuid,c.type=this.type,this.name!==""&&(c.name=this.name),this.castShadow===!0&&(c.castShadow=!0),this.receiveShadow===!0&&(c.receiveShadow=!0),this.visible===!1&&(c.visible=!1),this.frustumCulled===!1&&(c.frustumCulled=!1),this.renderOrder!==0&&(c.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(c.userData=this.userData),c.layers=this.layers.mask,c.matrix=this.matrix.toArray(),c.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(c.matrixAutoUpdate=!1),this.isInstancedMesh&&(c.type="InstancedMesh",c.count=this.count,c.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(c.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(c.type="BatchedMesh",c.perObjectFrustumCulled=this.perObjectFrustumCulled,c.sortObjects=this.sortObjects,c.drawRanges=this._drawRanges,c.reservedRanges=this._reservedRanges,c.visibility=this._visibility,c.active=this._active,c.bounds=this._bounds.map(M=>({boxInitialized:M.boxInitialized,boxMin:M.box.min.toArray(),boxMax:M.box.max.toArray(),sphereInitialized:M.sphereInitialized,sphereRadius:M.sphere.radius,sphereCenter:M.sphere.center.toArray()})),c.maxGeometryCount=this._maxGeometryCount,c.maxVertexCount=this._maxVertexCount,c.maxIndexCount=this._maxIndexCount,c.geometryInitialized=this._geometryInitialized,c.geometryCount=this._geometryCount,c.matricesTexture=this._matricesTexture.toJSON(l),this.boundingSphere!==null&&(c.boundingSphere={center:c.boundingSphere.center.toArray(),radius:c.boundingSphere.radius}),this.boundingBox!==null&&(c.boundingBox={min:c.boundingBox.min.toArray(),max:c.boundingBox.max.toArray()}));function w(M,G){return M[G.uuid]===void 0&&(M[G.uuid]=G.toJSON(l)),G.uuid}if(this.isScene)this.background&&(this.background.isColor?c.background=this.background.toJSON():this.background.isTexture&&(c.background=this.background.toJSON(l).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(c.environment=this.environment.toJSON(l).uuid);else if(this.isMesh||this.isLine||this.isPoints){c.geometry=w(l.geometries,this.geometry);const M=this.geometry.parameters;if(M!==void 0&&M.shapes!==void 0){const G=M.shapes;if(Array.isArray(G))for(let Y=0,Z=G.length;Y<Z;Y++){const ee=G[Y];w(l.shapes,ee)}else w(l.shapes,G)}}if(this.isSkinnedMesh&&(c.bindMode=this.bindMode,c.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(w(l.skeletons,this.skeleton),c.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const M=[];for(let G=0,Y=this.material.length;G<Y;G++)M.push(w(l.materials,this.material[G]));c.material=M}else c.material=w(l.materials,this.material);if(this.children.length>0){c.children=[];for(let M=0;M<this.children.length;M++)c.children.push(this.children[M].toJSON(l).object)}if(this.animations.length>0){c.animations=[];for(let M=0;M<this.animations.length;M++){const G=this.animations[M];c.animations.push(w(l.animations,G))}}if(n){const M=O(l.geometries),G=O(l.materials),Y=O(l.textures),Z=O(l.images),ee=O(l.shapes),te=O(l.skeletons),v=O(l.animations),he=O(l.nodes);M.length>0&&(t.geometries=M),G.length>0&&(t.materials=G),Y.length>0&&(t.textures=Y),Z.length>0&&(t.images=Z),ee.length>0&&(t.shapes=ee),te.length>0&&(t.skeletons=te),v.length>0&&(t.animations=v),he.length>0&&(t.nodes=he)}return t.object=c,t;function O(M){const G=[];for(const Y in M){const Z=M[Y];delete Z.metadata,G.push(Z)}return G}}clone(l){return new this.constructor().copy(this,l)}copy(l,n=!0){if(this.name=l.name,this.up.copy(l.up),this.position.copy(l.position),this.rotation.order=l.rotation.order,this.quaternion.copy(l.quaternion),this.scale.copy(l.scale),this.matrix.copy(l.matrix),this.matrixWorld.copy(l.matrixWorld),this.matrixAutoUpdate=l.matrixAutoUpdate,this.matrixWorldAutoUpdate=l.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=l.matrixWorldNeedsUpdate,this.layers.mask=l.layers.mask,this.visible=l.visible,this.castShadow=l.castShadow,this.receiveShadow=l.receiveShadow,this.frustumCulled=l.frustumCulled,this.renderOrder=l.renderOrder,this.animations=l.animations.slice(),this.userData=JSON.parse(JSON.stringify(l.userData)),n===!0)for(let t=0;t<l.children.length;t++){const c=l.children[t];this.add(c.clone())}return this}}Zf.DEFAULT_UP=new lt(0,1,0);Zf.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zf.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vw=new lt,B6=new lt,yG=new lt,U6=new lt,pP=new lt,mP=new lt,TW=new lt,wG=new lt,EG=new lt,TG=new lt;let gB=!1;class Kf{constructor(l=new lt,n=new lt,t=new lt){this.a=l,this.b=n,this.c=t}static getNormal(l,n,t,c){c.subVectors(t,n),vw.subVectors(l,n),c.cross(vw);const w=c.lengthSq();return w>0?c.multiplyScalar(1/Math.sqrt(w)):c.set(0,0,0)}static getBarycoord(l,n,t,c,w){vw.subVectors(c,n),B6.subVectors(t,n),yG.subVectors(l,n);const O=vw.dot(vw),M=vw.dot(B6),G=vw.dot(yG),Y=B6.dot(B6),Z=B6.dot(yG),ee=O*Y-M*M;if(ee===0)return w.set(0,0,0),null;const te=1/ee,v=(Y*G-M*Z)*te,he=(O*Z-M*G)*te;return w.set(1-v-he,he,v)}static containsPoint(l,n,t,c){return this.getBarycoord(l,n,t,c,U6)===null?!1:U6.x>=0&&U6.y>=0&&U6.x+U6.y<=1}static getUV(l,n,t,c,w,O,M,G){return gB===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),gB=!0),this.getInterpolation(l,n,t,c,w,O,M,G)}static getInterpolation(l,n,t,c,w,O,M,G){return this.getBarycoord(l,n,t,c,U6)===null?(G.x=0,G.y=0,"z"in G&&(G.z=0),"w"in G&&(G.w=0),null):(G.setScalar(0),G.addScaledVector(w,U6.x),G.addScaledVector(O,U6.y),G.addScaledVector(M,U6.z),G)}static isFrontFacing(l,n,t,c){return vw.subVectors(t,n),B6.subVectors(l,n),vw.cross(B6).dot(c)<0}set(l,n,t){return this.a.copy(l),this.b.copy(n),this.c.copy(t),this}setFromPointsAndIndices(l,n,t,c){return this.a.copy(l[n]),this.b.copy(l[t]),this.c.copy(l[c]),this}setFromAttributeAndIndices(l,n,t,c){return this.a.fromBufferAttribute(l,n),this.b.fromBufferAttribute(l,t),this.c.fromBufferAttribute(l,c),this}clone(){return new this.constructor().copy(this)}copy(l){return this.a.copy(l.a),this.b.copy(l.b),this.c.copy(l.c),this}getArea(){return vw.subVectors(this.c,this.b),B6.subVectors(this.a,this.b),vw.cross(B6).length()*.5}getMidpoint(l){return l.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(l){return Kf.getNormal(this.a,this.b,this.c,l)}getPlane(l){return l.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(l,n){return Kf.getBarycoord(l,this.a,this.b,this.c,n)}getUV(l,n,t,c,w){return gB===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),gB=!0),Kf.getInterpolation(l,this.a,this.b,this.c,n,t,c,w)}getInterpolation(l,n,t,c,w){return Kf.getInterpolation(l,this.a,this.b,this.c,n,t,c,w)}containsPoint(l){return Kf.containsPoint(l,this.a,this.b,this.c)}isFrontFacing(l){return Kf.isFrontFacing(this.a,this.b,this.c,l)}intersectsBox(l){return l.intersectsTriangle(this)}closestPointToPoint(l,n){const t=this.a,c=this.b,w=this.c;let O,M;pP.subVectors(c,t),mP.subVectors(w,t),wG.subVectors(l,t);const G=pP.dot(wG),Y=mP.dot(wG);if(G<=0&&Y<=0)return n.copy(t);EG.subVectors(l,c);const Z=pP.dot(EG),ee=mP.dot(EG);if(Z>=0&&ee<=Z)return n.copy(c);const te=G*ee-Z*Y;if(te<=0&&G>=0&&Z<=0)return O=G/(G-Z),n.copy(t).addScaledVector(pP,O);TG.subVectors(l,w);const v=pP.dot(TG),he=mP.dot(TG);if(he>=0&&v<=he)return n.copy(w);const Te=v*Y-G*he;if(Te<=0&&Y>=0&&he<=0)return M=Y/(Y-he),n.copy(t).addScaledVector(mP,M);const oe=Z*he-v*ee;if(oe<=0&&ee-Z>=0&&v-he>=0)return TW.subVectors(w,c),M=(ee-Z)/(ee-Z+(v-he)),n.copy(c).addScaledVector(TW,M);const ie=1/(oe+Te+te);return O=Te*ie,M=te*ie,n.copy(t).addScaledVector(pP,O).addScaledVector(mP,M)}equals(l){return l.a.equals(this.a)&&l.b.equals(this.b)&&l.c.equals(this.c)}}const Zj={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kD={h:0,s:0,l:0},PB={h:0,s:0,l:0};function RG(e,l,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(l-e)*6*n:n<1/2?l:n<2/3?e+(l-e)*6*(2/3-n):e}class ns{constructor(l,n,t){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(l,n,t)}set(l,n,t){if(n===void 0&&t===void 0){const c=l;c&&c.isColor?this.copy(c):typeof c=="number"?this.setHex(c):typeof c=="string"&&this.setStyle(c)}else this.setRGB(l,n,t);return this}setScalar(l){return this.r=l,this.g=l,this.b=l,this}setHex(l,n=kf){return l=Math.floor(l),this.r=(l>>16&255)/255,this.g=(l>>8&255)/255,this.b=(l&255)/255,ks.toWorkingColorSpace(this,n),this}setRGB(l,n,t,c=ks.workingColorSpace){return this.r=l,this.g=n,this.b=t,ks.toWorkingColorSpace(this,c),this}setHSL(l,n,t,c=ks.workingColorSpace){if(l=UV(l,1),n=qf(n,0,1),t=qf(t,0,1),n===0)this.r=this.g=this.b=t;else{const w=t<=.5?t*(1+n):t+n-t*n,O=2*t-w;this.r=RG(O,w,l+1/3),this.g=RG(O,w,l),this.b=RG(O,w,l-1/3)}return ks.toWorkingColorSpace(this,c),this}setStyle(l,n=kf){function t(w){w!==void 0&&parseFloat(w)<1&&console.warn("THREE.Color: Alpha component of "+l+" will be ignored.")}let c;if(c=/^(\w+)\(([^\)]*)\)/.exec(l)){let w;const O=c[1],M=c[2];switch(O){case"rgb":case"rgba":if(w=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(M))return t(w[4]),this.setRGB(Math.min(255,parseInt(w[1],10))/255,Math.min(255,parseInt(w[2],10))/255,Math.min(255,parseInt(w[3],10))/255,n);if(w=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(M))return t(w[4]),this.setRGB(Math.min(100,parseInt(w[1],10))/100,Math.min(100,parseInt(w[2],10))/100,Math.min(100,parseInt(w[3],10))/100,n);break;case"hsl":case"hsla":if(w=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(M))return t(w[4]),this.setHSL(parseFloat(w[1])/360,parseFloat(w[2])/100,parseFloat(w[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+l)}}else if(c=/^\#([A-Fa-f\d]+)$/.exec(l)){const w=c[1],O=w.length;if(O===3)return this.setRGB(parseInt(w.charAt(0),16)/15,parseInt(w.charAt(1),16)/15,parseInt(w.charAt(2),16)/15,n);if(O===6)return this.setHex(parseInt(w,16),n);console.warn("THREE.Color: Invalid hex color "+l)}else if(l&&l.length>0)return this.setColorName(l,n);return this}setColorName(l,n=kf){const t=Zj[l.toLowerCase()];return t!==void 0?this.setHex(t,n):console.warn("THREE.Color: Unknown color "+l),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(l){return this.r=l.r,this.g=l.g,this.b=l.b,this}copySRGBToLinear(l){return this.r=E9(l.r),this.g=E9(l.g),this.b=E9(l.b),this}copyLinearToSRGB(l){return this.r=aG(l.r),this.g=aG(l.g),this.b=aG(l.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(l=kf){return ks.fromWorkingColorSpace(WI.copy(this),l),Math.round(qf(WI.r*255,0,255))*65536+Math.round(qf(WI.g*255,0,255))*256+Math.round(qf(WI.b*255,0,255))}getHexString(l=kf){return("000000"+this.getHex(l).toString(16)).slice(-6)}getHSL(l,n=ks.workingColorSpace){ks.fromWorkingColorSpace(WI.copy(this),n);const t=WI.r,c=WI.g,w=WI.b,O=Math.max(t,c,w),M=Math.min(t,c,w);let G,Y;const Z=(M+O)/2;if(M===O)G=0,Y=0;else{const ee=O-M;switch(Y=Z<=.5?ee/(O+M):ee/(2-O-M),O){case t:G=(c-w)/ee+(c<w?6:0);break;case c:G=(w-t)/ee+2;break;case w:G=(t-c)/ee+4;break}G/=6}return l.h=G,l.s=Y,l.l=Z,l}getRGB(l,n=ks.workingColorSpace){return ks.fromWorkingColorSpace(WI.copy(this),n),l.r=WI.r,l.g=WI.g,l.b=WI.b,l}getStyle(l=kf){ks.fromWorkingColorSpace(WI.copy(this),l);const n=WI.r,t=WI.g,c=WI.b;return l!==kf?`color(${l} ${n.toFixed(3)} ${t.toFixed(3)} ${c.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(t*255)},${Math.round(c*255)})`}offsetHSL(l,n,t){return this.getHSL(kD),this.setHSL(kD.h+l,kD.s+n,kD.l+t)}add(l){return this.r+=l.r,this.g+=l.g,this.b+=l.b,this}addColors(l,n){return this.r=l.r+n.r,this.g=l.g+n.g,this.b=l.b+n.b,this}addScalar(l){return this.r+=l,this.g+=l,this.b+=l,this}sub(l){return this.r=Math.max(0,this.r-l.r),this.g=Math.max(0,this.g-l.g),this.b=Math.max(0,this.b-l.b),this}multiply(l){return this.r*=l.r,this.g*=l.g,this.b*=l.b,this}multiplyScalar(l){return this.r*=l,this.g*=l,this.b*=l,this}lerp(l,n){return this.r+=(l.r-this.r)*n,this.g+=(l.g-this.g)*n,this.b+=(l.b-this.b)*n,this}lerpColors(l,n,t){return this.r=l.r+(n.r-l.r)*t,this.g=l.g+(n.g-l.g)*t,this.b=l.b+(n.b-l.b)*t,this}lerpHSL(l,n){this.getHSL(kD),l.getHSL(PB);const t=CH(kD.h,PB.h,n),c=CH(kD.s,PB.s,n),w=CH(kD.l,PB.l,n);return this.setHSL(t,c,w),this}setFromVector3(l){return this.r=l.x,this.g=l.y,this.b=l.z,this}applyMatrix3(l){const n=this.r,t=this.g,c=this.b,w=l.elements;return this.r=w[0]*n+w[3]*t+w[6]*c,this.g=w[1]*n+w[4]*t+w[7]*c,this.b=w[2]*n+w[5]*t+w[8]*c,this}equals(l){return l.r===this.r&&l.g===this.g&&l.b===this.b}fromArray(l,n=0){return this.r=l[n],this.g=l[n+1],this.b=l[n+2],this}toArray(l=[],n=0){return l[n]=this.r,l[n+1]=this.g,l[n+2]=this.b,l}fromBufferAttribute(l,n){return this.r=l.getX(n),this.g=l.getY(n),this.b=l.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const WI=new ns;ns.NAMES=Zj;let Yk=0;class fO extends F9{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yk++}),this.uuid=M7(),this.name="",this.type="Material",this.blending=y9,this.side=ip,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qG,this.blendDst=KG,this.blendEquation=V8,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ns(0,0,0),this.blendAlpha=0,this.depthFunc=qU,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rW,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=IP,this.stencilZFail=IP,this.stencilZPass=IP,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(l){this._alphaTest>0!=l>0&&this.version++,this._alphaTest=l}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(l){if(l!==void 0)for(const n in l){const t=l[n];if(t===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const c=this[n];if(c===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}c&&c.isColor?c.set(t):c&&c.isVector3&&t&&t.isVector3?c.copy(t):this[n]=t}}toJSON(l){const n=l===void 0||typeof l=="string";n&&(l={textures:{},images:{}});const t={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen!==void 0&&(t.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(t.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(t.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(t.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(t.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(l).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(l).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(l).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(t.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(t.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(t.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(t.iridescenceMap=this.iridescenceMap.toJSON(l).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(t.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(l).uuid),this.anisotropy!==void 0&&(t.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(t.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(t.anisotropyMap=this.anisotropyMap.toJSON(l).uuid),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(l).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(l).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(l).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(l).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(l).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(l).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(l).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(l).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(l).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(l).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(l).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(l).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(t.specularIntensityMap=this.specularIntensityMap.toJSON(l).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(t.specularColorMap=this.specularColorMap.toJSON(l).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(l).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(l).uuid),this.transmission!==void 0&&(t.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(t.transmissionMap=this.transmissionMap.toJSON(l).uuid),this.thickness!==void 0&&(t.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(t.thicknessMap=this.thicknessMap.toJSON(l).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(t.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(t.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==y9&&(t.blending=this.blending),this.side!==ip&&(t.side=this.side),this.vertexColors===!0&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=!0),this.blendSrc!==qG&&(t.blendSrc=this.blendSrc),this.blendDst!==KG&&(t.blendDst=this.blendDst),this.blendEquation!==V8&&(t.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(t.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(t.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(t.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(t.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(t.blendAlpha=this.blendAlpha),this.depthFunc!==qU&&(t.depthFunc=this.depthFunc),this.depthTest===!1&&(t.depthTest=this.depthTest),this.depthWrite===!1&&(t.depthWrite=this.depthWrite),this.colorWrite===!1&&(t.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(t.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rW&&(t.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(t.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(t.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==IP&&(t.stencilFail=this.stencilFail),this.stencilZFail!==IP&&(t.stencilZFail=this.stencilZFail),this.stencilZPass!==IP&&(t.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(t.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaHash===!0&&(t.alphaHash=!0),this.alphaToCoverage===!0&&(t.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=!0),this.forceSinglePass===!0&&(t.forceSinglePass=!0),this.wireframe===!0&&(t.wireframe=!0),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(t.flatShading=!0),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),this.fog===!1&&(t.fog=!1),Object.keys(this.userData).length>0&&(t.userData=this.userData);function c(w){const O=[];for(const M in w){const G=w[M];delete G.metadata,O.push(G)}return O}if(n){const w=c(l.textures),O=c(l.images);w.length>0&&(t.textures=w),O.length>0&&(t.images=O)}return t}clone(){return new this.constructor().copy(this)}copy(l){this.name=l.name,this.blending=l.blending,this.side=l.side,this.vertexColors=l.vertexColors,this.opacity=l.opacity,this.transparent=l.transparent,this.blendSrc=l.blendSrc,this.blendDst=l.blendDst,this.blendEquation=l.blendEquation,this.blendSrcAlpha=l.blendSrcAlpha,this.blendDstAlpha=l.blendDstAlpha,this.blendEquationAlpha=l.blendEquationAlpha,this.blendColor.copy(l.blendColor),this.blendAlpha=l.blendAlpha,this.depthFunc=l.depthFunc,this.depthTest=l.depthTest,this.depthWrite=l.depthWrite,this.stencilWriteMask=l.stencilWriteMask,this.stencilFunc=l.stencilFunc,this.stencilRef=l.stencilRef,this.stencilFuncMask=l.stencilFuncMask,this.stencilFail=l.stencilFail,this.stencilZFail=l.stencilZFail,this.stencilZPass=l.stencilZPass,this.stencilWrite=l.stencilWrite;const n=l.clippingPlanes;let t=null;if(n!==null){const c=n.length;t=new Array(c);for(let w=0;w!==c;++w)t[w]=n[w].clone()}return this.clippingPlanes=t,this.clipIntersection=l.clipIntersection,this.clipShadows=l.clipShadows,this.shadowSide=l.shadowSide,this.colorWrite=l.colorWrite,this.precision=l.precision,this.polygonOffset=l.polygonOffset,this.polygonOffsetFactor=l.polygonOffsetFactor,this.polygonOffsetUnits=l.polygonOffsetUnits,this.dithering=l.dithering,this.alphaTest=l.alphaTest,this.alphaHash=l.alphaHash,this.alphaToCoverage=l.alphaToCoverage,this.premultipliedAlpha=l.premultipliedAlpha,this.forceSinglePass=l.forceSinglePass,this.visible=l.visible,this.toneMapped=l.toneMapped,this.userData=JSON.parse(JSON.stringify(l.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(l){l===!0&&this.version++}}class Jj extends fO{constructor(l){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ns(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=MV,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(l)}copy(l){return super.copy(l),this.color.copy(l.color),this.map=l.map,this.lightMap=l.lightMap,this.lightMapIntensity=l.lightMapIntensity,this.aoMap=l.aoMap,this.aoMapIntensity=l.aoMapIntensity,this.specularMap=l.specularMap,this.alphaMap=l.alphaMap,this.envMap=l.envMap,this.combine=l.combine,this.reflectivity=l.reflectivity,this.refractionRatio=l.refractionRatio,this.wireframe=l.wireframe,this.wireframeLinewidth=l.wireframeLinewidth,this.wireframeLinecap=l.wireframeLinecap,this.wireframeLinejoin=l.wireframeLinejoin,this.fog=l.fog,this}}const pi=new lt,CB=new Dl;class p0{constructor(l,n,t=!1){if(Array.isArray(l))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=l,this.itemSize=n,this.count=l!==void 0?l.length/n:0,this.normalized=t,this.usage=XG,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=LN,this.version=0}onUploadCallback(){}set needsUpdate(l){l===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(l){return this.usage=l,this}addUpdateRange(l,n){this.updateRanges.push({start:l,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(l){return this.name=l.name,this.array=new l.array.constructor(l.array),this.itemSize=l.itemSize,this.count=l.count,this.normalized=l.normalized,this.usage=l.usage,this.gpuType=l.gpuType,this}copyAt(l,n,t){l*=this.itemSize,t*=n.itemSize;for(let c=0,w=this.itemSize;c<w;c++)this.array[l+c]=n.array[t+c];return this}copyArray(l){return this.array.set(l),this}applyMatrix3(l){if(this.itemSize===2)for(let n=0,t=this.count;n<t;n++)CB.fromBufferAttribute(this,n),CB.applyMatrix3(l),this.setXY(n,CB.x,CB.y);else if(this.itemSize===3)for(let n=0,t=this.count;n<t;n++)pi.fromBufferAttribute(this,n),pi.applyMatrix3(l),this.setXYZ(n,pi.x,pi.y,pi.z);return this}applyMatrix4(l){for(let n=0,t=this.count;n<t;n++)pi.fromBufferAttribute(this,n),pi.applyMatrix4(l),this.setXYZ(n,pi.x,pi.y,pi.z);return this}applyNormalMatrix(l){for(let n=0,t=this.count;n<t;n++)pi.fromBufferAttribute(this,n),pi.applyNormalMatrix(l),this.setXYZ(n,pi.x,pi.y,pi.z);return this}transformDirection(l){for(let n=0,t=this.count;n<t;n++)pi.fromBufferAttribute(this,n),pi.transformDirection(l),this.setXYZ(n,pi.x,pi.y,pi.z);return this}set(l,n=0){return this.array.set(l,n),this}getComponent(l,n){let t=this.array[l*this.itemSize+n];return this.normalized&&(t=tR(t,this.array)),t}setComponent(l,n,t){return this.normalized&&(t=zs(t,this.array)),this.array[l*this.itemSize+n]=t,this}getX(l){let n=this.array[l*this.itemSize];return this.normalized&&(n=tR(n,this.array)),n}setX(l,n){return this.normalized&&(n=zs(n,this.array)),this.array[l*this.itemSize]=n,this}getY(l){let n=this.array[l*this.itemSize+1];return this.normalized&&(n=tR(n,this.array)),n}setY(l,n){return this.normalized&&(n=zs(n,this.array)),this.array[l*this.itemSize+1]=n,this}getZ(l){let n=this.array[l*this.itemSize+2];return this.normalized&&(n=tR(n,this.array)),n}setZ(l,n){return this.normalized&&(n=zs(n,this.array)),this.array[l*this.itemSize+2]=n,this}getW(l){let n=this.array[l*this.itemSize+3];return this.normalized&&(n=tR(n,this.array)),n}setW(l,n){return this.normalized&&(n=zs(n,this.array)),this.array[l*this.itemSize+3]=n,this}setXY(l,n,t){return l*=this.itemSize,this.normalized&&(n=zs(n,this.array),t=zs(t,this.array)),this.array[l+0]=n,this.array[l+1]=t,this}setXYZ(l,n,t,c){return l*=this.itemSize,this.normalized&&(n=zs(n,this.array),t=zs(t,this.array),c=zs(c,this.array)),this.array[l+0]=n,this.array[l+1]=t,this.array[l+2]=c,this}setXYZW(l,n,t,c,w){return l*=this.itemSize,this.normalized&&(n=zs(n,this.array),t=zs(t,this.array),c=zs(c,this.array),w=zs(w,this.array)),this.array[l+0]=n,this.array[l+1]=t,this.array[l+2]=c,this.array[l+3]=w,this}onUpload(l){return this.onUploadCallback=l,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const l={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(l.name=this.name),this.usage!==XG&&(l.usage=this.usage),l}}class Xj extends p0{constructor(l,n,t){super(new Uint16Array(l),n,t)}}class vj extends p0{constructor(l,n,t){super(new Uint32Array(l),n,t)}}class Qu extends p0{constructor(l,n,t){super(new Float32Array(l),n,t)}}let zk=0;const c2=new Ps,pG=new Zf,DP=new lt,C4=new Uc,Yx=new Uc,Pc=new lt;class Jf extends F9{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zk++}),this.uuid=M7(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(l){return Array.isArray(l)?this.index=new(qj(l)?vj:Xj)(l,1):this.index=l,this}getAttribute(l){return this.attributes[l]}setAttribute(l,n){return this.attributes[l]=n,this}deleteAttribute(l){return delete this.attributes[l],this}hasAttribute(l){return this.attributes[l]!==void 0}addGroup(l,n,t=0){this.groups.push({start:l,count:n,materialIndex:t})}clearGroups(){this.groups=[]}setDrawRange(l,n){this.drawRange.start=l,this.drawRange.count=n}applyMatrix4(l){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(l),n.needsUpdate=!0);const t=this.attributes.normal;if(t!==void 0){const w=new Gl().getNormalMatrix(l);t.applyNormalMatrix(w),t.needsUpdate=!0}const c=this.attributes.tangent;return c!==void 0&&(c.transformDirection(l),c.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(l){return c2.makeRotationFromQuaternion(l),this.applyMatrix4(c2),this}rotateX(l){return c2.makeRotationX(l),this.applyMatrix4(c2),this}rotateY(l){return c2.makeRotationY(l),this.applyMatrix4(c2),this}rotateZ(l){return c2.makeRotationZ(l),this.applyMatrix4(c2),this}translate(l,n,t){return c2.makeTranslation(l,n,t),this.applyMatrix4(c2),this}scale(l,n,t){return c2.makeScale(l,n,t),this.applyMatrix4(c2),this}lookAt(l){return pG.lookAt(l),pG.updateMatrix(),this.applyMatrix4(pG.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(DP).negate(),this.translate(DP.x,DP.y,DP.z),this}setFromPoints(l){const n=[];for(let t=0,c=l.length;t<c;t++){const w=l[t];n.push(w.x,w.y,w.z||0)}return this.setAttribute("position",new Qu(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Uc);const l=this.attributes.position,n=this.morphAttributes.position;if(l&&l.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new lt(-1/0,-1/0,-1/0),new lt(1/0,1/0,1/0));return}if(l!==void 0){if(this.boundingBox.setFromBufferAttribute(l),n)for(let t=0,c=n.length;t<c;t++){const w=n[t];C4.setFromBufferAttribute(w),this.morphTargetsRelative?(Pc.addVectors(this.boundingBox.min,C4.min),this.boundingBox.expandByPoint(Pc),Pc.addVectors(this.boundingBox.max,C4.max),this.boundingBox.expandByPoint(Pc)):(this.boundingBox.expandByPoint(C4.min),this.boundingBox.expandByPoint(C4.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hO);const l=this.attributes.position,n=this.morphAttributes.position;if(l&&l.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new lt,1/0);return}if(l){const t=this.boundingSphere.center;if(C4.setFromBufferAttribute(l),n)for(let w=0,O=n.length;w<O;w++){const M=n[w];Yx.setFromBufferAttribute(M),this.morphTargetsRelative?(Pc.addVectors(C4.min,Yx.min),C4.expandByPoint(Pc),Pc.addVectors(C4.max,Yx.max),C4.expandByPoint(Pc)):(C4.expandByPoint(Yx.min),C4.expandByPoint(Yx.max))}C4.getCenter(t);let c=0;for(let w=0,O=l.count;w<O;w++)Pc.fromBufferAttribute(l,w),c=Math.max(c,t.distanceToSquared(Pc));if(n)for(let w=0,O=n.length;w<O;w++){const M=n[w],G=this.morphTargetsRelative;for(let Y=0,Z=M.count;Y<Z;Y++)Pc.fromBufferAttribute(M,Y),G&&(DP.fromBufferAttribute(l,Y),Pc.add(DP)),c=Math.max(c,t.distanceToSquared(Pc))}this.boundingSphere.radius=Math.sqrt(c),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const l=this.index,n=this.attributes;if(l===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const t=l.array,c=n.position.array,w=n.normal.array,O=n.uv.array,M=c.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new p0(new Float32Array(4*M),4));const G=this.getAttribute("tangent").array,Y=[],Z=[];for(let Le=0;Le<M;Le++)Y[Le]=new lt,Z[Le]=new lt;const ee=new lt,te=new lt,v=new lt,he=new Dl,Te=new Dl,oe=new Dl,ie=new lt,me=new lt;function fe(Le,ve,nt){ee.fromArray(c,Le*3),te.fromArray(c,ve*3),v.fromArray(c,nt*3),he.fromArray(O,Le*2),Te.fromArray(O,ve*2),oe.fromArray(O,nt*2),te.sub(ee),v.sub(ee),Te.sub(he),oe.sub(he);const ht=1/(Te.x*oe.y-oe.x*Te.y);isFinite(ht)&&(ie.copy(te).multiplyScalar(oe.y).addScaledVector(v,-Te.y).multiplyScalar(ht),me.copy(v).multiplyScalar(Te.x).addScaledVector(te,-oe.x).multiplyScalar(ht),Y[Le].add(ie),Y[ve].add(ie),Y[nt].add(ie),Z[Le].add(me),Z[ve].add(me),Z[nt].add(me))}let Ne=this.groups;Ne.length===0&&(Ne=[{start:0,count:t.length}]);for(let Le=0,ve=Ne.length;Le<ve;++Le){const nt=Ne[Le],ht=nt.start,Xe=nt.count;for(let at=ht,It=ht+Xe;at<It;at+=3)fe(t[at+0],t[at+1],t[at+2])}const We=new lt,xe=new lt,je=new lt,et=new lt;function ge(Le){je.fromArray(w,Le*3),et.copy(je);const ve=Y[Le];We.copy(ve),We.sub(je.multiplyScalar(je.dot(ve))).normalize(),xe.crossVectors(et,ve);const ht=xe.dot(Z[Le])<0?-1:1;G[Le*4]=We.x,G[Le*4+1]=We.y,G[Le*4+2]=We.z,G[Le*4+3]=ht}for(let Le=0,ve=Ne.length;Le<ve;++Le){const nt=Ne[Le],ht=nt.start,Xe=nt.count;for(let at=ht,It=ht+Xe;at<It;at+=3)ge(t[at+0]),ge(t[at+1]),ge(t[at+2])}}computeVertexNormals(){const l=this.index,n=this.getAttribute("position");if(n!==void 0){let t=this.getAttribute("normal");if(t===void 0)t=new p0(new Float32Array(n.count*3),3),this.setAttribute("normal",t);else for(let te=0,v=t.count;te<v;te++)t.setXYZ(te,0,0,0);const c=new lt,w=new lt,O=new lt,M=new lt,G=new lt,Y=new lt,Z=new lt,ee=new lt;if(l)for(let te=0,v=l.count;te<v;te+=3){const he=l.getX(te+0),Te=l.getX(te+1),oe=l.getX(te+2);c.fromBufferAttribute(n,he),w.fromBufferAttribute(n,Te),O.fromBufferAttribute(n,oe),Z.subVectors(O,w),ee.subVectors(c,w),Z.cross(ee),M.fromBufferAttribute(t,he),G.fromBufferAttribute(t,Te),Y.fromBufferAttribute(t,oe),M.add(Z),G.add(Z),Y.add(Z),t.setXYZ(he,M.x,M.y,M.z),t.setXYZ(Te,G.x,G.y,G.z),t.setXYZ(oe,Y.x,Y.y,Y.z)}else for(let te=0,v=n.count;te<v;te+=3)c.fromBufferAttribute(n,te+0),w.fromBufferAttribute(n,te+1),O.fromBufferAttribute(n,te+2),Z.subVectors(O,w),ee.subVectors(c,w),Z.cross(ee),t.setXYZ(te+0,Z.x,Z.y,Z.z),t.setXYZ(te+1,Z.x,Z.y,Z.z),t.setXYZ(te+2,Z.x,Z.y,Z.z);this.normalizeNormals(),t.needsUpdate=!0}}normalizeNormals(){const l=this.attributes.normal;for(let n=0,t=l.count;n<t;n++)Pc.fromBufferAttribute(l,n),Pc.normalize(),l.setXYZ(n,Pc.x,Pc.y,Pc.z)}toNonIndexed(){function l(M,G){const Y=M.array,Z=M.itemSize,ee=M.normalized,te=new Y.constructor(G.length*Z);let v=0,he=0;for(let Te=0,oe=G.length;Te<oe;Te++){M.isInterleavedBufferAttribute?v=G[Te]*M.data.stride+M.offset:v=G[Te]*Z;for(let ie=0;ie<Z;ie++)te[he++]=Y[v++]}return new p0(te,Z,ee)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Jf,t=this.index.array,c=this.attributes;for(const M in c){const G=c[M],Y=l(G,t);n.setAttribute(M,Y)}const w=this.morphAttributes;for(const M in w){const G=[],Y=w[M];for(let Z=0,ee=Y.length;Z<ee;Z++){const te=Y[Z],v=l(te,t);G.push(v)}n.morphAttributes[M]=G}n.morphTargetsRelative=this.morphTargetsRelative;const O=this.groups;for(let M=0,G=O.length;M<G;M++){const Y=O[M];n.addGroup(Y.start,Y.count,Y.materialIndex)}return n}toJSON(){const l={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),Object.keys(this.userData).length>0&&(l.userData=this.userData),this.parameters!==void 0){const G=this.parameters;for(const Y in G)G[Y]!==void 0&&(l[Y]=G[Y]);return l}l.data={attributes:{}};const n=this.index;n!==null&&(l.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const t=this.attributes;for(const G in t){const Y=t[G];l.data.attributes[G]=Y.toJSON(l.data)}const c={};let w=!1;for(const G in this.morphAttributes){const Y=this.morphAttributes[G],Z=[];for(let ee=0,te=Y.length;ee<te;ee++){const v=Y[ee];Z.push(v.toJSON(l.data))}Z.length>0&&(c[G]=Z,w=!0)}w&&(l.data.morphAttributes=c,l.data.morphTargetsRelative=this.morphTargetsRelative);const O=this.groups;O.length>0&&(l.data.groups=JSON.parse(JSON.stringify(O)));const M=this.boundingSphere;return M!==null&&(l.data.boundingSphere={center:M.center.toArray(),radius:M.radius}),l}clone(){return new this.constructor().copy(this)}copy(l){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=l.name;const t=l.index;t!==null&&this.setIndex(t.clone(n));const c=l.attributes;for(const Y in c){const Z=c[Y];this.setAttribute(Y,Z.clone(n))}const w=l.morphAttributes;for(const Y in w){const Z=[],ee=w[Y];for(let te=0,v=ee.length;te<v;te++)Z.push(ee[te].clone(n));this.morphAttributes[Y]=Z}this.morphTargetsRelative=l.morphTargetsRelative;const O=l.groups;for(let Y=0,Z=O.length;Y<Z;Y++){const ee=O[Y];this.addGroup(ee.start,ee.count,ee.materialIndex)}const M=l.boundingBox;M!==null&&(this.boundingBox=M.clone());const G=l.boundingSphere;return G!==null&&(this.boundingSphere=G.clone()),this.drawRange.start=l.drawRange.start,this.drawRange.count=l.drawRange.count,this.userData=l.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const RW=new Ps,XS=new lF,bB=new hO,pW=new lt,NP=new lt,AP=new lt,SP=new lt,mG=new lt,MB=new lt,xB=new Dl,HB=new Dl,BB=new Dl,mW=new lt,DW=new lt,NW=new lt,UB=new lt,FB=new lt;class d2 extends Zf{constructor(l=new Jf,n=new Jj){super(),this.isMesh=!0,this.type="Mesh",this.geometry=l,this.material=n,this.updateMorphTargets()}copy(l,n){return super.copy(l,n),l.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=l.morphTargetInfluences.slice()),l.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},l.morphTargetDictionary)),this.material=Array.isArray(l.material)?l.material.slice():l.material,this.geometry=l.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,t=Object.keys(n);if(t.length>0){const c=n[t[0]];if(c!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let w=0,O=c.length;w<O;w++){const M=c[w].name||String(w);this.morphTargetInfluences.push(0),this.morphTargetDictionary[M]=w}}}}getVertexPosition(l,n){const t=this.geometry,c=t.attributes.position,w=t.morphAttributes.position,O=t.morphTargetsRelative;n.fromBufferAttribute(c,l);const M=this.morphTargetInfluences;if(w&&M){MB.set(0,0,0);for(let G=0,Y=w.length;G<Y;G++){const Z=M[G],ee=w[G];Z!==0&&(mG.fromBufferAttribute(ee,l),O?MB.addScaledVector(mG,Z):MB.addScaledVector(mG.sub(n),Z))}n.add(MB)}return n}raycast(l,n){const t=this.geometry,c=this.material,w=this.matrixWorld;c!==void 0&&(t.boundingSphere===null&&t.computeBoundingSphere(),bB.copy(t.boundingSphere),bB.applyMatrix4(w),XS.copy(l.ray).recast(l.near),!(bB.containsPoint(XS.origin)===!1&&(XS.intersectSphere(bB,pW)===null||XS.origin.distanceToSquared(pW)>(l.far-l.near)**2))&&(RW.copy(w).invert(),XS.copy(l.ray).applyMatrix4(RW),!(t.boundingBox!==null&&XS.intersectsBox(t.boundingBox)===!1)&&this._computeIntersections(l,n,XS)))}_computeIntersections(l,n,t){let c;const w=this.geometry,O=this.material,M=w.index,G=w.attributes.position,Y=w.attributes.uv,Z=w.attributes.uv1,ee=w.attributes.normal,te=w.groups,v=w.drawRange;if(M!==null)if(Array.isArray(O))for(let he=0,Te=te.length;he<Te;he++){const oe=te[he],ie=O[oe.materialIndex],me=Math.max(oe.start,v.start),fe=Math.min(M.count,Math.min(oe.start+oe.count,v.start+v.count));for(let Ne=me,We=fe;Ne<We;Ne+=3){const xe=M.getX(Ne),je=M.getX(Ne+1),et=M.getX(Ne+2);c=GB(this,ie,l,t,Y,Z,ee,xe,je,et),c&&(c.faceIndex=Math.floor(Ne/3),c.face.materialIndex=oe.materialIndex,n.push(c))}}else{const he=Math.max(0,v.start),Te=Math.min(M.count,v.start+v.count);for(let oe=he,ie=Te;oe<ie;oe+=3){const me=M.getX(oe),fe=M.getX(oe+1),Ne=M.getX(oe+2);c=GB(this,O,l,t,Y,Z,ee,me,fe,Ne),c&&(c.faceIndex=Math.floor(oe/3),n.push(c))}}else if(G!==void 0)if(Array.isArray(O))for(let he=0,Te=te.length;he<Te;he++){const oe=te[he],ie=O[oe.materialIndex],me=Math.max(oe.start,v.start),fe=Math.min(G.count,Math.min(oe.start+oe.count,v.start+v.count));for(let Ne=me,We=fe;Ne<We;Ne+=3){const xe=Ne,je=Ne+1,et=Ne+2;c=GB(this,ie,l,t,Y,Z,ee,xe,je,et),c&&(c.faceIndex=Math.floor(Ne/3),c.face.materialIndex=oe.materialIndex,n.push(c))}}else{const he=Math.max(0,v.start),Te=Math.min(G.count,v.start+v.count);for(let oe=he,ie=Te;oe<ie;oe+=3){const me=oe,fe=oe+1,Ne=oe+2;c=GB(this,O,l,t,Y,Z,ee,me,fe,Ne),c&&(c.faceIndex=Math.floor(oe/3),n.push(c))}}}}function kk(e,l,n,t,c,w,O,M){let G;if(l.side===D3?G=t.intersectTriangle(O,w,c,!0,M):G=t.intersectTriangle(c,w,O,l.side===ip,M),G===null)return null;FB.copy(M),FB.applyMatrix4(e.matrixWorld);const Y=n.ray.origin.distanceTo(FB);return Y<n.near||Y>n.far?null:{distance:Y,point:FB.clone(),object:e}}function GB(e,l,n,t,c,w,O,M,G,Y){e.getVertexPosition(M,NP),e.getVertexPosition(G,AP),e.getVertexPosition(Y,SP);const Z=kk(e,l,n,t,NP,AP,SP,UB);if(Z){c&&(xB.fromBufferAttribute(c,M),HB.fromBufferAttribute(c,G),BB.fromBufferAttribute(c,Y),Z.uv=Kf.getInterpolation(UB,NP,AP,SP,xB,HB,BB,new Dl)),w&&(xB.fromBufferAttribute(w,M),HB.fromBufferAttribute(w,G),BB.fromBufferAttribute(w,Y),Z.uv1=Kf.getInterpolation(UB,NP,AP,SP,xB,HB,BB,new Dl),Z.uv2=Z.uv1),O&&(mW.fromBufferAttribute(O,M),DW.fromBufferAttribute(O,G),NW.fromBufferAttribute(O,Y),Z.normal=Kf.getInterpolation(UB,NP,AP,SP,mW,DW,NW,new lt),Z.normal.dot(t.direction)>0&&Z.normal.multiplyScalar(-1));const ee={a:M,b:G,c:Y,normal:new lt,materialIndex:0};Kf.getNormal(NP,AP,SP,ee.normal),Z.face=ee}return Z}class uB extends Jf{constructor(l=1,n=1,t=1,c=1,w=1,O=1){super(),this.type="BoxGeometry",this.parameters={width:l,height:n,depth:t,widthSegments:c,heightSegments:w,depthSegments:O};const M=this;c=Math.floor(c),w=Math.floor(w),O=Math.floor(O);const G=[],Y=[],Z=[],ee=[];let te=0,v=0;he("z","y","x",-1,-1,t,n,l,O,w,0),he("z","y","x",1,-1,t,n,-l,O,w,1),he("x","z","y",1,1,l,t,n,c,O,2),he("x","z","y",1,-1,l,t,-n,c,O,3),he("x","y","z",1,-1,l,n,t,c,w,4),he("x","y","z",-1,-1,l,n,-t,c,w,5),this.setIndex(G),this.setAttribute("position",new Qu(Y,3)),this.setAttribute("normal",new Qu(Z,3)),this.setAttribute("uv",new Qu(ee,2));function he(Te,oe,ie,me,fe,Ne,We,xe,je,et,ge){const Le=Ne/je,ve=We/et,nt=Ne/2,ht=We/2,Xe=xe/2,at=je+1,It=et+1;let St=0,bt=0;const Ct=new lt;for(let Ft=0;Ft<It;Ft++){const kt=Ft*ve-ht;for(let rn=0;rn<at;rn++){const Ot=rn*Le-nt;Ct[Te]=Ot*me,Ct[oe]=kt*fe,Ct[ie]=Xe,Y.push(Ct.x,Ct.y,Ct.z),Ct[Te]=0,Ct[oe]=0,Ct[ie]=xe>0?1:-1,Z.push(Ct.x,Ct.y,Ct.z),ee.push(rn/je),ee.push(1-Ft/et),St+=1}}for(let Ft=0;Ft<et;Ft++)for(let kt=0;kt<je;kt++){const rn=te+kt+at*Ft,Ot=te+kt+at*(Ft+1),Vt=te+(kt+1)+at*(Ft+1),un=te+(kt+1)+at*Ft;G.push(rn,Ot,un),G.push(Ot,Vt,un),bt+=6}M.addGroup(v,bt,ge),v+=bt,te+=St}}copy(l){return super.copy(l),this.parameters=Object.assign({},l.parameters),this}static fromJSON(l){return new uB(l.width,l.height,l.depth,l.widthSegments,l.heightSegments,l.depthSegments)}}function A9(e){const l={};for(const n in e){l[n]={};for(const t in e[n]){const c=e[n][t];c&&(c.isColor||c.isMatrix3||c.isMatrix4||c.isVector2||c.isVector3||c.isVector4||c.isTexture||c.isQuaternion)?c.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),l[n][t]=null):l[n][t]=c.clone():Array.isArray(c)?l[n][t]=c.slice():l[n][t]=c}}return l}function e3(e){const l={};for(let n=0;n<e.length;n++){const t=A9(e[n]);for(const c in t)l[c]=t[c]}return l}function qk(e){const l=[];for(let n=0;n<e.length;n++)l.push(e[n].clone());return l}function eY(e){return e.getRenderTarget()===null?e.outputColorSpace:ks.workingColorSpace}const Kk={clone:A9,merge:e3};var Qk=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$k=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rL extends fO{constructor(l){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qk,this.fragmentShader=$k,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,l!==void 0&&this.setValues(l)}copy(l){return super.copy(l),this.fragmentShader=l.fragmentShader,this.vertexShader=l.vertexShader,this.uniforms=A9(l.uniforms),this.uniformsGroups=qk(l.uniformsGroups),this.defines=Object.assign({},l.defines),this.wireframe=l.wireframe,this.wireframeLinewidth=l.wireframeLinewidth,this.fog=l.fog,this.lights=l.lights,this.clipping=l.clipping,this.extensions=Object.assign({},l.extensions),this.glslVersion=l.glslVersion,this}toJSON(l){const n=super.toJSON(l);n.glslVersion=this.glslVersion,n.uniforms={};for(const c in this.uniforms){const O=this.uniforms[c].value;O&&O.isTexture?n.uniforms[c]={type:"t",value:O.toJSON(l).uuid}:O&&O.isColor?n.uniforms[c]={type:"c",value:O.getHex()}:O&&O.isVector2?n.uniforms[c]={type:"v2",value:O.toArray()}:O&&O.isVector3?n.uniforms[c]={type:"v3",value:O.toArray()}:O&&O.isVector4?n.uniforms[c]={type:"v4",value:O.toArray()}:O&&O.isMatrix3?n.uniforms[c]={type:"m3",value:O.toArray()}:O&&O.isMatrix4?n.uniforms[c]={type:"m4",value:O.toArray()}:n.uniforms[c]={value:O}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const t={};for(const c in this.extensions)this.extensions[c]===!0&&(t[c]=!0);return Object.keys(t).length>0&&(n.extensions=t),n}}class tY extends Zf{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ps,this.projectionMatrix=new Ps,this.projectionMatrixInverse=new Ps,this.coordinateSystem=s7}copy(l,n){return super.copy(l,n),this.matrixWorldInverse.copy(l.matrixWorldInverse),this.projectionMatrix.copy(l.projectionMatrix),this.projectionMatrixInverse.copy(l.projectionMatrixInverse),this.coordinateSystem=l.coordinateSystem,this}getWorldDirection(l){return super.getWorldDirection(l).negate()}updateMatrixWorld(l){super.updateMatrixWorld(l),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(l,n){super.updateWorldMatrix(l,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class nE extends tY{constructor(l=50,n=1,t=.1,c=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=l,this.zoom=1,this.near=t,this.far=c,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(l,n){return super.copy(l,n),this.fov=l.fov,this.zoom=l.zoom,this.near=l.near,this.far=l.far,this.focus=l.focus,this.aspect=l.aspect,this.view=l.view===null?null:Object.assign({},l.view),this.filmGauge=l.filmGauge,this.filmOffset=l.filmOffset,this}setFocalLength(l){const n=.5*this.getFilmHeight()/l;this.fov=VH*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const l=Math.tan(w9*.5*this.fov);return .5*this.getFilmHeight()/l}getEffectiveFOV(){return VH*2*Math.atan(Math.tan(w9*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(l,n,t,c,w,O){this.aspect=l/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=l,this.view.fullHeight=n,this.view.offsetX=t,this.view.offsetY=c,this.view.width=w,this.view.height=O,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const l=this.near;let n=l*Math.tan(w9*.5*this.fov)/this.zoom,t=2*n,c=this.aspect*t,w=-.5*c;const O=this.view;if(this.view!==null&&this.view.enabled){const G=O.fullWidth,Y=O.fullHeight;w+=O.offsetX*c/G,n-=O.offsetY*t/Y,c*=O.width/G,t*=O.height/Y}const M=this.filmOffset;M!==0&&(w+=l*M/this.getFilmWidth()),this.projectionMatrix.makePerspective(w,w+c,n,n-t,l,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(l){const n=super.toJSON(l);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const LP=-90,OP=1;class Zk extends Zf{constructor(l,n,t){super(),this.type="CubeCamera",this.renderTarget=t,this.coordinateSystem=null,this.activeMipmapLevel=0;const c=new nE(LP,OP,l,n);c.layers=this.layers,this.add(c);const w=new nE(LP,OP,l,n);w.layers=this.layers,this.add(w);const O=new nE(LP,OP,l,n);O.layers=this.layers,this.add(O);const M=new nE(LP,OP,l,n);M.layers=this.layers,this.add(M);const G=new nE(LP,OP,l,n);G.layers=this.layers,this.add(G);const Y=new nE(LP,OP,l,n);Y.layers=this.layers,this.add(Y)}updateCoordinateSystem(){const l=this.coordinateSystem,n=this.children.concat(),[t,c,w,O,M,G]=n;for(const Y of n)this.remove(Y);if(l===s7)t.up.set(0,1,0),t.lookAt(1,0,0),c.up.set(0,1,0),c.lookAt(-1,0,0),w.up.set(0,0,-1),w.lookAt(0,1,0),O.up.set(0,0,1),O.lookAt(0,-1,0),M.up.set(0,1,0),M.lookAt(0,0,1),G.up.set(0,1,0),G.lookAt(0,0,-1);else if(l===ZU)t.up.set(0,-1,0),t.lookAt(-1,0,0),c.up.set(0,-1,0),c.lookAt(1,0,0),w.up.set(0,0,1),w.lookAt(0,1,0),O.up.set(0,0,-1),O.lookAt(0,-1,0),M.up.set(0,-1,0),M.lookAt(0,0,1),G.up.set(0,-1,0),G.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+l);for(const Y of n)this.add(Y),Y.updateMatrixWorld()}update(l,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:t,activeMipmapLevel:c}=this;this.coordinateSystem!==l.coordinateSystem&&(this.coordinateSystem=l.coordinateSystem,this.updateCoordinateSystem());const[w,O,M,G,Y,Z]=this.children,ee=l.getRenderTarget(),te=l.getActiveCubeFace(),v=l.getActiveMipmapLevel(),he=l.xr.enabled;l.xr.enabled=!1;const Te=t.texture.generateMipmaps;t.texture.generateMipmaps=!1,l.setRenderTarget(t,0,c),l.render(n,w),l.setRenderTarget(t,1,c),l.render(n,O),l.setRenderTarget(t,2,c),l.render(n,M),l.setRenderTarget(t,3,c),l.render(n,G),l.setRenderTarget(t,4,c),l.render(n,Y),t.texture.generateMipmaps=Te,l.setRenderTarget(t,5,c),l.render(n,Z),l.setRenderTarget(ee,te,v),l.xr.enabled=he,t.texture.needsPMREMUpdate=!0}}class nY extends R0{constructor(l,n,t,c,w,O,M,G,Y,Z){l=l!==void 0?l:[],n=n!==void 0?n:m9,super(l,n,t,c,w,O,M,G,Y,Z),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(l){this.image=l}}class Jk extends UN{constructor(l=1,n={}){super(l,l,n),this.isWebGLCubeRenderTarget=!0;const t={width:l,height:l,depth:1},c=[t,t,t,t,t,t];n.encoding!==void 0&&(bH("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===z8?kf:I2),this.texture=new nY(c,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:f2}fromEquirectangularTexture(l,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const t={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},c=new uB(5,5,5),w=new rL({name:"CubemapFromEquirect",uniforms:A9(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:D3,blending:bN});w.uniforms.tEquirect.value=n;const O=new d2(c,w),M=n.minFilter;return n.minFilter===FH&&(n.minFilter=f2),new Zk(1,10,this).update(l,O),n.minFilter=M,O.geometry.dispose(),O.material.dispose(),this}clear(l,n,t,c){const w=l.getRenderTarget();for(let O=0;O<6;O++)l.setRenderTarget(this,O),l.clear(n,t,c);l.setRenderTarget(w)}}const DG=new lt,Xk=new lt,vk=new Gl;class l7{constructor(l=new lt(1,0,0),n=0){this.isPlane=!0,this.normal=l,this.constant=n}set(l,n){return this.normal.copy(l),this.constant=n,this}setComponents(l,n,t,c){return this.normal.set(l,n,t),this.constant=c,this}setFromNormalAndCoplanarPoint(l,n){return this.normal.copy(l),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(l,n,t){const c=DG.subVectors(t,n).cross(Xk.subVectors(l,n)).normalize();return this.setFromNormalAndCoplanarPoint(c,l),this}copy(l){return this.normal.copy(l.normal),this.constant=l.constant,this}normalize(){const l=1/this.normal.length();return this.normal.multiplyScalar(l),this.constant*=l,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(l){return this.normal.dot(l)+this.constant}distanceToSphere(l){return this.distanceToPoint(l.center)-l.radius}projectPoint(l,n){return n.copy(l).addScaledVector(this.normal,-this.distanceToPoint(l))}intersectLine(l,n){const t=l.delta(DG),c=this.normal.dot(t);if(c===0)return this.distanceToPoint(l.start)===0?n.copy(l.start):null;const w=-(l.start.dot(this.normal)+this.constant)/c;return w<0||w>1?null:n.copy(l.start).addScaledVector(t,w)}intersectsLine(l){const n=this.distanceToPoint(l.start),t=this.distanceToPoint(l.end);return n<0&&t>0||t<0&&n>0}intersectsBox(l){return l.intersectsPlane(this)}intersectsSphere(l){return l.intersectsPlane(this)}coplanarPoint(l){return l.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(l,n){const t=n||vk.getNormalMatrix(l),c=this.coplanarPoint(DG).applyMatrix4(l),w=this.normal.applyMatrix3(t).normalize();return this.constant=-c.dot(w),this}translate(l){return this.constant-=l.dot(this.normal),this}equals(l){return l.normal.equals(this.normal)&&l.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vS=new hO,VB=new lt;class GV{constructor(l=new l7,n=new l7,t=new l7,c=new l7,w=new l7,O=new l7){this.planes=[l,n,t,c,w,O]}set(l,n,t,c,w,O){const M=this.planes;return M[0].copy(l),M[1].copy(n),M[2].copy(t),M[3].copy(c),M[4].copy(w),M[5].copy(O),this}copy(l){const n=this.planes;for(let t=0;t<6;t++)n[t].copy(l.planes[t]);return this}setFromProjectionMatrix(l,n=s7){const t=this.planes,c=l.elements,w=c[0],O=c[1],M=c[2],G=c[3],Y=c[4],Z=c[5],ee=c[6],te=c[7],v=c[8],he=c[9],Te=c[10],oe=c[11],ie=c[12],me=c[13],fe=c[14],Ne=c[15];if(t[0].setComponents(G-w,te-Y,oe-v,Ne-ie).normalize(),t[1].setComponents(G+w,te+Y,oe+v,Ne+ie).normalize(),t[2].setComponents(G+O,te+Z,oe+he,Ne+me).normalize(),t[3].setComponents(G-O,te-Z,oe-he,Ne-me).normalize(),t[4].setComponents(G-M,te-ee,oe-Te,Ne-fe).normalize(),n===s7)t[5].setComponents(G+M,te+ee,oe+Te,Ne+fe).normalize();else if(n===ZU)t[5].setComponents(M,ee,Te,fe).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(l){if(l.boundingSphere!==void 0)l.boundingSphere===null&&l.computeBoundingSphere(),vS.copy(l.boundingSphere).applyMatrix4(l.matrixWorld);else{const n=l.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),vS.copy(n.boundingSphere).applyMatrix4(l.matrixWorld)}return this.intersectsSphere(vS)}intersectsSprite(l){return vS.center.set(0,0,0),vS.radius=.7071067811865476,vS.applyMatrix4(l.matrixWorld),this.intersectsSphere(vS)}intersectsSphere(l){const n=this.planes,t=l.center,c=-l.radius;for(let w=0;w<6;w++)if(n[w].distanceToPoint(t)<c)return!1;return!0}intersectsBox(l){const n=this.planes;for(let t=0;t<6;t++){const c=n[t];if(VB.x=c.normal.x>0?l.max.x:l.min.x,VB.y=c.normal.y>0?l.max.y:l.min.y,VB.z=c.normal.z>0?l.max.z:l.min.z,c.distanceToPoint(VB)<0)return!1}return!0}containsPoint(l){const n=this.planes;for(let t=0;t<6;t++)if(n[t].distanceToPoint(l)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lY(){let e=null,l=!1,n=null,t=null;function c(w,O){n(w,O),t=e.requestAnimationFrame(c)}return{start:function(){l!==!0&&n!==null&&(t=e.requestAnimationFrame(c),l=!0)},stop:function(){e.cancelAnimationFrame(t),l=!1},setAnimationLoop:function(w){n=w},setContext:function(w){e=w}}}function eq(e,l){const n=l.isWebGL2,t=new WeakMap;function c(Y,Z){const ee=Y.array,te=Y.usage,v=ee.byteLength,he=e.createBuffer();e.bindBuffer(Z,he),e.bufferData(Z,ee,te),Y.onUploadCallback();let Te;if(ee instanceof Float32Array)Te=e.FLOAT;else if(ee instanceof Uint16Array)if(Y.isFloat16BufferAttribute)if(n)Te=e.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else Te=e.UNSIGNED_SHORT;else if(ee instanceof Int16Array)Te=e.SHORT;else if(ee instanceof Uint32Array)Te=e.UNSIGNED_INT;else if(ee instanceof Int32Array)Te=e.INT;else if(ee instanceof Int8Array)Te=e.BYTE;else if(ee instanceof Uint8Array)Te=e.UNSIGNED_BYTE;else if(ee instanceof Uint8ClampedArray)Te=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+ee);return{buffer:he,type:Te,bytesPerElement:ee.BYTES_PER_ELEMENT,version:Y.version,size:v}}function w(Y,Z,ee){const te=Z.array,v=Z._updateRange,he=Z.updateRanges;if(e.bindBuffer(ee,Y),v.count===-1&&he.length===0&&e.bufferSubData(ee,0,te),he.length!==0){for(let Te=0,oe=he.length;Te<oe;Te++){const ie=he[Te];n?e.bufferSubData(ee,ie.start*te.BYTES_PER_ELEMENT,te,ie.start,ie.count):e.bufferSubData(ee,ie.start*te.BYTES_PER_ELEMENT,te.subarray(ie.start,ie.start+ie.count))}Z.clearUpdateRanges()}v.count!==-1&&(n?e.bufferSubData(ee,v.offset*te.BYTES_PER_ELEMENT,te,v.offset,v.count):e.bufferSubData(ee,v.offset*te.BYTES_PER_ELEMENT,te.subarray(v.offset,v.offset+v.count)),v.count=-1),Z.onUploadCallback()}function O(Y){return Y.isInterleavedBufferAttribute&&(Y=Y.data),t.get(Y)}function M(Y){Y.isInterleavedBufferAttribute&&(Y=Y.data);const Z=t.get(Y);Z&&(e.deleteBuffer(Z.buffer),t.delete(Y))}function G(Y,Z){if(Y.isGLBufferAttribute){const te=t.get(Y);(!te||te.version<Y.version)&&t.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}Y.isInterleavedBufferAttribute&&(Y=Y.data);const ee=t.get(Y);if(ee===void 0)t.set(Y,c(Y,Z));else if(ee.version<Y.version){if(ee.size!==Y.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");w(ee.buffer,Y,Z),ee.version=Y.version}}return{get:O,remove:M,update:G}}class VV extends Jf{constructor(l=1,n=1,t=1,c=1){super(),this.type="PlaneGeometry",this.parameters={width:l,height:n,widthSegments:t,heightSegments:c};const w=l/2,O=n/2,M=Math.floor(t),G=Math.floor(c),Y=M+1,Z=G+1,ee=l/M,te=n/G,v=[],he=[],Te=[],oe=[];for(let ie=0;ie<Z;ie++){const me=ie*te-O;for(let fe=0;fe<Y;fe++){const Ne=fe*ee-w;he.push(Ne,-me,0),Te.push(0,0,1),oe.push(fe/M),oe.push(1-ie/G)}}for(let ie=0;ie<G;ie++)for(let me=0;me<M;me++){const fe=me+Y*ie,Ne=me+Y*(ie+1),We=me+1+Y*(ie+1),xe=me+1+Y*ie;v.push(fe,Ne,xe),v.push(Ne,We,xe)}this.setIndex(v),this.setAttribute("position",new Qu(he,3)),this.setAttribute("normal",new Qu(Te,3)),this.setAttribute("uv",new Qu(oe,2))}copy(l){return super.copy(l),this.parameters=Object.assign({},l.parameters),this}static fromJSON(l){return new VV(l.width,l.height,l.widthSegments,l.heightSegments)}}var tq=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nq=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lq=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sq=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rq=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,uq=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aq=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iq=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oq=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cq=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,hq=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fq=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Iq=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dq=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yq=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wq=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Eq=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tq=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rq=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pq=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mq=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dq=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Nq=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Aq=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sq=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Lq=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Oq=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gq=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pq=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cq=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bq="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mq=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,xq=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Hq=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bq=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Uq=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fq=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gq=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vq=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_q=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wq=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jq=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yq=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zq=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kq=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qq=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kq=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Qq=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$q=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zq=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jq=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xq=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vq=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,eK=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tK=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nK=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lK=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sK=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rK=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uK=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,aK=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,iK=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oK=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cK=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hK=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fK=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IK=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dK=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yK=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,wK=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,EK=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,TK=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,RK=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pK=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mK=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DK=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,NK=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,AK=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,SK=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,LK=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,OK=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gK=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,PK=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,CK=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bK=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MK=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xK=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HK=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,BK=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,UK=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,FK=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,GK=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,VK=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_K=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,WK=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jK=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,YK=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zK=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kK=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qK=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KK=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,QK=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$K=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ZK=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,JK=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,XK=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vK=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eQ=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tQ=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nQ=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lQ=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sQ=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rQ=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uQ=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,aQ=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,iQ=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,oQ=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cQ=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hQ=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fQ=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,IQ=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dQ=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yQ=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wQ=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EQ=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TQ=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,RQ=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pQ=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mQ=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,DQ=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NQ=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AQ=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,SQ=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LQ=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OQ=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gQ=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,PQ=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CQ=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bQ=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,MQ=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xQ=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Sl={alphahash_fragment:tq,alphahash_pars_fragment:nq,alphamap_fragment:lq,alphamap_pars_fragment:sq,alphatest_fragment:rq,alphatest_pars_fragment:uq,aomap_fragment:aq,aomap_pars_fragment:iq,batching_pars_vertex:oq,batching_vertex:cq,begin_vertex:hq,beginnormal_vertex:fq,bsdfs:Iq,iridescence_fragment:dq,bumpmap_pars_fragment:yq,clipping_planes_fragment:wq,clipping_planes_pars_fragment:Eq,clipping_planes_pars_vertex:Tq,clipping_planes_vertex:Rq,color_fragment:pq,color_pars_fragment:mq,color_pars_vertex:Dq,color_vertex:Nq,common:Aq,cube_uv_reflection_fragment:Sq,defaultnormal_vertex:Lq,displacementmap_pars_vertex:Oq,displacementmap_vertex:gq,emissivemap_fragment:Pq,emissivemap_pars_fragment:Cq,colorspace_fragment:bq,colorspace_pars_fragment:Mq,envmap_fragment:xq,envmap_common_pars_fragment:Hq,envmap_pars_fragment:Bq,envmap_pars_vertex:Uq,envmap_physical_pars_fragment:Qq,envmap_vertex:Fq,fog_vertex:Gq,fog_pars_vertex:Vq,fog_fragment:_q,fog_pars_fragment:Wq,gradientmap_pars_fragment:jq,lightmap_fragment:Yq,lightmap_pars_fragment:zq,lights_lambert_fragment:kq,lights_lambert_pars_fragment:qq,lights_pars_begin:Kq,lights_toon_fragment:$q,lights_toon_pars_fragment:Zq,lights_phong_fragment:Jq,lights_phong_pars_fragment:Xq,lights_physical_fragment:vq,lights_physical_pars_fragment:eK,lights_fragment_begin:tK,lights_fragment_maps:nK,lights_fragment_end:lK,logdepthbuf_fragment:sK,logdepthbuf_pars_fragment:rK,logdepthbuf_pars_vertex:uK,logdepthbuf_vertex:aK,map_fragment:iK,map_pars_fragment:oK,map_particle_fragment:cK,map_particle_pars_fragment:hK,metalnessmap_fragment:fK,metalnessmap_pars_fragment:IK,morphcolor_vertex:dK,morphnormal_vertex:yK,morphtarget_pars_vertex:wK,morphtarget_vertex:EK,normal_fragment_begin:TK,normal_fragment_maps:RK,normal_pars_fragment:pK,normal_pars_vertex:mK,normal_vertex:DK,normalmap_pars_fragment:NK,clearcoat_normal_fragment_begin:AK,clearcoat_normal_fragment_maps:SK,clearcoat_pars_fragment:LK,iridescence_pars_fragment:OK,opaque_fragment:gK,packing:PK,premultiplied_alpha_fragment:CK,project_vertex:bK,dithering_fragment:MK,dithering_pars_fragment:xK,roughnessmap_fragment:HK,roughnessmap_pars_fragment:BK,shadowmap_pars_fragment:UK,shadowmap_pars_vertex:FK,shadowmap_vertex:GK,shadowmask_pars_fragment:VK,skinbase_vertex:_K,skinning_pars_vertex:WK,skinning_vertex:jK,skinnormal_vertex:YK,specularmap_fragment:zK,specularmap_pars_fragment:kK,tonemapping_fragment:qK,tonemapping_pars_fragment:KK,transmission_fragment:QK,transmission_pars_fragment:$K,uv_pars_fragment:ZK,uv_pars_vertex:JK,uv_vertex:XK,worldpos_vertex:vK,background_vert:eQ,background_frag:tQ,backgroundCube_vert:nQ,backgroundCube_frag:lQ,cube_vert:sQ,cube_frag:rQ,depth_vert:uQ,depth_frag:aQ,distanceRGBA_vert:iQ,distanceRGBA_frag:oQ,equirect_vert:cQ,equirect_frag:hQ,linedashed_vert:fQ,linedashed_frag:IQ,meshbasic_vert:dQ,meshbasic_frag:yQ,meshlambert_vert:wQ,meshlambert_frag:EQ,meshmatcap_vert:TQ,meshmatcap_frag:RQ,meshnormal_vert:pQ,meshnormal_frag:mQ,meshphong_vert:DQ,meshphong_frag:NQ,meshphysical_vert:AQ,meshphysical_frag:SQ,meshtoon_vert:LQ,meshtoon_frag:OQ,points_vert:gQ,points_frag:PQ,shadow_vert:CQ,shadow_frag:bQ,sprite_vert:MQ,sprite_frag:xQ},fn={common:{diffuse:{value:new ns(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gl},alphaMap:{value:null},alphaMapTransform:{value:new Gl},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gl}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gl}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gl}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gl},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gl},normalScale:{value:new Dl(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gl},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gl}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gl}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gl}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ns(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ns(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gl},alphaTest:{value:0},uvTransform:{value:new Gl}},sprite:{diffuse:{value:new ns(16777215)},opacity:{value:1},center:{value:new Dl(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gl},alphaMap:{value:null},alphaMapTransform:{value:new Gl},alphaTest:{value:0}}},vT={basic:{uniforms:e3([fn.common,fn.specularmap,fn.envmap,fn.aomap,fn.lightmap,fn.fog]),vertexShader:Sl.meshbasic_vert,fragmentShader:Sl.meshbasic_frag},lambert:{uniforms:e3([fn.common,fn.specularmap,fn.envmap,fn.aomap,fn.lightmap,fn.emissivemap,fn.bumpmap,fn.normalmap,fn.displacementmap,fn.fog,fn.lights,{emissive:{value:new ns(0)}}]),vertexShader:Sl.meshlambert_vert,fragmentShader:Sl.meshlambert_frag},phong:{uniforms:e3([fn.common,fn.specularmap,fn.envmap,fn.aomap,fn.lightmap,fn.emissivemap,fn.bumpmap,fn.normalmap,fn.displacementmap,fn.fog,fn.lights,{emissive:{value:new ns(0)},specular:{value:new ns(1118481)},shininess:{value:30}}]),vertexShader:Sl.meshphong_vert,fragmentShader:Sl.meshphong_frag},standard:{uniforms:e3([fn.common,fn.envmap,fn.aomap,fn.lightmap,fn.emissivemap,fn.bumpmap,fn.normalmap,fn.displacementmap,fn.roughnessmap,fn.metalnessmap,fn.fog,fn.lights,{emissive:{value:new ns(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Sl.meshphysical_vert,fragmentShader:Sl.meshphysical_frag},toon:{uniforms:e3([fn.common,fn.aomap,fn.lightmap,fn.emissivemap,fn.bumpmap,fn.normalmap,fn.displacementmap,fn.gradientmap,fn.fog,fn.lights,{emissive:{value:new ns(0)}}]),vertexShader:Sl.meshtoon_vert,fragmentShader:Sl.meshtoon_frag},matcap:{uniforms:e3([fn.common,fn.bumpmap,fn.normalmap,fn.displacementmap,fn.fog,{matcap:{value:null}}]),vertexShader:Sl.meshmatcap_vert,fragmentShader:Sl.meshmatcap_frag},points:{uniforms:e3([fn.points,fn.fog]),vertexShader:Sl.points_vert,fragmentShader:Sl.points_frag},dashed:{uniforms:e3([fn.common,fn.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Sl.linedashed_vert,fragmentShader:Sl.linedashed_frag},depth:{uniforms:e3([fn.common,fn.displacementmap]),vertexShader:Sl.depth_vert,fragmentShader:Sl.depth_frag},normal:{uniforms:e3([fn.common,fn.bumpmap,fn.normalmap,fn.displacementmap,{opacity:{value:1}}]),vertexShader:Sl.meshnormal_vert,fragmentShader:Sl.meshnormal_frag},sprite:{uniforms:e3([fn.sprite,fn.fog]),vertexShader:Sl.sprite_vert,fragmentShader:Sl.sprite_frag},background:{uniforms:{uvTransform:{value:new Gl},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Sl.background_vert,fragmentShader:Sl.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Sl.backgroundCube_vert,fragmentShader:Sl.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Sl.cube_vert,fragmentShader:Sl.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Sl.equirect_vert,fragmentShader:Sl.equirect_frag},distanceRGBA:{uniforms:e3([fn.common,fn.displacementmap,{referencePosition:{value:new lt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Sl.distanceRGBA_vert,fragmentShader:Sl.distanceRGBA_frag},shadow:{uniforms:e3([fn.lights,fn.fog,{color:{value:new ns(0)},opacity:{value:1}}]),vertexShader:Sl.shadow_vert,fragmentShader:Sl.shadow_frag}};vT.physical={uniforms:e3([vT.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gl},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gl},clearcoatNormalScale:{value:new Dl(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gl},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gl},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gl},sheen:{value:0},sheenColor:{value:new ns(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gl},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gl},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gl},transmissionSamplerSize:{value:new Dl},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gl},attenuationDistance:{value:0},attenuationColor:{value:new ns(0)},specularColor:{value:new ns(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gl},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gl},anisotropyVector:{value:new Dl},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gl}}]),vertexShader:Sl.meshphysical_vert,fragmentShader:Sl.meshphysical_frag};const _B={r:0,b:0,g:0};function HQ(e,l,n,t,c,w,O){const M=new ns(0);let G=w===!0?0:1,Y,Z,ee=null,te=0,v=null;function he(oe,ie){let me=!1,fe=ie.isScene===!0?ie.background:null;fe&&fe.isTexture&&(fe=(ie.backgroundBlurriness>0?n:l).get(fe)),fe===null?Te(M,G):fe&&fe.isColor&&(Te(fe,1),me=!0);const Ne=e.xr.getEnvironmentBlendMode();Ne==="additive"?t.buffers.color.setClear(0,0,0,1,O):Ne==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,O),(e.autoClear||me)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),fe&&(fe.isCubeTexture||fe.mapping===tF)?(Z===void 0&&(Z=new d2(new uB(1,1,1),new rL({name:"BackgroundCubeMaterial",uniforms:A9(vT.backgroundCube.uniforms),vertexShader:vT.backgroundCube.vertexShader,fragmentShader:vT.backgroundCube.fragmentShader,side:D3,depthTest:!1,depthWrite:!1,fog:!1})),Z.geometry.deleteAttribute("normal"),Z.geometry.deleteAttribute("uv"),Z.onBeforeRender=function(We,xe,je){this.matrixWorld.copyPosition(je.matrixWorld)},Object.defineProperty(Z.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),c.update(Z)),Z.material.uniforms.envMap.value=fe,Z.material.uniforms.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1,Z.material.uniforms.backgroundBlurriness.value=ie.backgroundBlurriness,Z.material.uniforms.backgroundIntensity.value=ie.backgroundIntensity,Z.material.toneMapped=ks.getTransfer(fe.colorSpace)!==dr,(ee!==fe||te!==fe.version||v!==e.toneMapping)&&(Z.material.needsUpdate=!0,ee=fe,te=fe.version,v=e.toneMapping),Z.layers.enableAll(),oe.unshift(Z,Z.geometry,Z.material,0,0,null)):fe&&fe.isTexture&&(Y===void 0&&(Y=new d2(new VV(2,2),new rL({name:"BackgroundMaterial",uniforms:A9(vT.background.uniforms),vertexShader:vT.background.vertexShader,fragmentShader:vT.background.fragmentShader,side:ip,depthTest:!1,depthWrite:!1,fog:!1})),Y.geometry.deleteAttribute("normal"),Object.defineProperty(Y.material,"map",{get:function(){return this.uniforms.t2D.value}}),c.update(Y)),Y.material.uniforms.t2D.value=fe,Y.material.uniforms.backgroundIntensity.value=ie.backgroundIntensity,Y.material.toneMapped=ks.getTransfer(fe.colorSpace)!==dr,fe.matrixAutoUpdate===!0&&fe.updateMatrix(),Y.material.uniforms.uvTransform.value.copy(fe.matrix),(ee!==fe||te!==fe.version||v!==e.toneMapping)&&(Y.material.needsUpdate=!0,ee=fe,te=fe.version,v=e.toneMapping),Y.layers.enableAll(),oe.unshift(Y,Y.geometry,Y.material,0,0,null))}function Te(oe,ie){oe.getRGB(_B,eY(e)),t.buffers.color.setClear(_B.r,_B.g,_B.b,ie,O)}return{getClearColor:function(){return M},setClearColor:function(oe,ie=1){M.set(oe),G=ie,Te(M,G)},getClearAlpha:function(){return G},setClearAlpha:function(oe){G=oe,Te(M,G)},render:he}}function BQ(e,l,n,t){const c=e.getParameter(e.MAX_VERTEX_ATTRIBS),w=t.isWebGL2?null:l.get("OES_vertex_array_object"),O=t.isWebGL2||w!==null,M={},G=oe(null);let Y=G,Z=!1;function ee(Xe,at,It,St,bt){let Ct=!1;if(O){const Ft=Te(St,It,at);Y!==Ft&&(Y=Ft,v(Y.object)),Ct=ie(Xe,St,It,bt),Ct&&me(Xe,St,It,bt)}else{const Ft=at.wireframe===!0;(Y.geometry!==St.id||Y.program!==It.id||Y.wireframe!==Ft)&&(Y.geometry=St.id,Y.program=It.id,Y.wireframe=Ft,Ct=!0)}bt!==null&&n.update(bt,e.ELEMENT_ARRAY_BUFFER),(Ct||Z)&&(Z=!1,et(Xe,at,It,St),bt!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(bt).buffer))}function te(){return t.isWebGL2?e.createVertexArray():w.createVertexArrayOES()}function v(Xe){return t.isWebGL2?e.bindVertexArray(Xe):w.bindVertexArrayOES(Xe)}function he(Xe){return t.isWebGL2?e.deleteVertexArray(Xe):w.deleteVertexArrayOES(Xe)}function Te(Xe,at,It){const St=It.wireframe===!0;let bt=M[Xe.id];bt===void 0&&(bt={},M[Xe.id]=bt);let Ct=bt[at.id];Ct===void 0&&(Ct={},bt[at.id]=Ct);let Ft=Ct[St];return Ft===void 0&&(Ft=oe(te()),Ct[St]=Ft),Ft}function oe(Xe){const at=[],It=[],St=[];for(let bt=0;bt<c;bt++)at[bt]=0,It[bt]=0,St[bt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:at,enabledAttributes:It,attributeDivisors:St,object:Xe,attributes:{},index:null}}function ie(Xe,at,It,St){const bt=Y.attributes,Ct=at.attributes;let Ft=0;const kt=It.getAttributes();for(const rn in kt)if(kt[rn].location>=0){const Vt=bt[rn];let un=Ct[rn];if(un===void 0&&(rn==="instanceMatrix"&&Xe.instanceMatrix&&(un=Xe.instanceMatrix),rn==="instanceColor"&&Xe.instanceColor&&(un=Xe.instanceColor)),Vt===void 0||Vt.attribute!==un||un&&Vt.data!==un.data)return!0;Ft++}return Y.attributesNum!==Ft||Y.index!==St}function me(Xe,at,It,St){const bt={},Ct=at.attributes;let Ft=0;const kt=It.getAttributes();for(const rn in kt)if(kt[rn].location>=0){let Vt=Ct[rn];Vt===void 0&&(rn==="instanceMatrix"&&Xe.instanceMatrix&&(Vt=Xe.instanceMatrix),rn==="instanceColor"&&Xe.instanceColor&&(Vt=Xe.instanceColor));const un={};un.attribute=Vt,Vt&&Vt.data&&(un.data=Vt.data),bt[rn]=un,Ft++}Y.attributes=bt,Y.attributesNum=Ft,Y.index=St}function fe(){const Xe=Y.newAttributes;for(let at=0,It=Xe.length;at<It;at++)Xe[at]=0}function Ne(Xe){We(Xe,0)}function We(Xe,at){const It=Y.newAttributes,St=Y.enabledAttributes,bt=Y.attributeDivisors;It[Xe]=1,St[Xe]===0&&(e.enableVertexAttribArray(Xe),St[Xe]=1),bt[Xe]!==at&&((t.isWebGL2?e:l.get("ANGLE_instanced_arrays"))[t.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](Xe,at),bt[Xe]=at)}function xe(){const Xe=Y.newAttributes,at=Y.enabledAttributes;for(let It=0,St=at.length;It<St;It++)at[It]!==Xe[It]&&(e.disableVertexAttribArray(It),at[It]=0)}function je(Xe,at,It,St,bt,Ct,Ft){Ft===!0?e.vertexAttribIPointer(Xe,at,It,bt,Ct):e.vertexAttribPointer(Xe,at,It,St,bt,Ct)}function et(Xe,at,It,St){if(t.isWebGL2===!1&&(Xe.isInstancedMesh||St.isInstancedBufferGeometry)&&l.get("ANGLE_instanced_arrays")===null)return;fe();const bt=St.attributes,Ct=It.getAttributes(),Ft=at.defaultAttributeValues;for(const kt in Ct){const rn=Ct[kt];if(rn.location>=0){let Ot=bt[kt];if(Ot===void 0&&(kt==="instanceMatrix"&&Xe.instanceMatrix&&(Ot=Xe.instanceMatrix),kt==="instanceColor"&&Xe.instanceColor&&(Ot=Xe.instanceColor)),Ot!==void 0){const Vt=Ot.normalized,un=Ot.itemSize,Sn=n.get(Ot);if(Sn===void 0)continue;const bn=Sn.buffer,kn=Sn.type,qn=Sn.bytesPerElement,pn=t.isWebGL2===!0&&(kn===e.INT||kn===e.UNSIGNED_INT||Ot.gpuType===Fj);if(Ot.isInterleavedBufferAttribute){const il=Ot.data,mt=il.stride,Ns=Ot.offset;if(il.isInstancedInterleavedBuffer){for(let Mn=0;Mn<rn.locationSize;Mn++)We(rn.location+Mn,il.meshPerAttribute);Xe.isInstancedMesh!==!0&&St._maxInstanceCount===void 0&&(St._maxInstanceCount=il.meshPerAttribute*il.count)}else for(let Mn=0;Mn<rn.locationSize;Mn++)Ne(rn.location+Mn);e.bindBuffer(e.ARRAY_BUFFER,bn);for(let Mn=0;Mn<rn.locationSize;Mn++)je(rn.location+Mn,un/rn.locationSize,kn,Vt,mt*qn,(Ns+un/rn.locationSize*Mn)*qn,pn)}else{if(Ot.isInstancedBufferAttribute){for(let il=0;il<rn.locationSize;il++)We(rn.location+il,Ot.meshPerAttribute);Xe.isInstancedMesh!==!0&&St._maxInstanceCount===void 0&&(St._maxInstanceCount=Ot.meshPerAttribute*Ot.count)}else for(let il=0;il<rn.locationSize;il++)Ne(rn.location+il);e.bindBuffer(e.ARRAY_BUFFER,bn);for(let il=0;il<rn.locationSize;il++)je(rn.location+il,un/rn.locationSize,kn,Vt,un*qn,un/rn.locationSize*il*qn,pn)}}else if(Ft!==void 0){const Vt=Ft[kt];if(Vt!==void 0)switch(Vt.length){case 2:e.vertexAttrib2fv(rn.location,Vt);break;case 3:e.vertexAttrib3fv(rn.location,Vt);break;case 4:e.vertexAttrib4fv(rn.location,Vt);break;default:e.vertexAttrib1fv(rn.location,Vt)}}}}xe()}function ge(){nt();for(const Xe in M){const at=M[Xe];for(const It in at){const St=at[It];for(const bt in St)he(St[bt].object),delete St[bt];delete at[It]}delete M[Xe]}}function Le(Xe){if(M[Xe.id]===void 0)return;const at=M[Xe.id];for(const It in at){const St=at[It];for(const bt in St)he(St[bt].object),delete St[bt];delete at[It]}delete M[Xe.id]}function ve(Xe){for(const at in M){const It=M[at];if(It[Xe.id]===void 0)continue;const St=It[Xe.id];for(const bt in St)he(St[bt].object),delete St[bt];delete It[Xe.id]}}function nt(){ht(),Z=!0,Y!==G&&(Y=G,v(Y.object))}function ht(){G.geometry=null,G.program=null,G.wireframe=!1}return{setup:ee,reset:nt,resetDefaultState:ht,dispose:ge,releaseStatesOfGeometry:Le,releaseStatesOfProgram:ve,initAttributes:fe,enableAttribute:Ne,disableUnusedAttributes:xe}}function UQ(e,l,n,t){const c=t.isWebGL2;let w;function O(Z){w=Z}function M(Z,ee){e.drawArrays(w,Z,ee),n.update(ee,w,1)}function G(Z,ee,te){if(te===0)return;let v,he;if(c)v=e,he="drawArraysInstanced";else if(v=l.get("ANGLE_instanced_arrays"),he="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[he](w,Z,ee,te),n.update(ee,w,te)}function Y(Z,ee,te){if(te===0)return;const v=l.get("WEBGL_multi_draw");if(v===null)for(let he=0;he<te;he++)this.render(Z[he],ee[he]);else{v.multiDrawArraysWEBGL(w,Z,0,ee,0,te);let he=0;for(let Te=0;Te<te;Te++)he+=ee[Te];n.update(he,w,1)}}this.setMode=O,this.render=M,this.renderInstances=G,this.renderMultiDraw=Y}function FQ(e,l,n){let t;function c(){if(t!==void 0)return t;if(l.has("EXT_texture_filter_anisotropic")===!0){const je=l.get("EXT_texture_filter_anisotropic");t=e.getParameter(je.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else t=0;return t}function w(je){if(je==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";je="mediump"}return je==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const O=typeof WebGL2RenderingContext<"u"&&e.constructor.name==="WebGL2RenderingContext";let M=n.precision!==void 0?n.precision:"highp";const G=w(M);G!==M&&(console.warn("THREE.WebGLRenderer:",M,"not supported, using",G,"instead."),M=G);const Y=O||l.has("WEBGL_draw_buffers"),Z=n.logarithmicDepthBuffer===!0,ee=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),te=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_TEXTURE_SIZE),he=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),Te=e.getParameter(e.MAX_VERTEX_ATTRIBS),oe=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),ie=e.getParameter(e.MAX_VARYING_VECTORS),me=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),fe=te>0,Ne=O||l.has("OES_texture_float"),We=fe&&Ne,xe=O?e.getParameter(e.MAX_SAMPLES):0;return{isWebGL2:O,drawBuffers:Y,getMaxAnisotropy:c,getMaxPrecision:w,precision:M,logarithmicDepthBuffer:Z,maxTextures:ee,maxVertexTextures:te,maxTextureSize:v,maxCubemapSize:he,maxAttributes:Te,maxVertexUniforms:oe,maxVaryings:ie,maxFragmentUniforms:me,vertexTextures:fe,floatFragmentTextures:Ne,floatVertexTextures:We,maxSamples:xe}}function GQ(e){const l=this;let n=null,t=0,c=!1,w=!1;const O=new l7,M=new Gl,G={value:null,needsUpdate:!1};this.uniform=G,this.numPlanes=0,this.numIntersection=0,this.init=function(ee,te){const v=ee.length!==0||te||t!==0||c;return c=te,t=ee.length,v},this.beginShadows=function(){w=!0,Z(null)},this.endShadows=function(){w=!1},this.setGlobalState=function(ee,te){n=Z(ee,te,0)},this.setState=function(ee,te,v){const he=ee.clippingPlanes,Te=ee.clipIntersection,oe=ee.clipShadows,ie=e.get(ee);if(!c||he===null||he.length===0||w&&!oe)w?Z(null):Y();else{const me=w?0:t,fe=me*4;let Ne=ie.clippingState||null;G.value=Ne,Ne=Z(he,te,fe,v);for(let We=0;We!==fe;++We)Ne[We]=n[We];ie.clippingState=Ne,this.numIntersection=Te?this.numPlanes:0,this.numPlanes+=me}};function Y(){G.value!==n&&(G.value=n,G.needsUpdate=t>0),l.numPlanes=t,l.numIntersection=0}function Z(ee,te,v,he){const Te=ee!==null?ee.length:0;let oe=null;if(Te!==0){if(oe=G.value,he!==!0||oe===null){const ie=v+Te*4,me=te.matrixWorldInverse;M.getNormalMatrix(me),(oe===null||oe.length<ie)&&(oe=new Float32Array(ie));for(let fe=0,Ne=v;fe!==Te;++fe,Ne+=4)O.copy(ee[fe]).applyMatrix4(me,M),O.normal.toArray(oe,Ne),oe[Ne+3]=O.constant}G.value=oe,G.needsUpdate=!0}return l.numPlanes=Te,l.numIntersection=0,oe}}function VQ(e){let l=new WeakMap;function n(O,M){return M===QG?O.mapping=m9:M===$G&&(O.mapping=D9),O}function t(O){if(O&&O.isTexture){const M=O.mapping;if(M===QG||M===$G)if(l.has(O)){const G=l.get(O).texture;return n(G,O.mapping)}else{const G=O.image;if(G&&G.height>0){const Y=new Jk(G.height/2);return Y.fromEquirectangularTexture(e,O),l.set(O,Y),O.addEventListener("dispose",c),n(Y.texture,O.mapping)}else return null}}return O}function c(O){const M=O.target;M.removeEventListener("dispose",c);const G=l.get(M);G!==void 0&&(l.delete(M),G.dispose())}function w(){l=new WeakMap}return{get:t,dispose:w}}class sY extends tY{constructor(l=-1,n=1,t=1,c=-1,w=.1,O=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=l,this.right=n,this.top=t,this.bottom=c,this.near=w,this.far=O,this.updateProjectionMatrix()}copy(l,n){return super.copy(l,n),this.left=l.left,this.right=l.right,this.top=l.top,this.bottom=l.bottom,this.near=l.near,this.far=l.far,this.zoom=l.zoom,this.view=l.view===null?null:Object.assign({},l.view),this}setViewOffset(l,n,t,c,w,O){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=l,this.view.fullHeight=n,this.view.offsetX=t,this.view.offsetY=c,this.view.width=w,this.view.height=O,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const l=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),t=(this.right+this.left)/2,c=(this.top+this.bottom)/2;let w=t-l,O=t+l,M=c+n,G=c-n;if(this.view!==null&&this.view.enabled){const Y=(this.right-this.left)/this.view.fullWidth/this.zoom,Z=(this.top-this.bottom)/this.view.fullHeight/this.zoom;w+=Y*this.view.offsetX,O=w+Y*this.view.width,M-=Z*this.view.offsetY,G=M-Z*this.view.height}this.projectionMatrix.makeOrthographic(w,O,M,G,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(l){const n=super.toJSON(l);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const o9=4,AW=[.125,.215,.35,.446,.526,.582],_8=20,NG=new sY,SW=new ns;let AG=null,SG=0,LG=0;const e8=(1+Math.sqrt(5))/2,gP=1/e8,LW=[new lt(1,1,1),new lt(-1,1,1),new lt(1,1,-1),new lt(-1,1,-1),new lt(0,e8,gP),new lt(0,e8,-gP),new lt(gP,0,e8),new lt(-gP,0,e8),new lt(e8,gP,0),new lt(-e8,gP,0)];class OW{constructor(l){this._renderer=l,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(l,n=0,t=.1,c=100){AG=this._renderer.getRenderTarget(),SG=this._renderer.getActiveCubeFace(),LG=this._renderer.getActiveMipmapLevel(),this._setSize(256);const w=this._allocateTargets();return w.depthBuffer=!0,this._sceneToCubeUV(l,t,c,w),n>0&&this._blur(w,0,0,n),this._applyPMREM(w),this._cleanup(w),w}fromEquirectangular(l,n=null){return this._fromTexture(l,n)}fromCubemap(l,n=null){return this._fromTexture(l,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=CW(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=PW(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(l){this._lodMax=Math.floor(Math.log2(l)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let l=0;l<this._lodPlanes.length;l++)this._lodPlanes[l].dispose()}_cleanup(l){this._renderer.setRenderTarget(AG,SG,LG),l.scissorTest=!1,WB(l,0,0,l.width,l.height)}_fromTexture(l,n){l.mapping===m9||l.mapping===D9?this._setSize(l.image.length===0?16:l.image[0].width||l.image[0].image.width):this._setSize(l.image.width/4),AG=this._renderer.getRenderTarget(),SG=this._renderer.getActiveCubeFace(),LG=this._renderer.getActiveMipmapLevel();const t=n||this._allocateTargets();return this._textureToCubeUV(l,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(){const l=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,t={magFilter:f2,minFilter:f2,generateMipmaps:!1,type:GH,format:sE,colorSpace:Q7,depthBuffer:!1},c=gW(l,n,t);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==l||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gW(l,n,t);const{_lodMax:w}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_Q(w)),this._blurMaterial=WQ(w,l,n)}return c}_compileMaterial(l){const n=new d2(this._lodPlanes[0],l);this._renderer.compile(n,NG)}_sceneToCubeUV(l,n,t,c){const M=new nE(90,1,n,t),G=[1,-1,1,1,1,1],Y=[1,1,1,-1,-1,-1],Z=this._renderer,ee=Z.autoClear,te=Z.toneMapping;Z.getClearColor(SW),Z.toneMapping=MN,Z.autoClear=!1;const v=new Jj({name:"PMREM.Background",side:D3,depthWrite:!1,depthTest:!1}),he=new d2(new uB,v);let Te=!1;const oe=l.background;oe?oe.isColor&&(v.color.copy(oe),l.background=null,Te=!0):(v.color.copy(SW),Te=!0);for(let ie=0;ie<6;ie++){const me=ie%3;me===0?(M.up.set(0,G[ie],0),M.lookAt(Y[ie],0,0)):me===1?(M.up.set(0,0,G[ie]),M.lookAt(0,Y[ie],0)):(M.up.set(0,G[ie],0),M.lookAt(0,0,Y[ie]));const fe=this._cubeSize;WB(c,me*fe,ie>2?fe:0,fe,fe),Z.setRenderTarget(c),Te&&Z.render(he,M),Z.render(l,M)}he.geometry.dispose(),he.material.dispose(),Z.toneMapping=te,Z.autoClear=ee,l.background=oe}_textureToCubeUV(l,n){const t=this._renderer,c=l.mapping===m9||l.mapping===D9;c?(this._cubemapMaterial===null&&(this._cubemapMaterial=CW()),this._cubemapMaterial.uniforms.flipEnvMap.value=l.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=PW());const w=c?this._cubemapMaterial:this._equirectMaterial,O=new d2(this._lodPlanes[0],w),M=w.uniforms;M.envMap.value=l;const G=this._cubeSize;WB(n,0,0,3*G,2*G),t.setRenderTarget(n),t.render(O,NG)}_applyPMREM(l){const n=this._renderer,t=n.autoClear;n.autoClear=!1;for(let c=1;c<this._lodPlanes.length;c++){const w=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),O=LW[(c-1)%LW.length];this._blur(l,c-1,c,w,O)}n.autoClear=t}_blur(l,n,t,c,w){const O=this._pingPongRenderTarget;this._halfBlur(l,O,n,t,c,"latitudinal",w),this._halfBlur(O,l,t,t,c,"longitudinal",w)}_halfBlur(l,n,t,c,w,O,M){const G=this._renderer,Y=this._blurMaterial;O!=="latitudinal"&&O!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const Z=3,ee=new d2(this._lodPlanes[c],Y),te=Y.uniforms,v=this._sizeLods[t]-1,he=isFinite(w)?Math.PI/(2*v):2*Math.PI/(2*_8-1),Te=w/he,oe=isFinite(w)?1+Math.floor(Z*Te):_8;oe>_8&&console.warn(`sigmaRadians, ${w}, is too large and will clip, as it requested ${oe} samples when the maximum is set to ${_8}`);const ie=[];let me=0;for(let je=0;je<_8;++je){const et=je/Te,ge=Math.exp(-et*et/2);ie.push(ge),je===0?me+=ge:je<oe&&(me+=2*ge)}for(let je=0;je<ie.length;je++)ie[je]=ie[je]/me;te.envMap.value=l.texture,te.samples.value=oe,te.weights.value=ie,te.latitudinal.value=O==="latitudinal",M&&(te.poleAxis.value=M);const{_lodMax:fe}=this;te.dTheta.value=he,te.mipInt.value=fe-t;const Ne=this._sizeLods[c],We=3*Ne*(c>fe-o9?c-fe+o9:0),xe=4*(this._cubeSize-Ne);WB(n,We,xe,3*Ne,2*Ne),G.setRenderTarget(n),G.render(ee,NG)}}function _Q(e){const l=[],n=[],t=[];let c=e;const w=e-o9+1+AW.length;for(let O=0;O<w;O++){const M=Math.pow(2,c);n.push(M);let G=1/M;O>e-o9?G=AW[O-e+o9-1]:O===0&&(G=0),t.push(G);const Y=1/(M-2),Z=-Y,ee=1+Y,te=[Z,Z,ee,Z,ee,ee,Z,Z,ee,ee,Z,ee],v=6,he=6,Te=3,oe=2,ie=1,me=new Float32Array(Te*he*v),fe=new Float32Array(oe*he*v),Ne=new Float32Array(ie*he*v);for(let xe=0;xe<v;xe++){const je=xe%3*2/3-1,et=xe>2?0:-1,ge=[je,et,0,je+2/3,et,0,je+2/3,et+1,0,je,et,0,je+2/3,et+1,0,je,et+1,0];me.set(ge,Te*he*xe),fe.set(te,oe*he*xe);const Le=[xe,xe,xe,xe,xe,xe];Ne.set(Le,ie*he*xe)}const We=new Jf;We.setAttribute("position",new p0(me,Te)),We.setAttribute("uv",new p0(fe,oe)),We.setAttribute("faceIndex",new p0(Ne,ie)),l.push(We),c>o9&&c--}return{lodPlanes:l,sizeLods:n,sigmas:t}}function gW(e,l,n){const t=new UN(e,l,n);return t.texture.mapping=tF,t.texture.name="PMREM.cubeUv",t.scissorTest=!0,t}function WB(e,l,n,t,c){e.viewport.set(l,n,t,c),e.scissor.set(l,n,t,c)}function WQ(e,l,n){const t=new Float32Array(_8),c=new lt(0,1,0);return new rL({name:"SphericalGaussianBlur",defines:{n:_8,CUBEUV_TEXEL_WIDTH:1/l,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:t},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:c}},vertexShader:_V(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bN,depthTest:!1,depthWrite:!1})}function PW(){return new rL({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_V(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bN,depthTest:!1,depthWrite:!1})}function CW(){return new rL({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_V(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bN,depthTest:!1,depthWrite:!1})}function _V(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jQ(e){let l=new WeakMap,n=null;function t(M){if(M&&M.isTexture){const G=M.mapping,Y=G===QG||G===$G,Z=G===m9||G===D9;if(Y||Z)if(M.isRenderTargetTexture&&M.needsPMREMUpdate===!0){M.needsPMREMUpdate=!1;let ee=l.get(M);return n===null&&(n=new OW(e)),ee=Y?n.fromEquirectangular(M,ee):n.fromCubemap(M,ee),l.set(M,ee),ee.texture}else{if(l.has(M))return l.get(M).texture;{const ee=M.image;if(Y&&ee&&ee.height>0||Z&&ee&&c(ee)){n===null&&(n=new OW(e));const te=Y?n.fromEquirectangular(M):n.fromCubemap(M);return l.set(M,te),M.addEventListener("dispose",w),te.texture}else return null}}}return M}function c(M){let G=0;const Y=6;for(let Z=0;Z<Y;Z++)M[Z]!==void 0&&G++;return G===Y}function w(M){const G=M.target;G.removeEventListener("dispose",w);const Y=l.get(G);Y!==void 0&&(l.delete(G),Y.dispose())}function O(){l=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:t,dispose:O}}function YQ(e){const l={};function n(t){if(l[t]!==void 0)return l[t];let c;switch(t){case"WEBGL_depth_texture":c=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":c=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":c=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":c=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:c=e.getExtension(t)}return l[t]=c,c}return{has:function(t){return n(t)!==null},init:function(t){t.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(t){const c=n(t);return c===null&&console.warn("THREE.WebGLRenderer: "+t+" extension not supported."),c}}}function zQ(e,l,n,t){const c={},w=new WeakMap;function O(ee){const te=ee.target;te.index!==null&&l.remove(te.index);for(const he in te.attributes)l.remove(te.attributes[he]);for(const he in te.morphAttributes){const Te=te.morphAttributes[he];for(let oe=0,ie=Te.length;oe<ie;oe++)l.remove(Te[oe])}te.removeEventListener("dispose",O),delete c[te.id];const v=w.get(te);v&&(l.remove(v),w.delete(te)),t.releaseStatesOfGeometry(te),te.isInstancedBufferGeometry===!0&&delete te._maxInstanceCount,n.memory.geometries--}function M(ee,te){return c[te.id]===!0||(te.addEventListener("dispose",O),c[te.id]=!0,n.memory.geometries++),te}function G(ee){const te=ee.attributes;for(const he in te)l.update(te[he],e.ARRAY_BUFFER);const v=ee.morphAttributes;for(const he in v){const Te=v[he];for(let oe=0,ie=Te.length;oe<ie;oe++)l.update(Te[oe],e.ARRAY_BUFFER)}}function Y(ee){const te=[],v=ee.index,he=ee.attributes.position;let Te=0;if(v!==null){const me=v.array;Te=v.version;for(let fe=0,Ne=me.length;fe<Ne;fe+=3){const We=me[fe+0],xe=me[fe+1],je=me[fe+2];te.push(We,xe,xe,je,je,We)}}else if(he!==void 0){const me=he.array;Te=he.version;for(let fe=0,Ne=me.length/3-1;fe<Ne;fe+=3){const We=fe+0,xe=fe+1,je=fe+2;te.push(We,xe,xe,je,je,We)}}else return;const oe=new(qj(te)?vj:Xj)(te,1);oe.version=Te;const ie=w.get(ee);ie&&l.remove(ie),w.set(ee,oe)}function Z(ee){const te=w.get(ee);if(te){const v=ee.index;v!==null&&te.version<v.version&&Y(ee)}else Y(ee);return w.get(ee)}return{get:M,update:G,getWireframeAttribute:Z}}function kQ(e,l,n,t){const c=t.isWebGL2;let w;function O(v){w=v}let M,G;function Y(v){M=v.type,G=v.bytesPerElement}function Z(v,he){e.drawElements(w,he,M,v*G),n.update(he,w,1)}function ee(v,he,Te){if(Te===0)return;let oe,ie;if(c)oe=e,ie="drawElementsInstanced";else if(oe=l.get("ANGLE_instanced_arrays"),ie="drawElementsInstancedANGLE",oe===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}oe[ie](w,he,M,v*G,Te),n.update(he,w,Te)}function te(v,he,Te){if(Te===0)return;const oe=l.get("WEBGL_multi_draw");if(oe===null)for(let ie=0;ie<Te;ie++)this.render(v[ie]/G,he[ie]);else{oe.multiDrawElementsWEBGL(w,he,0,M,v,0,Te);let ie=0;for(let me=0;me<Te;me++)ie+=he[me];n.update(ie,w,1)}}this.setMode=O,this.setIndex=Y,this.render=Z,this.renderInstances=ee,this.renderMultiDraw=te}function qQ(e){const l={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function t(w,O,M){switch(n.calls++,O){case e.TRIANGLES:n.triangles+=M*(w/3);break;case e.LINES:n.lines+=M*(w/2);break;case e.LINE_STRIP:n.lines+=M*(w-1);break;case e.LINE_LOOP:n.lines+=M*w;break;case e.POINTS:n.points+=M*w;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",O);break}}function c(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:l,render:n,programs:null,autoReset:!0,reset:c,update:t}}function KQ(e,l){return e[0]-l[0]}function QQ(e,l){return Math.abs(l[1])-Math.abs(e[1])}function $Q(e,l,n){const t={},c=new Float32Array(8),w=new WeakMap,O=new Hc,M=[];for(let Y=0;Y<8;Y++)M[Y]=[Y,0];function G(Y,Z,ee){const te=Y.morphTargetInfluences;if(l.isWebGL2===!0){const v=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,he=v!==void 0?v.length:0;let Te=w.get(Z);if(Te===void 0||Te.count!==he){let Xe=function(){nt.dispose(),w.delete(Z),Z.removeEventListener("dispose",Xe)};Te!==void 0&&Te.texture.dispose();const me=Z.morphAttributes.position!==void 0,fe=Z.morphAttributes.normal!==void 0,Ne=Z.morphAttributes.color!==void 0,We=Z.morphAttributes.position||[],xe=Z.morphAttributes.normal||[],je=Z.morphAttributes.color||[];let et=0;me===!0&&(et=1),fe===!0&&(et=2),Ne===!0&&(et=3);let ge=Z.attributes.position.count*et,Le=1;ge>l.maxTextureSize&&(Le=Math.ceil(ge/l.maxTextureSize),ge=l.maxTextureSize);const ve=new Float32Array(ge*Le*4*he),nt=new $j(ve,ge,Le,he);nt.type=LN,nt.needsUpdate=!0;const ht=et*4;for(let at=0;at<he;at++){const It=We[at],St=xe[at],bt=je[at],Ct=ge*Le*4*at;for(let Ft=0;Ft<It.count;Ft++){const kt=Ft*ht;me===!0&&(O.fromBufferAttribute(It,Ft),ve[Ct+kt+0]=O.x,ve[Ct+kt+1]=O.y,ve[Ct+kt+2]=O.z,ve[Ct+kt+3]=0),fe===!0&&(O.fromBufferAttribute(St,Ft),ve[Ct+kt+4]=O.x,ve[Ct+kt+5]=O.y,ve[Ct+kt+6]=O.z,ve[Ct+kt+7]=0),Ne===!0&&(O.fromBufferAttribute(bt,Ft),ve[Ct+kt+8]=O.x,ve[Ct+kt+9]=O.y,ve[Ct+kt+10]=O.z,ve[Ct+kt+11]=bt.itemSize===4?O.w:1)}}Te={count:he,texture:nt,size:new Dl(ge,Le)},w.set(Z,Te),Z.addEventListener("dispose",Xe)}let oe=0;for(let me=0;me<te.length;me++)oe+=te[me];const ie=Z.morphTargetsRelative?1:1-oe;ee.getUniforms().setValue(e,"morphTargetBaseInfluence",ie),ee.getUniforms().setValue(e,"morphTargetInfluences",te),ee.getUniforms().setValue(e,"morphTargetsTexture",Te.texture,n),ee.getUniforms().setValue(e,"morphTargetsTextureSize",Te.size)}else{const v=te===void 0?0:te.length;let he=t[Z.id];if(he===void 0||he.length!==v){he=[];for(let fe=0;fe<v;fe++)he[fe]=[fe,0];t[Z.id]=he}for(let fe=0;fe<v;fe++){const Ne=he[fe];Ne[0]=fe,Ne[1]=te[fe]}he.sort(QQ);for(let fe=0;fe<8;fe++)fe<v&&he[fe][1]?(M[fe][0]=he[fe][0],M[fe][1]=he[fe][1]):(M[fe][0]=Number.MAX_SAFE_INTEGER,M[fe][1]=0);M.sort(KQ);const Te=Z.morphAttributes.position,oe=Z.morphAttributes.normal;let ie=0;for(let fe=0;fe<8;fe++){const Ne=M[fe],We=Ne[0],xe=Ne[1];We!==Number.MAX_SAFE_INTEGER&&xe?(Te&&Z.getAttribute("morphTarget"+fe)!==Te[We]&&Z.setAttribute("morphTarget"+fe,Te[We]),oe&&Z.getAttribute("morphNormal"+fe)!==oe[We]&&Z.setAttribute("morphNormal"+fe,oe[We]),c[fe]=xe,ie+=xe):(Te&&Z.hasAttribute("morphTarget"+fe)===!0&&Z.deleteAttribute("morphTarget"+fe),oe&&Z.hasAttribute("morphNormal"+fe)===!0&&Z.deleteAttribute("morphNormal"+fe),c[fe]=0)}const me=Z.morphTargetsRelative?1:1-ie;ee.getUniforms().setValue(e,"morphTargetBaseInfluence",me),ee.getUniforms().setValue(e,"morphTargetInfluences",c)}}return{update:G}}function ZQ(e,l,n,t){let c=new WeakMap;function w(G){const Y=t.render.frame,Z=G.geometry,ee=l.get(G,Z);if(c.get(ee)!==Y&&(l.update(ee),c.set(ee,Y)),G.isInstancedMesh&&(G.hasEventListener("dispose",M)===!1&&G.addEventListener("dispose",M),c.get(G)!==Y&&(n.update(G.instanceMatrix,e.ARRAY_BUFFER),G.instanceColor!==null&&n.update(G.instanceColor,e.ARRAY_BUFFER),c.set(G,Y))),G.isSkinnedMesh){const te=G.skeleton;c.get(te)!==Y&&(te.update(),c.set(te,Y))}return ee}function O(){c=new WeakMap}function M(G){const Y=G.target;Y.removeEventListener("dispose",M),n.remove(Y.instanceMatrix),Y.instanceColor!==null&&n.remove(Y.instanceColor)}return{update:w,dispose:O}}class rY extends R0{constructor(l,n,t,c,w,O,M,G,Y,Z){if(Z=Z!==void 0?Z:Y8,Z!==Y8&&Z!==N9)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");t===void 0&&Z===Y8&&(t=SN),t===void 0&&Z===N9&&(t=j8),super(null,c,w,O,M,G,Z,t,Y),this.isDepthTexture=!0,this.image={width:l,height:n},this.magFilter=M!==void 0?M:zf,this.minFilter=G!==void 0?G:zf,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(l){return super.copy(l),this.compareFunction=l.compareFunction,this}toJSON(l){const n=super.toJSON(l);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const uY=new R0,aY=new rY(1,1);aY.compareFunction=kj;const iY=new $j,oY=new Hk,cY=new nY,bW=[],MW=[],xW=new Float32Array(16),HW=new Float32Array(9),BW=new Float32Array(4);function G9(e,l,n){const t=e[0];if(t<=0||t>0)return e;const c=l*n;let w=bW[c];if(w===void 0&&(w=new Float32Array(c),bW[c]=w),l!==0){t.toArray(w,0);for(let O=1,M=0;O!==l;++O)M+=n,e[O].toArray(w,M)}return w}function ec(e,l){if(e.length!==l.length)return!1;for(let n=0,t=e.length;n<t;n++)if(e[n]!==l[n])return!1;return!0}function tc(e,l){for(let n=0,t=l.length;n<t;n++)e[n]=l[n]}function rF(e,l){let n=MW[l];n===void 0&&(n=new Int32Array(l),MW[l]=n);for(let t=0;t!==l;++t)n[t]=e.allocateTextureUnit();return n}function JQ(e,l){const n=this.cache;n[0]!==l&&(e.uniform1f(this.addr,l),n[0]=l)}function XQ(e,l){const n=this.cache;if(l.x!==void 0)(n[0]!==l.x||n[1]!==l.y)&&(e.uniform2f(this.addr,l.x,l.y),n[0]=l.x,n[1]=l.y);else{if(ec(n,l))return;e.uniform2fv(this.addr,l),tc(n,l)}}function vQ(e,l){const n=this.cache;if(l.x!==void 0)(n[0]!==l.x||n[1]!==l.y||n[2]!==l.z)&&(e.uniform3f(this.addr,l.x,l.y,l.z),n[0]=l.x,n[1]=l.y,n[2]=l.z);else if(l.r!==void 0)(n[0]!==l.r||n[1]!==l.g||n[2]!==l.b)&&(e.uniform3f(this.addr,l.r,l.g,l.b),n[0]=l.r,n[1]=l.g,n[2]=l.b);else{if(ec(n,l))return;e.uniform3fv(this.addr,l),tc(n,l)}}function e$(e,l){const n=this.cache;if(l.x!==void 0)(n[0]!==l.x||n[1]!==l.y||n[2]!==l.z||n[3]!==l.w)&&(e.uniform4f(this.addr,l.x,l.y,l.z,l.w),n[0]=l.x,n[1]=l.y,n[2]=l.z,n[3]=l.w);else{if(ec(n,l))return;e.uniform4fv(this.addr,l),tc(n,l)}}function t$(e,l){const n=this.cache,t=l.elements;if(t===void 0){if(ec(n,l))return;e.uniformMatrix2fv(this.addr,!1,l),tc(n,l)}else{if(ec(n,t))return;BW.set(t),e.uniformMatrix2fv(this.addr,!1,BW),tc(n,t)}}function n$(e,l){const n=this.cache,t=l.elements;if(t===void 0){if(ec(n,l))return;e.uniformMatrix3fv(this.addr,!1,l),tc(n,l)}else{if(ec(n,t))return;HW.set(t),e.uniformMatrix3fv(this.addr,!1,HW),tc(n,t)}}function l$(e,l){const n=this.cache,t=l.elements;if(t===void 0){if(ec(n,l))return;e.uniformMatrix4fv(this.addr,!1,l),tc(n,l)}else{if(ec(n,t))return;xW.set(t),e.uniformMatrix4fv(this.addr,!1,xW),tc(n,t)}}function s$(e,l){const n=this.cache;n[0]!==l&&(e.uniform1i(this.addr,l),n[0]=l)}function r$(e,l){const n=this.cache;if(l.x!==void 0)(n[0]!==l.x||n[1]!==l.y)&&(e.uniform2i(this.addr,l.x,l.y),n[0]=l.x,n[1]=l.y);else{if(ec(n,l))return;e.uniform2iv(this.addr,l),tc(n,l)}}function u$(e,l){const n=this.cache;if(l.x!==void 0)(n[0]!==l.x||n[1]!==l.y||n[2]!==l.z)&&(e.uniform3i(this.addr,l.x,l.y,l.z),n[0]=l.x,n[1]=l.y,n[2]=l.z);else{if(ec(n,l))return;e.uniform3iv(this.addr,l),tc(n,l)}}function a$(e,l){const n=this.cache;if(l.x!==void 0)(n[0]!==l.x||n[1]!==l.y||n[2]!==l.z||n[3]!==l.w)&&(e.uniform4i(this.addr,l.x,l.y,l.z,l.w),n[0]=l.x,n[1]=l.y,n[2]=l.z,n[3]=l.w);else{if(ec(n,l))return;e.uniform4iv(this.addr,l),tc(n,l)}}function i$(e,l){const n=this.cache;n[0]!==l&&(e.uniform1ui(this.addr,l),n[0]=l)}function o$(e,l){const n=this.cache;if(l.x!==void 0)(n[0]!==l.x||n[1]!==l.y)&&(e.uniform2ui(this.addr,l.x,l.y),n[0]=l.x,n[1]=l.y);else{if(ec(n,l))return;e.uniform2uiv(this.addr,l),tc(n,l)}}function c$(e,l){const n=this.cache;if(l.x!==void 0)(n[0]!==l.x||n[1]!==l.y||n[2]!==l.z)&&(e.uniform3ui(this.addr,l.x,l.y,l.z),n[0]=l.x,n[1]=l.y,n[2]=l.z);else{if(ec(n,l))return;e.uniform3uiv(this.addr,l),tc(n,l)}}function h$(e,l){const n=this.cache;if(l.x!==void 0)(n[0]!==l.x||n[1]!==l.y||n[2]!==l.z||n[3]!==l.w)&&(e.uniform4ui(this.addr,l.x,l.y,l.z,l.w),n[0]=l.x,n[1]=l.y,n[2]=l.z,n[3]=l.w);else{if(ec(n,l))return;e.uniform4uiv(this.addr,l),tc(n,l)}}function f$(e,l,n){const t=this.cache,c=n.allocateTextureUnit();t[0]!==c&&(e.uniform1i(this.addr,c),t[0]=c);const w=this.type===e.SAMPLER_2D_SHADOW?aY:uY;n.setTexture2D(l||w,c)}function I$(e,l,n){const t=this.cache,c=n.allocateTextureUnit();t[0]!==c&&(e.uniform1i(this.addr,c),t[0]=c),n.setTexture3D(l||oY,c)}function d$(e,l,n){const t=this.cache,c=n.allocateTextureUnit();t[0]!==c&&(e.uniform1i(this.addr,c),t[0]=c),n.setTextureCube(l||cY,c)}function y$(e,l,n){const t=this.cache,c=n.allocateTextureUnit();t[0]!==c&&(e.uniform1i(this.addr,c),t[0]=c),n.setTexture2DArray(l||iY,c)}function w$(e){switch(e){case 5126:return JQ;case 35664:return XQ;case 35665:return vQ;case 35666:return e$;case 35674:return t$;case 35675:return n$;case 35676:return l$;case 5124:case 35670:return s$;case 35667:case 35671:return r$;case 35668:case 35672:return u$;case 35669:case 35673:return a$;case 5125:return i$;case 36294:return o$;case 36295:return c$;case 36296:return h$;case 35678:case 36198:case 36298:case 36306:case 35682:return f$;case 35679:case 36299:case 36307:return I$;case 35680:case 36300:case 36308:case 36293:return d$;case 36289:case 36303:case 36311:case 36292:return y$}}function E$(e,l){e.uniform1fv(this.addr,l)}function T$(e,l){const n=G9(l,this.size,2);e.uniform2fv(this.addr,n)}function R$(e,l){const n=G9(l,this.size,3);e.uniform3fv(this.addr,n)}function p$(e,l){const n=G9(l,this.size,4);e.uniform4fv(this.addr,n)}function m$(e,l){const n=G9(l,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function D$(e,l){const n=G9(l,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function N$(e,l){const n=G9(l,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function A$(e,l){e.uniform1iv(this.addr,l)}function S$(e,l){e.uniform2iv(this.addr,l)}function L$(e,l){e.uniform3iv(this.addr,l)}function O$(e,l){e.uniform4iv(this.addr,l)}function g$(e,l){e.uniform1uiv(this.addr,l)}function P$(e,l){e.uniform2uiv(this.addr,l)}function C$(e,l){e.uniform3uiv(this.addr,l)}function b$(e,l){e.uniform4uiv(this.addr,l)}function M$(e,l,n){const t=this.cache,c=l.length,w=rF(n,c);ec(t,w)||(e.uniform1iv(this.addr,w),tc(t,w));for(let O=0;O!==c;++O)n.setTexture2D(l[O]||uY,w[O])}function x$(e,l,n){const t=this.cache,c=l.length,w=rF(n,c);ec(t,w)||(e.uniform1iv(this.addr,w),tc(t,w));for(let O=0;O!==c;++O)n.setTexture3D(l[O]||oY,w[O])}function H$(e,l,n){const t=this.cache,c=l.length,w=rF(n,c);ec(t,w)||(e.uniform1iv(this.addr,w),tc(t,w));for(let O=0;O!==c;++O)n.setTextureCube(l[O]||cY,w[O])}function B$(e,l,n){const t=this.cache,c=l.length,w=rF(n,c);ec(t,w)||(e.uniform1iv(this.addr,w),tc(t,w));for(let O=0;O!==c;++O)n.setTexture2DArray(l[O]||iY,w[O])}function U$(e){switch(e){case 5126:return E$;case 35664:return T$;case 35665:return R$;case 35666:return p$;case 35674:return m$;case 35675:return D$;case 35676:return N$;case 5124:case 35670:return A$;case 35667:case 35671:return S$;case 35668:case 35672:return L$;case 35669:case 35673:return O$;case 5125:return g$;case 36294:return P$;case 36295:return C$;case 36296:return b$;case 35678:case 36198:case 36298:case 36306:case 35682:return M$;case 35679:case 36299:case 36307:return x$;case 35680:case 36300:case 36308:case 36293:return H$;case 36289:case 36303:case 36311:case 36292:return B$}}class F${constructor(l,n,t){this.id=l,this.addr=t,this.cache=[],this.type=n.type,this.setValue=w$(n.type)}}class G${constructor(l,n,t){this.id=l,this.addr=t,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=U$(n.type)}}class V${constructor(l){this.id=l,this.seq=[],this.map={}}setValue(l,n,t){const c=this.seq;for(let w=0,O=c.length;w!==O;++w){const M=c[w];M.setValue(l,n[M.id],t)}}}const OG=/(\w+)(\])?(\[|\.)?/g;function UW(e,l){e.seq.push(l),e.map[l.id]=l}function _$(e,l,n){const t=e.name,c=t.length;for(OG.lastIndex=0;;){const w=OG.exec(t),O=OG.lastIndex;let M=w[1];const G=w[2]==="]",Y=w[3];if(G&&(M=M|0),Y===void 0||Y==="["&&O+2===c){UW(n,Y===void 0?new F$(M,e,l):new G$(M,e,l));break}else{let ee=n.map[M];ee===void 0&&(ee=new V$(M),UW(n,ee)),n=ee}}}class fU{constructor(l,n){this.seq=[],this.map={};const t=l.getProgramParameter(n,l.ACTIVE_UNIFORMS);for(let c=0;c<t;++c){const w=l.getActiveUniform(n,c),O=l.getUniformLocation(n,w.name);_$(w,O,this)}}setValue(l,n,t,c){const w=this.map[n];w!==void 0&&w.setValue(l,t,c)}setOptional(l,n,t){const c=n[t];c!==void 0&&this.setValue(l,t,c)}static upload(l,n,t,c){for(let w=0,O=n.length;w!==O;++w){const M=n[w],G=t[M.id];G.needsUpdate!==!1&&M.setValue(l,G.value,c)}}static seqWithValue(l,n){const t=[];for(let c=0,w=l.length;c!==w;++c){const O=l[c];O.id in n&&t.push(O)}return t}}function FW(e,l,n){const t=e.createShader(l);return e.shaderSource(t,n),e.compileShader(t),t}const W$=37297;let j$=0;function Y$(e,l){const n=e.split(`
`),t=[],c=Math.max(l-6,0),w=Math.min(l+6,n.length);for(let O=c;O<w;O++){const M=O+1;t.push(`${M===l?">":" "} ${M}: ${n[O]}`)}return t.join(`
`)}function z$(e){const l=ks.getPrimaries(ks.workingColorSpace),n=ks.getPrimaries(e);let t;switch(l===n?t="":l===$U&&n===QU?t="LinearDisplayP3ToLinearSRGB":l===QU&&n===$U&&(t="LinearSRGBToLinearDisplayP3"),e){case Q7:case nF:return[t,"LinearTransferOETF"];case kf:case BV:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",e),[t,"LinearTransferOETF"]}}function GW(e,l,n){const t=e.getShaderParameter(l,e.COMPILE_STATUS),c=e.getShaderInfoLog(l).trim();if(t&&c==="")return"";const w=/ERROR: 0:(\d+)/.exec(c);if(w){const O=parseInt(w[1]);return n.toUpperCase()+`

`+c+`

`+Y$(e.getShaderSource(l),O)}else return c}function k$(e,l){const n=z$(l);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function q$(e,l){let n;switch(l){case zz:n="Linear";break;case kz:n="Reinhard";break;case qz:n="OptimizedCineon";break;case Kz:n="ACESFilmic";break;case $z:n="AgX";break;case Qz:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",l),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function K$(e){return[e.extensionDerivatives||e.envMapCubeUVHeight||e.bumpMap||e.normalMapTangentSpace||e.clearcoatNormalMap||e.flatShading||e.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(e.extensionShaderTextureLOD||e.envMap||e.transmission)&&e.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(c9).join(`
`)}function Q$(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(c9).join(`
`)}function $$(e){const l=[];for(const n in e){const t=e[n];t!==!1&&l.push("#define "+n+" "+t)}return l.join(`
`)}function Z$(e,l){const n={},t=e.getProgramParameter(l,e.ACTIVE_ATTRIBUTES);for(let c=0;c<t;c++){const w=e.getActiveAttrib(l,c),O=w.name;let M=1;w.type===e.FLOAT_MAT2&&(M=2),w.type===e.FLOAT_MAT3&&(M=3),w.type===e.FLOAT_MAT4&&(M=4),n[O]={type:w.type,location:e.getAttribLocation(l,O),locationSize:M}}return n}function c9(e){return e!==""}function VW(e,l){const n=l.numSpotLightShadows+l.numSpotLightMaps-l.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,l.numDirLights).replace(/NUM_SPOT_LIGHTS/g,l.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,l.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,l.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,l.numPointLights).replace(/NUM_HEMI_LIGHTS/g,l.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,l.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,l.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,l.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,l.numPointLightShadows)}function _W(e,l){return e.replace(/NUM_CLIPPING_PLANES/g,l.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,l.numClippingPlanes-l.numClipIntersection)}const J$=/^[ \t]*#include +<([\w\d./]+)>/gm;function tV(e){return e.replace(J$,v$)}const X$=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function v$(e,l){let n=Sl[l];if(n===void 0){const t=X$.get(l);if(t!==void 0)n=Sl[t],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',l,t);else throw new Error("Can not resolve #include <"+l+">")}return tV(n)}const eZ=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function WW(e){return e.replace(eZ,tZ)}function tZ(e,l,n,t){let c="";for(let w=parseInt(l);w<parseInt(n);w++)c+=t.replace(/\[\s*i\s*\]/g,"[ "+w+" ]").replace(/UNROLLED_LOOP_INDEX/g,w);return c}function jW(e){let l="precision "+e.precision+` float;
precision `+e.precision+" int;";return e.precision==="highp"?l+=`
#define HIGH_PRECISION`:e.precision==="mediump"?l+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(l+=`
#define LOW_PRECISION`),l}function nZ(e){let l="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Bj?l="SHADOWMAP_TYPE_PCF":e.shadowMapType===Tz?l="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===F6&&(l="SHADOWMAP_TYPE_VSM"),l}function lZ(e){let l="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case m9:case D9:l="ENVMAP_TYPE_CUBE";break;case tF:l="ENVMAP_TYPE_CUBE_UV";break}return l}function sZ(e){let l="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case D9:l="ENVMAP_MODE_REFRACTION";break}return l}function rZ(e){let l="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case MV:l="ENVMAP_BLENDING_MULTIPLY";break;case jz:l="ENVMAP_BLENDING_MIX";break;case Yz:l="ENVMAP_BLENDING_ADD";break}return l}function uZ(e){const l=e.envMapCubeUVHeight;if(l===null)return null;const n=Math.log2(l)-2,t=1/l;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:t,maxMip:n}}function aZ(e,l,n,t){const c=e.getContext(),w=n.defines;let O=n.vertexShader,M=n.fragmentShader;const G=nZ(n),Y=lZ(n),Z=sZ(n),ee=rZ(n),te=uZ(n),v=n.isWebGL2?"":K$(n),he=Q$(n),Te=$$(w),oe=c.createProgram();let ie,me,fe=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(ie=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,Te].filter(c9).join(`
`),ie.length>0&&(ie+=`
`),me=[v,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,Te].filter(c9).join(`
`),me.length>0&&(me+=`
`)):(ie=[jW(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,Te,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+Z:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+G:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(c9).join(`
`),me=[v,jW(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,Te,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+Y:"",n.envMap?"#define "+Z:"",n.envMap?"#define "+ee:"",te?"#define CUBEUV_TEXEL_WIDTH "+te.texelWidth:"",te?"#define CUBEUV_TEXEL_HEIGHT "+te.texelHeight:"",te?"#define CUBEUV_MAX_MIP "+te.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+G:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==MN?"#define TONE_MAPPING":"",n.toneMapping!==MN?Sl.tonemapping_pars_fragment:"",n.toneMapping!==MN?q$("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Sl.colorspace_pars_fragment,k$("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(c9).join(`
`)),O=tV(O),O=VW(O,n),O=_W(O,n),M=tV(M),M=VW(M,n),M=_W(M,n),O=WW(O),M=WW(M),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(fe=`#version 300 es
`,ie=[he,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+ie,me=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===uW?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===uW?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+me);const Ne=fe+ie+O,We=fe+me+M,xe=FW(c,c.VERTEX_SHADER,Ne),je=FW(c,c.FRAGMENT_SHADER,We);c.attachShader(oe,xe),c.attachShader(oe,je),n.index0AttributeName!==void 0?c.bindAttribLocation(oe,0,n.index0AttributeName):n.morphTargets===!0&&c.bindAttribLocation(oe,0,"position"),c.linkProgram(oe);function et(nt){if(e.debug.checkShaderErrors){const ht=c.getProgramInfoLog(oe).trim(),Xe=c.getShaderInfoLog(xe).trim(),at=c.getShaderInfoLog(je).trim();let It=!0,St=!0;if(c.getProgramParameter(oe,c.LINK_STATUS)===!1)if(It=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(c,oe,xe,je);else{const bt=GW(c,xe,"vertex"),Ct=GW(c,je,"fragment");console.error("THREE.WebGLProgram: Shader Error "+c.getError()+" - VALIDATE_STATUS "+c.getProgramParameter(oe,c.VALIDATE_STATUS)+`

Program Info Log: `+ht+`
`+bt+`
`+Ct)}else ht!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ht):(Xe===""||at==="")&&(St=!1);St&&(nt.diagnostics={runnable:It,programLog:ht,vertexShader:{log:Xe,prefix:ie},fragmentShader:{log:at,prefix:me}})}c.deleteShader(xe),c.deleteShader(je),ge=new fU(c,oe),Le=Z$(c,oe)}let ge;this.getUniforms=function(){return ge===void 0&&et(this),ge};let Le;this.getAttributes=function(){return Le===void 0&&et(this),Le};let ve=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ve===!1&&(ve=c.getProgramParameter(oe,W$)),ve},this.destroy=function(){t.releaseStatesOfProgram(this),c.deleteProgram(oe),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=j$++,this.cacheKey=l,this.usedTimes=1,this.program=oe,this.vertexShader=xe,this.fragmentShader=je,this}let iZ=0;class oZ{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(l){const n=l.vertexShader,t=l.fragmentShader,c=this._getShaderStage(n),w=this._getShaderStage(t),O=this._getShaderCacheForMaterial(l);return O.has(c)===!1&&(O.add(c),c.usedTimes++),O.has(w)===!1&&(O.add(w),w.usedTimes++),this}remove(l){const n=this.materialCache.get(l);for(const t of n)t.usedTimes--,t.usedTimes===0&&this.shaderCache.delete(t.code);return this.materialCache.delete(l),this}getVertexShaderID(l){return this._getShaderStage(l.vertexShader).id}getFragmentShaderID(l){return this._getShaderStage(l.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(l){const n=this.materialCache;let t=n.get(l);return t===void 0&&(t=new Set,n.set(l,t)),t}_getShaderStage(l){const n=this.shaderCache;let t=n.get(l);return t===void 0&&(t=new cZ(l),n.set(l,t)),t}}class cZ{constructor(l){this.id=iZ++,this.code=l,this.usedTimes=0}}function hZ(e,l,n,t,c,w,O){const M=new FV,G=new oZ,Y=[],Z=c.isWebGL2,ee=c.logarithmicDepthBuffer,te=c.vertexTextures;let v=c.precision;const he={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function Te(ge){return ge===0?"uv":`uv${ge}`}function oe(ge,Le,ve,nt,ht){const Xe=nt.fog,at=ht.geometry,It=ge.isMeshStandardMaterial?nt.environment:null,St=(ge.isMeshStandardMaterial?n:l).get(ge.envMap||It),bt=St&&St.mapping===tF?St.image.height:null,Ct=he[ge.type];ge.precision!==null&&(v=c.getMaxPrecision(ge.precision),v!==ge.precision&&console.warn("THREE.WebGLProgram.getParameters:",ge.precision,"not supported, using",v,"instead."));const Ft=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,kt=Ft!==void 0?Ft.length:0;let rn=0;at.morphAttributes.position!==void 0&&(rn=1),at.morphAttributes.normal!==void 0&&(rn=2),at.morphAttributes.color!==void 0&&(rn=3);let Ot,Vt,un,Sn;if(Ct){const ls=vT[Ct];Ot=ls.vertexShader,Vt=ls.fragmentShader}else Ot=ge.vertexShader,Vt=ge.fragmentShader,G.update(ge),un=G.getVertexShaderID(ge),Sn=G.getFragmentShaderID(ge);const bn=e.getRenderTarget(),kn=ht.isInstancedMesh===!0,qn=ht.isBatchedMesh===!0,pn=!!ge.map,il=!!ge.matcap,mt=!!St,Ns=!!ge.aoMap,Mn=!!ge.lightMap,Qn=!!ge.bumpMap,Ln=!!ge.normalMap,jl=!!ge.displacementMap,ll=!!ge.emissiveMap,Ye=!!ge.metalnessMap,_e=!!ge.roughnessMap,Dt=ge.anisotropy>0,zt=ge.clearcoat>0,jt=ge.iridescence>0,Gt=ge.sheen>0,Dn=ge.transmission>0,on=Dt&&!!ge.anisotropyMap,In=zt&&!!ge.clearcoatMap,Pn=zt&&!!ge.clearcoatNormalMap,Hn=zt&&!!ge.clearcoatRoughnessMap,Ht=jt&&!!ge.iridescenceMap,Rl=jt&&!!ge.iridescenceThicknessMap,$n=Gt&&!!ge.sheenColorMap,Fn=Gt&&!!ge.sheenRoughnessMap,On=!!ge.specularMap,wn=!!ge.specularColorMap,Zn=!!ge.specularIntensityMap,Ll=Dn&&!!ge.transmissionMap,hn=Dn&&!!ge.thicknessMap,yn=!!ge.gradientMap,Zt=!!ge.alphaMap,ut=ge.alphaTest>0,qt=!!ge.alphaHash,vt=!!ge.extensions,en=!!at.attributes.uv1,Bn=!!at.attributes.uv2,En=!!at.attributes.uv3;let Yl=MN;return ge.toneMapped&&(bn===null||bn.isXRRenderTarget===!0)&&(Yl=e.toneMapping),{isWebGL2:Z,shaderID:Ct,shaderType:ge.type,shaderName:ge.name,vertexShader:Ot,fragmentShader:Vt,defines:ge.defines,customVertexShaderID:un,customFragmentShaderID:Sn,isRawShaderMaterial:ge.isRawShaderMaterial===!0,glslVersion:ge.glslVersion,precision:v,batching:qn,instancing:kn,instancingColor:kn&&ht.instanceColor!==null,supportsVertexTextures:te,outputColorSpace:bn===null?e.outputColorSpace:bn.isXRRenderTarget===!0?bn.texture.colorSpace:Q7,map:pn,matcap:il,envMap:mt,envMapMode:mt&&St.mapping,envMapCubeUVHeight:bt,aoMap:Ns,lightMap:Mn,bumpMap:Qn,normalMap:Ln,displacementMap:te&&jl,emissiveMap:ll,normalMapObjectSpace:Ln&&ge.normalMapType===ak,normalMapTangentSpace:Ln&&ge.normalMapType===HV,metalnessMap:Ye,roughnessMap:_e,anisotropy:Dt,anisotropyMap:on,clearcoat:zt,clearcoatMap:In,clearcoatNormalMap:Pn,clearcoatRoughnessMap:Hn,iridescence:jt,iridescenceMap:Ht,iridescenceThicknessMap:Rl,sheen:Gt,sheenColorMap:$n,sheenRoughnessMap:Fn,specularMap:On,specularColorMap:wn,specularIntensityMap:Zn,transmission:Dn,transmissionMap:Ll,thicknessMap:hn,gradientMap:yn,opaque:ge.transparent===!1&&ge.blending===y9,alphaMap:Zt,alphaTest:ut,alphaHash:qt,combine:ge.combine,mapUv:pn&&Te(ge.map.channel),aoMapUv:Ns&&Te(ge.aoMap.channel),lightMapUv:Mn&&Te(ge.lightMap.channel),bumpMapUv:Qn&&Te(ge.bumpMap.channel),normalMapUv:Ln&&Te(ge.normalMap.channel),displacementMapUv:jl&&Te(ge.displacementMap.channel),emissiveMapUv:ll&&Te(ge.emissiveMap.channel),metalnessMapUv:Ye&&Te(ge.metalnessMap.channel),roughnessMapUv:_e&&Te(ge.roughnessMap.channel),anisotropyMapUv:on&&Te(ge.anisotropyMap.channel),clearcoatMapUv:In&&Te(ge.clearcoatMap.channel),clearcoatNormalMapUv:Pn&&Te(ge.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Hn&&Te(ge.clearcoatRoughnessMap.channel),iridescenceMapUv:Ht&&Te(ge.iridescenceMap.channel),iridescenceThicknessMapUv:Rl&&Te(ge.iridescenceThicknessMap.channel),sheenColorMapUv:$n&&Te(ge.sheenColorMap.channel),sheenRoughnessMapUv:Fn&&Te(ge.sheenRoughnessMap.channel),specularMapUv:On&&Te(ge.specularMap.channel),specularColorMapUv:wn&&Te(ge.specularColorMap.channel),specularIntensityMapUv:Zn&&Te(ge.specularIntensityMap.channel),transmissionMapUv:Ll&&Te(ge.transmissionMap.channel),thicknessMapUv:hn&&Te(ge.thicknessMap.channel),alphaMapUv:Zt&&Te(ge.alphaMap.channel),vertexTangents:!!at.attributes.tangent&&(Ln||Dt),vertexColors:ge.vertexColors,vertexAlphas:ge.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,vertexUv1s:en,vertexUv2s:Bn,vertexUv3s:En,pointsUvs:ht.isPoints===!0&&!!at.attributes.uv&&(pn||Zt),fog:!!Xe,useFog:ge.fog===!0,fogExp2:Xe&&Xe.isFogExp2,flatShading:ge.flatShading===!0,sizeAttenuation:ge.sizeAttenuation===!0,logarithmicDepthBuffer:ee,skinning:ht.isSkinnedMesh===!0,morphTargets:at.morphAttributes.position!==void 0,morphNormals:at.morphAttributes.normal!==void 0,morphColors:at.morphAttributes.color!==void 0,morphTargetsCount:kt,morphTextureStride:rn,numDirLights:Le.directional.length,numPointLights:Le.point.length,numSpotLights:Le.spot.length,numSpotLightMaps:Le.spotLightMap.length,numRectAreaLights:Le.rectArea.length,numHemiLights:Le.hemi.length,numDirLightShadows:Le.directionalShadowMap.length,numPointLightShadows:Le.pointShadowMap.length,numSpotLightShadows:Le.spotShadowMap.length,numSpotLightShadowsWithMaps:Le.numSpotLightShadowsWithMaps,numLightProbes:Le.numLightProbes,numClippingPlanes:O.numPlanes,numClipIntersection:O.numIntersection,dithering:ge.dithering,shadowMapEnabled:e.shadowMap.enabled&&ve.length>0,shadowMapType:e.shadowMap.type,toneMapping:Yl,useLegacyLights:e._useLegacyLights,decodeVideoTexture:pn&&ge.map.isVideoTexture===!0&&ks.getTransfer(ge.map.colorSpace)===dr,premultipliedAlpha:ge.premultipliedAlpha,doubleSided:ge.side===eR,flipSided:ge.side===D3,useDepthPacking:ge.depthPacking>=0,depthPacking:ge.depthPacking||0,index0AttributeName:ge.index0AttributeName,extensionDerivatives:vt&&ge.extensions.derivatives===!0,extensionFragDepth:vt&&ge.extensions.fragDepth===!0,extensionDrawBuffers:vt&&ge.extensions.drawBuffers===!0,extensionShaderTextureLOD:vt&&ge.extensions.shaderTextureLOD===!0,extensionClipCullDistance:vt&&ge.extensions.clipCullDistance&&t.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:Z||t.has("EXT_frag_depth"),rendererExtensionDrawBuffers:Z||t.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:Z||t.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:ge.customProgramCacheKey()}}function ie(ge){const Le=[];if(ge.shaderID?Le.push(ge.shaderID):(Le.push(ge.customVertexShaderID),Le.push(ge.customFragmentShaderID)),ge.defines!==void 0)for(const ve in ge.defines)Le.push(ve),Le.push(ge.defines[ve]);return ge.isRawShaderMaterial===!1&&(me(Le,ge),fe(Le,ge),Le.push(e.outputColorSpace)),Le.push(ge.customProgramCacheKey),Le.join()}function me(ge,Le){ge.push(Le.precision),ge.push(Le.outputColorSpace),ge.push(Le.envMapMode),ge.push(Le.envMapCubeUVHeight),ge.push(Le.mapUv),ge.push(Le.alphaMapUv),ge.push(Le.lightMapUv),ge.push(Le.aoMapUv),ge.push(Le.bumpMapUv),ge.push(Le.normalMapUv),ge.push(Le.displacementMapUv),ge.push(Le.emissiveMapUv),ge.push(Le.metalnessMapUv),ge.push(Le.roughnessMapUv),ge.push(Le.anisotropyMapUv),ge.push(Le.clearcoatMapUv),ge.push(Le.clearcoatNormalMapUv),ge.push(Le.clearcoatRoughnessMapUv),ge.push(Le.iridescenceMapUv),ge.push(Le.iridescenceThicknessMapUv),ge.push(Le.sheenColorMapUv),ge.push(Le.sheenRoughnessMapUv),ge.push(Le.specularMapUv),ge.push(Le.specularColorMapUv),ge.push(Le.specularIntensityMapUv),ge.push(Le.transmissionMapUv),ge.push(Le.thicknessMapUv),ge.push(Le.combine),ge.push(Le.fogExp2),ge.push(Le.sizeAttenuation),ge.push(Le.morphTargetsCount),ge.push(Le.morphAttributeCount),ge.push(Le.numDirLights),ge.push(Le.numPointLights),ge.push(Le.numSpotLights),ge.push(Le.numSpotLightMaps),ge.push(Le.numHemiLights),ge.push(Le.numRectAreaLights),ge.push(Le.numDirLightShadows),ge.push(Le.numPointLightShadows),ge.push(Le.numSpotLightShadows),ge.push(Le.numSpotLightShadowsWithMaps),ge.push(Le.numLightProbes),ge.push(Le.shadowMapType),ge.push(Le.toneMapping),ge.push(Le.numClippingPlanes),ge.push(Le.numClipIntersection),ge.push(Le.depthPacking)}function fe(ge,Le){M.disableAll(),Le.isWebGL2&&M.enable(0),Le.supportsVertexTextures&&M.enable(1),Le.instancing&&M.enable(2),Le.instancingColor&&M.enable(3),Le.matcap&&M.enable(4),Le.envMap&&M.enable(5),Le.normalMapObjectSpace&&M.enable(6),Le.normalMapTangentSpace&&M.enable(7),Le.clearcoat&&M.enable(8),Le.iridescence&&M.enable(9),Le.alphaTest&&M.enable(10),Le.vertexColors&&M.enable(11),Le.vertexAlphas&&M.enable(12),Le.vertexUv1s&&M.enable(13),Le.vertexUv2s&&M.enable(14),Le.vertexUv3s&&M.enable(15),Le.vertexTangents&&M.enable(16),Le.anisotropy&&M.enable(17),Le.alphaHash&&M.enable(18),Le.batching&&M.enable(19),ge.push(M.mask),M.disableAll(),Le.fog&&M.enable(0),Le.useFog&&M.enable(1),Le.flatShading&&M.enable(2),Le.logarithmicDepthBuffer&&M.enable(3),Le.skinning&&M.enable(4),Le.morphTargets&&M.enable(5),Le.morphNormals&&M.enable(6),Le.morphColors&&M.enable(7),Le.premultipliedAlpha&&M.enable(8),Le.shadowMapEnabled&&M.enable(9),Le.useLegacyLights&&M.enable(10),Le.doubleSided&&M.enable(11),Le.flipSided&&M.enable(12),Le.useDepthPacking&&M.enable(13),Le.dithering&&M.enable(14),Le.transmission&&M.enable(15),Le.sheen&&M.enable(16),Le.opaque&&M.enable(17),Le.pointsUvs&&M.enable(18),Le.decodeVideoTexture&&M.enable(19),ge.push(M.mask)}function Ne(ge){const Le=he[ge.type];let ve;if(Le){const nt=vT[Le];ve=Kk.clone(nt.uniforms)}else ve=ge.uniforms;return ve}function We(ge,Le){let ve;for(let nt=0,ht=Y.length;nt<ht;nt++){const Xe=Y[nt];if(Xe.cacheKey===Le){ve=Xe,++ve.usedTimes;break}}return ve===void 0&&(ve=new aZ(e,Le,ge,w),Y.push(ve)),ve}function xe(ge){if(--ge.usedTimes===0){const Le=Y.indexOf(ge);Y[Le]=Y[Y.length-1],Y.pop(),ge.destroy()}}function je(ge){G.remove(ge)}function et(){G.dispose()}return{getParameters:oe,getProgramCacheKey:ie,getUniforms:Ne,acquireProgram:We,releaseProgram:xe,releaseShaderCache:je,programs:Y,dispose:et}}function fZ(){let e=new WeakMap;function l(w){let O=e.get(w);return O===void 0&&(O={},e.set(w,O)),O}function n(w){e.delete(w)}function t(w,O,M){e.get(w)[O]=M}function c(){e=new WeakMap}return{get:l,remove:n,update:t,dispose:c}}function IZ(e,l){return e.groupOrder!==l.groupOrder?e.groupOrder-l.groupOrder:e.renderOrder!==l.renderOrder?e.renderOrder-l.renderOrder:e.material.id!==l.material.id?e.material.id-l.material.id:e.z!==l.z?e.z-l.z:e.id-l.id}function YW(e,l){return e.groupOrder!==l.groupOrder?e.groupOrder-l.groupOrder:e.renderOrder!==l.renderOrder?e.renderOrder-l.renderOrder:e.z!==l.z?l.z-e.z:e.id-l.id}function zW(){const e=[];let l=0;const n=[],t=[],c=[];function w(){l=0,n.length=0,t.length=0,c.length=0}function O(ee,te,v,he,Te,oe){let ie=e[l];return ie===void 0?(ie={id:ee.id,object:ee,geometry:te,material:v,groupOrder:he,renderOrder:ee.renderOrder,z:Te,group:oe},e[l]=ie):(ie.id=ee.id,ie.object=ee,ie.geometry=te,ie.material=v,ie.groupOrder=he,ie.renderOrder=ee.renderOrder,ie.z=Te,ie.group=oe),l++,ie}function M(ee,te,v,he,Te,oe){const ie=O(ee,te,v,he,Te,oe);v.transmission>0?t.push(ie):v.transparent===!0?c.push(ie):n.push(ie)}function G(ee,te,v,he,Te,oe){const ie=O(ee,te,v,he,Te,oe);v.transmission>0?t.unshift(ie):v.transparent===!0?c.unshift(ie):n.unshift(ie)}function Y(ee,te){n.length>1&&n.sort(ee||IZ),t.length>1&&t.sort(te||YW),c.length>1&&c.sort(te||YW)}function Z(){for(let ee=l,te=e.length;ee<te;ee++){const v=e[ee];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:t,transparent:c,init:w,push:M,unshift:G,finish:Z,sort:Y}}function dZ(){let e=new WeakMap;function l(t,c){const w=e.get(t);let O;return w===void 0?(O=new zW,e.set(t,[O])):c>=w.length?(O=new zW,w.push(O)):O=w[c],O}function n(){e=new WeakMap}return{get:l,dispose:n}}function yZ(){const e={};return{get:function(l){if(e[l.id]!==void 0)return e[l.id];let n;switch(l.type){case"DirectionalLight":n={direction:new lt,color:new ns};break;case"SpotLight":n={position:new lt,direction:new lt,color:new ns,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new lt,color:new ns,distance:0,decay:0};break;case"HemisphereLight":n={direction:new lt,skyColor:new ns,groundColor:new ns};break;case"RectAreaLight":n={color:new ns,position:new lt,halfWidth:new lt,halfHeight:new lt};break}return e[l.id]=n,n}}}function wZ(){const e={};return{get:function(l){if(e[l.id]!==void 0)return e[l.id];let n;switch(l.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dl};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dl};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dl,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[l.id]=n,n}}}let EZ=0;function TZ(e,l){return(l.castShadow?2:0)-(e.castShadow?2:0)+(l.map?1:0)-(e.map?1:0)}function RZ(e,l){const n=new yZ,t=wZ(),c={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let Z=0;Z<9;Z++)c.probe.push(new lt);const w=new lt,O=new Ps,M=new Ps;function G(Z,ee){let te=0,v=0,he=0;for(let nt=0;nt<9;nt++)c.probe[nt].set(0,0,0);let Te=0,oe=0,ie=0,me=0,fe=0,Ne=0,We=0,xe=0,je=0,et=0,ge=0;Z.sort(TZ);const Le=ee===!0?Math.PI:1;for(let nt=0,ht=Z.length;nt<ht;nt++){const Xe=Z[nt],at=Xe.color,It=Xe.intensity,St=Xe.distance,bt=Xe.shadow&&Xe.shadow.map?Xe.shadow.map.texture:null;if(Xe.isAmbientLight)te+=at.r*It*Le,v+=at.g*It*Le,he+=at.b*It*Le;else if(Xe.isLightProbe){for(let Ct=0;Ct<9;Ct++)c.probe[Ct].addScaledVector(Xe.sh.coefficients[Ct],It);ge++}else if(Xe.isDirectionalLight){const Ct=n.get(Xe);if(Ct.color.copy(Xe.color).multiplyScalar(Xe.intensity*Le),Xe.castShadow){const Ft=Xe.shadow,kt=t.get(Xe);kt.shadowBias=Ft.bias,kt.shadowNormalBias=Ft.normalBias,kt.shadowRadius=Ft.radius,kt.shadowMapSize=Ft.mapSize,c.directionalShadow[Te]=kt,c.directionalShadowMap[Te]=bt,c.directionalShadowMatrix[Te]=Xe.shadow.matrix,Ne++}c.directional[Te]=Ct,Te++}else if(Xe.isSpotLight){const Ct=n.get(Xe);Ct.position.setFromMatrixPosition(Xe.matrixWorld),Ct.color.copy(at).multiplyScalar(It*Le),Ct.distance=St,Ct.coneCos=Math.cos(Xe.angle),Ct.penumbraCos=Math.cos(Xe.angle*(1-Xe.penumbra)),Ct.decay=Xe.decay,c.spot[ie]=Ct;const Ft=Xe.shadow;if(Xe.map&&(c.spotLightMap[je]=Xe.map,je++,Ft.updateMatrices(Xe),Xe.castShadow&&et++),c.spotLightMatrix[ie]=Ft.matrix,Xe.castShadow){const kt=t.get(Xe);kt.shadowBias=Ft.bias,kt.shadowNormalBias=Ft.normalBias,kt.shadowRadius=Ft.radius,kt.shadowMapSize=Ft.mapSize,c.spotShadow[ie]=kt,c.spotShadowMap[ie]=bt,xe++}ie++}else if(Xe.isRectAreaLight){const Ct=n.get(Xe);Ct.color.copy(at).multiplyScalar(It),Ct.halfWidth.set(Xe.width*.5,0,0),Ct.halfHeight.set(0,Xe.height*.5,0),c.rectArea[me]=Ct,me++}else if(Xe.isPointLight){const Ct=n.get(Xe);if(Ct.color.copy(Xe.color).multiplyScalar(Xe.intensity*Le),Ct.distance=Xe.distance,Ct.decay=Xe.decay,Xe.castShadow){const Ft=Xe.shadow,kt=t.get(Xe);kt.shadowBias=Ft.bias,kt.shadowNormalBias=Ft.normalBias,kt.shadowRadius=Ft.radius,kt.shadowMapSize=Ft.mapSize,kt.shadowCameraNear=Ft.camera.near,kt.shadowCameraFar=Ft.camera.far,c.pointShadow[oe]=kt,c.pointShadowMap[oe]=bt,c.pointShadowMatrix[oe]=Xe.shadow.matrix,We++}c.point[oe]=Ct,oe++}else if(Xe.isHemisphereLight){const Ct=n.get(Xe);Ct.skyColor.copy(Xe.color).multiplyScalar(It*Le),Ct.groundColor.copy(Xe.groundColor).multiplyScalar(It*Le),c.hemi[fe]=Ct,fe++}}me>0&&(l.isWebGL2?e.has("OES_texture_float_linear")===!0?(c.rectAreaLTC1=fn.LTC_FLOAT_1,c.rectAreaLTC2=fn.LTC_FLOAT_2):(c.rectAreaLTC1=fn.LTC_HALF_1,c.rectAreaLTC2=fn.LTC_HALF_2):e.has("OES_texture_float_linear")===!0?(c.rectAreaLTC1=fn.LTC_FLOAT_1,c.rectAreaLTC2=fn.LTC_FLOAT_2):e.has("OES_texture_half_float_linear")===!0?(c.rectAreaLTC1=fn.LTC_HALF_1,c.rectAreaLTC2=fn.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),c.ambient[0]=te,c.ambient[1]=v,c.ambient[2]=he;const ve=c.hash;(ve.directionalLength!==Te||ve.pointLength!==oe||ve.spotLength!==ie||ve.rectAreaLength!==me||ve.hemiLength!==fe||ve.numDirectionalShadows!==Ne||ve.numPointShadows!==We||ve.numSpotShadows!==xe||ve.numSpotMaps!==je||ve.numLightProbes!==ge)&&(c.directional.length=Te,c.spot.length=ie,c.rectArea.length=me,c.point.length=oe,c.hemi.length=fe,c.directionalShadow.length=Ne,c.directionalShadowMap.length=Ne,c.pointShadow.length=We,c.pointShadowMap.length=We,c.spotShadow.length=xe,c.spotShadowMap.length=xe,c.directionalShadowMatrix.length=Ne,c.pointShadowMatrix.length=We,c.spotLightMatrix.length=xe+je-et,c.spotLightMap.length=je,c.numSpotLightShadowsWithMaps=et,c.numLightProbes=ge,ve.directionalLength=Te,ve.pointLength=oe,ve.spotLength=ie,ve.rectAreaLength=me,ve.hemiLength=fe,ve.numDirectionalShadows=Ne,ve.numPointShadows=We,ve.numSpotShadows=xe,ve.numSpotMaps=je,ve.numLightProbes=ge,c.version=EZ++)}function Y(Z,ee){let te=0,v=0,he=0,Te=0,oe=0;const ie=ee.matrixWorldInverse;for(let me=0,fe=Z.length;me<fe;me++){const Ne=Z[me];if(Ne.isDirectionalLight){const We=c.directional[te];We.direction.setFromMatrixPosition(Ne.matrixWorld),w.setFromMatrixPosition(Ne.target.matrixWorld),We.direction.sub(w),We.direction.transformDirection(ie),te++}else if(Ne.isSpotLight){const We=c.spot[he];We.position.setFromMatrixPosition(Ne.matrixWorld),We.position.applyMatrix4(ie),We.direction.setFromMatrixPosition(Ne.matrixWorld),w.setFromMatrixPosition(Ne.target.matrixWorld),We.direction.sub(w),We.direction.transformDirection(ie),he++}else if(Ne.isRectAreaLight){const We=c.rectArea[Te];We.position.setFromMatrixPosition(Ne.matrixWorld),We.position.applyMatrix4(ie),M.identity(),O.copy(Ne.matrixWorld),O.premultiply(ie),M.extractRotation(O),We.halfWidth.set(Ne.width*.5,0,0),We.halfHeight.set(0,Ne.height*.5,0),We.halfWidth.applyMatrix4(M),We.halfHeight.applyMatrix4(M),Te++}else if(Ne.isPointLight){const We=c.point[v];We.position.setFromMatrixPosition(Ne.matrixWorld),We.position.applyMatrix4(ie),v++}else if(Ne.isHemisphereLight){const We=c.hemi[oe];We.direction.setFromMatrixPosition(Ne.matrixWorld),We.direction.transformDirection(ie),oe++}}}return{setup:G,setupView:Y,state:c}}function kW(e,l){const n=new RZ(e,l),t=[],c=[];function w(){t.length=0,c.length=0}function O(ee){t.push(ee)}function M(ee){c.push(ee)}function G(ee){n.setup(t,ee)}function Y(ee){n.setupView(t,ee)}return{init:w,state:{lightsArray:t,shadowsArray:c,lights:n},setupLights:G,setupLightsView:Y,pushLight:O,pushShadow:M}}function pZ(e,l){let n=new WeakMap;function t(w,O=0){const M=n.get(w);let G;return M===void 0?(G=new kW(e,l),n.set(w,[G])):O>=M.length?(G=new kW(e,l),M.push(G)):G=M[O],G}function c(){n=new WeakMap}return{get:t,dispose:c}}class mZ extends fO{constructor(l){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rk,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(l)}copy(l){return super.copy(l),this.depthPacking=l.depthPacking,this.map=l.map,this.alphaMap=l.alphaMap,this.displacementMap=l.displacementMap,this.displacementScale=l.displacementScale,this.displacementBias=l.displacementBias,this.wireframe=l.wireframe,this.wireframeLinewidth=l.wireframeLinewidth,this}}class DZ extends fO{constructor(l){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(l)}copy(l){return super.copy(l),this.map=l.map,this.alphaMap=l.alphaMap,this.displacementMap=l.displacementMap,this.displacementScale=l.displacementScale,this.displacementBias=l.displacementBias,this}}const NZ=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AZ=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function SZ(e,l,n){let t=new GV;const c=new Dl,w=new Dl,O=new Hc,M=new mZ({depthPacking:uk}),G=new DZ,Y={},Z=n.maxTextureSize,ee={[ip]:D3,[D3]:ip,[eR]:eR},te=new rL({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dl},radius:{value:4}},vertexShader:NZ,fragmentShader:AZ}),v=te.clone();v.defines.HORIZONTAL_PASS=1;const he=new Jf;he.setAttribute("position",new p0(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const Te=new d2(he,te),oe=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bj;let ie=this.type;this.render=function(xe,je,et){if(oe.enabled===!1||oe.autoUpdate===!1&&oe.needsUpdate===!1||xe.length===0)return;const ge=e.getRenderTarget(),Le=e.getActiveCubeFace(),ve=e.getActiveMipmapLevel(),nt=e.state;nt.setBlending(bN),nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);const ht=ie!==F6&&this.type===F6,Xe=ie===F6&&this.type!==F6;for(let at=0,It=xe.length;at<It;at++){const St=xe[at],bt=St.shadow;if(bt===void 0){console.warn("THREE.WebGLShadowMap:",St,"has no shadow.");continue}if(bt.autoUpdate===!1&&bt.needsUpdate===!1)continue;c.copy(bt.mapSize);const Ct=bt.getFrameExtents();if(c.multiply(Ct),w.copy(bt.mapSize),(c.x>Z||c.y>Z)&&(c.x>Z&&(w.x=Math.floor(Z/Ct.x),c.x=w.x*Ct.x,bt.mapSize.x=w.x),c.y>Z&&(w.y=Math.floor(Z/Ct.y),c.y=w.y*Ct.y,bt.mapSize.y=w.y)),bt.map===null||ht===!0||Xe===!0){const kt=this.type!==F6?{minFilter:zf,magFilter:zf}:{};bt.map!==null&&bt.map.dispose(),bt.map=new UN(c.x,c.y,kt),bt.map.texture.name=St.name+".shadowMap",bt.camera.updateProjectionMatrix()}e.setRenderTarget(bt.map),e.clear();const Ft=bt.getViewportCount();for(let kt=0;kt<Ft;kt++){const rn=bt.getViewport(kt);O.set(w.x*rn.x,w.y*rn.y,w.x*rn.z,w.y*rn.w),nt.viewport(O),bt.updateMatrices(St,kt),t=bt.getFrustum(),Ne(je,et,bt.camera,St,this.type)}bt.isPointLightShadow!==!0&&this.type===F6&&me(bt,et),bt.needsUpdate=!1}ie=this.type,oe.needsUpdate=!1,e.setRenderTarget(ge,Le,ve)};function me(xe,je){const et=l.update(Te);te.defines.VSM_SAMPLES!==xe.blurSamples&&(te.defines.VSM_SAMPLES=xe.blurSamples,v.defines.VSM_SAMPLES=xe.blurSamples,te.needsUpdate=!0,v.needsUpdate=!0),xe.mapPass===null&&(xe.mapPass=new UN(c.x,c.y)),te.uniforms.shadow_pass.value=xe.map.texture,te.uniforms.resolution.value=xe.mapSize,te.uniforms.radius.value=xe.radius,e.setRenderTarget(xe.mapPass),e.clear(),e.renderBufferDirect(je,null,et,te,Te,null),v.uniforms.shadow_pass.value=xe.mapPass.texture,v.uniforms.resolution.value=xe.mapSize,v.uniforms.radius.value=xe.radius,e.setRenderTarget(xe.map),e.clear(),e.renderBufferDirect(je,null,et,v,Te,null)}function fe(xe,je,et,ge){let Le=null;const ve=et.isPointLight===!0?xe.customDistanceMaterial:xe.customDepthMaterial;if(ve!==void 0)Le=ve;else if(Le=et.isPointLight===!0?G:M,e.localClippingEnabled&&je.clipShadows===!0&&Array.isArray(je.clippingPlanes)&&je.clippingPlanes.length!==0||je.displacementMap&&je.displacementScale!==0||je.alphaMap&&je.alphaTest>0||je.map&&je.alphaTest>0){const nt=Le.uuid,ht=je.uuid;let Xe=Y[nt];Xe===void 0&&(Xe={},Y[nt]=Xe);let at=Xe[ht];at===void 0&&(at=Le.clone(),Xe[ht]=at,je.addEventListener("dispose",We)),Le=at}if(Le.visible=je.visible,Le.wireframe=je.wireframe,ge===F6?Le.side=je.shadowSide!==null?je.shadowSide:je.side:Le.side=je.shadowSide!==null?je.shadowSide:ee[je.side],Le.alphaMap=je.alphaMap,Le.alphaTest=je.alphaTest,Le.map=je.map,Le.clipShadows=je.clipShadows,Le.clippingPlanes=je.clippingPlanes,Le.clipIntersection=je.clipIntersection,Le.displacementMap=je.displacementMap,Le.displacementScale=je.displacementScale,Le.displacementBias=je.displacementBias,Le.wireframeLinewidth=je.wireframeLinewidth,Le.linewidth=je.linewidth,et.isPointLight===!0&&Le.isMeshDistanceMaterial===!0){const nt=e.properties.get(Le);nt.light=et}return Le}function Ne(xe,je,et,ge,Le){if(xe.visible===!1)return;if(xe.layers.test(je.layers)&&(xe.isMesh||xe.isLine||xe.isPoints)&&(xe.castShadow||xe.receiveShadow&&Le===F6)&&(!xe.frustumCulled||t.intersectsObject(xe))){xe.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,xe.matrixWorld);const ht=l.update(xe),Xe=xe.material;if(Array.isArray(Xe)){const at=ht.groups;for(let It=0,St=at.length;It<St;It++){const bt=at[It],Ct=Xe[bt.materialIndex];if(Ct&&Ct.visible){const Ft=fe(xe,Ct,ge,Le);xe.onBeforeShadow(e,xe,je,et,ht,Ft,bt),e.renderBufferDirect(et,null,ht,Ft,xe,bt),xe.onAfterShadow(e,xe,je,et,ht,Ft,bt)}}}else if(Xe.visible){const at=fe(xe,Xe,ge,Le);xe.onBeforeShadow(e,xe,je,et,ht,at,null),e.renderBufferDirect(et,null,ht,at,xe,null),xe.onAfterShadow(e,xe,je,et,ht,at,null)}}const nt=xe.children;for(let ht=0,Xe=nt.length;ht<Xe;ht++)Ne(nt[ht],je,et,ge,Le)}function We(xe){xe.target.removeEventListener("dispose",We);for(const et in Y){const ge=Y[et],Le=xe.target.uuid;Le in ge&&(ge[Le].dispose(),delete ge[Le])}}}function LZ(e,l,n){const t=n.isWebGL2;function c(){let ut=!1;const qt=new Hc;let vt=null;const en=new Hc(0,0,0,0);return{setMask:function(Bn){vt!==Bn&&!ut&&(e.colorMask(Bn,Bn,Bn,Bn),vt=Bn)},setLocked:function(Bn){ut=Bn},setClear:function(Bn,En,Yl,bs,ls){ls===!0&&(Bn*=bs,En*=bs,Yl*=bs),qt.set(Bn,En,Yl,bs),en.equals(qt)===!1&&(e.clearColor(Bn,En,Yl,bs),en.copy(qt))},reset:function(){ut=!1,vt=null,en.set(-1,0,0,0)}}}function w(){let ut=!1,qt=null,vt=null,en=null;return{setTest:function(Bn){Bn?qn(e.DEPTH_TEST):pn(e.DEPTH_TEST)},setMask:function(Bn){qt!==Bn&&!ut&&(e.depthMask(Bn),qt=Bn)},setFunc:function(Bn){if(vt!==Bn){switch(Bn){case Bz:e.depthFunc(e.NEVER);break;case Uz:e.depthFunc(e.ALWAYS);break;case Fz:e.depthFunc(e.LESS);break;case qU:e.depthFunc(e.LEQUAL);break;case Gz:e.depthFunc(e.EQUAL);break;case Vz:e.depthFunc(e.GEQUAL);break;case _z:e.depthFunc(e.GREATER);break;case Wz:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}vt=Bn}},setLocked:function(Bn){ut=Bn},setClear:function(Bn){en!==Bn&&(e.clearDepth(Bn),en=Bn)},reset:function(){ut=!1,qt=null,vt=null,en=null}}}function O(){let ut=!1,qt=null,vt=null,en=null,Bn=null,En=null,Yl=null,bs=null,ls=null;return{setTest:function(Ol){ut||(Ol?qn(e.STENCIL_TEST):pn(e.STENCIL_TEST))},setMask:function(Ol){qt!==Ol&&!ut&&(e.stencilMask(Ol),qt=Ol)},setFunc:function(Ol,ds,Au){(vt!==Ol||en!==ds||Bn!==Au)&&(e.stencilFunc(Ol,ds,Au),vt=Ol,en=ds,Bn=Au)},setOp:function(Ol,ds,Au){(En!==Ol||Yl!==ds||bs!==Au)&&(e.stencilOp(Ol,ds,Au),En=Ol,Yl=ds,bs=Au)},setLocked:function(Ol){ut=Ol},setClear:function(Ol){ls!==Ol&&(e.clearStencil(Ol),ls=Ol)},reset:function(){ut=!1,qt=null,vt=null,en=null,Bn=null,En=null,Yl=null,bs=null,ls=null}}}const M=new c,G=new w,Y=new O,Z=new WeakMap,ee=new WeakMap;let te={},v={},he=new WeakMap,Te=[],oe=null,ie=!1,me=null,fe=null,Ne=null,We=null,xe=null,je=null,et=null,ge=new ns(0,0,0),Le=0,ve=!1,nt=null,ht=null,Xe=null,at=null,It=null;const St=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let bt=!1,Ct=0;const Ft=e.getParameter(e.VERSION);Ft.indexOf("WebGL")!==-1?(Ct=parseFloat(/^WebGL (\d)/.exec(Ft)[1]),bt=Ct>=1):Ft.indexOf("OpenGL ES")!==-1&&(Ct=parseFloat(/^OpenGL ES (\d)/.exec(Ft)[1]),bt=Ct>=2);let kt=null,rn={};const Ot=e.getParameter(e.SCISSOR_BOX),Vt=e.getParameter(e.VIEWPORT),un=new Hc().fromArray(Ot),Sn=new Hc().fromArray(Vt);function bn(ut,qt,vt,en){const Bn=new Uint8Array(4),En=e.createTexture();e.bindTexture(ut,En),e.texParameteri(ut,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(ut,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Yl=0;Yl<vt;Yl++)t&&(ut===e.TEXTURE_3D||ut===e.TEXTURE_2D_ARRAY)?e.texImage3D(qt,0,e.RGBA,1,1,en,0,e.RGBA,e.UNSIGNED_BYTE,Bn):e.texImage2D(qt+Yl,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Bn);return En}const kn={};kn[e.TEXTURE_2D]=bn(e.TEXTURE_2D,e.TEXTURE_2D,1),kn[e.TEXTURE_CUBE_MAP]=bn(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),t&&(kn[e.TEXTURE_2D_ARRAY]=bn(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),kn[e.TEXTURE_3D]=bn(e.TEXTURE_3D,e.TEXTURE_3D,1,1)),M.setClear(0,0,0,1),G.setClear(1),Y.setClear(0),qn(e.DEPTH_TEST),G.setFunc(qU),ll(!1),Ye(O_),qn(e.CULL_FACE),Ln(bN);function qn(ut){te[ut]!==!0&&(e.enable(ut),te[ut]=!0)}function pn(ut){te[ut]!==!1&&(e.disable(ut),te[ut]=!1)}function il(ut,qt){return v[ut]!==qt?(e.bindFramebuffer(ut,qt),v[ut]=qt,t&&(ut===e.DRAW_FRAMEBUFFER&&(v[e.FRAMEBUFFER]=qt),ut===e.FRAMEBUFFER&&(v[e.DRAW_FRAMEBUFFER]=qt)),!0):!1}function mt(ut,qt){let vt=Te,en=!1;if(ut)if(vt=he.get(qt),vt===void 0&&(vt=[],he.set(qt,vt)),ut.isWebGLMultipleRenderTargets){const Bn=ut.texture;if(vt.length!==Bn.length||vt[0]!==e.COLOR_ATTACHMENT0){for(let En=0,Yl=Bn.length;En<Yl;En++)vt[En]=e.COLOR_ATTACHMENT0+En;vt.length=Bn.length,en=!0}}else vt[0]!==e.COLOR_ATTACHMENT0&&(vt[0]=e.COLOR_ATTACHMENT0,en=!0);else vt[0]!==e.BACK&&(vt[0]=e.BACK,en=!0);en&&(n.isWebGL2?e.drawBuffers(vt):l.get("WEBGL_draw_buffers").drawBuffersWEBGL(vt))}function Ns(ut){return oe!==ut?(e.useProgram(ut),oe=ut,!0):!1}const Mn={[V8]:e.FUNC_ADD,[pz]:e.FUNC_SUBTRACT,[mz]:e.FUNC_REVERSE_SUBTRACT};if(t)Mn[b_]=e.MIN,Mn[M_]=e.MAX;else{const ut=l.get("EXT_blend_minmax");ut!==null&&(Mn[b_]=ut.MIN_EXT,Mn[M_]=ut.MAX_EXT)}const Qn={[Dz]:e.ZERO,[Nz]:e.ONE,[Az]:e.SRC_COLOR,[qG]:e.SRC_ALPHA,[Cz]:e.SRC_ALPHA_SATURATE,[gz]:e.DST_COLOR,[Lz]:e.DST_ALPHA,[Sz]:e.ONE_MINUS_SRC_COLOR,[KG]:e.ONE_MINUS_SRC_ALPHA,[Pz]:e.ONE_MINUS_DST_COLOR,[Oz]:e.ONE_MINUS_DST_ALPHA,[bz]:e.CONSTANT_COLOR,[Mz]:e.ONE_MINUS_CONSTANT_COLOR,[xz]:e.CONSTANT_ALPHA,[Hz]:e.ONE_MINUS_CONSTANT_ALPHA};function Ln(ut,qt,vt,en,Bn,En,Yl,bs,ls,Ol){if(ut===bN){ie===!0&&(pn(e.BLEND),ie=!1);return}if(ie===!1&&(qn(e.BLEND),ie=!0),ut!==Rz){if(ut!==me||Ol!==ve){if((fe!==V8||xe!==V8)&&(e.blendEquation(e.FUNC_ADD),fe=V8,xe=V8),Ol)switch(ut){case y9:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case g_:e.blendFunc(e.ONE,e.ONE);break;case P_:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case C_:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",ut);break}else switch(ut){case y9:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case g_:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case P_:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case C_:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",ut);break}Ne=null,We=null,je=null,et=null,ge.set(0,0,0),Le=0,me=ut,ve=Ol}return}Bn=Bn||qt,En=En||vt,Yl=Yl||en,(qt!==fe||Bn!==xe)&&(e.blendEquationSeparate(Mn[qt],Mn[Bn]),fe=qt,xe=Bn),(vt!==Ne||en!==We||En!==je||Yl!==et)&&(e.blendFuncSeparate(Qn[vt],Qn[en],Qn[En],Qn[Yl]),Ne=vt,We=en,je=En,et=Yl),(bs.equals(ge)===!1||ls!==Le)&&(e.blendColor(bs.r,bs.g,bs.b,ls),ge.copy(bs),Le=ls),me=ut,ve=!1}function jl(ut,qt){ut.side===eR?pn(e.CULL_FACE):qn(e.CULL_FACE);let vt=ut.side===D3;qt&&(vt=!vt),ll(vt),ut.blending===y9&&ut.transparent===!1?Ln(bN):Ln(ut.blending,ut.blendEquation,ut.blendSrc,ut.blendDst,ut.blendEquationAlpha,ut.blendSrcAlpha,ut.blendDstAlpha,ut.blendColor,ut.blendAlpha,ut.premultipliedAlpha),G.setFunc(ut.depthFunc),G.setTest(ut.depthTest),G.setMask(ut.depthWrite),M.setMask(ut.colorWrite);const en=ut.stencilWrite;Y.setTest(en),en&&(Y.setMask(ut.stencilWriteMask),Y.setFunc(ut.stencilFunc,ut.stencilRef,ut.stencilFuncMask),Y.setOp(ut.stencilFail,ut.stencilZFail,ut.stencilZPass)),Dt(ut.polygonOffset,ut.polygonOffsetFactor,ut.polygonOffsetUnits),ut.alphaToCoverage===!0?qn(e.SAMPLE_ALPHA_TO_COVERAGE):pn(e.SAMPLE_ALPHA_TO_COVERAGE)}function ll(ut){nt!==ut&&(ut?e.frontFace(e.CW):e.frontFace(e.CCW),nt=ut)}function Ye(ut){ut!==wz?(qn(e.CULL_FACE),ut!==ht&&(ut===O_?e.cullFace(e.BACK):ut===Ez?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):pn(e.CULL_FACE),ht=ut}function _e(ut){ut!==Xe&&(bt&&e.lineWidth(ut),Xe=ut)}function Dt(ut,qt,vt){ut?(qn(e.POLYGON_OFFSET_FILL),(at!==qt||It!==vt)&&(e.polygonOffset(qt,vt),at=qt,It=vt)):pn(e.POLYGON_OFFSET_FILL)}function zt(ut){ut?qn(e.SCISSOR_TEST):pn(e.SCISSOR_TEST)}function jt(ut){ut===void 0&&(ut=e.TEXTURE0+St-1),kt!==ut&&(e.activeTexture(ut),kt=ut)}function Gt(ut,qt,vt){vt===void 0&&(kt===null?vt=e.TEXTURE0+St-1:vt=kt);let en=rn[vt];en===void 0&&(en={type:void 0,texture:void 0},rn[vt]=en),(en.type!==ut||en.texture!==qt)&&(kt!==vt&&(e.activeTexture(vt),kt=vt),e.bindTexture(ut,qt||kn[ut]),en.type=ut,en.texture=qt)}function Dn(){const ut=rn[kt];ut!==void 0&&ut.type!==void 0&&(e.bindTexture(ut.type,null),ut.type=void 0,ut.texture=void 0)}function on(){try{e.compressedTexImage2D.apply(e,arguments)}catch(ut){console.error("THREE.WebGLState:",ut)}}function In(){try{e.compressedTexImage3D.apply(e,arguments)}catch(ut){console.error("THREE.WebGLState:",ut)}}function Pn(){try{e.texSubImage2D.apply(e,arguments)}catch(ut){console.error("THREE.WebGLState:",ut)}}function Hn(){try{e.texSubImage3D.apply(e,arguments)}catch(ut){console.error("THREE.WebGLState:",ut)}}function Ht(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(ut){console.error("THREE.WebGLState:",ut)}}function Rl(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(ut){console.error("THREE.WebGLState:",ut)}}function $n(){try{e.texStorage2D.apply(e,arguments)}catch(ut){console.error("THREE.WebGLState:",ut)}}function Fn(){try{e.texStorage3D.apply(e,arguments)}catch(ut){console.error("THREE.WebGLState:",ut)}}function On(){try{e.texImage2D.apply(e,arguments)}catch(ut){console.error("THREE.WebGLState:",ut)}}function wn(){try{e.texImage3D.apply(e,arguments)}catch(ut){console.error("THREE.WebGLState:",ut)}}function Zn(ut){un.equals(ut)===!1&&(e.scissor(ut.x,ut.y,ut.z,ut.w),un.copy(ut))}function Ll(ut){Sn.equals(ut)===!1&&(e.viewport(ut.x,ut.y,ut.z,ut.w),Sn.copy(ut))}function hn(ut,qt){let vt=ee.get(qt);vt===void 0&&(vt=new WeakMap,ee.set(qt,vt));let en=vt.get(ut);en===void 0&&(en=e.getUniformBlockIndex(qt,ut.name),vt.set(ut,en))}function yn(ut,qt){const en=ee.get(qt).get(ut);Z.get(qt)!==en&&(e.uniformBlockBinding(qt,en,ut.__bindingPointIndex),Z.set(qt,en))}function Zt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),t===!0&&(e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null)),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),te={},kt=null,rn={},v={},he=new WeakMap,Te=[],oe=null,ie=!1,me=null,fe=null,Ne=null,We=null,xe=null,je=null,et=null,ge=new ns(0,0,0),Le=0,ve=!1,nt=null,ht=null,Xe=null,at=null,It=null,un.set(0,0,e.canvas.width,e.canvas.height),Sn.set(0,0,e.canvas.width,e.canvas.height),M.reset(),G.reset(),Y.reset()}return{buffers:{color:M,depth:G,stencil:Y},enable:qn,disable:pn,bindFramebuffer:il,drawBuffers:mt,useProgram:Ns,setBlending:Ln,setMaterial:jl,setFlipSided:ll,setCullFace:Ye,setLineWidth:_e,setPolygonOffset:Dt,setScissorTest:zt,activeTexture:jt,bindTexture:Gt,unbindTexture:Dn,compressedTexImage2D:on,compressedTexImage3D:In,texImage2D:On,texImage3D:wn,updateUBOMapping:hn,uniformBlockBinding:yn,texStorage2D:$n,texStorage3D:Fn,texSubImage2D:Pn,texSubImage3D:Hn,compressedTexSubImage2D:Ht,compressedTexSubImage3D:Rl,scissor:Zn,viewport:Ll,reset:Zt}}function OZ(e,l,n,t,c,w,O){const M=c.isWebGL2,G=l.has("WEBGL_multisampled_render_to_texture")?l.get("WEBGL_multisampled_render_to_texture"):null,Y=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),Z=new WeakMap;let ee;const te=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function he(Ye,_e){return v?new OffscreenCanvas(Ye,_e):XU("canvas")}function Te(Ye,_e,Dt,zt){let jt=1;if((Ye.width>zt||Ye.height>zt)&&(jt=zt/Math.max(Ye.width,Ye.height)),jt<1||_e===!0)if(typeof HTMLImageElement<"u"&&Ye instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&Ye instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&Ye instanceof ImageBitmap){const Gt=_e?JU:Math.floor,Dn=Gt(jt*Ye.width),on=Gt(jt*Ye.height);ee===void 0&&(ee=he(Dn,on));const In=Dt?he(Dn,on):ee;return In.width=Dn,In.height=on,In.getContext("2d").drawImage(Ye,0,0,Dn,on),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ye.width+"x"+Ye.height+") to ("+Dn+"x"+on+")."),In}else return"data"in Ye&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ye.width+"x"+Ye.height+")."),Ye;return Ye}function oe(Ye){return eV(Ye.width)&&eV(Ye.height)}function ie(Ye){return M?!1:Ye.wrapS!==lE||Ye.wrapT!==lE||Ye.minFilter!==zf&&Ye.minFilter!==f2}function me(Ye,_e){return Ye.generateMipmaps&&_e&&Ye.minFilter!==zf&&Ye.minFilter!==f2}function fe(Ye){e.generateMipmap(Ye)}function Ne(Ye,_e,Dt,zt,jt=!1){if(M===!1)return _e;if(Ye!==null){if(e[Ye]!==void 0)return e[Ye];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+Ye+"'")}let Gt=_e;if(_e===e.RED&&(Dt===e.FLOAT&&(Gt=e.R32F),Dt===e.HALF_FLOAT&&(Gt=e.R16F),Dt===e.UNSIGNED_BYTE&&(Gt=e.R8)),_e===e.RED_INTEGER&&(Dt===e.UNSIGNED_BYTE&&(Gt=e.R8UI),Dt===e.UNSIGNED_SHORT&&(Gt=e.R16UI),Dt===e.UNSIGNED_INT&&(Gt=e.R32UI),Dt===e.BYTE&&(Gt=e.R8I),Dt===e.SHORT&&(Gt=e.R16I),Dt===e.INT&&(Gt=e.R32I)),_e===e.RG&&(Dt===e.FLOAT&&(Gt=e.RG32F),Dt===e.HALF_FLOAT&&(Gt=e.RG16F),Dt===e.UNSIGNED_BYTE&&(Gt=e.RG8)),_e===e.RGBA){const Dn=jt?KU:ks.getTransfer(zt);Dt===e.FLOAT&&(Gt=e.RGBA32F),Dt===e.HALF_FLOAT&&(Gt=e.RGBA16F),Dt===e.UNSIGNED_BYTE&&(Gt=Dn===dr?e.SRGB8_ALPHA8:e.RGBA8),Dt===e.UNSIGNED_SHORT_4_4_4_4&&(Gt=e.RGBA4),Dt===e.UNSIGNED_SHORT_5_5_5_1&&(Gt=e.RGB5_A1)}return(Gt===e.R16F||Gt===e.R32F||Gt===e.RG16F||Gt===e.RG32F||Gt===e.RGBA16F||Gt===e.RGBA32F)&&l.get("EXT_color_buffer_float"),Gt}function We(Ye,_e,Dt){return me(Ye,Dt)===!0||Ye.isFramebufferTexture&&Ye.minFilter!==zf&&Ye.minFilter!==f2?Math.log2(Math.max(_e.width,_e.height))+1:Ye.mipmaps!==void 0&&Ye.mipmaps.length>0?Ye.mipmaps.length:Ye.isCompressedTexture&&Array.isArray(Ye.image)?_e.mipmaps.length:1}function xe(Ye){return Ye===zf||Ye===x_||Ye===eG?e.NEAREST:e.LINEAR}function je(Ye){const _e=Ye.target;_e.removeEventListener("dispose",je),ge(_e),_e.isVideoTexture&&Z.delete(_e)}function et(Ye){const _e=Ye.target;_e.removeEventListener("dispose",et),ve(_e)}function ge(Ye){const _e=t.get(Ye);if(_e.__webglInit===void 0)return;const Dt=Ye.source,zt=te.get(Dt);if(zt){const jt=zt[_e.__cacheKey];jt.usedTimes--,jt.usedTimes===0&&Le(Ye),Object.keys(zt).length===0&&te.delete(Dt)}t.remove(Ye)}function Le(Ye){const _e=t.get(Ye);e.deleteTexture(_e.__webglTexture);const Dt=Ye.source,zt=te.get(Dt);delete zt[_e.__cacheKey],O.memory.textures--}function ve(Ye){const _e=Ye.texture,Dt=t.get(Ye),zt=t.get(_e);if(zt.__webglTexture!==void 0&&(e.deleteTexture(zt.__webglTexture),O.memory.textures--),Ye.depthTexture&&Ye.depthTexture.dispose(),Ye.isWebGLCubeRenderTarget)for(let jt=0;jt<6;jt++){if(Array.isArray(Dt.__webglFramebuffer[jt]))for(let Gt=0;Gt<Dt.__webglFramebuffer[jt].length;Gt++)e.deleteFramebuffer(Dt.__webglFramebuffer[jt][Gt]);else e.deleteFramebuffer(Dt.__webglFramebuffer[jt]);Dt.__webglDepthbuffer&&e.deleteRenderbuffer(Dt.__webglDepthbuffer[jt])}else{if(Array.isArray(Dt.__webglFramebuffer))for(let jt=0;jt<Dt.__webglFramebuffer.length;jt++)e.deleteFramebuffer(Dt.__webglFramebuffer[jt]);else e.deleteFramebuffer(Dt.__webglFramebuffer);if(Dt.__webglDepthbuffer&&e.deleteRenderbuffer(Dt.__webglDepthbuffer),Dt.__webglMultisampledFramebuffer&&e.deleteFramebuffer(Dt.__webglMultisampledFramebuffer),Dt.__webglColorRenderbuffer)for(let jt=0;jt<Dt.__webglColorRenderbuffer.length;jt++)Dt.__webglColorRenderbuffer[jt]&&e.deleteRenderbuffer(Dt.__webglColorRenderbuffer[jt]);Dt.__webglDepthRenderbuffer&&e.deleteRenderbuffer(Dt.__webglDepthRenderbuffer)}if(Ye.isWebGLMultipleRenderTargets)for(let jt=0,Gt=_e.length;jt<Gt;jt++){const Dn=t.get(_e[jt]);Dn.__webglTexture&&(e.deleteTexture(Dn.__webglTexture),O.memory.textures--),t.remove(_e[jt])}t.remove(_e),t.remove(Ye)}let nt=0;function ht(){nt=0}function Xe(){const Ye=nt;return Ye>=c.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+Ye+" texture units while this GPU supports only "+c.maxTextures),nt+=1,Ye}function at(Ye){const _e=[];return _e.push(Ye.wrapS),_e.push(Ye.wrapT),_e.push(Ye.wrapR||0),_e.push(Ye.magFilter),_e.push(Ye.minFilter),_e.push(Ye.anisotropy),_e.push(Ye.internalFormat),_e.push(Ye.format),_e.push(Ye.type),_e.push(Ye.generateMipmaps),_e.push(Ye.premultiplyAlpha),_e.push(Ye.flipY),_e.push(Ye.unpackAlignment),_e.push(Ye.colorSpace),_e.join()}function It(Ye,_e){const Dt=t.get(Ye);if(Ye.isVideoTexture&&jl(Ye),Ye.isRenderTargetTexture===!1&&Ye.version>0&&Dt.__version!==Ye.version){const zt=Ye.image;if(zt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(zt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{un(Dt,Ye,_e);return}}n.bindTexture(e.TEXTURE_2D,Dt.__webglTexture,e.TEXTURE0+_e)}function St(Ye,_e){const Dt=t.get(Ye);if(Ye.version>0&&Dt.__version!==Ye.version){un(Dt,Ye,_e);return}n.bindTexture(e.TEXTURE_2D_ARRAY,Dt.__webglTexture,e.TEXTURE0+_e)}function bt(Ye,_e){const Dt=t.get(Ye);if(Ye.version>0&&Dt.__version!==Ye.version){un(Dt,Ye,_e);return}n.bindTexture(e.TEXTURE_3D,Dt.__webglTexture,e.TEXTURE0+_e)}function Ct(Ye,_e){const Dt=t.get(Ye);if(Ye.version>0&&Dt.__version!==Ye.version){Sn(Dt,Ye,_e);return}n.bindTexture(e.TEXTURE_CUBE_MAP,Dt.__webglTexture,e.TEXTURE0+_e)}const Ft={[ZG]:e.REPEAT,[lE]:e.CLAMP_TO_EDGE,[JG]:e.MIRRORED_REPEAT},kt={[zf]:e.NEAREST,[x_]:e.NEAREST_MIPMAP_NEAREST,[eG]:e.NEAREST_MIPMAP_LINEAR,[f2]:e.LINEAR,[Zz]:e.LINEAR_MIPMAP_NEAREST,[FH]:e.LINEAR_MIPMAP_LINEAR},rn={[ik]:e.NEVER,[dk]:e.ALWAYS,[ok]:e.LESS,[kj]:e.LEQUAL,[ck]:e.EQUAL,[Ik]:e.GEQUAL,[hk]:e.GREATER,[fk]:e.NOTEQUAL};function Ot(Ye,_e,Dt){if(Dt?(e.texParameteri(Ye,e.TEXTURE_WRAP_S,Ft[_e.wrapS]),e.texParameteri(Ye,e.TEXTURE_WRAP_T,Ft[_e.wrapT]),(Ye===e.TEXTURE_3D||Ye===e.TEXTURE_2D_ARRAY)&&e.texParameteri(Ye,e.TEXTURE_WRAP_R,Ft[_e.wrapR]),e.texParameteri(Ye,e.TEXTURE_MAG_FILTER,kt[_e.magFilter]),e.texParameteri(Ye,e.TEXTURE_MIN_FILTER,kt[_e.minFilter])):(e.texParameteri(Ye,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(Ye,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),(Ye===e.TEXTURE_3D||Ye===e.TEXTURE_2D_ARRAY)&&e.texParameteri(Ye,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE),(_e.wrapS!==lE||_e.wrapT!==lE)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),e.texParameteri(Ye,e.TEXTURE_MAG_FILTER,xe(_e.magFilter)),e.texParameteri(Ye,e.TEXTURE_MIN_FILTER,xe(_e.minFilter)),_e.minFilter!==zf&&_e.minFilter!==f2&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_e.compareFunction&&(e.texParameteri(Ye,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(Ye,e.TEXTURE_COMPARE_FUNC,rn[_e.compareFunction])),l.has("EXT_texture_filter_anisotropic")===!0){const zt=l.get("EXT_texture_filter_anisotropic");if(_e.magFilter===zf||_e.minFilter!==eG&&_e.minFilter!==FH||_e.type===LN&&l.has("OES_texture_float_linear")===!1||M===!1&&_e.type===GH&&l.has("OES_texture_half_float_linear")===!1)return;(_e.anisotropy>1||t.get(_e).__currentAnisotropy)&&(e.texParameterf(Ye,zt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_e.anisotropy,c.getMaxAnisotropy())),t.get(_e).__currentAnisotropy=_e.anisotropy)}}function Vt(Ye,_e){let Dt=!1;Ye.__webglInit===void 0&&(Ye.__webglInit=!0,_e.addEventListener("dispose",je));const zt=_e.source;let jt=te.get(zt);jt===void 0&&(jt={},te.set(zt,jt));const Gt=at(_e);if(Gt!==Ye.__cacheKey){jt[Gt]===void 0&&(jt[Gt]={texture:e.createTexture(),usedTimes:0},O.memory.textures++,Dt=!0),jt[Gt].usedTimes++;const Dn=jt[Ye.__cacheKey];Dn!==void 0&&(jt[Ye.__cacheKey].usedTimes--,Dn.usedTimes===0&&Le(_e)),Ye.__cacheKey=Gt,Ye.__webglTexture=jt[Gt].texture}return Dt}function un(Ye,_e,Dt){let zt=e.TEXTURE_2D;(_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(zt=e.TEXTURE_2D_ARRAY),_e.isData3DTexture&&(zt=e.TEXTURE_3D);const jt=Vt(Ye,_e),Gt=_e.source;n.bindTexture(zt,Ye.__webglTexture,e.TEXTURE0+Dt);const Dn=t.get(Gt);if(Gt.version!==Dn.__version||jt===!0){n.activeTexture(e.TEXTURE0+Dt);const on=ks.getPrimaries(ks.workingColorSpace),In=_e.colorSpace===I2?null:ks.getPrimaries(_e.colorSpace),Pn=_e.colorSpace===I2||on===In?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_e.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_e.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,_e.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pn);const Hn=ie(_e)&&oe(_e.image)===!1;let Ht=Te(_e.image,Hn,!1,c.maxTextureSize);Ht=ll(_e,Ht);const Rl=oe(Ht)||M,$n=w.convert(_e.format,_e.colorSpace);let Fn=w.convert(_e.type),On=Ne(_e.internalFormat,$n,Fn,_e.colorSpace,_e.isVideoTexture);Ot(zt,_e,Rl);let wn;const Zn=_e.mipmaps,Ll=M&&_e.isVideoTexture!==!0&&On!==Yj,hn=Dn.__version===void 0||jt===!0,yn=We(_e,Ht,Rl);if(_e.isDepthTexture)On=e.DEPTH_COMPONENT,M?_e.type===LN?On=e.DEPTH_COMPONENT32F:_e.type===SN?On=e.DEPTH_COMPONENT24:_e.type===j8?On=e.DEPTH24_STENCIL8:On=e.DEPTH_COMPONENT16:_e.type===LN&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_e.format===Y8&&On===e.DEPTH_COMPONENT&&_e.type!==xV&&_e.type!==SN&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_e.type=SN,Fn=w.convert(_e.type)),_e.format===N9&&On===e.DEPTH_COMPONENT&&(On=e.DEPTH_STENCIL,_e.type!==j8&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_e.type=j8,Fn=w.convert(_e.type))),hn&&(Ll?n.texStorage2D(e.TEXTURE_2D,1,On,Ht.width,Ht.height):n.texImage2D(e.TEXTURE_2D,0,On,Ht.width,Ht.height,0,$n,Fn,null));else if(_e.isDataTexture)if(Zn.length>0&&Rl){Ll&&hn&&n.texStorage2D(e.TEXTURE_2D,yn,On,Zn[0].width,Zn[0].height);for(let Zt=0,ut=Zn.length;Zt<ut;Zt++)wn=Zn[Zt],Ll?n.texSubImage2D(e.TEXTURE_2D,Zt,0,0,wn.width,wn.height,$n,Fn,wn.data):n.texImage2D(e.TEXTURE_2D,Zt,On,wn.width,wn.height,0,$n,Fn,wn.data);_e.generateMipmaps=!1}else Ll?(hn&&n.texStorage2D(e.TEXTURE_2D,yn,On,Ht.width,Ht.height),n.texSubImage2D(e.TEXTURE_2D,0,0,0,Ht.width,Ht.height,$n,Fn,Ht.data)):n.texImage2D(e.TEXTURE_2D,0,On,Ht.width,Ht.height,0,$n,Fn,Ht.data);else if(_e.isCompressedTexture)if(_e.isCompressedArrayTexture){Ll&&hn&&n.texStorage3D(e.TEXTURE_2D_ARRAY,yn,On,Zn[0].width,Zn[0].height,Ht.depth);for(let Zt=0,ut=Zn.length;Zt<ut;Zt++)wn=Zn[Zt],_e.format!==sE?$n!==null?Ll?n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Zt,0,0,0,wn.width,wn.height,Ht.depth,$n,wn.data,0,0):n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Zt,On,wn.width,wn.height,Ht.depth,0,wn.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ll?n.texSubImage3D(e.TEXTURE_2D_ARRAY,Zt,0,0,0,wn.width,wn.height,Ht.depth,$n,Fn,wn.data):n.texImage3D(e.TEXTURE_2D_ARRAY,Zt,On,wn.width,wn.height,Ht.depth,0,$n,Fn,wn.data)}else{Ll&&hn&&n.texStorage2D(e.TEXTURE_2D,yn,On,Zn[0].width,Zn[0].height);for(let Zt=0,ut=Zn.length;Zt<ut;Zt++)wn=Zn[Zt],_e.format!==sE?$n!==null?Ll?n.compressedTexSubImage2D(e.TEXTURE_2D,Zt,0,0,wn.width,wn.height,$n,wn.data):n.compressedTexImage2D(e.TEXTURE_2D,Zt,On,wn.width,wn.height,0,wn.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ll?n.texSubImage2D(e.TEXTURE_2D,Zt,0,0,wn.width,wn.height,$n,Fn,wn.data):n.texImage2D(e.TEXTURE_2D,Zt,On,wn.width,wn.height,0,$n,Fn,wn.data)}else if(_e.isDataArrayTexture)Ll?(hn&&n.texStorage3D(e.TEXTURE_2D_ARRAY,yn,On,Ht.width,Ht.height,Ht.depth),n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Ht.width,Ht.height,Ht.depth,$n,Fn,Ht.data)):n.texImage3D(e.TEXTURE_2D_ARRAY,0,On,Ht.width,Ht.height,Ht.depth,0,$n,Fn,Ht.data);else if(_e.isData3DTexture)Ll?(hn&&n.texStorage3D(e.TEXTURE_3D,yn,On,Ht.width,Ht.height,Ht.depth),n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Ht.width,Ht.height,Ht.depth,$n,Fn,Ht.data)):n.texImage3D(e.TEXTURE_3D,0,On,Ht.width,Ht.height,Ht.depth,0,$n,Fn,Ht.data);else if(_e.isFramebufferTexture){if(hn)if(Ll)n.texStorage2D(e.TEXTURE_2D,yn,On,Ht.width,Ht.height);else{let Zt=Ht.width,ut=Ht.height;for(let qt=0;qt<yn;qt++)n.texImage2D(e.TEXTURE_2D,qt,On,Zt,ut,0,$n,Fn,null),Zt>>=1,ut>>=1}}else if(Zn.length>0&&Rl){Ll&&hn&&n.texStorage2D(e.TEXTURE_2D,yn,On,Zn[0].width,Zn[0].height);for(let Zt=0,ut=Zn.length;Zt<ut;Zt++)wn=Zn[Zt],Ll?n.texSubImage2D(e.TEXTURE_2D,Zt,0,0,$n,Fn,wn):n.texImage2D(e.TEXTURE_2D,Zt,On,$n,Fn,wn);_e.generateMipmaps=!1}else Ll?(hn&&n.texStorage2D(e.TEXTURE_2D,yn,On,Ht.width,Ht.height),n.texSubImage2D(e.TEXTURE_2D,0,0,0,$n,Fn,Ht)):n.texImage2D(e.TEXTURE_2D,0,On,$n,Fn,Ht);me(_e,Rl)&&fe(zt),Dn.__version=Gt.version,_e.onUpdate&&_e.onUpdate(_e)}Ye.__version=_e.version}function Sn(Ye,_e,Dt){if(_e.image.length!==6)return;const zt=Vt(Ye,_e),jt=_e.source;n.bindTexture(e.TEXTURE_CUBE_MAP,Ye.__webglTexture,e.TEXTURE0+Dt);const Gt=t.get(jt);if(jt.version!==Gt.__version||zt===!0){n.activeTexture(e.TEXTURE0+Dt);const Dn=ks.getPrimaries(ks.workingColorSpace),on=_e.colorSpace===I2?null:ks.getPrimaries(_e.colorSpace),In=_e.colorSpace===I2||Dn===on?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_e.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_e.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,_e.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,In);const Pn=_e.isCompressedTexture||_e.image[0].isCompressedTexture,Hn=_e.image[0]&&_e.image[0].isDataTexture,Ht=[];for(let Zt=0;Zt<6;Zt++)!Pn&&!Hn?Ht[Zt]=Te(_e.image[Zt],!1,!0,c.maxCubemapSize):Ht[Zt]=Hn?_e.image[Zt].image:_e.image[Zt],Ht[Zt]=ll(_e,Ht[Zt]);const Rl=Ht[0],$n=oe(Rl)||M,Fn=w.convert(_e.format,_e.colorSpace),On=w.convert(_e.type),wn=Ne(_e.internalFormat,Fn,On,_e.colorSpace),Zn=M&&_e.isVideoTexture!==!0,Ll=Gt.__version===void 0||zt===!0;let hn=We(_e,Rl,$n);Ot(e.TEXTURE_CUBE_MAP,_e,$n);let yn;if(Pn){Zn&&Ll&&n.texStorage2D(e.TEXTURE_CUBE_MAP,hn,wn,Rl.width,Rl.height);for(let Zt=0;Zt<6;Zt++){yn=Ht[Zt].mipmaps;for(let ut=0;ut<yn.length;ut++){const qt=yn[ut];_e.format!==sE?Fn!==null?Zn?n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Zt,ut,0,0,qt.width,qt.height,Fn,qt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Zt,ut,wn,qt.width,qt.height,0,qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zn?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Zt,ut,0,0,qt.width,qt.height,Fn,On,qt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Zt,ut,wn,qt.width,qt.height,0,Fn,On,qt.data)}}}else{yn=_e.mipmaps,Zn&&Ll&&(yn.length>0&&hn++,n.texStorage2D(e.TEXTURE_CUBE_MAP,hn,wn,Ht[0].width,Ht[0].height));for(let Zt=0;Zt<6;Zt++)if(Hn){Zn?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Zt,0,0,0,Ht[Zt].width,Ht[Zt].height,Fn,On,Ht[Zt].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Zt,0,wn,Ht[Zt].width,Ht[Zt].height,0,Fn,On,Ht[Zt].data);for(let ut=0;ut<yn.length;ut++){const vt=yn[ut].image[Zt].image;Zn?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Zt,ut+1,0,0,vt.width,vt.height,Fn,On,vt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Zt,ut+1,wn,vt.width,vt.height,0,Fn,On,vt.data)}}else{Zn?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Zt,0,0,0,Fn,On,Ht[Zt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Zt,0,wn,Fn,On,Ht[Zt]);for(let ut=0;ut<yn.length;ut++){const qt=yn[ut];Zn?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Zt,ut+1,0,0,Fn,On,qt.image[Zt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Zt,ut+1,wn,Fn,On,qt.image[Zt])}}}me(_e,$n)&&fe(e.TEXTURE_CUBE_MAP),Gt.__version=jt.version,_e.onUpdate&&_e.onUpdate(_e)}Ye.__version=_e.version}function bn(Ye,_e,Dt,zt,jt,Gt){const Dn=w.convert(Dt.format,Dt.colorSpace),on=w.convert(Dt.type),In=Ne(Dt.internalFormat,Dn,on,Dt.colorSpace);if(!t.get(_e).__hasExternalTextures){const Hn=Math.max(1,_e.width>>Gt),Ht=Math.max(1,_e.height>>Gt);jt===e.TEXTURE_3D||jt===e.TEXTURE_2D_ARRAY?n.texImage3D(jt,Gt,In,Hn,Ht,_e.depth,0,Dn,on,null):n.texImage2D(jt,Gt,In,Hn,Ht,0,Dn,on,null)}n.bindFramebuffer(e.FRAMEBUFFER,Ye),Ln(_e)?G.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,zt,jt,t.get(Dt).__webglTexture,0,Qn(_e)):(jt===e.TEXTURE_2D||jt>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&jt<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,zt,jt,t.get(Dt).__webglTexture,Gt),n.bindFramebuffer(e.FRAMEBUFFER,null)}function kn(Ye,_e,Dt){if(e.bindRenderbuffer(e.RENDERBUFFER,Ye),_e.depthBuffer&&!_e.stencilBuffer){let zt=M===!0?e.DEPTH_COMPONENT24:e.DEPTH_COMPONENT16;if(Dt||Ln(_e)){const jt=_e.depthTexture;jt&&jt.isDepthTexture&&(jt.type===LN?zt=e.DEPTH_COMPONENT32F:jt.type===SN&&(zt=e.DEPTH_COMPONENT24));const Gt=Qn(_e);Ln(_e)?G.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Gt,zt,_e.width,_e.height):e.renderbufferStorageMultisample(e.RENDERBUFFER,Gt,zt,_e.width,_e.height)}else e.renderbufferStorage(e.RENDERBUFFER,zt,_e.width,_e.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,Ye)}else if(_e.depthBuffer&&_e.stencilBuffer){const zt=Qn(_e);Dt&&Ln(_e)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,zt,e.DEPTH24_STENCIL8,_e.width,_e.height):Ln(_e)?G.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,zt,e.DEPTH24_STENCIL8,_e.width,_e.height):e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,_e.width,_e.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,Ye)}else{const zt=_e.isWebGLMultipleRenderTargets===!0?_e.texture:[_e.texture];for(let jt=0;jt<zt.length;jt++){const Gt=zt[jt],Dn=w.convert(Gt.format,Gt.colorSpace),on=w.convert(Gt.type),In=Ne(Gt.internalFormat,Dn,on,Gt.colorSpace),Pn=Qn(_e);Dt&&Ln(_e)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pn,In,_e.width,_e.height):Ln(_e)?G.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pn,In,_e.width,_e.height):e.renderbufferStorage(e.RENDERBUFFER,In,_e.width,_e.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function qn(Ye,_e){if(_e&&_e.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,Ye),!(_e.depthTexture&&_e.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!t.get(_e.depthTexture).__webglTexture||_e.depthTexture.image.width!==_e.width||_e.depthTexture.image.height!==_e.height)&&(_e.depthTexture.image.width=_e.width,_e.depthTexture.image.height=_e.height,_e.depthTexture.needsUpdate=!0),It(_e.depthTexture,0);const zt=t.get(_e.depthTexture).__webglTexture,jt=Qn(_e);if(_e.depthTexture.format===Y8)Ln(_e)?G.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,zt,0,jt):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,zt,0);else if(_e.depthTexture.format===N9)Ln(_e)?G.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,zt,0,jt):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,zt,0);else throw new Error("Unknown depthTexture format")}function pn(Ye){const _e=t.get(Ye),Dt=Ye.isWebGLCubeRenderTarget===!0;if(Ye.depthTexture&&!_e.__autoAllocateDepthBuffer){if(Dt)throw new Error("target.depthTexture not supported in Cube render targets");qn(_e.__webglFramebuffer,Ye)}else if(Dt){_e.__webglDepthbuffer=[];for(let zt=0;zt<6;zt++)n.bindFramebuffer(e.FRAMEBUFFER,_e.__webglFramebuffer[zt]),_e.__webglDepthbuffer[zt]=e.createRenderbuffer(),kn(_e.__webglDepthbuffer[zt],Ye,!1)}else n.bindFramebuffer(e.FRAMEBUFFER,_e.__webglFramebuffer),_e.__webglDepthbuffer=e.createRenderbuffer(),kn(_e.__webglDepthbuffer,Ye,!1);n.bindFramebuffer(e.FRAMEBUFFER,null)}function il(Ye,_e,Dt){const zt=t.get(Ye);_e!==void 0&&bn(zt.__webglFramebuffer,Ye,Ye.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),Dt!==void 0&&pn(Ye)}function mt(Ye){const _e=Ye.texture,Dt=t.get(Ye),zt=t.get(_e);Ye.addEventListener("dispose",et),Ye.isWebGLMultipleRenderTargets!==!0&&(zt.__webglTexture===void 0&&(zt.__webglTexture=e.createTexture()),zt.__version=_e.version,O.memory.textures++);const jt=Ye.isWebGLCubeRenderTarget===!0,Gt=Ye.isWebGLMultipleRenderTargets===!0,Dn=oe(Ye)||M;if(jt){Dt.__webglFramebuffer=[];for(let on=0;on<6;on++)if(M&&_e.mipmaps&&_e.mipmaps.length>0){Dt.__webglFramebuffer[on]=[];for(let In=0;In<_e.mipmaps.length;In++)Dt.__webglFramebuffer[on][In]=e.createFramebuffer()}else Dt.__webglFramebuffer[on]=e.createFramebuffer()}else{if(M&&_e.mipmaps&&_e.mipmaps.length>0){Dt.__webglFramebuffer=[];for(let on=0;on<_e.mipmaps.length;on++)Dt.__webglFramebuffer[on]=e.createFramebuffer()}else Dt.__webglFramebuffer=e.createFramebuffer();if(Gt)if(c.drawBuffers){const on=Ye.texture;for(let In=0,Pn=on.length;In<Pn;In++){const Hn=t.get(on[In]);Hn.__webglTexture===void 0&&(Hn.__webglTexture=e.createTexture(),O.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(M&&Ye.samples>0&&Ln(Ye)===!1){const on=Gt?_e:[_e];Dt.__webglMultisampledFramebuffer=e.createFramebuffer(),Dt.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer);for(let In=0;In<on.length;In++){const Pn=on[In];Dt.__webglColorRenderbuffer[In]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,Dt.__webglColorRenderbuffer[In]);const Hn=w.convert(Pn.format,Pn.colorSpace),Ht=w.convert(Pn.type),Rl=Ne(Pn.internalFormat,Hn,Ht,Pn.colorSpace,Ye.isXRRenderTarget===!0),$n=Qn(Ye);e.renderbufferStorageMultisample(e.RENDERBUFFER,$n,Rl,Ye.width,Ye.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+In,e.RENDERBUFFER,Dt.__webglColorRenderbuffer[In])}e.bindRenderbuffer(e.RENDERBUFFER,null),Ye.depthBuffer&&(Dt.__webglDepthRenderbuffer=e.createRenderbuffer(),kn(Dt.__webglDepthRenderbuffer,Ye,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(jt){n.bindTexture(e.TEXTURE_CUBE_MAP,zt.__webglTexture),Ot(e.TEXTURE_CUBE_MAP,_e,Dn);for(let on=0;on<6;on++)if(M&&_e.mipmaps&&_e.mipmaps.length>0)for(let In=0;In<_e.mipmaps.length;In++)bn(Dt.__webglFramebuffer[on][In],Ye,_e,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+on,In);else bn(Dt.__webglFramebuffer[on],Ye,_e,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+on,0);me(_e,Dn)&&fe(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Gt){const on=Ye.texture;for(let In=0,Pn=on.length;In<Pn;In++){const Hn=on[In],Ht=t.get(Hn);n.bindTexture(e.TEXTURE_2D,Ht.__webglTexture),Ot(e.TEXTURE_2D,Hn,Dn),bn(Dt.__webglFramebuffer,Ye,Hn,e.COLOR_ATTACHMENT0+In,e.TEXTURE_2D,0),me(Hn,Dn)&&fe(e.TEXTURE_2D)}n.unbindTexture()}else{let on=e.TEXTURE_2D;if((Ye.isWebGL3DRenderTarget||Ye.isWebGLArrayRenderTarget)&&(M?on=Ye.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(on,zt.__webglTexture),Ot(on,_e,Dn),M&&_e.mipmaps&&_e.mipmaps.length>0)for(let In=0;In<_e.mipmaps.length;In++)bn(Dt.__webglFramebuffer[In],Ye,_e,e.COLOR_ATTACHMENT0,on,In);else bn(Dt.__webglFramebuffer,Ye,_e,e.COLOR_ATTACHMENT0,on,0);me(_e,Dn)&&fe(on),n.unbindTexture()}Ye.depthBuffer&&pn(Ye)}function Ns(Ye){const _e=oe(Ye)||M,Dt=Ye.isWebGLMultipleRenderTargets===!0?Ye.texture:[Ye.texture];for(let zt=0,jt=Dt.length;zt<jt;zt++){const Gt=Dt[zt];if(me(Gt,_e)){const Dn=Ye.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,on=t.get(Gt).__webglTexture;n.bindTexture(Dn,on),fe(Dn),n.unbindTexture()}}}function Mn(Ye){if(M&&Ye.samples>0&&Ln(Ye)===!1){const _e=Ye.isWebGLMultipleRenderTargets?Ye.texture:[Ye.texture],Dt=Ye.width,zt=Ye.height;let jt=e.COLOR_BUFFER_BIT;const Gt=[],Dn=Ye.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,on=t.get(Ye),In=Ye.isWebGLMultipleRenderTargets===!0;if(In)for(let Pn=0;Pn<_e.length;Pn++)n.bindFramebuffer(e.FRAMEBUFFER,on.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Pn,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,on.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Pn,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,on.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,on.__webglFramebuffer);for(let Pn=0;Pn<_e.length;Pn++){Gt.push(e.COLOR_ATTACHMENT0+Pn),Ye.depthBuffer&&Gt.push(Dn);const Hn=on.__ignoreDepthValues!==void 0?on.__ignoreDepthValues:!1;if(Hn===!1&&(Ye.depthBuffer&&(jt|=e.DEPTH_BUFFER_BIT),Ye.stencilBuffer&&(jt|=e.STENCIL_BUFFER_BIT)),In&&e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,on.__webglColorRenderbuffer[Pn]),Hn===!0&&(e.invalidateFramebuffer(e.READ_FRAMEBUFFER,[Dn]),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[Dn])),In){const Ht=t.get(_e[Pn]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Ht,0)}e.blitFramebuffer(0,0,Dt,zt,0,0,Dt,zt,jt,e.NEAREST),Y&&e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Gt)}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),In)for(let Pn=0;Pn<_e.length;Pn++){n.bindFramebuffer(e.FRAMEBUFFER,on.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Pn,e.RENDERBUFFER,on.__webglColorRenderbuffer[Pn]);const Hn=t.get(_e[Pn]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,on.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Pn,e.TEXTURE_2D,Hn,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,on.__webglMultisampledFramebuffer)}}function Qn(Ye){return Math.min(c.maxSamples,Ye.samples)}function Ln(Ye){const _e=t.get(Ye);return M&&Ye.samples>0&&l.has("WEBGL_multisampled_render_to_texture")===!0&&_e.__useRenderToTexture!==!1}function jl(Ye){const _e=O.render.frame;Z.get(Ye)!==_e&&(Z.set(Ye,_e),Ye.update())}function ll(Ye,_e){const Dt=Ye.colorSpace,zt=Ye.format,jt=Ye.type;return Ye.isCompressedTexture===!0||Ye.isVideoTexture===!0||Ye.format===vG||Dt!==Q7&&Dt!==I2&&(ks.getTransfer(Dt)===dr?M===!1?l.has("EXT_sRGB")===!0&&zt===sE?(Ye.format=vG,Ye.minFilter=f2,Ye.generateMipmaps=!1):_e=Kj.sRGBToLinear(_e):(zt!==sE||jt!==xN)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Dt)),_e}this.allocateTextureUnit=Xe,this.resetTextureUnits=ht,this.setTexture2D=It,this.setTexture2DArray=St,this.setTexture3D=bt,this.setTextureCube=Ct,this.rebindTextures=il,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=Ns,this.updateMultisampleRenderTarget=Mn,this.setupDepthRenderbuffer=pn,this.setupFrameBufferTexture=bn,this.useMultisampledRTT=Ln}function gZ(e,l,n){const t=n.isWebGL2;function c(w,O=I2){let M;const G=ks.getTransfer(O);if(w===xN)return e.UNSIGNED_BYTE;if(w===Gj)return e.UNSIGNED_SHORT_4_4_4_4;if(w===Vj)return e.UNSIGNED_SHORT_5_5_5_1;if(w===Jz)return e.BYTE;if(w===Xz)return e.SHORT;if(w===xV)return e.UNSIGNED_SHORT;if(w===Fj)return e.INT;if(w===SN)return e.UNSIGNED_INT;if(w===LN)return e.FLOAT;if(w===GH)return t?e.HALF_FLOAT:(M=l.get("OES_texture_half_float"),M!==null?M.HALF_FLOAT_OES:null);if(w===vz)return e.ALPHA;if(w===sE)return e.RGBA;if(w===ek)return e.LUMINANCE;if(w===tk)return e.LUMINANCE_ALPHA;if(w===Y8)return e.DEPTH_COMPONENT;if(w===N9)return e.DEPTH_STENCIL;if(w===vG)return M=l.get("EXT_sRGB"),M!==null?M.SRGB_ALPHA_EXT:null;if(w===nk)return e.RED;if(w===_j)return e.RED_INTEGER;if(w===lk)return e.RG;if(w===Wj)return e.RG_INTEGER;if(w===jj)return e.RGBA_INTEGER;if(w===tG||w===nG||w===lG||w===sG)if(G===dr)if(M=l.get("WEBGL_compressed_texture_s3tc_srgb"),M!==null){if(w===tG)return M.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(w===nG)return M.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(w===lG)return M.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(w===sG)return M.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(M=l.get("WEBGL_compressed_texture_s3tc"),M!==null){if(w===tG)return M.COMPRESSED_RGB_S3TC_DXT1_EXT;if(w===nG)return M.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(w===lG)return M.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(w===sG)return M.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(w===H_||w===B_||w===U_||w===F_)if(M=l.get("WEBGL_compressed_texture_pvrtc"),M!==null){if(w===H_)return M.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(w===B_)return M.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(w===U_)return M.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(w===F_)return M.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(w===Yj)return M=l.get("WEBGL_compressed_texture_etc1"),M!==null?M.COMPRESSED_RGB_ETC1_WEBGL:null;if(w===G_||w===V_)if(M=l.get("WEBGL_compressed_texture_etc"),M!==null){if(w===G_)return G===dr?M.COMPRESSED_SRGB8_ETC2:M.COMPRESSED_RGB8_ETC2;if(w===V_)return G===dr?M.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:M.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(w===__||w===W_||w===j_||w===Y_||w===z_||w===k_||w===q_||w===K_||w===Q_||w===$_||w===Z_||w===J_||w===X_||w===v_)if(M=l.get("WEBGL_compressed_texture_astc"),M!==null){if(w===__)return G===dr?M.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:M.COMPRESSED_RGBA_ASTC_4x4_KHR;if(w===W_)return G===dr?M.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:M.COMPRESSED_RGBA_ASTC_5x4_KHR;if(w===j_)return G===dr?M.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:M.COMPRESSED_RGBA_ASTC_5x5_KHR;if(w===Y_)return G===dr?M.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:M.COMPRESSED_RGBA_ASTC_6x5_KHR;if(w===z_)return G===dr?M.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:M.COMPRESSED_RGBA_ASTC_6x6_KHR;if(w===k_)return G===dr?M.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:M.COMPRESSED_RGBA_ASTC_8x5_KHR;if(w===q_)return G===dr?M.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:M.COMPRESSED_RGBA_ASTC_8x6_KHR;if(w===K_)return G===dr?M.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:M.COMPRESSED_RGBA_ASTC_8x8_KHR;if(w===Q_)return G===dr?M.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:M.COMPRESSED_RGBA_ASTC_10x5_KHR;if(w===$_)return G===dr?M.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:M.COMPRESSED_RGBA_ASTC_10x6_KHR;if(w===Z_)return G===dr?M.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:M.COMPRESSED_RGBA_ASTC_10x8_KHR;if(w===J_)return G===dr?M.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:M.COMPRESSED_RGBA_ASTC_10x10_KHR;if(w===X_)return G===dr?M.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:M.COMPRESSED_RGBA_ASTC_12x10_KHR;if(w===v_)return G===dr?M.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:M.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(w===rG||w===eW||w===tW)if(M=l.get("EXT_texture_compression_bptc"),M!==null){if(w===rG)return G===dr?M.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:M.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(w===eW)return M.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(w===tW)return M.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(w===sk||w===nW||w===lW||w===sW)if(M=l.get("EXT_texture_compression_rgtc"),M!==null){if(w===rG)return M.COMPRESSED_RED_RGTC1_EXT;if(w===nW)return M.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(w===lW)return M.COMPRESSED_RED_GREEN_RGTC2_EXT;if(w===sW)return M.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return w===j8?t?e.UNSIGNED_INT_24_8:(M=l.get("WEBGL_depth_texture"),M!==null?M.UNSIGNED_INT_24_8_WEBGL:null):e[w]!==void 0?e[w]:null}return{convert:c}}class PZ extends nE{constructor(l=[]){super(),this.isArrayCamera=!0,this.cameras=l}}class jB extends Zf{constructor(){super(),this.isGroup=!0,this.type="Group"}}const CZ={type:"move"};class gG{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jB,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jB,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new lt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new lt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jB,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new lt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new lt),this._grip}dispatchEvent(l){return this._targetRay!==null&&this._targetRay.dispatchEvent(l),this._grip!==null&&this._grip.dispatchEvent(l),this._hand!==null&&this._hand.dispatchEvent(l),this}connect(l){if(l&&l.hand){const n=this._hand;if(n)for(const t of l.hand.values())this._getHandJoint(n,t)}return this.dispatchEvent({type:"connected",data:l}),this}disconnect(l){return this.dispatchEvent({type:"disconnected",data:l}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(l,n,t){let c=null,w=null,O=null;const M=this._targetRay,G=this._grip,Y=this._hand;if(l&&n.session.visibilityState!=="visible-blurred"){if(Y&&l.hand){O=!0;for(const Te of l.hand.values()){const oe=n.getJointPose(Te,t),ie=this._getHandJoint(Y,Te);oe!==null&&(ie.matrix.fromArray(oe.transform.matrix),ie.matrix.decompose(ie.position,ie.rotation,ie.scale),ie.matrixWorldNeedsUpdate=!0,ie.jointRadius=oe.radius),ie.visible=oe!==null}const Z=Y.joints["index-finger-tip"],ee=Y.joints["thumb-tip"],te=Z.position.distanceTo(ee.position),v=.02,he=.005;Y.inputState.pinching&&te>v+he?(Y.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:l.handedness,target:this})):!Y.inputState.pinching&&te<=v-he&&(Y.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:l.handedness,target:this}))}else G!==null&&l.gripSpace&&(w=n.getPose(l.gripSpace,t),w!==null&&(G.matrix.fromArray(w.transform.matrix),G.matrix.decompose(G.position,G.rotation,G.scale),G.matrixWorldNeedsUpdate=!0,w.linearVelocity?(G.hasLinearVelocity=!0,G.linearVelocity.copy(w.linearVelocity)):G.hasLinearVelocity=!1,w.angularVelocity?(G.hasAngularVelocity=!0,G.angularVelocity.copy(w.angularVelocity)):G.hasAngularVelocity=!1));M!==null&&(c=n.getPose(l.targetRaySpace,t),c===null&&w!==null&&(c=w),c!==null&&(M.matrix.fromArray(c.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,c.linearVelocity?(M.hasLinearVelocity=!0,M.linearVelocity.copy(c.linearVelocity)):M.hasLinearVelocity=!1,c.angularVelocity?(M.hasAngularVelocity=!0,M.angularVelocity.copy(c.angularVelocity)):M.hasAngularVelocity=!1,this.dispatchEvent(CZ)))}return M!==null&&(M.visible=c!==null),G!==null&&(G.visible=w!==null),Y!==null&&(Y.visible=O!==null),this}_getHandJoint(l,n){if(l.joints[n.jointName]===void 0){const t=new jB;t.matrixAutoUpdate=!1,t.visible=!1,l.joints[n.jointName]=t,l.add(t)}return l.joints[n.jointName]}}class bZ extends F9{constructor(l,n){super();const t=this;let c=null,w=1,O=null,M="local-floor",G=1,Y=null,Z=null,ee=null,te=null,v=null,he=null;const Te=n.getContextAttributes();let oe=null,ie=null;const me=[],fe=[],Ne=new Dl;let We=null;const xe=new nE;xe.layers.enable(1),xe.viewport=new Hc;const je=new nE;je.layers.enable(2),je.viewport=new Hc;const et=[xe,je],ge=new PZ;ge.layers.enable(1),ge.layers.enable(2);let Le=null,ve=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Ot){let Vt=me[Ot];return Vt===void 0&&(Vt=new gG,me[Ot]=Vt),Vt.getTargetRaySpace()},this.getControllerGrip=function(Ot){let Vt=me[Ot];return Vt===void 0&&(Vt=new gG,me[Ot]=Vt),Vt.getGripSpace()},this.getHand=function(Ot){let Vt=me[Ot];return Vt===void 0&&(Vt=new gG,me[Ot]=Vt),Vt.getHandSpace()};function nt(Ot){const Vt=fe.indexOf(Ot.inputSource);if(Vt===-1)return;const un=me[Vt];un!==void 0&&(un.update(Ot.inputSource,Ot.frame,Y||O),un.dispatchEvent({type:Ot.type,data:Ot.inputSource}))}function ht(){c.removeEventListener("select",nt),c.removeEventListener("selectstart",nt),c.removeEventListener("selectend",nt),c.removeEventListener("squeeze",nt),c.removeEventListener("squeezestart",nt),c.removeEventListener("squeezeend",nt),c.removeEventListener("end",ht),c.removeEventListener("inputsourceschange",Xe);for(let Ot=0;Ot<me.length;Ot++){const Vt=fe[Ot];Vt!==null&&(fe[Ot]=null,me[Ot].disconnect(Vt))}Le=null,ve=null,l.setRenderTarget(oe),v=null,te=null,ee=null,c=null,ie=null,rn.stop(),t.isPresenting=!1,l.setPixelRatio(We),l.setSize(Ne.width,Ne.height,!1),t.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Ot){w=Ot,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Ot){M=Ot,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return Y||O},this.setReferenceSpace=function(Ot){Y=Ot},this.getBaseLayer=function(){return te!==null?te:v},this.getBinding=function(){return ee},this.getFrame=function(){return he},this.getSession=function(){return c},this.setSession=async function(Ot){if(c=Ot,c!==null){if(oe=l.getRenderTarget(),c.addEventListener("select",nt),c.addEventListener("selectstart",nt),c.addEventListener("selectend",nt),c.addEventListener("squeeze",nt),c.addEventListener("squeezestart",nt),c.addEventListener("squeezeend",nt),c.addEventListener("end",ht),c.addEventListener("inputsourceschange",Xe),Te.xrCompatible!==!0&&await n.makeXRCompatible(),We=l.getPixelRatio(),l.getSize(Ne),c.renderState.layers===void 0||l.capabilities.isWebGL2===!1){const Vt={antialias:c.renderState.layers===void 0?Te.antialias:!0,alpha:!0,depth:Te.depth,stencil:Te.stencil,framebufferScaleFactor:w};v=new XRWebGLLayer(c,n,Vt),c.updateRenderState({baseLayer:v}),l.setPixelRatio(1),l.setSize(v.framebufferWidth,v.framebufferHeight,!1),ie=new UN(v.framebufferWidth,v.framebufferHeight,{format:sE,type:xN,colorSpace:l.outputColorSpace,stencilBuffer:Te.stencil})}else{let Vt=null,un=null,Sn=null;Te.depth&&(Sn=Te.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Vt=Te.stencil?N9:Y8,un=Te.stencil?j8:SN);const bn={colorFormat:n.RGBA8,depthFormat:Sn,scaleFactor:w};ee=new XRWebGLBinding(c,n),te=ee.createProjectionLayer(bn),c.updateRenderState({layers:[te]}),l.setPixelRatio(1),l.setSize(te.textureWidth,te.textureHeight,!1),ie=new UN(te.textureWidth,te.textureHeight,{format:sE,type:xN,depthTexture:new rY(te.textureWidth,te.textureHeight,un,void 0,void 0,void 0,void 0,void 0,void 0,Vt),stencilBuffer:Te.stencil,colorSpace:l.outputColorSpace,samples:Te.antialias?4:0});const kn=l.properties.get(ie);kn.__ignoreDepthValues=te.ignoreDepthValues}ie.isXRRenderTarget=!0,this.setFoveation(G),Y=null,O=await c.requestReferenceSpace(M),rn.setContext(c),rn.start(),t.isPresenting=!0,t.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(c!==null)return c.environmentBlendMode};function Xe(Ot){for(let Vt=0;Vt<Ot.removed.length;Vt++){const un=Ot.removed[Vt],Sn=fe.indexOf(un);Sn>=0&&(fe[Sn]=null,me[Sn].disconnect(un))}for(let Vt=0;Vt<Ot.added.length;Vt++){const un=Ot.added[Vt];let Sn=fe.indexOf(un);if(Sn===-1){for(let kn=0;kn<me.length;kn++)if(kn>=fe.length){fe.push(un),Sn=kn;break}else if(fe[kn]===null){fe[kn]=un,Sn=kn;break}if(Sn===-1)break}const bn=me[Sn];bn&&bn.connect(un)}}const at=new lt,It=new lt;function St(Ot,Vt,un){at.setFromMatrixPosition(Vt.matrixWorld),It.setFromMatrixPosition(un.matrixWorld);const Sn=at.distanceTo(It),bn=Vt.projectionMatrix.elements,kn=un.projectionMatrix.elements,qn=bn[14]/(bn[10]-1),pn=bn[14]/(bn[10]+1),il=(bn[9]+1)/bn[5],mt=(bn[9]-1)/bn[5],Ns=(bn[8]-1)/bn[0],Mn=(kn[8]+1)/kn[0],Qn=qn*Ns,Ln=qn*Mn,jl=Sn/(-Ns+Mn),ll=jl*-Ns;Vt.matrixWorld.decompose(Ot.position,Ot.quaternion,Ot.scale),Ot.translateX(ll),Ot.translateZ(jl),Ot.matrixWorld.compose(Ot.position,Ot.quaternion,Ot.scale),Ot.matrixWorldInverse.copy(Ot.matrixWorld).invert();const Ye=qn+jl,_e=pn+jl,Dt=Qn-ll,zt=Ln+(Sn-ll),jt=il*pn/_e*Ye,Gt=mt*pn/_e*Ye;Ot.projectionMatrix.makePerspective(Dt,zt,jt,Gt,Ye,_e),Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert()}function bt(Ot,Vt){Vt===null?Ot.matrixWorld.copy(Ot.matrix):Ot.matrixWorld.multiplyMatrices(Vt.matrixWorld,Ot.matrix),Ot.matrixWorldInverse.copy(Ot.matrixWorld).invert()}this.updateCamera=function(Ot){if(c===null)return;ge.near=je.near=xe.near=Ot.near,ge.far=je.far=xe.far=Ot.far,(Le!==ge.near||ve!==ge.far)&&(c.updateRenderState({depthNear:ge.near,depthFar:ge.far}),Le=ge.near,ve=ge.far);const Vt=Ot.parent,un=ge.cameras;bt(ge,Vt);for(let Sn=0;Sn<un.length;Sn++)bt(un[Sn],Vt);un.length===2?St(ge,xe,je):ge.projectionMatrix.copy(xe.projectionMatrix),Ct(Ot,ge,Vt)};function Ct(Ot,Vt,un){un===null?Ot.matrix.copy(Vt.matrixWorld):(Ot.matrix.copy(un.matrixWorld),Ot.matrix.invert(),Ot.matrix.multiply(Vt.matrixWorld)),Ot.matrix.decompose(Ot.position,Ot.quaternion,Ot.scale),Ot.updateMatrixWorld(!0),Ot.projectionMatrix.copy(Vt.projectionMatrix),Ot.projectionMatrixInverse.copy(Vt.projectionMatrixInverse),Ot.isPerspectiveCamera&&(Ot.fov=VH*2*Math.atan(1/Ot.projectionMatrix.elements[5]),Ot.zoom=1)}this.getCamera=function(){return ge},this.getFoveation=function(){if(!(te===null&&v===null))return G},this.setFoveation=function(Ot){G=Ot,te!==null&&(te.fixedFoveation=Ot),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=Ot)};let Ft=null;function kt(Ot,Vt){if(Z=Vt.getViewerPose(Y||O),he=Vt,Z!==null){const un=Z.views;v!==null&&(l.setRenderTargetFramebuffer(ie,v.framebuffer),l.setRenderTarget(ie));let Sn=!1;un.length!==ge.cameras.length&&(ge.cameras.length=0,Sn=!0);for(let bn=0;bn<un.length;bn++){const kn=un[bn];let qn=null;if(v!==null)qn=v.getViewport(kn);else{const il=ee.getViewSubImage(te,kn);qn=il.viewport,bn===0&&(l.setRenderTargetTextures(ie,il.colorTexture,te.ignoreDepthValues?void 0:il.depthStencilTexture),l.setRenderTarget(ie))}let pn=et[bn];pn===void 0&&(pn=new nE,pn.layers.enable(bn),pn.viewport=new Hc,et[bn]=pn),pn.matrix.fromArray(kn.transform.matrix),pn.matrix.decompose(pn.position,pn.quaternion,pn.scale),pn.projectionMatrix.fromArray(kn.projectionMatrix),pn.projectionMatrixInverse.copy(pn.projectionMatrix).invert(),pn.viewport.set(qn.x,qn.y,qn.width,qn.height),bn===0&&(ge.matrix.copy(pn.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale)),Sn===!0&&ge.cameras.push(pn)}}for(let un=0;un<me.length;un++){const Sn=fe[un],bn=me[un];Sn!==null&&bn!==void 0&&bn.update(Sn,Vt,Y||O)}Ft&&Ft(Ot,Vt),Vt.detectedPlanes&&t.dispatchEvent({type:"planesdetected",data:Vt}),he=null}const rn=new lY;rn.setAnimationLoop(kt),this.setAnimationLoop=function(Ot){Ft=Ot},this.dispose=function(){}}}function MZ(e,l){function n(oe,ie){oe.matrixAutoUpdate===!0&&oe.updateMatrix(),ie.value.copy(oe.matrix)}function t(oe,ie){ie.color.getRGB(oe.fogColor.value,eY(e)),ie.isFog?(oe.fogNear.value=ie.near,oe.fogFar.value=ie.far):ie.isFogExp2&&(oe.fogDensity.value=ie.density)}function c(oe,ie,me,fe,Ne){ie.isMeshBasicMaterial||ie.isMeshLambertMaterial?w(oe,ie):ie.isMeshToonMaterial?(w(oe,ie),ee(oe,ie)):ie.isMeshPhongMaterial?(w(oe,ie),Z(oe,ie)):ie.isMeshStandardMaterial?(w(oe,ie),te(oe,ie),ie.isMeshPhysicalMaterial&&v(oe,ie,Ne)):ie.isMeshMatcapMaterial?(w(oe,ie),he(oe,ie)):ie.isMeshDepthMaterial?w(oe,ie):ie.isMeshDistanceMaterial?(w(oe,ie),Te(oe,ie)):ie.isMeshNormalMaterial?w(oe,ie):ie.isLineBasicMaterial?(O(oe,ie),ie.isLineDashedMaterial&&M(oe,ie)):ie.isPointsMaterial?G(oe,ie,me,fe):ie.isSpriteMaterial?Y(oe,ie):ie.isShadowMaterial?(oe.color.value.copy(ie.color),oe.opacity.value=ie.opacity):ie.isShaderMaterial&&(ie.uniformsNeedUpdate=!1)}function w(oe,ie){oe.opacity.value=ie.opacity,ie.color&&oe.diffuse.value.copy(ie.color),ie.emissive&&oe.emissive.value.copy(ie.emissive).multiplyScalar(ie.emissiveIntensity),ie.map&&(oe.map.value=ie.map,n(ie.map,oe.mapTransform)),ie.alphaMap&&(oe.alphaMap.value=ie.alphaMap,n(ie.alphaMap,oe.alphaMapTransform)),ie.bumpMap&&(oe.bumpMap.value=ie.bumpMap,n(ie.bumpMap,oe.bumpMapTransform),oe.bumpScale.value=ie.bumpScale,ie.side===D3&&(oe.bumpScale.value*=-1)),ie.normalMap&&(oe.normalMap.value=ie.normalMap,n(ie.normalMap,oe.normalMapTransform),oe.normalScale.value.copy(ie.normalScale),ie.side===D3&&oe.normalScale.value.negate()),ie.displacementMap&&(oe.displacementMap.value=ie.displacementMap,n(ie.displacementMap,oe.displacementMapTransform),oe.displacementScale.value=ie.displacementScale,oe.displacementBias.value=ie.displacementBias),ie.emissiveMap&&(oe.emissiveMap.value=ie.emissiveMap,n(ie.emissiveMap,oe.emissiveMapTransform)),ie.specularMap&&(oe.specularMap.value=ie.specularMap,n(ie.specularMap,oe.specularMapTransform)),ie.alphaTest>0&&(oe.alphaTest.value=ie.alphaTest);const me=l.get(ie).envMap;if(me&&(oe.envMap.value=me,oe.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1,oe.reflectivity.value=ie.reflectivity,oe.ior.value=ie.ior,oe.refractionRatio.value=ie.refractionRatio),ie.lightMap){oe.lightMap.value=ie.lightMap;const fe=e._useLegacyLights===!0?Math.PI:1;oe.lightMapIntensity.value=ie.lightMapIntensity*fe,n(ie.lightMap,oe.lightMapTransform)}ie.aoMap&&(oe.aoMap.value=ie.aoMap,oe.aoMapIntensity.value=ie.aoMapIntensity,n(ie.aoMap,oe.aoMapTransform))}function O(oe,ie){oe.diffuse.value.copy(ie.color),oe.opacity.value=ie.opacity,ie.map&&(oe.map.value=ie.map,n(ie.map,oe.mapTransform))}function M(oe,ie){oe.dashSize.value=ie.dashSize,oe.totalSize.value=ie.dashSize+ie.gapSize,oe.scale.value=ie.scale}function G(oe,ie,me,fe){oe.diffuse.value.copy(ie.color),oe.opacity.value=ie.opacity,oe.size.value=ie.size*me,oe.scale.value=fe*.5,ie.map&&(oe.map.value=ie.map,n(ie.map,oe.uvTransform)),ie.alphaMap&&(oe.alphaMap.value=ie.alphaMap,n(ie.alphaMap,oe.alphaMapTransform)),ie.alphaTest>0&&(oe.alphaTest.value=ie.alphaTest)}function Y(oe,ie){oe.diffuse.value.copy(ie.color),oe.opacity.value=ie.opacity,oe.rotation.value=ie.rotation,ie.map&&(oe.map.value=ie.map,n(ie.map,oe.mapTransform)),ie.alphaMap&&(oe.alphaMap.value=ie.alphaMap,n(ie.alphaMap,oe.alphaMapTransform)),ie.alphaTest>0&&(oe.alphaTest.value=ie.alphaTest)}function Z(oe,ie){oe.specular.value.copy(ie.specular),oe.shininess.value=Math.max(ie.shininess,1e-4)}function ee(oe,ie){ie.gradientMap&&(oe.gradientMap.value=ie.gradientMap)}function te(oe,ie){oe.metalness.value=ie.metalness,ie.metalnessMap&&(oe.metalnessMap.value=ie.metalnessMap,n(ie.metalnessMap,oe.metalnessMapTransform)),oe.roughness.value=ie.roughness,ie.roughnessMap&&(oe.roughnessMap.value=ie.roughnessMap,n(ie.roughnessMap,oe.roughnessMapTransform)),l.get(ie).envMap&&(oe.envMapIntensity.value=ie.envMapIntensity)}function v(oe,ie,me){oe.ior.value=ie.ior,ie.sheen>0&&(oe.sheenColor.value.copy(ie.sheenColor).multiplyScalar(ie.sheen),oe.sheenRoughness.value=ie.sheenRoughness,ie.sheenColorMap&&(oe.sheenColorMap.value=ie.sheenColorMap,n(ie.sheenColorMap,oe.sheenColorMapTransform)),ie.sheenRoughnessMap&&(oe.sheenRoughnessMap.value=ie.sheenRoughnessMap,n(ie.sheenRoughnessMap,oe.sheenRoughnessMapTransform))),ie.clearcoat>0&&(oe.clearcoat.value=ie.clearcoat,oe.clearcoatRoughness.value=ie.clearcoatRoughness,ie.clearcoatMap&&(oe.clearcoatMap.value=ie.clearcoatMap,n(ie.clearcoatMap,oe.clearcoatMapTransform)),ie.clearcoatRoughnessMap&&(oe.clearcoatRoughnessMap.value=ie.clearcoatRoughnessMap,n(ie.clearcoatRoughnessMap,oe.clearcoatRoughnessMapTransform)),ie.clearcoatNormalMap&&(oe.clearcoatNormalMap.value=ie.clearcoatNormalMap,n(ie.clearcoatNormalMap,oe.clearcoatNormalMapTransform),oe.clearcoatNormalScale.value.copy(ie.clearcoatNormalScale),ie.side===D3&&oe.clearcoatNormalScale.value.negate())),ie.iridescence>0&&(oe.iridescence.value=ie.iridescence,oe.iridescenceIOR.value=ie.iridescenceIOR,oe.iridescenceThicknessMinimum.value=ie.iridescenceThicknessRange[0],oe.iridescenceThicknessMaximum.value=ie.iridescenceThicknessRange[1],ie.iridescenceMap&&(oe.iridescenceMap.value=ie.iridescenceMap,n(ie.iridescenceMap,oe.iridescenceMapTransform)),ie.iridescenceThicknessMap&&(oe.iridescenceThicknessMap.value=ie.iridescenceThicknessMap,n(ie.iridescenceThicknessMap,oe.iridescenceThicknessMapTransform))),ie.transmission>0&&(oe.transmission.value=ie.transmission,oe.transmissionSamplerMap.value=me.texture,oe.transmissionSamplerSize.value.set(me.width,me.height),ie.transmissionMap&&(oe.transmissionMap.value=ie.transmissionMap,n(ie.transmissionMap,oe.transmissionMapTransform)),oe.thickness.value=ie.thickness,ie.thicknessMap&&(oe.thicknessMap.value=ie.thicknessMap,n(ie.thicknessMap,oe.thicknessMapTransform)),oe.attenuationDistance.value=ie.attenuationDistance,oe.attenuationColor.value.copy(ie.attenuationColor)),ie.anisotropy>0&&(oe.anisotropyVector.value.set(ie.anisotropy*Math.cos(ie.anisotropyRotation),ie.anisotropy*Math.sin(ie.anisotropyRotation)),ie.anisotropyMap&&(oe.anisotropyMap.value=ie.anisotropyMap,n(ie.anisotropyMap,oe.anisotropyMapTransform))),oe.specularIntensity.value=ie.specularIntensity,oe.specularColor.value.copy(ie.specularColor),ie.specularColorMap&&(oe.specularColorMap.value=ie.specularColorMap,n(ie.specularColorMap,oe.specularColorMapTransform)),ie.specularIntensityMap&&(oe.specularIntensityMap.value=ie.specularIntensityMap,n(ie.specularIntensityMap,oe.specularIntensityMapTransform))}function he(oe,ie){ie.matcap&&(oe.matcap.value=ie.matcap)}function Te(oe,ie){const me=l.get(ie).light;oe.referencePosition.value.setFromMatrixPosition(me.matrixWorld),oe.nearDistance.value=me.shadow.camera.near,oe.farDistance.value=me.shadow.camera.far}return{refreshFogUniforms:t,refreshMaterialUniforms:c}}function xZ(e,l,n,t){let c={},w={},O=[];const M=n.isWebGL2?e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS):0;function G(me,fe){const Ne=fe.program;t.uniformBlockBinding(me,Ne)}function Y(me,fe){let Ne=c[me.id];Ne===void 0&&(he(me),Ne=Z(me),c[me.id]=Ne,me.addEventListener("dispose",oe));const We=fe.program;t.updateUBOMapping(me,We);const xe=l.render.frame;w[me.id]!==xe&&(te(me),w[me.id]=xe)}function Z(me){const fe=ee();me.__bindingPointIndex=fe;const Ne=e.createBuffer(),We=me.__size,xe=me.usage;return e.bindBuffer(e.UNIFORM_BUFFER,Ne),e.bufferData(e.UNIFORM_BUFFER,We,xe),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,fe,Ne),Ne}function ee(){for(let me=0;me<M;me++)if(O.indexOf(me)===-1)return O.push(me),me;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function te(me){const fe=c[me.id],Ne=me.uniforms,We=me.__cache;e.bindBuffer(e.UNIFORM_BUFFER,fe);for(let xe=0,je=Ne.length;xe<je;xe++){const et=Array.isArray(Ne[xe])?Ne[xe]:[Ne[xe]];for(let ge=0,Le=et.length;ge<Le;ge++){const ve=et[ge];if(v(ve,xe,ge,We)===!0){const nt=ve.__offset,ht=Array.isArray(ve.value)?ve.value:[ve.value];let Xe=0;for(let at=0;at<ht.length;at++){const It=ht[at],St=Te(It);typeof It=="number"||typeof It=="boolean"?(ve.__data[0]=It,e.bufferSubData(e.UNIFORM_BUFFER,nt+Xe,ve.__data)):It.isMatrix3?(ve.__data[0]=It.elements[0],ve.__data[1]=It.elements[1],ve.__data[2]=It.elements[2],ve.__data[3]=0,ve.__data[4]=It.elements[3],ve.__data[5]=It.elements[4],ve.__data[6]=It.elements[5],ve.__data[7]=0,ve.__data[8]=It.elements[6],ve.__data[9]=It.elements[7],ve.__data[10]=It.elements[8],ve.__data[11]=0):(It.toArray(ve.__data,Xe),Xe+=St.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,nt,ve.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function v(me,fe,Ne,We){const xe=me.value,je=fe+"_"+Ne;if(We[je]===void 0)return typeof xe=="number"||typeof xe=="boolean"?We[je]=xe:We[je]=xe.clone(),!0;{const et=We[je];if(typeof xe=="number"||typeof xe=="boolean"){if(et!==xe)return We[je]=xe,!0}else if(et.equals(xe)===!1)return et.copy(xe),!0}return!1}function he(me){const fe=me.uniforms;let Ne=0;const We=16;for(let je=0,et=fe.length;je<et;je++){const ge=Array.isArray(fe[je])?fe[je]:[fe[je]];for(let Le=0,ve=ge.length;Le<ve;Le++){const nt=ge[Le],ht=Array.isArray(nt.value)?nt.value:[nt.value];for(let Xe=0,at=ht.length;Xe<at;Xe++){const It=ht[Xe],St=Te(It),bt=Ne%We;bt!==0&&We-bt<St.boundary&&(Ne+=We-bt),nt.__data=new Float32Array(St.storage/Float32Array.BYTES_PER_ELEMENT),nt.__offset=Ne,Ne+=St.storage}}}const xe=Ne%We;return xe>0&&(Ne+=We-xe),me.__size=Ne,me.__cache={},this}function Te(me){const fe={boundary:0,storage:0};return typeof me=="number"||typeof me=="boolean"?(fe.boundary=4,fe.storage=4):me.isVector2?(fe.boundary=8,fe.storage=8):me.isVector3||me.isColor?(fe.boundary=16,fe.storage=12):me.isVector4?(fe.boundary=16,fe.storage=16):me.isMatrix3?(fe.boundary=48,fe.storage=48):me.isMatrix4?(fe.boundary=64,fe.storage=64):me.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",me),fe}function oe(me){const fe=me.target;fe.removeEventListener("dispose",oe);const Ne=O.indexOf(fe.__bindingPointIndex);O.splice(Ne,1),e.deleteBuffer(c[fe.id]),delete c[fe.id],delete w[fe.id]}function ie(){for(const me in c)e.deleteBuffer(c[me]);O=[],c={},w={}}return{bind:G,update:Y,dispose:ie}}class HZ{constructor(l={}){const{canvas:n=Pk(),context:t=null,depth:c=!0,stencil:w=!0,alpha:O=!1,antialias:M=!1,premultipliedAlpha:G=!0,preserveDrawingBuffer:Y=!1,powerPreference:Z="default",failIfMajorPerformanceCaveat:ee=!1}=l;this.isWebGLRenderer=!0;let te;t!==null?te=t.getContextAttributes().alpha:te=O;const v=new Uint32Array(4),he=new Int32Array(4);let Te=null,oe=null;const ie=[],me=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kf,this._useLegacyLights=!1,this.toneMapping=MN,this.toneMappingExposure=1;const fe=this;let Ne=!1,We=0,xe=0,je=null,et=-1,ge=null;const Le=new Hc,ve=new Hc;let nt=null;const ht=new ns(0);let Xe=0,at=n.width,It=n.height,St=1,bt=null,Ct=null;const Ft=new Hc(0,0,at,It),kt=new Hc(0,0,at,It);let rn=!1;const Ot=new GV;let Vt=!1,un=!1,Sn=null;const bn=new Ps,kn=new Dl,qn=new lt,pn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function il(){return je===null?St:1}let mt=t;function Ns(ke,ft){for(let Nt=0;Nt<ke.length;Nt++){const ye=ke[Nt],Tt=n.getContext(ye,ft);if(Tt!==null)return Tt}return null}try{const ke={alpha:!0,depth:c,stencil:w,antialias:M,premultipliedAlpha:G,preserveDrawingBuffer:Y,powerPreference:Z,failIfMajorPerformanceCaveat:ee};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${bV}`),n.addEventListener("webglcontextlost",Zt,!1),n.addEventListener("webglcontextrestored",ut,!1),n.addEventListener("webglcontextcreationerror",qt,!1),mt===null){const ft=["webgl2","webgl","experimental-webgl"];if(fe.isWebGL1Renderer===!0&&ft.shift(),mt=Ns(ft,ke),mt===null)throw Ns(ft)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&mt instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),mt.getShaderPrecisionFormat===void 0&&(mt.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(ke){throw console.error("THREE.WebGLRenderer: "+ke.message),ke}let Mn,Qn,Ln,jl,ll,Ye,_e,Dt,zt,jt,Gt,Dn,on,In,Pn,Hn,Ht,Rl,$n,Fn,On,wn,Zn,Ll;function hn(){Mn=new YQ(mt),Qn=new FQ(mt,Mn,l),Mn.init(Qn),wn=new gZ(mt,Mn,Qn),Ln=new LZ(mt,Mn,Qn),jl=new qQ(mt),ll=new fZ,Ye=new OZ(mt,Mn,Ln,ll,Qn,wn,jl),_e=new VQ(fe),Dt=new jQ(fe),zt=new eq(mt,Qn),Zn=new BQ(mt,Mn,zt,Qn),jt=new zQ(mt,zt,jl,Zn),Gt=new ZQ(mt,jt,zt,jl),$n=new $Q(mt,Qn,Ye),Hn=new GQ(ll),Dn=new hZ(fe,_e,Dt,Mn,Qn,Zn,Hn),on=new MZ(fe,ll),In=new dZ,Pn=new pZ(Mn,Qn),Rl=new HQ(fe,_e,Dt,Ln,Gt,te,G),Ht=new SZ(fe,Gt,Qn),Ll=new xZ(mt,jl,Qn,Ln),Fn=new UQ(mt,Mn,jl,Qn),On=new kQ(mt,Mn,jl,Qn),jl.programs=Dn.programs,fe.capabilities=Qn,fe.extensions=Mn,fe.properties=ll,fe.renderLists=In,fe.shadowMap=Ht,fe.state=Ln,fe.info=jl}hn();const yn=new bZ(fe,mt);this.xr=yn,this.getContext=function(){return mt},this.getContextAttributes=function(){return mt.getContextAttributes()},this.forceContextLoss=function(){const ke=Mn.get("WEBGL_lose_context");ke&&ke.loseContext()},this.forceContextRestore=function(){const ke=Mn.get("WEBGL_lose_context");ke&&ke.restoreContext()},this.getPixelRatio=function(){return St},this.setPixelRatio=function(ke){ke!==void 0&&(St=ke,this.setSize(at,It,!1))},this.getSize=function(ke){return ke.set(at,It)},this.setSize=function(ke,ft,Nt=!0){if(yn.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}at=ke,It=ft,n.width=Math.floor(ke*St),n.height=Math.floor(ft*St),Nt===!0&&(n.style.width=ke+"px",n.style.height=ft+"px"),this.setViewport(0,0,ke,ft)},this.getDrawingBufferSize=function(ke){return ke.set(at*St,It*St).floor()},this.setDrawingBufferSize=function(ke,ft,Nt){at=ke,It=ft,St=Nt,n.width=Math.floor(ke*Nt),n.height=Math.floor(ft*Nt),this.setViewport(0,0,ke,ft)},this.getCurrentViewport=function(ke){return ke.copy(Le)},this.getViewport=function(ke){return ke.copy(Ft)},this.setViewport=function(ke,ft,Nt,ye){ke.isVector4?Ft.set(ke.x,ke.y,ke.z,ke.w):Ft.set(ke,ft,Nt,ye),Ln.viewport(Le.copy(Ft).multiplyScalar(St).floor())},this.getScissor=function(ke){return ke.copy(kt)},this.setScissor=function(ke,ft,Nt,ye){ke.isVector4?kt.set(ke.x,ke.y,ke.z,ke.w):kt.set(ke,ft,Nt,ye),Ln.scissor(ve.copy(kt).multiplyScalar(St).floor())},this.getScissorTest=function(){return rn},this.setScissorTest=function(ke){Ln.setScissorTest(rn=ke)},this.setOpaqueSort=function(ke){bt=ke},this.setTransparentSort=function(ke){Ct=ke},this.getClearColor=function(ke){return ke.copy(Rl.getClearColor())},this.setClearColor=function(){Rl.setClearColor.apply(Rl,arguments)},this.getClearAlpha=function(){return Rl.getClearAlpha()},this.setClearAlpha=function(){Rl.setClearAlpha.apply(Rl,arguments)},this.clear=function(ke=!0,ft=!0,Nt=!0){let ye=0;if(ke){let Tt=!1;if(je!==null){const an=je.texture.format;Tt=an===jj||an===Wj||an===_j}if(Tt){const an=je.texture.type,mn=an===xN||an===SN||an===xV||an===j8||an===Gj||an===Vj,Un=Rl.getClearColor(),Vn=Rl.getClearAlpha(),el=Un.r,Qt=Un.g,Jn=Un.b;mn?(v[0]=el,v[1]=Qt,v[2]=Jn,v[3]=Vn,mt.clearBufferuiv(mt.COLOR,0,v)):(he[0]=el,he[1]=Qt,he[2]=Jn,he[3]=Vn,mt.clearBufferiv(mt.COLOR,0,he))}else ye|=mt.COLOR_BUFFER_BIT}ft&&(ye|=mt.DEPTH_BUFFER_BIT),Nt&&(ye|=mt.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),mt.clear(ye)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Zt,!1),n.removeEventListener("webglcontextrestored",ut,!1),n.removeEventListener("webglcontextcreationerror",qt,!1),In.dispose(),Pn.dispose(),ll.dispose(),_e.dispose(),Dt.dispose(),Gt.dispose(),Zn.dispose(),Ll.dispose(),Dn.dispose(),yn.dispose(),yn.removeEventListener("sessionstart",ls),yn.removeEventListener("sessionend",Ol),Sn&&(Sn.dispose(),Sn=null),ds.stop()};function Zt(ke){ke.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),Ne=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),Ne=!1;const ke=jl.autoReset,ft=Ht.enabled,Nt=Ht.autoUpdate,ye=Ht.needsUpdate,Tt=Ht.type;hn(),jl.autoReset=ke,Ht.enabled=ft,Ht.autoUpdate=Nt,Ht.needsUpdate=ye,Ht.type=Tt}function qt(ke){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",ke.statusMessage)}function vt(ke){const ft=ke.target;ft.removeEventListener("dispose",vt),en(ft)}function en(ke){Bn(ke),ll.remove(ke)}function Bn(ke){const ft=ll.get(ke).programs;ft!==void 0&&(ft.forEach(function(Nt){Dn.releaseProgram(Nt)}),ke.isShaderMaterial&&Dn.releaseShaderCache(ke))}this.renderBufferDirect=function(ke,ft,Nt,ye,Tt,an){ft===null&&(ft=pn);const mn=Tt.isMesh&&Tt.matrixWorld.determinant()<0,Un=L0(ke,ft,Nt,ye,Tt);Ln.setMaterial(ye,mn);let Vn=Nt.index,el=1;if(ye.wireframe===!0){if(Vn=jt.getWireframeAttribute(Nt),Vn===void 0)return;el=2}const Qt=Nt.drawRange,Jn=Nt.attributes.position;let Ml=Qt.start*el,fu=(Qt.start+Qt.count)*el;an!==null&&(Ml=Math.max(Ml,an.start*el),fu=Math.min(fu,(an.start+an.count)*el)),Vn!==null?(Ml=Math.max(Ml,0),fu=Math.min(fu,Vn.count)):Jn!=null&&(Ml=Math.max(Ml,0),fu=Math.min(fu,Jn.count));const As=fu-Ml;if(As<0||As===1/0)return;Zn.setup(Tt,ye,Un,Nt,Vn);let Su,$l=Fn;if(Vn!==null&&(Su=zt.get(Vn),$l=On,$l.setIndex(Su)),Tt.isMesh)ye.wireframe===!0?(Ln.setLineWidth(ye.wireframeLinewidth*il()),$l.setMode(mt.LINES)):$l.setMode(mt.TRIANGLES);else if(Tt.isLine){let sl=ye.linewidth;sl===void 0&&(sl=1),Ln.setLineWidth(sl*il()),Tt.isLineSegments?$l.setMode(mt.LINES):Tt.isLineLoop?$l.setMode(mt.LINE_LOOP):$l.setMode(mt.LINE_STRIP)}else Tt.isPoints?$l.setMode(mt.POINTS):Tt.isSprite&&$l.setMode(mt.TRIANGLES);if(Tt.isBatchedMesh)$l.renderMultiDraw(Tt._multiDrawStarts,Tt._multiDrawCounts,Tt._multiDrawCount);else if(Tt.isInstancedMesh)$l.renderInstances(Ml,As,Tt.count);else if(Nt.isInstancedBufferGeometry){const sl=Nt._maxInstanceCount!==void 0?Nt._maxInstanceCount:1/0,S3=Math.min(Nt.instanceCount,sl);$l.renderInstances(Ml,As,S3)}else $l.render(Ml,As)};function En(ke,ft,Nt){ke.transparent===!0&&ke.side===eR&&ke.forceSinglePass===!1?(ke.side=D3,ke.needsUpdate=!0,ui(ke,ft,Nt),ke.side=ip,ke.needsUpdate=!0,ui(ke,ft,Nt),ke.side=eR):ui(ke,ft,Nt)}this.compile=function(ke,ft,Nt=null){Nt===null&&(Nt=ke),oe=Pn.get(Nt),oe.init(),me.push(oe),Nt.traverseVisible(function(Tt){Tt.isLight&&Tt.layers.test(ft.layers)&&(oe.pushLight(Tt),Tt.castShadow&&oe.pushShadow(Tt))}),ke!==Nt&&ke.traverseVisible(function(Tt){Tt.isLight&&Tt.layers.test(ft.layers)&&(oe.pushLight(Tt),Tt.castShadow&&oe.pushShadow(Tt))}),oe.setupLights(fe._useLegacyLights);const ye=new Set;return ke.traverse(function(Tt){const an=Tt.material;if(an)if(Array.isArray(an))for(let mn=0;mn<an.length;mn++){const Un=an[mn];En(Un,Nt,Tt),ye.add(Un)}else En(an,Nt,Tt),ye.add(an)}),me.pop(),oe=null,ye},this.compileAsync=function(ke,ft,Nt=null){const ye=this.compile(ke,ft,Nt);return new Promise(Tt=>{function an(){if(ye.forEach(function(mn){ll.get(mn).currentProgram.isReady()&&ye.delete(mn)}),ye.size===0){Tt(ke);return}setTimeout(an,10)}Mn.get("KHR_parallel_shader_compile")!==null?an():setTimeout(an,10)})};let Yl=null;function bs(ke){Yl&&Yl(ke)}function ls(){ds.stop()}function Ol(){ds.start()}const ds=new lY;ds.setAnimationLoop(bs),typeof self<"u"&&ds.setContext(self),this.setAnimationLoop=function(ke){Yl=ke,yn.setAnimationLoop(ke),ke===null?ds.stop():ds.start()},yn.addEventListener("sessionstart",ls),yn.addEventListener("sessionend",Ol),this.render=function(ke,ft){if(ft!==void 0&&ft.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Ne===!0)return;ke.matrixWorldAutoUpdate===!0&&ke.updateMatrixWorld(),ft.parent===null&&ft.matrixWorldAutoUpdate===!0&&ft.updateMatrixWorld(),yn.enabled===!0&&yn.isPresenting===!0&&(yn.cameraAutoUpdate===!0&&yn.updateCamera(ft),ft=yn.getCamera()),ke.isScene===!0&&ke.onBeforeRender(fe,ke,ft,je),oe=Pn.get(ke,me.length),oe.init(),me.push(oe),bn.multiplyMatrices(ft.projectionMatrix,ft.matrixWorldInverse),Ot.setFromProjectionMatrix(bn),un=this.localClippingEnabled,Vt=Hn.init(this.clippingPlanes,un),Te=In.get(ke,ie.length),Te.init(),ie.push(Te),Au(ke,ft,0,fe.sortObjects),Te.finish(),fe.sortObjects===!0&&Te.sort(bt,Ct),this.info.render.frame++,Vt===!0&&Hn.beginShadows();const Nt=oe.state.shadowsArray;if(Ht.render(Nt,ke,ft),Vt===!0&&Hn.endShadows(),this.info.autoReset===!0&&this.info.reset(),Rl.render(Te,ke),oe.setupLights(fe._useLegacyLights),ft.isArrayCamera){const ye=ft.cameras;for(let Tt=0,an=ye.length;Tt<an;Tt++){const mn=ye[Tt];fd(Te,ke,mn,mn.viewport)}}else fd(Te,ke,ft);je!==null&&(Ye.updateMultisampleRenderTarget(je),Ye.updateRenderTargetMipmap(je)),ke.isScene===!0&&ke.onAfterRender(fe,ke,ft),Zn.resetDefaultState(),et=-1,ge=null,me.pop(),me.length>0?oe=me[me.length-1]:oe=null,ie.pop(),ie.length>0?Te=ie[ie.length-1]:Te=null};function Au(ke,ft,Nt,ye){if(ke.visible===!1)return;if(ke.layers.test(ft.layers)){if(ke.isGroup)Nt=ke.renderOrder;else if(ke.isLOD)ke.autoUpdate===!0&&ke.update(ft);else if(ke.isLight)oe.pushLight(ke),ke.castShadow&&oe.pushShadow(ke);else if(ke.isSprite){if(!ke.frustumCulled||Ot.intersectsSprite(ke)){ye&&qn.setFromMatrixPosition(ke.matrixWorld).applyMatrix4(bn);const mn=Gt.update(ke),Un=ke.material;Un.visible&&Te.push(ke,mn,Un,Nt,qn.z,null)}}else if((ke.isMesh||ke.isLine||ke.isPoints)&&(!ke.frustumCulled||Ot.intersectsObject(ke))){const mn=Gt.update(ke),Un=ke.material;if(ye&&(ke.boundingSphere!==void 0?(ke.boundingSphere===null&&ke.computeBoundingSphere(),qn.copy(ke.boundingSphere.center)):(mn.boundingSphere===null&&mn.computeBoundingSphere(),qn.copy(mn.boundingSphere.center)),qn.applyMatrix4(ke.matrixWorld).applyMatrix4(bn)),Array.isArray(Un)){const Vn=mn.groups;for(let el=0,Qt=Vn.length;el<Qt;el++){const Jn=Vn[el],Ml=Un[Jn.materialIndex];Ml&&Ml.visible&&Te.push(ke,mn,Ml,Nt,qn.z,Jn)}}else Un.visible&&Te.push(ke,mn,Un,Nt,qn.z,null)}}const an=ke.children;for(let mn=0,Un=an.length;mn<Un;mn++)Au(an[mn],ft,Nt,ye)}function fd(ke,ft,Nt,ye){const Tt=ke.opaque,an=ke.transmissive,mn=ke.transparent;oe.setupLightsView(Nt),Vt===!0&&Hn.setGlobalState(fe.clippingPlanes,Nt),an.length>0&&A3(Tt,an,ft,Nt),ye&&Ln.viewport(Le.copy(ye)),Tt.length>0&&nc(Tt,ft,Nt),an.length>0&&nc(an,ft,Nt),mn.length>0&&nc(mn,ft,Nt),Ln.buffers.depth.setTest(!0),Ln.buffers.depth.setMask(!0),Ln.buffers.color.setMask(!0),Ln.setPolygonOffset(!1)}function A3(ke,ft,Nt,ye){if((Nt.isScene===!0?Nt.overrideMaterial:null)!==null)return;const an=Qn.isWebGL2;Sn===null&&(Sn=new UN(1,1,{generateMipmaps:!0,type:Mn.has("EXT_color_buffer_half_float")?GH:xN,minFilter:FH,samples:an?4:0})),fe.getDrawingBufferSize(kn),an?Sn.setSize(kn.x,kn.y):Sn.setSize(JU(kn.x),JU(kn.y));const mn=fe.getRenderTarget();fe.setRenderTarget(Sn),fe.getClearColor(ht),Xe=fe.getClearAlpha(),Xe<1&&fe.setClearColor(16777215,.5),fe.clear();const Un=fe.toneMapping;fe.toneMapping=MN,nc(ke,Nt,ye),Ye.updateMultisampleRenderTarget(Sn),Ye.updateRenderTargetMipmap(Sn);let Vn=!1;for(let el=0,Qt=ft.length;el<Qt;el++){const Jn=ft[el],Ml=Jn.object,fu=Jn.geometry,As=Jn.material,Su=Jn.group;if(As.side===eR&&Ml.layers.test(ye.layers)){const $l=As.side;As.side=D3,As.needsUpdate=!0,A0(Ml,Nt,ye,fu,As,Su),As.side=$l,As.needsUpdate=!0,Vn=!0}}Vn===!0&&(Ye.updateMultisampleRenderTarget(Sn),Ye.updateRenderTargetMipmap(Sn)),fe.setRenderTarget(mn),fe.setClearColor(ht,Xe),fe.toneMapping=Un}function nc(ke,ft,Nt){const ye=ft.isScene===!0?ft.overrideMaterial:null;for(let Tt=0,an=ke.length;Tt<an;Tt++){const mn=ke[Tt],Un=mn.object,Vn=mn.geometry,el=ye===null?mn.material:ye,Qt=mn.group;Un.layers.test(Nt.layers)&&A0(Un,ft,Nt,Vn,el,Qt)}}function A0(ke,ft,Nt,ye,Tt,an){ke.onBeforeRender(fe,ft,Nt,ye,Tt,an),ke.modelViewMatrix.multiplyMatrices(Nt.matrixWorldInverse,ke.matrixWorld),ke.normalMatrix.getNormalMatrix(ke.modelViewMatrix),Tt.onBeforeRender(fe,ft,Nt,ye,ke,an),Tt.transparent===!0&&Tt.side===eR&&Tt.forceSinglePass===!1?(Tt.side=D3,Tt.needsUpdate=!0,fe.renderBufferDirect(Nt,ft,ye,Tt,ke,an),Tt.side=ip,Tt.needsUpdate=!0,fe.renderBufferDirect(Nt,ft,ye,Tt,ke,an),Tt.side=eR):fe.renderBufferDirect(Nt,ft,ye,Tt,ke,an),ke.onAfterRender(fe,ft,Nt,ye,Tt,an)}function ui(ke,ft,Nt){ft.isScene!==!0&&(ft=pn);const ye=ll.get(ke),Tt=oe.state.lights,an=oe.state.shadowsArray,mn=Tt.state.version,Un=Dn.getParameters(ke,Tt.state,an,ft,Nt),Vn=Dn.getProgramCacheKey(Un);let el=ye.programs;ye.environment=ke.isMeshStandardMaterial?ft.environment:null,ye.fog=ft.fog,ye.envMap=(ke.isMeshStandardMaterial?Dt:_e).get(ke.envMap||ye.environment),el===void 0&&(ke.addEventListener("dispose",vt),el=new Map,ye.programs=el);let Qt=el.get(Vn);if(Qt!==void 0){if(ye.currentProgram===Qt&&ye.lightsStateVersion===mn)return Gn(ke,Un),Qt}else Un.uniforms=Dn.getUniforms(ke),ke.onBuild(Nt,Un,fe),ke.onBeforeCompile(Un,fe),Qt=Dn.acquireProgram(Un,Vn),el.set(Vn,Qt),ye.uniforms=Un.uniforms;const Jn=ye.uniforms;return(!ke.isShaderMaterial&&!ke.isRawShaderMaterial||ke.clipping===!0)&&(Jn.clippingPlanes=Hn.uniform),Gn(ke,Un),ye.needsLights=b2(ke),ye.lightsStateVersion=mn,ye.needsLights&&(Jn.ambientLightColor.value=Tt.state.ambient,Jn.lightProbe.value=Tt.state.probe,Jn.directionalLights.value=Tt.state.directional,Jn.directionalLightShadows.value=Tt.state.directionalShadow,Jn.spotLights.value=Tt.state.spot,Jn.spotLightShadows.value=Tt.state.spotShadow,Jn.rectAreaLights.value=Tt.state.rectArea,Jn.ltc_1.value=Tt.state.rectAreaLTC1,Jn.ltc_2.value=Tt.state.rectAreaLTC2,Jn.pointLights.value=Tt.state.point,Jn.pointLightShadows.value=Tt.state.pointShadow,Jn.hemisphereLights.value=Tt.state.hemi,Jn.directionalShadowMap.value=Tt.state.directionalShadowMap,Jn.directionalShadowMatrix.value=Tt.state.directionalShadowMatrix,Jn.spotShadowMap.value=Tt.state.spotShadowMap,Jn.spotLightMatrix.value=Tt.state.spotLightMatrix,Jn.spotLightMap.value=Tt.state.spotLightMap,Jn.pointShadowMap.value=Tt.state.pointShadowMap,Jn.pointShadowMatrix.value=Tt.state.pointShadowMatrix),ye.currentProgram=Qt,ye.uniformsList=null,Qt}function S0(ke){if(ke.uniformsList===null){const ft=ke.currentProgram.getUniforms();ke.uniformsList=fU.seqWithValue(ft.seq,ke.uniforms)}return ke.uniformsList}function Gn(ke,ft){const Nt=ll.get(ke);Nt.outputColorSpace=ft.outputColorSpace,Nt.batching=ft.batching,Nt.instancing=ft.instancing,Nt.instancingColor=ft.instancingColor,Nt.skinning=ft.skinning,Nt.morphTargets=ft.morphTargets,Nt.morphNormals=ft.morphNormals,Nt.morphColors=ft.morphColors,Nt.morphTargetsCount=ft.morphTargetsCount,Nt.numClippingPlanes=ft.numClippingPlanes,Nt.numIntersection=ft.numClipIntersection,Nt.vertexAlphas=ft.vertexAlphas,Nt.vertexTangents=ft.vertexTangents,Nt.toneMapping=ft.toneMapping}function L0(ke,ft,Nt,ye,Tt){ft.isScene!==!0&&(ft=pn),Ye.resetTextureUnits();const an=ft.fog,mn=ye.isMeshStandardMaterial?ft.environment:null,Un=je===null?fe.outputColorSpace:je.isXRRenderTarget===!0?je.texture.colorSpace:Q7,Vn=(ye.isMeshStandardMaterial?Dt:_e).get(ye.envMap||mn),el=ye.vertexColors===!0&&!!Nt.attributes.color&&Nt.attributes.color.itemSize===4,Qt=!!Nt.attributes.tangent&&(!!ye.normalMap||ye.anisotropy>0),Jn=!!Nt.morphAttributes.position,Ml=!!Nt.morphAttributes.normal,fu=!!Nt.morphAttributes.color;let As=MN;ye.toneMapped&&(je===null||je.isXRRenderTarget===!0)&&(As=fe.toneMapping);const Su=Nt.morphAttributes.position||Nt.morphAttributes.normal||Nt.morphAttributes.color,$l=Su!==void 0?Su.length:0,sl=ll.get(ye),S3=oe.state.lights;if(Vt===!0&&(un===!0||ke!==ge)){const Ms=ke===ge&&ye.id===et;Hn.setState(ye,ke,Ms)}let Zl=!1;ye.version===sl.__version?(sl.needsLights&&sl.lightsStateVersion!==S3.state.version||sl.outputColorSpace!==Un||Tt.isBatchedMesh&&sl.batching===!1||!Tt.isBatchedMesh&&sl.batching===!0||Tt.isInstancedMesh&&sl.instancing===!1||!Tt.isInstancedMesh&&sl.instancing===!0||Tt.isSkinnedMesh&&sl.skinning===!1||!Tt.isSkinnedMesh&&sl.skinning===!0||Tt.isInstancedMesh&&sl.instancingColor===!0&&Tt.instanceColor===null||Tt.isInstancedMesh&&sl.instancingColor===!1&&Tt.instanceColor!==null||sl.envMap!==Vn||ye.fog===!0&&sl.fog!==an||sl.numClippingPlanes!==void 0&&(sl.numClippingPlanes!==Hn.numPlanes||sl.numIntersection!==Hn.numIntersection)||sl.vertexAlphas!==el||sl.vertexTangents!==Qt||sl.morphTargets!==Jn||sl.morphNormals!==Ml||sl.morphColors!==fu||sl.toneMapping!==As||Qn.isWebGL2===!0&&sl.morphTargetsCount!==$l)&&(Zl=!0):(Zl=!0,sl.__version=ye.version);let Lu=sl.currentProgram;Zl===!0&&(Lu=ui(ye,ft,Tt));let L3=!1,Fc=!1,dd=!1;const Ss=Lu.getUniforms(),$u=sl.uniforms;if(Ln.useProgram(Lu.program)&&(L3=!0,Fc=!0,dd=!0),ye.id!==et&&(et=ye.id,Fc=!0),L3||ge!==ke){Ss.setValue(mt,"projectionMatrix",ke.projectionMatrix),Ss.setValue(mt,"viewMatrix",ke.matrixWorldInverse);const Ms=Ss.map.cameraPosition;Ms!==void 0&&Ms.setValue(mt,qn.setFromMatrixPosition(ke.matrixWorld)),Qn.logarithmicDepthBuffer&&Ss.setValue(mt,"logDepthBufFC",2/(Math.log(ke.far+1)/Math.LN2)),(ye.isMeshPhongMaterial||ye.isMeshToonMaterial||ye.isMeshLambertMaterial||ye.isMeshBasicMaterial||ye.isMeshStandardMaterial||ye.isShaderMaterial)&&Ss.setValue(mt,"isOrthographic",ke.isOrthographicCamera===!0),ge!==ke&&(ge=ke,Fc=!0,dd=!0)}if(Tt.isSkinnedMesh){Ss.setOptional(mt,Tt,"bindMatrix"),Ss.setOptional(mt,Tt,"bindMatrixInverse");const Ms=Tt.skeleton;Ms&&(Qn.floatVertexTextures?(Ms.boneTexture===null&&Ms.computeBoneTexture(),Ss.setValue(mt,"boneTexture",Ms.boneTexture,Ye)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Tt.isBatchedMesh&&(Ss.setOptional(mt,Tt,"batchingTexture"),Ss.setValue(mt,"batchingTexture",Tt._matricesTexture,Ye));const ai=Nt.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0&&Qn.isWebGL2===!0)&&$n.update(Tt,Nt,Lu),(Fc||sl.receiveShadow!==Tt.receiveShadow)&&(sl.receiveShadow=Tt.receiveShadow,Ss.setValue(mt,"receiveShadow",Tt.receiveShadow)),ye.isMeshGouraudMaterial&&ye.envMap!==null&&($u.envMap.value=Vn,$u.flipEnvMap.value=Vn.isCubeTexture&&Vn.isRenderTargetTexture===!1?-1:1),Fc&&(Ss.setValue(mt,"toneMappingExposure",fe.toneMappingExposure),sl.needsLights&&Id($u,dd),an&&ye.fog===!0&&on.refreshFogUniforms($u,an),on.refreshMaterialUniforms($u,ye,St,It,Sn),fU.upload(mt,S0(sl),$u,Ye)),ye.isShaderMaterial&&ye.uniformsNeedUpdate===!0&&(fU.upload(mt,S0(sl),$u,Ye),ye.uniformsNeedUpdate=!1),ye.isSpriteMaterial&&Ss.setValue(mt,"center",Tt.center),Ss.setValue(mt,"modelViewMatrix",Tt.modelViewMatrix),Ss.setValue(mt,"normalMatrix",Tt.normalMatrix),Ss.setValue(mt,"modelMatrix",Tt.matrixWorld),ye.isShaderMaterial||ye.isRawShaderMaterial){const Ms=ye.uniformsGroups;for(let xs=0,Gc=Ms.length;xs<Gc;xs++)if(Qn.isWebGL2){const yd=Ms[xs];Ll.update(yd,Lu),Ll.bind(yd,Lu)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Lu}function Id(ke,ft){ke.ambientLightColor.needsUpdate=ft,ke.lightProbe.needsUpdate=ft,ke.directionalLights.needsUpdate=ft,ke.directionalLightShadows.needsUpdate=ft,ke.pointLights.needsUpdate=ft,ke.pointLightShadows.needsUpdate=ft,ke.spotLights.needsUpdate=ft,ke.spotLightShadows.needsUpdate=ft,ke.rectAreaLights.needsUpdate=ft,ke.hemisphereLights.needsUpdate=ft}function b2(ke){return ke.isMeshLambertMaterial||ke.isMeshToonMaterial||ke.isMeshPhongMaterial||ke.isMeshStandardMaterial||ke.isShadowMaterial||ke.isShaderMaterial&&ke.lights===!0}this.getActiveCubeFace=function(){return We},this.getActiveMipmapLevel=function(){return xe},this.getRenderTarget=function(){return je},this.setRenderTargetTextures=function(ke,ft,Nt){ll.get(ke.texture).__webglTexture=ft,ll.get(ke.depthTexture).__webglTexture=Nt;const ye=ll.get(ke);ye.__hasExternalTextures=!0,ye.__hasExternalTextures&&(ye.__autoAllocateDepthBuffer=Nt===void 0,ye.__autoAllocateDepthBuffer||Mn.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ye.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(ke,ft){const Nt=ll.get(ke);Nt.__webglFramebuffer=ft,Nt.__useDefaultFramebuffer=ft===void 0},this.setRenderTarget=function(ke,ft=0,Nt=0){je=ke,We=ft,xe=Nt;let ye=!0,Tt=null,an=!1,mn=!1;if(ke){const Vn=ll.get(ke);Vn.__useDefaultFramebuffer!==void 0?(Ln.bindFramebuffer(mt.FRAMEBUFFER,null),ye=!1):Vn.__webglFramebuffer===void 0?Ye.setupRenderTarget(ke):Vn.__hasExternalTextures&&Ye.rebindTextures(ke,ll.get(ke.texture).__webglTexture,ll.get(ke.depthTexture).__webglTexture);const el=ke.texture;(el.isData3DTexture||el.isDataArrayTexture||el.isCompressedArrayTexture)&&(mn=!0);const Qt=ll.get(ke).__webglFramebuffer;ke.isWebGLCubeRenderTarget?(Array.isArray(Qt[ft])?Tt=Qt[ft][Nt]:Tt=Qt[ft],an=!0):Qn.isWebGL2&&ke.samples>0&&Ye.useMultisampledRTT(ke)===!1?Tt=ll.get(ke).__webglMultisampledFramebuffer:Array.isArray(Qt)?Tt=Qt[Nt]:Tt=Qt,Le.copy(ke.viewport),ve.copy(ke.scissor),nt=ke.scissorTest}else Le.copy(Ft).multiplyScalar(St).floor(),ve.copy(kt).multiplyScalar(St).floor(),nt=rn;if(Ln.bindFramebuffer(mt.FRAMEBUFFER,Tt)&&Qn.drawBuffers&&ye&&Ln.drawBuffers(ke,Tt),Ln.viewport(Le),Ln.scissor(ve),Ln.setScissorTest(nt),an){const Vn=ll.get(ke.texture);mt.framebufferTexture2D(mt.FRAMEBUFFER,mt.COLOR_ATTACHMENT0,mt.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Vn.__webglTexture,Nt)}else if(mn){const Vn=ll.get(ke.texture),el=ft||0;mt.framebufferTextureLayer(mt.FRAMEBUFFER,mt.COLOR_ATTACHMENT0,Vn.__webglTexture,Nt||0,el)}et=-1},this.readRenderTargetPixels=function(ke,ft,Nt,ye,Tt,an,mn){if(!(ke&&ke.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Un=ll.get(ke).__webglFramebuffer;if(ke.isWebGLCubeRenderTarget&&mn!==void 0&&(Un=Un[mn]),Un){Ln.bindFramebuffer(mt.FRAMEBUFFER,Un);try{const Vn=ke.texture,el=Vn.format,Qt=Vn.type;if(el!==sE&&wn.convert(el)!==mt.getParameter(mt.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Jn=Qt===GH&&(Mn.has("EXT_color_buffer_half_float")||Qn.isWebGL2&&Mn.has("EXT_color_buffer_float"));if(Qt!==xN&&wn.convert(Qt)!==mt.getParameter(mt.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Qt===LN&&(Qn.isWebGL2||Mn.has("OES_texture_float")||Mn.has("WEBGL_color_buffer_float")))&&!Jn){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ft>=0&&ft<=ke.width-ye&&Nt>=0&&Nt<=ke.height-Tt&&mt.readPixels(ft,Nt,ye,Tt,wn.convert(el),wn.convert(Qt),an)}finally{const Vn=je!==null?ll.get(je).__webglFramebuffer:null;Ln.bindFramebuffer(mt.FRAMEBUFFER,Vn)}}},this.copyFramebufferToTexture=function(ke,ft,Nt=0){const ye=Math.pow(2,-Nt),Tt=Math.floor(ft.image.width*ye),an=Math.floor(ft.image.height*ye);Ye.setTexture2D(ft,0),mt.copyTexSubImage2D(mt.TEXTURE_2D,Nt,0,0,ke.x,ke.y,Tt,an),Ln.unbindTexture()},this.copyTextureToTexture=function(ke,ft,Nt,ye=0){const Tt=ft.image.width,an=ft.image.height,mn=wn.convert(Nt.format),Un=wn.convert(Nt.type);Ye.setTexture2D(Nt,0),mt.pixelStorei(mt.UNPACK_FLIP_Y_WEBGL,Nt.flipY),mt.pixelStorei(mt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Nt.premultiplyAlpha),mt.pixelStorei(mt.UNPACK_ALIGNMENT,Nt.unpackAlignment),ft.isDataTexture?mt.texSubImage2D(mt.TEXTURE_2D,ye,ke.x,ke.y,Tt,an,mn,Un,ft.image.data):ft.isCompressedTexture?mt.compressedTexSubImage2D(mt.TEXTURE_2D,ye,ke.x,ke.y,ft.mipmaps[0].width,ft.mipmaps[0].height,mn,ft.mipmaps[0].data):mt.texSubImage2D(mt.TEXTURE_2D,ye,ke.x,ke.y,mn,Un,ft.image),ye===0&&Nt.generateMipmaps&&mt.generateMipmap(mt.TEXTURE_2D),Ln.unbindTexture()},this.copyTextureToTexture3D=function(ke,ft,Nt,ye,Tt=0){if(fe.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const an=ke.max.x-ke.min.x+1,mn=ke.max.y-ke.min.y+1,Un=ke.max.z-ke.min.z+1,Vn=wn.convert(ye.format),el=wn.convert(ye.type);let Qt;if(ye.isData3DTexture)Ye.setTexture3D(ye,0),Qt=mt.TEXTURE_3D;else if(ye.isDataArrayTexture||ye.isCompressedArrayTexture)Ye.setTexture2DArray(ye,0),Qt=mt.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}mt.pixelStorei(mt.UNPACK_FLIP_Y_WEBGL,ye.flipY),mt.pixelStorei(mt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ye.premultiplyAlpha),mt.pixelStorei(mt.UNPACK_ALIGNMENT,ye.unpackAlignment);const Jn=mt.getParameter(mt.UNPACK_ROW_LENGTH),Ml=mt.getParameter(mt.UNPACK_IMAGE_HEIGHT),fu=mt.getParameter(mt.UNPACK_SKIP_PIXELS),As=mt.getParameter(mt.UNPACK_SKIP_ROWS),Su=mt.getParameter(mt.UNPACK_SKIP_IMAGES),$l=Nt.isCompressedTexture?Nt.mipmaps[Tt]:Nt.image;mt.pixelStorei(mt.UNPACK_ROW_LENGTH,$l.width),mt.pixelStorei(mt.UNPACK_IMAGE_HEIGHT,$l.height),mt.pixelStorei(mt.UNPACK_SKIP_PIXELS,ke.min.x),mt.pixelStorei(mt.UNPACK_SKIP_ROWS,ke.min.y),mt.pixelStorei(mt.UNPACK_SKIP_IMAGES,ke.min.z),Nt.isDataTexture||Nt.isData3DTexture?mt.texSubImage3D(Qt,Tt,ft.x,ft.y,ft.z,an,mn,Un,Vn,el,$l.data):Nt.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),mt.compressedTexSubImage3D(Qt,Tt,ft.x,ft.y,ft.z,an,mn,Un,Vn,$l.data)):mt.texSubImage3D(Qt,Tt,ft.x,ft.y,ft.z,an,mn,Un,Vn,el,$l),mt.pixelStorei(mt.UNPACK_ROW_LENGTH,Jn),mt.pixelStorei(mt.UNPACK_IMAGE_HEIGHT,Ml),mt.pixelStorei(mt.UNPACK_SKIP_PIXELS,fu),mt.pixelStorei(mt.UNPACK_SKIP_ROWS,As),mt.pixelStorei(mt.UNPACK_SKIP_IMAGES,Su),Tt===0&&ye.generateMipmaps&&mt.generateMipmap(Qt),Ln.unbindTexture()},this.initTexture=function(ke){ke.isCubeTexture?Ye.setTextureCube(ke,0):ke.isData3DTexture?Ye.setTexture3D(ke,0):ke.isDataArrayTexture||ke.isCompressedArrayTexture?Ye.setTexture2DArray(ke,0):Ye.setTexture2D(ke,0),Ln.unbindTexture()},this.resetState=function(){We=0,xe=0,je=null,Ln.reset(),Zn.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return s7}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(l){this._outputColorSpace=l;const n=this.getContext();n.drawingBufferColorSpace=l===BV?"display-p3":"srgb",n.unpackColorSpace=ks.workingColorSpace===nF?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===kf?z8:zj}set outputEncoding(l){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=l===z8?kf:Q7}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(l){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=l}}class BZ extends HZ{}BZ.prototype.isWebGL1Renderer=!0;class Cne extends Zf{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(l,n){return super.copy(l,n),l.background!==null&&(this.background=l.background.clone()),l.environment!==null&&(this.environment=l.environment.clone()),l.fog!==null&&(this.fog=l.fog.clone()),this.backgroundBlurriness=l.backgroundBlurriness,this.backgroundIntensity=l.backgroundIntensity,l.overrideMaterial!==null&&(this.overrideMaterial=l.overrideMaterial.clone()),this.matrixAutoUpdate=l.matrixAutoUpdate,this}toJSON(l){const n=super.toJSON(l);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class UZ{constructor(l,n){this.isInterleavedBuffer=!0,this.array=l,this.stride=n,this.count=l!==void 0?l.length/n:0,this.usage=XG,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=M7()}onUploadCallback(){}set needsUpdate(l){l===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(l){return this.usage=l,this}addUpdateRange(l,n){this.updateRanges.push({start:l,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(l){return this.array=new l.array.constructor(l.array),this.count=l.count,this.stride=l.stride,this.usage=l.usage,this}copyAt(l,n,t){l*=this.stride,t*=n.stride;for(let c=0,w=this.stride;c<w;c++)this.array[l+c]=n.array[t+c];return this}set(l,n=0){return this.array.set(l,n),this}clone(l){l.arrayBuffers===void 0&&(l.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=M7()),l.arrayBuffers[this.array.buffer._uuid]===void 0&&(l.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(l.arrayBuffers[this.array.buffer._uuid]),t=new this.constructor(n,this.stride);return t.setUsage(this.usage),t}onUpload(l){return this.onUploadCallback=l,this}toJSON(l){return l.arrayBuffers===void 0&&(l.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=M7()),l.arrayBuffers[this.array.buffer._uuid]===void 0&&(l.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const X1=new lt;class hY{constructor(l,n,t,c=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=l,this.itemSize=n,this.offset=t,this.normalized=c}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(l){this.data.needsUpdate=l}applyMatrix4(l){for(let n=0,t=this.data.count;n<t;n++)X1.fromBufferAttribute(this,n),X1.applyMatrix4(l),this.setXYZ(n,X1.x,X1.y,X1.z);return this}applyNormalMatrix(l){for(let n=0,t=this.count;n<t;n++)X1.fromBufferAttribute(this,n),X1.applyNormalMatrix(l),this.setXYZ(n,X1.x,X1.y,X1.z);return this}transformDirection(l){for(let n=0,t=this.count;n<t;n++)X1.fromBufferAttribute(this,n),X1.transformDirection(l),this.setXYZ(n,X1.x,X1.y,X1.z);return this}setX(l,n){return this.normalized&&(n=zs(n,this.array)),this.data.array[l*this.data.stride+this.offset]=n,this}setY(l,n){return this.normalized&&(n=zs(n,this.array)),this.data.array[l*this.data.stride+this.offset+1]=n,this}setZ(l,n){return this.normalized&&(n=zs(n,this.array)),this.data.array[l*this.data.stride+this.offset+2]=n,this}setW(l,n){return this.normalized&&(n=zs(n,this.array)),this.data.array[l*this.data.stride+this.offset+3]=n,this}getX(l){let n=this.data.array[l*this.data.stride+this.offset];return this.normalized&&(n=tR(n,this.array)),n}getY(l){let n=this.data.array[l*this.data.stride+this.offset+1];return this.normalized&&(n=tR(n,this.array)),n}getZ(l){let n=this.data.array[l*this.data.stride+this.offset+2];return this.normalized&&(n=tR(n,this.array)),n}getW(l){let n=this.data.array[l*this.data.stride+this.offset+3];return this.normalized&&(n=tR(n,this.array)),n}setXY(l,n,t){return l=l*this.data.stride+this.offset,this.normalized&&(n=zs(n,this.array),t=zs(t,this.array)),this.data.array[l+0]=n,this.data.array[l+1]=t,this}setXYZ(l,n,t,c){return l=l*this.data.stride+this.offset,this.normalized&&(n=zs(n,this.array),t=zs(t,this.array),c=zs(c,this.array)),this.data.array[l+0]=n,this.data.array[l+1]=t,this.data.array[l+2]=c,this}setXYZW(l,n,t,c,w){return l=l*this.data.stride+this.offset,this.normalized&&(n=zs(n,this.array),t=zs(t,this.array),c=zs(c,this.array),w=zs(w,this.array)),this.data.array[l+0]=n,this.data.array[l+1]=t,this.data.array[l+2]=c,this.data.array[l+3]=w,this}clone(l){if(l===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let t=0;t<this.count;t++){const c=t*this.data.stride+this.offset;for(let w=0;w<this.itemSize;w++)n.push(this.data.array[c+w])}return new p0(new this.array.constructor(n),this.itemSize,this.normalized)}else return l.interleavedBuffers===void 0&&(l.interleavedBuffers={}),l.interleavedBuffers[this.data.uuid]===void 0&&(l.interleavedBuffers[this.data.uuid]=this.data.clone(l)),new hY(l.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(l){if(l===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let t=0;t<this.count;t++){const c=t*this.data.stride+this.offset;for(let w=0;w<this.itemSize;w++)n.push(this.data.array[c+w])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return l.interleavedBuffers===void 0&&(l.interleavedBuffers={}),l.interleavedBuffers[this.data.uuid]===void 0&&(l.interleavedBuffers[this.data.uuid]=this.data.toJSON(l)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class bne extends R0{constructor(l=null,n=1,t=1,c,w,O,M,G,Y=zf,Z=zf,ee,te){super(null,O,M,G,Y,Z,c,w,ee,te),this.isDataTexture=!0,this.image={data:l,width:n,height:t},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qW extends p0{constructor(l,n,t,c=1){super(l,n,t),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=c}copy(l){return super.copy(l),this.meshPerAttribute=l.meshPerAttribute,this}toJSON(){const l=super.toJSON();return l.meshPerAttribute=this.meshPerAttribute,l.isInstancedBufferAttribute=!0,l}}const PP=new Ps,KW=new Ps,YB=[],QW=new Uc,FZ=new Ps,zx=new d2,kx=new hO;class Mne extends d2{constructor(l,n,t){super(l,n),this.isInstancedMesh=!0,this.instanceMatrix=new qW(new Float32Array(t*16),16),this.instanceColor=null,this.count=t,this.boundingBox=null,this.boundingSphere=null;for(let c=0;c<t;c++)this.setMatrixAt(c,FZ)}computeBoundingBox(){const l=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Uc),l.boundingBox===null&&l.computeBoundingBox(),this.boundingBox.makeEmpty();for(let t=0;t<n;t++)this.getMatrixAt(t,PP),QW.copy(l.boundingBox).applyMatrix4(PP),this.boundingBox.union(QW)}computeBoundingSphere(){const l=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new hO),l.boundingSphere===null&&l.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let t=0;t<n;t++)this.getMatrixAt(t,PP),kx.copy(l.boundingSphere).applyMatrix4(PP),this.boundingSphere.union(kx)}copy(l,n){return super.copy(l,n),this.instanceMatrix.copy(l.instanceMatrix),l.instanceColor!==null&&(this.instanceColor=l.instanceColor.clone()),this.count=l.count,l.boundingBox!==null&&(this.boundingBox=l.boundingBox.clone()),l.boundingSphere!==null&&(this.boundingSphere=l.boundingSphere.clone()),this}getColorAt(l,n){n.fromArray(this.instanceColor.array,l*3)}getMatrixAt(l,n){n.fromArray(this.instanceMatrix.array,l*16)}raycast(l,n){const t=this.matrixWorld,c=this.count;if(zx.geometry=this.geometry,zx.material=this.material,zx.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),kx.copy(this.boundingSphere),kx.applyMatrix4(t),l.ray.intersectsSphere(kx)!==!1))for(let w=0;w<c;w++){this.getMatrixAt(w,PP),KW.multiplyMatrices(t,PP),zx.matrixWorld=KW,zx.raycast(l,YB);for(let O=0,M=YB.length;O<M;O++){const G=YB[O];G.instanceId=w,G.object=this,n.push(G)}YB.length=0}}setColorAt(l,n){this.instanceColor===null&&(this.instanceColor=new qW(new Float32Array(this.instanceMatrix.count*3),3)),n.toArray(this.instanceColor.array,l*3)}setMatrixAt(l,n){n.toArray(this.instanceMatrix.array,l*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class GZ extends fO{constructor(l){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ns(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(l)}copy(l){return super.copy(l),this.color.copy(l.color),this.map=l.map,this.linewidth=l.linewidth,this.linecap=l.linecap,this.linejoin=l.linejoin,this.fog=l.fog,this}}const $W=new lt,ZW=new lt,JW=new Ps,PG=new lF,zB=new hO;class VZ extends Zf{constructor(l=new Jf,n=new GZ){super(),this.isLine=!0,this.type="Line",this.geometry=l,this.material=n,this.updateMorphTargets()}copy(l,n){return super.copy(l,n),this.material=Array.isArray(l.material)?l.material.slice():l.material,this.geometry=l.geometry,this}computeLineDistances(){const l=this.geometry;if(l.index===null){const n=l.attributes.position,t=[0];for(let c=1,w=n.count;c<w;c++)$W.fromBufferAttribute(n,c-1),ZW.fromBufferAttribute(n,c),t[c]=t[c-1],t[c]+=$W.distanceTo(ZW);l.setAttribute("lineDistance",new Qu(t,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(l,n){const t=this.geometry,c=this.matrixWorld,w=l.params.Line.threshold,O=t.drawRange;if(t.boundingSphere===null&&t.computeBoundingSphere(),zB.copy(t.boundingSphere),zB.applyMatrix4(c),zB.radius+=w,l.ray.intersectsSphere(zB)===!1)return;JW.copy(c).invert(),PG.copy(l.ray).applyMatrix4(JW);const M=w/((this.scale.x+this.scale.y+this.scale.z)/3),G=M*M,Y=new lt,Z=new lt,ee=new lt,te=new lt,v=this.isLineSegments?2:1,he=t.index,oe=t.attributes.position;if(he!==null){const ie=Math.max(0,O.start),me=Math.min(he.count,O.start+O.count);for(let fe=ie,Ne=me-1;fe<Ne;fe+=v){const We=he.getX(fe),xe=he.getX(fe+1);if(Y.fromBufferAttribute(oe,We),Z.fromBufferAttribute(oe,xe),PG.distanceSqToSegment(Y,Z,te,ee)>G)continue;te.applyMatrix4(this.matrixWorld);const et=l.ray.origin.distanceTo(te);et<l.near||et>l.far||n.push({distance:et,point:ee.clone().applyMatrix4(this.matrixWorld),index:fe,face:null,faceIndex:null,object:this})}}else{const ie=Math.max(0,O.start),me=Math.min(oe.count,O.start+O.count);for(let fe=ie,Ne=me-1;fe<Ne;fe+=v){if(Y.fromBufferAttribute(oe,fe),Z.fromBufferAttribute(oe,fe+1),PG.distanceSqToSegment(Y,Z,te,ee)>G)continue;te.applyMatrix4(this.matrixWorld);const xe=l.ray.origin.distanceTo(te);xe<l.near||xe>l.far||n.push({distance:xe,point:ee.clone().applyMatrix4(this.matrixWorld),index:fe,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,t=Object.keys(n);if(t.length>0){const c=n[t[0]];if(c!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let w=0,O=c.length;w<O;w++){const M=c[w].name||String(w);this.morphTargetInfluences.push(0),this.morphTargetDictionary[M]=w}}}}}const XW=new lt,vW=new lt;class xne extends VZ{constructor(l,n){super(l,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const l=this.geometry;if(l.index===null){const n=l.attributes.position,t=[];for(let c=0,w=n.count;c<w;c+=2)XW.fromBufferAttribute(n,c),vW.fromBufferAttribute(n,c+1),t[c]=c===0?0:t[c-1],t[c+1]=t[c]+XW.distanceTo(vW);l.setAttribute("lineDistance",new Qu(t,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class fY extends Jf{constructor(l=1,n=1,t=1,c=32,w=1,O=!1,M=0,G=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:l,radiusBottom:n,height:t,radialSegments:c,heightSegments:w,openEnded:O,thetaStart:M,thetaLength:G};const Y=this;c=Math.floor(c),w=Math.floor(w);const Z=[],ee=[],te=[],v=[];let he=0;const Te=[],oe=t/2;let ie=0;me(),O===!1&&(l>0&&fe(!0),n>0&&fe(!1)),this.setIndex(Z),this.setAttribute("position",new Qu(ee,3)),this.setAttribute("normal",new Qu(te,3)),this.setAttribute("uv",new Qu(v,2));function me(){const Ne=new lt,We=new lt;let xe=0;const je=(n-l)/t;for(let et=0;et<=w;et++){const ge=[],Le=et/w,ve=Le*(n-l)+l;for(let nt=0;nt<=c;nt++){const ht=nt/c,Xe=ht*G+M,at=Math.sin(Xe),It=Math.cos(Xe);We.x=ve*at,We.y=-Le*t+oe,We.z=ve*It,ee.push(We.x,We.y,We.z),Ne.set(at,je,It).normalize(),te.push(Ne.x,Ne.y,Ne.z),v.push(ht,1-Le),ge.push(he++)}Te.push(ge)}for(let et=0;et<c;et++)for(let ge=0;ge<w;ge++){const Le=Te[ge][et],ve=Te[ge+1][et],nt=Te[ge+1][et+1],ht=Te[ge][et+1];Z.push(Le,ve,ht),Z.push(ve,nt,ht),xe+=6}Y.addGroup(ie,xe,0),ie+=xe}function fe(Ne){const We=he,xe=new Dl,je=new lt;let et=0;const ge=Ne===!0?l:n,Le=Ne===!0?1:-1;for(let nt=1;nt<=c;nt++)ee.push(0,oe*Le,0),te.push(0,Le,0),v.push(.5,.5),he++;const ve=he;for(let nt=0;nt<=c;nt++){const Xe=nt/c*G+M,at=Math.cos(Xe),It=Math.sin(Xe);je.x=ge*It,je.y=oe*Le,je.z=ge*at,ee.push(je.x,je.y,je.z),te.push(0,Le,0),xe.x=at*.5+.5,xe.y=It*.5*Le+.5,v.push(xe.x,xe.y),he++}for(let nt=0;nt<c;nt++){const ht=We+nt,Xe=ve+nt;Ne===!0?Z.push(Xe,Xe+1,ht):Z.push(Xe+1,Xe,ht),et+=3}Y.addGroup(ie,et,Ne===!0?1:2),ie+=et}}copy(l){return super.copy(l),this.parameters=Object.assign({},l.parameters),this}static fromJSON(l){return new fY(l.radiusTop,l.radiusBottom,l.height,l.radialSegments,l.heightSegments,l.openEnded,l.thetaStart,l.thetaLength)}}class WV extends Jf{constructor(l=[],n=[],t=1,c=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:l,indices:n,radius:t,detail:c};const w=[],O=[];M(c),Y(t),Z(),this.setAttribute("position",new Qu(w,3)),this.setAttribute("normal",new Qu(w.slice(),3)),this.setAttribute("uv",new Qu(O,2)),c===0?this.computeVertexNormals():this.normalizeNormals();function M(me){const fe=new lt,Ne=new lt,We=new lt;for(let xe=0;xe<n.length;xe+=3)v(n[xe+0],fe),v(n[xe+1],Ne),v(n[xe+2],We),G(fe,Ne,We,me)}function G(me,fe,Ne,We){const xe=We+1,je=[];for(let et=0;et<=xe;et++){je[et]=[];const ge=me.clone().lerp(Ne,et/xe),Le=fe.clone().lerp(Ne,et/xe),ve=xe-et;for(let nt=0;nt<=ve;nt++)nt===0&&et===xe?je[et][nt]=ge:je[et][nt]=ge.clone().lerp(Le,nt/ve)}for(let et=0;et<xe;et++)for(let ge=0;ge<2*(xe-et)-1;ge++){const Le=Math.floor(ge/2);ge%2===0?(te(je[et][Le+1]),te(je[et+1][Le]),te(je[et][Le])):(te(je[et][Le+1]),te(je[et+1][Le+1]),te(je[et+1][Le]))}}function Y(me){const fe=new lt;for(let Ne=0;Ne<w.length;Ne+=3)fe.x=w[Ne+0],fe.y=w[Ne+1],fe.z=w[Ne+2],fe.normalize().multiplyScalar(me),w[Ne+0]=fe.x,w[Ne+1]=fe.y,w[Ne+2]=fe.z}function Z(){const me=new lt;for(let fe=0;fe<w.length;fe+=3){me.x=w[fe+0],me.y=w[fe+1],me.z=w[fe+2];const Ne=oe(me)/2/Math.PI+.5,We=ie(me)/Math.PI+.5;O.push(Ne,1-We)}he(),ee()}function ee(){for(let me=0;me<O.length;me+=6){const fe=O[me+0],Ne=O[me+2],We=O[me+4],xe=Math.max(fe,Ne,We),je=Math.min(fe,Ne,We);xe>.9&&je<.1&&(fe<.2&&(O[me+0]+=1),Ne<.2&&(O[me+2]+=1),We<.2&&(O[me+4]+=1))}}function te(me){w.push(me.x,me.y,me.z)}function v(me,fe){const Ne=me*3;fe.x=l[Ne+0],fe.y=l[Ne+1],fe.z=l[Ne+2]}function he(){const me=new lt,fe=new lt,Ne=new lt,We=new lt,xe=new Dl,je=new Dl,et=new Dl;for(let ge=0,Le=0;ge<w.length;ge+=9,Le+=6){me.set(w[ge+0],w[ge+1],w[ge+2]),fe.set(w[ge+3],w[ge+4],w[ge+5]),Ne.set(w[ge+6],w[ge+7],w[ge+8]),xe.set(O[Le+0],O[Le+1]),je.set(O[Le+2],O[Le+3]),et.set(O[Le+4],O[Le+5]),We.copy(me).add(fe).add(Ne).divideScalar(3);const ve=oe(We);Te(xe,Le+0,me,ve),Te(je,Le+2,fe,ve),Te(et,Le+4,Ne,ve)}}function Te(me,fe,Ne,We){We<0&&me.x===1&&(O[fe]=me.x-1),Ne.x===0&&Ne.z===0&&(O[fe]=We/2/Math.PI+.5)}function oe(me){return Math.atan2(me.z,-me.x)}function ie(me){return Math.atan2(-me.y,Math.sqrt(me.x*me.x+me.z*me.z))}}copy(l){return super.copy(l),this.parameters=Object.assign({},l.parameters),this}static fromJSON(l){return new WV(l.vertices,l.indices,l.radius,l.details)}}const kB=new lt,qB=new lt,CG=new lt,KB=new Kf;class Hne extends Jf{constructor(l=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:l,thresholdAngle:n},l!==null){const c=Math.pow(10,4),w=Math.cos(w9*n),O=l.getIndex(),M=l.getAttribute("position"),G=O?O.count:M.count,Y=[0,0,0],Z=["a","b","c"],ee=new Array(3),te={},v=[];for(let he=0;he<G;he+=3){O?(Y[0]=O.getX(he),Y[1]=O.getX(he+1),Y[2]=O.getX(he+2)):(Y[0]=he,Y[1]=he+1,Y[2]=he+2);const{a:Te,b:oe,c:ie}=KB;if(Te.fromBufferAttribute(M,Y[0]),oe.fromBufferAttribute(M,Y[1]),ie.fromBufferAttribute(M,Y[2]),KB.getNormal(CG),ee[0]=`${Math.round(Te.x*c)},${Math.round(Te.y*c)},${Math.round(Te.z*c)}`,ee[1]=`${Math.round(oe.x*c)},${Math.round(oe.y*c)},${Math.round(oe.z*c)}`,ee[2]=`${Math.round(ie.x*c)},${Math.round(ie.y*c)},${Math.round(ie.z*c)}`,!(ee[0]===ee[1]||ee[1]===ee[2]||ee[2]===ee[0]))for(let me=0;me<3;me++){const fe=(me+1)%3,Ne=ee[me],We=ee[fe],xe=KB[Z[me]],je=KB[Z[fe]],et=`${Ne}_${We}`,ge=`${We}_${Ne}`;ge in te&&te[ge]?(CG.dot(te[ge].normal)<=w&&(v.push(xe.x,xe.y,xe.z),v.push(je.x,je.y,je.z)),te[ge]=null):et in te||(te[et]={index0:Y[me],index1:Y[fe],normal:CG.clone()})}}for(const he in te)if(te[he]){const{index0:Te,index1:oe}=te[he];kB.fromBufferAttribute(M,Te),qB.fromBufferAttribute(M,oe),v.push(kB.x,kB.y,kB.z),v.push(qB.x,qB.y,qB.z)}this.setAttribute("position",new Qu(v,3))}}copy(l){return super.copy(l),this.parameters=Object.assign({},l.parameters),this}}const _Z={triangulate:function(e,l,n=2){const t=l&&l.length,c=t?l[0]*n:e.length;let w=IY(e,0,c,n,!0);const O=[];if(!w||w.next===w.prev)return O;let M,G,Y,Z,ee,te,v;if(t&&(w=kZ(e,l,w,n)),e.length>80*n){M=Y=e[0],G=Z=e[1];for(let he=n;he<c;he+=n)ee=e[he],te=e[he+1],ee<M&&(M=ee),te<G&&(G=te),ee>Y&&(Y=ee),te>Z&&(Z=te);v=Math.max(Y-M,Z-G),v=v!==0?32767/v:0}return _H(w,O,n,M,G,v,0),O}};function IY(e,l,n,t,c){let w,O;if(c===nJ(e,l,n,t)>0)for(w=l;w<n;w+=t)O=ej(w,e[w],e[w+1],O);else for(w=n-t;w>=l;w-=t)O=ej(w,e[w],e[w+1],O);return O&&uF(O,O.next)&&(jH(O),O=O.next),O}function uL(e,l){if(!e)return e;l||(l=e);let n=e,t;do if(t=!1,!n.steiner&&(uF(n,n.next)||ku(n.prev,n,n.next)===0)){if(jH(n),n=l=n.prev,n===n.next)break;t=!0}else n=n.next;while(t||n!==l);return l}function _H(e,l,n,t,c,w,O){if(!e)return;!O&&w&&ZZ(e,t,c,w);let M=e,G,Y;for(;e.prev!==e.next;){if(G=e.prev,Y=e.next,w?jZ(e,t,c,w):WZ(e)){l.push(G.i/n|0),l.push(e.i/n|0),l.push(Y.i/n|0),jH(e),e=Y.next,M=Y.next;continue}if(e=Y,e===M){O?O===1?(e=YZ(uL(e),l,n),_H(e,l,n,t,c,w,2)):O===2&&zZ(e,l,n,t,c,w):_H(uL(e),l,n,t,c,w,1);break}}}function WZ(e){const l=e.prev,n=e,t=e.next;if(ku(l,n,t)>=0)return!1;const c=l.x,w=n.x,O=t.x,M=l.y,G=n.y,Y=t.y,Z=c<w?c<O?c:O:w<O?w:O,ee=M<G?M<Y?M:Y:G<Y?G:Y,te=c>w?c>O?c:O:w>O?w:O,v=M>G?M>Y?M:Y:G>Y?G:Y;let he=t.next;for(;he!==l;){if(he.x>=Z&&he.x<=te&&he.y>=ee&&he.y<=v&&h9(c,M,w,G,O,Y,he.x,he.y)&&ku(he.prev,he,he.next)>=0)return!1;he=he.next}return!0}function jZ(e,l,n,t){const c=e.prev,w=e,O=e.next;if(ku(c,w,O)>=0)return!1;const M=c.x,G=w.x,Y=O.x,Z=c.y,ee=w.y,te=O.y,v=M<G?M<Y?M:Y:G<Y?G:Y,he=Z<ee?Z<te?Z:te:ee<te?ee:te,Te=M>G?M>Y?M:Y:G>Y?G:Y,oe=Z>ee?Z>te?Z:te:ee>te?ee:te,ie=nV(v,he,l,n,t),me=nV(Te,oe,l,n,t);let fe=e.prevZ,Ne=e.nextZ;for(;fe&&fe.z>=ie&&Ne&&Ne.z<=me;){if(fe.x>=v&&fe.x<=Te&&fe.y>=he&&fe.y<=oe&&fe!==c&&fe!==O&&h9(M,Z,G,ee,Y,te,fe.x,fe.y)&&ku(fe.prev,fe,fe.next)>=0||(fe=fe.prevZ,Ne.x>=v&&Ne.x<=Te&&Ne.y>=he&&Ne.y<=oe&&Ne!==c&&Ne!==O&&h9(M,Z,G,ee,Y,te,Ne.x,Ne.y)&&ku(Ne.prev,Ne,Ne.next)>=0))return!1;Ne=Ne.nextZ}for(;fe&&fe.z>=ie;){if(fe.x>=v&&fe.x<=Te&&fe.y>=he&&fe.y<=oe&&fe!==c&&fe!==O&&h9(M,Z,G,ee,Y,te,fe.x,fe.y)&&ku(fe.prev,fe,fe.next)>=0)return!1;fe=fe.prevZ}for(;Ne&&Ne.z<=me;){if(Ne.x>=v&&Ne.x<=Te&&Ne.y>=he&&Ne.y<=oe&&Ne!==c&&Ne!==O&&h9(M,Z,G,ee,Y,te,Ne.x,Ne.y)&&ku(Ne.prev,Ne,Ne.next)>=0)return!1;Ne=Ne.nextZ}return!0}function YZ(e,l,n){let t=e;do{const c=t.prev,w=t.next.next;!uF(c,w)&&dY(c,t,t.next,w)&&WH(c,w)&&WH(w,c)&&(l.push(c.i/n|0),l.push(t.i/n|0),l.push(w.i/n|0),jH(t),jH(t.next),t=e=w),t=t.next}while(t!==e);return uL(t)}function zZ(e,l,n,t,c,w){let O=e;do{let M=O.next.next;for(;M!==O.prev;){if(O.i!==M.i&&vZ(O,M)){let G=yY(O,M);O=uL(O,O.next),G=uL(G,G.next),_H(O,l,n,t,c,w,0),_H(G,l,n,t,c,w,0);return}M=M.next}O=O.next}while(O!==e)}function kZ(e,l,n,t){const c=[];let w,O,M,G,Y;for(w=0,O=l.length;w<O;w++)M=l[w]*t,G=w<O-1?l[w+1]*t:e.length,Y=IY(e,M,G,t,!1),Y===Y.next&&(Y.steiner=!0),c.push(XZ(Y));for(c.sort(qZ),w=0;w<c.length;w++)n=KZ(c[w],n);return n}function qZ(e,l){return e.x-l.x}function KZ(e,l){const n=QZ(e,l);if(!n)return l;const t=yY(n,e);return uL(t,t.next),uL(n,n.next)}function QZ(e,l){let n=l,t=-1/0,c;const w=e.x,O=e.y;do{if(O<=n.y&&O>=n.next.y&&n.next.y!==n.y){const te=n.x+(O-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(te<=w&&te>t&&(t=te,c=n.x<n.next.x?n:n.next,te===w))return c}n=n.next}while(n!==l);if(!c)return null;const M=c,G=c.x,Y=c.y;let Z=1/0,ee;n=c;do w>=n.x&&n.x>=G&&w!==n.x&&h9(O<Y?w:t,O,G,Y,O<Y?t:w,O,n.x,n.y)&&(ee=Math.abs(O-n.y)/(w-n.x),WH(n,e)&&(ee<Z||ee===Z&&(n.x>c.x||n.x===c.x&&$Z(c,n)))&&(c=n,Z=ee)),n=n.next;while(n!==M);return c}function $Z(e,l){return ku(e.prev,e,l.prev)<0&&ku(l.next,e,e.next)<0}function ZZ(e,l,n,t){let c=e;do c.z===0&&(c.z=nV(c.x,c.y,l,n,t)),c.prevZ=c.prev,c.nextZ=c.next,c=c.next;while(c!==e);c.prevZ.nextZ=null,c.prevZ=null,JZ(c)}function JZ(e){let l,n,t,c,w,O,M,G,Y=1;do{for(n=e,e=null,w=null,O=0;n;){for(O++,t=n,M=0,l=0;l<Y&&(M++,t=t.nextZ,!!t);l++);for(G=Y;M>0||G>0&&t;)M!==0&&(G===0||!t||n.z<=t.z)?(c=n,n=n.nextZ,M--):(c=t,t=t.nextZ,G--),w?w.nextZ=c:e=c,c.prevZ=w,w=c;n=t}w.nextZ=null,Y*=2}while(O>1);return e}function nV(e,l,n,t,c){return e=(e-n)*c|0,l=(l-t)*c|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,l=(l|l<<8)&16711935,l=(l|l<<4)&252645135,l=(l|l<<2)&858993459,l=(l|l<<1)&1431655765,e|l<<1}function XZ(e){let l=e,n=e;do(l.x<n.x||l.x===n.x&&l.y<n.y)&&(n=l),l=l.next;while(l!==e);return n}function h9(e,l,n,t,c,w,O,M){return(c-O)*(l-M)>=(e-O)*(w-M)&&(e-O)*(t-M)>=(n-O)*(l-M)&&(n-O)*(w-M)>=(c-O)*(t-M)}function vZ(e,l){return e.next.i!==l.i&&e.prev.i!==l.i&&!eJ(e,l)&&(WH(e,l)&&WH(l,e)&&tJ(e,l)&&(ku(e.prev,e,l.prev)||ku(e,l.prev,l))||uF(e,l)&&ku(e.prev,e,e.next)>0&&ku(l.prev,l,l.next)>0)}function ku(e,l,n){return(l.y-e.y)*(n.x-l.x)-(l.x-e.x)*(n.y-l.y)}function uF(e,l){return e.x===l.x&&e.y===l.y}function dY(e,l,n,t){const c=$B(ku(e,l,n)),w=$B(ku(e,l,t)),O=$B(ku(n,t,e)),M=$B(ku(n,t,l));return!!(c!==w&&O!==M||c===0&&QB(e,n,l)||w===0&&QB(e,t,l)||O===0&&QB(n,e,t)||M===0&&QB(n,l,t))}function QB(e,l,n){return l.x<=Math.max(e.x,n.x)&&l.x>=Math.min(e.x,n.x)&&l.y<=Math.max(e.y,n.y)&&l.y>=Math.min(e.y,n.y)}function $B(e){return e>0?1:e<0?-1:0}function eJ(e,l){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==l.i&&n.next.i!==l.i&&dY(n,n.next,e,l))return!0;n=n.next}while(n!==e);return!1}function WH(e,l){return ku(e.prev,e,e.next)<0?ku(e,l,e.next)>=0&&ku(e,e.prev,l)>=0:ku(e,l,e.prev)<0||ku(e,e.next,l)<0}function tJ(e,l){let n=e,t=!1;const c=(e.x+l.x)/2,w=(e.y+l.y)/2;do n.y>w!=n.next.y>w&&n.next.y!==n.y&&c<(n.next.x-n.x)*(w-n.y)/(n.next.y-n.y)+n.x&&(t=!t),n=n.next;while(n!==e);return t}function yY(e,l){const n=new lV(e.i,e.x,e.y),t=new lV(l.i,l.x,l.y),c=e.next,w=l.prev;return e.next=l,l.prev=e,n.next=c,c.prev=n,t.next=n,n.prev=t,w.next=t,t.prev=w,t}function ej(e,l,n,t){const c=new lV(e,l,n);return t?(c.next=t.next,c.prev=t,t.next.prev=c,t.next=c):(c.prev=c,c.next=c),c}function jH(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function lV(e,l,n){this.i=e,this.x=l,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function nJ(e,l,n,t){let c=0;for(let w=l,O=n-t;w<n;w+=t)c+=(e[O]-e[w])*(e[w+1]+e[O+1]),O=w;return c}class wY{static area(l){const n=l.length;let t=0;for(let c=n-1,w=0;w<n;c=w++)t+=l[c].x*l[w].y-l[w].x*l[c].y;return t*.5}static isClockWise(l){return wY.area(l)<0}static triangulateShape(l,n){const t=[],c=[],w=[];tj(l),nj(t,l);let O=l.length;n.forEach(tj);for(let G=0;G<n.length;G++)c.push(O),O+=n[G].length,nj(t,n[G]);const M=_Z.triangulate(t,c);for(let G=0;G<M.length;G+=3)w.push(M.slice(G,G+3));return w}}function tj(e){const l=e.length;l>2&&e[l-1].equals(e[0])&&e.pop()}function nj(e,l){for(let n=0;n<l.length;n++)e.push(l[n].x),e.push(l[n].y)}class EY extends WV{constructor(l=1,n=0){const t=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],c=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(t,c,l,n),this.type="OctahedronGeometry",this.parameters={radius:l,detail:n}}static fromJSON(l){return new EY(l.radius,l.detail)}}class TY extends Jf{constructor(l=1,n=32,t=16,c=0,w=Math.PI*2,O=0,M=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:l,widthSegments:n,heightSegments:t,phiStart:c,phiLength:w,thetaStart:O,thetaLength:M},n=Math.max(3,Math.floor(n)),t=Math.max(2,Math.floor(t));const G=Math.min(O+M,Math.PI);let Y=0;const Z=[],ee=new lt,te=new lt,v=[],he=[],Te=[],oe=[];for(let ie=0;ie<=t;ie++){const me=[],fe=ie/t;let Ne=0;ie===0&&O===0?Ne=.5/n:ie===t&&G===Math.PI&&(Ne=-.5/n);for(let We=0;We<=n;We++){const xe=We/n;ee.x=-l*Math.cos(c+xe*w)*Math.sin(O+fe*M),ee.y=l*Math.cos(O+fe*M),ee.z=l*Math.sin(c+xe*w)*Math.sin(O+fe*M),he.push(ee.x,ee.y,ee.z),te.copy(ee).normalize(),Te.push(te.x,te.y,te.z),oe.push(xe+Ne,1-fe),me.push(Y++)}Z.push(me)}for(let ie=0;ie<t;ie++)for(let me=0;me<n;me++){const fe=Z[ie][me+1],Ne=Z[ie][me],We=Z[ie+1][me],xe=Z[ie+1][me+1];(ie!==0||O>0)&&v.push(fe,Ne,xe),(ie!==t-1||G<Math.PI)&&v.push(Ne,We,xe)}this.setIndex(v),this.setAttribute("position",new Qu(he,3)),this.setAttribute("normal",new Qu(Te,3)),this.setAttribute("uv",new Qu(oe,2))}copy(l){return super.copy(l),this.parameters=Object.assign({},l.parameters),this}static fromJSON(l){return new TY(l.radius,l.widthSegments,l.heightSegments,l.phiStart,l.phiLength,l.thetaStart,l.thetaLength)}}class RY extends Jf{constructor(l=1,n=.4,t=12,c=48,w=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:l,tube:n,radialSegments:t,tubularSegments:c,arc:w},t=Math.floor(t),c=Math.floor(c);const O=[],M=[],G=[],Y=[],Z=new lt,ee=new lt,te=new lt;for(let v=0;v<=t;v++)for(let he=0;he<=c;he++){const Te=he/c*w,oe=v/t*Math.PI*2;ee.x=(l+n*Math.cos(oe))*Math.cos(Te),ee.y=(l+n*Math.cos(oe))*Math.sin(Te),ee.z=n*Math.sin(oe),M.push(ee.x,ee.y,ee.z),Z.x=l*Math.cos(Te),Z.y=l*Math.sin(Te),te.subVectors(ee,Z).normalize(),G.push(te.x,te.y,te.z),Y.push(he/c),Y.push(v/t)}for(let v=1;v<=t;v++)for(let he=1;he<=c;he++){const Te=(c+1)*v+he-1,oe=(c+1)*(v-1)+he-1,ie=(c+1)*(v-1)+he,me=(c+1)*v+he;O.push(Te,oe,me),O.push(oe,ie,me)}this.setIndex(O),this.setAttribute("position",new Qu(M,3)),this.setAttribute("normal",new Qu(G,3)),this.setAttribute("uv",new Qu(Y,2))}copy(l){return super.copy(l),this.parameters=Object.assign({},l.parameters),this}static fromJSON(l){return new RY(l.radius,l.tube,l.radialSegments,l.tubularSegments,l.arc)}}class Bne extends Jf{constructor(l=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:l},l!==null){const n=[],t=new Set,c=new lt,w=new lt;if(l.index!==null){const O=l.attributes.position,M=l.index;let G=l.groups;G.length===0&&(G=[{start:0,count:M.count,materialIndex:0}]);for(let Y=0,Z=G.length;Y<Z;++Y){const ee=G[Y],te=ee.start,v=ee.count;for(let he=te,Te=te+v;he<Te;he+=3)for(let oe=0;oe<3;oe++){const ie=M.getX(he+oe),me=M.getX(he+(oe+1)%3);c.fromBufferAttribute(O,ie),w.fromBufferAttribute(O,me),lj(c,w,t)===!0&&(n.push(c.x,c.y,c.z),n.push(w.x,w.y,w.z))}}}else{const O=l.attributes.position;for(let M=0,G=O.count/3;M<G;M++)for(let Y=0;Y<3;Y++){const Z=3*M+Y,ee=3*M+(Y+1)%3;c.fromBufferAttribute(O,Z),w.fromBufferAttribute(O,ee),lj(c,w,t)===!0&&(n.push(c.x,c.y,c.z),n.push(w.x,w.y,w.z))}}this.setAttribute("position",new Qu(n,3))}}copy(l){return super.copy(l),this.parameters=Object.assign({},l.parameters),this}}function lj(e,l,n){const t=`${e.x},${e.y},${e.z}-${l.x},${l.y},${l.z}`,c=`${l.x},${l.y},${l.z}-${e.x},${e.y},${e.z}`;return n.has(t)===!0||n.has(c)===!0?!1:(n.add(t),n.add(c),!0)}class Une extends fO{constructor(l){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ns(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ns(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=HV,this.normalScale=new Dl(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(l)}copy(l){return super.copy(l),this.defines={STANDARD:""},this.color.copy(l.color),this.roughness=l.roughness,this.metalness=l.metalness,this.map=l.map,this.lightMap=l.lightMap,this.lightMapIntensity=l.lightMapIntensity,this.aoMap=l.aoMap,this.aoMapIntensity=l.aoMapIntensity,this.emissive.copy(l.emissive),this.emissiveMap=l.emissiveMap,this.emissiveIntensity=l.emissiveIntensity,this.bumpMap=l.bumpMap,this.bumpScale=l.bumpScale,this.normalMap=l.normalMap,this.normalMapType=l.normalMapType,this.normalScale.copy(l.normalScale),this.displacementMap=l.displacementMap,this.displacementScale=l.displacementScale,this.displacementBias=l.displacementBias,this.roughnessMap=l.roughnessMap,this.metalnessMap=l.metalnessMap,this.alphaMap=l.alphaMap,this.envMap=l.envMap,this.envMapIntensity=l.envMapIntensity,this.wireframe=l.wireframe,this.wireframeLinewidth=l.wireframeLinewidth,this.wireframeLinecap=l.wireframeLinecap,this.wireframeLinejoin=l.wireframeLinejoin,this.flatShading=l.flatShading,this.fog=l.fog,this}}class Fne extends fO{constructor(l){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ns(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ns(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=HV,this.normalScale=new Dl(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=MV,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(l)}copy(l){return super.copy(l),this.color.copy(l.color),this.map=l.map,this.lightMap=l.lightMap,this.lightMapIntensity=l.lightMapIntensity,this.aoMap=l.aoMap,this.aoMapIntensity=l.aoMapIntensity,this.emissive.copy(l.emissive),this.emissiveMap=l.emissiveMap,this.emissiveIntensity=l.emissiveIntensity,this.bumpMap=l.bumpMap,this.bumpScale=l.bumpScale,this.normalMap=l.normalMap,this.normalMapType=l.normalMapType,this.normalScale.copy(l.normalScale),this.displacementMap=l.displacementMap,this.displacementScale=l.displacementScale,this.displacementBias=l.displacementBias,this.specularMap=l.specularMap,this.alphaMap=l.alphaMap,this.envMap=l.envMap,this.combine=l.combine,this.reflectivity=l.reflectivity,this.refractionRatio=l.refractionRatio,this.wireframe=l.wireframe,this.wireframeLinewidth=l.wireframeLinewidth,this.wireframeLinecap=l.wireframeLinecap,this.wireframeLinejoin=l.wireframeLinejoin,this.flatShading=l.flatShading,this.fog=l.fog,this}}class pY extends Zf{constructor(l,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ns(l),this.intensity=n}dispose(){}copy(l,n){return super.copy(l,n),this.color.copy(l.color),this.intensity=l.intensity,this}toJSON(l){const n=super.toJSON(l);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const bG=new Ps,sj=new lt,rj=new lt;class lJ{constructor(l){this.camera=l,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dl(512,512),this.map=null,this.mapPass=null,this.matrix=new Ps,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new GV,this._frameExtents=new Dl(1,1),this._viewportCount=1,this._viewports=[new Hc(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(l){const n=this.camera,t=this.matrix;sj.setFromMatrixPosition(l.matrixWorld),n.position.copy(sj),rj.setFromMatrixPosition(l.target.matrixWorld),n.lookAt(rj),n.updateMatrixWorld(),bG.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bG),t.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),t.multiply(bG)}getViewport(l){return this._viewports[l]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(l){return this.camera=l.camera.clone(),this.bias=l.bias,this.radius=l.radius,this.mapSize.copy(l.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const l={};return this.bias!==0&&(l.bias=this.bias),this.normalBias!==0&&(l.normalBias=this.normalBias),this.radius!==1&&(l.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(l.mapSize=this.mapSize.toArray()),l.camera=this.camera.toJSON(!1).object,delete l.camera.matrix,l}}class sJ extends lJ{constructor(){super(new sY(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gne extends pY{constructor(l,n){super(l,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zf.DEFAULT_UP),this.updateMatrix(),this.target=new Zf,this.shadow=new sJ}dispose(){this.shadow.dispose()}copy(l){return super.copy(l),this.target=l.target.clone(),this.shadow=l.shadow.clone(),this}}class Vne extends pY{constructor(l,n){super(l,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class _ne extends Jf{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(l){return super.copy(l),this.instanceCount=l.instanceCount,this}toJSON(){const l=super.toJSON();return l.instanceCount=this.instanceCount,l.isInstancedBufferGeometry=!0,l}}class Wne{constructor(l=!0){this.autoStart=l,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=uj(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let l=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=uj();l=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=l}return l}}function uj(){return(typeof performance>"u"?Date:performance).now()}class jne extends UZ{constructor(l,n,t=1){super(l,n),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=t}copy(l){return super.copy(l),this.meshPerAttribute=l.meshPerAttribute,this}clone(l){const n=super.clone(l);return n.meshPerAttribute=this.meshPerAttribute,n}toJSON(l){const n=super.toJSON(l);return n.isInstancedInterleavedBuffer=!0,n.meshPerAttribute=this.meshPerAttribute,n}}class Yne{constructor(l,n,t=0,c=1/0){this.ray=new lF(l,n),this.near=t,this.far=c,this.camera=null,this.layers=new FV,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(l,n){this.ray.set(l,n)}setFromCamera(l,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(l.x,l.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(l.x,l.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(l,n=!0,t=[]){return sV(l,this,t,n),t.sort(aj),t}intersectObjects(l,n=!0,t=[]){for(let c=0,w=l.length;c<w;c++)sV(l[c],this,t,n);return t.sort(aj),t}}function aj(e,l){return e.distance-l.distance}function sV(e,l,n,t){if(e.layers.test(l.layers)&&e.raycast(l,n),t===!0){const c=e.children;for(let w=0,O=c.length;w<O;w++)sV(c[w],l,n,!0)}}class zne{constructor(l=1,n=0,t=0){return this.radius=l,this.phi=n,this.theta=t,this}set(l,n,t){return this.radius=l,this.phi=n,this.theta=t,this}copy(l){return this.radius=l.radius,this.phi=l.phi,this.theta=l.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(l){return this.setFromCartesianCoords(l.x,l.y,l.z)}setFromCartesianCoords(l,n,t){return this.radius=Math.sqrt(l*l+n*n+t*t),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(l,t),this.phi=Math.acos(qf(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const ij=new lt,ZB=new lt;class x7{constructor(l=new lt,n=new lt){this.start=l,this.end=n}set(l,n){return this.start.copy(l),this.end.copy(n),this}copy(l){return this.start.copy(l.start),this.end.copy(l.end),this}getCenter(l){return l.addVectors(this.start,this.end).multiplyScalar(.5)}delta(l){return l.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(l,n){return this.delta(n).multiplyScalar(l).add(this.start)}closestPointToPointParameter(l,n){ij.subVectors(l,this.start),ZB.subVectors(this.end,this.start);const t=ZB.dot(ZB);let w=ZB.dot(ij)/t;return n&&(w=qf(w,0,1)),w}closestPointToPoint(l,n,t){const c=this.closestPointToPointParameter(l,n);return this.delta(t).multiplyScalar(c).add(this.start)}applyMatrix4(l){return this.start.applyMatrix4(l),this.end.applyMatrix4(l),this}equals(l){return l.start.equals(this.start)&&l.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bV}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bV);var rJ=Object.getOwnPropertyNames,mY=(e,l)=>function(){return l||(0,e[rJ(e)[0]])((l={exports:{}}).exports,l),l.exports},uJ=mY({"dist/web-ifc-mt.js"(e,l){var n=(()=>{var t=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0;return function(c={}){function w(){return It.buffer!=rn.buffer&&pn(),rn}function O(){return It.buffer!=rn.buffer&&pn(),Ot}function M(){return It.buffer!=rn.buffer&&pn(),Vt}function G(){return It.buffer!=rn.buffer&&pn(),un}function Y(){return It.buffer!=rn.buffer&&pn(),Sn}function Z(){return It.buffer!=rn.buffer&&pn(),bn}function ee(){return It.buffer!=rn.buffer&&pn(),kn}function te(){return It.buffer!=rn.buffer&&pn(),qn}var v=c,he,Te;v.ready=new Promise((P,j)=>{he=P,Te=j});var oe=Object.assign({},v),ie="./this.program",me=(P,j)=>{throw j},fe=typeof window=="object",Ne=typeof importScripts=="function",We=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string",xe=v.ENVIRONMENT_IS_PTHREAD||!1,je="";function et(P){return v.locateFile?v.locateFile(P,je):je+P}var ge,Le,ve;(fe||Ne)&&(Ne?je=self.location.href:typeof document<"u"&&document.currentScript&&(je=document.currentScript.src),t&&(je=t),je.indexOf("blob:")!==0?je=je.substr(0,je.replace(/[?#].*/,"").lastIndexOf("/")+1):je="",ge=P=>{var j=new XMLHttpRequest;return j.open("GET",P,!1),j.send(null),j.responseText},Ne&&(ve=P=>{var j=new XMLHttpRequest;return j.open("GET",P,!1),j.responseType="arraybuffer",j.send(null),new Uint8Array(j.response)}),Le=(P,j,se)=>{var Ie=new XMLHttpRequest;Ie.open("GET",P,!0),Ie.responseType="arraybuffer",Ie.onload=()=>{if(Ie.status==200||Ie.status==0&&Ie.response){j(Ie.response);return}se()},Ie.onerror=se,Ie.send(null)});var nt=v.print||console.log.bind(console),ht=v.printErr||console.error.bind(console);Object.assign(v,oe),oe=null,v.arguments&&v.arguments,v.thisProgram&&(ie=v.thisProgram),v.quit&&(me=v.quit);var Xe;v.wasmBinary&&(Xe=v.wasmBinary);var at=v.noExitRuntime||!0;typeof WebAssembly!="object"&&Hn("no native wasm support detected");var It,St,bt,Ct=!1,Ft;function kt(P,j){P||Hn(j)}var rn,Ot,Vt,un,Sn,bn,kn,qn;function pn(){var P=It.buffer;v.HEAP8=rn=new Int8Array(P),v.HEAP16=Vt=new Int16Array(P),v.HEAP32=Sn=new Int32Array(P),v.HEAPU8=Ot=new Uint8Array(P),v.HEAPU16=un=new Uint16Array(P),v.HEAPU32=bn=new Uint32Array(P),v.HEAPF32=kn=new Float32Array(P),v.HEAPF64=qn=new Float64Array(P)}var il=v.INITIAL_MEMORY||16777216;if(kt(il>=5242880,"INITIAL_MEMORY should be larger than STACK_SIZE, was "+il+"! (STACK_SIZE=5242880)"),xe)It=v.wasmMemory;else if(v.wasmMemory)It=v.wasmMemory;else if(It=new WebAssembly.Memory({initial:il/65536,maximum:65536,shared:!0}),!(It.buffer instanceof SharedArrayBuffer))throw ht("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),We&&ht("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and/or recent version)"),Error("bad memory");pn(),il=It.buffer.byteLength;var mt,Ns=[],Mn=[],Qn=[],Ln=0;function jl(){return at||Ln>0}function ll(){if(v.preRun)for(typeof v.preRun=="function"&&(v.preRun=[v.preRun]);v.preRun.length;)Dt(v.preRun.shift());Jn(Ns)}function Ye(){xe||(!v.noFSInit&&!ye.init.initialized&&ye.init(),ye.ignorePermissions=!1,Jn(Mn))}function _e(){if(!xe){if(v.postRun)for(typeof v.postRun=="function"&&(v.postRun=[v.postRun]);v.postRun.length;)jt(v.postRun.shift());Jn(Qn)}}function Dt(P){Ns.unshift(P)}function zt(P){Mn.unshift(P)}function jt(P){Qn.unshift(P)}var Gt=0,Dn=null;function on(P){return P}function In(P){Gt++,v.monitorRunDependencies&&v.monitorRunDependencies(Gt)}function Pn(P){if(Gt--,v.monitorRunDependencies&&v.monitorRunDependencies(Gt),Gt==0&&Dn){var j=Dn;Dn=null,j()}}function Hn(P){v.onAbort&&v.onAbort(P),P="Aborted("+P+")",ht(P),Ct=!0,Ft=1,P+=". Build with -sASSERTIONS for more info.";var j=new WebAssembly.RuntimeError(P);throw Te(j),j}var Ht="data:application/octet-stream;base64,";function Rl(P){return P.startsWith(Ht)}var $n;$n="web-ifc-mt.wasm",Rl($n)||($n=et($n));function Fn(P){if(P==$n&&Xe)return new Uint8Array(Xe);if(ve)return ve(P);throw"both async and sync fetching of the wasm failed"}function On(P){return!Xe&&(fe||Ne)&&typeof fetch=="function"?fetch(P,{credentials:"same-origin"}).then(j=>{if(!j.ok)throw"failed to load wasm binary file at '"+P+"'";return j.arrayBuffer()}).catch(()=>Fn(P)):Promise.resolve().then(()=>Fn(P))}function wn(P,j,se){return On(P).then(Ie=>WebAssembly.instantiate(Ie,j)).then(Ie=>Ie).then(se,Ie=>{ht("failed to asynchronously prepare wasm: "+Ie),Hn(Ie)})}function Zn(P,j,se,Ie){return!P&&typeof WebAssembly.instantiateStreaming=="function"&&!Rl(j)&&typeof fetch=="function"?fetch(j,{credentials:"same-origin"}).then(Pe=>{var ze=WebAssembly.instantiateStreaming(Pe,se);return ze.then(Ie,function(Ke){return ht("wasm streaming compile failed: "+Ke),ht("falling back to ArrayBuffer instantiation"),wn(j,se,Ie)})}):wn(j,se,Ie)}function Ll(){var P={a:O0};function j(Ie,Pe){var ze=Ie.exports;return ze=F2(ze),St=ze,sl(St.ma),mt=St.ka,zt(St.ia),bt=Pe,Pn(),ze}In();function se(Ie){j(Ie.instance,Ie.module)}if(v.instantiateWasm)try{return v.instantiateWasm(P,j)}catch(Ie){ht("Module.instantiateWasm callback failed with error: "+Ie),Te(Ie)}return Zn(Xe,$n,P,se).catch(Te),{}}var hn,yn;function Zt(P){this.name="ExitStatus",this.message=`Program terminated with exit(${P})`,this.status=P}var ut=function(P){P.terminate(),P.onmessage=j=>{}};function qt(P){var j=Qt.pthreads[P];delete Qt.pthreads[P],ut(j),g0(P),Qt.runningWorkers.splice(Qt.runningWorkers.indexOf(j),1),j.pthread_ptr=0}function vt(P){var j=Qt.pthreads[P];j.postMessage({cmd:"cancel"})}function en(P){var j=Qt.pthreads[P];kt(j),Qt.returnWorkerToPool(j)}function Bn(P){var j=Qt.getNewWorker();if(!j)return 6;Qt.runningWorkers.push(j),Qt.pthreads[P.pthread_ptr]=j,j.pthread_ptr=P.pthread_ptr;var se={cmd:"run",start_routine:P.startRoutine,arg:P.arg,pthread_ptr:P.pthread_ptr};return j.postMessage(se,P.transferList),0}var En={isAbs:P=>P.charAt(0)==="/",splitPath:P=>{var j=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return j.exec(P).slice(1)},normalizeArray:(P,j)=>{for(var se=0,Ie=P.length-1;Ie>=0;Ie--){var Pe=P[Ie];Pe==="."?P.splice(Ie,1):Pe===".."?(P.splice(Ie,1),se++):se&&(P.splice(Ie,1),se--)}if(j)for(;se;se--)P.unshift("..");return P},normalize:P=>{var j=En.isAbs(P),se=P.substr(-1)==="/";return P=En.normalizeArray(P.split("/").filter(Ie=>!!Ie),!j).join("/"),!P&&!j&&(P="."),P&&se&&(P+="/"),(j?"/":"")+P},dirname:P=>{var j=En.splitPath(P),se=j[0],Ie=j[1];return!se&&!Ie?".":(Ie&&(Ie=Ie.substr(0,Ie.length-1)),se+Ie)},basename:P=>{if(P==="/")return"/";P=En.normalize(P),P=P.replace(/\/$/,"");var j=P.lastIndexOf("/");return j===-1?P:P.substr(j+1)},join:function(){var P=Array.prototype.slice.call(arguments);return En.normalize(P.join("/"))},join2:(P,j)=>En.normalize(P+"/"+j)},Yl=()=>{if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function")return P=>(P.set(crypto.getRandomValues(new Uint8Array(P.byteLength))),P);Hn("initRandomDevice")},bs=P=>(bs=Yl())(P),ls={resolve:function(){for(var P="",j=!1,se=arguments.length-1;se>=-1&&!j;se--){var Ie=se>=0?arguments[se]:ye.cwd();if(typeof Ie!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!Ie)return"";P=Ie+"/"+P,j=En.isAbs(Ie)}return P=En.normalizeArray(P.split("/").filter(Pe=>!!Pe),!j).join("/"),(j?"/":"")+P||"."},relative:(P,j)=>{P=ls.resolve(P).substr(1),j=ls.resolve(j).substr(1);function se(pt){for(var Wt=0;Wt<pt.length&&pt[Wt]==="";Wt++);for(var cn=pt.length-1;cn>=0&&pt[cn]==="";cn--);return Wt>cn?[]:pt.slice(Wt,cn-Wt+1)}for(var Ie=se(P.split("/")),Pe=se(j.split("/")),ze=Math.min(Ie.length,Pe.length),Ke=ze,$e=0;$e<ze;$e++)if(Ie[$e]!==Pe[$e]){Ke=$e;break}for(var it=[],$e=Ke;$e<Ie.length;$e++)it.push("..");return it=it.concat(Pe.slice(Ke)),it.join("/")}},Ol=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,ds=(P,j,se)=>{j>>>=0;for(var Ie=j+se,Pe=j;P[Pe]&&!(Pe>=Ie);)++Pe;if(Pe-j>16&&P.buffer&&Ol)return Ol.decode(P.buffer instanceof SharedArrayBuffer?P.slice(j,Pe):P.subarray(j,Pe));for(var ze="";j<Pe;){var Ke=P[j++];if(!(Ke&128)){ze+=String.fromCharCode(Ke);continue}var $e=P[j++]&63;if((Ke&224)==192){ze+=String.fromCharCode((Ke&31)<<6|$e);continue}var it=P[j++]&63;if((Ke&240)==224?Ke=(Ke&15)<<12|$e<<6|it:Ke=(Ke&7)<<18|$e<<12|it<<6|P[j++]&63,Ke<65536)ze+=String.fromCharCode(Ke);else{var pt=Ke-65536;ze+=String.fromCharCode(55296|pt>>10,56320|pt&1023)}}return ze},Au=[],fd=P=>{for(var j=0,se=0;se<P.length;++se){var Ie=P.charCodeAt(se);Ie<=127?j++:Ie<=2047?j+=2:Ie>=55296&&Ie<=57343?(j+=4,++se):j+=3}return j},A3=(P,j,se,Ie)=>{if(se>>>=0,!(Ie>0))return 0;for(var Pe=se,ze=se+Ie-1,Ke=0;Ke<P.length;++Ke){var $e=P.charCodeAt(Ke);if($e>=55296&&$e<=57343){var it=P.charCodeAt(++Ke);$e=65536+(($e&1023)<<10)|it&1023}if($e<=127){if(se>=ze)break;j[se++>>>0]=$e}else if($e<=2047){if(se+1>=ze)break;j[se++>>>0]=192|$e>>6,j[se++>>>0]=128|$e&63}else if($e<=65535){if(se+2>=ze)break;j[se++>>>0]=224|$e>>12,j[se++>>>0]=128|$e>>6&63,j[se++>>>0]=128|$e&63}else{if(se+3>=ze)break;j[se++>>>0]=240|$e>>18,j[se++>>>0]=128|$e>>12&63,j[se++>>>0]=128|$e>>6&63,j[se++>>>0]=128|$e&63}}return j[se>>>0]=0,se-Pe};function nc(P,j,se){var Ie=se>0?se:fd(P)+1,Pe=new Array(Ie),ze=A3(P,Pe,0,Pe.length);return j&&(Pe.length=ze),Pe}var A0=()=>{if(!Au.length){var P=null;if(typeof window<"u"&&typeof window.prompt=="function"?(P=window.prompt("Input: "),P!==null&&(P+=`
`)):typeof readline=="function"&&(P=readline(),P!==null&&(P+=`
`)),!P)return null;Au=nc(P,!0)}return Au.shift()},ui={ttys:[],init:function(){},shutdown:function(){},register:function(P,j){ui.ttys[P]={input:[],output:[],ops:j},ye.registerDevice(P,ui.stream_ops)},stream_ops:{open:function(P){var j=ui.ttys[P.node.rdev];if(!j)throw new ye.ErrnoError(43);P.tty=j,P.seekable=!1},close:function(P){P.tty.ops.fsync(P.tty)},fsync:function(P){P.tty.ops.fsync(P.tty)},read:function(P,j,se,Ie,Pe){if(!P.tty||!P.tty.ops.get_char)throw new ye.ErrnoError(60);for(var ze=0,Ke=0;Ke<Ie;Ke++){var $e;try{$e=P.tty.ops.get_char(P.tty)}catch{throw new ye.ErrnoError(29)}if($e===void 0&&ze===0)throw new ye.ErrnoError(6);if($e==null)break;ze++,j[se+Ke]=$e}return ze&&(P.node.timestamp=Date.now()),ze},write:function(P,j,se,Ie,Pe){if(!P.tty||!P.tty.ops.put_char)throw new ye.ErrnoError(60);try{for(var ze=0;ze<Ie;ze++)P.tty.ops.put_char(P.tty,j[se+ze])}catch{throw new ye.ErrnoError(29)}return Ie&&(P.node.timestamp=Date.now()),ze}},default_tty_ops:{get_char:function(P){return A0()},put_char:function(P,j){j===null||j===10?(nt(ds(P.output,0)),P.output=[]):j!=0&&P.output.push(j)},fsync:function(P){P.output&&P.output.length>0&&(nt(ds(P.output,0)),P.output=[])},ioctl_tcgets:function(P){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets:function(P,j,se){return 0},ioctl_tiocgwinsz:function(P){return[24,80]}},default_tty1_ops:{put_char:function(P,j){j===null||j===10?(ht(ds(P.output,0)),P.output=[]):j!=0&&P.output.push(j)},fsync:function(P){P.output&&P.output.length>0&&(ht(ds(P.output,0)),P.output=[])}}},S0=P=>{Hn()},Gn={ops_table:null,mount(P){return Gn.createNode(null,"/",16895,0)},createNode(P,j,se,Ie){if(ye.isBlkdev(se)||ye.isFIFO(se))throw new ye.ErrnoError(63);Gn.ops_table||(Gn.ops_table={dir:{node:{getattr:Gn.node_ops.getattr,setattr:Gn.node_ops.setattr,lookup:Gn.node_ops.lookup,mknod:Gn.node_ops.mknod,rename:Gn.node_ops.rename,unlink:Gn.node_ops.unlink,rmdir:Gn.node_ops.rmdir,readdir:Gn.node_ops.readdir,symlink:Gn.node_ops.symlink},stream:{llseek:Gn.stream_ops.llseek}},file:{node:{getattr:Gn.node_ops.getattr,setattr:Gn.node_ops.setattr},stream:{llseek:Gn.stream_ops.llseek,read:Gn.stream_ops.read,write:Gn.stream_ops.write,allocate:Gn.stream_ops.allocate,mmap:Gn.stream_ops.mmap,msync:Gn.stream_ops.msync}},link:{node:{getattr:Gn.node_ops.getattr,setattr:Gn.node_ops.setattr,readlink:Gn.node_ops.readlink},stream:{}},chrdev:{node:{getattr:Gn.node_ops.getattr,setattr:Gn.node_ops.setattr},stream:ye.chrdev_stream_ops}});var Pe=ye.createNode(P,j,se,Ie);return ye.isDir(Pe.mode)?(Pe.node_ops=Gn.ops_table.dir.node,Pe.stream_ops=Gn.ops_table.dir.stream,Pe.contents={}):ye.isFile(Pe.mode)?(Pe.node_ops=Gn.ops_table.file.node,Pe.stream_ops=Gn.ops_table.file.stream,Pe.usedBytes=0,Pe.contents=null):ye.isLink(Pe.mode)?(Pe.node_ops=Gn.ops_table.link.node,Pe.stream_ops=Gn.ops_table.link.stream):ye.isChrdev(Pe.mode)&&(Pe.node_ops=Gn.ops_table.chrdev.node,Pe.stream_ops=Gn.ops_table.chrdev.stream),Pe.timestamp=Date.now(),P&&(P.contents[j]=Pe,P.timestamp=Pe.timestamp),Pe},getFileDataAsTypedArray(P){return P.contents?P.contents.subarray?P.contents.subarray(0,P.usedBytes):new Uint8Array(P.contents):new Uint8Array(0)},expandFileStorage(P,j){var se=P.contents?P.contents.length:0;if(!(se>=j)){var Ie=1024*1024;j=Math.max(j,se*(se<Ie?2:1.125)>>>0),se!=0&&(j=Math.max(j,256));var Pe=P.contents;P.contents=new Uint8Array(j),P.usedBytes>0&&P.contents.set(Pe.subarray(0,P.usedBytes),0)}},resizeFileStorage(P,j){if(P.usedBytes!=j)if(j==0)P.contents=null,P.usedBytes=0;else{var se=P.contents;P.contents=new Uint8Array(j),se&&P.contents.set(se.subarray(0,Math.min(j,P.usedBytes))),P.usedBytes=j}},node_ops:{getattr(P){var j={};return j.dev=ye.isChrdev(P.mode)?P.id:1,j.ino=P.id,j.mode=P.mode,j.nlink=1,j.uid=0,j.gid=0,j.rdev=P.rdev,ye.isDir(P.mode)?j.size=4096:ye.isFile(P.mode)?j.size=P.usedBytes:ye.isLink(P.mode)?j.size=P.link.length:j.size=0,j.atime=new Date(P.timestamp),j.mtime=new Date(P.timestamp),j.ctime=new Date(P.timestamp),j.blksize=4096,j.blocks=Math.ceil(j.size/j.blksize),j},setattr(P,j){j.mode!==void 0&&(P.mode=j.mode),j.timestamp!==void 0&&(P.timestamp=j.timestamp),j.size!==void 0&&Gn.resizeFileStorage(P,j.size)},lookup(P,j){throw ye.genericErrors[44]},mknod(P,j,se,Ie){return Gn.createNode(P,j,se,Ie)},rename(P,j,se){if(ye.isDir(P.mode)){var Ie;try{Ie=ye.lookupNode(j,se)}catch{}if(Ie)for(var Pe in Ie.contents)throw new ye.ErrnoError(55)}delete P.parent.contents[P.name],P.parent.timestamp=Date.now(),P.name=se,j.contents[se]=P,j.timestamp=P.parent.timestamp,P.parent=j},unlink(P,j){delete P.contents[j],P.timestamp=Date.now()},rmdir(P,j){var se=ye.lookupNode(P,j);for(var Ie in se.contents)throw new ye.ErrnoError(55);delete P.contents[j],P.timestamp=Date.now()},readdir(P){var j=[".",".."];for(var se in P.contents)P.contents.hasOwnProperty(se)&&j.push(se);return j},symlink(P,j,se){var Ie=Gn.createNode(P,j,41471,0);return Ie.link=se,Ie},readlink(P){if(!ye.isLink(P.mode))throw new ye.ErrnoError(28);return P.link}},stream_ops:{read(P,j,se,Ie,Pe){var ze=P.node.contents;if(Pe>=P.node.usedBytes)return 0;var Ke=Math.min(P.node.usedBytes-Pe,Ie);if(Ke>8&&ze.subarray)j.set(ze.subarray(Pe,Pe+Ke),se);else for(var $e=0;$e<Ke;$e++)j[se+$e]=ze[Pe+$e];return Ke},write(P,j,se,Ie,Pe,ze){if(j.buffer===w().buffer&&(ze=!1),!Ie)return 0;var Ke=P.node;if(Ke.timestamp=Date.now(),j.subarray&&(!Ke.contents||Ke.contents.subarray)){if(ze)return Ke.contents=j.subarray(se,se+Ie),Ke.usedBytes=Ie,Ie;if(Ke.usedBytes===0&&Pe===0)return Ke.contents=j.slice(se,se+Ie),Ke.usedBytes=Ie,Ie;if(Pe+Ie<=Ke.usedBytes)return Ke.contents.set(j.subarray(se,se+Ie),Pe),Ie}if(Gn.expandFileStorage(Ke,Pe+Ie),Ke.contents.subarray&&j.subarray)Ke.contents.set(j.subarray(se,se+Ie),Pe);else for(var $e=0;$e<Ie;$e++)Ke.contents[Pe+$e]=j[se+$e];return Ke.usedBytes=Math.max(Ke.usedBytes,Pe+Ie),Ie},llseek(P,j,se){var Ie=j;if(se===1?Ie+=P.position:se===2&&ye.isFile(P.node.mode)&&(Ie+=P.node.usedBytes),Ie<0)throw new ye.ErrnoError(28);return Ie},allocate(P,j,se){Gn.expandFileStorage(P.node,j+se),P.node.usedBytes=Math.max(P.node.usedBytes,j+se)},mmap(P,j,se,Ie,Pe){if(!ye.isFile(P.node.mode))throw new ye.ErrnoError(43);var ze,Ke,$e=P.node.contents;if(!(Pe&2)&&$e.buffer===w().buffer)Ke=!1,ze=$e.byteOffset;else{if((se>0||se+j<$e.length)&&($e.subarray?$e=$e.subarray(se,se+j):$e=Array.prototype.slice.call($e,se,se+j)),Ke=!0,ze=S0(),!ze)throw new ye.ErrnoError(48);w().set($e,ze>>>0)}return{ptr:ze,allocated:Ke}},msync(P,j,se,Ie,Pe){return Gn.stream_ops.write(P,j,0,Ie,se,!1),0}}},L0=(P,j,se,Ie)=>{var Pe=Ie?"":`al ${P}`;Le(P,ze=>{kt(ze,`Loading data file "${P}" failed (no arrayBuffer).`),j(new Uint8Array(ze)),Pe&&Pn()},ze=>{if(se)se();else throw`Loading data file "${P}" failed.`}),Pe&&In()},Id=v.preloadPlugins||[];function b2(P,j,se,Ie){typeof Browser<"u"&&Browser.init();var Pe=!1;return Id.forEach(function(ze){Pe||ze.canHandle(j)&&(ze.handle(P,j,se,Ie),Pe=!0)}),Pe}function ke(P,j,se,Ie,Pe,ze,Ke,$e,it,pt){var Wt=j?ls.resolve(En.join2(P,j)):P;function cn($t){function nn(Cn){pt&&pt(),$e||ye.createDataFile(P,j,Cn,Ie,Pe,it),ze&&ze(),Pn()}b2($t,Wt,nn,()=>{Ke&&Ke(),Pn()})||nn($t)}In(),typeof se=="string"?L0(se,$t=>cn($t),Ke):cn(se)}function ft(P){var j={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},se=j[P];if(typeof se>"u")throw new Error(`Unknown file open mode: ${P}`);return se}function Nt(P,j){var se=0;return P&&(se|=365),j&&(se|=146),se}var ye={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,lookupPath:(P,j={})=>{if(P=ls.resolve(P),!P)return{path:"",node:null};var se={follow_mount:!0,recurse_count:0};if(j=Object.assign(se,j),j.recurse_count>8)throw new ye.ErrnoError(32);for(var Ie=P.split("/").filter(cn=>!!cn),Pe=ye.root,ze="/",Ke=0;Ke<Ie.length;Ke++){var $e=Ke===Ie.length-1;if($e&&j.parent)break;if(Pe=ye.lookupNode(Pe,Ie[Ke]),ze=En.join2(ze,Ie[Ke]),ye.isMountpoint(Pe)&&(!$e||$e&&j.follow_mount)&&(Pe=Pe.mounted.root),!$e||j.follow)for(var it=0;ye.isLink(Pe.mode);){var pt=ye.readlink(ze);ze=ls.resolve(En.dirname(ze),pt);var Wt=ye.lookupPath(ze,{recurse_count:j.recurse_count+1});if(Pe=Wt.node,it++>40)throw new ye.ErrnoError(32)}}return{path:ze,node:Pe}},getPath:P=>{for(var j;;){if(ye.isRoot(P)){var se=P.mount.mountpoint;return j?se[se.length-1]!=="/"?`${se}/${j}`:se+j:se}j=j?`${P.name}/${j}`:P.name,P=P.parent}},hashName:(P,j)=>{for(var se=0,Ie=0;Ie<j.length;Ie++)se=(se<<5)-se+j.charCodeAt(Ie)|0;return(P+se>>>0)%ye.nameTable.length},hashAddNode:P=>{var j=ye.hashName(P.parent.id,P.name);P.name_next=ye.nameTable[j],ye.nameTable[j]=P},hashRemoveNode:P=>{var j=ye.hashName(P.parent.id,P.name);if(ye.nameTable[j]===P)ye.nameTable[j]=P.name_next;else for(var se=ye.nameTable[j];se;){if(se.name_next===P){se.name_next=P.name_next;break}se=se.name_next}},lookupNode:(P,j)=>{var se=ye.mayLookup(P);if(se)throw new ye.ErrnoError(se,P);for(var Ie=ye.hashName(P.id,j),Pe=ye.nameTable[Ie];Pe;Pe=Pe.name_next){var ze=Pe.name;if(Pe.parent.id===P.id&&ze===j)return Pe}return ye.lookup(P,j)},createNode:(P,j,se,Ie)=>{var Pe=new ye.FSNode(P,j,se,Ie);return ye.hashAddNode(Pe),Pe},destroyNode:P=>{ye.hashRemoveNode(P)},isRoot:P=>P===P.parent,isMountpoint:P=>!!P.mounted,isFile:P=>(P&61440)===32768,isDir:P=>(P&61440)===16384,isLink:P=>(P&61440)===40960,isChrdev:P=>(P&61440)===8192,isBlkdev:P=>(P&61440)===24576,isFIFO:P=>(P&61440)===4096,isSocket:P=>(P&49152)===49152,flagsToPermissionString:P=>{var j=["r","w","rw"][P&3];return P&512&&(j+="w"),j},nodePermissions:(P,j)=>ye.ignorePermissions?0:j.includes("r")&&!(P.mode&292)||j.includes("w")&&!(P.mode&146)||j.includes("x")&&!(P.mode&73)?2:0,mayLookup:P=>{var j=ye.nodePermissions(P,"x");return j||(P.node_ops.lookup?0:2)},mayCreate:(P,j)=>{try{var se=ye.lookupNode(P,j);return 20}catch{}return ye.nodePermissions(P,"wx")},mayDelete:(P,j,se)=>{var Ie;try{Ie=ye.lookupNode(P,j)}catch(ze){return ze.errno}var Pe=ye.nodePermissions(P,"wx");if(Pe)return Pe;if(se){if(!ye.isDir(Ie.mode))return 54;if(ye.isRoot(Ie)||ye.getPath(Ie)===ye.cwd())return 10}else if(ye.isDir(Ie.mode))return 31;return 0},mayOpen:(P,j)=>P?ye.isLink(P.mode)?32:ye.isDir(P.mode)&&(ye.flagsToPermissionString(j)!=="r"||j&512)?31:ye.nodePermissions(P,ye.flagsToPermissionString(j)):44,MAX_OPEN_FDS:4096,nextfd:()=>{for(var P=0;P<=ye.MAX_OPEN_FDS;P++)if(!ye.streams[P])return P;throw new ye.ErrnoError(33)},getStreamChecked:P=>{var j=ye.getStream(P);if(!j)throw new ye.ErrnoError(8);return j},getStream:P=>ye.streams[P],createStream:(P,j=-1)=>(ye.FSStream||(ye.FSStream=function(){this.shared={}},ye.FSStream.prototype={},Object.defineProperties(ye.FSStream.prototype,{object:{get(){return this.node},set(se){this.node=se}},isRead:{get(){return(this.flags&2097155)!==1}},isWrite:{get(){return(this.flags&2097155)!==0}},isAppend:{get(){return this.flags&1024}},flags:{get(){return this.shared.flags},set(se){this.shared.flags=se}},position:{get(){return this.shared.position},set(se){this.shared.position=se}}})),P=Object.assign(new ye.FSStream,P),j==-1&&(j=ye.nextfd()),P.fd=j,ye.streams[j]=P,P),closeStream:P=>{ye.streams[P]=null},chrdev_stream_ops:{open:P=>{var j=ye.getDevice(P.node.rdev);P.stream_ops=j.stream_ops,P.stream_ops.open&&P.stream_ops.open(P)},llseek:()=>{throw new ye.ErrnoError(70)}},major:P=>P>>8,minor:P=>P&255,makedev:(P,j)=>P<<8|j,registerDevice:(P,j)=>{ye.devices[P]={stream_ops:j}},getDevice:P=>ye.devices[P],getMounts:P=>{for(var j=[],se=[P];se.length;){var Ie=se.pop();j.push(Ie),se.push.apply(se,Ie.mounts)}return j},syncfs:(P,j)=>{typeof P=="function"&&(j=P,P=!1),ye.syncFSRequests++,ye.syncFSRequests>1&&ht(`warning: ${ye.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var se=ye.getMounts(ye.root.mount),Ie=0;function Pe(Ke){return ye.syncFSRequests--,j(Ke)}function ze(Ke){if(Ke)return ze.errored?void 0:(ze.errored=!0,Pe(Ke));++Ie>=se.length&&Pe(null)}se.forEach(Ke=>{if(!Ke.type.syncfs)return ze(null);Ke.type.syncfs(Ke,P,ze)})},mount:(P,j,se)=>{var Ie=se==="/",Pe=!se,ze;if(Ie&&ye.root)throw new ye.ErrnoError(10);if(!Ie&&!Pe){var Ke=ye.lookupPath(se,{follow_mount:!1});if(se=Ke.path,ze=Ke.node,ye.isMountpoint(ze))throw new ye.ErrnoError(10);if(!ye.isDir(ze.mode))throw new ye.ErrnoError(54)}var $e={type:P,opts:j,mountpoint:se,mounts:[]},it=P.mount($e);return it.mount=$e,$e.root=it,Ie?ye.root=it:ze&&(ze.mounted=$e,ze.mount&&ze.mount.mounts.push($e)),it},unmount:P=>{var j=ye.lookupPath(P,{follow_mount:!1});if(!ye.isMountpoint(j.node))throw new ye.ErrnoError(28);var se=j.node,Ie=se.mounted,Pe=ye.getMounts(Ie);Object.keys(ye.nameTable).forEach(Ke=>{for(var $e=ye.nameTable[Ke];$e;){var it=$e.name_next;Pe.includes($e.mount)&&ye.destroyNode($e),$e=it}}),se.mounted=null;var ze=se.mount.mounts.indexOf(Ie);se.mount.mounts.splice(ze,1)},lookup:(P,j)=>P.node_ops.lookup(P,j),mknod:(P,j,se)=>{var Ie=ye.lookupPath(P,{parent:!0}),Pe=Ie.node,ze=En.basename(P);if(!ze||ze==="."||ze==="..")throw new ye.ErrnoError(28);var Ke=ye.mayCreate(Pe,ze);if(Ke)throw new ye.ErrnoError(Ke);if(!Pe.node_ops.mknod)throw new ye.ErrnoError(63);return Pe.node_ops.mknod(Pe,ze,j,se)},create:(P,j)=>(j=j!==void 0?j:438,j&=4095,j|=32768,ye.mknod(P,j,0)),mkdir:(P,j)=>(j=j!==void 0?j:511,j&=1023,j|=16384,ye.mknod(P,j,0)),mkdirTree:(P,j)=>{for(var se=P.split("/"),Ie="",Pe=0;Pe<se.length;++Pe)if(se[Pe]){Ie+="/"+se[Pe];try{ye.mkdir(Ie,j)}catch(ze){if(ze.errno!=20)throw ze}}},mkdev:(P,j,se)=>(typeof se>"u"&&(se=j,j=438),j|=8192,ye.mknod(P,j,se)),symlink:(P,j)=>{if(!ls.resolve(P))throw new ye.ErrnoError(44);var se=ye.lookupPath(j,{parent:!0}),Ie=se.node;if(!Ie)throw new ye.ErrnoError(44);var Pe=En.basename(j),ze=ye.mayCreate(Ie,Pe);if(ze)throw new ye.ErrnoError(ze);if(!Ie.node_ops.symlink)throw new ye.ErrnoError(63);return Ie.node_ops.symlink(Ie,Pe,P)},rename:(P,j)=>{var se=En.dirname(P),Ie=En.dirname(j),Pe=En.basename(P),ze=En.basename(j),Ke,$e,it;if(Ke=ye.lookupPath(P,{parent:!0}),$e=Ke.node,Ke=ye.lookupPath(j,{parent:!0}),it=Ke.node,!$e||!it)throw new ye.ErrnoError(44);if($e.mount!==it.mount)throw new ye.ErrnoError(75);var pt=ye.lookupNode($e,Pe),Wt=ls.relative(P,Ie);if(Wt.charAt(0)!==".")throw new ye.ErrnoError(28);if(Wt=ls.relative(j,se),Wt.charAt(0)!==".")throw new ye.ErrnoError(55);var cn;try{cn=ye.lookupNode(it,ze)}catch{}if(pt!==cn){var $t=ye.isDir(pt.mode),nn=ye.mayDelete($e,Pe,$t);if(nn)throw new ye.ErrnoError(nn);if(nn=cn?ye.mayDelete(it,ze,$t):ye.mayCreate(it,ze),nn)throw new ye.ErrnoError(nn);if(!$e.node_ops.rename)throw new ye.ErrnoError(63);if(ye.isMountpoint(pt)||cn&&ye.isMountpoint(cn))throw new ye.ErrnoError(10);if(it!==$e&&(nn=ye.nodePermissions($e,"w"),nn))throw new ye.ErrnoError(nn);ye.hashRemoveNode(pt);try{$e.node_ops.rename(pt,it,ze)}catch(Cn){throw Cn}finally{ye.hashAddNode(pt)}}},rmdir:P=>{var j=ye.lookupPath(P,{parent:!0}),se=j.node,Ie=En.basename(P),Pe=ye.lookupNode(se,Ie),ze=ye.mayDelete(se,Ie,!0);if(ze)throw new ye.ErrnoError(ze);if(!se.node_ops.rmdir)throw new ye.ErrnoError(63);if(ye.isMountpoint(Pe))throw new ye.ErrnoError(10);se.node_ops.rmdir(se,Ie),ye.destroyNode(Pe)},readdir:P=>{var j=ye.lookupPath(P,{follow:!0}),se=j.node;if(!se.node_ops.readdir)throw new ye.ErrnoError(54);return se.node_ops.readdir(se)},unlink:P=>{var j=ye.lookupPath(P,{parent:!0}),se=j.node;if(!se)throw new ye.ErrnoError(44);var Ie=En.basename(P),Pe=ye.lookupNode(se,Ie),ze=ye.mayDelete(se,Ie,!1);if(ze)throw new ye.ErrnoError(ze);if(!se.node_ops.unlink)throw new ye.ErrnoError(63);if(ye.isMountpoint(Pe))throw new ye.ErrnoError(10);se.node_ops.unlink(se,Ie),ye.destroyNode(Pe)},readlink:P=>{var j=ye.lookupPath(P),se=j.node;if(!se)throw new ye.ErrnoError(44);if(!se.node_ops.readlink)throw new ye.ErrnoError(28);return ls.resolve(ye.getPath(se.parent),se.node_ops.readlink(se))},stat:(P,j)=>{var se=ye.lookupPath(P,{follow:!j}),Ie=se.node;if(!Ie)throw new ye.ErrnoError(44);if(!Ie.node_ops.getattr)throw new ye.ErrnoError(63);return Ie.node_ops.getattr(Ie)},lstat:P=>ye.stat(P,!0),chmod:(P,j,se)=>{var Ie;if(typeof P=="string"){var Pe=ye.lookupPath(P,{follow:!se});Ie=Pe.node}else Ie=P;if(!Ie.node_ops.setattr)throw new ye.ErrnoError(63);Ie.node_ops.setattr(Ie,{mode:j&4095|Ie.mode&-4096,timestamp:Date.now()})},lchmod:(P,j)=>{ye.chmod(P,j,!0)},fchmod:(P,j)=>{var se=ye.getStreamChecked(P);ye.chmod(se.node,j)},chown:(P,j,se,Ie)=>{var Pe;if(typeof P=="string"){var ze=ye.lookupPath(P,{follow:!Ie});Pe=ze.node}else Pe=P;if(!Pe.node_ops.setattr)throw new ye.ErrnoError(63);Pe.node_ops.setattr(Pe,{timestamp:Date.now()})},lchown:(P,j,se)=>{ye.chown(P,j,se,!0)},fchown:(P,j,se)=>{var Ie=ye.getStreamChecked(P);ye.chown(Ie.node,j,se)},truncate:(P,j)=>{if(j<0)throw new ye.ErrnoError(28);var se;if(typeof P=="string"){var Ie=ye.lookupPath(P,{follow:!0});se=Ie.node}else se=P;if(!se.node_ops.setattr)throw new ye.ErrnoError(63);if(ye.isDir(se.mode))throw new ye.ErrnoError(31);if(!ye.isFile(se.mode))throw new ye.ErrnoError(28);var Pe=ye.nodePermissions(se,"w");if(Pe)throw new ye.ErrnoError(Pe);se.node_ops.setattr(se,{size:j,timestamp:Date.now()})},ftruncate:(P,j)=>{var se=ye.getStreamChecked(P);if(!(se.flags&2097155))throw new ye.ErrnoError(28);ye.truncate(se.node,j)},utime:(P,j,se)=>{var Ie=ye.lookupPath(P,{follow:!0}),Pe=Ie.node;Pe.node_ops.setattr(Pe,{timestamp:Math.max(j,se)})},open:(P,j,se)=>{if(P==="")throw new ye.ErrnoError(44);j=typeof j=="string"?ft(j):j,se=typeof se>"u"?438:se,j&64?se=se&4095|32768:se=0;var Ie;if(typeof P=="object")Ie=P;else{P=En.normalize(P);try{var Pe=ye.lookupPath(P,{follow:!(j&131072)});Ie=Pe.node}catch{}}var ze=!1;if(j&64)if(Ie){if(j&128)throw new ye.ErrnoError(20)}else Ie=ye.mknod(P,se,0),ze=!0;if(!Ie)throw new ye.ErrnoError(44);if(ye.isChrdev(Ie.mode)&&(j&=-513),j&65536&&!ye.isDir(Ie.mode))throw new ye.ErrnoError(54);if(!ze){var Ke=ye.mayOpen(Ie,j);if(Ke)throw new ye.ErrnoError(Ke)}j&512&&!ze&&ye.truncate(Ie,0),j&=-131713;var $e=ye.createStream({node:Ie,path:ye.getPath(Ie),flags:j,seekable:!0,position:0,stream_ops:Ie.stream_ops,ungotten:[],error:!1});return $e.stream_ops.open&&$e.stream_ops.open($e),v.logReadFiles&&!(j&1)&&(ye.readFiles||(ye.readFiles={}),P in ye.readFiles||(ye.readFiles[P]=1)),$e},close:P=>{if(ye.isClosed(P))throw new ye.ErrnoError(8);P.getdents&&(P.getdents=null);try{P.stream_ops.close&&P.stream_ops.close(P)}catch(j){throw j}finally{ye.closeStream(P.fd)}P.fd=null},isClosed:P=>P.fd===null,llseek:(P,j,se)=>{if(ye.isClosed(P))throw new ye.ErrnoError(8);if(!P.seekable||!P.stream_ops.llseek)throw new ye.ErrnoError(70);if(se!=0&&se!=1&&se!=2)throw new ye.ErrnoError(28);return P.position=P.stream_ops.llseek(P,j,se),P.ungotten=[],P.position},read:(P,j,se,Ie,Pe)=>{if(Ie<0||Pe<0)throw new ye.ErrnoError(28);if(ye.isClosed(P))throw new ye.ErrnoError(8);if((P.flags&2097155)===1)throw new ye.ErrnoError(8);if(ye.isDir(P.node.mode))throw new ye.ErrnoError(31);if(!P.stream_ops.read)throw new ye.ErrnoError(28);var ze=typeof Pe<"u";if(!ze)Pe=P.position;else if(!P.seekable)throw new ye.ErrnoError(70);var Ke=P.stream_ops.read(P,j,se,Ie,Pe);return ze||(P.position+=Ke),Ke},write:(P,j,se,Ie,Pe,ze)=>{if(Ie<0||Pe<0)throw new ye.ErrnoError(28);if(ye.isClosed(P))throw new ye.ErrnoError(8);if(!(P.flags&2097155))throw new ye.ErrnoError(8);if(ye.isDir(P.node.mode))throw new ye.ErrnoError(31);if(!P.stream_ops.write)throw new ye.ErrnoError(28);P.seekable&&P.flags&1024&&ye.llseek(P,0,2);var Ke=typeof Pe<"u";if(!Ke)Pe=P.position;else if(!P.seekable)throw new ye.ErrnoError(70);var $e=P.stream_ops.write(P,j,se,Ie,Pe,ze);return Ke||(P.position+=$e),$e},allocate:(P,j,se)=>{if(ye.isClosed(P))throw new ye.ErrnoError(8);if(j<0||se<=0)throw new ye.ErrnoError(28);if(!(P.flags&2097155))throw new ye.ErrnoError(8);if(!ye.isFile(P.node.mode)&&!ye.isDir(P.node.mode))throw new ye.ErrnoError(43);if(!P.stream_ops.allocate)throw new ye.ErrnoError(138);P.stream_ops.allocate(P,j,se)},mmap:(P,j,se,Ie,Pe)=>{if(Ie&2&&!(Pe&2)&&(P.flags&2097155)!==2)throw new ye.ErrnoError(2);if((P.flags&2097155)===1)throw new ye.ErrnoError(2);if(!P.stream_ops.mmap)throw new ye.ErrnoError(43);return P.stream_ops.mmap(P,j,se,Ie,Pe)},msync:(P,j,se,Ie,Pe)=>P.stream_ops.msync?P.stream_ops.msync(P,j,se,Ie,Pe):0,munmap:P=>0,ioctl:(P,j,se)=>{if(!P.stream_ops.ioctl)throw new ye.ErrnoError(59);return P.stream_ops.ioctl(P,j,se)},readFile:(P,j={})=>{if(j.flags=j.flags||0,j.encoding=j.encoding||"binary",j.encoding!=="utf8"&&j.encoding!=="binary")throw new Error(`Invalid encoding type "${j.encoding}"`);var se,Ie=ye.open(P,j.flags),Pe=ye.stat(P),ze=Pe.size,Ke=new Uint8Array(ze);return ye.read(Ie,Ke,0,ze,0),j.encoding==="utf8"?se=ds(Ke,0):j.encoding==="binary"&&(se=Ke),ye.close(Ie),se},writeFile:(P,j,se={})=>{se.flags=se.flags||577;var Ie=ye.open(P,se.flags,se.mode);if(typeof j=="string"){var Pe=new Uint8Array(fd(j)+1),ze=A3(j,Pe,0,Pe.length);ye.write(Ie,Pe,0,ze,void 0,se.canOwn)}else if(ArrayBuffer.isView(j))ye.write(Ie,j,0,j.byteLength,void 0,se.canOwn);else throw new Error("Unsupported data type");ye.close(Ie)},cwd:()=>ye.currentPath,chdir:P=>{var j=ye.lookupPath(P,{follow:!0});if(j.node===null)throw new ye.ErrnoError(44);if(!ye.isDir(j.node.mode))throw new ye.ErrnoError(54);var se=ye.nodePermissions(j.node,"x");if(se)throw new ye.ErrnoError(se);ye.currentPath=j.path},createDefaultDirectories:()=>{ye.mkdir("/tmp"),ye.mkdir("/home"),ye.mkdir("/home/web_user")},createDefaultDevices:()=>{ye.mkdir("/dev"),ye.registerDevice(ye.makedev(1,3),{read:()=>0,write:(Ie,Pe,ze,Ke,$e)=>Ke}),ye.mkdev("/dev/null",ye.makedev(1,3)),ui.register(ye.makedev(5,0),ui.default_tty_ops),ui.register(ye.makedev(6,0),ui.default_tty1_ops),ye.mkdev("/dev/tty",ye.makedev(5,0)),ye.mkdev("/dev/tty1",ye.makedev(6,0));var P=new Uint8Array(1024),j=0,se=()=>(j===0&&(j=bs(P).byteLength),P[--j]);ye.createDevice("/dev","random",se),ye.createDevice("/dev","urandom",se),ye.mkdir("/dev/shm"),ye.mkdir("/dev/shm/tmp")},createSpecialDirectories:()=>{ye.mkdir("/proc");var P=ye.mkdir("/proc/self");ye.mkdir("/proc/self/fd"),ye.mount({mount:()=>{var j=ye.createNode(P,"fd",16895,73);return j.node_ops={lookup:(se,Ie)=>{var Pe=+Ie,ze=ye.getStreamChecked(Pe),Ke={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>ze.path}};return Ke.parent=Ke,Ke}},j}},{},"/proc/self/fd")},createStandardStreams:()=>{v.stdin?ye.createDevice("/dev","stdin",v.stdin):ye.symlink("/dev/tty","/dev/stdin"),v.stdout?ye.createDevice("/dev","stdout",null,v.stdout):ye.symlink("/dev/tty","/dev/stdout"),v.stderr?ye.createDevice("/dev","stderr",null,v.stderr):ye.symlink("/dev/tty1","/dev/stderr"),ye.open("/dev/stdin",0),ye.open("/dev/stdout",1),ye.open("/dev/stderr",1)},ensureErrnoError:()=>{ye.ErrnoError||(ye.ErrnoError=function(j,se){this.name="ErrnoError",this.node=se,this.setErrno=function(Ie){this.errno=Ie},this.setErrno(j),this.message="FS error"},ye.ErrnoError.prototype=new Error,ye.ErrnoError.prototype.constructor=ye.ErrnoError,[44].forEach(P=>{ye.genericErrors[P]=new ye.ErrnoError(P),ye.genericErrors[P].stack="<generic error, no stack>"}))},staticInit:()=>{ye.ensureErrnoError(),ye.nameTable=new Array(4096),ye.mount(Gn,{},"/"),ye.createDefaultDirectories(),ye.createDefaultDevices(),ye.createSpecialDirectories(),ye.filesystems={MEMFS:Gn}},init:(P,j,se)=>{ye.init.initialized=!0,ye.ensureErrnoError(),v.stdin=P||v.stdin,v.stdout=j||v.stdout,v.stderr=se||v.stderr,ye.createStandardStreams()},quit:()=>{ye.init.initialized=!1;for(var P=0;P<ye.streams.length;P++){var j=ye.streams[P];j&&ye.close(j)}},findObject:(P,j)=>{var se=ye.analyzePath(P,j);return se.exists?se.object:null},analyzePath:(P,j)=>{try{var se=ye.lookupPath(P,{follow:!j});P=se.path}catch{}var Ie={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var se=ye.lookupPath(P,{parent:!0});Ie.parentExists=!0,Ie.parentPath=se.path,Ie.parentObject=se.node,Ie.name=En.basename(P),se=ye.lookupPath(P,{follow:!j}),Ie.exists=!0,Ie.path=se.path,Ie.object=se.node,Ie.name=se.node.name,Ie.isRoot=se.path==="/"}catch(Pe){Ie.error=Pe.errno}return Ie},createPath:(P,j,se,Ie)=>{P=typeof P=="string"?P:ye.getPath(P);for(var Pe=j.split("/").reverse();Pe.length;){var ze=Pe.pop();if(ze){var Ke=En.join2(P,ze);try{ye.mkdir(Ke)}catch{}P=Ke}}return Ke},createFile:(P,j,se,Ie,Pe)=>{var ze=En.join2(typeof P=="string"?P:ye.getPath(P),j),Ke=Nt(Ie,Pe);return ye.create(ze,Ke)},createDataFile:(P,j,se,Ie,Pe,ze)=>{var Ke=j;P&&(P=typeof P=="string"?P:ye.getPath(P),Ke=j?En.join2(P,j):P);var $e=Nt(Ie,Pe),it=ye.create(Ke,$e);if(se){if(typeof se=="string"){for(var pt=new Array(se.length),Wt=0,cn=se.length;Wt<cn;++Wt)pt[Wt]=se.charCodeAt(Wt);se=pt}ye.chmod(it,$e|146);var $t=ye.open(it,577);ye.write($t,se,0,se.length,0,ze),ye.close($t),ye.chmod(it,$e)}return it},createDevice:(P,j,se,Ie)=>{var Pe=En.join2(typeof P=="string"?P:ye.getPath(P),j),ze=Nt(!!se,!!Ie);ye.createDevice.major||(ye.createDevice.major=64);var Ke=ye.makedev(ye.createDevice.major++,0);return ye.registerDevice(Ke,{open:$e=>{$e.seekable=!1},close:$e=>{Ie&&Ie.buffer&&Ie.buffer.length&&Ie(10)},read:($e,it,pt,Wt,cn)=>{for(var $t=0,nn=0;nn<Wt;nn++){var Cn;try{Cn=se()}catch{throw new ye.ErrnoError(29)}if(Cn===void 0&&$t===0)throw new ye.ErrnoError(6);if(Cn==null)break;$t++,it[pt+nn]=Cn}return $t&&($e.node.timestamp=Date.now()),$t},write:($e,it,pt,Wt,cn)=>{for(var $t=0;$t<Wt;$t++)try{Ie(it[pt+$t])}catch{throw new ye.ErrnoError(29)}return Wt&&($e.node.timestamp=Date.now()),$t}}),ye.mkdev(Pe,ze,Ke)},forceLoadFile:P=>{if(P.isDevice||P.isFolder||P.link||P.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");if(ge)try{P.contents=nc(ge(P.url),!0),P.usedBytes=P.contents.length}catch{throw new ye.ErrnoError(29)}else throw new Error("Cannot load without read() or XMLHttpRequest.")},createLazyFile:(P,j,se,Ie,Pe)=>{function ze(){this.lengthKnown=!1,this.chunks=[]}if(ze.prototype.get=function(nn){if(!(nn>this.length-1||nn<0)){var Cn=nn%this.chunkSize,Tl=nn/this.chunkSize|0;return this.getter(Tl)[Cn]}},ze.prototype.setDataGetter=function(nn){this.getter=nn},ze.prototype.cacheLength=function(){var nn=new XMLHttpRequest;if(nn.open("HEAD",se,!1),nn.send(null),!(nn.status>=200&&nn.status<300||nn.status===304))throw new Error("Couldn't load "+se+". Status: "+nn.status);var Cn=Number(nn.getResponseHeader("Content-length")),Tl,pl=(Tl=nn.getResponseHeader("Accept-Ranges"))&&Tl==="bytes",Hl=(Tl=nn.getResponseHeader("Content-Encoding"))&&Tl==="gzip",xt=1024*1024;pl||(xt=Cn);var ln=(Pl,vu)=>{if(Pl>vu)throw new Error("invalid range ("+Pl+", "+vu+") or no bytes requested!");if(vu>Cn-1)throw new Error("only "+Cn+" bytes available! programmer error!");var vl=new XMLHttpRequest;if(vl.open("GET",se,!1),Cn!==xt&&vl.setRequestHeader("Range","bytes="+Pl+"-"+vu),vl.responseType="arraybuffer",vl.overrideMimeType&&vl.overrideMimeType("text/plain; charset=x-user-defined"),vl.send(null),!(vl.status>=200&&vl.status<300||vl.status===304))throw new Error("Couldn't load "+se+". Status: "+vl.status);return vl.response!==void 0?new Uint8Array(vl.response||[]):nc(vl.responseText||"",!0)},_s=this;_s.setDataGetter(Pl=>{var vu=Pl*xt,vl=(Pl+1)*xt-1;if(vl=Math.min(vl,Cn-1),typeof _s.chunks[Pl]>"u"&&(_s.chunks[Pl]=ln(vu,vl)),typeof _s.chunks[Pl]>"u")throw new Error("doXHR failed!");return _s.chunks[Pl]}),(Hl||!Cn)&&(xt=Cn=1,Cn=this.getter(0).length,xt=Cn,nt("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=Cn,this._chunkSize=xt,this.lengthKnown=!0},typeof XMLHttpRequest<"u"){if(!Ne)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var Ke=new ze;Object.defineProperties(Ke,{length:{get:function(){return this.lengthKnown||this.cacheLength(),this._length}},chunkSize:{get:function(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}});var $e={isDevice:!1,contents:Ke}}else var $e={isDevice:!1,url:se};var it=ye.createFile(P,j,$e,Ie,Pe);$e.contents?it.contents=$e.contents:$e.url&&(it.contents=null,it.url=$e.url),Object.defineProperties(it,{usedBytes:{get:function(){return this.contents.length}}});var pt={},Wt=Object.keys(it.stream_ops);Wt.forEach($t=>{var nn=it.stream_ops[$t];pt[$t]=function(){return ye.forceLoadFile(it),nn.apply(null,arguments)}});function cn($t,nn,Cn,Tl,pl){var Hl=$t.node.contents;if(pl>=Hl.length)return 0;var xt=Math.min(Hl.length-pl,Tl);if(Hl.slice)for(var ln=0;ln<xt;ln++)nn[Cn+ln]=Hl[pl+ln];else for(var ln=0;ln<xt;ln++)nn[Cn+ln]=Hl.get(pl+ln);return xt}return pt.read=($t,nn,Cn,Tl,pl)=>(ye.forceLoadFile(it),cn($t,nn,Cn,Tl,pl)),pt.mmap=($t,nn,Cn,Tl,pl)=>{ye.forceLoadFile(it);var Hl=S0();if(!Hl)throw new ye.ErrnoError(48);return cn($t,w(),Hl,nn,Cn),{ptr:Hl,allocated:!0}},it.stream_ops=pt,it}},Tt=(P,j)=>(P>>>=0,P?ds(O(),P,j):""),an={DEFAULT_POLLMASK:5,calculateAt:function(P,j,se){if(En.isAbs(j))return j;var Ie;if(P===-100)Ie=ye.cwd();else{var Pe=an.getStreamFromFD(P);Ie=Pe.path}if(j.length==0){if(!se)throw new ye.ErrnoError(44);return Ie}return En.join2(Ie,j)},doStat:function(P,j,se){try{var Ie=P(j)}catch($e){if($e&&$e.node&&En.normalize(j)!==En.normalize(ye.getPath($e.node)))return-54;throw $e}Y()[se>>>2]=Ie.dev,Y()[se+4>>>2]=Ie.mode,Z()[se+8>>>2]=Ie.nlink,Y()[se+12>>>2]=Ie.uid,Y()[se+16>>>2]=Ie.gid,Y()[se+20>>>2]=Ie.rdev,yn=[Ie.size>>>0,(hn=Ie.size,+Math.abs(hn)>=1?hn>0?+Math.floor(hn/4294967296)>>>0:~~+Math.ceil((hn-+(~~hn>>>0))/4294967296)>>>0:0)],Y()[se+24>>>2]=yn[0],Y()[se+28>>>2]=yn[1],Y()[se+32>>>2]=4096,Y()[se+36>>>2]=Ie.blocks;var Pe=Ie.atime.getTime(),ze=Ie.mtime.getTime(),Ke=Ie.ctime.getTime();return yn=[Math.floor(Pe/1e3)>>>0,(hn=Math.floor(Pe/1e3),+Math.abs(hn)>=1?hn>0?+Math.floor(hn/4294967296)>>>0:~~+Math.ceil((hn-+(~~hn>>>0))/4294967296)>>>0:0)],Y()[se+40>>>2]=yn[0],Y()[se+44>>>2]=yn[1],Z()[se+48>>>2]=Pe%1e3*1e3,yn=[Math.floor(ze/1e3)>>>0,(hn=Math.floor(ze/1e3),+Math.abs(hn)>=1?hn>0?+Math.floor(hn/4294967296)>>>0:~~+Math.ceil((hn-+(~~hn>>>0))/4294967296)>>>0:0)],Y()[se+56>>>2]=yn[0],Y()[se+60>>>2]=yn[1],Z()[se+64>>>2]=ze%1e3*1e3,yn=[Math.floor(Ke/1e3)>>>0,(hn=Math.floor(Ke/1e3),+Math.abs(hn)>=1?hn>0?+Math.floor(hn/4294967296)>>>0:~~+Math.ceil((hn-+(~~hn>>>0))/4294967296)>>>0:0)],Y()[se+72>>>2]=yn[0],Y()[se+76>>>2]=yn[1],Z()[se+80>>>2]=Ke%1e3*1e3,yn=[Ie.ino>>>0,(hn=Ie.ino,+Math.abs(hn)>=1?hn>0?+Math.floor(hn/4294967296)>>>0:~~+Math.ceil((hn-+(~~hn>>>0))/4294967296)>>>0:0)],Y()[se+88>>>2]=yn[0],Y()[se+92>>>2]=yn[1],0},doMsync:function(P,j,se,Ie,Pe){if(!ye.isFile(j.node.mode))throw new ye.ErrnoError(43);if(Ie&2)return 0;var ze=O().slice(P,P+se);ye.msync(j,ze,Pe,se,Ie)},varargs:void 0,get(){an.varargs+=4;var P=Y()[an.varargs-4>>>2];return P},getStr(P){var j=Tt(P);return j},getStreamFromFD:function(P){var j=ye.getStreamChecked(P);return j}};function mn(P){if(xe)return Yt(1,1,P);Ft=P,jl()||(Qt.terminateAllThreads(),v.onExit&&v.onExit(P),Ct=!0),me(P,new Zt(P))}var Un=(P,j)=>{if(Ft=P,xe)throw fu(P),"unwind";mn(P)},Vn=Un,el=P=>{if(P instanceof Zt||P=="unwind")return Ft;me(1,P)},Qt={unusedWorkers:[],runningWorkers:[],tlsInitFunctions:[],pthreads:{},init:function(){xe?Qt.initWorker():Qt.initMainThread()},initMainThread:function(){for(var P=navigator.hardwareConcurrency;P--;)Qt.allocateUnusedWorker();Dt(()=>{In(),Qt.loadWasmModuleToAllWorkers(()=>Pn())})},initWorker:function(){at=!1},setExitStatus:function(P){Ft=P},terminateAllThreads__deps:["$terminateWorker"],terminateAllThreads:function(){for(var P of Qt.runningWorkers)ut(P);for(var P of Qt.unusedWorkers)ut(P);Qt.unusedWorkers=[],Qt.runningWorkers=[],Qt.pthreads=[]},returnWorkerToPool:function(P){var j=P.pthread_ptr;delete Qt.pthreads[j],Qt.unusedWorkers.push(P),Qt.runningWorkers.splice(Qt.runningWorkers.indexOf(P),1),P.pthread_ptr=0,g0(j)},receiveObjectTransfer:function(P){},threadInitTLS:function(){Qt.tlsInitFunctions.forEach(P=>P())},loadWasmModuleToWorker:P=>new Promise(j=>{P.onmessage=ze=>{var Ke=ze.data,$e=Ke.cmd;if(Ke.targetThread&&Ke.targetThread!=P3()){var it=Qt.pthreads[Ke.targetThread];it?it.postMessage(Ke,Ke.transferList):ht('Internal error! Worker sent a message "'+$e+'" to target pthread '+Ke.targetThread+", but that thread no longer exists!");return}$e==="checkMailbox"?hc():$e==="spawnThread"?Bn(Ke):$e==="cleanupThread"?en(Ke.thread):$e==="killThread"?qt(Ke.thread):$e==="cancelThread"?vt(Ke.thread):$e==="loaded"?(P.loaded=!0,j(P)):$e==="alert"?alert("Thread "+Ke.threadId+": "+Ke.text):Ke.target==="setimmediate"?P.postMessage(Ke):$e==="callHandler"?v[Ke.handler](...Ke.args):$e&&ht("worker sent an unknown command "+$e)},P.onerror=ze=>{var Ke="worker sent an error!";throw ht(Ke+" "+ze.filename+":"+ze.lineno+": "+ze.message),ze};var se=[],Ie=["onExit","onAbort","print","printErr"];for(var Pe of Ie)v.hasOwnProperty(Pe)&&se.push(Pe);P.postMessage({cmd:"load",handlers:se,urlOrBlob:v.mainScriptUrlOrBlob||t,wasmMemory:It,wasmModule:bt})}),loadWasmModuleToAllWorkers:function(P){if(xe)return P();Promise.all(Qt.unusedWorkers.map(Qt.loadWasmModuleToWorker)).then(P)},allocateUnusedWorker:function(){var P,j=et("web-ifc-mt.worker.js");P=new Worker(j),Qt.unusedWorkers.push(P)},getNewWorker:function(){return Qt.unusedWorkers.length==0&&(Qt.allocateUnusedWorker(),Qt.loadWasmModuleToWorker(Qt.unusedWorkers[0])),Qt.unusedWorkers.pop()}};v.PThread=Qt;var Jn=P=>{for(;P.length>0;)P.shift()(v)};function Ml(){var P=P3(),j=Y()[P+52>>>2],se=Y()[P+56>>>2],Ie=j-se;iy(j,Ie),C0(j)}v.establishStackSpace=Ml;function fu(P){if(xe)return Yt(2,0,P);Vn(P)}var As=[],Su=P=>{var j=As[P];return j||(P>=As.length&&(As.length=P+1),As[P]=j=mt.get(P)),j};function $l(P,j){var se=Su(P)(j);function Ie(Pe){jl()?Qt.setExitStatus(Pe):P0(Pe)}Ie(se)}v.invokeEntryPoint=$l;function sl(P){Qt.tlsInitFunctions.push(P)}function S3(P){this.excPtr=P,this.ptr=P-24,this.set_type=function(j){Z()[this.ptr+4>>>2]=j},this.get_type=function(){return Z()[this.ptr+4>>>2]},this.set_destructor=function(j){Z()[this.ptr+8>>>2]=j},this.get_destructor=function(){return Z()[this.ptr+8>>>2]},this.set_caught=function(j){j=j?1:0,w()[this.ptr+12>>>0]=j},this.get_caught=function(){return w()[this.ptr+12>>>0]!=0},this.set_rethrown=function(j){j=j?1:0,w()[this.ptr+13>>>0]=j},this.get_rethrown=function(){return w()[this.ptr+13>>>0]!=0},this.init=function(j,se){this.set_adjusted_ptr(0),this.set_type(j),this.set_destructor(se)},this.set_adjusted_ptr=function(j){Z()[this.ptr+16>>>2]=j},this.get_adjusted_ptr=function(){return Z()[this.ptr+16>>>2]},this.get_exception_ptr=function(){var j=hy(this.get_type());if(j)return Z()[this.excPtr>>>2];var se=this.get_adjusted_ptr();return se!==0?se:this.excPtr}}var Zl=0;function Lu(P,j){return j+2097152>>>0<4194305-!!P?(P>>>0)+j*4294967296:NaN}function L3(P,j,se){P>>>=0,j>>>=0,se>>>=0;var Ie=new S3(P);throw Ie.init(j,se),Zl=P,Zl}function Fc(P){P>>>=0,ry(P,!Ne,1,!fe,5242880,!1),Qt.threadInitTLS()}function dd(P){P>>>=0,xe?postMessage({cmd:"cleanupThread",thread:P}):en(P)}var Ss={};function $u(P){for(;P.length;){var j=P.pop(),se=P.pop();se(j)}}function ai(P){return this.fromWireType(Y()[P>>>2])}var Ms={},xs={},Gc={},yd=void 0;function Vc(P){throw new yd(P)}function Ou(P,j,se){P.forEach(function($e){Gc[$e]=j});function Ie($e){var it=se($e);it.length!==P.length&&Vc("Mismatched type converter count");for(var pt=0;pt<P.length;++pt)gu(P[pt],it[pt])}var Pe=new Array(j.length),ze=[],Ke=0;j.forEach(($e,it)=>{xs.hasOwnProperty($e)?Pe[it]=xs[$e]:(ze.push($e),Ms.hasOwnProperty($e)||(Ms[$e]=[]),Ms[$e].push(()=>{Pe[it]=xs[$e],++Ke,Ke===ze.length&&Ie(Pe)}))}),ze.length===0&&Ie(Pe)}function wd(P){P>>>=0;var j=Ss[P];delete Ss[P];var se=j.elements,Ie=se.length,Pe=se.map(function($e){return $e.getterReturnType}).concat(se.map(function($e){return $e.setterArgumentType})),ze=j.rawConstructor,Ke=j.rawDestructor;Ou([P],Pe,function($e){return se.forEach((it,pt)=>{var Wt=$e[pt],cn=it.getter,$t=it.getterContext,nn=$e[pt+Ie],Cn=it.setter,Tl=it.setterContext;it.read=pl=>Wt.fromWireType(cn($t,pl)),it.write=(pl,Hl)=>{var xt=[];Cn(Tl,pl,nn.toWireType(xt,Hl)),$u(xt)}}),[{name:j.name,fromWireType:function(it){for(var pt=new Array(Ie),Wt=0;Wt<Ie;++Wt)pt[Wt]=se[Wt].read(it);return Ke(it),pt},toWireType:function(it,pt){if(Ie!==pt.length)throw new TypeError(`Incorrect number of tuple elements for ${j.name}: expected=${Ie}, actual=${pt.length}`);for(var Wt=ze(),cn=0;cn<Ie;++cn)se[cn].write(Wt,pt[cn]);return it!==null&&it.push(Ke,Wt),Wt},argPackAdvance:8,readValueFromPointer:ai,destructorFunction:Ke}]})}var lc={},Hs=function(P){P>>>=0;var j=lc[P];delete lc[P];var se=j.rawConstructor,Ie=j.rawDestructor,Pe=j.fields,ze=Pe.map(Ke=>Ke.getterReturnType).concat(Pe.map(Ke=>Ke.setterArgumentType));Ou([P],ze,Ke=>{var $e={};return Pe.forEach((it,pt)=>{var Wt=it.fieldName,cn=Ke[pt],$t=it.getter,nn=it.getterContext,Cn=Ke[pt+Pe.length],Tl=it.setter,pl=it.setterContext;$e[Wt]={read:Hl=>cn.fromWireType($t(nn,Hl)),write:(Hl,xt)=>{var ln=[];Tl(pl,Hl,Cn.toWireType(ln,xt)),$u(ln)}}}),[{name:j.name,fromWireType:function(it){var pt={};for(var Wt in $e)pt[Wt]=$e[Wt].read(it);return Ie(it),pt},toWireType:function(it,pt){for(var Wt in $e)if(!(Wt in pt))throw new TypeError(`Missing field: "${Wt}"`);var cn=se();for(Wt in $e)$e[Wt].write(cn,pt[Wt]);return it!==null&&it.push(Ie,cn),cn},argPackAdvance:8,readValueFromPointer:ai,destructorFunction:Ie}]})};function Ed(P,j,se,Ie,Pe){}function sc(P){switch(P){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError(`Unknown type size: ${P}`)}}function Xf(){for(var P=new Array(256),j=0;j<256;++j)P[j]=String.fromCharCode(j);Pi=P}var Pi=void 0;function Ls(P){for(var j="",se=P;O()[se>>>0];)j+=Pi[O()[se++>>>0]];return j}var Zu=void 0;function ol(P){throw new Zu(P)}function _c(P,j,se={}){var Ie=j.name;if(P||ol(`type "${Ie}" must have a positive integer typeid pointer`),xs.hasOwnProperty(P)){if(se.ignoreDuplicateRegistrations)return;ol(`Cannot register type '${Ie}' twice`)}if(xs[P]=j,delete Gc[P],Ms.hasOwnProperty(P)){var Pe=Ms[P];delete Ms[P],Pe.forEach(ze=>ze())}}function gu(P,j,se={}){if(!("argPackAdvance"in j))throw new TypeError("registerType registeredInstance requires argPackAdvance");return _c(P,j,se)}function Td(P,j,se,Ie,Pe){P>>>=0,j>>>=0,se>>>=0;var ze=sc(se);j=Ls(j),gu(P,{name:j,fromWireType:function(Ke){return!!Ke},toWireType:function(Ke,$e){return $e?Ie:Pe},argPackAdvance:8,readValueFromPointer:function(Ke){var $e;if(se===1)$e=w();else if(se===2)$e=M();else if(se===4)$e=Y();else throw new TypeError("Unknown boolean type size: "+j);return this.fromWireType($e[Ke>>>ze])},destructorFunction:null})}function Rd(P){if(!(this instanceof Ju)||!(P instanceof Ju))return!1;for(var j=this.$$.ptrType.registeredClass,se=this.$$.ptr,Ie=P.$$.ptrType.registeredClass,Pe=P.$$.ptr;j.baseClass;)se=j.upcast(se),j=j.baseClass;for(;Ie.baseClass;)Pe=Ie.upcast(Pe),Ie=Ie.baseClass;return j===Ie&&se===Pe}function vf(P){return{count:P.count,deleteScheduled:P.deleteScheduled,preservePointerOnDelete:P.preservePointerOnDelete,ptr:P.ptr,ptrType:P.ptrType,smartPtr:P.smartPtr,smartPtrType:P.smartPtrType}}function Vs(P){function j(se){return se.$$.ptrType.registeredClass.name}ol(j(P)+" instance already deleted")}var Ci=!1;function eI(P){}function pd(P){P.smartPtr?P.smartPtrType.rawDestructor(P.smartPtr):P.ptrType.registeredClass.rawDestructor(P.ptr)}function gl(P){P.count.value-=1;var j=P.count.value===0;j&&pd(P)}function tI(P,j,se){if(j===se)return P;if(se.baseClass===void 0)return null;var Ie=tI(P,j,se.baseClass);return Ie===null?null:se.downcast(Ie)}var rc={};function md(){return Object.keys(ii).length}function Dd(){var P=[];for(var j in ii)ii.hasOwnProperty(j)&&P.push(ii[j]);return P}var bi=[];function Wc(){for(;bi.length;){var P=bi.pop();P.$$.deleteScheduled=!1,P.delete()}}var Mi=void 0;function Nd(P){Mi=P,bi.length&&Mi&&Mi(Wc)}function jc(){v.getInheritedInstanceCount=md,v.getLiveInheritedInstances=Dd,v.flushPendingDeletes=Wc,v.setDelayFunction=Nd}var ii={};function uc(P,j){for(j===void 0&&ol("ptr should not be undefined");P.baseClass;)j=P.upcast(j),P=P.baseClass;return j}function nI(P,j){return j=uc(P,j),ii[j]}function Pu(P,j){(!j.ptrType||!j.ptr)&&Vc("makeClassHandle requires ptr and ptrType");var se=!!j.smartPtrType,Ie=!!j.smartPtr;return se!==Ie&&Vc("Both smartPtrType and smartPtr must be specified"),j.count={value:1},xi(Object.create(P,{$$:{value:j}}))}function ac(P){var j=this.getPointee(P);if(!j)return this.destructor(P),null;var se=nI(this.registeredClass,j);if(se!==void 0){if(se.$$.count.value===0)return se.$$.ptr=j,se.$$.smartPtr=P,se.clone();var Ie=se.clone();return this.destructor(P),Ie}function Pe(){return this.isSmartPointer?Pu(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:j,smartPtrType:this,smartPtr:P}):Pu(this.registeredClass.instancePrototype,{ptrType:this,ptr:P})}var ze=this.registeredClass.getActualType(j),Ke=rc[ze];if(!Ke)return Pe.call(this);var $e;this.isConst?$e=Ke.constPointerType:$e=Ke.pointerType;var it=tI(j,this.registeredClass,$e.registeredClass);return it===null?Pe.call(this):this.isSmartPointer?Pu($e.registeredClass.instancePrototype,{ptrType:$e,ptr:it,smartPtrType:this,smartPtr:P}):Pu($e.registeredClass.instancePrototype,{ptrType:$e,ptr:it})}var xi=function(P){return typeof FinalizationRegistry>"u"?(xi=j=>j,P):(Ci=new FinalizationRegistry(j=>{gl(j.$$)}),xi=j=>{var se=j.$$,Ie=!!se.smartPtr;if(Ie){var Pe={$$:se};Ci.register(j,Pe,j)}return j},eI=j=>Ci.unregister(j),xi(P))};function lI(){if(this.$$.ptr||Vs(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var P=xi(Object.create(Object.getPrototypeOf(this),{$$:{value:vf(this.$$)}}));return P.$$.count.value+=1,P.$$.deleteScheduled=!1,P}function Ad(){this.$$.ptr||Vs(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&ol("Object already scheduled for deletion"),eI(this),gl(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function Sd(){return!this.$$.ptr}function Ld(){return this.$$.ptr||Vs(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&ol("Object already scheduled for deletion"),bi.push(this),bi.length===1&&Mi&&Mi(Wc),this.$$.deleteScheduled=!0,this}function Od(){Ju.prototype.isAliasOf=Rd,Ju.prototype.clone=lI,Ju.prototype.delete=Ad,Ju.prototype.isDeleted=Sd,Ju.prototype.deleteLater=Ld}function Ju(){}var gd=48,Pd=57;function Yc(P){if(P===void 0)return"_unknown";P=P.replace(/[^a-zA-Z0-9_]/g,"$");var j=P.charCodeAt(0);return j>=gd&&j<=Pd?`_${P}`:P}function zc(P,j){return P=Yc(P),{[P]:function(){return j.apply(this,arguments)}}[P]}function sI(P,j,se){if(P[j].overloadTable===void 0){var Ie=P[j];P[j]=function(){return P[j].overloadTable.hasOwnProperty(arguments.length)||ol(`Function '${se}' called with an invalid number of arguments (${arguments.length}) - expects one of (${P[j].overloadTable})!`),P[j].overloadTable[arguments.length].apply(this,arguments)},P[j].overloadTable=[],P[j].overloadTable[Ie.argCount]=Ie}}function rI(P,j,se){v.hasOwnProperty(P)?((se===void 0||v[P].overloadTable!==void 0&&v[P].overloadTable[se]!==void 0)&&ol(`Cannot register public name '${P}' twice`),sI(v,P,P),v.hasOwnProperty(se)&&ol(`Cannot register multiple overloads of a function with the same number of arguments (${se})!`),v[P].overloadTable[se]=j):(v[P]=j,se!==void 0&&(v[P].numArguments=se))}function Cd(P,j,se,Ie,Pe,ze,Ke,$e){this.name=P,this.constructor=j,this.instancePrototype=se,this.rawDestructor=Ie,this.baseClass=Pe,this.getActualType=ze,this.upcast=Ke,this.downcast=$e,this.pureVirtualFunctions=[]}function kc(P,j,se){for(;j!==se;)j.upcast||ol(`Expected null or instance of ${se.name}, got an instance of ${j.name}`),P=j.upcast(P),j=j.baseClass;return P}function bd(P,j){if(j===null)return this.isReference&&ol(`null is not a valid ${this.name}`),0;j.$$||ol(`Cannot pass "${$c(j)}" as a ${this.name}`),j.$$.ptr||ol(`Cannot pass deleted object as a pointer of type ${this.name}`);var se=j.$$.ptrType.registeredClass,Ie=kc(j.$$.ptr,se,this.registeredClass);return Ie}function qc(P,j){var se;if(j===null)return this.isReference&&ol(`null is not a valid ${this.name}`),this.isSmartPointer?(se=this.rawConstructor(),P!==null&&P.push(this.rawDestructor,se),se):0;j.$$||ol(`Cannot pass "${$c(j)}" as a ${this.name}`),j.$$.ptr||ol(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&j.$$.ptrType.isConst&&ol(`Cannot convert argument of type ${j.$$.smartPtrType?j.$$.smartPtrType.name:j.$$.ptrType.name} to parameter type ${this.name}`);var Ie=j.$$.ptrType.registeredClass;if(se=kc(j.$$.ptr,Ie,this.registeredClass),this.isSmartPointer)switch(j.$$.smartPtr===void 0&&ol("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:j.$$.smartPtrType===this?se=j.$$.smartPtr:ol(`Cannot convert argument of type ${j.$$.smartPtrType?j.$$.smartPtrType.name:j.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:se=j.$$.smartPtr;break;case 2:if(j.$$.smartPtrType===this)se=j.$$.smartPtr;else{var Pe=j.clone();se=this.rawShare(se,xl.toHandle(function(){Pe.delete()})),P!==null&&P.push(this.rawDestructor,se)}break;default:ol("Unsupporting sharing policy")}return se}function Md(P,j){if(j===null)return this.isReference&&ol(`null is not a valid ${this.name}`),0;j.$$||ol(`Cannot pass "${$c(j)}" as a ${this.name}`),j.$$.ptr||ol(`Cannot pass deleted object as a pointer of type ${this.name}`),j.$$.ptrType.isConst&&ol(`Cannot convert argument of type ${j.$$.ptrType.name} to parameter type ${this.name}`);var se=j.$$.ptrType.registeredClass,Ie=kc(j.$$.ptr,se,this.registeredClass);return Ie}function xd(P){return this.rawGetPointee&&(P=this.rawGetPointee(P)),P}function Hd(P){this.rawDestructor&&this.rawDestructor(P)}function Bd(P){P!==null&&P.delete()}function uI(){Iu.prototype.getPointee=xd,Iu.prototype.destructor=Hd,Iu.prototype.argPackAdvance=8,Iu.prototype.readValueFromPointer=ai,Iu.prototype.deleteObject=Bd,Iu.prototype.fromWireType=ac}function Iu(P,j,se,Ie,Pe,ze,Ke,$e,it,pt,Wt){this.name=P,this.registeredClass=j,this.isReference=se,this.isConst=Ie,this.isSmartPointer=Pe,this.pointeeType=ze,this.sharingPolicy=Ke,this.rawGetPointee=$e,this.rawConstructor=it,this.rawShare=pt,this.rawDestructor=Wt,!Pe&&j.baseClass===void 0?Ie?(this.toWireType=bd,this.destructorFunction=null):(this.toWireType=Md,this.destructorFunction=null):this.toWireType=qc}function aI(P,j,se){v.hasOwnProperty(P)||Vc("Replacing nonexistant public symbol"),v[P].overloadTable!==void 0&&se!==void 0?v[P].overloadTable[se]=j:(v[P]=j,v[P].argCount=se)}var Ud=(P,j,se)=>{var Ie=v["dynCall_"+P];return se&&se.length?Ie.apply(null,[j].concat(se)):Ie.call(null,j)},Fd=(P,j,se)=>{if(P.includes("j"))return Ud(P,j,se);var Ie=Su(j).apply(null,se);return Ie},Gd=(P,j)=>{var se=[];return function(){return se.length=0,Object.assign(se,arguments),Fd(P,j,se)}};function Bs(P,j){P=Ls(P);function se(){return P.includes("j")?Gd(P,j):Su(j)}var Ie=se();return typeof Ie!="function"&&ol(`unknown function pointer with signature ${P}: ${j}`),Ie}function Vd(P,j){var se=zc(j,function(Ie){this.name=j,this.message=Ie;var Pe=new Error(Ie).stack;Pe!==void 0&&(this.stack=this.toString()+`
`+Pe.replace(/^Error(:[^\n]*)?\n/,""))});return se.prototype=Object.create(P.prototype),se.prototype.constructor=se,se.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},se}var iI=void 0;function oI(P){var j=sy(P),se=Ls(j);return Ui(j),se}function ic(P,j){var se=[],Ie={};function Pe(ze){if(!Ie[ze]&&!xs[ze]){if(Gc[ze]){Gc[ze].forEach(Pe);return}se.push(ze),Ie[ze]=!0}}throw j.forEach(Pe),new iI(`${P}: `+se.map(oI).join([", "]))}function _d(P,j,se,Ie,Pe,ze,Ke,$e,it,pt,Wt,cn,$t){P>>>=0,j>>>=0,se>>>=0,Ie>>>=0,Pe>>>=0,ze>>>=0,Ke>>>=0,$e>>>=0,it>>>=0,pt>>>=0,Wt>>>=0,cn>>>=0,$t>>>=0,Wt=Ls(Wt),ze=Bs(Pe,ze),$e&&($e=Bs(Ke,$e)),pt&&(pt=Bs(it,pt)),$t=Bs(cn,$t);var nn=Yc(Wt);rI(nn,function(){ic(`Cannot construct ${Wt} due to unbound types`,[Ie])}),Ou([P,j,se],Ie?[Ie]:[],function(Cn){Cn=Cn[0];var Tl,pl;Ie?(Tl=Cn.registeredClass,pl=Tl.instancePrototype):pl=Ju.prototype;var Hl=zc(nn,function(){if(Object.getPrototypeOf(this)!==xt)throw new Zu("Use 'new' to construct "+Wt);if(ln.constructor_body===void 0)throw new Zu(Wt+" has no accessible constructor");var vl=ln.constructor_body[arguments.length];if(vl===void 0)throw new Zu(`Tried to invoke ctor of ${Wt} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(ln.constructor_body).toString()}) parameters instead!`);return vl.apply(this,arguments)}),xt=Object.create(pl,{constructor:{value:Hl}});Hl.prototype=xt;var ln=new Cd(Wt,Hl,xt,$t,Tl,ze,$e,pt);ln.baseClass&&(ln.baseClass.__derivedClasses===void 0&&(ln.baseClass.__derivedClasses=[]),ln.baseClass.__derivedClasses.push(ln));var _s=new Iu(Wt,ln,!0,!1,!1),Pl=new Iu(Wt+"*",ln,!1,!1,!1),vu=new Iu(Wt+" const*",ln,!1,!0,!1);return rc[P]={pointerType:Pl,constPointerType:vu},aI(nn,Hl),[_s,Pl,vu]})}function Kc(P,j){for(var se=[],Ie=0;Ie<P;Ie++)se.push(Z()[j+Ie*4>>>2]);return se}function Wd(P,j){if(!(P instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof P} which is not a function`);var se=zc(P.name||"unknownFunctionName",function(){});se.prototype=P.prototype;var Ie=new se,Pe=P.apply(Ie,j);return Pe instanceof Object?Pe:Ie}function Qc(P,j,se,Ie,Pe,ze){var Ke=j.length;Ke<2&&ol("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var $e=j[1]!==null&&se!==null,it=!1,pt=1;pt<j.length;++pt)if(j[pt]!==null&&j[pt].destructorFunction===void 0){it=!0;break}for(var Wt=j[0].name!=="void",cn="",$t="",pt=0;pt<Ke-2;++pt)cn+=(pt!==0?", ":"")+"arg"+pt,$t+=(pt!==0?", ":"")+"arg"+pt+"Wired";var nn=`
        return function ${Yc(P)}(${cn}) {
        if (arguments.length !== ${Ke-2}) {
          throwBindingError('function ${P} called with ${arguments.length} arguments, expected ${Ke-2} args!');
        }`;it&&(nn+=`var destructors = [];
`);var Cn=it?"destructors":"null",Tl=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],pl=[ol,Ie,Pe,$u,j[0],j[1]];$e&&(nn+="var thisWired = classParam.toWireType("+Cn+`, this);
`);for(var pt=0;pt<Ke-2;++pt)nn+="var arg"+pt+"Wired = argType"+pt+".toWireType("+Cn+", arg"+pt+"); // "+j[pt+2].name+`
`,Tl.push("argType"+pt),pl.push(j[pt+2]);if($e&&($t="thisWired"+($t.length>0?", ":"")+$t),nn+=(Wt||ze?"var rv = ":"")+"invoker(fn"+($t.length>0?", ":"")+$t+`);
`,it)nn+=`runDestructors(destructors);
`;else for(var pt=$e?1:2;pt<j.length;++pt){var Hl=pt===1?"thisWired":"arg"+(pt-2)+"Wired";j[pt].destructorFunction!==null&&(nn+=Hl+"_dtor("+Hl+"); // "+j[pt].name+`
`,Tl.push(Hl+"_dtor"),pl.push(j[pt].destructorFunction))}return Wt&&(nn+=`var ret = retType.fromWireType(rv);
return ret;
`),nn+=`}
`,Tl.push(nn),Wd(Function,Tl).apply(null,pl)}function Hi(P,j,se,Ie,Pe,ze){P>>>=0,se>>>=0,Ie>>>=0,Pe>>>=0,ze>>>=0;var Ke=Kc(j,se);Pe=Bs(Ie,Pe),Ou([],[P],function($e){$e=$e[0];var it=`constructor ${$e.name}`;if($e.registeredClass.constructor_body===void 0&&($e.registeredClass.constructor_body=[]),$e.registeredClass.constructor_body[j-1]!==void 0)throw new Zu(`Cannot register multiple constructors with identical number of parameters (${j-1}) for class '${$e.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return $e.registeredClass.constructor_body[j-1]=()=>{ic(`Cannot construct ${$e.name} due to unbound types`,Ke)},Ou([],Ke,function(pt){return pt.splice(1,0,null),$e.registeredClass.constructor_body[j-1]=Qc(it,pt,null,Pe,ze),[]}),[]})}function jd(P,j,se,Ie,Pe,ze,Ke,$e,it){P>>>=0,j>>>=0,Ie>>>=0,Pe>>>=0,ze>>>=0,Ke>>>=0;var pt=Kc(se,Ie);j=Ls(j),ze=Bs(Pe,ze),Ou([],[P],function(Wt){Wt=Wt[0];var cn=`${Wt.name}.${j}`;j.startsWith("@@")&&(j=Symbol[j.substring(2)]),$e&&Wt.registeredClass.pureVirtualFunctions.push(j);function $t(){ic(`Cannot call ${cn} due to unbound types`,pt)}var nn=Wt.registeredClass.instancePrototype,Cn=nn[j];return Cn===void 0||Cn.overloadTable===void 0&&Cn.className!==Wt.name&&Cn.argCount===se-2?($t.argCount=se-2,$t.className=Wt.name,nn[j]=$t):(sI(nn,j,cn),nn[j].overloadTable[se-2]=$t),Ou([],pt,function(Tl){var pl=Qc(cn,Tl,Wt,ze,Ke,it);return nn[j].overloadTable===void 0?(pl.argCount=se-2,nn[j]=pl):nn[j].overloadTable[se-2]=pl,[]}),[]})}function Yd(){Object.assign(cI.prototype,{get(P){return this.allocated[P]},has(P){return this.allocated[P]!==void 0},allocate(P){var j=this.freelist.pop()||this.allocated.length;return this.allocated[j]=P,j},free(P){this.allocated[P]=void 0,this.freelist.push(P)}})}function cI(){this.allocated=[void 0],this.freelist=[]}var Zs=new cI;function oc(P){P>>>=0,P>=Zs.reserved&&--Zs.get(P).refcount===0&&Zs.free(P)}function zd(){for(var P=0,j=Zs.reserved;j<Zs.allocated.length;++j)Zs.allocated[j]!==void 0&&++P;return P}function kd(){Zs.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),Zs.reserved=Zs.allocated.length,v.count_emval_handles=zd}var xl={toValue:P=>(P||ol("Cannot use deleted val. handle = "+P),Zs.get(P).value),toHandle:P=>{switch(P){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return Zs.allocate({refcount:1,value:P})}}};function qd(P,j){P>>>=0,j>>>=0,j=Ls(j),gu(P,{name:j,fromWireType:function(se){var Ie=xl.toValue(se);return oc(se),Ie},toWireType:function(se,Ie){return xl.toHandle(Ie)},argPackAdvance:8,readValueFromPointer:ai,destructorFunction:null})}function $c(P){if(P===null)return"null";var j=typeof P;return j==="object"||j==="array"||j==="function"?P.toString():""+P}function Kd(P,j){switch(j){case 2:return function(se){return this.fromWireType(ee()[se>>>2])};case 3:return function(se){return this.fromWireType(te()[se>>>3])};default:throw new TypeError("Unknown float type: "+P)}}function Qd(P,j,se){P>>>=0,j>>>=0,se>>>=0;var Ie=sc(se);j=Ls(j),gu(P,{name:j,fromWireType:function(Pe){return Pe},toWireType:function(Pe,ze){return ze},argPackAdvance:8,readValueFromPointer:Kd(j,Ie),destructorFunction:null})}function Zc(P,j,se,Ie,Pe,ze,Ke){P>>>=0,se>>>=0,Ie>>>=0,Pe>>>=0,ze>>>=0;var $e=Kc(j,se);P=Ls(P),Pe=Bs(Ie,Pe),rI(P,function(){ic(`Cannot call ${P} due to unbound types`,$e)},j-1),Ou([],$e,function(it){var pt=[it[0],null].concat(it.slice(1));return aI(P,Qc(P,pt,null,Pe,ze,Ke),j-1),[]})}function $d(P,j,se){switch(j){case 0:return se?function(Pe){return w()[Pe>>>0]}:function(Pe){return O()[Pe>>>0]};case 1:return se?function(Pe){return M()[Pe>>>1]}:function(Pe){return G()[Pe>>>1]};case 2:return se?function(Pe){return Y()[Pe>>>2]}:function(Pe){return Z()[Pe>>>2]};default:throw new TypeError("Unknown integer type: "+P)}}function Bi(P,j,se,Ie,Pe){P>>>=0,j>>>=0,se>>>=0,j=Ls(j);var ze=sc(se),Ke=cn=>cn;if(Ie===0){var $e=32-8*se;Ke=cn=>cn<<$e>>>$e}var it=j.includes("unsigned"),pt=(cn,$t)=>{},Wt;it?Wt=function(cn,$t){return pt($t,this.name),$t>>>0}:Wt=function(cn,$t){return pt($t,this.name),$t},gu(P,{name:j,fromWireType:Ke,toWireType:Wt,argPackAdvance:8,readValueFromPointer:$d(j,ze,Ie!==0),destructorFunction:null})}function Zd(P,j,se){P>>>=0,se>>>=0;var Ie=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],Pe=Ie[j];function ze(Ke){Ke=Ke>>2;var $e=Z(),it=$e[Ke>>>0],pt=$e[Ke+1>>>0];return new Pe($e.buffer,pt,it)}se=Ls(se),gu(P,{name:se,fromWireType:ze,argPackAdvance:8,readValueFromPointer:ze},{ignoreDuplicateRegistrations:!0})}var yl=(P,j,se)=>A3(P,O(),j,se);function Jd(P,j){P>>>=0,j>>>=0,j=Ls(j);var se=j==="std::string";gu(P,{name:j,fromWireType:function(Ie){var Pe=Z()[Ie>>>2],ze=Ie+4,Ke;if(se)for(var $e=ze,it=0;it<=Pe;++it){var pt=ze+it;if(it==Pe||O()[pt>>>0]==0){var Wt=pt-$e,cn=Tt($e,Wt);Ke===void 0?Ke=cn:(Ke+="\0",Ke+=cn),$e=pt+1}}else{for(var $t=new Array(Pe),it=0;it<Pe;++it)$t[it]=String.fromCharCode(O()[ze+it>>>0]);Ke=$t.join("")}return Ui(Ie),Ke},toWireType:function(Ie,Pe){Pe instanceof ArrayBuffer&&(Pe=new Uint8Array(Pe));var ze,Ke=typeof Pe=="string";Ke||Pe instanceof Uint8Array||Pe instanceof Uint8ClampedArray||Pe instanceof Int8Array||ol("Cannot pass non-string to std::string"),se&&Ke?ze=fd(Pe):ze=Pe.length;var $e=C3(4+ze+1),it=$e+4;if(Z()[$e>>>2]=ze,se&&Ke)yl(Pe,it,ze+1);else if(Ke)for(var pt=0;pt<ze;++pt){var Wt=Pe.charCodeAt(pt);Wt>255&&(Ui(it),ol("String has UTF-16 code units that do not fit in 8 bits")),O()[it+pt>>>0]=Wt}else for(var pt=0;pt<ze;++pt)O()[it+pt>>>0]=Pe[pt];return Ie!==null&&Ie.push(Ui,$e),$e},argPackAdvance:8,readValueFromPointer:ai,destructorFunction:function(Ie){Ui(Ie)}})}var Jc=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Cu=(P,j)=>{for(var se=P,Ie=se>>1,Pe=Ie+j/2;!(Ie>=Pe)&&G()[Ie>>>0];)++Ie;if(se=Ie<<1,se-P>32&&Jc)return Jc.decode(O().slice(P,se));for(var ze="",Ke=0;!(Ke>=j/2);++Ke){var $e=M()[P+Ke*2>>>1];if($e==0)break;ze+=String.fromCharCode($e)}return ze},Xc=(P,j,se)=>{if(se===void 0&&(se=2147483647),se<2)return 0;se-=2;for(var Ie=j,Pe=se<P.length*2?se/2:P.length,ze=0;ze<Pe;++ze){var Ke=P.charCodeAt(ze);M()[j>>>1]=Ke,j+=2}return M()[j>>>1]=0,j-Ie},cc=P=>P.length*2,Xd=(P,j)=>{for(var se=0,Ie="";!(se>=j/4);){var Pe=Y()[P+se*4>>>2];if(Pe==0)break;if(++se,Pe>=65536){var ze=Pe-65536;Ie+=String.fromCharCode(55296|ze>>10,56320|ze&1023)}else Ie+=String.fromCharCode(Pe)}return Ie},ka=(P,j,se)=>{if(j>>>=0,se===void 0&&(se=2147483647),se<4)return 0;for(var Ie=j,Pe=Ie+se-4,ze=0;ze<P.length;++ze){var Ke=P.charCodeAt(ze);if(Ke>=55296&&Ke<=57343){var $e=P.charCodeAt(++ze);Ke=65536+((Ke&1023)<<10)|$e&1023}if(Y()[j>>>2]=Ke,j+=4,j+4>Pe)break}return Y()[j>>>2]=0,j-Ie},hI=P=>{for(var j=0,se=0;se<P.length;++se){var Ie=P.charCodeAt(se);Ie>=55296&&Ie<=57343&&++se,j+=4}return j},jn=function(P,j,se){P>>>=0,j>>>=0,se>>>=0,se=Ls(se);var Ie,Pe,ze,Ke,$e;j===2?(Ie=Cu,Pe=Xc,Ke=cc,ze=()=>G(),$e=1):j===4&&(Ie=Xd,Pe=ka,Ke=hI,ze=()=>Z(),$e=2),gu(P,{name:se,fromWireType:function(it){for(var pt=Z()[it>>>2],Wt=ze(),cn,$t=it+4,nn=0;nn<=pt;++nn){var Cn=it+4+nn*j;if(nn==pt||Wt[Cn>>>$e]==0){var Tl=Cn-$t,pl=Ie($t,Tl);cn===void 0?cn=pl:(cn+="\0",cn+=pl),$t=Cn+j}}return Ui(it),cn},toWireType:function(it,pt){typeof pt!="string"&&ol(`Cannot pass non-string to C++ string type ${se}`);var Wt=Ke(pt),cn=C3(4+Wt+j);return Z()[cn>>>2]=Wt>>$e,Pe(pt,cn+4,Wt+j),it!==null&&it.push(Ui,cn),cn},argPackAdvance:8,readValueFromPointer:ai,destructorFunction:function(it){Ui(it)}})};function vd(P,j,se,Ie,Pe,ze){P>>>=0,j>>>=0,se>>>=0,Ie>>>=0,Pe>>>=0,ze>>>=0,Ss[P]={name:Ls(j),rawConstructor:Bs(se,Ie),rawDestructor:Bs(Pe,ze),elements:[]}}function e1(P,j,se,Ie,Pe,ze,Ke,$e,it){P>>>=0,j>>>=0,se>>>=0,Ie>>>=0,Pe>>>=0,ze>>>=0,Ke>>>=0,$e>>>=0,it>>>=0,Ss[P].elements.push({getterReturnType:j,getter:Bs(se,Ie),getterContext:Pe,setterArgumentType:ze,setter:Bs(Ke,$e),setterContext:it})}function t1(P,j,se,Ie,Pe,ze){P>>>=0,j>>>=0,se>>>=0,Ie>>>=0,Pe>>>=0,ze>>>=0,lc[P]={name:Ls(j),rawConstructor:Bs(se,Ie),rawDestructor:Bs(Pe,ze),fields:[]}}function n1(P,j,se,Ie,Pe,ze,Ke,$e,it,pt){P>>>=0,j>>>=0,se>>>=0,Ie>>>=0,Pe>>>=0,ze>>>=0,Ke>>>=0,$e>>>=0,it>>>=0,pt>>>=0,lc[P].fields.push({fieldName:Ls(j),getterReturnType:se,getter:Bs(Ie,Pe),getterContext:ze,setterArgumentType:Ke,setter:Bs($e,it),setterContext:pt})}function l1(P,j){P>>>=0,j>>>=0,j=Ls(j),gu(P,{isVoid:!0,name:j,argPackAdvance:0,fromWireType:function(){},toWireType:function(se,Ie){}})}var vc=!0,Me=()=>vc,Xu=()=>{if(!jl())try{xe?P0(Ft):Vn(Ft)}catch(P){el(P)}},s1=P=>{if(!Ct)try{P(),Xu()}catch(j){el(j)}};function eh(P){if(P>>>=0,typeof Atomics.waitAsync=="function"){var j=Atomics.waitAsync(Y(),P>>2,P);j.value.then(hc);var se=P+128;Atomics.store(Y(),se>>2,1)}}v.__emscripten_thread_mailbox_await=eh;var hc=function(){var P=P3();P&&(eh(P),s1(()=>ay()))};v.checkMailbox=hc;var r1=function(P,j,se){if(P>>>=0,j>>>=0,P==j)setTimeout(()=>hc());else if(xe)postMessage({targetThread:P,cmd:"checkMailbox"});else{var Ie=Qt.pthreads[P];if(!Ie)return;Ie.postMessage({cmd:"checkMailbox"})}};function u1(P,j,se){return-1}function a1(P){}function th(P,j){var se=xs[P];return se===void 0&&ol(j+" has unknown type "+oI(P)),se}function i1(P,j,se){P>>>=0,j>>>=0,se>>>=0,P=xl.toValue(P),j=th(j,"emval::as");var Ie=[],Pe=xl.toHandle(Ie);return Z()[se>>>2]=Pe,j.toWireType(Ie,P)}function o1(P,j){for(var se=new Array(P),Ie=0;Ie<P;++Ie)se[Ie]=th(Z()[j+Ie*4>>>2],"parameter "+Ie);return se}function c1(P,j,se,Ie){P>>>=0,se>>>=0,Ie>>>=0,P=xl.toValue(P);for(var Pe=o1(j,se),ze=new Array(j),Ke=0;Ke<j;++Ke){var $e=Pe[Ke];ze[Ke]=$e.readValueFromPointer(Ie),Ie+=$e.argPackAdvance}var it=P.apply(void 0,ze);return xl.toHandle(it)}var fI={};function nh(P){var j=fI[P];return j===void 0?Ls(P):j}function II(){return typeof globalThis=="object"?globalThis:function(){return Function}()("return this")()}function h1(P){return P>>>=0,P===0?xl.toHandle(II()):(P=nh(P),xl.toHandle(II()[P]))}function f1(P,j){return P>>>=0,j>>>=0,P=xl.toValue(P),j=xl.toValue(j),xl.toHandle(P[j])}function I1(P){P>>>=0,P>4&&(Zs.get(P).refcount+=1)}function dI(P,j){return P>>>=0,j>>>=0,P=xl.toValue(P),j=xl.toValue(j),P instanceof j}function fc(P){return P>>>=0,P=xl.toValue(P),typeof P=="number"}function Ic(P){return P>>>=0,P=xl.toValue(P),typeof P=="string"}function d1(){return xl.toHandle([])}function dc(P){return P>>>=0,xl.toHandle(nh(P))}function yI(){return xl.toHandle({})}function bu(P){P>>>=0;var j=xl.toValue(P);$u(j),oc(P)}function wI(P,j,se){P>>>=0,j>>>=0,se>>>=0,P=xl.toValue(P),j=xl.toValue(j),se=xl.toValue(se),P[j]=se}function y1(P,j){P>>>=0,j>>>=0,P=th(P,"_emval_take_value");var se=P.readValueFromPointer(j);return xl.toHandle(se)}function yc(P,j,se){var Ie=Lu(P,j);se>>>=0;var Pe=new Date(Ie*1e3);Y()[se>>>2]=Pe.getUTCSeconds(),Y()[se+4>>>2]=Pe.getUTCMinutes(),Y()[se+8>>>2]=Pe.getUTCHours(),Y()[se+12>>>2]=Pe.getUTCDate(),Y()[se+16>>>2]=Pe.getUTCMonth(),Y()[se+20>>>2]=Pe.getUTCFullYear()-1900,Y()[se+24>>>2]=Pe.getUTCDay();var ze=Date.UTC(Pe.getUTCFullYear(),0,1,0,0,0,0),Ke=(Pe.getTime()-ze)/(1e3*60*60*24)|0;Y()[se+28>>>2]=Ke}var oi=P=>P%4===0&&(P%100!==0||P%400===0),H=[0,31,60,91,121,152,182,213,244,274,305,335],k=[0,31,59,90,120,151,181,212,243,273,304,334],re=P=>{var j=oi(P.getFullYear()),se=j?H:k,Ie=se[P.getMonth()]+P.getDate()-1;return Ie};function de(P,j,se){var Ie=Lu(P,j);se>>>=0;var Pe=new Date(Ie*1e3);Y()[se>>>2]=Pe.getSeconds(),Y()[se+4>>>2]=Pe.getMinutes(),Y()[se+8>>>2]=Pe.getHours(),Y()[se+12>>>2]=Pe.getDate(),Y()[se+16>>>2]=Pe.getMonth(),Y()[se+20>>>2]=Pe.getFullYear()-1900,Y()[se+24>>>2]=Pe.getDay();var ze=re(Pe)|0;Y()[se+28>>>2]=ze,Y()[se+36>>>2]=-(Pe.getTimezoneOffset()*60);var Ke=new Date(Pe.getFullYear(),0,1),$e=new Date(Pe.getFullYear(),6,1).getTimezoneOffset(),it=Ke.getTimezoneOffset(),pt=($e!=it&&Pe.getTimezoneOffset()==Math.min(it,$e))|0;Y()[se+32>>>2]=pt}var be=P=>{var j=fd(P)+1,se=C3(j);return se&&yl(P,se,j),se};function qe(P,j,se){P>>>=0,j>>>=0,se>>>=0;var Ie=new Date().getFullYear(),Pe=new Date(Ie,0,1),ze=new Date(Ie,6,1),Ke=Pe.getTimezoneOffset(),$e=ze.getTimezoneOffset(),it=Math.max(Ke,$e);Z()[P>>>2]=it*60,Y()[j>>>2]=+(Ke!=$e);function pt(Cn){var Tl=Cn.toTimeString().match(/\(([A-Za-z ]+)\)$/);return Tl?Tl[1]:"GMT"}var Wt=pt(Pe),cn=pt(ze),$t=be(Wt),nn=be(cn);$e<Ke?(Z()[se>>>2]=$t,Z()[se+4>>>2]=nn):(Z()[se>>>2]=nn,Z()[se+4>>>2]=$t)}var Ze=()=>{Hn("")};function Je(){}function ot(){return Date.now()}var Et=()=>{Ln+=1},Bt=()=>{throw Et(),"unwind"},tn;tn=()=>performance.timeOrigin+performance.now();var Kt=P=>{var j=oy(),se=P();return C0(j),se},Yt=function(P,j){var se=arguments.length-2,Ie=arguments;return Kt(()=>{for(var Pe=se,ze=cy(Pe*8),Ke=ze>>3,$e=0;$e<se;$e++){var it=Ie[2+$e];te()[Ke+$e>>>0]=it}return uy(P,Pe,ze,j)})},Tn=[];function rl(P,j,se,Ie){j>>>=0,Ie>>>=0,Qt.currentProxiedOperationCallerThread=j,Tn.length=se;for(var Pe=Ie>>3,ze=0;ze<se;ze++)Tn[ze]=te()[Pe+ze>>>0];var Ke=U2[P];return Ke.apply(null,Tn)}var al=()=>4294901760,wl=P=>{var j=It.buffer,se=P-j.byteLength+65535>>>16;try{return It.grow(se),pn(),1}catch{}};function Mt(P){P>>>=0;var j=O().length;if(P<=j)return!1;var se=al();if(P>se)return!1;for(var Ie=(it,pt)=>it+(pt-it%pt)%pt,Pe=1;Pe<=4;Pe*=2){var ze=j*(1+.2/Pe);ze=Math.min(ze,P+100663296);var Ke=Math.min(se,Ie(Math.max(P,ze),65536)),$e=wl(Ke);if($e)return!0}return!1}var sn={},ys=()=>ie||"./this.program",cl=()=>{if(!cl.strings){var P=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",j={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:P,_:ys()};for(var se in sn)sn[se]===void 0?delete j[se]:j[se]=sn[se];var Ie=[];for(var se in j)Ie.push(`${se}=${j[se]}`);cl.strings=Ie}return cl.strings},Js=(P,j)=>{for(var se=0;se<P.length;++se)w()[j++>>>0]=P.charCodeAt(se);w()[j>>>0]=0};function Jl(P,j){if(xe)return Yt(3,1,P,j);P>>>=0,j>>>=0;var se=0;return cl().forEach(function(Ie,Pe){var ze=j+se;Z()[P+Pe*4>>>2]=ze,Js(Ie,ze),se+=Ie.length+1}),0}function Q5(P,j){if(xe)return Yt(4,1,P,j);P>>>=0,j>>>=0;var se=cl();Z()[P>>>2]=se.length;var Ie=0;return se.forEach(function(Pe){Ie+=Pe.length+1}),Z()[j>>>2]=Ie,0}function $5(P){if(xe)return Yt(5,1,P);try{var j=an.getStreamFromFD(P);return ye.close(j),0}catch(se){if(typeof ye>"u"||se.name!=="ErrnoError")throw se;return se.errno}}function Z5(P,j){if(xe)return Yt(6,1,P,j);j>>>=0;try{var se=0,Ie=0,Pe=0,ze=an.getStreamFromFD(P),Ke=ze.tty?2:ye.isDir(ze.mode)?3:ye.isLink(ze.mode)?7:4;return w()[j>>>0]=Ke,M()[j+2>>>1]=Pe,yn=[se>>>0,(hn=se,+Math.abs(hn)>=1?hn>0?+Math.floor(hn/4294967296)>>>0:~~+Math.ceil((hn-+(~~hn>>>0))/4294967296)>>>0:0)],Y()[j+8>>>2]=yn[0],Y()[j+12>>>2]=yn[1],yn=[Ie>>>0,(hn=Ie,+Math.abs(hn)>=1?hn>0?+Math.floor(hn/4294967296)>>>0:~~+Math.ceil((hn-+(~~hn>>>0))/4294967296)>>>0:0)],Y()[j+16>>>2]=yn[0],Y()[j+20>>>2]=yn[1],0}catch($e){if(typeof ye>"u"||$e.name!=="ErrnoError")throw $e;return $e.errno}}var O3=(P,j,se,Ie)=>{for(var Pe=0,ze=0;ze<se;ze++){var Ke=Z()[j>>>2],$e=Z()[j+4>>>2];j+=8;var it=ye.read(P,w(),Ke,$e,Ie);if(it<0)return-1;if(Pe+=it,it<$e)break;typeof Ie<"u"&&(Ie+=it)}return Pe};function J5(P,j,se,Ie){if(xe)return Yt(7,1,P,j,se,Ie);j>>>=0,se>>>=0,Ie>>>=0;try{var Pe=an.getStreamFromFD(P),ze=O3(Pe,j,se);return Z()[Ie>>>2]=ze,0}catch(Ke){if(typeof ye>"u"||Ke.name!=="ErrnoError")throw Ke;return Ke.errno}}function X5(P,j,se,Ie,Pe){if(xe)return Yt(8,1,P,j,se,Ie,Pe);var ze=Lu(j,se);Pe>>>=0;try{if(isNaN(ze))return 61;var Ke=an.getStreamFromFD(P);return ye.llseek(Ke,ze,Ie),yn=[Ke.position>>>0,(hn=Ke.position,+Math.abs(hn)>=1?hn>0?+Math.floor(hn/4294967296)>>>0:~~+Math.ceil((hn-+(~~hn>>>0))/4294967296)>>>0:0)],Y()[Pe>>>2]=yn[0],Y()[Pe+4>>>2]=yn[1],Ke.getdents&&ze===0&&Ie===0&&(Ke.getdents=null),0}catch($e){if(typeof ye>"u"||$e.name!=="ErrnoError")throw $e;return $e.errno}}var v5=(P,j,se,Ie)=>{for(var Pe=0,ze=0;ze<se;ze++){var Ke=Z()[j>>>2],$e=Z()[j+4>>>2];j+=8;var it=ye.write(P,w(),Ke,$e,Ie);if(it<0)return-1;Pe+=it,typeof Ie<"u"&&(Ie+=it)}return Pe};function ey(P,j,se,Ie){if(xe)return Yt(9,1,P,j,se,Ie);j>>>=0,se>>>=0,Ie>>>=0;try{var Pe=an.getStreamFromFD(P),ze=v5(Pe,j,se);return Z()[Ie>>>2]=ze,0}catch(Ke){if(typeof ye>"u"||Ke.name!=="ErrnoError")throw Ke;return Ke.errno}}var M2=(P,j)=>{for(var se=0,Ie=0;Ie<=j;se+=P[Ie++]);return se},ty=[31,29,31,30,31,30,31,31,30,31,30,31],ny=[31,28,31,30,31,30,31,31,30,31,30,31],x2=(P,j)=>{for(var se=new Date(P.getTime());j>0;){var Ie=oi(se.getFullYear()),Pe=se.getMonth(),ze=(Ie?ty:ny)[Pe];if(j>ze-se.getDate())j-=ze-se.getDate()+1,se.setDate(1),Pe<11?se.setMonth(Pe+1):(se.setMonth(0),se.setFullYear(se.getFullYear()+1));else return se.setDate(se.getDate()+j),se}return se},H2=(P,j)=>{w().set(P,j>>>0)};function B2(P,j,se,Ie){P>>>=0,j>>>=0,se>>>=0,Ie>>>=0;var Pe=Y()[Ie+40>>>2],ze={tm_sec:Y()[Ie>>>2],tm_min:Y()[Ie+4>>>2],tm_hour:Y()[Ie+8>>>2],tm_mday:Y()[Ie+12>>>2],tm_mon:Y()[Ie+16>>>2],tm_year:Y()[Ie+20>>>2],tm_wday:Y()[Ie+24>>>2],tm_yday:Y()[Ie+28>>>2],tm_isdst:Y()[Ie+32>>>2],tm_gmtoff:Y()[Ie+36>>>2],tm_zone:Pe?Tt(Pe):""},Ke=Tt(se),$e={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var it in $e)Ke=Ke.replace(new RegExp(it,"g"),$e[it]);var pt=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Wt=["January","February","March","April","May","June","July","August","September","October","November","December"];function cn(xt,ln,_s){for(var Pl=typeof xt=="number"?xt.toString():xt||"";Pl.length<ln;)Pl=_s[0]+Pl;return Pl}function $t(xt,ln){return cn(xt,ln,"0")}function nn(xt,ln){function _s(vu){return vu<0?-1:vu>0?1:0}var Pl;return(Pl=_s(xt.getFullYear()-ln.getFullYear()))===0&&(Pl=_s(xt.getMonth()-ln.getMonth()))===0&&(Pl=_s(xt.getDate()-ln.getDate())),Pl}function Cn(xt){switch(xt.getDay()){case 0:return new Date(xt.getFullYear()-1,11,29);case 1:return xt;case 2:return new Date(xt.getFullYear(),0,3);case 3:return new Date(xt.getFullYear(),0,2);case 4:return new Date(xt.getFullYear(),0,1);case 5:return new Date(xt.getFullYear()-1,11,31);case 6:return new Date(xt.getFullYear()-1,11,30)}}function Tl(xt){var ln=x2(new Date(xt.tm_year+1900,0,1),xt.tm_yday),_s=new Date(ln.getFullYear(),0,4),Pl=new Date(ln.getFullYear()+1,0,4),vu=Cn(_s),vl=Cn(Pl);return nn(vu,ln)<=0?nn(vl,ln)<=0?ln.getFullYear()+1:ln.getFullYear():ln.getFullYear()-1}var pl={"%a":xt=>pt[xt.tm_wday].substring(0,3),"%A":xt=>pt[xt.tm_wday],"%b":xt=>Wt[xt.tm_mon].substring(0,3),"%B":xt=>Wt[xt.tm_mon],"%C":xt=>{var ln=xt.tm_year+1900;return $t(ln/100|0,2)},"%d":xt=>$t(xt.tm_mday,2),"%e":xt=>cn(xt.tm_mday,2," "),"%g":xt=>Tl(xt).toString().substring(2),"%G":xt=>Tl(xt),"%H":xt=>$t(xt.tm_hour,2),"%I":xt=>{var ln=xt.tm_hour;return ln==0?ln=12:ln>12&&(ln-=12),$t(ln,2)},"%j":xt=>$t(xt.tm_mday+M2(oi(xt.tm_year+1900)?ty:ny,xt.tm_mon-1),3),"%m":xt=>$t(xt.tm_mon+1,2),"%M":xt=>$t(xt.tm_min,2),"%n":()=>`
`,"%p":xt=>xt.tm_hour>=0&&xt.tm_hour<12?"AM":"PM","%S":xt=>$t(xt.tm_sec,2),"%t":()=>"	","%u":xt=>xt.tm_wday||7,"%U":xt=>{var ln=xt.tm_yday+7-xt.tm_wday;return $t(Math.floor(ln/7),2)},"%V":xt=>{var ln=Math.floor((xt.tm_yday+7-(xt.tm_wday+6)%7)/7);if((xt.tm_wday+371-xt.tm_yday-2)%7<=2&&ln++,ln){if(ln==53){var Pl=(xt.tm_wday+371-xt.tm_yday)%7;Pl!=4&&(Pl!=3||!oi(xt.tm_year))&&(ln=1)}}else{ln=52;var _s=(xt.tm_wday+7-xt.tm_yday-1)%7;(_s==4||_s==5&&oi(xt.tm_year%400-1))&&ln++}return $t(ln,2)},"%w":xt=>xt.tm_wday,"%W":xt=>{var ln=xt.tm_yday+7-(xt.tm_wday+6)%7;return $t(Math.floor(ln/7),2)},"%y":xt=>(xt.tm_year+1900).toString().substring(2),"%Y":xt=>xt.tm_year+1900,"%z":xt=>{var ln=xt.tm_gmtoff,_s=ln>=0;return ln=Math.abs(ln)/60,ln=ln/60*100+ln%60,(_s?"+":"-")+("0000"+ln).slice(-4)},"%Z":xt=>xt.tm_zone,"%%":()=>"%"};Ke=Ke.replace(/%%/g,"\0\0");for(var it in pl)Ke.includes(it)&&(Ke=Ke.replace(new RegExp(it,"g"),pl[it](ze)));Ke=Ke.replace(/\0\0/g,"%");var Hl=nc(Ke,!1);return Hl.length>j?0:(H2(Hl,P),Hl.length-1)}function ly(P,j,se,Ie,Pe){return P>>>=0,j>>>=0,se>>>=0,Ie>>>=0,B2(P,j,se,Ie)}Qt.init();var EI=function(P,j,se,Ie){P||(P=this),this.parent=P,this.mount=P.mount,this.mounted=null,this.id=ye.nextInode++,this.name=j,this.mode=se,this.node_ops={},this.stream_ops={},this.rdev=Ie},w1=365,g3=146;Object.defineProperties(EI.prototype,{read:{get:function(){return(this.mode&w1)===w1},set:function(P){P?this.mode|=w1:this.mode&=~w1}},write:{get:function(){return(this.mode&g3)===g3},set:function(P){P?this.mode|=g3:this.mode&=~g3}},isFolder:{get:function(){return ye.isDir(this.mode)}},isDevice:{get:function(){return ye.isChrdev(this.mode)}}}),ye.FSNode=EI,ye.createPreloadedFile=ke,ye.staticInit(),yd=v.InternalError=class extends Error{constructor(j){super(j),this.name="InternalError"}},Xf(),Zu=v.BindingError=class extends Error{constructor(j){super(j),this.name="BindingError"}},Od(),jc(),uI(),iI=v.UnboundTypeError=Vd(Error,"UnboundTypeError"),Yd(),kd();var U2=[null,mn,fu,Jl,Q5,$5,Z5,J5,X5,ey],O0={g:L3,Y:Fc,B:dd,fa:wd,r:Hs,K:Ed,da:Td,q:_d,p:Hi,c:jd,ca:qd,D:Qd,d:Zc,t:Bi,l:Zd,E:Jd,y:jn,ga:vd,m:e1,s:t1,f:n1,ea:l1,T:Me,R:r1,W:u1,X:eh,ba:a1,k:i1,x:c1,b:oc,A:h1,i:f1,o:I1,G:dI,z:fc,F:Ic,ha:d1,h:dc,v:yI,j:bu,n:wI,e:y1,I:yc,J:de,Q:qe,w:Ze,C:Je,U:ot,aa:Bt,u:tn,V:rl,P:Mt,_:Jl,$:Q5,L:Vn,N:$5,Z:Z5,O:J5,H:X5,S:ey,a:It||v.wasmMemory,M:ly};Ll();var P3=v._pthread_self=()=>(P3=v._pthread_self=St.ja)(),C3=P=>(C3=St.la)(P);v.__emscripten_tls_init=()=>(v.__emscripten_tls_init=St.ma)();var sy=P=>(sy=St.na)(P);v.__embind_initialize_bindings=()=>(v.__embind_initialize_bindings=St.oa)();var ry=v.__emscripten_thread_init=(P,j,se,Ie,Pe,ze)=>(ry=v.__emscripten_thread_init=St.pa)(P,j,se,Ie,Pe,ze);v.__emscripten_thread_crashed=()=>(v.__emscripten_thread_crashed=St.qa)();var uy=(P,j,se,Ie)=>(uy=St.ra)(P,j,se,Ie),Ui=P=>(Ui=St.sa)(P),g0=P=>(g0=St.ta)(P),P0=v.__emscripten_thread_exit=P=>(P0=v.__emscripten_thread_exit=St.ua)(P),ay=v.__emscripten_check_mailbox=()=>(ay=v.__emscripten_check_mailbox=St.va)(),iy=(P,j)=>(iy=St.wa)(P,j),oy=()=>(oy=St.xa)(),C0=P=>(C0=St.ya)(P),cy=P=>(cy=St.za)(P),hy=P=>(hy=St.Aa)(P);v.dynCall_jiji=(P,j,se,Ie,Pe)=>(v.dynCall_jiji=St.Ba)(P,j,se,Ie,Pe),v.dynCall_viijii=(P,j,se,Ie,Pe,ze,Ke)=>(v.dynCall_viijii=St.Ca)(P,j,se,Ie,Pe,ze,Ke),v.dynCall_iiiiij=(P,j,se,Ie,Pe,ze,Ke)=>(v.dynCall_iiiiij=St.Da)(P,j,se,Ie,Pe,ze,Ke),v.dynCall_iiiiijj=(P,j,se,Ie,Pe,ze,Ke,$e,it)=>(v.dynCall_iiiiijj=St.Ea)(P,j,se,Ie,Pe,ze,Ke,$e,it),v.dynCall_iiiiiijj=(P,j,se,Ie,Pe,ze,Ke,$e,it,pt)=>(v.dynCall_iiiiiijj=St.Fa)(P,j,se,Ie,Pe,ze,Ke,$e,it,pt);function F2(P){P=Object.assign({},P);var j=Ie=>()=>Ie()>>>0,se=Ie=>Pe=>Ie(Pe)>>>0;return P.pthread_self=j(P.pthread_self),P.malloc=se(P.malloc),P.__getTypeName=se(P.__getTypeName),P.__errno_location=j(P.__errno_location),P.stackSave=j(P.stackSave),P.stackAlloc=se(P.stackAlloc),P}v.keepRuntimeAlive=jl,v.wasmMemory=It,v.ExitStatus=Zt,v.PThread=Qt;var b3;Dn=function P(){b3||M3(),b3||(Dn=P)};function M3(){if(Gt>0)return;if(xe){he(v),Ye(),startWorker(v);return}if(ll(),Gt>0)return;function P(){b3||(b3=!0,v.calledRun=!0,!Ct&&(Ye(),he(v),v.onRuntimeInitialized&&v.onRuntimeInitialized(),_e()))}v.setStatus?(v.setStatus("Running..."),setTimeout(function(){setTimeout(function(){v.setStatus("")},1),P()},1)):P()}if(v.preInit)for(typeof v.preInit=="function"&&(v.preInit=[v.preInit]);v.preInit.length>0;)v.preInit.pop()();return M3(),c.ready}})();typeof e=="object"&&typeof l=="object"?l.exports=n:typeof define=="function"&&define.amd&&define([],()=>n)}}),oj=mY({"dist/web-ifc.js"(e,l){var n=(()=>{var t=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0;return function(c={}){var w=c,O,M;w.ready=new Promise((H,k)=>{O=H,M=k});var G=Object.assign({},w),Y="./this.program",Z=!0,ee="";function te(H){return w.locateFile?w.locateFile(H,ee):ee+H}var v,he;typeof document<"u"&&document.currentScript&&(ee=document.currentScript.src),t&&(ee=t),ee.indexOf("blob:")!==0?ee=ee.substr(0,ee.replace(/[?#].*/,"").lastIndexOf("/")+1):ee="",v=H=>{var k=new XMLHttpRequest;return k.open("GET",H,!1),k.send(null),k.responseText},he=(H,k,re)=>{var de=new XMLHttpRequest;de.open("GET",H,!0),de.responseType="arraybuffer",de.onload=()=>{if(de.status==200||de.status==0&&de.response){k(de.response);return}re()},de.onerror=re,de.send(null)};var Te=w.print||console.log.bind(console),oe=w.printErr||console.error.bind(console);Object.assign(w,G),G=null,w.arguments&&w.arguments,w.thisProgram&&(Y=w.thisProgram),w.quit&&w.quit;var ie;w.wasmBinary&&(ie=w.wasmBinary),w.noExitRuntime,typeof WebAssembly!="object"&&pn("no native wasm support detected");var me,fe,Ne=!1;function We(H,k){H||pn(k)}var xe,je,et,ge,Le,ve,nt,ht;function Xe(){var H=me.buffer;w.HEAP8=xe=new Int8Array(H),w.HEAP16=et=new Int16Array(H),w.HEAP32=Le=new Int32Array(H),w.HEAPU8=je=new Uint8Array(H),w.HEAPU16=ge=new Uint16Array(H),w.HEAPU32=ve=new Uint32Array(H),w.HEAPF32=nt=new Float32Array(H),w.HEAPF64=ht=new Float64Array(H)}var at,It=[],St=[],bt=[];function Ct(){if(w.preRun)for(typeof w.preRun=="function"&&(w.preRun=[w.preRun]);w.preRun.length;)rn(w.preRun.shift());Dt(It)}function Ft(){!w.noFSInit&&!Me.init.initialized&&Me.init(),Me.ignorePermissions=!1,Dt(St)}function kt(){if(w.postRun)for(typeof w.postRun=="function"&&(w.postRun=[w.postRun]);w.postRun.length;)Vt(w.postRun.shift());Dt(bt)}function rn(H){It.unshift(H)}function Ot(H){St.unshift(H)}function Vt(H){bt.unshift(H)}var un=0,Sn=null;function bn(H){return H}function kn(H){un++,w.monitorRunDependencies&&w.monitorRunDependencies(un)}function qn(H){if(un--,w.monitorRunDependencies&&w.monitorRunDependencies(un),un==0&&Sn){var k=Sn;Sn=null,k()}}function pn(H){w.onAbort&&w.onAbort(H),H="Aborted("+H+")",oe(H),Ne=!0,H+=". Build with -sASSERTIONS for more info.";var k=new WebAssembly.RuntimeError(H);throw M(k),k}var il="data:application/octet-stream;base64,";function mt(H){return H.startsWith(il)}var Ns;Ns="web-ifc.wasm",mt(Ns)||(Ns=te(Ns));function Mn(H){if(H==Ns&&ie)return new Uint8Array(ie);throw"both async and sync fetching of the wasm failed"}function Qn(H){return!ie&&Z&&typeof fetch=="function"?fetch(H,{credentials:"same-origin"}).then(k=>{if(!k.ok)throw"failed to load wasm binary file at '"+H+"'";return k.arrayBuffer()}).catch(()=>Mn(H)):Promise.resolve().then(()=>Mn(H))}function Ln(H,k,re){return Qn(H).then(de=>WebAssembly.instantiate(de,k)).then(de=>de).then(re,de=>{oe("failed to asynchronously prepare wasm: "+de),pn(de)})}function jl(H,k,re,de){return!H&&typeof WebAssembly.instantiateStreaming=="function"&&!mt(k)&&typeof fetch=="function"?fetch(k,{credentials:"same-origin"}).then(be=>{var qe=WebAssembly.instantiateStreaming(be,re);return qe.then(de,function(Ze){return oe("wasm streaming compile failed: "+Ze),oe("falling back to ArrayBuffer instantiation"),Ln(k,re,de)})}):Ln(k,re,de)}function ll(){var H={a:d1};function k(de,be){var qe=de.exports;return qe=y1(qe),fe=qe,me=fe.Z,Xe(),at=fe.$,Ot(fe._),qn(),qe}kn();function re(de){k(de.instance)}if(w.instantiateWasm)try{return w.instantiateWasm(H,k)}catch(de){oe("Module.instantiateWasm callback failed with error: "+de),M(de)}return jl(ie,Ns,H,re).catch(M),{}}var Ye,_e,Dt=H=>{for(;H.length>0;)H.shift()(w)};function zt(H){this.excPtr=H,this.ptr=H-24,this.set_type=function(k){ve[this.ptr+4>>>2]=k},this.get_type=function(){return ve[this.ptr+4>>>2]},this.set_destructor=function(k){ve[this.ptr+8>>>2]=k},this.get_destructor=function(){return ve[this.ptr+8>>>2]},this.set_caught=function(k){k=k?1:0,xe[this.ptr+12>>>0]=k},this.get_caught=function(){return xe[this.ptr+12>>>0]!=0},this.set_rethrown=function(k){k=k?1:0,xe[this.ptr+13>>>0]=k},this.get_rethrown=function(){return xe[this.ptr+13>>>0]!=0},this.init=function(k,re){this.set_adjusted_ptr(0),this.set_type(k),this.set_destructor(re)},this.set_adjusted_ptr=function(k){ve[this.ptr+16>>>2]=k},this.get_adjusted_ptr=function(){return ve[this.ptr+16>>>2]},this.get_exception_ptr=function(){var k=wI(this.get_type());if(k)return ve[this.excPtr>>>2];var re=this.get_adjusted_ptr();return re!==0?re:this.excPtr}}var jt=0;function Gt(H,k){return k+2097152>>>0<4194305-!!H?(H>>>0)+k*4294967296:NaN}function Dn(H,k,re){H>>>=0,k>>>=0,re>>>=0;var de=new zt(H);throw de.init(k,re),jt=H,jt}var on={};function In(H){for(;H.length;){var k=H.pop(),re=H.pop();re(k)}}function Pn(H){return this.fromWireType(Le[H>>>2])}var Hn={},Ht={},Rl={},$n=void 0;function Fn(H){throw new $n(H)}function On(H,k,re){H.forEach(function(Je){Rl[Je]=k});function de(Je){var ot=re(Je);ot.length!==H.length&&Fn("Mismatched type converter count");for(var Et=0;Et<H.length;++Et)En(H[Et],ot[Et])}var be=new Array(k.length),qe=[],Ze=0;k.forEach((Je,ot)=>{Ht.hasOwnProperty(Je)?be[ot]=Ht[Je]:(qe.push(Je),Hn.hasOwnProperty(Je)||(Hn[Je]=[]),Hn[Je].push(()=>{be[ot]=Ht[Je],++Ze,Ze===qe.length&&de(be)}))}),qe.length===0&&de(be)}function wn(H){H>>>=0;var k=on[H];delete on[H];var re=k.elements,de=re.length,be=re.map(function(Je){return Je.getterReturnType}).concat(re.map(function(Je){return Je.setterArgumentType})),qe=k.rawConstructor,Ze=k.rawDestructor;On([H],be,function(Je){return re.forEach((ot,Et)=>{var Bt=Je[Et],tn=ot.getter,Kt=ot.getterContext,Yt=Je[Et+de],Tn=ot.setter,rl=ot.setterContext;ot.read=al=>Bt.fromWireType(tn(Kt,al)),ot.write=(al,wl)=>{var Mt=[];Tn(rl,al,Yt.toWireType(Mt,wl)),In(Mt)}}),[{name:k.name,fromWireType:function(ot){for(var Et=new Array(de),Bt=0;Bt<de;++Bt)Et[Bt]=re[Bt].read(ot);return Ze(ot),Et},toWireType:function(ot,Et){if(de!==Et.length)throw new TypeError(`Incorrect number of tuple elements for ${k.name}: expected=${de}, actual=${Et.length}`);for(var Bt=qe(),tn=0;tn<de;++tn)re[tn].write(Bt,Et[tn]);return ot!==null&&ot.push(Ze,Bt),Bt},argPackAdvance:8,readValueFromPointer:Pn,destructorFunction:Ze}]})}var Zn={},Ll=function(H){H>>>=0;var k=Zn[H];delete Zn[H];var re=k.rawConstructor,de=k.rawDestructor,be=k.fields,qe=be.map(Ze=>Ze.getterReturnType).concat(be.map(Ze=>Ze.setterArgumentType));On([H],qe,Ze=>{var Je={};return be.forEach((ot,Et)=>{var Bt=ot.fieldName,tn=Ze[Et],Kt=ot.getter,Yt=ot.getterContext,Tn=Ze[Et+be.length],rl=ot.setter,al=ot.setterContext;Je[Bt]={read:wl=>tn.fromWireType(Kt(Yt,wl)),write:(wl,Mt)=>{var sn=[];rl(al,wl,Tn.toWireType(sn,Mt)),In(sn)}}}),[{name:k.name,fromWireType:function(ot){var Et={};for(var Bt in Je)Et[Bt]=Je[Bt].read(ot);return de(ot),Et},toWireType:function(ot,Et){for(var Bt in Je)if(!(Bt in Et))throw new TypeError(`Missing field: "${Bt}"`);var tn=re();for(Bt in Je)Je[Bt].write(tn,Et[Bt]);return ot!==null&&ot.push(de,tn),tn},argPackAdvance:8,readValueFromPointer:Pn,destructorFunction:de}]})};function hn(H,k,re,de,be){}function yn(H){switch(H){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError(`Unknown type size: ${H}`)}}function Zt(){for(var H=new Array(256),k=0;k<256;++k)H[k]=String.fromCharCode(k);ut=H}var ut=void 0;function qt(H){for(var k="",re=H;je[re>>>0];)k+=ut[je[re++>>>0]];return k}var vt=void 0;function en(H){throw new vt(H)}function Bn(H,k,re={}){var de=k.name;if(H||en(`type "${de}" must have a positive integer typeid pointer`),Ht.hasOwnProperty(H)){if(re.ignoreDuplicateRegistrations)return;en(`Cannot register type '${de}' twice`)}if(Ht[H]=k,delete Rl[H],Hn.hasOwnProperty(H)){var be=Hn[H];delete Hn[H],be.forEach(qe=>qe())}}function En(H,k,re={}){if(!("argPackAdvance"in k))throw new TypeError("registerType registeredInstance requires argPackAdvance");return Bn(H,k,re)}function Yl(H,k,re,de,be){H>>>=0,k>>>=0,re>>>=0;var qe=yn(re);k=qt(k),En(H,{name:k,fromWireType:function(Ze){return!!Ze},toWireType:function(Ze,Je){return Je?de:be},argPackAdvance:8,readValueFromPointer:function(Ze){var Je;if(re===1)Je=xe;else if(re===2)Je=et;else if(re===4)Je=Le;else throw new TypeError("Unknown boolean type size: "+k);return this.fromWireType(Je[Ze>>>qe])},destructorFunction:null})}function bs(H){if(!(this instanceof Ml)||!(H instanceof Ml))return!1;for(var k=this.$$.ptrType.registeredClass,re=this.$$.ptr,de=H.$$.ptrType.registeredClass,be=H.$$.ptr;k.baseClass;)re=k.upcast(re),k=k.baseClass;for(;de.baseClass;)be=de.upcast(be),de=de.baseClass;return k===de&&re===be}function ls(H){return{count:H.count,deleteScheduled:H.deleteScheduled,preservePointerOnDelete:H.preservePointerOnDelete,ptr:H.ptr,ptrType:H.ptrType,smartPtr:H.smartPtr,smartPtrType:H.smartPtrType}}function Ol(H){function k(re){return re.$$.ptrType.registeredClass.name}en(k(H)+" instance already deleted")}var ds=!1;function Au(H){}function fd(H){H.smartPtr?H.smartPtrType.rawDestructor(H.smartPtr):H.ptrType.registeredClass.rawDestructor(H.ptr)}function A3(H){H.count.value-=1;var k=H.count.value===0;k&&fd(H)}function nc(H,k,re){if(k===re)return H;if(re.baseClass===void 0)return null;var de=nc(H,k,re.baseClass);return de===null?null:re.downcast(de)}var A0={};function ui(){return Object.keys(ft).length}function S0(){var H=[];for(var k in ft)ft.hasOwnProperty(k)&&H.push(ft[k]);return H}var Gn=[];function L0(){for(;Gn.length;){var H=Gn.pop();H.$$.deleteScheduled=!1,H.delete()}}var Id=void 0;function b2(H){Id=H,Gn.length&&Id&&Id(L0)}function ke(){w.getInheritedInstanceCount=ui,w.getLiveInheritedInstances=S0,w.flushPendingDeletes=L0,w.setDelayFunction=b2}var ft={};function Nt(H,k){for(k===void 0&&en("ptr should not be undefined");H.baseClass;)k=H.upcast(k),H=H.baseClass;return k}function ye(H,k){return k=Nt(H,k),ft[k]}function Tt(H,k){(!k.ptrType||!k.ptr)&&Fn("makeClassHandle requires ptr and ptrType");var re=!!k.smartPtrType,de=!!k.smartPtr;return re!==de&&Fn("Both smartPtrType and smartPtr must be specified"),k.count={value:1},mn(Object.create(H,{$$:{value:k}}))}function an(H){var k=this.getPointee(H);if(!k)return this.destructor(H),null;var re=ye(this.registeredClass,k);if(re!==void 0){if(re.$$.count.value===0)return re.$$.ptr=k,re.$$.smartPtr=H,re.clone();var de=re.clone();return this.destructor(H),de}function be(){return this.isSmartPointer?Tt(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:k,smartPtrType:this,smartPtr:H}):Tt(this.registeredClass.instancePrototype,{ptrType:this,ptr:H})}var qe=this.registeredClass.getActualType(k),Ze=A0[qe];if(!Ze)return be.call(this);var Je;this.isConst?Je=Ze.constPointerType:Je=Ze.pointerType;var ot=nc(k,this.registeredClass,Je.registeredClass);return ot===null?be.call(this):this.isSmartPointer?Tt(Je.registeredClass.instancePrototype,{ptrType:Je,ptr:ot,smartPtrType:this,smartPtr:H}):Tt(Je.registeredClass.instancePrototype,{ptrType:Je,ptr:ot})}var mn=function(H){return typeof FinalizationRegistry>"u"?(mn=k=>k,H):(ds=new FinalizationRegistry(k=>{A3(k.$$)}),mn=k=>{var re=k.$$,de=!!re.smartPtr;if(de){var be={$$:re};ds.register(k,be,k)}return k},Au=k=>ds.unregister(k),mn(H))};function Un(){if(this.$$.ptr||Ol(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var H=mn(Object.create(Object.getPrototypeOf(this),{$$:{value:ls(this.$$)}}));return H.$$.count.value+=1,H.$$.deleteScheduled=!1,H}function Vn(){this.$$.ptr||Ol(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&en("Object already scheduled for deletion"),Au(this),A3(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function el(){return!this.$$.ptr}function Qt(){return this.$$.ptr||Ol(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&en("Object already scheduled for deletion"),Gn.push(this),Gn.length===1&&Id&&Id(L0),this.$$.deleteScheduled=!0,this}function Jn(){Ml.prototype.isAliasOf=bs,Ml.prototype.clone=Un,Ml.prototype.delete=Vn,Ml.prototype.isDeleted=el,Ml.prototype.deleteLater=Qt}function Ml(){}var fu=48,As=57;function Su(H){if(H===void 0)return"_unknown";H=H.replace(/[^a-zA-Z0-9_]/g,"$");var k=H.charCodeAt(0);return k>=fu&&k<=As?`_${H}`:H}function $l(H,k){return H=Su(H),{[H]:function(){return k.apply(this,arguments)}}[H]}function sl(H,k,re){if(H[k].overloadTable===void 0){var de=H[k];H[k]=function(){return H[k].overloadTable.hasOwnProperty(arguments.length)||en(`Function '${re}' called with an invalid number of arguments (${arguments.length}) - expects one of (${H[k].overloadTable})!`),H[k].overloadTable[arguments.length].apply(this,arguments)},H[k].overloadTable=[],H[k].overloadTable[de.argCount]=de}}function S3(H,k,re){w.hasOwnProperty(H)?((re===void 0||w[H].overloadTable!==void 0&&w[H].overloadTable[re]!==void 0)&&en(`Cannot register public name '${H}' twice`),sl(w,H,H),w.hasOwnProperty(re)&&en(`Cannot register multiple overloads of a function with the same number of arguments (${re})!`),w[H].overloadTable[re]=k):(w[H]=k,re!==void 0&&(w[H].numArguments=re))}function Zl(H,k,re,de,be,qe,Ze,Je){this.name=H,this.constructor=k,this.instancePrototype=re,this.rawDestructor=de,this.baseClass=be,this.getActualType=qe,this.upcast=Ze,this.downcast=Je,this.pureVirtualFunctions=[]}function Lu(H,k,re){for(;k!==re;)k.upcast||en(`Expected null or instance of ${re.name}, got an instance of ${k.name}`),H=k.upcast(H),k=k.baseClass;return H}function L3(H,k){if(k===null)return this.isReference&&en(`null is not a valid ${this.name}`),0;k.$$||en(`Cannot pass "${rc(k)}" as a ${this.name}`),k.$$.ptr||en(`Cannot pass deleted object as a pointer of type ${this.name}`);var re=k.$$.ptrType.registeredClass,de=Lu(k.$$.ptr,re,this.registeredClass);return de}function Fc(H,k){var re;if(k===null)return this.isReference&&en(`null is not a valid ${this.name}`),this.isSmartPointer?(re=this.rawConstructor(),H!==null&&H.push(this.rawDestructor,re),re):0;k.$$||en(`Cannot pass "${rc(k)}" as a ${this.name}`),k.$$.ptr||en(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&k.$$.ptrType.isConst&&en(`Cannot convert argument of type ${k.$$.smartPtrType?k.$$.smartPtrType.name:k.$$.ptrType.name} to parameter type ${this.name}`);var de=k.$$.ptrType.registeredClass;if(re=Lu(k.$$.ptr,de,this.registeredClass),this.isSmartPointer)switch(k.$$.smartPtr===void 0&&en("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:k.$$.smartPtrType===this?re=k.$$.smartPtr:en(`Cannot convert argument of type ${k.$$.smartPtrType?k.$$.smartPtrType.name:k.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:re=k.$$.smartPtr;break;case 2:if(k.$$.smartPtrType===this)re=k.$$.smartPtr;else{var be=k.clone();re=this.rawShare(re,gl.toHandle(function(){be.delete()})),H!==null&&H.push(this.rawDestructor,re)}break;default:en("Unsupporting sharing policy")}return re}function dd(H,k){if(k===null)return this.isReference&&en(`null is not a valid ${this.name}`),0;k.$$||en(`Cannot pass "${rc(k)}" as a ${this.name}`),k.$$.ptr||en(`Cannot pass deleted object as a pointer of type ${this.name}`),k.$$.ptrType.isConst&&en(`Cannot convert argument of type ${k.$$.ptrType.name} to parameter type ${this.name}`);var re=k.$$.ptrType.registeredClass,de=Lu(k.$$.ptr,re,this.registeredClass);return de}function Ss(H){return this.rawGetPointee&&(H=this.rawGetPointee(H)),H}function $u(H){this.rawDestructor&&this.rawDestructor(H)}function ai(H){H!==null&&H.delete()}function Ms(){xs.prototype.getPointee=Ss,xs.prototype.destructor=$u,xs.prototype.argPackAdvance=8,xs.prototype.readValueFromPointer=Pn,xs.prototype.deleteObject=ai,xs.prototype.fromWireType=an}function xs(H,k,re,de,be,qe,Ze,Je,ot,Et,Bt){this.name=H,this.registeredClass=k,this.isReference=re,this.isConst=de,this.isSmartPointer=be,this.pointeeType=qe,this.sharingPolicy=Ze,this.rawGetPointee=Je,this.rawConstructor=ot,this.rawShare=Et,this.rawDestructor=Bt,!be&&k.baseClass===void 0?de?(this.toWireType=L3,this.destructorFunction=null):(this.toWireType=dd,this.destructorFunction=null):this.toWireType=Fc}function Gc(H,k,re){w.hasOwnProperty(H)||Fn("Replacing nonexistant public symbol"),w[H].overloadTable!==void 0&&re!==void 0?w[H].overloadTable[re]=k:(w[H]=k,w[H].argCount=re)}var yd=(H,k,re)=>{var de=w["dynCall_"+H];return re&&re.length?de.apply(null,[k].concat(re)):de.call(null,k)},Vc=[],Ou=H=>{var k=Vc[H];return k||(H>=Vc.length&&(Vc.length=H+1),Vc[H]=k=at.get(H)),k},wd=(H,k,re)=>{if(H.includes("j"))return yd(H,k,re);var de=Ou(k).apply(null,re);return de},lc=(H,k)=>{var re=[];return function(){return re.length=0,Object.assign(re,arguments),wd(H,k,re)}};function Hs(H,k){H=qt(H);function re(){return H.includes("j")?lc(H,k):Ou(k)}var de=re();return typeof de!="function"&&en(`unknown function pointer with signature ${H}: ${k}`),de}function Ed(H,k){var re=$l(k,function(de){this.name=k,this.message=de;var be=new Error(de).stack;be!==void 0&&(this.stack=this.toString()+`
`+be.replace(/^Error(:[^\n]*)?\n/,""))});return re.prototype=Object.create(H.prototype),re.prototype.constructor=re,re.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},re}var sc=void 0;function Xf(H){var k=yI(H),re=qt(k);return bu(k),re}function Pi(H,k){var re=[],de={};function be(qe){if(!de[qe]&&!Ht[qe]){if(Rl[qe]){Rl[qe].forEach(be);return}re.push(qe),de[qe]=!0}}throw k.forEach(be),new sc(`${H}: `+re.map(Xf).join([", "]))}function Ls(H,k,re,de,be,qe,Ze,Je,ot,Et,Bt,tn,Kt){H>>>=0,k>>>=0,re>>>=0,de>>>=0,be>>>=0,qe>>>=0,Ze>>>=0,Je>>>=0,ot>>>=0,Et>>>=0,Bt>>>=0,tn>>>=0,Kt>>>=0,Bt=qt(Bt),qe=Hs(be,qe),Je&&(Je=Hs(Ze,Je)),Et&&(Et=Hs(ot,Et)),Kt=Hs(tn,Kt);var Yt=Su(Bt);S3(Yt,function(){Pi(`Cannot construct ${Bt} due to unbound types`,[de])}),On([H,k,re],de?[de]:[],function(Tn){Tn=Tn[0];var rl,al;de?(rl=Tn.registeredClass,al=rl.instancePrototype):al=Ml.prototype;var wl=$l(Yt,function(){if(Object.getPrototypeOf(this)!==Mt)throw new vt("Use 'new' to construct "+Bt);if(sn.constructor_body===void 0)throw new vt(Bt+" has no accessible constructor");var Jl=sn.constructor_body[arguments.length];if(Jl===void 0)throw new vt(`Tried to invoke ctor of ${Bt} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(sn.constructor_body).toString()}) parameters instead!`);return Jl.apply(this,arguments)}),Mt=Object.create(al,{constructor:{value:wl}});wl.prototype=Mt;var sn=new Zl(Bt,wl,Mt,Kt,rl,qe,Je,Et);sn.baseClass&&(sn.baseClass.__derivedClasses===void 0&&(sn.baseClass.__derivedClasses=[]),sn.baseClass.__derivedClasses.push(sn));var ys=new xs(Bt,sn,!0,!1,!1),cl=new xs(Bt+"*",sn,!1,!1,!1),Js=new xs(Bt+" const*",sn,!1,!0,!1);return A0[H]={pointerType:cl,constPointerType:Js},Gc(Yt,wl),[ys,cl,Js]})}function Zu(H,k){for(var re=[],de=0;de<H;de++)re.push(ve[k+de*4>>>2]);return re}function ol(H,k){if(!(H instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof H} which is not a function`);var re=$l(H.name||"unknownFunctionName",function(){});re.prototype=H.prototype;var de=new re,be=H.apply(de,k);return be instanceof Object?be:de}function _c(H,k,re,de,be,qe){var Ze=k.length;Ze<2&&en("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var Je=k[1]!==null&&re!==null,ot=!1,Et=1;Et<k.length;++Et)if(k[Et]!==null&&k[Et].destructorFunction===void 0){ot=!0;break}for(var Bt=k[0].name!=="void",tn="",Kt="",Et=0;Et<Ze-2;++Et)tn+=(Et!==0?", ":"")+"arg"+Et,Kt+=(Et!==0?", ":"")+"arg"+Et+"Wired";var Yt=`
        return function ${Su(H)}(${tn}) {
        if (arguments.length !== ${Ze-2}) {
          throwBindingError('function ${H} called with ${arguments.length} arguments, expected ${Ze-2} args!');
        }`;ot&&(Yt+=`var destructors = [];
`);var Tn=ot?"destructors":"null",rl=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],al=[en,de,be,In,k[0],k[1]];Je&&(Yt+="var thisWired = classParam.toWireType("+Tn+`, this);
`);for(var Et=0;Et<Ze-2;++Et)Yt+="var arg"+Et+"Wired = argType"+Et+".toWireType("+Tn+", arg"+Et+"); // "+k[Et+2].name+`
`,rl.push("argType"+Et),al.push(k[Et+2]);if(Je&&(Kt="thisWired"+(Kt.length>0?", ":"")+Kt),Yt+=(Bt||qe?"var rv = ":"")+"invoker(fn"+(Kt.length>0?", ":"")+Kt+`);
`,ot)Yt+=`runDestructors(destructors);
`;else for(var Et=Je?1:2;Et<k.length;++Et){var wl=Et===1?"thisWired":"arg"+(Et-2)+"Wired";k[Et].destructorFunction!==null&&(Yt+=wl+"_dtor("+wl+"); // "+k[Et].name+`
`,rl.push(wl+"_dtor"),al.push(k[Et].destructorFunction))}return Bt&&(Yt+=`var ret = retType.fromWireType(rv);
return ret;
`),Yt+=`}
`,rl.push(Yt),ol(Function,rl).apply(null,al)}function gu(H,k,re,de,be,qe){H>>>=0,re>>>=0,de>>>=0,be>>>=0,qe>>>=0;var Ze=Zu(k,re);be=Hs(de,be),On([],[H],function(Je){Je=Je[0];var ot=`constructor ${Je.name}`;if(Je.registeredClass.constructor_body===void 0&&(Je.registeredClass.constructor_body=[]),Je.registeredClass.constructor_body[k-1]!==void 0)throw new vt(`Cannot register multiple constructors with identical number of parameters (${k-1}) for class '${Je.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return Je.registeredClass.constructor_body[k-1]=()=>{Pi(`Cannot construct ${Je.name} due to unbound types`,Ze)},On([],Ze,function(Et){return Et.splice(1,0,null),Je.registeredClass.constructor_body[k-1]=_c(ot,Et,null,be,qe),[]}),[]})}function Td(H,k,re,de,be,qe,Ze,Je,ot){H>>>=0,k>>>=0,de>>>=0,be>>>=0,qe>>>=0,Ze>>>=0;var Et=Zu(re,de);k=qt(k),qe=Hs(be,qe),On([],[H],function(Bt){Bt=Bt[0];var tn=`${Bt.name}.${k}`;k.startsWith("@@")&&(k=Symbol[k.substring(2)]),Je&&Bt.registeredClass.pureVirtualFunctions.push(k);function Kt(){Pi(`Cannot call ${tn} due to unbound types`,Et)}var Yt=Bt.registeredClass.instancePrototype,Tn=Yt[k];return Tn===void 0||Tn.overloadTable===void 0&&Tn.className!==Bt.name&&Tn.argCount===re-2?(Kt.argCount=re-2,Kt.className=Bt.name,Yt[k]=Kt):(sl(Yt,k,tn),Yt[k].overloadTable[re-2]=Kt),On([],Et,function(rl){var al=_c(tn,rl,Bt,qe,Ze,ot);return Yt[k].overloadTable===void 0?(al.argCount=re-2,Yt[k]=al):Yt[k].overloadTable[re-2]=al,[]}),[]})}function Rd(){Object.assign(vf.prototype,{get(H){return this.allocated[H]},has(H){return this.allocated[H]!==void 0},allocate(H){var k=this.freelist.pop()||this.allocated.length;return this.allocated[k]=H,k},free(H){this.allocated[H]=void 0,this.freelist.push(H)}})}function vf(){this.allocated=[void 0],this.freelist=[]}var Vs=new vf;function Ci(H){H>>>=0,H>=Vs.reserved&&--Vs.get(H).refcount===0&&Vs.free(H)}function eI(){for(var H=0,k=Vs.reserved;k<Vs.allocated.length;++k)Vs.allocated[k]!==void 0&&++H;return H}function pd(){Vs.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),Vs.reserved=Vs.allocated.length,w.count_emval_handles=eI}var gl={toValue:H=>(H||en("Cannot use deleted val. handle = "+H),Vs.get(H).value),toHandle:H=>{switch(H){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return Vs.allocate({refcount:1,value:H})}}};function tI(H,k){H>>>=0,k>>>=0,k=qt(k),En(H,{name:k,fromWireType:function(re){var de=gl.toValue(re);return Ci(re),de},toWireType:function(re,de){return gl.toHandle(de)},argPackAdvance:8,readValueFromPointer:Pn,destructorFunction:null})}function rc(H){if(H===null)return"null";var k=typeof H;return k==="object"||k==="array"||k==="function"?H.toString():""+H}function md(H,k){switch(k){case 2:return function(re){return this.fromWireType(nt[re>>>2])};case 3:return function(re){return this.fromWireType(ht[re>>>3])};default:throw new TypeError("Unknown float type: "+H)}}function Dd(H,k,re){H>>>=0,k>>>=0,re>>>=0;var de=yn(re);k=qt(k),En(H,{name:k,fromWireType:function(be){return be},toWireType:function(be,qe){return qe},argPackAdvance:8,readValueFromPointer:md(k,de),destructorFunction:null})}function bi(H,k,re,de,be,qe,Ze){H>>>=0,re>>>=0,de>>>=0,be>>>=0,qe>>>=0;var Je=Zu(k,re);H=qt(H),be=Hs(de,be),S3(H,function(){Pi(`Cannot call ${H} due to unbound types`,Je)},k-1),On([],Je,function(ot){var Et=[ot[0],null].concat(ot.slice(1));return Gc(H,_c(H,Et,null,be,qe,Ze),k-1),[]})}function Wc(H,k,re){switch(k){case 0:return re?function(be){return xe[be>>>0]}:function(be){return je[be>>>0]};case 1:return re?function(be){return et[be>>>1]}:function(be){return ge[be>>>1]};case 2:return re?function(be){return Le[be>>>2]}:function(be){return ve[be>>>2]};default:throw new TypeError("Unknown integer type: "+H)}}function Mi(H,k,re,de,be){H>>>=0,k>>>=0,re>>>=0,k=qt(k);var qe=yn(re),Ze=tn=>tn;if(de===0){var Je=32-8*re;Ze=tn=>tn<<Je>>>Je}var ot=k.includes("unsigned"),Et=(tn,Kt)=>{},Bt;ot?Bt=function(tn,Kt){return Et(Kt,this.name),Kt>>>0}:Bt=function(tn,Kt){return Et(Kt,this.name),Kt},En(H,{name:k,fromWireType:Ze,toWireType:Bt,argPackAdvance:8,readValueFromPointer:Wc(k,qe,de!==0),destructorFunction:null})}function Nd(H,k,re){H>>>=0,re>>>=0;var de=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],be=de[k];function qe(Ze){Ze=Ze>>2;var Je=ve,ot=Je[Ze>>>0],Et=Je[Ze+1>>>0];return new be(Je.buffer,Et,ot)}re=qt(re),En(H,{name:re,fromWireType:qe,argPackAdvance:8,readValueFromPointer:qe},{ignoreDuplicateRegistrations:!0})}var jc=(H,k,re,de)=>{if(re>>>=0,!(de>0))return 0;for(var be=re,qe=re+de-1,Ze=0;Ze<H.length;++Ze){var Je=H.charCodeAt(Ze);if(Je>=55296&&Je<=57343){var ot=H.charCodeAt(++Ze);Je=65536+((Je&1023)<<10)|ot&1023}if(Je<=127){if(re>=qe)break;k[re++>>>0]=Je}else if(Je<=2047){if(re+1>=qe)break;k[re++>>>0]=192|Je>>6,k[re++>>>0]=128|Je&63}else if(Je<=65535){if(re+2>=qe)break;k[re++>>>0]=224|Je>>12,k[re++>>>0]=128|Je>>6&63,k[re++>>>0]=128|Je&63}else{if(re+3>=qe)break;k[re++>>>0]=240|Je>>18,k[re++>>>0]=128|Je>>12&63,k[re++>>>0]=128|Je>>6&63,k[re++>>>0]=128|Je&63}}return k[re>>>0]=0,re-be},ii=(H,k,re)=>jc(H,je,k,re),uc=H=>{for(var k=0,re=0;re<H.length;++re){var de=H.charCodeAt(re);de<=127?k++:de<=2047?k+=2:de>=55296&&de<=57343?(k+=4,++re):k+=3}return k},nI=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,Pu=(H,k,re)=>{k>>>=0;for(var de=k+re,be=k;H[be]&&!(be>=de);)++be;if(be-k>16&&H.buffer&&nI)return nI.decode(H.subarray(k,be));for(var qe="";k<be;){var Ze=H[k++];if(!(Ze&128)){qe+=String.fromCharCode(Ze);continue}var Je=H[k++]&63;if((Ze&224)==192){qe+=String.fromCharCode((Ze&31)<<6|Je);continue}var ot=H[k++]&63;if((Ze&240)==224?Ze=(Ze&15)<<12|Je<<6|ot:Ze=(Ze&7)<<18|Je<<12|ot<<6|H[k++]&63,Ze<65536)qe+=String.fromCharCode(Ze);else{var Et=Ze-65536;qe+=String.fromCharCode(55296|Et>>10,56320|Et&1023)}}return qe},ac=(H,k)=>(H>>>=0,H?Pu(je,H,k):"");function xi(H,k){H>>>=0,k>>>=0,k=qt(k);var re=k==="std::string";En(H,{name:k,fromWireType:function(de){var be=ve[de>>>2],qe=de+4,Ze;if(re)for(var Je=qe,ot=0;ot<=be;++ot){var Et=qe+ot;if(ot==be||je[Et>>>0]==0){var Bt=Et-Je,tn=ac(Je,Bt);Ze===void 0?Ze=tn:(Ze+="\0",Ze+=tn),Je=Et+1}}else{for(var Kt=new Array(be),ot=0;ot<be;++ot)Kt[ot]=String.fromCharCode(je[qe+ot>>>0]);Ze=Kt.join("")}return bu(de),Ze},toWireType:function(de,be){be instanceof ArrayBuffer&&(be=new Uint8Array(be));var qe,Ze=typeof be=="string";Ze||be instanceof Uint8Array||be instanceof Uint8ClampedArray||be instanceof Int8Array||en("Cannot pass non-string to std::string"),re&&Ze?qe=uc(be):qe=be.length;var Je=dc(4+qe+1),ot=Je+4;if(ve[Je>>>2]=qe,re&&Ze)ii(be,ot,qe+1);else if(Ze)for(var Et=0;Et<qe;++Et){var Bt=be.charCodeAt(Et);Bt>255&&(bu(ot),en("String has UTF-16 code units that do not fit in 8 bits")),je[ot+Et>>>0]=Bt}else for(var Et=0;Et<qe;++Et)je[ot+Et>>>0]=be[Et];return de!==null&&de.push(bu,Je),Je},argPackAdvance:8,readValueFromPointer:Pn,destructorFunction:function(de){bu(de)}})}var lI=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Ad=(H,k)=>{for(var re=H,de=re>>1,be=de+k/2;!(de>=be)&&ge[de>>>0];)++de;if(re=de<<1,re-H>32&&lI)return lI.decode(je.subarray(H>>>0,re>>>0));for(var qe="",Ze=0;!(Ze>=k/2);++Ze){var Je=et[H+Ze*2>>>1];if(Je==0)break;qe+=String.fromCharCode(Je)}return qe},Sd=(H,k,re)=>{if(re===void 0&&(re=2147483647),re<2)return 0;re-=2;for(var de=k,be=re<H.length*2?re/2:H.length,qe=0;qe<be;++qe){var Ze=H.charCodeAt(qe);et[k>>>1]=Ze,k+=2}return et[k>>>1]=0,k-de},Ld=H=>H.length*2,Od=(H,k)=>{for(var re=0,de="";!(re>=k/4);){var be=Le[H+re*4>>>2];if(be==0)break;if(++re,be>=65536){var qe=be-65536;de+=String.fromCharCode(55296|qe>>10,56320|qe&1023)}else de+=String.fromCharCode(be)}return de},Ju=(H,k,re)=>{if(k>>>=0,re===void 0&&(re=2147483647),re<4)return 0;for(var de=k,be=de+re-4,qe=0;qe<H.length;++qe){var Ze=H.charCodeAt(qe);if(Ze>=55296&&Ze<=57343){var Je=H.charCodeAt(++qe);Ze=65536+((Ze&1023)<<10)|Je&1023}if(Le[k>>>2]=Ze,k+=4,k+4>be)break}return Le[k>>>2]=0,k-de},gd=H=>{for(var k=0,re=0;re<H.length;++re){var de=H.charCodeAt(re);de>=55296&&de<=57343&&++re,k+=4}return k},Pd=function(H,k,re){H>>>=0,k>>>=0,re>>>=0,re=qt(re);var de,be,qe,Ze,Je;k===2?(de=Ad,be=Sd,Ze=Ld,qe=()=>ge,Je=1):k===4&&(de=Od,be=Ju,Ze=gd,qe=()=>ve,Je=2),En(H,{name:re,fromWireType:function(ot){for(var Et=ve[ot>>>2],Bt=qe(),tn,Kt=ot+4,Yt=0;Yt<=Et;++Yt){var Tn=ot+4+Yt*k;if(Yt==Et||Bt[Tn>>>Je]==0){var rl=Tn-Kt,al=de(Kt,rl);tn===void 0?tn=al:(tn+="\0",tn+=al),Kt=Tn+k}}return bu(ot),tn},toWireType:function(ot,Et){typeof Et!="string"&&en(`Cannot pass non-string to C++ string type ${re}`);var Bt=Ze(Et),tn=dc(4+Bt+k);return ve[tn>>>2]=Bt>>Je,be(Et,tn+4,Bt+k),ot!==null&&ot.push(bu,tn),tn},argPackAdvance:8,readValueFromPointer:Pn,destructorFunction:function(ot){bu(ot)}})};function Yc(H,k,re,de,be,qe){H>>>=0,k>>>=0,re>>>=0,de>>>=0,be>>>=0,qe>>>=0,on[H]={name:qt(k),rawConstructor:Hs(re,de),rawDestructor:Hs(be,qe),elements:[]}}function zc(H,k,re,de,be,qe,Ze,Je,ot){H>>>=0,k>>>=0,re>>>=0,de>>>=0,be>>>=0,qe>>>=0,Ze>>>=0,Je>>>=0,ot>>>=0,on[H].elements.push({getterReturnType:k,getter:Hs(re,de),getterContext:be,setterArgumentType:qe,setter:Hs(Ze,Je),setterContext:ot})}function sI(H,k,re,de,be,qe){H>>>=0,k>>>=0,re>>>=0,de>>>=0,be>>>=0,qe>>>=0,Zn[H]={name:qt(k),rawConstructor:Hs(re,de),rawDestructor:Hs(be,qe),fields:[]}}function rI(H,k,re,de,be,qe,Ze,Je,ot,Et){H>>>=0,k>>>=0,re>>>=0,de>>>=0,be>>>=0,qe>>>=0,Ze>>>=0,Je>>>=0,ot>>>=0,Et>>>=0,Zn[H].fields.push({fieldName:qt(k),getterReturnType:re,getter:Hs(de,be),getterContext:qe,setterArgumentType:Ze,setter:Hs(Je,ot),setterContext:Et})}function Cd(H,k){H>>>=0,k>>>=0,k=qt(k),En(H,{isVoid:!0,name:k,argPackAdvance:0,fromWireType:function(){},toWireType:function(re,de){}})}var kc=!0,bd=()=>kc;function qc(H,k){var re=Ht[H];return re===void 0&&en(k+" has unknown type "+Xf(H)),re}function Md(H,k,re){H>>>=0,k>>>=0,re>>>=0,H=gl.toValue(H),k=qc(k,"emval::as");var de=[],be=gl.toHandle(de);return ve[re>>>2]=be,k.toWireType(de,H)}function xd(H,k){for(var re=new Array(H),de=0;de<H;++de)re[de]=qc(ve[k+de*4>>>2],"parameter "+de);return re}function Hd(H,k,re,de){H>>>=0,re>>>=0,de>>>=0,H=gl.toValue(H);for(var be=xd(k,re),qe=new Array(k),Ze=0;Ze<k;++Ze){var Je=be[Ze];qe[Ze]=Je.readValueFromPointer(de),de+=Je.argPackAdvance}var ot=H.apply(void 0,qe);return gl.toHandle(ot)}var Bd={};function uI(H){var k=Bd[H];return k===void 0?qt(H):k}function Iu(){return typeof globalThis=="object"?globalThis:function(){return Function}()("return this")()}function aI(H){return H>>>=0,H===0?gl.toHandle(Iu()):(H=uI(H),gl.toHandle(Iu()[H]))}function Ud(H,k){return H>>>=0,k>>>=0,H=gl.toValue(H),k=gl.toValue(k),gl.toHandle(H[k])}function Fd(H){H>>>=0,H>4&&(Vs.get(H).refcount+=1)}function Gd(H,k){return H>>>=0,k>>>=0,H=gl.toValue(H),k=gl.toValue(k),H instanceof k}function Bs(H){return H>>>=0,H=gl.toValue(H),typeof H=="number"}function Vd(H){return H>>>=0,H=gl.toValue(H),typeof H=="string"}function iI(){return gl.toHandle([])}function oI(H){return H>>>=0,gl.toHandle(uI(H))}function ic(){return gl.toHandle({})}function _d(H){H>>>=0;var k=gl.toValue(H);In(k),Ci(H)}function Kc(H,k,re){H>>>=0,k>>>=0,re>>>=0,H=gl.toValue(H),k=gl.toValue(k),re=gl.toValue(re),H[k]=re}function Wd(H,k){H>>>=0,k>>>=0,H=qc(H,"_emval_take_value");var re=H.readValueFromPointer(k);return gl.toHandle(re)}function Qc(H,k,re){var de=Gt(H,k);re>>>=0;var be=new Date(de*1e3);Le[re>>>2]=be.getUTCSeconds(),Le[re+4>>>2]=be.getUTCMinutes(),Le[re+8>>>2]=be.getUTCHours(),Le[re+12>>>2]=be.getUTCDate(),Le[re+16>>>2]=be.getUTCMonth(),Le[re+20>>>2]=be.getUTCFullYear()-1900,Le[re+24>>>2]=be.getUTCDay();var qe=Date.UTC(be.getUTCFullYear(),0,1,0,0,0,0),Ze=(be.getTime()-qe)/(1e3*60*60*24)|0;Le[re+28>>>2]=Ze}var Hi=H=>H%4===0&&(H%100!==0||H%400===0),jd=[0,31,60,91,121,152,182,213,244,274,305,335],Yd=[0,31,59,90,120,151,181,212,243,273,304,334],cI=H=>{var k=Hi(H.getFullYear()),re=k?jd:Yd,de=re[H.getMonth()]+H.getDate()-1;return de};function Zs(H,k,re){var de=Gt(H,k);re>>>=0;var be=new Date(de*1e3);Le[re>>>2]=be.getSeconds(),Le[re+4>>>2]=be.getMinutes(),Le[re+8>>>2]=be.getHours(),Le[re+12>>>2]=be.getDate(),Le[re+16>>>2]=be.getMonth(),Le[re+20>>>2]=be.getFullYear()-1900,Le[re+24>>>2]=be.getDay();var qe=cI(be)|0;Le[re+28>>>2]=qe,Le[re+36>>>2]=-(be.getTimezoneOffset()*60);var Ze=new Date(be.getFullYear(),0,1),Je=new Date(be.getFullYear(),6,1).getTimezoneOffset(),ot=Ze.getTimezoneOffset(),Et=(Je!=ot&&be.getTimezoneOffset()==Math.min(ot,Je))|0;Le[re+32>>>2]=Et}var oc=H=>{var k=uc(H)+1,re=dc(k);return re&&ii(H,re,k),re};function zd(H,k,re){H>>>=0,k>>>=0,re>>>=0;var de=new Date().getFullYear(),be=new Date(de,0,1),qe=new Date(de,6,1),Ze=be.getTimezoneOffset(),Je=qe.getTimezoneOffset(),ot=Math.max(Ze,Je);ve[H>>>2]=ot*60,Le[k>>>2]=+(Ze!=Je);function Et(Tn){var rl=Tn.toTimeString().match(/\(([A-Za-z ]+)\)$/);return rl?rl[1]:"GMT"}var Bt=Et(be),tn=Et(qe),Kt=oc(Bt),Yt=oc(tn);Je<Ze?(ve[re>>>2]=Kt,ve[re+4>>>2]=Yt):(ve[re>>>2]=Yt,ve[re+4>>>2]=Kt)}var kd=()=>{pn("")};function xl(){return Date.now()}function qd(H,k,re){return H>>>=0,k>>>=0,re>>>=0,je.copyWithin(H>>>0,k>>>0,k+re>>>0)}var $c=()=>4294901760,Kd=H=>{var k=me.buffer,re=H-k.byteLength+65535>>>16;try{return me.grow(re),Xe(),1}catch{}};function Qd(H){H>>>=0;var k=je.length,re=$c();if(H>re)return!1;for(var de=(ot,Et)=>ot+(Et-ot%Et)%Et,be=1;be<=4;be*=2){var qe=k*(1+.2/be);qe=Math.min(qe,H+100663296);var Ze=Math.min(re,de(Math.max(H,qe),65536)),Je=Kd(Ze);if(Je)return!0}return!1}var Zc={},$d=()=>Y||"./this.program",Bi=()=>{if(!Bi.strings){var H=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",k={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:H,_:$d()};for(var re in Zc)Zc[re]===void 0?delete k[re]:k[re]=Zc[re];var de=[];for(var re in k)de.push(`${re}=${k[re]}`);Bi.strings=de}return Bi.strings},Zd=(H,k)=>{for(var re=0;re<H.length;++re)xe[k++>>>0]=H.charCodeAt(re);xe[k>>>0]=0},yl={isAbs:H=>H.charAt(0)==="/",splitPath:H=>{var k=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return k.exec(H).slice(1)},normalizeArray:(H,k)=>{for(var re=0,de=H.length-1;de>=0;de--){var be=H[de];be==="."?H.splice(de,1):be===".."?(H.splice(de,1),re++):re&&(H.splice(de,1),re--)}if(k)for(;re;re--)H.unshift("..");return H},normalize:H=>{var k=yl.isAbs(H),re=H.substr(-1)==="/";return H=yl.normalizeArray(H.split("/").filter(de=>!!de),!k).join("/"),!H&&!k&&(H="."),H&&re&&(H+="/"),(k?"/":"")+H},dirname:H=>{var k=yl.splitPath(H),re=k[0],de=k[1];return!re&&!de?".":(de&&(de=de.substr(0,de.length-1)),re+de)},basename:H=>{if(H==="/")return"/";H=yl.normalize(H),H=H.replace(/\/$/,"");var k=H.lastIndexOf("/");return k===-1?H:H.substr(k+1)},join:function(){var H=Array.prototype.slice.call(arguments);return yl.normalize(H.join("/"))},join2:(H,k)=>yl.normalize(H+"/"+k)},Jd=()=>{if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function")return H=>crypto.getRandomValues(H);pn("initRandomDevice")},Jc=H=>(Jc=Jd())(H),Cu={resolve:function(){for(var H="",k=!1,re=arguments.length-1;re>=-1&&!k;re--){var de=re>=0?arguments[re]:Me.cwd();if(typeof de!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!de)return"";H=de+"/"+H,k=yl.isAbs(de)}return H=yl.normalizeArray(H.split("/").filter(be=>!!be),!k).join("/"),(k?"/":"")+H||"."},relative:(H,k)=>{H=Cu.resolve(H).substr(1),k=Cu.resolve(k).substr(1);function re(Et){for(var Bt=0;Bt<Et.length&&Et[Bt]==="";Bt++);for(var tn=Et.length-1;tn>=0&&Et[tn]==="";tn--);return Bt>tn?[]:Et.slice(Bt,tn-Bt+1)}for(var de=re(H.split("/")),be=re(k.split("/")),qe=Math.min(de.length,be.length),Ze=qe,Je=0;Je<qe;Je++)if(de[Je]!==be[Je]){Ze=Je;break}for(var ot=[],Je=Ze;Je<de.length;Je++)ot.push("..");return ot=ot.concat(be.slice(Ze)),ot.join("/")}},Xc=[];function cc(H,k,re){var de=re>0?re:uc(H)+1,be=new Array(de),qe=jc(H,be,0,be.length);return k&&(be.length=qe),be}var Xd=()=>{if(!Xc.length){var H=null;if(typeof window<"u"&&typeof window.prompt=="function"?(H=window.prompt("Input: "),H!==null&&(H+=`
`)):typeof readline=="function"&&(H=readline(),H!==null&&(H+=`
`)),!H)return null;Xc=cc(H,!0)}return Xc.shift()},ka={ttys:[],init:function(){},shutdown:function(){},register:function(H,k){ka.ttys[H]={input:[],output:[],ops:k},Me.registerDevice(H,ka.stream_ops)},stream_ops:{open:function(H){var k=ka.ttys[H.node.rdev];if(!k)throw new Me.ErrnoError(43);H.tty=k,H.seekable=!1},close:function(H){H.tty.ops.fsync(H.tty)},fsync:function(H){H.tty.ops.fsync(H.tty)},read:function(H,k,re,de,be){if(!H.tty||!H.tty.ops.get_char)throw new Me.ErrnoError(60);for(var qe=0,Ze=0;Ze<de;Ze++){var Je;try{Je=H.tty.ops.get_char(H.tty)}catch{throw new Me.ErrnoError(29)}if(Je===void 0&&qe===0)throw new Me.ErrnoError(6);if(Je==null)break;qe++,k[re+Ze]=Je}return qe&&(H.node.timestamp=Date.now()),qe},write:function(H,k,re,de,be){if(!H.tty||!H.tty.ops.put_char)throw new Me.ErrnoError(60);try{for(var qe=0;qe<de;qe++)H.tty.ops.put_char(H.tty,k[re+qe])}catch{throw new Me.ErrnoError(29)}return de&&(H.node.timestamp=Date.now()),qe}},default_tty_ops:{get_char:function(H){return Xd()},put_char:function(H,k){k===null||k===10?(Te(Pu(H.output,0)),H.output=[]):k!=0&&H.output.push(k)},fsync:function(H){H.output&&H.output.length>0&&(Te(Pu(H.output,0)),H.output=[])},ioctl_tcgets:function(H){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets:function(H,k,re){return 0},ioctl_tiocgwinsz:function(H){return[24,80]}},default_tty1_ops:{put_char:function(H,k){k===null||k===10?(oe(Pu(H.output,0)),H.output=[]):k!=0&&H.output.push(k)},fsync:function(H){H.output&&H.output.length>0&&(oe(Pu(H.output,0)),H.output=[])}}},hI=H=>{pn()},jn={ops_table:null,mount(H){return jn.createNode(null,"/",16895,0)},createNode(H,k,re,de){if(Me.isBlkdev(re)||Me.isFIFO(re))throw new Me.ErrnoError(63);jn.ops_table||(jn.ops_table={dir:{node:{getattr:jn.node_ops.getattr,setattr:jn.node_ops.setattr,lookup:jn.node_ops.lookup,mknod:jn.node_ops.mknod,rename:jn.node_ops.rename,unlink:jn.node_ops.unlink,rmdir:jn.node_ops.rmdir,readdir:jn.node_ops.readdir,symlink:jn.node_ops.symlink},stream:{llseek:jn.stream_ops.llseek}},file:{node:{getattr:jn.node_ops.getattr,setattr:jn.node_ops.setattr},stream:{llseek:jn.stream_ops.llseek,read:jn.stream_ops.read,write:jn.stream_ops.write,allocate:jn.stream_ops.allocate,mmap:jn.stream_ops.mmap,msync:jn.stream_ops.msync}},link:{node:{getattr:jn.node_ops.getattr,setattr:jn.node_ops.setattr,readlink:jn.node_ops.readlink},stream:{}},chrdev:{node:{getattr:jn.node_ops.getattr,setattr:jn.node_ops.setattr},stream:Me.chrdev_stream_ops}});var be=Me.createNode(H,k,re,de);return Me.isDir(be.mode)?(be.node_ops=jn.ops_table.dir.node,be.stream_ops=jn.ops_table.dir.stream,be.contents={}):Me.isFile(be.mode)?(be.node_ops=jn.ops_table.file.node,be.stream_ops=jn.ops_table.file.stream,be.usedBytes=0,be.contents=null):Me.isLink(be.mode)?(be.node_ops=jn.ops_table.link.node,be.stream_ops=jn.ops_table.link.stream):Me.isChrdev(be.mode)&&(be.node_ops=jn.ops_table.chrdev.node,be.stream_ops=jn.ops_table.chrdev.stream),be.timestamp=Date.now(),H&&(H.contents[k]=be,H.timestamp=be.timestamp),be},getFileDataAsTypedArray(H){return H.contents?H.contents.subarray?H.contents.subarray(0,H.usedBytes):new Uint8Array(H.contents):new Uint8Array(0)},expandFileStorage(H,k){var re=H.contents?H.contents.length:0;if(!(re>=k)){var de=1024*1024;k=Math.max(k,re*(re<de?2:1.125)>>>0),re!=0&&(k=Math.max(k,256));var be=H.contents;H.contents=new Uint8Array(k),H.usedBytes>0&&H.contents.set(be.subarray(0,H.usedBytes),0)}},resizeFileStorage(H,k){if(H.usedBytes!=k)if(k==0)H.contents=null,H.usedBytes=0;else{var re=H.contents;H.contents=new Uint8Array(k),re&&H.contents.set(re.subarray(0,Math.min(k,H.usedBytes))),H.usedBytes=k}},node_ops:{getattr(H){var k={};return k.dev=Me.isChrdev(H.mode)?H.id:1,k.ino=H.id,k.mode=H.mode,k.nlink=1,k.uid=0,k.gid=0,k.rdev=H.rdev,Me.isDir(H.mode)?k.size=4096:Me.isFile(H.mode)?k.size=H.usedBytes:Me.isLink(H.mode)?k.size=H.link.length:k.size=0,k.atime=new Date(H.timestamp),k.mtime=new Date(H.timestamp),k.ctime=new Date(H.timestamp),k.blksize=4096,k.blocks=Math.ceil(k.size/k.blksize),k},setattr(H,k){k.mode!==void 0&&(H.mode=k.mode),k.timestamp!==void 0&&(H.timestamp=k.timestamp),k.size!==void 0&&jn.resizeFileStorage(H,k.size)},lookup(H,k){throw Me.genericErrors[44]},mknod(H,k,re,de){return jn.createNode(H,k,re,de)},rename(H,k,re){if(Me.isDir(H.mode)){var de;try{de=Me.lookupNode(k,re)}catch{}if(de)for(var be in de.contents)throw new Me.ErrnoError(55)}delete H.parent.contents[H.name],H.parent.timestamp=Date.now(),H.name=re,k.contents[re]=H,k.timestamp=H.parent.timestamp,H.parent=k},unlink(H,k){delete H.contents[k],H.timestamp=Date.now()},rmdir(H,k){var re=Me.lookupNode(H,k);for(var de in re.contents)throw new Me.ErrnoError(55);delete H.contents[k],H.timestamp=Date.now()},readdir(H){var k=[".",".."];for(var re in H.contents)H.contents.hasOwnProperty(re)&&k.push(re);return k},symlink(H,k,re){var de=jn.createNode(H,k,41471,0);return de.link=re,de},readlink(H){if(!Me.isLink(H.mode))throw new Me.ErrnoError(28);return H.link}},stream_ops:{read(H,k,re,de,be){var qe=H.node.contents;if(be>=H.node.usedBytes)return 0;var Ze=Math.min(H.node.usedBytes-be,de);if(Ze>8&&qe.subarray)k.set(qe.subarray(be,be+Ze),re);else for(var Je=0;Je<Ze;Je++)k[re+Je]=qe[be+Je];return Ze},write(H,k,re,de,be,qe){if(k.buffer===xe.buffer&&(qe=!1),!de)return 0;var Ze=H.node;if(Ze.timestamp=Date.now(),k.subarray&&(!Ze.contents||Ze.contents.subarray)){if(qe)return Ze.contents=k.subarray(re,re+de),Ze.usedBytes=de,de;if(Ze.usedBytes===0&&be===0)return Ze.contents=k.slice(re,re+de),Ze.usedBytes=de,de;if(be+de<=Ze.usedBytes)return Ze.contents.set(k.subarray(re,re+de),be),de}if(jn.expandFileStorage(Ze,be+de),Ze.contents.subarray&&k.subarray)Ze.contents.set(k.subarray(re,re+de),be);else for(var Je=0;Je<de;Je++)Ze.contents[be+Je]=k[re+Je];return Ze.usedBytes=Math.max(Ze.usedBytes,be+de),de},llseek(H,k,re){var de=k;if(re===1?de+=H.position:re===2&&Me.isFile(H.node.mode)&&(de+=H.node.usedBytes),de<0)throw new Me.ErrnoError(28);return de},allocate(H,k,re){jn.expandFileStorage(H.node,k+re),H.node.usedBytes=Math.max(H.node.usedBytes,k+re)},mmap(H,k,re,de,be){if(!Me.isFile(H.node.mode))throw new Me.ErrnoError(43);var qe,Ze,Je=H.node.contents;if(!(be&2)&&Je.buffer===xe.buffer)Ze=!1,qe=Je.byteOffset;else{if((re>0||re+k<Je.length)&&(Je.subarray?Je=Je.subarray(re,re+k):Je=Array.prototype.slice.call(Je,re,re+k)),Ze=!0,qe=hI(),!qe)throw new Me.ErrnoError(48);xe.set(Je,qe>>>0)}return{ptr:qe,allocated:Ze}},msync(H,k,re,de,be){return jn.stream_ops.write(H,k,0,de,re,!1),0}}},vd=(H,k,re,de)=>{var be=de?"":`al ${H}`;he(H,qe=>{We(qe,`Loading data file "${H}" failed (no arrayBuffer).`),k(new Uint8Array(qe)),be&&qn()},qe=>{if(re)re();else throw`Loading data file "${H}" failed.`}),be&&kn()},e1=w.preloadPlugins||[];function t1(H,k,re,de){typeof Browser<"u"&&Browser.init();var be=!1;return e1.forEach(function(qe){be||qe.canHandle(k)&&(qe.handle(H,k,re,de),be=!0)}),be}function n1(H,k,re,de,be,qe,Ze,Je,ot,Et){var Bt=k?Cu.resolve(yl.join2(H,k)):H;function tn(Kt){function Yt(Tn){Et&&Et(),Je||Me.createDataFile(H,k,Tn,de,be,ot),qe&&qe(),qn()}t1(Kt,Bt,Yt,()=>{Ze&&Ze(),qn()})||Yt(Kt)}kn(),typeof re=="string"?vd(re,Kt=>tn(Kt),Ze):tn(re)}function l1(H){var k={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},re=k[H];if(typeof re>"u")throw new Error(`Unknown file open mode: ${H}`);return re}function vc(H,k){var re=0;return H&&(re|=365),k&&(re|=146),re}var Me={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,lookupPath:(H,k={})=>{if(H=Cu.resolve(H),!H)return{path:"",node:null};var re={follow_mount:!0,recurse_count:0};if(k=Object.assign(re,k),k.recurse_count>8)throw new Me.ErrnoError(32);for(var de=H.split("/").filter(tn=>!!tn),be=Me.root,qe="/",Ze=0;Ze<de.length;Ze++){var Je=Ze===de.length-1;if(Je&&k.parent)break;if(be=Me.lookupNode(be,de[Ze]),qe=yl.join2(qe,de[Ze]),Me.isMountpoint(be)&&(!Je||Je&&k.follow_mount)&&(be=be.mounted.root),!Je||k.follow)for(var ot=0;Me.isLink(be.mode);){var Et=Me.readlink(qe);qe=Cu.resolve(yl.dirname(qe),Et);var Bt=Me.lookupPath(qe,{recurse_count:k.recurse_count+1});if(be=Bt.node,ot++>40)throw new Me.ErrnoError(32)}}return{path:qe,node:be}},getPath:H=>{for(var k;;){if(Me.isRoot(H)){var re=H.mount.mountpoint;return k?re[re.length-1]!=="/"?`${re}/${k}`:re+k:re}k=k?`${H.name}/${k}`:H.name,H=H.parent}},hashName:(H,k)=>{for(var re=0,de=0;de<k.length;de++)re=(re<<5)-re+k.charCodeAt(de)|0;return(H+re>>>0)%Me.nameTable.length},hashAddNode:H=>{var k=Me.hashName(H.parent.id,H.name);H.name_next=Me.nameTable[k],Me.nameTable[k]=H},hashRemoveNode:H=>{var k=Me.hashName(H.parent.id,H.name);if(Me.nameTable[k]===H)Me.nameTable[k]=H.name_next;else for(var re=Me.nameTable[k];re;){if(re.name_next===H){re.name_next=H.name_next;break}re=re.name_next}},lookupNode:(H,k)=>{var re=Me.mayLookup(H);if(re)throw new Me.ErrnoError(re,H);for(var de=Me.hashName(H.id,k),be=Me.nameTable[de];be;be=be.name_next){var qe=be.name;if(be.parent.id===H.id&&qe===k)return be}return Me.lookup(H,k)},createNode:(H,k,re,de)=>{var be=new Me.FSNode(H,k,re,de);return Me.hashAddNode(be),be},destroyNode:H=>{Me.hashRemoveNode(H)},isRoot:H=>H===H.parent,isMountpoint:H=>!!H.mounted,isFile:H=>(H&61440)===32768,isDir:H=>(H&61440)===16384,isLink:H=>(H&61440)===40960,isChrdev:H=>(H&61440)===8192,isBlkdev:H=>(H&61440)===24576,isFIFO:H=>(H&61440)===4096,isSocket:H=>(H&49152)===49152,flagsToPermissionString:H=>{var k=["r","w","rw"][H&3];return H&512&&(k+="w"),k},nodePermissions:(H,k)=>Me.ignorePermissions?0:k.includes("r")&&!(H.mode&292)||k.includes("w")&&!(H.mode&146)||k.includes("x")&&!(H.mode&73)?2:0,mayLookup:H=>{var k=Me.nodePermissions(H,"x");return k||(H.node_ops.lookup?0:2)},mayCreate:(H,k)=>{try{var re=Me.lookupNode(H,k);return 20}catch{}return Me.nodePermissions(H,"wx")},mayDelete:(H,k,re)=>{var de;try{de=Me.lookupNode(H,k)}catch(qe){return qe.errno}var be=Me.nodePermissions(H,"wx");if(be)return be;if(re){if(!Me.isDir(de.mode))return 54;if(Me.isRoot(de)||Me.getPath(de)===Me.cwd())return 10}else if(Me.isDir(de.mode))return 31;return 0},mayOpen:(H,k)=>H?Me.isLink(H.mode)?32:Me.isDir(H.mode)&&(Me.flagsToPermissionString(k)!=="r"||k&512)?31:Me.nodePermissions(H,Me.flagsToPermissionString(k)):44,MAX_OPEN_FDS:4096,nextfd:()=>{for(var H=0;H<=Me.MAX_OPEN_FDS;H++)if(!Me.streams[H])return H;throw new Me.ErrnoError(33)},getStreamChecked:H=>{var k=Me.getStream(H);if(!k)throw new Me.ErrnoError(8);return k},getStream:H=>Me.streams[H],createStream:(H,k=-1)=>(Me.FSStream||(Me.FSStream=function(){this.shared={}},Me.FSStream.prototype={},Object.defineProperties(Me.FSStream.prototype,{object:{get(){return this.node},set(re){this.node=re}},isRead:{get(){return(this.flags&2097155)!==1}},isWrite:{get(){return(this.flags&2097155)!==0}},isAppend:{get(){return this.flags&1024}},flags:{get(){return this.shared.flags},set(re){this.shared.flags=re}},position:{get(){return this.shared.position},set(re){this.shared.position=re}}})),H=Object.assign(new Me.FSStream,H),k==-1&&(k=Me.nextfd()),H.fd=k,Me.streams[k]=H,H),closeStream:H=>{Me.streams[H]=null},chrdev_stream_ops:{open:H=>{var k=Me.getDevice(H.node.rdev);H.stream_ops=k.stream_ops,H.stream_ops.open&&H.stream_ops.open(H)},llseek:()=>{throw new Me.ErrnoError(70)}},major:H=>H>>8,minor:H=>H&255,makedev:(H,k)=>H<<8|k,registerDevice:(H,k)=>{Me.devices[H]={stream_ops:k}},getDevice:H=>Me.devices[H],getMounts:H=>{for(var k=[],re=[H];re.length;){var de=re.pop();k.push(de),re.push.apply(re,de.mounts)}return k},syncfs:(H,k)=>{typeof H=="function"&&(k=H,H=!1),Me.syncFSRequests++,Me.syncFSRequests>1&&oe(`warning: ${Me.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var re=Me.getMounts(Me.root.mount),de=0;function be(Ze){return Me.syncFSRequests--,k(Ze)}function qe(Ze){if(Ze)return qe.errored?void 0:(qe.errored=!0,be(Ze));++de>=re.length&&be(null)}re.forEach(Ze=>{if(!Ze.type.syncfs)return qe(null);Ze.type.syncfs(Ze,H,qe)})},mount:(H,k,re)=>{var de=re==="/",be=!re,qe;if(de&&Me.root)throw new Me.ErrnoError(10);if(!de&&!be){var Ze=Me.lookupPath(re,{follow_mount:!1});if(re=Ze.path,qe=Ze.node,Me.isMountpoint(qe))throw new Me.ErrnoError(10);if(!Me.isDir(qe.mode))throw new Me.ErrnoError(54)}var Je={type:H,opts:k,mountpoint:re,mounts:[]},ot=H.mount(Je);return ot.mount=Je,Je.root=ot,de?Me.root=ot:qe&&(qe.mounted=Je,qe.mount&&qe.mount.mounts.push(Je)),ot},unmount:H=>{var k=Me.lookupPath(H,{follow_mount:!1});if(!Me.isMountpoint(k.node))throw new Me.ErrnoError(28);var re=k.node,de=re.mounted,be=Me.getMounts(de);Object.keys(Me.nameTable).forEach(Ze=>{for(var Je=Me.nameTable[Ze];Je;){var ot=Je.name_next;be.includes(Je.mount)&&Me.destroyNode(Je),Je=ot}}),re.mounted=null;var qe=re.mount.mounts.indexOf(de);re.mount.mounts.splice(qe,1)},lookup:(H,k)=>H.node_ops.lookup(H,k),mknod:(H,k,re)=>{var de=Me.lookupPath(H,{parent:!0}),be=de.node,qe=yl.basename(H);if(!qe||qe==="."||qe==="..")throw new Me.ErrnoError(28);var Ze=Me.mayCreate(be,qe);if(Ze)throw new Me.ErrnoError(Ze);if(!be.node_ops.mknod)throw new Me.ErrnoError(63);return be.node_ops.mknod(be,qe,k,re)},create:(H,k)=>(k=k!==void 0?k:438,k&=4095,k|=32768,Me.mknod(H,k,0)),mkdir:(H,k)=>(k=k!==void 0?k:511,k&=1023,k|=16384,Me.mknod(H,k,0)),mkdirTree:(H,k)=>{for(var re=H.split("/"),de="",be=0;be<re.length;++be)if(re[be]){de+="/"+re[be];try{Me.mkdir(de,k)}catch(qe){if(qe.errno!=20)throw qe}}},mkdev:(H,k,re)=>(typeof re>"u"&&(re=k,k=438),k|=8192,Me.mknod(H,k,re)),symlink:(H,k)=>{if(!Cu.resolve(H))throw new Me.ErrnoError(44);var re=Me.lookupPath(k,{parent:!0}),de=re.node;if(!de)throw new Me.ErrnoError(44);var be=yl.basename(k),qe=Me.mayCreate(de,be);if(qe)throw new Me.ErrnoError(qe);if(!de.node_ops.symlink)throw new Me.ErrnoError(63);return de.node_ops.symlink(de,be,H)},rename:(H,k)=>{var re=yl.dirname(H),de=yl.dirname(k),be=yl.basename(H),qe=yl.basename(k),Ze,Je,ot;if(Ze=Me.lookupPath(H,{parent:!0}),Je=Ze.node,Ze=Me.lookupPath(k,{parent:!0}),ot=Ze.node,!Je||!ot)throw new Me.ErrnoError(44);if(Je.mount!==ot.mount)throw new Me.ErrnoError(75);var Et=Me.lookupNode(Je,be),Bt=Cu.relative(H,de);if(Bt.charAt(0)!==".")throw new Me.ErrnoError(28);if(Bt=Cu.relative(k,re),Bt.charAt(0)!==".")throw new Me.ErrnoError(55);var tn;try{tn=Me.lookupNode(ot,qe)}catch{}if(Et!==tn){var Kt=Me.isDir(Et.mode),Yt=Me.mayDelete(Je,be,Kt);if(Yt)throw new Me.ErrnoError(Yt);if(Yt=tn?Me.mayDelete(ot,qe,Kt):Me.mayCreate(ot,qe),Yt)throw new Me.ErrnoError(Yt);if(!Je.node_ops.rename)throw new Me.ErrnoError(63);if(Me.isMountpoint(Et)||tn&&Me.isMountpoint(tn))throw new Me.ErrnoError(10);if(ot!==Je&&(Yt=Me.nodePermissions(Je,"w"),Yt))throw new Me.ErrnoError(Yt);Me.hashRemoveNode(Et);try{Je.node_ops.rename(Et,ot,qe)}catch(Tn){throw Tn}finally{Me.hashAddNode(Et)}}},rmdir:H=>{var k=Me.lookupPath(H,{parent:!0}),re=k.node,de=yl.basename(H),be=Me.lookupNode(re,de),qe=Me.mayDelete(re,de,!0);if(qe)throw new Me.ErrnoError(qe);if(!re.node_ops.rmdir)throw new Me.ErrnoError(63);if(Me.isMountpoint(be))throw new Me.ErrnoError(10);re.node_ops.rmdir(re,de),Me.destroyNode(be)},readdir:H=>{var k=Me.lookupPath(H,{follow:!0}),re=k.node;if(!re.node_ops.readdir)throw new Me.ErrnoError(54);return re.node_ops.readdir(re)},unlink:H=>{var k=Me.lookupPath(H,{parent:!0}),re=k.node;if(!re)throw new Me.ErrnoError(44);var de=yl.basename(H),be=Me.lookupNode(re,de),qe=Me.mayDelete(re,de,!1);if(qe)throw new Me.ErrnoError(qe);if(!re.node_ops.unlink)throw new Me.ErrnoError(63);if(Me.isMountpoint(be))throw new Me.ErrnoError(10);re.node_ops.unlink(re,de),Me.destroyNode(be)},readlink:H=>{var k=Me.lookupPath(H),re=k.node;if(!re)throw new Me.ErrnoError(44);if(!re.node_ops.readlink)throw new Me.ErrnoError(28);return Cu.resolve(Me.getPath(re.parent),re.node_ops.readlink(re))},stat:(H,k)=>{var re=Me.lookupPath(H,{follow:!k}),de=re.node;if(!de)throw new Me.ErrnoError(44);if(!de.node_ops.getattr)throw new Me.ErrnoError(63);return de.node_ops.getattr(de)},lstat:H=>Me.stat(H,!0),chmod:(H,k,re)=>{var de;if(typeof H=="string"){var be=Me.lookupPath(H,{follow:!re});de=be.node}else de=H;if(!de.node_ops.setattr)throw new Me.ErrnoError(63);de.node_ops.setattr(de,{mode:k&4095|de.mode&-4096,timestamp:Date.now()})},lchmod:(H,k)=>{Me.chmod(H,k,!0)},fchmod:(H,k)=>{var re=Me.getStreamChecked(H);Me.chmod(re.node,k)},chown:(H,k,re,de)=>{var be;if(typeof H=="string"){var qe=Me.lookupPath(H,{follow:!de});be=qe.node}else be=H;if(!be.node_ops.setattr)throw new Me.ErrnoError(63);be.node_ops.setattr(be,{timestamp:Date.now()})},lchown:(H,k,re)=>{Me.chown(H,k,re,!0)},fchown:(H,k,re)=>{var de=Me.getStreamChecked(H);Me.chown(de.node,k,re)},truncate:(H,k)=>{if(k<0)throw new Me.ErrnoError(28);var re;if(typeof H=="string"){var de=Me.lookupPath(H,{follow:!0});re=de.node}else re=H;if(!re.node_ops.setattr)throw new Me.ErrnoError(63);if(Me.isDir(re.mode))throw new Me.ErrnoError(31);if(!Me.isFile(re.mode))throw new Me.ErrnoError(28);var be=Me.nodePermissions(re,"w");if(be)throw new Me.ErrnoError(be);re.node_ops.setattr(re,{size:k,timestamp:Date.now()})},ftruncate:(H,k)=>{var re=Me.getStreamChecked(H);if(!(re.flags&2097155))throw new Me.ErrnoError(28);Me.truncate(re.node,k)},utime:(H,k,re)=>{var de=Me.lookupPath(H,{follow:!0}),be=de.node;be.node_ops.setattr(be,{timestamp:Math.max(k,re)})},open:(H,k,re)=>{if(H==="")throw new Me.ErrnoError(44);k=typeof k=="string"?l1(k):k,re=typeof re>"u"?438:re,k&64?re=re&4095|32768:re=0;var de;if(typeof H=="object")de=H;else{H=yl.normalize(H);try{var be=Me.lookupPath(H,{follow:!(k&131072)});de=be.node}catch{}}var qe=!1;if(k&64)if(de){if(k&128)throw new Me.ErrnoError(20)}else de=Me.mknod(H,re,0),qe=!0;if(!de)throw new Me.ErrnoError(44);if(Me.isChrdev(de.mode)&&(k&=-513),k&65536&&!Me.isDir(de.mode))throw new Me.ErrnoError(54);if(!qe){var Ze=Me.mayOpen(de,k);if(Ze)throw new Me.ErrnoError(Ze)}k&512&&!qe&&Me.truncate(de,0),k&=-131713;var Je=Me.createStream({node:de,path:Me.getPath(de),flags:k,seekable:!0,position:0,stream_ops:de.stream_ops,ungotten:[],error:!1});return Je.stream_ops.open&&Je.stream_ops.open(Je),w.logReadFiles&&!(k&1)&&(Me.readFiles||(Me.readFiles={}),H in Me.readFiles||(Me.readFiles[H]=1)),Je},close:H=>{if(Me.isClosed(H))throw new Me.ErrnoError(8);H.getdents&&(H.getdents=null);try{H.stream_ops.close&&H.stream_ops.close(H)}catch(k){throw k}finally{Me.closeStream(H.fd)}H.fd=null},isClosed:H=>H.fd===null,llseek:(H,k,re)=>{if(Me.isClosed(H))throw new Me.ErrnoError(8);if(!H.seekable||!H.stream_ops.llseek)throw new Me.ErrnoError(70);if(re!=0&&re!=1&&re!=2)throw new Me.ErrnoError(28);return H.position=H.stream_ops.llseek(H,k,re),H.ungotten=[],H.position},read:(H,k,re,de,be)=>{if(de<0||be<0)throw new Me.ErrnoError(28);if(Me.isClosed(H))throw new Me.ErrnoError(8);if((H.flags&2097155)===1)throw new Me.ErrnoError(8);if(Me.isDir(H.node.mode))throw new Me.ErrnoError(31);if(!H.stream_ops.read)throw new Me.ErrnoError(28);var qe=typeof be<"u";if(!qe)be=H.position;else if(!H.seekable)throw new Me.ErrnoError(70);var Ze=H.stream_ops.read(H,k,re,de,be);return qe||(H.position+=Ze),Ze},write:(H,k,re,de,be,qe)=>{if(de<0||be<0)throw new Me.ErrnoError(28);if(Me.isClosed(H))throw new Me.ErrnoError(8);if(!(H.flags&2097155))throw new Me.ErrnoError(8);if(Me.isDir(H.node.mode))throw new Me.ErrnoError(31);if(!H.stream_ops.write)throw new Me.ErrnoError(28);H.seekable&&H.flags&1024&&Me.llseek(H,0,2);var Ze=typeof be<"u";if(!Ze)be=H.position;else if(!H.seekable)throw new Me.ErrnoError(70);var Je=H.stream_ops.write(H,k,re,de,be,qe);return Ze||(H.position+=Je),Je},allocate:(H,k,re)=>{if(Me.isClosed(H))throw new Me.ErrnoError(8);if(k<0||re<=0)throw new Me.ErrnoError(28);if(!(H.flags&2097155))throw new Me.ErrnoError(8);if(!Me.isFile(H.node.mode)&&!Me.isDir(H.node.mode))throw new Me.ErrnoError(43);if(!H.stream_ops.allocate)throw new Me.ErrnoError(138);H.stream_ops.allocate(H,k,re)},mmap:(H,k,re,de,be)=>{if(de&2&&!(be&2)&&(H.flags&2097155)!==2)throw new Me.ErrnoError(2);if((H.flags&2097155)===1)throw new Me.ErrnoError(2);if(!H.stream_ops.mmap)throw new Me.ErrnoError(43);return H.stream_ops.mmap(H,k,re,de,be)},msync:(H,k,re,de,be)=>H.stream_ops.msync?H.stream_ops.msync(H,k,re,de,be):0,munmap:H=>0,ioctl:(H,k,re)=>{if(!H.stream_ops.ioctl)throw new Me.ErrnoError(59);return H.stream_ops.ioctl(H,k,re)},readFile:(H,k={})=>{if(k.flags=k.flags||0,k.encoding=k.encoding||"binary",k.encoding!=="utf8"&&k.encoding!=="binary")throw new Error(`Invalid encoding type "${k.encoding}"`);var re,de=Me.open(H,k.flags),be=Me.stat(H),qe=be.size,Ze=new Uint8Array(qe);return Me.read(de,Ze,0,qe,0),k.encoding==="utf8"?re=Pu(Ze,0):k.encoding==="binary"&&(re=Ze),Me.close(de),re},writeFile:(H,k,re={})=>{re.flags=re.flags||577;var de=Me.open(H,re.flags,re.mode);if(typeof k=="string"){var be=new Uint8Array(uc(k)+1),qe=jc(k,be,0,be.length);Me.write(de,be,0,qe,void 0,re.canOwn)}else if(ArrayBuffer.isView(k))Me.write(de,k,0,k.byteLength,void 0,re.canOwn);else throw new Error("Unsupported data type");Me.close(de)},cwd:()=>Me.currentPath,chdir:H=>{var k=Me.lookupPath(H,{follow:!0});if(k.node===null)throw new Me.ErrnoError(44);if(!Me.isDir(k.node.mode))throw new Me.ErrnoError(54);var re=Me.nodePermissions(k.node,"x");if(re)throw new Me.ErrnoError(re);Me.currentPath=k.path},createDefaultDirectories:()=>{Me.mkdir("/tmp"),Me.mkdir("/home"),Me.mkdir("/home/web_user")},createDefaultDevices:()=>{Me.mkdir("/dev"),Me.registerDevice(Me.makedev(1,3),{read:()=>0,write:(de,be,qe,Ze,Je)=>Ze}),Me.mkdev("/dev/null",Me.makedev(1,3)),ka.register(Me.makedev(5,0),ka.default_tty_ops),ka.register(Me.makedev(6,0),ka.default_tty1_ops),Me.mkdev("/dev/tty",Me.makedev(5,0)),Me.mkdev("/dev/tty1",Me.makedev(6,0));var H=new Uint8Array(1024),k=0,re=()=>(k===0&&(k=Jc(H).byteLength),H[--k]);Me.createDevice("/dev","random",re),Me.createDevice("/dev","urandom",re),Me.mkdir("/dev/shm"),Me.mkdir("/dev/shm/tmp")},createSpecialDirectories:()=>{Me.mkdir("/proc");var H=Me.mkdir("/proc/self");Me.mkdir("/proc/self/fd"),Me.mount({mount:()=>{var k=Me.createNode(H,"fd",16895,73);return k.node_ops={lookup:(re,de)=>{var be=+de,qe=Me.getStreamChecked(be),Ze={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>qe.path}};return Ze.parent=Ze,Ze}},k}},{},"/proc/self/fd")},createStandardStreams:()=>{w.stdin?Me.createDevice("/dev","stdin",w.stdin):Me.symlink("/dev/tty","/dev/stdin"),w.stdout?Me.createDevice("/dev","stdout",null,w.stdout):Me.symlink("/dev/tty","/dev/stdout"),w.stderr?Me.createDevice("/dev","stderr",null,w.stderr):Me.symlink("/dev/tty1","/dev/stderr"),Me.open("/dev/stdin",0),Me.open("/dev/stdout",1),Me.open("/dev/stderr",1)},ensureErrnoError:()=>{Me.ErrnoError||(Me.ErrnoError=function(k,re){this.name="ErrnoError",this.node=re,this.setErrno=function(de){this.errno=de},this.setErrno(k),this.message="FS error"},Me.ErrnoError.prototype=new Error,Me.ErrnoError.prototype.constructor=Me.ErrnoError,[44].forEach(H=>{Me.genericErrors[H]=new Me.ErrnoError(H),Me.genericErrors[H].stack="<generic error, no stack>"}))},staticInit:()=>{Me.ensureErrnoError(),Me.nameTable=new Array(4096),Me.mount(jn,{},"/"),Me.createDefaultDirectories(),Me.createDefaultDevices(),Me.createSpecialDirectories(),Me.filesystems={MEMFS:jn}},init:(H,k,re)=>{Me.init.initialized=!0,Me.ensureErrnoError(),w.stdin=H||w.stdin,w.stdout=k||w.stdout,w.stderr=re||w.stderr,Me.createStandardStreams()},quit:()=>{Me.init.initialized=!1;for(var H=0;H<Me.streams.length;H++){var k=Me.streams[H];k&&Me.close(k)}},findObject:(H,k)=>{var re=Me.analyzePath(H,k);return re.exists?re.object:null},analyzePath:(H,k)=>{try{var re=Me.lookupPath(H,{follow:!k});H=re.path}catch{}var de={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var re=Me.lookupPath(H,{parent:!0});de.parentExists=!0,de.parentPath=re.path,de.parentObject=re.node,de.name=yl.basename(H),re=Me.lookupPath(H,{follow:!k}),de.exists=!0,de.path=re.path,de.object=re.node,de.name=re.node.name,de.isRoot=re.path==="/"}catch(be){de.error=be.errno}return de},createPath:(H,k,re,de)=>{H=typeof H=="string"?H:Me.getPath(H);for(var be=k.split("/").reverse();be.length;){var qe=be.pop();if(qe){var Ze=yl.join2(H,qe);try{Me.mkdir(Ze)}catch{}H=Ze}}return Ze},createFile:(H,k,re,de,be)=>{var qe=yl.join2(typeof H=="string"?H:Me.getPath(H),k),Ze=vc(de,be);return Me.create(qe,Ze)},createDataFile:(H,k,re,de,be,qe)=>{var Ze=k;H&&(H=typeof H=="string"?H:Me.getPath(H),Ze=k?yl.join2(H,k):H);var Je=vc(de,be),ot=Me.create(Ze,Je);if(re){if(typeof re=="string"){for(var Et=new Array(re.length),Bt=0,tn=re.length;Bt<tn;++Bt)Et[Bt]=re.charCodeAt(Bt);re=Et}Me.chmod(ot,Je|146);var Kt=Me.open(ot,577);Me.write(Kt,re,0,re.length,0,qe),Me.close(Kt),Me.chmod(ot,Je)}return ot},createDevice:(H,k,re,de)=>{var be=yl.join2(typeof H=="string"?H:Me.getPath(H),k),qe=vc(!!re,!!de);Me.createDevice.major||(Me.createDevice.major=64);var Ze=Me.makedev(Me.createDevice.major++,0);return Me.registerDevice(Ze,{open:Je=>{Je.seekable=!1},close:Je=>{de&&de.buffer&&de.buffer.length&&de(10)},read:(Je,ot,Et,Bt,tn)=>{for(var Kt=0,Yt=0;Yt<Bt;Yt++){var Tn;try{Tn=re()}catch{throw new Me.ErrnoError(29)}if(Tn===void 0&&Kt===0)throw new Me.ErrnoError(6);if(Tn==null)break;Kt++,ot[Et+Yt]=Tn}return Kt&&(Je.node.timestamp=Date.now()),Kt},write:(Je,ot,Et,Bt,tn)=>{for(var Kt=0;Kt<Bt;Kt++)try{de(ot[Et+Kt])}catch{throw new Me.ErrnoError(29)}return Bt&&(Je.node.timestamp=Date.now()),Kt}}),Me.mkdev(be,qe,Ze)},forceLoadFile:H=>{if(H.isDevice||H.isFolder||H.link||H.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");if(v)try{H.contents=cc(v(H.url),!0),H.usedBytes=H.contents.length}catch{throw new Me.ErrnoError(29)}else throw new Error("Cannot load without read() or XMLHttpRequest.")},createLazyFile:(H,k,re,de,be)=>{function qe(){this.lengthKnown=!1,this.chunks=[]}if(qe.prototype.get=function(Yt){if(!(Yt>this.length-1||Yt<0)){var Tn=Yt%this.chunkSize,rl=Yt/this.chunkSize|0;return this.getter(rl)[Tn]}},qe.prototype.setDataGetter=function(Yt){this.getter=Yt},qe.prototype.cacheLength=function(){var Yt=new XMLHttpRequest;if(Yt.open("HEAD",re,!1),Yt.send(null),!(Yt.status>=200&&Yt.status<300||Yt.status===304))throw new Error("Couldn't load "+re+". Status: "+Yt.status);var Tn=Number(Yt.getResponseHeader("Content-length")),rl,al=(rl=Yt.getResponseHeader("Accept-Ranges"))&&rl==="bytes",wl=(rl=Yt.getResponseHeader("Content-Encoding"))&&rl==="gzip",Mt=1024*1024;al||(Mt=Tn);var sn=(cl,Js)=>{if(cl>Js)throw new Error("invalid range ("+cl+", "+Js+") or no bytes requested!");if(Js>Tn-1)throw new Error("only "+Tn+" bytes available! programmer error!");var Jl=new XMLHttpRequest;if(Jl.open("GET",re,!1),Tn!==Mt&&Jl.setRequestHeader("Range","bytes="+cl+"-"+Js),Jl.responseType="arraybuffer",Jl.overrideMimeType&&Jl.overrideMimeType("text/plain; charset=x-user-defined"),Jl.send(null),!(Jl.status>=200&&Jl.status<300||Jl.status===304))throw new Error("Couldn't load "+re+". Status: "+Jl.status);return Jl.response!==void 0?new Uint8Array(Jl.response||[]):cc(Jl.responseText||"",!0)},ys=this;ys.setDataGetter(cl=>{var Js=cl*Mt,Jl=(cl+1)*Mt-1;if(Jl=Math.min(Jl,Tn-1),typeof ys.chunks[cl]>"u"&&(ys.chunks[cl]=sn(Js,Jl)),typeof ys.chunks[cl]>"u")throw new Error("doXHR failed!");return ys.chunks[cl]}),(wl||!Tn)&&(Mt=Tn=1,Tn=this.getter(0).length,Mt=Tn,Te("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=Tn,this._chunkSize=Mt,this.lengthKnown=!0},typeof XMLHttpRequest<"u"){throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var Ze,Je}else var Je={isDevice:!1,url:re};var ot=Me.createFile(H,k,Je,de,be);Je.contents?ot.contents=Je.contents:Je.url&&(ot.contents=null,ot.url=Je.url),Object.defineProperties(ot,{usedBytes:{get:function(){return this.contents.length}}});var Et={},Bt=Object.keys(ot.stream_ops);Bt.forEach(Kt=>{var Yt=ot.stream_ops[Kt];Et[Kt]=function(){return Me.forceLoadFile(ot),Yt.apply(null,arguments)}});function tn(Kt,Yt,Tn,rl,al){var wl=Kt.node.contents;if(al>=wl.length)return 0;var Mt=Math.min(wl.length-al,rl);if(wl.slice)for(var sn=0;sn<Mt;sn++)Yt[Tn+sn]=wl[al+sn];else for(var sn=0;sn<Mt;sn++)Yt[Tn+sn]=wl.get(al+sn);return Mt}return Et.read=(Kt,Yt,Tn,rl,al)=>(Me.forceLoadFile(ot),tn(Kt,Yt,Tn,rl,al)),Et.mmap=(Kt,Yt,Tn,rl,al)=>{Me.forceLoadFile(ot);var wl=hI();if(!wl)throw new Me.ErrnoError(48);return tn(Kt,xe,wl,Yt,Tn),{ptr:wl,allocated:!0}},ot.stream_ops=Et,ot}},Xu={DEFAULT_POLLMASK:5,calculateAt:function(H,k,re){if(yl.isAbs(k))return k;var de;if(H===-100)de=Me.cwd();else{var be=Xu.getStreamFromFD(H);de=be.path}if(k.length==0){if(!re)throw new Me.ErrnoError(44);return de}return yl.join2(de,k)},doStat:function(H,k,re){try{var de=H(k)}catch(Je){if(Je&&Je.node&&yl.normalize(k)!==yl.normalize(Me.getPath(Je.node)))return-54;throw Je}Le[re>>>2]=de.dev,Le[re+4>>>2]=de.mode,ve[re+8>>>2]=de.nlink,Le[re+12>>>2]=de.uid,Le[re+16>>>2]=de.gid,Le[re+20>>>2]=de.rdev,_e=[de.size>>>0,(Ye=de.size,+Math.abs(Ye)>=1?Ye>0?+Math.floor(Ye/4294967296)>>>0:~~+Math.ceil((Ye-+(~~Ye>>>0))/4294967296)>>>0:0)],Le[re+24>>>2]=_e[0],Le[re+28>>>2]=_e[1],Le[re+32>>>2]=4096,Le[re+36>>>2]=de.blocks;var be=de.atime.getTime(),qe=de.mtime.getTime(),Ze=de.ctime.getTime();return _e=[Math.floor(be/1e3)>>>0,(Ye=Math.floor(be/1e3),+Math.abs(Ye)>=1?Ye>0?+Math.floor(Ye/4294967296)>>>0:~~+Math.ceil((Ye-+(~~Ye>>>0))/4294967296)>>>0:0)],Le[re+40>>>2]=_e[0],Le[re+44>>>2]=_e[1],ve[re+48>>>2]=be%1e3*1e3,_e=[Math.floor(qe/1e3)>>>0,(Ye=Math.floor(qe/1e3),+Math.abs(Ye)>=1?Ye>0?+Math.floor(Ye/4294967296)>>>0:~~+Math.ceil((Ye-+(~~Ye>>>0))/4294967296)>>>0:0)],Le[re+56>>>2]=_e[0],Le[re+60>>>2]=_e[1],ve[re+64>>>2]=qe%1e3*1e3,_e=[Math.floor(Ze/1e3)>>>0,(Ye=Math.floor(Ze/1e3),+Math.abs(Ye)>=1?Ye>0?+Math.floor(Ye/4294967296)>>>0:~~+Math.ceil((Ye-+(~~Ye>>>0))/4294967296)>>>0:0)],Le[re+72>>>2]=_e[0],Le[re+76>>>2]=_e[1],ve[re+80>>>2]=Ze%1e3*1e3,_e=[de.ino>>>0,(Ye=de.ino,+Math.abs(Ye)>=1?Ye>0?+Math.floor(Ye/4294967296)>>>0:~~+Math.ceil((Ye-+(~~Ye>>>0))/4294967296)>>>0:0)],Le[re+88>>>2]=_e[0],Le[re+92>>>2]=_e[1],0},doMsync:function(H,k,re,de,be){if(!Me.isFile(k.node.mode))throw new Me.ErrnoError(43);if(de&2)return 0;var qe=je.slice(H,H+re);Me.msync(k,qe,be,re,de)},varargs:void 0,get(){Xu.varargs+=4;var H=Le[Xu.varargs-4>>>2];return H},getStr(H){var k=ac(H);return k},getStreamFromFD:function(H){var k=Me.getStreamChecked(H);return k}};function s1(H,k){H>>>=0,k>>>=0;var re=0;return Bi().forEach(function(de,be){var qe=k+re;ve[H+be*4>>>2]=qe,Zd(de,qe),re+=de.length+1}),0}function eh(H,k){H>>>=0,k>>>=0;var re=Bi();ve[H>>>2]=re.length;var de=0;return re.forEach(function(be){de+=be.length+1}),ve[k>>>2]=de,0}function hc(H){try{var k=Xu.getStreamFromFD(H);return Me.close(k),0}catch(re){if(typeof Me>"u"||re.name!=="ErrnoError")throw re;return re.errno}}function r1(H,k){k>>>=0;try{var re=0,de=0,be=0,qe=Xu.getStreamFromFD(H),Ze=qe.tty?2:Me.isDir(qe.mode)?3:Me.isLink(qe.mode)?7:4;return xe[k>>>0]=Ze,et[k+2>>>1]=be,_e=[re>>>0,(Ye=re,+Math.abs(Ye)>=1?Ye>0?+Math.floor(Ye/4294967296)>>>0:~~+Math.ceil((Ye-+(~~Ye>>>0))/4294967296)>>>0:0)],Le[k+8>>>2]=_e[0],Le[k+12>>>2]=_e[1],_e=[de>>>0,(Ye=de,+Math.abs(Ye)>=1?Ye>0?+Math.floor(Ye/4294967296)>>>0:~~+Math.ceil((Ye-+(~~Ye>>>0))/4294967296)>>>0:0)],Le[k+16>>>2]=_e[0],Le[k+20>>>2]=_e[1],0}catch(Je){if(typeof Me>"u"||Je.name!=="ErrnoError")throw Je;return Je.errno}}var u1=(H,k,re,de)=>{for(var be=0,qe=0;qe<re;qe++){var Ze=ve[k>>>2],Je=ve[k+4>>>2];k+=8;var ot=Me.read(H,xe,Ze,Je,de);if(ot<0)return-1;if(be+=ot,ot<Je)break;typeof de<"u"&&(de+=ot)}return be};function a1(H,k,re,de){k>>>=0,re>>>=0,de>>>=0;try{var be=Xu.getStreamFromFD(H),qe=u1(be,k,re);return ve[de>>>2]=qe,0}catch(Ze){if(typeof Me>"u"||Ze.name!=="ErrnoError")throw Ze;return Ze.errno}}function th(H,k,re,de,be){var qe=Gt(k,re);be>>>=0;try{if(isNaN(qe))return 61;var Ze=Xu.getStreamFromFD(H);return Me.llseek(Ze,qe,de),_e=[Ze.position>>>0,(Ye=Ze.position,+Math.abs(Ye)>=1?Ye>0?+Math.floor(Ye/4294967296)>>>0:~~+Math.ceil((Ye-+(~~Ye>>>0))/4294967296)>>>0:0)],Le[be>>>2]=_e[0],Le[be+4>>>2]=_e[1],Ze.getdents&&qe===0&&de===0&&(Ze.getdents=null),0}catch(Je){if(typeof Me>"u"||Je.name!=="ErrnoError")throw Je;return Je.errno}}var i1=(H,k,re,de)=>{for(var be=0,qe=0;qe<re;qe++){var Ze=ve[k>>>2],Je=ve[k+4>>>2];k+=8;var ot=Me.write(H,xe,Ze,Je,de);if(ot<0)return-1;be+=ot,typeof de<"u"&&(de+=ot)}return be};function o1(H,k,re,de){k>>>=0,re>>>=0,de>>>=0;try{var be=Xu.getStreamFromFD(H),qe=i1(be,k,re);return ve[de>>>2]=qe,0}catch(Ze){if(typeof Me>"u"||Ze.name!=="ErrnoError")throw Ze;return Ze.errno}}var c1=(H,k)=>{for(var re=0,de=0;de<=k;re+=H[de++]);return re},fI=[31,29,31,30,31,30,31,31,30,31,30,31],nh=[31,28,31,30,31,30,31,31,30,31,30,31],II=(H,k)=>{for(var re=new Date(H.getTime());k>0;){var de=Hi(re.getFullYear()),be=re.getMonth(),qe=(de?fI:nh)[be];if(k>qe-re.getDate())k-=qe-re.getDate()+1,re.setDate(1),be<11?re.setMonth(be+1):(re.setMonth(0),re.setFullYear(re.getFullYear()+1));else return re.setDate(re.getDate()+k),re}return re},h1=(H,k)=>{xe.set(H,k>>>0)};function f1(H,k,re,de){H>>>=0,k>>>=0,re>>>=0,de>>>=0;var be=Le[de+40>>>2],qe={tm_sec:Le[de>>>2],tm_min:Le[de+4>>>2],tm_hour:Le[de+8>>>2],tm_mday:Le[de+12>>>2],tm_mon:Le[de+16>>>2],tm_year:Le[de+20>>>2],tm_wday:Le[de+24>>>2],tm_yday:Le[de+28>>>2],tm_isdst:Le[de+32>>>2],tm_gmtoff:Le[de+36>>>2],tm_zone:be?ac(be):""},Ze=ac(re),Je={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var ot in Je)Ze=Ze.replace(new RegExp(ot,"g"),Je[ot]);var Et=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Bt=["January","February","March","April","May","June","July","August","September","October","November","December"];function tn(Mt,sn,ys){for(var cl=typeof Mt=="number"?Mt.toString():Mt||"";cl.length<sn;)cl=ys[0]+cl;return cl}function Kt(Mt,sn){return tn(Mt,sn,"0")}function Yt(Mt,sn){function ys(Js){return Js<0?-1:Js>0?1:0}var cl;return(cl=ys(Mt.getFullYear()-sn.getFullYear()))===0&&(cl=ys(Mt.getMonth()-sn.getMonth()))===0&&(cl=ys(Mt.getDate()-sn.getDate())),cl}function Tn(Mt){switch(Mt.getDay()){case 0:return new Date(Mt.getFullYear()-1,11,29);case 1:return Mt;case 2:return new Date(Mt.getFullYear(),0,3);case 3:return new Date(Mt.getFullYear(),0,2);case 4:return new Date(Mt.getFullYear(),0,1);case 5:return new Date(Mt.getFullYear()-1,11,31);case 6:return new Date(Mt.getFullYear()-1,11,30)}}function rl(Mt){var sn=II(new Date(Mt.tm_year+1900,0,1),Mt.tm_yday),ys=new Date(sn.getFullYear(),0,4),cl=new Date(sn.getFullYear()+1,0,4),Js=Tn(ys),Jl=Tn(cl);return Yt(Js,sn)<=0?Yt(Jl,sn)<=0?sn.getFullYear()+1:sn.getFullYear():sn.getFullYear()-1}var al={"%a":Mt=>Et[Mt.tm_wday].substring(0,3),"%A":Mt=>Et[Mt.tm_wday],"%b":Mt=>Bt[Mt.tm_mon].substring(0,3),"%B":Mt=>Bt[Mt.tm_mon],"%C":Mt=>{var sn=Mt.tm_year+1900;return Kt(sn/100|0,2)},"%d":Mt=>Kt(Mt.tm_mday,2),"%e":Mt=>tn(Mt.tm_mday,2," "),"%g":Mt=>rl(Mt).toString().substring(2),"%G":Mt=>rl(Mt),"%H":Mt=>Kt(Mt.tm_hour,2),"%I":Mt=>{var sn=Mt.tm_hour;return sn==0?sn=12:sn>12&&(sn-=12),Kt(sn,2)},"%j":Mt=>Kt(Mt.tm_mday+c1(Hi(Mt.tm_year+1900)?fI:nh,Mt.tm_mon-1),3),"%m":Mt=>Kt(Mt.tm_mon+1,2),"%M":Mt=>Kt(Mt.tm_min,2),"%n":()=>`