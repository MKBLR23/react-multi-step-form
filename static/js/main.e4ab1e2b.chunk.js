(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},102:function(e,t,a){},240:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),i=a.n(l),c=(a(100),a(12)),o=a(13),u=a(15),s=a(14),m=a(16),p=(a(102),a(94)),h=a(22),b=a.n(h),f=a(23),E=a.n(f),y=a(25),v=a.n(y),g=a(24),d=a.n(g),x=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),a.props.nextStep()},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.handleChange;return r.a.createElement(b.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{title:"Enter User Details"}),r.a.createElement(v.a,{hintText:"Enter your first name",floatingLabelText:"First name",onChange:a("firstName"),defaultValue:t.firstName}),r.a.createElement("br",null),r.a.createElement(v.a,{hintText:"Enter your last name",floatingLabelText:"Last name",onChange:a("lastName"),defaultValue:t.lastName}),r.a.createElement("br",null),r.a.createElement(v.a,{hintText:"Enter your Email",floatingLabelText:"Email",onChange:a("email"),defaultValue:t.email}),r.a.createElement("br",null),r.a.createElement(d.a,{label:"Continue",primary:!0,style:O.button,onClick:this.continue})))}}]),t}(n.Component),O={margin:15},j=x,C=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),a.props.nextStep()},a.back=function(e){e.preventDefault(),a.props.previousStep()},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.handleChange;return r.a.createElement(b.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{title:"Enter Personal Details"}),r.a.createElement(v.a,{hintText:"Enter Occupation",floatingLabelText:"Occupation",onChange:a("occupation"),defaultValue:t.occupation}),r.a.createElement("br",null),r.a.createElement(v.a,{hintText:"Enter your city",floatingLabelText:"City",onChange:a("city"),defaultValue:t.city}),r.a.createElement("br",null),r.a.createElement(v.a,{hintText:"Enter your bio",floatingLabelText:"Bio",onChange:a("bio"),defaultValue:t.bio}),r.a.createElement("br",null),r.a.createElement(d.a,{label:"Continue",primary:!0,style:T.button,onClick:this.continue}),r.a.createElement(d.a,{label:"Back",primary:!1,style:T.button,onClick:this.back})))}}]),t}(n.Component),T={margin:15},k=C,S=a(26),w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),a.props.nextStep()},a.back=function(e){e.preventDefault(),a.props.previousStep()},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.values,t=e.firstName,a=e.lastName,n=e.email,l=e.occupation,i=e.city,c=e.bio;return r.a.createElement(b.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{title:"Confirm User details"}),r.a.createElement(S.List,null,r.a.createElement(S.ListItem,{primaryText:"First name",secondaryText:t}),r.a.createElement(S.ListItem,{primaryText:"Last name",secondaryText:a}),r.a.createElement(S.ListItem,{primaryText:"Email",secondaryText:n}),r.a.createElement(S.ListItem,{primaryText:"Occupation",secondaryText:l}),r.a.createElement(S.ListItem,{primaryText:"City",secondaryText:i}),r.a.createElement(S.ListItem,{primaryText:"Bio",secondaryText:c})),r.a.createElement("br",null),r.a.createElement(d.a,{label:"Continue",primary:!0,style:L.button,onClick:this.continue}),r.a.createElement(d.a,{label:"Back",primary:!1,style:L.button,onClick:this.back})))}}]),t}(n.Component),L={margin:15},N=w,D=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),a.props.nextStep()},a.back=function(e){e.preventDefault(),a.props.previousStep()},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{title:"Success"}),r.a.createElement("h1",null,"Thank you for your submission"),r.a.createElement("p",null,"You will get an email with farther instruction")))}}]),t}(n.Component),I=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={step:1,firstName:"",lastName:"",email:"",occupation:"",city:"",bio:""},a.nextStep=function(){var e=a.state.step;a.setState({step:e+1})},a.previousStep=function(){var e=a.state.step;a.setState({step:e-1})},a.handleChange=function(e){return function(t){a.setState(Object(p.a)({},e,t.target.value))}},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.step,t=this.state,a={firstName:t.firstName,lastName:t.lastName,email:t.email,occupation:t.occupation,city:t.city,bio:t.bio};switch(e){case 1:return r.a.createElement(j,{nextStep:this.nextStep,handleChange:this.handleChange,values:a});case 2:return r.a.createElement(k,{nextStep:this.nextStep,previousStep:this.previousStep,handleChange:this.handleChange,values:a});case 3:return r.a.createElement(N,{nextStep:this.nextStep,previousStep:this.previousStep,values:a});case 4:return r.a.createElement(D,null)}}}]),t}(n.Component),A=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(I,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},95:function(e,t,a){e.exports=a(240)}},[[95,2,1]]]);
//# sourceMappingURL=main.e4ab1e2b.chunk.js.map