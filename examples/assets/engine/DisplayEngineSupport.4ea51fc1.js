import"../modulepreload-polyfill.b7f2da20.js";import{D as a}from"../index.15ca0cbe.js";import{g as t}from"../vis-three.tdcm.es.ba892fff.js";import"../index.c0df7946.js";import"../curve.0ba3d968.js";import"../three.3f33d046.js";import"../index.fd7db63a.js";import"../CSS3DRenderer.56d2804d.js";import"../index.0a430562.js";import"../index.fe593856.js";import"../index.0317c091.js";import"../ShaderPass.025732a5.js";import"../vis-three.plugin-orbit-controls.es.1508a7f8.js";import"../index.82f2a702.js";import"../index.82346856.js";import"../vis-three.module-particle.es.2f619925.js";import"../UnrealBloomPass.a03f7d16.js";import"../vis-three.library-modifier.es.9bf56217.js";import"../vis-three.convenient.es.3345d486.js";import"../index.b5597af3.js";import"../vis-three.plugin-pointer-manager.es.28277630.js";import"../vis-three.strategy-orbit-controls-support.es.bfc29c0d.js";import"../index.cee1ad1a.js";import"../index.e2e75f8b.js";import"../index.4caff7a1.js";import"../vis-three.module-helper.es.c2fc8b4c.js";import"../vis-three.library-parser.es.0233fa92.js";import"../vis-three.strategy-multi-renderer.es.91c74cfe.js";import"../vis-three.plugin-loader-manager.es.3fc670d5.js";import"../G6.30609706.js";import"../Antdv.7b6104cc.js";const i=new a().setDom(document.getElementById("app"));window.engine=i;const o=t("PointLight",{position:{x:30,y:50},distance:100}),e=t("MeshStandardMaterial",{color:"rgb(255, 0, 0)"}),r=t("BoxGeometry",{width:20,height:40,depth:60});t("BoxGeometry",{width:20,height:40,depth:60});const m=t("Mesh",{geometry:r.vid,material:e.vid}),p=t("Scene",{children:[o.vid,m.vid]}),n=t("PerspectiveCamera",{far:1e3,adaptiveWindow:!0,position:{x:60,y:60,z:60}});i.applyConfig(o,e,r,m,p,n);i.setCameraBySymbol(n.vid).setSceneBySymbol(p.vid).setSize().play();
