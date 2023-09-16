import{a as P,b as R}from"./index.e11efb4f.js";import{t as x,a as n}from"./index.f2ecf0d4.js";import{i as C,j as T,O as A,k as M,l as b,V as E,m as L,n as N,o as B,R as w,p as k}from"./three.9c0f0dc6.js";import{P as d,F as D,C as _}from"./Pass.609ff57c.js";import{a as u}from"./index.62b980cf.js";class S extends d{constructor(e,s){super(),this.textureID=s!==void 0?s:"tDiffuse",e instanceof C?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=T.clone(e.uniforms),this.material=new C({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new D(this.material)}render(e,s,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(s),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class g extends d{constructor(e,s){super(),this.scene=e,this.camera=s,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,s,r){const i=e.getContext(),t=e.state;t.buffers.color.setMask(!1),t.buffers.depth.setMask(!1),t.buffers.color.setLocked(!0),t.buffers.depth.setLocked(!0);let a,h;this.inverse?(a=0,h=1):(a=1,h=0),t.buffers.stencil.setTest(!0),t.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),t.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),t.buffers.stencil.setClear(h),t.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(s),this.clear&&e.clear(),e.render(this.scene,this.camera),t.buffers.color.setLocked(!1),t.buffers.depth.setLocked(!1),t.buffers.stencil.setLocked(!1),t.buffers.stencil.setFunc(i.EQUAL,1,4294967295),t.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),t.buffers.stencil.setLocked(!0)}}class z extends d{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class p{constructor(e,s){if(this.renderer=e,s===void 0){const r=e.getSize(new E);this._pixelRatio=e.getPixelRatio(),this._width=r.width,this._height=r.height,s=new L(this._width*this._pixelRatio,this._height*this._pixelRatio),s.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=s.width,this._height=s.height;this.renderTarget1=s,this.renderTarget2=s.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],_===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),S===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new S(_),this.clock=new N}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,s){this.passes.splice(s,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const s=this.passes.indexOf(e);s!==-1&&this.passes.splice(s,1)}isLastEnabledPass(e){for(let s=e+1;s<this.passes.length;s++)if(this.passes[s].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const s=this.renderer.getRenderTarget();let r=!1;for(let i=0,t=this.passes.length;i<t;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),a.needsSwap){if(r){const h=this.renderer.getContext(),f=this.renderer.state.buffers.stencil;f.setFunc(h.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),f.setFunc(h.EQUAL,1,4294967295)}this.swapBuffers()}g!==void 0&&(a instanceof g?r=!0:a instanceof z&&(r=!1))}}this.renderer.setRenderTarget(s)}reset(e){if(e===void 0){const s=this.renderer.getSize(new E);this._pixelRatio=this.renderer.getPixelRatio(),this._width=s.width,this._height=s.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,s){this._width=e,this._height=s;const r=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(r,i),this.renderTarget2.setSize(r,i);for(let t=0;t<this.passes.length;t++)this.passes[t].setSize(r,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new A(-1,1,1,-1,0,1);const v=new M;v.setAttribute("position",new b([-1,3,0,-1,-1,0,3,-1,0],3));v.setAttribute("uv",new b([0,2,0,0,2,0],2));class F extends d{constructor(e,s,r,i,t){super(),this.scene=e,this.camera=s,this.overrideMaterial=r,this.clearColor=i,this.clearAlpha=t!==void 0?t:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new B}render(e,s,r){const i=e.autoClear;e.autoClear=!1;let t,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),t=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,t),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),e.autoClear=i}}const G="@vis-three/plugin-effect-composer",m=x(G),$=function(o={}){let e,s,r,i;return{name:m,deps:u,install(t){let a;if(o.WebGLMultisampleRenderTarget||o.MSAA){const f=t.webGLRenderer,l=f.getPixelRatio(),c=f.getDrawingBufferSize(new E);Number(window.__THREE__)>137?a=new p(f,new L(c.width*l,c.height*l,{format:o.format||w,samples:o.samples||4})):a=new p(f,new k(c.width*l,c.height*l,{format:o.format||w}))}else a=new p(t.webGLRenderer);t.effectComposer=a;const h=new F(t.scene,t.camera);a.addPass(h),e=f=>{h.camera=f.camera},t.addEventListener(n.SETCAMERA,e),r=f=>{h.scene=f.scene},t.addEventListener(n.SETSCENE,r),s=f=>{a.setSize(f.width,f.height)},t.addEventListener(n.SETSIZE,s),console.warn(`${m}: hope install close behind the ${u}, because ${u}\`s renderFun can be dispose. if you not do this, render are prone to bugs`),t.popLatestEvent(n.RENDER),i=()=>{a.render()},t.addEventListener(n.RENDER,i)},dispose(t){t.removeEventListener(n.SETCAMERA,e),t.addEventListener(n.SETSCENE,r),t.addEventListener(n.SETSIZE,s),t.removeEventListener(n.RENDER,i),delete t.effectComposer}}},O="@vis-three/strategy-effect-render",y=x(O),H=function(){let o;return{name:y,condition:[m,P],exec(e){o=s=>{e.effectComposer.render(s.delta)},e.renderManager.addEventListener(R.RENDER,o)},rollback(e){e.renderManager.removeEventListener(R.RENDER,o)}}};export{$ as E,H as a,m as b};