import"../modulepreload-polyfill.b7f2da20.js";import{M as m,B as p,a as l,P as d,L as c,X as g,b as u,Z as b}from"../three.837c9bb0.js";import{W as f,C as w}from"../index.1d7ad8b9.js";import{E as y}from"../index.388dadd4.js";import{O as P}from"../index.763ed6df.js";import{R as E}from"../index.9c42f01c.js";import{V as M,b as r}from"../index.8de980d1.js";import{E as O}from"../index.b828c96c.js";import{O as h}from"../index.cfcd8596.js";import{d as C}from"../index.7d48aff8.js";import{O as L}from"../index.f7cac396.js";import"../Pass.1ae4f2a0.js";const t=C({plugins:[f({antialias:!0,alpha:!0}),y({MSAA:!0}),E(),w(),P(),M()],strategy:[O(),h(),L()]}).setDom(document.getElementById("app")).setSize().play();t.orbitControls.autoRotate=!0;const e=t.scene,o=new m(new p(10,10,10),new l({color:"rgb(255, 105, 100)"}));o.position.x=10;e.add(o);const a=new d("rgb(255, 255, 255)",1,30,0);a.position.y=20;e.add(a);const R=new c(o.geometry,new g({color:"yellow"}));e.add(R);const s=new u(o.geometry,new b({color:"blue"}));s.position.x=-10;e.add(s);window.engine=t;const S=document.getElementById("button-group");Object.keys(r).forEach(i=>{const n=document.createElement("button");n.innerText=r[i],n.onclick=()=>{t.setViewpoint(r[i]),t.render()},S.appendChild(n)});
