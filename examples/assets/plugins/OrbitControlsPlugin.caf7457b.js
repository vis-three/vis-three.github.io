import"../modulepreload-polyfill.b7f2da20.js";import{P as s,M as a,B as r,a as d,L as m,b as p}from"../three.837c9bb0.js";import{W as g,C as l}from"../index.1d7ad8b9.js";import{d as c}from"../index.7d48aff8.js";import{O as u}from"../index.763ed6df.js";const t=c({plugins:[g({antialias:!0,alpha:!0}),l(),u()]}).setDom(document.getElementById("app")).setSize(),e=t.scene,o=new s("rgb(255, 255, 255)",1,300,0);o.position.y=30;e.add(o);const n=new a(new r(10,10,10),new d({color:"rgb(255, 105, 100)"}));n.position.x=10;e.add(n);const b=new m(n.geometry);e.add(b);const i=new p(n.geometry);i.position.x=-10;e.add(i);setInterval(()=>{t.render()},1e3/60);
