import"../modulepreload-polyfill.b7f2da20.js";/* empty css               */import{cu as d}from"../three.3f33d046.js";import{M as b}from"../index.1133522a.js";import{g as e,v as o,t as S,a,w as y}from"../vis-three.tdcm.es.ba892fff.js";import"../index.c0df7946.js";import"../curve.0ba3d968.js";import"../index.0317c091.js";import"../ShaderPass.025732a5.js";import"../vis-three.plugin-orbit-controls.es.1508a7f8.js";import"../index.98a0d82e.js";import"../index.ca8957d4.js";import"../index.bdebbb5d.js";import"../index.5b5c1015.js";import"../index.336b965b.js";import"../vis-three.plugin-transform-controls.es.5244fee5.js";import"../index.9b9e13dd.js";import"../vis-three.plugin-keyboard-manager.es.16e92de2.js";import"../Antdv.7b6104cc.js";import"../index.fd7db63a.js";import"../CSS3DRenderer.56d2804d.js";import"../index.0a430562.js";import"../index.fe593856.js";import"../index.cee1ad1a.js";import"../index.e2e75f8b.js";import"../index.f411c2bc.js";import"../index.457fa50b.js";import"../index.b5597af3.js";import"../vis-three.plugin-pointer-manager.es.28277630.js";import"../index.2c9e736c.js";import"../index.bbdc45c2.js";import"../index.e7386c00.js";import"../index.82f2a702.js";import"../index.82346856.js";import"../vis-three.module-particle.es.2f619925.js";import"../UnrealBloomPass.a03f7d16.js";import"../vis-three.library-modifier.es.9bf56217.js";import"../vis-three.convenient.es.3345d486.js";import"../index.f17582aa.js";import"../vis-three.strategy-orbit-controls-support.es.bfc29c0d.js";import"../index.4caff7a1.js";import"../vis-three.module-helper.es.c2fc8b4c.js";import"../vis-three.library-parser.es.0233fa92.js";import"../vis-three.strategy-multi-renderer.es.91c74cfe.js";import"../vis-three.strategy-selection-prompt.es.9e058aa8.js";import"../vis-three.plugin-loader-manager.es.3fc670d5.js";import"../G6.30609706.js";const t=new b().setDom(document.getElementById("app")).setStats(!0).setSize().play();e.injectEngine=t;const l=e("Scene");t.setSceneBySymbol(o(l));e.injectScene=!0;t.loaderManager.setPath("/examples/");e("AmbientLight",{intensity:10});e.autoInject=!1;t.loaderManager.getLoader("glb").dracoLoader.setDecoderPath("/examples//draco/gltf/");t.loadResourcesAsync(["model/glb/Soldier.glb"]).then(m=>{const r=S.observable(m.resourceConfig["model/glb/Soldier.glb"]);t.loadConfig(r);const s=m.configMap.get("model/glb/Soldier.glb.scene"),i=t.getConfigBySymbol(o(s));i.scale.x=20,i.scale.y=20,i.scale.z=20,l.children.push(o(i));const c=t.getObjectBySymbol(o(r.skinnedMesh[0])),p=e(a.MIXERANIMATION,{target:o(i)}),g=e(a.ANIMATIONACTION,{mixer:o(p),clip:o(r.animationClip[1])});t.applyConfig(p,g),y.append(()=>{const n=new d(c.skeleton.bones[0]);return n.material.linewidth=2,t.scene.add(n),!0})});window.engine=t;
