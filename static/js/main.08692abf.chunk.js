(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],{25:function(t,e,n){},26:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(5),s=n.n(c),u=(n(25),n(26),n(1)),o=function(t){var e=t.count,n=t.isError,a=e===t.max||n;return Object(u.jsx)("h1",{className:"count ".concat(a?"active":""),children:n?"Incorrect number":e})},i=n(44),l=function(t){var e=t.count,n=t.increment,a=t.decrement,r=t.reset,c=t.start,s=t.max;return Object(u.jsxs)("div",{className:"app-wrapper",children:[Object(u.jsx)(i.a,{variant:"contained",size:"large",style:{margin:"5px"},color:"primary",disabled:e===s,onClick:n,children:"Inc"}),Object(u.jsx)(i.a,{variant:"contained",size:"large",style:{margin:"5px"},color:"primary",disabled:e===c,onClick:a,children:"Dec"}),Object(u.jsx)(i.a,{variant:"contained",size:"large",style:{margin:"5px",textAlign:"center"},color:"secondary",disabled:e===c,onClick:r,children:"Res"})]})},j=function(t){return Object(u.jsxs)("div",{className:"control",children:[Object(u.jsxs)("div",{className:"start",children:["StartValue: ",Object(u.jsx)("input",{className:"input",value:t.start,onChange:function(e){return t.startValue(+e.currentTarget.value)},type:"number",min:"0",max:"99"})]}),Object(u.jsxs)("div",{className:"max",children:["MaxValue: ",Object(u.jsx)("input",{className:"input",value:t.max,onChange:function(e){return t.maxValue(+e.currentTarget.value)},type:"number",min:"0",max:"99"})]}),Object(u.jsx)(i.a,{className:"set",variant:"contained",size:"large",onClick:t.setValue,color:"default",children:"Set"})]})},m=n(9),b=n(2),x={count:0,start:0,max:0,isError:null},O=function(t){return{type:"START-VALUE",value:t}},d=function(t){return{type:"SET-ERROR",isError:t}};var E=function(){var t=Object(m.c)((function(t){return t.count})),e=Object(m.b)();return Object(u.jsxs)("div",{children:[Object(u.jsx)(o,{count:t.count,isError:t.isError,max:t.max}),Object(u.jsx)(l,{count:t.count,increment:function(){e({type:"INCREMENT"})},decrement:function(){e({type:"DECREMENT"})},reset:function(){e({type:"RESET"})},start:t.start,max:t.max}),Object(u.jsx)(j,{count:t.count,start:t.start,max:t.max,setValue:function(){e(d(null)),t.start<t.max?e(O(t.start)):e(d(!0))},startValue:function(t){e(O(t))},maxValue:function(t){e(function(t){return{type:"MAX-VALUE",value:t}}(t))}})]})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),a(t),r(t),c(t),s(t)}))},p=n(14),v=Object(p.a)({count:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"INCREMENT":return t.count<t.max?Object(b.a)(Object(b.a)({},t),{},{count:t.count+1}):t;case"DECREMENT":return t.count>t.start?Object(b.a)(Object(b.a)({},t),{},{count:t.count-1}):t;case"RESET":return Object(b.a)(Object(b.a)({},t),{},{count:t.start});case"START-VALUE":return Object(b.a)(Object(b.a)({},t),{},{start:e.value,count:e.value});case"MAX-VALUE":return Object(b.a)(Object(b.a)({},t),{},{max:e.value});case"SET-ERROR":return Object(b.a)(Object(b.a)({},t),{},{isError:e.isError});default:return t}}}),f=localStorage.getItem("startValue"),h=localStorage.getItem("maxValue"),S={};f&&h&&(S={count:{start:JSON.parse(f),max:JSON.parse(h),count:JSON.parse(f),isError:null}});var N=Object(p.b)(v,S);N.subscribe((function(){localStorage.setItem("startValue",JSON.stringify(N.getState().count.start)),localStorage.setItem("maxValue",JSON.stringify(N.getState().count.max))}));var y=N;s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(m.a,{store:y,children:Object(u.jsx)(E,{})})}),document.getElementById("root")),g()}},[[31,1,2]]]);
//# sourceMappingURL=main.08692abf.chunk.js.map