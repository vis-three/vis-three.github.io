import"../modulepreload-polyfill.b7f2da20.js";import{au as p}from"../three.3f33d046.js";import{M as a}from"../index.1133522a.js";import{g as e}from"../vis-three.tdcm.es.ba892fff.js";import{t as n}from"../vis-three.module-particle.es.2f619925.js";import"../vis-three.module-helper.es.c2fc8b4c.js";import{i as s}from"../vis-three.library-shader.es.8a47edb6.js";import{g as d}from"../lil-gui.module.min.2435205c.js";import"../index.c0df7946.js";import"../curve.0ba3d968.js";import"../index.0317c091.js";import"../ShaderPass.025732a5.js";import"../vis-three.plugin-orbit-controls.es.1508a7f8.js";import"../index.98a0d82e.js";import"../index.ca8957d4.js";import"../index.bdebbb5d.js";import"../index.5b5c1015.js";import"../index.336b965b.js";import"../vis-three.plugin-transform-controls.es.5244fee5.js";import"../index.9b9e13dd.js";import"../vis-three.plugin-keyboard-manager.es.16e92de2.js";import"../Antdv.7b6104cc.js";import"../index.fd7db63a.js";import"../CSS3DRenderer.56d2804d.js";import"../index.0a430562.js";import"../index.fe593856.js";import"../index.cee1ad1a.js";import"../index.e2e75f8b.js";import"../index.f411c2bc.js";import"../index.457fa50b.js";import"../index.b5597af3.js";import"../vis-three.plugin-pointer-manager.es.28277630.js";import"../index.2c9e736c.js";import"../index.bbdc45c2.js";import"../index.e7386c00.js";import"../index.82f2a702.js";import"../index.82346856.js";import"../index.f17582aa.js";import"../vis-three.strategy-orbit-controls-support.es.bfc29c0d.js";import"../index.4caff7a1.js";import"../vis-three.library-parser.es.0233fa92.js";import"../vis-three.strategy-multi-renderer.es.91c74cfe.js";import"../vis-three.strategy-selection-prompt.es.9e058aa8.js";import"../vis-three.plugin-loader-manager.es.3fc670d5.js";import"../G6.30609706.js";import"../UnrealBloomPass.a03f7d16.js";import"../vis-three.library-modifier.es.9bf56217.js";import"../vis-three.convenient.es.3345d486.js";const m=new a().setDom(document.getElementById("app")).setSize().setStats(!0);n.register(s);e.injectEngine=m;const u=e("Scene");m.setSceneBySymbol(u.vid);e.injectScene=!0;e("AmbientLight");const t=e("ShaderMaterial",{...n.generateConfig("uvPulseShader",{time:{value:4.5}}),side:p},{strict:!1}),g=e("PlaneGeometry",{width:20,height:20});e("Mesh",{material:t.vid,geometry:g.vid});const c=e("SphereGeometry",{radius:10});e("Mesh",{material:t.vid,geometry:c.vid,position:{x:25}});const l=e("BoxGeometry",{width:20,height:20,depth:20});e("Mesh",{material:t.vid,geometry:l.vid,position:{x:-25}});const h=e("RingGeometry",{innerRadius:5,outerRadius:10,thetaSegments:32});e("Mesh",{material:t.vid,geometry:h.vid,position:{z:-25}});const v=e("ConeGeometry",{radius:10,height:10,radialSegments:32});e("Mesh",{material:t.vid,geometry:v.vid,position:{z:25}});m.play();window.engine=m;const o=new d,r={time:t.uniforms.time.value,width:t.uniforms.width.value,color:t.uniforms.color.value,centerX:t.uniforms.center.value.x,centerY:t.uniforms.center.value.y};o.add(r,"time",4,6,.01).onChange(i=>{t.uniforms.time.value=i});o.add(r,"width",0,.5,.01).onChange(i=>{t.uniforms.width.value=i});o.addColor(r,"color");o.add(r,"centerX",0,1,.01).onChange(i=>{t.uniforms.center.value.x=i});o.add(r,"centerY",0,1,.01).onChange(i=>{t.uniforms.center.value.y=i});
