"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[601],{601:(t,e,n)=>{n.r(e),n.d(e,{default:()=>l});var o=n(821),r=(0,o._)("i",{class:"fas fa-star"},null,-1),s=(0,o._)("input",{type:"submit",value:"Login"},null,-1);const i={props:["title"],emits:["login-submited"],data:function(){return{email:"",password:"",error:""}},methods:{onSubmit:function(){var t={email:this.email,pass:this.password},e=document.getElementById("loginForm");new FormData(e);console.log("Form data onSubmit child component event",t),""!=this.email&&""!=this.pass?this.$emit("login-submited",t):this.error="Form can not be empty!"},increment:function(){this.$store.commit("increment"),console.log(this.$store.state.count)}}};const l=(0,n(744).Z)(i,[["render",function(t,e,n,i,l,a){return(0,o.wg)(),(0,o.iD)("form",{id:"loginForm",class:"login-form",onSubmit:e[2]||(e[2]=(0,o.iM)((function(){return a.onSubmit&&a.onSubmit.apply(a,arguments)}),["prevent"]))},[(0,o._)("div",{class:(0,o.C_)(["form-title",t.$attrs.class])},[r,(0,o.Uk)(" "+(0,o.zw)(n.title),1)],2),(0,o.wy)((0,o._)("div",{class:"error"},(0,o.zw)(l.error),513),[[o.F8,""!=l.error]]),(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":e[0]||(e[0]=function(t){return l.email=t}),placeholder:"Email address"},null,512),[[o.nr,l.email]]),(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return l.password=t}),type:"password",placeholder:"Password"},null,512),[[o.nr,l.password]]),s],32)}]])}}]);