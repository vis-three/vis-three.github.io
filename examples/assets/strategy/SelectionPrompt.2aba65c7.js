import"../modulepreload-polyfill.b7f2da20.js";import{l as d,M as l,B as g,a as f,P as u,L as y,b as h,O as x,f as C}from"../three.3f33d046.js";import{W as E,C as M}from"../index.c0df7946.js";import{E as b}from"../index.0317c091.js";import{R as v}from"../index.0a430562.js";import{g as P}from"../vis-three.plugin-pointer-manager.es.28277630.js";import{E as w}from"../index.b5597af3.js";import{S}from"../index.ca8957d4.js";import{E as z}from"../curve.0ba3d968.js";import{E as L}from"../index.cee1ad1a.js";import{G as B}from"../vis-three.strategy-selection-prompt.es.9e058aa8.js";import"../ShaderPass.025732a5.js";const t=z({plugins:[E({antialias:!0,alpha:!0}),b({MSAA:!0}),M(),v(),P(),w({recursive:!0}),S()],strategy:[L(),B({visibleEdgeColor:new d("rgb(255, 0, 0)")})]}).setDom(document.getElementById("app")).setSize(),a=t.scene,i=new l(new g(10,10,10),new f({color:"rgb(255, 105, 100)"}));function n(o,e){return Math.floor(Math.random()*(e-o+1))+o}for(let o=0;o<5;o+=1){const e=i.clone();e.position.x=n(-50,50),e.position.y=n(-50,50),e.position.z=n(-50,50),a.add(e)}const r=i.clone();r.position.set(10,10,10);for(let o=0;o<5;o+=1){const e=i.clone();e.position.x=n(-50,50),e.position.y=n(-50,50),e.position.z=n(-50,50),r.add(e),a.add(r)}const s=i.clone();s.position.set(-10,-10,-10);for(let o=0;o<5;o+=1){const e=i.clone();e.position.x=n(-50,50),e.position.y=n(-50,50),e.position.z=n(-50,50),s.add(e),a.add(s)}const m=new u("rgb(255, 255, 255)",1,300,0);m.position.y=30;a.add(m);const R=new y(i.geometry);a.add(R);const c=new h(i.geometry);c.position.x=-10;a.add(c);t.play();const p=new x;p.zoom=12;const A=new C;t.renderManager.addEventListener("render",o=>{t.camera.position.x=100*Math.sin(o.total/2),t.camera.position.z=100*Math.cos(o.total/2),t.camera.lookAt(0,0,0)});t.eventManager.addEventListener("mousemove",o=>{t.setSelectionBox(o.intersections.map(e=>e.object))});document.getElementById("orthographicCamera").onclick=()=>{console.log(1),t.setCamera(p).setSize()};document.getElementById("perspectiveCamera").onclick=()=>{t.setCamera(A).setSize()};