import"../modulepreload-polyfill.b7f2da20.js";import{M as r,B as i,a,P as s,L as m,b as p}from"../three.837c9bb0.js";import{d}from"../index.7d48aff8.js";import{W as g,C as l}from"../index.1d7ad8b9.js";import{R as c}from"../index.9c42f01c.js";import{E as f}from"../index.388dadd4.js";import{G as u}from"../index.9a7b1aa5.js";import{E as y}from"../index.b828c96c.js";import"../Pass.1ae4f2a0.js";const P=d({plugins:[c(),g({antialias:!0,alpha:!0}),f({WebGLMultisampleRenderTarget:!0}),l(),u()],strategy:[y()]}).setDom(document.getElementById("app")).setSize().play(),e=P.scene,t=new r(new i(10,10,10),new a({color:"rgb(255, 105, 100)"}));t.position.x=10;e.add(t);const n=new s("rgb(255, 255, 255)",1,300,0);n.position.y=30;e.add(n);const b=new m(t.geometry);e.add(b);const o=new p(t.geometry);o.position.x=-10;e.add(o);
