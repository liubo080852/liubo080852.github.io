(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[9],{301:function(e,t,n){e.exports={main:"src-features-task_manage-manage__main--1ttAI",top:"src-features-task_manage-manage__top--J-qxG",content:"src-features-task_manage-manage__content--3Cdqj"}},302:function(e,t,n){e.exports={main:"src-compoent_d-under_line_tab-UnderLineTab__main--3UnUl",text_main:"src-compoent_d-under_line_tab-UnderLineTab__text_main--1d5JT",text_css:"src-compoent_d-under_line_tab-UnderLineTab__text_css--KzWb1",line:"src-compoent_d-under_line_tab-UnderLineTab__line--2QPOj"}},636:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var a=n(10),c=n(11),s=n(20),i=n(19),r=n(0),o=n.n(r),l=n(301),m=n.n(l),d=n(53),_=n(27),u=n(302),b=n.n(u),j=n(1),p=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,s=new Array(c),i=0;i<c;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).showCmp=function(t){console.log("showCmp "+t),e.props.clickItem(t)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.select_id,a=t.items;return console.log("select_id "+n),Object(j.jsx)("div",{className:b.a.main,children:a.map((function(t){return Object(j.jsxs)("div",{className:b.a.text_main,children:[Object(j.jsx)("div",{onClick:function(){e.showCmp(t.id)},className:b.a.text_css,children:t.name}),e.props.select_id==t.id?Object(j.jsx)("div",{className:b.a.line}):null]},t.id)}))})}}]),n}(o.a.Component),h=Object(_.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3)]).then(n.bind(null,625))})),O=Object(_.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(6),n.e(10)]).then(n.bind(null,635))})),f=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var c;return Object(a.a)(this,n),console.log("ManageHome"),(c=t.call(this,e)).clickItem=function(e){console.log("clickItem "+e),c.setState({show_id:e})},c.getRealCmp=function(){return 1===c.state.show_id?Object(j.jsx)(h,{}):2===c.state.show_id?Object(j.jsx)(O,{callback_tab_select:c.clickItem}):Object(j.jsx)(h,{})},c.state={show_id:0,items:[{id:0,name:"\u6587\u7ae0\u76ee\u5f55\u7ba1\u7406"},{id:1,name:"\u6587\u7ae0\u7ba1\u7406"},{id:2,name:"\u53d1\u5e03\u6587\u7ae0"}]},d.a.initBmob(),c}return Object(c.a)(n,[{key:"render",value:function(){var e=this.getRealCmp();return Object(j.jsxs)("div",{className:m.a.main,children:[Object(j.jsxs)("div",{className:m.a.top,children:[Object(j.jsx)("h1",{children:"Jump \u540e\u53f0\u7ba1\u7406"}),Object(j.jsx)(p,{clickItem:this.clickItem,select_id:this.state.show_id,items:this.state.items})]}),Object(j.jsx)("div",{className:m.a.content,children:e})]})}}]),n}(o.a.Component)}}]);
//# sourceMappingURL=9.2c13cf43.chunk.js.map