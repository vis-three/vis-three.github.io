import"../modulepreload-polyfill.b7f2da20.js";/* empty css               */import{bU as g}from"../three.837c9bb0.js";import{M as d}from"../index.7ee6895f.js";import{g as r,t as p}from"../vis-three.middleware.es.2e80d21b.js";import"../index.1d7ad8b9.js";import"../index.7d48aff8.js";import"../index.388dadd4.js";import"../Pass.1ae4f2a0.js";import"../index.763ed6df.js";import"../index.62992928.js";import"../index.f4f5b765.js";import"../index.a87f8394.js";import"../index.9a7b1aa5.js";import"../index.8de980d1.js";import"../index.9f3e0a95.js";import"../vis-three.plugin-keyboard-manager.es.9570acee.js";import"../Antdv.a86c3c0d.js";import"../index.dfadcd6f.js";import"../CSS3DRenderer.d266155a.js";import"../index.9c42f01c.js";import"../index.ddb76977.js";import"../index.b828c96c.js";import"../index.cfcd8596.js";import"../index.f7cac396.js";import"../index.9dfaa1ec.js";import"../index.ce95ade9.js";import"../vis-three.plugin-pointer-manager.es.86f17451.js";import"../index.484afc60.js";import"../index.29f340c8.js";import"../index.cfa4ec79.js";import"../index.ec2b829b.js";import"../index.aa7ffc23.js";import"../vis-three.module-animation-action.es.09a94f96.js";import"../UnrealBloomPass.caa1ad7b.js";import"../index.4192aafc.js";import"../vis-three.convenient.es.83638baf.js";import"../index.e327b72e.js";import"../vis-three.strategy-orbit-controls-support.es.7f0e9f15.js";import"../vis-three.library-parser.es.80d54b6a.js";import"../vis-three.strategy-multi-renderer.es.c7860e7e.js";import"../vis-three.plugin-loader-manager.es.7fbd57ff.js";import"../G6.7a2bba98.js";const e=new d().setDom(document.getElementById("app")).setStats(!0).setSize().play();r.injectEngine=e;const n=r("Scene");e.setSceneBySymbol(n.vid);r.injectScene=!0;e.loaderManager.setPath("/examples/");r("AmbientLight",{intensity:10});r.autoInject=!1;e.loaderManager.getLoader("glb").dracoLoader.setDecoderPath("/examples//draco/gltf/");e.loadResourcesAsync(["model/glb/IridescentDishWithOlives.glb","model/glb/Soldier.glb"]).then(t=>{console.log(t),e.loadConfig(p.observable(t.resourceConfig["model/glb/IridescentDishWithOlives.glb"]));const s=t.configMap.get("model/glb/IridescentDishWithOlives.glb.scene"),i=e.getConfigBySymbol(s.vid);i.scale.x=50,i.scale.y=50,i.scale.z=50,i.position.x=-50,n.children.push(i.vid);const l=p.observable(t.resourceConfig["model/glb/Soldier.glb"]);e.loadConfig(l);const a=t.configMap.get("model/glb/Soldier.glb.scene"),o=e.getConfigBySymbol(a.vid);console.log(o),o.scale.x=10,o.scale.y=10,o.scale.z=10,o.position.x=20,n.children.push(o.vid);const c=e.getObjectBySymbol(l.skinnedMesh[0].vid),m=new g(c.skeleton.bones[0]);m.material.linewidth=2,e.scene.add(m)});console.log(e);window.engine=e;
