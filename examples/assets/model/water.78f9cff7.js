import"../modulepreload-polyfill.b7f2da20.js";import{ab as p}from"../three.3f33d046.js";import{M as c}from"../index.1133522a.js";import{g as r,v as i,a as m}from"../vis-three.tdcm.es.ba892fff.js";import{g as l}from"../lil-gui.module.min.2435205c.js";import"../index.c0df7946.js";import"../curve.0ba3d968.js";import"../index.0317c091.js";import"../ShaderPass.025732a5.js";import"../vis-three.plugin-orbit-controls.es.1508a7f8.js";import"../index.98a0d82e.js";import"../index.ca8957d4.js";import"../index.bdebbb5d.js";import"../index.5b5c1015.js";import"../index.336b965b.js";import"../vis-three.plugin-transform-controls.es.5244fee5.js";import"../index.9b9e13dd.js";import"../vis-three.plugin-keyboard-manager.es.16e92de2.js";import"../Antdv.7b6104cc.js";import"../index.fd7db63a.js";import"../CSS3DRenderer.56d2804d.js";import"../index.0a430562.js";import"../index.fe593856.js";import"../index.cee1ad1a.js";import"../index.e2e75f8b.js";import"../index.f411c2bc.js";import"../index.457fa50b.js";import"../index.b5597af3.js";import"../vis-three.plugin-pointer-manager.es.28277630.js";import"../index.2c9e736c.js";import"../index.bbdc45c2.js";import"../index.e7386c00.js";import"../index.82f2a702.js";import"../index.82346856.js";import"../vis-three.module-particle.es.2f619925.js";import"../UnrealBloomPass.a03f7d16.js";import"../vis-three.library-modifier.es.9bf56217.js";import"../vis-three.convenient.es.3345d486.js";import"../index.f17582aa.js";import"../vis-three.strategy-orbit-controls-support.es.bfc29c0d.js";import"../index.4caff7a1.js";import"../vis-three.module-helper.es.c2fc8b4c.js";import"../vis-three.library-parser.es.0233fa92.js";import"../vis-three.strategy-multi-renderer.es.91c74cfe.js";import"../vis-three.strategy-selection-prompt.es.9e058aa8.js";import"../vis-three.plugin-loader-manager.es.3fc670d5.js";import"../G6.30609706.js";const e=new c().setDom(document.getElementById("app")).setSize().setStats(!0).play();e.loaderManager.setPath("/examples/");r.injectEngine=e;const g=r("Scene"),y=r("PerspectiveCamera",{near:1,far:1e3,position:{x:100,y:200,z:200}});e.setSceneBySymbol(i(g)).setCameraBySymbol(i(y)).setSize();r.injectScene=!0;r("DirectionalLight",{position:{x:30,y:50}});const S=r(m.MESHSTANDARDMATERIAL,{color:"red"}),u=r(m.BOXGEOMETRY,{height:40,width:20,depth:20}),n=r(m.MESH,{material:i(S),geometry:i(u),position:{y:10}});e.loadResourcesAsync(["/texture/water/Water_1_M_Normal.jpg"]).then(()=>{const s=r(m.PLANEGEOMETRY,{width:500,height:500}),d=r("ImageTexture",{url:"/texture/water/Water_1_M_Normal.jpg",wrapS:p,wrapT:p}),t=r("DeepWater",{geometry:i(s),waterNormals:i(d),rotation:{x:-Math.PI/2}});e.renderManager.on("render",a=>{t.time+=a.delta,n.position.y=Math.sin(a.total)*15+10,n.rotation.x+=a.delta});const o=new l;o.add(t,"size",.01,4,.01),o.add(t,"alpha",0,1,.1),o.add(t,"distortionScale",0,100,1),o.addColor(t,"waterColor"),o.addColor(t,"sunColor"),o.add(t.sunDirection,"x",-10,10,.1),o.add(t.sunDirection,"y",-10,10,.1),o.add(t.sunDirection,"z",-10,10,.1),o.add(t.eye,"x",-1,50,1),o.add(t.eye,"y",-1,50,1),o.add(t.eye,"z",-1,50,1)});window.engine=e;e.setSize();
