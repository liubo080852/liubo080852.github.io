(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{315:function(e,t,a){e.exports={main:"src-features-task_manage-type_manage-typemanage__main--1lxQP",add_type:"src-features-task_manage-type_manage-typemanage__add_type--ImcSm",content:"src-features-task_manage-type_manage-typemanage__content--3EK0b"}},636:function(e,t,a){"use strict";a.r(t);var n=a(11),s=a(12),c=a(22),i=a(21),d=a(46),r=a(0),o=a.n(r),h=a(223),p=a(631),l=a(642),u=a(641),_=a(645),j=a(649),m=(a(82),a(315)),b=a.n(m),g=a(42),y=a(61),O=a(1),f=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).getTypesData=function(){d.a.getTypesData().then((function(e){s.setState({types:e}),s.props.dispatch(Object(y.b)(e))})).catch((function(e){}))},s.dir_inputChange=function(e){s.setState({dir_name:e.target.value})},s.handleOk=function(){d.a.addTypeDir(s.state.dir_name).then((function(e){e.objectId&&s.getTypesData()})),s.setState({add_dialog_show:!1})},s.handleCancel=function(){s.setState({add_dialog_show:!1})},s.add_type=function(){s.setState({add_dialog_show:!0})},s.state={types:[],add_dialog_show:!1,dir_name:""},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getTypesData()}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:b.a.main,children:[Object(O.jsxs)("div",{className:b.a.add_type,children:[Object(O.jsx)(h.a,{onClick:this.add_type,shape:"round",children:"\u6dfb\u52a0\u76ee\u5f55"}),Object(O.jsx)(h.a,{shape:"round",children:"\u7f16\u8f91\u76ee\u5f55"})]}),this.state.types.length>0?Object(O.jsx)(x,{datas:this.state.types}):Object(O.jsx)(p.a,{}),Object(O.jsx)(l.a,{title:"\u6dfb\u52a0\u76ee\u5f55-\u8f93\u5165\u76ee\u5f55\u540d",visible:this.state.add_dialog_show,onOk:this.handleOk,onCancel:this.handleCancel,children:Object(O.jsx)(u.a,{size:"large",placeholder:"\u76ee\u5f55\u540d",value:this.state.dir_name,onChange:this.dir_inputChange})})]})}}]),a}(o.a.Component);function x(e){return Object(O.jsx)("div",{className:b.a.content,children:Object(O.jsx)(_.a,{gutter:16,children:e.datas.map((function(e){return Object(O.jsx)(j.a,{children:Object(O.jsx)(h.a,{children:e.name})},e.objectId)}))})})}var v=Object(g.b)()(f);t.default=v}}]);
//# sourceMappingURL=5.0b88bbc7.chunk.js.map