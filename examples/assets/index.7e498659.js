import{t as E,b as h}from"./curve.0ba3d968.js";import{a as p,b as v}from"./index.0a430562.js";import{w as c,y as M,ay as m}from"./three.3f33d046.js";const u=new c,d=new M,l=new c;class k{constructor(e,t){this.enabled=!0,this.movementSpeed=1,this.lookSpeed=.005,this.lookVertical=!0,this.autoForward=!1,this.activeLook=!0,this.heightSpeed=!1,this.heightCoef=1,this.heightMin=0,this.heightMax=1,this.constrainVertical=!1,this.verticalMin=0,this.verticalMax=Math.PI,this.mouseDragOn=!1,this.autoSpeedFactor=0,this.mouseX=0,this.mouseY=0,this.moveForward=!1,this.moveBackward=!1,this.moveLeft=!1,this.moveRight=!1,this.moveUp=!1,this.moveDown=!1,this.viewHalfX=0,this.viewHalfY=0,this.targetPosition=new c,this.lat=0,this.lon=0,this._onMouseMove=this.onMouseMove.bind(this),this._onMouseDown=this.onMouseDown.bind(this),this._onMouseUp=this.onMouseUp.bind(this),this._onKeyDown=this.onKeyDown.bind(this),this._onKeyUp=this.onKeyUp.bind(this),this.contextmenu=function(n){n.preventDefault()},t===void 0&&(console.warn('THREE.FirstPersonControls: The second parameter "domElement" is now mandatory.'),t=document.body),this.object=e,this.domElement=t,this.domElement.addEventListener("contextmenu",this.contextmenu),this.domElement.addEventListener("mousemove",this._onMouseMove),this.domElement.addEventListener("mousedown",this._onMouseDown),this.domElement.addEventListener("mouseup",this._onMouseUp),window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),this.handleResize(),this.setOrientation()}setCamera(e){this.object=e}setDom(e){this.domElement.removeEventListener("contextmenu",this.contextmenu),this.domElement.removeEventListener("mousedown",this._onMouseDown),this.domElement.removeEventListener("mousemove",this._onMouseMove),this.domElement.removeEventListener("mouseup",this._onMouseUp),this.domElement=e,this.domElement.addEventListener("contextmenu",this.contextmenu),this.domElement.addEventListener("mousedown",this._onMouseDown),this.domElement.addEventListener("mousemove",this._onMouseMove),this.domElement.addEventListener("mouseup",this._onMouseUp)}setSize(e,t){this.handleResize()}setOrientation(){const e=this.object.quaternion;u.set(0,0,-1).applyQuaternion(e),d.setFromVector3(u),this.lat=90-m.radToDeg(d.phi),this.lon=m.radToDeg(d.theta)}handleResize(){this.viewHalfX=this.domElement.offsetWidth/2,this.viewHalfY=this.domElement.offsetHeight/2}onMouseDown(e){if(this.domElement.focus(),this.activeLook)switch(e.button){case 0:this.moveForward=!0;break;case 2:this.moveBackward=!0;break}this.mouseDragOn=!0}onMouseUp(e){if(this.activeLook)switch(e.button){case 0:this.moveForward=!1;break;case 2:this.moveBackward=!1;break}this.mouseDragOn=!1}onMouseMove(e){this.mouseX=e.pageX-this.domElement.offsetLeft-this.viewHalfX,this.mouseY=e.pageY-this.domElement.offsetTop-this.viewHalfY}onKeyDown(e){switch(e.code){case"ArrowUp":case"KeyW":this.moveForward=!0;break;case"ArrowLeft":case"KeyA":this.moveLeft=!0;break;case"ArrowDown":case"KeyS":this.moveBackward=!0;break;case"ArrowRight":case"KeyD":this.moveRight=!0;break;case"KeyR":this.moveUp=!0;break;case"KeyF":this.moveDown=!0;break}}onKeyUp(e){switch(e.code){case"ArrowUp":case"KeyW":this.moveForward=!1;break;case"ArrowLeft":case"KeyA":this.moveLeft=!1;break;case"ArrowDown":case"KeyS":this.moveBackward=!1;break;case"ArrowRight":case"KeyD":this.moveRight=!1;break;case"KeyR":this.moveUp=!1;break;case"KeyF":this.moveDown=!1;break}}lookAt(e,t,n){return e.isVector3?l.copy(e):l.set(e,t,n),this.object.lookAt(l),this.setOrientation(),this}update(e){if(this.enabled===!1)return;if(this.heightSpeed){const f=m.clamp(this.object.position.y,this.heightMin,this.heightMax)-this.heightMin;this.autoSpeedFactor=e*(f*this.heightCoef)}else this.autoSpeedFactor=0;const t=e*this.movementSpeed;(this.moveForward||this.autoForward&&!this.moveBackward)&&this.object.translateZ(-(t+this.autoSpeedFactor)),this.moveBackward&&this.object.translateZ(t),this.moveLeft&&this.object.translateX(-t),this.moveRight&&this.object.translateX(t),this.moveUp&&this.object.translateY(t),this.moveDown&&this.object.translateY(-t);let n=e*this.lookSpeed;this.activeLook||(n=0);let r=1;this.constrainVertical&&(r=Math.PI/(this.verticalMax-this.verticalMin)),this.lon-=this.mouseX*n,this.lookVertical&&(this.lat-=this.mouseY*n*r),this.lat=Math.max(-85,Math.min(85,this.lat));let o=m.degToRad(90-this.lat);const s=m.degToRad(this.lon);this.constrainVertical&&(o=m.mapLinear(o,0,Math.PI,this.verticalMin,this.verticalMax));const a=this.object.position;this.targetPosition.setFromSphericalCoords(1,o,s).add(a),this.object.lookAt(this.targetPosition)}dispose(){this.domElement.removeEventListener("contextmenu",this.contextmenu),this.domElement.removeEventListener("mousedown",this._onMouseDown),this.domElement.removeEventListener("mousemove",this._onMouseMove),this.domElement.removeEventListener("mouseup",this._onMouseUp),window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp)}}const L="@vis-three/plugin-first-person-controls",w=E(L),_=function(i={}){let e,t,n,r;return{name:w,install(o){const s=new k(o.camera,o.dom);s.movementSpeed=i.movementSpeed||1,s.lookSpeed=i.lookSpeed||.005,s.lookVertical=i.lookVertical||!0,s.autoForward=i.autoForward||!1,s.activeLook=i.activeLook||!0,s.heightSpeed=i.heightSpeed||!1,s.heightCoef=i.heightCoef||1,s.heightMin=i.heightMin||0,s.heightMax=i.heightMax||1,o.firstPersonControls=s,e=a=>{s.setDom(a.dom)},o.addEventListener(h.SETDOM,e),t=a=>{s.setCamera(a.camera)},o.addEventListener(h.SETCAMERA,t),n=a=>{s.setSize(a.width,a.height)},o.addEventListener(h.SETSIZE,n),r=a=>{s.update(a.delta)},o.addEventListener(h.RENDER,r)},dispose(o){o.removeEventListener(h.SETDOM,e),o.removeEventListener(h.SETCAMERA,t),o.removeEventListener(h.SETSIZE,n),o.removeEventListener(h.RENDER,r)}}},b="@vis-three/strategy-first-person-render",D=E(b),F=function(){let i;return{name:D,condition:[w,p],exec(e){i=t=>{e.firstPersonControls.update(t.delta)},e.renderManager.addEventListener(v.RENDER,i)},rollback(e){e.renderManager.removeEventListener(v.RENDER,i)}}};export{_ as F,F as a};
