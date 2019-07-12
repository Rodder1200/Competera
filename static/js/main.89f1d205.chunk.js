(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,a){e.exports=a(56)},55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(17),c=a.n(r),l=(a(44),a(9)),s=a(10),i=a(14),m=a(11),d=a(15),u=a(13),p=a(8),b=a(16),h=a(12),N=a(33),E=a(34),f=[],v={},g=Object(h.combineReducers)({notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_NEW_NOTE":return e.concat(t.payload);case"REMOVE_NOTE":return e.filter(function(e){return e.id!==t.payload.id});default:return e}},editedNote:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"EDIT_NOTE":return t.payload[0];default:return e}}}),y=localStorage.getItem("storageNotes")?JSON.parse(localStorage.getItem("storageNotes")):{},O=Object(h.createStore)(g,y,Object(E.composeWithDevTools)(Object(h.applyMiddleware)(N.a)));O.subscribe(function(){localStorage.setItem("storageNotes",JSON.stringify(O.getState()))});var j=O,C=a(22),w=Object(b.f)(function(e){var t=e.title,a=e.text,n=e.note_id,r=e.history;return o.a.createElement("div",{className:"product card col-md-5 m-3 p-2"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h4",{className:"card-title"}," ",t," "),o.a.createElement("p",{className:"card-text"}," ",a," ")),o.a.createElement("div",{className:"d-flex justify-content-between"},o.a.createElement("div",null,o.a.createElement("button",{className:"btn btn-info",onClick:function(){r.push("/note/".concat(n,"/").concat(t))}},"More details"))))}),x=function(e){return function(t){t({type:"REMOVE_NOTE",payload:e})}},D=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={},a.handleChange=function(e){var t=e.target,n=t.name,o=t.value;a.setState(Object(C.a)({},n,o))},a.goToCreatePage=function(){a.props.history.push("/create/new")},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.notes;return o.a.createElement("div",{className:"container"},o.a.createElement("button",{className:"btn btn-warning alert-warning",onClick:this.goToCreatePage},"Create New Note"),o.a.createElement("div",{className:"row justify-content-between"},t instanceof Array&&t.map(function(t,a){return o.a.createElement(w,{key:"".concat(t.id).concat(a),note_id:t.id,title:t.title,text:t.text,handleChange:e.handleChange})})))}}]),t}(n.Component);var k=Object(b.f)(Object(u.b)(function(e){return{notes:e.notes}},{removeNote:x})(D)),T=a(18),M=function(e){var t=e.onClose,a=e.handleDeleteNote;return o.a.createElement("div",{className:"modal modal-show"},o.a.createElement("div",{className:"modal-dialog",role:"document"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("div",{className:"modal-header"},o.a.createElement("h5",{className:"modal-title"},"Delete note"),o.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:t},o.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),o.a.createElement("div",{className:"modal-body"},o.a.createElement("p",null,"Are you sure?")),o.a.createElement("div",{className:"modal-footer"},o.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:a},"Yes"),o.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:t},"No")))))},S=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={isModalDelete:!1},a.toggleModalDelete=function(){a.setState(function(e){return{isModalDelete:!e.isModalDelete}})},a.goToCreatePage=function(){a.props.history.push("/create/".concat(a.props.match.params.id))},a.goHome=function(){a.props.history.push("/")},a.handleDeleteNote=function(){a.props.removeNote({id:a.props.match.params.id}),a.toggleModalDelete(),a.props.history.push("/"),Object(T.b)("Note was deleted")},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.editNote(this.props.notes.filter(function(t){return t.id===e.props.match.params.id}))}},{key:"render",value:function(){var e=this.props.editedNote,t=e.title,a=e.text,n=this.state.isModalDelete;return o.a.createElement("div",null,n&&o.a.createElement(M,{onClose:this.toggleModalDelete,handleDeleteNote:this.handleDeleteNote}),o.a.createElement("button",{className:"btn btn-info",onClick:this.goHome},"Back"),o.a.createElement("div",{className:"card p-3 mh-100"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title"}," ",t," "),o.a.createElement("p",{className:"card-text"}," ",a," ")),o.a.createElement("div",{className:"btn-group justify-content-end",role:"group","aria-label":"edit_delete"},o.a.createElement("button",{className:"btn btn-sm btn-outline-warning",onClick:this.goToCreatePage},"Edit"),o.a.createElement("button",{className:"btn btn-sm btn-outline-danger",onClick:this.toggleModalDelete},"Delete"))))}}]),t}(n.Component);var _=Object(b.f)(Object(u.b)(function(e){return{editedNote:e.editedNote,notes:e.notes}},{removeNote:x,editNote:function(e){return function(t){t({type:"EDIT_NOTE",payload:e})}}})(S)),A=a(38),P=a.n(A),I=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={id:P.a.v4(),title:"",text:"",type:"create"},a.handleChange=function(e){var t=e.target,n=t.name,o=t.value;a.setState(Object(C.a)({},n,o))},a.createNote=function(){var e=a.state,t=e.id,n=e.title,o=e.text;"edit"===e.type?(a.props.removeNote({id:t}),a.props.addNewNote({id:t,title:n,text:o}),Object(T.b)("Note was edited")):(a.props.addNewNote({id:t,title:n,text:o}),Object(T.b)("Note was created")),a.props.history.push("/")},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.match,a=e.editedNote,n=a.id,o=a.title,r=a.text;t.params&&"new"!==t.params.id&&this.setState({id:n,title:o,text:r,type:"edit"})}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.text,r=e.type;return o.a.createElement(n.Fragment,null,o.a.createElement(p.b,{to:"/"},o.a.createElement("button",{className:"btn btn-info"},"Back")),o.a.createElement("div",{className:"jumbotron"},o.a.createElement("div",{className:"container"},o.a.createElement("h2",{className:"page-header text-center"},"create"===r?"Create new note":"Edit note"),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"title",className:"form-check-label"},"Title"),o.a.createElement("input",{name:"title",className:"form-control",type:"text",onChange:this.handleChange,value:t})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"specs",className:"form-check-label"},"Text"),o.a.createElement("textarea",{name:"text",className:"form-control",maxLength:"500",rows:"10",onChange:this.handleChange,value:a})),o.a.createElement("div",{className:"text-center"},o.a.createElement("button",{className:"btn btn-lg btn-success",onClick:this.createNote},"create"===r?"Add":"Edit")))))}}]),t}(n.Component);var J=Object(b.f)(Object(u.b)(function(e){return{notes:e.notes,editedNote:e.editedNote}},{addNewNote:function(e){return function(t){t({type:"ADD_NEW_NOTE",payload:e})}},removeNote:x})(I)),R=(a(54),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(u.a,{store:j},o.a.createElement(p.a,{basename:"/Competera"},o.a.createElement("div",null,o.a.createElement(T.a,{hideProgressBar:!0}),o.a.createElement("div",{className:"container"},o.a.createElement("div",null,o.a.createElement("h1",{className:"display-2"},o.a.createElement(p.b,{to:"/"},"COMPETERA TEST APP"))),o.a.createElement(b.c,null,o.a.createElement(b.a,{exact:!0,path:"/",component:k}),o.a.createElement(b.a,{path:"/note/:id",component:_}),o.a.createElement(b.a,{path:"/create/:id",component:J}))))))}}]),t}(n.Component));a(55);c.a.render(o.a.createElement(R,null),document.querySelector("#root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.89f1d205.chunk.js.map