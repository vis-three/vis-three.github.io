import{R as l,v as n,b as p,u as o,d as c,C as d,D as R,M as m,a as i}from"./vis-three.middleware.es.2e80d21b.js";import{s as u,t as E}from"./index.7d48aff8.js";import{a as h}from"./index.1d7ad8b9.js";import{x as w,y as f,z as C}from"./three.837c9bb0.js";const a=[],x=function(e,r){l(e,r,s=>n(s)||a.includes(s))};class P extends p{constructor(){super()}reigstProcessor(r,s){return a.push(o(r.type)),super.reigstProcessor(r,s)}}const b=function(){return{vid:"",type:"Renderer",name:"",size:null}};var M={type:"renderer",compiler:P,rule:x,processors:[]};const y="@vis-three/strategy-webgl-renderer-support",G=function(){return Object.assign(b(),{vid:o("WebGLRenderer"),clearColor:"rgba(0, 0, 0, 0)",outputEncoding:w,physicallyCorrectLights:!1,shadowMap:{enabled:!1,autoUpdate:!0,needsUpdate:!1,type:f},toneMapping:C,toneMappingExposure:1,pixelRatio:window.devicePixelRatio,adaptiveCamera:!1,viewport:null,scissor:null})};var L=c({type:"WebGLRenderer",config:G,commands:{set:{size({target:e,config:r}){r.size?e.setSize(r.size.x,r.size.y):e.setSize(e.domElement.offsetWidth,e.domElement.offsetHeight)},clearColor({target:e,value:r}){const s=Number(r.slice(0,-1).split(",").pop().trim());e.setClearColor(r,s),e.clear()},viewport({target:e,config:r}){const s=r.viewport;if(s)e.setViewport(s.x,s.y,s.width,s.height);else{const t=e.domElement;e.setViewport(0,0,t.offsetWidth,t.offsetHeight)}},scissor({target:e,config:r}){const s=r.scissor;if(s)e.setScissorTest(!0),e.setScissor(s.x,s.y,s.width,s.height);else{e.setScissorTest(!1);const t=e.domElement;e.setScissor(0,0,t.offsetWidth,t.offsetHeight)}},pixelRatio({target:e,value:r}){e.setPixelRatio(r),e.clear()}}},create(e,r){let s=r.webGLRenderer;if(e.size&&s.setSize(e.size.x,e.size.y),e.clearColor){const t=Number(e.clearColor.slice(0,-1).split(",").pop().trim());s.setClearColor(e.clearColor,t)}if(e.viewport){const t=e.viewport;s.setViewport(t.x,t.y,t.width,t.height)}if(e.scissor){const t=e.scissor;s.setScissorTest(!0),s.setScissor(t.x,t.y,t.width,t.height)}return e.pixelRatio&&s.setPixelRatio(e.pixelRatio),u(e,s,{size:!0,clearColor:!0,viewport:!0,scissor:!0,pixelRatio:!0}),s},dispose(e){e.clear(),e.dispose()}});const S=E(y),T=function(){return{name:S,condition:[d,R,h],exec(e){e.compilerManager.getCompiler(m.RENDERER).reigstProcessor(L,s=>{s.map.set(o(i.WEBGLRENDERER),e.webGLRenderer),s.weakMap.set(e.webGLRenderer,o(i.WEBGLRENDERER))})},rollback(){}}};export{T as W,b as g,M as i};
