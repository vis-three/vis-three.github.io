import"../modulepreload-polyfill.b7f2da20.js";import{M as p}from"../index.1133522a.js";import{g as t,v as i,a as r}from"../vis-three.tdcm.es.ba892fff.js";import{g as n}from"../lil-gui.module.min.2435205c.js";import"../three.3f33d046.js";import"../index.c0df7946.js";import"../curve.0ba3d968.js";import"../index.0317c091.js";import"../ShaderPass.025732a5.js";import"../vis-three.plugin-orbit-controls.es.1508a7f8.js";import"../index.98a0d82e.js";import"../index.ca8957d4.js";import"../index.bdebbb5d.js";import"../index.5b5c1015.js";import"../index.336b965b.js";import"../vis-three.plugin-transform-controls.es.5244fee5.js";import"../index.9b9e13dd.js";import"../vis-three.plugin-keyboard-manager.es.16e92de2.js";import"../Antdv.7b6104cc.js";import"../index.fd7db63a.js";import"../CSS3DRenderer.56d2804d.js";import"../index.0a430562.js";import"../index.fe593856.js";import"../index.cee1ad1a.js";import"../index.e2e75f8b.js";import"../index.f411c2bc.js";import"../index.457fa50b.js";import"../index.b5597af3.js";import"../vis-three.plugin-pointer-manager.es.28277630.js";import"../index.2c9e736c.js";import"../index.bbdc45c2.js";import"../index.e7386c00.js";import"../index.82f2a702.js";import"../index.82346856.js";import"../vis-three.module-particle.es.2f619925.js";import"../UnrealBloomPass.a03f7d16.js";import"../vis-three.library-modifier.es.9bf56217.js";import"../vis-three.convenient.es.3345d486.js";import"../index.f17582aa.js";import"../vis-three.strategy-orbit-controls-support.es.bfc29c0d.js";import"../index.4caff7a1.js";import"../vis-three.module-helper.es.c2fc8b4c.js";import"../vis-three.library-parser.es.0233fa92.js";import"../vis-three.strategy-multi-renderer.es.91c74cfe.js";import"../vis-three.strategy-selection-prompt.es.9e058aa8.js";import"../vis-three.plugin-loader-manager.es.3fc670d5.js";import"../G6.30609706.js";const o=new p().setDom(document.getElementById("app")).setStats(!0).play();o.loaderManager.setPath("/examples/");t.injectEngine=o;t("WebGLRenderer");const s=t("Scene"),a=t("PerspectiveCamera",{near:1,far:1e3,position:{x:100,y:100,z:100}});o.setSceneBySymbol(i(s)).setCameraBySymbol(i(a)).setSize();t.injectScene=!0;t("PointLight",{position:{x:30,y:50},distance:100});const l=t(r.MESHSTANDARDMATERIAL,{color:"red"}),u=t(r.SPHEREGEOMETRY,{radius:10,widthSegments:64,heightSegments:64});t(r.MESH,{material:i(l),geometry:i(u),position:{y:10}});o.loadResourcesAsync(["/luts/Bourbon 64.CUBE","/luts/Chemical 168.CUBE","/luts/Clayton 33.CUBE","/luts/Cubicle 99.CUBE","/luts/Remy 24.CUBE"]).then(c=>{const e=t(r.LUTPASS,{lut:"/luts/Bourbon 64.CUBE"});window.engine=o;const m=new n;m.add(e,"lut",["/luts/Bourbon 64.CUBE","/luts/Chemical 168.CUBE","/luts/Clayton 33.CUBE","/luts/Cubicle 99.CUBE","/luts/Remy 24.CUBE"]),m.add(e,"intensity",0,1,.01)});
