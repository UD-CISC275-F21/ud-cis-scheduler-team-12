(this["webpackJsonpfinal-project-starter"]=this["webpackJsonpfinal-project-starter"]||[]).push([[0],{110:function(e,t,n){},124:function(e,t,n){},125:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){},131:function(e,t,n){},133:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(23),s=n.n(i),a=(n(110),n(8)),o=(n(94),{1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[]}),l=[{name:"Fall 1",value:1},{name:"Spring 1",value:2},{name:"Fall 2",value:3},{name:"Spring 2",value:4},{name:"Fall 3",value:5},{name:"Spring 3",value:6},{name:"Fall 4",value:7},{name:"Spring 4",value:8}],d=n(9),u=n(3),j=[{id:0,name:"CISC 100",timeStart:1200,timeEnd:1300,schedule:"MWF",description:"This is Computer Science 100, section 10.",credits:3,preReq:{},preReqCheck:"black"},{id:1,name:"CISC 200",timeStart:1400,timeEnd:1500,schedule:"MWF",description:"This is Computer Science 200, section 10.",credits:4,preReq:{"CISC 100":!1},preReqCheck:"black"},{id:2,name:"CISC 300",timeStart:1200,timeEnd:1300,schedule:"TR",description:"This is Computer Science 300, section 10.",credits:3,preReq:{"CISC 200":!1,"MATH 100":!1},preReqCheck:"black"},{id:3,name:"MATH 100",timeStart:1530,timeEnd:1630,schedule:"MWF",description:"This is Mathematics 100, section 10.",credits:3,preReq:{},preReqCheck:"black"},{id:4,name:"MATH 200",timeStart:1330,timeEnd:1430,schedule:"TR",description:"This is Mathematics 200, section 10.",credits:3,preReq:{"MATH 100":!1},preReqCheck:"black"},{id:5,name:"ENGL 100",timeStart:1700,timeEnd:1800,schedule:"MWF",description:"This is English 100, section 10.",credits:3,preReq:{},preReqCheck:"black"},{id:6,name:"CPEG 100",timeStart:1700,timeEnd:1800,schedule:"TR",description:"This is Computer Engineering 100, section 10.",credits:3,preReq:{},preReqCheck:"black"},{id:7,name:"CPEG 200",timeStart:1100,timeEnd:1230,schedule:"TR",description:"This is Computer Engineering 200, section 10.",credits:4,preReq:{"CPEG 100":!1,"MATH 100":!1},preReqCheck:"black"},{id:8,name:"CPEG 300",timeStart:900,timeEnd:955,schedule:"MWF",description:"This is Computer Engineering 300, section 10.",credits:4,preReq:{"CPEG 200":!1,"MATH 100":!1},preReqCheck:"black"},{id:9,name:"CPEG 400",timeStart:1600,timeEnd:1730,schedule:"TR",description:"This is Computer Engineering 400, section 10.",credits:3,preReq:{"CPEG 300":!1,"MATH 200":!1},preReqCheck:"black"},{id:10,name:"MATH 300",timeStart:1100,timeEnd:1230,schedule:"TR",description:"This is Mathematics 300, section 10.",credits:3,preReq:{"MATH 200":!1},preReqCheck:"black"},{id:11,name:"MATH 400",timeStart:1300,timeEnd:1355,schedule:"MWF",description:"This is Mathematics 400, section 10.",credits:3,preReq:{"MATH 300":!1},preReqCheck:"black"},{id:12,name:"CPEG 355",timeStart:1100,timeEnd:1230,schedule:"TR",description:"This is Computer Engineering 355, section 10.",credits:4,preReq:{"CPEG 300":!1,"CISC 200":!1},preReqCheck:"black"},{id:13,name:"CISC 400",timeStart:1e3,timeEnd:1055,schedule:"MWF",description:"This is Computer Science 400, section 10.",credits:3,preReq:{"CISC 300":!1},preReqCheck:"black"},{id:14,name:"ENGL 200",timeStart:1100,timeEnd:1230,schedule:"TR",description:"This is English 200, section 10.",credits:3,preReq:{"ENGL 100":!1},preReqCheck:"black"},{id:15,name:"ENGL 300",timeStart:1300,timeEnd:1355,schedule:"MWF",description:"This is English 300, section 10.",credits:3,preReq:{"ENGL 200":!1},preReqCheck:"black"},{id:16,name:"ENGL 400",timeStart:1530,timeEnd:1625,schedule:"MWF",description:"This is English 400, section 10.",credits:3,preReq:{"ENGL 300":!1},preReqCheck:"black"},{id:17,name:"HIST 100",timeStart:1e3,timeEnd:1130,schedule:"TR",description:"This is History 100, section 10.",credits:3,preReq:{},preReqCheck:"black"},{id:18,name:"PHYS 100",timeStart:1300,timeEnd:1430,schedule:"TR",description:"This is Physics 100, section 10.",credits:4,preReq:{},preReqCheck:"black"},{id:19,name:"PHYS 200",timeStart:1100,timeEnd:1155,schedule:"MWF",description:"This is Physics 200, section 10.",credits:4,preReq:{"PHYS 100":!1,"MATH 200":!1},preReqCheck:"black"}];function b(e){return e.preReqCheck}function h(e,t){Object.values(j).forEach((function(t){Object.keys(t.preReq).forEach((function(n){n===e.name&&(t.preReq[n]=!1)}))})),Object.keys(t).forEach((function(e){t[e].forEach((function(e){Object.keys(e.preReq).length>0&&(Object.values(e.preReq).every((function(e){return!0===e}))?e.preReqCheck="black":e.preReqCheck="red",b(e))}))}))}var S=n(2);function E(e){var t=e.SET_SEMESTER_MAP,n=e.SEMESTER_MAP,c=e.semesterSelect;return Object(S.jsx)("button",{onClick:function(){Object.values(n[""+c]).forEach((function(e){h(e,n)})),t(Object(u.a)(Object(u.a)({},n),{},Object(d.a)({},""+c,[])))},"data-testid":"btn-clear-semester",children:"Clear Current Semester"})}n(91);function O(e){var t=e.SET_SEMESTER_MAP,n=e.SEMESTER_MAP;return Object(S.jsx)("button",{style:{margin:"5%"},onClick:function(){for(var e=Object(u.a)({},n),c=0,r=Object.entries(e);c<r.length;c++){var i=Object(a.a)(r[c],1)[0];Object.values(e[i]).forEach((function(e){h(e,n)})),e[i]=[],t(e)}},children:"Clear All Semesters"})}var m=n(150),f=n(99);function p(e){var t=e.buttonList,n=e.SEMESTER_MAP,c=e.buttonToggle,r=e.setSemesterSelect,i=e.setSemesterHeader;function s(e){var t=!1;return n[e].forEach((function(e){"red"===e.preReqCheck&&(t=!0)})),t}return Object(S.jsx)("div",{children:Object(S.jsx)(m.a,{className:"semester-button",name:"options",value:+c,onChange:function(e){r(""+e),i(t[e-1].name)},children:t.map((function(e,t){return Object(S.jsx)(f.a,{"data-testid":"btn-semester",id:"radio-".concat(t),type:"radio",variant:s(""+e.value)?"outline-warning":n[""+e.value].length>0?"outline-success":"outline-danger",name:"radio",value:e.value,children:e.name},t)}))})})}var x=n(20),v=n(152),R=n(144),T=n(140),C=n(141),M=n(100),k=n(148),g=n(104),_=n(151),y=n(146),q=n(147),A=n(54),P=n(12),N=n.n(P),I=n.p+"static/media/spiderman_meme.4235d597.jpeg";function V(e,t,n,c,r){var i=Object(u.a)({},n);(function(e){var t=!1;return Object.values(j).forEach((function(n){n.name.toLowerCase().replace(/\s/g,"")===e.toLowerCase().replace(/\s/g,"")&&(t=!0)})),t})(t)?N.a.fire({title:"Course Already Exists!",text:"".concat(t," already exists. Please enter another course name."),icon:"error",imageUrl:I}):(Object.values(j).forEach((function(n){Object.keys(n.preReq).forEach((function(c){c===t?n.preReq[c]=!0:c===j[e].name&&(n.preReq[c]=!1)})),Object.values(n.preReq).every((function(e){return!0===e}))?n.preReqCheck="black":n.preReqCheck="red",b(n)})),j[e].name=t,c(i),r(!1))}n(93);function B(e){var t=e.course,n=e.SET_SEMESTER_MAP,r=e.SEMESTER_MAP,i=e.semesterSelect,s=Object(c.useState)(!1),o=Object(a.a)(s,2),l=o[0],d=o[1],E=Object(c.useState)(!1),O=Object(a.a)(E,2),m=O[0],f=O[1],p=Object(c.useState)(!1),x=Object(a.a)(p,2),v=x[0],P=x[1];var N=function(e,t){return function(c){c.preventDefault(),c.stopPropagation();var i=c.currentTarget;switch(t){case"name":V(e,i.floatingInput.value,r,n,d);break;case"credits":!function(e,t,n,c,r){var i=Object(u.a)({},n);j[e].credits=+t,c(i),r(!1)}(e,i.floatingInput.value,r,n,P);break;case"description":!function(e,t,n,c,r){var i=Object(u.a)({},n);j[e].description=t,c(i),r(!1)}(e,i.floatingInput.value,r,n,f)}}};return Object(S.jsx)("div",{children:Object(S.jsx)(k.a,{trigger:["hover","focus"],show:!Object.values(t.preReq).every((function(e){return!0===e})),placement:r[""+i].indexOf(t)>2?"bottom":"top",overlay:Object(S.jsxs)(g.a,{className:"popover",id:"tooltip-preReq",children:["Missing: ",Object.keys(t.preReq).filter((function(e){return!1===t.preReq[e]})).map((function(e){return Object(S.jsx)("div",{children:e},e)}))," "]}),children:Object(S.jsxs)(_.a,{className:"card","data-testid":"course-card",style:{width:"100%",color:b(t)},children:[Object(S.jsx)(T.a,{children:Object(S.jsx)(C.a,{children:Object(S.jsxs)(M.a,{children:[Object(S.jsx)(R.a.div,{onClick:function(){return d(!l)},children:Object(S.jsxs)(_.a.Title,{className:"card-title",children:[!l&&t.name,(""===t.name||l)&&Object(S.jsx)(y.a,{onSubmit:N(t.id,"name"),children:Object(S.jsx)(y.a.Control,{style:{color:"black",outline:"0",border:"1px solid #fff",boxShadow:"none",textAlign:"center"},autoFocus:!0,size:"lg",id:"floatingInput",type:"task",placeholder:""===t.name?"Enter Name":t.name})})]})}),Object(S.jsx)("button",{className:"delete-button",onClick:function(){return function(e){var t=Object(u.a)({},r);""===j[e].name?(t[""+i]=t[""+i].filter((function(t){return t!==j[e]})),delete j[e]):h(j[e],r),t[""+i]=t[""+i].filter((function(t){return t!==j[e]})),n(t)}(t.id)},children:Object(S.jsx)(A.b,{})})]})})}),Object(S.jsxs)(_.a.Body,{className:"card-body",children:[Object(S.jsx)(R.a.div,{onClick:function(){return P(!v)},children:Object(S.jsxs)(_.a.Text,{children:["Credits: ",!v&&0!==t.credits&&t.credits,(0===t.credits||v)&&Object(S.jsx)(y.a,{onSubmit:N(t.id,"credits"),children:Object(S.jsx)(y.a.Control,{style:{color:"black",outline:"0",border:"1px solid #fff",boxShadow:"none",textAlign:"center"},autoFocus:!0,size:"sm",id:"floatingInput",type:"task",placeholder:0===t.credits?"Enter Credit Hours":""+t.credits})})]})}),Object(S.jsxs)(_.a.Text,{children:["From: ",t.timeStart," To: ",t.timeEnd]}),Object(S.jsxs)(_.a.Text,{children:["Days: ",t.schedule]}),Object(S.jsx)(M.a,{className:"column-dropdown"}),Object(S.jsx)(M.a,{className:"card-accordion",children:Object(S.jsx)(q.a,{defaultActiveKey:""===t.description?"0":"1",children:Object(S.jsxs)(q.a.Item,{eventKey:"0",children:[Object(S.jsx)(q.a.Header,{onClick:function(){return f(!1)},children:"Details"}),Object(S.jsx)(R.a.div,{onClick:function(){return f(!m)},children:Object(S.jsxs)(q.a.Body,{className:"card-description",children:[!m&&t.description,(""===t.description||m)&&Object(S.jsx)(y.a,{onSubmit:N(t.id,"description"),children:Object(S.jsx)(y.a.Control,{style:{color:"black",outline:"0",border:"1px solid #fff",boxShadow:"none",textAlign:"center"},autoFocus:!0,size:"sm",id:"floatingInput",type:"task",placeholder:""===t.description?"Enter Description":t.description})})]})})]})})})]})]})})})}function w(e,t){switch(t){case"bin":N.a.fire({title:"Duplicate Course!",text:"".concat(j[e].name," is already added to your bin. Please select another course."),icon:"error",imageUrl:I});break;case"semester":N.a.fire({title:"Duplicate Course!",text:"".concat(j[e].name," is already added to this semester. Please select another course."),icon:"error",imageUrl:I});break;case"plan":N.a.fire({title:"Duplicate Course!",text:"".concat(j[e].name," is already added to your plan. Please select another course."),icon:"error",imageUrl:I})}}function L(e){var t=e.SET_SEMESTER_MAP,n=e.SEMESTER_MAP,c=e.semesterSelect,r=e.SET_SAVE_BIN,i=e.SAVE_BIN,s=e.binVisible,a=n[""+c];return Object(S.jsx)("div",{children:Object(S.jsx)(T.a,{"data-testid":"board",children:Object(S.jsx)(C.a,{"data-testid":"board-row-1",xs:1,md:3,children:Object(S.jsx)(v.a,{children:a.map((function(e){return Object(S.jsx)(R.a.div,{drag:!0,dragConstraints:{top:0,bottom:0,right:0,left:0},onDragEnd:function(){return function(e){var a=Object(u.a)({},n);""===j[e].name?(a[""+c]=a[""+c].filter((function(t){return t!==j[e]})),delete j[e]):(s&&(i.includes(j[e])?w(e,"bin"):r([].concat(Object(x.a)(i),[j[e]]))),h(j[e],n)),a[""+c]=a[""+c].filter((function(t){return t!==j[e]})),t(a)}(e.id)},dragElastic:1,initial:{opacity:0,x:180},animate:{opacity:1,x:0},exit:{opacity:0,y:-200,x:180},transition:{ease:"easeInOut",duration:.4},children:Object(S.jsx)(M.a,{children:Object(S.jsx)(B,{course:e,SET_SEMESTER_MAP:t,SEMESTER_MAP:n,semesterSelect:c})})},e.id)}))})})})})}function H(e){var t=e.setSemesterSelect,n=e.semesterSelect,c=e.SET_SEMESTER_MAP,r=e.SEMESTER_MAP,i=e.setSemesterHeader,s=e.semesterHeader,a=e.SET_SAVE_BIN,o=e.SAVE_BIN,l=e.binVisible,d=e.buttonList;return Object(S.jsxs)("div",{"data-testid":"semester-view",children:[Object(S.jsxs)("div",{children:[Object(S.jsxs)("h2",{children:["Semester View - ",s]}),Object(S.jsx)(p,{buttonList:d,SEMESTER_MAP:r,buttonToggle:""+n,setSemesterSelect:t,setSemesterHeader:i})]}),Object(S.jsxs)("div",{children:[Object(S.jsx)(L,{SET_SEMESTER_MAP:c,SEMESTER_MAP:r,SET_SAVE_BIN:a,SAVE_BIN:o,semesterSelect:n,binVisible:l}),Object(S.jsxs)("div",{children:[Object(S.jsx)("div",{children:r[""+n].length>0&&Object(S.jsx)(E,{SET_SEMESTER_MAP:c,SEMESTER_MAP:r,semesterSelect:n})}),Object(S.jsx)("div",{children:Object(S.jsx)(O,{SET_SEMESTER_MAP:c,SEMESTER_MAP:r})})]})]})]})}var D=n(142),F=n(105);function G(e,t,n){return n[""+t].includes(j[e])}function W(e,t){var n=!1;return Object.keys(t).forEach((function(c){t[c].forEach((function(t){t.id===e&&(n=!0)}))})),n}n(124);function K(e){var t=e.setQuery;return Object(S.jsx)("div",{children:Object(S.jsx)("input",{className:"form__field","data-testid":"search-bar",placeholder:"Enter Course",onChange:function(e){return t(e.target.value)}})})}n(125);function U(){N.a.fire("Pre-Req Error!","Warning: Pre-Reqs not met \ud83e\udd14.","error")}function Y(){N.a.fire("Getting Studious!","Warning: Max number of courses selected for semester \ud83d\udcda.","error")}function J(e){var t=e.SET_SEMESTER_MAP,n=e.SEMESTER_MAP,r=e.semesterSelect,i=e.setBinVisible,s=e.binVisible,o=e.SET_SAVE_BIN,l=e.SAVE_BIN,d=Object(c.useState)(""),h=Object(a.a)(d,2),E=h[0],O=h[1];function m(e){var c=Object(u.a)({},n),i=G(e,r,n),a=W(e,n);s?l.includes(j[e])?w(e,"bin"):o([].concat(Object(x.a)(l),[j[e]])):i||a?w(e,i?"semester":"plan"):(Object.keys(j[e].preReq).length>0&&(Object.values(j[e].preReq).every((function(e){return!0===e}))?j[e].preReqCheck="black":(U(),j[e].preReqCheck="red"),b(j[e])),6===n[""+r].length?Y():(Object.values(j).forEach((function(t){Object.keys(t.preReq).forEach((function(n){n===j[e].name&&(t.preReq[n]=!0)}))})),c[""+r].push(j[e]),t(c)),Object.keys(n).forEach((function(e){n[e].forEach((function(e){Object.keys(e.preReq).length>0&&(Object.values(e.preReq).every((function(e){return!0===e}))?e.preReqCheck="black":e.preReqCheck="red",b(e))}))})))}return Object(S.jsxs)("div",{children:[Object(S.jsx)("div",{className:"menu-button",children:Object(S.jsxs)(D.a,{id:"dropdown-basic-button",title:"Course Options",children:[Object(S.jsx)(F.a.Item,{as:"button",onClick:function(){i(!s)},children:"Save Later Bin"}),Object(S.jsx)(F.a.Item,{as:"button",onClick:function(){return function(){var e=Object(u.a)({},n);j.push({id:j.length,name:"",timeStart:1300,timeEnd:1400,schedule:"MWF",description:"",credits:0,preReq:{},preReqCheck:"black"}),m(j[j.length-1].id),t(e)}()},children:"Create New Course"})]})}),Object(S.jsx)(K,{setQuery:O}),Object(S.jsx)("ul",{className:"list-group",children:j.filter((function(e){return""===E||e.name.toLowerCase().includes(E.toLowerCase())?e:void 0})).map((function(e){return Object(S.jsx)(R.a.div,{drag:!0,dragConstraints:{top:0,bottom:0,right:0,left:0},onDragEnd:function(){return m(e.id)},dragElastic:1,initial:{opacity:0,x:180},animate:{opacity:1,x:0},transition:{ease:"easeInOut",duration:1},children:Object(S.jsxs)("li",{className:"course",children:[e.name,Object(S.jsx)("button",{className:"add-button","data-testid":e.name,onClick:function(){return m(e.id)},children:Object(S.jsx)(A.a,{})}),Object.keys(e.preReq).length>0&&Object(S.jsxs)(M.a,{className:"prereq-accordion",children:[Object(S.jsx)(q.a,{flush:!0,children:Object(S.jsxs)(q.a.Item,{eventKey:"0",children:[Object(S.jsx)(q.a.Header,{children:"Prerequisites"}),Object(S.jsx)(q.a.Body,{children:Object.keys(e.preReq).map((function(e){return Object(S.jsx)("div",{children:e},e)}))})]})}),Object(S.jsx)("p",{})]})]},e.id)},e.id)}))})]})}var z=n(149);function Q(e){var t=e.setVisibleView;return Object(S.jsxs)(z.a,{justify:!0,variant:"pills",className:"flex-column",defaultActiveKey:"2",onSelect:function(e){return t(e)},children:[Object(S.jsx)(z.a.Item,{children:Object(S.jsx)(z.a.Link,{eventKey:"2",children:"Semester View"})}),Object(S.jsx)(z.a.Item,{children:Object(S.jsx)(z.a.Link,{"data-testid":"degree-view-nav",eventKey:"3",children:"Degree Plan View"})})]})}var X={1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1},Z=n(143),$=n(103),ee=n(60);var te=function(e){var t=e.SET_SEMESTER_MAP,n=e.SEMESTER_MAP,c=e.courseList,r=e.setSemesterSelect,i=e.semesterSelect,s=e.setSemesterHeader,a=e.SET_SELECT_MAP,o=e.SELECT_MAP,l=e.buttonList,b=""+i;function E(e){var t=Object(u.a)({},o);Object.keys(t).forEach((function(n){t[+n]=n===e,a(t)})),r(e),s(l[+e-1].name)}function O(e){var c=Object(u.a)({},n);""===j[e].name?(c[""+i]=c[""+i].filter((function(t){return t!==j[e]})),delete j[e]):h(j[e],n),c[""+i]=c[""+i].filter((function(t){return t!==j[e]})),t(c),r(i)}return Object(S.jsx)("div",{children:Object(S.jsxs)(_.a,{className:"card",style:{width:"100%"},children:[Object(S.jsx)("button",{className:"delete-button",onClick:function(){var e=Object(u.a)({},n);Object.values(e[""+i]).forEach((function(e){O(e.id)})),t(Object(u.a)(Object(u.a)({},e),{},Object(d.a)({},""+i,[])))},children:Object(S.jsx)($.a,{})}),!o[+b]&&Object(S.jsx)("button",{className:"select-button-off","data-testid":"select-button",onClick:function(){return E(""+i)},children:Object(S.jsx)(ee.c,{})}),o[+b]&&Object(S.jsx)("button",{className:"select-button-on",onClick:function(){return E(""+i)},children:Object(S.jsx)(ee.b,{})}),Object(S.jsx)(_.a.Body,{className:"card-body",children:Object(S.jsxs)(Z.a,{children:[Object(S.jsxs)("thead",{children:[Object(S.jsx)("th",{className:"semester-title",children:l[+b-1].name}),Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{children:"Course"}),Object(S.jsx)("th",{scope:"col",children:"Credit(s)"})]})]}),Object(S.jsxs)("tbody",{"data-testid":"semester-table",children:[c.map((function(e,t){return Object(S.jsxs)("tr",{"data-testid":"semester-comp-card",children:[Object(S.jsx)(k.a,{trigger:["hover","focus"],show:!Object.values(e.preReq).every((function(e){return!0===e})),placement:n[""+i].indexOf(e)>2?"bottom":"top",overlay:Object(S.jsxs)(g.a,{className:"popover",id:"tooltip-preReq",children:["Missing: ",Object.keys(e.preReq).filter((function(t){return!1===e.preReq[t]})).map((function(e){return Object(S.jsx)("div",{children:e},e)}))," "]}),children:Object(S.jsx)("th",{style:{color:e.preReqCheck},children:e.name})}),Object(S.jsx)("td",{children:e.credits}),Object(S.jsx)("button",{className:"delete-course",onClick:function(){return O(e.id)},children:Object(S.jsx)(ee.a,{})})]},t)})),Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{children:"Total Credits: "}),Object(S.jsx)("td",{children:Object.values(c).reduce((function(e,t){return e+t.credits}),0)})]})]})]})})]})})};n(128);var ne=function(e){var t=e.SET_SEMESTER_MAP,n=e.SEMESTER_MAP,r=e.setSemesterSelect,i=e.setSemesterHeader,s=e.buttonList,o=Object(c.useState)(X),l=Object(a.a)(o,2),d=l[0],j=l[1],b=Object(u.a)({},n);return Object(S.jsxs)("div",{children:[Object(S.jsx)("h2",{children:"Degree Plan View"}),Object(S.jsx)("div",{"data-testid":"degree-view",children:Object(S.jsx)(T.a,{children:Object(S.jsx)(C.a,{xs:2,md:2,children:Object.entries(b).map((function(e){var c=Object(a.a)(e,2),o=c[0],l=c[1];return Object(S.jsx)(M.a,{children:Object(S.jsx)(te,{SET_SEMESTER_MAP:t,SEMESTER_MAP:n,courseList:l,setSemesterSelect:r,semesterSelect:o,setSemesterHeader:i,SET_SELECT_MAP:j,SELECT_MAP:d,buttonList:s})},o)}))})})}),Object(S.jsx)("div",{children:Object(S.jsx)(O,{SET_SEMESTER_MAP:t,SEMESTER_MAP:n})})]})},ce=n(145);var re=function(e,t,n){t(n.filter((function(t){return t!==j[e]})))};function ie(e){var t=e.course,n=e.SET_SAVE_BIN,c=e.SAVE_BIN;return Object(S.jsx)("div",{children:Object(S.jsxs)(_.a,{className:"card",style:{width:"19rem"},children:[Object(S.jsx)(T.a,{children:Object(S.jsxs)(C.a,{children:[Object(S.jsx)(M.a,{children:Object(S.jsx)(_.a.Title,{children:t.name})}),Object(S.jsx)(M.a,{children:Object(S.jsx)("button",{className:"delete-button",onClick:function(){return e=t.id,void n(c.filter((function(t){return t!==j[e]})));var e},children:Object(S.jsx)(A.b,{})})})]})}),Object(S.jsxs)(_.a.Body,{className:"card-body",children:[Object(S.jsxs)(_.a.Text,{children:["Credits: ",t.credits]}),Object(S.jsxs)(_.a.Text,{children:["From: ",t.timeStart," To: ",t.timeEnd]}),Object(S.jsxs)(_.a.Text,{children:["Days: ",t.schedule]}),Object(S.jsx)(M.a,{className:"column-dropdown"}),Object(S.jsx)(M.a,{className:"card-accordion",children:Object(S.jsx)(q.a,{children:Object(S.jsxs)(q.a.Item,{eventKey:"0",children:[Object(S.jsx)(q.a.Header,{children:"Details"}),Object(S.jsxs)(q.a.Body,{children:["Course description: ",t.description]})]})})})]})]})})}function se(e){var t=e.SET_SAVE_BIN;return Object(S.jsx)("button",{onClick:function(){t([])},children:"Clear Bin"})}n(129);function ae(e){var t=e.setBinVisible,n=e.binVisible,c=e.SET_SAVE_BIN,r=e.SAVE_BIN,i=e.SET_SEMESTER_MAP,s=e.SEMESTER_MAP,a=e.semesterSelect,o=r;return Object(S.jsx)("div",{children:Object(S.jsxs)(ce.a,{className:"bin",show:n,onHide:function(){return t(!1)},placement:"bottom",scroll:!0,backdrop:!1,children:[Object(S.jsx)(ce.a.Header,{closeButton:!0,children:Object(S.jsx)(ce.a.Title,{children:"Save For Later"})}),Object(S.jsxs)(ce.a.Body,{className:"bin-body",children:[Object(S.jsx)(se,{SET_SAVE_BIN:c}),Object(S.jsx)(T.a,{children:Object(S.jsx)(C.a,{xs:1,md:3,children:Object(S.jsx)(v.a,{children:o.map((function(e){return Object(S.jsx)(R.a.div,{drag:!0,dragConstraints:{top:0,bottom:0,right:0,left:0},onDragEnd:function(){return function(e){var t=Object(u.a)({},s),n=G(e,a,s),o=W(e,s);n||o?w(e,n?"semester":"plan"):(Object.keys(j[e].preReq).length>0&&(Object.values(j[e].preReq).every((function(e){return!0===e}))?j[e].preReqCheck="black":(U(),j[e].preReqCheck="red"),b(j[e])),6===s[""+a].length?Y():(Object.values(j).forEach((function(t){Object.keys(t.preReq).forEach((function(n){n===j[e].name&&(t.preReq[n]=!0)}))})),t[""+a].push(j[e]),i(t),re(e,c,r)),Object.keys(s).forEach((function(e){s[e].forEach((function(e){Object.keys(e.preReq).length>0&&(Object.values(e.preReq).every((function(e){return!0===e}))?e.preReqCheck="black":e.preReqCheck="red",b(e))}))})))}(e.id)},dragElastic:1,initial:{opacity:0,x:180},animate:{opacity:1,x:0},exit:{opacity:0,y:-200,x:180},transition:{ease:"easeInOut",duration:.4},children:Object(S.jsx)(M.a,{children:Object(S.jsx)(ie,{course:e,SET_SAVE_BIN:c,SAVE_BIN:r})})},e.id)}))})})})]})]})})}function oe(e){var t=e.SEMESTER_MAP;function n(){(function(){var e=!1;return Object.keys(t).forEach((function(n){t[n].forEach((function(t){"red"===t.preReqCheck&&(e=!0)}))})),e})()?N.a.fire("Save Error","Error: Cannot save plan due to existing preReq error \ud83e\uddd0.","error"):N.a.fire({title:"Give your saved plan a name!",text:"Name:",input:"text",showCancelButton:!0}).then((function(e){e.value?(localStorage.setItem(e.value,JSON.stringify(t)),N.a.fire("Saved!","".concat(e.value," is now saved \ud83d\ude80."),"success")):N.a.fire("Canceled Save","You did not save your plan \ud83d\ude05.","info")}))}return Object(S.jsx)("button",{onClick:function(){return n()},children:"Save Semester"})}function le(e){var t=e,n="";return e%2!==0?(t=(e+1)/2,n="Fall"):(t=e/2,n="Spring"),"".concat(n," ").concat(t)}function de(){return Object(S.jsx)("button",{onClick:function(){N.a.fire({title:"Are you sure you want to delete all of your saved semesters?",showDenyButton:!0,confirmButtonText:"Delete All Saves",denyButtonText:"Don't delete All Saves",icon:"warning"}).then((function(e){e.isConfirmed?(localStorage.clear(),console.log(localStorage),N.a.fire("All Saved Semesters Deleted \ud83d\ude01!","","success")):e.isDenied&&N.a.fire("Semesters are not Deleted \ud83d\ude2e\u200d\ud83d\udca8.","","info")}))},children:"Clear All Saved Semesters"})}function ue(e){var t=e.SET_SEMESTER_MAP,n=e.SEMESTER_MAP,c=e.setSemesterCount,r=e.semesterCount,i=e.setButtonList,s=e.buttonList,o=e.setSelectedSave;function l(e){!function(){for(var e=Object(u.a)({},n),c=function(){var t=Object(a.a)(i[r],1)[0];Object.values(e[t]).forEach((function(c){h(c,n),e[t].pop()})),e[t]=[]},r=0,i=Object.entries(e);r<i.length;r++)c();t(e)}();var l=localStorage.getItem(e);!function(e){var o=Object.keys(e).length,l=r-1,d=[];if(l<o){for(var h=l;h<o;h++)d.push(h+1);!function(e,c){var r=Object(u.a)({},n);e.forEach((function(e){s.push({name:le(e),value:e}),r[""+e]=[],Object.keys(r).forEach((function(e){Object.keys(c).forEach((function(t){""+e===t&&Object.values(c[t]).forEach((function(t){r[e].includes(t)||function(e,t,n){Object.keys(j[e.id].preReq).length>0&&(console.log(j[e.id].preReq),Object.values(j[e.id].preReq).every((function(e){return!0===e}))?j[e.id].preReqCheck="black":j[e.id].preReqCheck="red",b(j[e.id]));n[t].push(e);for(var c=0,r=Object.entries(n);c<r.length;c++){var i=Object(a.a)(r[c],2),s=i[0],o=i[1];console.log([s,o]),n[s].forEach((function(e){Object.keys(e.preReq).length>0&&(Object.values(e.preReq).every((function(e){return!0===e}))?e.preReqCheck="black":e.preReqCheck="red",b(e))}))}}(t,e,r)}))}))}))})),i(s),t(r)}(d,e),c(o+1)}else!function(e){Object.keys(e).forEach((function(c){Object.values(e[c]).forEach((function(e){!function(e,c){var r=Object(u.a)({},n);Object.keys(j[e].preReq).length>0&&(console.log(j[e].preReq),Object.values(j[e].preReq).every((function(e){return!0===e}))?j[e].preReqCheck="black":(U(),j[e].preReqCheck="red"),b(j[e]));if(6===n[c].length)Y();else{for(var i=function(){var t=Object(a.a)(o[s],2),n=t[0],c=t[1];console.log([n,c]),Object.keys(c.preReq).forEach((function(t){t===j[e].name&&(console.log(t),c.preReq[t]=!0)}))},s=0,o=Object.entries(j);s<o.length;s++)i();r[c].push(j[e]),t(r)}for(var l=0,d=Object.entries(n);l<d.length;l++){var h=Object(a.a)(d[l],2),S=h[0],E=h[1];console.log([S,E]),n[S].forEach((function(e){Object.keys(e.preReq).length>0&&(Object.values(e.preReq).every((function(e){return!0===e}))?e.preReqCheck="black":e.preReqCheck="red",b(e))}))}}(e.id,c)}))}))}(e)}(JSON.parse(""+l)),o(e)}return Object(S.jsxs)(F.a,{children:[Object(S.jsx)(F.a.Toggle,{variant:"success",id:"dropdown-basic",children:"Saved Semesters"}),Object(S.jsxs)(F.a.Menu,{children:[Object.keys(localStorage).map((function(e){return Object(S.jsxs)("div",{style:{display:"inline-flex"},children:[Object(S.jsx)(F.a.Item,{onClick:function(){return l(e)},children:e}),Object(S.jsx)("button",{onClick:function(){return function(e){N.a.fire({title:'Are you sure you want to delete "'.concat(e,'"?'),showDenyButton:!0,confirmButtonText:'Delete "'.concat(e,'"'),denyButtonText:"Don't delete",icon:"warning"}).then((function(t){t.isConfirmed?(localStorage.removeItem(e),N.a.fire('"'.concat(e,'" Deleted \ud83d\ude01!'),"","success")):t.isDenied&&N.a.fire('"'.concat(e,'" was not Deleted \ud83d\ude2e\u200d\ud83d\udca8.'),"","info")}))}(e)},children:Object(S.jsx)(ee.a,{})})]},e)})),Object(S.jsx)(de,{})]})]})}n(98);function je(e){var t=e.SET_SEMESTER_MAP,n=e.SEMESTER_MAP,c=e.setSemesterCount,r=e.semesterCount,i=e.setButtonList,s=e.buttonList;return Object(S.jsx)("button",{className:"add_button","data-testid":"btn-add-semester",onClick:function(){return function(){var e=r,a=Object(u.a)({},n);s.push({name:le(r),value:r}),i(s),a[""+r]=[],t(a),e++,c(e)}()},children:"Add Semester"})}function be(e){var t=e.SET_SEMESTER_MAP,n=e.SEMESTER_MAP,c=e.setSemesterCount,r=e.semesterCount,i=e.setButtonList,s=e.buttonList,a=e.setSemesterSelect,o=e.setSemesterHeader;function l(){var e=r,l=Object(u.a)({},n);2===e?N.a.fire("Invalid Operation!","Cannot remove any more semesters \ud83d\ude05.","warning"):(a("1"),o(s[0].name),Object.values(n[r-1]).forEach((function(e){h(e,n)})),t(Object(u.a)(Object(u.a)({},n),{},Object(d.a)({},r-1,[]))),s.pop(),i(s),delete l[r-1],t(l),e--,c(e))}return Object(S.jsx)("button",{className:"remove_button","data-testid":"btn-remove-semester",onClick:function(){return l()},children:"Remove Semester"})}n(130);function he(e){var t=e.selectedSave;return Object(S.jsx)("h3",{className:"save-header",children:t})}var Se=function(e){var t=e.visibleView,n=e.setVisibleView,r=Object(c.useState)("1"),i=Object(a.a)(r,2),s=i[0],d=i[1],u=Object(c.useState)("Fall 1"),j=Object(a.a)(u,2),b=j[0],h=j[1],E=Object(c.useState)("No Save Selected"),O=Object(a.a)(E,2),m=O[0],f=O[1],p=Object(c.useState)(!1),x=Object(a.a)(p,2),v=x[0],R=x[1],T=Object(c.useState)([]),C=Object(a.a)(T,2),M=C[0],k=C[1],g=Object(c.useState)(9),_=Object(a.a)(g,2),y=_[0],q=_[1],A=Object(c.useState)(l),P=Object(a.a)(A,2),N=P[0],I=P[1],V=Object(c.useState)(o),B=Object(a.a)(V,2),w=B[0],L=B[1];return Object(S.jsxs)("div",{className:"App",children:[Object(S.jsxs)("header",{className:"App-header",children:["UD CIS Scheduler",Object(S.jsx)("p",{children:"Srinath Venkatesh, Elliot Tingey, Geoffrey Linderman"}),Object(S.jsx)(oe,{SEMESTER_MAP:w}),localStorage.length>0&&Object(S.jsxs)("div",{children:[Object(S.jsx)(ue,{SET_SEMESTER_MAP:L,SEMESTER_MAP:w,setSemesterCount:q,semesterCount:y,setButtonList:I,buttonList:N,setSelectedSave:f}),Object(S.jsx)(he,{selectedSave:m})]})]}),Object(S.jsxs)("section",{className:"cell-left",children:[Object(S.jsx)("p",{children:"Menu"}),Object(S.jsx)(Q,{setVisibleView:n})]}),Object(S.jsxs)("section",{className:"cell-main",children:[Object(S.jsx)(be,{setSemesterSelect:d,setSemesterHeader:h,SET_SEMESTER_MAP:L,SEMESTER_MAP:w,setSemesterCount:q,semesterCount:y,setButtonList:I,buttonList:N}),Object(S.jsx)(je,{SET_SEMESTER_MAP:L,SEMESTER_MAP:w,setSemesterCount:q,semesterCount:y,setButtonList:I,buttonList:N}),"2"===t&&Object(S.jsx)(H,{semesterHeader:b,setSemesterHeader:h,setSemesterSelect:d,semesterSelect:s,SET_SEMESTER_MAP:L,SEMESTER_MAP:w,SET_SAVE_BIN:k,SAVE_BIN:M,binVisible:v,buttonList:N}),"3"===t&&Object(S.jsx)(ne,{SET_SEMESTER_MAP:L,SEMESTER_MAP:w,setSemesterSelect:d,setSemesterHeader:h,buttonList:N})]}),Object(S.jsx)("section",{className:"cell-right",children:("2"===t||"3"===t)&&Object(S.jsx)(J,{SET_SEMESTER_MAP:L,SEMESTER_MAP:w,semesterSelect:s,setBinVisible:R,binVisible:v,SET_SAVE_BIN:k,SAVE_BIN:M})}),Object(S.jsx)(ae,{setBinVisible:R,binVisible:v,SET_SAVE_BIN:k,SAVE_BIN:M,SET_SEMESTER_MAP:L,SEMESTER_MAP:w,semesterSelect:s})]})};n(131);function Ee(e){var t=e.setVisibleView;return Object(S.jsx)("div",{className:"home",children:Object(S.jsxs)("div",{className:"centered",children:[Object(S.jsx)("h1",{children:"UD CIS Scheduler"}),Object(S.jsx)("h2",{children:"Start Building Your Plan"}),Object(S.jsx)("button",{"data-testid":"enter-main",onClick:function(){t("2")},children:"Enter"})]})})}var Oe=function(){var e=Object(c.useState)("0"),t=Object(a.a)(e,2),n=t[0],r=t[1];return Object(S.jsx)("div",{children:"0"===n?Object(S.jsx)(Ee,{setVisibleView:r}):Object(S.jsx)(Se,{setVisibleView:r,visibleView:n})})},me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,153)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))};n(132);s.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(Oe,{})}),document.getElementById("root")),me()},91:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},98:function(e,t,n){}},[[133,1,2]]]);
//# sourceMappingURL=main.f470570e.chunk.js.map