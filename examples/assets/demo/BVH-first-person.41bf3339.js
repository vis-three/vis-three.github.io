import"../modulepreload-polyfill.b7f2da20.js";import{l as B}from"../loadingTips.e8714600.js";import{w as u,aK as x,I as E,cc as M,al as V,a3 as C,M as L,a as W}from"../three.3f33d046.js";import{m as _,Z as G}from"../vis-three.plugin-loader-manager.es.3fc670d5.js";import{W as I,C as R}from"../index.c0df7946.js";import{R as z}from"../index.0a430562.js";import{E as H}from"../index.0317c091.js";import{K,a as D}from"../index.c0bcd2a0.js";import{S as T}from"../index.9b9e13dd.js";import{M as j}from"../index.1849a9ca.js";import{P as A}from"../index.299852d5.js";import{E as O}from"../index.cee1ad1a.js";import{S as U}from"../index.2c9e736c.js";import{E as q}from"../curve.0ba3d968.js";/* empty css               */import"../Antdv.7b6104cc.js";import"../ShaderPass.025732a5.js";const b=new u,v=new u,g=new x;new E;const s=new M,S=5,F=20;let w=!1;const c=new u,f={radius:.5,segment:new M(new u,new u(0,-1,0))},o=q({plugins:[z({fps:1e3/60}),I({antialias:!0,alpha:!0}),H({WebGLMultisampleRenderTarget:!0}),R(),G({path:"/examples/"}),T(),j({visualizer:!0,shapecast:{intersectsBounds:a=>a.intersectsBox(g),intersectsTriangle:a=>{const r=b,t=v,d=a.closestPointToSegment(s,r,t);if(d<f.radius){const i=f.radius-d,l=t.sub(r).normalize();s.start.addScaledVector(l,i),s.end.addScaledVector(l,i)}}}}),A()],strategy:[O(),U()]}).setDom(document.getElementById("app")).setSize().setStats(!0);o.install(K({target:o.camera,movementSpeed:10,quickenSpeed:10,space:"world",extendKeyDown:a=>{switch(a.code){case"Space":w&&(c.y=F);break}},beforeUpdate:({delta:a})=>{c.y+=w?0:a*-30,n.position.addScaledVector(c,a)}})).exec(D());const n=o.camera;B(o);document.getElementById("lock").onclick=()=>{o.pointerLockControls.lock(),document.getElementById("lock").style.display="none"};o.pointerLockControls.addEventListener("unlock",()=>{document.getElementById("lock").style.display="flex"});const P=()=>{c.y=0,n.position.set(47,0,90),n.lookAt(n.position.x,n.position.y,n.position.z-10),console.log(n.matrixWorld)},k=new V("white",7);k.position.set(-5,5,10);o.scene.add(n,k);P();const Z=new u;o.keyboardMoveControls.forwrad=a=>o.pointerLockControls.getDirection(Z);const J=a=>{n.updateMatrixWorld(),g.makeEmpty(),s.copy(f.segment),s.start.applyMatrix4(n.matrixWorld),s.end.applyMatrix4(n.matrixWorld),g.expandByPoint(s.start),g.expandByPoint(s.end),g.min.addScalar(-f.radius),g.max.addScalar(f.radius),o.meshBVHManager.shapecast();const r=b;r.copy(s.start);const t=v;t.subVectors(r,n.position),w=t.y>Math.abs(a*c.y*.25);const d=Math.max(0,t.length()-1e-5);t.normalize().multiplyScalar(d),n.position.add(t),w?c.set(0,0,0):(t.normalize(),c.addScaledVector(t,-t.dot(c))),n.position.y<-80&&P()};o.keyboardMoveControls.addEventListener("afterUpdate",a=>{for(let r=0;r<S;r+=1)J(a.delta/S)});o.loadResourcesAsync(["/model/glb/dungeon_low_poly_game_level_challenge/scene.gltf"]).then(a=>{const t=a.resourceMap.get("/model/glb/dungeon_low_poly_game_level_challenge/scene.gltf").scene;t.scale.setScalar(.03);const d=new x;d.setFromObject(t),d.getCenter(t.position).negate(),t.updateMatrixWorld(!0);const i={};t.traverse(e=>{if(!(/Boss/.test(e.name)||/Enemie/.test(e.name)||/Shield/.test(e.name)||/Sword/.test(e.name)||/Character/.test(e.name)||/Gate/.test(e.name)||/Cube/.test(e.name)||e.material&&e.material.color.r===1)&&e.isMesh){const y=e.material.color.getHex();i[y]=i[y]||[],i[y].push(e)}});const l=new C;for(const e in i){const y=i[e],h=[];if(y.forEach(p=>{if(p.material.emissive.r!==0)l.attach(p);else{const m=p.geometry.clone();m.applyMatrix4(p.matrixWorld),h.push(m)}}),h.length){const p=_(h),m=new L(p,new W({color:parseInt(e),shadowSide:2}));m.castShadow=!0,m.receiveShadow=!0,m.material.shadowSide=2,l.add(m)}}l.updateMatrixWorld(!0),l.traverse(e=>{e.geometry&&o.addBVH(e)}),o.scene.add(l),o.play()});window.engine=o;
