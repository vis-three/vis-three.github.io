import{t as s}from"./curve.0ba3d968.js";const c="@vis-three/plugin-selection",i="selected",l=s(c),a=function(){return{name:l,install(e){e.selectionBox=new Set,e.setSelectionBox=function(t){if(this.selectionDisable)return this;this.selectionBox.clear();for(const o of t)this.selectionBox.add(o);return e.dispatchEvent({type:i,objects:Array.from(this.selectionBox)}),this}},dispose(e){e.selectionBox.clear(),delete e.selectionBox,delete e.setSelectionBox,delete e.selectionDisable}}};export{a as S,l as a,i as b};
