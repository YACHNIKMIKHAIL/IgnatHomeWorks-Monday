(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,function(e,a,t){e.exports={allmessage:"Message_allmessage__3Pxck",avatar:"Message_avatar__3FT3j",m:"Message_m__1l1rM",s:"Message_s__-M9uK",name:"Message_name__Tzmp0",message:"Message_message__8WR15",time:"Message_time__HOFTG"}},,,,function(e,a,t){e.exports={slide:"Header_slide__1o2OI",active:"Header_active__1dmn0"}},function(e,a,t){e.exports={superInput:"SuperInputText_superInput__3XH9u",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S",superSpan:"SuperInputText_superSpan__dp2Iu"}},function(e,a,t){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",testSpanError:"HW4_testSpanError___Mj8X"}},function(e,a,t){e.exports={default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch"}},,,function(e,a,t){e.exports={App:"App_App__1Sc4o"}},function(e,a,t){e.exports={someClass:"Greeting_someClass__uGflL",error:"Greeting_error__1uvQ8"}},,function(e,a,t){e.exports=t(25)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),c=t.n(l),o=(t(24),t(16)),u=t.n(o),s=t(1),i=t(5),m=t.n(i);var E=function(e){return r.a.createElement("div",{className:m.a.allmessage},r.a.createElement("div",{className:m.a.avatar},r.a.createElement("img",{src:e.avatar,alt:""})),r.a.createElement("div",{className:m.a.m},r.a.createElement("div",{className:m.a.s},r.a.createElement("div",{className:m.a.name},e.name),r.a.createElement("div",{className:m.a.message},e.message)),r.a.createElement("div",{className:m.a.time},e.time)))},d="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",p="Artem",f="npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",v="20:00";var h=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(E,{avatar:d,name:p,message:f,time:v}),r.a.createElement("hr",null),r.a.createElement("hr",null))},_=t(2);var b=function(e){return r.a.createElement("div",null,e.affair.name,r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var g=function(e){var a=e.data.map((function(a){return r.a.createElement(b,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},k=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var C=function(){var e=Object(n.useState)(k),a=Object(_.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(_.a)(c,2),u=o[0],s=o[1],i=function(e,a){return"all"===a?e:"low"===a?e.filter((function(e){return"low"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):"high"===a?e.filter((function(e){return"high"===e.priority})):e}(t,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(g,{data:i,setFilter:s,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},N=t(18),O=t(17),j=t.n(O),S=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=a?"":j.a.error;return r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:t,className:o,onKeyPress:function(e){}}),r.a.createElement("span",null,l),r.a.createElement("button",{onClick:n},"add"),r.a.createElement("span",null,c))},x=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(_.a)(l,2),o=c[0],u=c[1],s=Object(n.useState)(""),i=Object(_.a)(s,2),m=i[0],E=i[1],d=a.length;return r.a.createElement(S,{name:o,setNameCallback:function(e){e.currentTarget.value.trim()&&E(""),u(e.currentTarget.value.trim())},addUser:function(){o?(t(o),alert("Hello ".concat(o," !")),u("")):E("\u0432\u0432\u0435\u0434\u0438 \u0438\u043c\u044f!!!")},error:m,totalUsers:d})},y=t(27);var w=function(){var e=Object(n.useState)([]),a=Object(_.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(x,{users:t,addUserCallback:function(e){l([{_id:Object(y.a)(),name:e}].concat(Object(N.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},I=t(4),A=t(10),T=t.n(A),F=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,s=Object(I.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),i="".concat(T.a.error," ").concat(u||""),m="".concat(T.a.errorInput," ").concat(o?T.a.superInput:"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},s)),c&&r.a.createElement("span",{className:i},c))},J=t(11),M=t.n(J),U=t(12),P=t.n(U),H=function(e){var a=e.red,t=e.className,n=Object(I.a)(e,["red","className"]),l="".concat(a?P.a.red:P.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},B=t(13),R=t.n(B),W=function(e){e.type;var a=e.onChange,t=(e.onChangeChecked,e.className),n=(e.spanClassName,e.children),l=Object(I.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),c="".concat(R.a.checkbox," ").concat(t||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e)},className:c},l)),n&&r.a.createElement("span",{className:R.a.spanClassName},n))};var G=function(){var e=Object(n.useState)(""),a=Object(_.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},u=Object(n.useState)(!1),s=Object(_.a)(u,2),i=s[0],m=s[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:M.a.column},r.a.createElement(F,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(F,{className:M.a.blue}),r.a.createElement(H,null,"default"),r.a.createElement(H,{red:!0,onClick:o},"delete "),r.a.createElement(H,{disabled:!0},"disabled"),r.a.createElement(W,{checked:i,onChangeChecked:m},"check me "),r.a.createElement(W,{checked:i,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},K=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(I.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(_.a)(o,2),s=u[0],i=u[1],m=l||{},E=m.children,d=m.onDoubleClick,p=m.className,f=Object(I.a)(m,["children","onDoubleClick","className"]),v="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",p);return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(F,Object.assign({autoFocus:!0,onBlur:function(e){a&&a(e),i(!1)},onEnter:function(){t&&t(),i(!1)}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){d&&d(e),i(!0)},className:v},f),E||c.value))};function X(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function D(e,a){var t=a,n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}X("test",{x:"A",y:1});D("test",{x:"",y:0});var z=function(){var e=Object(n.useState)(""),a=Object(_.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(K,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(H,{onClick:function(){X("editable-span-value",t)}},"save"),r.a.createElement(H,{onClick:function(){console.log(t),l(D("editable-span-value",t))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var L=function(){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(C,null),r.a.createElement(w,null),r.a.createElement(G,null),r.a.createElement(z,null))};var Z=function(){return r.a.createElement("div",null,"JUNIOR")};var q=function(){return r.a.createElement("div",null,"JUNIORplus")};var Q=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},Y="/pre-junior",$="/junior",V="/junior+";var ee=function(){return r.a.createElement("div",null,r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/",element:r.a.createElement(s.a,{to:Y})}),r.a.createElement(s.b,{path:Y,element:r.a.createElement(L,null)}),r.a.createElement(s.b,{path:$,element:r.a.createElement(Z,null)}),r.a.createElement(s.b,{path:V,element:r.a.createElement(q,null)}),r.a.createElement(s.b,{element:r.a.createElement(Q,null)})))},ae=t(6),te=t(9),ne=t.n(te);var re=function(){return r.a.createElement("div",{className:ne.a.slide},r.a.createElement(ae.b,{to:Y,className:function(e){return e.isActive?ne.a.active:""}},"PRE_JUNIOR"),r.a.createElement(ae.b,{to:$,className:function(e){return e.isActive?ne.a.active:""}},"JUNIOR"),r.a.createElement(ae.b,{to:V,className:function(e){return e.isActive?ne.a.active:""}},"JUNIORplus"),r.a.createElement("span",null,"show me)"))};var le=function(){return r.a.createElement("div",null,r.a.createElement(ae.a,null,r.a.createElement(re,null),r.a.createElement(ee,null)))};var ce=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(le,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[19,1,2]]]);
//# sourceMappingURL=main.e1964e72.chunk.js.map