(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{29:function(e,t,n){},33:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),i=n(15),r=n.n(i),a=(n(29),function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,38)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),i(e),r(e)}))}),u=n(8),s=n(9),l=n(11),j=n(10),h=n(18),b=(n(33),n(17)),d=n(21);function p(){return{type:"AAA"}}function O(e){return console.log(e),{type:"1",text:e}}var x=n(1),m=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).actionText=e.actionText.bind(Object(b.a)(e)),e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.count,n=e.text,c=e.actionAAA;return Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{onClick:c,children:"actionAAA"}),Object(x.jsx)("h1",{children:t}),Object(x.jsx)("button",{onClick:this.actionText,children:"actionText"}),Object(x.jsx)("h1",{children:n})]})}},{key:"actionText",value:function(){this.props.actionText("666")}}]),n}(o.a.Component);var v=Object(h.b)((function(e){return{count:e.counter.count,text:e.show_text.text}}),(function(e){return Object(d.bindActionCreators)({actionAAA:p,actionText:O},e)}))(m),f=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(u.a)(this,n),e=t.call(this),console.log("constructor"),e}return Object(s.a)(n,[{key:"shouldComponentUpdate",value:function(){return console.log("shouldComponentUpdate"),!0}},{key:"componentDidMount",value:function(){console.log("componentDidMount ui\u6e32\u67d3\u5b8c\u6210 \u53ea\u6267\u884c\u4e00\u6b21")}},{key:"componentDidUpdate",value:function(){console.log("componentDidUpdate")}},{key:"componentWillUnmount",value:function(){console.log("componentWillUnmount")}},{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"ShoppingList}"}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:"A"}),Object(x.jsx)("li",{children:"B"}),Object(x.jsx)("li",{children:"C"})]})]})}}]),n}(o.a.Component),g=n(21),y=g.createStore,A=g.combineReducers,k={count:0},C={text:"123"},D=y(A({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(console.log("counter "+t.type),t.type){case"AAA":return{count:100}}return e},show_text:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(console.log("show_text "+t.type+"  "+t.text),t.type){case"1":return{text:t.text}}return e}}));var T=function(){return Object(x.jsx)(h.a,{store:D,children:Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(f,{}),Object(x.jsx)(v,{})]})})},U=n(13),w=n(3),M=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){console.log("Home componentDidMount"),console.log(this.props.match.params)}},{key:"render",value:function(){var e=this.props.match.params.name;return Object(x.jsx)("div",{children:Object(x.jsxs)("h1",{children:["Home  ",e]})})}}]),n}(o.a.Component),P=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){console.log("UserPage componentDidMount")}},{key:"render",value:function(){return Object(x.jsx)("div",{children:Object(x.jsx)("h1",{children:"UserPage"})})}}]),n}(o.a.Component),F=n(24),H=n.n(F)()({loader:function(){return n.e(3).then(n.bind(null,39))},loading:function(){return Object(x.jsx)("div",{children:"loading..."})}}),S=function(e){var t=e.match;return Object(x.jsx)("h1",{children:t.params.name})},_=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(x.jsxs)(U.a,{children:[Object(x.jsxs)("div",{id:"menu",children:[Object(x.jsx)("li",{children:Object(x.jsx)(U.b,{to:"/home1/liubo",children:"Home1"})}),Object(x.jsx)("li",{children:Object(x.jsx)(U.b,{to:"/home/liubo",children:"Home"})}),Object(x.jsx)("li",{children:Object(x.jsx)(U.b,{to:"/userPage",children:"userPage"})}),Object(x.jsx)("li",{children:Object(x.jsx)(U.b,{to:"/app",children:"App"})}),Object(x.jsx)("li",{children:Object(x.jsx)(U.b,{to:"/form",children:"\u5c0f\u9ec4\u9c7c \u6309\u9700\u52a0\u8f7d"})})]}),Object(x.jsxs)("div",{id:"page_content",children:[Object(x.jsx)(w.a,{path:"/home1/:name",component:S}),Object(x.jsx)(w.a,{path:"/home/:name",component:M}),Object(x.jsx)(w.a,{path:"/userPage",component:P}),Object(x.jsx)(w.a,{path:"/app",component:T}),Object(x.jsx)(w.a,{path:"/form",component:H})]})]})}}]),n}(o.a.Component);r.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(_,{})}),document.getElementById("root")),a()}},[[37,1,2]]]);
//# sourceMappingURL=main.e8510b1c.chunk.js.map