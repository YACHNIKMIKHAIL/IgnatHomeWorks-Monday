(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],{111:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(40),c=a.n(l),o=(a(86),a(64)),u=a.n(o),i=a(4),m=a(24),s=a.n(m);var d=function(e){return r.a.createElement("div",{className:s.a.allmessage},r.a.createElement("div",{className:s.a.avatar},r.a.createElement("img",{src:e.avatar,alt:""})),r.a.createElement("div",{className:s.a.m},r.a.createElement("div",{className:s.a.s},r.a.createElement("div",{className:s.a.name},e.name),r.a.createElement("div",{className:s.a.message},e.message)),r.a.createElement("div",{className:s.a.time},e.time)))},E="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",p="Artem",v="npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",h="20:00";var f=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(d,{avatar:E,name:p,message:v,time:h}),r.a.createElement("hr",null),r.a.createElement("hr",null))},g=a(3);var b=function(e){return r.a.createElement("div",null,e.affair.name,r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var _=function(e){var t=e.data.map((function(t){return r.a.createElement(b,{key:t._id,affair:t,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,t,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},C=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var O=function(){var e=Object(n.useState)(C),t=Object(g.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("all"),o=Object(g.a)(c,2),u=o[0],i=o[1],m=function(e,t){return"all"===t?e:"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"high"===t?e.filter((function(e){return"high"===e.priority})):e}(a,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(_,{data:m,setFilter:i,deleteAffairCallback:function(e){return l(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},k=a(13),j=a(68),y=a.n(j),N=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=t?"":y.a.error;return r.a.createElement("div",null,r.a.createElement("input",{value:t,onChange:a,className:o,onKeyPress:function(e){}}),r.a.createElement("span",null,l),r.a.createElement("button",{onClick:n},"add"),r.a.createElement("span",null,c))},x=function(e){var t=e.users,a=e.addUserCallback,l=Object(n.useState)(""),c=Object(g.a)(l,2),o=c[0],u=c[1],i=Object(n.useState)(""),m=Object(g.a)(i,2),s=m[0],d=m[1],E=t.length;return r.a.createElement(N,{name:o,setNameCallback:function(e){e.currentTarget.value.trim()&&d(""),u(e.currentTarget.value.trim())},addUser:function(){o?(a(o),alert("Hello ".concat(o," !")),u("")):d("\u0432\u0432\u0435\u0434\u0438 \u0438\u043c\u044f!!!")},error:s,totalUsers:E})},w=a(127);var S=function(){var e=Object(n.useState)([]),t=Object(g.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(x,{users:a,addUserCallback:function(e){l([{_id:Object(w.a)(),name:e}].concat(Object(k.a)(a)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},I=a(14),T=a(45),A=a.n(T),H=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,i=Object(I.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),m="".concat(A.a.error," ").concat(u||""),s="".concat(A.a.errorInput," ").concat(o?A.a.superInput:"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:s},i)),c&&r.a.createElement("span",{className:m},c))},M=a(51),R=a.n(M),F=a(52),W=a.n(F),J=function(e){var t=e.red,a=e.className,n=Object(I.a)(e,["red","className"]),l="".concat(t?W.a.red:W.a.default," ").concat(a);return r.a.createElement("button",Object.assign({className:l},n))},U=a(53),P=a.n(U),B=function(e){e.type;var t=e.onChange,a=(e.onChangeChecked,e.className),n=(e.spanClassName,e.children),l=Object(I.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),c="".concat(P.a.checkbox," ").concat(a||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e)},className:c},l)),n&&r.a.createElement("span",{className:P.a.spanClassName},n))};var L=function(){var e=Object(n.useState)(""),t=Object(g.a)(e,2),a=t[0],l=t[1],c=a?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},u=Object(n.useState)(!1),i=Object(g.a)(u,2),m=i[0],s=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:R.a.column},r.a.createElement(H,{value:a,onChangeText:l,onEnter:o,error:c}),r.a.createElement(H,{className:R.a.blue}),r.a.createElement(J,null,"default"),r.a.createElement(J,{red:!0,onClick:o},"delete "),r.a.createElement(J,{disabled:!0},"disabled"),r.a.createElement(B,{checked:m,onChangeChecked:s},"check me "),r.a.createElement(B,{checked:m,onChange:function(e){return s(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},G=function(e){e.autoFocus;var t=e.onBlur,a=e.onEnter,l=e.spanProps,c=Object(I.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(g.a)(o,2),i=u[0],m=u[1],s=l||{},d=s.children,E=s.onDoubleClick,p=s.className,v=Object(I.a)(s,["children","onDoubleClick","className"]),h="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",p);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(H,Object.assign({autoFocus:!0,onBlur:function(e){t&&t(e),m(!1)},onEnter:function(){a&&a(),m(!1)}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){E&&E(e),m(!0)},className:h},v),d||c.value))};function K(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}function D(e,t){var a=t,n=localStorage.getItem(e);return null!==n&&(a=JSON.parse(n)),a}K("test",{x:"A",y:1});D("test",{x:"",y:0});var X=function(){var e=Object(n.useState)(""),t=Object(g.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(G,{value:a,onChangeText:l,spanProps:{children:a?void 0:"enter text..."}})),r.a.createElement(J,{onClick:function(){K("editable-span-value",a)}},"save"),r.a.createElement(J,{onClick:function(){console.log(a),l(D("editable-span-value",a))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var z=function(){return r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement(O,null),r.a.createElement(S,null),r.a.createElement(L,null),r.a.createElement(X,null))},q=function(e){var t=e.options,a=e.onChange,n=e.onChangeOption,l=Object(I.a)(e,["options","onChange","onChangeOption"]),c=t?t.map((function(e,t){return r.a.createElement("option",{value:e,key:t},e)})):[];return r.a.createElement("select",Object.assign({onChange:function(e){a&&a(e),n&&n(e.currentTarget.value)}},l),c)},Q=function(e){e.type;var t=e.name,a=e.options,n=e.value,l=e.onChange,c=e.onChangeOption,o=(Object(I.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){l&&l(e),c&&c(e.currentTarget.value)}),u=a?a.map((function(e,a){return r.a.createElement("label",{key:t+"-"+a},r.a.createElement("input",{type:"radio",name:t,onChange:o,checked:e===n,value:e}),e)})):[];return r.a.createElement(r.a.Fragment,null,u)},Y=["x","y","z"];var Z=function(){var e=Object(n.useState)(Y[1]),t=Object(g.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(q,{options:Y,value:a,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(Q,{name:"radio",options:Y,value:a,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},$=a(22),V=function(e,t){switch(t.type){case"sort":return"up"===t.payload?e.map((function(e){return Object($.a)({},e)})).sort((function(e,t){return e.name>t.name?1:-1})):"down"===t.payload?e.map((function(e){return Object($.a)({},e)})).sort((function(e,t){return e.name<t.name?1:-1})):Object($.a)({},e);case"check":return e.filter((function(e){return e.age>+t.payload}));default:return e}},ee=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var te=function(){var e=Object(n.useState)(ee),t=Object(g.a)(e,2),a=t[0],l=t[1],c=a.map((function(e){return r.a.createElement("div",{key:e._id},e.name,", ",e.age)}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",c,r.a.createElement("div",null,r.a.createElement(J,{onClick:function(){return l(V(ee,{type:"sort",payload:"up"}))}},"sort up")),r.a.createElement("div",null,r.a.createElement(J,{onClick:function(){return l(V(ee,{type:"sort",payload:"down"}))}},"sort down")),r.a.createElement("div",null,r.a.createElement(J,{onClick:function(){return l(V(ee,{type:"check",payload:"18"}))}},"check 18")),r.a.createElement("hr",null),r.a.createElement("hr",null))};var ae=function(){var e=Object(n.useState)(0),t=Object(g.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(),o=Object(g.a)(c,2),u=o[0],i=o[1],m=Object(n.useState)(!1),s=Object(g.a)(m,2),d=s[0],E=s[1],p=function(){clearInterval(a)},v=null===u||void 0===u?void 0:u.toLocaleTimeString(),h=null===u||void 0===u?void 0:u.toLocaleDateString();return r.a.createElement("div",null,r.a.createElement("div",{onMouseEnter:function(){E(!0)},onMouseLeave:function(){E(!1)}},v),d&&r.a.createElement("div",null,h),r.a.createElement(J,{onClick:function(){p();var e=window.setInterval((function(){i(new Date)}),1e3);l(e)}},"start"),r.a.createElement(J,{onClick:p},"stop"))};var ne=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 9",r.a.createElement(ae,null),r.a.createElement("hr",null),r.a.createElement("hr",null))},re=a(23),le={loading:!1},ce="LOADING",oe=function(e){return{type:ce,loading:e}},ue=a(129);var ie=function(){var e=Object(re.c)((function(e){return e.loading.loading})),t=Object(re.b)();return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 10",e?r.a.createElement("div",{style:{display:"flex",width:"100%",justifyContent:"space-around"}},r.a.createElement(ue.a,null)):r.a.createElement("div",null,r.a.createElement(J,{onClick:function(){t(oe(!e)),setTimeout((function(){t(oe(e))}),2e3),console.log("loading...")}},"set loading...")),r.a.createElement("hr",null),r.a.createElement("hr",null))},me=a(71),se=a.n(me),de=function(e){e.type;var t=e.onChange,a=e.onChangeRange,n=e.className,l=e.value,c=Object(I.a)(e,["type","onChange","onChangeRange","className","value"]),o="".concat(se.a.range," ").concat(n||"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({value:l,type:"range",onChange:function(e){t&&t(e),a&&a(+e.currentTarget.value)},className:o,style:{width:"300px"}},c)))},Ee=a(130),pe=a(126),ve=function(e){var t=e.onChangeRange,a=e.value,l=r.a.useState([0,100]),c=Object(g.a)(l,2),o=c[0],u=c[1];Object(n.useEffect)((function(){a&&u(a)}),[a]);return r.a.createElement(Ee.a,{sx:{width:300}},r.a.createElement(pe.a,{getAriaLabel:function(){return"Minimum distance shift"},value:o,onChange:function(e,a,n){if(Array.isArray(a))if(a[1]-a[0]<10)if(0===n){var r=Math.min(a[0],90);u([r,r+10])}else{var l=Math.max(a[1],10);u([l-10,l])}else t&&t(a),u(a)},valueLabelDisplay:"auto",disableSwap:!0}))};var he=function(){var e=Object(n.useState)([0,100]),t=Object(g.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 11",r.a.createElement("div",null,r.a.createElement("div",null,a[0]),r.a.createElement(de,{onChangeRange:function(e){l([e,a[1]])},value:a[0]})),r.a.createElement("div",null,r.a.createElement("div",null,a[0]),r.a.createElement(ve,{onChangeRange:function(e){l(e)},value:a}),r.a.createElement("div",null,a[1])),r.a.createElement("hr",null),r.a.createElement("hr",null))};var fe=function(){return r.a.createElement("div",null,"JUNIOR",r.a.createElement(Z,null),r.a.createElement(te,null),r.a.createElement(ne,null),r.a.createElement(ie,null),r.a.createElement(he,null))},ge=a(72),be=a.n(ge),_e={color:"hotpink"},Ce="CHANGE_COLOR";var Oe=function(){var e=Object(re.c)((function(e){return e.color})),t=Object(re.b)();return r.a.createElement("div",{style:{backgroundColor:e.color}},r.a.createElement("hr",null),r.a.createElement("span",{className:be.a[e+"-text"]},"homeworks 12"),r.a.createElement(q,{options:["hotpink","white","red","blue","purple","gray","red"],onChangeOption:function(e){t(function(e){return{type:Ce,color:e}}(e))}}),r.a.createElement("hr",null))},ke=a(73),je=a.n(ke),ye=function(e){return je.a.post("https://neko-cafe-back.herokuapp.com/auth/test",{success:e}).then((function(e){return console.log(e.data),e.data})).catch((function(e){return alert(e.response.data.errorText)}))},Ne=function(){var e=Object(n.useState)(!1),t=Object(g.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),o=Object(g.a)(c,2),u=o[0],i=o[1];return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){ye(a).then((function(e){return alert(e.errorText)})).catch((function(){return i(!0)}))}},"x"),r.a.createElement("input",{type:"checkbox",checked:a,onChange:function(e){i(!1),l(e.currentTarget.checked)}}),u?r.a.createElement("div",null,"Error captured!"):"")},xe=function(){return r.a.createElement("div",null,r.a.createElement(Ne,null))};var we=function(){return r.a.createElement("div",null,"JUNIORplus",r.a.createElement(Oe,null),r.a.createElement(xe,null))};var Se=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},Ie="/pre-junior",Te="/junior",Ae="/junior+";var He=function(){return r.a.createElement("div",null,r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",element:r.a.createElement(i.a,{to:Ie})}),r.a.createElement(i.b,{path:Ie,element:r.a.createElement(z,null)}),r.a.createElement(i.b,{path:Te,element:r.a.createElement(fe,null)}),r.a.createElement(i.b,{path:Ae,element:r.a.createElement(we,null)}),r.a.createElement(i.b,{element:r.a.createElement(Se,null)})))},Me=a(27),Re=a(36),Fe=a.n(Re);var We=function(){return r.a.createElement("div",{className:Fe.a.slide},r.a.createElement(Me.b,{to:Ie,className:function(e){return e.isActive?Fe.a.active:""}},"PRE_JUNIOR"),r.a.createElement(Me.b,{to:Te,className:function(e){return e.isActive?Fe.a.active:""}},"JUNIOR"),r.a.createElement(Me.b,{to:Ae,className:function(e){return e.isActive?Fe.a.active:""}},"JUNIORplus"),r.a.createElement("span",null,"show me)"))};var Je=function(){return r.a.createElement("div",null,r.a.createElement(Me.a,null,r.a.createElement(We,null),r.a.createElement(He,null)))};var Ue=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(Je,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Pe=a(54),Be=Object(Pe.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ce:return Object($.a)({},e,{loading:t.loading});default:return e}},color:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ce:return Object($.a)({},e,{color:t.color});default:return e}}}),Le=Object(Pe.b)(Be),Ge=Le;window.store=Le,c.a.render(r.a.createElement(re.a,{store:Ge},r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ue,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},24:function(e,t,a){e.exports={allmessage:"Message_allmessage__3Pxck",avatar:"Message_avatar__3FT3j",m:"Message_m__1l1rM",s:"Message_s__-M9uK",name:"Message_name__Tzmp0",message:"Message_message__8WR15",time:"Message_time__HOFTG"}},36:function(e,t,a){e.exports={slide:"Header_slide__1o2OI",active:"Header_active__1dmn0"}},45:function(e,t,a){e.exports={superInput:"SuperInputText_superInput__3XH9u",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S",superSpan:"SuperInputText_superSpan__dp2Iu"}},51:function(e,t,a){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",testSpanError:"HW4_testSpanError___Mj8X"}},52:function(e,t,a){e.exports={default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_"}},53:function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch"}},64:function(e,t,a){e.exports={App:"App_App__1Sc4o"}},68:function(e,t,a){e.exports={someClass:"Greeting_someClass__uGflL",error:"Greeting_error__1uvQ8"}},71:function(e,t,a){e.exports={range:"SuperRange_range__2K0wQ"}},72:function(e,t,a){e.exports={dark:"HW12_dark__-yEnK","dark-text":"HW12_dark-text__3aY9r",red:"HW12_red__b8fxn","red-text":"HW12_red-text__Xlm6C",some:"HW12_some__2eRaq","some-text":"HW12_some-text__1-Wyv"}},81:function(e,t,a){e.exports=a(111)},86:function(e,t,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.75e2f2ac.chunk.js.map