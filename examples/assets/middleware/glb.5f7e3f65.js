import"../modulepreload-polyfill.b7f2da20.js";/* empty css               */import{bU as g}from"../three.837c9bb0.js";import{M as d}from"../index.7fc95210.js";import{g as r,t as p}from"../vis-three.middleware.es.2585b78e.js";import"../index.be5e1784.js";import"../index.5fd0e639.js";import"../index.db239e15.js";import"../Pass.1ae4f2a0.js";import"../index.d505a6dc.js";import"../index.6bd8d818.js";import"../index.1d1f4865.js";import"../index.476759d5.js";import"../index.3e934afa.js";import"../index.8a974fac.js";import"../index.0eec027b.js";import"../vis-three.plugin-keyboard-manager.es.358da2a0.js";import"../Antdv.a86c3c0d.js";import"../index.32011c09.js";import"../CSS3DRenderer.d266155a.js";import"../index.813bc471.js";import"../index.e6c950f1.js";import"../index.c0066b9f.js";import"../index.80c3482e.js";import"../index.83518642.js";import"../index.5dfe0d36.js";import"../index.df02a99b.js";import"../vis-three.plugin-pointer-manager.es.9009bd78.js";import"../index.ca59a760.js";import"../index.c30fef9c.js";import"../index.66ce3d50.js";import"../index.9299f102.js";import"../index.7bdd9bd7.js";import"../vis-three.module-animation-action.es.6d7baff5.js";import"../UnrealBloomPass.caa1ad7b.js";import"../index.4192aafc.js";import"../vis-three.convenient.es.9947652a.js";import"../index.a7251911.js";import"../vis-three.strategy-orbit-controls-support.es.feebca3b.js";import"../index.cc89943f.js";import"../vis-three.library-parser.es.152102aa.js";import"../vis-three.strategy-multi-renderer.es.35c3b855.js";import"../vis-three.plugin-loader-manager.es.dd5ac293.js";import"../G6.7a2bba98.js";const o=new d().setDom(document.getElementById("app")).setStats(!0).setSize().play();r.injectEngine=o;const m=r("Scene");o.setSceneBySymbol(m.vid);r.injectScene=!0;o.loaderManager.setPath("/examples/");r("AmbientLight",{intensity:10});r.autoInject=!1;o.loaderManager.getLoader("glb").dracoLoader.setDecoderPath("/examples//draco/gltf/");o.loadResourcesAsync(["model/glb/IridescentDishWithOlives.glb","model/glb/Soldier.glb"]).then(t=>{console.log(t),o.loadConfig(p.observable(t.resourceConfig["model/glb/IridescentDishWithOlives.glb"]));const s=t.configMap.get("model/glb/IridescentDishWithOlives.glb.scene"),i=o.getConfigBySymbol(s.vid);i.scale.x=50,i.scale.y=50,i.scale.z=50,i.position.x=-50,m.children.push(i.vid);const n=p.observable(t.resourceConfig["model/glb/Soldier.glb"]);o.loadConfig(n);const a=t.configMap.get("model/glb/Soldier.glb.scene"),e=o.getConfigBySymbol(a.vid);console.log(e),e.scale.x=10,e.scale.y=10,e.scale.z=10,e.position.x=20,m.children.push(e.vid);const c=o.getObjectBySymbol(n.skinnedMesh[0].vid),l=new g(c.skeleton.bones[0]);l.material.linewidth=2,o.scene.add(l)});console.log(o);window.engine=o;
