(function(t){function e(e){for(var a,o,s=e[0],l=e[1],c=e[2],u=0,p=[];u<s.length;u++)o=s[u],i[o]&&p.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);h&&h(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var s=n[o];0!==i[s]&&(a=!1)}a&&(r.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},o={app:0},i={app:0},r=[];function s(t){return l.p+"js/"+({about:"about",application:"application",author:"author"}[t]||t)+"-legacy."+{about:"4d4ca9a4",application:"4cd5484a",author:"d6a400ab"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={about:1,application:1,author:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise(function(e,n){for(var a="css/"+({about:"about",application:"application",author:"author"}[t]||t)+"."+{about:"dca5e9fd",application:"5da6d889",author:"6381ac42"}[t]+".css",i=l.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var c=r[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===i))return e()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){c=p[s],u=c.getAttribute("data-href");if(u===a||u===i)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var a=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.request=a,delete o[t],h.parentNode.removeChild(h),n(r)},h.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(h)}).then(function(){o[t]=0}));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise(function(e,n){a=i[t]=[e,n]});e.push(a[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t),c=function(e){u.onerror=u.onload=null,clearTimeout(p);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+a+": "+o+")");r.type=a,r.request=o,n[1](r)}i[t]=void 0}};var p=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var h=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1d54":function(t,e,n){"use strict";var a=n("b4c0"),o=n.n(a);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-2 shadow"},[n("router-link",{staticClass:"navbar-brand col-sm-2 col-md-1 mr-0",attrs:{to:"/"}},[n("logo"),t._v(" Shapes\n    ")],1),n("ul",{staticClass:"navbar-nav mr-auto flex-row"},[n("router-link",{staticClass:"nav-item mr-4",attrs:{tag:"li",to:"/canvas"}},[n("a",{staticClass:"nav-link"},[t._v("Canvas")])]),n("router-link",{staticClass:"nav-item mr-4",attrs:{tag:"li",to:"/about"}},[n("a",{staticClass:"nav-link"},[t._v("About")])])],1)],1),n("div",{staticClass:"container-fluid p-t-2"},[n("router-view")],1)])},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"logo"},[n("polygon",{attrs:{points:"0,0 30,0 30,30 0,30",fill:"#42b983"}})])},s=[],l=n("2877"),c={},u=Object(l["a"])(c,r,s,!1,null,null,null);u.options.__file="Logo.vue";var p=u.exports,h={components:{Logo:p}},f=h,d=(n("5c0b"),Object(l["a"])(f,o,i,!1,null,null,null));d.options.__file="App.vue";var v=d.exports,m=n("8c4f"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("nav",{staticClass:"col-md-3 d-none d-md-block bg-light sidebar px-4"},[n("div",{staticClass:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"},[n("h1",{staticClass:"h2"},[t._v("Info")]),n("div",{staticClass:"btn-toolbar mb-2 mb-md-0"},[n("button",{staticClass:"btn btn-info",on:{click:function(e){t.reset()}}},[t._v("Reset")])])]),n("div",[n("h3",[t._v("Parallelogram")]),null===t.parallelogram?n("p",[t._v("\n        No paralellogram\n      ")]):n("ul",[t.points.length>0?n("li",[t._v("Points\n          "),n("ul",[t._l(t.points,function(e,a){return n("li",{key:a},[t._v("("+t._s(e.x)+", "+t._s(e.y)+")")])}),t.parallelogram?n("li",[t._v("("+t._s(t.pointD.x)+", "+t._s(t.pointD.y)+")")]):t._e()],2)]):t._e(),t.parallelogram?[n("li",[t._v("Center of Mass: ("+t._s(t.centerOfMass.x)+", "+t._s(t.centerOfMass.y)+")")]),n("li",[t._v("Area: "+t._s(t.parallelogram.getArea())+" px"),n("sup",[t._v("2")])])]:t._e()],2),n("h3",[t._v("Circle")]),null===t.circle?n("p",[t._v("\n        No circle\n      ")]):n("ul",[n("li",[t._v("Center of Mass: ("+t._s(t.circle.center.x)+", "+t._s(t.circle.center.x)+")")]),n("li",[t._v("Area: "+t._s(t.circle.area)+" px"),n("sup",[t._v("2")])]),n("li",[t._v("Radius: "+t._s(t.circle.getRadius())+" px")])])])]),n("main",{staticClass:"col-md-9 ml-sm-auto col-lg-9 px-4",attrs:{role:"main"}},[t._m(0),n("div",{staticClass:"home"},[n("svg",{ref:"canvas",staticClass:"canvas"},[3===t.points.length?n("parallelogram-shape",{attrs:{parallelogram:t.parallelogram}}):t._e(),3===t.points.length?n("circle-shape",{attrs:{center:t.circle.center,radius:t.circle.getRadius(),color:"#FFD438"}}):t._e(),n("point-shape",{attrs:{point:t.mouse,color:"#FF0000"}}),t._l(t.points,function(t,e){return n("point-shape",{key:e,attrs:{draggable:"",point:t,color:"#FF0000"}})})],2)])])])},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"},[n("h1",{staticClass:"h2"},[t._v("Canvas")]),n("div",{staticClass:"btn-toolbar mb-2 mb-md-0"},[n("div",{staticClass:"btn-group mr-2"})])])}],y=(n("7514"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("g",[n("position-label",{attrs:{position:t.parallelogram.CM}}),n("polygon",{attrs:{points:t.polygonPoints,fill:"none",stroke:"blue"}})],1)}),_=[],x={name:"Parallelogram",components:{},props:{parallelogram:Object},computed:{polygonPoints:function(){return this.parallelogram.points.map(function(t){return"".concat(t.x,",").concat(t.y)}).join(" ")}}},C=x,P=(n("ff4f"),Object(l["a"])(C,y,_,!1,null,"4e907d42",null));P.options.__file="ParallelogramShape.vue";var w=P.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("g",[n("circle",{attrs:{cx:t.center.x,cy:t.center.y,r:t.radius,fill:"none",stroke:t.color}})])},O=[],j=(n("c5f6"),{name:"CircleShape",props:{center:Object,radius:Number,color:String}}),M=j,E=(n("a29b"),Object(l["a"])(M,k,O,!1,null,null,null));E.options.__file="CircleShape.vue";var A=E.exports,S=n("d225"),B=n("b0b4");function L(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function D(t,e){return{x:e.x-t.x,y:e.y-t.y}}var N={distance:L,delta:D},$=function(){function t(e,n,a){Object(S["a"])(this,t),this.pointA=e,this.pointB=n,this.pointC=a}return Object(B["a"])(t,[{key:"getArea",value:function(){return Math.abs(this.pointA.x*this.pointB.y+this.pointA.y*this.pointC.x+this.pointB.x*this.pointC.y-this.pointC.x*this.pointB.y-this.pointC.y*this.pointA.x-this.pointB.x*this.pointA.y)}},{key:"getPointD",value:function(){var t=N.delta(this.pointB,this.pointA),e=N.delta(this.pointB,this.pointC);return{x:this.pointB.x+t.x+e.x,y:this.pointB.y+t.y+e.y}}},{key:"getCenterOfMass",value:function(){var t=N.delta(this.pointB,this.pointA),e=N.delta(this.pointB,this.pointC);return{x:this.pointB.x+(t.x+e.x)/2,y:this.pointB.y+(t.y+e.y)/2}}},{key:"points",get:function(){return[this.pointA,this.pointB,this.pointC,this.getPointD()]}}]),t}(),F=$,T=function(){function t(e,n){Object(S["a"])(this,t),this.center=e,this.area=n}return Object(B["a"])(t,[{key:"setCenter",value:function(t){this.center.x=t.x,this.center.y=t.y}},{key:"setArea",value:function(t){this.area=t}},{key:"getRadius",value:function(){return Math.sqrt(this.area/Math.PI)}}]),t}(),R=T,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("g",[n("circle",{class:{draggable:t.draggable},attrs:{cx:t.point.x,cy:t.point.y,r:t.radius,stroke:t.color,fill:"transparent"}}),n("position-label",{attrs:{position:t.point}})],1)},I=[],J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("g",[n("text",{attrs:{x:t.position.x+t.translate.x,y:t.position.y+t.translate.y,fill:"black"}},[t._v("\n    ("+t._s(t.position.x)+", "+t._s(t.position.y)+")\n  ")])])},X=[],Y={name:"PositionLabel",props:{position:Object,translate:{type:Object,default:function(){return{x:10,y:-10}}}}},z=Y,G=(n("d947"),Object(l["a"])(z,J,X,!1,null,null,null));G.options.__file="PositionLabel.vue";var H=G.exports,K={name:"Point",components:{PositionLabel:H},props:{draggable:{type:Boolean,default:!1},color:String,point:Object,radius:{type:String,default:"5.5px"}}},Q=K,U=(n("8a5e"),Object(l["a"])(Q,q,I,!1,null,"f9b5390e",null));U.options.__file="PointShape.vue";var V=U.exports,W={name:"Canvas",components:{ParallelogramShape:w,CircleShape:A,PointShape:V},data:function(){return{mouse:{x:0,y:0},points:[],parallelogram:null,circle:null,selectedPoint:null}},computed:{pointD:function(){return this.parallelogram.getPointD()},centerOfMass:function(){return this.parallelogram.getCenterOfMass()},area:function(){return this.parallelogram.getArea()}},methods:{getMousePos:function(t,e){var n=t.getBoundingClientRect();return{x:e.clientX-n.left,y:e.clientY-n.top}},reset:function(){this.points=[],this.parallelogram=null,this.circle=null},updateShapes:function(){this.circle.setCenter(this.centerOfMass),this.circle.setArea(this.area)},createShapes:function(){this.parallelogram=new F(this.points[0],this.points[1],this.points[2]),this.circle=new R(this.centerOfMass,this.area)},addParallelogramPoint:function(t){this.points.length<3&&this.points.push(t),3===this.points.length&&this.createShapes()},click:function(t){var e=this.getMousePos(this.canvas,t),n=this.points.find(function(t){return N.distance(t,e)<=5.5});n||this.addParallelogramPoint(e)},startDrag:function(t){var e=this.getMousePos(this.canvas,t),n=this.points.find(function(t){return N.distance(t,e)<=5.5});n&&(this.selectedPoint=n,this.canvas.addEventListener("mousemove",this.drag,!1))},drag:function(t){if(this.selectedPoint){var e=this.getMousePos(this.canvas,t);this.selectedPoint.x=e.x,this.selectedPoint.y=e.y,this.updateShapes()}},endDrag:function(){this.selectedPoint&&(this.selectedPoint.x=this.mouse.x,this.selectedPoint.y=this.mouse.y,this.selectedPoint=null,this.canvas.removeEventListener("mousemove",this.drag,!1))},mouseMove:function(t){this.mouse=this.getMousePos(this.canvas,t)}},mounted:function(){this.canvas=this.$refs.canvas,this.canvas.addEventListener("mousemove",this.mouseMove,!1),this.canvas.addEventListener("click",this.click,!1),this.canvas.addEventListener("mousedown",this.startDrag,!1),this.canvas.addEventListener("mouseup",this.endDrag,!1)},unmounted:function(){this.canvas.removeEventListener("mousemove",this.mouseMove),this.canvas.removeEventListener("click",this.click),this.canvas.removeEventListener("mousedown",this.startDrag),this.canvas.removeEventListener("mouseup",this.endDrag)}},Z=W,tt=(n("1d54"),Object(l["a"])(Z,g,b,!1,null,"76919e0c",null));tt.options.__file="Canvas.vue";var et=tt.exports;a["a"].use(m["a"]);var nt=new m["a"]({linkActiveClass:"active",routes:[{path:"/canvas",name:"canvas",component:et},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))},children:[{path:"",redirect:{name:"about/app"}},{path:"app",name:"about/app",component:function(){return n.e("application").then(n.bind(null,"e08f"))}},{path:"tech",name:"about/tech",component:function(){return n.e("application").then(n.bind(null,"f3ea"))}},{path:"author",name:"about/author",component:function(){return n.e("author").then(n.bind(null,"4f67"))}},{path:"*",redirect:{name:"about/app"}}]},{path:"*",redirect:{name:"canvas"}}]}),at=n("2f62");a["a"].use(at["a"]);var ot=new at["a"].Store({state:{},mutations:{},actions:{}}),it=n("9483");Object(it["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),a["a"].config.productionTip=!1,new a["a"]({router:nt,store:ot,render:function(t){return t(v)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("5e27"),o=n.n(a);o.a},"5e27":function(t,e,n){},"8a5e":function(t,e,n){"use strict";var a=n("e7f2"),o=n.n(a);o.a},a108:function(t,e,n){},a29b:function(t,e,n){"use strict";var a=n("f3c2"),o=n.n(a);o.a},b4c0:function(t,e,n){},d947:function(t,e,n){"use strict";var a=n("a108"),o=n.n(a);o.a},e7f2:function(t,e,n){},eda4:function(t,e,n){},f3c2:function(t,e,n){},ff4f:function(t,e,n){"use strict";var a=n("eda4"),o=n.n(a);o.a}});
//# sourceMappingURL=app-legacy.205be5f1.js.map