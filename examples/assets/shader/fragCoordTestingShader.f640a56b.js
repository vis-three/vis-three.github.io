import"../modulepreload-polyfill.b7f2da20.js";import{au as a}from"../three.3f33d046.js";import{M as s}from"../index.1133522a.js";import{g as i}from"../vis-three.tdcm.es.ba892fff.js";import{t as e}from"../vis-three.module-particle.es.2f619925.js";import"../vis-three.module-helper.es.c2fc8b4c.js";import{r as m}from"../vis-three.library-shader.es.8a47edb6.js";import{g}from"../lil-gui.module.min.2435205c.js";import"../index.c0df7946.js";import"../curve.0ba3d968.js";import"../index.0317c091.js";import"../ShaderPass.025732a5.js";import"../vis-three.plugin-orbit-controls.es.1508a7f8.js";import"../index.98a0d82e.js";import"../index.ca8957d4.js";import"../index.bdebbb5d.js";import"../index.5b5c1015.js";import"../index.336b965b.js";import"../vis-three.plugin-transform-controls.es.5244fee5.js";import"../index.9b9e13dd.js";import"../vis-three.plugin-keyboard-manager.es.16e92de2.js";import"../Antdv.7b6104cc.js";import"../index.fd7db63a.js";import"../CSS3DRenderer.56d2804d.js";import"../index.0a430562.js";import"../index.fe593856.js";import"../index.cee1ad1a.js";import"../index.e2e75f8b.js";import"../index.f411c2bc.js";import"../index.457fa50b.js";import"../index.b5597af3.js";import"../vis-three.plugin-pointer-manager.es.28277630.js";import"../index.2c9e736c.js";import"../index.bbdc45c2.js";import"../index.e7386c00.js";import"../index.82f2a702.js";import"../index.82346856.js";import"../index.f17582aa.js";import"../vis-three.strategy-orbit-controls-support.es.bfc29c0d.js";import"../index.4caff7a1.js";import"../vis-three.library-parser.es.0233fa92.js";import"../vis-three.strategy-multi-renderer.es.91c74cfe.js";import"../vis-three.strategy-selection-prompt.es.9e058aa8.js";import"../vis-three.plugin-loader-manager.es.3fc670d5.js";import"../G6.30609706.js";import"../UnrealBloomPass.a03f7d16.js";import"../vis-three.library-modifier.es.9bf56217.js";import"../vis-three.convenient.es.3345d486.js";const o=new s().setDom(document.getElementById("app")).setSize().setStats(!0);e.register(m);i.injectEngine=o;const d=i("Scene");o.setSceneBySymbol(d.vid);i.injectScene=!0;i("AmbientLight");const t=i("ShaderMaterial",{...e.generateConfig(m.name,{resolution:{value:{x:window.innerWidth,y:window.innerHeight}}}),side:a},{strict:!1}),u=i("PlaneGeometry",{width:100,height:100});i("Mesh",{material:t.vid,geometry:u.vid});o.play();window.engine=o;window.material=t;const n=new g,p={width:t.uniforms.resolution.value.x,height:t.uniforms.resolution.value.y};n.add(p,"width",0,window.innerWidth,5).onChange(r=>{t.uniforms.resolution.value.x=r});n.add(p,"height",0,window.innerHeight,5).onChange(r=>{t.uniforms.resolution.value.y=r});
