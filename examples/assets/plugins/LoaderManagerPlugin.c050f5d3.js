import"../modulepreload-polyfill.b7f2da20.js";import{P as d,aK as m}from"../three.3f33d046.js";import{W as g,C as p}from"../index.c0df7946.js";import{E as c}from"../curve.0ba3d968.js";import{Z as x}from"../vis-three.plugin-loader-manager.es.3fc670d5.js";const t=c({plugins:[g({antialias:!0,alpha:!0}),p(),x({path:"/examples/"})]}).setDom(document.getElementById("app")).setSize(),s=t.scene,i=new d("rgb(255, 255, 255)",1,1e3,.01);i.position.set(10,10,10);s.add(i);const b=document.getElementById("totalProgress"),M=document.getElementById("detailProgress");t.loaderManager.addEventListener("loading",e=>{b.innerHTML=`total: ${e.loadTotal}, success: ${e.loadSuccess}, error: ${e.loadError}`});t.loaderManager.addEventListener("detailLoading",e=>{M.innerText=`
              url: ${e.detail.url}
              progress: ${e.detail.progress}
              error: ${e.detail.error}
              message: ${e.detail.message}
            `});const a=new m;t.loaderManager.addEventListener("loaded",e=>{let r=-20;e.resourceMap.forEach((o,l)=>{l==="/model/glb/MaterialsVariantsShoe/MaterialsVariantsShoe.gltf"&&(o=o.scene),a.setFromObject(o);const n=30/Math.abs(Math.max(a.max.x-a.min.x,a.max.y-a.min.y,a.max.z-a.min.z));o.position.set(r,0,0),o.scale.set(n,n,n),s.add(o),r+=20}),t.render()});t.loaderManager.load(["/model/fbx/nurbs.fbx","/model/glb/MaterialsVariantsShoe/MaterialsVariantsShoe.gltf",{url:"/model/katana/katana.obj",ext:"obj"}]);window.engine=t;