import"../modulepreload-polyfill.b7f2da20.js";/* empty css               */import{ab as n,C as d,aF as s,cj as M,b7 as E,ck as h,b6 as f,cl as y,R as L,cm as N,cn as S,co as T,cp as G,cq as A,N as c,c as g,aC as B,aE as H,aD as I,at as W}from"../three.3f33d046.js";import{M as x}from"../index.1133522a.js";import{g as a,v as r}from"../vis-three.tdcm.es.ba892fff.js";import{g as C}from"../lil-gui.module.min.2435205c.js";import"../index.c0df7946.js";import"../curve.0ba3d968.js";import"../index.0317c091.js";import"../ShaderPass.025732a5.js";import"../vis-three.plugin-orbit-controls.es.1508a7f8.js";import"../index.98a0d82e.js";import"../index.ca8957d4.js";import"../index.bdebbb5d.js";import"../index.5b5c1015.js";import"../index.336b965b.js";import"../vis-three.plugin-transform-controls.es.5244fee5.js";import"../index.9b9e13dd.js";import"../vis-three.plugin-keyboard-manager.es.16e92de2.js";import"../Antdv.7b6104cc.js";import"../index.fd7db63a.js";import"../CSS3DRenderer.56d2804d.js";import"../index.0a430562.js";import"../index.fe593856.js";import"../index.cee1ad1a.js";import"../index.e2e75f8b.js";import"../index.f411c2bc.js";import"../index.457fa50b.js";import"../index.b5597af3.js";import"../vis-three.plugin-pointer-manager.es.28277630.js";import"../index.2c9e736c.js";import"../index.bbdc45c2.js";import"../index.e7386c00.js";import"../index.82f2a702.js";import"../index.82346856.js";import"../vis-three.module-particle.es.2f619925.js";import"../UnrealBloomPass.a03f7d16.js";import"../vis-three.library-modifier.es.9bf56217.js";import"../vis-three.convenient.es.3345d486.js";import"../index.f17582aa.js";import"../vis-three.strategy-orbit-controls-support.es.bfc29c0d.js";import"../index.4caff7a1.js";import"../vis-three.module-helper.es.c2fc8b4c.js";import"../vis-three.library-parser.es.0233fa92.js";import"../vis-three.strategy-multi-renderer.es.91c74cfe.js";import"../vis-three.strategy-selection-prompt.es.9e058aa8.js";import"../vis-three.plugin-loader-manager.es.3fc670d5.js";import"../G6.30609706.js";const o=new x().setDom(document.getElementById("app")).setSize().setStats(!0).play();a.injectEngine=o;const l=a("Scene");o.setSceneBySymbol(r(l));a.injectScene=!0;o.loaderManager.setPath("/examples/");o.loadResourcesAsync(["/video/1.mp4","/video/Redia-HatsuneMiku.mp4"]).then(()=>{const e=a("VideoTexture",{url:"/video/Redia-HatsuneMiku.mp4"}),F=a("MeshBasicMaterial",{map:r(e)}),R=a("BoxGeometry",{width:20,height:20,depth:20});a("Mesh",{geometry:r(R),material:r(F)}),l.background=r(e);const t=new C;t.add(e,"url",["/video/1.mp4","/video/Redia-HatsuneMiku.mp4"]),t.add(e,"wrapS",{"THREE.RepeatWrapping":n,"THREE.ClampToEdgeWrapping":d,"THREE.MirroredRepeatWrapping":s}),t.add(e,"wrapT",{"THREE.RepeatWrapping":n,"THREE.ClampToEdgeWrapping":d,"THREE.MirroredRepeatWrapping":s}),t.add(e,"format",{AlphaFormat:M,RedFormat:E,RedIntegerFormat:h,RGFormat:f,RGIntegerFormat:y,RGBAFormat:L,RGBAIntegerFormat:N,LuminanceFormat:S,LuminanceAlphaFormat:T,DepthFormat:G,DepthStencilFormat:A}),t.add(e,"encoding",{LinearEncoding:void 0,sRGBEncoding:void 0}),t.add(e,"magFilter",{Nearest:c,Linear:g}),t.add(e,"minFilter",{Nearest:c,Linear:g,NearestMipmapNearest:B,NearestMipmapLinear:H,LinearMipmapNearest:I,LinearMipmapLinear:W}),t.add(e,"rotation",-Math.PI,Math.PI,.01),t.add({anisotropy:e.anisotropy},"anisotropy",1,5,1).onChange(u=>{e.anisotropy=2**u});const i=t.addFolder("repeat");i.add(e.repeat,"x",1,5,1),i.add(e.repeat,"y",1,5,1);const p=t.addFolder("offset");p.add(e.offset,"x",-1,1,.1),p.add(e.offset,"y",-1,1,.1);const m=t.addFolder("center");m.add(e.center,"x",-1,1,.1),m.add(e.center,"y",-1,1,.1)});
