import{w as u}from"./vis-three.plugin-pointer-manager.es.28277630.js";import{m,t as E,b as l}from"./curve.0ba3d968.js";import{E as v}from"./three.3f33d046.js";var d;(function(o){o.POINTERDOWN="pointerdown",o.POINTERUP="pointerup",o.POINTERMOVE="pointermove",o.POINTERENTER="pointerenter",o.POINTERLEAVE="pointerleave",o.CLICK="click",o.DBLCLICK="dblclick",o.CONTEXTMENU="contextmenu"})(d||(d={}));class b extends m{constructor(n){super(),this.filter=new Set,this.recursive=!1,this.penetrate=!1,this.propagation=!1,this.delegation=!1,this.raycaster=new v,this.camera=n.camera,this.scene=n.scene,n.recursive&&(this.recursive=n.recursive),n.penetrate&&(this.penetrate=n.penetrate),n.raycaster&&Object.assign(this.raycaster.params,n.raycaster.params)}setScene(n){return this.scene=n,this}setCamera(n){return this.camera=n,this}addFilterObject(n){return this.filter.add(n),this}removeFilterObject(n){return this.filter.delete(n),this}intersectObject(n){this.raycaster.setFromCamera(n,this.camera);const s=this.filter,c=this.scene.children.filter(p=>!s.has(p));return this.raycaster.intersectObjects(c,this.recursive)}use(n){const s=function(t,r){return Object.assign({},t,r)},c=(t,r)=>{const e=this.intersectObject(t.mouse);if(e.length)if(this.penetrate)for(const h of e)h.object.dispatchEvent(s(t,{type:r,intersection:h}));else{const h=e[0];h.object.dispatchEvent(s(t,{type:r,intersection:h}))}this.dispatchEvent(s(t,{type:r,intersections:e}))},p=["pointerdown","pointerup","mousedown","mouseup","pointermove","click","dblclick","contextmenu"];for(const t of p)n.addEventListener(t,r=>{c(r,t)});const a=new Map;let i=null;return n.addEventListener("pointermove",t=>{const r=this.intersectObject(t.mouse);if(this.penetrate){if(!r.length){a.forEach(e=>{e.object.dispatchEvent(s(t,{type:"pointerleave",intersection:e})),e.object.dispatchEvent(s(t,{type:"mouseleave",intersection:e}))}),a.clear();return}for(const e of r)a.has(e.object)?(e.object.dispatchEvent(s(t,{type:"pointermove",intersection:e})),e.object.dispatchEvent(s(t,{type:"mousemove",intersection:e})),a.delete(e.object)):(e.object.dispatchEvent(s(t,{type:"pointerenter",intersection:e})),e.object.dispatchEvent(s(t,{type:"mouseenter",intersection:e})));for(const e of a.values())e.object.dispatchEvent(s(t,{type:"pointerleave",intersection:e})),e.object.dispatchEvent(s(t,{type:"mouseleave",intersection:e}));a.clear();for(const e of r)a.set(e.object,e)}else{if(!r.length){i&&(i.object.dispatchEvent(s(t,{type:"pointerleave",intersection:i})),i.object.dispatchEvent(s(t,{type:"mouseleave",intersection:i})),i=null);return}const e=r[0];if(!i){e.object.dispatchEvent(s(t,{type:"pointerenter",intersection:e})),e.object.dispatchEvent(s(t,{type:"mouseenter",intersection:e})),i=e;return}if(e.object!==i.object){i.object.dispatchEvent(s(t,{type:"pointerleave",intersection:e})),i.object.dispatchEvent(s(t,{type:"mouseleave",intersection:e})),e.object.dispatchEvent(s(t,{type:"pointerenter",intersection:e})),e.object.dispatchEvent(s(t,{type:"mouseenter",intersection:e})),i=e;return}e.object===i.object&&(e.object.dispatchEvent(s(t,{type:"pointermove",intersection:e})),e.object.dispatchEvent(s(t,{type:"mousemove",intersection:e})))}this.dispatchEvent(s(t,{type:"pointermove",intersections:r})),this.dispatchEvent(s(t,{type:"mousemove",intersections:r}))}),this}}const f="@vis-three/plugin-event-manager",j=E(f),g=function(o){let n,s;return{name:j,deps:u,install(c){const p=new b(Object.assign({scene:c.scene,camera:c.camera},o));p.use(c.pointerManager),c.eventManager=p,n=a=>{c.eventManager.setCamera(a.camera)},s=a=>{c.eventManager.setScene(a.scene)},c.addEventListener(l.SETCAMERA,n),c.addEventListener(l.SETSCENE,s)},dispose(c){c.removeEventListener(l.SETCAMERA,n),c.removeEventListener(l.SETSCENE,s),n=void 0,s=void 0}}};export{g as E,d as a,j as b};
