import"../modulepreload-polyfill.b7f2da20.js";/* empty css               */import{a1 as s,C as g,ag as l,c0 as u,c1 as B,c2 as c,c3 as w,c4 as j,R as k,c5 as V,c6 as F,c7 as R,c8 as E,c9 as z,w as L,a4 as M,N as x,d as m,ac as f,ae as h,ad as b,af as N}from"../three.237d835c.js";import{M as T}from"../index.790bec74.js";import{g as a}from"../vis-three.middleware.es.7f273029.js";import{g as G}from"../lil-gui.module.min.095a7f3d.js";import"../index.1d3a6ec0.js";import"../index.202ebdec.js";import"../index.2e2f06f6.js";import"../ShaderPass.02f07bc0.js";import"../vis-three.plugin-orbit-controls.es.9991f892.js";import"../index.f318ae8c.js";import"../index.4ec3bfd2.js";import"../index.ea2b9d59.js";import"../index.591a8368.js";import"../index.a30a6c1f.js";import"../index.12fd638d.js";import"../index.32dc3bb0.js";import"../vis-three.plugin-keyboard-manager.es.417ffa7e.js";import"../Antdv.414c4eb5.js";import"../index.edc751ad.js";import"../CSS3DRenderer.ba0f6fa5.js";import"../index.e6be8a02.js";import"../index.2f498209.js";import"../index.117a61e1.js";import"../index.3b8dbf96.js";import"../index.c0475655.js";import"../index.2328f892.js";import"../index.c35e5a3e.js";import"../vis-three.plugin-pointer-manager.es.640cfa1a.js";import"../index.cd2c2c2e.js";import"../index.a089cc34.js";import"../index.bca5cc71.js";import"../index.692e1021.js";import"../index.90db9154.js";import"../vis-three.module-particle.es.8e43cbb8.js";import"../UnrealBloomPass.2cdbe9ee.js";import"../index.ee52b7bf.js";import"../vis-three.convenient.es.7b860830.js";import"../index.bdaae9f1.js";import"../vis-three.strategy-orbit-controls-support.es.706978dc.js";import"../index.d3463d42.js";import"../vis-three.library-parser.es.5c9e4dac.js";import"../vis-three.strategy-multi-renderer.es.a35ffd0a.js";import"../vis-three.strategy-selection-prompt.es.fc4c19e4.js";import"../vis-three.plugin-loader-manager.es.c1771985.js";import"../G6.d44f13fb.js";const r=new T().setDom(document.getElementById("app")).setSize().setStats(!0).play();a.injectEngine=r;const y=a("Scene");r.setSceneBySymbol(y.vid);a.injectScene=!0;r.loaderManager.setPath("/examples/");r.loadResourcesAsync(["/texture/skyBox/snowVillage/nx.jpg","/texture/skyBox/snowVillage/ny.jpg","/texture/skyBox/snowVillage/nz.jpg","/texture/skyBox/snowVillage/px.jpg","/texture/skyBox/snowVillage/py.jpg","/texture/skyBox/snowVillage/pz.jpg"]).then(()=>{const e=a("CubeTexture",{cube:{nx:"/texture/skyBox/snowVillage/nx.jpg",ny:"/texture/skyBox/snowVillage/ny.jpg",nz:"/texture/skyBox/snowVillage/nz.jpg",px:"/texture/skyBox/snowVillage/px.jpg",py:"/texture/skyBox/snowVillage/py.jpg",pz:"/texture/skyBox/snowVillage/pz.jpg"}});y.background=e.vid;const t=new G,o=t.addFolder("cube");o.add(e.cube,"nx",["/texture/skyBox/snowVillage/nx.jpg","/texture/skyBox/snowVillage/ny.jpg","/texture/skyBox/snowVillage/nz.jpg","/texture/skyBox/snowVillage/px.jpg","/texture/skyBox/snowVillage/py.jpg","/texture/skyBox/snowVillage/pz.jpg"]),o.add(e.cube,"ny",["/texture/skyBox/snowVillage/nx.jpg","/texture/skyBox/snowVillage/ny.jpg","/texture/skyBox/snowVillage/nz.jpg","/texture/skyBox/snowVillage/px.jpg","/texture/skyBox/snowVillage/py.jpg","/texture/skyBox/snowVillage/pz.jpg"]),o.add(e.cube,"nz",["/texture/skyBox/snowVillage/nx.jpg","/texture/skyBox/snowVillage/ny.jpg","/texture/skyBox/snowVillage/nz.jpg","/texture/skyBox/snowVillage/px.jpg","/texture/skyBox/snowVillage/py.jpg","/texture/skyBox/snowVillage/pz.jpg"]),o.add(e.cube,"px",["/texture/skyBox/snowVillage/nx.jpg","/texture/skyBox/snowVillage/ny.jpg","/texture/skyBox/snowVillage/nz.jpg","/texture/skyBox/snowVillage/px.jpg","/texture/skyBox/snowVillage/py.jpg","/texture/skyBox/snowVillage/pz.jpg"]),o.add(e.cube,"py",["/texture/skyBox/snowVillage/nx.jpg","/texture/skyBox/snowVillage/ny.jpg","/texture/skyBox/snowVillage/nz.jpg","/texture/skyBox/snowVillage/px.jpg","/texture/skyBox/snowVillage/py.jpg","/texture/skyBox/snowVillage/pz.jpg"]),o.add(e.cube,"pz",["/texture/skyBox/snowVillage/nx.jpg","/texture/skyBox/snowVillage/ny.jpg","/texture/skyBox/snowVillage/nz.jpg","/texture/skyBox/snowVillage/px.jpg","/texture/skyBox/snowVillage/py.jpg","/texture/skyBox/snowVillage/pz.jpg"]),t.add(e,"wrapS",{"THREE.RepeatWrapping":s,"THREE.ClampToEdgeWrapping":g,"THREE.MirroredRepeatWrapping":l}),t.add(e,"wrapT",{"THREE.RepeatWrapping":s,"THREE.ClampToEdgeWrapping":g,"THREE.MirroredRepeatWrapping":l}),t.add(e,"format",{AlphaFormat:u,RedFormat:B,RedIntegerFormat:c,RGFormat:w,RGIntegerFormat:j,RGBAFormat:k,RGBAIntegerFormat:V,LuminanceFormat:F,LuminanceAlphaFormat:R,DepthFormat:E,DepthStencilFormat:z}),t.add(e,"encoding",{LinearEncoding:L,sRGBEncoding:M}),t.add(e,"magFilter",{Nearest:x,Linear:m}),t.add(e,"minFilter",{Nearest:x,Linear:m,NearestMipmapNearest:f,NearestMipmapLinear:h,LinearMipmapNearest:b,LinearMipmapLinear:N}),t.add(e,"rotation",-Math.PI,Math.PI,.01),t.add({anisotropy:e.anisotropy},"anisotropy",1,5,1).onChange(d=>{e.anisotropy=2**d});const p=t.addFolder("repeat");p.add(e.repeat,"x",1,5,1),p.add(e.repeat,"y",1,5,1);const n=t.addFolder("offset");n.add(e.offset,"x",-1,1,.1),n.add(e.offset,"y",-1,1,.1);const i=t.addFolder("center");i.add(e.center,"x",-1,1,.1),i.add(e.center,"y",-1,1,.1)});
