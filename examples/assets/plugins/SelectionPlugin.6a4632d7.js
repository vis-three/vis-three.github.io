import"../modulepreload-polyfill.b7f2da20.js";import{M as m,B as d,a as l,P as c,L as g,b as p}from"../three.3f33d046.js";import{W as u,C as f}from"../index.c0df7946.js";import{M as w}from"../vis-three.plugin-transform-controls.es.5244fee5.js";import{g as y}from"../vis-three.plugin-pointer-manager.es.28277630.js";import{E}from"../index.b5597af3.js";import{T as M}from"../index.ad994be4.js";import{E as h}from"../curve.0ba3d968.js";import{S as L}from"../index.ca8957d4.js";const e=h({plugins:[u({antialias:!0,alpha:!0}),f(),y(),E(),w(),L()],strategy:[M()]}).setDom(document.getElementById("app")).setSize(),t=e.scene,n=new m(new d(10,10,10),new l({color:"rgb(255, 105, 100)"}));n.position.x=10;t.add(n);const i=new c("rgb(255, 255, 255)",1,300,0);i.position.y=30;t.add(i);const P=new g(n.geometry);t.add(P);const r=new p(n.geometry);r.position.x=-10;t.add(r);window.engine=e;e.render();e.addEventListener("selected",s=>{let o="";s.objects.forEach(a=>{o+=`<div class="selected-elem">${a.uuid}</div>`}),document.getElementById("selected").innerHTML=o,e.render()});
