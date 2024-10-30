import"../modulepreload-polyfill.b7f2da20.js";import{l as C}from"../loadingTips.e8714600.js";import{ce as a}from"../three.3f33d046.js";import{P as I}from"../index.b80beeef.js";import{D as M}from"../index.15ca0cbe.js";import{g as o,q as t}from"../vis-three.tdcm.es.ba892fff.js";import{H as c}from"../vis-three.convenient.es.3345d486.js";import{s as l}from"../vis-three.module-particle.es.2f619925.js";import"../vis-three.module-helper.es.c2fc8b4c.js";import{q as b}from"../vis-three.library-event.es.cabcc67d.js";import{A as z}from"../index.bdebbb5d.js";/* empty css               */import"../Antdv.7b6104cc.js";import"../curve.0ba3d968.js";import"../index.c0df7946.js";import"../index.fd7db63a.js";import"../CSS3DRenderer.56d2804d.js";import"../index.0a430562.js";import"../index.fe593856.js";import"../index.0317c091.js";import"../ShaderPass.025732a5.js";import"../vis-three.plugin-orbit-controls.es.1508a7f8.js";import"../index.82f2a702.js";import"../index.82346856.js";import"../vis-three.strategy-orbit-controls-support.es.bfc29c0d.js";import"../index.cee1ad1a.js";import"../index.e2e75f8b.js";import"../index.4caff7a1.js";import"../vis-three.library-parser.es.0233fa92.js";import"../vis-three.strategy-multi-renderer.es.91c74cfe.js";import"../vis-three.plugin-loader-manager.es.3fc670d5.js";import"../vis-three.plugin-pointer-manager.es.28277630.js";import"../index.b5597af3.js";import"../G6.30609706.js";import"../UnrealBloomPass.a03f7d16.js";import"../vis-three.library-modifier.es.9bf56217.js";l.register(b.moveTo);const d=(r,p)=>{r.textBaseline="middle",r.textAlign="center",r.fillStyle="rgb(26, 203, 208)",r.fillRect(0,0,512,512),r.fillStyle="white",r.font="bold 58px \u5FAE\u8F6F\u96C5\u9ED1",r.fillText(p,255,255)},R=new c().draw(r=>d(r,"to bedroom")),f=new c().draw(r=>d(r,"to kitchenroom")),h=new c().draw(r=>d(r,"to livingroom")),e=new M().rollback("OrbitControlsSupportStrategy").uninstall("OrbitControlsPlugin").install(I()).install(z()).setDom(document.getElementById("app")).setSize().play();C(e);o.injectEngine=e;const s=o(t.PERSPECTIVECAMERA,{near:.01,far:500});e.setCameraBySymbol(s.vid);e.setSize();const P=o(t.SCENE);e.setSceneBySymbol(P.vid);o.injectScene=!0;e.loaderManager.setPath("/examples/");e.registerResources({bedroomCanvas:R.getDom(),kitchenroomCanvas:f.getDom(),livingroomCanvas:h.getDom()}).loadResourcesAsync(["/texture/360vr/room/bedroom.jpeg","/texture/360vr/room/kitchenroom.jpeg","/texture/360vr/room/livingroom.jpeg"]).then(r=>{const p=o(t.SPHEREGEOMETRY,{radius:7,widthSegments:128,heightSegments:128}),g=o(t.IMAGETEXTURE,{url:"/texture/360vr/room/livingroom.jpeg"}),E=o(t.MESHBASICMATERIAL,{map:g.vid,side:a}),i=o(t.MESH,{geometry:p.vid,material:E.vid}),v=o(t.IMAGETEXTURE,{url:"/texture/360vr/room/bedroom.jpeg"}),y=o(t.MESHBASICMATERIAL,{map:v.vid,side:a}),n=o(t.MESH,{geometry:p.vid,material:y.vid,position:{x:i.position.x+9,y:i.position.y,z:i.position.z-14}}),T=o(t.IMAGETEXTURE,{url:"/texture/360vr/room/kitchenroom.jpeg"}),u=o(t.MESHBASICMATERIAL,{map:T.vid,side:a}),m=o(t.MESH,{geometry:p.vid,material:u.vid,position:{x:i.position.x+15,y:i.position.y,z:i.position.z}}),S=o(t.CANVASTEXTURE,{url:"kitchenroomCanvas"}),x=o(t.SPRITEMATERIAL,{map:S.vid});o(t.SPRITE,{material:x.vid,scale:{x:.5,y:.5,z:.5},position:{x:i.position.x+5,y:i.position.y+.5,z:i.position.z+.2},click:[l.generateConfig("moveTo",{params:{target:s.vid,position:{x:m.position.x,y:m.position.y,z:m.position.z}}})]});const A=o(t.CANVASTEXTURE,{url:"bedroomCanvas"}),k=o(t.SPRITEMATERIAL,{map:A.vid});o(t.SPRITE,{material:k.vid,scale:{x:.5,y:.5,z:.5},position:{x:i.position.x+2,y:i.position.y+.5,z:i.position.z-5},click:[l.generateConfig("moveTo",{params:{target:s.vid,position:{x:n.position.x,y:n.position.y,z:n.position.z}}})]}),s.position.x=i.position.x,s.position.y=i.position.y,s.position.z=i.position.z,document.getElementById("global").onclick=()=>{e.camera.position.set(0,70,0),e.camera.lookAt(0,0,0)},document.getElementById("bedroom").onclick=()=>{e.camera.position.set(n.position.x,n.position.y,n.position.z),e.camera.lookAt(0,0,0)},document.getElementById("kitchenroom").onclick=()=>{e.camera.position.set(m.position.x,m.position.y,m.position.z),e.camera.lookAt(0,0,0)},document.getElementById("livingroom").onclick=()=>{e.camera.position.set(i.position.x,i.position.y,i.position.z),e.camera.lookAt(0,0,0)}});window.engine=e;
