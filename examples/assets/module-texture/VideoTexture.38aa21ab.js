import"../modulepreload-polyfill.b7f2da20.js";/* empty css               */import{a2 as m,C as n,ah as d,bV as E,bW as M,bX as u,bY as h,bZ as L,R as f,b_ as y,b$ as N,c0 as G,c1 as T,c2 as v,x as B,a5 as S,N as s,d as g,ad as W,af as b,ae as A,ag as H}from"../three.837c9bb0.js";import{M as I}from"../index.7ee6895f.js";import{g as t}from"../vis-three.middleware.es.2e80d21b.js";import{g as x}from"../lil-gui.module.min.095a7f3d.js";import"../index.1d7ad8b9.js";import"../index.7d48aff8.js";import"../index.388dadd4.js";import"../Pass.1ae4f2a0.js";import"../index.763ed6df.js";import"../index.62992928.js";import"../index.f4f5b765.js";import"../index.a87f8394.js";import"../index.9a7b1aa5.js";import"../index.8de980d1.js";import"../index.9f3e0a95.js";import"../vis-three.plugin-keyboard-manager.es.9570acee.js";import"../Antdv.a86c3c0d.js";import"../index.dfadcd6f.js";import"../CSS3DRenderer.d266155a.js";import"../index.9c42f01c.js";import"../index.ddb76977.js";import"../index.b828c96c.js";import"../index.cfcd8596.js";import"../index.f7cac396.js";import"../index.9dfaa1ec.js";import"../index.ce95ade9.js";import"../vis-three.plugin-pointer-manager.es.86f17451.js";import"../index.484afc60.js";import"../index.29f340c8.js";import"../index.cfa4ec79.js";import"../index.ec2b829b.js";import"../index.aa7ffc23.js";import"../vis-three.module-animation-action.es.09a94f96.js";import"../UnrealBloomPass.caa1ad7b.js";import"../index.4192aafc.js";import"../vis-three.convenient.es.83638baf.js";import"../index.e327b72e.js";import"../vis-three.strategy-orbit-controls-support.es.7f0e9f15.js";import"../vis-three.library-parser.es.80d54b6a.js";import"../vis-three.strategy-multi-renderer.es.c7860e7e.js";import"../vis-three.plugin-loader-manager.es.7fbd57ff.js";import"../G6.7a2bba98.js";const r=new I().setDom(document.getElementById("app")).setSize().setStats(!0).play();t.injectEngine=r;const c=t("Scene");r.setSceneBySymbol(c.vid);t.injectScene=!0;r.loaderManager.setPath("/examples/");r.loadResourcesAsync(["/video/1.mp4","/video/Redia-HatsuneMiku.mp4"]).then(()=>{const e=t("VideoTexture",{url:"/video/Redia-HatsuneMiku.mp4"}),F=t("MeshBasicMaterial",{map:e.vid}),l=t("BoxGeometry",{width:20,height:20,depth:20});t("Mesh",{geometry:l.vid,material:F.vid}),c.background=e.vid;const a=new x;a.add(e,"url",["/video/1.mp4","/video/Redia-HatsuneMiku.mp4"]),a.add(e,"wrapS",{"THREE.RepeatWrapping":m,"THREE.ClampToEdgeWrapping":n,"THREE.MirroredRepeatWrapping":d}),a.add(e,"wrapT",{"THREE.RepeatWrapping":m,"THREE.ClampToEdgeWrapping":n,"THREE.MirroredRepeatWrapping":d}),a.add(e,"format",{AlphaFormat:E,RedFormat:M,RedIntegerFormat:u,RGFormat:h,RGIntegerFormat:L,RGBAFormat:f,RGBAIntegerFormat:y,LuminanceFormat:N,LuminanceAlphaFormat:G,DepthFormat:T,DepthStencilFormat:v}),a.add(e,"encoding",{LinearEncoding:B,sRGBEncoding:S}),a.add(e,"magFilter",{Nearest:s,Linear:g}),a.add(e,"minFilter",{Nearest:s,Linear:g,NearestMipmapNearest:W,NearestMipmapLinear:b,LinearMipmapNearest:A,LinearMipmapLinear:H}),a.add(e,"rotation",-Math.PI,Math.PI,.01),a.add({anisotropy:e.anisotropy},"anisotropy",1,5,1).onChange(R=>{e.anisotropy=2**R});const i=a.addFolder("repeat");i.add(e.repeat,"x",1,5,1),i.add(e.repeat,"y",1,5,1);const o=a.addFolder("offset");o.add(e.offset,"x",-1,1,.1),o.add(e.offset,"y",-1,1,.1);const p=a.addFolder("center");p.add(e.center,"x",-1,1,.1),p.add(e.center,"y",-1,1,.1)});
