(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[11],{312:function(e,t,n){e.exports={main:"src-features-task_manage-manage__main--1ttAI",top:"src-features-task_manage-manage__top--J-qxG",content:"src-features-task_manage-manage__content--3Cdqj"}},313:function(e,t,n){e.exports={main:"src-compoent_d-under_line_tab-UnderLineTab__main--3UnUl",text_main:"src-compoent_d-under_line_tab-UnderLineTab__text_main--1d5JT",text_css:"src-compoent_d-under_line_tab-UnderLineTab__text_css--KzWb1",line:"src-compoent_d-under_line_tab-UnderLineTab__line--2QPOj"}},314:function(e,t,n){e.exports={main:"src-features-task_manage-article_manage-ArticleManage__main--19M5H"}},643:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var a=n(11),c=n(12),i=n(21),s=n(20),r=n(0),l=n.n(r),o=n(312),m=n.n(o),u=n(44),d=n(29),_=n(313),b=n.n(_),j=n(1),p=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,i=new Array(c),s=0;s<c;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).showCmp=function(t){e.props.clickItem(t)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=(t.select_id,t.items);return Object(j.jsx)("div",{className:b.a.main,children:n.map((function(t){return Object(j.jsxs)("div",{className:b.a.text_main,children:[Object(j.jsx)("div",{onClick:function(){e.showCmp(t.id)},className:b.a.text_css,children:t.name}),e.props.select_id==t.id?Object(j.jsx)("div",{className:b.a.line}):null]},t.id)}))})}}]),n}(l.a.Component),h=n(62),f=n(65),O=n(314),v=n.n(O);function x(){var e=Object(r.useState)([]),t=Object(h.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){u.a.getAllTitlesArticles().then((function(e){e=e.reverse();var t={};for(var n in e){var c=e[n],i=new Date(c.createdAt).getFullYear(),s=t[i];void 0===s&&(s=[]),s.push(c),t[i]=s}a(t)})).catch((function(e){}))}),[0]),Object(j.jsxs)("div",{className:v.a.main,children:[" ",Object(j.jsx)(f.a,{items:n})]})}var k=Object(d.a)((function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(4)]).then(n.bind(null,633))})),g=Object(d.a)((function(){return Promise.all([n.e(1),n.e(0),n.e(2),n.e(9),n.e(14)]).then(n.bind(null,644))})),w=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).clickItem=function(e){c.setState({show_id:e})},c.getRealCmp=function(){return 1===c.state.show_id?Object(j.jsx)(x,{}):2===c.state.show_id?Object(j.jsx)(g,{callback_tab_select:c.clickItem}):Object(j.jsx)(k,{})},c.state={show_id:0,items:[{id:0,name:"\u6587\u7ae0\u76ee\u5f55\u7ba1\u7406"},{id:1,name:"\u6587\u7ae0\u7ba1\u7406"},{id:2,name:"\u53d1\u5e03\u6587\u7ae0"}]},u.a.initBmob(),c}return Object(c.a)(n,[{key:"render",value:function(){var e=this.getRealCmp();return Object(j.jsxs)("div",{className:m.a.main,children:[Object(j.jsxs)("div",{className:m.a.top,children:[Object(j.jsx)("h1",{children:"Jump \u540e\u53f0\u7ba1\u7406"}),Object(j.jsx)(p,{clickItem:this.clickItem,select_id:this.state.show_id,items:this.state.items})]}),Object(j.jsx)("div",{className:m.a.content,children:e})]})}}]),n}(l.a.Component)}}]);
//# sourceMappingURL=11.e3b3fbe5.chunk.js.map