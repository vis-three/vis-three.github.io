import{a,b as t}from"./index.9c42f01c.js";import{a as E}from"./index.388dadd4.js";import{t as o}from"./index.7d48aff8.js";const s="@vis-three/strategy-effect-render",m=o(s),f=function(){let r;return{name:m,condition:[E,a],exec(e){r=n=>{e.effectComposer.render(n.delta)},e.renderManager.addEventListener(t.RENDER,r)},rollback(e){e.renderManager.removeEventListener(t.RENDER,r)}}};export{f as E};