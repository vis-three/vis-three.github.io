import"../modulepreload-polyfill.b7f2da20.js";import{g as r}from"../lil-gui.module.min.2435205c.js";import{H as d}from"../vis-three.convenient.es.3345d486.js";import"../three.3f33d046.js";const n=new d({width:window.innerWidth/4,height:window.innerHeight/4}).preview({left:"30%",top:"30%"}),o={color:"rgb(206, 42, 230)",fontSize:22,text:"Hello World!"},t=e=>{e.textBaseline="middle",e.textAlign="center",e.fillStyle=o.color,e.font=`bold ${o.fontSize}px \u5FAE\u8F6F\u96C5\u9ED1`,e.fillText(o.text,window.innerWidth/8,window.innerHeight/8)};n.draw(t);const i=new r;i.addColor(o,"color").onChange(e=>{n.clear().draw(t)});i.add(o,"fontSize",1,30,1).onChange(e=>{n.clear().draw(t)});i.add(o,"text").onChange(e=>{n.clear().draw(t)});