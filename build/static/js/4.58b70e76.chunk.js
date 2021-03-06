(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[4],{125:function(t,e,n){t.exports={contactform:"ContactForm_contactform__GYSiQ"}},146:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(3),c=n(33),i=n(120),o=n(125),u=n.n(o),s=n(117),l=n(145),b=n(2);var d=function(t){var e=t.onSubmitData,n=Object(a.useState)({name:"",number:""}),o=Object(i.a)(n,2),d=o[0],f=o[1],j=function(t){var e=t.currentTarget.name,n=t.currentTarget.value;f((function(t){return Object(c.a)(Object(c.a)({},t),{},Object(r.a)({},e,n))}))},m=function(){f({name:"",number:""})};return Object(b.jsx)("div",{className:u.a.contactform,children:Object(b.jsxs)("form",{type:"submit",onSubmit:function(t){t.preventDefault();var n={name:d.name,number:d.number};e(n),m()},children:[Object(b.jsx)(l.a,{label:"Name:",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:j,value:d.name}),Object(b.jsx)(l.a,{label:"Number:",type:"tel",name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:j,value:d.number}),Object(b.jsx)("br",{}),Object(b.jsx)(s.a,{style:{marginTop:25},type:"submit",variant:"contained",color:"primary",children:"Add contact"})]})})};function f(t){var e=t.del,n=t.contacts;return Object(b.jsx)("ul",{children:n.map((function(t){return Object(b.jsxs)("li",{id:t.id,children:[Object(b.jsx)(s.a,{style:{marginLeft:25,height:30,margin:5},"data-id":t.id,variant:"contained",color:"primary",onClick:function(){return n=t.id,void e(n);var n},children:"Delete"}),"".concat(t.name,": ").concat(t.number)]},t.id)}))})}f.defaultProps={contacts:[]};var j=f;var m=function(t){var e=t.setFilterToState;return Object(b.jsx)("div",{children:Object(b.jsx)(l.a,{label:"Filter ",onChange:function(t){var n=t.currentTarget.value.toUpperCase();e(n)}})})},h=n(6),p=n(54),g=n(13),O=n(29),v=n(42),x=function(t){return t.app.filters},C=function(t){return t.app.contacts},y={getIsLoading:function(t){return t.app.loading},getFilter:x,getContacts:C,getVisibleFilterArray:Object(v.a)([C,x],(function(t,e){var n=t.filter((function(t){return t.name.toUpperCase().includes(e)}));return Object(O.a)(n)}))};e.default=Object(g.b)((function(t){return{isLoadingContacts:y.getIsLoading(t),contacts:y.getContacts(t),filter:y.getFilter(t),visibleArray:y.getVisibleFilterArray(t)}}),(function(t){return{fetchContacts:function(){return t(p.a.fetchContacts())},formSubmitHandler:function(e){return t(p.a.addContact(e))},contactDelete:function(e){return t(p.a.deleteContact(e))},filterSet:function(e){return t(h.a.filterSet(e))}}}))((function(t){var e=t.fetchContacts,n=t.isLoadingContacts,r=t.formSubmitHandler,c=t.filterSet,i=t.visibleArray,o=t.contactDelete;return Object(a.useEffect)((function(){e()}),[e]),Object(b.jsxs)("div",{className:"contacts",children:[Object(b.jsx)("h1",{children:"Phonebook"}),n&&Object(b.jsx)("h2",{children:"Loading ..."}),Object(b.jsx)(d,{onSubmitData:r}),Object(b.jsx)("h1",{children:"Contacts"}),Object(b.jsx)(m,{setFilterToState:c}),Object(b.jsx)(j,{contacts:i,del:o})]})}))}}]);
//# sourceMappingURL=4.58b70e76.chunk.js.map