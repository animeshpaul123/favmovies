(this.webpackJsonpfavmovies=this.webpackJsonpfavmovies||[]).push([[0],{144:function(e,a,t){e.exports=t(312)},149:function(e,a,t){},151:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},152:function(e,a,t){},311:function(e,a,t){},312:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(26),s=t.n(r),o=(t(149),t(150),t(18)),i=t(19),l=t(84),m=(t(151),t(152),t(29)),u=t(316),v=t(315),f=t(31),d=t(317),p=(t(89),t(40));var E=function(e){var a=e.Title,t=e.Year,n=e.Poster,r=e.markFav,s=e.isFav,o=e.imdbID,i=e.Type,l=e.data,u=e.hideButton;return console.log(s),c.a.createElement("div",{className:"card"},c.a.createElement(m.b,{to:"/".concat(i,"/").concat(o)},c.a.createElement("div",{className:"img-wrapper"},c.a.createElement("img",{src:n,alt:a}))),c.a.createElement("div",{className:"content"},c.a.createElement("p",{className:"title"},a),c.a.createElement("p",{className:"release-date"},t),u?null:c.a.createElement(p.a,{color:s?"red":"blue",onClick:function(){return r(l,!s)}},s?"Unfavourite":"Favourite")))},g=t(54),b=t.n(g);var h=function(e){var a=JSON.parse(window.localStorage.getItem("favs")),t=Object(n.useState)("war"),r=Object(o.a)(t,2),s=r[0],p=r[1],g=Object(n.useState)(null),h=Object(o.a)(g,2),w=h[0],O=h[1],N=Object(n.useState)(!1),S=Object(o.a)(N,2),j=S[0],y=S[1],I=Object(n.useState)("Movie"),k=Object(o.a)(I,2),D=k[0],F=k[1],J=function(){y(!0),b.a.get("https://www.omdbapi.com/?s=".concat(s,"&type=").concat(D.toLowerCase(),"&apikey=44a4d11c&page=1")).then((function(e){var t=e.data;if("True"==t.Response){if(console.log("data => ",t),a&&Array.isArray(a)&&a.length){var n=function(e,a){var t,n={},c=Object(l.a)(a);try{for(c.s();!(t=c.n()).done;){var r=t.value;r.isFav&&(n[r.imdbID]=!0)}}catch(v){c.e(v)}finally{c.f()}var s,o=[],m=Object(l.a)(e);try{for(m.s();!(s=m.n()).done;){var u=s.value;u.imdbID in n?o.push(Object(i.a)(Object(i.a)({},u),{},{isFav:!0})):o.push(Object(i.a)(Object(i.a)({},u),{},{isFav:!1}))}}catch(v){m.e(v)}finally{m.f()}return o}(t.Search,a);O(n)}else O(t.Search.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{isFav:!1})})));y(!1)}else u.a.warning(t.Error),y(!1),O(null)})).catch((function(e){u.a.warning(e)}))};Object(n.useEffect)((function(){return s.length&&J(),function(){}}),[s]),Object(n.useEffect)((function(){return console.log("got",w),function(){}}),[w]);var x=function(e,a){console.log("sssssssssssssss",e);var t=w.map((function(t){return Object(i.a)(Object(i.a)({},t),{},{isFav:e.imdbID===t.imdbID?a:t.isFav})}));console.log("sssssssssssssss",t,e),O(t),function(e,a,t){var n=JSON.parse(window.localStorage.getItem("favs"))||[];if(!t)return window.localStorage.setItem("favs",JSON.stringify(n.filter((function(e){return e.imdbID!==a.imdbID}))));a.isFav=!0,n.push(a),window.localStorage.setItem("favs",JSON.stringify(n))}(0,e,a)};return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"logo"},"Movie Mania"),c.a.createElement("div",{className:"favourites"},c.a.createElement(m.b,{to:"/favs"},"Favourites"))),c.a.createElement("div",{className:"main"},c.a.createElement("div",{className:"search-wrapper"},c.a.createElement("div",{className:"search-inner"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},c.a.createElement("input",{type:"text",placeholder:"search for a movie",className:"default-input",value:s,onChange:function(e){p(e.target.value)}}),c.a.createElement(v.a,{title:D,activeKey:D,onSelect:function(e,a){return F(e)}},c.a.createElement(v.a.Item,{eventKey:"Movie"},"Movies"),c.a.createElement(v.a.Item,{eventKey:"Series"},"Series")),c.a.createElement("span",{className:"search-icon",onClick:J},c.a.createElement(f.a,{icon:"search"}))))),j||w?!j&&w&&w.length?c.a.createElement("div",{className:"main-content"},w.map((function(e){return c.a.createElement(E,Object.assign({key:e.imdbID},e,{markFav:x,data:e}))}))):j||!w||w.length?c.a.createElement("div",{className:"loading-wrapper"},c.a.createElement(d.a,{content:"loading..."})):c.a.createElement("div",{className:"main-content"},'No results found for "',s,'"'):c.a.createElement("div",{className:"loading-wrapper"},c.a.createElement("p",null,"Search for a movie"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=t(6);t(311);var O=function(e){console.log("sasdasdasdasdasdas",e);var a=Object(n.useState)(null),t=Object(o.a)(a,2),r=t[0],s=t[1];Object(n.useEffect)((function(){return b.a.get("https://www.omdbapi.com/?i=".concat(e.match.params.id,"&&apikey=44a4d11c")).then((function(e){var a=e.data;s(a)})),function(){}}),[]);var i=r||{},l=i.Title,m=(i.Year,i.Rated,i.Released),u=i.Genre,v=i.Writer,d=i.Actors,p=(i.Plot,i.Poster);return p?c.a.createElement("div",{className:"movie-detail"},c.a.createElement("div",{className:"movie-detail-inner"},c.a.createElement("span",{onClick:function(){return e.history.goBack()},style:{cursor:"pointer"}},c.a.createElement(f.a,{icon:"back-arrow",size:"2x"})),c.a.createElement("img",{src:p,alt:""}),c.a.createElement("p",null,u),c.a.createElement("p",null,m),c.a.createElement("p",null,l),c.a.createElement("p",null,v),c.a.createElement("p",null,d))):null};var N=function(e){var a=JSON.parse(window.localStorage.getItem("favs")),t=Object(n.useState)(a),r=Object(o.a)(t,2),s=r[0],i=r[1],l=function(e,a){var t=s.filter((function(a){return a.imdbID!==e.imdbID}));console.log("sssssssssssssss",t,e),i(t),function(e,a,t){var n=JSON.parse(window.localStorage.getItem("favs"))||[];if(!t)return window.localStorage.setItem("favs",JSON.stringify(n.filter((function(e){return e.imdbID!==a.imdbID}))));a.isFav=!0,n.push(a),window.localStorage.setItem("favs",JSON.stringify(n))}(0,e,a)};return c.a.createElement("div",{className:"favs-wrapper"},c.a.createElement("div",{className:"favs-inner"},c.a.createElement("span",{onClick:function(){return e.history.goBack()}},c.a.createElement(f.a,{icon:"back-arrow",size:"2x"})),c.a.createElement("div",{className:"main-content"},s&&s.length?s.map((function(e){return c.a.createElement(E,Object.assign({key:e.imdbID},e,{data:e,markFav:l}))})):c.a.createElement("p",{className:"no-movies"}," No movies in your favourite list"))))},S=c.a.createElement(w.c,null,c.a.createElement(w.a,{path:"/:type/:id",component:O}),c.a.createElement(w.a,{path:"/favs",component:N}),c.a.createElement(w.a,{exact:!0,path:"/",component:h}));s.a.render(c.a.createElement(m.a,{basename:window.location.pathname||""},S),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},89:function(e,a,t){}},[[144,1,2]]]);
//# sourceMappingURL=main.1a300f92.chunk.js.map