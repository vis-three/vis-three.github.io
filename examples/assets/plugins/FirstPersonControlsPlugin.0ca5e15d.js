import"../modulepreload-polyfill.b7f2da20.js";import{M as i,B as a,a as s,P as m,L as p,b as d}from"../three.3f33d046.js";import{W as g,C as l}from"../index.c0df7946.js";import{R as c}from"../index.0a430562.js";import{E as f}from"../index.0317c091.js";import{G as u}from"../index.5b5c1015.js";import{F as P,a as y}from"../index.7e498659.js";import{E as w}from"../index.cee1ad1a.js";import{E as h}from"../curve.0ba3d968.js";import"../ShaderPass.025732a5.js";const o=h({plugins:[c(),g({antialias:!0,alpha:!0}),f({WebGLMultisampleRenderTarget:!0}),l(),u(),P({movementSpeed:40,lookSpeed:.1,lookVertical:!1,heightSpeed:!0})],strategy:[w(),y()]}).setDom(document.getElementById("app")).setSize().play(),e=o.scene,t=new i(new a(10,10,10),new s({color:"rgb(255, 105, 100)"}));t.position.x=10;e.add(t);const r=new m("rgb(255, 255, 255)",1,300,0);r.position.y=30;e.add(r);const S=new p(t.geometry);e.add(S);const n=new d(t.geometry);n.position.x=-10;e.add(n);window.engine=o;
