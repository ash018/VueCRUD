(function(t){function e(e){for(var n,a,o=e[0],l=e[1],c=e[2],u=0,p=[];u<o.length;u++)a=o[u],s[a]&&p.push(s[a][0]),s[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,o=1;o<i.length;o++){var l=i[o];0!==s[l]&&(n=!1)}n&&(r.splice(e--,1),t=a(a.s=i[0]))}return t}var n={},s={app:0},r=[];function a(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=n,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("64a9"),s=i.n(n);s.a},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-link",{attrs:{to:{name:"add"}}},[i("button",{staticClass:"btn btn-danger"},[t._v("Risk")])]),i("router-link",{attrs:{to:{name:"addfield"}}},[i("button",{staticClass:"btn btn-primary"},[t._v("Field Type")])]),i("router-view")],1)},r=[],a={},o=a,l=(i("034f"),i("2877")),c=Object(l["a"])(o,s,r,!1,null,null,null),d=c.exports,u=i("8c4f"),p=i("bc3a"),f=i.n(p),m=i("a7fe"),h=i.n(m),v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("h1",[t._v("Risks")]),i("router-link",{attrs:{to:{name:"add"}}},[i("button",{staticClass:"btn btn-primary"},[t._v("Add Risk")])]),i("br"),i("table",{staticClass:"table table-hover"},[t._m(0),i("tbody",t._l(t.risks,function(e){return i("tr",{key:e.risk_id},[i("td",[t._v(t._s(e.risk_id))]),i("td",[t._v(t._s(e.risk_name))]),i("td",[i("a",{staticClass:"btn btn-success",attrs:{target:"_blank",href:"/edit/"+e.risk_id+"?q="+e.risk_name}},[t._v("Edit")])]),i("td",[i("a",{staticClass:"btn btn-danger",attrs:{target:"_blank",href:"/delete/"+e.risk_id}},[t._v("Delete")])])])}),0)])],1)},k=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("thead",[i("tr",[i("td",[t._v("ID")]),i("td",[t._v("Risk Name")]),i("td",{attrs:{colspan:"2"}},[t._v("Action")])])])}],_={data:function(){return{risks:[]}},created:function(){this.fetchItems()},methods:{fetchItems:function(){var t=this,e="http://risk-backend.herokuapp.com/api/risk";this.axios.get(e).then(function(e){t.risks=e.data})},updateRisk:function(){var t=this;this.loading=!0,this.axios.put("http://risk-backend.herokuapp.com/api/risk/${this.currentRisk.risk_id}/",this.currentRisk).then(function(e){t.loading=!1,t.currentRisk=e.data,t.fetchItems()}).catch(function(e){t.loading=!1,console.log(e)})}}},b=_,y=Object(l["a"])(b,v,k,!1,null,null,null),g=y.exports,C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("h1",[t._v("Create A Risk")]),i("router-link",{attrs:{to:{name:"risk"}}},[i("button",{staticClass:"btn btn-default"},[t._v("Show List")])]),i("form",{on:{submit:function(e){return e.preventDefault(),t.addRisk(e)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"form-group"},[i("label",[t._v("Risk Name")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.risk.risk_name,expression:"risk.risk_name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.risk.risk_name},on:{input:function(e){e.target.composing||t.$set(t.risk,"risk_name",e.target.value)}}})])])]),i("br"),t._m(0)])],1)},x=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form-group"},[i("button",{staticClass:"btn btn-primary"},[t._v("Create Risk")])])}],$={data:function(){return{risk:{}}},methods:{addRisk:function(){var t=this,e="http://risk-backend.herokuapp.com/api/risk/";this.axios.post(e,this.risk).then(function(e){console.log(e),t.$router.push("/risk")})}}},E=$,R=Object(l["a"])(E,C,x,!1,null,null,null),w=R.exports,F=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("h1",[t._v("Edit Risk")]),i("form",{on:{submit:function(e){return e.preventDefault(),t.updateRisk(e)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"form-group"},[i("label",[t._v("Risk Name")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.risk.risk_name,expression:"risk.risk_name"}],staticClass:"form-control",attrs:{type:"text",id:"EditVal"},domProps:{value:t.risk.risk_name},on:{input:function(e){e.target.composing||t.$set(t.risk,"risk_name",e.target.value)}}})])])]),i("br"),t._m(0)])])},T=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form-group"},[i("button",{staticClass:"btn btn-primary"},[t._v("Edit Risk")])])}],O={props:["riskid"],data:function(){return{risk:{risk_name:this.$route.query.q},name:"hello"}},created:function(){console.log(this.riskid)},watch:{risk:function(){var t=this,e="http://risk-backend.herokuapp.com/api/risk/"+this.riskid+"/";this.axios.get(e,this.risk).then(function(e){console.log(e.data.risk_name),t.risk.risk_name=e.data.risk_name})}},methods:{fetchRisk:function(){var t=this,e="http://risk-backend.herokuapp.com/api/risk/"+this.riskid+"/";this.axios.get(e,this.risk).then(function(e){console.log(e.data.risk_name),t.risk.risk_name=e.data.risk_name})},updateRisk:function(){var t=this,e="http://risk-backend.herokuapp.com/api/risk/"+this.riskid+"/";this.axios.put(e,this.risk).then(function(e){console.log(e),t.$router.push("/risk")})}}},j=O,D=Object(l["a"])(j,F,T,!1,null,null,null),N=D.exports,P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("h1",[t._v("Delete Risk")]),i("form",{on:{submit:function(e){return e.preventDefault(),t.deleteRisk(e)}}},[t._m(0),i("br"),t._m(1)])])},S=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"form-group"},[i("label",[t._v("Sure Want to delete?")])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form-group"},[i("button",{staticClass:"btn btn-danger"},[t._v("Delete Risk")])])}],I={props:["riskid"],data:function(){return{risk:{}}},created:function(){this.fetchRisk(),console.log(this.riskid)},methods:{fetchRisk:function(){var t="http://risk-backend.herokuapp.com/api/risk/"+this.riskid+"/";this.axios.get(t,this.risk).then(function(t){console.log(t)})},deleteRisk:function(){var t=this,e="http://risk-backend.herokuapp.com/api/risk/"+this.riskid+"/";this.axios.delete(e,this.risk).then(function(e){console.log(e),t.$router.push("/risk")})}}},q=I,A=Object(l["a"])(q,P,S,!1,null,null,null),M=A.exports,J=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("h1",[t._v("Create A Field Type")]),i("router-link",{attrs:{to:{name:"fieldtype"}}},[i("button",{staticClass:"btn btn-default"},[t._v("Show List")])]),i("form",{on:{submit:function(e){return e.preventDefault(),t.addFieldtype(e)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"form-group"},[i("label",[t._v("Field Type Name")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.fieldtype.fieldtype_name,expression:"fieldtype.fieldtype_name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.fieldtype.fieldtype_name},on:{input:function(e){e.target.composing||t.$set(t.fieldtype,"fieldtype_name",e.target.value)}}})])])]),i("br"),t._m(0)])],1)},L=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form-group"},[i("button",{staticClass:"btn btn-primary"},[t._v("Create Fieldtype")])])}],W={data:function(){return{fieldtype:{}}},methods:{addFieldtype:function(){var t=this,e="http://risk-backend.herokuapp.com/api/fieldtype/";this.axios.post(e,this.fieldtype).then(function(e){console.log(e),t.$router.push("/fieldtype")})}}},V=W,z=Object(l["a"])(V,J,L,!1,null,null,null),B=z.exports,G=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("h1",[t._v("Field Type")]),i("router-link",{attrs:{to:{name:"addfield"}}},[i("button",{staticClass:"btn btn-primary"},[t._v("Add Field Type")])]),i("br"),i("table",{staticClass:"table table-hover"},[t._m(0),i("tbody",t._l(t.fieldtypes,function(e){return i("tr",{key:e.fieldtype_id},[i("td",[t._v(t._s(e.fieldtype_id))]),i("td",[t._v(t._s(e.fieldtype_name))]),i("td",[i("a",{staticClass:"btn btn-success",attrs:{target:"_blank",href:"/editfield/"+e.fieldtype_id+"?q="+e.fieldtype_name}},[t._v("Edit")])]),i("td",[i("a",{staticClass:"btn btn-danger",attrs:{target:"_blank",href:"/deletefield/"+e.fieldtype_id}},[t._v("Delete")])])])}),0)])],1)},H=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("thead",[i("tr",[i("td",[t._v("ID")]),i("td",[t._v("Field Type Name")]),i("td",{attrs:{colspan:"2"}},[t._v("Action")])])])}],K={data:function(){return{fieldtypes:[]}},created:function(){this.fetchItems()},methods:{fetchItems:function(){var t=this,e="http://risk-backend.herokuapp.com/api/fieldtype";this.axios.get(e).then(function(e){t.fieldtypes=e.data})}}},Q=K,U=Object(l["a"])(Q,G,H,!1,null,null,null),X=U.exports,Y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("h1",[t._v("Edit Fieldtype")]),i("form",{on:{submit:function(e){return e.preventDefault(),t.updateFieldType(e)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"form-group"},[i("label",[t._v("Field Type Name")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.fieldtype.fieldtype_name,expression:"fieldtype.fieldtype_name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.fieldtype.fieldtype_name},on:{input:function(e){e.target.composing||t.$set(t.fieldtype,"fieldtype_name",e.target.value)}}})])])]),i("br"),t._m(0)])])},Z=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form-group"},[i("button",{staticClass:"btn btn-primary"},[t._v("Edit FieldType")])])}],tt={props:["fid"],data:function(){return{fieldtype:{fieldtype_name:this.$route.query.q}}},created:function(){this.fetchField(),console.log(this.fid)},methods:{fetchField:function(){var t="http://risk-backend.herokuapp.com/api/fieldtype/"+this.fid+"/";this.axios.get(t,this.fieldtype).then(function(t){console.log(t)})},updateFieldType:function(){var t=this,e="http://risk-backend.herokuapp.com/api/fieldtype/"+this.fid+"/";this.axios.put(e,this.fieldtype).then(function(e){console.log(e),t.$router.push("/fieldtype")})}}},et=tt,it=Object(l["a"])(et,Y,Z,!1,null,null,null),nt=it.exports,st=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("h1",[t._v("Delete Field Type")]),i("form",{on:{submit:function(e){return e.preventDefault(),t.deleteFieldType(e)}}},[t._m(0),i("br"),t._m(1)])])},rt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"form-group"},[i("label",[t._v("Sure Want to delete?")])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form-group"},[i("button",{staticClass:"btn btn-danger"},[t._v("Delete Field Type")])])}],at={props:["fid"],data:function(){return{fieldtype:{}}},created:function(){this.fetchFieldType(),console.log(this.fid)},methods:{fetchFieldType:function(){var t="http://risk-backend.herokuapp.com/api/fieldtype/"+this.fid+"/";this.axios.get(t,this.fieldtype).then(function(t){console.log(t)})},deleteFieldType:function(){var t=this,e="http://risk-backend.herokuapp.com/api/fieldtype/"+this.fid+"/";this.axios.delete(e,this.fieldtype).then(function(e){console.log(e),t.$router.push("/fieldtype")})}}},ot=at,lt=Object(l["a"])(ot,st,rt,!1,null,null,null),ct=lt.exports;n["a"].use(h.a,f.a),n["a"].use(u["a"]),n["a"].config.devtools=!0;var dt=[{name:"add",path:"/add",component:w},{name:"risk",path:"/risk",component:g},{name:"edit",path:"/edit/:riskid",component:N,props:!0},{name:"delete",path:"/delete/:riskid",component:M,props:!0},{name:"addfield",path:"/addfield",component:B},{name:"fieldtype",path:"/fieldtype",component:X},{name:"editfield",path:"/editfield/:fid",component:nt,props:!0},{name:"deletefield",path:"/deletefield/:fid",component:ct,props:!0}],ut=new u["a"]({mode:"history",routes:dt});n["a"].config.productionTip=!1,n["a"].component("modal",{template:"#modal-template",props:["myData"]}),new n["a"]({render:function(t){return t(d)},router:ut,currentRisk:{}}).$mount("#app")},"64a9":function(t,e,i){}});
//# sourceMappingURL=app.d1542088.js.map