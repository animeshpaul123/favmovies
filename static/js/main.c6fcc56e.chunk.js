(this.webpackJsonpfavmovies=this.webpackJsonpfavmovies||[]).push([[0],{146:function(e,a,t){e.exports=t(314)},151:function(e,a,t){},153:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},154:function(e,a,t){},313:function(e,a,t){},314:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(26),r=t.n(s),o=(t(151),t(152),t(89)),i=t(13),l=t(9),m=t(85),u=(t(153),t(154),t(31)),d=t(318),p=t(317),v=t(33),f=t(319),E=(t(91),t(43));var b,g=function(e){var a=e.Title,t=e.Year,n=e.Poster,s=e.markFav,r=e.isFav,o=e.imdbID,i=e.Released,l=e.Type,m=e.data,d=e.hideButton;return console.log(r),c.a.createElement("div",{className:"card"},c.a.createElement(u.b,{to:"/".concat(void 0==l?"series":l,"/").concat(o)},c.a.createElement("div",{className:"img-wrapper"},n?c.a.createElement("img",{src:n,alt:a}):c.a.createElement("p",null,"Image not available"))),c.a.createElement("div",{className:"content"},c.a.createElement("p",{className:"title"},a),c.a.createElement("p",{className:"release-date"},i||t),d?null:c.a.createElement(E.a,{color:r?"red":"blue",onClick:function(){return s(m,!r)}},r?"Unfavourite":"Favourite")))},h=t(27),w=t.n(h),O=w.a.CancelToken,y=function(e,a){var t,n={},c=Object(m.a)(a);try{for(c.s();!(t=c.n()).done;){var s=t.value;s.isFav&&(n[s.imdbID]=!0)}}catch(d){c.e(d)}finally{c.f()}var r,o=[],i=Object(m.a)(e);try{for(i.s();!(r=i.n()).done;){var u=r.value;u.imdbID in n?o.push(Object(l.a)(Object(l.a)({},u),{},{isFav:!0})):o.push(Object(l.a)(Object(l.a)({},u),{},{isFav:!1}))}}catch(d){i.e(d)}finally{i.f()}return o};var S=function(e){var a=JSON.parse(window.localStorage.getItem("favs")),t=Object(n.useState)("war"),s=Object(i.a)(t,2),r=s[0],m=s[1],E=Object(n.useState)(1),h=Object(i.a)(E,2),S=h[0],j=h[1],N=Object(n.useState)(1),I=Object(i.a)(N,2),k=I[0],F=I[1],D=Object(n.useState)(null),x=Object(i.a)(D,2),T=x[0],A=x[1],C=Object(n.useState)(!1),J=Object(i.a)(C,2),R=J[0],K=J[1],B=Object(n.useState)("All"),M=Object(i.a)(B,2),P=M[0],W=M[1],z=Object(n.useRef)(),Y=function(){console.log("sss => ",S);var e="https://www.omdbapi.com/?s=".concat(r,"&type=").concat(P.toLowerCase(),"&apikey=44a4d11c&page=1");"Season"===P&&(e="https://www.omdbapi.com/?t=".concat(r,"&type=series&Season=").concat(S,"&apikey=44a4d11c&page=1")),"Episode"===P&&(e="https://www.omdbapi.com/?t=".concat(r,"&type=series&Episode=").concat(k,"&apikey=44a4d11c&page=1")),void 0!==b&&b(),K(!0),"All"===P?Promise.all([w.a.get("https://www.omdbapi.com/?s=".concat(r,"&Type=movie&apikey=44a4d11c&page=1")),w.a.get("https://www.omdbapi.com/?s=".concat(r,"&Type=series&apikey=44a4d11c&page=1"))]).then((function(e){var t=Object(i.a)(e,2),n=t[0],c=t[1];console.log("data => ",n);var s=n.data,r=c.data;if("True"==s.Response&&"True"==r.Response){var m=s.Search||s.Episodes||[s],u=r.Search||r.Episodes||[r],d=[].concat(Object(o.a)(m),Object(o.a)(u));if(a&&Array.isArray(a)&&a.length){var p=y(d,a);A(p)}else A(d.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{isFav:!1})})));K(!1)}})):w.a.get(e,{cancelToken:new O((function(e){b=e}))}).then((function(e){var t=e.data;if("True"==t.Response){if(console.log("data => ",t),a&&Array.isArray(a)&&a.length){var n=y(t.Search||t.Episodes||[t],a);A(n)}else A(t.Search?t.Search.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{isFav:!1})})):t.Episodes?t.Episodes.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{isFav:!1})})):[t].map((function(e){return Object(l.a)(Object(l.a)({},e),{},{isFav:!1})})));K(!1)}else d.a.error('No results found for "'.concat(r,'"')),K(!1),A(null)})).catch((function(e){}))},G=function(e,a){var t;return function(){for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];clearTimeout(t),t=setTimeout((function(){e.apply(void 0,c)}),a),console.log("running!!!!!!!!!!!!!!",t)}}(Y,500);Object(n.useEffect)((function(){return r.length&&G(),function(){}}),[r]),Object(n.useEffect)((function(){return console.log("got",T),function(){}}),[T]),Object(n.useEffect)((function(){return"Episode"!==P&&"Season"!==P||z&&z.current&&z.current.focus(),function(){}}),[P]);var L=function(e,a){console.log("sssssssssssssss",e);var t=T.map((function(t){return Object(l.a)(Object(l.a)({},t),{},{isFav:e.imdbID===t.imdbID?a:t.isFav})}));console.log("sssssssssssssss",t,e),A(t),function(e,a,t){var n=JSON.parse(window.localStorage.getItem("favs"))||[];if(!t)return window.localStorage.setItem("favs",JSON.stringify(n.filter((function(e){return e.imdbID!==a.imdbID}))));a.isFav=!0,n.push(a),window.localStorage.setItem("favs",JSON.stringify(n))}(0,e,a)},U=null;return"Season"===P&&(U=c.a.createElement("div",{className:"others"},c.a.createElement("span",null,"Season"),c.a.createElement("input",{ref:z,style:{borderRadius:0,width:"50px"},type:"text",name:"season",placeholder:"Seasons ex: 1",className:"default-input",value:S,onChange:function(e){return j(e.target.value)}}))),"Episode"===P&&(U=c.a.createElement("div",{className:"others"},c.a.createElement("span",null,"Season"),c.a.createElement("input",{ref:z,style:{borderRadius:0,width:"50px"},type:"text",name:"season",className:"default-input",value:S,onChange:function(e){return j(e.target.value)}}),c.a.createElement("span",null,"Episode"),c.a.createElement("input",{style:{borderRadius:0,width:"50px"},type:"text",name:"season",className:"default-input",value:k,onChange:function(e){return F(e.target.value)}}))),c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"logo"},"Movie Mania"),c.a.createElement("div",{className:"favourites"},c.a.createElement(u.b,{to:"/favs"},"Favourites"))),c.a.createElement("div",{className:"main"},c.a.createElement("div",{className:"search-wrapper"},c.a.createElement("div",{className:"search-inner"},c.a.createElement("form",{onSubmit:function(e){console.log("sss => ",S),e.preventDefault()}},c.a.createElement("input",{type:"text",name:"search",placeholder:"search for a movie",className:"default-input",value:r,onChange:function(e){return m(e.target.value)}}),c.a.createElement(p.a,{title:P,activeKey:P,onSelect:function(e,a){return W(e)},placement:"bottomEnd"},c.a.createElement(p.a.Item,{eventKey:"All"},"All"),c.a.createElement(p.a.Item,{eventKey:"Movie"},"Movies"),c.a.createElement(p.a.Item,{eventKey:"Series"},"Series"),c.a.createElement(p.a.Item,{eventKey:"Season"},"Season"),c.a.createElement(p.a.Item,{eventKey:"Episode"},"Episode")),U,c.a.createElement("span",{className:"search-icon",onClick:Y},c.a.createElement(v.a,{icon:"search"}))))),R||T?!R&&T&&T.length?c.a.createElement("div",{className:"main-content"},T.map((function(e){return c.a.createElement(g,Object.assign({key:e.imdbID},e,{markFav:L,data:e}))}))):R||!T||T.length?c.a.createElement("div",{className:"loading-wrapper"},c.a.createElement(f.a,{content:"loading..."})):c.a.createElement("div",{className:"main-content"},'No results found for "',r,'"'):c.a.createElement("div",{className:"loading-wrapper"},c.a.createElement("p",null,"Search for a ",P))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=t(6);t(313);var N=function(e){console.log("sasdasdasdasdasdas",e);var a=Object(n.useState)(null),t=Object(i.a)(a,2),s=t[0],r=t[1];Object(n.useEffect)((function(){return w.a.get("https://www.omdbapi.com/?i=".concat(e.match.params.id,"&&apikey=44a4d11c")).then((function(e){var a=e.data;r(a)})),function(){}}),[]);var o=s||{},l=o.Title,m=(o.Year,o.Rated,o.Released),u=o.Genre,d=o.Writer,p=o.Actors,E=(o.Plot,o.Poster);return E?c.a.createElement("div",{className:"movie-detail"},c.a.createElement("div",{className:"movie-detail-inner"},c.a.createElement("span",{onClick:function(){return e.history.goBack()},style:{cursor:"pointer"}},c.a.createElement(v.a,{icon:"back-arrow",size:"2x"})),c.a.createElement("img",{src:E,alt:""}),c.a.createElement("p",null,l),c.a.createElement("p",null,m),c.a.createElement("p",null,u),c.a.createElement("p",null,d),c.a.createElement("p",null,p))):c.a.createElement("div",{className:"loader-wrapper"},c.a.createElement(f.a,{content:"loading..."}))};var I=function(e){var a=JSON.parse(window.localStorage.getItem("favs")),t=Object(n.useState)(a),s=Object(i.a)(t,2),r=s[0],o=s[1],l=function(e,a){var t=r.filter((function(a){return a.imdbID!==e.imdbID}));console.log("sssssssssssssss",t,e),o(t),function(e,a,t){var n=JSON.parse(window.localStorage.getItem("favs"))||[];if(!t)return window.localStorage.setItem("favs",JSON.stringify(n.filter((function(e){return e.imdbID!==a.imdbID}))));a.isFav=!0,n.push(a),window.localStorage.setItem("favs",JSON.stringify(n))}(0,e,a)};return c.a.createElement("div",{className:"favs-wrapper"},c.a.createElement("div",{className:"favs-inner"},c.a.createElement("span",{onClick:function(){return e.history.goBack()}},c.a.createElement(v.a,{icon:"back-arrow",size:"2x"})),c.a.createElement("div",{className:"main-content"},r&&r.length?r.map((function(e){return c.a.createElement(g,Object.assign({key:e.imdbID},e,{data:e,markFav:l}))})):c.a.createElement("p",{className:"no-movies"}," No movies in your favourite list"))))},k=c.a.createElement(j.c,null,c.a.createElement(j.a,{path:"/:type/:id",component:N}),c.a.createElement(j.a,{path:"/favs",component:I}),c.a.createElement(j.a,{exact:!0,path:"/",component:S}));r.a.render(c.a.createElement(u.a,{basename:window.location.pathname||""},k),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},91:function(e,a,t){}},[[146,1,2]]]);
//# sourceMappingURL=main.c6fcc56e.chunk.js.map