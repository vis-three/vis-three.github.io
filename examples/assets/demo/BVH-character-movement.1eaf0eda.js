import"../modulepreload-polyfill.b7f2da20.js";import{l as B}from"../loadingTips.ee044a06.js";import{az as M,v as E,bQ as b,M as x,bm as _,a8 as G,n as u,a7 as R,J as W,a as L}from"../three.237d835c.js";import{m as z,M as A}from"../index.da7053a0.js";import{W as O,C as k}from"../index.1d3a6ec0.js";import{R as H}from"../index.e6be8a02.js";import{E as I}from"../index.2e2f06f6.js";import{L as K}from"../vis-three.plugin-loader-manager.es.c1771985.js";import{O as T}from"../vis-three.plugin-orbit-controls.es.9991f892.js";import{K as D,a as j}from"../index.7d0cd300.js";import{S as U}from"../index.32dc3bb0.js";import{E as q}from"../index.117a61e1.js";import{O as F}from"../index.3b8dbf96.js";import{S as J}from"../index.cd2c2c2e.js";import{d as Q}from"../index.202ebdec.js";/* empty css               */import"../Antdv.414c4eb5.js";import"../ShaderPass.02f07bc0.js";const v=new u,P=new u,g=new M;new E;const l=new b,S=5,N=20;let w=!1;const r=new x(new _(.5,.5,1),new G({color:"red"})),c=new u;r.geometry.translate(0,-.5,0);const y={radius:.5,segment:new b(new u,new u(0,-1,0))},a=Q({plugins:[H({}),O({antialias:!0,alpha:!0}),I({WebGLMultisampleRenderTarget:!0}),k(),K({path:"/examples/"}),T(),U(),A({visualizer:!0,shapecast:{intersectsBounds:o=>o.intersectsBox(g),intersectsTriangle:o=>{const i=v,s=P,d=o.closestPointToSegment(l,i,s);if(d<y.radius){const t=y.radius-d,n=s.sub(i).normalize();l.start.addScaledVector(n,t),l.end.addScaledVector(n,t)}}}}),D({target:r,movementSpeed:10,quickenSpeed:10,space:"world",extendKeyDown:o=>{switch(o.code){case"Space":w&&(c.y=N);break}},beforeUpdate:({delta:o})=>{c.y+=w?0:o*-30,r.position.addScaledVector(c,o)}})],strategy:[q(),F(),j(),J()]}).setDom(document.getElementById("app")).setSize().setStats(!0);B(a);const C=()=>{c.y=0,r.position.set(47,0,90),a.camera.position.set(0,5,15),a.orbitControls.target.set(0,0,0)},V=new R("white",7);V.position.set(-5,5,10);a.scene.add(r,V);C();const X=new u;a.keyboardMoveControls.forwrad=o=>X.set(0,0,-1).applyAxisAngle(o.up,a.orbitControls.getAzimuthalAngle());const Y=o=>{r.updateMatrixWorld();const i=a.camera,s=a.orbitControls;g.makeEmpty(),l.copy(y.segment),l.start.applyMatrix4(r.matrixWorld),l.end.applyMatrix4(r.matrixWorld),g.expandByPoint(l.start),g.expandByPoint(l.end),g.min.addScalar(-y.radius),g.max.addScalar(y.radius),a.meshBVHManager.shapecast();const d=v;d.copy(l.start);const t=P;t.subVectors(d,r.position),w=t.y>Math.abs(o*c.y*.25);const n=Math.max(0,t.length()-1e-5);t.normalize().multiplyScalar(n),r.position.add(t),w?c.set(0,0,0):(t.normalize(),c.addScaledVector(t,-t.dot(c))),r.position.y<-80&&C(),i.position.sub(s.target),s.target.copy(r.position),i.position.add(r.position)};a.keyboardMoveControls.addEventListener("afterUpdate",o=>{for(let i=0;i<S;i+=1)Y(o.delta/S)});a.loadResourcesAsync(["/model/glb/dungeon_low_poly_game_level_challenge/scene.gltf"]).then(o=>{const s=o.resourceMap.get("/model/glb/dungeon_low_poly_game_level_challenge/scene.gltf").scene;s.scale.setScalar(.03);const d=new M;d.setFromObject(s),d.getCenter(s.position).negate(),s.updateMatrixWorld(!0);const t={};s.traverse(e=>{if(!(/Boss/.test(e.name)||/Enemie/.test(e.name)||/Shield/.test(e.name)||/Sword/.test(e.name)||/Character/.test(e.name)||/Gate/.test(e.name)||/Cube/.test(e.name)||e.material&&e.material.color.r===1)&&e.isMesh){const f=e.material.color.getHex();t[f]=t[f]||[],t[f].push(e)}});const n=new W;for(const e in t){const f=t[e],h=[];if(f.forEach(p=>{if(p.material.emissive.r!==0)n.attach(p);else{const m=p.geometry.clone();m.applyMatrix4(p.matrixWorld),h.push(m)}}),h.length){const p=z(h),m=new x(p,new L({color:parseInt(e),shadowSide:2}));m.castShadow=!0,m.receiveShadow=!0,m.material.shadowSide=2,n.add(m)}}n.updateMatrixWorld(!0),n.traverse(e=>{e.geometry&&a.addBVH(e)}),a.scene.add(n),a.play()});window.engine=a;
