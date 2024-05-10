(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))t(c);new MutationObserver(c=>{for(const y of c)if(y.type==="childList")for(const S of y.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&t(S)}).observe(document,{childList:!0,subtree:!0});function n(c){const y={};return c.integrity&&(y.integrity=c.integrity),c.referrerPolicy&&(y.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?y.credentials="include":c.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function t(c){if(c.ep)return;c.ep=!0;const y=n(c);fetch(c.href,y)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const U_="160",one={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},dz=0,MV=1,yz=2,Fj=1,wz=2,G6=3,oR=0,D3=1,ep=2,FN=0,Db=1,xV=2,HV=3,BV=4,Ez=5,K8=100,Tz=101,pz=102,UV=103,FV=104,Rz=200,mz=201,Dz=202,Nz=203,$G=204,ZG=205,Az=206,Sz=207,Lz=208,Oz=209,gz=210,Pz=211,bz=212,Cz=213,Mz=214,xz=0,Hz=1,Bz=2,ZU=3,Uz=4,Fz=5,Gz=6,_z=7,F_=0,Vz=1,Wz=2,GN=0,jz=1,Yz=2,zz=3,kz=4,qz=5,Kz=6,Gj=300,gb=301,Pb=302,JG=303,XG=304,sF=306,vG=1e3,lE=1001,e_=1002,kf=1003,GV=1004,sG=1005,h2=1006,Qz=1007,jH=1008,_N=1009,$z=1010,Zz=1011,G_=1012,_j=1013,CN=1014,MN=1015,YH=1016,Vj=1017,Wj=1018,$8=1020,Jz=1021,sE=1023,Xz=1024,vz=1025,Z8=1026,bb=1027,ek=1028,jj=1029,tk=1030,Yj=1031,zj=1033,rG=33776,uG=33777,aG=33778,iG=33779,_V=35840,VV=35841,WV=35842,jV=35843,kj=36196,YV=37492,zV=37496,kV=37808,qV=37809,KV=37810,QV=37811,$V=37812,ZV=37813,JV=37814,XV=37815,vV=37816,eW=37817,tW=37818,nW=37819,lW=37820,sW=37821,oG=36492,rW=36494,uW=36495,nk=36283,aW=36284,iW=36285,oW=36286,qj=3e3,J8=3001,lk=3200,sk=3201,__=0,rk=1,f2="",qf="srgb",X7="srgb-linear",V_="display-p3",rF="display-p3-linear",JU="linear",dr="srgb",XU="rec709",vU="p3",RP=7680,cW=519,uk=512,ak=513,ik=514,Kj=515,ok=516,ck=517,hk=518,fk=519,t_=35044,cne=35048,hW="300 es",n_=1035,i7=2e3,eF=2001;class zb{addEventListener(l,n){this._listeners===void 0&&(this._listeners={});const t=this._listeners;t[l]===void 0&&(t[l]=[]),t[l].indexOf(n)===-1&&t[l].push(n)}hasEventListener(l,n){if(this._listeners===void 0)return!1;const t=this._listeners;return t[l]!==void 0&&t[l].indexOf(n)!==-1}removeEventListener(l,n){if(this._listeners===void 0)return;const c=this._listeners[l];if(c!==void 0){const y=c.indexOf(n);y!==-1&&c.splice(y,1)}}dispatchEvent(l){if(this._listeners===void 0)return;const t=this._listeners[l.type];if(t!==void 0){l.target=this;const c=t.slice(0);for(let y=0,S=c.length;y<S;y++)c[y].call(this,l);l.target=null}}}const WI=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fW=1234567;const Nb=Math.PI/180,zH=180/Math.PI;function U7(){const e=Math.random()*4294967295|0,l=Math.random()*4294967295|0,n=Math.random()*4294967295|0,t=Math.random()*4294967295|0;return(WI[e&255]+WI[e>>8&255]+WI[e>>16&255]+WI[e>>24&255]+"-"+WI[l&255]+WI[l>>8&255]+"-"+WI[l>>16&15|64]+WI[l>>24&255]+"-"+WI[n&63|128]+WI[n>>8&255]+"-"+WI[n>>16&255]+WI[n>>24&255]+WI[t&255]+WI[t>>8&255]+WI[t>>16&255]+WI[t>>24&255]).toLowerCase()}function Kf(e,l,n){return Math.max(l,Math.min(n,e))}function W_(e,l){return(e%l+l)%l}function Ik(e,l,n,t,c){return t+(e-l)*(c-t)/(n-l)}function dk(e,l,n){return e!==l?(n-e)/(l-e):0}function GH(e,l,n){return(1-n)*e+n*l}function yk(e,l,n,t){return GH(e,l,1-Math.exp(-n*t))}function wk(e,l=1){return l-Math.abs(W_(e,l*2)-l)}function Ek(e,l,n){return e<=l?0:e>=n?1:(e=(e-l)/(n-l),e*e*(3-2*e))}function Tk(e,l,n){return e<=l?0:e>=n?1:(e=(e-l)/(n-l),e*e*e*(e*(e*6-15)+10))}function pk(e,l){return e+Math.floor(Math.random()*(l-e+1))}function Rk(e,l){return e+Math.random()*(l-e)}function mk(e){return e*(.5-Math.random())}function Dk(e){e!==void 0&&(fW=e);let l=fW+=1831565813;return l=Math.imul(l^l>>>15,l|1),l^=l+Math.imul(l^l>>>7,l|61),((l^l>>>14)>>>0)/4294967296}function Nk(e){return e*Nb}function Ak(e){return e*zH}function l_(e){return(e&e-1)===0&&e!==0}function Sk(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function tF(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Lk(e,l,n,t,c){const y=Math.cos,S=Math.sin,g=y(n/2),G=S(n/2),V=y((l+t)/2),Z=S((l+t)/2),v=y((l-t)/2),ee=S((l-t)/2),te=y((t-l)/2),he=S((t-l)/2);switch(c){case"XYX":e.set(g*Z,G*v,G*ee,g*V);break;case"YZY":e.set(G*ee,g*Z,G*v,g*V);break;case"ZXZ":e.set(G*v,G*ee,g*Z,g*V);break;case"XZX":e.set(g*Z,G*he,G*te,g*V);break;case"YXY":e.set(G*te,g*Z,G*he,g*V);break;case"ZYZ":e.set(G*he,G*te,g*Z,g*V);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+c)}}function tp(e,l){switch(l.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function zs(e,l){switch(l.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}const hne={DEG2RAD:Nb,RAD2DEG:zH,generateUUID:U7,clamp:Kf,euclideanModulo:W_,mapLinear:Ik,inverseLerp:dk,lerp:GH,damp:yk,pingpong:wk,smoothstep:Ek,smootherstep:Tk,randInt:pk,randFloat:Rk,randFloatSpread:mk,seededRandom:Dk,degToRad:Nk,radToDeg:Ak,isPowerOfTwo:l_,ceilPowerOfTwo:Sk,floorPowerOfTwo:tF,setQuaternionFromProperEuler:Lk,normalize:zs,denormalize:tp};class Nl{constructor(l=0,n=0){Nl.prototype.isVector2=!0,this.x=l,this.y=n}get width(){return this.x}set width(l){this.x=l}get height(){return this.y}set height(l){this.y=l}set(l,n){return this.x=l,this.y=n,this}setScalar(l){return this.x=l,this.y=l,this}setX(l){return this.x=l,this}setY(l){return this.y=l,this}setComponent(l,n){switch(l){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+l)}return this}getComponent(l){switch(l){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+l)}}clone(){return new this.constructor(this.x,this.y)}copy(l){return this.x=l.x,this.y=l.y,this}add(l){return this.x+=l.x,this.y+=l.y,this}addScalar(l){return this.x+=l,this.y+=l,this}addVectors(l,n){return this.x=l.x+n.x,this.y=l.y+n.y,this}addScaledVector(l,n){return this.x+=l.x*n,this.y+=l.y*n,this}sub(l){return this.x-=l.x,this.y-=l.y,this}subScalar(l){return this.x-=l,this.y-=l,this}subVectors(l,n){return this.x=l.x-n.x,this.y=l.y-n.y,this}multiply(l){return this.x*=l.x,this.y*=l.y,this}multiplyScalar(l){return this.x*=l,this.y*=l,this}divide(l){return this.x/=l.x,this.y/=l.y,this}divideScalar(l){return this.multiplyScalar(1/l)}applyMatrix3(l){const n=this.x,t=this.y,c=l.elements;return this.x=c[0]*n+c[3]*t+c[6],this.y=c[1]*n+c[4]*t+c[7],this}min(l){return this.x=Math.min(this.x,l.x),this.y=Math.min(this.y,l.y),this}max(l){return this.x=Math.max(this.x,l.x),this.y=Math.max(this.y,l.y),this}clamp(l,n){return this.x=Math.max(l.x,Math.min(n.x,this.x)),this.y=Math.max(l.y,Math.min(n.y,this.y)),this}clampScalar(l,n){return this.x=Math.max(l,Math.min(n,this.x)),this.y=Math.max(l,Math.min(n,this.y)),this}clampLength(l,n){const t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(l,Math.min(n,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(l){return this.x*l.x+this.y*l.y}cross(l){return this.x*l.y-this.y*l.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(l){const n=Math.sqrt(this.lengthSq()*l.lengthSq());if(n===0)return Math.PI/2;const t=this.dot(l)/n;return Math.acos(Kf(t,-1,1))}distanceTo(l){return Math.sqrt(this.distanceToSquared(l))}distanceToSquared(l){const n=this.x-l.x,t=this.y-l.y;return n*n+t*t}manhattanDistanceTo(l){return Math.abs(this.x-l.x)+Math.abs(this.y-l.y)}setLength(l){return this.normalize().multiplyScalar(l)}lerp(l,n){return this.x+=(l.x-this.x)*n,this.y+=(l.y-this.y)*n,this}lerpVectors(l,n,t){return this.x=l.x+(n.x-l.x)*t,this.y=l.y+(n.y-l.y)*t,this}equals(l){return l.x===this.x&&l.y===this.y}fromArray(l,n=0){return this.x=l[n],this.y=l[n+1],this}toArray(l=[],n=0){return l[n]=this.x,l[n+1]=this.y,l}fromBufferAttribute(l,n){return this.x=l.getX(n),this.y=l.getY(n),this}rotateAround(l,n){const t=Math.cos(n),c=Math.sin(n),y=this.x-l.x,S=this.y-l.y;return this.x=y*t-S*c+l.x,this.y=y*c+S*t+l.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wl{constructor(l,n,t,c,y,S,g,G,V){Wl.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],l!==void 0&&this.set(l,n,t,c,y,S,g,G,V)}set(l,n,t,c,y,S,g,G,V){const Z=this.elements;return Z[0]=l,Z[1]=c,Z[2]=g,Z[3]=n,Z[4]=y,Z[5]=G,Z[6]=t,Z[7]=S,Z[8]=V,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(l){const n=this.elements,t=l.elements;return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],this}extractBasis(l,n,t){return l.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),t.setFromMatrix3Column(this,2),this}setFromMatrix4(l){const n=l.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(l){return this.multiplyMatrices(this,l)}premultiply(l){return this.multiplyMatrices(l,this)}multiplyMatrices(l,n){const t=l.elements,c=n.elements,y=this.elements,S=t[0],g=t[3],G=t[6],V=t[1],Z=t[4],v=t[7],ee=t[2],te=t[5],he=t[8],Te=c[0],oe=c[3],ie=c[6],De=c[1],we=c[4],Ae=c[7],Ye=c[2],Ve=c[5],_e=c[8];return y[0]=S*Te+g*De+G*Ye,y[3]=S*oe+g*we+G*Ve,y[6]=S*ie+g*Ae+G*_e,y[1]=V*Te+Z*De+v*Ye,y[4]=V*oe+Z*we+v*Ve,y[7]=V*ie+Z*Ae+v*_e,y[2]=ee*Te+te*De+he*Ye,y[5]=ee*oe+te*we+he*Ve,y[8]=ee*ie+te*Ae+he*_e,this}multiplyScalar(l){const n=this.elements;return n[0]*=l,n[3]*=l,n[6]*=l,n[1]*=l,n[4]*=l,n[7]*=l,n[2]*=l,n[5]*=l,n[8]*=l,this}determinant(){const l=this.elements,n=l[0],t=l[1],c=l[2],y=l[3],S=l[4],g=l[5],G=l[6],V=l[7],Z=l[8];return n*S*Z-n*g*V-t*y*Z+t*g*G+c*y*V-c*S*G}invert(){const l=this.elements,n=l[0],t=l[1],c=l[2],y=l[3],S=l[4],g=l[5],G=l[6],V=l[7],Z=l[8],v=Z*S-g*V,ee=g*G-Z*y,te=V*y-S*G,he=n*v+t*ee+c*te;if(he===0)return this.set(0,0,0,0,0,0,0,0,0);const Te=1/he;return l[0]=v*Te,l[1]=(c*V-Z*t)*Te,l[2]=(g*t-c*S)*Te,l[3]=ee*Te,l[4]=(Z*n-c*G)*Te,l[5]=(c*y-g*n)*Te,l[6]=te*Te,l[7]=(t*G-V*n)*Te,l[8]=(S*n-t*y)*Te,this}transpose(){let l;const n=this.elements;return l=n[1],n[1]=n[3],n[3]=l,l=n[2],n[2]=n[6],n[6]=l,l=n[5],n[5]=n[7],n[7]=l,this}getNormalMatrix(l){return this.setFromMatrix4(l).invert().transpose()}transposeIntoArray(l){const n=this.elements;return l[0]=n[0],l[1]=n[3],l[2]=n[6],l[3]=n[1],l[4]=n[4],l[5]=n[7],l[6]=n[2],l[7]=n[5],l[8]=n[8],this}setUvTransform(l,n,t,c,y,S,g){const G=Math.cos(y),V=Math.sin(y);return this.set(t*G,t*V,-t*(G*S+V*g)+S+l,-c*V,c*G,-c*(-V*S+G*g)+g+n,0,0,1),this}scale(l,n){return this.premultiply(cG.makeScale(l,n)),this}rotate(l){return this.premultiply(cG.makeRotation(-l)),this}translate(l,n){return this.premultiply(cG.makeTranslation(l,n)),this}makeTranslation(l,n){return l.isVector2?this.set(1,0,l.x,0,1,l.y,0,0,1):this.set(1,0,l,0,1,n,0,0,1),this}makeRotation(l){const n=Math.cos(l),t=Math.sin(l);return this.set(n,-t,0,t,n,0,0,0,1),this}makeScale(l,n){return this.set(l,0,0,0,n,0,0,0,1),this}equals(l){const n=this.elements,t=l.elements;for(let c=0;c<9;c++)if(n[c]!==t[c])return!1;return!0}fromArray(l,n=0){for(let t=0;t<9;t++)this.elements[t]=l[t+n];return this}toArray(l=[],n=0){const t=this.elements;return l[n]=t[0],l[n+1]=t[1],l[n+2]=t[2],l[n+3]=t[3],l[n+4]=t[4],l[n+5]=t[5],l[n+6]=t[6],l[n+7]=t[7],l[n+8]=t[8],l}clone(){return new this.constructor().fromArray(this.elements)}}const cG=new Wl;function Qj(e){for(let l=e.length-1;l>=0;--l)if(e[l]>=65535)return!0;return!1}function nF(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Ok(){const e=nF("canvas");return e.style.display="block",e}const IW={};function _H(e){e in IW||(IW[e]=!0,console.warn(e))}const dW=new Wl().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),yW=new Wl().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),AB={[X7]:{transfer:JU,primaries:XU,toReference:e=>e,fromReference:e=>e},[qf]:{transfer:dr,primaries:XU,toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[rF]:{transfer:JU,primaries:vU,toReference:e=>e.applyMatrix3(yW),fromReference:e=>e.applyMatrix3(dW)},[V_]:{transfer:dr,primaries:vU,toReference:e=>e.convertSRGBToLinear().applyMatrix3(yW),fromReference:e=>e.applyMatrix3(dW).convertLinearToSRGB()}},gk=new Set([X7,rF]),ks={enabled:!0,_workingColorSpace:X7,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!gk.has(e))throw new Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,l,n){if(this.enabled===!1||l===n||!l||!n)return e;const t=AB[l].toReference,c=AB[n].fromReference;return c(t(e))},fromWorkingColorSpace:function(e,l){return this.convert(e,this._workingColorSpace,l)},toWorkingColorSpace:function(e,l){return this.convert(e,l,this._workingColorSpace)},getPrimaries:function(e){return AB[e].primaries},getTransfer:function(e){return e===f2?JU:AB[e].transfer}};function Ab(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function hG(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let mP;class $j{static getDataURL(l){if(/^data:/i.test(l.src)||typeof HTMLCanvasElement>"u")return l.src;let n;if(l instanceof HTMLCanvasElement)n=l;else{mP===void 0&&(mP=nF("canvas")),mP.width=l.width,mP.height=l.height;const t=mP.getContext("2d");l instanceof ImageData?t.putImageData(l,0,0):t.drawImage(l,0,0,l.width,l.height),n=mP}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",l),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(l){if(typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&l instanceof ImageBitmap){const n=nF("canvas");n.width=l.width,n.height=l.height;const t=n.getContext("2d");t.drawImage(l,0,0,l.width,l.height);const c=t.getImageData(0,0,l.width,l.height),y=c.data;for(let S=0;S<y.length;S++)y[S]=Ab(y[S]/255)*255;return t.putImageData(c,0,0),n}else if(l.data){const n=l.data.slice(0);for(let t=0;t<n.length;t++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[t]=Math.floor(Ab(n[t]/255)*255):n[t]=Ab(n[t]);return{data:n,width:l.width,height:l.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),l}}let Pk=0;class Zj{constructor(l=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pk++}),this.uuid=U7(),this.data=l,this.version=0}set needsUpdate(l){l===!0&&this.version++}toJSON(l){const n=l===void 0||typeof l=="string";if(!n&&l.images[this.uuid]!==void 0)return l.images[this.uuid];const t={uuid:this.uuid,url:""},c=this.data;if(c!==null){let y;if(Array.isArray(c)){y=[];for(let S=0,g=c.length;S<g;S++)c[S].isDataTexture?y.push(fG(c[S].image)):y.push(fG(c[S]))}else y=fG(c);t.url=y}return n||(l.images[this.uuid]=t),t}}function fG(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?$j.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bk=0;class p0 extends zb{constructor(l=p0.DEFAULT_IMAGE,n=p0.DEFAULT_MAPPING,t=lE,c=lE,y=h2,S=jH,g=sE,G=_N,V=p0.DEFAULT_ANISOTROPY,Z=f2){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bk++}),this.uuid=U7(),this.name="",this.source=new Zj(l),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=t,this.wrapT=c,this.magFilter=y,this.minFilter=S,this.anisotropy=V,this.format=g,this.internalFormat=null,this.type=G,this.offset=new Nl(0,0),this.repeat=new Nl(1,1),this.center=new Nl(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wl,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof Z=="string"?this.colorSpace=Z:(_H("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=Z===J8?qf:f2),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(l=null){this.source.data=l}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(l){return this.name=l.name,this.source=l.source,this.mipmaps=l.mipmaps.slice(0),this.mapping=l.mapping,this.channel=l.channel,this.wrapS=l.wrapS,this.wrapT=l.wrapT,this.magFilter=l.magFilter,this.minFilter=l.minFilter,this.anisotropy=l.anisotropy,this.format=l.format,this.internalFormat=l.internalFormat,this.type=l.type,this.offset.copy(l.offset),this.repeat.copy(l.repeat),this.center.copy(l.center),this.rotation=l.rotation,this.matrixAutoUpdate=l.matrixAutoUpdate,this.matrix.copy(l.matrix),this.generateMipmaps=l.generateMipmaps,this.premultiplyAlpha=l.premultiplyAlpha,this.flipY=l.flipY,this.unpackAlignment=l.unpackAlignment,this.colorSpace=l.colorSpace,this.userData=JSON.parse(JSON.stringify(l.userData)),this.needsUpdate=!0,this}toJSON(l){const n=l===void 0||typeof l=="string";if(!n&&l.textures[this.uuid]!==void 0)return l.textures[this.uuid];const t={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(l).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(t.userData=this.userData),n||(l.textures[this.uuid]=t),t}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(l){if(this.mapping!==Gj)return l;if(l.applyMatrix3(this.matrix),l.x<0||l.x>1)switch(this.wrapS){case vG:l.x=l.x-Math.floor(l.x);break;case lE:l.x=l.x<0?0:1;break;case e_:Math.abs(Math.floor(l.x)%2)===1?l.x=Math.ceil(l.x)-l.x:l.x=l.x-Math.floor(l.x);break}if(l.y<0||l.y>1)switch(this.wrapT){case vG:l.y=l.y-Math.floor(l.y);break;case lE:l.y=l.y<0?0:1;break;case e_:Math.abs(Math.floor(l.y)%2)===1?l.y=Math.ceil(l.y)-l.y:l.y=l.y-Math.floor(l.y);break}return this.flipY&&(l.y=1-l.y),l}set needsUpdate(l){l===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return _H("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===qf?J8:qj}set encoding(l){_H("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=l===J8?qf:f2}}p0.DEFAULT_IMAGE=null;p0.DEFAULT_MAPPING=Gj;p0.DEFAULT_ANISOTROPY=1;class Fc{constructor(l=0,n=0,t=0,c=1){Fc.prototype.isVector4=!0,this.x=l,this.y=n,this.z=t,this.w=c}get width(){return this.z}set width(l){this.z=l}get height(){return this.w}set height(l){this.w=l}set(l,n,t,c){return this.x=l,this.y=n,this.z=t,this.w=c,this}setScalar(l){return this.x=l,this.y=l,this.z=l,this.w=l,this}setX(l){return this.x=l,this}setY(l){return this.y=l,this}setZ(l){return this.z=l,this}setW(l){return this.w=l,this}setComponent(l,n){switch(l){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+l)}return this}getComponent(l){switch(l){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+l)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(l){return this.x=l.x,this.y=l.y,this.z=l.z,this.w=l.w!==void 0?l.w:1,this}add(l){return this.x+=l.x,this.y+=l.y,this.z+=l.z,this.w+=l.w,this}addScalar(l){return this.x+=l,this.y+=l,this.z+=l,this.w+=l,this}addVectors(l,n){return this.x=l.x+n.x,this.y=l.y+n.y,this.z=l.z+n.z,this.w=l.w+n.w,this}addScaledVector(l,n){return this.x+=l.x*n,this.y+=l.y*n,this.z+=l.z*n,this.w+=l.w*n,this}sub(l){return this.x-=l.x,this.y-=l.y,this.z-=l.z,this.w-=l.w,this}subScalar(l){return this.x-=l,this.y-=l,this.z-=l,this.w-=l,this}subVectors(l,n){return this.x=l.x-n.x,this.y=l.y-n.y,this.z=l.z-n.z,this.w=l.w-n.w,this}multiply(l){return this.x*=l.x,this.y*=l.y,this.z*=l.z,this.w*=l.w,this}multiplyScalar(l){return this.x*=l,this.y*=l,this.z*=l,this.w*=l,this}applyMatrix4(l){const n=this.x,t=this.y,c=this.z,y=this.w,S=l.elements;return this.x=S[0]*n+S[4]*t+S[8]*c+S[12]*y,this.y=S[1]*n+S[5]*t+S[9]*c+S[13]*y,this.z=S[2]*n+S[6]*t+S[10]*c+S[14]*y,this.w=S[3]*n+S[7]*t+S[11]*c+S[15]*y,this}divideScalar(l){return this.multiplyScalar(1/l)}setAxisAngleFromQuaternion(l){this.w=2*Math.acos(l.w);const n=Math.sqrt(1-l.w*l.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=l.x/n,this.y=l.y/n,this.z=l.z/n),this}setAxisAngleFromRotationMatrix(l){let n,t,c,y;const G=l.elements,V=G[0],Z=G[4],v=G[8],ee=G[1],te=G[5],he=G[9],Te=G[2],oe=G[6],ie=G[10];if(Math.abs(Z-ee)<.01&&Math.abs(v-Te)<.01&&Math.abs(he-oe)<.01){if(Math.abs(Z+ee)<.1&&Math.abs(v+Te)<.1&&Math.abs(he+oe)<.1&&Math.abs(V+te+ie-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const we=(V+1)/2,Ae=(te+1)/2,Ye=(ie+1)/2,Ve=(Z+ee)/4,_e=(v+Te)/4,Xe=(he+oe)/4;return we>Ae&&we>Ye?we<.01?(t=0,c=.707106781,y=.707106781):(t=Math.sqrt(we),c=Ve/t,y=_e/t):Ae>Ye?Ae<.01?(t=.707106781,c=0,y=.707106781):(c=Math.sqrt(Ae),t=Ve/c,y=Xe/c):Ye<.01?(t=.707106781,c=.707106781,y=0):(y=Math.sqrt(Ye),t=_e/y,c=Xe/y),this.set(t,c,y,n),this}let De=Math.sqrt((oe-he)*(oe-he)+(v-Te)*(v-Te)+(ee-Z)*(ee-Z));return Math.abs(De)<.001&&(De=1),this.x=(oe-he)/De,this.y=(v-Te)/De,this.z=(ee-Z)/De,this.w=Math.acos((V+te+ie-1)/2),this}min(l){return this.x=Math.min(this.x,l.x),this.y=Math.min(this.y,l.y),this.z=Math.min(this.z,l.z),this.w=Math.min(this.w,l.w),this}max(l){return this.x=Math.max(this.x,l.x),this.y=Math.max(this.y,l.y),this.z=Math.max(this.z,l.z),this.w=Math.max(this.w,l.w),this}clamp(l,n){return this.x=Math.max(l.x,Math.min(n.x,this.x)),this.y=Math.max(l.y,Math.min(n.y,this.y)),this.z=Math.max(l.z,Math.min(n.z,this.z)),this.w=Math.max(l.w,Math.min(n.w,this.w)),this}clampScalar(l,n){return this.x=Math.max(l,Math.min(n,this.x)),this.y=Math.max(l,Math.min(n,this.y)),this.z=Math.max(l,Math.min(n,this.z)),this.w=Math.max(l,Math.min(n,this.w)),this}clampLength(l,n){const t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(l,Math.min(n,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(l){return this.x*l.x+this.y*l.y+this.z*l.z+this.w*l.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(l){return this.normalize().multiplyScalar(l)}lerp(l,n){return this.x+=(l.x-this.x)*n,this.y+=(l.y-this.y)*n,this.z+=(l.z-this.z)*n,this.w+=(l.w-this.w)*n,this}lerpVectors(l,n,t){return this.x=l.x+(n.x-l.x)*t,this.y=l.y+(n.y-l.y)*t,this.z=l.z+(n.z-l.z)*t,this.w=l.w+(n.w-l.w)*t,this}equals(l){return l.x===this.x&&l.y===this.y&&l.z===this.z&&l.w===this.w}fromArray(l,n=0){return this.x=l[n],this.y=l[n+1],this.z=l[n+2],this.w=l[n+3],this}toArray(l=[],n=0){return l[n]=this.x,l[n+1]=this.y,l[n+2]=this.z,l[n+3]=this.w,l}fromBufferAttribute(l,n){return this.x=l.getX(n),this.y=l.getY(n),this.z=l.getZ(n),this.w=l.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ck extends zb{constructor(l=1,n=1,t={}){super(),this.isRenderTarget=!0,this.width=l,this.height=n,this.depth=1,this.scissor=new Fc(0,0,l,n),this.scissorTest=!1,this.viewport=new Fc(0,0,l,n);const c={width:l,height:n,depth:1};t.encoding!==void 0&&(_H("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===J8?qf:f2),t=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:h2,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},t),this.texture=new p0(c,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=t.generateMipmaps,this.texture.internalFormat=t.internalFormat,this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.depthTexture=t.depthTexture,this.samples=t.samples}setSize(l,n,t=1){(this.width!==l||this.height!==n||this.depth!==t)&&(this.width=l,this.height=n,this.depth=t,this.texture.image.width=l,this.texture.image.height=n,this.texture.image.depth=t,this.dispose()),this.viewport.set(0,0,l,n),this.scissor.set(0,0,l,n)}clone(){return new this.constructor().copy(this)}copy(l){this.width=l.width,this.height=l.height,this.depth=l.depth,this.scissor.copy(l.scissor),this.scissorTest=l.scissorTest,this.viewport.copy(l.viewport),this.texture=l.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},l.texture.image);return this.texture.source=new Zj(n),this.depthBuffer=l.depthBuffer,this.stencilBuffer=l.stencilBuffer,l.depthTexture!==null&&(this.depthTexture=l.depthTexture.clone()),this.samples=l.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jN extends Ck{constructor(l=1,n=1,t={}){super(l,n,t),this.isWebGLRenderTarget=!0}}class Jj extends p0{constructor(l=null,n=1,t=1,c=1){super(null),this.isDataArrayTexture=!0,this.image={data:l,width:n,height:t,depth:c},this.magFilter=kf,this.minFilter=kf,this.wrapR=lE,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mk extends p0{constructor(l=null,n=1,t=1,c=1){super(null),this.isData3DTexture=!0,this.image={data:l,width:n,height:t,depth:c},this.magFilter=kf,this.minFilter=kf,this.wrapR=lE,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fne extends jN{constructor(l=1,n=1,t=1,c={}){super(l,n,c),this.isWebGLMultipleRenderTargets=!0;const y=this.texture;this.texture=[];for(let S=0;S<t;S++)this.texture[S]=y.clone(),this.texture[S].isRenderTargetTexture=!0}setSize(l,n,t=1){if(this.width!==l||this.height!==n||this.depth!==t){this.width=l,this.height=n,this.depth=t;for(let c=0,y=this.texture.length;c<y;c++)this.texture[c].image.width=l,this.texture[c].image.height=n,this.texture[c].image.depth=t;this.dispose()}this.viewport.set(0,0,l,n),this.scissor.set(0,0,l,n)}copy(l){this.dispose(),this.width=l.width,this.height=l.height,this.depth=l.depth,this.scissor.copy(l.scissor),this.scissorTest=l.scissorTest,this.viewport.copy(l.viewport),this.depthBuffer=l.depthBuffer,this.stencilBuffer=l.stencilBuffer,l.depthTexture!==null&&(this.depthTexture=l.depthTexture.clone()),this.texture.length=0;for(let n=0,t=l.texture.length;n<t;n++)this.texture[n]=l.texture[n].clone(),this.texture[n].isRenderTargetTexture=!0;return this}}class oB{constructor(l=0,n=0,t=0,c=1){this.isQuaternion=!0,this._x=l,this._y=n,this._z=t,this._w=c}static slerpFlat(l,n,t,c,y,S,g){let G=t[c+0],V=t[c+1],Z=t[c+2],v=t[c+3];const ee=y[S+0],te=y[S+1],he=y[S+2],Te=y[S+3];if(g===0){l[n+0]=G,l[n+1]=V,l[n+2]=Z,l[n+3]=v;return}if(g===1){l[n+0]=ee,l[n+1]=te,l[n+2]=he,l[n+3]=Te;return}if(v!==Te||G!==ee||V!==te||Z!==he){let oe=1-g;const ie=G*ee+V*te+Z*he+v*Te,De=ie>=0?1:-1,we=1-ie*ie;if(we>Number.EPSILON){const Ye=Math.sqrt(we),Ve=Math.atan2(Ye,ie*De);oe=Math.sin(oe*Ve)/Ye,g=Math.sin(g*Ve)/Ye}const Ae=g*De;if(G=G*oe+ee*Ae,V=V*oe+te*Ae,Z=Z*oe+he*Ae,v=v*oe+Te*Ae,oe===1-g){const Ye=1/Math.sqrt(G*G+V*V+Z*Z+v*v);G*=Ye,V*=Ye,Z*=Ye,v*=Ye}}l[n]=G,l[n+1]=V,l[n+2]=Z,l[n+3]=v}static multiplyQuaternionsFlat(l,n,t,c,y,S){const g=t[c],G=t[c+1],V=t[c+2],Z=t[c+3],v=y[S],ee=y[S+1],te=y[S+2],he=y[S+3];return l[n]=g*he+Z*v+G*te-V*ee,l[n+1]=G*he+Z*ee+V*v-g*te,l[n+2]=V*he+Z*te+g*ee-G*v,l[n+3]=Z*he-g*v-G*ee-V*te,l}get x(){return this._x}set x(l){this._x=l,this._onChangeCallback()}get y(){return this._y}set y(l){this._y=l,this._onChangeCallback()}get z(){return this._z}set z(l){this._z=l,this._onChangeCallback()}get w(){return this._w}set w(l){this._w=l,this._onChangeCallback()}set(l,n,t,c){return this._x=l,this._y=n,this._z=t,this._w=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(l){return this._x=l.x,this._y=l.y,this._z=l.z,this._w=l.w,this._onChangeCallback(),this}setFromEuler(l,n=!0){const t=l._x,c=l._y,y=l._z,S=l._order,g=Math.cos,G=Math.sin,V=g(t/2),Z=g(c/2),v=g(y/2),ee=G(t/2),te=G(c/2),he=G(y/2);switch(S){case"XYZ":this._x=ee*Z*v+V*te*he,this._y=V*te*v-ee*Z*he,this._z=V*Z*he+ee*te*v,this._w=V*Z*v-ee*te*he;break;case"YXZ":this._x=ee*Z*v+V*te*he,this._y=V*te*v-ee*Z*he,this._z=V*Z*he-ee*te*v,this._w=V*Z*v+ee*te*he;break;case"ZXY":this._x=ee*Z*v-V*te*he,this._y=V*te*v+ee*Z*he,this._z=V*Z*he+ee*te*v,this._w=V*Z*v-ee*te*he;break;case"ZYX":this._x=ee*Z*v-V*te*he,this._y=V*te*v+ee*Z*he,this._z=V*Z*he-ee*te*v,this._w=V*Z*v+ee*te*he;break;case"YZX":this._x=ee*Z*v+V*te*he,this._y=V*te*v+ee*Z*he,this._z=V*Z*he-ee*te*v,this._w=V*Z*v-ee*te*he;break;case"XZY":this._x=ee*Z*v-V*te*he,this._y=V*te*v-ee*Z*he,this._z=V*Z*he+ee*te*v,this._w=V*Z*v+ee*te*he;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+S)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(l,n){const t=n/2,c=Math.sin(t);return this._x=l.x*c,this._y=l.y*c,this._z=l.z*c,this._w=Math.cos(t),this._onChangeCallback(),this}setFromRotationMatrix(l){const n=l.elements,t=n[0],c=n[4],y=n[8],S=n[1],g=n[5],G=n[9],V=n[2],Z=n[6],v=n[10],ee=t+g+v;if(ee>0){const te=.5/Math.sqrt(ee+1);this._w=.25/te,this._x=(Z-G)*te,this._y=(y-V)*te,this._z=(S-c)*te}else if(t>g&&t>v){const te=2*Math.sqrt(1+t-g-v);this._w=(Z-G)/te,this._x=.25*te,this._y=(c+S)/te,this._z=(y+V)/te}else if(g>v){const te=2*Math.sqrt(1+g-t-v);this._w=(y-V)/te,this._x=(c+S)/te,this._y=.25*te,this._z=(G+Z)/te}else{const te=2*Math.sqrt(1+v-t-g);this._w=(S-c)/te,this._x=(y+V)/te,this._y=(G+Z)/te,this._z=.25*te}return this._onChangeCallback(),this}setFromUnitVectors(l,n){let t=l.dot(n)+1;return t<Number.EPSILON?(t=0,Math.abs(l.x)>Math.abs(l.z)?(this._x=-l.y,this._y=l.x,this._z=0,this._w=t):(this._x=0,this._y=-l.z,this._z=l.y,this._w=t)):(this._x=l.y*n.z-l.z*n.y,this._y=l.z*n.x-l.x*n.z,this._z=l.x*n.y-l.y*n.x,this._w=t),this.normalize()}angleTo(l){return 2*Math.acos(Math.abs(Kf(this.dot(l),-1,1)))}rotateTowards(l,n){const t=this.angleTo(l);if(t===0)return this;const c=Math.min(1,n/t);return this.slerp(l,c),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(l){return this._x*l._x+this._y*l._y+this._z*l._z+this._w*l._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let l=this.length();return l===0?(this._x=0,this._y=0,this._z=0,this._w=1):(l=1/l,this._x=this._x*l,this._y=this._y*l,this._z=this._z*l,this._w=this._w*l),this._onChangeCallback(),this}multiply(l){return this.multiplyQuaternions(this,l)}premultiply(l){return this.multiplyQuaternions(l,this)}multiplyQuaternions(l,n){const t=l._x,c=l._y,y=l._z,S=l._w,g=n._x,G=n._y,V=n._z,Z=n._w;return this._x=t*Z+S*g+c*V-y*G,this._y=c*Z+S*G+y*g-t*V,this._z=y*Z+S*V+t*G-c*g,this._w=S*Z-t*g-c*G-y*V,this._onChangeCallback(),this}slerp(l,n){if(n===0)return this;if(n===1)return this.copy(l);const t=this._x,c=this._y,y=this._z,S=this._w;let g=S*l._w+t*l._x+c*l._y+y*l._z;if(g<0?(this._w=-l._w,this._x=-l._x,this._y=-l._y,this._z=-l._z,g=-g):this.copy(l),g>=1)return this._w=S,this._x=t,this._y=c,this._z=y,this;const G=1-g*g;if(G<=Number.EPSILON){const te=1-n;return this._w=te*S+n*this._w,this._x=te*t+n*this._x,this._y=te*c+n*this._y,this._z=te*y+n*this._z,this.normalize(),this}const V=Math.sqrt(G),Z=Math.atan2(V,g),v=Math.sin((1-n)*Z)/V,ee=Math.sin(n*Z)/V;return this._w=S*v+this._w*ee,this._x=t*v+this._x*ee,this._y=c*v+this._y*ee,this._z=y*v+this._z*ee,this._onChangeCallback(),this}slerpQuaternions(l,n,t){return this.copy(l).slerp(n,t)}random(){const l=Math.random(),n=Math.sqrt(1-l),t=Math.sqrt(l),c=2*Math.PI*Math.random(),y=2*Math.PI*Math.random();return this.set(n*Math.cos(c),t*Math.sin(y),t*Math.cos(y),n*Math.sin(c))}equals(l){return l._x===this._x&&l._y===this._y&&l._z===this._z&&l._w===this._w}fromArray(l,n=0){return this._x=l[n],this._y=l[n+1],this._z=l[n+2],this._w=l[n+3],this._onChangeCallback(),this}toArray(l=[],n=0){return l[n]=this._x,l[n+1]=this._y,l[n+2]=this._z,l[n+3]=this._w,l}fromBufferAttribute(l,n){return this._x=l.getX(n),this._y=l.getY(n),this._z=l.getZ(n),this._w=l.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(l){return this._onChangeCallback=l,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class nt{constructor(l=0,n=0,t=0){nt.prototype.isVector3=!0,this.x=l,this.y=n,this.z=t}set(l,n,t){return t===void 0&&(t=this.z),this.x=l,this.y=n,this.z=t,this}setScalar(l){return this.x=l,this.y=l,this.z=l,this}setX(l){return this.x=l,this}setY(l){return this.y=l,this}setZ(l){return this.z=l,this}setComponent(l,n){switch(l){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+l)}return this}getComponent(l){switch(l){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+l)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(l){return this.x=l.x,this.y=l.y,this.z=l.z,this}add(l){return this.x+=l.x,this.y+=l.y,this.z+=l.z,this}addScalar(l){return this.x+=l,this.y+=l,this.z+=l,this}addVectors(l,n){return this.x=l.x+n.x,this.y=l.y+n.y,this.z=l.z+n.z,this}addScaledVector(l,n){return this.x+=l.x*n,this.y+=l.y*n,this.z+=l.z*n,this}sub(l){return this.x-=l.x,this.y-=l.y,this.z-=l.z,this}subScalar(l){return this.x-=l,this.y-=l,this.z-=l,this}subVectors(l,n){return this.x=l.x-n.x,this.y=l.y-n.y,this.z=l.z-n.z,this}multiply(l){return this.x*=l.x,this.y*=l.y,this.z*=l.z,this}multiplyScalar(l){return this.x*=l,this.y*=l,this.z*=l,this}multiplyVectors(l,n){return this.x=l.x*n.x,this.y=l.y*n.y,this.z=l.z*n.z,this}applyEuler(l){return this.applyQuaternion(wW.setFromEuler(l))}applyAxisAngle(l,n){return this.applyQuaternion(wW.setFromAxisAngle(l,n))}applyMatrix3(l){const n=this.x,t=this.y,c=this.z,y=l.elements;return this.x=y[0]*n+y[3]*t+y[6]*c,this.y=y[1]*n+y[4]*t+y[7]*c,this.z=y[2]*n+y[5]*t+y[8]*c,this}applyNormalMatrix(l){return this.applyMatrix3(l).normalize()}applyMatrix4(l){const n=this.x,t=this.y,c=this.z,y=l.elements,S=1/(y[3]*n+y[7]*t+y[11]*c+y[15]);return this.x=(y[0]*n+y[4]*t+y[8]*c+y[12])*S,this.y=(y[1]*n+y[5]*t+y[9]*c+y[13])*S,this.z=(y[2]*n+y[6]*t+y[10]*c+y[14])*S,this}applyQuaternion(l){const n=this.x,t=this.y,c=this.z,y=l.x,S=l.y,g=l.z,G=l.w,V=2*(S*c-g*t),Z=2*(g*n-y*c),v=2*(y*t-S*n);return this.x=n+G*V+S*v-g*Z,this.y=t+G*Z+g*V-y*v,this.z=c+G*v+y*Z-S*V,this}project(l){return this.applyMatrix4(l.matrixWorldInverse).applyMatrix4(l.projectionMatrix)}unproject(l){return this.applyMatrix4(l.projectionMatrixInverse).applyMatrix4(l.matrixWorld)}transformDirection(l){const n=this.x,t=this.y,c=this.z,y=l.elements;return this.x=y[0]*n+y[4]*t+y[8]*c,this.y=y[1]*n+y[5]*t+y[9]*c,this.z=y[2]*n+y[6]*t+y[10]*c,this.normalize()}divide(l){return this.x/=l.x,this.y/=l.y,this.z/=l.z,this}divideScalar(l){return this.multiplyScalar(1/l)}min(l){return this.x=Math.min(this.x,l.x),this.y=Math.min(this.y,l.y),this.z=Math.min(this.z,l.z),this}max(l){return this.x=Math.max(this.x,l.x),this.y=Math.max(this.y,l.y),this.z=Math.max(this.z,l.z),this}clamp(l,n){return this.x=Math.max(l.x,Math.min(n.x,this.x)),this.y=Math.max(l.y,Math.min(n.y,this.y)),this.z=Math.max(l.z,Math.min(n.z,this.z)),this}clampScalar(l,n){return this.x=Math.max(l,Math.min(n,this.x)),this.y=Math.max(l,Math.min(n,this.y)),this.z=Math.max(l,Math.min(n,this.z)),this}clampLength(l,n){const t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(l,Math.min(n,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(l){return this.x*l.x+this.y*l.y+this.z*l.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(l){return this.normalize().multiplyScalar(l)}lerp(l,n){return this.x+=(l.x-this.x)*n,this.y+=(l.y-this.y)*n,this.z+=(l.z-this.z)*n,this}lerpVectors(l,n,t){return this.x=l.x+(n.x-l.x)*t,this.y=l.y+(n.y-l.y)*t,this.z=l.z+(n.z-l.z)*t,this}cross(l){return this.crossVectors(this,l)}crossVectors(l,n){const t=l.x,c=l.y,y=l.z,S=n.x,g=n.y,G=n.z;return this.x=c*G-y*g,this.y=y*S-t*G,this.z=t*g-c*S,this}projectOnVector(l){const n=l.lengthSq();if(n===0)return this.set(0,0,0);const t=l.dot(this)/n;return this.copy(l).multiplyScalar(t)}projectOnPlane(l){return IG.copy(this).projectOnVector(l),this.sub(IG)}reflect(l){return this.sub(IG.copy(l).multiplyScalar(2*this.dot(l)))}angleTo(l){const n=Math.sqrt(this.lengthSq()*l.lengthSq());if(n===0)return Math.PI/2;const t=this.dot(l)/n;return Math.acos(Kf(t,-1,1))}distanceTo(l){return Math.sqrt(this.distanceToSquared(l))}distanceToSquared(l){const n=this.x-l.x,t=this.y-l.y,c=this.z-l.z;return n*n+t*t+c*c}manhattanDistanceTo(l){return Math.abs(this.x-l.x)+Math.abs(this.y-l.y)+Math.abs(this.z-l.z)}setFromSpherical(l){return this.setFromSphericalCoords(l.radius,l.phi,l.theta)}setFromSphericalCoords(l,n,t){const c=Math.sin(n)*l;return this.x=c*Math.sin(t),this.y=Math.cos(n)*l,this.z=c*Math.cos(t),this}setFromCylindrical(l){return this.setFromCylindricalCoords(l.radius,l.theta,l.y)}setFromCylindricalCoords(l,n,t){return this.x=l*Math.sin(n),this.y=t,this.z=l*Math.cos(n),this}setFromMatrixPosition(l){const n=l.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(l){const n=this.setFromMatrixColumn(l,0).length(),t=this.setFromMatrixColumn(l,1).length(),c=this.setFromMatrixColumn(l,2).length();return this.x=n,this.y=t,this.z=c,this}setFromMatrixColumn(l,n){return this.fromArray(l.elements,n*4)}setFromMatrix3Column(l,n){return this.fromArray(l.elements,n*3)}setFromEuler(l){return this.x=l._x,this.y=l._y,this.z=l._z,this}setFromColor(l){return this.x=l.r,this.y=l.g,this.z=l.b,this}equals(l){return l.x===this.x&&l.y===this.y&&l.z===this.z}fromArray(l,n=0){return this.x=l[n],this.y=l[n+1],this.z=l[n+2],this}toArray(l=[],n=0){return l[n]=this.x,l[n+1]=this.y,l[n+2]=this.z,l}fromBufferAttribute(l,n){return this.x=l.getX(n),this.y=l.getY(n),this.z=l.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const l=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,t=Math.sqrt(1-l**2);return this.x=t*Math.cos(n),this.y=t*Math.sin(n),this.z=l,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const IG=new nt,wW=new oB;class sc{constructor(l=new nt(1/0,1/0,1/0),n=new nt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=l,this.max=n}set(l,n){return this.min.copy(l),this.max.copy(n),this}setFromArray(l){this.makeEmpty();for(let n=0,t=l.length;n<t;n+=3)this.expandByPoint(Zw.fromArray(l,n));return this}setFromBufferAttribute(l){this.makeEmpty();for(let n=0,t=l.count;n<t;n++)this.expandByPoint(Zw.fromBufferAttribute(l,n));return this}setFromPoints(l){this.makeEmpty();for(let n=0,t=l.length;n<t;n++)this.expandByPoint(l[n]);return this}setFromCenterAndSize(l,n){const t=Zw.copy(n).multiplyScalar(.5);return this.min.copy(l).sub(t),this.max.copy(l).add(t),this}setFromObject(l,n=!1){return this.makeEmpty(),this.expandByObject(l,n)}clone(){return new this.constructor().copy(this)}copy(l){return this.min.copy(l.min),this.max.copy(l.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(l){return this.isEmpty()?l.set(0,0,0):l.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(l){return this.isEmpty()?l.set(0,0,0):l.subVectors(this.max,this.min)}expandByPoint(l){return this.min.min(l),this.max.max(l),this}expandByVector(l){return this.min.sub(l),this.max.add(l),this}expandByScalar(l){return this.min.addScalar(-l),this.max.addScalar(l),this}expandByObject(l,n=!1){l.updateWorldMatrix(!1,!1);const t=l.geometry;if(t!==void 0){const y=t.getAttribute("position");if(n===!0&&y!==void 0&&l.isInstancedMesh!==!0)for(let S=0,g=y.count;S<g;S++)l.isMesh===!0?l.getVertexPosition(S,Zw):Zw.fromBufferAttribute(y,S),Zw.applyMatrix4(l.matrixWorld),this.expandByPoint(Zw);else l.boundingBox!==void 0?(l.boundingBox===null&&l.computeBoundingBox(),SB.copy(l.boundingBox)):(t.boundingBox===null&&t.computeBoundingBox(),SB.copy(t.boundingBox)),SB.applyMatrix4(l.matrixWorld),this.union(SB)}const c=l.children;for(let y=0,S=c.length;y<S;y++)this.expandByObject(c[y],n);return this}containsPoint(l){return!(l.x<this.min.x||l.x>this.max.x||l.y<this.min.y||l.y>this.max.y||l.z<this.min.z||l.z>this.max.z)}containsBox(l){return this.min.x<=l.min.x&&l.max.x<=this.max.x&&this.min.y<=l.min.y&&l.max.y<=this.max.y&&this.min.z<=l.min.z&&l.max.z<=this.max.z}getParameter(l,n){return n.set((l.x-this.min.x)/(this.max.x-this.min.x),(l.y-this.min.y)/(this.max.y-this.min.y),(l.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(l){return!(l.max.x<this.min.x||l.min.x>this.max.x||l.max.y<this.min.y||l.min.y>this.max.y||l.max.z<this.min.z||l.min.z>this.max.z)}intersectsSphere(l){return this.clampPoint(l.center,Zw),Zw.distanceToSquared(l.center)<=l.radius*l.radius}intersectsPlane(l){let n,t;return l.normal.x>0?(n=l.normal.x*this.min.x,t=l.normal.x*this.max.x):(n=l.normal.x*this.max.x,t=l.normal.x*this.min.x),l.normal.y>0?(n+=l.normal.y*this.min.y,t+=l.normal.y*this.max.y):(n+=l.normal.y*this.max.y,t+=l.normal.y*this.min.y),l.normal.z>0?(n+=l.normal.z*this.min.z,t+=l.normal.z*this.max.z):(n+=l.normal.z*this.max.z,t+=l.normal.z*this.min.z),n<=-l.constant&&t>=-l.constant}intersectsTriangle(l){if(this.isEmpty())return!1;this.getCenter(Kx),LB.subVectors(this.max,Kx),DP.subVectors(l.a,Kx),NP.subVectors(l.b,Kx),AP.subVectors(l.c,Kx),kD.subVectors(NP,DP),qD.subVectors(AP,NP),l8.subVectors(DP,AP);let n=[0,-kD.z,kD.y,0,-qD.z,qD.y,0,-l8.z,l8.y,kD.z,0,-kD.x,qD.z,0,-qD.x,l8.z,0,-l8.x,-kD.y,kD.x,0,-qD.y,qD.x,0,-l8.y,l8.x,0];return!dG(n,DP,NP,AP,LB)||(n=[1,0,0,0,1,0,0,0,1],!dG(n,DP,NP,AP,LB))?!1:(OB.crossVectors(kD,qD),n=[OB.x,OB.y,OB.z],dG(n,DP,NP,AP,LB))}clampPoint(l,n){return n.copy(l).clamp(this.min,this.max)}distanceToPoint(l){return this.clampPoint(l,Zw).distanceTo(l)}getBoundingSphere(l){return this.isEmpty()?l.makeEmpty():(this.getCenter(l.center),l.radius=this.getSize(Zw).length()*.5),l}intersect(l){return this.min.max(l.min),this.max.min(l.max),this.isEmpty()&&this.makeEmpty(),this}union(l){return this.min.min(l.min),this.max.max(l.max),this}applyMatrix4(l){return this.isEmpty()?this:(x6[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(l),x6[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(l),x6[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(l),x6[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(l),x6[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(l),x6[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(l),x6[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(l),x6[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(l),this.setFromPoints(x6),this)}translate(l){return this.min.add(l),this.max.add(l),this}equals(l){return l.min.equals(this.min)&&l.max.equals(this.max)}}const x6=[new nt,new nt,new nt,new nt,new nt,new nt,new nt,new nt],Zw=new nt,SB=new sc,DP=new nt,NP=new nt,AP=new nt,kD=new nt,qD=new nt,l8=new nt,Kx=new nt,LB=new nt,OB=new nt,s8=new nt;function dG(e,l,n,t,c){for(let y=0,S=e.length-3;y<=S;y+=3){s8.fromArray(e,y);const g=c.x*Math.abs(s8.x)+c.y*Math.abs(s8.y)+c.z*Math.abs(s8.z),G=l.dot(s8),V=n.dot(s8),Z=t.dot(s8);if(Math.max(-Math.max(G,V,Z),Math.min(G,V,Z))>g)return!1}return!0}const xk=new sc,Qx=new nt,yG=new nt;class TO{constructor(l=new nt,n=-1){this.isSphere=!0,this.center=l,this.radius=n}set(l,n){return this.center.copy(l),this.radius=n,this}setFromPoints(l,n){const t=this.center;n!==void 0?t.copy(n):xk.setFromPoints(l).getCenter(t);let c=0;for(let y=0,S=l.length;y<S;y++)c=Math.max(c,t.distanceToSquared(l[y]));return this.radius=Math.sqrt(c),this}copy(l){return this.center.copy(l.center),this.radius=l.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(l){return l.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(l){return l.distanceTo(this.center)-this.radius}intersectsSphere(l){const n=this.radius+l.radius;return l.center.distanceToSquared(this.center)<=n*n}intersectsBox(l){return l.intersectsSphere(this)}intersectsPlane(l){return Math.abs(l.distanceToPoint(this.center))<=this.radius}clampPoint(l,n){const t=this.center.distanceToSquared(l);return n.copy(l),t>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(l){return this.isEmpty()?(l.makeEmpty(),l):(l.set(this.center,this.center),l.expandByScalar(this.radius),l)}applyMatrix4(l){return this.center.applyMatrix4(l),this.radius=this.radius*l.getMaxScaleOnAxis(),this}translate(l){return this.center.add(l),this}expandByPoint(l){if(this.isEmpty())return this.center.copy(l),this.radius=0,this;Qx.subVectors(l,this.center);const n=Qx.lengthSq();if(n>this.radius*this.radius){const t=Math.sqrt(n),c=(t-this.radius)*.5;this.center.addScaledVector(Qx,c/t),this.radius+=c}return this}union(l){return l.isEmpty()?this:this.isEmpty()?(this.copy(l),this):(this.center.equals(l.center)===!0?this.radius=Math.max(this.radius,l.radius):(yG.subVectors(l.center,this.center).setLength(l.radius),this.expandByPoint(Qx.copy(l.center).add(yG)),this.expandByPoint(Qx.copy(l.center).sub(yG))),this)}equals(l){return l.center.equals(this.center)&&l.radius===this.radius}clone(){return new this.constructor().copy(this)}}const H6=new nt,wG=new nt,gB=new nt,KD=new nt,EG=new nt,PB=new nt,TG=new nt;class uF{constructor(l=new nt,n=new nt(0,0,-1)){this.origin=l,this.direction=n}set(l,n){return this.origin.copy(l),this.direction.copy(n),this}copy(l){return this.origin.copy(l.origin),this.direction.copy(l.direction),this}at(l,n){return n.copy(this.origin).addScaledVector(this.direction,l)}lookAt(l){return this.direction.copy(l).sub(this.origin).normalize(),this}recast(l){return this.origin.copy(this.at(l,H6)),this}closestPointToPoint(l,n){n.subVectors(l,this.origin);const t=n.dot(this.direction);return t<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,t)}distanceToPoint(l){return Math.sqrt(this.distanceSqToPoint(l))}distanceSqToPoint(l){const n=H6.subVectors(l,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(l):(H6.copy(this.origin).addScaledVector(this.direction,n),H6.distanceToSquared(l))}distanceSqToSegment(l,n,t,c){wG.copy(l).add(n).multiplyScalar(.5),gB.copy(n).sub(l).normalize(),KD.copy(this.origin).sub(wG);const y=l.distanceTo(n)*.5,S=-this.direction.dot(gB),g=KD.dot(this.direction),G=-KD.dot(gB),V=KD.lengthSq(),Z=Math.abs(1-S*S);let v,ee,te,he;if(Z>0)if(v=S*G-g,ee=S*g-G,he=y*Z,v>=0)if(ee>=-he)if(ee<=he){const Te=1/Z;v*=Te,ee*=Te,te=v*(v+S*ee+2*g)+ee*(S*v+ee+2*G)+V}else ee=y,v=Math.max(0,-(S*ee+g)),te=-v*v+ee*(ee+2*G)+V;else ee=-y,v=Math.max(0,-(S*ee+g)),te=-v*v+ee*(ee+2*G)+V;else ee<=-he?(v=Math.max(0,-(-S*y+g)),ee=v>0?-y:Math.min(Math.max(-y,-G),y),te=-v*v+ee*(ee+2*G)+V):ee<=he?(v=0,ee=Math.min(Math.max(-y,-G),y),te=ee*(ee+2*G)+V):(v=Math.max(0,-(S*y+g)),ee=v>0?y:Math.min(Math.max(-y,-G),y),te=-v*v+ee*(ee+2*G)+V);else ee=S>0?-y:y,v=Math.max(0,-(S*ee+g)),te=-v*v+ee*(ee+2*G)+V;return t&&t.copy(this.origin).addScaledVector(this.direction,v),c&&c.copy(wG).addScaledVector(gB,ee),te}intersectSphere(l,n){H6.subVectors(l.center,this.origin);const t=H6.dot(this.direction),c=H6.dot(H6)-t*t,y=l.radius*l.radius;if(c>y)return null;const S=Math.sqrt(y-c),g=t-S,G=t+S;return G<0?null:g<0?this.at(G,n):this.at(g,n)}intersectsSphere(l){return this.distanceSqToPoint(l.center)<=l.radius*l.radius}distanceToPlane(l){const n=l.normal.dot(this.direction);if(n===0)return l.distanceToPoint(this.origin)===0?0:null;const t=-(this.origin.dot(l.normal)+l.constant)/n;return t>=0?t:null}intersectPlane(l,n){const t=this.distanceToPlane(l);return t===null?null:this.at(t,n)}intersectsPlane(l){const n=l.distanceToPoint(this.origin);return n===0||l.normal.dot(this.direction)*n<0}intersectBox(l,n){let t,c,y,S,g,G;const V=1/this.direction.x,Z=1/this.direction.y,v=1/this.direction.z,ee=this.origin;return V>=0?(t=(l.min.x-ee.x)*V,c=(l.max.x-ee.x)*V):(t=(l.max.x-ee.x)*V,c=(l.min.x-ee.x)*V),Z>=0?(y=(l.min.y-ee.y)*Z,S=(l.max.y-ee.y)*Z):(y=(l.max.y-ee.y)*Z,S=(l.min.y-ee.y)*Z),t>S||y>c||((y>t||isNaN(t))&&(t=y),(S<c||isNaN(c))&&(c=S),v>=0?(g=(l.min.z-ee.z)*v,G=(l.max.z-ee.z)*v):(g=(l.max.z-ee.z)*v,G=(l.min.z-ee.z)*v),t>G||g>c)||((g>t||t!==t)&&(t=g),(G<c||c!==c)&&(c=G),c<0)?null:this.at(t>=0?t:c,n)}intersectsBox(l){return this.intersectBox(l,H6)!==null}intersectTriangle(l,n,t,c,y){EG.subVectors(n,l),PB.subVectors(t,l),TG.crossVectors(EG,PB);let S=this.direction.dot(TG),g;if(S>0){if(c)return null;g=1}else if(S<0)g=-1,S=-S;else return null;KD.subVectors(this.origin,l);const G=g*this.direction.dot(PB.crossVectors(KD,PB));if(G<0)return null;const V=g*this.direction.dot(EG.cross(KD));if(V<0||G+V>S)return null;const Z=-g*KD.dot(TG);return Z<0?null:this.at(Z/S,y)}applyMatrix4(l){return this.origin.applyMatrix4(l),this.direction.transformDirection(l),this}equals(l){return l.origin.equals(this.origin)&&l.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Sl{constructor(l,n,t,c,y,S,g,G,V,Z,v,ee,te,he,Te,oe){Sl.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],l!==void 0&&this.set(l,n,t,c,y,S,g,G,V,Z,v,ee,te,he,Te,oe)}set(l,n,t,c,y,S,g,G,V,Z,v,ee,te,he,Te,oe){const ie=this.elements;return ie[0]=l,ie[4]=n,ie[8]=t,ie[12]=c,ie[1]=y,ie[5]=S,ie[9]=g,ie[13]=G,ie[2]=V,ie[6]=Z,ie[10]=v,ie[14]=ee,ie[3]=te,ie[7]=he,ie[11]=Te,ie[15]=oe,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sl().fromArray(this.elements)}copy(l){const n=this.elements,t=l.elements;return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],this}copyPosition(l){const n=this.elements,t=l.elements;return n[12]=t[12],n[13]=t[13],n[14]=t[14],this}setFromMatrix3(l){const n=l.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(l,n,t){return l.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),t.setFromMatrixColumn(this,2),this}makeBasis(l,n,t){return this.set(l.x,n.x,t.x,0,l.y,n.y,t.y,0,l.z,n.z,t.z,0,0,0,0,1),this}extractRotation(l){const n=this.elements,t=l.elements,c=1/SP.setFromMatrixColumn(l,0).length(),y=1/SP.setFromMatrixColumn(l,1).length(),S=1/SP.setFromMatrixColumn(l,2).length();return n[0]=t[0]*c,n[1]=t[1]*c,n[2]=t[2]*c,n[3]=0,n[4]=t[4]*y,n[5]=t[5]*y,n[6]=t[6]*y,n[7]=0,n[8]=t[8]*S,n[9]=t[9]*S,n[10]=t[10]*S,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(l){const n=this.elements,t=l.x,c=l.y,y=l.z,S=Math.cos(t),g=Math.sin(t),G=Math.cos(c),V=Math.sin(c),Z=Math.cos(y),v=Math.sin(y);if(l.order==="XYZ"){const ee=S*Z,te=S*v,he=g*Z,Te=g*v;n[0]=G*Z,n[4]=-G*v,n[8]=V,n[1]=te+he*V,n[5]=ee-Te*V,n[9]=-g*G,n[2]=Te-ee*V,n[6]=he+te*V,n[10]=S*G}else if(l.order==="YXZ"){const ee=G*Z,te=G*v,he=V*Z,Te=V*v;n[0]=ee+Te*g,n[4]=he*g-te,n[8]=S*V,n[1]=S*v,n[5]=S*Z,n[9]=-g,n[2]=te*g-he,n[6]=Te+ee*g,n[10]=S*G}else if(l.order==="ZXY"){const ee=G*Z,te=G*v,he=V*Z,Te=V*v;n[0]=ee-Te*g,n[4]=-S*v,n[8]=he+te*g,n[1]=te+he*g,n[5]=S*Z,n[9]=Te-ee*g,n[2]=-S*V,n[6]=g,n[10]=S*G}else if(l.order==="ZYX"){const ee=S*Z,te=S*v,he=g*Z,Te=g*v;n[0]=G*Z,n[4]=he*V-te,n[8]=ee*V+Te,n[1]=G*v,n[5]=Te*V+ee,n[9]=te*V-he,n[2]=-V,n[6]=g*G,n[10]=S*G}else if(l.order==="YZX"){const ee=S*G,te=S*V,he=g*G,Te=g*V;n[0]=G*Z,n[4]=Te-ee*v,n[8]=he*v+te,n[1]=v,n[5]=S*Z,n[9]=-g*Z,n[2]=-V*Z,n[6]=te*v+he,n[10]=ee-Te*v}else if(l.order==="XZY"){const ee=S*G,te=S*V,he=g*G,Te=g*V;n[0]=G*Z,n[4]=-v,n[8]=V*Z,n[1]=ee*v+Te,n[5]=S*Z,n[9]=te*v-he,n[2]=he*v-te,n[6]=g*Z,n[10]=Te*v+ee}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(l){return this.compose(Hk,l,Bk)}lookAt(l,n,t){const c=this.elements;return g4.subVectors(l,n),g4.lengthSq()===0&&(g4.z=1),g4.normalize(),QD.crossVectors(t,g4),QD.lengthSq()===0&&(Math.abs(t.z)===1?g4.x+=1e-4:g4.z+=1e-4,g4.normalize(),QD.crossVectors(t,g4)),QD.normalize(),bB.crossVectors(g4,QD),c[0]=QD.x,c[4]=bB.x,c[8]=g4.x,c[1]=QD.y,c[5]=bB.y,c[9]=g4.y,c[2]=QD.z,c[6]=bB.z,c[10]=g4.z,this}multiply(l){return this.multiplyMatrices(this,l)}premultiply(l){return this.multiplyMatrices(l,this)}multiplyMatrices(l,n){const t=l.elements,c=n.elements,y=this.elements,S=t[0],g=t[4],G=t[8],V=t[12],Z=t[1],v=t[5],ee=t[9],te=t[13],he=t[2],Te=t[6],oe=t[10],ie=t[14],De=t[3],we=t[7],Ae=t[11],Ye=t[15],Ve=c[0],_e=c[4],Xe=c[8],ge=c[12],Le=c[1],ve=c[5],st=c[9],ft=c[13],et=c[2],at=c[6],It=c[10],St=c[14],bt=c[3],Ct=c[7],Ft=c[11],Ht=c[15];return y[0]=S*Ve+g*Le+G*et+V*bt,y[4]=S*_e+g*ve+G*at+V*Ct,y[8]=S*Xe+g*st+G*It+V*Ft,y[12]=S*ge+g*ft+G*St+V*Ht,y[1]=Z*Ve+v*Le+ee*et+te*bt,y[5]=Z*_e+v*ve+ee*at+te*Ct,y[9]=Z*Xe+v*st+ee*It+te*Ft,y[13]=Z*ge+v*ft+ee*St+te*Ht,y[2]=he*Ve+Te*Le+oe*et+ie*bt,y[6]=he*_e+Te*ve+oe*at+ie*Ct,y[10]=he*Xe+Te*st+oe*It+ie*Ft,y[14]=he*ge+Te*ft+oe*St+ie*Ht,y[3]=De*Ve+we*Le+Ae*et+Ye*bt,y[7]=De*_e+we*ve+Ae*at+Ye*Ct,y[11]=De*Xe+we*st+Ae*It+Ye*Ft,y[15]=De*ge+we*ft+Ae*St+Ye*Ht,this}multiplyScalar(l){const n=this.elements;return n[0]*=l,n[4]*=l,n[8]*=l,n[12]*=l,n[1]*=l,n[5]*=l,n[9]*=l,n[13]*=l,n[2]*=l,n[6]*=l,n[10]*=l,n[14]*=l,n[3]*=l,n[7]*=l,n[11]*=l,n[15]*=l,this}determinant(){const l=this.elements,n=l[0],t=l[4],c=l[8],y=l[12],S=l[1],g=l[5],G=l[9],V=l[13],Z=l[2],v=l[6],ee=l[10],te=l[14],he=l[3],Te=l[7],oe=l[11],ie=l[15];return he*(+y*G*v-c*V*v-y*g*ee+t*V*ee+c*g*te-t*G*te)+Te*(+n*G*te-n*V*ee+y*S*ee-c*S*te+c*V*Z-y*G*Z)+oe*(+n*V*v-n*g*te-y*S*v+t*S*te+y*g*Z-t*V*Z)+ie*(-c*g*Z-n*G*v+n*g*ee+c*S*v-t*S*ee+t*G*Z)}transpose(){const l=this.elements;let n;return n=l[1],l[1]=l[4],l[4]=n,n=l[2],l[2]=l[8],l[8]=n,n=l[6],l[6]=l[9],l[9]=n,n=l[3],l[3]=l[12],l[12]=n,n=l[7],l[7]=l[13],l[13]=n,n=l[11],l[11]=l[14],l[14]=n,this}setPosition(l,n,t){const c=this.elements;return l.isVector3?(c[12]=l.x,c[13]=l.y,c[14]=l.z):(c[12]=l,c[13]=n,c[14]=t),this}invert(){const l=this.elements,n=l[0],t=l[1],c=l[2],y=l[3],S=l[4],g=l[5],G=l[6],V=l[7],Z=l[8],v=l[9],ee=l[10],te=l[11],he=l[12],Te=l[13],oe=l[14],ie=l[15],De=v*oe*V-Te*ee*V+Te*G*te-g*oe*te-v*G*ie+g*ee*ie,we=he*ee*V-Z*oe*V-he*G*te+S*oe*te+Z*G*ie-S*ee*ie,Ae=Z*Te*V-he*v*V+he*g*te-S*Te*te-Z*g*ie+S*v*ie,Ye=he*v*G-Z*Te*G-he*g*ee+S*Te*ee+Z*g*oe-S*v*oe,Ve=n*De+t*we+c*Ae+y*Ye;if(Ve===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const _e=1/Ve;return l[0]=De*_e,l[1]=(Te*ee*y-v*oe*y-Te*c*te+t*oe*te+v*c*ie-t*ee*ie)*_e,l[2]=(g*oe*y-Te*G*y+Te*c*V-t*oe*V-g*c*ie+t*G*ie)*_e,l[3]=(v*G*y-g*ee*y-v*c*V+t*ee*V+g*c*te-t*G*te)*_e,l[4]=we*_e,l[5]=(Z*oe*y-he*ee*y+he*c*te-n*oe*te-Z*c*ie+n*ee*ie)*_e,l[6]=(he*G*y-S*oe*y-he*c*V+n*oe*V+S*c*ie-n*G*ie)*_e,l[7]=(S*ee*y-Z*G*y+Z*c*V-n*ee*V-S*c*te+n*G*te)*_e,l[8]=Ae*_e,l[9]=(he*v*y-Z*Te*y-he*t*te+n*Te*te+Z*t*ie-n*v*ie)*_e,l[10]=(S*Te*y-he*g*y+he*t*V-n*Te*V-S*t*ie+n*g*ie)*_e,l[11]=(Z*g*y-S*v*y-Z*t*V+n*v*V+S*t*te-n*g*te)*_e,l[12]=Ye*_e,l[13]=(Z*Te*c-he*v*c+he*t*ee-n*Te*ee-Z*t*oe+n*v*oe)*_e,l[14]=(he*g*c-S*Te*c-he*t*G+n*Te*G+S*t*oe-n*g*oe)*_e,l[15]=(S*v*c-Z*g*c+Z*t*G-n*v*G-S*t*ee+n*g*ee)*_e,this}scale(l){const n=this.elements,t=l.x,c=l.y,y=l.z;return n[0]*=t,n[4]*=c,n[8]*=y,n[1]*=t,n[5]*=c,n[9]*=y,n[2]*=t,n[6]*=c,n[10]*=y,n[3]*=t,n[7]*=c,n[11]*=y,this}getMaxScaleOnAxis(){const l=this.elements,n=l[0]*l[0]+l[1]*l[1]+l[2]*l[2],t=l[4]*l[4]+l[5]*l[5]+l[6]*l[6],c=l[8]*l[8]+l[9]*l[9]+l[10]*l[10];return Math.sqrt(Math.max(n,t,c))}makeTranslation(l,n,t){return l.isVector3?this.set(1,0,0,l.x,0,1,0,l.y,0,0,1,l.z,0,0,0,1):this.set(1,0,0,l,0,1,0,n,0,0,1,t,0,0,0,1),this}makeRotationX(l){const n=Math.cos(l),t=Math.sin(l);return this.set(1,0,0,0,0,n,-t,0,0,t,n,0,0,0,0,1),this}makeRotationY(l){const n=Math.cos(l),t=Math.sin(l);return this.set(n,0,t,0,0,1,0,0,-t,0,n,0,0,0,0,1),this}makeRotationZ(l){const n=Math.cos(l),t=Math.sin(l);return this.set(n,-t,0,0,t,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(l,n){const t=Math.cos(n),c=Math.sin(n),y=1-t,S=l.x,g=l.y,G=l.z,V=y*S,Z=y*g;return this.set(V*S+t,V*g-c*G,V*G+c*g,0,V*g+c*G,Z*g+t,Z*G-c*S,0,V*G-c*g,Z*G+c*S,y*G*G+t,0,0,0,0,1),this}makeScale(l,n,t){return this.set(l,0,0,0,0,n,0,0,0,0,t,0,0,0,0,1),this}makeShear(l,n,t,c,y,S){return this.set(1,t,y,0,l,1,S,0,n,c,1,0,0,0,0,1),this}compose(l,n,t){const c=this.elements,y=n._x,S=n._y,g=n._z,G=n._w,V=y+y,Z=S+S,v=g+g,ee=y*V,te=y*Z,he=y*v,Te=S*Z,oe=S*v,ie=g*v,De=G*V,we=G*Z,Ae=G*v,Ye=t.x,Ve=t.y,_e=t.z;return c[0]=(1-(Te+ie))*Ye,c[1]=(te+Ae)*Ye,c[2]=(he-we)*Ye,c[3]=0,c[4]=(te-Ae)*Ve,c[5]=(1-(ee+ie))*Ve,c[6]=(oe+De)*Ve,c[7]=0,c[8]=(he+we)*_e,c[9]=(oe-De)*_e,c[10]=(1-(ee+Te))*_e,c[11]=0,c[12]=l.x,c[13]=l.y,c[14]=l.z,c[15]=1,this}decompose(l,n,t){const c=this.elements;let y=SP.set(c[0],c[1],c[2]).length();const S=SP.set(c[4],c[5],c[6]).length(),g=SP.set(c[8],c[9],c[10]).length();this.determinant()<0&&(y=-y),l.x=c[12],l.y=c[13],l.z=c[14],Jw.copy(this);const V=1/y,Z=1/S,v=1/g;return Jw.elements[0]*=V,Jw.elements[1]*=V,Jw.elements[2]*=V,Jw.elements[4]*=Z,Jw.elements[5]*=Z,Jw.elements[6]*=Z,Jw.elements[8]*=v,Jw.elements[9]*=v,Jw.elements[10]*=v,n.setFromRotationMatrix(Jw),t.x=y,t.y=S,t.z=g,this}makePerspective(l,n,t,c,y,S,g=i7){const G=this.elements,V=2*y/(n-l),Z=2*y/(t-c),v=(n+l)/(n-l),ee=(t+c)/(t-c);let te,he;if(g===i7)te=-(S+y)/(S-y),he=-2*S*y/(S-y);else if(g===eF)te=-S/(S-y),he=-S*y/(S-y);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+g);return G[0]=V,G[4]=0,G[8]=v,G[12]=0,G[1]=0,G[5]=Z,G[9]=ee,G[13]=0,G[2]=0,G[6]=0,G[10]=te,G[14]=he,G[3]=0,G[7]=0,G[11]=-1,G[15]=0,this}makeOrthographic(l,n,t,c,y,S,g=i7){const G=this.elements,V=1/(n-l),Z=1/(t-c),v=1/(S-y),ee=(n+l)*V,te=(t+c)*Z;let he,Te;if(g===i7)he=(S+y)*v,Te=-2*v;else if(g===eF)he=y*v,Te=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+g);return G[0]=2*V,G[4]=0,G[8]=0,G[12]=-ee,G[1]=0,G[5]=2*Z,G[9]=0,G[13]=-te,G[2]=0,G[6]=0,G[10]=Te,G[14]=-he,G[3]=0,G[7]=0,G[11]=0,G[15]=1,this}equals(l){const n=this.elements,t=l.elements;for(let c=0;c<16;c++)if(n[c]!==t[c])return!1;return!0}fromArray(l,n=0){for(let t=0;t<16;t++)this.elements[t]=l[t+n];return this}toArray(l=[],n=0){const t=this.elements;return l[n]=t[0],l[n+1]=t[1],l[n+2]=t[2],l[n+3]=t[3],l[n+4]=t[4],l[n+5]=t[5],l[n+6]=t[6],l[n+7]=t[7],l[n+8]=t[8],l[n+9]=t[9],l[n+10]=t[10],l[n+11]=t[11],l[n+12]=t[12],l[n+13]=t[13],l[n+14]=t[14],l[n+15]=t[15],l}}const SP=new nt,Jw=new Sl,Hk=new nt(0,0,0),Bk=new nt(1,1,1),QD=new nt,bB=new nt,g4=new nt,EW=new Sl,TW=new oB;class aF{constructor(l=0,n=0,t=0,c=aF.DEFAULT_ORDER){this.isEuler=!0,this._x=l,this._y=n,this._z=t,this._order=c}get x(){return this._x}set x(l){this._x=l,this._onChangeCallback()}get y(){return this._y}set y(l){this._y=l,this._onChangeCallback()}get z(){return this._z}set z(l){this._z=l,this._onChangeCallback()}get order(){return this._order}set order(l){this._order=l,this._onChangeCallback()}set(l,n,t,c=this._order){return this._x=l,this._y=n,this._z=t,this._order=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(l){return this._x=l._x,this._y=l._y,this._z=l._z,this._order=l._order,this._onChangeCallback(),this}setFromRotationMatrix(l,n=this._order,t=!0){const c=l.elements,y=c[0],S=c[4],g=c[8],G=c[1],V=c[5],Z=c[9],v=c[2],ee=c[6],te=c[10];switch(n){case"XYZ":this._y=Math.asin(Kf(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-Z,te),this._z=Math.atan2(-S,y)):(this._x=Math.atan2(ee,V),this._z=0);break;case"YXZ":this._x=Math.asin(-Kf(Z,-1,1)),Math.abs(Z)<.9999999?(this._y=Math.atan2(g,te),this._z=Math.atan2(G,V)):(this._y=Math.atan2(-v,y),this._z=0);break;case"ZXY":this._x=Math.asin(Kf(ee,-1,1)),Math.abs(ee)<.9999999?(this._y=Math.atan2(-v,te),this._z=Math.atan2(-S,V)):(this._y=0,this._z=Math.atan2(G,y));break;case"ZYX":this._y=Math.asin(-Kf(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(ee,te),this._z=Math.atan2(G,y)):(this._x=0,this._z=Math.atan2(-S,V));break;case"YZX":this._z=Math.asin(Kf(G,-1,1)),Math.abs(G)<.9999999?(this._x=Math.atan2(-Z,V),this._y=Math.atan2(-v,y)):(this._x=0,this._y=Math.atan2(g,te));break;case"XZY":this._z=Math.asin(-Kf(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(ee,V),this._y=Math.atan2(g,y)):(this._x=Math.atan2(-Z,te),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,t===!0&&this._onChangeCallback(),this}setFromQuaternion(l,n,t){return EW.makeRotationFromQuaternion(l),this.setFromRotationMatrix(EW,n,t)}setFromVector3(l,n=this._order){return this.set(l.x,l.y,l.z,n)}reorder(l){return TW.setFromEuler(this),this.setFromQuaternion(TW,l)}equals(l){return l._x===this._x&&l._y===this._y&&l._z===this._z&&l._order===this._order}fromArray(l){return this._x=l[0],this._y=l[1],this._z=l[2],l[3]!==void 0&&(this._order=l[3]),this._onChangeCallback(),this}toArray(l=[],n=0){return l[n]=this._x,l[n+1]=this._y,l[n+2]=this._z,l[n+3]=this._order,l}_onChange(l){return this._onChangeCallback=l,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}aF.DEFAULT_ORDER="XYZ";class j_{constructor(){this.mask=1}set(l){this.mask=(1<<l|0)>>>0}enable(l){this.mask|=1<<l|0}enableAll(){this.mask=-1}toggle(l){this.mask^=1<<l|0}disable(l){this.mask&=~(1<<l|0)}disableAll(){this.mask=0}test(l){return(this.mask&l.mask)!==0}isEnabled(l){return(this.mask&(1<<l|0))!==0}}let Uk=0;const pW=new nt,LP=new oB,B6=new Sl,CB=new nt,$x=new nt,Fk=new nt,Gk=new oB,RW=new nt(1,0,0),mW=new nt(0,1,0),DW=new nt(0,0,1),_k={type:"added"},Vk={type:"removed"};class Jf extends zb{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uk++}),this.uuid=U7(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jf.DEFAULT_UP.clone();const l=new nt,n=new aF,t=new oB,c=new nt(1,1,1);function y(){t.setFromEuler(n,!1)}function S(){n.setFromQuaternion(t,void 0,!1)}n._onChange(y),t._onChange(S),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:l},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:t},scale:{configurable:!0,enumerable:!0,value:c},modelViewMatrix:{value:new Sl},normalMatrix:{value:new Wl}}),this.matrix=new Sl,this.matrixWorld=new Sl,this.matrixAutoUpdate=Jf.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jf.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new j_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(l){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(l),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(l){return this.quaternion.premultiply(l),this}setRotationFromAxisAngle(l,n){this.quaternion.setFromAxisAngle(l,n)}setRotationFromEuler(l){this.quaternion.setFromEuler(l,!0)}setRotationFromMatrix(l){this.quaternion.setFromRotationMatrix(l)}setRotationFromQuaternion(l){this.quaternion.copy(l)}rotateOnAxis(l,n){return LP.setFromAxisAngle(l,n),this.quaternion.multiply(LP),this}rotateOnWorldAxis(l,n){return LP.setFromAxisAngle(l,n),this.quaternion.premultiply(LP),this}rotateX(l){return this.rotateOnAxis(RW,l)}rotateY(l){return this.rotateOnAxis(mW,l)}rotateZ(l){return this.rotateOnAxis(DW,l)}translateOnAxis(l,n){return pW.copy(l).applyQuaternion(this.quaternion),this.position.add(pW.multiplyScalar(n)),this}translateX(l){return this.translateOnAxis(RW,l)}translateY(l){return this.translateOnAxis(mW,l)}translateZ(l){return this.translateOnAxis(DW,l)}localToWorld(l){return this.updateWorldMatrix(!0,!1),l.applyMatrix4(this.matrixWorld)}worldToLocal(l){return this.updateWorldMatrix(!0,!1),l.applyMatrix4(B6.copy(this.matrixWorld).invert())}lookAt(l,n,t){l.isVector3?CB.copy(l):CB.set(l,n,t);const c=this.parent;this.updateWorldMatrix(!0,!1),$x.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?B6.lookAt($x,CB,this.up):B6.lookAt(CB,$x,this.up),this.quaternion.setFromRotationMatrix(B6),c&&(B6.extractRotation(c.matrixWorld),LP.setFromRotationMatrix(B6),this.quaternion.premultiply(LP.invert()))}add(l){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return l===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",l),this):(l&&l.isObject3D?(l.parent!==null&&l.parent.remove(l),l.parent=this,this.children.push(l),l.dispatchEvent(_k)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",l),this)}remove(l){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.remove(arguments[t]);return this}const n=this.children.indexOf(l);return n!==-1&&(l.parent=null,this.children.splice(n,1),l.dispatchEvent(Vk)),this}removeFromParent(){const l=this.parent;return l!==null&&l.remove(this),this}clear(){return this.remove(...this.children)}attach(l){return this.updateWorldMatrix(!0,!1),B6.copy(this.matrixWorld).invert(),l.parent!==null&&(l.parent.updateWorldMatrix(!0,!1),B6.multiply(l.parent.matrixWorld)),l.applyMatrix4(B6),this.add(l),l.updateWorldMatrix(!1,!0),this}getObjectById(l){return this.getObjectByProperty("id",l)}getObjectByName(l){return this.getObjectByProperty("name",l)}getObjectByProperty(l,n){if(this[l]===n)return this;for(let t=0,c=this.children.length;t<c;t++){const S=this.children[t].getObjectByProperty(l,n);if(S!==void 0)return S}}getObjectsByProperty(l,n,t=[]){this[l]===n&&t.push(this);const c=this.children;for(let y=0,S=c.length;y<S;y++)c[y].getObjectsByProperty(l,n,t);return t}getWorldPosition(l){return this.updateWorldMatrix(!0,!1),l.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(l){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($x,l,Fk),l}getWorldScale(l){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($x,Gk,l),l}getWorldDirection(l){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return l.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(l){l(this);const n=this.children;for(let t=0,c=n.length;t<c;t++)n[t].traverse(l)}traverseVisible(l){if(this.visible===!1)return;l(this);const n=this.children;for(let t=0,c=n.length;t<c;t++)n[t].traverseVisible(l)}traverseAncestors(l){const n=this.parent;n!==null&&(l(n),n.traverseAncestors(l))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(l){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||l)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,l=!0);const n=this.children;for(let t=0,c=n.length;t<c;t++){const y=n[t];(y.matrixWorldAutoUpdate===!0||l===!0)&&y.updateMatrixWorld(l)}}updateWorldMatrix(l,n){const t=this.parent;if(l===!0&&t!==null&&t.matrixWorldAutoUpdate===!0&&t.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const c=this.children;for(let y=0,S=c.length;y<S;y++){const g=c[y];g.matrixWorldAutoUpdate===!0&&g.updateWorldMatrix(!1,!0)}}}toJSON(l){const n=l===void 0||typeof l=="string",t={};n&&(l={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},t.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const c={};c.uuid=this.uuid,c.type=this.type,this.name!==""&&(c.name=this.name),this.castShadow===!0&&(c.castShadow=!0),this.receiveShadow===!0&&(c.receiveShadow=!0),this.visible===!1&&(c.visible=!1),this.frustumCulled===!1&&(c.frustumCulled=!1),this.renderOrder!==0&&(c.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(c.userData=this.userData),c.layers=this.layers.mask,c.matrix=this.matrix.toArray(),c.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(c.matrixAutoUpdate=!1),this.isInstancedMesh&&(c.type="InstancedMesh",c.count=this.count,c.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(c.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(c.type="BatchedMesh",c.perObjectFrustumCulled=this.perObjectFrustumCulled,c.sortObjects=this.sortObjects,c.drawRanges=this._drawRanges,c.reservedRanges=this._reservedRanges,c.visibility=this._visibility,c.active=this._active,c.bounds=this._bounds.map(g=>({boxInitialized:g.boxInitialized,boxMin:g.box.min.toArray(),boxMax:g.box.max.toArray(),sphereInitialized:g.sphereInitialized,sphereRadius:g.sphere.radius,sphereCenter:g.sphere.center.toArray()})),c.maxGeometryCount=this._maxGeometryCount,c.maxVertexCount=this._maxVertexCount,c.maxIndexCount=this._maxIndexCount,c.geometryInitialized=this._geometryInitialized,c.geometryCount=this._geometryCount,c.matricesTexture=this._matricesTexture.toJSON(l),this.boundingSphere!==null&&(c.boundingSphere={center:c.boundingSphere.center.toArray(),radius:c.boundingSphere.radius}),this.boundingBox!==null&&(c.boundingBox={min:c.boundingBox.min.toArray(),max:c.boundingBox.max.toArray()}));function y(g,G){return g[G.uuid]===void 0&&(g[G.uuid]=G.toJSON(l)),G.uuid}if(this.isScene)this.background&&(this.background.isColor?c.background=this.background.toJSON():this.background.isTexture&&(c.background=this.background.toJSON(l).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(c.environment=this.environment.toJSON(l).uuid);else if(this.isMesh||this.isLine||this.isPoints){c.geometry=y(l.geometries,this.geometry);const g=this.geometry.parameters;if(g!==void 0&&g.shapes!==void 0){const G=g.shapes;if(Array.isArray(G))for(let V=0,Z=G.length;V<Z;V++){const v=G[V];y(l.shapes,v)}else y(l.shapes,G)}}if(this.isSkinnedMesh&&(c.bindMode=this.bindMode,c.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(y(l.skeletons,this.skeleton),c.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const g=[];for(let G=0,V=this.material.length;G<V;G++)g.push(y(l.materials,this.material[G]));c.material=g}else c.material=y(l.materials,this.material);if(this.children.length>0){c.children=[];for(let g=0;g<this.children.length;g++)c.children.push(this.children[g].toJSON(l).object)}if(this.animations.length>0){c.animations=[];for(let g=0;g<this.animations.length;g++){const G=this.animations[g];c.animations.push(y(l.animations,G))}}if(n){const g=S(l.geometries),G=S(l.materials),V=S(l.textures),Z=S(l.images),v=S(l.shapes),ee=S(l.skeletons),te=S(l.animations),he=S(l.nodes);g.length>0&&(t.geometries=g),G.length>0&&(t.materials=G),V.length>0&&(t.textures=V),Z.length>0&&(t.images=Z),v.length>0&&(t.shapes=v),ee.length>0&&(t.skeletons=ee),te.length>0&&(t.animations=te),he.length>0&&(t.nodes=he)}return t.object=c,t;function S(g){const G=[];for(const V in g){const Z=g[V];delete Z.metadata,G.push(Z)}return G}}clone(l){return new this.constructor().copy(this,l)}copy(l,n=!0){if(this.name=l.name,this.up.copy(l.up),this.position.copy(l.position),this.rotation.order=l.rotation.order,this.quaternion.copy(l.quaternion),this.scale.copy(l.scale),this.matrix.copy(l.matrix),this.matrixWorld.copy(l.matrixWorld),this.matrixAutoUpdate=l.matrixAutoUpdate,this.matrixWorldAutoUpdate=l.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=l.matrixWorldNeedsUpdate,this.layers.mask=l.layers.mask,this.visible=l.visible,this.castShadow=l.castShadow,this.receiveShadow=l.receiveShadow,this.frustumCulled=l.frustumCulled,this.renderOrder=l.renderOrder,this.animations=l.animations.slice(),this.userData=JSON.parse(JSON.stringify(l.userData)),n===!0)for(let t=0;t<l.children.length;t++){const c=l.children[t];this.add(c.clone())}return this}}Jf.DEFAULT_UP=new nt(0,1,0);Jf.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jf.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xw=new nt,U6=new nt,pG=new nt,F6=new nt,OP=new nt,gP=new nt,NW=new nt,RG=new nt,mG=new nt,DG=new nt;let MB=!1;class Qf{constructor(l=new nt,n=new nt,t=new nt){this.a=l,this.b=n,this.c=t}static getNormal(l,n,t,c){c.subVectors(t,n),Xw.subVectors(l,n),c.cross(Xw);const y=c.lengthSq();return y>0?c.multiplyScalar(1/Math.sqrt(y)):c.set(0,0,0)}static getBarycoord(l,n,t,c,y){Xw.subVectors(c,n),U6.subVectors(t,n),pG.subVectors(l,n);const S=Xw.dot(Xw),g=Xw.dot(U6),G=Xw.dot(pG),V=U6.dot(U6),Z=U6.dot(pG),v=S*V-g*g;if(v===0)return y.set(0,0,0),null;const ee=1/v,te=(V*G-g*Z)*ee,he=(S*Z-g*G)*ee;return y.set(1-te-he,he,te)}static containsPoint(l,n,t,c){return this.getBarycoord(l,n,t,c,F6)===null?!1:F6.x>=0&&F6.y>=0&&F6.x+F6.y<=1}static getUV(l,n,t,c,y,S,g,G){return MB===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),MB=!0),this.getInterpolation(l,n,t,c,y,S,g,G)}static getInterpolation(l,n,t,c,y,S,g,G){return this.getBarycoord(l,n,t,c,F6)===null?(G.x=0,G.y=0,"z"in G&&(G.z=0),"w"in G&&(G.w=0),null):(G.setScalar(0),G.addScaledVector(y,F6.x),G.addScaledVector(S,F6.y),G.addScaledVector(g,F6.z),G)}static isFrontFacing(l,n,t,c){return Xw.subVectors(t,n),U6.subVectors(l,n),Xw.cross(U6).dot(c)<0}set(l,n,t){return this.a.copy(l),this.b.copy(n),this.c.copy(t),this}setFromPointsAndIndices(l,n,t,c){return this.a.copy(l[n]),this.b.copy(l[t]),this.c.copy(l[c]),this}setFromAttributeAndIndices(l,n,t,c){return this.a.fromBufferAttribute(l,n),this.b.fromBufferAttribute(l,t),this.c.fromBufferAttribute(l,c),this}clone(){return new this.constructor().copy(this)}copy(l){return this.a.copy(l.a),this.b.copy(l.b),this.c.copy(l.c),this}getArea(){return Xw.subVectors(this.c,this.b),U6.subVectors(this.a,this.b),Xw.cross(U6).length()*.5}getMidpoint(l){return l.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(l){return Qf.getNormal(this.a,this.b,this.c,l)}getPlane(l){return l.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(l,n){return Qf.getBarycoord(l,this.a,this.b,this.c,n)}getUV(l,n,t,c,y){return MB===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),MB=!0),Qf.getInterpolation(l,this.a,this.b,this.c,n,t,c,y)}getInterpolation(l,n,t,c,y){return Qf.getInterpolation(l,this.a,this.b,this.c,n,t,c,y)}containsPoint(l){return Qf.containsPoint(l,this.a,this.b,this.c)}isFrontFacing(l){return Qf.isFrontFacing(this.a,this.b,this.c,l)}intersectsBox(l){return l.intersectsTriangle(this)}closestPointToPoint(l,n){const t=this.a,c=this.b,y=this.c;let S,g;OP.subVectors(c,t),gP.subVectors(y,t),RG.subVectors(l,t);const G=OP.dot(RG),V=gP.dot(RG);if(G<=0&&V<=0)return n.copy(t);mG.subVectors(l,c);const Z=OP.dot(mG),v=gP.dot(mG);if(Z>=0&&v<=Z)return n.copy(c);const ee=G*v-Z*V;if(ee<=0&&G>=0&&Z<=0)return S=G/(G-Z),n.copy(t).addScaledVector(OP,S);DG.subVectors(l,y);const te=OP.dot(DG),he=gP.dot(DG);if(he>=0&&te<=he)return n.copy(y);const Te=te*V-G*he;if(Te<=0&&V>=0&&he<=0)return g=V/(V-he),n.copy(t).addScaledVector(gP,g);const oe=Z*he-te*v;if(oe<=0&&v-Z>=0&&te-he>=0)return NW.subVectors(y,c),g=(v-Z)/(v-Z+(te-he)),n.copy(c).addScaledVector(NW,g);const ie=1/(oe+Te+ee);return S=Te*ie,g=ee*ie,n.copy(t).addScaledVector(OP,S).addScaledVector(gP,g)}equals(l){return l.a.equals(this.a)&&l.b.equals(this.b)&&l.c.equals(this.c)}}const Xj={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$D={h:0,s:0,l:0},xB={h:0,s:0,l:0};function NG(e,l,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(l-e)*6*n:n<1/2?l:n<2/3?e+(l-e)*6*(2/3-n):e}class Dl{constructor(l,n,t){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(l,n,t)}set(l,n,t){if(n===void 0&&t===void 0){const c=l;c&&c.isColor?this.copy(c):typeof c=="number"?this.setHex(c):typeof c=="string"&&this.setStyle(c)}else this.setRGB(l,n,t);return this}setScalar(l){return this.r=l,this.g=l,this.b=l,this}setHex(l,n=qf){return l=Math.floor(l),this.r=(l>>16&255)/255,this.g=(l>>8&255)/255,this.b=(l&255)/255,ks.toWorkingColorSpace(this,n),this}setRGB(l,n,t,c=ks.workingColorSpace){return this.r=l,this.g=n,this.b=t,ks.toWorkingColorSpace(this,c),this}setHSL(l,n,t,c=ks.workingColorSpace){if(l=W_(l,1),n=Kf(n,0,1),t=Kf(t,0,1),n===0)this.r=this.g=this.b=t;else{const y=t<=.5?t*(1+n):t+n-t*n,S=2*t-y;this.r=NG(S,y,l+1/3),this.g=NG(S,y,l),this.b=NG(S,y,l-1/3)}return ks.toWorkingColorSpace(this,c),this}setStyle(l,n=qf){function t(y){y!==void 0&&parseFloat(y)<1&&console.warn("THREE.Color: Alpha component of "+l+" will be ignored.")}let c;if(c=/^(\w+)\(([^\)]*)\)/.exec(l)){let y;const S=c[1],g=c[2];switch(S){case"rgb":case"rgba":if(y=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(g))return t(y[4]),this.setRGB(Math.min(255,parseInt(y[1],10))/255,Math.min(255,parseInt(y[2],10))/255,Math.min(255,parseInt(y[3],10))/255,n);if(y=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(g))return t(y[4]),this.setRGB(Math.min(100,parseInt(y[1],10))/100,Math.min(100,parseInt(y[2],10))/100,Math.min(100,parseInt(y[3],10))/100,n);break;case"hsl":case"hsla":if(y=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(g))return t(y[4]),this.setHSL(parseFloat(y[1])/360,parseFloat(y[2])/100,parseFloat(y[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+l)}}else if(c=/^\#([A-Fa-f\d]+)$/.exec(l)){const y=c[1],S=y.length;if(S===3)return this.setRGB(parseInt(y.charAt(0),16)/15,parseInt(y.charAt(1),16)/15,parseInt(y.charAt(2),16)/15,n);if(S===6)return this.setHex(parseInt(y,16),n);console.warn("THREE.Color: Invalid hex color "+l)}else if(l&&l.length>0)return this.setColorName(l,n);return this}setColorName(l,n=qf){const t=Xj[l.toLowerCase()];return t!==void 0?this.setHex(t,n):console.warn("THREE.Color: Unknown color "+l),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(l){return this.r=l.r,this.g=l.g,this.b=l.b,this}copySRGBToLinear(l){return this.r=Ab(l.r),this.g=Ab(l.g),this.b=Ab(l.b),this}copyLinearToSRGB(l){return this.r=hG(l.r),this.g=hG(l.g),this.b=hG(l.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(l=qf){return ks.fromWorkingColorSpace(jI.copy(this),l),Math.round(Kf(jI.r*255,0,255))*65536+Math.round(Kf(jI.g*255,0,255))*256+Math.round(Kf(jI.b*255,0,255))}getHexString(l=qf){return("000000"+this.getHex(l).toString(16)).slice(-6)}getHSL(l,n=ks.workingColorSpace){ks.fromWorkingColorSpace(jI.copy(this),n);const t=jI.r,c=jI.g,y=jI.b,S=Math.max(t,c,y),g=Math.min(t,c,y);let G,V;const Z=(g+S)/2;if(g===S)G=0,V=0;else{const v=S-g;switch(V=Z<=.5?v/(S+g):v/(2-S-g),S){case t:G=(c-y)/v+(c<y?6:0);break;case c:G=(y-t)/v+2;break;case y:G=(t-c)/v+4;break}G/=6}return l.h=G,l.s=V,l.l=Z,l}getRGB(l,n=ks.workingColorSpace){return ks.fromWorkingColorSpace(jI.copy(this),n),l.r=jI.r,l.g=jI.g,l.b=jI.b,l}getStyle(l=qf){ks.fromWorkingColorSpace(jI.copy(this),l);const n=jI.r,t=jI.g,c=jI.b;return l!==qf?`color(${l} ${n.toFixed(3)} ${t.toFixed(3)} ${c.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(t*255)},${Math.round(c*255)})`}offsetHSL(l,n,t){return this.getHSL($D),this.setHSL($D.h+l,$D.s+n,$D.l+t)}add(l){return this.r+=l.r,this.g+=l.g,this.b+=l.b,this}addColors(l,n){return this.r=l.r+n.r,this.g=l.g+n.g,this.b=l.b+n.b,this}addScalar(l){return this.r+=l,this.g+=l,this.b+=l,this}sub(l){return this.r=Math.max(0,this.r-l.r),this.g=Math.max(0,this.g-l.g),this.b=Math.max(0,this.b-l.b),this}multiply(l){return this.r*=l.r,this.g*=l.g,this.b*=l.b,this}multiplyScalar(l){return this.r*=l,this.g*=l,this.b*=l,this}lerp(l,n){return this.r+=(l.r-this.r)*n,this.g+=(l.g-this.g)*n,this.b+=(l.b-this.b)*n,this}lerpColors(l,n,t){return this.r=l.r+(n.r-l.r)*t,this.g=l.g+(n.g-l.g)*t,this.b=l.b+(n.b-l.b)*t,this}lerpHSL(l,n){this.getHSL($D),l.getHSL(xB);const t=GH($D.h,xB.h,n),c=GH($D.s,xB.s,n),y=GH($D.l,xB.l,n);return this.setHSL(t,c,y),this}setFromVector3(l){return this.r=l.x,this.g=l.y,this.b=l.z,this}applyMatrix3(l){const n=this.r,t=this.g,c=this.b,y=l.elements;return this.r=y[0]*n+y[3]*t+y[6]*c,this.g=y[1]*n+y[4]*t+y[7]*c,this.b=y[2]*n+y[5]*t+y[8]*c,this}equals(l){return l.r===this.r&&l.g===this.g&&l.b===this.b}fromArray(l,n=0){return this.r=l[n],this.g=l[n+1],this.b=l[n+2],this}toArray(l=[],n=0){return l[n]=this.r,l[n+1]=this.g,l[n+2]=this.b,l}fromBufferAttribute(l,n){return this.r=l.getX(n),this.g=l.getY(n),this.b=l.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jI=new Dl;Dl.NAMES=Xj;let Wk=0;class pO extends zb{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wk++}),this.uuid=U7(),this.name="",this.type="Material",this.blending=Db,this.side=oR,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$G,this.blendDst=ZG,this.blendEquation=K8,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dl(0,0,0),this.blendAlpha=0,this.depthFunc=ZU,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cW,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=RP,this.stencilZFail=RP,this.stencilZPass=RP,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(l){this._alphaTest>0!=l>0&&this.version++,this._alphaTest=l}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(l){if(l!==void 0)for(const n in l){const t=l[n];if(t===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const c=this[n];if(c===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}c&&c.isColor?c.set(t):c&&c.isVector3&&t&&t.isVector3?c.copy(t):this[n]=t}}toJSON(l){const n=l===void 0||typeof l=="string";n&&(l={textures:{},images:{}});const t={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen!==void 0&&(t.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(t.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(t.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(t.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(t.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(l).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(l).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(l).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(t.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(t.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(t.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(t.iridescenceMap=this.iridescenceMap.toJSON(l).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(t.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(l).uuid),this.anisotropy!==void 0&&(t.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(t.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(t.anisotropyMap=this.anisotropyMap.toJSON(l).uuid),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(l).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(l).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(l).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(l).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(l).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(l).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(l).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(l).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(l).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(l).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(l).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(l).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(t.specularIntensityMap=this.specularIntensityMap.toJSON(l).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(t.specularColorMap=this.specularColorMap.toJSON(l).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(l).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(l).uuid),this.transmission!==void 0&&(t.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(t.transmissionMap=this.transmissionMap.toJSON(l).uuid),this.thickness!==void 0&&(t.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(t.thicknessMap=this.thicknessMap.toJSON(l).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(t.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(t.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==Db&&(t.blending=this.blending),this.side!==oR&&(t.side=this.side),this.vertexColors===!0&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=!0),this.blendSrc!==$G&&(t.blendSrc=this.blendSrc),this.blendDst!==ZG&&(t.blendDst=this.blendDst),this.blendEquation!==K8&&(t.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(t.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(t.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(t.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(t.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(t.blendAlpha=this.blendAlpha),this.depthFunc!==ZU&&(t.depthFunc=this.depthFunc),this.depthTest===!1&&(t.depthTest=this.depthTest),this.depthWrite===!1&&(t.depthWrite=this.depthWrite),this.colorWrite===!1&&(t.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(t.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cW&&(t.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(t.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(t.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==RP&&(t.stencilFail=this.stencilFail),this.stencilZFail!==RP&&(t.stencilZFail=this.stencilZFail),this.stencilZPass!==RP&&(t.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(t.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaHash===!0&&(t.alphaHash=!0),this.alphaToCoverage===!0&&(t.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=!0),this.forceSinglePass===!0&&(t.forceSinglePass=!0),this.wireframe===!0&&(t.wireframe=!0),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(t.flatShading=!0),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),this.fog===!1&&(t.fog=!1),Object.keys(this.userData).length>0&&(t.userData=this.userData);function c(y){const S=[];for(const g in y){const G=y[g];delete G.metadata,S.push(G)}return S}if(n){const y=c(l.textures),S=c(l.images);y.length>0&&(t.textures=y),S.length>0&&(t.images=S)}return t}clone(){return new this.constructor().copy(this)}copy(l){this.name=l.name,this.blending=l.blending,this.side=l.side,this.vertexColors=l.vertexColors,this.opacity=l.opacity,this.transparent=l.transparent,this.blendSrc=l.blendSrc,this.blendDst=l.blendDst,this.blendEquation=l.blendEquation,this.blendSrcAlpha=l.blendSrcAlpha,this.blendDstAlpha=l.blendDstAlpha,this.blendEquationAlpha=l.blendEquationAlpha,this.blendColor.copy(l.blendColor),this.blendAlpha=l.blendAlpha,this.depthFunc=l.depthFunc,this.depthTest=l.depthTest,this.depthWrite=l.depthWrite,this.stencilWriteMask=l.stencilWriteMask,this.stencilFunc=l.stencilFunc,this.stencilRef=l.stencilRef,this.stencilFuncMask=l.stencilFuncMask,this.stencilFail=l.stencilFail,this.stencilZFail=l.stencilZFail,this.stencilZPass=l.stencilZPass,this.stencilWrite=l.stencilWrite;const n=l.clippingPlanes;let t=null;if(n!==null){const c=n.length;t=new Array(c);for(let y=0;y!==c;++y)t[y]=n[y].clone()}return this.clippingPlanes=t,this.clipIntersection=l.clipIntersection,this.clipShadows=l.clipShadows,this.shadowSide=l.shadowSide,this.colorWrite=l.colorWrite,this.precision=l.precision,this.polygonOffset=l.polygonOffset,this.polygonOffsetFactor=l.polygonOffsetFactor,this.polygonOffsetUnits=l.polygonOffsetUnits,this.dithering=l.dithering,this.alphaTest=l.alphaTest,this.alphaHash=l.alphaHash,this.alphaToCoverage=l.alphaToCoverage,this.premultipliedAlpha=l.premultipliedAlpha,this.forceSinglePass=l.forceSinglePass,this.visible=l.visible,this.toneMapped=l.toneMapped,this.userData=JSON.parse(JSON.stringify(l.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(l){l===!0&&this.version++}}class vj extends pO{constructor(l){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dl(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=F_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(l)}copy(l){return super.copy(l),this.color.copy(l.color),this.map=l.map,this.lightMap=l.lightMap,this.lightMapIntensity=l.lightMapIntensity,this.aoMap=l.aoMap,this.aoMapIntensity=l.aoMapIntensity,this.specularMap=l.specularMap,this.alphaMap=l.alphaMap,this.envMap=l.envMap,this.combine=l.combine,this.reflectivity=l.reflectivity,this.refractionRatio=l.refractionRatio,this.wireframe=l.wireframe,this.wireframeLinewidth=l.wireframeLinewidth,this.wireframeLinecap=l.wireframeLinecap,this.wireframeLinejoin=l.wireframeLinejoin,this.fog=l.fog,this}}const Ri=new nt,HB=new Nl;class Xf{constructor(l,n,t=!1){if(Array.isArray(l))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=l,this.itemSize=n,this.count=l!==void 0?l.length/n:0,this.normalized=t,this.usage=t_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=MN,this.version=0}onUploadCallback(){}set needsUpdate(l){l===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(l){return this.usage=l,this}addUpdateRange(l,n){this.updateRanges.push({start:l,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(l){return this.name=l.name,this.array=new l.array.constructor(l.array),this.itemSize=l.itemSize,this.count=l.count,this.normalized=l.normalized,this.usage=l.usage,this.gpuType=l.gpuType,this}copyAt(l,n,t){l*=this.itemSize,t*=n.itemSize;for(let c=0,y=this.itemSize;c<y;c++)this.array[l+c]=n.array[t+c];return this}copyArray(l){return this.array.set(l),this}applyMatrix3(l){if(this.itemSize===2)for(let n=0,t=this.count;n<t;n++)HB.fromBufferAttribute(this,n),HB.applyMatrix3(l),this.setXY(n,HB.x,HB.y);else if(this.itemSize===3)for(let n=0,t=this.count;n<t;n++)Ri.fromBufferAttribute(this,n),Ri.applyMatrix3(l),this.setXYZ(n,Ri.x,Ri.y,Ri.z);return this}applyMatrix4(l){for(let n=0,t=this.count;n<t;n++)Ri.fromBufferAttribute(this,n),Ri.applyMatrix4(l),this.setXYZ(n,Ri.x,Ri.y,Ri.z);return this}applyNormalMatrix(l){for(let n=0,t=this.count;n<t;n++)Ri.fromBufferAttribute(this,n),Ri.applyNormalMatrix(l),this.setXYZ(n,Ri.x,Ri.y,Ri.z);return this}transformDirection(l){for(let n=0,t=this.count;n<t;n++)Ri.fromBufferAttribute(this,n),Ri.transformDirection(l),this.setXYZ(n,Ri.x,Ri.y,Ri.z);return this}set(l,n=0){return this.array.set(l,n),this}getComponent(l,n){let t=this.array[l*this.itemSize+n];return this.normalized&&(t=tp(t,this.array)),t}setComponent(l,n,t){return this.normalized&&(t=zs(t,this.array)),this.array[l*this.itemSize+n]=t,this}getX(l){let n=this.array[l*this.itemSize];return this.normalized&&(n=tp(n,this.array)),n}setX(l,n){return this.normalized&&(n=zs(n,this.array)),this.array[l*this.itemSize]=n,this}getY(l){let n=this.array[l*this.itemSize+1];return this.normalized&&(n=tp(n,this.array)),n}setY(l,n){return this.normalized&&(n=zs(n,this.array)),this.array[l*this.itemSize+1]=n,this}getZ(l){let n=this.array[l*this.itemSize+2];return this.normalized&&(n=tp(n,this.array)),n}setZ(l,n){return this.normalized&&(n=zs(n,this.array)),this.array[l*this.itemSize+2]=n,this}getW(l){let n=this.array[l*this.itemSize+3];return this.normalized&&(n=tp(n,this.array)),n}setW(l,n){return this.normalized&&(n=zs(n,this.array)),this.array[l*this.itemSize+3]=n,this}setXY(l,n,t){return l*=this.itemSize,this.normalized&&(n=zs(n,this.array),t=zs(t,this.array)),this.array[l+0]=n,this.array[l+1]=t,this}setXYZ(l,n,t,c){return l*=this.itemSize,this.normalized&&(n=zs(n,this.array),t=zs(t,this.array),c=zs(c,this.array)),this.array[l+0]=n,this.array[l+1]=t,this.array[l+2]=c,this}setXYZW(l,n,t,c,y){return l*=this.itemSize,this.normalized&&(n=zs(n,this.array),t=zs(t,this.array),c=zs(c,this.array),y=zs(y,this.array)),this.array[l+0]=n,this.array[l+1]=t,this.array[l+2]=c,this.array[l+3]=y,this}onUpload(l){return this.onUploadCallback=l,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const l={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(l.name=this.name),this.usage!==t_&&(l.usage=this.usage),l}}class eY extends Xf{constructor(l,n,t){super(new Uint16Array(l),n,t)}}class tY extends Xf{constructor(l,n,t){super(new Uint32Array(l),n,t)}}class Qu extends Xf{constructor(l,n,t){super(new Float32Array(l),n,t)}}let jk=0;const o2=new Sl,AG=new Jf,PP=new nt,P4=new sc,Zx=new sc,Mc=new nt;class tc extends zb{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jk++}),this.uuid=U7(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(l){return Array.isArray(l)?this.index=new(Qj(l)?tY:eY)(l,1):this.index=l,this}getAttribute(l){return this.attributes[l]}setAttribute(l,n){return this.attributes[l]=n,this}deleteAttribute(l){return delete this.attributes[l],this}hasAttribute(l){return this.attributes[l]!==void 0}addGroup(l,n,t=0){this.groups.push({start:l,count:n,materialIndex:t})}clearGroups(){this.groups=[]}setDrawRange(l,n){this.drawRange.start=l,this.drawRange.count=n}applyMatrix4(l){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(l),n.needsUpdate=!0);const t=this.attributes.normal;if(t!==void 0){const y=new Wl().getNormalMatrix(l);t.applyNormalMatrix(y),t.needsUpdate=!0}const c=this.attributes.tangent;return c!==void 0&&(c.transformDirection(l),c.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(l){return o2.makeRotationFromQuaternion(l),this.applyMatrix4(o2),this}rotateX(l){return o2.makeRotationX(l),this.applyMatrix4(o2),this}rotateY(l){return o2.makeRotationY(l),this.applyMatrix4(o2),this}rotateZ(l){return o2.makeRotationZ(l),this.applyMatrix4(o2),this}translate(l,n,t){return o2.makeTranslation(l,n,t),this.applyMatrix4(o2),this}scale(l,n,t){return o2.makeScale(l,n,t),this.applyMatrix4(o2),this}lookAt(l){return AG.lookAt(l),AG.updateMatrix(),this.applyMatrix4(AG.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(PP).negate(),this.translate(PP.x,PP.y,PP.z),this}setFromPoints(l){const n=[];for(let t=0,c=l.length;t<c;t++){const y=l[t];n.push(y.x,y.y,y.z||0)}return this.setAttribute("position",new Qu(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sc);const l=this.attributes.position,n=this.morphAttributes.position;if(l&&l.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new nt(-1/0,-1/0,-1/0),new nt(1/0,1/0,1/0));return}if(l!==void 0){if(this.boundingBox.setFromBufferAttribute(l),n)for(let t=0,c=n.length;t<c;t++){const y=n[t];P4.setFromBufferAttribute(y),this.morphTargetsRelative?(Mc.addVectors(this.boundingBox.min,P4.min),this.boundingBox.expandByPoint(Mc),Mc.addVectors(this.boundingBox.max,P4.max),this.boundingBox.expandByPoint(Mc)):(this.boundingBox.expandByPoint(P4.min),this.boundingBox.expandByPoint(P4.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new TO);const l=this.attributes.position,n=this.morphAttributes.position;if(l&&l.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new nt,1/0);return}if(l){const t=this.boundingSphere.center;if(P4.setFromBufferAttribute(l),n)for(let y=0,S=n.length;y<S;y++){const g=n[y];Zx.setFromBufferAttribute(g),this.morphTargetsRelative?(Mc.addVectors(P4.min,Zx.min),P4.expandByPoint(Mc),Mc.addVectors(P4.max,Zx.max),P4.expandByPoint(Mc)):(P4.expandByPoint(Zx.min),P4.expandByPoint(Zx.max))}P4.getCenter(t);let c=0;for(let y=0,S=l.count;y<S;y++)Mc.fromBufferAttribute(l,y),c=Math.max(c,t.distanceToSquared(Mc));if(n)for(let y=0,S=n.length;y<S;y++){const g=n[y],G=this.morphTargetsRelative;for(let V=0,Z=g.count;V<Z;V++)Mc.fromBufferAttribute(g,V),G&&(PP.fromBufferAttribute(l,V),Mc.add(PP)),c=Math.max(c,t.distanceToSquared(Mc))}this.boundingSphere.radius=Math.sqrt(c),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const l=this.index,n=this.attributes;if(l===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const t=l.array,c=n.position.array,y=n.normal.array,S=n.uv.array,g=c.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xf(new Float32Array(4*g),4));const G=this.getAttribute("tangent").array,V=[],Z=[];for(let Le=0;Le<g;Le++)V[Le]=new nt,Z[Le]=new nt;const v=new nt,ee=new nt,te=new nt,he=new Nl,Te=new Nl,oe=new Nl,ie=new nt,De=new nt;function we(Le,ve,st){v.fromArray(c,Le*3),ee.fromArray(c,ve*3),te.fromArray(c,st*3),he.fromArray(S,Le*2),Te.fromArray(S,ve*2),oe.fromArray(S,st*2),ee.sub(v),te.sub(v),Te.sub(he),oe.sub(he);const ft=1/(Te.x*oe.y-oe.x*Te.y);isFinite(ft)&&(ie.copy(ee).multiplyScalar(oe.y).addScaledVector(te,-Te.y).multiplyScalar(ft),De.copy(te).multiplyScalar(Te.x).addScaledVector(ee,-oe.x).multiplyScalar(ft),V[Le].add(ie),V[ve].add(ie),V[st].add(ie),Z[Le].add(De),Z[ve].add(De),Z[st].add(De))}let Ae=this.groups;Ae.length===0&&(Ae=[{start:0,count:t.length}]);for(let Le=0,ve=Ae.length;Le<ve;++Le){const st=Ae[Le],ft=st.start,et=st.count;for(let at=ft,It=ft+et;at<It;at+=3)we(t[at+0],t[at+1],t[at+2])}const Ye=new nt,Ve=new nt,_e=new nt,Xe=new nt;function ge(Le){_e.fromArray(y,Le*3),Xe.copy(_e);const ve=V[Le];Ye.copy(ve),Ye.sub(_e.multiplyScalar(_e.dot(ve))).normalize(),Ve.crossVectors(Xe,ve);const ft=Ve.dot(Z[Le])<0?-1:1;G[Le*4]=Ye.x,G[Le*4+1]=Ye.y,G[Le*4+2]=Ye.z,G[Le*4+3]=ft}for(let Le=0,ve=Ae.length;Le<ve;++Le){const st=Ae[Le],ft=st.start,et=st.count;for(let at=ft,It=ft+et;at<It;at+=3)ge(t[at+0]),ge(t[at+1]),ge(t[at+2])}}computeVertexNormals(){const l=this.index,n=this.getAttribute("position");if(n!==void 0){let t=this.getAttribute("normal");if(t===void 0)t=new Xf(new Float32Array(n.count*3),3),this.setAttribute("normal",t);else for(let ee=0,te=t.count;ee<te;ee++)t.setXYZ(ee,0,0,0);const c=new nt,y=new nt,S=new nt,g=new nt,G=new nt,V=new nt,Z=new nt,v=new nt;if(l)for(let ee=0,te=l.count;ee<te;ee+=3){const he=l.getX(ee+0),Te=l.getX(ee+1),oe=l.getX(ee+2);c.fromBufferAttribute(n,he),y.fromBufferAttribute(n,Te),S.fromBufferAttribute(n,oe),Z.subVectors(S,y),v.subVectors(c,y),Z.cross(v),g.fromBufferAttribute(t,he),G.fromBufferAttribute(t,Te),V.fromBufferAttribute(t,oe),g.add(Z),G.add(Z),V.add(Z),t.setXYZ(he,g.x,g.y,g.z),t.setXYZ(Te,G.x,G.y,G.z),t.setXYZ(oe,V.x,V.y,V.z)}else for(let ee=0,te=n.count;ee<te;ee+=3)c.fromBufferAttribute(n,ee+0),y.fromBufferAttribute(n,ee+1),S.fromBufferAttribute(n,ee+2),Z.subVectors(S,y),v.subVectors(c,y),Z.cross(v),t.setXYZ(ee+0,Z.x,Z.y,Z.z),t.setXYZ(ee+1,Z.x,Z.y,Z.z),t.setXYZ(ee+2,Z.x,Z.y,Z.z);this.normalizeNormals(),t.needsUpdate=!0}}normalizeNormals(){const l=this.attributes.normal;for(let n=0,t=l.count;n<t;n++)Mc.fromBufferAttribute(l,n),Mc.normalize(),l.setXYZ(n,Mc.x,Mc.y,Mc.z)}toNonIndexed(){function l(g,G){const V=g.array,Z=g.itemSize,v=g.normalized,ee=new V.constructor(G.length*Z);let te=0,he=0;for(let Te=0,oe=G.length;Te<oe;Te++){g.isInterleavedBufferAttribute?te=G[Te]*g.data.stride+g.offset:te=G[Te]*Z;for(let ie=0;ie<Z;ie++)ee[he++]=V[te++]}return new Xf(ee,Z,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new tc,t=this.index.array,c=this.attributes;for(const g in c){const G=c[g],V=l(G,t);n.setAttribute(g,V)}const y=this.morphAttributes;for(const g in y){const G=[],V=y[g];for(let Z=0,v=V.length;Z<v;Z++){const ee=V[Z],te=l(ee,t);G.push(te)}n.morphAttributes[g]=G}n.morphTargetsRelative=this.morphTargetsRelative;const S=this.groups;for(let g=0,G=S.length;g<G;g++){const V=S[g];n.addGroup(V.start,V.count,V.materialIndex)}return n}toJSON(){const l={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),Object.keys(this.userData).length>0&&(l.userData=this.userData),this.parameters!==void 0){const G=this.parameters;for(const V in G)G[V]!==void 0&&(l[V]=G[V]);return l}l.data={attributes:{}};const n=this.index;n!==null&&(l.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const t=this.attributes;for(const G in t){const V=t[G];l.data.attributes[G]=V.toJSON(l.data)}const c={};let y=!1;for(const G in this.morphAttributes){const V=this.morphAttributes[G],Z=[];for(let v=0,ee=V.length;v<ee;v++){const te=V[v];Z.push(te.toJSON(l.data))}Z.length>0&&(c[G]=Z,y=!0)}y&&(l.data.morphAttributes=c,l.data.morphTargetsRelative=this.morphTargetsRelative);const S=this.groups;S.length>0&&(l.data.groups=JSON.parse(JSON.stringify(S)));const g=this.boundingSphere;return g!==null&&(l.data.boundingSphere={center:g.center.toArray(),radius:g.radius}),l}clone(){return new this.constructor().copy(this)}copy(l){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=l.name;const t=l.index;t!==null&&this.setIndex(t.clone(n));const c=l.attributes;for(const V in c){const Z=c[V];this.setAttribute(V,Z.clone(n))}const y=l.morphAttributes;for(const V in y){const Z=[],v=y[V];for(let ee=0,te=v.length;ee<te;ee++)Z.push(v[ee].clone(n));this.morphAttributes[V]=Z}this.morphTargetsRelative=l.morphTargetsRelative;const S=l.groups;for(let V=0,Z=S.length;V<Z;V++){const v=S[V];this.addGroup(v.start,v.count,v.materialIndex)}const g=l.boundingBox;g!==null&&(this.boundingBox=g.clone());const G=l.boundingSphere;return G!==null&&(this.boundingSphere=G.clone()),this.drawRange.start=l.drawRange.start,this.drawRange.count=l.drawRange.count,this.userData=l.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const AW=new Sl,r8=new uF,BB=new TO,SW=new nt,bP=new nt,CP=new nt,MP=new nt,SG=new nt,UB=new nt,FB=new Nl,GB=new Nl,_B=new Nl,LW=new nt,OW=new nt,gW=new nt,VB=new nt,WB=new nt;class I2 extends Jf{constructor(l=new tc,n=new vj){super(),this.isMesh=!0,this.type="Mesh",this.geometry=l,this.material=n,this.updateMorphTargets()}copy(l,n){return super.copy(l,n),l.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=l.morphTargetInfluences.slice()),l.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},l.morphTargetDictionary)),this.material=Array.isArray(l.material)?l.material.slice():l.material,this.geometry=l.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,t=Object.keys(n);if(t.length>0){const c=n[t[0]];if(c!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let y=0,S=c.length;y<S;y++){const g=c[y].name||String(y);this.morphTargetInfluences.push(0),this.morphTargetDictionary[g]=y}}}}getVertexPosition(l,n){const t=this.geometry,c=t.attributes.position,y=t.morphAttributes.position,S=t.morphTargetsRelative;n.fromBufferAttribute(c,l);const g=this.morphTargetInfluences;if(y&&g){UB.set(0,0,0);for(let G=0,V=y.length;G<V;G++){const Z=g[G],v=y[G];Z!==0&&(SG.fromBufferAttribute(v,l),S?UB.addScaledVector(SG,Z):UB.addScaledVector(SG.sub(n),Z))}n.add(UB)}return n}raycast(l,n){const t=this.geometry,c=this.material,y=this.matrixWorld;c!==void 0&&(t.boundingSphere===null&&t.computeBoundingSphere(),BB.copy(t.boundingSphere),BB.applyMatrix4(y),r8.copy(l.ray).recast(l.near),!(BB.containsPoint(r8.origin)===!1&&(r8.intersectSphere(BB,SW)===null||r8.origin.distanceToSquared(SW)>(l.far-l.near)**2))&&(AW.copy(y).invert(),r8.copy(l.ray).applyMatrix4(AW),!(t.boundingBox!==null&&r8.intersectsBox(t.boundingBox)===!1)&&this._computeIntersections(l,n,r8)))}_computeIntersections(l,n,t){let c;const y=this.geometry,S=this.material,g=y.index,G=y.attributes.position,V=y.attributes.uv,Z=y.attributes.uv1,v=y.attributes.normal,ee=y.groups,te=y.drawRange;if(g!==null)if(Array.isArray(S))for(let he=0,Te=ee.length;he<Te;he++){const oe=ee[he],ie=S[oe.materialIndex],De=Math.max(oe.start,te.start),we=Math.min(g.count,Math.min(oe.start+oe.count,te.start+te.count));for(let Ae=De,Ye=we;Ae<Ye;Ae+=3){const Ve=g.getX(Ae),_e=g.getX(Ae+1),Xe=g.getX(Ae+2);c=jB(this,ie,l,t,V,Z,v,Ve,_e,Xe),c&&(c.faceIndex=Math.floor(Ae/3),c.face.materialIndex=oe.materialIndex,n.push(c))}}else{const he=Math.max(0,te.start),Te=Math.min(g.count,te.start+te.count);for(let oe=he,ie=Te;oe<ie;oe+=3){const De=g.getX(oe),we=g.getX(oe+1),Ae=g.getX(oe+2);c=jB(this,S,l,t,V,Z,v,De,we,Ae),c&&(c.faceIndex=Math.floor(oe/3),n.push(c))}}else if(G!==void 0)if(Array.isArray(S))for(let he=0,Te=ee.length;he<Te;he++){const oe=ee[he],ie=S[oe.materialIndex],De=Math.max(oe.start,te.start),we=Math.min(G.count,Math.min(oe.start+oe.count,te.start+te.count));for(let Ae=De,Ye=we;Ae<Ye;Ae+=3){const Ve=Ae,_e=Ae+1,Xe=Ae+2;c=jB(this,ie,l,t,V,Z,v,Ve,_e,Xe),c&&(c.faceIndex=Math.floor(Ae/3),c.face.materialIndex=oe.materialIndex,n.push(c))}}else{const he=Math.max(0,te.start),Te=Math.min(G.count,te.start+te.count);for(let oe=he,ie=Te;oe<ie;oe+=3){const De=oe,we=oe+1,Ae=oe+2;c=jB(this,S,l,t,V,Z,v,De,we,Ae),c&&(c.faceIndex=Math.floor(oe/3),n.push(c))}}}}function Yk(e,l,n,t,c,y,S,g){let G;if(l.side===D3?G=t.intersectTriangle(S,y,c,!0,g):G=t.intersectTriangle(c,y,S,l.side===oR,g),G===null)return null;WB.copy(g),WB.applyMatrix4(e.matrixWorld);const V=n.ray.origin.distanceTo(WB);return V<n.near||V>n.far?null:{distance:V,point:WB.clone(),object:e}}function jB(e,l,n,t,c,y,S,g,G,V){e.getVertexPosition(g,bP),e.getVertexPosition(G,CP),e.getVertexPosition(V,MP);const Z=Yk(e,l,n,t,bP,CP,MP,VB);if(Z){c&&(FB.fromBufferAttribute(c,g),GB.fromBufferAttribute(c,G),_B.fromBufferAttribute(c,V),Z.uv=Qf.getInterpolation(VB,bP,CP,MP,FB,GB,_B,new Nl)),y&&(FB.fromBufferAttribute(y,g),GB.fromBufferAttribute(y,G),_B.fromBufferAttribute(y,V),Z.uv1=Qf.getInterpolation(VB,bP,CP,MP,FB,GB,_B,new Nl),Z.uv2=Z.uv1),S&&(LW.fromBufferAttribute(S,g),OW.fromBufferAttribute(S,G),gW.fromBufferAttribute(S,V),Z.normal=Qf.getInterpolation(VB,bP,CP,MP,LW,OW,gW,new nt),Z.normal.dot(t.direction)>0&&Z.normal.multiplyScalar(-1));const v={a:g,b:G,c:V,normal:new nt,materialIndex:0};Qf.getNormal(bP,CP,MP,v.normal),Z.face=v}return Z}class cB extends tc{constructor(l=1,n=1,t=1,c=1,y=1,S=1){super(),this.type="BoxGeometry",this.parameters={width:l,height:n,depth:t,widthSegments:c,heightSegments:y,depthSegments:S};const g=this;c=Math.floor(c),y=Math.floor(y),S=Math.floor(S);const G=[],V=[],Z=[],v=[];let ee=0,te=0;he("z","y","x",-1,-1,t,n,l,S,y,0),he("z","y","x",1,-1,t,n,-l,S,y,1),he("x","z","y",1,1,l,t,n,c,S,2),he("x","z","y",1,-1,l,t,-n,c,S,3),he("x","y","z",1,-1,l,n,t,c,y,4),he("x","y","z",-1,-1,l,n,-t,c,y,5),this.setIndex(G),this.setAttribute("position",new Qu(V,3)),this.setAttribute("normal",new Qu(Z,3)),this.setAttribute("uv",new Qu(v,2));function he(Te,oe,ie,De,we,Ae,Ye,Ve,_e,Xe,ge){const Le=Ae/_e,ve=Ye/Xe,st=Ae/2,ft=Ye/2,et=Ve/2,at=_e+1,It=Xe+1;let St=0,bt=0;const Ct=new nt;for(let Ft=0;Ft<It;Ft++){const Ht=Ft*ve-ft;for(let Ut=0;Ut<at;Ut++){const Lt=Ut*Le-st;Ct[Te]=Lt*De,Ct[oe]=Ht*we,Ct[ie]=et,V.push(Ct.x,Ct.y,Ct.z),Ct[Te]=0,Ct[oe]=0,Ct[ie]=Ve>0?1:-1,Z.push(Ct.x,Ct.y,Ct.z),v.push(Ut/_e),v.push(1-Ft/Xe),St+=1}}for(let Ft=0;Ft<Xe;Ft++)for(let Ht=0;Ht<_e;Ht++){const Ut=ee+Ht+at*Ft,Lt=ee+Ht+at*(Ft+1),Bt=ee+(Ht+1)+at*(Ft+1),Xt=ee+(Ht+1)+at*Ft;G.push(Ut,Lt,Xt),G.push(Lt,Bt,Xt),bt+=6}g.addGroup(te,bt,ge),te+=bt,ee+=St}}copy(l){return super.copy(l),this.parameters=Object.assign({},l.parameters),this}static fromJSON(l){return new cB(l.width,l.height,l.depth,l.widthSegments,l.heightSegments,l.depthSegments)}}function Cb(e){const l={};for(const n in e){l[n]={};for(const t in e[n]){const c=e[n][t];c&&(c.isColor||c.isMatrix3||c.isMatrix4||c.isVector2||c.isVector3||c.isVector4||c.isTexture||c.isQuaternion)?c.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),l[n][t]=null):l[n][t]=c.clone():Array.isArray(c)?l[n][t]=c.slice():l[n][t]=c}}return l}function t3(e){const l={};for(let n=0;n<e.length;n++){const t=Cb(e[n]);for(const c in t)l[c]=t[c]}return l}function zk(e){const l=[];for(let n=0;n<e.length;n++)l.push(e[n].clone());return l}function nY(e){return e.getRenderTarget()===null?e.outputColorSpace:ks.workingColorSpace}const kk={clone:Cb,merge:t3};var qk=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kk=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fL extends pO{constructor(l){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qk,this.fragmentShader=Kk,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,l!==void 0&&this.setValues(l)}copy(l){return super.copy(l),this.fragmentShader=l.fragmentShader,this.vertexShader=l.vertexShader,this.uniforms=Cb(l.uniforms),this.uniformsGroups=zk(l.uniformsGroups),this.defines=Object.assign({},l.defines),this.wireframe=l.wireframe,this.wireframeLinewidth=l.wireframeLinewidth,this.fog=l.fog,this.lights=l.lights,this.clipping=l.clipping,this.extensions=Object.assign({},l.extensions),this.glslVersion=l.glslVersion,this}toJSON(l){const n=super.toJSON(l);n.glslVersion=this.glslVersion,n.uniforms={};for(const c in this.uniforms){const S=this.uniforms[c].value;S&&S.isTexture?n.uniforms[c]={type:"t",value:S.toJSON(l).uuid}:S&&S.isColor?n.uniforms[c]={type:"c",value:S.getHex()}:S&&S.isVector2?n.uniforms[c]={type:"v2",value:S.toArray()}:S&&S.isVector3?n.uniforms[c]={type:"v3",value:S.toArray()}:S&&S.isVector4?n.uniforms[c]={type:"v4",value:S.toArray()}:S&&S.isMatrix3?n.uniforms[c]={type:"m3",value:S.toArray()}:S&&S.isMatrix4?n.uniforms[c]={type:"m4",value:S.toArray()}:n.uniforms[c]={value:S}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const t={};for(const c in this.extensions)this.extensions[c]===!0&&(t[c]=!0);return Object.keys(t).length>0&&(n.extensions=t),n}}class lY extends Jf{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Sl,this.projectionMatrix=new Sl,this.projectionMatrixInverse=new Sl,this.coordinateSystem=i7}copy(l,n){return super.copy(l,n),this.matrixWorldInverse.copy(l.matrixWorldInverse),this.projectionMatrix.copy(l.projectionMatrix),this.projectionMatrixInverse.copy(l.projectionMatrixInverse),this.coordinateSystem=l.coordinateSystem,this}getWorldDirection(l){return super.getWorldDirection(l).negate()}updateMatrixWorld(l){super.updateMatrixWorld(l),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(l,n){super.updateWorldMatrix(l,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class nE extends lY{constructor(l=50,n=1,t=.1,c=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=l,this.zoom=1,this.near=t,this.far=c,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(l,n){return super.copy(l,n),this.fov=l.fov,this.zoom=l.zoom,this.near=l.near,this.far=l.far,this.focus=l.focus,this.aspect=l.aspect,this.view=l.view===null?null:Object.assign({},l.view),this.filmGauge=l.filmGauge,this.filmOffset=l.filmOffset,this}setFocalLength(l){const n=.5*this.getFilmHeight()/l;this.fov=zH*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const l=Math.tan(Nb*.5*this.fov);return .5*this.getFilmHeight()/l}getEffectiveFOV(){return zH*2*Math.atan(Math.tan(Nb*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(l,n,t,c,y,S){this.aspect=l/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=l,this.view.fullHeight=n,this.view.offsetX=t,this.view.offsetY=c,this.view.width=y,this.view.height=S,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const l=this.near;let n=l*Math.tan(Nb*.5*this.fov)/this.zoom,t=2*n,c=this.aspect*t,y=-.5*c;const S=this.view;if(this.view!==null&&this.view.enabled){const G=S.fullWidth,V=S.fullHeight;y+=S.offsetX*c/G,n-=S.offsetY*t/V,c*=S.width/G,t*=S.height/V}const g=this.filmOffset;g!==0&&(y+=l*g/this.getFilmWidth()),this.projectionMatrix.makePerspective(y,y+c,n,n-t,l,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(l){const n=super.toJSON(l);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const xP=-90,HP=1;class Qk extends Jf{constructor(l,n,t){super(),this.type="CubeCamera",this.renderTarget=t,this.coordinateSystem=null,this.activeMipmapLevel=0;const c=new nE(xP,HP,l,n);c.layers=this.layers,this.add(c);const y=new nE(xP,HP,l,n);y.layers=this.layers,this.add(y);const S=new nE(xP,HP,l,n);S.layers=this.layers,this.add(S);const g=new nE(xP,HP,l,n);g.layers=this.layers,this.add(g);const G=new nE(xP,HP,l,n);G.layers=this.layers,this.add(G);const V=new nE(xP,HP,l,n);V.layers=this.layers,this.add(V)}updateCoordinateSystem(){const l=this.coordinateSystem,n=this.children.concat(),[t,c,y,S,g,G]=n;for(const V of n)this.remove(V);if(l===i7)t.up.set(0,1,0),t.lookAt(1,0,0),c.up.set(0,1,0),c.lookAt(-1,0,0),y.up.set(0,0,-1),y.lookAt(0,1,0),S.up.set(0,0,1),S.lookAt(0,-1,0),g.up.set(0,1,0),g.lookAt(0,0,1),G.up.set(0,1,0),G.lookAt(0,0,-1);else if(l===eF)t.up.set(0,-1,0),t.lookAt(-1,0,0),c.up.set(0,-1,0),c.lookAt(1,0,0),y.up.set(0,0,1),y.lookAt(0,1,0),S.up.set(0,0,-1),S.lookAt(0,-1,0),g.up.set(0,-1,0),g.lookAt(0,0,1),G.up.set(0,-1,0),G.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+l);for(const V of n)this.add(V),V.updateMatrixWorld()}update(l,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:t,activeMipmapLevel:c}=this;this.coordinateSystem!==l.coordinateSystem&&(this.coordinateSystem=l.coordinateSystem,this.updateCoordinateSystem());const[y,S,g,G,V,Z]=this.children,v=l.getRenderTarget(),ee=l.getActiveCubeFace(),te=l.getActiveMipmapLevel(),he=l.xr.enabled;l.xr.enabled=!1;const Te=t.texture.generateMipmaps;t.texture.generateMipmaps=!1,l.setRenderTarget(t,0,c),l.render(n,y),l.setRenderTarget(t,1,c),l.render(n,S),l.setRenderTarget(t,2,c),l.render(n,g),l.setRenderTarget(t,3,c),l.render(n,G),l.setRenderTarget(t,4,c),l.render(n,V),t.texture.generateMipmaps=Te,l.setRenderTarget(t,5,c),l.render(n,Z),l.setRenderTarget(v,ee,te),l.xr.enabled=he,t.texture.needsPMREMUpdate=!0}}class sY extends p0{constructor(l,n,t,c,y,S,g,G,V,Z){l=l!==void 0?l:[],n=n!==void 0?n:gb,super(l,n,t,c,y,S,g,G,V,Z),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(l){this.image=l}}class $k extends jN{constructor(l=1,n={}){super(l,l,n),this.isWebGLCubeRenderTarget=!0;const t={width:l,height:l,depth:1},c=[t,t,t,t,t,t];n.encoding!==void 0&&(_H("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===J8?qf:f2),this.texture=new sY(c,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:h2}fromEquirectangularTexture(l,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const t={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},c=new cB(5,5,5),y=new fL({name:"CubemapFromEquirect",uniforms:Cb(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:D3,blending:FN});y.uniforms.tEquirect.value=n;const S=new I2(c,y),g=n.minFilter;return n.minFilter===jH&&(n.minFilter=h2),new Qk(1,10,this).update(l,S),n.minFilter=g,S.geometry.dispose(),S.material.dispose(),this}clear(l,n,t,c){const y=l.getRenderTarget();for(let S=0;S<6;S++)l.setRenderTarget(this,S),l.clear(n,t,c);l.setRenderTarget(y)}}const LG=new nt,Zk=new nt,Jk=new Wl;class r7{constructor(l=new nt(1,0,0),n=0){this.isPlane=!0,this.normal=l,this.constant=n}set(l,n){return this.normal.copy(l),this.constant=n,this}setComponents(l,n,t,c){return this.normal.set(l,n,t),this.constant=c,this}setFromNormalAndCoplanarPoint(l,n){return this.normal.copy(l),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(l,n,t){const c=LG.subVectors(t,n).cross(Zk.subVectors(l,n)).normalize();return this.setFromNormalAndCoplanarPoint(c,l),this}copy(l){return this.normal.copy(l.normal),this.constant=l.constant,this}normalize(){const l=1/this.normal.length();return this.normal.multiplyScalar(l),this.constant*=l,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(l){return this.normal.dot(l)+this.constant}distanceToSphere(l){return this.distanceToPoint(l.center)-l.radius}projectPoint(l,n){return n.copy(l).addScaledVector(this.normal,-this.distanceToPoint(l))}intersectLine(l,n){const t=l.delta(LG),c=this.normal.dot(t);if(c===0)return this.distanceToPoint(l.start)===0?n.copy(l.start):null;const y=-(l.start.dot(this.normal)+this.constant)/c;return y<0||y>1?null:n.copy(l.start).addScaledVector(t,y)}intersectsLine(l){const n=this.distanceToPoint(l.start),t=this.distanceToPoint(l.end);return n<0&&t>0||t<0&&n>0}intersectsBox(l){return l.intersectsPlane(this)}intersectsSphere(l){return l.intersectsPlane(this)}coplanarPoint(l){return l.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(l,n){const t=n||Jk.getNormalMatrix(l),c=this.coplanarPoint(LG).applyMatrix4(l),y=this.normal.applyMatrix3(t).normalize();return this.constant=-c.dot(y),this}translate(l){return this.constant-=l.dot(this.normal),this}equals(l){return l.normal.equals(this.normal)&&l.constant===this.constant}clone(){return new this.constructor().copy(this)}}const u8=new TO,YB=new nt;class Y_{constructor(l=new r7,n=new r7,t=new r7,c=new r7,y=new r7,S=new r7){this.planes=[l,n,t,c,y,S]}set(l,n,t,c,y,S){const g=this.planes;return g[0].copy(l),g[1].copy(n),g[2].copy(t),g[3].copy(c),g[4].copy(y),g[5].copy(S),this}copy(l){const n=this.planes;for(let t=0;t<6;t++)n[t].copy(l.planes[t]);return this}setFromProjectionMatrix(l,n=i7){const t=this.planes,c=l.elements,y=c[0],S=c[1],g=c[2],G=c[3],V=c[4],Z=c[5],v=c[6],ee=c[7],te=c[8],he=c[9],Te=c[10],oe=c[11],ie=c[12],De=c[13],we=c[14],Ae=c[15];if(t[0].setComponents(G-y,ee-V,oe-te,Ae-ie).normalize(),t[1].setComponents(G+y,ee+V,oe+te,Ae+ie).normalize(),t[2].setComponents(G+S,ee+Z,oe+he,Ae+De).normalize(),t[3].setComponents(G-S,ee-Z,oe-he,Ae-De).normalize(),t[4].setComponents(G-g,ee-v,oe-Te,Ae-we).normalize(),n===i7)t[5].setComponents(G+g,ee+v,oe+Te,Ae+we).normalize();else if(n===eF)t[5].setComponents(g,v,Te,we).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(l){if(l.boundingSphere!==void 0)l.boundingSphere===null&&l.computeBoundingSphere(),u8.copy(l.boundingSphere).applyMatrix4(l.matrixWorld);else{const n=l.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),u8.copy(n.boundingSphere).applyMatrix4(l.matrixWorld)}return this.intersectsSphere(u8)}intersectsSprite(l){return u8.center.set(0,0,0),u8.radius=.7071067811865476,u8.applyMatrix4(l.matrixWorld),this.intersectsSphere(u8)}intersectsSphere(l){const n=this.planes,t=l.center,c=-l.radius;for(let y=0;y<6;y++)if(n[y].distanceToPoint(t)<c)return!1;return!0}intersectsBox(l){const n=this.planes;for(let t=0;t<6;t++){const c=n[t];if(YB.x=c.normal.x>0?l.max.x:l.min.x,YB.y=c.normal.y>0?l.max.y:l.min.y,YB.z=c.normal.z>0?l.max.z:l.min.z,c.distanceToPoint(YB)<0)return!1}return!0}containsPoint(l){const n=this.planes;for(let t=0;t<6;t++)if(n[t].distanceToPoint(l)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rY(){let e=null,l=!1,n=null,t=null;function c(y,S){n(y,S),t=e.requestAnimationFrame(c)}return{start:function(){l!==!0&&n!==null&&(t=e.requestAnimationFrame(c),l=!0)},stop:function(){e.cancelAnimationFrame(t),l=!1},setAnimationLoop:function(y){n=y},setContext:function(y){e=y}}}function Xk(e,l){const n=l.isWebGL2,t=new WeakMap;function c(V,Z){const v=V.array,ee=V.usage,te=v.byteLength,he=e.createBuffer();e.bindBuffer(Z,he),e.bufferData(Z,v,ee),V.onUploadCallback();let Te;if(v instanceof Float32Array)Te=e.FLOAT;else if(v instanceof Uint16Array)if(V.isFloat16BufferAttribute)if(n)Te=e.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else Te=e.UNSIGNED_SHORT;else if(v instanceof Int16Array)Te=e.SHORT;else if(v instanceof Uint32Array)Te=e.UNSIGNED_INT;else if(v instanceof Int32Array)Te=e.INT;else if(v instanceof Int8Array)Te=e.BYTE;else if(v instanceof Uint8Array)Te=e.UNSIGNED_BYTE;else if(v instanceof Uint8ClampedArray)Te=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+v);return{buffer:he,type:Te,bytesPerElement:v.BYTES_PER_ELEMENT,version:V.version,size:te}}function y(V,Z,v){const ee=Z.array,te=Z._updateRange,he=Z.updateRanges;if(e.bindBuffer(v,V),te.count===-1&&he.length===0&&e.bufferSubData(v,0,ee),he.length!==0){for(let Te=0,oe=he.length;Te<oe;Te++){const ie=he[Te];n?e.bufferSubData(v,ie.start*ee.BYTES_PER_ELEMENT,ee,ie.start,ie.count):e.bufferSubData(v,ie.start*ee.BYTES_PER_ELEMENT,ee.subarray(ie.start,ie.start+ie.count))}Z.clearUpdateRanges()}te.count!==-1&&(n?e.bufferSubData(v,te.offset*ee.BYTES_PER_ELEMENT,ee,te.offset,te.count):e.bufferSubData(v,te.offset*ee.BYTES_PER_ELEMENT,ee.subarray(te.offset,te.offset+te.count)),te.count=-1),Z.onUploadCallback()}function S(V){return V.isInterleavedBufferAttribute&&(V=V.data),t.get(V)}function g(V){V.isInterleavedBufferAttribute&&(V=V.data);const Z=t.get(V);Z&&(e.deleteBuffer(Z.buffer),t.delete(V))}function G(V,Z){if(V.isGLBufferAttribute){const ee=t.get(V);(!ee||ee.version<V.version)&&t.set(V,{buffer:V.buffer,type:V.type,bytesPerElement:V.elementSize,version:V.version});return}V.isInterleavedBufferAttribute&&(V=V.data);const v=t.get(V);if(v===void 0)t.set(V,c(V,Z));else if(v.version<V.version){if(v.size!==V.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");y(v.buffer,V,Z),v.version=V.version}}return{get:S,remove:g,update:G}}class z_ extends tc{constructor(l=1,n=1,t=1,c=1){super(),this.type="PlaneGeometry",this.parameters={width:l,height:n,widthSegments:t,heightSegments:c};const y=l/2,S=n/2,g=Math.floor(t),G=Math.floor(c),V=g+1,Z=G+1,v=l/g,ee=n/G,te=[],he=[],Te=[],oe=[];for(let ie=0;ie<Z;ie++){const De=ie*ee-S;for(let we=0;we<V;we++){const Ae=we*v-y;he.push(Ae,-De,0),Te.push(0,0,1),oe.push(we/g),oe.push(1-ie/G)}}for(let ie=0;ie<G;ie++)for(let De=0;De<g;De++){const we=De+V*ie,Ae=De+V*(ie+1),Ye=De+1+V*(ie+1),Ve=De+1+V*ie;te.push(we,Ae,Ve),te.push(Ae,Ye,Ve)}this.setIndex(te),this.setAttribute("position",new Qu(he,3)),this.setAttribute("normal",new Qu(Te,3)),this.setAttribute("uv",new Qu(oe,2))}copy(l){return super.copy(l),this.parameters=Object.assign({},l.parameters),this}static fromJSON(l){return new z_(l.width,l.height,l.widthSegments,l.heightSegments)}}var vk=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eq=`#ifdef USE_ALPHAHASH
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
#endif`,tq=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nq=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lq=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,sq=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rq=`#ifdef USE_AOMAP
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
#endif`,uq=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aq=`#ifdef USE_BATCHING
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
#endif`,iq=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,oq=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cq=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hq=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fq=`#ifdef USE_IRIDESCENCE
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
#endif`,Iq=`#ifdef USE_BUMPMAP
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
#endif`,dq=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yq=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wq=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Eq=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tq=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pq=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rq=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,mq=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Dq=`#define PI 3.141592653589793
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
} // validated`,Nq=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Aq=`vec3 transformedNormal = objectNormal;
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
#endif`,Sq=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lq=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Oq=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gq=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pq="gl_FragColor = linearToOutputTexel( gl_FragColor );",bq=`
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
}`,Cq=`#ifdef USE_ENVMAP
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
#endif`,Mq=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xq=`#ifdef USE_ENVMAP
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
#endif`,Hq=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bq=`#ifdef USE_ENVMAP
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
#endif`,Uq=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fq=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gq=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_q=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vq=`#ifdef USE_GRADIENTMAP
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
}`,Wq=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,jq=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yq=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zq=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kq=`uniform bool receiveShadow;
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
#endif`,qq=`#ifdef USE_ENVMAP
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
#endif`,Kq=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qq=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$q=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zq=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jq=`PhysicalMaterial material;
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
#endif`,Xq=`struct PhysicalMaterial {
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
}`,vq=`
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
#endif`,eK=`#if defined( RE_IndirectDiffuse )
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
#endif`,tK=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nK=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lK=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sK=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,rK=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,uK=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aK=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iK=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,oK=`#if defined( USE_POINTS_UV )
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
#endif`,cK=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hK=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fK=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,IK=`#ifdef USE_MORPHNORMALS
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
#endif`,dK=`#ifdef USE_MORPHTARGETS
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
#endif`,yK=`#ifdef USE_MORPHTARGETS
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
#endif`,wK=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,EK=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,TK=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pK=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RK=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mK=`#ifdef USE_NORMALMAP
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
#endif`,DK=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,NK=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,AK=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,SK=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,LK=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OK=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gK=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PK=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bK=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,CK=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,MK=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xK=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,HK=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,BK=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,UK=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,FK=`float getShadowMask() {
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
}`,GK=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_K=`#ifdef USE_SKINNING
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
#endif`,VK=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,WK=`#ifdef USE_SKINNING
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
#endif`,jK=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,YK=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zK=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kK=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qK=`#ifdef USE_TRANSMISSION
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
#endif`,KK=`#ifdef USE_TRANSMISSION
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
#endif`,QK=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$K=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZK=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JK=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XK=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vK=`uniform sampler2D t2D;
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
}`,eQ=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tQ=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nQ=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lQ=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sQ=`#include <common>
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
}`,rQ=`#if DEPTH_PACKING == 3200
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
}`,uQ=`#define DISTANCE
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
}`,aQ=`#define DISTANCE
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
}`,iQ=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oQ=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cQ=`uniform float scale;
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
}`,hQ=`uniform vec3 diffuse;
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
}`,fQ=`#include <common>
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
}`,IQ=`uniform vec3 diffuse;
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
}`,dQ=`#define LAMBERT
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
}`,yQ=`#define LAMBERT
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
}`,wQ=`#define MATCAP
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
}`,EQ=`#define MATCAP
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
}`,TQ=`#define NORMAL
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
}`,pQ=`#define NORMAL
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
}`,RQ=`#define PHONG
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
}`,mQ=`#define PHONG
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
}`,DQ=`#define STANDARD
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
}`,NQ=`#define STANDARD
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
}`,AQ=`#define TOON
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
}`,SQ=`#define TOON
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
}`,LQ=`uniform float size;
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
}`,OQ=`uniform vec3 diffuse;
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
}`,gQ=`#include <common>
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
}`,PQ=`uniform vec3 color;
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
}`,bQ=`uniform float rotation;
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
}`,CQ=`uniform vec3 diffuse;
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
}`,Ol={alphahash_fragment:vk,alphahash_pars_fragment:eq,alphamap_fragment:tq,alphamap_pars_fragment:nq,alphatest_fragment:lq,alphatest_pars_fragment:sq,aomap_fragment:rq,aomap_pars_fragment:uq,batching_pars_vertex:aq,batching_vertex:iq,begin_vertex:oq,beginnormal_vertex:cq,bsdfs:hq,iridescence_fragment:fq,bumpmap_pars_fragment:Iq,clipping_planes_fragment:dq,clipping_planes_pars_fragment:yq,clipping_planes_pars_vertex:wq,clipping_planes_vertex:Eq,color_fragment:Tq,color_pars_fragment:pq,color_pars_vertex:Rq,color_vertex:mq,common:Dq,cube_uv_reflection_fragment:Nq,defaultnormal_vertex:Aq,displacementmap_pars_vertex:Sq,displacementmap_vertex:Lq,emissivemap_fragment:Oq,emissivemap_pars_fragment:gq,colorspace_fragment:Pq,colorspace_pars_fragment:bq,envmap_fragment:Cq,envmap_common_pars_fragment:Mq,envmap_pars_fragment:xq,envmap_pars_vertex:Hq,envmap_physical_pars_fragment:qq,envmap_vertex:Bq,fog_vertex:Uq,fog_pars_vertex:Fq,fog_fragment:Gq,fog_pars_fragment:_q,gradientmap_pars_fragment:Vq,lightmap_fragment:Wq,lightmap_pars_fragment:jq,lights_lambert_fragment:Yq,lights_lambert_pars_fragment:zq,lights_pars_begin:kq,lights_toon_fragment:Kq,lights_toon_pars_fragment:Qq,lights_phong_fragment:$q,lights_phong_pars_fragment:Zq,lights_physical_fragment:Jq,lights_physical_pars_fragment:Xq,lights_fragment_begin:vq,lights_fragment_maps:eK,lights_fragment_end:tK,logdepthbuf_fragment:nK,logdepthbuf_pars_fragment:lK,logdepthbuf_pars_vertex:sK,logdepthbuf_vertex:rK,map_fragment:uK,map_pars_fragment:aK,map_particle_fragment:iK,map_particle_pars_fragment:oK,metalnessmap_fragment:cK,metalnessmap_pars_fragment:hK,morphcolor_vertex:fK,morphnormal_vertex:IK,morphtarget_pars_vertex:dK,morphtarget_vertex:yK,normal_fragment_begin:wK,normal_fragment_maps:EK,normal_pars_fragment:TK,normal_pars_vertex:pK,normal_vertex:RK,normalmap_pars_fragment:mK,clearcoat_normal_fragment_begin:DK,clearcoat_normal_fragment_maps:NK,clearcoat_pars_fragment:AK,iridescence_pars_fragment:SK,opaque_fragment:LK,packing:OK,premultiplied_alpha_fragment:gK,project_vertex:PK,dithering_fragment:bK,dithering_pars_fragment:CK,roughnessmap_fragment:MK,roughnessmap_pars_fragment:xK,shadowmap_pars_fragment:HK,shadowmap_pars_vertex:BK,shadowmap_vertex:UK,shadowmask_pars_fragment:FK,skinbase_vertex:GK,skinning_pars_vertex:_K,skinning_vertex:VK,skinnormal_vertex:WK,specularmap_fragment:jK,specularmap_pars_fragment:YK,tonemapping_fragment:zK,tonemapping_pars_fragment:kK,transmission_fragment:qK,transmission_pars_fragment:KK,uv_pars_fragment:QK,uv_pars_vertex:$K,uv_vertex:ZK,worldpos_vertex:JK,background_vert:XK,background_frag:vK,backgroundCube_vert:eQ,backgroundCube_frag:tQ,cube_vert:nQ,cube_frag:lQ,depth_vert:sQ,depth_frag:rQ,distanceRGBA_vert:uQ,distanceRGBA_frag:aQ,equirect_vert:iQ,equirect_frag:oQ,linedashed_vert:cQ,linedashed_frag:hQ,meshbasic_vert:fQ,meshbasic_frag:IQ,meshlambert_vert:dQ,meshlambert_frag:yQ,meshmatcap_vert:wQ,meshmatcap_frag:EQ,meshnormal_vert:TQ,meshnormal_frag:pQ,meshphong_vert:RQ,meshphong_frag:mQ,meshphysical_vert:DQ,meshphysical_frag:NQ,meshtoon_vert:AQ,meshtoon_frag:SQ,points_vert:LQ,points_frag:OQ,shadow_vert:gQ,shadow_frag:PQ,sprite_vert:bQ,sprite_frag:CQ},fn={common:{diffuse:{value:new Dl(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wl},alphaMap:{value:null},alphaMapTransform:{value:new Wl},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wl}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wl}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wl}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wl},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wl},normalScale:{value:new Nl(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wl},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wl}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wl}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wl}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dl(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dl(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wl},alphaTest:{value:0},uvTransform:{value:new Wl}},sprite:{diffuse:{value:new Dl(16777215)},opacity:{value:1},center:{value:new Nl(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wl},alphaMap:{value:null},alphaMapTransform:{value:new Wl},alphaTest:{value:0}}},vT={basic:{uniforms:t3([fn.common,fn.specularmap,fn.envmap,fn.aomap,fn.lightmap,fn.fog]),vertexShader:Ol.meshbasic_vert,fragmentShader:Ol.meshbasic_frag},lambert:{uniforms:t3([fn.common,fn.specularmap,fn.envmap,fn.aomap,fn.lightmap,fn.emissivemap,fn.bumpmap,fn.normalmap,fn.displacementmap,fn.fog,fn.lights,{emissive:{value:new Dl(0)}}]),vertexShader:Ol.meshlambert_vert,fragmentShader:Ol.meshlambert_frag},phong:{uniforms:t3([fn.common,fn.specularmap,fn.envmap,fn.aomap,fn.lightmap,fn.emissivemap,fn.bumpmap,fn.normalmap,fn.displacementmap,fn.fog,fn.lights,{emissive:{value:new Dl(0)},specular:{value:new Dl(1118481)},shininess:{value:30}}]),vertexShader:Ol.meshphong_vert,fragmentShader:Ol.meshphong_frag},standard:{uniforms:t3([fn.common,fn.envmap,fn.aomap,fn.lightmap,fn.emissivemap,fn.bumpmap,fn.normalmap,fn.displacementmap,fn.roughnessmap,fn.metalnessmap,fn.fog,fn.lights,{emissive:{value:new Dl(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ol.meshphysical_vert,fragmentShader:Ol.meshphysical_frag},toon:{uniforms:t3([fn.common,fn.aomap,fn.lightmap,fn.emissivemap,fn.bumpmap,fn.normalmap,fn.displacementmap,fn.gradientmap,fn.fog,fn.lights,{emissive:{value:new Dl(0)}}]),vertexShader:Ol.meshtoon_vert,fragmentShader:Ol.meshtoon_frag},matcap:{uniforms:t3([fn.common,fn.bumpmap,fn.normalmap,fn.displacementmap,fn.fog,{matcap:{value:null}}]),vertexShader:Ol.meshmatcap_vert,fragmentShader:Ol.meshmatcap_frag},points:{uniforms:t3([fn.points,fn.fog]),vertexShader:Ol.points_vert,fragmentShader:Ol.points_frag},dashed:{uniforms:t3([fn.common,fn.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ol.linedashed_vert,fragmentShader:Ol.linedashed_frag},depth:{uniforms:t3([fn.common,fn.displacementmap]),vertexShader:Ol.depth_vert,fragmentShader:Ol.depth_frag},normal:{uniforms:t3([fn.common,fn.bumpmap,fn.normalmap,fn.displacementmap,{opacity:{value:1}}]),vertexShader:Ol.meshnormal_vert,fragmentShader:Ol.meshnormal_frag},sprite:{uniforms:t3([fn.sprite,fn.fog]),vertexShader:Ol.sprite_vert,fragmentShader:Ol.sprite_frag},background:{uniforms:{uvTransform:{value:new Wl},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ol.background_vert,fragmentShader:Ol.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ol.backgroundCube_vert,fragmentShader:Ol.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ol.cube_vert,fragmentShader:Ol.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ol.equirect_vert,fragmentShader:Ol.equirect_frag},distanceRGBA:{uniforms:t3([fn.common,fn.displacementmap,{referencePosition:{value:new nt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ol.distanceRGBA_vert,fragmentShader:Ol.distanceRGBA_frag},shadow:{uniforms:t3([fn.lights,fn.fog,{color:{value:new Dl(0)},opacity:{value:1}}]),vertexShader:Ol.shadow_vert,fragmentShader:Ol.shadow_frag}};vT.physical={uniforms:t3([vT.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wl},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wl},clearcoatNormalScale:{value:new Nl(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wl},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wl},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wl},sheen:{value:0},sheenColor:{value:new Dl(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wl},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wl},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wl},transmissionSamplerSize:{value:new Nl},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wl},attenuationDistance:{value:0},attenuationColor:{value:new Dl(0)},specularColor:{value:new Dl(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wl},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wl},anisotropyVector:{value:new Nl},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wl}}]),vertexShader:Ol.meshphysical_vert,fragmentShader:Ol.meshphysical_frag};const zB={r:0,b:0,g:0};function MQ(e,l,n,t,c,y,S){const g=new Dl(0);let G=y===!0?0:1,V,Z,v=null,ee=0,te=null;function he(oe,ie){let De=!1,we=ie.isScene===!0?ie.background:null;we&&we.isTexture&&(we=(ie.backgroundBlurriness>0?n:l).get(we)),we===null?Te(g,G):we&&we.isColor&&(Te(we,1),De=!0);const Ae=e.xr.getEnvironmentBlendMode();Ae==="additive"?t.buffers.color.setClear(0,0,0,1,S):Ae==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,S),(e.autoClear||De)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),we&&(we.isCubeTexture||we.mapping===sF)?(Z===void 0&&(Z=new I2(new cB(1,1,1),new fL({name:"BackgroundCubeMaterial",uniforms:Cb(vT.backgroundCube.uniforms),vertexShader:vT.backgroundCube.vertexShader,fragmentShader:vT.backgroundCube.fragmentShader,side:D3,depthTest:!1,depthWrite:!1,fog:!1})),Z.geometry.deleteAttribute("normal"),Z.geometry.deleteAttribute("uv"),Z.onBeforeRender=function(Ye,Ve,_e){this.matrixWorld.copyPosition(_e.matrixWorld)},Object.defineProperty(Z.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),c.update(Z)),Z.material.uniforms.envMap.value=we,Z.material.uniforms.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1,Z.material.uniforms.backgroundBlurriness.value=ie.backgroundBlurriness,Z.material.uniforms.backgroundIntensity.value=ie.backgroundIntensity,Z.material.toneMapped=ks.getTransfer(we.colorSpace)!==dr,(v!==we||ee!==we.version||te!==e.toneMapping)&&(Z.material.needsUpdate=!0,v=we,ee=we.version,te=e.toneMapping),Z.layers.enableAll(),oe.unshift(Z,Z.geometry,Z.material,0,0,null)):we&&we.isTexture&&(V===void 0&&(V=new I2(new z_(2,2),new fL({name:"BackgroundMaterial",uniforms:Cb(vT.background.uniforms),vertexShader:vT.background.vertexShader,fragmentShader:vT.background.fragmentShader,side:oR,depthTest:!1,depthWrite:!1,fog:!1})),V.geometry.deleteAttribute("normal"),Object.defineProperty(V.material,"map",{get:function(){return this.uniforms.t2D.value}}),c.update(V)),V.material.uniforms.t2D.value=we,V.material.uniforms.backgroundIntensity.value=ie.backgroundIntensity,V.material.toneMapped=ks.getTransfer(we.colorSpace)!==dr,we.matrixAutoUpdate===!0&&we.updateMatrix(),V.material.uniforms.uvTransform.value.copy(we.matrix),(v!==we||ee!==we.version||te!==e.toneMapping)&&(V.material.needsUpdate=!0,v=we,ee=we.version,te=e.toneMapping),V.layers.enableAll(),oe.unshift(V,V.geometry,V.material,0,0,null))}function Te(oe,ie){oe.getRGB(zB,nY(e)),t.buffers.color.setClear(zB.r,zB.g,zB.b,ie,S)}return{getClearColor:function(){return g},setClearColor:function(oe,ie=1){g.set(oe),G=ie,Te(g,G)},getClearAlpha:function(){return G},setClearAlpha:function(oe){G=oe,Te(g,G)},render:he}}function xQ(e,l,n,t){const c=e.getParameter(e.MAX_VERTEX_ATTRIBS),y=t.isWebGL2?null:l.get("OES_vertex_array_object"),S=t.isWebGL2||y!==null,g={},G=oe(null);let V=G,Z=!1;function v(et,at,It,St,bt){let Ct=!1;if(S){const Ft=Te(St,It,at);V!==Ft&&(V=Ft,te(V.object)),Ct=ie(et,St,It,bt),Ct&&De(et,St,It,bt)}else{const Ft=at.wireframe===!0;(V.geometry!==St.id||V.program!==It.id||V.wireframe!==Ft)&&(V.geometry=St.id,V.program=It.id,V.wireframe=Ft,Ct=!0)}bt!==null&&n.update(bt,e.ELEMENT_ARRAY_BUFFER),(Ct||Z)&&(Z=!1,Xe(et,at,It,St),bt!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(bt).buffer))}function ee(){return t.isWebGL2?e.createVertexArray():y.createVertexArrayOES()}function te(et){return t.isWebGL2?e.bindVertexArray(et):y.bindVertexArrayOES(et)}function he(et){return t.isWebGL2?e.deleteVertexArray(et):y.deleteVertexArrayOES(et)}function Te(et,at,It){const St=It.wireframe===!0;let bt=g[et.id];bt===void 0&&(bt={},g[et.id]=bt);let Ct=bt[at.id];Ct===void 0&&(Ct={},bt[at.id]=Ct);let Ft=Ct[St];return Ft===void 0&&(Ft=oe(ee()),Ct[St]=Ft),Ft}function oe(et){const at=[],It=[],St=[];for(let bt=0;bt<c;bt++)at[bt]=0,It[bt]=0,St[bt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:at,enabledAttributes:It,attributeDivisors:St,object:et,attributes:{},index:null}}function ie(et,at,It,St){const bt=V.attributes,Ct=at.attributes;let Ft=0;const Ht=It.getAttributes();for(const Ut in Ht)if(Ht[Ut].location>=0){const Bt=bt[Ut];let Xt=Ct[Ut];if(Xt===void 0&&(Ut==="instanceMatrix"&&et.instanceMatrix&&(Xt=et.instanceMatrix),Ut==="instanceColor"&&et.instanceColor&&(Xt=et.instanceColor)),Bt===void 0||Bt.attribute!==Xt||Xt&&Bt.data!==Xt.data)return!0;Ft++}return V.attributesNum!==Ft||V.index!==St}function De(et,at,It,St){const bt={},Ct=at.attributes;let Ft=0;const Ht=It.getAttributes();for(const Ut in Ht)if(Ht[Ut].location>=0){let Bt=Ct[Ut];Bt===void 0&&(Ut==="instanceMatrix"&&et.instanceMatrix&&(Bt=et.instanceMatrix),Ut==="instanceColor"&&et.instanceColor&&(Bt=et.instanceColor));const Xt={};Xt.attribute=Bt,Bt&&Bt.data&&(Xt.data=Bt.data),bt[Ut]=Xt,Ft++}V.attributes=bt,V.attributesNum=Ft,V.index=St}function we(){const et=V.newAttributes;for(let at=0,It=et.length;at<It;at++)et[at]=0}function Ae(et){Ye(et,0)}function Ye(et,at){const It=V.newAttributes,St=V.enabledAttributes,bt=V.attributeDivisors;It[et]=1,St[et]===0&&(e.enableVertexAttribArray(et),St[et]=1),bt[et]!==at&&((t.isWebGL2?e:l.get("ANGLE_instanced_arrays"))[t.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](et,at),bt[et]=at)}function Ve(){const et=V.newAttributes,at=V.enabledAttributes;for(let It=0,St=at.length;It<St;It++)at[It]!==et[It]&&(e.disableVertexAttribArray(It),at[It]=0)}function _e(et,at,It,St,bt,Ct,Ft){Ft===!0?e.vertexAttribIPointer(et,at,It,bt,Ct):e.vertexAttribPointer(et,at,It,St,bt,Ct)}function Xe(et,at,It,St){if(t.isWebGL2===!1&&(et.isInstancedMesh||St.isInstancedBufferGeometry)&&l.get("ANGLE_instanced_arrays")===null)return;we();const bt=St.attributes,Ct=It.getAttributes(),Ft=at.defaultAttributeValues;for(const Ht in Ct){const Ut=Ct[Ht];if(Ut.location>=0){let Lt=bt[Ht];if(Lt===void 0&&(Ht==="instanceMatrix"&&et.instanceMatrix&&(Lt=et.instanceMatrix),Ht==="instanceColor"&&et.instanceColor&&(Lt=et.instanceColor)),Lt!==void 0){const Bt=Lt.normalized,Xt=Lt.itemSize,mn=n.get(Lt);if(mn===void 0)continue;const An=mn.buffer,Un=mn.type,Fn=mn.bytesPerElement,yn=t.isWebGL2===!0&&(Un===e.INT||Un===e.UNSIGNED_INT||Lt.gpuType===_j);if(Lt.isInterleavedBufferAttribute){const vn=Lt.data,Tt=vn.stride,Jl=Lt.offset;if(vn.isInstancedInterleavedBuffer){for(let Mn=0;Mn<Ut.locationSize;Mn++)Ye(Ut.location+Mn,vn.meshPerAttribute);et.isInstancedMesh!==!0&&St._maxInstanceCount===void 0&&(St._maxInstanceCount=vn.meshPerAttribute*vn.count)}else for(let Mn=0;Mn<Ut.locationSize;Mn++)Ae(Ut.location+Mn);e.bindBuffer(e.ARRAY_BUFFER,An);for(let Mn=0;Mn<Ut.locationSize;Mn++)_e(Ut.location+Mn,Xt/Ut.locationSize,Un,Bt,Tt*Fn,(Jl+Xt/Ut.locationSize*Mn)*Fn,yn)}else{if(Lt.isInstancedBufferAttribute){for(let vn=0;vn<Ut.locationSize;vn++)Ye(Ut.location+vn,Lt.meshPerAttribute);et.isInstancedMesh!==!0&&St._maxInstanceCount===void 0&&(St._maxInstanceCount=Lt.meshPerAttribute*Lt.count)}else for(let vn=0;vn<Ut.locationSize;vn++)Ae(Ut.location+vn);e.bindBuffer(e.ARRAY_BUFFER,An);for(let vn=0;vn<Ut.locationSize;vn++)_e(Ut.location+vn,Xt/Ut.locationSize,Un,Bt,Xt*Fn,Xt/Ut.locationSize*vn*Fn,yn)}}else if(Ft!==void 0){const Bt=Ft[Ht];if(Bt!==void 0)switch(Bt.length){case 2:e.vertexAttrib2fv(Ut.location,Bt);break;case 3:e.vertexAttrib3fv(Ut.location,Bt);break;case 4:e.vertexAttrib4fv(Ut.location,Bt);break;default:e.vertexAttrib1fv(Ut.location,Bt)}}}}Ve()}function ge(){st();for(const et in g){const at=g[et];for(const It in at){const St=at[It];for(const bt in St)he(St[bt].object),delete St[bt];delete at[It]}delete g[et]}}function Le(et){if(g[et.id]===void 0)return;const at=g[et.id];for(const It in at){const St=at[It];for(const bt in St)he(St[bt].object),delete St[bt];delete at[It]}delete g[et.id]}function ve(et){for(const at in g){const It=g[at];if(It[et.id]===void 0)continue;const St=It[et.id];for(const bt in St)he(St[bt].object),delete St[bt];delete It[et.id]}}function st(){ft(),Z=!0,V!==G&&(V=G,te(V.object))}function ft(){G.geometry=null,G.program=null,G.wireframe=!1}return{setup:v,reset:st,resetDefaultState:ft,dispose:ge,releaseStatesOfGeometry:Le,releaseStatesOfProgram:ve,initAttributes:we,enableAttribute:Ae,disableUnusedAttributes:Ve}}function HQ(e,l,n,t){const c=t.isWebGL2;let y;function S(Z){y=Z}function g(Z,v){e.drawArrays(y,Z,v),n.update(v,y,1)}function G(Z,v,ee){if(ee===0)return;let te,he;if(c)te=e,he="drawArraysInstanced";else if(te=l.get("ANGLE_instanced_arrays"),he="drawArraysInstancedANGLE",te===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}te[he](y,Z,v,ee),n.update(v,y,ee)}function V(Z,v,ee){if(ee===0)return;const te=l.get("WEBGL_multi_draw");if(te===null)for(let he=0;he<ee;he++)this.render(Z[he],v[he]);else{te.multiDrawArraysWEBGL(y,Z,0,v,0,ee);let he=0;for(let Te=0;Te<ee;Te++)he+=v[Te];n.update(he,y,1)}}this.setMode=S,this.render=g,this.renderInstances=G,this.renderMultiDraw=V}function BQ(e,l,n){let t;function c(){if(t!==void 0)return t;if(l.has("EXT_texture_filter_anisotropic")===!0){const _e=l.get("EXT_texture_filter_anisotropic");t=e.getParameter(_e.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else t=0;return t}function y(_e){if(_e==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";_e="mediump"}return _e==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const S=typeof WebGL2RenderingContext<"u"&&e.constructor.name==="WebGL2RenderingContext";let g=n.precision!==void 0?n.precision:"highp";const G=y(g);G!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",G,"instead."),g=G);const V=S||l.has("WEBGL_draw_buffers"),Z=n.logarithmicDepthBuffer===!0,v=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),ee=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),te=e.getParameter(e.MAX_TEXTURE_SIZE),he=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),Te=e.getParameter(e.MAX_VERTEX_ATTRIBS),oe=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),ie=e.getParameter(e.MAX_VARYING_VECTORS),De=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),we=ee>0,Ae=S||l.has("OES_texture_float"),Ye=we&&Ae,Ve=S?e.getParameter(e.MAX_SAMPLES):0;return{isWebGL2:S,drawBuffers:V,getMaxAnisotropy:c,getMaxPrecision:y,precision:g,logarithmicDepthBuffer:Z,maxTextures:v,maxVertexTextures:ee,maxTextureSize:te,maxCubemapSize:he,maxAttributes:Te,maxVertexUniforms:oe,maxVaryings:ie,maxFragmentUniforms:De,vertexTextures:we,floatFragmentTextures:Ae,floatVertexTextures:Ye,maxSamples:Ve}}function UQ(e){const l=this;let n=null,t=0,c=!1,y=!1;const S=new r7,g=new Wl,G={value:null,needsUpdate:!1};this.uniform=G,this.numPlanes=0,this.numIntersection=0,this.init=function(v,ee){const te=v.length!==0||ee||t!==0||c;return c=ee,t=v.length,te},this.beginShadows=function(){y=!0,Z(null)},this.endShadows=function(){y=!1},this.setGlobalState=function(v,ee){n=Z(v,ee,0)},this.setState=function(v,ee,te){const he=v.clippingPlanes,Te=v.clipIntersection,oe=v.clipShadows,ie=e.get(v);if(!c||he===null||he.length===0||y&&!oe)y?Z(null):V();else{const De=y?0:t,we=De*4;let Ae=ie.clippingState||null;G.value=Ae,Ae=Z(he,ee,we,te);for(let Ye=0;Ye!==we;++Ye)Ae[Ye]=n[Ye];ie.clippingState=Ae,this.numIntersection=Te?this.numPlanes:0,this.numPlanes+=De}};function V(){G.value!==n&&(G.value=n,G.needsUpdate=t>0),l.numPlanes=t,l.numIntersection=0}function Z(v,ee,te,he){const Te=v!==null?v.length:0;let oe=null;if(Te!==0){if(oe=G.value,he!==!0||oe===null){const ie=te+Te*4,De=ee.matrixWorldInverse;g.getNormalMatrix(De),(oe===null||oe.length<ie)&&(oe=new Float32Array(ie));for(let we=0,Ae=te;we!==Te;++we,Ae+=4)S.copy(v[we]).applyMatrix4(De,g),S.normal.toArray(oe,Ae),oe[Ae+3]=S.constant}G.value=oe,G.needsUpdate=!0}return l.numPlanes=Te,l.numIntersection=0,oe}}function FQ(e){let l=new WeakMap;function n(S,g){return g===JG?S.mapping=gb:g===XG&&(S.mapping=Pb),S}function t(S){if(S&&S.isTexture){const g=S.mapping;if(g===JG||g===XG)if(l.has(S)){const G=l.get(S).texture;return n(G,S.mapping)}else{const G=S.image;if(G&&G.height>0){const V=new $k(G.height/2);return V.fromEquirectangularTexture(e,S),l.set(S,V),S.addEventListener("dispose",c),n(V.texture,S.mapping)}else return null}}return S}function c(S){const g=S.target;g.removeEventListener("dispose",c);const G=l.get(g);G!==void 0&&(l.delete(g),G.dispose())}function y(){l=new WeakMap}return{get:t,dispose:y}}class uY extends lY{constructor(l=-1,n=1,t=1,c=-1,y=.1,S=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=l,this.right=n,this.top=t,this.bottom=c,this.near=y,this.far=S,this.updateProjectionMatrix()}copy(l,n){return super.copy(l,n),this.left=l.left,this.right=l.right,this.top=l.top,this.bottom=l.bottom,this.near=l.near,this.far=l.far,this.zoom=l.zoom,this.view=l.view===null?null:Object.assign({},l.view),this}setViewOffset(l,n,t,c,y,S){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=l,this.view.fullHeight=n,this.view.offsetX=t,this.view.offsetY=c,this.view.width=y,this.view.height=S,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const l=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),t=(this.right+this.left)/2,c=(this.top+this.bottom)/2;let y=t-l,S=t+l,g=c+n,G=c-n;if(this.view!==null&&this.view.enabled){const V=(this.right-this.left)/this.view.fullWidth/this.zoom,Z=(this.top-this.bottom)/this.view.fullHeight/this.zoom;y+=V*this.view.offsetX,S=y+V*this.view.width,g-=Z*this.view.offsetY,G=g-Z*this.view.height}this.projectionMatrix.makeOrthographic(y,S,g,G,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(l){const n=super.toJSON(l);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const wb=4,PW=[.125,.215,.35,.446,.526,.582],Q8=20,OG=new uY,bW=new Dl;let gG=null,PG=0,bG=0;const a8=(1+Math.sqrt(5))/2,BP=1/a8,CW=[new nt(1,1,1),new nt(-1,1,1),new nt(1,1,-1),new nt(-1,1,-1),new nt(0,a8,BP),new nt(0,a8,-BP),new nt(BP,0,a8),new nt(-BP,0,a8),new nt(a8,BP,0),new nt(-a8,BP,0)];class MW{constructor(l){this._renderer=l,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(l,n=0,t=.1,c=100){gG=this._renderer.getRenderTarget(),PG=this._renderer.getActiveCubeFace(),bG=this._renderer.getActiveMipmapLevel(),this._setSize(256);const y=this._allocateTargets();return y.depthBuffer=!0,this._sceneToCubeUV(l,t,c,y),n>0&&this._blur(y,0,0,n),this._applyPMREM(y),this._cleanup(y),y}fromEquirectangular(l,n=null){return this._fromTexture(l,n)}fromCubemap(l,n=null){return this._fromTexture(l,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=BW(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=HW(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(l){this._lodMax=Math.floor(Math.log2(l)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let l=0;l<this._lodPlanes.length;l++)this._lodPlanes[l].dispose()}_cleanup(l){this._renderer.setRenderTarget(gG,PG,bG),l.scissorTest=!1,kB(l,0,0,l.width,l.height)}_fromTexture(l,n){l.mapping===gb||l.mapping===Pb?this._setSize(l.image.length===0?16:l.image[0].width||l.image[0].image.width):this._setSize(l.image.width/4),gG=this._renderer.getRenderTarget(),PG=this._renderer.getActiveCubeFace(),bG=this._renderer.getActiveMipmapLevel();const t=n||this._allocateTargets();return this._textureToCubeUV(l,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(){const l=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,t={magFilter:h2,minFilter:h2,generateMipmaps:!1,type:YH,format:sE,colorSpace:X7,depthBuffer:!1},c=xW(l,n,t);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==l||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xW(l,n,t);const{_lodMax:y}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=GQ(y)),this._blurMaterial=_Q(y,l,n)}return c}_compileMaterial(l){const n=new I2(this._lodPlanes[0],l);this._renderer.compile(n,OG)}_sceneToCubeUV(l,n,t,c){const g=new nE(90,1,n,t),G=[1,-1,1,1,1,1],V=[1,1,1,-1,-1,-1],Z=this._renderer,v=Z.autoClear,ee=Z.toneMapping;Z.getClearColor(bW),Z.toneMapping=GN,Z.autoClear=!1;const te=new vj({name:"PMREM.Background",side:D3,depthWrite:!1,depthTest:!1}),he=new I2(new cB,te);let Te=!1;const oe=l.background;oe?oe.isColor&&(te.color.copy(oe),l.background=null,Te=!0):(te.color.copy(bW),Te=!0);for(let ie=0;ie<6;ie++){const De=ie%3;De===0?(g.up.set(0,G[ie],0),g.lookAt(V[ie],0,0)):De===1?(g.up.set(0,0,G[ie]),g.lookAt(0,V[ie],0)):(g.up.set(0,G[ie],0),g.lookAt(0,0,V[ie]));const we=this._cubeSize;kB(c,De*we,ie>2?we:0,we,we),Z.setRenderTarget(c),Te&&Z.render(he,g),Z.render(l,g)}he.geometry.dispose(),he.material.dispose(),Z.toneMapping=ee,Z.autoClear=v,l.background=oe}_textureToCubeUV(l,n){const t=this._renderer,c=l.mapping===gb||l.mapping===Pb;c?(this._cubemapMaterial===null&&(this._cubemapMaterial=BW()),this._cubemapMaterial.uniforms.flipEnvMap.value=l.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=HW());const y=c?this._cubemapMaterial:this._equirectMaterial,S=new I2(this._lodPlanes[0],y),g=y.uniforms;g.envMap.value=l;const G=this._cubeSize;kB(n,0,0,3*G,2*G),t.setRenderTarget(n),t.render(S,OG)}_applyPMREM(l){const n=this._renderer,t=n.autoClear;n.autoClear=!1;for(let c=1;c<this._lodPlanes.length;c++){const y=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),S=CW[(c-1)%CW.length];this._blur(l,c-1,c,y,S)}n.autoClear=t}_blur(l,n,t,c,y){const S=this._pingPongRenderTarget;this._halfBlur(l,S,n,t,c,"latitudinal",y),this._halfBlur(S,l,t,t,c,"longitudinal",y)}_halfBlur(l,n,t,c,y,S,g){const G=this._renderer,V=this._blurMaterial;S!=="latitudinal"&&S!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const Z=3,v=new I2(this._lodPlanes[c],V),ee=V.uniforms,te=this._sizeLods[t]-1,he=isFinite(y)?Math.PI/(2*te):2*Math.PI/(2*Q8-1),Te=y/he,oe=isFinite(y)?1+Math.floor(Z*Te):Q8;oe>Q8&&console.warn(`sigmaRadians, ${y}, is too large and will clip, as it requested ${oe} samples when the maximum is set to ${Q8}`);const ie=[];let De=0;for(let _e=0;_e<Q8;++_e){const Xe=_e/Te,ge=Math.exp(-Xe*Xe/2);ie.push(ge),_e===0?De+=ge:_e<oe&&(De+=2*ge)}for(let _e=0;_e<ie.length;_e++)ie[_e]=ie[_e]/De;ee.envMap.value=l.texture,ee.samples.value=oe,ee.weights.value=ie,ee.latitudinal.value=S==="latitudinal",g&&(ee.poleAxis.value=g);const{_lodMax:we}=this;ee.dTheta.value=he,ee.mipInt.value=we-t;const Ae=this._sizeLods[c],Ye=3*Ae*(c>we-wb?c-we+wb:0),Ve=4*(this._cubeSize-Ae);kB(n,Ye,Ve,3*Ae,2*Ae),G.setRenderTarget(n),G.render(v,OG)}}function GQ(e){const l=[],n=[],t=[];let c=e;const y=e-wb+1+PW.length;for(let S=0;S<y;S++){const g=Math.pow(2,c);n.push(g);let G=1/g;S>e-wb?G=PW[S-e+wb-1]:S===0&&(G=0),t.push(G);const V=1/(g-2),Z=-V,v=1+V,ee=[Z,Z,v,Z,v,v,Z,Z,v,v,Z,v],te=6,he=6,Te=3,oe=2,ie=1,De=new Float32Array(Te*he*te),we=new Float32Array(oe*he*te),Ae=new Float32Array(ie*he*te);for(let Ve=0;Ve<te;Ve++){const _e=Ve%3*2/3-1,Xe=Ve>2?0:-1,ge=[_e,Xe,0,_e+2/3,Xe,0,_e+2/3,Xe+1,0,_e,Xe,0,_e+2/3,Xe+1,0,_e,Xe+1,0];De.set(ge,Te*he*Ve),we.set(ee,oe*he*Ve);const Le=[Ve,Ve,Ve,Ve,Ve,Ve];Ae.set(Le,ie*he*Ve)}const Ye=new tc;Ye.setAttribute("position",new Xf(De,Te)),Ye.setAttribute("uv",new Xf(we,oe)),Ye.setAttribute("faceIndex",new Xf(Ae,ie)),l.push(Ye),c>wb&&c--}return{lodPlanes:l,sizeLods:n,sigmas:t}}function xW(e,l,n){const t=new jN(e,l,n);return t.texture.mapping=sF,t.texture.name="PMREM.cubeUv",t.scissorTest=!0,t}function kB(e,l,n,t,c){e.viewport.set(l,n,t,c),e.scissor.set(l,n,t,c)}function _Q(e,l,n){const t=new Float32Array(Q8),c=new nt(0,1,0);return new fL({name:"SphericalGaussianBlur",defines:{n:Q8,CUBEUV_TEXEL_WIDTH:1/l,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:t},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:c}},vertexShader:k_(),fragmentShader:`

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
		`,blending:FN,depthTest:!1,depthWrite:!1})}function HW(){return new fL({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:k_(),fragmentShader:`

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
		`,blending:FN,depthTest:!1,depthWrite:!1})}function BW(){return new fL({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:k_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:FN,depthTest:!1,depthWrite:!1})}function k_(){return`

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
	`}function VQ(e){let l=new WeakMap,n=null;function t(g){if(g&&g.isTexture){const G=g.mapping,V=G===JG||G===XG,Z=G===gb||G===Pb;if(V||Z)if(g.isRenderTargetTexture&&g.needsPMREMUpdate===!0){g.needsPMREMUpdate=!1;let v=l.get(g);return n===null&&(n=new MW(e)),v=V?n.fromEquirectangular(g,v):n.fromCubemap(g,v),l.set(g,v),v.texture}else{if(l.has(g))return l.get(g).texture;{const v=g.image;if(V&&v&&v.height>0||Z&&v&&c(v)){n===null&&(n=new MW(e));const ee=V?n.fromEquirectangular(g):n.fromCubemap(g);return l.set(g,ee),g.addEventListener("dispose",y),ee.texture}else return null}}}return g}function c(g){let G=0;const V=6;for(let Z=0;Z<V;Z++)g[Z]!==void 0&&G++;return G===V}function y(g){const G=g.target;G.removeEventListener("dispose",y);const V=l.get(G);V!==void 0&&(l.delete(G),V.dispose())}function S(){l=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:t,dispose:S}}function WQ(e){const l={};function n(t){if(l[t]!==void 0)return l[t];let c;switch(t){case"WEBGL_depth_texture":c=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":c=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":c=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":c=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:c=e.getExtension(t)}return l[t]=c,c}return{has:function(t){return n(t)!==null},init:function(t){t.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(t){const c=n(t);return c===null&&console.warn("THREE.WebGLRenderer: "+t+" extension not supported."),c}}}function jQ(e,l,n,t){const c={},y=new WeakMap;function S(v){const ee=v.target;ee.index!==null&&l.remove(ee.index);for(const he in ee.attributes)l.remove(ee.attributes[he]);for(const he in ee.morphAttributes){const Te=ee.morphAttributes[he];for(let oe=0,ie=Te.length;oe<ie;oe++)l.remove(Te[oe])}ee.removeEventListener("dispose",S),delete c[ee.id];const te=y.get(ee);te&&(l.remove(te),y.delete(ee)),t.releaseStatesOfGeometry(ee),ee.isInstancedBufferGeometry===!0&&delete ee._maxInstanceCount,n.memory.geometries--}function g(v,ee){return c[ee.id]===!0||(ee.addEventListener("dispose",S),c[ee.id]=!0,n.memory.geometries++),ee}function G(v){const ee=v.attributes;for(const he in ee)l.update(ee[he],e.ARRAY_BUFFER);const te=v.morphAttributes;for(const he in te){const Te=te[he];for(let oe=0,ie=Te.length;oe<ie;oe++)l.update(Te[oe],e.ARRAY_BUFFER)}}function V(v){const ee=[],te=v.index,he=v.attributes.position;let Te=0;if(te!==null){const De=te.array;Te=te.version;for(let we=0,Ae=De.length;we<Ae;we+=3){const Ye=De[we+0],Ve=De[we+1],_e=De[we+2];ee.push(Ye,Ve,Ve,_e,_e,Ye)}}else if(he!==void 0){const De=he.array;Te=he.version;for(let we=0,Ae=De.length/3-1;we<Ae;we+=3){const Ye=we+0,Ve=we+1,_e=we+2;ee.push(Ye,Ve,Ve,_e,_e,Ye)}}else return;const oe=new(Qj(ee)?tY:eY)(ee,1);oe.version=Te;const ie=y.get(v);ie&&l.remove(ie),y.set(v,oe)}function Z(v){const ee=y.get(v);if(ee){const te=v.index;te!==null&&ee.version<te.version&&V(v)}else V(v);return y.get(v)}return{get:g,update:G,getWireframeAttribute:Z}}function YQ(e,l,n,t){const c=t.isWebGL2;let y;function S(te){y=te}let g,G;function V(te){g=te.type,G=te.bytesPerElement}function Z(te,he){e.drawElements(y,he,g,te*G),n.update(he,y,1)}function v(te,he,Te){if(Te===0)return;let oe,ie;if(c)oe=e,ie="drawElementsInstanced";else if(oe=l.get("ANGLE_instanced_arrays"),ie="drawElementsInstancedANGLE",oe===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}oe[ie](y,he,g,te*G,Te),n.update(he,y,Te)}function ee(te,he,Te){if(Te===0)return;const oe=l.get("WEBGL_multi_draw");if(oe===null)for(let ie=0;ie<Te;ie++)this.render(te[ie]/G,he[ie]);else{oe.multiDrawElementsWEBGL(y,he,0,g,te,0,Te);let ie=0;for(let De=0;De<Te;De++)ie+=he[De];n.update(ie,y,1)}}this.setMode=S,this.setIndex=V,this.render=Z,this.renderInstances=v,this.renderMultiDraw=ee}function zQ(e){const l={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function t(y,S,g){switch(n.calls++,S){case e.TRIANGLES:n.triangles+=g*(y/3);break;case e.LINES:n.lines+=g*(y/2);break;case e.LINE_STRIP:n.lines+=g*(y-1);break;case e.LINE_LOOP:n.lines+=g*y;break;case e.POINTS:n.points+=g*y;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",S);break}}function c(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:l,render:n,programs:null,autoReset:!0,reset:c,update:t}}function kQ(e,l){return e[0]-l[0]}function qQ(e,l){return Math.abs(l[1])-Math.abs(e[1])}function KQ(e,l,n){const t={},c=new Float32Array(8),y=new WeakMap,S=new Fc,g=[];for(let V=0;V<8;V++)g[V]=[V,0];function G(V,Z,v){const ee=V.morphTargetInfluences;if(l.isWebGL2===!0){const te=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,he=te!==void 0?te.length:0;let Te=y.get(Z);if(Te===void 0||Te.count!==he){let et=function(){st.dispose(),y.delete(Z),Z.removeEventListener("dispose",et)};Te!==void 0&&Te.texture.dispose();const De=Z.morphAttributes.position!==void 0,we=Z.morphAttributes.normal!==void 0,Ae=Z.morphAttributes.color!==void 0,Ye=Z.morphAttributes.position||[],Ve=Z.morphAttributes.normal||[],_e=Z.morphAttributes.color||[];let Xe=0;De===!0&&(Xe=1),we===!0&&(Xe=2),Ae===!0&&(Xe=3);let ge=Z.attributes.position.count*Xe,Le=1;ge>l.maxTextureSize&&(Le=Math.ceil(ge/l.maxTextureSize),ge=l.maxTextureSize);const ve=new Float32Array(ge*Le*4*he),st=new Jj(ve,ge,Le,he);st.type=MN,st.needsUpdate=!0;const ft=Xe*4;for(let at=0;at<he;at++){const It=Ye[at],St=Ve[at],bt=_e[at],Ct=ge*Le*4*at;for(let Ft=0;Ft<It.count;Ft++){const Ht=Ft*ft;De===!0&&(S.fromBufferAttribute(It,Ft),ve[Ct+Ht+0]=S.x,ve[Ct+Ht+1]=S.y,ve[Ct+Ht+2]=S.z,ve[Ct+Ht+3]=0),we===!0&&(S.fromBufferAttribute(St,Ft),ve[Ct+Ht+4]=S.x,ve[Ct+Ht+5]=S.y,ve[Ct+Ht+6]=S.z,ve[Ct+Ht+7]=0),Ae===!0&&(S.fromBufferAttribute(bt,Ft),ve[Ct+Ht+8]=S.x,ve[Ct+Ht+9]=S.y,ve[Ct+Ht+10]=S.z,ve[Ct+Ht+11]=bt.itemSize===4?S.w:1)}}Te={count:he,texture:st,size:new Nl(ge,Le)},y.set(Z,Te),Z.addEventListener("dispose",et)}let oe=0;for(let De=0;De<ee.length;De++)oe+=ee[De];const ie=Z.morphTargetsRelative?1:1-oe;v.getUniforms().setValue(e,"morphTargetBaseInfluence",ie),v.getUniforms().setValue(e,"morphTargetInfluences",ee),v.getUniforms().setValue(e,"morphTargetsTexture",Te.texture,n),v.getUniforms().setValue(e,"morphTargetsTextureSize",Te.size)}else{const te=ee===void 0?0:ee.length;let he=t[Z.id];if(he===void 0||he.length!==te){he=[];for(let we=0;we<te;we++)he[we]=[we,0];t[Z.id]=he}for(let we=0;we<te;we++){const Ae=he[we];Ae[0]=we,Ae[1]=ee[we]}he.sort(qQ);for(let we=0;we<8;we++)we<te&&he[we][1]?(g[we][0]=he[we][0],g[we][1]=he[we][1]):(g[we][0]=Number.MAX_SAFE_INTEGER,g[we][1]=0);g.sort(kQ);const Te=Z.morphAttributes.position,oe=Z.morphAttributes.normal;let ie=0;for(let we=0;we<8;we++){const Ae=g[we],Ye=Ae[0],Ve=Ae[1];Ye!==Number.MAX_SAFE_INTEGER&&Ve?(Te&&Z.getAttribute("morphTarget"+we)!==Te[Ye]&&Z.setAttribute("morphTarget"+we,Te[Ye]),oe&&Z.getAttribute("morphNormal"+we)!==oe[Ye]&&Z.setAttribute("morphNormal"+we,oe[Ye]),c[we]=Ve,ie+=Ve):(Te&&Z.hasAttribute("morphTarget"+we)===!0&&Z.deleteAttribute("morphTarget"+we),oe&&Z.hasAttribute("morphNormal"+we)===!0&&Z.deleteAttribute("morphNormal"+we),c[we]=0)}const De=Z.morphTargetsRelative?1:1-ie;v.getUniforms().setValue(e,"morphTargetBaseInfluence",De),v.getUniforms().setValue(e,"morphTargetInfluences",c)}}return{update:G}}function QQ(e,l,n,t){let c=new WeakMap;function y(G){const V=t.render.frame,Z=G.geometry,v=l.get(G,Z);if(c.get(v)!==V&&(l.update(v),c.set(v,V)),G.isInstancedMesh&&(G.hasEventListener("dispose",g)===!1&&G.addEventListener("dispose",g),c.get(G)!==V&&(n.update(G.instanceMatrix,e.ARRAY_BUFFER),G.instanceColor!==null&&n.update(G.instanceColor,e.ARRAY_BUFFER),c.set(G,V))),G.isSkinnedMesh){const ee=G.skeleton;c.get(ee)!==V&&(ee.update(),c.set(ee,V))}return v}function S(){c=new WeakMap}function g(G){const V=G.target;V.removeEventListener("dispose",g),n.remove(V.instanceMatrix),V.instanceColor!==null&&n.remove(V.instanceColor)}return{update:y,dispose:S}}class aY extends p0{constructor(l,n,t,c,y,S,g,G,V,Z){if(Z=Z!==void 0?Z:Z8,Z!==Z8&&Z!==bb)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");t===void 0&&Z===Z8&&(t=CN),t===void 0&&Z===bb&&(t=$8),super(null,c,y,S,g,G,Z,t,V),this.isDepthTexture=!0,this.image={width:l,height:n},this.magFilter=g!==void 0?g:kf,this.minFilter=G!==void 0?G:kf,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(l){return super.copy(l),this.compareFunction=l.compareFunction,this}toJSON(l){const n=super.toJSON(l);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const iY=new p0,oY=new aY(1,1);oY.compareFunction=Kj;const cY=new Jj,hY=new Mk,fY=new sY,UW=[],FW=[],GW=new Float32Array(16),_W=new Float32Array(9),VW=new Float32Array(4);function kb(e,l,n){const t=e[0];if(t<=0||t>0)return e;const c=l*n;let y=UW[c];if(y===void 0&&(y=new Float32Array(c),UW[c]=y),l!==0){t.toArray(y,0);for(let S=1,g=0;S!==l;++S)g+=n,e[S].toArray(y,g)}return y}function nc(e,l){if(e.length!==l.length)return!1;for(let n=0,t=e.length;n<t;n++)if(e[n]!==l[n])return!1;return!0}function lc(e,l){for(let n=0,t=l.length;n<t;n++)e[n]=l[n]}function iF(e,l){let n=FW[l];n===void 0&&(n=new Int32Array(l),FW[l]=n);for(let t=0;t!==l;++t)n[t]=e.allocateTextureUnit();return n}function $Q(e,l){const n=this.cache;n[0]!==l&&(e.uniform1f(this.addr,l),n[0]=l)}function ZQ(e,l){const n=this.cache;if(l.x!==void 0)(n[0]!==l.x||n[1]!==l.y)&&(e.uniform2f(this.addr,l.x,l.y),n[0]=l.x,n[1]=l.y);else{if(nc(n,l))return;e.uniform2fv(this.addr,l),lc(n,l)}}function JQ(e,l){const n=this.cache;if(l.x!==void 0)(n[0]!==l.x||n[1]!==l.y||n[2]!==l.z)&&(e.uniform3f(this.addr,l.x,l.y,l.z),n[0]=l.x,n[1]=l.y,n[2]=l.z);else if(l.r!==void 0)(n[0]!==l.r||n[1]!==l.g||n[2]!==l.b)&&(e.uniform3f(this.addr,l.r,l.g,l.b),n[0]=l.r,n[1]=l.g,n[2]=l.b);else{if(nc(n,l))return;e.uniform3fv(this.addr,l),lc(n,l)}}function XQ(e,l){const n=this.cache;if(l.x!==void 0)(n[0]!==l.x||n[1]!==l.y||n[2]!==l.z||n[3]!==l.w)&&(e.uniform4f(this.addr,l.x,l.y,l.z,l.w),n[0]=l.x,n[1]=l.y,n[2]=l.z,n[3]=l.w);else{if(nc(n,l))return;e.uniform4fv(this.addr,l),lc(n,l)}}function vQ(e,l){const n=this.cache,t=l.elements;if(t===void 0){if(nc(n,l))return;e.uniformMatrix2fv(this.addr,!1,l),lc(n,l)}else{if(nc(n,t))return;VW.set(t),e.uniformMatrix2fv(this.addr,!1,VW),lc(n,t)}}function e$(e,l){const n=this.cache,t=l.elements;if(t===void 0){if(nc(n,l))return;e.uniformMatrix3fv(this.addr,!1,l),lc(n,l)}else{if(nc(n,t))return;_W.set(t),e.uniformMatrix3fv(this.addr,!1,_W),lc(n,t)}}function t$(e,l){const n=this.cache,t=l.elements;if(t===void 0){if(nc(n,l))return;e.uniformMatrix4fv(this.addr,!1,l),lc(n,l)}else{if(nc(n,t))return;GW.set(t),e.uniformMatrix4fv(this.addr,!1,GW),lc(n,t)}}function n$(e,l){const n=this.cache;n[0]!==l&&(e.uniform1i(this.addr,l),n[0]=l)}function l$(e,l){const n=this.cache;if(l.x!==void 0)(n[0]!==l.x||n[1]!==l.y)&&(e.uniform2i(this.addr,l.x,l.y),n[0]=l.x,n[1]=l.y);else{if(nc(n,l))return;e.uniform2iv(this.addr,l),lc(n,l)}}function s$(e,l){const n=this.cache;if(l.x!==void 0)(n[0]!==l.x||n[1]!==l.y||n[2]!==l.z)&&(e.uniform3i(this.addr,l.x,l.y,l.z),n[0]=l.x,n[1]=l.y,n[2]=l.z);else{if(nc(n,l))return;e.uniform3iv(this.addr,l),lc(n,l)}}function r$(e,l){const n=this.cache;if(l.x!==void 0)(n[0]!==l.x||n[1]!==l.y||n[2]!==l.z||n[3]!==l.w)&&(e.uniform4i(this.addr,l.x,l.y,l.z,l.w),n[0]=l.x,n[1]=l.y,n[2]=l.z,n[3]=l.w);else{if(nc(n,l))return;e.uniform4iv(this.addr,l),lc(n,l)}}function u$(e,l){const n=this.cache;n[0]!==l&&(e.uniform1ui(this.addr,l),n[0]=l)}function a$(e,l){const n=this.cache;if(l.x!==void 0)(n[0]!==l.x||n[1]!==l.y)&&(e.uniform2ui(this.addr,l.x,l.y),n[0]=l.x,n[1]=l.y);else{if(nc(n,l))return;e.uniform2uiv(this.addr,l),lc(n,l)}}function i$(e,l){const n=this.cache;if(l.x!==void 0)(n[0]!==l.x||n[1]!==l.y||n[2]!==l.z)&&(e.uniform3ui(this.addr,l.x,l.y,l.z),n[0]=l.x,n[1]=l.y,n[2]=l.z);else{if(nc(n,l))return;e.uniform3uiv(this.addr,l),lc(n,l)}}function o$(e,l){const n=this.cache;if(l.x!==void 0)(n[0]!==l.x||n[1]!==l.y||n[2]!==l.z||n[3]!==l.w)&&(e.uniform4ui(this.addr,l.x,l.y,l.z,l.w),n[0]=l.x,n[1]=l.y,n[2]=l.z,n[3]=l.w);else{if(nc(n,l))return;e.uniform4uiv(this.addr,l),lc(n,l)}}function c$(e,l,n){const t=this.cache,c=n.allocateTextureUnit();t[0]!==c&&(e.uniform1i(this.addr,c),t[0]=c);const y=this.type===e.SAMPLER_2D_SHADOW?oY:iY;n.setTexture2D(l||y,c)}function h$(e,l,n){const t=this.cache,c=n.allocateTextureUnit();t[0]!==c&&(e.uniform1i(this.addr,c),t[0]=c),n.setTexture3D(l||hY,c)}function f$(e,l,n){const t=this.cache,c=n.allocateTextureUnit();t[0]!==c&&(e.uniform1i(this.addr,c),t[0]=c),n.setTextureCube(l||fY,c)}function I$(e,l,n){const t=this.cache,c=n.allocateTextureUnit();t[0]!==c&&(e.uniform1i(this.addr,c),t[0]=c),n.setTexture2DArray(l||cY,c)}function d$(e){switch(e){case 5126:return $Q;case 35664:return ZQ;case 35665:return JQ;case 35666:return XQ;case 35674:return vQ;case 35675:return e$;case 35676:return t$;case 5124:case 35670:return n$;case 35667:case 35671:return l$;case 35668:case 35672:return s$;case 35669:case 35673:return r$;case 5125:return u$;case 36294:return a$;case 36295:return i$;case 36296:return o$;case 35678:case 36198:case 36298:case 36306:case 35682:return c$;case 35679:case 36299:case 36307:return h$;case 35680:case 36300:case 36308:case 36293:return f$;case 36289:case 36303:case 36311:case 36292:return I$}}function y$(e,l){e.uniform1fv(this.addr,l)}function w$(e,l){const n=kb(l,this.size,2);e.uniform2fv(this.addr,n)}function E$(e,l){const n=kb(l,this.size,3);e.uniform3fv(this.addr,n)}function T$(e,l){const n=kb(l,this.size,4);e.uniform4fv(this.addr,n)}function p$(e,l){const n=kb(l,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function R$(e,l){const n=kb(l,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function m$(e,l){const n=kb(l,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function D$(e,l){e.uniform1iv(this.addr,l)}function N$(e,l){e.uniform2iv(this.addr,l)}function A$(e,l){e.uniform3iv(this.addr,l)}function S$(e,l){e.uniform4iv(this.addr,l)}function L$(e,l){e.uniform1uiv(this.addr,l)}function O$(e,l){e.uniform2uiv(this.addr,l)}function g$(e,l){e.uniform3uiv(this.addr,l)}function P$(e,l){e.uniform4uiv(this.addr,l)}function b$(e,l,n){const t=this.cache,c=l.length,y=iF(n,c);nc(t,y)||(e.uniform1iv(this.addr,y),lc(t,y));for(let S=0;S!==c;++S)n.setTexture2D(l[S]||iY,y[S])}function C$(e,l,n){const t=this.cache,c=l.length,y=iF(n,c);nc(t,y)||(e.uniform1iv(this.addr,y),lc(t,y));for(let S=0;S!==c;++S)n.setTexture3D(l[S]||hY,y[S])}function M$(e,l,n){const t=this.cache,c=l.length,y=iF(n,c);nc(t,y)||(e.uniform1iv(this.addr,y),lc(t,y));for(let S=0;S!==c;++S)n.setTextureCube(l[S]||fY,y[S])}function x$(e,l,n){const t=this.cache,c=l.length,y=iF(n,c);nc(t,y)||(e.uniform1iv(this.addr,y),lc(t,y));for(let S=0;S!==c;++S)n.setTexture2DArray(l[S]||cY,y[S])}function H$(e){switch(e){case 5126:return y$;case 35664:return w$;case 35665:return E$;case 35666:return T$;case 35674:return p$;case 35675:return R$;case 35676:return m$;case 5124:case 35670:return D$;case 35667:case 35671:return N$;case 35668:case 35672:return A$;case 35669:case 35673:return S$;case 5125:return L$;case 36294:return O$;case 36295:return g$;case 36296:return P$;case 35678:case 36198:case 36298:case 36306:case 35682:return b$;case 35679:case 36299:case 36307:return C$;case 35680:case 36300:case 36308:case 36293:return M$;case 36289:case 36303:case 36311:case 36292:return x$}}class B${constructor(l,n,t){this.id=l,this.addr=t,this.cache=[],this.type=n.type,this.setValue=d$(n.type)}}class U${constructor(l,n,t){this.id=l,this.addr=t,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=H$(n.type)}}class F${constructor(l){this.id=l,this.seq=[],this.map={}}setValue(l,n,t){const c=this.seq;for(let y=0,S=c.length;y!==S;++y){const g=c[y];g.setValue(l,n[g.id],t)}}}const CG=/(\w+)(\])?(\[|\.)?/g;function WW(e,l){e.seq.push(l),e.map[l.id]=l}function G$(e,l,n){const t=e.name,c=t.length;for(CG.lastIndex=0;;){const y=CG.exec(t),S=CG.lastIndex;let g=y[1];const G=y[2]==="]",V=y[3];if(G&&(g=g|0),V===void 0||V==="["&&S+2===c){WW(n,V===void 0?new B$(g,e,l):new U$(g,e,l));break}else{let v=n.map[g];v===void 0&&(v=new F$(g),WW(n,v)),n=v}}}class wU{constructor(l,n){this.seq=[],this.map={};const t=l.getProgramParameter(n,l.ACTIVE_UNIFORMS);for(let c=0;c<t;++c){const y=l.getActiveUniform(n,c),S=l.getUniformLocation(n,y.name);G$(y,S,this)}}setValue(l,n,t,c){const y=this.map[n];y!==void 0&&y.setValue(l,t,c)}setOptional(l,n,t){const c=n[t];c!==void 0&&this.setValue(l,t,c)}static upload(l,n,t,c){for(let y=0,S=n.length;y!==S;++y){const g=n[y],G=t[g.id];G.needsUpdate!==!1&&g.setValue(l,G.value,c)}}static seqWithValue(l,n){const t=[];for(let c=0,y=l.length;c!==y;++c){const S=l[c];S.id in n&&t.push(S)}return t}}function jW(e,l,n){const t=e.createShader(l);return e.shaderSource(t,n),e.compileShader(t),t}const _$=37297;let V$=0;function W$(e,l){const n=e.split(`
`),t=[],c=Math.max(l-6,0),y=Math.min(l+6,n.length);for(let S=c;S<y;S++){const g=S+1;t.push(`${g===l?">":" "} ${g}: ${n[S]}`)}return t.join(`
`)}function j$(e){const l=ks.getPrimaries(ks.workingColorSpace),n=ks.getPrimaries(e);let t;switch(l===n?t="":l===vU&&n===XU?t="LinearDisplayP3ToLinearSRGB":l===XU&&n===vU&&(t="LinearSRGBToLinearDisplayP3"),e){case X7:case rF:return[t,"LinearTransferOETF"];case qf:case V_:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",e),[t,"LinearTransferOETF"]}}function YW(e,l,n){const t=e.getShaderParameter(l,e.COMPILE_STATUS),c=e.getShaderInfoLog(l).trim();if(t&&c==="")return"";const y=/ERROR: 0:(\d+)/.exec(c);if(y){const S=parseInt(y[1]);return n.toUpperCase()+`

`+c+`

`+W$(e.getShaderSource(l),S)}else return c}function Y$(e,l){const n=j$(l);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function z$(e,l){let n;switch(l){case jz:n="Linear";break;case Yz:n="Reinhard";break;case zz:n="OptimizedCineon";break;case kz:n="ACESFilmic";break;case Kz:n="AgX";break;case qz:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",l),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function k$(e){return[e.extensionDerivatives||e.envMapCubeUVHeight||e.bumpMap||e.normalMapTangentSpace||e.clearcoatNormalMap||e.flatShading||e.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(e.extensionShaderTextureLOD||e.envMap||e.transmission)&&e.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Eb).join(`
`)}function q$(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Eb).join(`
`)}function K$(e){const l=[];for(const n in e){const t=e[n];t!==!1&&l.push("#define "+n+" "+t)}return l.join(`
`)}function Q$(e,l){const n={},t=e.getProgramParameter(l,e.ACTIVE_ATTRIBUTES);for(let c=0;c<t;c++){const y=e.getActiveAttrib(l,c),S=y.name;let g=1;y.type===e.FLOAT_MAT2&&(g=2),y.type===e.FLOAT_MAT3&&(g=3),y.type===e.FLOAT_MAT4&&(g=4),n[S]={type:y.type,location:e.getAttribLocation(l,S),locationSize:g}}return n}function Eb(e){return e!==""}function zW(e,l){const n=l.numSpotLightShadows+l.numSpotLightMaps-l.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,l.numDirLights).replace(/NUM_SPOT_LIGHTS/g,l.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,l.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,l.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,l.numPointLights).replace(/NUM_HEMI_LIGHTS/g,l.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,l.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,l.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,l.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,l.numPointLightShadows)}function kW(e,l){return e.replace(/NUM_CLIPPING_PLANES/g,l.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,l.numClippingPlanes-l.numClipIntersection)}const $$=/^[ \t]*#include +<([\w\d./]+)>/gm;function s_(e){return e.replace($$,J$)}const Z$=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function J$(e,l){let n=Ol[l];if(n===void 0){const t=Z$.get(l);if(t!==void 0)n=Ol[t],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',l,t);else throw new Error("Can not resolve #include <"+l+">")}return s_(n)}const X$=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qW(e){return e.replace(X$,v$)}function v$(e,l,n,t){let c="";for(let y=parseInt(l);y<parseInt(n);y++)c+=t.replace(/\[\s*i\s*\]/g,"[ "+y+" ]").replace(/UNROLLED_LOOP_INDEX/g,y);return c}function KW(e){let l="precision "+e.precision+` float;
precision `+e.precision+" int;";return e.precision==="highp"?l+=`
#define HIGH_PRECISION`:e.precision==="mediump"?l+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(l+=`
#define LOW_PRECISION`),l}function eZ(e){let l="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Fj?l="SHADOWMAP_TYPE_PCF":e.shadowMapType===wz?l="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===G6&&(l="SHADOWMAP_TYPE_VSM"),l}function tZ(e){let l="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case gb:case Pb:l="ENVMAP_TYPE_CUBE";break;case sF:l="ENVMAP_TYPE_CUBE_UV";break}return l}function nZ(e){let l="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Pb:l="ENVMAP_MODE_REFRACTION";break}return l}function lZ(e){let l="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case F_:l="ENVMAP_BLENDING_MULTIPLY";break;case Vz:l="ENVMAP_BLENDING_MIX";break;case Wz:l="ENVMAP_BLENDING_ADD";break}return l}function sZ(e){const l=e.envMapCubeUVHeight;if(l===null)return null;const n=Math.log2(l)-2,t=1/l;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:t,maxMip:n}}function rZ(e,l,n,t){const c=e.getContext(),y=n.defines;let S=n.vertexShader,g=n.fragmentShader;const G=eZ(n),V=tZ(n),Z=nZ(n),v=lZ(n),ee=sZ(n),te=n.isWebGL2?"":k$(n),he=q$(n),Te=K$(y),oe=c.createProgram();let ie,De,we=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(ie=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,Te].filter(Eb).join(`
`),ie.length>0&&(ie+=`
`),De=[te,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,Te].filter(Eb).join(`
`),De.length>0&&(De+=`
`)):(ie=[KW(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,Te,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+Z:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+G:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eb).join(`
`),De=[te,KW(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,Te,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+V:"",n.envMap?"#define "+Z:"",n.envMap?"#define "+v:"",ee?"#define CUBEUV_TEXEL_WIDTH "+ee.texelWidth:"",ee?"#define CUBEUV_TEXEL_HEIGHT "+ee.texelHeight:"",ee?"#define CUBEUV_MAX_MIP "+ee.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+G:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==GN?"#define TONE_MAPPING":"",n.toneMapping!==GN?Ol.tonemapping_pars_fragment:"",n.toneMapping!==GN?z$("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ol.colorspace_pars_fragment,Y$("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Eb).join(`
`)),S=s_(S),S=zW(S,n),S=kW(S,n),g=s_(g),g=zW(g,n),g=kW(g,n),S=qW(S),g=qW(g),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(we=`#version 300 es
`,ie=[he,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+ie,De=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===hW?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===hW?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+De);const Ae=we+ie+S,Ye=we+De+g,Ve=jW(c,c.VERTEX_SHADER,Ae),_e=jW(c,c.FRAGMENT_SHADER,Ye);c.attachShader(oe,Ve),c.attachShader(oe,_e),n.index0AttributeName!==void 0?c.bindAttribLocation(oe,0,n.index0AttributeName):n.morphTargets===!0&&c.bindAttribLocation(oe,0,"position"),c.linkProgram(oe);function Xe(st){if(e.debug.checkShaderErrors){const ft=c.getProgramInfoLog(oe).trim(),et=c.getShaderInfoLog(Ve).trim(),at=c.getShaderInfoLog(_e).trim();let It=!0,St=!0;if(c.getProgramParameter(oe,c.LINK_STATUS)===!1)if(It=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(c,oe,Ve,_e);else{const bt=YW(c,Ve,"vertex"),Ct=YW(c,_e,"fragment");console.error("THREE.WebGLProgram: Shader Error "+c.getError()+" - VALIDATE_STATUS "+c.getProgramParameter(oe,c.VALIDATE_STATUS)+`

Program Info Log: `+ft+`
`+bt+`
`+Ct)}else ft!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ft):(et===""||at==="")&&(St=!1);St&&(st.diagnostics={runnable:It,programLog:ft,vertexShader:{log:et,prefix:ie},fragmentShader:{log:at,prefix:De}})}c.deleteShader(Ve),c.deleteShader(_e),ge=new wU(c,oe),Le=Q$(c,oe)}let ge;this.getUniforms=function(){return ge===void 0&&Xe(this),ge};let Le;this.getAttributes=function(){return Le===void 0&&Xe(this),Le};let ve=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ve===!1&&(ve=c.getProgramParameter(oe,_$)),ve},this.destroy=function(){t.releaseStatesOfProgram(this),c.deleteProgram(oe),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=V$++,this.cacheKey=l,this.usedTimes=1,this.program=oe,this.vertexShader=Ve,this.fragmentShader=_e,this}let uZ=0;class aZ{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(l){const n=l.vertexShader,t=l.fragmentShader,c=this._getShaderStage(n),y=this._getShaderStage(t),S=this._getShaderCacheForMaterial(l);return S.has(c)===!1&&(S.add(c),c.usedTimes++),S.has(y)===!1&&(S.add(y),y.usedTimes++),this}remove(l){const n=this.materialCache.get(l);for(const t of n)t.usedTimes--,t.usedTimes===0&&this.shaderCache.delete(t.code);return this.materialCache.delete(l),this}getVertexShaderID(l){return this._getShaderStage(l.vertexShader).id}getFragmentShaderID(l){return this._getShaderStage(l.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(l){const n=this.materialCache;let t=n.get(l);return t===void 0&&(t=new Set,n.set(l,t)),t}_getShaderStage(l){const n=this.shaderCache;let t=n.get(l);return t===void 0&&(t=new iZ(l),n.set(l,t)),t}}class iZ{constructor(l){this.id=uZ++,this.code=l,this.usedTimes=0}}function oZ(e,l,n,t,c,y,S){const g=new j_,G=new aZ,V=[],Z=c.isWebGL2,v=c.logarithmicDepthBuffer,ee=c.vertexTextures;let te=c.precision;const he={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function Te(ge){return ge===0?"uv":`uv${ge}`}function oe(ge,Le,ve,st,ft){const et=st.fog,at=ft.geometry,It=ge.isMeshStandardMaterial?st.environment:null,St=(ge.isMeshStandardMaterial?n:l).get(ge.envMap||It),bt=St&&St.mapping===sF?St.image.height:null,Ct=he[ge.type];ge.precision!==null&&(te=c.getMaxPrecision(ge.precision),te!==ge.precision&&console.warn("THREE.WebGLProgram.getParameters:",ge.precision,"not supported, using",te,"instead."));const Ft=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Ht=Ft!==void 0?Ft.length:0;let Ut=0;at.morphAttributes.position!==void 0&&(Ut=1),at.morphAttributes.normal!==void 0&&(Ut=2),at.morphAttributes.color!==void 0&&(Ut=3);let Lt,Bt,Xt,mn;if(Ct){const rs=vT[Ct];Lt=rs.vertexShader,Bt=rs.fragmentShader}else Lt=ge.vertexShader,Bt=ge.fragmentShader,G.update(ge),Xt=G.getVertexShaderID(ge),mn=G.getFragmentShaderID(ge);const An=e.getRenderTarget(),Un=ft.isInstancedMesh===!0,Fn=ft.isBatchedMesh===!0,yn=!!ge.map,vn=!!ge.matcap,Tt=!!St,Jl=!!ge.aoMap,Mn=!!ge.lightMap,_n=!!ge.bumpMap,wn=!!ge.normalMap,Hl=!!ge.displacementMap,sl=!!ge.emissiveMap,je=!!ge.metalnessMap,We=!!ge.roughnessMap,Dt=ge.anisotropy>0,qt=ge.clearcoat>0,zt=ge.iridescence>0,Wt=ge.sheen>0,Sn=ge.transmission>0,on=Dt&&!!ge.anisotropyMap,In=qt&&!!ge.clearcoatMap,bn=qt&&!!ge.clearcoatNormalMap,Hn=qt&&!!ge.clearcoatRoughnessMap,Gt=zt&&!!ge.iridescenceMap,pl=zt&&!!ge.iridescenceThicknessMap,$n=Wt&&!!ge.sheenColorMap,Vn=Wt&&!!ge.sheenRoughnessMap,gn=!!ge.specularMap,Tn=!!ge.specularColorMap,Zn=!!ge.specularIntensityMap,gl=Sn&&!!ge.transmissionMap,hn=Sn&&!!ge.thicknessMap,En=!!ge.gradientMap,Jt=!!ge.alphaMap,ut=ge.alphaTest>0,Kt=!!ge.alphaHash,tn=!!ge.extensions,nn=!!at.attributes.uv1,Bn=!!at.attributes.uv2,pn=!!at.attributes.uv3;let kl=GN;return ge.toneMapped&&(An===null||An.isXRRenderTarget===!0)&&(kl=e.toneMapping),{isWebGL2:Z,shaderID:Ct,shaderType:ge.type,shaderName:ge.name,vertexShader:Lt,fragmentShader:Bt,defines:ge.defines,customVertexShaderID:Xt,customFragmentShaderID:mn,isRawShaderMaterial:ge.isRawShaderMaterial===!0,glslVersion:ge.glslVersion,precision:te,batching:Fn,instancing:Un,instancingColor:Un&&ft.instanceColor!==null,supportsVertexTextures:ee,outputColorSpace:An===null?e.outputColorSpace:An.isXRRenderTarget===!0?An.texture.colorSpace:X7,map:yn,matcap:vn,envMap:Tt,envMapMode:Tt&&St.mapping,envMapCubeUVHeight:bt,aoMap:Jl,lightMap:Mn,bumpMap:_n,normalMap:wn,displacementMap:ee&&Hl,emissiveMap:sl,normalMapObjectSpace:wn&&ge.normalMapType===rk,normalMapTangentSpace:wn&&ge.normalMapType===__,metalnessMap:je,roughnessMap:We,anisotropy:Dt,anisotropyMap:on,clearcoat:qt,clearcoatMap:In,clearcoatNormalMap:bn,clearcoatRoughnessMap:Hn,iridescence:zt,iridescenceMap:Gt,iridescenceThicknessMap:pl,sheen:Wt,sheenColorMap:$n,sheenRoughnessMap:Vn,specularMap:gn,specularColorMap:Tn,specularIntensityMap:Zn,transmission:Sn,transmissionMap:gl,thicknessMap:hn,gradientMap:En,opaque:ge.transparent===!1&&ge.blending===Db,alphaMap:Jt,alphaTest:ut,alphaHash:Kt,combine:ge.combine,mapUv:yn&&Te(ge.map.channel),aoMapUv:Jl&&Te(ge.aoMap.channel),lightMapUv:Mn&&Te(ge.lightMap.channel),bumpMapUv:_n&&Te(ge.bumpMap.channel),normalMapUv:wn&&Te(ge.normalMap.channel),displacementMapUv:Hl&&Te(ge.displacementMap.channel),emissiveMapUv:sl&&Te(ge.emissiveMap.channel),metalnessMapUv:je&&Te(ge.metalnessMap.channel),roughnessMapUv:We&&Te(ge.roughnessMap.channel),anisotropyMapUv:on&&Te(ge.anisotropyMap.channel),clearcoatMapUv:In&&Te(ge.clearcoatMap.channel),clearcoatNormalMapUv:bn&&Te(ge.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Hn&&Te(ge.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&Te(ge.iridescenceMap.channel),iridescenceThicknessMapUv:pl&&Te(ge.iridescenceThicknessMap.channel),sheenColorMapUv:$n&&Te(ge.sheenColorMap.channel),sheenRoughnessMapUv:Vn&&Te(ge.sheenRoughnessMap.channel),specularMapUv:gn&&Te(ge.specularMap.channel),specularColorMapUv:Tn&&Te(ge.specularColorMap.channel),specularIntensityMapUv:Zn&&Te(ge.specularIntensityMap.channel),transmissionMapUv:gl&&Te(ge.transmissionMap.channel),thicknessMapUv:hn&&Te(ge.thicknessMap.channel),alphaMapUv:Jt&&Te(ge.alphaMap.channel),vertexTangents:!!at.attributes.tangent&&(wn||Dt),vertexColors:ge.vertexColors,vertexAlphas:ge.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,vertexUv1s:nn,vertexUv2s:Bn,vertexUv3s:pn,pointsUvs:ft.isPoints===!0&&!!at.attributes.uv&&(yn||Jt),fog:!!et,useFog:ge.fog===!0,fogExp2:et&&et.isFogExp2,flatShading:ge.flatShading===!0,sizeAttenuation:ge.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:ft.isSkinnedMesh===!0,morphTargets:at.morphAttributes.position!==void 0,morphNormals:at.morphAttributes.normal!==void 0,morphColors:at.morphAttributes.color!==void 0,morphTargetsCount:Ht,morphTextureStride:Ut,numDirLights:Le.directional.length,numPointLights:Le.point.length,numSpotLights:Le.spot.length,numSpotLightMaps:Le.spotLightMap.length,numRectAreaLights:Le.rectArea.length,numHemiLights:Le.hemi.length,numDirLightShadows:Le.directionalShadowMap.length,numPointLightShadows:Le.pointShadowMap.length,numSpotLightShadows:Le.spotShadowMap.length,numSpotLightShadowsWithMaps:Le.numSpotLightShadowsWithMaps,numLightProbes:Le.numLightProbes,numClippingPlanes:S.numPlanes,numClipIntersection:S.numIntersection,dithering:ge.dithering,shadowMapEnabled:e.shadowMap.enabled&&ve.length>0,shadowMapType:e.shadowMap.type,toneMapping:kl,useLegacyLights:e._useLegacyLights,decodeVideoTexture:yn&&ge.map.isVideoTexture===!0&&ks.getTransfer(ge.map.colorSpace)===dr,premultipliedAlpha:ge.premultipliedAlpha,doubleSided:ge.side===ep,flipSided:ge.side===D3,useDepthPacking:ge.depthPacking>=0,depthPacking:ge.depthPacking||0,index0AttributeName:ge.index0AttributeName,extensionDerivatives:tn&&ge.extensions.derivatives===!0,extensionFragDepth:tn&&ge.extensions.fragDepth===!0,extensionDrawBuffers:tn&&ge.extensions.drawBuffers===!0,extensionShaderTextureLOD:tn&&ge.extensions.shaderTextureLOD===!0,extensionClipCullDistance:tn&&ge.extensions.clipCullDistance&&t.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:Z||t.has("EXT_frag_depth"),rendererExtensionDrawBuffers:Z||t.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:Z||t.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:ge.customProgramCacheKey()}}function ie(ge){const Le=[];if(ge.shaderID?Le.push(ge.shaderID):(Le.push(ge.customVertexShaderID),Le.push(ge.customFragmentShaderID)),ge.defines!==void 0)for(const ve in ge.defines)Le.push(ve),Le.push(ge.defines[ve]);return ge.isRawShaderMaterial===!1&&(De(Le,ge),we(Le,ge),Le.push(e.outputColorSpace)),Le.push(ge.customProgramCacheKey),Le.join()}function De(ge,Le){ge.push(Le.precision),ge.push(Le.outputColorSpace),ge.push(Le.envMapMode),ge.push(Le.envMapCubeUVHeight),ge.push(Le.mapUv),ge.push(Le.alphaMapUv),ge.push(Le.lightMapUv),ge.push(Le.aoMapUv),ge.push(Le.bumpMapUv),ge.push(Le.normalMapUv),ge.push(Le.displacementMapUv),ge.push(Le.emissiveMapUv),ge.push(Le.metalnessMapUv),ge.push(Le.roughnessMapUv),ge.push(Le.anisotropyMapUv),ge.push(Le.clearcoatMapUv),ge.push(Le.clearcoatNormalMapUv),ge.push(Le.clearcoatRoughnessMapUv),ge.push(Le.iridescenceMapUv),ge.push(Le.iridescenceThicknessMapUv),ge.push(Le.sheenColorMapUv),ge.push(Le.sheenRoughnessMapUv),ge.push(Le.specularMapUv),ge.push(Le.specularColorMapUv),ge.push(Le.specularIntensityMapUv),ge.push(Le.transmissionMapUv),ge.push(Le.thicknessMapUv),ge.push(Le.combine),ge.push(Le.fogExp2),ge.push(Le.sizeAttenuation),ge.push(Le.morphTargetsCount),ge.push(Le.morphAttributeCount),ge.push(Le.numDirLights),ge.push(Le.numPointLights),ge.push(Le.numSpotLights),ge.push(Le.numSpotLightMaps),ge.push(Le.numHemiLights),ge.push(Le.numRectAreaLights),ge.push(Le.numDirLightShadows),ge.push(Le.numPointLightShadows),ge.push(Le.numSpotLightShadows),ge.push(Le.numSpotLightShadowsWithMaps),ge.push(Le.numLightProbes),ge.push(Le.shadowMapType),ge.push(Le.toneMapping),ge.push(Le.numClippingPlanes),ge.push(Le.numClipIntersection),ge.push(Le.depthPacking)}function we(ge,Le){g.disableAll(),Le.isWebGL2&&g.enable(0),Le.supportsVertexTextures&&g.enable(1),Le.instancing&&g.enable(2),Le.instancingColor&&g.enable(3),Le.matcap&&g.enable(4),Le.envMap&&g.enable(5),Le.normalMapObjectSpace&&g.enable(6),Le.normalMapTangentSpace&&g.enable(7),Le.clearcoat&&g.enable(8),Le.iridescence&&g.enable(9),Le.alphaTest&&g.enable(10),Le.vertexColors&&g.enable(11),Le.vertexAlphas&&g.enable(12),Le.vertexUv1s&&g.enable(13),Le.vertexUv2s&&g.enable(14),Le.vertexUv3s&&g.enable(15),Le.vertexTangents&&g.enable(16),Le.anisotropy&&g.enable(17),Le.alphaHash&&g.enable(18),Le.batching&&g.enable(19),ge.push(g.mask),g.disableAll(),Le.fog&&g.enable(0),Le.useFog&&g.enable(1),Le.flatShading&&g.enable(2),Le.logarithmicDepthBuffer&&g.enable(3),Le.skinning&&g.enable(4),Le.morphTargets&&g.enable(5),Le.morphNormals&&g.enable(6),Le.morphColors&&g.enable(7),Le.premultipliedAlpha&&g.enable(8),Le.shadowMapEnabled&&g.enable(9),Le.useLegacyLights&&g.enable(10),Le.doubleSided&&g.enable(11),Le.flipSided&&g.enable(12),Le.useDepthPacking&&g.enable(13),Le.dithering&&g.enable(14),Le.transmission&&g.enable(15),Le.sheen&&g.enable(16),Le.opaque&&g.enable(17),Le.pointsUvs&&g.enable(18),Le.decodeVideoTexture&&g.enable(19),ge.push(g.mask)}function Ae(ge){const Le=he[ge.type];let ve;if(Le){const st=vT[Le];ve=kk.clone(st.uniforms)}else ve=ge.uniforms;return ve}function Ye(ge,Le){let ve;for(let st=0,ft=V.length;st<ft;st++){const et=V[st];if(et.cacheKey===Le){ve=et,++ve.usedTimes;break}}return ve===void 0&&(ve=new rZ(e,Le,ge,y),V.push(ve)),ve}function Ve(ge){if(--ge.usedTimes===0){const Le=V.indexOf(ge);V[Le]=V[V.length-1],V.pop(),ge.destroy()}}function _e(ge){G.remove(ge)}function Xe(){G.dispose()}return{getParameters:oe,getProgramCacheKey:ie,getUniforms:Ae,acquireProgram:Ye,releaseProgram:Ve,releaseShaderCache:_e,programs:V,dispose:Xe}}function cZ(){let e=new WeakMap;function l(y){let S=e.get(y);return S===void 0&&(S={},e.set(y,S)),S}function n(y){e.delete(y)}function t(y,S,g){e.get(y)[S]=g}function c(){e=new WeakMap}return{get:l,remove:n,update:t,dispose:c}}function hZ(e,l){return e.groupOrder!==l.groupOrder?e.groupOrder-l.groupOrder:e.renderOrder!==l.renderOrder?e.renderOrder-l.renderOrder:e.material.id!==l.material.id?e.material.id-l.material.id:e.z!==l.z?e.z-l.z:e.id-l.id}function QW(e,l){return e.groupOrder!==l.groupOrder?e.groupOrder-l.groupOrder:e.renderOrder!==l.renderOrder?e.renderOrder-l.renderOrder:e.z!==l.z?l.z-e.z:e.id-l.id}function $W(){const e=[];let l=0;const n=[],t=[],c=[];function y(){l=0,n.length=0,t.length=0,c.length=0}function S(v,ee,te,he,Te,oe){let ie=e[l];return ie===void 0?(ie={id:v.id,object:v,geometry:ee,material:te,groupOrder:he,renderOrder:v.renderOrder,z:Te,group:oe},e[l]=ie):(ie.id=v.id,ie.object=v,ie.geometry=ee,ie.material=te,ie.groupOrder=he,ie.renderOrder=v.renderOrder,ie.z=Te,ie.group=oe),l++,ie}function g(v,ee,te,he,Te,oe){const ie=S(v,ee,te,he,Te,oe);te.transmission>0?t.push(ie):te.transparent===!0?c.push(ie):n.push(ie)}function G(v,ee,te,he,Te,oe){const ie=S(v,ee,te,he,Te,oe);te.transmission>0?t.unshift(ie):te.transparent===!0?c.unshift(ie):n.unshift(ie)}function V(v,ee){n.length>1&&n.sort(v||hZ),t.length>1&&t.sort(ee||QW),c.length>1&&c.sort(ee||QW)}function Z(){for(let v=l,ee=e.length;v<ee;v++){const te=e[v];if(te.id===null)break;te.id=null,te.object=null,te.geometry=null,te.material=null,te.group=null}}return{opaque:n,transmissive:t,transparent:c,init:y,push:g,unshift:G,finish:Z,sort:V}}function fZ(){let e=new WeakMap;function l(t,c){const y=e.get(t);let S;return y===void 0?(S=new $W,e.set(t,[S])):c>=y.length?(S=new $W,y.push(S)):S=y[c],S}function n(){e=new WeakMap}return{get:l,dispose:n}}function IZ(){const e={};return{get:function(l){if(e[l.id]!==void 0)return e[l.id];let n;switch(l.type){case"DirectionalLight":n={direction:new nt,color:new Dl};break;case"SpotLight":n={position:new nt,direction:new nt,color:new Dl,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new nt,color:new Dl,distance:0,decay:0};break;case"HemisphereLight":n={direction:new nt,skyColor:new Dl,groundColor:new Dl};break;case"RectAreaLight":n={color:new Dl,position:new nt,halfWidth:new nt,halfHeight:new nt};break}return e[l.id]=n,n}}}function dZ(){const e={};return{get:function(l){if(e[l.id]!==void 0)return e[l.id];let n;switch(l.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nl};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nl};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nl,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[l.id]=n,n}}}let yZ=0;function wZ(e,l){return(l.castShadow?2:0)-(e.castShadow?2:0)+(l.map?1:0)-(e.map?1:0)}function EZ(e,l){const n=new IZ,t=dZ(),c={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let Z=0;Z<9;Z++)c.probe.push(new nt);const y=new nt,S=new Sl,g=new Sl;function G(Z,v){let ee=0,te=0,he=0;for(let st=0;st<9;st++)c.probe[st].set(0,0,0);let Te=0,oe=0,ie=0,De=0,we=0,Ae=0,Ye=0,Ve=0,_e=0,Xe=0,ge=0;Z.sort(wZ);const Le=v===!0?Math.PI:1;for(let st=0,ft=Z.length;st<ft;st++){const et=Z[st],at=et.color,It=et.intensity,St=et.distance,bt=et.shadow&&et.shadow.map?et.shadow.map.texture:null;if(et.isAmbientLight)ee+=at.r*It*Le,te+=at.g*It*Le,he+=at.b*It*Le;else if(et.isLightProbe){for(let Ct=0;Ct<9;Ct++)c.probe[Ct].addScaledVector(et.sh.coefficients[Ct],It);ge++}else if(et.isDirectionalLight){const Ct=n.get(et);if(Ct.color.copy(et.color).multiplyScalar(et.intensity*Le),et.castShadow){const Ft=et.shadow,Ht=t.get(et);Ht.shadowBias=Ft.bias,Ht.shadowNormalBias=Ft.normalBias,Ht.shadowRadius=Ft.radius,Ht.shadowMapSize=Ft.mapSize,c.directionalShadow[Te]=Ht,c.directionalShadowMap[Te]=bt,c.directionalShadowMatrix[Te]=et.shadow.matrix,Ae++}c.directional[Te]=Ct,Te++}else if(et.isSpotLight){const Ct=n.get(et);Ct.position.setFromMatrixPosition(et.matrixWorld),Ct.color.copy(at).multiplyScalar(It*Le),Ct.distance=St,Ct.coneCos=Math.cos(et.angle),Ct.penumbraCos=Math.cos(et.angle*(1-et.penumbra)),Ct.decay=et.decay,c.spot[ie]=Ct;const Ft=et.shadow;if(et.map&&(c.spotLightMap[_e]=et.map,_e++,Ft.updateMatrices(et),et.castShadow&&Xe++),c.spotLightMatrix[ie]=Ft.matrix,et.castShadow){const Ht=t.get(et);Ht.shadowBias=Ft.bias,Ht.shadowNormalBias=Ft.normalBias,Ht.shadowRadius=Ft.radius,Ht.shadowMapSize=Ft.mapSize,c.spotShadow[ie]=Ht,c.spotShadowMap[ie]=bt,Ve++}ie++}else if(et.isRectAreaLight){const Ct=n.get(et);Ct.color.copy(at).multiplyScalar(It),Ct.halfWidth.set(et.width*.5,0,0),Ct.halfHeight.set(0,et.height*.5,0),c.rectArea[De]=Ct,De++}else if(et.isPointLight){const Ct=n.get(et);if(Ct.color.copy(et.color).multiplyScalar(et.intensity*Le),Ct.distance=et.distance,Ct.decay=et.decay,et.castShadow){const Ft=et.shadow,Ht=t.get(et);Ht.shadowBias=Ft.bias,Ht.shadowNormalBias=Ft.normalBias,Ht.shadowRadius=Ft.radius,Ht.shadowMapSize=Ft.mapSize,Ht.shadowCameraNear=Ft.camera.near,Ht.shadowCameraFar=Ft.camera.far,c.pointShadow[oe]=Ht,c.pointShadowMap[oe]=bt,c.pointShadowMatrix[oe]=et.shadow.matrix,Ye++}c.point[oe]=Ct,oe++}else if(et.isHemisphereLight){const Ct=n.get(et);Ct.skyColor.copy(et.color).multiplyScalar(It*Le),Ct.groundColor.copy(et.groundColor).multiplyScalar(It*Le),c.hemi[we]=Ct,we++}}De>0&&(l.isWebGL2?e.has("OES_texture_float_linear")===!0?(c.rectAreaLTC1=fn.LTC_FLOAT_1,c.rectAreaLTC2=fn.LTC_FLOAT_2):(c.rectAreaLTC1=fn.LTC_HALF_1,c.rectAreaLTC2=fn.LTC_HALF_2):e.has("OES_texture_float_linear")===!0?(c.rectAreaLTC1=fn.LTC_FLOAT_1,c.rectAreaLTC2=fn.LTC_FLOAT_2):e.has("OES_texture_half_float_linear")===!0?(c.rectAreaLTC1=fn.LTC_HALF_1,c.rectAreaLTC2=fn.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),c.ambient[0]=ee,c.ambient[1]=te,c.ambient[2]=he;const ve=c.hash;(ve.directionalLength!==Te||ve.pointLength!==oe||ve.spotLength!==ie||ve.rectAreaLength!==De||ve.hemiLength!==we||ve.numDirectionalShadows!==Ae||ve.numPointShadows!==Ye||ve.numSpotShadows!==Ve||ve.numSpotMaps!==_e||ve.numLightProbes!==ge)&&(c.directional.length=Te,c.spot.length=ie,c.rectArea.length=De,c.point.length=oe,c.hemi.length=we,c.directionalShadow.length=Ae,c.directionalShadowMap.length=Ae,c.pointShadow.length=Ye,c.pointShadowMap.length=Ye,c.spotShadow.length=Ve,c.spotShadowMap.length=Ve,c.directionalShadowMatrix.length=Ae,c.pointShadowMatrix.length=Ye,c.spotLightMatrix.length=Ve+_e-Xe,c.spotLightMap.length=_e,c.numSpotLightShadowsWithMaps=Xe,c.numLightProbes=ge,ve.directionalLength=Te,ve.pointLength=oe,ve.spotLength=ie,ve.rectAreaLength=De,ve.hemiLength=we,ve.numDirectionalShadows=Ae,ve.numPointShadows=Ye,ve.numSpotShadows=Ve,ve.numSpotMaps=_e,ve.numLightProbes=ge,c.version=yZ++)}function V(Z,v){let ee=0,te=0,he=0,Te=0,oe=0;const ie=v.matrixWorldInverse;for(let De=0,we=Z.length;De<we;De++){const Ae=Z[De];if(Ae.isDirectionalLight){const Ye=c.directional[ee];Ye.direction.setFromMatrixPosition(Ae.matrixWorld),y.setFromMatrixPosition(Ae.target.matrixWorld),Ye.direction.sub(y),Ye.direction.transformDirection(ie),ee++}else if(Ae.isSpotLight){const Ye=c.spot[he];Ye.position.setFromMatrixPosition(Ae.matrixWorld),Ye.position.applyMatrix4(ie),Ye.direction.setFromMatrixPosition(Ae.matrixWorld),y.setFromMatrixPosition(Ae.target.matrixWorld),Ye.direction.sub(y),Ye.direction.transformDirection(ie),he++}else if(Ae.isRectAreaLight){const Ye=c.rectArea[Te];Ye.position.setFromMatrixPosition(Ae.matrixWorld),Ye.position.applyMatrix4(ie),g.identity(),S.copy(Ae.matrixWorld),S.premultiply(ie),g.extractRotation(S),Ye.halfWidth.set(Ae.width*.5,0,0),Ye.halfHeight.set(0,Ae.height*.5,0),Ye.halfWidth.applyMatrix4(g),Ye.halfHeight.applyMatrix4(g),Te++}else if(Ae.isPointLight){const Ye=c.point[te];Ye.position.setFromMatrixPosition(Ae.matrixWorld),Ye.position.applyMatrix4(ie),te++}else if(Ae.isHemisphereLight){const Ye=c.hemi[oe];Ye.direction.setFromMatrixPosition(Ae.matrixWorld),Ye.direction.transformDirection(ie),oe++}}}return{setup:G,setupView:V,state:c}}function ZW(e,l){const n=new EZ(e,l),t=[],c=[];function y(){t.length=0,c.length=0}function S(v){t.push(v)}function g(v){c.push(v)}function G(v){n.setup(t,v)}function V(v){n.setupView(t,v)}return{init:y,state:{lightsArray:t,shadowsArray:c,lights:n},setupLights:G,setupLightsView:V,pushLight:S,pushShadow:g}}function TZ(e,l){let n=new WeakMap;function t(y,S=0){const g=n.get(y);let G;return g===void 0?(G=new ZW(e,l),n.set(y,[G])):S>=g.length?(G=new ZW(e,l),g.push(G)):G=g[S],G}function c(){n=new WeakMap}return{get:t,dispose:c}}class pZ extends pO{constructor(l){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lk,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(l)}copy(l){return super.copy(l),this.depthPacking=l.depthPacking,this.map=l.map,this.alphaMap=l.alphaMap,this.displacementMap=l.displacementMap,this.displacementScale=l.displacementScale,this.displacementBias=l.displacementBias,this.wireframe=l.wireframe,this.wireframeLinewidth=l.wireframeLinewidth,this}}class RZ extends pO{constructor(l){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(l)}copy(l){return super.copy(l),this.map=l.map,this.alphaMap=l.alphaMap,this.displacementMap=l.displacementMap,this.displacementScale=l.displacementScale,this.displacementBias=l.displacementBias,this}}const mZ=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DZ=`uniform sampler2D shadow_pass;
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
}`;function NZ(e,l,n){let t=new Y_;const c=new Nl,y=new Nl,S=new Fc,g=new pZ({depthPacking:sk}),G=new RZ,V={},Z=n.maxTextureSize,v={[oR]:D3,[D3]:oR,[ep]:ep},ee=new fL({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nl},radius:{value:4}},vertexShader:mZ,fragmentShader:DZ}),te=ee.clone();te.defines.HORIZONTAL_PASS=1;const he=new tc;he.setAttribute("position",new Xf(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const Te=new I2(he,ee),oe=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fj;let ie=this.type;this.render=function(Ve,_e,Xe){if(oe.enabled===!1||oe.autoUpdate===!1&&oe.needsUpdate===!1||Ve.length===0)return;const ge=e.getRenderTarget(),Le=e.getActiveCubeFace(),ve=e.getActiveMipmapLevel(),st=e.state;st.setBlending(FN),st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const ft=ie!==G6&&this.type===G6,et=ie===G6&&this.type!==G6;for(let at=0,It=Ve.length;at<It;at++){const St=Ve[at],bt=St.shadow;if(bt===void 0){console.warn("THREE.WebGLShadowMap:",St,"has no shadow.");continue}if(bt.autoUpdate===!1&&bt.needsUpdate===!1)continue;c.copy(bt.mapSize);const Ct=bt.getFrameExtents();if(c.multiply(Ct),y.copy(bt.mapSize),(c.x>Z||c.y>Z)&&(c.x>Z&&(y.x=Math.floor(Z/Ct.x),c.x=y.x*Ct.x,bt.mapSize.x=y.x),c.y>Z&&(y.y=Math.floor(Z/Ct.y),c.y=y.y*Ct.y,bt.mapSize.y=y.y)),bt.map===null||ft===!0||et===!0){const Ht=this.type!==G6?{minFilter:kf,magFilter:kf}:{};bt.map!==null&&bt.map.dispose(),bt.map=new jN(c.x,c.y,Ht),bt.map.texture.name=St.name+".shadowMap",bt.camera.updateProjectionMatrix()}e.setRenderTarget(bt.map),e.clear();const Ft=bt.getViewportCount();for(let Ht=0;Ht<Ft;Ht++){const Ut=bt.getViewport(Ht);S.set(y.x*Ut.x,y.y*Ut.y,y.x*Ut.z,y.y*Ut.w),st.viewport(S),bt.updateMatrices(St,Ht),t=bt.getFrustum(),Ae(_e,Xe,bt.camera,St,this.type)}bt.isPointLightShadow!==!0&&this.type===G6&&De(bt,Xe),bt.needsUpdate=!1}ie=this.type,oe.needsUpdate=!1,e.setRenderTarget(ge,Le,ve)};function De(Ve,_e){const Xe=l.update(Te);ee.defines.VSM_SAMPLES!==Ve.blurSamples&&(ee.defines.VSM_SAMPLES=Ve.blurSamples,te.defines.VSM_SAMPLES=Ve.blurSamples,ee.needsUpdate=!0,te.needsUpdate=!0),Ve.mapPass===null&&(Ve.mapPass=new jN(c.x,c.y)),ee.uniforms.shadow_pass.value=Ve.map.texture,ee.uniforms.resolution.value=Ve.mapSize,ee.uniforms.radius.value=Ve.radius,e.setRenderTarget(Ve.mapPass),e.clear(),e.renderBufferDirect(_e,null,Xe,ee,Te,null),te.uniforms.shadow_pass.value=Ve.mapPass.texture,te.uniforms.resolution.value=Ve.mapSize,te.uniforms.radius.value=Ve.radius,e.setRenderTarget(Ve.map),e.clear(),e.renderBufferDirect(_e,null,Xe,te,Te,null)}function we(Ve,_e,Xe,ge){let Le=null;const ve=Xe.isPointLight===!0?Ve.customDistanceMaterial:Ve.customDepthMaterial;if(ve!==void 0)Le=ve;else if(Le=Xe.isPointLight===!0?G:g,e.localClippingEnabled&&_e.clipShadows===!0&&Array.isArray(_e.clippingPlanes)&&_e.clippingPlanes.length!==0||_e.displacementMap&&_e.displacementScale!==0||_e.alphaMap&&_e.alphaTest>0||_e.map&&_e.alphaTest>0){const st=Le.uuid,ft=_e.uuid;let et=V[st];et===void 0&&(et={},V[st]=et);let at=et[ft];at===void 0&&(at=Le.clone(),et[ft]=at,_e.addEventListener("dispose",Ye)),Le=at}if(Le.visible=_e.visible,Le.wireframe=_e.wireframe,ge===G6?Le.side=_e.shadowSide!==null?_e.shadowSide:_e.side:Le.side=_e.shadowSide!==null?_e.shadowSide:v[_e.side],Le.alphaMap=_e.alphaMap,Le.alphaTest=_e.alphaTest,Le.map=_e.map,Le.clipShadows=_e.clipShadows,Le.clippingPlanes=_e.clippingPlanes,Le.clipIntersection=_e.clipIntersection,Le.displacementMap=_e.displacementMap,Le.displacementScale=_e.displacementScale,Le.displacementBias=_e.displacementBias,Le.wireframeLinewidth=_e.wireframeLinewidth,Le.linewidth=_e.linewidth,Xe.isPointLight===!0&&Le.isMeshDistanceMaterial===!0){const st=e.properties.get(Le);st.light=Xe}return Le}function Ae(Ve,_e,Xe,ge,Le){if(Ve.visible===!1)return;if(Ve.layers.test(_e.layers)&&(Ve.isMesh||Ve.isLine||Ve.isPoints)&&(Ve.castShadow||Ve.receiveShadow&&Le===G6)&&(!Ve.frustumCulled||t.intersectsObject(Ve))){Ve.modelViewMatrix.multiplyMatrices(Xe.matrixWorldInverse,Ve.matrixWorld);const ft=l.update(Ve),et=Ve.material;if(Array.isArray(et)){const at=ft.groups;for(let It=0,St=at.length;It<St;It++){const bt=at[It],Ct=et[bt.materialIndex];if(Ct&&Ct.visible){const Ft=we(Ve,Ct,ge,Le);Ve.onBeforeShadow(e,Ve,_e,Xe,ft,Ft,bt),e.renderBufferDirect(Xe,null,ft,Ft,Ve,bt),Ve.onAfterShadow(e,Ve,_e,Xe,ft,Ft,bt)}}}else if(et.visible){const at=we(Ve,et,ge,Le);Ve.onBeforeShadow(e,Ve,_e,Xe,ft,at,null),e.renderBufferDirect(Xe,null,ft,at,Ve,null),Ve.onAfterShadow(e,Ve,_e,Xe,ft,at,null)}}const st=Ve.children;for(let ft=0,et=st.length;ft<et;ft++)Ae(st[ft],_e,Xe,ge,Le)}function Ye(Ve){Ve.target.removeEventListener("dispose",Ye);for(const Xe in V){const ge=V[Xe],Le=Ve.target.uuid;Le in ge&&(ge[Le].dispose(),delete ge[Le])}}}function AZ(e,l,n){const t=n.isWebGL2;function c(){let ut=!1;const Kt=new Fc;let tn=null;const nn=new Fc(0,0,0,0);return{setMask:function(Bn){tn!==Bn&&!ut&&(e.colorMask(Bn,Bn,Bn,Bn),tn=Bn)},setLocked:function(Bn){ut=Bn},setClear:function(Bn,pn,kl,Cs,rs){rs===!0&&(Bn*=Cs,pn*=Cs,kl*=Cs),Kt.set(Bn,pn,kl,Cs),nn.equals(Kt)===!1&&(e.clearColor(Bn,pn,kl,Cs),nn.copy(Kt))},reset:function(){ut=!1,tn=null,nn.set(-1,0,0,0)}}}function y(){let ut=!1,Kt=null,tn=null,nn=null;return{setTest:function(Bn){Bn?Fn(e.DEPTH_TEST):yn(e.DEPTH_TEST)},setMask:function(Bn){Kt!==Bn&&!ut&&(e.depthMask(Bn),Kt=Bn)},setFunc:function(Bn){if(tn!==Bn){switch(Bn){case xz:e.depthFunc(e.NEVER);break;case Hz:e.depthFunc(e.ALWAYS);break;case Bz:e.depthFunc(e.LESS);break;case ZU:e.depthFunc(e.LEQUAL);break;case Uz:e.depthFunc(e.EQUAL);break;case Fz:e.depthFunc(e.GEQUAL);break;case Gz:e.depthFunc(e.GREATER);break;case _z:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}tn=Bn}},setLocked:function(Bn){ut=Bn},setClear:function(Bn){nn!==Bn&&(e.clearDepth(Bn),nn=Bn)},reset:function(){ut=!1,Kt=null,tn=null,nn=null}}}function S(){let ut=!1,Kt=null,tn=null,nn=null,Bn=null,pn=null,kl=null,Cs=null,rs=null;return{setTest:function(Pl){ut||(Pl?Fn(e.STENCIL_TEST):yn(e.STENCIL_TEST))},setMask:function(Pl){Kt!==Pl&&!ut&&(e.stencilMask(Pl),Kt=Pl)},setFunc:function(Pl,ws,Au){(tn!==Pl||nn!==ws||Bn!==Au)&&(e.stencilFunc(Pl,ws,Au),tn=Pl,nn=ws,Bn=Au)},setOp:function(Pl,ws,Au){(pn!==Pl||kl!==ws||Cs!==Au)&&(e.stencilOp(Pl,ws,Au),pn=Pl,kl=ws,Cs=Au)},setLocked:function(Pl){ut=Pl},setClear:function(Pl){rs!==Pl&&(e.clearStencil(Pl),rs=Pl)},reset:function(){ut=!1,Kt=null,tn=null,nn=null,Bn=null,pn=null,kl=null,Cs=null,rs=null}}}const g=new c,G=new y,V=new S,Z=new WeakMap,v=new WeakMap;let ee={},te={},he=new WeakMap,Te=[],oe=null,ie=!1,De=null,we=null,Ae=null,Ye=null,Ve=null,_e=null,Xe=null,ge=new Dl(0,0,0),Le=0,ve=!1,st=null,ft=null,et=null,at=null,It=null;const St=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let bt=!1,Ct=0;const Ft=e.getParameter(e.VERSION);Ft.indexOf("WebGL")!==-1?(Ct=parseFloat(/^WebGL (\d)/.exec(Ft)[1]),bt=Ct>=1):Ft.indexOf("OpenGL ES")!==-1&&(Ct=parseFloat(/^OpenGL ES (\d)/.exec(Ft)[1]),bt=Ct>=2);let Ht=null,Ut={};const Lt=e.getParameter(e.SCISSOR_BOX),Bt=e.getParameter(e.VIEWPORT),Xt=new Fc().fromArray(Lt),mn=new Fc().fromArray(Bt);function An(ut,Kt,tn,nn){const Bn=new Uint8Array(4),pn=e.createTexture();e.bindTexture(ut,pn),e.texParameteri(ut,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(ut,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let kl=0;kl<tn;kl++)t&&(ut===e.TEXTURE_3D||ut===e.TEXTURE_2D_ARRAY)?e.texImage3D(Kt,0,e.RGBA,1,1,nn,0,e.RGBA,e.UNSIGNED_BYTE,Bn):e.texImage2D(Kt+kl,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Bn);return pn}const Un={};Un[e.TEXTURE_2D]=An(e.TEXTURE_2D,e.TEXTURE_2D,1),Un[e.TEXTURE_CUBE_MAP]=An(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),t&&(Un[e.TEXTURE_2D_ARRAY]=An(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Un[e.TEXTURE_3D]=An(e.TEXTURE_3D,e.TEXTURE_3D,1,1)),g.setClear(0,0,0,1),G.setClear(1),V.setClear(0),Fn(e.DEPTH_TEST),G.setFunc(ZU),sl(!1),je(MV),Fn(e.CULL_FACE),wn(FN);function Fn(ut){ee[ut]!==!0&&(e.enable(ut),ee[ut]=!0)}function yn(ut){ee[ut]!==!1&&(e.disable(ut),ee[ut]=!1)}function vn(ut,Kt){return te[ut]!==Kt?(e.bindFramebuffer(ut,Kt),te[ut]=Kt,t&&(ut===e.DRAW_FRAMEBUFFER&&(te[e.FRAMEBUFFER]=Kt),ut===e.FRAMEBUFFER&&(te[e.DRAW_FRAMEBUFFER]=Kt)),!0):!1}function Tt(ut,Kt){let tn=Te,nn=!1;if(ut)if(tn=he.get(Kt),tn===void 0&&(tn=[],he.set(Kt,tn)),ut.isWebGLMultipleRenderTargets){const Bn=ut.texture;if(tn.length!==Bn.length||tn[0]!==e.COLOR_ATTACHMENT0){for(let pn=0,kl=Bn.length;pn<kl;pn++)tn[pn]=e.COLOR_ATTACHMENT0+pn;tn.length=Bn.length,nn=!0}}else tn[0]!==e.COLOR_ATTACHMENT0&&(tn[0]=e.COLOR_ATTACHMENT0,nn=!0);else tn[0]!==e.BACK&&(tn[0]=e.BACK,nn=!0);nn&&(n.isWebGL2?e.drawBuffers(tn):l.get("WEBGL_draw_buffers").drawBuffersWEBGL(tn))}function Jl(ut){return oe!==ut?(e.useProgram(ut),oe=ut,!0):!1}const Mn={[K8]:e.FUNC_ADD,[Tz]:e.FUNC_SUBTRACT,[pz]:e.FUNC_REVERSE_SUBTRACT};if(t)Mn[UV]=e.MIN,Mn[FV]=e.MAX;else{const ut=l.get("EXT_blend_minmax");ut!==null&&(Mn[UV]=ut.MIN_EXT,Mn[FV]=ut.MAX_EXT)}const _n={[Rz]:e.ZERO,[mz]:e.ONE,[Dz]:e.SRC_COLOR,[$G]:e.SRC_ALPHA,[gz]:e.SRC_ALPHA_SATURATE,[Lz]:e.DST_COLOR,[Az]:e.DST_ALPHA,[Nz]:e.ONE_MINUS_SRC_COLOR,[ZG]:e.ONE_MINUS_SRC_ALPHA,[Oz]:e.ONE_MINUS_DST_COLOR,[Sz]:e.ONE_MINUS_DST_ALPHA,[Pz]:e.CONSTANT_COLOR,[bz]:e.ONE_MINUS_CONSTANT_COLOR,[Cz]:e.CONSTANT_ALPHA,[Mz]:e.ONE_MINUS_CONSTANT_ALPHA};function wn(ut,Kt,tn,nn,Bn,pn,kl,Cs,rs,Pl){if(ut===FN){ie===!0&&(yn(e.BLEND),ie=!1);return}if(ie===!1&&(Fn(e.BLEND),ie=!0),ut!==Ez){if(ut!==De||Pl!==ve){if((we!==K8||Ve!==K8)&&(e.blendEquation(e.FUNC_ADD),we=K8,Ve=K8),Pl)switch(ut){case Db:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case xV:e.blendFunc(e.ONE,e.ONE);break;case HV:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case BV:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",ut);break}else switch(ut){case Db:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case xV:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case HV:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case BV:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",ut);break}Ae=null,Ye=null,_e=null,Xe=null,ge.set(0,0,0),Le=0,De=ut,ve=Pl}return}Bn=Bn||Kt,pn=pn||tn,kl=kl||nn,(Kt!==we||Bn!==Ve)&&(e.blendEquationSeparate(Mn[Kt],Mn[Bn]),we=Kt,Ve=Bn),(tn!==Ae||nn!==Ye||pn!==_e||kl!==Xe)&&(e.blendFuncSeparate(_n[tn],_n[nn],_n[pn],_n[kl]),Ae=tn,Ye=nn,_e=pn,Xe=kl),(Cs.equals(ge)===!1||rs!==Le)&&(e.blendColor(Cs.r,Cs.g,Cs.b,rs),ge.copy(Cs),Le=rs),De=ut,ve=!1}function Hl(ut,Kt){ut.side===ep?yn(e.CULL_FACE):Fn(e.CULL_FACE);let tn=ut.side===D3;Kt&&(tn=!tn),sl(tn),ut.blending===Db&&ut.transparent===!1?wn(FN):wn(ut.blending,ut.blendEquation,ut.blendSrc,ut.blendDst,ut.blendEquationAlpha,ut.blendSrcAlpha,ut.blendDstAlpha,ut.blendColor,ut.blendAlpha,ut.premultipliedAlpha),G.setFunc(ut.depthFunc),G.setTest(ut.depthTest),G.setMask(ut.depthWrite),g.setMask(ut.colorWrite);const nn=ut.stencilWrite;V.setTest(nn),nn&&(V.setMask(ut.stencilWriteMask),V.setFunc(ut.stencilFunc,ut.stencilRef,ut.stencilFuncMask),V.setOp(ut.stencilFail,ut.stencilZFail,ut.stencilZPass)),Dt(ut.polygonOffset,ut.polygonOffsetFactor,ut.polygonOffsetUnits),ut.alphaToCoverage===!0?Fn(e.SAMPLE_ALPHA_TO_COVERAGE):yn(e.SAMPLE_ALPHA_TO_COVERAGE)}function sl(ut){st!==ut&&(ut?e.frontFace(e.CW):e.frontFace(e.CCW),st=ut)}function je(ut){ut!==dz?(Fn(e.CULL_FACE),ut!==ft&&(ut===MV?e.cullFace(e.BACK):ut===yz?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):yn(e.CULL_FACE),ft=ut}function We(ut){ut!==et&&(bt&&e.lineWidth(ut),et=ut)}function Dt(ut,Kt,tn){ut?(Fn(e.POLYGON_OFFSET_FILL),(at!==Kt||It!==tn)&&(e.polygonOffset(Kt,tn),at=Kt,It=tn)):yn(e.POLYGON_OFFSET_FILL)}function qt(ut){ut?Fn(e.SCISSOR_TEST):yn(e.SCISSOR_TEST)}function zt(ut){ut===void 0&&(ut=e.TEXTURE0+St-1),Ht!==ut&&(e.activeTexture(ut),Ht=ut)}function Wt(ut,Kt,tn){tn===void 0&&(Ht===null?tn=e.TEXTURE0+St-1:tn=Ht);let nn=Ut[tn];nn===void 0&&(nn={type:void 0,texture:void 0},Ut[tn]=nn),(nn.type!==ut||nn.texture!==Kt)&&(Ht!==tn&&(e.activeTexture(tn),Ht=tn),e.bindTexture(ut,Kt||Un[ut]),nn.type=ut,nn.texture=Kt)}function Sn(){const ut=Ut[Ht];ut!==void 0&&ut.type!==void 0&&(e.bindTexture(ut.type,null),ut.type=void 0,ut.texture=void 0)}function on(){try{e.compressedTexImage2D.apply(e,arguments)}catch(ut){console.error("THREE.WebGLState:",ut)}}function In(){try{e.compressedTexImage3D.apply(e,arguments)}catch(ut){console.error("THREE.WebGLState:",ut)}}function bn(){try{e.texSubImage2D.apply(e,arguments)}catch(ut){console.error("THREE.WebGLState:",ut)}}function Hn(){try{e.texSubImage3D.apply(e,arguments)}catch(ut){console.error("THREE.WebGLState:",ut)}}function Gt(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(ut){console.error("THREE.WebGLState:",ut)}}function pl(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(ut){console.error("THREE.WebGLState:",ut)}}function $n(){try{e.texStorage2D.apply(e,arguments)}catch(ut){console.error("THREE.WebGLState:",ut)}}function Vn(){try{e.texStorage3D.apply(e,arguments)}catch(ut){console.error("THREE.WebGLState:",ut)}}function gn(){try{e.texImage2D.apply(e,arguments)}catch(ut){console.error("THREE.WebGLState:",ut)}}function Tn(){try{e.texImage3D.apply(e,arguments)}catch(ut){console.error("THREE.WebGLState:",ut)}}function Zn(ut){Xt.equals(ut)===!1&&(e.scissor(ut.x,ut.y,ut.z,ut.w),Xt.copy(ut))}function gl(ut){mn.equals(ut)===!1&&(e.viewport(ut.x,ut.y,ut.z,ut.w),mn.copy(ut))}function hn(ut,Kt){let tn=v.get(Kt);tn===void 0&&(tn=new WeakMap,v.set(Kt,tn));let nn=tn.get(ut);nn===void 0&&(nn=e.getUniformBlockIndex(Kt,ut.name),tn.set(ut,nn))}function En(ut,Kt){const nn=v.get(Kt).get(ut);Z.get(Kt)!==nn&&(e.uniformBlockBinding(Kt,nn,ut.__bindingPointIndex),Z.set(Kt,nn))}function Jt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),t===!0&&(e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null)),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),ee={},Ht=null,Ut={},te={},he=new WeakMap,Te=[],oe=null,ie=!1,De=null,we=null,Ae=null,Ye=null,Ve=null,_e=null,Xe=null,ge=new Dl(0,0,0),Le=0,ve=!1,st=null,ft=null,et=null,at=null,It=null,Xt.set(0,0,e.canvas.width,e.canvas.height),mn.set(0,0,e.canvas.width,e.canvas.height),g.reset(),G.reset(),V.reset()}return{buffers:{color:g,depth:G,stencil:V},enable:Fn,disable:yn,bindFramebuffer:vn,drawBuffers:Tt,useProgram:Jl,setBlending:wn,setMaterial:Hl,setFlipSided:sl,setCullFace:je,setLineWidth:We,setPolygonOffset:Dt,setScissorTest:qt,activeTexture:zt,bindTexture:Wt,unbindTexture:Sn,compressedTexImage2D:on,compressedTexImage3D:In,texImage2D:gn,texImage3D:Tn,updateUBOMapping:hn,uniformBlockBinding:En,texStorage2D:$n,texStorage3D:Vn,texSubImage2D:bn,texSubImage3D:Hn,compressedTexSubImage2D:Gt,compressedTexSubImage3D:pl,scissor:Zn,viewport:gl,reset:Jt}}function SZ(e,l,n,t,c,y,S){const g=c.isWebGL2,G=l.has("WEBGL_multisampled_render_to_texture")?l.get("WEBGL_multisampled_render_to_texture"):null,V=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),Z=new WeakMap;let v;const ee=new WeakMap;let te=!1;try{te=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function he(je,We){return te?new OffscreenCanvas(je,We):nF("canvas")}function Te(je,We,Dt,qt){let zt=1;if((je.width>qt||je.height>qt)&&(zt=qt/Math.max(je.width,je.height)),zt<1||We===!0)if(typeof HTMLImageElement<"u"&&je instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&je instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&je instanceof ImageBitmap){const Wt=We?tF:Math.floor,Sn=Wt(zt*je.width),on=Wt(zt*je.height);v===void 0&&(v=he(Sn,on));const In=Dt?he(Sn,on):v;return In.width=Sn,In.height=on,In.getContext("2d").drawImage(je,0,0,Sn,on),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+je.width+"x"+je.height+") to ("+Sn+"x"+on+")."),In}else return"data"in je&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+je.width+"x"+je.height+")."),je;return je}function oe(je){return l_(je.width)&&l_(je.height)}function ie(je){return g?!1:je.wrapS!==lE||je.wrapT!==lE||je.minFilter!==kf&&je.minFilter!==h2}function De(je,We){return je.generateMipmaps&&We&&je.minFilter!==kf&&je.minFilter!==h2}function we(je){e.generateMipmap(je)}function Ae(je,We,Dt,qt,zt=!1){if(g===!1)return We;if(je!==null){if(e[je]!==void 0)return e[je];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+je+"'")}let Wt=We;if(We===e.RED&&(Dt===e.FLOAT&&(Wt=e.R32F),Dt===e.HALF_FLOAT&&(Wt=e.R16F),Dt===e.UNSIGNED_BYTE&&(Wt=e.R8)),We===e.RED_INTEGER&&(Dt===e.UNSIGNED_BYTE&&(Wt=e.R8UI),Dt===e.UNSIGNED_SHORT&&(Wt=e.R16UI),Dt===e.UNSIGNED_INT&&(Wt=e.R32UI),Dt===e.BYTE&&(Wt=e.R8I),Dt===e.SHORT&&(Wt=e.R16I),Dt===e.INT&&(Wt=e.R32I)),We===e.RG&&(Dt===e.FLOAT&&(Wt=e.RG32F),Dt===e.HALF_FLOAT&&(Wt=e.RG16F),Dt===e.UNSIGNED_BYTE&&(Wt=e.RG8)),We===e.RGBA){const Sn=zt?JU:ks.getTransfer(qt);Dt===e.FLOAT&&(Wt=e.RGBA32F),Dt===e.HALF_FLOAT&&(Wt=e.RGBA16F),Dt===e.UNSIGNED_BYTE&&(Wt=Sn===dr?e.SRGB8_ALPHA8:e.RGBA8),Dt===e.UNSIGNED_SHORT_4_4_4_4&&(Wt=e.RGBA4),Dt===e.UNSIGNED_SHORT_5_5_5_1&&(Wt=e.RGB5_A1)}return(Wt===e.R16F||Wt===e.R32F||Wt===e.RG16F||Wt===e.RG32F||Wt===e.RGBA16F||Wt===e.RGBA32F)&&l.get("EXT_color_buffer_float"),Wt}function Ye(je,We,Dt){return De(je,Dt)===!0||je.isFramebufferTexture&&je.minFilter!==kf&&je.minFilter!==h2?Math.log2(Math.max(We.width,We.height))+1:je.mipmaps!==void 0&&je.mipmaps.length>0?je.mipmaps.length:je.isCompressedTexture&&Array.isArray(je.image)?We.mipmaps.length:1}function Ve(je){return je===kf||je===GV||je===sG?e.NEAREST:e.LINEAR}function _e(je){const We=je.target;We.removeEventListener("dispose",_e),ge(We),We.isVideoTexture&&Z.delete(We)}function Xe(je){const We=je.target;We.removeEventListener("dispose",Xe),ve(We)}function ge(je){const We=t.get(je);if(We.__webglInit===void 0)return;const Dt=je.source,qt=ee.get(Dt);if(qt){const zt=qt[We.__cacheKey];zt.usedTimes--,zt.usedTimes===0&&Le(je),Object.keys(qt).length===0&&ee.delete(Dt)}t.remove(je)}function Le(je){const We=t.get(je);e.deleteTexture(We.__webglTexture);const Dt=je.source,qt=ee.get(Dt);delete qt[We.__cacheKey],S.memory.textures--}function ve(je){const We=je.texture,Dt=t.get(je),qt=t.get(We);if(qt.__webglTexture!==void 0&&(e.deleteTexture(qt.__webglTexture),S.memory.textures--),je.depthTexture&&je.depthTexture.dispose(),je.isWebGLCubeRenderTarget)for(let zt=0;zt<6;zt++){if(Array.isArray(Dt.__webglFramebuffer[zt]))for(let Wt=0;Wt<Dt.__webglFramebuffer[zt].length;Wt++)e.deleteFramebuffer(Dt.__webglFramebuffer[zt][Wt]);else e.deleteFramebuffer(Dt.__webglFramebuffer[zt]);Dt.__webglDepthbuffer&&e.deleteRenderbuffer(Dt.__webglDepthbuffer[zt])}else{if(Array.isArray(Dt.__webglFramebuffer))for(let zt=0;zt<Dt.__webglFramebuffer.length;zt++)e.deleteFramebuffer(Dt.__webglFramebuffer[zt]);else e.deleteFramebuffer(Dt.__webglFramebuffer);if(Dt.__webglDepthbuffer&&e.deleteRenderbuffer(Dt.__webglDepthbuffer),Dt.__webglMultisampledFramebuffer&&e.deleteFramebuffer(Dt.__webglMultisampledFramebuffer),Dt.__webglColorRenderbuffer)for(let zt=0;zt<Dt.__webglColorRenderbuffer.length;zt++)Dt.__webglColorRenderbuffer[zt]&&e.deleteRenderbuffer(Dt.__webglColorRenderbuffer[zt]);Dt.__webglDepthRenderbuffer&&e.deleteRenderbuffer(Dt.__webglDepthRenderbuffer)}if(je.isWebGLMultipleRenderTargets)for(let zt=0,Wt=We.length;zt<Wt;zt++){const Sn=t.get(We[zt]);Sn.__webglTexture&&(e.deleteTexture(Sn.__webglTexture),S.memory.textures--),t.remove(We[zt])}t.remove(We),t.remove(je)}let st=0;function ft(){st=0}function et(){const je=st;return je>=c.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+je+" texture units while this GPU supports only "+c.maxTextures),st+=1,je}function at(je){const We=[];return We.push(je.wrapS),We.push(je.wrapT),We.push(je.wrapR||0),We.push(je.magFilter),We.push(je.minFilter),We.push(je.anisotropy),We.push(je.internalFormat),We.push(je.format),We.push(je.type),We.push(je.generateMipmaps),We.push(je.premultiplyAlpha),We.push(je.flipY),We.push(je.unpackAlignment),We.push(je.colorSpace),We.join()}function It(je,We){const Dt=t.get(je);if(je.isVideoTexture&&Hl(je),je.isRenderTargetTexture===!1&&je.version>0&&Dt.__version!==je.version){const qt=je.image;if(qt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(qt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xt(Dt,je,We);return}}n.bindTexture(e.TEXTURE_2D,Dt.__webglTexture,e.TEXTURE0+We)}function St(je,We){const Dt=t.get(je);if(je.version>0&&Dt.__version!==je.version){Xt(Dt,je,We);return}n.bindTexture(e.TEXTURE_2D_ARRAY,Dt.__webglTexture,e.TEXTURE0+We)}function bt(je,We){const Dt=t.get(je);if(je.version>0&&Dt.__version!==je.version){Xt(Dt,je,We);return}n.bindTexture(e.TEXTURE_3D,Dt.__webglTexture,e.TEXTURE0+We)}function Ct(je,We){const Dt=t.get(je);if(je.version>0&&Dt.__version!==je.version){mn(Dt,je,We);return}n.bindTexture(e.TEXTURE_CUBE_MAP,Dt.__webglTexture,e.TEXTURE0+We)}const Ft={[vG]:e.REPEAT,[lE]:e.CLAMP_TO_EDGE,[e_]:e.MIRRORED_REPEAT},Ht={[kf]:e.NEAREST,[GV]:e.NEAREST_MIPMAP_NEAREST,[sG]:e.NEAREST_MIPMAP_LINEAR,[h2]:e.LINEAR,[Qz]:e.LINEAR_MIPMAP_NEAREST,[jH]:e.LINEAR_MIPMAP_LINEAR},Ut={[uk]:e.NEVER,[fk]:e.ALWAYS,[ak]:e.LESS,[Kj]:e.LEQUAL,[ik]:e.EQUAL,[hk]:e.GEQUAL,[ok]:e.GREATER,[ck]:e.NOTEQUAL};function Lt(je,We,Dt){if(Dt?(e.texParameteri(je,e.TEXTURE_WRAP_S,Ft[We.wrapS]),e.texParameteri(je,e.TEXTURE_WRAP_T,Ft[We.wrapT]),(je===e.TEXTURE_3D||je===e.TEXTURE_2D_ARRAY)&&e.texParameteri(je,e.TEXTURE_WRAP_R,Ft[We.wrapR]),e.texParameteri(je,e.TEXTURE_MAG_FILTER,Ht[We.magFilter]),e.texParameteri(je,e.TEXTURE_MIN_FILTER,Ht[We.minFilter])):(e.texParameteri(je,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(je,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),(je===e.TEXTURE_3D||je===e.TEXTURE_2D_ARRAY)&&e.texParameteri(je,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE),(We.wrapS!==lE||We.wrapT!==lE)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),e.texParameteri(je,e.TEXTURE_MAG_FILTER,Ve(We.magFilter)),e.texParameteri(je,e.TEXTURE_MIN_FILTER,Ve(We.minFilter)),We.minFilter!==kf&&We.minFilter!==h2&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),We.compareFunction&&(e.texParameteri(je,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(je,e.TEXTURE_COMPARE_FUNC,Ut[We.compareFunction])),l.has("EXT_texture_filter_anisotropic")===!0){const qt=l.get("EXT_texture_filter_anisotropic");if(We.magFilter===kf||We.minFilter!==sG&&We.minFilter!==jH||We.type===MN&&l.has("OES_texture_float_linear")===!1||g===!1&&We.type===YH&&l.has("OES_texture_half_float_linear")===!1)return;(We.anisotropy>1||t.get(We).__currentAnisotropy)&&(e.texParameterf(je,qt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(We.anisotropy,c.getMaxAnisotropy())),t.get(We).__currentAnisotropy=We.anisotropy)}}function Bt(je,We){let Dt=!1;je.__webglInit===void 0&&(je.__webglInit=!0,We.addEventListener("dispose",_e));const qt=We.source;let zt=ee.get(qt);zt===void 0&&(zt={},ee.set(qt,zt));const Wt=at(We);if(Wt!==je.__cacheKey){zt[Wt]===void 0&&(zt[Wt]={texture:e.createTexture(),usedTimes:0},S.memory.textures++,Dt=!0),zt[Wt].usedTimes++;const Sn=zt[je.__cacheKey];Sn!==void 0&&(zt[je.__cacheKey].usedTimes--,Sn.usedTimes===0&&Le(We)),je.__cacheKey=Wt,je.__webglTexture=zt[Wt].texture}return Dt}function Xt(je,We,Dt){let qt=e.TEXTURE_2D;(We.isDataArrayTexture||We.isCompressedArrayTexture)&&(qt=e.TEXTURE_2D_ARRAY),We.isData3DTexture&&(qt=e.TEXTURE_3D);const zt=Bt(je,We),Wt=We.source;n.bindTexture(qt,je.__webglTexture,e.TEXTURE0+Dt);const Sn=t.get(Wt);if(Wt.version!==Sn.__version||zt===!0){n.activeTexture(e.TEXTURE0+Dt);const on=ks.getPrimaries(ks.workingColorSpace),In=We.colorSpace===f2?null:ks.getPrimaries(We.colorSpace),bn=We.colorSpace===f2||on===In?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,We.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,We.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,We.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,bn);const Hn=ie(We)&&oe(We.image)===!1;let Gt=Te(We.image,Hn,!1,c.maxTextureSize);Gt=sl(We,Gt);const pl=oe(Gt)||g,$n=y.convert(We.format,We.colorSpace);let Vn=y.convert(We.type),gn=Ae(We.internalFormat,$n,Vn,We.colorSpace,We.isVideoTexture);Lt(qt,We,pl);let Tn;const Zn=We.mipmaps,gl=g&&We.isVideoTexture!==!0&&gn!==kj,hn=Sn.__version===void 0||zt===!0,En=Ye(We,Gt,pl);if(We.isDepthTexture)gn=e.DEPTH_COMPONENT,g?We.type===MN?gn=e.DEPTH_COMPONENT32F:We.type===CN?gn=e.DEPTH_COMPONENT24:We.type===$8?gn=e.DEPTH24_STENCIL8:gn=e.DEPTH_COMPONENT16:We.type===MN&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),We.format===Z8&&gn===e.DEPTH_COMPONENT&&We.type!==G_&&We.type!==CN&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),We.type=CN,Vn=y.convert(We.type)),We.format===bb&&gn===e.DEPTH_COMPONENT&&(gn=e.DEPTH_STENCIL,We.type!==$8&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),We.type=$8,Vn=y.convert(We.type))),hn&&(gl?n.texStorage2D(e.TEXTURE_2D,1,gn,Gt.width,Gt.height):n.texImage2D(e.TEXTURE_2D,0,gn,Gt.width,Gt.height,0,$n,Vn,null));else if(We.isDataTexture)if(Zn.length>0&&pl){gl&&hn&&n.texStorage2D(e.TEXTURE_2D,En,gn,Zn[0].width,Zn[0].height);for(let Jt=0,ut=Zn.length;Jt<ut;Jt++)Tn=Zn[Jt],gl?n.texSubImage2D(e.TEXTURE_2D,Jt,0,0,Tn.width,Tn.height,$n,Vn,Tn.data):n.texImage2D(e.TEXTURE_2D,Jt,gn,Tn.width,Tn.height,0,$n,Vn,Tn.data);We.generateMipmaps=!1}else gl?(hn&&n.texStorage2D(e.TEXTURE_2D,En,gn,Gt.width,Gt.height),n.texSubImage2D(e.TEXTURE_2D,0,0,0,Gt.width,Gt.height,$n,Vn,Gt.data)):n.texImage2D(e.TEXTURE_2D,0,gn,Gt.width,Gt.height,0,$n,Vn,Gt.data);else if(We.isCompressedTexture)if(We.isCompressedArrayTexture){gl&&hn&&n.texStorage3D(e.TEXTURE_2D_ARRAY,En,gn,Zn[0].width,Zn[0].height,Gt.depth);for(let Jt=0,ut=Zn.length;Jt<ut;Jt++)Tn=Zn[Jt],We.format!==sE?$n!==null?gl?n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Jt,0,0,0,Tn.width,Tn.height,Gt.depth,$n,Tn.data,0,0):n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Jt,gn,Tn.width,Tn.height,Gt.depth,0,Tn.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gl?n.texSubImage3D(e.TEXTURE_2D_ARRAY,Jt,0,0,0,Tn.width,Tn.height,Gt.depth,$n,Vn,Tn.data):n.texImage3D(e.TEXTURE_2D_ARRAY,Jt,gn,Tn.width,Tn.height,Gt.depth,0,$n,Vn,Tn.data)}else{gl&&hn&&n.texStorage2D(e.TEXTURE_2D,En,gn,Zn[0].width,Zn[0].height);for(let Jt=0,ut=Zn.length;Jt<ut;Jt++)Tn=Zn[Jt],We.format!==sE?$n!==null?gl?n.compressedTexSubImage2D(e.TEXTURE_2D,Jt,0,0,Tn.width,Tn.height,$n,Tn.data):n.compressedTexImage2D(e.TEXTURE_2D,Jt,gn,Tn.width,Tn.height,0,Tn.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gl?n.texSubImage2D(e.TEXTURE_2D,Jt,0,0,Tn.width,Tn.height,$n,Vn,Tn.data):n.texImage2D(e.TEXTURE_2D,Jt,gn,Tn.width,Tn.height,0,$n,Vn,Tn.data)}else if(We.isDataArrayTexture)gl?(hn&&n.texStorage3D(e.TEXTURE_2D_ARRAY,En,gn,Gt.width,Gt.height,Gt.depth),n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Gt.width,Gt.height,Gt.depth,$n,Vn,Gt.data)):n.texImage3D(e.TEXTURE_2D_ARRAY,0,gn,Gt.width,Gt.height,Gt.depth,0,$n,Vn,Gt.data);else if(We.isData3DTexture)gl?(hn&&n.texStorage3D(e.TEXTURE_3D,En,gn,Gt.width,Gt.height,Gt.depth),n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Gt.width,Gt.height,Gt.depth,$n,Vn,Gt.data)):n.texImage3D(e.TEXTURE_3D,0,gn,Gt.width,Gt.height,Gt.depth,0,$n,Vn,Gt.data);else if(We.isFramebufferTexture){if(hn)if(gl)n.texStorage2D(e.TEXTURE_2D,En,gn,Gt.width,Gt.height);else{let Jt=Gt.width,ut=Gt.height;for(let Kt=0;Kt<En;Kt++)n.texImage2D(e.TEXTURE_2D,Kt,gn,Jt,ut,0,$n,Vn,null),Jt>>=1,ut>>=1}}else if(Zn.length>0&&pl){gl&&hn&&n.texStorage2D(e.TEXTURE_2D,En,gn,Zn[0].width,Zn[0].height);for(let Jt=0,ut=Zn.length;Jt<ut;Jt++)Tn=Zn[Jt],gl?n.texSubImage2D(e.TEXTURE_2D,Jt,0,0,$n,Vn,Tn):n.texImage2D(e.TEXTURE_2D,Jt,gn,$n,Vn,Tn);We.generateMipmaps=!1}else gl?(hn&&n.texStorage2D(e.TEXTURE_2D,En,gn,Gt.width,Gt.height),n.texSubImage2D(e.TEXTURE_2D,0,0,0,$n,Vn,Gt)):n.texImage2D(e.TEXTURE_2D,0,gn,$n,Vn,Gt);De(We,pl)&&we(qt),Sn.__version=Wt.version,We.onUpdate&&We.onUpdate(We)}je.__version=We.version}function mn(je,We,Dt){if(We.image.length!==6)return;const qt=Bt(je,We),zt=We.source;n.bindTexture(e.TEXTURE_CUBE_MAP,je.__webglTexture,e.TEXTURE0+Dt);const Wt=t.get(zt);if(zt.version!==Wt.__version||qt===!0){n.activeTexture(e.TEXTURE0+Dt);const Sn=ks.getPrimaries(ks.workingColorSpace),on=We.colorSpace===f2?null:ks.getPrimaries(We.colorSpace),In=We.colorSpace===f2||Sn===on?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,We.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,We.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,We.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,In);const bn=We.isCompressedTexture||We.image[0].isCompressedTexture,Hn=We.image[0]&&We.image[0].isDataTexture,Gt=[];for(let Jt=0;Jt<6;Jt++)!bn&&!Hn?Gt[Jt]=Te(We.image[Jt],!1,!0,c.maxCubemapSize):Gt[Jt]=Hn?We.image[Jt].image:We.image[Jt],Gt[Jt]=sl(We,Gt[Jt]);const pl=Gt[0],$n=oe(pl)||g,Vn=y.convert(We.format,We.colorSpace),gn=y.convert(We.type),Tn=Ae(We.internalFormat,Vn,gn,We.colorSpace),Zn=g&&We.isVideoTexture!==!0,gl=Wt.__version===void 0||qt===!0;let hn=Ye(We,pl,$n);Lt(e.TEXTURE_CUBE_MAP,We,$n);let En;if(bn){Zn&&gl&&n.texStorage2D(e.TEXTURE_CUBE_MAP,hn,Tn,pl.width,pl.height);for(let Jt=0;Jt<6;Jt++){En=Gt[Jt].mipmaps;for(let ut=0;ut<En.length;ut++){const Kt=En[ut];We.format!==sE?Vn!==null?Zn?n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Jt,ut,0,0,Kt.width,Kt.height,Vn,Kt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Jt,ut,Tn,Kt.width,Kt.height,0,Kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zn?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Jt,ut,0,0,Kt.width,Kt.height,Vn,gn,Kt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Jt,ut,Tn,Kt.width,Kt.height,0,Vn,gn,Kt.data)}}}else{En=We.mipmaps,Zn&&gl&&(En.length>0&&hn++,n.texStorage2D(e.TEXTURE_CUBE_MAP,hn,Tn,Gt[0].width,Gt[0].height));for(let Jt=0;Jt<6;Jt++)if(Hn){Zn?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Jt,0,0,0,Gt[Jt].width,Gt[Jt].height,Vn,gn,Gt[Jt].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Jt,0,Tn,Gt[Jt].width,Gt[Jt].height,0,Vn,gn,Gt[Jt].data);for(let ut=0;ut<En.length;ut++){const tn=En[ut].image[Jt].image;Zn?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Jt,ut+1,0,0,tn.width,tn.height,Vn,gn,tn.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Jt,ut+1,Tn,tn.width,tn.height,0,Vn,gn,tn.data)}}else{Zn?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Jt,0,0,0,Vn,gn,Gt[Jt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Jt,0,Tn,Vn,gn,Gt[Jt]);for(let ut=0;ut<En.length;ut++){const Kt=En[ut];Zn?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Jt,ut+1,0,0,Vn,gn,Kt.image[Jt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Jt,ut+1,Tn,Vn,gn,Kt.image[Jt])}}}De(We,$n)&&we(e.TEXTURE_CUBE_MAP),Wt.__version=zt.version,We.onUpdate&&We.onUpdate(We)}je.__version=We.version}function An(je,We,Dt,qt,zt,Wt){const Sn=y.convert(Dt.format,Dt.colorSpace),on=y.convert(Dt.type),In=Ae(Dt.internalFormat,Sn,on,Dt.colorSpace);if(!t.get(We).__hasExternalTextures){const Hn=Math.max(1,We.width>>Wt),Gt=Math.max(1,We.height>>Wt);zt===e.TEXTURE_3D||zt===e.TEXTURE_2D_ARRAY?n.texImage3D(zt,Wt,In,Hn,Gt,We.depth,0,Sn,on,null):n.texImage2D(zt,Wt,In,Hn,Gt,0,Sn,on,null)}n.bindFramebuffer(e.FRAMEBUFFER,je),wn(We)?G.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,qt,zt,t.get(Dt).__webglTexture,0,_n(We)):(zt===e.TEXTURE_2D||zt>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&zt<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,qt,zt,t.get(Dt).__webglTexture,Wt),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Un(je,We,Dt){if(e.bindRenderbuffer(e.RENDERBUFFER,je),We.depthBuffer&&!We.stencilBuffer){let qt=g===!0?e.DEPTH_COMPONENT24:e.DEPTH_COMPONENT16;if(Dt||wn(We)){const zt=We.depthTexture;zt&&zt.isDepthTexture&&(zt.type===MN?qt=e.DEPTH_COMPONENT32F:zt.type===CN&&(qt=e.DEPTH_COMPONENT24));const Wt=_n(We);wn(We)?G.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Wt,qt,We.width,We.height):e.renderbufferStorageMultisample(e.RENDERBUFFER,Wt,qt,We.width,We.height)}else e.renderbufferStorage(e.RENDERBUFFER,qt,We.width,We.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,je)}else if(We.depthBuffer&&We.stencilBuffer){const qt=_n(We);Dt&&wn(We)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,qt,e.DEPTH24_STENCIL8,We.width,We.height):wn(We)?G.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,qt,e.DEPTH24_STENCIL8,We.width,We.height):e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,We.width,We.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,je)}else{const qt=We.isWebGLMultipleRenderTargets===!0?We.texture:[We.texture];for(let zt=0;zt<qt.length;zt++){const Wt=qt[zt],Sn=y.convert(Wt.format,Wt.colorSpace),on=y.convert(Wt.type),In=Ae(Wt.internalFormat,Sn,on,Wt.colorSpace),bn=_n(We);Dt&&wn(We)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,bn,In,We.width,We.height):wn(We)?G.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,bn,In,We.width,We.height):e.renderbufferStorage(e.RENDERBUFFER,In,We.width,We.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Fn(je,We){if(We&&We.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,je),!(We.depthTexture&&We.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!t.get(We.depthTexture).__webglTexture||We.depthTexture.image.width!==We.width||We.depthTexture.image.height!==We.height)&&(We.depthTexture.image.width=We.width,We.depthTexture.image.height=We.height,We.depthTexture.needsUpdate=!0),It(We.depthTexture,0);const qt=t.get(We.depthTexture).__webglTexture,zt=_n(We);if(We.depthTexture.format===Z8)wn(We)?G.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,qt,0,zt):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,qt,0);else if(We.depthTexture.format===bb)wn(We)?G.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,qt,0,zt):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,qt,0);else throw new Error("Unknown depthTexture format")}function yn(je){const We=t.get(je),Dt=je.isWebGLCubeRenderTarget===!0;if(je.depthTexture&&!We.__autoAllocateDepthBuffer){if(Dt)throw new Error("target.depthTexture not supported in Cube render targets");Fn(We.__webglFramebuffer,je)}else if(Dt){We.__webglDepthbuffer=[];for(let qt=0;qt<6;qt++)n.bindFramebuffer(e.FRAMEBUFFER,We.__webglFramebuffer[qt]),We.__webglDepthbuffer[qt]=e.createRenderbuffer(),Un(We.__webglDepthbuffer[qt],je,!1)}else n.bindFramebuffer(e.FRAMEBUFFER,We.__webglFramebuffer),We.__webglDepthbuffer=e.createRenderbuffer(),Un(We.__webglDepthbuffer,je,!1);n.bindFramebuffer(e.FRAMEBUFFER,null)}function vn(je,We,Dt){const qt=t.get(je);We!==void 0&&An(qt.__webglFramebuffer,je,je.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),Dt!==void 0&&yn(je)}function Tt(je){const We=je.texture,Dt=t.get(je),qt=t.get(We);je.addEventListener("dispose",Xe),je.isWebGLMultipleRenderTargets!==!0&&(qt.__webglTexture===void 0&&(qt.__webglTexture=e.createTexture()),qt.__version=We.version,S.memory.textures++);const zt=je.isWebGLCubeRenderTarget===!0,Wt=je.isWebGLMultipleRenderTargets===!0,Sn=oe(je)||g;if(zt){Dt.__webglFramebuffer=[];for(let on=0;on<6;on++)if(g&&We.mipmaps&&We.mipmaps.length>0){Dt.__webglFramebuffer[on]=[];for(let In=0;In<We.mipmaps.length;In++)Dt.__webglFramebuffer[on][In]=e.createFramebuffer()}else Dt.__webglFramebuffer[on]=e.createFramebuffer()}else{if(g&&We.mipmaps&&We.mipmaps.length>0){Dt.__webglFramebuffer=[];for(let on=0;on<We.mipmaps.length;on++)Dt.__webglFramebuffer[on]=e.createFramebuffer()}else Dt.__webglFramebuffer=e.createFramebuffer();if(Wt)if(c.drawBuffers){const on=je.texture;for(let In=0,bn=on.length;In<bn;In++){const Hn=t.get(on[In]);Hn.__webglTexture===void 0&&(Hn.__webglTexture=e.createTexture(),S.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(g&&je.samples>0&&wn(je)===!1){const on=Wt?We:[We];Dt.__webglMultisampledFramebuffer=e.createFramebuffer(),Dt.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer);for(let In=0;In<on.length;In++){const bn=on[In];Dt.__webglColorRenderbuffer[In]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,Dt.__webglColorRenderbuffer[In]);const Hn=y.convert(bn.format,bn.colorSpace),Gt=y.convert(bn.type),pl=Ae(bn.internalFormat,Hn,Gt,bn.colorSpace,je.isXRRenderTarget===!0),$n=_n(je);e.renderbufferStorageMultisample(e.RENDERBUFFER,$n,pl,je.width,je.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+In,e.RENDERBUFFER,Dt.__webglColorRenderbuffer[In])}e.bindRenderbuffer(e.RENDERBUFFER,null),je.depthBuffer&&(Dt.__webglDepthRenderbuffer=e.createRenderbuffer(),Un(Dt.__webglDepthRenderbuffer,je,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(zt){n.bindTexture(e.TEXTURE_CUBE_MAP,qt.__webglTexture),Lt(e.TEXTURE_CUBE_MAP,We,Sn);for(let on=0;on<6;on++)if(g&&We.mipmaps&&We.mipmaps.length>0)for(let In=0;In<We.mipmaps.length;In++)An(Dt.__webglFramebuffer[on][In],je,We,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+on,In);else An(Dt.__webglFramebuffer[on],je,We,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+on,0);De(We,Sn)&&we(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Wt){const on=je.texture;for(let In=0,bn=on.length;In<bn;In++){const Hn=on[In],Gt=t.get(Hn);n.bindTexture(e.TEXTURE_2D,Gt.__webglTexture),Lt(e.TEXTURE_2D,Hn,Sn),An(Dt.__webglFramebuffer,je,Hn,e.COLOR_ATTACHMENT0+In,e.TEXTURE_2D,0),De(Hn,Sn)&&we(e.TEXTURE_2D)}n.unbindTexture()}else{let on=e.TEXTURE_2D;if((je.isWebGL3DRenderTarget||je.isWebGLArrayRenderTarget)&&(g?on=je.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(on,qt.__webglTexture),Lt(on,We,Sn),g&&We.mipmaps&&We.mipmaps.length>0)for(let In=0;In<We.mipmaps.length;In++)An(Dt.__webglFramebuffer[In],je,We,e.COLOR_ATTACHMENT0,on,In);else An(Dt.__webglFramebuffer,je,We,e.COLOR_ATTACHMENT0,on,0);De(We,Sn)&&we(on),n.unbindTexture()}je.depthBuffer&&yn(je)}function Jl(je){const We=oe(je)||g,Dt=je.isWebGLMultipleRenderTargets===!0?je.texture:[je.texture];for(let qt=0,zt=Dt.length;qt<zt;qt++){const Wt=Dt[qt];if(De(Wt,We)){const Sn=je.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,on=t.get(Wt).__webglTexture;n.bindTexture(Sn,on),we(Sn),n.unbindTexture()}}}function Mn(je){if(g&&je.samples>0&&wn(je)===!1){const We=je.isWebGLMultipleRenderTargets?je.texture:[je.texture],Dt=je.width,qt=je.height;let zt=e.COLOR_BUFFER_BIT;const Wt=[],Sn=je.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,on=t.get(je),In=je.isWebGLMultipleRenderTargets===!0;if(In)for(let bn=0;bn<We.length;bn++)n.bindFramebuffer(e.FRAMEBUFFER,on.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+bn,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,on.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+bn,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,on.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,on.__webglFramebuffer);for(let bn=0;bn<We.length;bn++){Wt.push(e.COLOR_ATTACHMENT0+bn),je.depthBuffer&&Wt.push(Sn);const Hn=on.__ignoreDepthValues!==void 0?on.__ignoreDepthValues:!1;if(Hn===!1&&(je.depthBuffer&&(zt|=e.DEPTH_BUFFER_BIT),je.stencilBuffer&&(zt|=e.STENCIL_BUFFER_BIT)),In&&e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,on.__webglColorRenderbuffer[bn]),Hn===!0&&(e.invalidateFramebuffer(e.READ_FRAMEBUFFER,[Sn]),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[Sn])),In){const Gt=t.get(We[bn]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Gt,0)}e.blitFramebuffer(0,0,Dt,qt,0,0,Dt,qt,zt,e.NEAREST),V&&e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Wt)}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),In)for(let bn=0;bn<We.length;bn++){n.bindFramebuffer(e.FRAMEBUFFER,on.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+bn,e.RENDERBUFFER,on.__webglColorRenderbuffer[bn]);const Hn=t.get(We[bn]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,on.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+bn,e.TEXTURE_2D,Hn,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,on.__webglMultisampledFramebuffer)}}function _n(je){return Math.min(c.maxSamples,je.samples)}function wn(je){const We=t.get(je);return g&&je.samples>0&&l.has("WEBGL_multisampled_render_to_texture")===!0&&We.__useRenderToTexture!==!1}function Hl(je){const We=S.render.frame;Z.get(je)!==We&&(Z.set(je,We),je.update())}function sl(je,We){const Dt=je.colorSpace,qt=je.format,zt=je.type;return je.isCompressedTexture===!0||je.isVideoTexture===!0||je.format===n_||Dt!==X7&&Dt!==f2&&(ks.getTransfer(Dt)===dr?g===!1?l.has("EXT_sRGB")===!0&&qt===sE?(je.format=n_,je.minFilter=h2,je.generateMipmaps=!1):We=$j.sRGBToLinear(We):(qt!==sE||zt!==_N)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Dt)),We}this.allocateTextureUnit=et,this.resetTextureUnits=ft,this.setTexture2D=It,this.setTexture2DArray=St,this.setTexture3D=bt,this.setTextureCube=Ct,this.rebindTextures=vn,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=Jl,this.updateMultisampleRenderTarget=Mn,this.setupDepthRenderbuffer=yn,this.setupFrameBufferTexture=An,this.useMultisampledRTT=wn}function LZ(e,l,n){const t=n.isWebGL2;function c(y,S=f2){let g;const G=ks.getTransfer(S);if(y===_N)return e.UNSIGNED_BYTE;if(y===Vj)return e.UNSIGNED_SHORT_4_4_4_4;if(y===Wj)return e.UNSIGNED_SHORT_5_5_5_1;if(y===$z)return e.BYTE;if(y===Zz)return e.SHORT;if(y===G_)return e.UNSIGNED_SHORT;if(y===_j)return e.INT;if(y===CN)return e.UNSIGNED_INT;if(y===MN)return e.FLOAT;if(y===YH)return t?e.HALF_FLOAT:(g=l.get("OES_texture_half_float"),g!==null?g.HALF_FLOAT_OES:null);if(y===Jz)return e.ALPHA;if(y===sE)return e.RGBA;if(y===Xz)return e.LUMINANCE;if(y===vz)return e.LUMINANCE_ALPHA;if(y===Z8)return e.DEPTH_COMPONENT;if(y===bb)return e.DEPTH_STENCIL;if(y===n_)return g=l.get("EXT_sRGB"),g!==null?g.SRGB_ALPHA_EXT:null;if(y===ek)return e.RED;if(y===jj)return e.RED_INTEGER;if(y===tk)return e.RG;if(y===Yj)return e.RG_INTEGER;if(y===zj)return e.RGBA_INTEGER;if(y===rG||y===uG||y===aG||y===iG)if(G===dr)if(g=l.get("WEBGL_compressed_texture_s3tc_srgb"),g!==null){if(y===rG)return g.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(y===uG)return g.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(y===aG)return g.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(y===iG)return g.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(g=l.get("WEBGL_compressed_texture_s3tc"),g!==null){if(y===rG)return g.COMPRESSED_RGB_S3TC_DXT1_EXT;if(y===uG)return g.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(y===aG)return g.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(y===iG)return g.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(y===_V||y===VV||y===WV||y===jV)if(g=l.get("WEBGL_compressed_texture_pvrtc"),g!==null){if(y===_V)return g.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(y===VV)return g.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(y===WV)return g.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(y===jV)return g.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(y===kj)return g=l.get("WEBGL_compressed_texture_etc1"),g!==null?g.COMPRESSED_RGB_ETC1_WEBGL:null;if(y===YV||y===zV)if(g=l.get("WEBGL_compressed_texture_etc"),g!==null){if(y===YV)return G===dr?g.COMPRESSED_SRGB8_ETC2:g.COMPRESSED_RGB8_ETC2;if(y===zV)return G===dr?g.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:g.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(y===kV||y===qV||y===KV||y===QV||y===$V||y===ZV||y===JV||y===XV||y===vV||y===eW||y===tW||y===nW||y===lW||y===sW)if(g=l.get("WEBGL_compressed_texture_astc"),g!==null){if(y===kV)return G===dr?g.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:g.COMPRESSED_RGBA_ASTC_4x4_KHR;if(y===qV)return G===dr?g.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:g.COMPRESSED_RGBA_ASTC_5x4_KHR;if(y===KV)return G===dr?g.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:g.COMPRESSED_RGBA_ASTC_5x5_KHR;if(y===QV)return G===dr?g.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:g.COMPRESSED_RGBA_ASTC_6x5_KHR;if(y===$V)return G===dr?g.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:g.COMPRESSED_RGBA_ASTC_6x6_KHR;if(y===ZV)return G===dr?g.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:g.COMPRESSED_RGBA_ASTC_8x5_KHR;if(y===JV)return G===dr?g.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:g.COMPRESSED_RGBA_ASTC_8x6_KHR;if(y===XV)return G===dr?g.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:g.COMPRESSED_RGBA_ASTC_8x8_KHR;if(y===vV)return G===dr?g.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:g.COMPRESSED_RGBA_ASTC_10x5_KHR;if(y===eW)return G===dr?g.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:g.COMPRESSED_RGBA_ASTC_10x6_KHR;if(y===tW)return G===dr?g.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:g.COMPRESSED_RGBA_ASTC_10x8_KHR;if(y===nW)return G===dr?g.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:g.COMPRESSED_RGBA_ASTC_10x10_KHR;if(y===lW)return G===dr?g.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:g.COMPRESSED_RGBA_ASTC_12x10_KHR;if(y===sW)return G===dr?g.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:g.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(y===oG||y===rW||y===uW)if(g=l.get("EXT_texture_compression_bptc"),g!==null){if(y===oG)return G===dr?g.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:g.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(y===rW)return g.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(y===uW)return g.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(y===nk||y===aW||y===iW||y===oW)if(g=l.get("EXT_texture_compression_rgtc"),g!==null){if(y===oG)return g.COMPRESSED_RED_RGTC1_EXT;if(y===aW)return g.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(y===iW)return g.COMPRESSED_RED_GREEN_RGTC2_EXT;if(y===oW)return g.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return y===$8?t?e.UNSIGNED_INT_24_8:(g=l.get("WEBGL_depth_texture"),g!==null?g.UNSIGNED_INT_24_8_WEBGL:null):e[y]!==void 0?e[y]:null}return{convert:c}}class OZ extends nE{constructor(l=[]){super(),this.isArrayCamera=!0,this.cameras=l}}class rH extends Jf{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gZ={type:"move"};class MG{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rH,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rH,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new nt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new nt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rH,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new nt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new nt),this._grip}dispatchEvent(l){return this._targetRay!==null&&this._targetRay.dispatchEvent(l),this._grip!==null&&this._grip.dispatchEvent(l),this._hand!==null&&this._hand.dispatchEvent(l),this}connect(l){if(l&&l.hand){const n=this._hand;if(n)for(const t of l.hand.values())this._getHandJoint(n,t)}return this.dispatchEvent({type:"connected",data:l}),this}disconnect(l){return this.dispatchEvent({type:"disconnected",data:l}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(l,n,t){let c=null,y=null,S=null;const g=this._targetRay,G=this._grip,V=this._hand;if(l&&n.session.visibilityState!=="visible-blurred"){if(V&&l.hand){S=!0;for(const Te of l.hand.values()){const oe=n.getJointPose(Te,t),ie=this._getHandJoint(V,Te);oe!==null&&(ie.matrix.fromArray(oe.transform.matrix),ie.matrix.decompose(ie.position,ie.rotation,ie.scale),ie.matrixWorldNeedsUpdate=!0,ie.jointRadius=oe.radius),ie.visible=oe!==null}const Z=V.joints["index-finger-tip"],v=V.joints["thumb-tip"],ee=Z.position.distanceTo(v.position),te=.02,he=.005;V.inputState.pinching&&ee>te+he?(V.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:l.handedness,target:this})):!V.inputState.pinching&&ee<=te-he&&(V.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:l.handedness,target:this}))}else G!==null&&l.gripSpace&&(y=n.getPose(l.gripSpace,t),y!==null&&(G.matrix.fromArray(y.transform.matrix),G.matrix.decompose(G.position,G.rotation,G.scale),G.matrixWorldNeedsUpdate=!0,y.linearVelocity?(G.hasLinearVelocity=!0,G.linearVelocity.copy(y.linearVelocity)):G.hasLinearVelocity=!1,y.angularVelocity?(G.hasAngularVelocity=!0,G.angularVelocity.copy(y.angularVelocity)):G.hasAngularVelocity=!1));g!==null&&(c=n.getPose(l.targetRaySpace,t),c===null&&y!==null&&(c=y),c!==null&&(g.matrix.fromArray(c.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,c.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(c.linearVelocity)):g.hasLinearVelocity=!1,c.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(c.angularVelocity)):g.hasAngularVelocity=!1,this.dispatchEvent(gZ)))}return g!==null&&(g.visible=c!==null),G!==null&&(G.visible=y!==null),V!==null&&(V.visible=S!==null),this}_getHandJoint(l,n){if(l.joints[n.jointName]===void 0){const t=new rH;t.matrixAutoUpdate=!1,t.visible=!1,l.joints[n.jointName]=t,l.add(t)}return l.joints[n.jointName]}}class PZ extends zb{constructor(l,n){super();const t=this;let c=null,y=1,S=null,g="local-floor",G=1,V=null,Z=null,v=null,ee=null,te=null,he=null;const Te=n.getContextAttributes();let oe=null,ie=null;const De=[],we=[],Ae=new Nl;let Ye=null;const Ve=new nE;Ve.layers.enable(1),Ve.viewport=new Fc;const _e=new nE;_e.layers.enable(2),_e.viewport=new Fc;const Xe=[Ve,_e],ge=new OZ;ge.layers.enable(1),ge.layers.enable(2);let Le=null,ve=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Lt){let Bt=De[Lt];return Bt===void 0&&(Bt=new MG,De[Lt]=Bt),Bt.getTargetRaySpace()},this.getControllerGrip=function(Lt){let Bt=De[Lt];return Bt===void 0&&(Bt=new MG,De[Lt]=Bt),Bt.getGripSpace()},this.getHand=function(Lt){let Bt=De[Lt];return Bt===void 0&&(Bt=new MG,De[Lt]=Bt),Bt.getHandSpace()};function st(Lt){const Bt=we.indexOf(Lt.inputSource);if(Bt===-1)return;const Xt=De[Bt];Xt!==void 0&&(Xt.update(Lt.inputSource,Lt.frame,V||S),Xt.dispatchEvent({type:Lt.type,data:Lt.inputSource}))}function ft(){c.removeEventListener("select",st),c.removeEventListener("selectstart",st),c.removeEventListener("selectend",st),c.removeEventListener("squeeze",st),c.removeEventListener("squeezestart",st),c.removeEventListener("squeezeend",st),c.removeEventListener("end",ft),c.removeEventListener("inputsourceschange",et);for(let Lt=0;Lt<De.length;Lt++){const Bt=we[Lt];Bt!==null&&(we[Lt]=null,De[Lt].disconnect(Bt))}Le=null,ve=null,l.setRenderTarget(oe),te=null,ee=null,v=null,c=null,ie=null,Ut.stop(),t.isPresenting=!1,l.setPixelRatio(Ye),l.setSize(Ae.width,Ae.height,!1),t.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Lt){y=Lt,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Lt){g=Lt,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return V||S},this.setReferenceSpace=function(Lt){V=Lt},this.getBaseLayer=function(){return ee!==null?ee:te},this.getBinding=function(){return v},this.getFrame=function(){return he},this.getSession=function(){return c},this.setSession=async function(Lt){if(c=Lt,c!==null){if(oe=l.getRenderTarget(),c.addEventListener("select",st),c.addEventListener("selectstart",st),c.addEventListener("selectend",st),c.addEventListener("squeeze",st),c.addEventListener("squeezestart",st),c.addEventListener("squeezeend",st),c.addEventListener("end",ft),c.addEventListener("inputsourceschange",et),Te.xrCompatible!==!0&&await n.makeXRCompatible(),Ye=l.getPixelRatio(),l.getSize(Ae),c.renderState.layers===void 0||l.capabilities.isWebGL2===!1){const Bt={antialias:c.renderState.layers===void 0?Te.antialias:!0,alpha:!0,depth:Te.depth,stencil:Te.stencil,framebufferScaleFactor:y};te=new XRWebGLLayer(c,n,Bt),c.updateRenderState({baseLayer:te}),l.setPixelRatio(1),l.setSize(te.framebufferWidth,te.framebufferHeight,!1),ie=new jN(te.framebufferWidth,te.framebufferHeight,{format:sE,type:_N,colorSpace:l.outputColorSpace,stencilBuffer:Te.stencil})}else{let Bt=null,Xt=null,mn=null;Te.depth&&(mn=Te.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Bt=Te.stencil?bb:Z8,Xt=Te.stencil?$8:CN);const An={colorFormat:n.RGBA8,depthFormat:mn,scaleFactor:y};v=new XRWebGLBinding(c,n),ee=v.createProjectionLayer(An),c.updateRenderState({layers:[ee]}),l.setPixelRatio(1),l.setSize(ee.textureWidth,ee.textureHeight,!1),ie=new jN(ee.textureWidth,ee.textureHeight,{format:sE,type:_N,depthTexture:new aY(ee.textureWidth,ee.textureHeight,Xt,void 0,void 0,void 0,void 0,void 0,void 0,Bt),stencilBuffer:Te.stencil,colorSpace:l.outputColorSpace,samples:Te.antialias?4:0});const Un=l.properties.get(ie);Un.__ignoreDepthValues=ee.ignoreDepthValues}ie.isXRRenderTarget=!0,this.setFoveation(G),V=null,S=await c.requestReferenceSpace(g),Ut.setContext(c),Ut.start(),t.isPresenting=!0,t.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(c!==null)return c.environmentBlendMode};function et(Lt){for(let Bt=0;Bt<Lt.removed.length;Bt++){const Xt=Lt.removed[Bt],mn=we.indexOf(Xt);mn>=0&&(we[mn]=null,De[mn].disconnect(Xt))}for(let Bt=0;Bt<Lt.added.length;Bt++){const Xt=Lt.added[Bt];let mn=we.indexOf(Xt);if(mn===-1){for(let Un=0;Un<De.length;Un++)if(Un>=we.length){we.push(Xt),mn=Un;break}else if(we[Un]===null){we[Un]=Xt,mn=Un;break}if(mn===-1)break}const An=De[mn];An&&An.connect(Xt)}}const at=new nt,It=new nt;function St(Lt,Bt,Xt){at.setFromMatrixPosition(Bt.matrixWorld),It.setFromMatrixPosition(Xt.matrixWorld);const mn=at.distanceTo(It),An=Bt.projectionMatrix.elements,Un=Xt.projectionMatrix.elements,Fn=An[14]/(An[10]-1),yn=An[14]/(An[10]+1),vn=(An[9]+1)/An[5],Tt=(An[9]-1)/An[5],Jl=(An[8]-1)/An[0],Mn=(Un[8]+1)/Un[0],_n=Fn*Jl,wn=Fn*Mn,Hl=mn/(-Jl+Mn),sl=Hl*-Jl;Bt.matrixWorld.decompose(Lt.position,Lt.quaternion,Lt.scale),Lt.translateX(sl),Lt.translateZ(Hl),Lt.matrixWorld.compose(Lt.position,Lt.quaternion,Lt.scale),Lt.matrixWorldInverse.copy(Lt.matrixWorld).invert();const je=Fn+Hl,We=yn+Hl,Dt=_n-sl,qt=wn+(mn-sl),zt=vn*yn/We*je,Wt=Tt*yn/We*je;Lt.projectionMatrix.makePerspective(Dt,qt,zt,Wt,je,We),Lt.projectionMatrixInverse.copy(Lt.projectionMatrix).invert()}function bt(Lt,Bt){Bt===null?Lt.matrixWorld.copy(Lt.matrix):Lt.matrixWorld.multiplyMatrices(Bt.matrixWorld,Lt.matrix),Lt.matrixWorldInverse.copy(Lt.matrixWorld).invert()}this.updateCamera=function(Lt){if(c===null)return;ge.near=_e.near=Ve.near=Lt.near,ge.far=_e.far=Ve.far=Lt.far,(Le!==ge.near||ve!==ge.far)&&(c.updateRenderState({depthNear:ge.near,depthFar:ge.far}),Le=ge.near,ve=ge.far);const Bt=Lt.parent,Xt=ge.cameras;bt(ge,Bt);for(let mn=0;mn<Xt.length;mn++)bt(Xt[mn],Bt);Xt.length===2?St(ge,Ve,_e):ge.projectionMatrix.copy(Ve.projectionMatrix),Ct(Lt,ge,Bt)};function Ct(Lt,Bt,Xt){Xt===null?Lt.matrix.copy(Bt.matrixWorld):(Lt.matrix.copy(Xt.matrixWorld),Lt.matrix.invert(),Lt.matrix.multiply(Bt.matrixWorld)),Lt.matrix.decompose(Lt.position,Lt.quaternion,Lt.scale),Lt.updateMatrixWorld(!0),Lt.projectionMatrix.copy(Bt.projectionMatrix),Lt.projectionMatrixInverse.copy(Bt.projectionMatrixInverse),Lt.isPerspectiveCamera&&(Lt.fov=zH*2*Math.atan(1/Lt.projectionMatrix.elements[5]),Lt.zoom=1)}this.getCamera=function(){return ge},this.getFoveation=function(){if(!(ee===null&&te===null))return G},this.setFoveation=function(Lt){G=Lt,ee!==null&&(ee.fixedFoveation=Lt),te!==null&&te.fixedFoveation!==void 0&&(te.fixedFoveation=Lt)};let Ft=null;function Ht(Lt,Bt){if(Z=Bt.getViewerPose(V||S),he=Bt,Z!==null){const Xt=Z.views;te!==null&&(l.setRenderTargetFramebuffer(ie,te.framebuffer),l.setRenderTarget(ie));let mn=!1;Xt.length!==ge.cameras.length&&(ge.cameras.length=0,mn=!0);for(let An=0;An<Xt.length;An++){const Un=Xt[An];let Fn=null;if(te!==null)Fn=te.getViewport(Un);else{const vn=v.getViewSubImage(ee,Un);Fn=vn.viewport,An===0&&(l.setRenderTargetTextures(ie,vn.colorTexture,ee.ignoreDepthValues?void 0:vn.depthStencilTexture),l.setRenderTarget(ie))}let yn=Xe[An];yn===void 0&&(yn=new nE,yn.layers.enable(An),yn.viewport=new Fc,Xe[An]=yn),yn.matrix.fromArray(Un.transform.matrix),yn.matrix.decompose(yn.position,yn.quaternion,yn.scale),yn.projectionMatrix.fromArray(Un.projectionMatrix),yn.projectionMatrixInverse.copy(yn.projectionMatrix).invert(),yn.viewport.set(Fn.x,Fn.y,Fn.width,Fn.height),An===0&&(ge.matrix.copy(yn.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale)),mn===!0&&ge.cameras.push(yn)}}for(let Xt=0;Xt<De.length;Xt++){const mn=we[Xt],An=De[Xt];mn!==null&&An!==void 0&&An.update(mn,Bt,V||S)}Ft&&Ft(Lt,Bt),Bt.detectedPlanes&&t.dispatchEvent({type:"planesdetected",data:Bt}),he=null}const Ut=new rY;Ut.setAnimationLoop(Ht),this.setAnimationLoop=function(Lt){Ft=Lt},this.dispose=function(){}}}function bZ(e,l){function n(oe,ie){oe.matrixAutoUpdate===!0&&oe.updateMatrix(),ie.value.copy(oe.matrix)}function t(oe,ie){ie.color.getRGB(oe.fogColor.value,nY(e)),ie.isFog?(oe.fogNear.value=ie.near,oe.fogFar.value=ie.far):ie.isFogExp2&&(oe.fogDensity.value=ie.density)}function c(oe,ie,De,we,Ae){ie.isMeshBasicMaterial||ie.isMeshLambertMaterial?y(oe,ie):ie.isMeshToonMaterial?(y(oe,ie),v(oe,ie)):ie.isMeshPhongMaterial?(y(oe,ie),Z(oe,ie)):ie.isMeshStandardMaterial?(y(oe,ie),ee(oe,ie),ie.isMeshPhysicalMaterial&&te(oe,ie,Ae)):ie.isMeshMatcapMaterial?(y(oe,ie),he(oe,ie)):ie.isMeshDepthMaterial?y(oe,ie):ie.isMeshDistanceMaterial?(y(oe,ie),Te(oe,ie)):ie.isMeshNormalMaterial?y(oe,ie):ie.isLineBasicMaterial?(S(oe,ie),ie.isLineDashedMaterial&&g(oe,ie)):ie.isPointsMaterial?G(oe,ie,De,we):ie.isSpriteMaterial?V(oe,ie):ie.isShadowMaterial?(oe.color.value.copy(ie.color),oe.opacity.value=ie.opacity):ie.isShaderMaterial&&(ie.uniformsNeedUpdate=!1)}function y(oe,ie){oe.opacity.value=ie.opacity,ie.color&&oe.diffuse.value.copy(ie.color),ie.emissive&&oe.emissive.value.copy(ie.emissive).multiplyScalar(ie.emissiveIntensity),ie.map&&(oe.map.value=ie.map,n(ie.map,oe.mapTransform)),ie.alphaMap&&(oe.alphaMap.value=ie.alphaMap,n(ie.alphaMap,oe.alphaMapTransform)),ie.bumpMap&&(oe.bumpMap.value=ie.bumpMap,n(ie.bumpMap,oe.bumpMapTransform),oe.bumpScale.value=ie.bumpScale,ie.side===D3&&(oe.bumpScale.value*=-1)),ie.normalMap&&(oe.normalMap.value=ie.normalMap,n(ie.normalMap,oe.normalMapTransform),oe.normalScale.value.copy(ie.normalScale),ie.side===D3&&oe.normalScale.value.negate()),ie.displacementMap&&(oe.displacementMap.value=ie.displacementMap,n(ie.displacementMap,oe.displacementMapTransform),oe.displacementScale.value=ie.displacementScale,oe.displacementBias.value=ie.displacementBias),ie.emissiveMap&&(oe.emissiveMap.value=ie.emissiveMap,n(ie.emissiveMap,oe.emissiveMapTransform)),ie.specularMap&&(oe.specularMap.value=ie.specularMap,n(ie.specularMap,oe.specularMapTransform)),ie.alphaTest>0&&(oe.alphaTest.value=ie.alphaTest);const De=l.get(ie).envMap;if(De&&(oe.envMap.value=De,oe.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1,oe.reflectivity.value=ie.reflectivity,oe.ior.value=ie.ior,oe.refractionRatio.value=ie.refractionRatio),ie.lightMap){oe.lightMap.value=ie.lightMap;const we=e._useLegacyLights===!0?Math.PI:1;oe.lightMapIntensity.value=ie.lightMapIntensity*we,n(ie.lightMap,oe.lightMapTransform)}ie.aoMap&&(oe.aoMap.value=ie.aoMap,oe.aoMapIntensity.value=ie.aoMapIntensity,n(ie.aoMap,oe.aoMapTransform))}function S(oe,ie){oe.diffuse.value.copy(ie.color),oe.opacity.value=ie.opacity,ie.map&&(oe.map.value=ie.map,n(ie.map,oe.mapTransform))}function g(oe,ie){oe.dashSize.value=ie.dashSize,oe.totalSize.value=ie.dashSize+ie.gapSize,oe.scale.value=ie.scale}function G(oe,ie,De,we){oe.diffuse.value.copy(ie.color),oe.opacity.value=ie.opacity,oe.size.value=ie.size*De,oe.scale.value=we*.5,ie.map&&(oe.map.value=ie.map,n(ie.map,oe.uvTransform)),ie.alphaMap&&(oe.alphaMap.value=ie.alphaMap,n(ie.alphaMap,oe.alphaMapTransform)),ie.alphaTest>0&&(oe.alphaTest.value=ie.alphaTest)}function V(oe,ie){oe.diffuse.value.copy(ie.color),oe.opacity.value=ie.opacity,oe.rotation.value=ie.rotation,ie.map&&(oe.map.value=ie.map,n(ie.map,oe.mapTransform)),ie.alphaMap&&(oe.alphaMap.value=ie.alphaMap,n(ie.alphaMap,oe.alphaMapTransform)),ie.alphaTest>0&&(oe.alphaTest.value=ie.alphaTest)}function Z(oe,ie){oe.specular.value.copy(ie.specular),oe.shininess.value=Math.max(ie.shininess,1e-4)}function v(oe,ie){ie.gradientMap&&(oe.gradientMap.value=ie.gradientMap)}function ee(oe,ie){oe.metalness.value=ie.metalness,ie.metalnessMap&&(oe.metalnessMap.value=ie.metalnessMap,n(ie.metalnessMap,oe.metalnessMapTransform)),oe.roughness.value=ie.roughness,ie.roughnessMap&&(oe.roughnessMap.value=ie.roughnessMap,n(ie.roughnessMap,oe.roughnessMapTransform)),l.get(ie).envMap&&(oe.envMapIntensity.value=ie.envMapIntensity)}function te(oe,ie,De){oe.ior.value=ie.ior,ie.sheen>0&&(oe.sheenColor.value.copy(ie.sheenColor).multiplyScalar(ie.sheen),oe.sheenRoughness.value=ie.sheenRoughness,ie.sheenColorMap&&(oe.sheenColorMap.value=ie.sheenColorMap,n(ie.sheenColorMap,oe.sheenColorMapTransform)),ie.sheenRoughnessMap&&(oe.sheenRoughnessMap.value=ie.sheenRoughnessMap,n(ie.sheenRoughnessMap,oe.sheenRoughnessMapTransform))),ie.clearcoat>0&&(oe.clearcoat.value=ie.clearcoat,oe.clearcoatRoughness.value=ie.clearcoatRoughness,ie.clearcoatMap&&(oe.clearcoatMap.value=ie.clearcoatMap,n(ie.clearcoatMap,oe.clearcoatMapTransform)),ie.clearcoatRoughnessMap&&(oe.clearcoatRoughnessMap.value=ie.clearcoatRoughnessMap,n(ie.clearcoatRoughnessMap,oe.clearcoatRoughnessMapTransform)),ie.clearcoatNormalMap&&(oe.clearcoatNormalMap.value=ie.clearcoatNormalMap,n(ie.clearcoatNormalMap,oe.clearcoatNormalMapTransform),oe.clearcoatNormalScale.value.copy(ie.clearcoatNormalScale),ie.side===D3&&oe.clearcoatNormalScale.value.negate())),ie.iridescence>0&&(oe.iridescence.value=ie.iridescence,oe.iridescenceIOR.value=ie.iridescenceIOR,oe.iridescenceThicknessMinimum.value=ie.iridescenceThicknessRange[0],oe.iridescenceThicknessMaximum.value=ie.iridescenceThicknessRange[1],ie.iridescenceMap&&(oe.iridescenceMap.value=ie.iridescenceMap,n(ie.iridescenceMap,oe.iridescenceMapTransform)),ie.iridescenceThicknessMap&&(oe.iridescenceThicknessMap.value=ie.iridescenceThicknessMap,n(ie.iridescenceThicknessMap,oe.iridescenceThicknessMapTransform))),ie.transmission>0&&(oe.transmission.value=ie.transmission,oe.transmissionSamplerMap.value=De.texture,oe.transmissionSamplerSize.value.set(De.width,De.height),ie.transmissionMap&&(oe.transmissionMap.value=ie.transmissionMap,n(ie.transmissionMap,oe.transmissionMapTransform)),oe.thickness.value=ie.thickness,ie.thicknessMap&&(oe.thicknessMap.value=ie.thicknessMap,n(ie.thicknessMap,oe.thicknessMapTransform)),oe.attenuationDistance.value=ie.attenuationDistance,oe.attenuationColor.value.copy(ie.attenuationColor)),ie.anisotropy>0&&(oe.anisotropyVector.value.set(ie.anisotropy*Math.cos(ie.anisotropyRotation),ie.anisotropy*Math.sin(ie.anisotropyRotation)),ie.anisotropyMap&&(oe.anisotropyMap.value=ie.anisotropyMap,n(ie.anisotropyMap,oe.anisotropyMapTransform))),oe.specularIntensity.value=ie.specularIntensity,oe.specularColor.value.copy(ie.specularColor),ie.specularColorMap&&(oe.specularColorMap.value=ie.specularColorMap,n(ie.specularColorMap,oe.specularColorMapTransform)),ie.specularIntensityMap&&(oe.specularIntensityMap.value=ie.specularIntensityMap,n(ie.specularIntensityMap,oe.specularIntensityMapTransform))}function he(oe,ie){ie.matcap&&(oe.matcap.value=ie.matcap)}function Te(oe,ie){const De=l.get(ie).light;oe.referencePosition.value.setFromMatrixPosition(De.matrixWorld),oe.nearDistance.value=De.shadow.camera.near,oe.farDistance.value=De.shadow.camera.far}return{refreshFogUniforms:t,refreshMaterialUniforms:c}}function CZ(e,l,n,t){let c={},y={},S=[];const g=n.isWebGL2?e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS):0;function G(De,we){const Ae=we.program;t.uniformBlockBinding(De,Ae)}function V(De,we){let Ae=c[De.id];Ae===void 0&&(he(De),Ae=Z(De),c[De.id]=Ae,De.addEventListener("dispose",oe));const Ye=we.program;t.updateUBOMapping(De,Ye);const Ve=l.render.frame;y[De.id]!==Ve&&(ee(De),y[De.id]=Ve)}function Z(De){const we=v();De.__bindingPointIndex=we;const Ae=e.createBuffer(),Ye=De.__size,Ve=De.usage;return e.bindBuffer(e.UNIFORM_BUFFER,Ae),e.bufferData(e.UNIFORM_BUFFER,Ye,Ve),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,we,Ae),Ae}function v(){for(let De=0;De<g;De++)if(S.indexOf(De)===-1)return S.push(De),De;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function ee(De){const we=c[De.id],Ae=De.uniforms,Ye=De.__cache;e.bindBuffer(e.UNIFORM_BUFFER,we);for(let Ve=0,_e=Ae.length;Ve<_e;Ve++){const Xe=Array.isArray(Ae[Ve])?Ae[Ve]:[Ae[Ve]];for(let ge=0,Le=Xe.length;ge<Le;ge++){const ve=Xe[ge];if(te(ve,Ve,ge,Ye)===!0){const st=ve.__offset,ft=Array.isArray(ve.value)?ve.value:[ve.value];let et=0;for(let at=0;at<ft.length;at++){const It=ft[at],St=Te(It);typeof It=="number"||typeof It=="boolean"?(ve.__data[0]=It,e.bufferSubData(e.UNIFORM_BUFFER,st+et,ve.__data)):It.isMatrix3?(ve.__data[0]=It.elements[0],ve.__data[1]=It.elements[1],ve.__data[2]=It.elements[2],ve.__data[3]=0,ve.__data[4]=It.elements[3],ve.__data[5]=It.elements[4],ve.__data[6]=It.elements[5],ve.__data[7]=0,ve.__data[8]=It.elements[6],ve.__data[9]=It.elements[7],ve.__data[10]=It.elements[8],ve.__data[11]=0):(It.toArray(ve.__data,et),et+=St.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,st,ve.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function te(De,we,Ae,Ye){const Ve=De.value,_e=we+"_"+Ae;if(Ye[_e]===void 0)return typeof Ve=="number"||typeof Ve=="boolean"?Ye[_e]=Ve:Ye[_e]=Ve.clone(),!0;{const Xe=Ye[_e];if(typeof Ve=="number"||typeof Ve=="boolean"){if(Xe!==Ve)return Ye[_e]=Ve,!0}else if(Xe.equals(Ve)===!1)return Xe.copy(Ve),!0}return!1}function he(De){const we=De.uniforms;let Ae=0;const Ye=16;for(let _e=0,Xe=we.length;_e<Xe;_e++){const ge=Array.isArray(we[_e])?we[_e]:[we[_e]];for(let Le=0,ve=ge.length;Le<ve;Le++){const st=ge[Le],ft=Array.isArray(st.value)?st.value:[st.value];for(let et=0,at=ft.length;et<at;et++){const It=ft[et],St=Te(It),bt=Ae%Ye;bt!==0&&Ye-bt<St.boundary&&(Ae+=Ye-bt),st.__data=new Float32Array(St.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=Ae,Ae+=St.storage}}}const Ve=Ae%Ye;return Ve>0&&(Ae+=Ye-Ve),De.__size=Ae,De.__cache={},this}function Te(De){const we={boundary:0,storage:0};return typeof De=="number"||typeof De=="boolean"?(we.boundary=4,we.storage=4):De.isVector2?(we.boundary=8,we.storage=8):De.isVector3||De.isColor?(we.boundary=16,we.storage=12):De.isVector4?(we.boundary=16,we.storage=16):De.isMatrix3?(we.boundary=48,we.storage=48):De.isMatrix4?(we.boundary=64,we.storage=64):De.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",De),we}function oe(De){const we=De.target;we.removeEventListener("dispose",oe);const Ae=S.indexOf(we.__bindingPointIndex);S.splice(Ae,1),e.deleteBuffer(c[we.id]),delete c[we.id],delete y[we.id]}function ie(){for(const De in c)e.deleteBuffer(c[De]);S=[],c={},y={}}return{bind:G,update:V,dispose:ie}}class MZ{constructor(l={}){const{canvas:n=Ok(),context:t=null,depth:c=!0,stencil:y=!0,alpha:S=!1,antialias:g=!1,premultipliedAlpha:G=!0,preserveDrawingBuffer:V=!1,powerPreference:Z="default",failIfMajorPerformanceCaveat:v=!1}=l;this.isWebGLRenderer=!0;let ee;t!==null?ee=t.getContextAttributes().alpha:ee=S;const te=new Uint32Array(4),he=new Int32Array(4);let Te=null,oe=null;const ie=[],De=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qf,this._useLegacyLights=!1,this.toneMapping=GN,this.toneMappingExposure=1;const we=this;let Ae=!1,Ye=0,Ve=0,_e=null,Xe=-1,ge=null;const Le=new Fc,ve=new Fc;let st=null;const ft=new Dl(0);let et=0,at=n.width,It=n.height,St=1,bt=null,Ct=null;const Ft=new Fc(0,0,at,It),Ht=new Fc(0,0,at,It);let Ut=!1;const Lt=new Y_;let Bt=!1,Xt=!1,mn=null;const An=new Sl,Un=new Nl,Fn=new nt,yn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function vn(){return _e===null?St:1}let Tt=t;function Jl(ke,ht){for(let Nt=0;Nt<ke.length;Nt++){const Ie=ke[Nt],pt=n.getContext(Ie,ht);if(pt!==null)return pt}return null}try{const ke={alpha:!0,depth:c,stencil:y,antialias:g,premultipliedAlpha:G,preserveDrawingBuffer:V,powerPreference:Z,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${U_}`),n.addEventListener("webglcontextlost",Jt,!1),n.addEventListener("webglcontextrestored",ut,!1),n.addEventListener("webglcontextcreationerror",Kt,!1),Tt===null){const ht=["webgl2","webgl","experimental-webgl"];if(we.isWebGL1Renderer===!0&&ht.shift(),Tt=Jl(ht,ke),Tt===null)throw Jl(ht)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Tt instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Tt.getShaderPrecisionFormat===void 0&&(Tt.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(ke){throw console.error("THREE.WebGLRenderer: "+ke.message),ke}let Mn,_n,wn,Hl,sl,je,We,Dt,qt,zt,Wt,Sn,on,In,bn,Hn,Gt,pl,$n,Vn,gn,Tn,Zn,gl;function hn(){Mn=new WQ(Tt),_n=new BQ(Tt,Mn,l),Mn.init(_n),Tn=new LZ(Tt,Mn,_n),wn=new AZ(Tt,Mn,_n),Hl=new zQ(Tt),sl=new cZ,je=new SZ(Tt,Mn,wn,sl,_n,Tn,Hl),We=new FQ(we),Dt=new VQ(we),qt=new Xk(Tt,_n),Zn=new xQ(Tt,Mn,qt,_n),zt=new jQ(Tt,qt,Hl,Zn),Wt=new QQ(Tt,zt,qt,Hl),$n=new KQ(Tt,_n,je),Hn=new UQ(sl),Sn=new oZ(we,We,Dt,Mn,_n,Zn,Hn),on=new bZ(we,sl),In=new fZ,bn=new TZ(Mn,_n),pl=new MQ(we,We,Dt,wn,Wt,ee,G),Gt=new NZ(we,Wt,_n),gl=new CZ(Tt,Hl,_n,wn),Vn=new HQ(Tt,Mn,Hl,_n),gn=new YQ(Tt,Mn,Hl,_n),Hl.programs=Sn.programs,we.capabilities=_n,we.extensions=Mn,we.properties=sl,we.renderLists=In,we.shadowMap=Gt,we.state=wn,we.info=Hl}hn();const En=new PZ(we,Tt);this.xr=En,this.getContext=function(){return Tt},this.getContextAttributes=function(){return Tt.getContextAttributes()},this.forceContextLoss=function(){const ke=Mn.get("WEBGL_lose_context");ke&&ke.loseContext()},this.forceContextRestore=function(){const ke=Mn.get("WEBGL_lose_context");ke&&ke.restoreContext()},this.getPixelRatio=function(){return St},this.setPixelRatio=function(ke){ke!==void 0&&(St=ke,this.setSize(at,It,!1))},this.getSize=function(ke){return ke.set(at,It)},this.setSize=function(ke,ht,Nt=!0){if(En.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}at=ke,It=ht,n.width=Math.floor(ke*St),n.height=Math.floor(ht*St),Nt===!0&&(n.style.width=ke+"px",n.style.height=ht+"px"),this.setViewport(0,0,ke,ht)},this.getDrawingBufferSize=function(ke){return ke.set(at*St,It*St).floor()},this.setDrawingBufferSize=function(ke,ht,Nt){at=ke,It=ht,St=Nt,n.width=Math.floor(ke*Nt),n.height=Math.floor(ht*Nt),this.setViewport(0,0,ke,ht)},this.getCurrentViewport=function(ke){return ke.copy(Le)},this.getViewport=function(ke){return ke.copy(Ft)},this.setViewport=function(ke,ht,Nt,Ie){ke.isVector4?Ft.set(ke.x,ke.y,ke.z,ke.w):Ft.set(ke,ht,Nt,Ie),wn.viewport(Le.copy(Ft).multiplyScalar(St).floor())},this.getScissor=function(ke){return ke.copy(Ht)},this.setScissor=function(ke,ht,Nt,Ie){ke.isVector4?Ht.set(ke.x,ke.y,ke.z,ke.w):Ht.set(ke,ht,Nt,Ie),wn.scissor(ve.copy(Ht).multiplyScalar(St).floor())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(ke){wn.setScissorTest(Ut=ke)},this.setOpaqueSort=function(ke){bt=ke},this.setTransparentSort=function(ke){Ct=ke},this.getClearColor=function(ke){return ke.copy(pl.getClearColor())},this.setClearColor=function(){pl.setClearColor.apply(pl,arguments)},this.getClearAlpha=function(){return pl.getClearAlpha()},this.setClearAlpha=function(){pl.setClearAlpha.apply(pl,arguments)},this.clear=function(ke=!0,ht=!0,Nt=!0){let Ie=0;if(ke){let pt=!1;if(_e!==null){const an=_e.texture.format;pt=an===zj||an===Yj||an===jj}if(pt){const an=_e.texture.type,Nn=an===_N||an===CN||an===G_||an===$8||an===Vj||an===Wj,Gn=pl.getClearColor(),jn=pl.getClearAlpha(),el=Gn.r,$t=Gn.g,Jn=Gn.b;Nn?(te[0]=el,te[1]=$t,te[2]=Jn,te[3]=jn,Tt.clearBufferuiv(Tt.COLOR,0,te)):(he[0]=el,he[1]=$t,he[2]=Jn,he[3]=jn,Tt.clearBufferiv(Tt.COLOR,0,he))}else Ie|=Tt.COLOR_BUFFER_BIT}ht&&(Ie|=Tt.DEPTH_BUFFER_BIT),Nt&&(Ie|=Tt.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Tt.clear(Ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Jt,!1),n.removeEventListener("webglcontextrestored",ut,!1),n.removeEventListener("webglcontextcreationerror",Kt,!1),In.dispose(),bn.dispose(),sl.dispose(),We.dispose(),Dt.dispose(),Wt.dispose(),Zn.dispose(),gl.dispose(),Sn.dispose(),En.dispose(),En.removeEventListener("sessionstart",rs),En.removeEventListener("sessionend",Pl),mn&&(mn.dispose(),mn=null),ws.stop()};function Jt(ke){ke.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),Ae=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),Ae=!1;const ke=Hl.autoReset,ht=Gt.enabled,Nt=Gt.autoUpdate,Ie=Gt.needsUpdate,pt=Gt.type;hn(),Hl.autoReset=ke,Gt.enabled=ht,Gt.autoUpdate=Nt,Gt.needsUpdate=Ie,Gt.type=pt}function Kt(ke){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",ke.statusMessage)}function tn(ke){const ht=ke.target;ht.removeEventListener("dispose",tn),nn(ht)}function nn(ke){Bn(ke),sl.remove(ke)}function Bn(ke){const ht=sl.get(ke).programs;ht!==void 0&&(ht.forEach(function(Nt){Sn.releaseProgram(Nt)}),ke.isShaderMaterial&&Sn.releaseShaderCache(ke))}this.renderBufferDirect=function(ke,ht,Nt,Ie,pt,an){ht===null&&(ht=yn);const Nn=pt.isMesh&&pt.matrixWorld.determinant()<0,Gn=S0(ke,ht,Nt,Ie,pt);wn.setMaterial(Ie,Nn);let jn=Nt.index,el=1;if(Ie.wireframe===!0){if(jn=zt.getWireframeAttribute(Nt),jn===void 0)return;el=2}const $t=Nt.drawRange,Jn=Nt.attributes.position;let Bl=$t.start*el,fu=($t.start+$t.count)*el;an!==null&&(Bl=Math.max(Bl,an.start*el),fu=Math.min(fu,(an.start+an.count)*el)),jn!==null?(Bl=Math.max(Bl,0),fu=Math.min(fu,jn.count)):Jn!=null&&(Bl=Math.max(Bl,0),fu=Math.min(fu,Jn.count));const Ss=fu-Bl;if(Ss<0||Ss===1/0)return;Zn.setup(pt,Ie,Gn,Nt,jn);let Su,Xl=Vn;if(jn!==null&&(Su=qt.get(jn),Xl=gn,Xl.setIndex(Su)),pt.isMesh)Ie.wireframe===!0?(wn.setLineWidth(Ie.wireframeLinewidth*vn()),Xl.setMode(Tt.LINES)):Xl.setMode(Tt.TRIANGLES);else if(pt.isLine){let rl=Ie.linewidth;rl===void 0&&(rl=1),wn.setLineWidth(rl*vn()),pt.isLineSegments?Xl.setMode(Tt.LINES):pt.isLineLoop?Xl.setMode(Tt.LINE_LOOP):Xl.setMode(Tt.LINE_STRIP)}else pt.isPoints?Xl.setMode(Tt.POINTS):pt.isSprite&&Xl.setMode(Tt.TRIANGLES);if(pt.isBatchedMesh)Xl.renderMultiDraw(pt._multiDrawStarts,pt._multiDrawCounts,pt._multiDrawCount);else if(pt.isInstancedMesh)Xl.renderInstances(Bl,Ss,pt.count);else if(Nt.isInstancedBufferGeometry){const rl=Nt._maxInstanceCount!==void 0?Nt._maxInstanceCount:1/0,S3=Math.min(Nt.instanceCount,rl);Xl.renderInstances(Bl,Ss,S3)}else Xl.render(Bl,Ss)};function pn(ke,ht,Nt){ke.transparent===!0&&ke.side===ep&&ke.forceSinglePass===!1?(ke.side=D3,ke.needsUpdate=!0,ui(ke,ht,Nt),ke.side=oR,ke.needsUpdate=!0,ui(ke,ht,Nt),ke.side=ep):ui(ke,ht,Nt)}this.compile=function(ke,ht,Nt=null){Nt===null&&(Nt=ke),oe=bn.get(Nt),oe.init(),De.push(oe),Nt.traverseVisible(function(pt){pt.isLight&&pt.layers.test(ht.layers)&&(oe.pushLight(pt),pt.castShadow&&oe.pushShadow(pt))}),ke!==Nt&&ke.traverseVisible(function(pt){pt.isLight&&pt.layers.test(ht.layers)&&(oe.pushLight(pt),pt.castShadow&&oe.pushShadow(pt))}),oe.setupLights(we._useLegacyLights);const Ie=new Set;return ke.traverse(function(pt){const an=pt.material;if(an)if(Array.isArray(an))for(let Nn=0;Nn<an.length;Nn++){const Gn=an[Nn];pn(Gn,Nt,pt),Ie.add(Gn)}else pn(an,Nt,pt),Ie.add(an)}),De.pop(),oe=null,Ie},this.compileAsync=function(ke,ht,Nt=null){const Ie=this.compile(ke,ht,Nt);return new Promise(pt=>{function an(){if(Ie.forEach(function(Nn){sl.get(Nn).currentProgram.isReady()&&Ie.delete(Nn)}),Ie.size===0){pt(ke);return}setTimeout(an,10)}Mn.get("KHR_parallel_shader_compile")!==null?an():setTimeout(an,10)})};let kl=null;function Cs(ke){kl&&kl(ke)}function rs(){ws.stop()}function Pl(){ws.start()}const ws=new rY;ws.setAnimationLoop(Cs),typeof self<"u"&&ws.setContext(self),this.setAnimationLoop=function(ke){kl=ke,En.setAnimationLoop(ke),ke===null?ws.stop():ws.start()},En.addEventListener("sessionstart",rs),En.addEventListener("sessionend",Pl),this.render=function(ke,ht){if(ht!==void 0&&ht.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Ae===!0)return;ke.matrixWorldAutoUpdate===!0&&ke.updateMatrixWorld(),ht.parent===null&&ht.matrixWorldAutoUpdate===!0&&ht.updateMatrixWorld(),En.enabled===!0&&En.isPresenting===!0&&(En.cameraAutoUpdate===!0&&En.updateCamera(ht),ht=En.getCamera()),ke.isScene===!0&&ke.onBeforeRender(we,ke,ht,_e),oe=bn.get(ke,De.length),oe.init(),De.push(oe),An.multiplyMatrices(ht.projectionMatrix,ht.matrixWorldInverse),Lt.setFromProjectionMatrix(An),Xt=this.localClippingEnabled,Bt=Hn.init(this.clippingPlanes,Xt),Te=In.get(ke,ie.length),Te.init(),ie.push(Te),Au(ke,ht,0,we.sortObjects),Te.finish(),we.sortObjects===!0&&Te.sort(bt,Ct),this.info.render.frame++,Bt===!0&&Hn.beginShadows();const Nt=oe.state.shadowsArray;if(Gt.render(Nt,ke,ht),Bt===!0&&Hn.endShadows(),this.info.autoReset===!0&&this.info.reset(),pl.render(Te,ke),oe.setupLights(we._useLegacyLights),ht.isArrayCamera){const Ie=ht.cameras;for(let pt=0,an=Ie.length;pt<an;pt++){const Nn=Ie[pt];Id(Te,ke,Nn,Nn.viewport)}}else Id(Te,ke,ht);_e!==null&&(je.updateMultisampleRenderTarget(_e),je.updateRenderTargetMipmap(_e)),ke.isScene===!0&&ke.onAfterRender(we,ke,ht),Zn.resetDefaultState(),Xe=-1,ge=null,De.pop(),De.length>0?oe=De[De.length-1]:oe=null,ie.pop(),ie.length>0?Te=ie[ie.length-1]:Te=null};function Au(ke,ht,Nt,Ie){if(ke.visible===!1)return;if(ke.layers.test(ht.layers)){if(ke.isGroup)Nt=ke.renderOrder;else if(ke.isLOD)ke.autoUpdate===!0&&ke.update(ht);else if(ke.isLight)oe.pushLight(ke),ke.castShadow&&oe.pushShadow(ke);else if(ke.isSprite){if(!ke.frustumCulled||Lt.intersectsSprite(ke)){Ie&&Fn.setFromMatrixPosition(ke.matrixWorld).applyMatrix4(An);const Nn=Wt.update(ke),Gn=ke.material;Gn.visible&&Te.push(ke,Nn,Gn,Nt,Fn.z,null)}}else if((ke.isMesh||ke.isLine||ke.isPoints)&&(!ke.frustumCulled||Lt.intersectsObject(ke))){const Nn=Wt.update(ke),Gn=ke.material;if(Ie&&(ke.boundingSphere!==void 0?(ke.boundingSphere===null&&ke.computeBoundingSphere(),Fn.copy(ke.boundingSphere.center)):(Nn.boundingSphere===null&&Nn.computeBoundingSphere(),Fn.copy(Nn.boundingSphere.center)),Fn.applyMatrix4(ke.matrixWorld).applyMatrix4(An)),Array.isArray(Gn)){const jn=Nn.groups;for(let el=0,$t=jn.length;el<$t;el++){const Jn=jn[el],Bl=Gn[Jn.materialIndex];Bl&&Bl.visible&&Te.push(ke,Nn,Bl,Nt,Fn.z,Jn)}}else Gn.visible&&Te.push(ke,Nn,Gn,Nt,Fn.z,null)}}const an=ke.children;for(let Nn=0,Gn=an.length;Nn<Gn;Nn++)Au(an[Nn],ht,Nt,Ie)}function Id(ke,ht,Nt,Ie){const pt=ke.opaque,an=ke.transmissive,Nn=ke.transparent;oe.setupLightsView(Nt),Bt===!0&&Hn.setGlobalState(we.clippingPlanes,Nt),an.length>0&&A3(pt,an,ht,Nt),Ie&&wn.viewport(Le.copy(Ie)),pt.length>0&&rc(pt,ht,Nt),an.length>0&&rc(an,ht,Nt),Nn.length>0&&rc(Nn,ht,Nt),wn.buffers.depth.setTest(!0),wn.buffers.depth.setMask(!0),wn.buffers.color.setMask(!0),wn.setPolygonOffset(!1)}function A3(ke,ht,Nt,Ie){if((Nt.isScene===!0?Nt.overrideMaterial:null)!==null)return;const an=_n.isWebGL2;mn===null&&(mn=new jN(1,1,{generateMipmaps:!0,type:Mn.has("EXT_color_buffer_half_float")?YH:_N,minFilter:jH,samples:an?4:0})),we.getDrawingBufferSize(Un),an?mn.setSize(Un.x,Un.y):mn.setSize(tF(Un.x),tF(Un.y));const Nn=we.getRenderTarget();we.setRenderTarget(mn),we.getClearColor(ft),et=we.getClearAlpha(),et<1&&we.setClearColor(16777215,.5),we.clear();const Gn=we.toneMapping;we.toneMapping=GN,rc(ke,Nt,Ie),je.updateMultisampleRenderTarget(mn),je.updateRenderTargetMipmap(mn);let jn=!1;for(let el=0,$t=ht.length;el<$t;el++){const Jn=ht[el],Bl=Jn.object,fu=Jn.geometry,Ss=Jn.material,Su=Jn.group;if(Ss.side===ep&&Bl.layers.test(Ie.layers)){const Xl=Ss.side;Ss.side=D3,Ss.needsUpdate=!0,N0(Bl,Nt,Ie,fu,Ss,Su),Ss.side=Xl,Ss.needsUpdate=!0,jn=!0}}jn===!0&&(je.updateMultisampleRenderTarget(mn),je.updateRenderTargetMipmap(mn)),we.setRenderTarget(Nn),we.setClearColor(ft,et),we.toneMapping=Gn}function rc(ke,ht,Nt){const Ie=ht.isScene===!0?ht.overrideMaterial:null;for(let pt=0,an=ke.length;pt<an;pt++){const Nn=ke[pt],Gn=Nn.object,jn=Nn.geometry,el=Ie===null?Nn.material:Ie,$t=Nn.group;Gn.layers.test(Nt.layers)&&N0(Gn,ht,Nt,jn,el,$t)}}function N0(ke,ht,Nt,Ie,pt,an){ke.onBeforeRender(we,ht,Nt,Ie,pt,an),ke.modelViewMatrix.multiplyMatrices(Nt.matrixWorldInverse,ke.matrixWorld),ke.normalMatrix.getNormalMatrix(ke.modelViewMatrix),pt.onBeforeRender(we,ht,Nt,Ie,ke,an),pt.transparent===!0&&pt.side===ep&&pt.forceSinglePass===!1?(pt.side=D3,pt.needsUpdate=!0,we.renderBufferDirect(Nt,ht,Ie,pt,ke,an),pt.side=oR,pt.needsUpdate=!0,we.renderBufferDirect(Nt,ht,Ie,pt,ke,an),pt.side=ep):we.renderBufferDirect(Nt,ht,Ie,pt,ke,an),ke.onAfterRender(we,ht,Nt,Ie,pt,an)}function ui(ke,ht,Nt){ht.isScene!==!0&&(ht=yn);const Ie=sl.get(ke),pt=oe.state.lights,an=oe.state.shadowsArray,Nn=pt.state.version,Gn=Sn.getParameters(ke,pt.state,an,ht,Nt),jn=Sn.getProgramCacheKey(Gn);let el=Ie.programs;Ie.environment=ke.isMeshStandardMaterial?ht.environment:null,Ie.fog=ht.fog,Ie.envMap=(ke.isMeshStandardMaterial?Dt:We).get(ke.envMap||Ie.environment),el===void 0&&(ke.addEventListener("dispose",tn),el=new Map,Ie.programs=el);let $t=el.get(jn);if($t!==void 0){if(Ie.currentProgram===$t&&Ie.lightsStateVersion===Nn)return Wn(ke,Gn),$t}else Gn.uniforms=Sn.getUniforms(ke),ke.onBuild(Nt,Gn,we),ke.onBeforeCompile(Gn,we),$t=Sn.acquireProgram(Gn,jn),el.set(jn,$t),Ie.uniforms=Gn.uniforms;const Jn=Ie.uniforms;return(!ke.isShaderMaterial&&!ke.isRawShaderMaterial||ke.clipping===!0)&&(Jn.clippingPlanes=Hn.uniform),Wn(ke,Gn),Ie.needsLights=b2(ke),Ie.lightsStateVersion=Nn,Ie.needsLights&&(Jn.ambientLightColor.value=pt.state.ambient,Jn.lightProbe.value=pt.state.probe,Jn.directionalLights.value=pt.state.directional,Jn.directionalLightShadows.value=pt.state.directionalShadow,Jn.spotLights.value=pt.state.spot,Jn.spotLightShadows.value=pt.state.spotShadow,Jn.rectAreaLights.value=pt.state.rectArea,Jn.ltc_1.value=pt.state.rectAreaLTC1,Jn.ltc_2.value=pt.state.rectAreaLTC2,Jn.pointLights.value=pt.state.point,Jn.pointLightShadows.value=pt.state.pointShadow,Jn.hemisphereLights.value=pt.state.hemi,Jn.directionalShadowMap.value=pt.state.directionalShadowMap,Jn.directionalShadowMatrix.value=pt.state.directionalShadowMatrix,Jn.spotShadowMap.value=pt.state.spotShadowMap,Jn.spotLightMatrix.value=pt.state.spotLightMatrix,Jn.spotLightMap.value=pt.state.spotLightMap,Jn.pointShadowMap.value=pt.state.pointShadowMap,Jn.pointShadowMatrix.value=pt.state.pointShadowMatrix),Ie.currentProgram=$t,Ie.uniformsList=null,$t}function A0(ke){if(ke.uniformsList===null){const ht=ke.currentProgram.getUniforms();ke.uniformsList=wU.seqWithValue(ht.seq,ke.uniforms)}return ke.uniformsList}function Wn(ke,ht){const Nt=sl.get(ke);Nt.outputColorSpace=ht.outputColorSpace,Nt.batching=ht.batching,Nt.instancing=ht.instancing,Nt.instancingColor=ht.instancingColor,Nt.skinning=ht.skinning,Nt.morphTargets=ht.morphTargets,Nt.morphNormals=ht.morphNormals,Nt.morphColors=ht.morphColors,Nt.morphTargetsCount=ht.morphTargetsCount,Nt.numClippingPlanes=ht.numClippingPlanes,Nt.numIntersection=ht.numClipIntersection,Nt.vertexAlphas=ht.vertexAlphas,Nt.vertexTangents=ht.vertexTangents,Nt.toneMapping=ht.toneMapping}function S0(ke,ht,Nt,Ie,pt){ht.isScene!==!0&&(ht=yn),je.resetTextureUnits();const an=ht.fog,Nn=Ie.isMeshStandardMaterial?ht.environment:null,Gn=_e===null?we.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:X7,jn=(Ie.isMeshStandardMaterial?Dt:We).get(Ie.envMap||Nn),el=Ie.vertexColors===!0&&!!Nt.attributes.color&&Nt.attributes.color.itemSize===4,$t=!!Nt.attributes.tangent&&(!!Ie.normalMap||Ie.anisotropy>0),Jn=!!Nt.morphAttributes.position,Bl=!!Nt.morphAttributes.normal,fu=!!Nt.morphAttributes.color;let Ss=GN;Ie.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Ss=we.toneMapping);const Su=Nt.morphAttributes.position||Nt.morphAttributes.normal||Nt.morphAttributes.color,Xl=Su!==void 0?Su.length:0,rl=sl.get(Ie),S3=oe.state.lights;if(Bt===!0&&(Xt===!0||ke!==ge)){const Ms=ke===ge&&Ie.id===Xe;Hn.setState(Ie,ke,Ms)}let vl=!1;Ie.version===rl.__version?(rl.needsLights&&rl.lightsStateVersion!==S3.state.version||rl.outputColorSpace!==Gn||pt.isBatchedMesh&&rl.batching===!1||!pt.isBatchedMesh&&rl.batching===!0||pt.isInstancedMesh&&rl.instancing===!1||!pt.isInstancedMesh&&rl.instancing===!0||pt.isSkinnedMesh&&rl.skinning===!1||!pt.isSkinnedMesh&&rl.skinning===!0||pt.isInstancedMesh&&rl.instancingColor===!0&&pt.instanceColor===null||pt.isInstancedMesh&&rl.instancingColor===!1&&pt.instanceColor!==null||rl.envMap!==jn||Ie.fog===!0&&rl.fog!==an||rl.numClippingPlanes!==void 0&&(rl.numClippingPlanes!==Hn.numPlanes||rl.numIntersection!==Hn.numIntersection)||rl.vertexAlphas!==el||rl.vertexTangents!==$t||rl.morphTargets!==Jn||rl.morphNormals!==Bl||rl.morphColors!==fu||rl.toneMapping!==Ss||_n.isWebGL2===!0&&rl.morphTargetsCount!==Xl)&&(vl=!0):(vl=!0,rl.__version=Ie.version);let Lu=rl.currentProgram;vl===!0&&(Lu=ui(Ie,ht,pt));let L3=!1,_c=!1,yd=!1;const Ls=Lu.getUniforms(),$u=rl.uniforms;if(wn.useProgram(Lu.program)&&(L3=!0,_c=!0,yd=!0),Ie.id!==Xe&&(Xe=Ie.id,_c=!0),L3||ge!==ke){Ls.setValue(Tt,"projectionMatrix",ke.projectionMatrix),Ls.setValue(Tt,"viewMatrix",ke.matrixWorldInverse);const Ms=Ls.map.cameraPosition;Ms!==void 0&&Ms.setValue(Tt,Fn.setFromMatrixPosition(ke.matrixWorld)),_n.logarithmicDepthBuffer&&Ls.setValue(Tt,"logDepthBufFC",2/(Math.log(ke.far+1)/Math.LN2)),(Ie.isMeshPhongMaterial||Ie.isMeshToonMaterial||Ie.isMeshLambertMaterial||Ie.isMeshBasicMaterial||Ie.isMeshStandardMaterial||Ie.isShaderMaterial)&&Ls.setValue(Tt,"isOrthographic",ke.isOrthographicCamera===!0),ge!==ke&&(ge=ke,_c=!0,yd=!0)}if(pt.isSkinnedMesh){Ls.setOptional(Tt,pt,"bindMatrix"),Ls.setOptional(Tt,pt,"bindMatrixInverse");const Ms=pt.skeleton;Ms&&(_n.floatVertexTextures?(Ms.boneTexture===null&&Ms.computeBoneTexture(),Ls.setValue(Tt,"boneTexture",Ms.boneTexture,je)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}pt.isBatchedMesh&&(Ls.setOptional(Tt,pt,"batchingTexture"),Ls.setValue(Tt,"batchingTexture",pt._matricesTexture,je));const ai=Nt.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0&&_n.isWebGL2===!0)&&$n.update(pt,Nt,Lu),(_c||rl.receiveShadow!==pt.receiveShadow)&&(rl.receiveShadow=pt.receiveShadow,Ls.setValue(Tt,"receiveShadow",pt.receiveShadow)),Ie.isMeshGouraudMaterial&&Ie.envMap!==null&&($u.envMap.value=jn,$u.flipEnvMap.value=jn.isCubeTexture&&jn.isRenderTargetTexture===!1?-1:1),_c&&(Ls.setValue(Tt,"toneMappingExposure",we.toneMappingExposure),rl.needsLights&&dd($u,yd),an&&Ie.fog===!0&&on.refreshFogUniforms($u,an),on.refreshMaterialUniforms($u,Ie,St,It,mn),wU.upload(Tt,A0(rl),$u,je)),Ie.isShaderMaterial&&Ie.uniformsNeedUpdate===!0&&(wU.upload(Tt,A0(rl),$u,je),Ie.uniformsNeedUpdate=!1),Ie.isSpriteMaterial&&Ls.setValue(Tt,"center",pt.center),Ls.setValue(Tt,"modelViewMatrix",pt.modelViewMatrix),Ls.setValue(Tt,"normalMatrix",pt.normalMatrix),Ls.setValue(Tt,"modelMatrix",pt.matrixWorld),Ie.isShaderMaterial||Ie.isRawShaderMaterial){const Ms=Ie.uniformsGroups;for(let xs=0,Vc=Ms.length;xs<Vc;xs++)if(_n.isWebGL2){const wd=Ms[xs];gl.update(wd,Lu),gl.bind(wd,Lu)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Lu}function dd(ke,ht){ke.ambientLightColor.needsUpdate=ht,ke.lightProbe.needsUpdate=ht,ke.directionalLights.needsUpdate=ht,ke.directionalLightShadows.needsUpdate=ht,ke.pointLights.needsUpdate=ht,ke.pointLightShadows.needsUpdate=ht,ke.spotLights.needsUpdate=ht,ke.spotLightShadows.needsUpdate=ht,ke.rectAreaLights.needsUpdate=ht,ke.hemisphereLights.needsUpdate=ht}function b2(ke){return ke.isMeshLambertMaterial||ke.isMeshToonMaterial||ke.isMeshPhongMaterial||ke.isMeshStandardMaterial||ke.isShadowMaterial||ke.isShaderMaterial&&ke.lights===!0}this.getActiveCubeFace=function(){return Ye},this.getActiveMipmapLevel=function(){return Ve},this.getRenderTarget=function(){return _e},this.setRenderTargetTextures=function(ke,ht,Nt){sl.get(ke.texture).__webglTexture=ht,sl.get(ke.depthTexture).__webglTexture=Nt;const Ie=sl.get(ke);Ie.__hasExternalTextures=!0,Ie.__hasExternalTextures&&(Ie.__autoAllocateDepthBuffer=Nt===void 0,Ie.__autoAllocateDepthBuffer||Mn.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Ie.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(ke,ht){const Nt=sl.get(ke);Nt.__webglFramebuffer=ht,Nt.__useDefaultFramebuffer=ht===void 0},this.setRenderTarget=function(ke,ht=0,Nt=0){_e=ke,Ye=ht,Ve=Nt;let Ie=!0,pt=null,an=!1,Nn=!1;if(ke){const jn=sl.get(ke);jn.__useDefaultFramebuffer!==void 0?(wn.bindFramebuffer(Tt.FRAMEBUFFER,null),Ie=!1):jn.__webglFramebuffer===void 0?je.setupRenderTarget(ke):jn.__hasExternalTextures&&je.rebindTextures(ke,sl.get(ke.texture).__webglTexture,sl.get(ke.depthTexture).__webglTexture);const el=ke.texture;(el.isData3DTexture||el.isDataArrayTexture||el.isCompressedArrayTexture)&&(Nn=!0);const $t=sl.get(ke).__webglFramebuffer;ke.isWebGLCubeRenderTarget?(Array.isArray($t[ht])?pt=$t[ht][Nt]:pt=$t[ht],an=!0):_n.isWebGL2&&ke.samples>0&&je.useMultisampledRTT(ke)===!1?pt=sl.get(ke).__webglMultisampledFramebuffer:Array.isArray($t)?pt=$t[Nt]:pt=$t,Le.copy(ke.viewport),ve.copy(ke.scissor),st=ke.scissorTest}else Le.copy(Ft).multiplyScalar(St).floor(),ve.copy(Ht).multiplyScalar(St).floor(),st=Ut;if(wn.bindFramebuffer(Tt.FRAMEBUFFER,pt)&&_n.drawBuffers&&Ie&&wn.drawBuffers(ke,pt),wn.viewport(Le),wn.scissor(ve),wn.setScissorTest(st),an){const jn=sl.get(ke.texture);Tt.framebufferTexture2D(Tt.FRAMEBUFFER,Tt.COLOR_ATTACHMENT0,Tt.TEXTURE_CUBE_MAP_POSITIVE_X+ht,jn.__webglTexture,Nt)}else if(Nn){const jn=sl.get(ke.texture),el=ht||0;Tt.framebufferTextureLayer(Tt.FRAMEBUFFER,Tt.COLOR_ATTACHMENT0,jn.__webglTexture,Nt||0,el)}Xe=-1},this.readRenderTargetPixels=function(ke,ht,Nt,Ie,pt,an,Nn){if(!(ke&&ke.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gn=sl.get(ke).__webglFramebuffer;if(ke.isWebGLCubeRenderTarget&&Nn!==void 0&&(Gn=Gn[Nn]),Gn){wn.bindFramebuffer(Tt.FRAMEBUFFER,Gn);try{const jn=ke.texture,el=jn.format,$t=jn.type;if(el!==sE&&Tn.convert(el)!==Tt.getParameter(Tt.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Jn=$t===YH&&(Mn.has("EXT_color_buffer_half_float")||_n.isWebGL2&&Mn.has("EXT_color_buffer_float"));if($t!==_N&&Tn.convert($t)!==Tt.getParameter(Tt.IMPLEMENTATION_COLOR_READ_TYPE)&&!($t===MN&&(_n.isWebGL2||Mn.has("OES_texture_float")||Mn.has("WEBGL_color_buffer_float")))&&!Jn){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ht>=0&&ht<=ke.width-Ie&&Nt>=0&&Nt<=ke.height-pt&&Tt.readPixels(ht,Nt,Ie,pt,Tn.convert(el),Tn.convert($t),an)}finally{const jn=_e!==null?sl.get(_e).__webglFramebuffer:null;wn.bindFramebuffer(Tt.FRAMEBUFFER,jn)}}},this.copyFramebufferToTexture=function(ke,ht,Nt=0){const Ie=Math.pow(2,-Nt),pt=Math.floor(ht.image.width*Ie),an=Math.floor(ht.image.height*Ie);je.setTexture2D(ht,0),Tt.copyTexSubImage2D(Tt.TEXTURE_2D,Nt,0,0,ke.x,ke.y,pt,an),wn.unbindTexture()},this.copyTextureToTexture=function(ke,ht,Nt,Ie=0){const pt=ht.image.width,an=ht.image.height,Nn=Tn.convert(Nt.format),Gn=Tn.convert(Nt.type);je.setTexture2D(Nt,0),Tt.pixelStorei(Tt.UNPACK_FLIP_Y_WEBGL,Nt.flipY),Tt.pixelStorei(Tt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Nt.premultiplyAlpha),Tt.pixelStorei(Tt.UNPACK_ALIGNMENT,Nt.unpackAlignment),ht.isDataTexture?Tt.texSubImage2D(Tt.TEXTURE_2D,Ie,ke.x,ke.y,pt,an,Nn,Gn,ht.image.data):ht.isCompressedTexture?Tt.compressedTexSubImage2D(Tt.TEXTURE_2D,Ie,ke.x,ke.y,ht.mipmaps[0].width,ht.mipmaps[0].height,Nn,ht.mipmaps[0].data):Tt.texSubImage2D(Tt.TEXTURE_2D,Ie,ke.x,ke.y,Nn,Gn,ht.image),Ie===0&&Nt.generateMipmaps&&Tt.generateMipmap(Tt.TEXTURE_2D),wn.unbindTexture()},this.copyTextureToTexture3D=function(ke,ht,Nt,Ie,pt=0){if(we.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const an=ke.max.x-ke.min.x+1,Nn=ke.max.y-ke.min.y+1,Gn=ke.max.z-ke.min.z+1,jn=Tn.convert(Ie.format),el=Tn.convert(Ie.type);let $t;if(Ie.isData3DTexture)je.setTexture3D(Ie,0),$t=Tt.TEXTURE_3D;else if(Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)je.setTexture2DArray(Ie,0),$t=Tt.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Tt.pixelStorei(Tt.UNPACK_FLIP_Y_WEBGL,Ie.flipY),Tt.pixelStorei(Tt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Ie.premultiplyAlpha),Tt.pixelStorei(Tt.UNPACK_ALIGNMENT,Ie.unpackAlignment);const Jn=Tt.getParameter(Tt.UNPACK_ROW_LENGTH),Bl=Tt.getParameter(Tt.UNPACK_IMAGE_HEIGHT),fu=Tt.getParameter(Tt.UNPACK_SKIP_PIXELS),Ss=Tt.getParameter(Tt.UNPACK_SKIP_ROWS),Su=Tt.getParameter(Tt.UNPACK_SKIP_IMAGES),Xl=Nt.isCompressedTexture?Nt.mipmaps[pt]:Nt.image;Tt.pixelStorei(Tt.UNPACK_ROW_LENGTH,Xl.width),Tt.pixelStorei(Tt.UNPACK_IMAGE_HEIGHT,Xl.height),Tt.pixelStorei(Tt.UNPACK_SKIP_PIXELS,ke.min.x),Tt.pixelStorei(Tt.UNPACK_SKIP_ROWS,ke.min.y),Tt.pixelStorei(Tt.UNPACK_SKIP_IMAGES,ke.min.z),Nt.isDataTexture||Nt.isData3DTexture?Tt.texSubImage3D($t,pt,ht.x,ht.y,ht.z,an,Nn,Gn,jn,el,Xl.data):Nt.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Tt.compressedTexSubImage3D($t,pt,ht.x,ht.y,ht.z,an,Nn,Gn,jn,Xl.data)):Tt.texSubImage3D($t,pt,ht.x,ht.y,ht.z,an,Nn,Gn,jn,el,Xl),Tt.pixelStorei(Tt.UNPACK_ROW_LENGTH,Jn),Tt.pixelStorei(Tt.UNPACK_IMAGE_HEIGHT,Bl),Tt.pixelStorei(Tt.UNPACK_SKIP_PIXELS,fu),Tt.pixelStorei(Tt.UNPACK_SKIP_ROWS,Ss),Tt.pixelStorei(Tt.UNPACK_SKIP_IMAGES,Su),pt===0&&Ie.generateMipmaps&&Tt.generateMipmap($t),wn.unbindTexture()},this.initTexture=function(ke){ke.isCubeTexture?je.setTextureCube(ke,0):ke.isData3DTexture?je.setTexture3D(ke,0):ke.isDataArrayTexture||ke.isCompressedArrayTexture?je.setTexture2DArray(ke,0):je.setTexture2D(ke,0),wn.unbindTexture()},this.resetState=function(){Ye=0,Ve=0,_e=null,wn.reset(),Zn.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return i7}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(l){this._outputColorSpace=l;const n=this.getContext();n.drawingBufferColorSpace=l===V_?"display-p3":"srgb",n.unpackColorSpace=ks.workingColorSpace===rF?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===qf?J8:qj}set outputEncoding(l){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=l===J8?qf:X7}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(l){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=l}}class xZ extends MZ{}xZ.prototype.isWebGL1Renderer=!0;class Ine extends Jf{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(l,n){return super.copy(l,n),l.background!==null&&(this.background=l.background.clone()),l.environment!==null&&(this.environment=l.environment.clone()),l.fog!==null&&(this.fog=l.fog.clone()),this.backgroundBlurriness=l.backgroundBlurriness,this.backgroundIntensity=l.backgroundIntensity,l.overrideMaterial!==null&&(this.overrideMaterial=l.overrideMaterial.clone()),this.matrixAutoUpdate=l.matrixAutoUpdate,this}toJSON(l){const n=super.toJSON(l);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class HZ{constructor(l,n){this.isInterleavedBuffer=!0,this.array=l,this.stride=n,this.count=l!==void 0?l.length/n:0,this.usage=t_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=U7()}onUploadCallback(){}set needsUpdate(l){l===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(l){return this.usage=l,this}addUpdateRange(l,n){this.updateRanges.push({start:l,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(l){return this.array=new l.array.constructor(l.array),this.count=l.count,this.stride=l.stride,this.usage=l.usage,this}copyAt(l,n,t){l*=this.stride,t*=n.stride;for(let c=0,y=this.stride;c<y;c++)this.array[l+c]=n.array[t+c];return this}set(l,n=0){return this.array.set(l,n),this}clone(l){l.arrayBuffers===void 0&&(l.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=U7()),l.arrayBuffers[this.array.buffer._uuid]===void 0&&(l.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(l.arrayBuffers[this.array.buffer._uuid]),t=new this.constructor(n,this.stride);return t.setUsage(this.usage),t}onUpload(l){return this.onUploadCallback=l,this}toJSON(l){return l.arrayBuffers===void 0&&(l.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=U7()),l.arrayBuffers[this.array.buffer._uuid]===void 0&&(l.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const v1=new nt;class IY{constructor(l,n,t,c=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=l,this.itemSize=n,this.offset=t,this.normalized=c}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(l){this.data.needsUpdate=l}applyMatrix4(l){for(let n=0,t=this.data.count;n<t;n++)v1.fromBufferAttribute(this,n),v1.applyMatrix4(l),this.setXYZ(n,v1.x,v1.y,v1.z);return this}applyNormalMatrix(l){for(let n=0,t=this.count;n<t;n++)v1.fromBufferAttribute(this,n),v1.applyNormalMatrix(l),this.setXYZ(n,v1.x,v1.y,v1.z);return this}transformDirection(l){for(let n=0,t=this.count;n<t;n++)v1.fromBufferAttribute(this,n),v1.transformDirection(l),this.setXYZ(n,v1.x,v1.y,v1.z);return this}setX(l,n){return this.normalized&&(n=zs(n,this.array)),this.data.array[l*this.data.stride+this.offset]=n,this}setY(l,n){return this.normalized&&(n=zs(n,this.array)),this.data.array[l*this.data.stride+this.offset+1]=n,this}setZ(l,n){return this.normalized&&(n=zs(n,this.array)),this.data.array[l*this.data.stride+this.offset+2]=n,this}setW(l,n){return this.normalized&&(n=zs(n,this.array)),this.data.array[l*this.data.stride+this.offset+3]=n,this}getX(l){let n=this.data.array[l*this.data.stride+this.offset];return this.normalized&&(n=tp(n,this.array)),n}getY(l){let n=this.data.array[l*this.data.stride+this.offset+1];return this.normalized&&(n=tp(n,this.array)),n}getZ(l){let n=this.data.array[l*this.data.stride+this.offset+2];return this.normalized&&(n=tp(n,this.array)),n}getW(l){let n=this.data.array[l*this.data.stride+this.offset+3];return this.normalized&&(n=tp(n,this.array)),n}setXY(l,n,t){return l=l*this.data.stride+this.offset,this.normalized&&(n=zs(n,this.array),t=zs(t,this.array)),this.data.array[l+0]=n,this.data.array[l+1]=t,this}setXYZ(l,n,t,c){return l=l*this.data.stride+this.offset,this.normalized&&(n=zs(n,this.array),t=zs(t,this.array),c=zs(c,this.array)),this.data.array[l+0]=n,this.data.array[l+1]=t,this.data.array[l+2]=c,this}setXYZW(l,n,t,c,y){return l=l*this.data.stride+this.offset,this.normalized&&(n=zs(n,this.array),t=zs(t,this.array),c=zs(c,this.array),y=zs(y,this.array)),this.data.array[l+0]=n,this.data.array[l+1]=t,this.data.array[l+2]=c,this.data.array[l+3]=y,this}clone(l){if(l===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let t=0;t<this.count;t++){const c=t*this.data.stride+this.offset;for(let y=0;y<this.itemSize;y++)n.push(this.data.array[c+y])}return new Xf(new this.array.constructor(n),this.itemSize,this.normalized)}else return l.interleavedBuffers===void 0&&(l.interleavedBuffers={}),l.interleavedBuffers[this.data.uuid]===void 0&&(l.interleavedBuffers[this.data.uuid]=this.data.clone(l)),new IY(l.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(l){if(l===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let t=0;t<this.count;t++){const c=t*this.data.stride+this.offset;for(let y=0;y<this.itemSize;y++)n.push(this.data.array[c+y])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return l.interleavedBuffers===void 0&&(l.interleavedBuffers={}),l.interleavedBuffers[this.data.uuid]===void 0&&(l.interleavedBuffers[this.data.uuid]=this.data.toJSON(l)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class dne extends p0{constructor(l=null,n=1,t=1,c,y,S,g,G,V=kf,Z=kf,v,ee){super(null,S,g,G,V,Z,c,y,v,ee),this.isDataTexture=!0,this.image={data:l,width:n,height:t},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class JW extends Xf{constructor(l,n,t,c=1){super(l,n,t),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=c}copy(l){return super.copy(l),this.meshPerAttribute=l.meshPerAttribute,this}toJSON(){const l=super.toJSON();return l.meshPerAttribute=this.meshPerAttribute,l.isInstancedBufferAttribute=!0,l}}const UP=new Sl,XW=new Sl,qB=[],vW=new sc,BZ=new Sl,Jx=new I2,Xx=new TO;class UZ extends I2{constructor(l,n,t){super(l,n),this.isInstancedMesh=!0,this.instanceMatrix=new JW(new Float32Array(t*16),16),this.instanceColor=null,this.count=t,this.boundingBox=null,this.boundingSphere=null;for(let c=0;c<t;c++)this.setMatrixAt(c,BZ)}computeBoundingBox(){const l=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new sc),l.boundingBox===null&&l.computeBoundingBox(),this.boundingBox.makeEmpty();for(let t=0;t<n;t++)this.getMatrixAt(t,UP),vW.copy(l.boundingBox).applyMatrix4(UP),this.boundingBox.union(vW)}computeBoundingSphere(){const l=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new TO),l.boundingSphere===null&&l.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let t=0;t<n;t++)this.getMatrixAt(t,UP),Xx.copy(l.boundingSphere).applyMatrix4(UP),this.boundingSphere.union(Xx)}copy(l,n){return super.copy(l,n),this.instanceMatrix.copy(l.instanceMatrix),l.instanceColor!==null&&(this.instanceColor=l.instanceColor.clone()),this.count=l.count,l.boundingBox!==null&&(this.boundingBox=l.boundingBox.clone()),l.boundingSphere!==null&&(this.boundingSphere=l.boundingSphere.clone()),this}getColorAt(l,n){n.fromArray(this.instanceColor.array,l*3)}getMatrixAt(l,n){n.fromArray(this.instanceMatrix.array,l*16)}raycast(l,n){const t=this.matrixWorld,c=this.count;if(Jx.geometry=this.geometry,Jx.material=this.material,Jx.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xx.copy(this.boundingSphere),Xx.applyMatrix4(t),l.ray.intersectsSphere(Xx)!==!1))for(let y=0;y<c;y++){this.getMatrixAt(y,UP),XW.multiplyMatrices(t,UP),Jx.matrixWorld=XW,Jx.raycast(l,qB);for(let S=0,g=qB.length;S<g;S++){const G=qB[S];G.instanceId=y,G.object=this,n.push(G)}qB.length=0}}setColorAt(l,n){this.instanceColor===null&&(this.instanceColor=new JW(new Float32Array(this.instanceMatrix.count*3),3)),n.toArray(this.instanceColor.array,l*3)}setMatrixAt(l,n){n.toArray(this.instanceMatrix.array,l*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class dY extends pO{constructor(l){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Dl(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(l)}copy(l){return super.copy(l),this.color.copy(l.color),this.map=l.map,this.linewidth=l.linewidth,this.linecap=l.linecap,this.linejoin=l.linejoin,this.fog=l.fog,this}}const ej=new nt,tj=new nt,nj=new Sl,xG=new uF,KB=new TO;class FZ extends Jf{constructor(l=new tc,n=new dY){super(),this.isLine=!0,this.type="Line",this.geometry=l,this.material=n,this.updateMorphTargets()}copy(l,n){return super.copy(l,n),this.material=Array.isArray(l.material)?l.material.slice():l.material,this.geometry=l.geometry,this}computeLineDistances(){const l=this.geometry;if(l.index===null){const n=l.attributes.position,t=[0];for(let c=1,y=n.count;c<y;c++)ej.fromBufferAttribute(n,c-1),tj.fromBufferAttribute(n,c),t[c]=t[c-1],t[c]+=ej.distanceTo(tj);l.setAttribute("lineDistance",new Qu(t,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(l,n){const t=this.geometry,c=this.matrixWorld,y=l.params.Line.threshold,S=t.drawRange;if(t.boundingSphere===null&&t.computeBoundingSphere(),KB.copy(t.boundingSphere),KB.applyMatrix4(c),KB.radius+=y,l.ray.intersectsSphere(KB)===!1)return;nj.copy(c).invert(),xG.copy(l.ray).applyMatrix4(nj);const g=y/((this.scale.x+this.scale.y+this.scale.z)/3),G=g*g,V=new nt,Z=new nt,v=new nt,ee=new nt,te=this.isLineSegments?2:1,he=t.index,oe=t.attributes.position;if(he!==null){const ie=Math.max(0,S.start),De=Math.min(he.count,S.start+S.count);for(let we=ie,Ae=De-1;we<Ae;we+=te){const Ye=he.getX(we),Ve=he.getX(we+1);if(V.fromBufferAttribute(oe,Ye),Z.fromBufferAttribute(oe,Ve),xG.distanceSqToSegment(V,Z,ee,v)>G)continue;ee.applyMatrix4(this.matrixWorld);const Xe=l.ray.origin.distanceTo(ee);Xe<l.near||Xe>l.far||n.push({distance:Xe,point:v.clone().applyMatrix4(this.matrixWorld),index:we,face:null,faceIndex:null,object:this})}}else{const ie=Math.max(0,S.start),De=Math.min(oe.count,S.start+S.count);for(let we=ie,Ae=De-1;we<Ae;we+=te){if(V.fromBufferAttribute(oe,we),Z.fromBufferAttribute(oe,we+1),xG.distanceSqToSegment(V,Z,ee,v)>G)continue;ee.applyMatrix4(this.matrixWorld);const Ve=l.ray.origin.distanceTo(ee);Ve<l.near||Ve>l.far||n.push({distance:Ve,point:v.clone().applyMatrix4(this.matrixWorld),index:we,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,t=Object.keys(n);if(t.length>0){const c=n[t[0]];if(c!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let y=0,S=c.length;y<S;y++){const g=c[y].name||String(y);this.morphTargetInfluences.push(0),this.morphTargetDictionary[g]=y}}}}}const lj=new nt,sj=new nt;class GZ extends FZ{constructor(l,n){super(l,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const l=this.geometry;if(l.index===null){const n=l.attributes.position,t=[];for(let c=0,y=n.count;c<y;c+=2)lj.fromBufferAttribute(n,c),sj.fromBufferAttribute(n,c+1),t[c]=c===0?0:t[c-1],t[c+1]=t[c]+lj.distanceTo(sj);l.setAttribute("lineDistance",new Qu(t,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yY extends tc{constructor(l=1,n=1,t=1,c=32,y=1,S=!1,g=0,G=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:l,radiusBottom:n,height:t,radialSegments:c,heightSegments:y,openEnded:S,thetaStart:g,thetaLength:G};const V=this;c=Math.floor(c),y=Math.floor(y);const Z=[],v=[],ee=[],te=[];let he=0;const Te=[],oe=t/2;let ie=0;De(),S===!1&&(l>0&&we(!0),n>0&&we(!1)),this.setIndex(Z),this.setAttribute("position",new Qu(v,3)),this.setAttribute("normal",new Qu(ee,3)),this.setAttribute("uv",new Qu(te,2));function De(){const Ae=new nt,Ye=new nt;let Ve=0;const _e=(n-l)/t;for(let Xe=0;Xe<=y;Xe++){const ge=[],Le=Xe/y,ve=Le*(n-l)+l;for(let st=0;st<=c;st++){const ft=st/c,et=ft*G+g,at=Math.sin(et),It=Math.cos(et);Ye.x=ve*at,Ye.y=-Le*t+oe,Ye.z=ve*It,v.push(Ye.x,Ye.y,Ye.z),Ae.set(at,_e,It).normalize(),ee.push(Ae.x,Ae.y,Ae.z),te.push(ft,1-Le),ge.push(he++)}Te.push(ge)}for(let Xe=0;Xe<c;Xe++)for(let ge=0;ge<y;ge++){const Le=Te[ge][Xe],ve=Te[ge+1][Xe],st=Te[ge+1][Xe+1],ft=Te[ge][Xe+1];Z.push(Le,ve,ft),Z.push(ve,st,ft),Ve+=6}V.addGroup(ie,Ve,0),ie+=Ve}function we(Ae){const Ye=he,Ve=new Nl,_e=new nt;let Xe=0;const ge=Ae===!0?l:n,Le=Ae===!0?1:-1;for(let st=1;st<=c;st++)v.push(0,oe*Le,0),ee.push(0,Le,0),te.push(.5,.5),he++;const ve=he;for(let st=0;st<=c;st++){const et=st/c*G+g,at=Math.cos(et),It=Math.sin(et);_e.x=ge*It,_e.y=oe*Le,_e.z=ge*at,v.push(_e.x,_e.y,_e.z),ee.push(0,Le,0),Ve.x=at*.5+.5,Ve.y=It*.5*Le+.5,te.push(Ve.x,Ve.y),he++}for(let st=0;st<c;st++){const ft=Ye+st,et=ve+st;Ae===!0?Z.push(et,et+1,ft):Z.push(et+1,et,ft),Xe+=3}V.addGroup(ie,Xe,Ae===!0?1:2),ie+=Xe}}copy(l){return super.copy(l),this.parameters=Object.assign({},l.parameters),this}static fromJSON(l){return new yY(l.radiusTop,l.radiusBottom,l.height,l.radialSegments,l.heightSegments,l.openEnded,l.thetaStart,l.thetaLength)}}class q_ extends tc{constructor(l=[],n=[],t=1,c=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:l,indices:n,radius:t,detail:c};const y=[],S=[];g(c),V(t),Z(),this.setAttribute("position",new Qu(y,3)),this.setAttribute("normal",new Qu(y.slice(),3)),this.setAttribute("uv",new Qu(S,2)),c===0?this.computeVertexNormals():this.normalizeNormals();function g(De){const we=new nt,Ae=new nt,Ye=new nt;for(let Ve=0;Ve<n.length;Ve+=3)te(n[Ve+0],we),te(n[Ve+1],Ae),te(n[Ve+2],Ye),G(we,Ae,Ye,De)}function G(De,we,Ae,Ye){const Ve=Ye+1,_e=[];for(let Xe=0;Xe<=Ve;Xe++){_e[Xe]=[];const ge=De.clone().lerp(Ae,Xe/Ve),Le=we.clone().lerp(Ae,Xe/Ve),ve=Ve-Xe;for(let st=0;st<=ve;st++)st===0&&Xe===Ve?_e[Xe][st]=ge:_e[Xe][st]=ge.clone().lerp(Le,st/ve)}for(let Xe=0;Xe<Ve;Xe++)for(let ge=0;ge<2*(Ve-Xe)-1;ge++){const Le=Math.floor(ge/2);ge%2===0?(ee(_e[Xe][Le+1]),ee(_e[Xe+1][Le]),ee(_e[Xe][Le])):(ee(_e[Xe][Le+1]),ee(_e[Xe+1][Le+1]),ee(_e[Xe+1][Le]))}}function V(De){const we=new nt;for(let Ae=0;Ae<y.length;Ae+=3)we.x=y[Ae+0],we.y=y[Ae+1],we.z=y[Ae+2],we.normalize().multiplyScalar(De),y[Ae+0]=we.x,y[Ae+1]=we.y,y[Ae+2]=we.z}function Z(){const De=new nt;for(let we=0;we<y.length;we+=3){De.x=y[we+0],De.y=y[we+1],De.z=y[we+2];const Ae=oe(De)/2/Math.PI+.5,Ye=ie(De)/Math.PI+.5;S.push(Ae,1-Ye)}he(),v()}function v(){for(let De=0;De<S.length;De+=6){const we=S[De+0],Ae=S[De+2],Ye=S[De+4],Ve=Math.max(we,Ae,Ye),_e=Math.min(we,Ae,Ye);Ve>.9&&_e<.1&&(we<.2&&(S[De+0]+=1),Ae<.2&&(S[De+2]+=1),Ye<.2&&(S[De+4]+=1))}}function ee(De){y.push(De.x,De.y,De.z)}function te(De,we){const Ae=De*3;we.x=l[Ae+0],we.y=l[Ae+1],we.z=l[Ae+2]}function he(){const De=new nt,we=new nt,Ae=new nt,Ye=new nt,Ve=new Nl,_e=new Nl,Xe=new Nl;for(let ge=0,Le=0;ge<y.length;ge+=9,Le+=6){De.set(y[ge+0],y[ge+1],y[ge+2]),we.set(y[ge+3],y[ge+4],y[ge+5]),Ae.set(y[ge+6],y[ge+7],y[ge+8]),Ve.set(S[Le+0],S[Le+1]),_e.set(S[Le+2],S[Le+3]),Xe.set(S[Le+4],S[Le+5]),Ye.copy(De).add(we).add(Ae).divideScalar(3);const ve=oe(Ye);Te(Ve,Le+0,De,ve),Te(_e,Le+2,we,ve),Te(Xe,Le+4,Ae,ve)}}function Te(De,we,Ae,Ye){Ye<0&&De.x===1&&(S[we]=De.x-1),Ae.x===0&&Ae.z===0&&(S[we]=Ye/2/Math.PI+.5)}function oe(De){return Math.atan2(De.z,-De.x)}function ie(De){return Math.atan2(-De.y,Math.sqrt(De.x*De.x+De.z*De.z))}}copy(l){return super.copy(l),this.parameters=Object.assign({},l.parameters),this}static fromJSON(l){return new q_(l.vertices,l.indices,l.radius,l.details)}}const QB=new nt,$B=new nt,HG=new nt,ZB=new Qf;class _Z extends tc{constructor(l=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:l,thresholdAngle:n},l!==null){const c=Math.pow(10,4),y=Math.cos(Nb*n),S=l.getIndex(),g=l.getAttribute("position"),G=S?S.count:g.count,V=[0,0,0],Z=["a","b","c"],v=new Array(3),ee={},te=[];for(let he=0;he<G;he+=3){S?(V[0]=S.getX(he),V[1]=S.getX(he+1),V[2]=S.getX(he+2)):(V[0]=he,V[1]=he+1,V[2]=he+2);const{a:Te,b:oe,c:ie}=ZB;if(Te.fromBufferAttribute(g,V[0]),oe.fromBufferAttribute(g,V[1]),ie.fromBufferAttribute(g,V[2]),ZB.getNormal(HG),v[0]=`${Math.round(Te.x*c)},${Math.round(Te.y*c)},${Math.round(Te.z*c)}`,v[1]=`${Math.round(oe.x*c)},${Math.round(oe.y*c)},${Math.round(oe.z*c)}`,v[2]=`${Math.round(ie.x*c)},${Math.round(ie.y*c)},${Math.round(ie.z*c)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let De=0;De<3;De++){const we=(De+1)%3,Ae=v[De],Ye=v[we],Ve=ZB[Z[De]],_e=ZB[Z[we]],Xe=`${Ae}_${Ye}`,ge=`${Ye}_${Ae}`;ge in ee&&ee[ge]?(HG.dot(ee[ge].normal)<=y&&(te.push(Ve.x,Ve.y,Ve.z),te.push(_e.x,_e.y,_e.z)),ee[ge]=null):Xe in ee||(ee[Xe]={index0:V[De],index1:V[we],normal:HG.clone()})}}for(const he in ee)if(ee[he]){const{index0:Te,index1:oe}=ee[he];QB.fromBufferAttribute(g,Te),$B.fromBufferAttribute(g,oe),te.push(QB.x,QB.y,QB.z),te.push($B.x,$B.y,$B.z)}this.setAttribute("position",new Qu(te,3))}}copy(l){return super.copy(l),this.parameters=Object.assign({},l.parameters),this}}const VZ={triangulate:function(e,l,n=2){const t=l&&l.length,c=t?l[0]*n:e.length;let y=wY(e,0,c,n,!0);const S=[];if(!y||y.next===y.prev)return S;let g,G,V,Z,v,ee,te;if(t&&(y=kZ(e,l,y,n)),e.length>80*n){g=V=e[0],G=Z=e[1];for(let he=n;he<c;he+=n)v=e[he],ee=e[he+1],v<g&&(g=v),ee<G&&(G=ee),v>V&&(V=v),ee>Z&&(Z=ee);te=Math.max(V-g,Z-G),te=te!==0?32767/te:0}return kH(y,S,n,g,G,te,0),S}};function wY(e,l,n,t,c){let y,S;if(c===nJ(e,l,n,t)>0)for(y=l;y<n;y+=t)S=rj(y,e[y],e[y+1],S);else for(y=n-t;y>=l;y-=t)S=rj(y,e[y],e[y+1],S);return S&&oF(S,S.next)&&(KH(S),S=S.next),S}function IL(e,l){if(!e)return e;l||(l=e);let n=e,t;do if(t=!1,!n.steiner&&(oF(n,n.next)||ku(n.prev,n,n.next)===0)){if(KH(n),n=l=n.prev,n===n.next)break;t=!0}else n=n.next;while(t||n!==l);return l}function kH(e,l,n,t,c,y,S){if(!e)return;!S&&y&&ZZ(e,t,c,y);let g=e,G,V;for(;e.prev!==e.next;){if(G=e.prev,V=e.next,y?jZ(e,t,c,y):WZ(e)){l.push(G.i/n|0),l.push(e.i/n|0),l.push(V.i/n|0),KH(e),e=V.next,g=V.next;continue}if(e=V,e===g){S?S===1?(e=YZ(IL(e),l,n),kH(e,l,n,t,c,y,2)):S===2&&zZ(e,l,n,t,c,y):kH(IL(e),l,n,t,c,y,1);break}}}function WZ(e){const l=e.prev,n=e,t=e.next;if(ku(l,n,t)>=0)return!1;const c=l.x,y=n.x,S=t.x,g=l.y,G=n.y,V=t.y,Z=c<y?c<S?c:S:y<S?y:S,v=g<G?g<V?g:V:G<V?G:V,ee=c>y?c>S?c:S:y>S?y:S,te=g>G?g>V?g:V:G>V?G:V;let he=t.next;for(;he!==l;){if(he.x>=Z&&he.x<=ee&&he.y>=v&&he.y<=te&&Tb(c,g,y,G,S,V,he.x,he.y)&&ku(he.prev,he,he.next)>=0)return!1;he=he.next}return!0}function jZ(e,l,n,t){const c=e.prev,y=e,S=e.next;if(ku(c,y,S)>=0)return!1;const g=c.x,G=y.x,V=S.x,Z=c.y,v=y.y,ee=S.y,te=g<G?g<V?g:V:G<V?G:V,he=Z<v?Z<ee?Z:ee:v<ee?v:ee,Te=g>G?g>V?g:V:G>V?G:V,oe=Z>v?Z>ee?Z:ee:v>ee?v:ee,ie=r_(te,he,l,n,t),De=r_(Te,oe,l,n,t);let we=e.prevZ,Ae=e.nextZ;for(;we&&we.z>=ie&&Ae&&Ae.z<=De;){if(we.x>=te&&we.x<=Te&&we.y>=he&&we.y<=oe&&we!==c&&we!==S&&Tb(g,Z,G,v,V,ee,we.x,we.y)&&ku(we.prev,we,we.next)>=0||(we=we.prevZ,Ae.x>=te&&Ae.x<=Te&&Ae.y>=he&&Ae.y<=oe&&Ae!==c&&Ae!==S&&Tb(g,Z,G,v,V,ee,Ae.x,Ae.y)&&ku(Ae.prev,Ae,Ae.next)>=0))return!1;Ae=Ae.nextZ}for(;we&&we.z>=ie;){if(we.x>=te&&we.x<=Te&&we.y>=he&&we.y<=oe&&we!==c&&we!==S&&Tb(g,Z,G,v,V,ee,we.x,we.y)&&ku(we.prev,we,we.next)>=0)return!1;we=we.prevZ}for(;Ae&&Ae.z<=De;){if(Ae.x>=te&&Ae.x<=Te&&Ae.y>=he&&Ae.y<=oe&&Ae!==c&&Ae!==S&&Tb(g,Z,G,v,V,ee,Ae.x,Ae.y)&&ku(Ae.prev,Ae,Ae.next)>=0)return!1;Ae=Ae.nextZ}return!0}function YZ(e,l,n){let t=e;do{const c=t.prev,y=t.next.next;!oF(c,y)&&EY(c,t,t.next,y)&&qH(c,y)&&qH(y,c)&&(l.push(c.i/n|0),l.push(t.i/n|0),l.push(y.i/n|0),KH(t),KH(t.next),t=e=y),t=t.next}while(t!==e);return IL(t)}function zZ(e,l,n,t,c,y){let S=e;do{let g=S.next.next;for(;g!==S.prev;){if(S.i!==g.i&&vZ(S,g)){let G=TY(S,g);S=IL(S,S.next),G=IL(G,G.next),kH(S,l,n,t,c,y,0),kH(G,l,n,t,c,y,0);return}g=g.next}S=S.next}while(S!==e)}function kZ(e,l,n,t){const c=[];let y,S,g,G,V;for(y=0,S=l.length;y<S;y++)g=l[y]*t,G=y<S-1?l[y+1]*t:e.length,V=wY(e,g,G,t,!1),V===V.next&&(V.steiner=!0),c.push(XZ(V));for(c.sort(qZ),y=0;y<c.length;y++)n=KZ(c[y],n);return n}function qZ(e,l){return e.x-l.x}function KZ(e,l){const n=QZ(e,l);if(!n)return l;const t=TY(n,e);return IL(t,t.next),IL(n,n.next)}function QZ(e,l){let n=l,t=-1/0,c;const y=e.x,S=e.y;do{if(S<=n.y&&S>=n.next.y&&n.next.y!==n.y){const ee=n.x+(S-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(ee<=y&&ee>t&&(t=ee,c=n.x<n.next.x?n:n.next,ee===y))return c}n=n.next}while(n!==l);if(!c)return null;const g=c,G=c.x,V=c.y;let Z=1/0,v;n=c;do y>=n.x&&n.x>=G&&y!==n.x&&Tb(S<V?y:t,S,G,V,S<V?t:y,S,n.x,n.y)&&(v=Math.abs(S-n.y)/(y-n.x),qH(n,e)&&(v<Z||v===Z&&(n.x>c.x||n.x===c.x&&$Z(c,n)))&&(c=n,Z=v)),n=n.next;while(n!==g);return c}function $Z(e,l){return ku(e.prev,e,l.prev)<0&&ku(l.next,e,e.next)<0}function ZZ(e,l,n,t){let c=e;do c.z===0&&(c.z=r_(c.x,c.y,l,n,t)),c.prevZ=c.prev,c.nextZ=c.next,c=c.next;while(c!==e);c.prevZ.nextZ=null,c.prevZ=null,JZ(c)}function JZ(e){let l,n,t,c,y,S,g,G,V=1;do{for(n=e,e=null,y=null,S=0;n;){for(S++,t=n,g=0,l=0;l<V&&(g++,t=t.nextZ,!!t);l++);for(G=V;g>0||G>0&&t;)g!==0&&(G===0||!t||n.z<=t.z)?(c=n,n=n.nextZ,g--):(c=t,t=t.nextZ,G--),y?y.nextZ=c:e=c,c.prevZ=y,y=c;n=t}y.nextZ=null,V*=2}while(S>1);return e}function r_(e,l,n,t,c){return e=(e-n)*c|0,l=(l-t)*c|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,l=(l|l<<8)&16711935,l=(l|l<<4)&252645135,l=(l|l<<2)&858993459,l=(l|l<<1)&1431655765,e|l<<1}function XZ(e){let l=e,n=e;do(l.x<n.x||l.x===n.x&&l.y<n.y)&&(n=l),l=l.next;while(l!==e);return n}function Tb(e,l,n,t,c,y,S,g){return(c-S)*(l-g)>=(e-S)*(y-g)&&(e-S)*(t-g)>=(n-S)*(l-g)&&(n-S)*(y-g)>=(c-S)*(t-g)}function vZ(e,l){return e.next.i!==l.i&&e.prev.i!==l.i&&!eJ(e,l)&&(qH(e,l)&&qH(l,e)&&tJ(e,l)&&(ku(e.prev,e,l.prev)||ku(e,l.prev,l))||oF(e,l)&&ku(e.prev,e,e.next)>0&&ku(l.prev,l,l.next)>0)}function ku(e,l,n){return(l.y-e.y)*(n.x-l.x)-(l.x-e.x)*(n.y-l.y)}function oF(e,l){return e.x===l.x&&e.y===l.y}function EY(e,l,n,t){const c=XB(ku(e,l,n)),y=XB(ku(e,l,t)),S=XB(ku(n,t,e)),g=XB(ku(n,t,l));return!!(c!==y&&S!==g||c===0&&JB(e,n,l)||y===0&&JB(e,t,l)||S===0&&JB(n,e,t)||g===0&&JB(n,l,t))}function JB(e,l,n){return l.x<=Math.max(e.x,n.x)&&l.x>=Math.min(e.x,n.x)&&l.y<=Math.max(e.y,n.y)&&l.y>=Math.min(e.y,n.y)}function XB(e){return e>0?1:e<0?-1:0}function eJ(e,l){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==l.i&&n.next.i!==l.i&&EY(n,n.next,e,l))return!0;n=n.next}while(n!==e);return!1}function qH(e,l){return ku(e.prev,e,e.next)<0?ku(e,l,e.next)>=0&&ku(e,e.prev,l)>=0:ku(e,l,e.prev)<0||ku(e,e.next,l)<0}function tJ(e,l){let n=e,t=!1;const c=(e.x+l.x)/2,y=(e.y+l.y)/2;do n.y>y!=n.next.y>y&&n.next.y!==n.y&&c<(n.next.x-n.x)*(y-n.y)/(n.next.y-n.y)+n.x&&(t=!t),n=n.next;while(n!==e);return t}function TY(e,l){const n=new u_(e.i,e.x,e.y),t=new u_(l.i,l.x,l.y),c=e.next,y=l.prev;return e.next=l,l.prev=e,n.next=c,c.prev=n,t.next=n,n.prev=t,y.next=t,t.prev=y,t}function rj(e,l,n,t){const c=new u_(e,l,n);return t?(c.next=t.next,c.prev=t,t.next.prev=c,t.next=c):(c.prev=c,c.next=c),c}function KH(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function u_(e,l,n){this.i=e,this.x=l,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function nJ(e,l,n,t){let c=0;for(let y=l,S=n-t;y<n;y+=t)c+=(e[S]-e[y])*(e[y+1]+e[S+1]),S=y;return c}class pY{static area(l){const n=l.length;let t=0;for(let c=n-1,y=0;y<n;c=y++)t+=l[c].x*l[y].y-l[y].x*l[c].y;return t*.5}static isClockWise(l){return pY.area(l)<0}static triangulateShape(l,n){const t=[],c=[],y=[];uj(l),aj(t,l);let S=l.length;n.forEach(uj);for(let G=0;G<n.length;G++)c.push(S),S+=n[G].length,aj(t,n[G]);const g=VZ.triangulate(t,c);for(let G=0;G<g.length;G+=3)y.push(g.slice(G,G+3));return y}}function uj(e){const l=e.length;l>2&&e[l-1].equals(e[0])&&e.pop()}function aj(e,l){for(let n=0;n<l.length;n++)e.push(l[n].x),e.push(l[n].y)}class RY extends q_{constructor(l=1,n=0){const t=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],c=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(t,c,l,n),this.type="OctahedronGeometry",this.parameters={radius:l,detail:n}}static fromJSON(l){return new RY(l.radius,l.detail)}}class mY extends tc{constructor(l=1,n=32,t=16,c=0,y=Math.PI*2,S=0,g=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:l,widthSegments:n,heightSegments:t,phiStart:c,phiLength:y,thetaStart:S,thetaLength:g},n=Math.max(3,Math.floor(n)),t=Math.max(2,Math.floor(t));const G=Math.min(S+g,Math.PI);let V=0;const Z=[],v=new nt,ee=new nt,te=[],he=[],Te=[],oe=[];for(let ie=0;ie<=t;ie++){const De=[],we=ie/t;let Ae=0;ie===0&&S===0?Ae=.5/n:ie===t&&G===Math.PI&&(Ae=-.5/n);for(let Ye=0;Ye<=n;Ye++){const Ve=Ye/n;v.x=-l*Math.cos(c+Ve*y)*Math.sin(S+we*g),v.y=l*Math.cos(S+we*g),v.z=l*Math.sin(c+Ve*y)*Math.sin(S+we*g),he.push(v.x,v.y,v.z),ee.copy(v).normalize(),Te.push(ee.x,ee.y,ee.z),oe.push(Ve+Ae,1-we),De.push(V++)}Z.push(De)}for(let ie=0;ie<t;ie++)for(let De=0;De<n;De++){const we=Z[ie][De+1],Ae=Z[ie][De],Ye=Z[ie+1][De],Ve=Z[ie+1][De+1];(ie!==0||S>0)&&te.push(we,Ae,Ve),(ie!==t-1||G<Math.PI)&&te.push(Ae,Ye,Ve)}this.setIndex(te),this.setAttribute("position",new Qu(he,3)),this.setAttribute("normal",new Qu(Te,3)),this.setAttribute("uv",new Qu(oe,2))}copy(l){return super.copy(l),this.parameters=Object.assign({},l.parameters),this}static fromJSON(l){return new mY(l.radius,l.widthSegments,l.heightSegments,l.phiStart,l.phiLength,l.thetaStart,l.thetaLength)}}class DY extends tc{constructor(l=1,n=.4,t=12,c=48,y=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:l,tube:n,radialSegments:t,tubularSegments:c,arc:y},t=Math.floor(t),c=Math.floor(c);const S=[],g=[],G=[],V=[],Z=new nt,v=new nt,ee=new nt;for(let te=0;te<=t;te++)for(let he=0;he<=c;he++){const Te=he/c*y,oe=te/t*Math.PI*2;v.x=(l+n*Math.cos(oe))*Math.cos(Te),v.y=(l+n*Math.cos(oe))*Math.sin(Te),v.z=n*Math.sin(oe),g.push(v.x,v.y,v.z),Z.x=l*Math.cos(Te),Z.y=l*Math.sin(Te),ee.subVectors(v,Z).normalize(),G.push(ee.x,ee.y,ee.z),V.push(he/c),V.push(te/t)}for(let te=1;te<=t;te++)for(let he=1;he<=c;he++){const Te=(c+1)*te+he-1,oe=(c+1)*(te-1)+he-1,ie=(c+1)*(te-1)+he,De=(c+1)*te+he;S.push(Te,oe,De),S.push(oe,ie,De)}this.setIndex(S),this.setAttribute("position",new Qu(g,3)),this.setAttribute("normal",new Qu(G,3)),this.setAttribute("uv",new Qu(V,2))}copy(l){return super.copy(l),this.parameters=Object.assign({},l.parameters),this}static fromJSON(l){return new DY(l.radius,l.tube,l.radialSegments,l.tubularSegments,l.arc)}}class yne extends tc{constructor(l=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:l},l!==null){const n=[],t=new Set,c=new nt,y=new nt;if(l.index!==null){const S=l.attributes.position,g=l.index;let G=l.groups;G.length===0&&(G=[{start:0,count:g.count,materialIndex:0}]);for(let V=0,Z=G.length;V<Z;++V){const v=G[V],ee=v.start,te=v.count;for(let he=ee,Te=ee+te;he<Te;he+=3)for(let oe=0;oe<3;oe++){const ie=g.getX(he+oe),De=g.getX(he+(oe+1)%3);c.fromBufferAttribute(S,ie),y.fromBufferAttribute(S,De),ij(c,y,t)===!0&&(n.push(c.x,c.y,c.z),n.push(y.x,y.y,y.z))}}}else{const S=l.attributes.position;for(let g=0,G=S.count/3;g<G;g++)for(let V=0;V<3;V++){const Z=3*g+V,v=3*g+(V+1)%3;c.fromBufferAttribute(S,Z),y.fromBufferAttribute(S,v),ij(c,y,t)===!0&&(n.push(c.x,c.y,c.z),n.push(y.x,y.y,y.z))}}this.setAttribute("position",new Qu(n,3))}}copy(l){return super.copy(l),this.parameters=Object.assign({},l.parameters),this}}function ij(e,l,n){const t=`${e.x},${e.y},${e.z}-${l.x},${l.y},${l.z}`,c=`${l.x},${l.y},${l.z}-${e.x},${e.y},${e.z}`;return n.has(t)===!0||n.has(c)===!0?!1:(n.add(t),n.add(c),!0)}class wne extends pO{constructor(l){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Dl(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dl(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=__,this.normalScale=new Nl(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(l)}copy(l){return super.copy(l),this.defines={STANDARD:""},this.color.copy(l.color),this.roughness=l.roughness,this.metalness=l.metalness,this.map=l.map,this.lightMap=l.lightMap,this.lightMapIntensity=l.lightMapIntensity,this.aoMap=l.aoMap,this.aoMapIntensity=l.aoMapIntensity,this.emissive.copy(l.emissive),this.emissiveMap=l.emissiveMap,this.emissiveIntensity=l.emissiveIntensity,this.bumpMap=l.bumpMap,this.bumpScale=l.bumpScale,this.normalMap=l.normalMap,this.normalMapType=l.normalMapType,this.normalScale.copy(l.normalScale),this.displacementMap=l.displacementMap,this.displacementScale=l.displacementScale,this.displacementBias=l.displacementBias,this.roughnessMap=l.roughnessMap,this.metalnessMap=l.metalnessMap,this.alphaMap=l.alphaMap,this.envMap=l.envMap,this.envMapIntensity=l.envMapIntensity,this.wireframe=l.wireframe,this.wireframeLinewidth=l.wireframeLinewidth,this.wireframeLinecap=l.wireframeLinecap,this.wireframeLinejoin=l.wireframeLinejoin,this.flatShading=l.flatShading,this.fog=l.fog,this}}class lJ extends pO{constructor(l){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Dl(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dl(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=__,this.normalScale=new Nl(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=F_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(l)}copy(l){return super.copy(l),this.color.copy(l.color),this.map=l.map,this.lightMap=l.lightMap,this.lightMapIntensity=l.lightMapIntensity,this.aoMap=l.aoMap,this.aoMapIntensity=l.aoMapIntensity,this.emissive.copy(l.emissive),this.emissiveMap=l.emissiveMap,this.emissiveIntensity=l.emissiveIntensity,this.bumpMap=l.bumpMap,this.bumpScale=l.bumpScale,this.normalMap=l.normalMap,this.normalMapType=l.normalMapType,this.normalScale.copy(l.normalScale),this.displacementMap=l.displacementMap,this.displacementScale=l.displacementScale,this.displacementBias=l.displacementBias,this.specularMap=l.specularMap,this.alphaMap=l.alphaMap,this.envMap=l.envMap,this.combine=l.combine,this.reflectivity=l.reflectivity,this.refractionRatio=l.refractionRatio,this.wireframe=l.wireframe,this.wireframeLinewidth=l.wireframeLinewidth,this.wireframeLinecap=l.wireframeLinecap,this.wireframeLinejoin=l.wireframeLinejoin,this.flatShading=l.flatShading,this.fog=l.fog,this}}class NY extends Jf{constructor(l,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Dl(l),this.intensity=n}dispose(){}copy(l,n){return super.copy(l,n),this.color.copy(l.color),this.intensity=l.intensity,this}toJSON(l){const n=super.toJSON(l);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const BG=new Sl,oj=new nt,cj=new nt;class sJ{constructor(l){this.camera=l,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nl(512,512),this.map=null,this.mapPass=null,this.matrix=new Sl,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Y_,this._frameExtents=new Nl(1,1),this._viewportCount=1,this._viewports=[new Fc(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(l){const n=this.camera,t=this.matrix;oj.setFromMatrixPosition(l.matrixWorld),n.position.copy(oj),cj.setFromMatrixPosition(l.target.matrixWorld),n.lookAt(cj),n.updateMatrixWorld(),BG.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(BG),t.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),t.multiply(BG)}getViewport(l){return this._viewports[l]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(l){return this.camera=l.camera.clone(),this.bias=l.bias,this.radius=l.radius,this.mapSize.copy(l.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const l={};return this.bias!==0&&(l.bias=this.bias),this.normalBias!==0&&(l.normalBias=this.normalBias),this.radius!==1&&(l.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(l.mapSize=this.mapSize.toArray()),l.camera=this.camera.toJSON(!1).object,delete l.camera.matrix,l}}class rJ extends sJ{constructor(){super(new uY(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ene extends NY{constructor(l,n){super(l,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jf.DEFAULT_UP),this.updateMatrix(),this.target=new Jf,this.shadow=new rJ}dispose(){this.shadow.dispose()}copy(l){return super.copy(l),this.target=l.target.clone(),this.shadow=l.shadow.clone(),this}}class Tne extends NY{constructor(l,n){super(l,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class pne extends tc{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(l){return super.copy(l),this.instanceCount=l.instanceCount,this}toJSON(){const l=super.toJSON();return l.instanceCount=this.instanceCount,l.isInstancedBufferGeometry=!0,l}}class Rne{constructor(l=!0){this.autoStart=l,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=hj(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let l=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=hj();l=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=l}return l}}function hj(){return(typeof performance>"u"?Date:performance).now()}class mne extends HZ{constructor(l,n,t=1){super(l,n),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=t}copy(l){return super.copy(l),this.meshPerAttribute=l.meshPerAttribute,this}clone(l){const n=super.clone(l);return n.meshPerAttribute=this.meshPerAttribute,n}toJSON(l){const n=super.toJSON(l);return n.isInstancedInterleavedBuffer=!0,n.meshPerAttribute=this.meshPerAttribute,n}}class Dne{constructor(l,n,t=0,c=1/0){this.ray=new uF(l,n),this.near=t,this.far=c,this.camera=null,this.layers=new j_,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(l,n){this.ray.set(l,n)}setFromCamera(l,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(l.x,l.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(l.x,l.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(l,n=!0,t=[]){return a_(l,this,t,n),t.sort(fj),t}intersectObjects(l,n=!0,t=[]){for(let c=0,y=l.length;c<y;c++)a_(l[c],this,t,n);return t.sort(fj),t}}function fj(e,l){return e.distance-l.distance}function a_(e,l,n,t){if(e.layers.test(l.layers)&&e.raycast(l,n),t===!0){const c=e.children;for(let y=0,S=c.length;y<S;y++)a_(c[y],l,n,!0)}}class Nne{constructor(l=1,n=0,t=0){return this.radius=l,this.phi=n,this.theta=t,this}set(l,n,t){return this.radius=l,this.phi=n,this.theta=t,this}copy(l){return this.radius=l.radius,this.phi=l.phi,this.theta=l.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(l){return this.setFromCartesianCoords(l.x,l.y,l.z)}setFromCartesianCoords(l,n,t){return this.radius=Math.sqrt(l*l+n*n+t*t),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(l,t),this.phi=Math.acos(Kf(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ij=new nt,vB=new nt;class F7{constructor(l=new nt,n=new nt){this.start=l,this.end=n}set(l,n){return this.start.copy(l),this.end.copy(n),this}copy(l){return this.start.copy(l.start),this.end.copy(l.end),this}getCenter(l){return l.addVectors(this.start,this.end).multiplyScalar(.5)}delta(l){return l.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(l,n){return this.delta(n).multiplyScalar(l).add(this.start)}closestPointToPointParameter(l,n){Ij.subVectors(l,this.start),vB.subVectors(this.end,this.start);const t=vB.dot(vB);let y=vB.dot(Ij)/t;return n&&(y=Kf(y,0,1)),y}closestPointToPoint(l,n,t){const c=this.closestPointToPointParameter(l,n);return this.delta(t).multiplyScalar(c).add(this.start)}applyMatrix4(l){return this.start.applyMatrix4(l),this.end.applyMatrix4(l),this}equals(l){return l.start.equals(this.start)&&l.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:U_}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=U_);var uJ=Object.getOwnPropertyNames,AY=(e,l)=>function(){return l||(0,e[uJ(e)[0]])((l={exports:{}}).exports,l),l.exports},aJ=AY({"dist/web-ifc-mt.js"(e,l){var n=(()=>{var t=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0;return function(c={}){function y(){return It.buffer!=Ut.buffer&&yn(),Ut}function S(){return It.buffer!=Ut.buffer&&yn(),Lt}function g(){return It.buffer!=Ut.buffer&&yn(),Bt}function G(){return It.buffer!=Ut.buffer&&yn(),Xt}function V(){return It.buffer!=Ut.buffer&&yn(),mn}function Z(){return It.buffer!=Ut.buffer&&yn(),An}function v(){return It.buffer!=Ut.buffer&&yn(),Un}function ee(){return It.buffer!=Ut.buffer&&yn(),Fn}var te=c,he,Te;te.ready=new Promise((b,Y)=>{he=b,Te=Y});var oe=Object.assign({},te),ie="./this.program",De=(b,Y)=>{throw Y},we=typeof window=="object",Ae=typeof importScripts=="function",Ye=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string",Ve=te.ENVIRONMENT_IS_PTHREAD||!1,_e="";function Xe(b){return te.locateFile?te.locateFile(b,_e):_e+b}var ge,Le,ve;(we||Ae)&&(Ae?_e=self.location.href:typeof document<"u"&&document.currentScript&&(_e=document.currentScript.src),t&&(_e=t),_e.indexOf("blob:")!==0?_e=_e.substr(0,_e.replace(/[?#].*/,"").lastIndexOf("/")+1):_e="",ge=b=>{var Y=new XMLHttpRequest;return Y.open("GET",b,!1),Y.send(null),Y.responseText},Ae&&(ve=b=>{var Y=new XMLHttpRequest;return Y.open("GET",b,!1),Y.responseType="arraybuffer",Y.send(null),new Uint8Array(Y.response)}),Le=(b,Y,se)=>{var fe=new XMLHttpRequest;fe.open("GET",b,!0),fe.responseType="arraybuffer",fe.onload=()=>{if(fe.status==200||fe.status==0&&fe.response){Y(fe.response);return}se()},fe.onerror=se,fe.send(null)});var st=te.print||console.log.bind(console),ft=te.printErr||console.error.bind(console);Object.assign(te,oe),oe=null,te.arguments&&te.arguments,te.thisProgram&&(ie=te.thisProgram),te.quit&&(De=te.quit);var et;te.wasmBinary&&(et=te.wasmBinary);var at=te.noExitRuntime||!0;typeof WebAssembly!="object"&&Hn("no native wasm support detected");var It,St,bt,Ct=!1,Ft;function Ht(b,Y){b||Hn(Y)}var Ut,Lt,Bt,Xt,mn,An,Un,Fn;function yn(){var b=It.buffer;te.HEAP8=Ut=new Int8Array(b),te.HEAP16=Bt=new Int16Array(b),te.HEAP32=mn=new Int32Array(b),te.HEAPU8=Lt=new Uint8Array(b),te.HEAPU16=Xt=new Uint16Array(b),te.HEAPU32=An=new Uint32Array(b),te.HEAPF32=Un=new Float32Array(b),te.HEAPF64=Fn=new Float64Array(b)}var vn=te.INITIAL_MEMORY||16777216;if(Ht(vn>=5242880,"INITIAL_MEMORY should be larger than STACK_SIZE, was "+vn+"! (STACK_SIZE=5242880)"),Ve)It=te.wasmMemory;else if(te.wasmMemory)It=te.wasmMemory;else if(It=new WebAssembly.Memory({initial:vn/65536,maximum:65536,shared:!0}),!(It.buffer instanceof SharedArrayBuffer))throw ft("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),Ye&&ft("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and/or recent version)"),Error("bad memory");yn(),vn=It.buffer.byteLength;var Tt,Jl=[],Mn=[],_n=[],wn=0;function Hl(){return at||wn>0}function sl(){if(te.preRun)for(typeof te.preRun=="function"&&(te.preRun=[te.preRun]);te.preRun.length;)Dt(te.preRun.shift());Jn(Jl)}function je(){Ve||(!te.noFSInit&&!Ie.init.initialized&&Ie.init(),Ie.ignorePermissions=!1,Jn(Mn))}function We(){if(!Ve){if(te.postRun)for(typeof te.postRun=="function"&&(te.postRun=[te.postRun]);te.postRun.length;)zt(te.postRun.shift());Jn(_n)}}function Dt(b){Jl.unshift(b)}function qt(b){Mn.unshift(b)}function zt(b){_n.unshift(b)}var Wt=0,Sn=null;function on(b){return b}function In(b){Wt++,te.monitorRunDependencies&&te.monitorRunDependencies(Wt)}function bn(b){if(Wt--,te.monitorRunDependencies&&te.monitorRunDependencies(Wt),Wt==0&&Sn){var Y=Sn;Sn=null,Y()}}function Hn(b){te.onAbort&&te.onAbort(b),b="Aborted("+b+")",ft(b),Ct=!0,Ft=1,b+=". Build with -sASSERTIONS for more info.";var Y=new WebAssembly.RuntimeError(b);throw Te(Y),Y}var Gt="data:application/octet-stream;base64,";function pl(b){return b.startsWith(Gt)}var $n;$n="web-ifc-mt.wasm",pl($n)||($n=Xe($n));function Vn(b){if(b==$n&&et)return new Uint8Array(et);if(ve)return ve(b);throw"both async and sync fetching of the wasm failed"}function gn(b){return!et&&(we||Ae)&&typeof fetch=="function"?fetch(b,{credentials:"same-origin"}).then(Y=>{if(!Y.ok)throw"failed to load wasm binary file at '"+b+"'";return Y.arrayBuffer()}).catch(()=>Vn(b)):Promise.resolve().then(()=>Vn(b))}function Tn(b,Y,se){return gn(b).then(fe=>WebAssembly.instantiate(fe,Y)).then(fe=>fe).then(se,fe=>{ft("failed to asynchronously prepare wasm: "+fe),Hn(fe)})}function Zn(b,Y,se,fe){return!b&&typeof WebAssembly.instantiateStreaming=="function"&&!pl(Y)&&typeof fetch=="function"?fetch(Y,{credentials:"same-origin"}).then(Pe=>{var ze=WebAssembly.instantiateStreaming(Pe,se);return ze.then(fe,function(Ke){return ft("wasm streaming compile failed: "+Ke),ft("falling back to ArrayBuffer instantiation"),Tn(Y,se,fe)})}):Tn(Y,se,fe)}function gl(){var b={a:L0};function Y(fe,Pe){var ze=fe.exports;return ze=U2(ze),St=ze,rl(St.ma),Tt=St.ka,qt(St.ia),bt=Pe,bn(),ze}In();function se(fe){Y(fe.instance,fe.module)}if(te.instantiateWasm)try{return te.instantiateWasm(b,Y)}catch(fe){ft("Module.instantiateWasm callback failed with error: "+fe),Te(fe)}return Zn(et,$n,b,se).catch(Te),{}}var hn,En;function Jt(b){this.name="ExitStatus",this.message=`Program terminated with exit(${b})`,this.status=b}var ut=function(b){b.terminate(),b.onmessage=Y=>{}};function Kt(b){var Y=$t.pthreads[b];delete $t.pthreads[b],ut(Y),O0(b),$t.runningWorkers.splice($t.runningWorkers.indexOf(Y),1),Y.pthread_ptr=0}function tn(b){var Y=$t.pthreads[b];Y.postMessage({cmd:"cancel"})}function nn(b){var Y=$t.pthreads[b];Ht(Y),$t.returnWorkerToPool(Y)}function Bn(b){var Y=$t.getNewWorker();if(!Y)return 6;$t.runningWorkers.push(Y),$t.pthreads[b.pthread_ptr]=Y,Y.pthread_ptr=b.pthread_ptr;var se={cmd:"run",start_routine:b.startRoutine,arg:b.arg,pthread_ptr:b.pthread_ptr};return Y.postMessage(se,b.transferList),0}var pn={isAbs:b=>b.charAt(0)==="/",splitPath:b=>{var Y=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return Y.exec(b).slice(1)},normalizeArray:(b,Y)=>{for(var se=0,fe=b.length-1;fe>=0;fe--){var Pe=b[fe];Pe==="."?b.splice(fe,1):Pe===".."?(b.splice(fe,1),se++):se&&(b.splice(fe,1),se--)}if(Y)for(;se;se--)b.unshift("..");return b},normalize:b=>{var Y=pn.isAbs(b),se=b.substr(-1)==="/";return b=pn.normalizeArray(b.split("/").filter(fe=>!!fe),!Y).join("/"),!b&&!Y&&(b="."),b&&se&&(b+="/"),(Y?"/":"")+b},dirname:b=>{var Y=pn.splitPath(b),se=Y[0],fe=Y[1];return!se&&!fe?".":(fe&&(fe=fe.substr(0,fe.length-1)),se+fe)},basename:b=>{if(b==="/")return"/";b=pn.normalize(b),b=b.replace(/\/$/,"");var Y=b.lastIndexOf("/");return Y===-1?b:b.substr(Y+1)},join:function(){var b=Array.prototype.slice.call(arguments);return pn.normalize(b.join("/"))},join2:(b,Y)=>pn.normalize(b+"/"+Y)},kl=()=>{if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function")return b=>(b.set(crypto.getRandomValues(new Uint8Array(b.byteLength))),b);Hn("initRandomDevice")},Cs=b=>(Cs=kl())(b),rs={resolve:function(){for(var b="",Y=!1,se=arguments.length-1;se>=-1&&!Y;se--){var fe=se>=0?arguments[se]:Ie.cwd();if(typeof fe!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!fe)return"";b=fe+"/"+b,Y=pn.isAbs(fe)}return b=pn.normalizeArray(b.split("/").filter(Pe=>!!Pe),!Y).join("/"),(Y?"/":"")+b||"."},relative:(b,Y)=>{b=rs.resolve(b).substr(1),Y=rs.resolve(Y).substr(1);function se(mt){for(var Yt=0;Yt<mt.length&&mt[Yt]==="";Yt++);for(var cn=mt.length-1;cn>=0&&mt[cn]==="";cn--);return Yt>cn?[]:mt.slice(Yt,cn-Yt+1)}for(var fe=se(b.split("/")),Pe=se(Y.split("/")),ze=Math.min(fe.length,Pe.length),Ke=ze,$e=0;$e<ze;$e++)if(fe[$e]!==Pe[$e]){Ke=$e;break}for(var it=[],$e=Ke;$e<fe.length;$e++)it.push("..");return it=it.concat(Pe.slice(Ke)),it.join("/")}},Pl=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,ws=(b,Y,se)=>{Y>>>=0;for(var fe=Y+se,Pe=Y;b[Pe]&&!(Pe>=fe);)++Pe;if(Pe-Y>16&&b.buffer&&Pl)return Pl.decode(b.buffer instanceof SharedArrayBuffer?b.slice(Y,Pe):b.subarray(Y,Pe));for(var ze="";Y<Pe;){var Ke=b[Y++];if(!(Ke&128)){ze+=String.fromCharCode(Ke);continue}var $e=b[Y++]&63;if((Ke&224)==192){ze+=String.fromCharCode((Ke&31)<<6|$e);continue}var it=b[Y++]&63;if((Ke&240)==224?Ke=(Ke&15)<<12|$e<<6|it:Ke=(Ke&7)<<18|$e<<12|it<<6|b[Y++]&63,Ke<65536)ze+=String.fromCharCode(Ke);else{var mt=Ke-65536;ze+=String.fromCharCode(55296|mt>>10,56320|mt&1023)}}return ze},Au=[],Id=b=>{for(var Y=0,se=0;se<b.length;++se){var fe=b.charCodeAt(se);fe<=127?Y++:fe<=2047?Y+=2:fe>=55296&&fe<=57343?(Y+=4,++se):Y+=3}return Y},A3=(b,Y,se,fe)=>{if(se>>>=0,!(fe>0))return 0;for(var Pe=se,ze=se+fe-1,Ke=0;Ke<b.length;++Ke){var $e=b.charCodeAt(Ke);if($e>=55296&&$e<=57343){var it=b.charCodeAt(++Ke);$e=65536+(($e&1023)<<10)|it&1023}if($e<=127){if(se>=ze)break;Y[se++>>>0]=$e}else if($e<=2047){if(se+1>=ze)break;Y[se++>>>0]=192|$e>>6,Y[se++>>>0]=128|$e&63}else if($e<=65535){if(se+2>=ze)break;Y[se++>>>0]=224|$e>>12,Y[se++>>>0]=128|$e>>6&63,Y[se++>>>0]=128|$e&63}else{if(se+3>=ze)break;Y[se++>>>0]=240|$e>>18,Y[se++>>>0]=128|$e>>12&63,Y[se++>>>0]=128|$e>>6&63,Y[se++>>>0]=128|$e&63}}return Y[se>>>0]=0,se-Pe};function rc(b,Y,se){var fe=Id(b)+1,Pe=new Array(fe),ze=A3(b,Pe,0,Pe.length);return Y&&(Pe.length=ze),Pe}var N0=()=>{if(!Au.length){var b=null;if(typeof window<"u"&&typeof window.prompt=="function"?(b=window.prompt("Input: "),b!==null&&(b+=`
`)):typeof readline=="function"&&(b=readline(),b!==null&&(b+=`
`)),!b)return null;Au=rc(b,!0)}return Au.shift()},ui={ttys:[],init:function(){},shutdown:function(){},register:function(b,Y){ui.ttys[b]={input:[],output:[],ops:Y},Ie.registerDevice(b,ui.stream_ops)},stream_ops:{open:function(b){var Y=ui.ttys[b.node.rdev];if(!Y)throw new Ie.ErrnoError(43);b.tty=Y,b.seekable=!1},close:function(b){b.tty.ops.fsync(b.tty)},fsync:function(b){b.tty.ops.fsync(b.tty)},read:function(b,Y,se,fe,Pe){if(!b.tty||!b.tty.ops.get_char)throw new Ie.ErrnoError(60);for(var ze=0,Ke=0;Ke<fe;Ke++){var $e;try{$e=b.tty.ops.get_char(b.tty)}catch{throw new Ie.ErrnoError(29)}if($e===void 0&&ze===0)throw new Ie.ErrnoError(6);if($e==null)break;ze++,Y[se+Ke]=$e}return ze&&(b.node.timestamp=Date.now()),ze},write:function(b,Y,se,fe,Pe){if(!b.tty||!b.tty.ops.put_char)throw new Ie.ErrnoError(60);try{for(var ze=0;ze<fe;ze++)b.tty.ops.put_char(b.tty,Y[se+ze])}catch{throw new Ie.ErrnoError(29)}return fe&&(b.node.timestamp=Date.now()),ze}},default_tty_ops:{get_char:function(b){return N0()},put_char:function(b,Y){Y===null||Y===10?(st(ws(b.output,0)),b.output=[]):Y!=0&&b.output.push(Y)},fsync:function(b){b.output&&b.output.length>0&&(st(ws(b.output,0)),b.output=[])},ioctl_tcgets:function(b){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets:function(b,Y,se){return 0},ioctl_tiocgwinsz:function(b){return[24,80]}},default_tty1_ops:{put_char:function(b,Y){Y===null||Y===10?(ft(ws(b.output,0)),b.output=[]):Y!=0&&b.output.push(Y)},fsync:function(b){b.output&&b.output.length>0&&(ft(ws(b.output,0)),b.output=[])}}},A0=b=>{Hn()},Wn={ops_table:null,mount(b){return Wn.createNode(null,"/",16895,0)},createNode(b,Y,se,fe){if(Ie.isBlkdev(se)||Ie.isFIFO(se))throw new Ie.ErrnoError(63);Wn.ops_table||(Wn.ops_table={dir:{node:{getattr:Wn.node_ops.getattr,setattr:Wn.node_ops.setattr,lookup:Wn.node_ops.lookup,mknod:Wn.node_ops.mknod,rename:Wn.node_ops.rename,unlink:Wn.node_ops.unlink,rmdir:Wn.node_ops.rmdir,readdir:Wn.node_ops.readdir,symlink:Wn.node_ops.symlink},stream:{llseek:Wn.stream_ops.llseek}},file:{node:{getattr:Wn.node_ops.getattr,setattr:Wn.node_ops.setattr},stream:{llseek:Wn.stream_ops.llseek,read:Wn.stream_ops.read,write:Wn.stream_ops.write,allocate:Wn.stream_ops.allocate,mmap:Wn.stream_ops.mmap,msync:Wn.stream_ops.msync}},link:{node:{getattr:Wn.node_ops.getattr,setattr:Wn.node_ops.setattr,readlink:Wn.node_ops.readlink},stream:{}},chrdev:{node:{getattr:Wn.node_ops.getattr,setattr:Wn.node_ops.setattr},stream:Ie.chrdev_stream_ops}});var Pe=Ie.createNode(b,Y,se,fe);return Ie.isDir(Pe.mode)?(Pe.node_ops=Wn.ops_table.dir.node,Pe.stream_ops=Wn.ops_table.dir.stream,Pe.contents={}):Ie.isFile(Pe.mode)?(Pe.node_ops=Wn.ops_table.file.node,Pe.stream_ops=Wn.ops_table.file.stream,Pe.usedBytes=0,Pe.contents=null):Ie.isLink(Pe.mode)?(Pe.node_ops=Wn.ops_table.link.node,Pe.stream_ops=Wn.ops_table.link.stream):Ie.isChrdev(Pe.mode)&&(Pe.node_ops=Wn.ops_table.chrdev.node,Pe.stream_ops=Wn.ops_table.chrdev.stream),Pe.timestamp=Date.now(),b&&(b.contents[Y]=Pe,b.timestamp=Pe.timestamp),Pe},getFileDataAsTypedArray(b){return b.contents?b.contents.subarray?b.contents.subarray(0,b.usedBytes):new Uint8Array(b.contents):new Uint8Array(0)},expandFileStorage(b,Y){var se=b.contents?b.contents.length:0;if(!(se>=Y)){var fe=1024*1024;Y=Math.max(Y,se*(se<fe?2:1.125)>>>0),se!=0&&(Y=Math.max(Y,256));var Pe=b.contents;b.contents=new Uint8Array(Y),b.usedBytes>0&&b.contents.set(Pe.subarray(0,b.usedBytes),0)}},resizeFileStorage(b,Y){if(b.usedBytes!=Y)if(Y==0)b.contents=null,b.usedBytes=0;else{var se=b.contents;b.contents=new Uint8Array(Y),se&&b.contents.set(se.subarray(0,Math.min(Y,b.usedBytes))),b.usedBytes=Y}},node_ops:{getattr(b){var Y={};return Y.dev=Ie.isChrdev(b.mode)?b.id:1,Y.ino=b.id,Y.mode=b.mode,Y.nlink=1,Y.uid=0,Y.gid=0,Y.rdev=b.rdev,Ie.isDir(b.mode)?Y.size=4096:Ie.isFile(b.mode)?Y.size=b.usedBytes:Ie.isLink(b.mode)?Y.size=b.link.length:Y.size=0,Y.atime=new Date(b.timestamp),Y.mtime=new Date(b.timestamp),Y.ctime=new Date(b.timestamp),Y.blksize=4096,Y.blocks=Math.ceil(Y.size/Y.blksize),Y},setattr(b,Y){Y.mode!==void 0&&(b.mode=Y.mode),Y.timestamp!==void 0&&(b.timestamp=Y.timestamp),Y.size!==void 0&&Wn.resizeFileStorage(b,Y.size)},lookup(b,Y){throw Ie.genericErrors[44]},mknod(b,Y,se,fe){return Wn.createNode(b,Y,se,fe)},rename(b,Y,se){if(Ie.isDir(b.mode)){var fe;try{fe=Ie.lookupNode(Y,se)}catch{}if(fe)for(var Pe in fe.contents)throw new Ie.ErrnoError(55)}delete b.parent.contents[b.name],b.parent.timestamp=Date.now(),b.name=se,Y.contents[se]=b,Y.timestamp=b.parent.timestamp,b.parent=Y},unlink(b,Y){delete b.contents[Y],b.timestamp=Date.now()},rmdir(b,Y){var se=Ie.lookupNode(b,Y);for(var fe in se.contents)throw new Ie.ErrnoError(55);delete b.contents[Y],b.timestamp=Date.now()},readdir(b){var Y=[".",".."];for(var se in b.contents)b.contents.hasOwnProperty(se)&&Y.push(se);return Y},symlink(b,Y,se){var fe=Wn.createNode(b,Y,41471,0);return fe.link=se,fe},readlink(b){if(!Ie.isLink(b.mode))throw new Ie.ErrnoError(28);return b.link}},stream_ops:{read(b,Y,se,fe,Pe){var ze=b.node.contents;if(Pe>=b.node.usedBytes)return 0;var Ke=Math.min(b.node.usedBytes-Pe,fe);if(Ke>8&&ze.subarray)Y.set(ze.subarray(Pe,Pe+Ke),se);else for(var $e=0;$e<Ke;$e++)Y[se+$e]=ze[Pe+$e];return Ke},write(b,Y,se,fe,Pe,ze){if(Y.buffer===y().buffer&&(ze=!1),!fe)return 0;var Ke=b.node;if(Ke.timestamp=Date.now(),Y.subarray&&(!Ke.contents||Ke.contents.subarray)){if(ze)return Ke.contents=Y.subarray(se,se+fe),Ke.usedBytes=fe,fe;if(Ke.usedBytes===0&&Pe===0)return Ke.contents=Y.slice(se,se+fe),Ke.usedBytes=fe,fe;if(Pe+fe<=Ke.usedBytes)return Ke.contents.set(Y.subarray(se,se+fe),Pe),fe}if(Wn.expandFileStorage(Ke,Pe+fe),Ke.contents.subarray&&Y.subarray)Ke.contents.set(Y.subarray(se,se+fe),Pe);else for(var $e=0;$e<fe;$e++)Ke.contents[Pe+$e]=Y[se+$e];return Ke.usedBytes=Math.max(Ke.usedBytes,Pe+fe),fe},llseek(b,Y,se){var fe=Y;if(se===1?fe+=b.position:se===2&&Ie.isFile(b.node.mode)&&(fe+=b.node.usedBytes),fe<0)throw new Ie.ErrnoError(28);return fe},allocate(b,Y,se){Wn.expandFileStorage(b.node,Y+se),b.node.usedBytes=Math.max(b.node.usedBytes,Y+se)},mmap(b,Y,se,fe,Pe){if(!Ie.isFile(b.node.mode))throw new Ie.ErrnoError(43);var ze,Ke,$e=b.node.contents;if(!(Pe&2)&&$e.buffer===y().buffer)Ke=!1,ze=$e.byteOffset;else{if((se>0||se+Y<$e.length)&&($e.subarray?$e=$e.subarray(se,se+Y):$e=Array.prototype.slice.call($e,se,se+Y)),Ke=!0,ze=A0(),!ze)throw new Ie.ErrnoError(48);y().set($e,ze>>>0)}return{ptr:ze,allocated:Ke}},msync(b,Y,se,fe,Pe){return Wn.stream_ops.write(b,Y,0,fe,se,!1),0}}},S0=(b,Y,se,fe)=>{var Pe=`al ${b}`;Le(b,ze=>{Ht(ze,`Loading data file "${b}" failed (no arrayBuffer).`),Y(new Uint8Array(ze)),Pe&&bn()},ze=>{if(se)se();else throw`Loading data file "${b}" failed.`}),Pe&&In()},dd=te.preloadPlugins||[];function b2(b,Y,se,fe){typeof Browser<"u"&&Browser.init();var Pe=!1;return dd.forEach(function(ze){Pe||ze.canHandle(Y)&&(ze.handle(b,Y,se,fe),Pe=!0)}),Pe}function ke(b,Y,se,fe,Pe,ze,Ke,$e,it,mt){var Yt=Y?rs.resolve(pn.join2(b,Y)):b;function cn(Zt){function sn(Cn){mt&&mt(),$e||Ie.createDataFile(b,Y,Cn,fe,Pe,it),ze&&ze(),bn()}b2(Zt,Yt,sn,()=>{Ke&&Ke(),bn()})||sn(Zt)}In(),typeof se=="string"?S0(se,Zt=>cn(Zt),Ke):cn(se)}function ht(b){var Y={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},se=Y[b];if(typeof se>"u")throw new Error(`Unknown file open mode: ${b}`);return se}function Nt(b,Y){var se=0;return b&&(se|=365),Y&&(se|=146),se}var Ie={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,lookupPath:(b,Y={})=>{if(b=rs.resolve(b),!b)return{path:"",node:null};var se={follow_mount:!0,recurse_count:0};if(Y=Object.assign(se,Y),Y.recurse_count>8)throw new Ie.ErrnoError(32);for(var fe=b.split("/").filter(cn=>!!cn),Pe=Ie.root,ze="/",Ke=0;Ke<fe.length;Ke++){var $e=Ke===fe.length-1;if($e&&Y.parent)break;if(Pe=Ie.lookupNode(Pe,fe[Ke]),ze=pn.join2(ze,fe[Ke]),Ie.isMountpoint(Pe)&&(!$e||$e&&Y.follow_mount)&&(Pe=Pe.mounted.root),!$e||Y.follow)for(var it=0;Ie.isLink(Pe.mode);){var mt=Ie.readlink(ze);ze=rs.resolve(pn.dirname(ze),mt);var Yt=Ie.lookupPath(ze,{recurse_count:Y.recurse_count+1});if(Pe=Yt.node,it++>40)throw new Ie.ErrnoError(32)}}return{path:ze,node:Pe}},getPath:b=>{for(var Y;;){if(Ie.isRoot(b)){var se=b.mount.mountpoint;return Y?se[se.length-1]!=="/"?`${se}/${Y}`:se+Y:se}Y=Y?`${b.name}/${Y}`:b.name,b=b.parent}},hashName:(b,Y)=>{for(var se=0,fe=0;fe<Y.length;fe++)se=(se<<5)-se+Y.charCodeAt(fe)|0;return(b+se>>>0)%Ie.nameTable.length},hashAddNode:b=>{var Y=Ie.hashName(b.parent.id,b.name);b.name_next=Ie.nameTable[Y],Ie.nameTable[Y]=b},hashRemoveNode:b=>{var Y=Ie.hashName(b.parent.id,b.name);if(Ie.nameTable[Y]===b)Ie.nameTable[Y]=b.name_next;else for(var se=Ie.nameTable[Y];se;){if(se.name_next===b){se.name_next=b.name_next;break}se=se.name_next}},lookupNode:(b,Y)=>{var se=Ie.mayLookup(b);if(se)throw new Ie.ErrnoError(se,b);for(var fe=Ie.hashName(b.id,Y),Pe=Ie.nameTable[fe];Pe;Pe=Pe.name_next){var ze=Pe.name;if(Pe.parent.id===b.id&&ze===Y)return Pe}return Ie.lookup(b,Y)},createNode:(b,Y,se,fe)=>{var Pe=new Ie.FSNode(b,Y,se,fe);return Ie.hashAddNode(Pe),Pe},destroyNode:b=>{Ie.hashRemoveNode(b)},isRoot:b=>b===b.parent,isMountpoint:b=>!!b.mounted,isFile:b=>(b&61440)===32768,isDir:b=>(b&61440)===16384,isLink:b=>(b&61440)===40960,isChrdev:b=>(b&61440)===8192,isBlkdev:b=>(b&61440)===24576,isFIFO:b=>(b&61440)===4096,isSocket:b=>(b&49152)===49152,flagsToPermissionString:b=>{var Y=["r","w","rw"][b&3];return b&512&&(Y+="w"),Y},nodePermissions:(b,Y)=>Ie.ignorePermissions?0:Y.includes("r")&&!(b.mode&292)||Y.includes("w")&&!(b.mode&146)||Y.includes("x")&&!(b.mode&73)?2:0,mayLookup:b=>{var Y=Ie.nodePermissions(b,"x");return Y||(b.node_ops.lookup?0:2)},mayCreate:(b,Y)=>{try{var se=Ie.lookupNode(b,Y);return 20}catch{}return Ie.nodePermissions(b,"wx")},mayDelete:(b,Y,se)=>{var fe;try{fe=Ie.lookupNode(b,Y)}catch(ze){return ze.errno}var Pe=Ie.nodePermissions(b,"wx");if(Pe)return Pe;if(se){if(!Ie.isDir(fe.mode))return 54;if(Ie.isRoot(fe)||Ie.getPath(fe)===Ie.cwd())return 10}else if(Ie.isDir(fe.mode))return 31;return 0},mayOpen:(b,Y)=>b?Ie.isLink(b.mode)?32:Ie.isDir(b.mode)&&(Ie.flagsToPermissionString(Y)!=="r"||Y&512)?31:Ie.nodePermissions(b,Ie.flagsToPermissionString(Y)):44,MAX_OPEN_FDS:4096,nextfd:()=>{for(var b=0;b<=Ie.MAX_OPEN_FDS;b++)if(!Ie.streams[b])return b;throw new Ie.ErrnoError(33)},getStreamChecked:b=>{var Y=Ie.getStream(b);if(!Y)throw new Ie.ErrnoError(8);return Y},getStream:b=>Ie.streams[b],createStream:(b,Y=-1)=>(Ie.FSStream||(Ie.FSStream=function(){this.shared={}},Ie.FSStream.prototype={},Object.defineProperties(Ie.FSStream.prototype,{object:{get(){return this.node},set(se){this.node=se}},isRead:{get(){return(this.flags&2097155)!==1}},isWrite:{get(){return(this.flags&2097155)!==0}},isAppend:{get(){return this.flags&1024}},flags:{get(){return this.shared.flags},set(se){this.shared.flags=se}},position:{get(){return this.shared.position},set(se){this.shared.position=se}}})),b=Object.assign(new Ie.FSStream,b),Y==-1&&(Y=Ie.nextfd()),b.fd=Y,Ie.streams[Y]=b,b),closeStream:b=>{Ie.streams[b]=null},chrdev_stream_ops:{open:b=>{var Y=Ie.getDevice(b.node.rdev);b.stream_ops=Y.stream_ops,b.stream_ops.open&&b.stream_ops.open(b)},llseek:()=>{throw new Ie.ErrnoError(70)}},major:b=>b>>8,minor:b=>b&255,makedev:(b,Y)=>b<<8|Y,registerDevice:(b,Y)=>{Ie.devices[b]={stream_ops:Y}},getDevice:b=>Ie.devices[b],getMounts:b=>{for(var Y=[],se=[b];se.length;){var fe=se.pop();Y.push(fe),se.push.apply(se,fe.mounts)}return Y},syncfs:(b,Y)=>{typeof b=="function"&&(Y=b,b=!1),Ie.syncFSRequests++,Ie.syncFSRequests>1&&ft(`warning: ${Ie.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var se=Ie.getMounts(Ie.root.mount),fe=0;function Pe(Ke){return Ie.syncFSRequests--,Y(Ke)}function ze(Ke){if(Ke)return ze.errored?void 0:(ze.errored=!0,Pe(Ke));++fe>=se.length&&Pe(null)}se.forEach(Ke=>{if(!Ke.type.syncfs)return ze(null);Ke.type.syncfs(Ke,b,ze)})},mount:(b,Y,se)=>{var fe=se==="/",Pe=!se,ze;if(fe&&Ie.root)throw new Ie.ErrnoError(10);if(!fe&&!Pe){var Ke=Ie.lookupPath(se,{follow_mount:!1});if(se=Ke.path,ze=Ke.node,Ie.isMountpoint(ze))throw new Ie.ErrnoError(10);if(!Ie.isDir(ze.mode))throw new Ie.ErrnoError(54)}var $e={type:b,opts:Y,mountpoint:se,mounts:[]},it=b.mount($e);return it.mount=$e,$e.root=it,fe?Ie.root=it:ze&&(ze.mounted=$e,ze.mount&&ze.mount.mounts.push($e)),it},unmount:b=>{var Y=Ie.lookupPath(b,{follow_mount:!1});if(!Ie.isMountpoint(Y.node))throw new Ie.ErrnoError(28);var se=Y.node,fe=se.mounted,Pe=Ie.getMounts(fe);Object.keys(Ie.nameTable).forEach(Ke=>{for(var $e=Ie.nameTable[Ke];$e;){var it=$e.name_next;Pe.includes($e.mount)&&Ie.destroyNode($e),$e=it}}),se.mounted=null;var ze=se.mount.mounts.indexOf(fe);se.mount.mounts.splice(ze,1)},lookup:(b,Y)=>b.node_ops.lookup(b,Y),mknod:(b,Y,se)=>{var fe=Ie.lookupPath(b,{parent:!0}),Pe=fe.node,ze=pn.basename(b);if(!ze||ze==="."||ze==="..")throw new Ie.ErrnoError(28);var Ke=Ie.mayCreate(Pe,ze);if(Ke)throw new Ie.ErrnoError(Ke);if(!Pe.node_ops.mknod)throw new Ie.ErrnoError(63);return Pe.node_ops.mknod(Pe,ze,Y,se)},create:(b,Y)=>(Y=Y!==void 0?Y:438,Y&=4095,Y|=32768,Ie.mknod(b,Y,0)),mkdir:(b,Y)=>(Y=Y!==void 0?Y:511,Y&=1023,Y|=16384,Ie.mknod(b,Y,0)),mkdirTree:(b,Y)=>{for(var se=b.split("/"),fe="",Pe=0;Pe<se.length;++Pe)if(se[Pe]){fe+="/"+se[Pe];try{Ie.mkdir(fe,Y)}catch(ze){if(ze.errno!=20)throw ze}}},mkdev:(b,Y,se)=>(typeof se>"u"&&(se=Y,Y=438),Y|=8192,Ie.mknod(b,Y,se)),symlink:(b,Y)=>{if(!rs.resolve(b))throw new Ie.ErrnoError(44);var se=Ie.lookupPath(Y,{parent:!0}),fe=se.node;if(!fe)throw new Ie.ErrnoError(44);var Pe=pn.basename(Y),ze=Ie.mayCreate(fe,Pe);if(ze)throw new Ie.ErrnoError(ze);if(!fe.node_ops.symlink)throw new Ie.ErrnoError(63);return fe.node_ops.symlink(fe,Pe,b)},rename:(b,Y)=>{var se=pn.dirname(b),fe=pn.dirname(Y),Pe=pn.basename(b),ze=pn.basename(Y),Ke,$e,it;if(Ke=Ie.lookupPath(b,{parent:!0}),$e=Ke.node,Ke=Ie.lookupPath(Y,{parent:!0}),it=Ke.node,!$e||!it)throw new Ie.ErrnoError(44);if($e.mount!==it.mount)throw new Ie.ErrnoError(75);var mt=Ie.lookupNode($e,Pe),Yt=rs.relative(b,fe);if(Yt.charAt(0)!==".")throw new Ie.ErrnoError(28);if(Yt=rs.relative(Y,se),Yt.charAt(0)!==".")throw new Ie.ErrnoError(55);var cn;try{cn=Ie.lookupNode(it,ze)}catch{}if(mt!==cn){var Zt=Ie.isDir(mt.mode),sn=Ie.mayDelete($e,Pe,Zt);if(sn)throw new Ie.ErrnoError(sn);if(sn=cn?Ie.mayDelete(it,ze,Zt):Ie.mayCreate(it,ze),sn)throw new Ie.ErrnoError(sn);if(!$e.node_ops.rename)throw new Ie.ErrnoError(63);if(Ie.isMountpoint(mt)||cn&&Ie.isMountpoint(cn))throw new Ie.ErrnoError(10);if(it!==$e&&(sn=Ie.nodePermissions($e,"w"),sn))throw new Ie.ErrnoError(sn);Ie.hashRemoveNode(mt);try{$e.node_ops.rename(mt,it,ze)}catch(Cn){throw Cn}finally{Ie.hashAddNode(mt)}}},rmdir:b=>{var Y=Ie.lookupPath(b,{parent:!0}),se=Y.node,fe=pn.basename(b),Pe=Ie.lookupNode(se,fe),ze=Ie.mayDelete(se,fe,!0);if(ze)throw new Ie.ErrnoError(ze);if(!se.node_ops.rmdir)throw new Ie.ErrnoError(63);if(Ie.isMountpoint(Pe))throw new Ie.ErrnoError(10);se.node_ops.rmdir(se,fe),Ie.destroyNode(Pe)},readdir:b=>{var Y=Ie.lookupPath(b,{follow:!0}),se=Y.node;if(!se.node_ops.readdir)throw new Ie.ErrnoError(54);return se.node_ops.readdir(se)},unlink:b=>{var Y=Ie.lookupPath(b,{parent:!0}),se=Y.node;if(!se)throw new Ie.ErrnoError(44);var fe=pn.basename(b),Pe=Ie.lookupNode(se,fe),ze=Ie.mayDelete(se,fe,!1);if(ze)throw new Ie.ErrnoError(ze);if(!se.node_ops.unlink)throw new Ie.ErrnoError(63);if(Ie.isMountpoint(Pe))throw new Ie.ErrnoError(10);se.node_ops.unlink(se,fe),Ie.destroyNode(Pe)},readlink:b=>{var Y=Ie.lookupPath(b),se=Y.node;if(!se)throw new Ie.ErrnoError(44);if(!se.node_ops.readlink)throw new Ie.ErrnoError(28);return rs.resolve(Ie.getPath(se.parent),se.node_ops.readlink(se))},stat:(b,Y)=>{var se=Ie.lookupPath(b,{follow:!Y}),fe=se.node;if(!fe)throw new Ie.ErrnoError(44);if(!fe.node_ops.getattr)throw new Ie.ErrnoError(63);return fe.node_ops.getattr(fe)},lstat:b=>Ie.stat(b,!0),chmod:(b,Y,se)=>{var fe;if(typeof b=="string"){var Pe=Ie.lookupPath(b,{follow:!se});fe=Pe.node}else fe=b;if(!fe.node_ops.setattr)throw new Ie.ErrnoError(63);fe.node_ops.setattr(fe,{mode:Y&4095|fe.mode&-4096,timestamp:Date.now()})},lchmod:(b,Y)=>{Ie.chmod(b,Y,!0)},fchmod:(b,Y)=>{var se=Ie.getStreamChecked(b);Ie.chmod(se.node,Y)},chown:(b,Y,se,fe)=>{var Pe;if(typeof b=="string"){var ze=Ie.lookupPath(b,{follow:!fe});Pe=ze.node}else Pe=b;if(!Pe.node_ops.setattr)throw new Ie.ErrnoError(63);Pe.node_ops.setattr(Pe,{timestamp:Date.now()})},lchown:(b,Y,se)=>{Ie.chown(b,Y,se,!0)},fchown:(b,Y,se)=>{var fe=Ie.getStreamChecked(b);Ie.chown(fe.node,Y,se)},truncate:(b,Y)=>{if(Y<0)throw new Ie.ErrnoError(28);var se;if(typeof b=="string"){var fe=Ie.lookupPath(b,{follow:!0});se=fe.node}else se=b;if(!se.node_ops.setattr)throw new Ie.ErrnoError(63);if(Ie.isDir(se.mode))throw new Ie.ErrnoError(31);if(!Ie.isFile(se.mode))throw new Ie.ErrnoError(28);var Pe=Ie.nodePermissions(se,"w");if(Pe)throw new Ie.ErrnoError(Pe);se.node_ops.setattr(se,{size:Y,timestamp:Date.now()})},ftruncate:(b,Y)=>{var se=Ie.getStreamChecked(b);if(!(se.flags&2097155))throw new Ie.ErrnoError(28);Ie.truncate(se.node,Y)},utime:(b,Y,se)=>{var fe=Ie.lookupPath(b,{follow:!0}),Pe=fe.node;Pe.node_ops.setattr(Pe,{timestamp:Math.max(Y,se)})},open:(b,Y,se)=>{if(b==="")throw new Ie.ErrnoError(44);Y=typeof Y=="string"?ht(Y):Y,se=typeof se>"u"?438:se,Y&64?se=se&4095|32768:se=0;var fe;if(typeof b=="object")fe=b;else{b=pn.normalize(b);try{var Pe=Ie.lookupPath(b,{follow:!(Y&131072)});fe=Pe.node}catch{}}var ze=!1;if(Y&64)if(fe){if(Y&128)throw new Ie.ErrnoError(20)}else fe=Ie.mknod(b,se,0),ze=!0;if(!fe)throw new Ie.ErrnoError(44);if(Ie.isChrdev(fe.mode)&&(Y&=-513),Y&65536&&!Ie.isDir(fe.mode))throw new Ie.ErrnoError(54);if(!ze){var Ke=Ie.mayOpen(fe,Y);if(Ke)throw new Ie.ErrnoError(Ke)}Y&512&&!ze&&Ie.truncate(fe,0),Y&=-131713;var $e=Ie.createStream({node:fe,path:Ie.getPath(fe),flags:Y,seekable:!0,position:0,stream_ops:fe.stream_ops,ungotten:[],error:!1});return $e.stream_ops.open&&$e.stream_ops.open($e),te.logReadFiles&&!(Y&1)&&(Ie.readFiles||(Ie.readFiles={}),b in Ie.readFiles||(Ie.readFiles[b]=1)),$e},close:b=>{if(Ie.isClosed(b))throw new Ie.ErrnoError(8);b.getdents&&(b.getdents=null);try{b.stream_ops.close&&b.stream_ops.close(b)}catch(Y){throw Y}finally{Ie.closeStream(b.fd)}b.fd=null},isClosed:b=>b.fd===null,llseek:(b,Y,se)=>{if(Ie.isClosed(b))throw new Ie.ErrnoError(8);if(!b.seekable||!b.stream_ops.llseek)throw new Ie.ErrnoError(70);if(se!=0&&se!=1&&se!=2)throw new Ie.ErrnoError(28);return b.position=b.stream_ops.llseek(b,Y,se),b.ungotten=[],b.position},read:(b,Y,se,fe,Pe)=>{if(fe<0||Pe<0)throw new Ie.ErrnoError(28);if(Ie.isClosed(b))throw new Ie.ErrnoError(8);if((b.flags&2097155)===1)throw new Ie.ErrnoError(8);if(Ie.isDir(b.node.mode))throw new Ie.ErrnoError(31);if(!b.stream_ops.read)throw new Ie.ErrnoError(28);var ze=typeof Pe<"u";if(!ze)Pe=b.position;else if(!b.seekable)throw new Ie.ErrnoError(70);var Ke=b.stream_ops.read(b,Y,se,fe,Pe);return ze||(b.position+=Ke),Ke},write:(b,Y,se,fe,Pe,ze)=>{if(fe<0||Pe<0)throw new Ie.ErrnoError(28);if(Ie.isClosed(b))throw new Ie.ErrnoError(8);if(!(b.flags&2097155))throw new Ie.ErrnoError(8);if(Ie.isDir(b.node.mode))throw new Ie.ErrnoError(31);if(!b.stream_ops.write)throw new Ie.ErrnoError(28);b.seekable&&b.flags&1024&&Ie.llseek(b,0,2);var Ke=typeof Pe<"u";if(!Ke)Pe=b.position;else if(!b.seekable)throw new Ie.ErrnoError(70);var $e=b.stream_ops.write(b,Y,se,fe,Pe,ze);return Ke||(b.position+=$e),$e},allocate:(b,Y,se)=>{if(Ie.isClosed(b))throw new Ie.ErrnoError(8);if(Y<0||se<=0)throw new Ie.ErrnoError(28);if(!(b.flags&2097155))throw new Ie.ErrnoError(8);if(!Ie.isFile(b.node.mode)&&!Ie.isDir(b.node.mode))throw new Ie.ErrnoError(43);if(!b.stream_ops.allocate)throw new Ie.ErrnoError(138);b.stream_ops.allocate(b,Y,se)},mmap:(b,Y,se,fe,Pe)=>{if(fe&2&&!(Pe&2)&&(b.flags&2097155)!==2)throw new Ie.ErrnoError(2);if((b.flags&2097155)===1)throw new Ie.ErrnoError(2);if(!b.stream_ops.mmap)throw new Ie.ErrnoError(43);return b.stream_ops.mmap(b,Y,se,fe,Pe)},msync:(b,Y,se,fe,Pe)=>b.stream_ops.msync?b.stream_ops.msync(b,Y,se,fe,Pe):0,munmap:b=>0,ioctl:(b,Y,se)=>{if(!b.stream_ops.ioctl)throw new Ie.ErrnoError(59);return b.stream_ops.ioctl(b,Y,se)},readFile:(b,Y={})=>{if(Y.flags=Y.flags||0,Y.encoding=Y.encoding||"binary",Y.encoding!=="utf8"&&Y.encoding!=="binary")throw new Error(`Invalid encoding type "${Y.encoding}"`);var se,fe=Ie.open(b,Y.flags),Pe=Ie.stat(b),ze=Pe.size,Ke=new Uint8Array(ze);return Ie.read(fe,Ke,0,ze,0),Y.encoding==="utf8"?se=ws(Ke,0):Y.encoding==="binary"&&(se=Ke),Ie.close(fe),se},writeFile:(b,Y,se={})=>{se.flags=se.flags||577;var fe=Ie.open(b,se.flags,se.mode);if(typeof Y=="string"){var Pe=new Uint8Array(Id(Y)+1),ze=A3(Y,Pe,0,Pe.length);Ie.write(fe,Pe,0,ze,void 0,se.canOwn)}else if(ArrayBuffer.isView(Y))Ie.write(fe,Y,0,Y.byteLength,void 0,se.canOwn);else throw new Error("Unsupported data type");Ie.close(fe)},cwd:()=>Ie.currentPath,chdir:b=>{var Y=Ie.lookupPath(b,{follow:!0});if(Y.node===null)throw new Ie.ErrnoError(44);if(!Ie.isDir(Y.node.mode))throw new Ie.ErrnoError(54);var se=Ie.nodePermissions(Y.node,"x");if(se)throw new Ie.ErrnoError(se);Ie.currentPath=Y.path},createDefaultDirectories:()=>{Ie.mkdir("/tmp"),Ie.mkdir("/home"),Ie.mkdir("/home/web_user")},createDefaultDevices:()=>{Ie.mkdir("/dev"),Ie.registerDevice(Ie.makedev(1,3),{read:()=>0,write:(fe,Pe,ze,Ke,$e)=>Ke}),Ie.mkdev("/dev/null",Ie.makedev(1,3)),ui.register(Ie.makedev(5,0),ui.default_tty_ops),ui.register(Ie.makedev(6,0),ui.default_tty1_ops),Ie.mkdev("/dev/tty",Ie.makedev(5,0)),Ie.mkdev("/dev/tty1",Ie.makedev(6,0));var b=new Uint8Array(1024),Y=0,se=()=>(Y===0&&(Y=Cs(b).byteLength),b[--Y]);Ie.createDevice("/dev","random",se),Ie.createDevice("/dev","urandom",se),Ie.mkdir("/dev/shm"),Ie.mkdir("/dev/shm/tmp")},createSpecialDirectories:()=>{Ie.mkdir("/proc");var b=Ie.mkdir("/proc/self");Ie.mkdir("/proc/self/fd"),Ie.mount({mount:()=>{var Y=Ie.createNode(b,"fd",16895,73);return Y.node_ops={lookup:(se,fe)=>{var Pe=+fe,ze=Ie.getStreamChecked(Pe),Ke={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>ze.path}};return Ke.parent=Ke,Ke}},Y}},{},"/proc/self/fd")},createStandardStreams:()=>{te.stdin?Ie.createDevice("/dev","stdin",te.stdin):Ie.symlink("/dev/tty","/dev/stdin"),te.stdout?Ie.createDevice("/dev","stdout",null,te.stdout):Ie.symlink("/dev/tty","/dev/stdout"),te.stderr?Ie.createDevice("/dev","stderr",null,te.stderr):Ie.symlink("/dev/tty1","/dev/stderr"),Ie.open("/dev/stdin",0),Ie.open("/dev/stdout",1),Ie.open("/dev/stderr",1)},ensureErrnoError:()=>{Ie.ErrnoError||(Ie.ErrnoError=function(Y,se){this.name="ErrnoError",this.node=se,this.setErrno=function(fe){this.errno=fe},this.setErrno(Y),this.message="FS error"},Ie.ErrnoError.prototype=new Error,Ie.ErrnoError.prototype.constructor=Ie.ErrnoError,[44].forEach(b=>{Ie.genericErrors[b]=new Ie.ErrnoError(b),Ie.genericErrors[b].stack="<generic error, no stack>"}))},staticInit:()=>{Ie.ensureErrnoError(),Ie.nameTable=new Array(4096),Ie.mount(Wn,{},"/"),Ie.createDefaultDirectories(),Ie.createDefaultDevices(),Ie.createSpecialDirectories(),Ie.filesystems={MEMFS:Wn}},init:(b,Y,se)=>{Ie.init.initialized=!0,Ie.ensureErrnoError(),te.stdin=b||te.stdin,te.stdout=Y||te.stdout,te.stderr=se||te.stderr,Ie.createStandardStreams()},quit:()=>{Ie.init.initialized=!1;for(var b=0;b<Ie.streams.length;b++){var Y=Ie.streams[b];Y&&Ie.close(Y)}},findObject:(b,Y)=>{var se=Ie.analyzePath(b,Y);return se.exists?se.object:null},analyzePath:(b,Y)=>{try{var se=Ie.lookupPath(b,{follow:!Y});b=se.path}catch{}var fe={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var se=Ie.lookupPath(b,{parent:!0});fe.parentExists=!0,fe.parentPath=se.path,fe.parentObject=se.node,fe.name=pn.basename(b),se=Ie.lookupPath(b,{follow:!Y}),fe.exists=!0,fe.path=se.path,fe.object=se.node,fe.name=se.node.name,fe.isRoot=se.path==="/"}catch(Pe){fe.error=Pe.errno}return fe},createPath:(b,Y,se,fe)=>{b=typeof b=="string"?b:Ie.getPath(b);for(var Pe=Y.split("/").reverse();Pe.length;){var ze=Pe.pop();if(ze){var Ke=pn.join2(b,ze);try{Ie.mkdir(Ke)}catch{}b=Ke}}return Ke},createFile:(b,Y,se,fe,Pe)=>{var ze=pn.join2(typeof b=="string"?b:Ie.getPath(b),Y),Ke=Nt(fe,Pe);return Ie.create(ze,Ke)},createDataFile:(b,Y,se,fe,Pe,ze)=>{var Ke=Y;b&&(b=typeof b=="string"?b:Ie.getPath(b),Ke=Y?pn.join2(b,Y):b);var $e=Nt(fe,Pe),it=Ie.create(Ke,$e);if(se){if(typeof se=="string"){for(var mt=new Array(se.length),Yt=0,cn=se.length;Yt<cn;++Yt)mt[Yt]=se.charCodeAt(Yt);se=mt}Ie.chmod(it,$e|146);var Zt=Ie.open(it,577);Ie.write(Zt,se,0,se.length,0,ze),Ie.close(Zt),Ie.chmod(it,$e)}return it},createDevice:(b,Y,se,fe)=>{var Pe=pn.join2(typeof b=="string"?b:Ie.getPath(b),Y),ze=Nt(!!se,!!fe);Ie.createDevice.major||(Ie.createDevice.major=64);var Ke=Ie.makedev(Ie.createDevice.major++,0);return Ie.registerDevice(Ke,{open:$e=>{$e.seekable=!1},close:$e=>{fe&&fe.buffer&&fe.buffer.length&&fe(10)},read:($e,it,mt,Yt,cn)=>{for(var Zt=0,sn=0;sn<Yt;sn++){var Cn;try{Cn=se()}catch{throw new Ie.ErrnoError(29)}if(Cn===void 0&&Zt===0)throw new Ie.ErrnoError(6);if(Cn==null)break;Zt++,it[mt+sn]=Cn}return Zt&&($e.node.timestamp=Date.now()),Zt},write:($e,it,mt,Yt,cn)=>{for(var Zt=0;Zt<Yt;Zt++)try{fe(it[mt+Zt])}catch{throw new Ie.ErrnoError(29)}return Yt&&($e.node.timestamp=Date.now()),Zt}}),Ie.mkdev(Pe,ze,Ke)},forceLoadFile:b=>{if(b.isDevice||b.isFolder||b.link||b.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");if(ge)try{b.contents=rc(ge(b.url),!0),b.usedBytes=b.contents.length}catch{throw new Ie.ErrnoError(29)}else throw new Error("Cannot load without read() or XMLHttpRequest.")},createLazyFile:(b,Y,se,fe,Pe)=>{function ze(){this.lengthKnown=!1,this.chunks=[]}if(ze.prototype.get=function(sn){if(!(sn>this.length-1||sn<0)){var Cn=sn%this.chunkSize,Tl=sn/this.chunkSize|0;return this.getter(Tl)[Cn]}},ze.prototype.setDataGetter=function(sn){this.getter=sn},ze.prototype.cacheLength=function(){var sn=new XMLHttpRequest;if(sn.open("HEAD",se,!1),sn.send(null),!(sn.status>=200&&sn.status<300||sn.status===304))throw new Error("Couldn't load "+se+". Status: "+sn.status);var Cn=Number(sn.getResponseHeader("Content-length")),Tl,Rl=(Tl=sn.getResponseHeader("Accept-Ranges"))&&Tl==="bytes",Fl=(Tl=sn.getResponseHeader("Content-Encoding"))&&Tl==="gzip",xt=1024*1024;Rl||(xt=Cn);var rn=(Cl,vu)=>{if(Cl>vu)throw new Error("invalid range ("+Cl+", "+vu+") or no bytes requested!");if(vu>Cn-1)throw new Error("only "+Cn+" bytes available! programmer error!");var ns=new XMLHttpRequest;if(ns.open("GET",se,!1),Cn!==xt&&ns.setRequestHeader("Range","bytes="+Cl+"-"+vu),ns.responseType="arraybuffer",ns.overrideMimeType&&ns.overrideMimeType("text/plain; charset=x-user-defined"),ns.send(null),!(ns.status>=200&&ns.status<300||ns.status===304))throw new Error("Couldn't load "+se+". Status: "+ns.status);return ns.response!==void 0?new Uint8Array(ns.response||[]):rc(ns.responseText||"",!0)},Vs=this;Vs.setDataGetter(Cl=>{var vu=Cl*xt,ns=(Cl+1)*xt-1;if(ns=Math.min(ns,Cn-1),typeof Vs.chunks[Cl]>"u"&&(Vs.chunks[Cl]=rn(vu,ns)),typeof Vs.chunks[Cl]>"u")throw new Error("doXHR failed!");return Vs.chunks[Cl]}),(Fl||!Cn)&&(xt=Cn=1,Cn=this.getter(0).length,xt=Cn,st("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=Cn,this._chunkSize=xt,this.lengthKnown=!0},typeof XMLHttpRequest<"u"){if(!Ae)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var Ke=new ze;Object.defineProperties(Ke,{length:{get:function(){return this.lengthKnown||this.cacheLength(),this._length}},chunkSize:{get:function(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}});var $e={isDevice:!1,contents:Ke}}else var $e={isDevice:!1,url:se};var it=Ie.createFile(b,Y,$e,fe,Pe);$e.contents?it.contents=$e.contents:$e.url&&(it.contents=null,it.url=$e.url),Object.defineProperties(it,{usedBytes:{get:function(){return this.contents.length}}});var mt={},Yt=Object.keys(it.stream_ops);Yt.forEach(Zt=>{var sn=it.stream_ops[Zt];mt[Zt]=function(){return Ie.forceLoadFile(it),sn.apply(null,arguments)}});function cn(Zt,sn,Cn,Tl,Rl){var Fl=Zt.node.contents;if(Rl>=Fl.length)return 0;var xt=Math.min(Fl.length-Rl,Tl);if(Fl.slice)for(var rn=0;rn<xt;rn++)sn[Cn+rn]=Fl[Rl+rn];else for(var rn=0;rn<xt;rn++)sn[Cn+rn]=Fl.get(Rl+rn);return xt}return mt.read=(Zt,sn,Cn,Tl,Rl)=>(Ie.forceLoadFile(it),cn(Zt,sn,Cn,Tl,Rl)),mt.mmap=(Zt,sn,Cn,Tl,Rl)=>{Ie.forceLoadFile(it);var Fl=A0();if(!Fl)throw new Ie.ErrnoError(48);return cn(Zt,y(),Fl,sn,Cn),{ptr:Fl,allocated:!0}},it.stream_ops=mt,it}},pt=(b,Y)=>(b>>>=0,b?ws(S(),b,Y):""),an={DEFAULT_POLLMASK:5,calculateAt:function(b,Y,se){if(pn.isAbs(Y))return Y;var fe;if(b===-100)fe=Ie.cwd();else{var Pe=an.getStreamFromFD(b);fe=Pe.path}if(Y.length==0){if(!se)throw new Ie.ErrnoError(44);return fe}return pn.join2(fe,Y)},doStat:function(b,Y,se){try{var fe=b(Y)}catch($e){if($e&&$e.node&&pn.normalize(Y)!==pn.normalize(Ie.getPath($e.node)))return-54;throw $e}V()[se>>>2]=fe.dev,V()[se+4>>>2]=fe.mode,Z()[se+8>>>2]=fe.nlink,V()[se+12>>>2]=fe.uid,V()[se+16>>>2]=fe.gid,V()[se+20>>>2]=fe.rdev,En=[fe.size>>>0,(hn=fe.size,+Math.abs(hn)>=1?hn>0?+Math.floor(hn/4294967296)>>>0:~~+Math.ceil((hn-+(~~hn>>>0))/4294967296)>>>0:0)],V()[se+24>>>2]=En[0],V()[se+28>>>2]=En[1],V()[se+32>>>2]=4096,V()[se+36>>>2]=fe.blocks;var Pe=fe.atime.getTime(),ze=fe.mtime.getTime(),Ke=fe.ctime.getTime();return En=[Math.floor(Pe/1e3)>>>0,(hn=Math.floor(Pe/1e3),+Math.abs(hn)>=1?hn>0?+Math.floor(hn/4294967296)>>>0:~~+Math.ceil((hn-+(~~hn>>>0))/4294967296)>>>0:0)],V()[se+40>>>2]=En[0],V()[se+44>>>2]=En[1],Z()[se+48>>>2]=Pe%1e3*1e3,En=[Math.floor(ze/1e3)>>>0,(hn=Math.floor(ze/1e3),+Math.abs(hn)>=1?hn>0?+Math.floor(hn/4294967296)>>>0:~~+Math.ceil((hn-+(~~hn>>>0))/4294967296)>>>0:0)],V()[se+56>>>2]=En[0],V()[se+60>>>2]=En[1],Z()[se+64>>>2]=ze%1e3*1e3,En=[Math.floor(Ke/1e3)>>>0,(hn=Math.floor(Ke/1e3),+Math.abs(hn)>=1?hn>0?+Math.floor(hn/4294967296)>>>0:~~+Math.ceil((hn-+(~~hn>>>0))/4294967296)>>>0:0)],V()[se+72>>>2]=En[0],V()[se+76>>>2]=En[1],Z()[se+80>>>2]=Ke%1e3*1e3,En=[fe.ino>>>0,(hn=fe.ino,+Math.abs(hn)>=1?hn>0?+Math.floor(hn/4294967296)>>>0:~~+Math.ceil((hn-+(~~hn>>>0))/4294967296)>>>0:0)],V()[se+88>>>2]=En[0],V()[se+92>>>2]=En[1],0},doMsync:function(b,Y,se,fe,Pe){if(!Ie.isFile(Y.node.mode))throw new Ie.ErrnoError(43);if(fe&2)return 0;var ze=S().slice(b,b+se);Ie.msync(Y,ze,Pe,se,fe)},varargs:void 0,get(){an.varargs+=4;var b=V()[an.varargs-4>>>2];return b},getStr(b){var Y=pt(b);return Y},getStreamFromFD:function(b){var Y=Ie.getStreamChecked(b);return Y}};function Nn(b){if(Ve)return kt(1,1,b);Ft=b,Hl()||($t.terminateAllThreads(),te.onExit&&te.onExit(b),Ct=!0),De(b,new Jt(b))}var Gn=(b,Y)=>{if(Ft=b,Ve)throw fu(b),"unwind";Nn(b)},jn=Gn,el=b=>{if(b instanceof Jt||b=="unwind")return Ft;De(1,b)},$t={unusedWorkers:[],runningWorkers:[],tlsInitFunctions:[],pthreads:{},init:function(){Ve?$t.initWorker():$t.initMainThread()},initMainThread:function(){for(var b=navigator.hardwareConcurrency;b--;)$t.allocateUnusedWorker();Dt(()=>{In(),$t.loadWasmModuleToAllWorkers(()=>bn())})},initWorker:function(){at=!1},setExitStatus:function(b){Ft=b},terminateAllThreads__deps:["$terminateWorker"],terminateAllThreads:function(){for(var b of $t.runningWorkers)ut(b);for(var b of $t.unusedWorkers)ut(b);$t.unusedWorkers=[],$t.runningWorkers=[],$t.pthreads=[]},returnWorkerToPool:function(b){var Y=b.pthread_ptr;delete $t.pthreads[Y],$t.unusedWorkers.push(b),$t.runningWorkers.splice($t.runningWorkers.indexOf(b),1),b.pthread_ptr=0,O0(Y)},receiveObjectTransfer:function(b){},threadInitTLS:function(){$t.tlsInitFunctions.forEach(b=>b())},loadWasmModuleToWorker:b=>new Promise(Y=>{b.onmessage=ze=>{var Ke=ze.data,$e=Ke.cmd;if(Ke.targetThread&&Ke.targetThread!=P3()){var it=$t.pthreads[Ke.targetThread];it?it.postMessage(Ke,Ke.transferList):ft('Internal error! Worker sent a message "'+$e+'" to target pthread '+Ke.targetThread+", but that thread no longer exists!");return}$e==="checkMailbox"?dc():$e==="spawnThread"?Bn(Ke):$e==="cleanupThread"?nn(Ke.thread):$e==="killThread"?Kt(Ke.thread):$e==="cancelThread"?tn(Ke.thread):$e==="loaded"?(b.loaded=!0,Y(b)):$e==="alert"?alert("Thread "+Ke.threadId+": "+Ke.text):Ke.target==="setimmediate"?b.postMessage(Ke):$e==="callHandler"?te[Ke.handler](...Ke.args):$e&&ft("worker sent an unknown command "+$e)},b.onerror=ze=>{var Ke="worker sent an error!";throw ft(Ke+" "+ze.filename+":"+ze.lineno+": "+ze.message),ze};var se=[],fe=["onExit","onAbort","print","printErr"];for(var Pe of fe)te.hasOwnProperty(Pe)&&se.push(Pe);b.postMessage({cmd:"load",handlers:se,urlOrBlob:te.mainScriptUrlOrBlob||t,wasmMemory:It,wasmModule:bt})}),loadWasmModuleToAllWorkers:function(b){if(Ve)return b();Promise.all($t.unusedWorkers.map($t.loadWasmModuleToWorker)).then(b)},allocateUnusedWorker:function(){var b,Y=Xe("web-ifc-mt.worker.js");b=new Worker(Y),$t.unusedWorkers.push(b)},getNewWorker:function(){return $t.unusedWorkers.length==0&&($t.allocateUnusedWorker(),$t.loadWasmModuleToWorker($t.unusedWorkers[0])),$t.unusedWorkers.pop()}};te.PThread=$t;var Jn=b=>{for(;b.length>0;)b.shift()(te)};function Bl(){var b=P3(),Y=V()[b+52>>>2],se=V()[b+56>>>2],fe=Y-se;a5(Y,fe),P0(Y)}te.establishStackSpace=Bl;function fu(b){if(Ve)return kt(2,0,b);jn(b)}var Ss=[],Su=b=>{var Y=Ss[b];return Y||(b>=Ss.length&&(Ss.length=b+1),Ss[b]=Y=Tt.get(b)),Y};function Xl(b,Y){var se=Su(b)(Y);function fe(Pe){Hl()?$t.setExitStatus(Pe):g0(Pe)}fe(se)}te.invokeEntryPoint=Xl;function rl(b){$t.tlsInitFunctions.push(b)}function S3(b){this.excPtr=b,this.ptr=b-24,this.set_type=function(Y){Z()[this.ptr+4>>>2]=Y},this.get_type=function(){return Z()[this.ptr+4>>>2]},this.set_destructor=function(Y){Z()[this.ptr+8>>>2]=Y},this.get_destructor=function(){return Z()[this.ptr+8>>>2]},this.set_caught=function(Y){Y=Y?1:0,y()[this.ptr+12>>>0]=Y},this.get_caught=function(){return y()[this.ptr+12>>>0]!=0},this.set_rethrown=function(Y){Y=Y?1:0,y()[this.ptr+13>>>0]=Y},this.get_rethrown=function(){return y()[this.ptr+13>>>0]!=0},this.init=function(Y,se){this.set_adjusted_ptr(0),this.set_type(Y),this.set_destructor(se)},this.set_adjusted_ptr=function(Y){Z()[this.ptr+16>>>2]=Y},this.get_adjusted_ptr=function(){return Z()[this.ptr+16>>>2]},this.get_exception_ptr=function(){var Y=c5(this.get_type());if(Y)return Z()[this.excPtr>>>2];var se=this.get_adjusted_ptr();return se!==0?se:this.excPtr}}var vl=0;function Lu(b,Y){return Y+2097152>>>0<4194305-!!b?(b>>>0)+Y*4294967296:NaN}function L3(b,Y,se){b>>>=0,Y>>>=0,se>>>=0;var fe=new S3(b);throw fe.init(Y,se),vl=b,vl}function _c(b){b>>>=0,s5(b,!Ae,1,!we,5242880,!1),$t.threadInitTLS()}function yd(b){b>>>=0,Ve?postMessage({cmd:"cleanupThread",thread:b}):nn(b)}var Ls={};function $u(b){for(;b.length;){var Y=b.pop(),se=b.pop();se(Y)}}function ai(b){return this.fromWireType(V()[b>>>2])}var Ms={},xs={},Vc={},wd=void 0;function Wc(b){throw new wd(b)}function Ou(b,Y,se){b.forEach(function($e){Vc[$e]=Y});function fe($e){var it=se($e);it.length!==b.length&&Wc("Mismatched type converter count");for(var mt=0;mt<b.length;++mt)gu(b[mt],it[mt])}var Pe=new Array(Y.length),ze=[],Ke=0;Y.forEach(($e,it)=>{xs.hasOwnProperty($e)?Pe[it]=xs[$e]:(ze.push($e),Ms.hasOwnProperty($e)||(Ms[$e]=[]),Ms[$e].push(()=>{Pe[it]=xs[$e],++Ke,Ke===ze.length&&fe(Pe)}))}),ze.length===0&&fe(Pe)}function Ed(b){b>>>=0;var Y=Ls[b];delete Ls[b];var se=Y.elements,fe=se.length,Pe=se.map(function($e){return $e.getterReturnType}).concat(se.map(function($e){return $e.setterArgumentType})),ze=Y.rawConstructor,Ke=Y.rawDestructor;Ou([b],Pe,function($e){return se.forEach((it,mt)=>{var Yt=$e[mt],cn=it.getter,Zt=it.getterContext,sn=$e[mt+fe],Cn=it.setter,Tl=it.setterContext;it.read=Rl=>Yt.fromWireType(cn(Zt,Rl)),it.write=(Rl,Fl)=>{var xt=[];Cn(Tl,Rl,sn.toWireType(xt,Fl)),$u(xt)}}),[{name:Y.name,fromWireType:function(it){for(var mt=new Array(fe),Yt=0;Yt<fe;++Yt)mt[Yt]=se[Yt].read(it);return Ke(it),mt},toWireType:function(it,mt){if(fe!==mt.length)throw new TypeError(`Incorrect number of tuple elements for ${Y.name}: expected=${fe}, actual=${mt.length}`);for(var Yt=ze(),cn=0;cn<fe;++cn)se[cn].write(Yt,mt[cn]);return it!==null&&it.push(Ke,Yt),Yt},argPackAdvance:8,readValueFromPointer:ai,destructorFunction:Ke}]})}var uc={},Hs=function(b){b>>>=0;var Y=uc[b];delete uc[b];var se=Y.rawConstructor,fe=Y.rawDestructor,Pe=Y.fields,ze=Pe.map(Ke=>Ke.getterReturnType).concat(Pe.map(Ke=>Ke.setterArgumentType));Ou([b],ze,Ke=>{var $e={};return Pe.forEach((it,mt)=>{var Yt=it.fieldName,cn=Ke[mt],Zt=it.getter,sn=it.getterContext,Cn=Ke[mt+Pe.length],Tl=it.setter,Rl=it.setterContext;$e[Yt]={read:Fl=>cn.fromWireType(Zt(sn,Fl)),write:(Fl,xt)=>{var rn=[];Tl(Rl,Fl,Cn.toWireType(rn,xt)),$u(rn)}}}),[{name:Y.name,fromWireType:function(it){var mt={};for(var Yt in $e)mt[Yt]=$e[Yt].read(it);return fe(it),mt},toWireType:function(it,mt){for(var Yt in $e)if(!(Yt in mt))throw new TypeError(`Missing field: "${Yt}"`);var cn=se();for(Yt in $e)$e[Yt].write(cn,mt[Yt]);return it!==null&&it.push(fe,cn),cn},argPackAdvance:8,readValueFromPointer:ai,destructorFunction:fe}]})};function Td(b,Y,se,fe,Pe){}function ac(b){switch(b){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError(`Unknown type size: ${b}`)}}function vf(){for(var b=new Array(256),Y=0;Y<256;++Y)b[Y]=String.fromCharCode(Y);bi=b}var bi=void 0;function Os(b){for(var Y="",se=b;S()[se>>>0];)Y+=bi[S()[se++>>>0]];return Y}var Zu=void 0;function ol(b){throw new Zu(b)}function jc(b,Y,se={}){var fe=Y.name;if(b||ol(`type "${fe}" must have a positive integer typeid pointer`),xs.hasOwnProperty(b)){if(se.ignoreDuplicateRegistrations)return;ol(`Cannot register type '${fe}' twice`)}if(xs[b]=Y,delete Vc[b],Ms.hasOwnProperty(b)){var Pe=Ms[b];delete Ms[b],Pe.forEach(ze=>ze())}}function gu(b,Y,se={}){if(!("argPackAdvance"in Y))throw new TypeError("registerType registeredInstance requires argPackAdvance");return jc(b,Y,se)}function pd(b,Y,se,fe,Pe){b>>>=0,Y>>>=0,se>>>=0;var ze=ac(se);Y=Os(Y),gu(b,{name:Y,fromWireType:function(Ke){return!!Ke},toWireType:function(Ke,$e){return $e?fe:Pe},argPackAdvance:8,readValueFromPointer:function(Ke){var $e;if(se===1)$e=y();else if(se===2)$e=g();else if(se===4)$e=V();else throw new TypeError("Unknown boolean type size: "+Y);return this.fromWireType($e[Ke>>>ze])},destructorFunction:null})}function Rd(b){if(!(this instanceof Ju)||!(b instanceof Ju))return!1;for(var Y=this.$$.ptrType.registeredClass,se=this.$$.ptr,fe=b.$$.ptrType.registeredClass,Pe=b.$$.ptr;Y.baseClass;)se=Y.upcast(se),Y=Y.baseClass;for(;fe.baseClass;)Pe=fe.upcast(Pe),fe=fe.baseClass;return Y===fe&&se===Pe}function eI(b){return{count:b.count,deleteScheduled:b.deleteScheduled,preservePointerOnDelete:b.preservePointerOnDelete,ptr:b.ptr,ptrType:b.ptrType,smartPtr:b.smartPtr,smartPtrType:b.smartPtrType}}function _s(b){function Y(se){return se.$$.ptrType.registeredClass.name}ol(Y(b)+" instance already deleted")}var Ci=!1;function tI(b){}function md(b){b.smartPtr?b.smartPtrType.rawDestructor(b.smartPtr):b.ptrType.registeredClass.rawDestructor(b.ptr)}function bl(b){b.count.value-=1;var Y=b.count.value===0;Y&&md(b)}function nI(b,Y,se){if(Y===se)return b;if(se.baseClass===void 0)return null;var fe=nI(b,Y,se.baseClass);return fe===null?null:se.downcast(fe)}var ic={};function Dd(){return Object.keys(ii).length}function Nd(){var b=[];for(var Y in ii)ii.hasOwnProperty(Y)&&b.push(ii[Y]);return b}var Mi=[];function Yc(){for(;Mi.length;){var b=Mi.pop();b.$$.deleteScheduled=!1,b.delete()}}var xi=void 0;function Ad(b){xi=b,Mi.length&&xi&&xi(Yc)}function zc(){te.getInheritedInstanceCount=Dd,te.getLiveInheritedInstances=Nd,te.flushPendingDeletes=Yc,te.setDelayFunction=Ad}var ii={};function oc(b,Y){for(Y===void 0&&ol("ptr should not be undefined");b.baseClass;)Y=b.upcast(Y),b=b.baseClass;return Y}function lI(b,Y){return Y=oc(b,Y),ii[Y]}function Pu(b,Y){(!Y.ptrType||!Y.ptr)&&Wc("makeClassHandle requires ptr and ptrType");var se=!!Y.smartPtrType,fe=!!Y.smartPtr;return se!==fe&&Wc("Both smartPtrType and smartPtr must be specified"),Y.count={value:1},Hi(Object.create(b,{$$:{value:Y}}))}function cc(b){var Y=this.getPointee(b);if(!Y)return this.destructor(b),null;var se=lI(this.registeredClass,Y);if(se!==void 0){if(se.$$.count.value===0)return se.$$.ptr=Y,se.$$.smartPtr=b,se.clone();var fe=se.clone();return this.destructor(b),fe}function Pe(){return this.isSmartPointer?Pu(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:Y,smartPtrType:this,smartPtr:b}):Pu(this.registeredClass.instancePrototype,{ptrType:this,ptr:b})}var ze=this.registeredClass.getActualType(Y),Ke=ic[ze];if(!Ke)return Pe.call(this);var $e;this.isConst?$e=Ke.constPointerType:$e=Ke.pointerType;var it=nI(Y,this.registeredClass,$e.registeredClass);return it===null?Pe.call(this):this.isSmartPointer?Pu($e.registeredClass.instancePrototype,{ptrType:$e,ptr:it,smartPtrType:this,smartPtr:b}):Pu($e.registeredClass.instancePrototype,{ptrType:$e,ptr:it})}var Hi=function(b){return typeof FinalizationRegistry>"u"?(Hi=Y=>Y,b):(Ci=new FinalizationRegistry(Y=>{bl(Y.$$)}),Hi=Y=>{var se=Y.$$,fe=!!se.smartPtr;if(fe){var Pe={$$:se};Ci.register(Y,Pe,Y)}return Y},tI=Y=>Ci.unregister(Y),Hi(b))};function sI(){if(this.$$.ptr||_s(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var b=Hi(Object.create(Object.getPrototypeOf(this),{$$:{value:eI(this.$$)}}));return b.$$.count.value+=1,b.$$.deleteScheduled=!1,b}function Sd(){this.$$.ptr||_s(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&ol("Object already scheduled for deletion"),tI(this),bl(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function Ld(){return!this.$$.ptr}function Od(){return this.$$.ptr||_s(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&ol("Object already scheduled for deletion"),Mi.push(this),Mi.length===1&&xi&&xi(Yc),this.$$.deleteScheduled=!0,this}function gd(){Ju.prototype.isAliasOf=Rd,Ju.prototype.clone=sI,Ju.prototype.delete=Sd,Ju.prototype.isDeleted=Ld,Ju.prototype.deleteLater=Od}function Ju(){}var Pd=48,bd=57;function kc(b){if(b===void 0)return"_unknown";b=b.replace(/[^a-zA-Z0-9_]/g,"$");var Y=b.charCodeAt(0);return Y>=Pd&&Y<=bd?`_${b}`:b}function qc(b,Y){return b=kc(b),{[b]:function(){return Y.apply(this,arguments)}}[b]}function rI(b,Y,se){if(b[Y].overloadTable===void 0){var fe=b[Y];b[Y]=function(){return b[Y].overloadTable.hasOwnProperty(arguments.length)||ol(`Function '${se}' called with an invalid number of arguments (${arguments.length}) - expects one of (${b[Y].overloadTable})!`),b[Y].overloadTable[arguments.length].apply(this,arguments)},b[Y].overloadTable=[],b[Y].overloadTable[fe.argCount]=fe}}function uI(b,Y,se){te.hasOwnProperty(b)?((se===void 0||te[b].overloadTable!==void 0&&te[b].overloadTable[se]!==void 0)&&ol(`Cannot register public name '${b}' twice`),rI(te,b,b),te.hasOwnProperty(se)&&ol(`Cannot register multiple overloads of a function with the same number of arguments (${se})!`),te[b].overloadTable[se]=Y):(te[b]=Y,se!==void 0&&(te[b].numArguments=se))}function Cd(b,Y,se,fe,Pe,ze,Ke,$e){this.name=b,this.constructor=Y,this.instancePrototype=se,this.rawDestructor=fe,this.baseClass=Pe,this.getActualType=ze,this.upcast=Ke,this.downcast=$e,this.pureVirtualFunctions=[]}function Kc(b,Y,se){for(;Y!==se;)Y.upcast||ol(`Expected null or instance of ${se.name}, got an instance of ${Y.name}`),b=Y.upcast(b),Y=Y.baseClass;return b}function Md(b,Y){if(Y===null)return this.isReference&&ol(`null is not a valid ${this.name}`),0;Y.$$||ol(`Cannot pass "${Jc(Y)}" as a ${this.name}`),Y.$$.ptr||ol(`Cannot pass deleted object as a pointer of type ${this.name}`);var se=Y.$$.ptrType.registeredClass,fe=Kc(Y.$$.ptr,se,this.registeredClass);return fe}function Qc(b,Y){var se;if(Y===null)return this.isReference&&ol(`null is not a valid ${this.name}`),this.isSmartPointer?(se=this.rawConstructor(),b!==null&&b.push(this.rawDestructor,se),se):0;Y.$$||ol(`Cannot pass "${Jc(Y)}" as a ${this.name}`),Y.$$.ptr||ol(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&Y.$$.ptrType.isConst&&ol(`Cannot convert argument of type ${Y.$$.smartPtrType?Y.$$.smartPtrType.name:Y.$$.ptrType.name} to parameter type ${this.name}`);var fe=Y.$$.ptrType.registeredClass;if(se=Kc(Y.$$.ptr,fe,this.registeredClass),this.isSmartPointer)switch(Y.$$.smartPtr===void 0&&ol("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:Y.$$.smartPtrType===this?se=Y.$$.smartPtr:ol(`Cannot convert argument of type ${Y.$$.smartPtrType?Y.$$.smartPtrType.name:Y.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:se=Y.$$.smartPtr;break;case 2:if(Y.$$.smartPtrType===this)se=Y.$$.smartPtr;else{var Pe=Y.clone();se=this.rawShare(se,Ul.toHandle(function(){Pe.delete()})),b!==null&&b.push(this.rawDestructor,se)}break;default:ol("Unsupporting sharing policy")}return se}function xd(b,Y){if(Y===null)return this.isReference&&ol(`null is not a valid ${this.name}`),0;Y.$$||ol(`Cannot pass "${Jc(Y)}" as a ${this.name}`),Y.$$.ptr||ol(`Cannot pass deleted object as a pointer of type ${this.name}`),Y.$$.ptrType.isConst&&ol(`Cannot convert argument of type ${Y.$$.ptrType.name} to parameter type ${this.name}`);var se=Y.$$.ptrType.registeredClass,fe=Kc(Y.$$.ptr,se,this.registeredClass);return fe}function Hd(b){return this.rawGetPointee&&(b=this.rawGetPointee(b)),b}function Bd(b){this.rawDestructor&&this.rawDestructor(b)}function Ud(b){b!==null&&b.delete()}function aI(){Iu.prototype.getPointee=Hd,Iu.prototype.destructor=Bd,Iu.prototype.argPackAdvance=8,Iu.prototype.readValueFromPointer=ai,Iu.prototype.deleteObject=Ud,Iu.prototype.fromWireType=cc}function Iu(b,Y,se,fe,Pe,ze,Ke,$e,it,mt,Yt){this.name=b,this.registeredClass=Y,this.isReference=se,this.isConst=fe,this.isSmartPointer=Pe,this.pointeeType=ze,this.sharingPolicy=Ke,this.rawGetPointee=$e,this.rawConstructor=it,this.rawShare=mt,this.rawDestructor=Yt,!Pe&&Y.baseClass===void 0?fe?(this.toWireType=Md,this.destructorFunction=null):(this.toWireType=xd,this.destructorFunction=null):this.toWireType=Qc}function iI(b,Y,se){te.hasOwnProperty(b)||Wc("Replacing nonexistant public symbol"),te[b].overloadTable!==void 0&&se!==void 0?te[b].overloadTable[se]=Y:(te[b]=Y,te[b].argCount=se)}var Fd=(b,Y,se)=>{var fe=te["dynCall_"+b];return se&&se.length?fe.apply(null,[Y].concat(se)):fe.call(null,Y)},Gd=(b,Y,se)=>{if(b.includes("j"))return Fd(b,Y,se);var fe=Su(Y).apply(null,se);return fe},_d=(b,Y)=>{var se=[];return function(){return se.length=0,Object.assign(se,arguments),Gd(b,Y,se)}};function Bs(b,Y){b=Os(b);function se(){return b.includes("j")?_d(b,Y):Su(Y)}var fe=se();return typeof fe!="function"&&ol(`unknown function pointer with signature ${b}: ${Y}`),fe}function Vd(b,Y){var se=qc(Y,function(fe){this.name=Y,this.message=fe;var Pe=new Error(fe).stack;Pe!==void 0&&(this.stack=this.toString()+`
`+Pe.replace(/^Error(:[^\n]*)?\n/,""))});return se.prototype=Object.create(b.prototype),se.prototype.constructor=se,se.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},se}var oI=void 0;function cI(b){var Y=l5(b),se=Os(Y);return Fi(Y),se}function hc(b,Y){var se=[],fe={};function Pe(ze){if(!fe[ze]&&!xs[ze]){if(Vc[ze]){Vc[ze].forEach(Pe);return}se.push(ze),fe[ze]=!0}}throw Y.forEach(Pe),new oI(`${b}: `+se.map(cI).join([", "]))}function Wd(b,Y,se,fe,Pe,ze,Ke,$e,it,mt,Yt,cn,Zt){b>>>=0,Y>>>=0,se>>>=0,fe>>>=0,Pe>>>=0,ze>>>=0,Ke>>>=0,$e>>>=0,it>>>=0,mt>>>=0,Yt>>>=0,cn>>>=0,Zt>>>=0,Yt=Os(Yt),ze=Bs(Pe,ze),$e&&($e=Bs(Ke,$e)),mt&&(mt=Bs(it,mt)),Zt=Bs(cn,Zt);var sn=kc(Yt);uI(sn,function(){hc(`Cannot construct ${Yt} due to unbound types`,[fe])}),Ou([b,Y,se],fe?[fe]:[],function(Cn){Cn=Cn[0];var Tl,Rl;fe?(Tl=Cn.registeredClass,Rl=Tl.instancePrototype):Rl=Ju.prototype;var Fl=qc(sn,function(){if(Object.getPrototypeOf(this)!==xt)throw new Zu("Use 'new' to construct "+Yt);if(rn.constructor_body===void 0)throw new Zu(Yt+" has no accessible constructor");var ns=rn.constructor_body[arguments.length];if(ns===void 0)throw new Zu(`Tried to invoke ctor of ${Yt} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(rn.constructor_body).toString()}) parameters instead!`);return ns.apply(this,arguments)}),xt=Object.create(Rl,{constructor:{value:Fl}});Fl.prototype=xt;var rn=new Cd(Yt,Fl,xt,Zt,Tl,ze,$e,mt);rn.baseClass&&(rn.baseClass.__derivedClasses===void 0&&(rn.baseClass.__derivedClasses=[]),rn.baseClass.__derivedClasses.push(rn));var Vs=new Iu(Yt,rn,!0,!1,!1),Cl=new Iu(Yt+"*",rn,!1,!1,!1),vu=new Iu(Yt+" const*",rn,!1,!0,!1);return ic[b]={pointerType:Cl,constPointerType:vu},iI(sn,Fl),[Vs,Cl,vu]})}function $c(b,Y){for(var se=[],fe=0;fe<b;fe++)se.push(Z()[Y+fe*4>>>2]);return se}function jd(b,Y){if(!(b instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof b} which is not a function`);var se=qc(b.name||"unknownFunctionName",function(){});se.prototype=b.prototype;var fe=new se,Pe=b.apply(fe,Y);return Pe instanceof Object?Pe:fe}function Zc(b,Y,se,fe,Pe,ze){var Ke=Y.length;Ke<2&&ol("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var $e=Y[1]!==null&&se!==null,it=!1,mt=1;mt<Y.length;++mt)if(Y[mt]!==null&&Y[mt].destructorFunction===void 0){it=!0;break}for(var Yt=Y[0].name!=="void",cn="",Zt="",mt=0;mt<Ke-2;++mt)cn+=(mt!==0?", ":"")+"arg"+mt,Zt+=(mt!==0?", ":"")+"arg"+mt+"Wired";var sn=`
        return function ${kc(b)}(${cn}) {
        if (arguments.length !== ${Ke-2}) {
          throwBindingError('function ${b} called with ${arguments.length} arguments, expected ${Ke-2} args!');
        }`;it&&(sn+=`var destructors = [];
`);var Cn=it?"destructors":"null",Tl=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],Rl=[ol,fe,Pe,$u,Y[0],Y[1]];$e&&(sn+="var thisWired = classParam.toWireType("+Cn+`, this);
`);for(var mt=0;mt<Ke-2;++mt)sn+="var arg"+mt+"Wired = argType"+mt+".toWireType("+Cn+", arg"+mt+"); // "+Y[mt+2].name+`
`,Tl.push("argType"+mt),Rl.push(Y[mt+2]);if($e&&(Zt="thisWired"+(Zt.length>0?", ":"")+Zt),sn+=(Yt||ze?"var rv = ":"")+"invoker(fn"+(Zt.length>0?", ":"")+Zt+`);
`,it)sn+=`runDestructors(destructors);
`;else for(var mt=$e?1:2;mt<Y.length;++mt){var Fl=mt===1?"thisWired":"arg"+(mt-2)+"Wired";Y[mt].destructorFunction!==null&&(sn+=Fl+"_dtor("+Fl+"); // "+Y[mt].name+`
`,Tl.push(Fl+"_dtor"),Rl.push(Y[mt].destructorFunction))}return Yt&&(sn+=`var ret = retType.fromWireType(rv);
return ret;
`),sn+=`}
`,Tl.push(sn),jd(Function,Tl).apply(null,Rl)}function Bi(b,Y,se,fe,Pe,ze){b>>>=0,se>>>=0,fe>>>=0,Pe>>>=0,ze>>>=0;var Ke=$c(Y,se);Pe=Bs(fe,Pe),Ou([],[b],function($e){$e=$e[0];var it=`constructor ${$e.name}`;if($e.registeredClass.constructor_body===void 0&&($e.registeredClass.constructor_body=[]),$e.registeredClass.constructor_body[Y-1]!==void 0)throw new Zu(`Cannot register multiple constructors with identical number of parameters (${Y-1}) for class '${$e.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return $e.registeredClass.constructor_body[Y-1]=()=>{hc(`Cannot construct ${$e.name} due to unbound types`,Ke)},Ou([],Ke,function(mt){return mt.splice(1,0,null),$e.registeredClass.constructor_body[Y-1]=Zc(it,mt,null,Pe,ze),[]}),[]})}function Yd(b,Y,se,fe,Pe,ze,Ke,$e,it){b>>>=0,Y>>>=0,fe>>>=0,Pe>>>=0,ze>>>=0,Ke>>>=0;var mt=$c(se,fe);Y=Os(Y),ze=Bs(Pe,ze),Ou([],[b],function(Yt){Yt=Yt[0];var cn=`${Yt.name}.${Y}`;Y.startsWith("@@")&&(Y=Symbol[Y.substring(2)]),$e&&Yt.registeredClass.pureVirtualFunctions.push(Y);function Zt(){hc(`Cannot call ${cn} due to unbound types`,mt)}var sn=Yt.registeredClass.instancePrototype,Cn=sn[Y];return Cn===void 0||Cn.overloadTable===void 0&&Cn.className!==Yt.name&&Cn.argCount===se-2?(Zt.argCount=se-2,Zt.className=Yt.name,sn[Y]=Zt):(rI(sn,Y,cn),sn[Y].overloadTable[se-2]=Zt),Ou([],mt,function(Tl){var Rl=Zc(cn,Tl,Yt,ze,Ke,it);return sn[Y].overloadTable===void 0?(Rl.argCount=se-2,sn[Y]=Rl):sn[Y].overloadTable[se-2]=Rl,[]}),[]})}function zd(){Object.assign(hI.prototype,{get(b){return this.allocated[b]},has(b){return this.allocated[b]!==void 0},allocate(b){var Y=this.freelist.pop()||this.allocated.length;return this.allocated[Y]=b,Y},free(b){this.allocated[b]=void 0,this.freelist.push(b)}})}function hI(){this.allocated=[void 0],this.freelist=[]}var Zs=new hI;function fc(b){b>>>=0,b>=Zs.reserved&&--Zs.get(b).refcount===0&&Zs.free(b)}function kd(){for(var b=0,Y=Zs.reserved;Y<Zs.allocated.length;++Y)Zs.allocated[Y]!==void 0&&++b;return b}function qd(){Zs.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),Zs.reserved=Zs.allocated.length,te.count_emval_handles=kd}var Ul={toValue:b=>(b||ol("Cannot use deleted val. handle = "+b),Zs.get(b).value),toHandle:b=>{switch(b){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return Zs.allocate({refcount:1,value:b})}}};function Kd(b,Y){b>>>=0,Y>>>=0,Y=Os(Y),gu(b,{name:Y,fromWireType:function(se){var fe=Ul.toValue(se);return fc(se),fe},toWireType:function(se,fe){return Ul.toHandle(fe)},argPackAdvance:8,readValueFromPointer:ai,destructorFunction:null})}function Jc(b){if(b===null)return"null";var Y=typeof b;return Y==="object"||Y==="array"||Y==="function"?b.toString():""+b}function Qd(b,Y){switch(Y){case 2:return function(se){return this.fromWireType(v()[se>>>2])};case 3:return function(se){return this.fromWireType(ee()[se>>>3])};default:throw new TypeError("Unknown float type: "+b)}}function $d(b,Y,se){b>>>=0,Y>>>=0,se>>>=0;var fe=ac(se);Y=Os(Y),gu(b,{name:Y,fromWireType:function(Pe){return Pe},toWireType:function(Pe,ze){return ze},argPackAdvance:8,readValueFromPointer:Qd(Y,fe),destructorFunction:null})}function Xc(b,Y,se,fe,Pe,ze,Ke){b>>>=0,se>>>=0,fe>>>=0,Pe>>>=0,ze>>>=0;var $e=$c(Y,se);b=Os(b),Pe=Bs(fe,Pe),uI(b,function(){hc(`Cannot call ${b} due to unbound types`,$e)},Y-1),Ou([],$e,function(it){var mt=[it[0],null].concat(it.slice(1));return iI(b,Zc(b,mt,null,Pe,ze,Ke),Y-1),[]})}function Zd(b,Y,se){switch(Y){case 0:return se?function(Pe){return y()[Pe>>>0]}:function(Pe){return S()[Pe>>>0]};case 1:return se?function(Pe){return g()[Pe>>>1]}:function(Pe){return G()[Pe>>>1]};case 2:return se?function(Pe){return V()[Pe>>>2]}:function(Pe){return Z()[Pe>>>2]};default:throw new TypeError("Unknown integer type: "+b)}}function Ui(b,Y,se,fe,Pe){b>>>=0,Y>>>=0,se>>>=0,Y=Os(Y);var ze=ac(se),Ke=cn=>cn;if(fe===0){var $e=32-8*se;Ke=cn=>cn<<$e>>>$e}var it=Y.includes("unsigned"),mt=(cn,Zt)=>{},Yt;it?Yt=function(cn,Zt){return mt(Zt,this.name),Zt>>>0}:Yt=function(cn,Zt){return mt(Zt,this.name),Zt},gu(b,{name:Y,fromWireType:Ke,toWireType:Yt,argPackAdvance:8,readValueFromPointer:Zd(Y,ze,fe!==0),destructorFunction:null})}function Jd(b,Y,se){b>>>=0,se>>>=0;var fe=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],Pe=fe[Y];function ze(Ke){Ke=Ke>>2;var $e=Z(),it=$e[Ke>>>0],mt=$e[Ke+1>>>0];return new Pe($e.buffer,mt,it)}se=Os(se),gu(b,{name:se,fromWireType:ze,argPackAdvance:8,readValueFromPointer:ze},{ignoreDuplicateRegistrations:!0})}var yl=(b,Y,se)=>A3(b,S(),Y,se);function Xd(b,Y){b>>>=0,Y>>>=0,Y=Os(Y);var se=Y==="std::string";gu(b,{name:Y,fromWireType:function(fe){var Pe=Z()[fe>>>2],ze=fe+4,Ke;if(se)for(var $e=ze,it=0;it<=Pe;++it){var mt=ze+it;if(it==Pe||S()[mt>>>0]==0){var Yt=mt-$e,cn=pt($e,Yt);Ke===void 0?Ke=cn:(Ke+="\0",Ke+=cn),$e=mt+1}}else{for(var Zt=new Array(Pe),it=0;it<Pe;++it)Zt[it]=String.fromCharCode(S()[ze+it>>>0]);Ke=Zt.join("")}return Fi(fe),Ke},toWireType:function(fe,Pe){Pe instanceof ArrayBuffer&&(Pe=new Uint8Array(Pe));var ze,Ke=typeof Pe=="string";Ke||Pe instanceof Uint8Array||Pe instanceof Uint8ClampedArray||Pe instanceof Int8Array||ol("Cannot pass non-string to std::string"),se&&Ke?ze=Id(Pe):ze=Pe.length;var $e=b3(4+ze+1),it=$e+4;if(Z()[$e>>>2]=ze,se&&Ke)yl(Pe,it,ze+1);else if(Ke)for(var mt=0;mt<ze;++mt){var Yt=Pe.charCodeAt(mt);Yt>255&&(Fi(it),ol("String has UTF-16 code units that do not fit in 8 bits")),S()[it+mt>>>0]=Yt}else for(var mt=0;mt<ze;++mt)S()[it+mt>>>0]=Pe[mt];return fe!==null&&fe.push(Fi,$e),$e},argPackAdvance:8,readValueFromPointer:ai,destructorFunction:function(fe){Fi(fe)}})}var vc=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,bu=(b,Y)=>{for(var se=b,fe=se>>1,Pe=fe+Y/2;!(fe>=Pe)&&G()[fe>>>0];)++fe;if(se=fe<<1,se-b>32&&vc)return vc.decode(S().slice(b,se));for(var ze="",Ke=0;!(Ke>=Y/2);++Ke){var $e=g()[b+Ke*2>>>1];if($e==0)break;ze+=String.fromCharCode($e)}return ze},eh=(b,Y,se)=>{if(se===void 0&&(se=2147483647),se<2)return 0;se-=2;for(var fe=Y,Pe=se<b.length*2?se/2:b.length,ze=0;ze<Pe;++ze){var Ke=b.charCodeAt(ze);g()[Y>>>1]=Ke,Y+=2}return g()[Y>>>1]=0,Y-fe},Ic=b=>b.length*2,vd=(b,Y)=>{for(var se=0,fe="";!(se>=Y/4);){var Pe=V()[b+se*4>>>2];if(Pe==0)break;if(++se,Pe>=65536){var ze=Pe-65536;fe+=String.fromCharCode(55296|ze>>10,56320|ze&1023)}else fe+=String.fromCharCode(Pe)}return fe},ka=(b,Y,se)=>{if(Y>>>=0,se===void 0&&(se=2147483647),se<4)return 0;for(var fe=Y,Pe=fe+se-4,ze=0;ze<b.length;++ze){var Ke=b.charCodeAt(ze);if(Ke>=55296&&Ke<=57343){var $e=b.charCodeAt(++ze);Ke=65536+((Ke&1023)<<10)|$e&1023}if(V()[Y>>>2]=Ke,Y+=4,Y+4>Pe)break}return V()[Y>>>2]=0,Y-fe},fI=b=>{for(var Y=0,se=0;se<b.length;++se){var fe=b.charCodeAt(se);fe>=55296&&fe<=57343&&++se,Y+=4}return Y},kn=function(b,Y,se){b>>>=0,Y>>>=0,se>>>=0,se=Os(se);var fe,Pe,ze,Ke,$e;Y===2?(fe=bu,Pe=eh,Ke=Ic,ze=()=>G(),$e=1):Y===4&&(fe=vd,Pe=ka,Ke=fI,ze=()=>Z(),$e=2),gu(b,{name:se,fromWireType:function(it){for(var mt=Z()[it>>>2],Yt=ze(),cn,Zt=it+4,sn=0;sn<=mt;++sn){var Cn=it+4+sn*Y;if(sn==mt||Yt[Cn>>>$e]==0){var Tl=Cn-Zt,Rl=fe(Zt,Tl);cn===void 0?cn=Rl:(cn+="\0",cn+=Rl),Zt=Cn+Y}}return Fi(it),cn},toWireType:function(it,mt){typeof mt!="string"&&ol(`Cannot pass non-string to C++ string type ${se}`);var Yt=Ke(mt),cn=b3(4+Yt+Y);return Z()[cn>>>2]=Yt>>$e,Pe(mt,cn+4,Yt+Y),it!==null&&it.push(Fi,cn),cn},argPackAdvance:8,readValueFromPointer:ai,destructorFunction:function(it){Fi(it)}})};function e1(b,Y,se,fe,Pe,ze){b>>>=0,Y>>>=0,se>>>=0,fe>>>=0,Pe>>>=0,ze>>>=0,Ls[b]={name:Os(Y),rawConstructor:Bs(se,fe),rawDestructor:Bs(Pe,ze),elements:[]}}function t1(b,Y,se,fe,Pe,ze,Ke,$e,it){b>>>=0,Y>>>=0,se>>>=0,fe>>>=0,Pe>>>=0,ze>>>=0,Ke>>>=0,$e>>>=0,it>>>=0,Ls[b].elements.push({getterReturnType:Y,getter:Bs(se,fe),getterContext:Pe,setterArgumentType:ze,setter:Bs(Ke,$e),setterContext:it})}function n1(b,Y,se,fe,Pe,ze){b>>>=0,Y>>>=0,se>>>=0,fe>>>=0,Pe>>>=0,ze>>>=0,uc[b]={name:Os(Y),rawConstructor:Bs(se,fe),rawDestructor:Bs(Pe,ze),fields:[]}}function l1(b,Y,se,fe,Pe,ze,Ke,$e,it,mt){b>>>=0,Y>>>=0,se>>>=0,fe>>>=0,Pe>>>=0,ze>>>=0,Ke>>>=0,$e>>>=0,it>>>=0,mt>>>=0,uc[b].fields.push({fieldName:Os(Y),getterReturnType:se,getter:Bs(fe,Pe),getterContext:ze,setterArgumentType:Ke,setter:Bs($e,it),setterContext:mt})}function s1(b,Y){b>>>=0,Y>>>=0,Y=Os(Y),gu(b,{isVoid:!0,name:Y,argPackAdvance:0,fromWireType:function(){},toWireType:function(se,fe){}})}var th=!0,Me=()=>th,Xu=()=>{if(!Hl())try{Ve?g0(Ft):jn(Ft)}catch(b){el(b)}},r1=b=>{if(!Ct)try{b(),Xu()}catch(Y){el(Y)}};function nh(b){if(b>>>=0,typeof Atomics.waitAsync=="function"){var Y=Atomics.waitAsync(V(),b>>2,b);Y.value.then(dc);var se=b+128;Atomics.store(V(),se>>2,1)}}te.__emscripten_thread_mailbox_await=nh;var dc=function(){var b=P3();b&&(nh(b),r1(()=>u5()))};te.checkMailbox=dc;var u1=function(b,Y,se){if(b>>>=0,Y>>>=0,b==Y)setTimeout(()=>dc());else if(Ve)postMessage({targetThread:b,cmd:"checkMailbox"});else{var fe=$t.pthreads[b];if(!fe)return;fe.postMessage({cmd:"checkMailbox"})}};function a1(b,Y,se){return-1}function i1(b){}function lh(b,Y){var se=xs[b];return se===void 0&&ol(Y+" has unknown type "+cI(b)),se}function o1(b,Y,se){b>>>=0,Y>>>=0,se>>>=0,b=Ul.toValue(b),Y=lh(Y,"emval::as");var fe=[],Pe=Ul.toHandle(fe);return Z()[se>>>2]=Pe,Y.toWireType(fe,b)}function c1(b,Y){for(var se=new Array(b),fe=0;fe<b;++fe)se[fe]=lh(Z()[Y+fe*4>>>2],"parameter "+fe);return se}function h1(b,Y,se,fe){b>>>=0,se>>>=0,fe>>>=0,b=Ul.toValue(b);for(var Pe=c1(Y,se),ze=new Array(Y),Ke=0;Ke<Y;++Ke){var $e=Pe[Ke];ze[Ke]=$e.readValueFromPointer(fe),fe+=$e.argPackAdvance}var it=b.apply(void 0,ze);return Ul.toHandle(it)}var II={};function sh(b){var Y=II[b];return Y===void 0?Os(b):Y}function dI(){return typeof globalThis=="object"?globalThis:function(){return Function}()("return this")()}function f1(b){return b>>>=0,b===0?Ul.toHandle(dI()):(b=sh(b),Ul.toHandle(dI()[b]))}function I1(b,Y){return b>>>=0,Y>>>=0,b=Ul.toValue(b),Y=Ul.toValue(Y),Ul.toHandle(b[Y])}function d1(b){b>>>=0,b>4&&(Zs.get(b).refcount+=1)}function yI(b,Y){return b>>>=0,Y>>>=0,b=Ul.toValue(b),Y=Ul.toValue(Y),b instanceof Y}function yc(b){return b>>>=0,b=Ul.toValue(b),typeof b=="number"}function wc(b){return b>>>=0,b=Ul.toValue(b),typeof b=="string"}function y1(){return Ul.toHandle([])}function Ec(b){return b>>>=0,Ul.toHandle(sh(b))}function wI(){return Ul.toHandle({})}function Cu(b){b>>>=0;var Y=Ul.toValue(b);$u(Y),fc(b)}function EI(b,Y,se){b>>>=0,Y>>>=0,se>>>=0,b=Ul.toValue(b),Y=Ul.toValue(Y),se=Ul.toValue(se),b[Y]=se}function w1(b,Y){b>>>=0,Y>>>=0,b=lh(b,"_emval_take_value");var se=b.readValueFromPointer(Y);return Ul.toHandle(se)}function Tc(b,Y,se){var fe=Lu(b,Y);se>>>=0;var Pe=new Date(fe*1e3);V()[se>>>2]=Pe.getUTCSeconds(),V()[se+4>>>2]=Pe.getUTCMinutes(),V()[se+8>>>2]=Pe.getUTCHours(),V()[se+12>>>2]=Pe.getUTCDate(),V()[se+16>>>2]=Pe.getUTCMonth(),V()[se+20>>>2]=Pe.getUTCFullYear()-1900,V()[se+24>>>2]=Pe.getUTCDay();var ze=Date.UTC(Pe.getUTCFullYear(),0,1,0,0,0,0),Ke=(Pe.getTime()-ze)/(1e3*60*60*24)|0;V()[se+28>>>2]=Ke}var oi=b=>b%4===0&&(b%100!==0||b%400===0),H=[0,31,60,91,121,152,182,213,244,274,305,335],k=[0,31,59,90,120,151,181,212,243,273,304,334],ue=b=>{var Y=oi(b.getFullYear()),se=Y?H:k,fe=se[b.getMonth()]+b.getDate()-1;return fe};function de(b,Y,se){var fe=Lu(b,Y);se>>>=0;var Pe=new Date(fe*1e3);V()[se>>>2]=Pe.getSeconds(),V()[se+4>>>2]=Pe.getMinutes(),V()[se+8>>>2]=Pe.getHours(),V()[se+12>>>2]=Pe.getDate(),V()[se+16>>>2]=Pe.getMonth(),V()[se+20>>>2]=Pe.getFullYear()-1900,V()[se+24>>>2]=Pe.getDay();var ze=ue(Pe)|0;V()[se+28>>>2]=ze,V()[se+36>>>2]=-(Pe.getTimezoneOffset()*60);var Ke=new Date(Pe.getFullYear(),0,1),$e=new Date(Pe.getFullYear(),6,1).getTimezoneOffset(),it=Ke.getTimezoneOffset(),mt=($e!=it&&Pe.getTimezoneOffset()==Math.min(it,$e))|0;V()[se+32>>>2]=mt}var Ce=b=>{var Y=Id(b)+1,se=b3(Y);return se&&yl(b,se,Y),se};function qe(b,Y,se){b>>>=0,Y>>>=0,se>>>=0;var fe=new Date().getFullYear(),Pe=new Date(fe,0,1),ze=new Date(fe,6,1),Ke=Pe.getTimezoneOffset(),$e=ze.getTimezoneOffset(),it=Math.max(Ke,$e);Z()[b>>>2]=it*60,V()[Y>>>2]=+(Ke!=$e);function mt(Cn){var Tl=Cn.toTimeString().match(/\(([A-Za-z ]+)\)$/);return Tl?Tl[1]:"GMT"}var Yt=mt(Pe),cn=mt(ze),Zt=Ce(Yt),sn=Ce(cn);$e<Ke?(Z()[se>>>2]=Zt,Z()[se+4>>>2]=sn):(Z()[se>>>2]=sn,Z()[se+4>>>2]=Zt)}var Ze=()=>{Hn("")};function Je(){}function ot(){return Date.now()}var Et=()=>{wn+=1},_t=()=>{throw Et(),"unwind"},ln;ln=()=>performance.timeOrigin+performance.now();var Qt=b=>{var Y=i5(),se=b();return P0(Y),se},kt=function(b,Y){var se=arguments.length-2,fe=arguments;return Qt(()=>{for(var Pe=se,ze=o5(Pe*8),Ke=ze>>3,$e=0;$e<se;$e++){var it=fe[2+$e];ee()[Ke+$e>>>0]=it}return r5(b,Pe,ze,Y)})},Rn=[];function ul(b,Y,se,fe){Y>>>=0,fe>>>=0,$t.currentProxiedOperationCallerThread=Y,Rn.length=se;for(var Pe=fe>>3,ze=0;ze<se;ze++)Rn[ze]=ee()[Pe+ze>>>0];var Ke=B2[b];return Ke.apply(null,Rn)}var il=()=>4294901760,wl=b=>{var Y=It.buffer,se=b-Y.byteLength+65535>>>16;try{return It.grow(se),yn(),1}catch{}};function Mt(b){b>>>=0;var Y=S().length;if(b<=Y)return!1;var se=il();if(b>se)return!1;for(var fe=(it,mt)=>it+(mt-it%mt)%mt,Pe=1;Pe<=4;Pe*=2){var ze=Y*(1+.2/Pe);ze=Math.min(ze,b+100663296);var Ke=Math.min(se,fe(Math.max(b,ze),65536)),$e=wl(Ke);if($e)return!0}return!1}var un={},Es=()=>ie||"./this.program",cl=()=>{if(!cl.strings){var b=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",Y={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:b,_:Es()};for(var se in un)un[se]===void 0?delete Y[se]:Y[se]=un[se];var fe=[];for(var se in Y)fe.push(`${se}=${Y[se]}`);cl.strings=fe}return cl.strings},Js=(b,Y)=>{for(var se=0;se<b.length;++se)y()[Y++>>>0]=b.charCodeAt(se);y()[Y>>>0]=0};function es(b,Y){if(Ve)return kt(3,1,b,Y);b>>>=0,Y>>>=0;var se=0;return cl().forEach(function(fe,Pe){var ze=Y+se;Z()[b+Pe*4>>>2]=ze,Js(fe,ze),se+=fe.length+1}),0}function Ky(b,Y){if(Ve)return kt(4,1,b,Y);b>>>=0,Y>>>=0;var se=cl();Z()[b>>>2]=se.length;var fe=0;return se.forEach(function(Pe){fe+=Pe.length+1}),Z()[Y>>>2]=fe,0}function Qy(b){if(Ve)return kt(5,1,b);try{var Y=an.getStreamFromFD(b);return Ie.close(Y),0}catch(se){if(typeof Ie>"u"||se.name!=="ErrnoError")throw se;return se.errno}}function $y(b,Y){if(Ve)return kt(6,1,b,Y);Y>>>=0;try{var se=0,fe=0,Pe=0,ze=an.getStreamFromFD(b),Ke=ze.tty?2:Ie.isDir(ze.mode)?3:Ie.isLink(ze.mode)?7:4;return y()[Y>>>0]=Ke,g()[Y+2>>>1]=Pe,En=[se>>>0,(hn=se,+Math.abs(hn)>=1?hn>0?+Math.floor(hn/4294967296)>>>0:~~+Math.ceil((hn-+(~~hn>>>0))/4294967296)>>>0:0)],V()[Y+8>>>2]=En[0],V()[Y+12>>>2]=En[1],En=[fe>>>0,(hn=fe,+Math.abs(hn)>=1?hn>0?+Math.floor(hn/4294967296)>>>0:~~+Math.ceil((hn-+(~~hn>>>0))/4294967296)>>>0:0)],V()[Y+16>>>2]=En[0],V()[Y+20>>>2]=En[1],0}catch($e){if(typeof Ie>"u"||$e.name!=="ErrnoError")throw $e;return $e.errno}}var O3=(b,Y,se,fe)=>{for(var Pe=0,ze=0;ze<se;ze++){var Ke=Z()[Y>>>2],$e=Z()[Y+4>>>2];Y+=8;var it=Ie.read(b,y(),Ke,$e,fe);if(it<0)return-1;if(Pe+=it,it<$e)break}return Pe};function Zy(b,Y,se,fe){if(Ve)return kt(7,1,b,Y,se,fe);Y>>>=0,se>>>=0,fe>>>=0;try{var Pe=an.getStreamFromFD(b),ze=O3(Pe,Y,se);return Z()[fe>>>2]=ze,0}catch(Ke){if(typeof Ie>"u"||Ke.name!=="ErrnoError")throw Ke;return Ke.errno}}function Jy(b,Y,se,fe,Pe){if(Ve)return kt(8,1,b,Y,se,fe,Pe);var ze=Lu(Y,se);Pe>>>=0;try{if(isNaN(ze))return 61;var Ke=an.getStreamFromFD(b);return Ie.llseek(Ke,ze,fe),En=[Ke.position>>>0,(hn=Ke.position,+Math.abs(hn)>=1?hn>0?+Math.floor(hn/4294967296)>>>0:~~+Math.ceil((hn-+(~~hn>>>0))/4294967296)>>>0:0)],V()[Pe>>>2]=En[0],V()[Pe+4>>>2]=En[1],Ke.getdents&&ze===0&&fe===0&&(Ke.getdents=null),0}catch($e){if(typeof Ie>"u"||$e.name!=="ErrnoError")throw $e;return $e.errno}}var Xy=(b,Y,se,fe)=>{for(var Pe=0,ze=0;ze<se;ze++){var Ke=Z()[Y>>>2],$e=Z()[Y+4>>>2];Y+=8;var it=Ie.write(b,y(),Ke,$e,fe);if(it<0)return-1;Pe+=it}return Pe};function vy(b,Y,se,fe){if(Ve)return kt(9,1,b,Y,se,fe);Y>>>=0,se>>>=0,fe>>>=0;try{var Pe=an.getStreamFromFD(b),ze=Xy(Pe,Y,se);return Z()[fe>>>2]=ze,0}catch(Ke){if(typeof Ie>"u"||Ke.name!=="ErrnoError")throw Ke;return Ke.errno}}var C2=(b,Y)=>{for(var se=0,fe=0;fe<=Y;se+=b[fe++]);return se},e5=[31,29,31,30,31,30,31,31,30,31,30,31],t5=[31,28,31,30,31,30,31,31,30,31,30,31],M2=(b,Y)=>{for(var se=new Date(b.getTime());Y>0;){var fe=oi(se.getFullYear()),Pe=se.getMonth(),ze=(fe?e5:t5)[Pe];if(Y>ze-se.getDate())Y-=ze-se.getDate()+1,se.setDate(1),Pe<11?se.setMonth(Pe+1):(se.setMonth(0),se.setFullYear(se.getFullYear()+1));else return se.setDate(se.getDate()+Y),se}return se},x2=(b,Y)=>{y().set(b,Y>>>0)};function H2(b,Y,se,fe){b>>>=0,Y>>>=0,se>>>=0,fe>>>=0;var Pe=V()[fe+40>>>2],ze={tm_sec:V()[fe>>>2],tm_min:V()[fe+4>>>2],tm_hour:V()[fe+8>>>2],tm_mday:V()[fe+12>>>2],tm_mon:V()[fe+16>>>2],tm_year:V()[fe+20>>>2],tm_wday:V()[fe+24>>>2],tm_yday:V()[fe+28>>>2],tm_isdst:V()[fe+32>>>2],tm_gmtoff:V()[fe+36>>>2],tm_zone:Pe?pt(Pe):""},Ke=pt(se),$e={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var it in $e)Ke=Ke.replace(new RegExp(it,"g"),$e[it]);var mt=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Yt=["January","February","March","April","May","June","July","August","September","October","November","December"];function cn(xt,rn,Vs){for(var Cl=typeof xt=="number"?xt.toString():xt||"";Cl.length<rn;)Cl=Vs[0]+Cl;return Cl}function Zt(xt,rn){return cn(xt,rn,"0")}function sn(xt,rn){function Vs(vu){return vu<0?-1:vu>0?1:0}var Cl;return(Cl=Vs(xt.getFullYear()-rn.getFullYear()))===0&&(Cl=Vs(xt.getMonth()-rn.getMonth()))===0&&(Cl=Vs(xt.getDate()-rn.getDate())),Cl}function Cn(xt){switch(xt.getDay()){case 0:return new Date(xt.getFullYear()-1,11,29);case 1:return xt;case 2:return new Date(xt.getFullYear(),0,3);case 3:return new Date(xt.getFullYear(),0,2);case 4:return new Date(xt.getFullYear(),0,1);case 5:return new Date(xt.getFullYear()-1,11,31);case 6:return new Date(xt.getFullYear()-1,11,30)}}function Tl(xt){var rn=M2(new Date(xt.tm_year+1900,0,1),xt.tm_yday),Vs=new Date(rn.getFullYear(),0,4),Cl=new Date(rn.getFullYear()+1,0,4),vu=Cn(Vs),ns=Cn(Cl);return sn(vu,rn)<=0?sn(ns,rn)<=0?rn.getFullYear()+1:rn.getFullYear():rn.getFullYear()-1}var Rl={"%a":xt=>mt[xt.tm_wday].substring(0,3),"%A":xt=>mt[xt.tm_wday],"%b":xt=>Yt[xt.tm_mon].substring(0,3),"%B":xt=>Yt[xt.tm_mon],"%C":xt=>{var rn=xt.tm_year+1900;return Zt(rn/100|0,2)},"%d":xt=>Zt(xt.tm_mday,2),"%e":xt=>cn(xt.tm_mday,2," "),"%g":xt=>Tl(xt).toString().substring(2),"%G":xt=>Tl(xt),"%H":xt=>Zt(xt.tm_hour,2),"%I":xt=>{var rn=xt.tm_hour;return rn==0?rn=12:rn>12&&(rn-=12),Zt(rn,2)},"%j":xt=>Zt(xt.tm_mday+C2(oi(xt.tm_year+1900)?e5:t5,xt.tm_mon-1),3),"%m":xt=>Zt(xt.tm_mon+1,2),"%M":xt=>Zt(xt.tm_min,2),"%n":()=>`
`,"%p":xt=>xt.tm_hour>=0&&xt.tm_hour<12?"AM":"PM","%S":xt=>Zt(xt.tm_sec,2),"%t":()=>"	","%u":xt=>xt.tm_wday||7,"%U":xt=>{var rn=xt.tm_yday+7-xt.tm_wday;return Zt(Math.floor(rn/7),2)},"%V":xt=>{var rn=Math.floor((xt.tm_yday+7-(xt.tm_wday+6)%7)/7);if((xt.tm_wday+371-xt.tm_yday-2)%7<=2&&rn++,rn){if(rn==53){var Cl=(xt.tm_wday+371-xt.tm_yday)%7;Cl!=4&&(Cl!=3||!oi(xt.tm_year))&&(rn=1)}}else{rn=52;var Vs=(xt.tm_wday+7-xt.tm_yday-1)%7;(Vs==4||Vs==5&&oi(xt.tm_year%400-1))&&rn++}return Zt(rn,2)},"%w":xt=>xt.tm_wday,"%W":xt=>{var rn=xt.tm_yday+7-(xt.tm_wday+6)%7;return Zt(Math.floor(rn/7),2)},"%y":xt=>(xt.tm_year+1900).toString().substring(2),"%Y":xt=>xt.tm_year+1900,"%z":xt=>{var rn=xt.tm_gmtoff,Vs=rn>=0;return rn=Math.abs(rn)/60,rn=rn/60*100+rn%60,(Vs?"+":"-")+("0000"+rn).slice(-4)},"%Z":xt=>xt.tm_zone,"%%":()=>"%"};Ke=Ke.replace(/%%/g,"\0\0");for(var it in Rl)Ke.includes(it)&&(Ke=Ke.replace(new RegExp(it,"g"),Rl[it](ze)));Ke=Ke.replace(/\0\0/g,"%");var Fl=rc(Ke,!1);return Fl.length>Y?0:(x2(Fl,b),Fl.length-1)}function n5(b,Y,se,fe,Pe){return b>>>=0,Y>>>=0,se>>>=0,fe>>>=0,H2(b,Y,se,fe)}$t.init();var TI=function(b,Y,se,fe){b||(b=this),this.parent=b,this.mount=b.mount,this.mounted=null,this.id=Ie.nextInode++,this.name=Y,this.mode=se,this.node_ops={},this.stream_ops={},this.rdev=fe},E1=365,g3=146;Object.defineProperties(TI.prototype,{read:{get:function(){return(this.mode&E1)===E1},set:function(b){b?this.mode|=E1:this.mode&=~E1}},write:{get:function(){return(this.mode&g3)===g3},set:function(b){b?this.mode|=g3:this.mode&=~g3}},isFolder:{get:function(){return Ie.isDir(this.mode)}},isDevice:{get:function(){return Ie.isChrdev(this.mode)}}}),Ie.FSNode=TI,Ie.createPreloadedFile=ke,Ie.staticInit(),wd=te.InternalError=class extends Error{constructor(Y){super(Y),this.name="InternalError"}},vf(),Zu=te.BindingError=class extends Error{constructor(Y){super(Y),this.name="BindingError"}},gd(),zc(),aI(),oI=te.UnboundTypeError=Vd(Error,"UnboundTypeError"),zd(),qd();var B2=[null,Nn,fu,es,Ky,Qy,$y,Zy,Jy,vy],L0={g:L3,Y:_c,B:yd,fa:Ed,r:Hs,K:Td,da:pd,q:Wd,p:Bi,c:Yd,ca:Kd,D:$d,d:Xc,t:Ui,l:Jd,E:Xd,y:kn,ga:e1,m:t1,s:n1,f:l1,ea:s1,T:Me,R:u1,W:a1,X:nh,ba:i1,k:o1,x:h1,b:fc,A:f1,i:I1,o:d1,G:yI,z:yc,F:wc,ha:y1,h:Ec,v:wI,j:Cu,n:EI,e:w1,I:Tc,J:de,Q:qe,w:Ze,C:Je,U:ot,aa:_t,u:ln,V:ul,P:Mt,_:es,$:Ky,L:jn,N:Qy,Z:$y,O:Zy,H:Jy,S:vy,a:It||te.wasmMemory,M:n5};gl();var P3=te._pthread_self=()=>(P3=te._pthread_self=St.ja)(),b3=b=>(b3=St.la)(b);te.__emscripten_tls_init=()=>(te.__emscripten_tls_init=St.ma)();var l5=b=>(l5=St.na)(b);te.__embind_initialize_bindings=()=>(te.__embind_initialize_bindings=St.oa)();var s5=te.__emscripten_thread_init=(b,Y,se,fe,Pe,ze)=>(s5=te.__emscripten_thread_init=St.pa)(b,Y,se,fe,Pe,ze);te.__emscripten_thread_crashed=()=>(te.__emscripten_thread_crashed=St.qa)();var r5=(b,Y,se,fe)=>(r5=St.ra)(b,Y,se,fe),Fi=b=>(Fi=St.sa)(b),O0=b=>(O0=St.ta)(b),g0=te.__emscripten_thread_exit=b=>(g0=te.__emscripten_thread_exit=St.ua)(b),u5=te.__emscripten_check_mailbox=()=>(u5=te.__emscripten_check_mailbox=St.va)(),a5=(b,Y)=>(a5=St.wa)(b,Y),i5=()=>(i5=St.xa)(),P0=b=>(P0=St.ya)(b),o5=b=>(o5=St.za)(b),c5=b=>(c5=St.Aa)(b);te.dynCall_jiji=(b,Y,se,fe,Pe)=>(te.dynCall_jiji=St.Ba)(b,Y,se,fe,Pe),te.dynCall_viijii=(b,Y,se,fe,Pe,ze,Ke)=>(te.dynCall_viijii=St.Ca)(b,Y,se,fe,Pe,ze,Ke),te.dynCall_iiiiij=(b,Y,se,fe,Pe,ze,Ke)=>(te.dynCall_iiiiij=St.Da)(b,Y,se,fe,Pe,ze,Ke),te.dynCall_iiiiijj=(b,Y,se,fe,Pe,ze,Ke,$e,it)=>(te.dynCall_iiiiijj=St.Ea)(b,Y,se,fe,Pe,ze,Ke,$e,it),te.dynCall_iiiiiijj=(b,Y,se,fe,Pe,ze,Ke,$e,it,mt)=>(te.dynCall_iiiiiijj=St.Fa)(b,Y,se,fe,Pe,ze,Ke,$e,it,mt);function U2(b){b=Object.assign({},b);var Y=fe=>()=>fe()>>>0,se=fe=>Pe=>fe(Pe)>>>0;return b.pthread_self=Y(b.pthread_self),b.malloc=se(b.malloc),b.__getTypeName=se(b.__getTypeName),b.__errno_location=Y(b.__errno_location),b.stackSave=Y(b.stackSave),b.stackAlloc=se(b.stackAlloc),b}te.keepRuntimeAlive=Hl,te.wasmMemory=It,te.ExitStatus=Jt,te.PThread=$t;var C3;Sn=function b(){C3||M3(),C3||(Sn=b)};function M3(){if(Wt>0)return;if(Ve){he(te),je(),startWorker(te);return}if(sl(),Wt>0)return;function b(){C3||(C3=!0,te.calledRun=!0,!Ct&&(je(),he(te),te.onRuntimeInitialized&&te.onRuntimeInitialized(),We()))}te.setStatus?(te.setStatus("Running..."),setTimeout(function(){setTimeout(function(){te.setStatus("")},1),b()},1)):b()}if(te.preInit)for(typeof te.preInit=="function"&&(te.preInit=[te.preInit]);te.preInit.length>0;)te.preInit.pop()();return M3(),c.ready}})();typeof e=="object"&&typeof l=="object"?l.exports=n:typeof define=="function"&&define.amd&&define([],()=>n)}}),dj=AY({"dist/web-ifc.js"(e,l){var n=(()=>{var t=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0;return function(c={}){var y=c,S,g;y.ready=new Promise((H,k)=>{S=H,g=k});var G=Object.assign({},y),V="./this.program",Z=!0,v="";function ee(H){return y.locateFile?y.locateFile(H,v):v+H}var te,he;typeof document<"u"&&document.currentScript&&(v=document.currentScript.src),t&&(v=t),v.indexOf("blob:")!==0?v=v.substr(0,v.replace(/[?#].*/,"").lastIndexOf("/")+1):v="",te=H=>{var k=new XMLHttpRequest;return k.open("GET",H,!1),k.send(null),k.responseText},he=(H,k,ue)=>{var de=new XMLHttpRequest;de.open("GET",H,!0),de.responseType="arraybuffer",de.onload=()=>{if(de.status==200||de.status==0&&de.response){k(de.response);return}ue()},de.onerror=ue,de.send(null)};var Te=y.print||console.log.bind(console),oe=y.printErr||console.error.bind(console);Object.assign(y,G),G=null,y.arguments&&y.arguments,y.thisProgram&&(V=y.thisProgram),y.quit&&y.quit;var ie;y.wasmBinary&&(ie=y.wasmBinary),y.noExitRuntime,typeof WebAssembly!="object"&&yn("no native wasm support detected");var De,we,Ae=!1;function Ye(H,k){H||yn(k)}var Ve,_e,Xe,ge,Le,ve,st,ft;function et(){var H=De.buffer;y.HEAP8=Ve=new Int8Array(H),y.HEAP16=Xe=new Int16Array(H),y.HEAP32=Le=new Int32Array(H),y.HEAPU8=_e=new Uint8Array(H),y.HEAPU16=ge=new Uint16Array(H),y.HEAPU32=ve=new Uint32Array(H),y.HEAPF32=st=new Float32Array(H),y.HEAPF64=ft=new Float64Array(H)}var at,It=[],St=[],bt=[];function Ct(){if(y.preRun)for(typeof y.preRun=="function"&&(y.preRun=[y.preRun]);y.preRun.length;)Ut(y.preRun.shift());Dt(It)}function Ft(){!y.noFSInit&&!Me.init.initialized&&Me.init(),Me.ignorePermissions=!1,Dt(St)}function Ht(){if(y.postRun)for(typeof y.postRun=="function"&&(y.postRun=[y.postRun]);y.postRun.length;)Bt(y.postRun.shift());Dt(bt)}function Ut(H){It.unshift(H)}function Lt(H){St.unshift(H)}function Bt(H){bt.unshift(H)}var Xt=0,mn=null;function An(H){return H}function Un(H){Xt++,y.monitorRunDependencies&&y.monitorRunDependencies(Xt)}function Fn(H){if(Xt--,y.monitorRunDependencies&&y.monitorRunDependencies(Xt),Xt==0&&mn){var k=mn;mn=null,k()}}function yn(H){y.onAbort&&y.onAbort(H),H="Aborted("+H+")",oe(H),Ae=!0,H+=". Build with -sASSERTIONS for more info.";var k=new WebAssembly.RuntimeError(H);throw g(k),k}var vn="data:application/octet-stream;base64,";function Tt(H){return H.startsWith(vn)}var Jl;Jl="web-ifc.wasm",Tt(Jl)||(Jl=ee(Jl));function Mn(H){if(H==Jl&&ie)return new Uint8Array(ie);throw"both async and sync fetching of the wasm failed"}function _n(H){return!ie&&Z&&typeof fetch=="function"?fetch(H,{credentials:"same-origin"}).then(k=>{if(!k.ok)throw"failed to load wasm binary file at '"+H+"'";return k.arrayBuffer()}).catch(()=>Mn(H)):Promise.resolve().then(()=>Mn(H))}function wn(H,k,ue){return _n(H).then(de=>WebAssembly.instantiate(de,k)).then(de=>de).then(ue,de=>{oe("failed to asynchronously prepare wasm: "+de),yn(de)})}function Hl(H,k,ue,de){return!H&&typeof WebAssembly.instantiateStreaming=="function"&&!Tt(k)&&typeof fetch=="function"?fetch(k,{credentials:"same-origin"}).then(Ce=>{var qe=WebAssembly.instantiateStreaming(Ce,ue);return qe.then(de,function(Ze){return oe("wasm streaming compile failed: "+Ze),oe("falling back to ArrayBuffer instantiation"),wn(k,ue,de)})}):wn(k,ue,de)}function sl(){var H={a:y1};function k(de,Ce){var qe=de.exports;return qe=w1(qe),we=qe,De=we.Z,et(),at=we.$,Lt(we._),Fn(),qe}Un();function ue(de){k(de.instance)}if(y.instantiateWasm)try{return y.instantiateWasm(H,k)}catch(de){oe("Module.instantiateWasm callback failed with error: "+de),g(de)}return Hl(ie,Jl,H,ue).catch(g),{}}var je,We,Dt=H=>{for(;H.length>0;)H.shift()(y)};function qt(H){this.excPtr=H,this.ptr=H-24,this.set_type=function(k){ve[this.ptr+4>>>2]=k},this.get_type=function(){return ve[this.ptr+4>>>2]},this.set_destructor=function(k){ve[this.ptr+8>>>2]=k},this.get_destructor=function(){return ve[this.ptr+8>>>2]},this.set_caught=function(k){k=k?1:0,Ve[this.ptr+12>>>0]=k},this.get_caught=function(){return Ve[this.ptr+12>>>0]!=0},this.set_rethrown=function(k){k=k?1:0,Ve[this.ptr+13>>>0]=k},this.get_rethrown=function(){return Ve[this.ptr+13>>>0]!=0},this.init=function(k,ue){this.set_adjusted_ptr(0),this.set_type(k),this.set_destructor(ue)},this.set_adjusted_ptr=function(k){ve[this.ptr+16>>>2]=k},this.get_adjusted_ptr=function(){return ve[this.ptr+16>>>2]},this.get_exception_ptr=function(){var k=EI(this.get_type());if(k)return ve[this.excPtr>>>2];var ue=this.get_adjusted_ptr();return ue!==0?ue:this.excPtr}}var zt=0;function Wt(H,k){return k+2097152>>>0<4194305-!!H?(H>>>0)+k*4294967296:NaN}function Sn(H,k,ue){H>>>=0,k>>>=0,ue>>>=0;var de=new qt(H);throw de.init(k,ue),zt=H,zt}var on={};function In(H){for(;H.length;){var k=H.pop(),ue=H.pop();ue(k)}}function bn(H){return this.fromWireType(Le[H>>>2])}var Hn={},Gt={},pl={},$n=void 0;function Vn(H){throw new $n(H)}function gn(H,k,ue){H.forEach(function(Je){pl[Je]=k});function de(Je){var ot=ue(Je);ot.length!==H.length&&Vn("Mismatched type converter count");for(var Et=0;Et<H.length;++Et)pn(H[Et],ot[Et])}var Ce=new Array(k.length),qe=[],Ze=0;k.forEach((Je,ot)=>{Gt.hasOwnProperty(Je)?Ce[ot]=Gt[Je]:(qe.push(Je),Hn.hasOwnProperty(Je)||(Hn[Je]=[]),Hn[Je].push(()=>{Ce[ot]=Gt[Je],++Ze,Ze===qe.length&&de(Ce)}))}),qe.length===0&&de(Ce)}function Tn(H){H>>>=0;var k=on[H];delete on[H];var ue=k.elements,de=ue.length,Ce=ue.map(function(Je){return Je.getterReturnType}).concat(ue.map(function(Je){return Je.setterArgumentType})),qe=k.rawConstructor,Ze=k.rawDestructor;gn([H],Ce,function(Je){return ue.forEach((ot,Et)=>{var _t=Je[Et],ln=ot.getter,Qt=ot.getterContext,kt=Je[Et+de],Rn=ot.setter,ul=ot.setterContext;ot.read=il=>_t.fromWireType(ln(Qt,il)),ot.write=(il,wl)=>{var Mt=[];Rn(ul,il,kt.toWireType(Mt,wl)),In(Mt)}}),[{name:k.name,fromWireType:function(ot){for(var Et=new Array(de),_t=0;_t<de;++_t)Et[_t]=ue[_t].read(ot);return Ze(ot),Et},toWireType:function(ot,Et){if(de!==Et.length)throw new TypeError(`Incorrect number of tuple elements for ${k.name}: expected=${de}, actual=${Et.length}`);for(var _t=qe(),ln=0;ln<de;++ln)ue[ln].write(_t,Et[ln]);return ot!==null&&ot.push(Ze,_t),_t},argPackAdvance:8,readValueFromPointer:bn,destructorFunction:Ze}]})}var Zn={},gl=function(H){H>>>=0;var k=Zn[H];delete Zn[H];var ue=k.rawConstructor,de=k.rawDestructor,Ce=k.fields,qe=Ce.map(Ze=>Ze.getterReturnType).concat(Ce.map(Ze=>Ze.setterArgumentType));gn([H],qe,Ze=>{var Je={};return Ce.forEach((ot,Et)=>{var _t=ot.fieldName,ln=Ze[Et],Qt=ot.getter,kt=ot.getterContext,Rn=Ze[Et+Ce.length],ul=ot.setter,il=ot.setterContext;Je[_t]={read:wl=>ln.fromWireType(Qt(kt,wl)),write:(wl,Mt)=>{var un=[];ul(il,wl,Rn.toWireType(un,Mt)),In(un)}}}),[{name:k.name,fromWireType:function(ot){var Et={};for(var _t in Je)Et[_t]=Je[_t].read(ot);return de(ot),Et},toWireType:function(ot,Et){for(var _t in Je)if(!(_t in Et))throw new TypeError(`Missing field: "${_t}"`);var ln=ue();for(_t in Je)Je[_t].write(ln,Et[_t]);return ot!==null&&ot.push(de,ln),ln},argPackAdvance:8,readValueFromPointer:bn,destructorFunction:de}]})};function hn(H,k,ue,de,Ce){}function En(H){switch(H){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError(`Unknown type size: ${H}`)}}function Jt(){for(var H=new Array(256),k=0;k<256;++k)H[k]=String.fromCharCode(k);ut=H}var ut=void 0;function Kt(H){for(var k="",ue=H;_e[ue>>>0];)k+=ut[_e[ue++>>>0]];return k}var tn=void 0;function nn(H){throw new tn(H)}function Bn(H,k,ue={}){var de=k.name;if(H||nn(`type "${de}" must have a positive integer typeid pointer`),Gt.hasOwnProperty(H)){if(ue.ignoreDuplicateRegistrations)return;nn(`Cannot register type '${de}' twice`)}if(Gt[H]=k,delete pl[H],Hn.hasOwnProperty(H)){var Ce=Hn[H];delete Hn[H],Ce.forEach(qe=>qe())}}function pn(H,k,ue={}){if(!("argPackAdvance"in k))throw new TypeError("registerType registeredInstance requires argPackAdvance");return Bn(H,k,ue)}function kl(H,k,ue,de,Ce){H>>>=0,k>>>=0,ue>>>=0;var qe=En(ue);k=Kt(k),pn(H,{name:k,fromWireType:function(Ze){return!!Ze},toWireType:function(Ze,Je){return Je?de:Ce},argPackAdvance:8,readValueFromPointer:function(Ze){var Je;if(ue===1)Je=Ve;else if(ue===2)Je=Xe;else if(ue===4)Je=Le;else throw new TypeError("Unknown boolean type size: "+k);return this.fromWireType(Je[Ze>>>qe])},destructorFunction:null})}function Cs(H){if(!(this instanceof Bl)||!(H instanceof Bl))return!1;for(var k=this.$$.ptrType.registeredClass,ue=this.$$.ptr,de=H.$$.ptrType.registeredClass,Ce=H.$$.ptr;k.baseClass;)ue=k.upcast(ue),k=k.baseClass;for(;de.baseClass;)Ce=de.upcast(Ce),de=de.baseClass;return k===de&&ue===Ce}function rs(H){return{count:H.count,deleteScheduled:H.deleteScheduled,preservePointerOnDelete:H.preservePointerOnDelete,ptr:H.ptr,ptrType:H.ptrType,smartPtr:H.smartPtr,smartPtrType:H.smartPtrType}}function Pl(H){function k(ue){return ue.$$.ptrType.registeredClass.name}nn(k(H)+" instance already deleted")}var ws=!1;function Au(H){}function Id(H){H.smartPtr?H.smartPtrType.rawDestructor(H.smartPtr):H.ptrType.registeredClass.rawDestructor(H.ptr)}function A3(H){H.count.value-=1;var k=H.count.value===0;k&&Id(H)}function rc(H,k,ue){if(k===ue)return H;if(ue.baseClass===void 0)return null;var de=rc(H,k,ue.baseClass);return de===null?null:ue.downcast(de)}var N0={};function ui(){return Object.keys(ht).length}function A0(){var H=[];for(var k in ht)ht.hasOwnProperty(k)&&H.push(ht[k]);return H}var Wn=[];function S0(){for(;Wn.length;){var H=Wn.pop();H.$$.deleteScheduled=!1,H.delete()}}var dd=void 0;function b2(H){dd=H,Wn.length&&dd&&dd(S0)}function ke(){y.getInheritedInstanceCount=ui,y.getLiveInheritedInstances=A0,y.flushPendingDeletes=S0,y.setDelayFunction=b2}var ht={};function Nt(H,k){for(k===void 0&&nn("ptr should not be undefined");H.baseClass;)k=H.upcast(k),H=H.baseClass;return k}function Ie(H,k){return k=Nt(H,k),ht[k]}function pt(H,k){(!k.ptrType||!k.ptr)&&Vn("makeClassHandle requires ptr and ptrType");var ue=!!k.smartPtrType,de=!!k.smartPtr;return ue!==de&&Vn("Both smartPtrType and smartPtr must be specified"),k.count={value:1},Nn(Object.create(H,{$$:{value:k}}))}function an(H){var k=this.getPointee(H);if(!k)return this.destructor(H),null;var ue=Ie(this.registeredClass,k);if(ue!==void 0){if(ue.$$.count.value===0)return ue.$$.ptr=k,ue.$$.smartPtr=H,ue.clone();var de=ue.clone();return this.destructor(H),de}function Ce(){return this.isSmartPointer?pt(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:k,smartPtrType:this,smartPtr:H}):pt(this.registeredClass.instancePrototype,{ptrType:this,ptr:H})}var qe=this.registeredClass.getActualType(k),Ze=N0[qe];if(!Ze)return Ce.call(this);var Je;this.isConst?Je=Ze.constPointerType:Je=Ze.pointerType;var ot=rc(k,this.registeredClass,Je.registeredClass);return ot===null?Ce.call(this):this.isSmartPointer?pt(Je.registeredClass.instancePrototype,{ptrType:Je,ptr:ot,smartPtrType:this,smartPtr:H}):pt(Je.registeredClass.instancePrototype,{ptrType:Je,ptr:ot})}var Nn=function(H){return typeof FinalizationRegistry>"u"?(Nn=k=>k,H):(ws=new FinalizationRegistry(k=>{A3(k.$$)}),Nn=k=>{var ue=k.$$,de=!!ue.smartPtr;if(de){var Ce={$$:ue};ws.register(k,Ce,k)}return k},Au=k=>ws.unregister(k),Nn(H))};function Gn(){if(this.$$.ptr||Pl(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var H=Nn(Object.create(Object.getPrototypeOf(this),{$$:{value:rs(this.$$)}}));return H.$$.count.value+=1,H.$$.deleteScheduled=!1,H}function jn(){this.$$.ptr||Pl(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&nn("Object already scheduled for deletion"),Au(this),A3(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function el(){return!this.$$.ptr}function $t(){return this.$$.ptr||Pl(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&nn("Object already scheduled for deletion"),Wn.push(this),Wn.length===1&&dd&&dd(S0),this.$$.deleteScheduled=!0,this}function Jn(){Bl.prototype.isAliasOf=Cs,Bl.prototype.clone=Gn,Bl.prototype.delete=jn,Bl.prototype.isDeleted=el,Bl.prototype.deleteLater=$t}function Bl(){}var fu=48,Ss=57;function Su(H){if(H===void 0)return"_unknown";H=H.replace(/[^a-zA-Z0-9_]/g,"$");var k=H.charCodeAt(0);return k>=fu&&k<=Ss?`_${H}`:H}function Xl(H,k){return H=Su(H),{[H]:function(){return k.apply(this,arguments)}}[H]}function rl(H,k,ue){if(H[k].overloadTable===void 0){var de=H[k];H[k]=function(){return H[k].overloadTable.hasOwnProperty(arguments.length)||nn(`Function '${ue}' called with an invalid number of arguments (${arguments.length}) - expects one of (${H[k].overloadTable})!`),H[k].overloadTable[arguments.length].apply(this,arguments)},H[k].overloadTable=[],H[k].overloadTable[de.argCount]=de}}function S3(H,k,ue){y.hasOwnProperty(H)?((ue===void 0||y[H].overloadTable!==void 0&&y[H].overloadTable[ue]!==void 0)&&nn(`Cannot register public name '${H}' twice`),rl(y,H,H),y.hasOwnProperty(ue)&&nn(`Cannot register multiple overloads of a function with the same number of arguments (${ue})!`),y[H].overloadTable[ue]=k):(y[H]=k,ue!==void 0&&(y[H].numArguments=ue))}function vl(H,k,ue,de,Ce,qe,Ze,Je){this.name=H,this.constructor=k,this.instancePrototype=ue,this.rawDestructor=de,this.baseClass=Ce,this.getActualType=qe,this.upcast=Ze,this.downcast=Je,this.pureVirtualFunctions=[]}function Lu(H,k,ue){for(;k!==ue;)k.upcast||nn(`Expected null or instance of ${ue.name}, got an instance of ${k.name}`),H=k.upcast(H),k=k.baseClass;return H}function L3(H,k){if(k===null)return this.isReference&&nn(`null is not a valid ${this.name}`),0;k.$$||nn(`Cannot pass "${ic(k)}" as a ${this.name}`),k.$$.ptr||nn(`Cannot pass deleted object as a pointer of type ${this.name}`);var ue=k.$$.ptrType.registeredClass,de=Lu(k.$$.ptr,ue,this.registeredClass);return de}function _c(H,k){var ue;if(k===null)return this.isReference&&nn(`null is not a valid ${this.name}`),this.isSmartPointer?(ue=this.rawConstructor(),H!==null&&H.push(this.rawDestructor,ue),ue):0;k.$$||nn(`Cannot pass "${ic(k)}" as a ${this.name}`),k.$$.ptr||nn(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&k.$$.ptrType.isConst&&nn(`Cannot convert argument of type ${k.$$.smartPtrType?k.$$.smartPtrType.name:k.$$.ptrType.name} to parameter type ${this.name}`);var de=k.$$.ptrType.registeredClass;if(ue=Lu(k.$$.ptr,de,this.registeredClass),this.isSmartPointer)switch(k.$$.smartPtr===void 0&&nn("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:k.$$.smartPtrType===this?ue=k.$$.smartPtr:nn(`Cannot convert argument of type ${k.$$.smartPtrType?k.$$.smartPtrType.name:k.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:ue=k.$$.smartPtr;break;case 2:if(k.$$.smartPtrType===this)ue=k.$$.smartPtr;else{var Ce=k.clone();ue=this.rawShare(ue,bl.toHandle(function(){Ce.delete()})),H!==null&&H.push(this.rawDestructor,ue)}break;default:nn("Unsupporting sharing policy")}return ue}function yd(H,k){if(k===null)return this.isReference&&nn(`null is not a valid ${this.name}`),0;k.$$||nn(`Cannot pass "${ic(k)}" as a ${this.name}`),k.$$.ptr||nn(`Cannot pass deleted object as a pointer of type ${this.name}`),k.$$.ptrType.isConst&&nn(`Cannot convert argument of type ${k.$$.ptrType.name} to parameter type ${this.name}`);var ue=k.$$.ptrType.registeredClass,de=Lu(k.$$.ptr,ue,this.registeredClass);return de}function Ls(H){return this.rawGetPointee&&(H=this.rawGetPointee(H)),H}function $u(H){this.rawDestructor&&this.rawDestructor(H)}function ai(H){H!==null&&H.delete()}function Ms(){xs.prototype.getPointee=Ls,xs.prototype.destructor=$u,xs.prototype.argPackAdvance=8,xs.prototype.readValueFromPointer=bn,xs.prototype.deleteObject=ai,xs.prototype.fromWireType=an}function xs(H,k,ue,de,Ce,qe,Ze,Je,ot,Et,_t){this.name=H,this.registeredClass=k,this.isReference=ue,this.isConst=de,this.isSmartPointer=Ce,this.pointeeType=qe,this.sharingPolicy=Ze,this.rawGetPointee=Je,this.rawConstructor=ot,this.rawShare=Et,this.rawDestructor=_t,!Ce&&k.baseClass===void 0?de?(this.toWireType=L3,this.destructorFunction=null):(this.toWireType=yd,this.destructorFunction=null):this.toWireType=_c}function Vc(H,k,ue){y.hasOwnProperty(H)||Vn("Replacing nonexistant public symbol"),y[H].overloadTable!==void 0&&ue!==void 0?y[H].overloadTable[ue]=k:(y[H]=k,y[H].argCount=ue)}var wd=(H,k,ue)=>{var de=y["dynCall_"+H];return ue&&ue.length?de.apply(null,[k].concat(ue)):de.call(null,k)},Wc=[],Ou=H=>{var k=Wc[H];return k||(H>=Wc.length&&(Wc.length=H+1),Wc[H]=k=at.get(H)),k},Ed=(H,k,ue)=>{if(H.includes("j"))return wd(H,k,ue);var de=Ou(k).apply(null,ue);return de},uc=(H,k)=>{var ue=[];return function(){return ue.length=0,Object.assign(ue,arguments),Ed(H,k,ue)}};function Hs(H,k){H=Kt(H);function ue(){return H.includes("j")?uc(H,k):Ou(k)}var de=ue();return typeof de!="function"&&nn(`unknown function pointer with signature ${H}: ${k}`),de}function Td(H,k){var ue=Xl(k,function(de){this.name=k,this.message=de;var Ce=new Error(de).stack;Ce!==void 0&&(this.stack=this.toString()+`
`+Ce.replace(/^Error(:[^\n]*)?\n/,""))});return ue.prototype=Object.create(H.prototype),ue.prototype.constructor=ue,ue.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},ue}var ac=void 0;function vf(H){var k=wI(H),ue=Kt(k);return Cu(k),ue}function bi(H,k){var ue=[],de={};function Ce(qe){if(!de[qe]&&!Gt[qe]){if(pl[qe]){pl[qe].forEach(Ce);return}ue.push(qe),de[qe]=!0}}throw k.forEach(Ce),new ac(`${H}: `+ue.map(vf).join([", "]))}function Os(H,k,ue,de,Ce,qe,Ze,Je,ot,Et,_t,ln,Qt){H>>>=0,k>>>=0,ue>>>=0,de>>>=0,Ce>>>=0,qe>>>=0,Ze>>>=0,Je>>>=0,ot>>>=0,Et>>>=0,_t>>>=0,ln>>>=0,Qt>>>=0,_t=Kt(_t),qe=Hs(Ce,qe),Je&&(Je=Hs(Ze,Je)),Et&&(Et=Hs(ot,Et)),Qt=Hs(ln,Qt);var kt=Su(_t);S3(kt,function(){bi(`Cannot construct ${_t} due to unbound types`,[de])}),gn([H,k,ue],de?[de]:[],function(Rn){Rn=Rn[0];var ul,il;de?(ul=Rn.registeredClass,il=ul.instancePrototype):il=Bl.prototype;var wl=Xl(kt,function(){if(Object.getPrototypeOf(this)!==Mt)throw new tn("Use 'new' to construct "+_t);if(un.constructor_body===void 0)throw new tn(_t+" has no accessible constructor");var es=un.constructor_body[arguments.length];if(es===void 0)throw new tn(`Tried to invoke ctor of ${_t} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(un.constructor_body).toString()}) parameters instead!`);return es.apply(this,arguments)}),Mt=Object.create(il,{constructor:{value:wl}});wl.prototype=Mt;var un=new vl(_t,wl,Mt,Qt,ul,qe,Je,Et);un.baseClass&&(un.baseClass.__derivedClasses===void 0&&(un.baseClass.__derivedClasses=[]),un.baseClass.__derivedClasses.push(un));var Es=new xs(_t,un,!0,!1,!1),cl=new xs(_t+"*",un,!1,!1,!1),Js=new xs(_t+" const*",un,!1,!0,!1);return N0[H]={pointerType:cl,constPointerType:Js},Vc(kt,wl),[Es,cl,Js]})}function Zu(H,k){for(var ue=[],de=0;de<H;de++)ue.push(ve[k+de*4>>>2]);return ue}function ol(H,k){if(!(H instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof H} which is not a function`);var ue=Xl(H.name||"unknownFunctionName",function(){});ue.prototype=H.prototype;var de=new ue,Ce=H.apply(de,k);return Ce instanceof Object?Ce:de}function jc(H,k,ue,de,Ce,qe){var Ze=k.length;Ze<2&&nn("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var Je=k[1]!==null&&ue!==null,ot=!1,Et=1;Et<k.length;++Et)if(k[Et]!==null&&k[Et].destructorFunction===void 0){ot=!0;break}for(var _t=k[0].name!=="void",ln="",Qt="",Et=0;Et<Ze-2;++Et)ln+=(Et!==0?", ":"")+"arg"+Et,Qt+=(Et!==0?", ":"")+"arg"+Et+"Wired";var kt=`
        return function ${Su(H)}(${ln}) {
        if (arguments.length !== ${Ze-2}) {
          throwBindingError('function ${H} called with ${arguments.length} arguments, expected ${Ze-2} args!');
        }`;ot&&(kt+=`var destructors = [];
`);var Rn=ot?"destructors":"null",ul=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],il=[nn,de,Ce,In,k[0],k[1]];Je&&(kt+="var thisWired = classParam.toWireType("+Rn+`, this);
`);for(var Et=0;Et<Ze-2;++Et)kt+="var arg"+Et+"Wired = argType"+Et+".toWireType("+Rn+", arg"+Et+"); // "+k[Et+2].name+`
`,ul.push("argType"+Et),il.push(k[Et+2]);if(Je&&(Qt="thisWired"+(Qt.length>0?", ":"")+Qt),kt+=(_t||qe?"var rv = ":"")+"invoker(fn"+(Qt.length>0?", ":"")+Qt+`);
`,ot)kt+=`runDestructors(destructors);
`;else for(var Et=Je?1:2;Et<k.length;++Et){var wl=Et===1?"thisWired":"arg"+(Et-2)+"Wired";k[Et].destructorFunction!==null&&(kt+=wl+"_dtor("+wl+"); // "+k[Et].name+`
`,ul.push(wl+"_dtor"),il.push(k[Et].destructorFunction))}return _t&&(kt+=`var ret = retType.fromWireType(rv);
return ret;
`),kt+=`}
`,ul.push(kt),ol(Function,ul).apply(null,il)}function gu(H,k,ue,de,Ce,qe){H>>>=0,ue>>>=0,de>>>=0,Ce>>>=0,qe>>>=0;var Ze=Zu(k,ue);Ce=Hs(de,Ce),gn([],[H],function(Je){Je=Je[0];var ot=`constructor ${Je.name}`;if(Je.registeredClass.constructor_body===void 0&&(Je.registeredClass.constructor_body=[]),Je.registeredClass.constructor_body[k-1]!==void 0)throw new tn(`Cannot register multiple constructors with identical number of parameters (${k-1}) for class '${Je.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return Je.registeredClass.constructor_body[k-1]=()=>{bi(`Cannot construct ${Je.name} due to unbound types`,Ze)},gn([],Ze,function(Et){return Et.splice(1,0,null),Je.registeredClass.constructor_body[k-1]=jc(ot,Et,null,Ce,qe),[]}),[]})}function pd(H,k,ue,de,Ce,qe,Ze,Je,ot){H>>>=0,k>>>=0,de>>>=0,Ce>>>=0,qe>>>=0,Ze>>>=0;var Et=Zu(ue,de);k=Kt(k),qe=Hs(Ce,qe),gn([],[H],function(_t){_t=_t[0];var ln=`${_t.name}.${k}`;k.startsWith("@@")&&(k=Symbol[k.substring(2)]),Je&&_t.registeredClass.pureVirtualFunctions.push(k);function Qt(){bi(`Cannot call ${ln} due to unbound types`,Et)}var kt=_t.registeredClass.instancePrototype,Rn=kt[k];return Rn===void 0||Rn.overloadTable===void 0&&Rn.className!==_t.name&&Rn.argCount===ue-2?(Qt.argCount=ue-2,Qt.className=_t.name,kt[k]=Qt):(rl(kt,k,ln),kt[k].overloadTable[ue-2]=Qt),gn([],Et,function(ul){var il=jc(ln,ul,_t,qe,Ze,ot);return kt[k].overloadTable===void 0?(il.argCount=ue-2,kt[k]=il):kt[k].overloadTable[ue-2]=il,[]}),[]})}function Rd(){Object.assign(eI.prototype,{get(H){return this.allocated[H]},has(H){return this.allocated[H]!==void 0},allocate(H){var k=this.freelist.pop()||this.allocated.length;return this.allocated[k]=H,k},free(H){this.allocated[H]=void 0,this.freelist.push(H)}})}function eI(){this.allocated=[void 0],this.freelist=[]}var _s=new eI;function Ci(H){H>>>=0,H>=_s.reserved&&--_s.get(H).refcount===0&&_s.free(H)}function tI(){for(var H=0,k=_s.reserved;k<_s.allocated.length;++k)_s.allocated[k]!==void 0&&++H;return H}function md(){_s.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),_s.reserved=_s.allocated.length,y.count_emval_handles=tI}var bl={toValue:H=>(H||nn("Cannot use deleted val. handle = "+H),_s.get(H).value),toHandle:H=>{switch(H){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return _s.allocate({refcount:1,value:H})}}};function nI(H,k){H>>>=0,k>>>=0,k=Kt(k),pn(H,{name:k,fromWireType:function(ue){var de=bl.toValue(ue);return Ci(ue),de},toWireType:function(ue,de){return bl.toHandle(de)},argPackAdvance:8,readValueFromPointer:bn,destructorFunction:null})}function ic(H){if(H===null)return"null";var k=typeof H;return k==="object"||k==="array"||k==="function"?H.toString():""+H}function Dd(H,k){switch(k){case 2:return function(ue){return this.fromWireType(st[ue>>>2])};case 3:return function(ue){return this.fromWireType(ft[ue>>>3])};default:throw new TypeError("Unknown float type: "+H)}}function Nd(H,k,ue){H>>>=0,k>>>=0,ue>>>=0;var de=En(ue);k=Kt(k),pn(H,{name:k,fromWireType:function(Ce){return Ce},toWireType:function(Ce,qe){return qe},argPackAdvance:8,readValueFromPointer:Dd(k,de),destructorFunction:null})}function Mi(H,k,ue,de,Ce,qe,Ze){H>>>=0,ue>>>=0,de>>>=0,Ce>>>=0,qe>>>=0;var Je=Zu(k,ue);H=Kt(H),Ce=Hs(de,Ce),S3(H,function(){bi(`Cannot call ${H} due to unbound types`,Je)},k-1),gn([],Je,function(ot){var Et=[ot[0],null].concat(ot.slice(1));return Vc(H,jc(H,Et,null,Ce,qe,Ze),k-1),[]})}function Yc(H,k,ue){switch(k){case 0:return ue?function(Ce){return Ve[Ce>>>0]}:function(Ce){return _e[Ce>>>0]};case 1:return ue?function(Ce){return Xe[Ce>>>1]}:function(Ce){return ge[Ce>>>1]};case 2:return ue?function(Ce){return Le[Ce>>>2]}:function(Ce){return ve[Ce>>>2]};default:throw new TypeError("Unknown integer type: "+H)}}function xi(H,k,ue,de,Ce){H>>>=0,k>>>=0,ue>>>=0,k=Kt(k);var qe=En(ue),Ze=ln=>ln;if(de===0){var Je=32-8*ue;Ze=ln=>ln<<Je>>>Je}var ot=k.includes("unsigned"),Et=(ln,Qt)=>{},_t;ot?_t=function(ln,Qt){return Et(Qt,this.name),Qt>>>0}:_t=function(ln,Qt){return Et(Qt,this.name),Qt},pn(H,{name:k,fromWireType:Ze,toWireType:_t,argPackAdvance:8,readValueFromPointer:Yc(k,qe,de!==0),destructorFunction:null})}function Ad(H,k,ue){H>>>=0,ue>>>=0;var de=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],Ce=de[k];function qe(Ze){Ze=Ze>>2;var Je=ve,ot=Je[Ze>>>0],Et=Je[Ze+1>>>0];return new Ce(Je.buffer,Et,ot)}ue=Kt(ue),pn(H,{name:ue,fromWireType:qe,argPackAdvance:8,readValueFromPointer:qe},{ignoreDuplicateRegistrations:!0})}var zc=(H,k,ue,de)=>{if(ue>>>=0,!(de>0))return 0;for(var Ce=ue,qe=ue+de-1,Ze=0;Ze<H.length;++Ze){var Je=H.charCodeAt(Ze);if(Je>=55296&&Je<=57343){var ot=H.charCodeAt(++Ze);Je=65536+((Je&1023)<<10)|ot&1023}if(Je<=127){if(ue>=qe)break;k[ue++>>>0]=Je}else if(Je<=2047){if(ue+1>=qe)break;k[ue++>>>0]=192|Je>>6,k[ue++>>>0]=128|Je&63}else if(Je<=65535){if(ue+2>=qe)break;k[ue++>>>0]=224|Je>>12,k[ue++>>>0]=128|Je>>6&63,k[ue++>>>0]=128|Je&63}else{if(ue+3>=qe)break;k[ue++>>>0]=240|Je>>18,k[ue++>>>0]=128|Je>>12&63,k[ue++>>>0]=128|Je>>6&63,k[ue++>>>0]=128|Je&63}}return k[ue>>>0]=0,ue-Ce},ii=(H,k,ue)=>zc(H,_e,k,ue),oc=H=>{for(var k=0,ue=0;ue<H.length;++ue){var de=H.charCodeAt(ue);de<=127?k++:de<=2047?k+=2:de>=55296&&de<=57343?(k+=4,++ue):k+=3}return k},lI=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,Pu=(H,k,ue)=>{k>>>=0;for(var de=k+ue,Ce=k;H[Ce]&&!(Ce>=de);)++Ce;if(Ce-k>16&&H.buffer&&lI)return lI.decode(H.subarray(k,Ce));for(var qe="";k<Ce;){var Ze=H[k++];if(!(Ze&128)){qe+=String.fromCharCode(Ze);continue}var Je=H[k++]&63;if((Ze&224)==192){qe+=String.fromCharCode((Ze&31)<<6|Je);continue}var ot=H[k++]&63;if((Ze&240)==224?Ze=(Ze&15)<<12|Je<<6|ot:Ze=(Ze&7)<<18|Je<<12|ot<<6|H[k++]&63,Ze<65536)qe+=String.fromCharCode(Ze);else{var Et=Ze-65536;qe+=String.fromCharCode(55296|Et>>10,56320|Et&1023)}}return qe},cc=(H,k)=>(H>>>=0,H?Pu(_e,H,k):"");function Hi(H,k){H>>>=0,k>>>=0,k=Kt(k);var ue=k==="std::string";pn(H,{name:k,fromWireType:function(de){var Ce=ve[de>>>2],qe=de+4,Ze;if(ue)for(var Je=qe,ot=0;ot<=Ce;++ot){var Et=qe+ot;if(ot==Ce||_e[Et>>>0]==0){var _t=Et-Je,ln=cc(Je,_t);Ze===void 0?Ze=ln:(Ze+="\0",Ze+=ln),Je=Et+1}}else{for(var Qt=new Array(Ce),ot=0;ot<Ce;++ot)Qt[ot]=String.fromCharCode(_e[qe+ot>>>0]);Ze=Qt.join("")}return Cu(de),Ze},toWireType:function(de,Ce){Ce instanceof ArrayBuffer&&(Ce=new Uint8Array(Ce));var qe,Ze=typeof Ce=="string";Ze||Ce instanceof Uint8Array||Ce instanceof Uint8ClampedArray||Ce instanceof Int8Array||nn("Cannot pass non-string to std::string"),ue&&Ze?qe=oc(Ce):qe=Ce.length;var Je=Ec(4+qe+1),ot=Je+4;if(ve[Je>>>2]=qe,ue&&Ze)ii(Ce,ot,qe+1);else if(Ze)for(var Et=0;Et<qe;++Et){var _t=Ce.charCodeAt(Et);_t>255&&(Cu(ot),nn("String has UTF-16 code units that do not fit in 8 bits")),_e[ot+Et>>>0]=_t}else for(var Et=0;Et<qe;++Et)_e[ot+Et>>>0]=Ce[Et];return de!==null&&de.push(Cu,Je),Je},argPackAdvance:8,readValueFromPointer:bn,destructorFunction:function(de){Cu(de)}})}var sI=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Sd=(H,k)=>{for(var ue=H,de=ue>>1,Ce=de+k/2;!(de>=Ce)&&ge[de>>>0];)++de;if(ue=de<<1,ue-H>32&&sI)return sI.decode(_e.subarray(H>>>0,ue>>>0));for(var qe="",Ze=0;!(Ze>=k/2);++Ze){var Je=Xe[H+Ze*2>>>1];if(Je==0)break;qe+=String.fromCharCode(Je)}return qe},Ld=(H,k,ue)=>{if(ue===void 0&&(ue=2147483647),ue<2)return 0;ue-=2;for(var de=k,Ce=ue<H.length*2?ue/2:H.length,qe=0;qe<Ce;++qe){var Ze=H.charCodeAt(qe);Xe[k>>>1]=Ze,k+=2}return Xe[k>>>1]=0,k-de},Od=H=>H.length*2,gd=(H,k)=>{for(var ue=0,de="";!(ue>=k/4);){var Ce=Le[H+ue*4>>>2];if(Ce==0)break;if(++ue,Ce>=65536){var qe=Ce-65536;de+=String.fromCharCode(55296|qe>>10,56320|qe&1023)}else de+=String.fromCharCode(Ce)}return de},Ju=(H,k,ue)=>{if(k>>>=0,ue===void 0&&(ue=2147483647),ue<4)return 0;for(var de=k,Ce=de+ue-4,qe=0;qe<H.length;++qe){var Ze=H.charCodeAt(qe);if(Ze>=55296&&Ze<=57343){var Je=H.charCodeAt(++qe);Ze=65536+((Ze&1023)<<10)|Je&1023}if(Le[k>>>2]=Ze,k+=4,k+4>Ce)break}return Le[k>>>2]=0,k-de},Pd=H=>{for(var k=0,ue=0;ue<H.length;++ue){var de=H.charCodeAt(ue);de>=55296&&de<=57343&&++ue,k+=4}return k},bd=function(H,k,ue){H>>>=0,k>>>=0,ue>>>=0,ue=Kt(ue);var de,Ce,qe,Ze,Je;k===2?(de=Sd,Ce=Ld,Ze=Od,qe=()=>ge,Je=1):k===4&&(de=gd,Ce=Ju,Ze=Pd,qe=()=>ve,Je=2),pn(H,{name:ue,fromWireType:function(ot){for(var Et=ve[ot>>>2],_t=qe(),ln,Qt=ot+4,kt=0;kt<=Et;++kt){var Rn=ot+4+kt*k;if(kt==Et||_t[Rn>>>Je]==0){var ul=Rn-Qt,il=de(Qt,ul);ln===void 0?ln=il:(ln+="\0",ln+=il),Qt=Rn+k}}return Cu(ot),ln},toWireType:function(ot,Et){typeof Et!="string"&&nn(`Cannot pass non-string to C++ string type ${ue}`);var _t=Ze(Et),ln=Ec(4+_t+k);return ve[ln>>>2]=_t>>Je,Ce(Et,ln+4,_t+k),ot!==null&&ot.push(Cu,ln),ln},argPackAdvance:8,readValueFromPointer:bn,destructorFunction:function(ot){Cu(ot)}})};function kc(H,k,ue,de,Ce,qe){H>>>=0,k>>>=0,ue>>>=0,de>>>=0,Ce>>>=0,qe>>>=0,on[H]={name:Kt(k),rawConstructor:Hs(ue,de),rawDestructor:Hs(Ce,qe),elements:[]}}function qc(H,k,ue,de,Ce,qe,Ze,Je,ot){H>>>=0,k>>>=0,ue>>>=0,de>>>=0,Ce>>>=0,qe>>>=0,Ze>>>=0,Je>>>=0,ot>>>=0,on[H].elements.push({getterReturnType:k,getter:Hs(ue,de),getterContext:Ce,setterArgumentType:qe,setter:Hs(Ze,Je),setterContext:ot})}function rI(H,k,ue,de,Ce,qe){H>>>=0,k>>>=0,ue>>>=0,de>>>=0,Ce>>>=0,qe>>>=0,Zn[H]={name:Kt(k),rawConstructor:Hs(ue,de),rawDestructor:Hs(Ce,qe),fields:[]}}function uI(H,k,ue,de,Ce,qe,Ze,Je,ot,Et){H>>>=0,k>>>=0,ue>>>=0,de>>>=0,Ce>>>=0,qe>>>=0,Ze>>>=0,Je>>>=0,ot>>>=0,Et>>>=0,Zn[H].fields.push({fieldName:Kt(k),getterReturnType:ue,getter:Hs(de,Ce),getterContext:qe,setterArgumentType:Ze,setter:Hs(Je,ot),setterContext:Et})}function Cd(H,k){H>>>=0,k>>>=0,k=Kt(k),pn(H,{isVoid:!0,name:k,argPackAdvance:0,fromWireType:function(){},toWireType:function(ue,de){}})}var Kc=!0,Md=()=>Kc;function Qc(H,k){var ue=Gt[H];return ue===void 0&&nn(k+" has unknown type "+vf(H)),ue}function xd(H,k,ue){H>>>=0,k>>>=0,ue>>>=0,H=bl.toValue(H),k=Qc(k,"emval::as");var de=[],Ce=bl.toHandle(de);return ve[ue>>>2]=Ce,k.toWireType(de,H)}function Hd(H,k){for(var ue=new Array(H),de=0;de<H;++de)ue[de]=Qc(ve[k+de*4>>>2],"parameter "+de);return ue}function Bd(H,k,ue,de){H>>>=0,ue>>>=0,de>>>=0,H=bl.toValue(H);for(var Ce=Hd(k,ue),qe=new Array(k),Ze=0;Ze<k;++Ze){var Je=Ce[Ze];qe[Ze]=Je.readValueFromPointer(de),de+=Je.argPackAdvance}var ot=H.apply(void 0,qe);return bl.toHandle(ot)}var Ud={};function aI(H){var k=Ud[H];return k===void 0?Kt(H):k}function Iu(){return typeof globalThis=="object"?globalThis:function(){return Function}()("return this")()}function iI(H){return H>>>=0,H===0?bl.toHandle(Iu()):(H=aI(H),bl.toHandle(Iu()[H]))}function Fd(H,k){return H>>>=0,k>>>=0,H=bl.toValue(H),k=bl.toValue(k),bl.toHandle(H[k])}function Gd(H){H>>>=0,H>4&&(_s.get(H).refcount+=1)}function _d(H,k){return H>>>=0,k>>>=0,H=bl.toValue(H),k=bl.toValue(k),H instanceof k}function Bs(H){return H>>>=0,H=bl.toValue(H),typeof H=="number"}function Vd(H){return H>>>=0,H=bl.toValue(H),typeof H=="string"}function oI(){return bl.toHandle([])}function cI(H){return H>>>=0,bl.toHandle(aI(H))}function hc(){return bl.toHandle({})}function Wd(H){H>>>=0;var k=bl.toValue(H);In(k),Ci(H)}function $c(H,k,ue){H>>>=0,k>>>=0,ue>>>=0,H=bl.toValue(H),k=bl.toValue(k),ue=bl.toValue(ue),H[k]=ue}function jd(H,k){H>>>=0,k>>>=0,H=Qc(H,"_emval_take_value");var ue=H.readValueFromPointer(k);return bl.toHandle(ue)}function Zc(H,k,ue){var de=Wt(H,k);ue>>>=0;var Ce=new Date(de*1e3);Le[ue>>>2]=Ce.getUTCSeconds(),Le[ue+4>>>2]=Ce.getUTCMinutes(),Le[ue+8>>>2]=Ce.getUTCHours(),Le[ue+12>>>2]=Ce.getUTCDate(),Le[ue+16>>>2]=Ce.getUTCMonth(),Le[ue+20>>>2]=Ce.getUTCFullYear()-1900,Le[ue+24>>>2]=Ce.getUTCDay();var qe=Date.UTC(Ce.getUTCFullYear(),0,1,0,0,0,0),Ze=(Ce.getTime()-qe)/(1e3*60*60*24)|0;Le[ue+28>>>2]=Ze}var Bi=H=>H%4===0&&(H%100!==0||H%400===0),Yd=[0,31,60,91,121,152,182,213,244,274,305,335],zd=[0,31,59,90,120,151,181,212,243,273,304,334],hI=H=>{var k=Bi(H.getFullYear()),ue=k?Yd:zd,de=ue[H.getMonth()]+H.getDate()-1;return de};function Zs(H,k,ue){var de=Wt(H,k);ue>>>=0;var Ce=new Date(de*1e3);Le[ue>>>2]=Ce.getSeconds(),Le[ue+4>>>2]=Ce.getMinutes(),Le[ue+8>>>2]=Ce.getHours(),Le[ue+12>>>2]=Ce.getDate(),Le[ue+16>>>2]=Ce.getMonth(),Le[ue+20>>>2]=Ce.getFullYear()-1900,Le[ue+24>>>2]=Ce.getDay();var qe=hI(Ce)|0;Le[ue+28>>>2]=qe,Le[ue+36>>>2]=-(Ce.getTimezoneOffset()*60);var Ze=new Date(Ce.getFullYear(),0,1),Je=new Date(Ce.getFullYear(),6,1).getTimezoneOffset(),ot=Ze.getTimezoneOffset(),Et=(Je!=ot&&Ce.getTimezoneOffset()==Math.min(ot,Je))|0;Le[ue+32>>>2]=Et}var fc=H=>{var k=oc(H)+1,ue=Ec(k);return ue&&ii(H,ue,k),ue};function kd(H,k,ue){H>>>=0,k>>>=0,ue>>>=0;var de=new Date().getFullYear(),Ce=new Date(de,0,1),qe=new Date(de,6,1),Ze=Ce.getTimezoneOffset(),Je=qe.getTimezoneOffset(),ot=Math.max(Ze,Je);ve[H>>>2]=ot*60,Le[k>>>2]=+(Ze!=Je);function Et(Rn){var ul=Rn.toTimeString().match(/\(([A-Za-z ]+)\)$/);return ul?ul[1]:"GMT"}var _t=Et(Ce),ln=Et(qe),Qt=fc(_t),kt=fc(ln);Je<Ze?(ve[ue>>>2]=Qt,ve[ue+4>>>2]=kt):(ve[ue>>>2]=kt,ve[ue+4>>>2]=Qt)}var qd=()=>{yn("")};function Ul(){return Date.now()}function Kd(H,k,ue){return H>>>=0,k>>>=0,ue>>>=0,_e.copyWithin(H>>>0,k>>>0,k+ue>>>0)}var Jc=()=>4294901760,Qd=H=>{var k=De.buffer,ue=H-k.byteLength+65535>>>16;try{return De.grow(ue),et(),1}catch{}};function $d(H){H>>>=0;var k=_e.length,ue=Jc();if(H>ue)return!1;for(var de=(ot,Et)=>ot+(Et-ot%Et)%Et,Ce=1;Ce<=4;Ce*=2){var qe=k*(1+.2/Ce);qe=Math.min(qe,H+100663296);var Ze=Math.min(ue,de(Math.max(H,qe),65536)),Je=Qd(Ze);if(Je)return!0}return!1}var Xc={},Zd=()=>V||"./this.program",Ui=()=>{if(!Ui.strings){var H=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",k={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:H,_:Zd()};for(var ue in Xc)Xc[ue]===void 0?delete k[ue]:k[ue]=Xc[ue];var de=[];for(var ue in k)de.push(`${ue}=${k[ue]}`);Ui.strings=de}return Ui.strings},Jd=(H,k)=>{for(var ue=0;ue<H.length;++ue)Ve[k++>>>0]=H.charCodeAt(ue);Ve[k>>>0]=0},yl={isAbs:H=>H.charAt(0)==="/",splitPath:H=>{var k=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return k.exec(H).slice(1)},normalizeArray:(H,k)=>{for(var ue=0,de=H.length-1;de>=0;de--){var Ce=H[de];Ce==="."?H.splice(de,1):Ce===".."?(H.splice(de,1),ue++):ue&&(H.splice(de,1),ue--)}if(k)for(;ue;ue--)H.unshift("..");return H},normalize:H=>{var k=yl.isAbs(H),ue=H.substr(-1)==="/";return H=yl.normalizeArray(H.split("/").filter(de=>!!de),!k).join("/"),!H&&!k&&(H="."),H&&ue&&(H+="/"),(k?"/":"")+H},dirname:H=>{var k=yl.splitPath(H),ue=k[0],de=k[1];return!ue&&!de?".":(de&&(de=de.substr(0,de.length-1)),ue+de)},basename:H=>{if(H==="/")return"/";H=yl.normalize(H),H=H.replace(/\/$/,"");var k=H.lastIndexOf("/");return k===-1?H:H.substr(k+1)},join:function(){var H=Array.prototype.slice.call(arguments);return yl.normalize(H.join("/"))},join2:(H,k)=>yl.normalize(H+"/"+k)},Xd=()=>{if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function")return H=>crypto.getRandomValues(H);yn("initRandomDevice")},vc=H=>(vc=Xd())(H),bu={resolve:function(){for(var H="",k=!1,ue=arguments.length-1;ue>=-1&&!k;ue--){var de=ue>=0?arguments[ue]:Me.cwd();if(typeof de!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!de)return"";H=de+"/"+H,k=yl.isAbs(de)}return H=yl.normalizeArray(H.split("/").filter(Ce=>!!Ce),!k).join("/"),(k?"/":"")+H||"."},relative:(H,k)=>{H=bu.resolve(H).substr(1),k=bu.resolve(k).substr(1);function ue(Et){for(var _t=0;_t<Et.length&&Et[_t]==="";_t++);for(var ln=Et.length-1;ln>=0&&Et[ln]==="";ln--);return _t>ln?[]:Et.slice(_t,ln-_t+1)}for(var de=ue(H.split("/")),Ce=ue(k.split("/")),qe=Math.min(de.length,Ce.length),Ze=qe,Je=0;Je<qe;Je++)if(de[Je]!==Ce[Je]){Ze=Je;break}for(var ot=[],Je=Ze;Je<de.length;Je++)ot.push("..");return ot=ot.concat(Ce.slice(Ze)),ot.join("/")}},eh=[];function Ic(H,k,ue){var de=oc(H)+1,Ce=new Array(de),qe=zc(H,Ce,0,Ce.length);return k&&(Ce.length=qe),Ce}var vd=()=>{if(!eh.length){var H=null;if(typeof window<"u"&&typeof window.prompt=="function"?(H=window.prompt("Input: "),H!==null&&(H+=`
`)):typeof readline=="function"&&(H=readline(),H!==null&&(H+=`
`)),!H)return null;eh=Ic(H,!0)}return eh.shift()},ka={ttys:[],init:function(){},shutdown:function(){},register:function(H,k){ka.ttys[H]={input:[],output:[],ops:k},Me.registerDevice(H,ka.stream_ops)},stream_ops:{open:function(H){var k=ka.ttys[H.node.rdev];if(!k)throw new Me.ErrnoError(43);H.tty=k,H.seekable=!1},close:function(H){H.tty.ops.fsync(H.tty)},fsync:function(H){H.tty.ops.fsync(H.tty)},read:function(H,k,ue,de,Ce){if(!H.tty||!H.tty.ops.get_char)throw new Me.ErrnoError(60);for(var qe=0,Ze=0;Ze<de;Ze++){var Je;try{Je=H.tty.ops.get_char(H.tty)}catch{throw new Me.ErrnoError(29)}if(Je===void 0&&qe===0)throw new Me.ErrnoError(6);if(Je==null)break;qe++,k[ue+Ze]=Je}return qe&&(H.node.timestamp=Date.now()),qe},write:function(H,k,ue,de,Ce){if(!H.tty||!H.tty.ops.put_char)throw new Me.ErrnoError(60);try{for(var qe=0;qe<de;qe++)H.tty.ops.put_char(H.tty,k[ue+qe])}catch{throw new Me.ErrnoError(29)}return de&&(H.node.timestamp=Date.now()),qe}},default_tty_ops:{get_char:function(H){return vd()},put_char:function(H,k){k===null||k===10?(Te(Pu(H.output,0)),H.output=[]):k!=0&&H.output.push(k)},fsync:function(H){H.output&&H.output.length>0&&(Te(Pu(H.output,0)),H.output=[])},ioctl_tcgets:function(H){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets:function(H,k,ue){return 0},ioctl_tiocgwinsz:function(H){return[24,80]}},default_tty1_ops:{put_char:function(H,k){k===null||k===10?(oe(Pu(H.output,0)),H.output=[]):k!=0&&H.output.push(k)},fsync:function(H){H.output&&H.output.length>0&&(oe(Pu(H.output,0)),H.output=[])}}},fI=H=>{yn()},kn={ops_table:null,mount(H){return kn.createNode(null,"/",16895,0)},createNode(H,k,ue,de){if(Me.isBlkdev(ue)||Me.isFIFO(ue))throw new Me.ErrnoError(63);kn.ops_table||(kn.ops_table={dir:{node:{getattr:kn.node_ops.getattr,setattr:kn.node_ops.setattr,lookup:kn.node_ops.lookup,mknod:kn.node_ops.mknod,rename:kn.node_ops.rename,unlink:kn.node_ops.unlink,rmdir:kn.node_ops.rmdir,readdir:kn.node_ops.readdir,symlink:kn.node_ops.symlink},stream:{llseek:kn.stream_ops.llseek}},file:{node:{getattr:kn.node_ops.getattr,setattr:kn.node_ops.setattr},stream:{llseek:kn.stream_ops.llseek,read:kn.stream_ops.read,write:kn.stream_ops.write,allocate:kn.stream_ops.allocate,mmap:kn.stream_ops.mmap,msync:kn.stream_ops.msync}},link:{node:{getattr:kn.node_ops.getattr,setattr:kn.node_ops.setattr,readlink:kn.node_ops.readlink},stream:{}},chrdev:{node:{getattr:kn.node_ops.getattr,setattr:kn.node_ops.setattr},stream:Me.chrdev_stream_ops}});var Ce=Me.createNode(H,k,ue,de);return Me.isDir(Ce.mode)?(Ce.node_ops=kn.ops_table.dir.node,Ce.stream_ops=kn.ops_table.dir.stream,Ce.contents={}):Me.isFile(Ce.mode)?(Ce.node_ops=kn.ops_table.file.node,Ce.stream_ops=kn.ops_table.file.stream,Ce.usedBytes=0,Ce.contents=null):Me.isLink(Ce.mode)?(Ce.node_ops=kn.ops_table.link.node,Ce.stream_ops=kn.ops_table.link.stream):Me.isChrdev(Ce.mode)&&(Ce.node_ops=kn.ops_table.chrdev.node,Ce.stream_ops=kn.ops_table.chrdev.stream),Ce.timestamp=Date.now(),H&&(H.contents[k]=Ce,H.timestamp=Ce.timestamp),Ce},getFileDataAsTypedArray(H){return H.contents?H.contents.subarray?H.contents.subarray(0,H.usedBytes):new Uint8Array(H.contents):new Uint8Array(0)},expandFileStorage(H,k){var ue=H.contents?H.contents.length:0;if(!(ue>=k)){var de=1024*1024;k=Math.max(k,ue*(ue<de?2:1.125)>>>0),ue!=0&&(k=Math.max(k,256));var Ce=H.contents;H.contents=new Uint8Array(k),H.usedBytes>0&&H.contents.set(Ce.subarray(0,H.usedBytes),0)}},resizeFileStorage(H,k){if(H.usedBytes!=k)if(k==0)H.contents=null,H.usedBytes=0;else{var ue=H.contents;H.contents=new Uint8Array(k),ue&&H.contents.set(ue.subarray(0,Math.min(k,H.usedBytes))),H.usedBytes=k}},node_ops:{getattr(H){var k={};return k.dev=Me.isChrdev(H.mode)?H.id:1,k.ino=H.id,k.mode=H.mode,k.nlink=1,k.uid=0,k.gid=0,k.rdev=H.rdev,Me.isDir(H.mode)?k.size=4096:Me.isFile(H.mode)?k.size=H.usedBytes:Me.isLink(H.mode)?k.size=H.link.length:k.size=0,k.atime=new Date(H.timestamp),k.mtime=new Date(H.timestamp),k.ctime=new Date(H.timestamp),k.blksize=4096,k.blocks=Math.ceil(k.size/k.blksize),k},setattr(H,k){k.mode!==void 0&&(H.mode=k.mode),k.timestamp!==void 0&&(H.timestamp=k.timestamp),k.size!==void 0&&kn.resizeFileStorage(H,k.size)},lookup(H,k){throw Me.genericErrors[44]},mknod(H,k,ue,de){return kn.createNode(H,k,ue,de)},rename(H,k,ue){if(Me.isDir(H.mode)){var de;try{de=Me.lookupNode(k,ue)}catch{}if(de)for(var Ce in de.contents)throw new Me.ErrnoError(55)}delete H.parent.contents[H.name],H.parent.timestamp=Date.now(),H.name=ue,k.contents[ue]=H,k.timestamp=H.parent.timestamp,H.parent=k},unlink(H,k){delete H.contents[k],H.timestamp=Date.now()},rmdir(H,k){var ue=Me.lookupNode(H,k);for(var de in ue.contents)throw new Me.ErrnoError(55);delete H.contents[k],H.timestamp=Date.now()},readdir(H){var k=[".",".."];for(var ue in H.contents)H.contents.hasOwnProperty(ue)&&k.push(ue);return k},symlink(H,k,ue){var de=kn.createNode(H,k,41471,0);return de.link=ue,de},readlink(H){if(!Me.isLink(H.mode))throw new Me.ErrnoError(28);return H.link}},stream_ops:{read(H,k,ue,de,Ce){var qe=H.node.contents;if(Ce>=H.node.usedBytes)return 0;var Ze=Math.min(H.node.usedBytes-Ce,de);if(Ze>8&&qe.subarray)k.set(qe.subarray(Ce,Ce+Ze),ue);else for(var Je=0;Je<Ze;Je++)k[ue+Je]=qe[Ce+Je];return Ze},write(H,k,ue,de,Ce,qe){if(k.buffer===Ve.buffer&&(qe=!1),!de)return 0;var Ze=H.node;if(Ze.timestamp=Date.now(),k.subarray&&(!Ze.contents||Ze.contents.subarray)){if(qe)return Ze.contents=k.subarray(ue,ue+de),Ze.usedBytes=de,de;if(Ze.usedBytes===0&&Ce===0)return Ze.contents=k.slice(ue,ue+de),Ze.usedBytes=de,de;if(Ce+de<=Ze.usedBytes)return Ze.contents.set(k.subarray(ue,ue+de),Ce),de}if(kn.expandFileStorage(Ze,Ce+de),Ze.contents.subarray&&k.subarray)Ze.contents.set(k.subarray(ue,ue+de),Ce);else for(var Je=0;Je<de;Je++)Ze.contents[Ce+Je]=k[ue+Je];return Ze.usedBytes=Math.max(Ze.usedBytes,Ce+de),de},llseek(H,k,ue){var de=k;if(ue===1?de+=H.position:ue===2&&Me.isFile(H.node.mode)&&(de+=H.node.usedBytes),de<0)throw new Me.ErrnoError(28);return de},allocate(H,k,ue){kn.expandFileStorage(H.node,k+ue),H.node.usedBytes=Math.max(H.node.usedBytes,k+ue)},mmap(H,k,ue,de,Ce){if(!Me.isFile(H.node.mode))throw new Me.ErrnoError(43);var qe,Ze,Je=H.node.contents;if(!(Ce&2)&&Je.buffer===Ve.buffer)Ze=!1,qe=Je.byteOffset;else{if((ue>0||ue+k<Je.length)&&(Je.subarray?Je=Je.subarray(ue,ue+k):Je=Array.prototype.slice.call(Je,ue,ue+k)),Ze=!0,qe=fI(),!qe)throw new Me.ErrnoError(48);Ve.set(Je,qe>>>0)}return{ptr:qe,allocated:Ze}},msync(H,k,ue,de,Ce){return kn.stream_ops.write(H,k,0,de,ue,!1),0}}},e1=(H,k,ue,de)=>{var Ce=`al ${H}`;he(H,qe=>{Ye(qe,`Loading data file "${H}" failed (no arrayBuffer).`),k(new Uint8Array(qe)),Ce&&Fn()},qe=>{if(ue)ue();else throw`Loading data file "${H}" failed.`}),Ce&&Un()},t1=y.preloadPlugins||[];function n1(H,k,ue,de){typeof Browser<"u"&&Browser.init();var Ce=!1;return t1.forEach(function(qe){Ce||qe.canHandle(k)&&(qe.handle(H,k,ue,de),Ce=!0)}),Ce}function l1(H,k,ue,de,Ce,qe,Ze,Je,ot,Et){var _t=k?bu.resolve(yl.join2(H,k)):H;function ln(Qt){function kt(Rn){Et&&Et(),Je||Me.createDataFile(H,k,Rn,de,Ce,ot),qe&&qe(),Fn()}n1(Qt,_t,kt,()=>{Ze&&Ze(),Fn()})||kt(Qt)}Un(),typeof ue=="string"?e1(ue,Qt=>ln(Qt),Ze):ln(ue)}function s1(H){var k={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},ue=k[H];if(typeof ue>"u")throw new Error(`Unknown file open mode: ${H}`);return ue}function th(H,k){var ue=0;return H&&(ue|=365),k&&(ue|=146),ue}var Me={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,lookupPath:(H,k={})=>{if(H=bu.resolve(H),!H)return{path:"",node:null};var ue={follow_mount:!0,recurse_count:0};if(k=Object.assign(ue,k),k.recurse_count>8)throw new Me.ErrnoError(32);for(var de=H.split("/").filter(ln=>!!ln),Ce=Me.root,qe="/",Ze=0;Ze<de.length;Ze++){var Je=Ze===de.length-1;if(Je&&k.parent)break;if(Ce=Me.lookupNode(Ce,de[Ze]),qe=yl.join2(qe,de[Ze]),Me.isMountpoint(Ce)&&(!Je||Je&&k.follow_mount)&&(Ce=Ce.mounted.root),!Je||k.follow)for(var ot=0;Me.isLink(Ce.mode);){var Et=Me.readlink(qe);qe=bu.resolve(yl.dirname(qe),Et);var _t=Me.lookupPath(qe,{recurse_count:k.recurse_count+1});if(Ce=_t.node,ot++>40)throw new Me.ErrnoError(32)}}return{path:qe,node:Ce}},getPath:H=>{for(var k;;){if(Me.isRoot(H)){var ue=H.mount.mountpoint;return k?ue[ue.length-1]!=="/"?`${ue}/${k}`:ue+k:ue}k=k?`${H.name}/${k}`:H.name,H=H.parent}},hashName:(H,k)=>{for(var ue=0,de=0;de<k.length;de++)ue=(ue<<5)-ue+k.charCodeAt(de)|0;return(H+ue>>>0)%Me.nameTable.length},hashAddNode:H=>{var k=Me.hashName(H.parent.id,H.name);H.name_next=Me.nameTable[k],Me.nameTable[k]=H},hashRemoveNode:H=>{var k=Me.hashName(H.parent.id,H.name);if(Me.nameTable[k]===H)Me.nameTable[k]=H.name_next;else for(var ue=Me.nameTable[k];ue;){if(ue.name_next===H){ue.name_next=H.name_next;break}ue=ue.name_next}},lookupNode:(H,k)=>{var ue=Me.mayLookup(H);if(ue)throw new Me.ErrnoError(ue,H);for(var de=Me.hashName(H.id,k),Ce=Me.nameTable[de];Ce;Ce=Ce.name_next){var qe=Ce.name;if(Ce.parent.id===H.id&&qe===k)return Ce}return Me.lookup(H,k)},createNode:(H,k,ue,de)=>{var Ce=new Me.FSNode(H,k,ue,de);return Me.hashAddNode(Ce),Ce},destroyNode:H=>{Me.hashRemoveNode(H)},isRoot:H=>H===H.parent,isMountpoint:H=>!!H.mounted,isFile:H=>(H&61440)===32768,isDir:H=>(H&61440)===16384,isLink:H=>(H&61440)===40960,isChrdev:H=>(H&61440)===8192,isBlkdev:H=>(H&61440)===24576,isFIFO:H=>(H&61440)===4096,isSocket:H=>(H&49152)===49152,flagsToPermissionString:H=>{var k=["r","w","rw"][H&3];return H&512&&(k+="w"),k},nodePermissions:(H,k)=>Me.ignorePermissions?0:k.includes("r")&&!(H.mode&292)||k.includes("w")&&!(H.mode&146)||k.includes("x")&&!(H.mode&73)?2:0,mayLookup:H=>{var k=Me.nodePermissions(H,"x");return k||(H.node_ops.lookup?0:2)},mayCreate:(H,k)=>{try{var ue=Me.lookupNode(H,k);return 20}catch{}return Me.nodePermissions(H,"wx")},mayDelete:(H,k,ue)=>{var de;try{de=Me.lookupNode(H,k)}catch(qe){return qe.errno}var Ce=Me.nodePermissions(H,"wx");if(Ce)return Ce;if(ue){if(!Me.isDir(de.mode))return 54;if(Me.isRoot(de)||Me.getPath(de)===Me.cwd())return 10}else if(Me.isDir(de.mode))return 31;return 0},mayOpen:(H,k)=>H?Me.isLink(H.mode)?32:Me.isDir(H.mode)&&(Me.flagsToPermissionString(k)!=="r"||k&512)?31:Me.nodePermissions(H,Me.flagsToPermissionString(k)):44,MAX_OPEN_FDS:4096,nextfd:()=>{for(var H=0;H<=Me.MAX_OPEN_FDS;H++)if(!Me.streams[H])return H;throw new Me.ErrnoError(33)},getStreamChecked:H=>{var k=Me.getStream(H);if(!k)throw new Me.ErrnoError(8);return k},getStream:H=>Me.streams[H],createStream:(H,k=-1)=>(Me.FSStream||(Me.FSStream=function(){this.shared={}},Me.FSStream.prototype={},Object.defineProperties(Me.FSStream.prototype,{object:{get(){return this.node},set(ue){this.node=ue}},isRead:{get(){return(this.flags&2097155)!==1}},isWrite:{get(){return(this.flags&2097155)!==0}},isAppend:{get(){return this.flags&1024}},flags:{get(){return this.shared.flags},set(ue){this.shared.flags=ue}},position:{get(){return this.shared.position},set(ue){this.shared.position=ue}}})),H=Object.assign(new Me.FSStream,H),k==-1&&(k=Me.nextfd()),H.fd=k,Me.streams[k]=H,H),closeStream:H=>{Me.streams[H]=null},chrdev_stream_ops:{open:H=>{var k=Me.getDevice(H.node.rdev);H.stream_ops=k.stream_ops,H.stream_ops.open&&H.stream_ops.open(H)},llseek:()=>{throw new Me.ErrnoError(70)}},major:H=>H>>8,minor:H=>H&255,makedev:(H,k)=>H<<8|k,registerDevice:(H,k)=>{Me.devices[H]={stream_ops:k}},getDevice:H=>Me.devices[H],getMounts:H=>{for(var k=[],ue=[H];ue.length;){var de=ue.pop();k.push(de),ue.push.apply(ue,de.mounts)}return k},syncfs:(H,k)=>{typeof H=="function"&&(k=H,H=!1),Me.syncFSRequests++,Me.syncFSRequests>1&&oe(`warning: ${Me.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var ue=Me.getMounts(Me.root.mount),de=0;function Ce(Ze){return Me.syncFSRequests--,k(Ze)}function qe(Ze){if(Ze)return qe.errored?void 0:(qe.errored=!0,Ce(Ze));++de>=ue.length&&Ce(null)}ue.forEach(Ze=>{if(!Ze.type.syncfs)return qe(null);Ze.type.syncfs(Ze,H,qe)})},mount:(H,k,ue)=>{var de=ue==="/",Ce=!ue,qe;if(de&&Me.root)throw new Me.ErrnoError(10);if(!de&&!Ce){var Ze=Me.lookupPath(ue,{follow_mount:!1});if(ue=Ze.path,qe=Ze.node,Me.isMountpoint(qe))throw new Me.ErrnoError(10);if(!Me.isDir(qe.mode))throw new Me.ErrnoError(54)}var Je={type:H,opts:k,mountpoint:ue,mounts:[]},ot=H.mount(Je);return ot.mount=Je,Je.root=ot,de?Me.root=ot:qe&&(qe.mounted=Je,qe.mount&&qe.mount.mounts.push(Je)),ot},unmount:H=>{var k=Me.lookupPath(H,{follow_mount:!1});if(!Me.isMountpoint(k.node))throw new Me.ErrnoError(28);var ue=k.node,de=ue.mounted,Ce=Me.getMounts(de);Object.keys(Me.nameTable).forEach(Ze=>{for(var Je=Me.nameTable[Ze];Je;){var ot=Je.name_next;Ce.includes(Je.mount)&&Me.destroyNode(Je),Je=ot}}),ue.mounted=null;var qe=ue.mount.mounts.indexOf(de);ue.mount.mounts.splice(qe,1)},lookup:(H,k)=>H.node_ops.lookup(H,k),mknod:(H,k,ue)=>{var de=Me.lookupPath(H,{parent:!0}),Ce=de.node,qe=yl.basename(H);if(!qe||qe==="."||qe==="..")throw new Me.ErrnoError(28);var Ze=Me.mayCreate(Ce,qe);if(Ze)throw new Me.ErrnoError(Ze);if(!Ce.node_ops.mknod)throw new Me.ErrnoError(63);return Ce.node_ops.mknod(Ce,qe,k,ue)},create:(H,k)=>(k=k!==void 0?k:438,k&=4095,k|=32768,Me.mknod(H,k,0)),mkdir:(H,k)=>(k=k!==void 0?k:511,k&=1023,k|=16384,Me.mknod(H,k,0)),mkdirTree:(H,k)=>{for(var ue=H.split("/"),de="",Ce=0;Ce<ue.length;++Ce)if(ue[Ce]){de+="/"+ue[Ce];try{Me.mkdir(de,k)}catch(qe){if(qe.errno!=20)throw qe}}},mkdev:(H,k,ue)=>(typeof ue>"u"&&(ue=k,k=438),k|=8192,Me.mknod(H,k,ue)),symlink:(H,k)=>{if(!bu.resolve(H))throw new Me.ErrnoError(44);var ue=Me.lookupPath(k,{parent:!0}),de=ue.node;if(!de)throw new Me.ErrnoError(44);var Ce=yl.basename(k),qe=Me.mayCreate(de,Ce);if(qe)throw new Me.ErrnoError(qe);if(!de.node_ops.symlink)throw new Me.ErrnoError(63);return de.node_ops.symlink(de,Ce,H)},rename:(H,k)=>{var ue=yl.dirname(H),de=yl.dirname(k),Ce=yl.basename(H),qe=yl.basename(k),Ze,Je,ot;if(Ze=Me.lookupPath(H,{parent:!0}),Je=Ze.node,Ze=Me.lookupPath(k,{parent:!0}),ot=Ze.node,!Je||!ot)throw new Me.ErrnoError(44);if(Je.mount!==ot.mount)throw new Me.ErrnoError(75);var Et=Me.lookupNode(Je,Ce),_t=bu.relative(H,de);if(_t.charAt(0)!==".")throw new Me.ErrnoError(28);if(_t=bu.relative(k,ue),_t.charAt(0)!==".")throw new Me.ErrnoError(55);var ln;try{ln=Me.lookupNode(ot,qe)}catch{}if(Et!==ln){var Qt=Me.isDir(Et.mode),kt=Me.mayDelete(Je,Ce,Qt);if(kt)throw new Me.ErrnoError(kt);if(kt=ln?Me.mayDelete(ot,qe,Qt):Me.mayCreate(ot,qe),kt)throw new Me.ErrnoError(kt);if(!Je.node_ops.rename)throw new Me.ErrnoError(63);if(Me.isMountpoint(Et)||ln&&Me.isMountpoint(ln))throw new Me.ErrnoError(10);if(ot!==Je&&(kt=Me.nodePermissions(Je,"w"),kt))throw new Me.ErrnoError(kt);Me.hashRemoveNode(Et);try{Je.node_ops.rename(Et,ot,qe)}catch(Rn){throw Rn}finally{Me.hashAddNode(Et)}}},rmdir:H=>{var k=Me.lookupPath(H,{parent:!0}),ue=k.node,de=yl.basename(H),Ce=Me.lookupNode(ue,de),qe=Me.mayDelete(ue,de,!0);if(qe)throw new Me.ErrnoError(qe);if(!ue.node_ops.rmdir)throw new Me.ErrnoError(63);if(Me.isMountpoint(Ce))throw new Me.ErrnoError(10);ue.node_ops.rmdir(ue,de),Me.destroyNode(Ce)},readdir:H=>{var k=Me.lookupPath(H,{follow:!0}),ue=k.node;if(!ue.node_ops.readdir)throw new Me.ErrnoError(54);return ue.node_ops.readdir(ue)},unlink:H=>{var k=Me.lookupPath(H,{parent:!0}),ue=k.node;if(!ue)throw new Me.ErrnoError(44);var de=yl.basename(H),Ce=Me.lookupNode(ue,de),qe=Me.mayDelete(ue,de,!1);if(qe)throw new Me.ErrnoError(qe);if(!ue.node_ops.unlink)throw new Me.ErrnoError(63);if(Me.isMountpoint(Ce))throw new Me.ErrnoError(10);ue.node_ops.unlink(ue,de),Me.destroyNode(Ce)},readlink:H=>{var k=Me.lookupPath(H),ue=k.node;if(!ue)throw new Me.ErrnoError(44);if(!ue.node_ops.readlink)throw new Me.ErrnoError(28);return bu.resolve(Me.getPath(ue.parent),ue.node_ops.readlink(ue))},stat:(H,k)=>{var ue=Me.lookupPath(H,{follow:!k}),de=ue.node;if(!de)throw new Me.ErrnoError(44);if(!de.node_ops.getattr)throw new Me.ErrnoError(63);return de.node_ops.getattr(de)},lstat:H=>Me.stat(H,!0),chmod:(H,k,ue)=>{var de;if(typeof H=="string"){var Ce=Me.lookupPath(H,{follow:!ue});de=Ce.node}else de=H;if(!de.node_ops.setattr)throw new Me.ErrnoError(63);de.node_ops.setattr(de,{mode:k&4095|de.mode&-4096,timestamp:Date.now()})},lchmod:(H,k)=>{Me.chmod(H,k,!0)},fchmod:(H,k)=>{var ue=Me.getStreamChecked(H);Me.chmod(ue.node,k)},chown:(H,k,ue,de)=>{var Ce;if(typeof H=="string"){var qe=Me.lookupPath(H,{follow:!de});Ce=qe.node}else Ce=H;if(!Ce.node_ops.setattr)throw new Me.ErrnoError(63);Ce.node_ops.setattr(Ce,{timestamp:Date.now()})},lchown:(H,k,ue)=>{Me.chown(H,k,ue,!0)},fchown:(H,k,ue)=>{var de=Me.getStreamChecked(H);Me.chown(de.node,k,ue)},truncate:(H,k)=>{if(k<0)throw new Me.ErrnoError(28);var ue;if(typeof H=="string"){var de=Me.lookupPath(H,{follow:!0});ue=de.node}else ue=H;if(!ue.node_ops.setattr)throw new Me.ErrnoError(63);if(Me.isDir(ue.mode))throw new Me.ErrnoError(31);if(!Me.isFile(ue.mode))throw new Me.ErrnoError(28);var Ce=Me.nodePermissions(ue,"w");if(Ce)throw new Me.ErrnoError(Ce);ue.node_ops.setattr(ue,{size:k,timestamp:Date.now()})},ftruncate:(H,k)=>{var ue=Me.getStreamChecked(H);if(!(ue.flags&2097155))throw new Me.ErrnoError(28);Me.truncate(ue.node,k)},utime:(H,k,ue)=>{var de=Me.lookupPath(H,{follow:!0}),Ce=de.node;Ce.node_ops.setattr(Ce,{timestamp:Math.max(k,ue)})},open:(H,k,ue)=>{if(H==="")throw new Me.ErrnoError(44);k=typeof k=="string"?s1(k):k,ue=typeof ue>"u"?438:ue,k&64?ue=ue&4095|32768:ue=0;var de;if(typeof H=="object")de=H;else{H=yl.normalize(H);try{var Ce=Me.lookupPath(H,{follow:!(k&131072)});de=Ce.node}catch{}}var qe=!1;if(k&64)if(de){if(k&128)throw new Me.ErrnoError(20)}else de=Me.mknod(H,ue,0),qe=!0;if(!de)throw new Me.ErrnoError(44);if(Me.isChrdev(de.mode)&&(k&=-513),k&65536&&!Me.isDir(de.mode))throw new Me.ErrnoError(54);if(!qe){var Ze=Me.mayOpen(de,k);if(Ze)throw new Me.ErrnoError(Ze)}k&512&&!qe&&Me.truncate(de,0),k&=-131713;var Je=Me.createStream({node:de,path:Me.getPath(de),flags:k,seekable:!0,position:0,stream_ops:de.stream_ops,ungotten:[],error:!1});return Je.stream_ops.open&&Je.stream_ops.open(Je),y.logReadFiles&&!(k&1)&&(Me.readFiles||(Me.readFiles={}),H in Me.readFiles||(Me.readFiles[H]=1)),Je},close:H=>{if(Me.isClosed(H))throw new Me.ErrnoError(8);H.getdents&&(H.getdents=null);try{H.stream_ops.close&&H.stream_ops.close(H)}catch(k){throw k}finally{Me.closeStream(H.fd)}H.fd=null},isClosed:H=>H.fd===null,llseek:(H,k,ue)=>{if(Me.isClosed(H))throw new Me.ErrnoError(8);if(!H.seekable||!H.stream_ops.llseek)throw new Me.ErrnoError(70);if(ue!=0&&ue!=1&&ue!=2)throw new Me.ErrnoError(28);return H.position=H.stream_ops.llseek(H,k,ue),H.ungotten=[],H.position},read:(H,k,ue,de,Ce)=>{if(de<0||Ce<0)throw new Me.ErrnoError(28);if(Me.isClosed(H))throw new Me.ErrnoError(8);if((H.flags&2097155)===1)throw new Me.ErrnoError(8);if(Me.isDir(H.node.mode))throw new Me.ErrnoError(31);if(!H.stream_ops.read)throw new Me.ErrnoError(28);var qe=typeof Ce<"u";if(!qe)Ce=H.position;else if(!H.seekable)throw new Me.ErrnoError(70);var Ze=H.stream_ops.read(H,k,ue,de,Ce);return qe||(H.position+=Ze),Ze},write:(H,k,ue,de,Ce,qe)=>{if(de<0||Ce<0)throw new Me.ErrnoError(28);if(Me.isClosed(H))throw new Me.ErrnoError(8);if(!(H.flags&2097155))throw new Me.ErrnoError(8);if(Me.isDir(H.node.mode))throw new Me.ErrnoError(31);if(!H.stream_ops.write)throw new Me.ErrnoError(28);H.seekable&&H.flags&1024&&Me.llseek(H,0,2);var Ze=typeof Ce<"u";if(!Ze)Ce=H.position;else if(!H.seekable)throw new Me.ErrnoError(70);var Je=H.stream_ops.write(H,k,ue,de,Ce,qe);return Ze||(H.position+=Je),Je},allocate:(H,k,ue)=>{if(Me.isClosed(H))throw new Me.ErrnoError(8);if(k<0||ue<=0)throw new Me.ErrnoError(28);if(!(H.flags&2097155))throw new Me.ErrnoError(8);if(!Me.isFile(H.node.mode)&&!Me.isDir(H.node.mode))throw new Me.ErrnoError(43);if(!H.stream_ops.allocate)throw new Me.ErrnoError(138);H.stream_ops.allocate(H,k,ue)},mmap:(H,k,ue,de,Ce)=>{if(de&2&&!(Ce&2)&&(H.flags&2097155)!==2)throw new Me.ErrnoError(2);if((H.flags&2097155)===1)throw new Me.ErrnoError(2);if(!H.stream_ops.mmap)throw new Me.ErrnoError(43);return H.stream_ops.mmap(H,k,ue,de,Ce)},msync:(H,k,ue,de,Ce)=>H.stream_ops.msync?H.stream_ops.msync(H,k,ue,de,Ce):0,munmap:H=>0,ioctl:(H,k,ue)=>{if(!H.stream_ops.ioctl)throw new Me.ErrnoError(59);return H.stream_ops.ioctl(H,k,ue)},readFile:(H,k={})=>{if(k.flags=k.flags||0,k.encoding=k.encoding||"binary",k.encoding!=="utf8"&&k.encoding!=="binary")throw new Error(`Invalid encoding type "${k.encoding}"`);var ue,de=Me.open(H,k.flags),Ce=Me.stat(H),qe=Ce.size,Ze=new Uint8Array(qe);return Me.read(de,Ze,0,qe,0),k.encoding==="utf8"?ue=Pu(Ze,0):k.encoding==="binary"&&(ue=Ze),Me.close(de),ue},writeFile:(H,k,ue={})=>{ue.flags=ue.flags||577;var de=Me.open(H,ue.flags,ue.mode);if(typeof k=="string"){var Ce=new Uint8Array(oc(k)+1),qe=zc(k,Ce,0,Ce.length);Me.write(de,Ce,0,qe,void 0,ue.canOwn)}else if(ArrayBuffer.isView(k))Me.write(de,k,0,k.byteLength,void 0,ue.canOwn);else throw new Error("Unsupported data type");Me.close(de)},cwd:()=>Me.currentPath,chdir:H=>{var k=Me.lookupPath(H,{follow:!0});if(k.node===null)throw new Me.ErrnoError(44);if(!Me.isDir(k.node.mode))throw new Me.ErrnoError(54);var ue=Me.nodePermissions(k.node,"x");if(ue)throw new Me.ErrnoError(ue);Me.currentPath=k.path},createDefaultDirectories:()=>{Me.mkdir("/tmp"),Me.mkdir("/home"),Me.mkdir("/home/web_user")},createDefaultDevices:()=>{Me.mkdir("/dev"),Me.registerDevice(Me.makedev(1,3),{read:()=>0,write:(de,Ce,qe,Ze,Je)=>Ze}),Me.mkdev("/dev/null",Me.makedev(1,3)),ka.register(Me.makedev(5,0),ka.default_tty_ops),ka.register(Me.makedev(6,0),ka.default_tty1_ops),Me.mkdev("/dev/tty",Me.makedev(5,0)),Me.mkdev("/dev/tty1",Me.makedev(6,0));var H=new Uint8Array(1024),k=0,ue=()=>(k===0&&(k=vc(H).byteLength),H[--k]);Me.createDevice("/dev","random",ue),Me.createDevice("/dev","urandom",ue),Me.mkdir("/dev/shm"),Me.mkdir("/dev/shm/tmp")},createSpecialDirectories:()=>{Me.mkdir("/proc");var H=Me.mkdir("/proc/self");Me.mkdir("/proc/self/fd"),Me.mount({mount:()=>{var k=Me.createNode(H,"fd",16895,73);return k.node_ops={lookup:(ue,de)=>{var Ce=+de,qe=Me.getStreamChecked(Ce),Ze={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>qe.path}};return Ze.parent=Ze,Ze}},k}},{},"/proc/self/fd")},createStandardStreams:()=>{y.stdin?Me.createDevice("/dev","stdin",y.stdin):Me.symlink("/dev/tty","/dev/stdin"),y.stdout?Me.createDevice("/dev","stdout",null,y.stdout):Me.symlink("/dev/tty","/dev/stdout"),y.stderr?Me.createDevice("/dev","stderr",null,y.stderr):Me.symlink("/dev/tty1","/dev/stderr"),Me.open("/dev/stdin",0),Me.open("/dev/stdout",1),Me.open("/dev/stderr",1)},ensureErrnoError:()=>{Me.ErrnoError||(Me.ErrnoError=function(k,ue){this.name="ErrnoError",this.node=ue,this.setErrno=function(de){this.errno=de},this.setErrno(k),this.message="FS error"},Me.ErrnoError.prototype=new Error,Me.ErrnoError.prototype.constructor=Me.ErrnoError,[44].forEach(H=>{Me.genericErrors[H]=new Me.ErrnoError(H),Me.genericErrors[H].stack="<generic error, no stack>"}))},staticInit:()=>{Me.ensureErrnoError(),Me.nameTable=new Array(4096),Me.mount(kn,{},"/"),Me.createDefaultDirectories(),Me.createDefaultDevices(),Me.createSpecialDirectories(),Me.filesystems={MEMFS:kn}},init:(H,k,ue)=>{Me.init.initialized=!0,Me.ensureErrnoError(),y.stdin=H||y.stdin,y.stdout=k||y.stdout,y.stderr=ue||y.stderr,Me.createStandardStreams()},quit:()=>{Me.init.initialized=!1;for(var H=0;H<Me.streams.length;H++){var k=Me.streams[H];k&&Me.close(k)}},findObject:(H,k)=>{var ue=Me.analyzePath(H,k);return ue.exists?ue.object:null},analyzePath:(H,k)=>{try{var ue=Me.lookupPath(H,{follow:!k});H=ue.path}catch{}var de={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var ue=Me.lookupPath(H,{parent:!0});de.parentExists=!0,de.parentPath=ue.path,de.parentObject=ue.node,de.name=yl.basename(H),ue=Me.lookupPath(H,{follow:!k}),de.exists=!0,de.path=ue.path,de.object=ue.node,de.name=ue.node.name,de.isRoot=ue.path==="/"}catch(Ce){de.error=Ce.errno}return de},createPath:(H,k,ue,de)=>{H=typeof H=="string"?H:Me.getPath(H);for(var Ce=k.split("/").reverse();Ce.length;){var qe=Ce.pop();if(qe){var Ze=yl.join2(H,qe);try{Me.mkdir(Ze)}catch{}H=Ze}}return Ze},createFile:(H,k,ue,de,Ce)=>{var qe=yl.join2(typeof H=="string"?H:Me.getPath(H),k),Ze=th(de,Ce);return Me.create(qe,Ze)},createDataFile:(H,k,ue,de,Ce,qe)=>{var Ze=k;H&&(H=typeof H=="string"?H:Me.getPath(H),Ze=k?yl.join2(H,k):H);var Je=th(de,Ce),ot=Me.create(Ze,Je);if(ue){if(typeof ue=="string"){for(var Et=new Array(ue.length),_t=0,ln=ue.length;_t<ln;++_t)Et[_t]=ue.charCodeAt(_t);ue=Et}Me.chmod(ot,Je|146);var Qt=Me.open(ot,577);Me.write(Qt,ue,0,ue.length,0,qe),Me.close(Qt),Me.chmod(ot,Je)}return ot},createDevice:(H,k,ue,de)=>{var Ce=yl.join2(typeof H=="string"?H:Me.getPath(H),k),qe=th(!!ue,!!de);Me.createDevice.major||(Me.createDevice.major=64);var Ze=Me.makedev(Me.createDevice.major++,0);return Me.registerDevice(Ze,{open:Je=>{Je.seekable=!1},close:Je=>{de&&de.buffer&&de.buffer.length&&de(10)},read:(Je,ot,Et,_t,ln)=>{for(var Qt=0,kt=0;kt<_t;kt++){var Rn;try{Rn=ue()}catch{throw new Me.ErrnoError(29)}if(Rn===void 0&&Qt===0)throw new Me.ErrnoError(6);if(Rn==null)break;Qt++,ot[Et+kt]=Rn}return Qt&&(Je.node.timestamp=Date.now()),Qt},write:(Je,ot,Et,_t,ln)=>{for(var Qt=0;Qt<_t;Qt++)try{de(ot[Et+Qt])}catch{throw new Me.ErrnoError(29)}return _t&&(Je.node.timestamp=Date.now()),Qt}}),Me.mkdev(Ce,qe,Ze)},forceLoadFile:H=>{if(H.isDevice||H.isFolder||H.link||H.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");if(te)try{H.contents=Ic(te(H.url),!0),H.usedBytes=H.contents.length}catch{throw new Me.ErrnoError(29)}else throw new Error("Cannot load without read() or XMLHttpRequest.")},createLazyFile:(H,k,ue,de,Ce)=>{function qe(){this.lengthKnown=!1,this.chunks=[]}if(qe.prototype.get=function(kt){if(!(kt>this.length-1||kt<0)){var Rn=kt%this.chunkSize,ul=kt/this.chunkSize|0;return this.getter(ul)[Rn]}},qe.prototype.setDataGetter=function(kt){this.getter=kt},qe.prototype.cacheLength=function(){var kt=new XMLHttpRequest;if(kt.open("HEAD",ue,!1),kt.send(null),!(kt.status>=200&&kt.status<300||kt.status===304))throw new Error("Couldn't load "+ue+". Status: "+kt.status);var Rn=Number(kt.getResponseHeader("Content-length")),ul,il=(ul=kt.getResponseHeader("Accept-Ranges"))&&ul==="bytes",wl=(ul=kt.getResponseHeader("Content-Encoding"))&&ul==="gzip",Mt=1024*1024;il||(Mt=Rn);var un=(cl,Js)=>{if(cl>Js)throw new Error("invalid range ("+cl+", "+Js+") or no bytes requested!");if(Js>Rn-1)throw new Error("only "+Rn+" bytes available! programmer error!");var es=new XMLHttpRequest;if(es.open("GET",ue,!1),Rn!==Mt&&es.setRequestHeader("Range","bytes="+cl+"-"+Js),es.responseType="arraybuffer",es.overrideMimeType&&es.overrideMimeType("text/plain; charset=x-user-defined"),es.send(null),!(es.status>=200&&es.status<300||es.status===304))throw new Error("Couldn't load "+ue+". Status: "+es.status);return es.response!==void 0?new Uint8Array(es.response||[]):Ic(es.responseText||"",!0)},Es=this;Es.setDataGetter(cl=>{var Js=cl*Mt,es=(cl+1)*Mt-1;if(es=Math.min(es,Rn-1),typeof Es.chunks[cl]>"u"&&(Es.chunks[cl]=un(Js,es)),typeof Es.chunks[cl]>"u")throw new Error("doXHR failed!");return Es.chunks[cl]}),(wl||!Rn)&&(Mt=Rn=1,Rn=this.getter(0).length,Mt=Rn,Te("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=Rn,this._chunkSize=Mt,this.lengthKnown=!0},typeof XMLHttpRequest<"u"){throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var Ze,Je}else var Je={isDevice:!1,url:ue};var ot=Me.createFile(H,k,Je,de,Ce);Je.contents?ot.contents=Je.contents:Je.url&&(ot.contents=null,ot.url=Je.url),Object.defineProperties(ot,{usedBytes:{get:function(){return this.contents.length}}});var Et={},_t=Object.keys(ot.stream_ops);_t.forEach(Qt=>{var kt=ot.stream_ops[Qt];Et[Qt]=function(){return Me.forceLoadFile(ot),kt.apply(null,arguments)}});function ln(Qt,kt,Rn,ul,il){var wl=Qt.node.contents;if(il>=wl.length)return 0;var Mt=Math.min(wl.length-il,ul);if(wl.slice)for(var un=0;un<Mt;un++)kt[Rn+un]=wl[il+un];else for(var un=0;un<Mt;un++)kt[Rn+un]=wl.get(il+un);return Mt}return Et.read=(Qt,kt,Rn,ul,il)=>(Me.forceLoadFile(ot),ln(Qt,kt,Rn,ul,il)),Et.mmap=(Qt,kt,Rn,ul,il)=>{Me.forceLoadFile(ot);var wl=fI();if(!wl)throw new Me.ErrnoError(48);return ln(Qt,Ve,wl,kt,Rn),{ptr:wl,allocated:!0}},ot.stream_ops=Et,ot}},Xu={DEFAULT_POLLMASK:5,calculateAt:function(H,k,ue){if(yl.isAbs(k))return k;var de;if(H===-100)de=Me.cwd();else{var Ce=Xu.getStreamFromFD(H);de=Ce.path}if(k.length==0){if(!ue)throw new Me.ErrnoError(44);return de}return yl.join2(de,k)},doStat:function(H,k,ue){try{var de=H(k)}catch(Je){if(Je&&Je.node&&yl.normalize(k)!==yl.normalize(Me.getPath(Je.node)))return-54;throw Je}Le[ue>>>2]=de.dev,Le[ue+4>>>2]=de.mode,ve[ue+8>>>2]=de.nlink,Le[ue+12>>>2]=de.uid,Le[ue+16>>>2]=de.gid,Le[ue+20>>>2]=de.rdev,We=[de.size>>>0,(je=de.size,+Math.abs(je)>=1?je>0?+Math.floor(je/4294967296)>>>0:~~+Math.ceil((je-+(~~je>>>0))/4294967296)>>>0:0)],Le[ue+24>>>2]=We[0],Le[ue+28>>>2]=We[1],Le[ue+32>>>2]=4096,Le[ue+36>>>2]=de.blocks;var Ce=de.atime.getTime(),qe=de.mtime.getTime(),Ze=de.ctime.getTime();return We=[Math.floor(Ce/1e3)>>>0,(je=Math.floor(Ce/1e3),+Math.abs(je)>=1?je>0?+Math.floor(je/4294967296)>>>0:~~+Math.ceil((je-+(~~je>>>0))/4294967296)>>>0:0)],Le[ue+40>>>2]=We[0],Le[ue+44>>>2]=We[1],ve[ue+48>>>2]=Ce%1e3*1e3,We=[Math.floor(qe/1e3)>>>0,(je=Math.floor(qe/1e3),+Math.abs(je)>=1?je>0?+Math.floor(je/4294967296)>>>0:~~+Math.ceil((je-+(~~je>>>0))/4294967296)>>>0:0)],Le[ue+56>>>2]=We[0],Le[ue+60>>>2]=We[1],ve[ue+64>>>2]=qe%1e3*1e3,We=[Math.floor(Ze/1e3)>>>0,(je=Math.floor(Ze/1e3),+Math.abs(je)>=1?je>0?+Math.floor(je/4294967296)>>>0:~~+Math.ceil((je-+(~~je>>>0))/4294967296)>>>0:0)],Le[ue+72>>>2]=We[0],Le[ue+76>>>2]=We[1],ve[ue+80>>>2]=Ze%1e3*1e3,We=[de.ino>>>0,(je=de.ino,+Math.abs(je)>=1?je>0?+Math.floor(je/4294967296)>>>0:~~+Math.ceil((je-+(~~je>>>0))/4294967296)>>>0:0)],Le[ue+88>>>2]=We[0],Le[ue+92>>>2]=We[1],0},doMsync:function(H,k,ue,de,Ce){if(!Me.isFile(k.node.mode))throw new Me.ErrnoError(43);if(de&2)return 0;var qe=_e.slice(H,H+ue);Me.msync(k,qe,Ce,ue,de)},varargs:void 0,get(){Xu.varargs+=4;var H=Le[Xu.varargs-4>>>2];return H},getStr(H){var k=cc(H);return k},getStreamFromFD:function(H){var k=Me.getStreamChecked(H);return k}};function r1(H,k){H>>>=0,k>>>=0;var ue=0;return Ui().forEach(function(de,Ce){var qe=k+ue;ve[H+Ce*4>>>2]=qe,Jd(de,qe),ue+=de.length+1}),0}function nh(H,k){H>>>=0,k>>>=0;var ue=Ui();ve[H>>>2]=ue.length;var de=0;return ue.forEach(function(Ce){de+=Ce.length+1}),ve[k>>>2]=de,0}function dc(H){try{var k=Xu.getStreamFromFD(H);return Me.close(k),0}catch(ue){if(typeof Me>"u"||ue.name!=="ErrnoError")throw ue;return ue.errno}}function u1(H,k){k>>>=0;try{var ue=0,de=0,Ce=0,qe=Xu.getStreamFromFD(H),Ze=qe.tty?2:Me.isDir(qe.mode)?3:Me.isLink(qe.mode)?7:4;return Ve[k>>>0]=Ze,Xe[k+2>>>1]=Ce,We=[ue>>>0,(je=ue,+Math.abs(je)>=1?je>0?+Math.floor(je/4294967296)>>>0:~~+Math.ceil((je-+(~~je>>>0))/4294967296)>>>0:0)],Le[k+8>>>2]=We[0],Le[k+12>>>2]=We[1],We=[de>>>0,(je=de,+Math.abs(je)>=1?je>0?+Math.floor(je/4294967296)>>>0:~~+Math.ceil((je-+(~~je>>>0))/4294967296)>>>0:0)],Le[k+16>>>2]=We[0],Le[k+20>>>2]=We[1],0}catch(Je){if(typeof Me>"u"||Je.name!=="ErrnoError")throw Je;return Je.errno}}var a1=(H,k,ue,de)=>{for(var Ce=0,qe=0;qe<ue;qe++){var Ze=ve[k>>>2],Je=ve[k+4>>>2];k+=8;var ot=Me.read(H,Ve,Ze,Je,de);if(ot<0)return-1;if(Ce+=ot,ot<Je)break}return Ce};function i1(H,k,ue,de){k>>>=0,ue>>>=0,de>>>=0;try{var Ce=Xu.getStreamFromFD(H),qe=a1(Ce,k,ue);return ve[de>>>2]=qe,0}catch(Ze){if(typeof Me>"u"||Ze.name!=="ErrnoError")throw Ze;return Ze.errno}}function lh(H,k,ue,de,Ce){var qe=Wt(k,ue);Ce>>>=0;try{if(isNaN(qe))return 61;var Ze=Xu.getStreamFromFD(H);return Me.llseek(Ze,qe,de),We=[Ze.position>>>0,(je=Ze.position,+Math.abs(je)>=1?je>0?+Math.floor(je/4294967296)>>>0:~~+Math.ceil((je-+(~~je>>>0))/4294967296)>>>0:0)],Le[Ce>>>2]=We[0],Le[Ce+4>>>2]=We[1],Ze.getdents&&qe===0&&de===0&&(Ze.getdents=null),0}catch(Je){if(typeof Me>"u"||Je.name!=="ErrnoError")throw Je;return Je.errno}}var o1=(H,k,ue,de)=>{for(var Ce=0,qe=0;qe<ue;qe++){var Ze=ve[k>>>2],Je=ve[k+4>>>2];k+=8;var ot=Me.write(H,Ve,Ze,Je,de);if(ot<0)return-1;Ce+=ot}return Ce};function c1(H,k,ue,de){k>>>=0,ue>>>=0,de>>>=0;try{var Ce=Xu.getStreamFromFD(H),qe=o1(Ce,k,ue);return ve[de>>>2]=qe,0}catch(Ze){if(typeof Me>"u"||Ze.name!=="ErrnoError")throw Ze;return Ze.errno}}var h1=(H,k)=>{for(var ue=0,de=0;de<=k;ue+=H[de++]);return ue},II=[31,29,31,30,31,30,31,31,30,31,30,31],sh=[31,28,31,30,31,30,31,31,30,31,30,31],dI=(H,k)=>{for(var ue=new Date(H.getTime());k>0;){var de=Bi(ue.getFullYear()),Ce=ue.getMonth(),qe=(de?II:sh)[Ce];if(k>qe-ue.getDate())k-=qe-ue.getDate()+1,ue.setDate(1),Ce<11?ue.setMonth(Ce+1):(ue.setMonth(0),ue.setFullYear(ue.getFullYear()+1));else return ue.setDate(ue.getDate()+k),ue}return ue},f1=(H,k)=>{Ve.set(H,k>>>0)};function I1(H,k,ue,de){H>>>=0,k>>>=0,ue>>>=0,de>>>=0;var Ce=Le[de+40>>>2],qe={tm_sec:Le[de>>>2],tm_min:Le[de+4>>>2],tm_hour:Le[de+8>>>2],tm_mday:Le[de+12>>>2],tm_mon:Le[de+16>>>2],tm_year:Le[de+20>>>2],tm_wday:Le[de+24>>>2],tm_yday:Le[de+28>>>2],tm_isdst:Le[de+32>>>2],tm_gmtoff:Le[de+36>>>2],tm_zone:Ce?cc(Ce):""},Ze=cc(ue),Je={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var ot in Je)Ze=Ze.replace(new RegExp(ot,"g"),Je[ot]);var Et=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],_t=["January","February","March","April","May","June","July","August","September","October","November","December"];function ln(Mt,un,Es){for(var cl=typeof Mt=="number"?Mt.toString():Mt||"";cl.length<un;)cl=Es[0]+cl;return cl}function Qt(Mt,un){return ln(Mt,un,"0")}function kt(Mt,un){function Es(Js){return Js<0?-1:Js>0?1:0}var cl;return(cl=Es(Mt.getFullYear()-un.getFullYear()))===0&&(cl=Es(Mt.getMonth()-un.getMonth()))===0&&(cl=Es(Mt.getDate()-un.getDate())),cl}function Rn(Mt){switch(Mt.getDay()){case 0:return new Date(Mt.getFullYear()-1,11,29);case 1:return Mt;case 2:return new Date(Mt.getFullYear(),0,3);case 3:return new Date(Mt.getFullYear(),0,2);case 4:return new Date(Mt.getFullYear(),0,1);case 5:return new Date(Mt.getFullYear()-1,11,31);case 6:return new Date(Mt.getFullYear()-1,11,30)}}function ul(Mt){var un=dI(new Date(Mt.tm_year+1900,0,1),Mt.tm_yday),Es=new Date(un.getFullYear(),0,4),cl=new Date(un.getFullYear()+1,0,4),Js=Rn(Es),es=Rn(cl);return kt(Js,un)<=0?kt(es,un)<=0?un.getFullYear()+1:un.getFullYear():un.getFullYear()-1}var il={"%a":Mt=>Et[Mt.tm_wday].substring(0,3),"%A":Mt=>Et[Mt.tm_wday],"%b":Mt=>_t[Mt.tm_mon].substring(0,3),"%B":Mt=>_t[Mt.tm_mon],"%C":Mt=>{var un=Mt.tm_year+1900;return Qt(un/100|0,2)},"%d":Mt=>Qt(Mt.tm_mday,2),"%e":Mt=>ln(Mt.tm_mday,2," "),"%g":Mt=>ul(Mt).toString().substring(2),"%G":Mt=>ul(Mt),"%H":Mt=>Qt(Mt.tm_hour,2),"%I":Mt=>{var un=Mt.tm_hour;return un==0?un=12:un>12&&(un-=12),Qt(un,2)},"%j":Mt=>Qt(Mt.tm_mday+h1(Bi(Mt.tm_year+1900)?II:sh,Mt.tm_mon-1),3),"%m":Mt=>Qt(Mt.tm_mon+1,2),"%M":Mt=>Qt(Mt.tm_min,2),"%n":()=>`