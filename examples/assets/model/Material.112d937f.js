import"../modulepreload-polyfill.b7f2da20.js";import{M as s}from"../index.1133522a.js";import{t as a}from"../vis-three.module-particle.es.2f619925.js";import{g as t}from"../vis-three.tdcm.es.ba892fff.js";import"../vis-three.module-helper.es.c2fc8b4c.js";import{i as l}from"../vis-three.library-shader.es.8a47edb6.js";import{H as d}from"../vis-three.convenient.es.3345d486.js";import"../three.3f33d046.js";import"../index.c0df7946.js";import"../curve.0ba3d968.js";import"../index.0317c091.js";import"../ShaderPass.025732a5.js";import"../vis-three.plugin-orbit-controls.es.1508a7f8.js";import"../index.98a0d82e.js";import"../index.ca8957d4.js";import"../index.bdebbb5d.js";import"../index.5b5c1015.js";import"../index.336b965b.js";import"../vis-three.plugin-transform-controls.es.5244fee5.js";import"../index.9b9e13dd.js";import"../vis-three.plugin-keyboard-manager.es.16e92de2.js";import"../Antdv.7b6104cc.js";import"../index.fd7db63a.js";import"../CSS3DRenderer.56d2804d.js";import"../index.0a430562.js";import"../index.fe593856.js";import"../index.cee1ad1a.js";import"../index.e2e75f8b.js";import"../index.f411c2bc.js";import"../index.457fa50b.js";import"../index.b5597af3.js";import"../vis-three.plugin-pointer-manager.es.28277630.js";import"../index.2c9e736c.js";import"../index.bbdc45c2.js";import"../index.e7386c00.js";import"../index.82f2a702.js";import"../index.82346856.js";import"../index.f17582aa.js";import"../vis-three.strategy-orbit-controls-support.es.bfc29c0d.js";import"../index.4caff7a1.js";import"../vis-three.library-parser.es.0233fa92.js";import"../vis-three.strategy-multi-renderer.es.91c74cfe.js";import"../vis-three.strategy-selection-prompt.es.9e058aa8.js";import"../UnrealBloomPass.a03f7d16.js";import"../vis-three.library-modifier.es.9bf56217.js";import"../vis-three.plugin-loader-manager.es.3fc670d5.js";import"../G6.30609706.js";a.register(l);const g=new d({width:256,height:256}).draw(i=>{i.textBaseline="middle",i.textAlign="center",i.fillStyle="rgb(206, 42, 230)",i.font=" bold 48px \u5FAE\u8F6F\u96C5\u9ED1",i.fillText("MATERIAL",128,128)}),r=new s().setDom(document.getElementById("app")).setSize().setStats(!0).registerResources({"example.canvas":g.get()});window.engine=r;t.injectEngine=r;const n=t("Scene");t.injectScene=n.vid;t("PointLight",{position:{x:30,y:50},distance:100});const e=t("BoxGeometry",{width:10,height:10,depth:10,groups:[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}]}),c=t("CanvasTexture",{url:"example.canvas"}),m=t("MeshStandardMaterial",{metalness:.5,roughness:.5,color:"rgb(100, 200, 100)",transparent:!0,opacity:.5,alphaTest:0}),v=t("MeshPhongMaterial",{color:"rgb(100, 100, 200)"}),p=t("SpriteMaterial",{map:c.vid});window.spriteMaterial=p;const h=t("LineBasicMaterial"),M=t("PointsMaterial"),o=t("ShaderMaterial",a.generateConfig("uvPulseShader"),{strict:!1});t("Mesh",{material:m.vid,geometry:e.vid,position:{x:-10}});t("Mesh",{material:v.vid,geometry:e.vid,position:{x:10}});t("Sprite",{material:p.vid,scale:{x:10,y:10},position:{y:15}});t("Line",{material:h.vid,geometry:e.vid,position:{z:10}});t("Points",{material:M.vid,geometry:e.vid,position:{z:-10}});t("Mesh",{material:o.vid,geometry:e.vid,position:{x:10,z:10}});t("Mesh",{material:[m.vid,o.vid],geometry:e.vid,position:{x:-10,z:10}});r.setSceneBySymbol(n.vid).play();r.renderManager.addEventListener("render",i=>{o.uniforms.time.value+=i.delta*5});window.engine=r;