"use strict";(self.webpackChunkspofeety=self.webpackChunkspofeety||[]).push([[832],{2832:(f,l,e)=>{e.r(l),e.d(l,{LoginModule:()=>u});var g=e(9808),r=e(4100),n=e(5e3),a=e(8731),s=e(7423);const p=[{path:"",component:(()=>{class o{constructor(t,c){this._loginSpofeety=t,this._router=c,this.spofeetyIconImg="assets/img/spofeety.png"}ngOnInit(){this.verificarTokenUrlCallback()}verificarTokenUrlCallback(){const t=this._loginSpofeety.getTokenUrlCallback();t&&(this._loginSpofeety.definirAccessToken(t),this._router.navigate(["/player/search"]))}onLogin(){window.location.href=this._loginSpofeety.getUrlSpotify()}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(a.u),n.Y36(r.F0))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-login"]],decls:8,vars:1,consts:[[1,"login-container"],[1,"card-container"],[1,"card-content"],["alt","",3,"src"],["mat-raised-button","","color","primary",1,"btn-style",3,"click"]],template:function(t,c){1&t&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2),n._UZ(3,"img",3),n.TgZ(4,"div"),n._uU(5,"Spofeety"),n.qZA()(),n.TgZ(6,"button",4),n.NdJ("click",function(){return c.onLogin()}),n._uU(7,"LOGIN"),n.qZA()()()),2&t&&(n.xp6(3),n.Q6J("src",c.spofeetyIconImg,n.LSH))},directives:[s.lW],styles:[".login-container[_ngcontent-%COMP%]{width:100%;height:100%;background-color:#303030;display:flex;justify-content:center;align-items:center}.login-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:90px;height:90px}.card-container[_ngcontent-%COMP%]{width:20%;height:20%;background-color:#424242;display:flex;flex-direction:column;border-radius:20px;padding:5%;justify-content:space-between}.card-content[_ngcontent-%COMP%]{display:flex;align-items:center;gap:22px;font-size:2.4rem;font-weight:700;color:#fff;margin-top:-30px}.btn-style[_ngcontent-%COMP%]{margin-top:32px;padding:10px;border-radius:10px}"]}),o})()}];let d=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[r.Bz.forChild(p)],r.Bz]}),o})(),u=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[g.ez,d,s.ot]]}),o})()}}]);