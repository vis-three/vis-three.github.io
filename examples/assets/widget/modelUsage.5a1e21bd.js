import"../modulepreload-polyfill.b7f2da20.js";import{D as p}from"../index.481fbc02.js";import{G as d}from"../index.5b5c1015.js";import"../vis-three.convenient.es.3345d486.js";import{K as y,q as e,Y as c,L as h,Z as g}from"../vis-three.widget.es.dbc0588e.js";import{B as u}from"../Antdv.7b6104cc.js";import"../index.c0df7946.js";import"../curve.0ba3d968.js";import"../three.3f33d046.js";import"../index.fd7db63a.js";import"../CSS3DRenderer.56d2804d.js";import"../index.0a430562.js";import"../index.fe593856.js";import"../index.0317c091.js";import"../ShaderPass.025732a5.js";import"../vis-three.plugin-orbit-controls.es.1508a7f8.js";import"../index.82f2a702.js";import"../vis-three.tdcm.es.ba892fff.js";import"../vis-three.plugin-loader-manager.es.3fc670d5.js";import"../vis-three.plugin-pointer-manager.es.28277630.js";import"../index.b5597af3.js";import"../G6.30609706.js";import"../index.82346856.js";import"../vis-three.module-particle.es.2f619925.js";import"../UnrealBloomPass.a03f7d16.js";import"../vis-three.library-modifier.es.9bf56217.js";import"../vis-three.strategy-orbit-controls-support.es.bfc29c0d.js";import"../index.cee1ad1a.js";import"../index.e2e75f8b.js";import"../index.4caff7a1.js";import"../vis-three.module-helper.es.c2fc8b4c.js";import"../vis-three.library-parser.es.0233fa92.js";import"../vis-three.strategy-multi-renderer.es.91c74cfe.js";const o=new p().install(d()).setDom(document.getElementById("app")).setSize().play();o.loaderManager.setPath("/examples/");o.loadResourcesAsync(["model/katana/katana.obj"]).then(()=>{const i=y({render(){e("DirectionalLight",{intensity:2,position:{x:5,z:10,y:10}});const t=e("MeshStandardMaterial",{roughness:.2,metalness:.5});e("Mesh",{raw:"box",geometry:e("BoxGeometry",{width:.5,height:1.5,depth:.5,position:{y:1}}),material:e("MeshBasicMaterial",{transparent:!0,opacity:0}),scale:{x:15,y:15,z:15},rotation:{z:this.rotationZ},children:[e("Mesh",{geometry:e("LoadGeometry",{url:"model/katana/katana.obj.children.0.geometry",center:!1}),material:t}),e("Mesh",{geometry:e("LoadGeometry",{url:"model/katana/katana.obj.children.0.geometry",center:!1}),material:t}),e("Mesh",{geometry:e("LoadGeometry",{url:"model/katana/katana.obj.children.1.geometry",center:!1}),material:t}),e("Mesh",{geometry:e("LoadGeometry",{url:"model/katana/katana.obj.children.2.geometry",center:!1}),material:t}),e("Mesh",{geometry:e("LoadGeometry",{url:"model/katana/katana.obj.children.3.geometry",center:!1}),material:t}),e("Mesh",{geometry:e("LoadGeometry",{url:"model/katana/katana.obj.children.4.geometry",center:!1}),material:t})],onMouseenter:this.enter,onMouseleave:this.leave})},setup({engine:t}){const r=u(0),m=()=>{r.value=Math.PI/6},s=()=>{r.value=0},a=g(null);return c(l=>{a.value.rotation.y+=l*2}),h(()=>{}),{rotationZ:r,enter:m,leave:s,box:a}}}),n=o.createWidget(i).mount();window.widget=n});window.engine=o;
