import"../modulepreload-polyfill.b7f2da20.js";import{D as y}from"../index.b80d8e5c.js";import{G as c}from"../index.591a8368.js";import{C as b}from"../vis-three.convenient.es.7b860830.js";import{d as l,h as t,v as f,r as x,w as g,a as w}from"../vis-three.widget.es.23dc36de.js";import"../index.1d3a6ec0.js";import"../index.202ebdec.js";import"../three.237d835c.js";import"../index.edc751ad.js";import"../CSS3DRenderer.ba0f6fa5.js";import"../index.e6be8a02.js";import"../index.2f498209.js";import"../index.2e2f06f6.js";import"../ShaderPass.02f07bc0.js";import"../vis-three.plugin-orbit-controls.es.9991f892.js";import"../index.692e1021.js";import"../vis-three.middleware.es.7f273029.js";import"../vis-three.plugin-loader-manager.es.c1771985.js";import"../vis-three.plugin-pointer-manager.es.640cfa1a.js";import"../index.c35e5a3e.js";import"../G6.d44f13fb.js";import"../Antdv.414c4eb5.js";import"../index.90db9154.js";import"../vis-three.module-particle.es.8e43cbb8.js";import"../UnrealBloomPass.2cdbe9ee.js";import"../index.ee52b7bf.js";import"../vis-three.strategy-orbit-controls-support.es.706978dc.js";import"../index.117a61e1.js";import"../index.3b8dbf96.js";import"../index.d3463d42.js";import"../vis-three.library-parser.es.5c9e4dac.js";import"../vis-three.strategy-multi-renderer.es.a35ffd0a.js";const d=new y().install(c()).setDom(document.getElementById("app")).setSize().play(),z=l({props:{title:{type:String,default:"\u6807\u7B7E"},position:{type:Object,default:()=>({x:0,y:0,z:0})}},resources(){return{text:this.textGenerator.getDom()}},render({resources:e}){t("Sprite",{material:t("SpriteMaterial",{map:t("CanvasTexture",{url:e.text,ref:"texture"}),sizeAttenuation:!1,transparent:!0,alphaTest:.01}),scale:{x:.16,y:.09},position:this.position})},setup({props:e}){const o=new b({width:400,height:200}),r=()=>o.draw(i=>{i.fillStyle="rgba(0, 0, 0, 0)",i.fillRect(0,0,400,200),i.translate(200,100),i.textBaseline="middle",i.textAlign="center",i.fillStyle="black",i.font="42px \u5FAE\u8F6F\u96C5\u9ED1",i.fillStyle="white",i.fillText(e.title,0,0),i.translate(-200,-100)});return g(e.title,()=>{r()},{immediate:!0}),{textGenerator:o}}}),v=l({props:{initColor:{type:String,default:"rgb(200, 200, 200)"},value:{type:Number,default:1},position:{type:Object,default:()=>({x:0,y:0,z:0})}},render(){t("Mesh",{geometry:t("BoxGeometry",{width:5,height:1,depth:5,position:{y:1}}),material:t("MeshStandardMaterial",{color:this.color,transparent:!0,opacity:.8}),scale:{y:this.value},position:this.position,onMouseenter:this.mouseEnter,onMouseleave:this.mouseLeave})},setup({engine:e,props:o}){const r=w("");return g(o.initColor,()=>{r.value=o.initColor},{immediate:!0}),{color:r,mouseEnter(){e.dom.style.cursor="pointer",r.value="rgb(200, 200, 50)"},mouseLeave(){e.dom.style.cursor="unset",r.value=o.initColor}}}}),M=l({props:{width:{type:Number,default:50},widthSegments:{type:Number,default:6},height:{type:Number,default:50},heightSegments:{type:Number,default:6},position:{type:Object,default:()=>({x:0,y:0,z:0})},rotation:{type:Object,default:()=>({x:0,y:0,z:0})}},render(){t("LineSegments",{geometry:t("CustomGeometry",{attribute:{position:this.vertexs},center:!1}),material:t("LineBasicMaterial"),position:this.position,rotation:this.rotation})},setup({props:e}){const o=e.width,r=o/2,i=e.height,n=i/2,p=e.widthSegments,m=e.heightSegments,h=o/p,u=i/m,s=[];for(let a=0;a<=p;a+=1)s.push(h*a-r,-n,0,h*a-r,n,0);for(let a=0;a<=m;a+=1)s.push(-r,u*a-n,0,r,u*a-n,0);return{vertexs:s}}}),S=l({components:{label:z,pillar:v,grid:M},render({components:e}){t("DirectionalLight",{intensity:1.5,position:{x:5,z:10,y:10}}),t(e.label,{title:"\u751F\u4EA7\u529B",position:{x:-15,z:30}}),t(e.label,{title:"\u521B\u65B0\u529B",position:{z:30}}),t(e.label,{title:"\u7A33\u5065\u6027",position:{z:30,x:15}}),t(e.label,{title:"\u8F6F\u4EF6",position:{x:30,z:15}}),t(e.label,{title:"\u8D21\u732E\u8005",position:{x:30}}),t(e.label,{title:"\u534F\u4F5C",position:{z:-15,x:30}}),t(e.grid,{position:{x:0,y:25,z:-25}}),t(e.grid,{position:{x:-25,y:25,z:0},rotation:{y:Math.PI/2}}),t(e.grid,{widthSegments:3,heightSegments:3,rotation:{x:Math.PI/2}}),t("Mesh",{geometry:t("PlaneGeometry",{width:50,height:17,rotation:{x:-Math.PI/2}}),material:t("MeshBasicMaterial",{color:"rgb(250, 250, 200)",transparent:!0,opacity:.9}),position:{z:17,y:-.01}}),t("Mesh",{geometry:t("PlaneGeometry",{width:50,height:17,rotation:{x:-Math.PI/2}}),material:t("MeshBasicMaterial",{color:"rgb(255, 242, 242)",transparent:!0,opacity:.9}),position:{z:0,y:-.01}}),t("Mesh",{geometry:t("PlaneGeometry",{width:50,height:17,rotation:{x:-Math.PI/2}}),material:t("MeshBasicMaterial",{color:"rgb(200, 200, 200)",transparent:!0,opacity:.9}),position:{z:-17,y:-.01}}),f(()=>{this.pillars.forEach(o=>{t(e.pillar,o)})})},setup({engine:e}){return{pillars:x([{initColor:"rgb(100, 100, 200)",position:{x:-15,z:15},value:22},{initColor:"rgb(100, 100, 200)",position:{x:0,z:15},value:32},{initColor:"rgb(200, 50, 200)",position:{x:15,z:15},value:12},{initColor:"rgb(100, 100, 200)",position:{x:-15,z:0},value:23},{initColor:"rgb(100, 100, 200)",position:{x:0,z:0},value:6},{initColor:"rgb(100, 100, 200)",position:{x:15,z:0},value:32},{initColor:"rgb(200, 200, 200)",position:{x:-15,z:-15},value:34},{initColor:"rgb(200, 200, 200)",position:{x:0,z:-15},value:15},{initColor:"rgb(200, 200, 200)",position:{x:15,z:-15},value:7}])}}}),C=d.createWidget(S).mount();window.widget=C;window.engine=d;
