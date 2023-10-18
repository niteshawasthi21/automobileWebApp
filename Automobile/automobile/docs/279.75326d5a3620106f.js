"use strict";(self.webpackChunkCrudApp=self.webpackChunkCrudApp||[]).push([[279],{3279:(v,u,t)=>{t.r(u),t.d(u,{RegisterModule:()=>i});var c=t(6895),d=t(4228),o=t(4006),g=t(5226),f=t.n(g),e=t(8274),Z=t(3),m=t(334);class l{constructor(r,a,p){this.formbuilder=r,this.authService=a,this.spinner=p,this.form=this.formbuilder.group({name:["",o.kI.required],email:["",[o.kI.required,o.kI.email]],password:["",o.kI.required],gender:["",o.kI.required]})}ngOnInit(){}onSubmit(){this.spinner.show(),this.form.valid&&this.authService.registerUser(this.form.value).subscribe(r=>{f().fire("Register Successfully"),this.spinner.hide(),this.form.reset()})}}l.\u0275fac=function(r){return new(r||l)(e.Y36(o.qu),e.Y36(Z.x),e.Y36(m.t2))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-register"]],decls:33,vars:2,consts:[[1,"mx-auto","border","border-dark","col-7","bg-dark","rounded",3,"formGroup","ngSubmit"],[1,"modal-body"],[1,"modal-footer"],[1,"modal-body","border","border-dark","col-6","mx-auto","bg-light"],[1,"form-group"],["type","text","placeholder","Enter your name","formControlName","name",1,"input-sm","form-control","row-5"],["type","email","placeholder","Enter your email","formControlName","email","pattern","^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$","required","",1,"input-sm","form-control"],["formControlName","gender","required","",1,"input-sm","form-control"],["value",""],["value","male"],["value","female"],["type","password","formControlName","password","required","",1,"input-sm","form-control"],["type","submit",1,"btn","btn-success",3,"disabled"],["bdColor","rgba(51,51,51,0.8)","size","medium","color","#fff","type","ball-scale-multiple"],[2,"font-size","20px","color","white"]],template:function(r,a){1&r&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return a.onSubmit()}),e.TgZ(1,"div",1),e._UZ(2,"div",2),e.TgZ(3,"div",3)(4,"div",4)(5,"label"),e._uU(6,"First Name"),e.qZA(),e._UZ(7,"input",5),e.qZA(),e.TgZ(8,"div",4)(9,"label"),e._uU(10,"Email"),e.qZA(),e._UZ(11,"input",6),e.qZA(),e.TgZ(12,"div",4)(13,"label"),e._uU(14,"Gender"),e.qZA(),e.TgZ(15,"select",7)(16,"option",8),e._uU(17,"Select One"),e.qZA(),e.TgZ(18,"option",9),e._uU(19," Male "),e.qZA(),e.TgZ(20,"option",10),e._uU(21," Female "),e.qZA()()(),e.TgZ(22,"div",4)(23,"label"),e._uU(24,"Password"),e.qZA(),e._UZ(25,"input",11),e.qZA()(),e.TgZ(26,"div",4)(27,"button",12),e._uU(28,"Save"),e.qZA()()(),e._UZ(29,"div",2),e.TgZ(30,"ngx-spinner",13)(31,"p",14),e._uU(32,"Please Wait..."),e.qZA()()()),2&r&&(e.Q6J("formGroup",a.form),e.xp6(27),e.Q6J("disabled",a.form.invalid))},dependencies:[o._Y,o.YN,o.Kr,o.Fj,o.EJ,o.JJ,o.JL,o.Q7,o.c5,o.sg,o.u,m.Ro],styles:[".bg-light[_ngcontent-%COMP%]{background-color:#b0c1d1!important;border-radius:1em}input[_ngcontent-%COMP%]{border:1px solid black;height:3.1em}form[_ngcontent-%COMP%]{margin-top:5em}"]});const b=[{path:"",component:l}];class n{}n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.Bz.forChild(b),d.Bz]});class i{}i.\u0275fac=function(r){return new(r||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[c.ez,n,o.UX,m.ef]})}}]);