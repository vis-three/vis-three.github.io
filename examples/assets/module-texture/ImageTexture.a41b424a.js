import"../modulepreload-polyfill.b7f2da20.js";/* empty css               */import{c as y,bC as F,ca as M,aE as E,cb as f,cc as B,a1 as m,C as s,ag as g,c0 as h,c1 as w,c2 as L,c3 as V,c4 as j,R as k,c5 as C,c6 as G,c7 as N,c8 as S,c9 as T,w as b,a4 as I,N as d,d as l,ac as A,ae as W,ad as v,af as H}from"../three.237d835c.js";import{M as z}from"../index.790bec74.js";import{g as t}from"../vis-three.middleware.es.7f273029.js";import{g as D}from"../lil-gui.module.min.095a7f3d.js";import"../index.1d3a6ec0.js";import"../index.202ebdec.js";import"../index.2e2f06f6.js";import"../ShaderPass.02f07bc0.js";import"../vis-three.plugin-orbit-controls.es.9991f892.js";import"../index.f318ae8c.js";import"../index.4ec3bfd2.js";import"../index.ea2b9d59.js";import"../index.591a8368.js";import"../index.a30a6c1f.js";import"../index.12fd638d.js";import"../index.32dc3bb0.js";import"../vis-three.plugin-keyboard-manager.es.417ffa7e.js";import"../Antdv.414c4eb5.js";import"../index.edc751ad.js";import"../CSS3DRenderer.ba0f6fa5.js";import"../index.e6be8a02.js";import"../index.2f498209.js";import"../index.117a61e1.js";import"../index.3b8dbf96.js";import"../index.c0475655.js";import"../index.2328f892.js";import"../index.c35e5a3e.js";import"../vis-three.plugin-pointer-manager.es.640cfa1a.js";import"../index.cd2c2c2e.js";import"../index.a089cc34.js";import"../index.bca5cc71.js";import"../index.692e1021.js";import"../index.90db9154.js";import"../vis-three.module-particle.es.8e43cbb8.js";import"../UnrealBloomPass.2cdbe9ee.js";import"../index.ee52b7bf.js";import"../vis-three.convenient.es.7b860830.js";import"../index.bdaae9f1.js";import"../vis-three.strategy-orbit-controls-support.es.706978dc.js";import"../index.d3463d42.js";import"../vis-three.library-parser.es.5c9e4dac.js";import"../vis-three.strategy-multi-renderer.es.a35ffd0a.js";import"../vis-three.strategy-selection-prompt.es.fc4c19e4.js";import"../vis-three.plugin-loader-manager.es.c1771985.js";import"../G6.d44f13fb.js";const r=new z().setDom(document.getElementById("app")).setSize().setStats(!0).play();t.injectEngine=r;const c=t("Scene");r.setSceneBySymbol(c.vid);t.injectScene=!0;r.loaderManager.setPath("/examples/");r.loadResourcesAsync(["/texture/skyBox/snowVillage/nx.jpg","/texture/skyBox/snowVillage/ny.jpg","/texture/skyBox/snowVillage/nz.jpg","/texture/skyBox/snowVillage/px.jpg","/texture/skyBox/snowVillage/py.jpg","/texture/skyBox/snowVillage/pz.jpg"]).then(()=>{const e=t("ImageTexture",{url:"/texture/skyBox/snowVillage/nx.jpg"}),i=t("MeshBasicMaterial",{map:e.vid}),u=t("BoxGeometry",{width:20,height:20,depth:20}),x=t("SphereGeometry",{radius:10});t("Mesh",{geometry:u.vid,material:i.vid,position:{x:-25}}),t("Mesh",{geometry:x.vid,material:i.vid,position:{x:25}}),c.background=e.vid;const a=new D;a.add(e,"url",["/texture/skyBox/snowVillage/nx.jpg","/texture/skyBox/snowVillage/ny.jpg","/texture/skyBox/snowVillage/nz.jpg","/texture/skyBox/snowVillage/px.jpg","/texture/skyBox/snowVillage/py.jpg","/texture/skyBox/snowVillage/pz.jpg"]),a.add(e,"mapping",{UVMapping:y,CubeReflectionMapping:F,CubeRefractionMapping:M,EquirectangularReflectionMapping:E,EquirectangularRefractionMapping:f,CubeUVReflectionMapping:B}),a.add(e,"wrapS",{"THREE.RepeatWrapping":m,"THREE.ClampToEdgeWrapping":s,"THREE.MirroredRepeatWrapping":g}),a.add(e,"wrapT",{"THREE.RepeatWrapping":m,"THREE.ClampToEdgeWrapping":s,"THREE.MirroredRepeatWrapping":g}),a.add(e,"format",{AlphaFormat:h,RedFormat:w,RedIntegerFormat:L,RGFormat:V,RGIntegerFormat:j,RGBAFormat:k,RGBAIntegerFormat:C,LuminanceFormat:G,LuminanceAlphaFormat:N,DepthFormat:S,DepthStencilFormat:T}),a.add(e,"encoding",{LinearEncoding:b,sRGBEncoding:I}),a.add(e,"magFilter",{Nearest:d,Linear:l}),a.add(e,"minFilter",{Nearest:d,Linear:l,NearestMipmapNearest:A,NearestMipmapLinear:W,LinearMipmapNearest:v,LinearMipmapLinear:H}),a.add(e,"rotation",-Math.PI,Math.PI,.01),a.add({anisotropy:e.anisotropy},"anisotropy",1,5,1).onChange(R=>{e.anisotropy=2**R});const o=a.addFolder("repeat");o.add(e.repeat,"x",1,5,1),o.add(e.repeat,"y",1,5,1);const p=a.addFolder("offset");p.add(e.offset,"x",-1,1,.1),p.add(e.offset,"y",-1,1,.1);const n=a.addFolder("center");n.add(e.center,"x",-1,1,.1),n.add(e.center,"y",-1,1,.1)});