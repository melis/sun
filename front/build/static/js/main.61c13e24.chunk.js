(this.webpackJsonpsun=this.webpackJsonpsun||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),s=n(13),o=n.n(s),l=(n(19),n(20),n(3)),i=n(14),r=n.n(i),d=n(0),b=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),o=Object(l.a)(s,2),i=o[0],b=o[1],m=Object(c.useState)(""),u=Object(l.a)(m,2),j=u[0],p=u[1],x=Object(c.useState)(""),h=Object(l.a)(x,2),g=h[0],O=h[1];return Object(d.jsx)("div",{className:"w-full max-w-xs",children:Object(d.jsxs)("form",{className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",onSubmit:function(e){e.preventDefault(),a(!0),r.a.post("/api/pokemons",{name:i,description:j,image:g}).then((function(e){a(!1),console.log(e.data)})).catch((function(e){console.log(e),a(!1)}))},children:[Object(d.jsxs)("div",{className:"mb-4",children:[Object(d.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"name",children:"Pokemon name"}),Object(d.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"name",type:"text",placeholder:"Name",value:i,onChange:function(e){b(e.currentTarget.value)}})]}),Object(d.jsxs)("div",{className:"mb-6",children:[Object(d.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"desc",children:"Pokemon description"}),Object(d.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3",id:"desc",type:"text",placeholder:"Pokemon desc",value:j,onChange:function(e){p(e.currentTarget.value)}})]}),Object(d.jsxs)("div",{className:"mb-6",children:[Object(d.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"url",children:"Pokemon image URL"}),Object(d.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",id:"url",type:"text",placeholder:"image Url",value:g,onChange:function(e){O(e.currentTarget.value)}})]}),Object(d.jsx)("div",{className:"flex items-center justify-between",children:Object(d.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded button",disabled:n,type:"submit",children:"Add pokemon"})})]})})};var m=function(){return Object(d.jsxs)("div",{className:"App container",children:[Object(d.jsxs)("div",{className:"bg-white rounded shadow border p-6 w-64",children:[Object(d.jsx)("img",{alt:"",src:"https://i.pinimg.com/originals/f5/1d/08/f51d08be05919290355ac004cdd5c2d6.png"}),Object(d.jsx)("h5",{className:"text-3xl font-bold mb-4 mt-0",children:"Pokemon name"}),Object(d.jsx)("p",{className:"text-gray-700 text-sm",children:"Pokemon description"}),Object(d.jsx)("button",{children:Object(d.jsx)("img",{alt:"",src:"https://image.flaticon.com/icons/png/512/263/263417.png",width:"30px"})}),Object(d.jsx)("button",{children:Object(d.jsx)("img",{alt:"",src:"https://image.flaticon.com/icons/png/512/3221/3221897.png",width:"30px"})})]}),Object(d.jsx)(b,{})]})};o.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.61c13e24.chunk.js.map