import"../modulepreload-polyfill.b7f2da20.js";import{E as n}from"../curve.0ba3d968.js";import{m as a}from"../vis-three.plugin-keyboard-manager.es.16e92de2.js";import"../three.3f33d046.js";import"../Antdv.7b6104cc.js";const o=n({plugins:[a()]}),t=[];for(let e=0;e<=9;e+=1)t.push(String.fromCharCode(e));for(let e=97;e<=122;e+=1)t.push(String.fromCharCode(e));const p=document.querySelector(".keyboard-message");let r="window";t.forEach(e=>{o.keyboardManager.register({shortcutKey:[e],desp:`key ${e}`,keyup:c=>{p.innerHTML=`${r} touch '${e}'`}})});console.log(o.keyboardManager.getDocs());document.getElementById("app1").onclick=e=>{r="app1",o.keyboardManager.watch(document.getElementById("app1"))};document.getElementById("app2").onclick=e=>{r="app2",o.keyboardManager.watch(document.getElementById("app2"))};
