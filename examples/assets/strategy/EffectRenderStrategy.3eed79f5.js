import"../modulepreload-polyfill.b7f2da20.js";import{M as s,B as i,a as m,P as d,L as p,b as c,V as g}from"../three.3f33d046.js";import{U as f}from"../UnrealBloomPass.a03f7d16.js";import{W as l,C as h}from"../index.c0df7946.js";import{E as P}from"../index.0317c091.js";import{R as u}from"../index.0a430562.js";import{E as w}from"../curve.0ba3d968.js";import{E as y}from"../index.cee1ad1a.js";import"../ShaderPass.025732a5.js";const e=w({plugins:[l({antialias:!0,alpha:!0}),h(),P(),u()],strategy:[y()]}).setDom(document.getElementById("app")).setSize(),o=e.scene,t=new s(new i(10,10,10),new m({color:"rgb(255, 105, 100)"}));t.position.x=10;o.add(t);const n=new d("rgb(255, 255, 255)",1,300,0);n.position.y=30;o.add(n);const M=new p(t.geometry);o.add(M);const r=new c(t.geometry);r.position.x=-10;o.add(r);e.effectComposer.addPass(new f(new g(e.dom.offsetWidth,e.dom.offsetHeight),1.5,0,0));e.play();e.renderManager.addEventListener("render",a=>{e.camera.position.x=100*Math.sin(a.total),e.camera.position.z=100*Math.cos(a.total),e.camera.lookAt(0,0,0)});
