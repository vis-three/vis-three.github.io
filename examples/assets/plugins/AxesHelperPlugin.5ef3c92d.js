import"../modulepreload-polyfill.b7f2da20.js";import{W as n,C as r}from"../index.1d7ad8b9.js";import{d as i}from"../index.7d48aff8.js";import{A as o}from"../index.a87f8394.js";import"../three.837c9bb0.js";const t=i({plugins:[n({antialias:!0,alpha:!0}),r(),o({length:40})]}).setDom(document.getElementById("app")).setSize();t.render();let e=!0;document.getElementById("operate").onclick=a=>{e=!e,t.setAxesHelper(e),t.render()};
