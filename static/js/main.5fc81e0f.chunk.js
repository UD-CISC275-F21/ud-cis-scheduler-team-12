(this["webpackJsonpfinal-project-starter"]=this["webpackJsonpfinal-project-starter"]||[]).push([[0],{106:function(e,t,c){},110:function(e,t,c){},111:function(e,t,c){},112:function(e,t,c){},115:function(e,t,c){},117:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(22),r=c.n(i),a=(c(106),c(5)),l=(c(92),c(19)),o=c(4),j=c(135),d=c(97),b=c(124),u=c(125),h=c(126),O=c(132),m=c(100),E=c(134),S=c(131),x=(c(91),[{id:0,name:"CISC 100",timeStart:1200,timeEnd:1300,schedule:"MWF",description:"This is Computer Science 100, section 10.",credits:3,preReq:{},preReqCheck:"black"},{id:1,name:"CISC 200",timeStart:1400,timeEnd:1500,schedule:"MWF",description:"This is Computer Science 200, section 10.",credits:4,preReq:{"CISC 100":!1},preReqCheck:"black"},{id:2,name:"CISC 300",timeStart:1200,timeEnd:1300,schedule:"TR",description:"This is Computer Science 300, section 10.",credits:3,preReq:{"CISC 200":!1,"MATH 100":!1},preReqCheck:"black"},{id:3,name:"MATH 100",timeStart:1530,timeEnd:1630,schedule:"MWF",description:"This is Mathematics 100, section 10.",credits:3,preReq:{},preReqCheck:"black"},{id:4,name:"MATH 200",timeStart:1330,timeEnd:1430,schedule:"TR",description:"This is Mathematics 200, section 10.",credits:3,preReq:{"MATH 100":!1},preReqCheck:"black"},{id:5,name:"ENGL 100",timeStart:1700,timeEnd:1800,schedule:"MWF",description:"This is English 100, section 10.",credits:3,preReq:{},preReqCheck:"black"},{id:6,name:"CPEG 100",timeStart:1700,timeEnd:1800,schedule:"TR",description:"This is Computer Engineering 100, section 10.",credits:3,preReq:{},preReqCheck:"black"},{id:7,name:"CPEG 200",timeStart:1100,timeEnd:1230,schedule:"TR",description:"This is Computer Engineering 200, section 10.",credits:4,preReq:{"CPEG 100":!1,"MATH 100":!1},preReqCheck:"black"},{id:8,name:"CPEG 300",timeStart:900,timeEnd:955,schedule:"MWF",description:"This is Computer Engineering 300, section 10.",credits:4,preReq:{"CPEG 200":!1,"MATH 100":!1},preReqCheck:"black"},{id:9,name:"CPEG 400",timeStart:1600,timeEnd:1730,schedule:"TR",description:"This is Computer Engineering 400, section 10.",credits:3,preReq:{"CPEG 300":!1,"MATH 200":!1},preReqCheck:"black"},{id:10,name:"MATH 300",timeStart:1100,timeEnd:1230,schedule:"TR",description:"This is Mathematics 300, section 10.",credits:3,preReq:{"MATH 200":!1},preReqCheck:"black"},{id:11,name:"MATH 400",timeStart:1300,timeEnd:1355,schedule:"MWF",description:"This is Mathematics 400, section 10.",credits:3,preReq:{"MATH 300":!1},preReqCheck:"black"},{id:12,name:"CPEG 355",timeStart:1100,timeEnd:1230,schedule:"TR",description:"This is Computer Engineering 355, section 10.",credits:4,preReq:{"CPEG 300":!1,"CISC 200":!1},preReqCheck:"black"},{id:13,name:"CISC 400",timeStart:1e3,timeEnd:1055,schedule:"MWF",description:"This is Computer Science 400, section 10.",credits:3,preReq:{"CISC 300":!1},preReqCheck:"black"},{id:14,name:"ENGL 200",timeStart:1100,timeEnd:1230,schedule:"TR",description:"This is English 200, section 10.",credits:3,preReq:{"ENGL 100":!1},preReqCheck:"black"},{id:15,name:"ENGL 300",timeStart:1300,timeEnd:1355,schedule:"MWF",description:"This is English 300, section 10.",credits:3,preReq:{"ENGL 200":!1},preReqCheck:"black"},{id:16,name:"ENGL 400",timeStart:1530,timeEnd:1625,schedule:"MWF",description:"This is English 400, section 10.",credits:3,preReq:{"ENGL 300":!1},preReqCheck:"black"},{id:17,name:"HIST 100",timeStart:1e3,timeEnd:1130,schedule:"TR",description:"This is History 100, section 10.",credits:3,preReq:{},preReqCheck:"black"},{id:18,name:"PHYS 100",timeStart:1300,timeEnd:1430,schedule:"TR",description:"This is Physics 100, section 10.",credits:4,preReq:{},preReqCheck:"black"},{id:19,name:"PHYS 200",timeStart:1100,timeEnd:1155,schedule:"MWF",description:"This is Physics 200, section 10.",credits:4,preReq:{"PHYS 100":!1,"MATH 200":!1},preReqCheck:"black"}]),p=c(62),f=c(35),v=(c(93),c(2));function C(e){var t=e.setInput;return Object(v.jsx)("div",{children:Object(v.jsx)("input",{className:"text_input",type:"description",placeholder:"Enter Description",onChange:function(e){return t(e.target.value)}})})}function T(e){var t=e.setInput;return Object(v.jsx)("div",{children:Object(v.jsx)("input",{className:"text_input",type:"title",placeholder:"Enter Title",onChange:function(e){return t(e.target.value)}})})}function R(e){var t=e.course,c=e.SET_SEMESTER_MAP,s=e.SEMESTER_MAP,i=e.semesterSelect,r=Object(n.useState)(""),l=Object(a.a)(r,2),j=l[0],d=l[1],R=Object(n.useState)(0),M=Object(a.a)(R,2),g=M[0],k=M[1],_=Object(n.useState)(t.description),N=Object(a.a)(_,2),y=N[0],q=N[1],A=Object(n.useState)(t.name),V=Object(a.a)(A,2),P=V[0],I=V[1],B=Object(n.useState)(0),w=Object(a.a)(B,2),H=w[0],F=w[1];function L(e){return e.preReqCheck}return Object(v.jsx)("div",{children:Object(v.jsx)(O.a,{trigger:"hover",show:!Object.values(t.preReq).every((function(e){return!0===e})),placement:s[""+i].indexOf(t)>2?"bottom":"top",overlay:Object(v.jsxs)(m.a,{className:"popover",id:"tooltip-preReq",children:["Missing: ",Object.keys(t.preReq).filter((function(e){return!1===t.preReq[e]})).map((function(e){return Object(v.jsx)("div",{children:e},e)}))," "]}),children:Object(v.jsxs)(E.a,{className:"card",style:{width:"100%",color:L(t)},children:[Object(v.jsx)(b.a,{children:Object(v.jsx)(u.a,{children:Object(v.jsxs)(h.a,{children:[Object(v.jsx)(E.a.Title,{children:P}),1===H&&Object(v.jsx)(T,{setInput:d}),1===H&&Object(v.jsx)("button",{onClick:function(){return I(j),void F(0)},children:"Submit"}),Object(v.jsx)("button",{className:"delete-button",onClick:function(){return function(e){for(var t=Object(o.a)({},s),n=function(){var t=Object(a.a)(l[r],2),c=t[0],n=t[1];console.log([c,n]),Object.keys(n.preReq).forEach((function(t){t===x[e].name&&(console.log(t),n.preReq[t]=!1)}))},r=0,l=Object.entries(x);r<l.length;r++)n();for(var j=0,d=Object.entries(s);j<d.length;j++){var b=Object(a.a)(d[j],2),u=b[0],h=b[1];console.log([u,h]),s[u].forEach((function(e){Object.keys(e.preReq).length>0&&(Object.values(e.preReq).every((function(e){return!0===e}))?e.preReqCheck="black":e.preReqCheck="red",L(e))}))}t[""+i]=t[""+i].filter((function(t){return t!==x[e]})),c(t)}(t.id)},children:Object(v.jsx)(f.b,{})}),Object(v.jsx)("button",{className:"edit-button",onClick:function(){F(1)},children:Object(v.jsx)(p.a,{})})]})})}),Object(v.jsxs)(E.a.Body,{className:"card-body",children:[Object(v.jsxs)(E.a.Text,{children:["Credits: ",t.credits]}),Object(v.jsxs)(E.a.Text,{children:["From: ",t.timeStart," To: ",t.timeEnd]}),Object(v.jsxs)(E.a.Text,{children:["Days: ",t.schedule]}),Object(v.jsx)(h.a,{className:"column-dropdown"}),Object(v.jsx)(h.a,{className:"card-accordion",children:Object(v.jsx)(S.a,{children:Object(v.jsxs)(S.a.Item,{eventKey:"0",children:[Object(v.jsx)(S.a.Header,{children:"Details"}),Object(v.jsxs)(S.a.Body,{children:[y,1===g&&Object(v.jsx)(C,{setInput:d}),0===g&&Object(v.jsx)("button",{className:"edit-desc-button",onClick:function(){k(1)},children:Object(v.jsx)(p.a,{})}),1===g&&Object(v.jsx)("button",{className:"",onClick:function(){return q(j),void k(0)},children:"Enter"})]})]})})})]})]})})})}var M=c(10);function g(e){var t=e.SET_SEMESTER_MAP,c=e.SEMESTER_MAP,n=e.semesterSelect;function s(e){for(var t=function(){var t=Object(a.a)(s[n],2),c=t[0],i=t[1];console.log([c,i]),Object.keys(i.preReq).forEach((function(t){t===e.name&&(console.log(t),i.preReq[t]=!1)}))},n=0,s=Object.entries(x);n<s.length;n++)t();for(var r=0,l=Object.entries(c);r<l.length;r++){var o=Object(a.a)(l[r],2),j=o[0],d=o[1];console.log([j,d]),c[j].forEach((function(e){Object.keys(e.preReq).length>0&&(Object.values(e.preReq).every((function(e){return!0===e}))?e.preReqCheck="black":e.preReqCheck="red",i(e))}))}}function i(e){return e.preReqCheck}return Object(v.jsx)("button",{onClick:function(){for(var e=0,i=Object.entries(c[""+n]);e<i.length;e++){var r=Object(a.a)(i[e],2),l=r[0],j=r[1];console.log(l),s(j)}t(Object(o.a)(Object(o.a)({},c),{},Object(M.a)({},""+n,[])))},children:"Clear All Courses"})}c(110);var k=[{name:"Fall 1",value:1},{name:"Spring 1",value:2},{name:"Fall 2",value:3},{name:"Spring 2",value:4},{name:"Fall 3",value:5},{name:"Spring 3",value:6},{name:"Fall 4",value:7},{name:"Spring 4",value:8}],_=c(136),N=c(129);function y(e){var t=e.setSemesterSelect,c=e.semesterSelect,n=e.SET_SEMESTER_MAP,s=e.SEMESTER_MAP,i=e.setSemesterHeader,r=e.semesterHeader,O=e.SET_SAVE_BIN,m=e.SAVE_BIN,E=e.binVisible,S=s[""+c],p=""+c;function f(e){var t=!1;return s[e].forEach((function(e){"red"===e.preReqCheck&&(t=!0)})),t}return Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{children:[Object(v.jsxs)("h2",{children:["Semester View - ",r]}),Object(v.jsx)(j.a,{className:"semester-button",name:"options",value:+p,onChange:function(e){t(""+e),i(k[e-1].name)},children:k.map((function(e,t){return Object(v.jsx)(d.a,{id:"radio-".concat(t),type:"radio",variant:f(""+e.value)?"outline-warning":s[""+e.value].length>0?"outline-success":"outline-danger",name:"radio",value:e.value,children:e.name},t)}))})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)(b.a,{children:Object(v.jsx)(u.a,{xs:1,md:3,children:Object(v.jsx)(_.a,{children:S.map((function(e){return Object(v.jsx)(N.a.div,{drag:!0,dragConstraints:{top:0,bottom:0,right:0,left:0},onDragEnd:function(){return function(e){var t=Object(o.a)({},s);E&&(m.includes(x[e])?alert("".concat(x[e].name," is already added to your bin. It will now be removed from the semester.")):O([].concat(Object(l.a)(m),[x[e]])));for(var i=function(){var t=Object(a.a)(j[r],2),c=t[0],n=t[1];console.log([c,n]),Object.keys(n.preReq).forEach((function(t){t===x[e].name&&(console.log(t),n.preReq[t]=!1)}))},r=0,j=Object.entries(x);r<j.length;r++)i();for(var d=0,b=Object.entries(s);d<b.length;d++){var u=Object(a.a)(b[d],2),h=u[0],S=u[1];console.log([h,S]),s[h].forEach((function(e){Object.keys(e.preReq).length>0&&(Object.values(e.preReq).every((function(e){return!0===e}))?e.preReqCheck="black":e.preReqCheck="red",e.preReqCheck)}))}t[""+c]=t[""+c].filter((function(t){return t!==x[e]})),n(t)}(e.id)},dragElastic:1,initial:{opacity:0,x:180},animate:{opacity:1,x:0},exit:{opacity:0,y:-200,x:180},transition:{ease:"easeInOut",duration:.4},children:Object(v.jsx)(h.a,{children:Object(v.jsx)(R,{course:e,SET_SEMESTER_MAP:n,SEMESTER_MAP:s,semesterSelect:c})})},e.id)}))})})}),s[""+c].length>0&&Object(v.jsx)(g,{SET_SEMESTER_MAP:n,SEMESTER_MAP:s,semesterSelect:c})]})]})}c(111),c(112);function q(e){var t=e.setQuery;return Object(v.jsx)("div",{children:Object(v.jsx)("input",{className:"form__field",placeholder:"Enter Course",onChange:function(e){return t(e.target.value)}})})}var A=c(127),V=c(101);function P(e){var t=e.SET_SEMESTER_MAP,c=e.SEMESTER_MAP,s=e.semesterSelect,i=e.setBinVisible,r=e.binVisible,j=e.setNewCourseVisible,d=e.newCourseVisible,b=e.SET_SAVE_BIN,u=e.SAVE_BIN,O=Object(n.useState)(""),m=Object(a.a)(O,2),E=m[0],p=m[1];function C(e){var n=Object(o.a)({},c),i=function(e){return c[""+s].includes(x[e])}(e);if(r)u.includes(x[e])?alert("".concat(x[e].name," is already added to your bin. Please select another course.")):b([].concat(Object(l.a)(u),[x[e]]));else if(i)alert("".concat(x[e].name," is already added to this semester. Please select another course."));else{if(Object.keys(x[e].preReq).length>0&&(console.log(x[e].preReq),Object.values(x[e].preReq).every((function(e){return!0===e}))?x[e].preReqCheck="black":(alert("Warning: Pre-Reqs not met."),x[e].preReqCheck="red"),T(x[e])),6===c[""+s].length)alert("Max number of courses selected for semester.");else{for(var j=function(){var t=Object(a.a)(h[d],2),c=t[0],n=t[1];console.log([c,n]),Object.keys(n.preReq).forEach((function(t){t===x[e].name&&(console.log(t),n.preReq[t]=!0)}))},d=0,h=Object.entries(x);d<h.length;d++)j();n[""+s].push(x[e]),t(n)}for(var O=0,m=Object.entries(c);O<m.length;O++){var E=Object(a.a)(m[O],2),S=E[0],p=E[1];console.log([S,p]),c[S].forEach((function(e){Object.keys(e.preReq).length>0&&(Object.values(e.preReq).every((function(e){return!0===e}))?e.preReqCheck="black":e.preReqCheck="red",T(e))}))}}}function T(e){return e.preReqCheck}return Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"menu-button",children:Object(v.jsxs)(A.a,{id:"dropdown-basic-button",title:"Dropdown button",children:[Object(v.jsx)(V.a.Item,{as:"button",children:"Search Course"}),Object(v.jsx)(V.a.Item,{as:"button",onClick:function(){i(!r)},children:"Save Courses for Later"}),Object(v.jsx)(V.a.Item,{as:"button",onClick:function(){j(!d)},children:"Create A New Course"})]})}),Object(v.jsx)(q,{setQuery:p}),Object(v.jsx)("ul",{className:"list-group",children:x.filter((function(e){return""===E||e.name.toLowerCase().includes(E.toLowerCase())?e:void 0})).map((function(e){return Object(v.jsx)(N.a.div,{drag:!0,dragConstraints:{top:0,bottom:0,right:0,left:0},onDragEnd:function(){return C(e.id)},dragElastic:1,initial:{opacity:0,x:180},animate:{opacity:1,x:0},transition:{ease:"easeInOut",duration:1},children:Object(v.jsxs)("li",{className:"course",children:[e.name,Object(v.jsx)("button",{className:"add-button",onClick:function(){return C(e.id)},children:Object(v.jsx)(f.a,{})}),Object.keys(e.preReq).length>0&&Object(v.jsxs)(h.a,{className:"prereq-accordion",children:[Object(v.jsx)(S.a,{flush:!0,children:Object(v.jsxs)(S.a.Item,{eventKey:"0",children:[Object(v.jsx)(S.a.Header,{children:"Prerequisites"}),Object(v.jsx)(S.a.Body,{children:Object.keys(e.preReq).map((function(e){return Object(v.jsx)("div",{children:e},e)}))})]})}),Object(v.jsx)("p",{})]})]},e.id)},e.id)}))})]})}var I=c(133);function B(e){var t=e.setVisibleView;return Object(v.jsxs)(I.a,{justify:!0,variant:"pills",className:"flex-column",defaultActiveKey:"2",onSelect:function(e){return t(e)},children:[Object(v.jsx)(I.a.Item,{children:Object(v.jsx)(I.a.Link,{eventKey:"2",children:"Semester View"})}),Object(v.jsx)(I.a.Item,{children:Object(v.jsx)(I.a.Link,{eventKey:"3",children:"Degree Plan View"})}),Object(v.jsx)(I.a.Item,{children:Object(v.jsx)(I.a.Link,{eventKey:"4",children:"Calendar View"})})]})}c(95);var w=function(){return Object(v.jsx)("div",{children:Object(v.jsxs)(b.a,{fluid:!0,children:[Object(v.jsx)("h2",{children:"Calender"}),Object(v.jsx)(b.a,{className:"cal-header",children:Object(v.jsxs)(u.a,{className:"row justify-content-evenly no-gutters",children:[Object(v.jsx)(h.a,{className:"col-1",children:Object(v.jsx)("h5",{children:"Hours"})}),Object(v.jsx)(h.a,{className:"col-2",children:Object(v.jsx)("h5",{children:"Monday"})}),Object(v.jsx)(h.a,{className:"col-2",children:Object(v.jsx)("h5",{children:"Tuesday"})}),Object(v.jsx)(h.a,{className:"col-2",children:Object(v.jsx)("h5",{children:"Wednesday"})}),Object(v.jsx)(h.a,{className:"col-2",children:Object(v.jsx)("h5",{children:"Thursday"})}),Object(v.jsx)(h.a,{className:"col-2",children:Object(v.jsx)("h5",{children:"Friday"})})]})})]})})},H=c(128),F=c(88);var L=function(e){var t=e.SET_SEMESTER_MAP,c=e.SEMESTER_MAP,n=e.courseList,s=e.setSemesterSelect,i=e.semesterSelect,r=e.setSemesterHeader,a=e.SET_SELECT_MAP,l=e.SELECT_MAP,j=""+i;function d(e){var t=Object(o.a)({},l);Object.keys(t).forEach((function(c){t[+c]=c===e,a(t)})),s(e),r(k[+e-1].name)}return Object(v.jsx)("div",{children:Object(v.jsxs)(E.a,{className:"card",style:{width:"100%"},children:[Object(v.jsx)("button",{className:"delete-button",onClick:function(){t(Object(o.a)(Object(o.a)({},c),{},Object(M.a)({},""+i,[])))},children:Object(v.jsx)(f.b,{})}),!l[+j]&&Object(v.jsx)("button",{className:"select-button-off",onClick:function(){return d(""+i)},children:Object(v.jsx)(F.c,{})}),l[+j]&&Object(v.jsx)("button",{className:"select-button-on",onClick:function(){return d(""+i)},children:Object(v.jsx)(F.b,{})}),Object(v.jsx)(E.a.Body,{className:"card-body",children:Object(v.jsxs)(H.a,{children:[Object(v.jsxs)("thead",{children:[Object(v.jsx)("th",{className:"semester-title",children:k[+j-1].name}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"Course"}),Object(v.jsx)("th",{scope:"col",children:"Credit(s)"})]})]}),Object(v.jsx)("tbody",{children:n.map((function(e,n){return Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:e.name}),Object(v.jsx)("td",{children:e.credits}),Object(v.jsx)("button",{className:"delete-course",onClick:function(){return function(e){var n=Object(o.a)({},c);n[""+i]=n[""+i].filter((function(t){return t!==x[e]})),t(n),s(i)}(e.id)},children:Object(v.jsx)(F.a,{})})]},n)}))})]})})]})})},G={1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1};var D=function(e){var t=e.SET_SEMESTER_MAP,c=e.SEMESTER_MAP,s=e.setSemesterSelect,i=e.setSemesterHeader,r=Object(n.useState)(G),l=Object(a.a)(r,2),j=l[0],d=l[1],O=Object(o.a)({},c);return Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:"Degree Plan View"}),Object(v.jsx)("div",{children:Object(v.jsx)(b.a,{children:Object(v.jsx)(u.a,{xs:2,md:2,children:Object.entries(O).map((function(e){var n=Object(a.a)(e,2),r=n[0],l=n[1];return Object(v.jsx)(h.a,{children:Object(v.jsx)(L,{SET_SEMESTER_MAP:t,SEMESTER_MAP:c,courseList:l,setSemesterSelect:s,semesterSelect:r,setSemesterHeader:i,SET_SELECT_MAP:d,SELECT_MAP:j})},r)}))})})}),Object(v.jsx)("div",{children:Object(v.jsx)("button",{onClick:function(){for(var e=Object(o.a)({},c),n=0,s=Object.entries(e);n<s.length;n++){e[Object(a.a)(s[n],1)[0]]=[],t(e)}},children:"Clear All Semesters"})})]})},W=c(130);c(96);function K(e){var t=e.course,c=e.SET_SAVE_BIN,n=e.SAVE_BIN;return Object(v.jsx)("div",{children:Object(v.jsxs)(E.a,{className:"card",style:{width:"19rem"},children:[Object(v.jsx)(b.a,{children:Object(v.jsxs)(u.a,{children:[Object(v.jsx)(h.a,{children:Object(v.jsx)(E.a.Title,{children:t.name})}),Object(v.jsx)(h.a,{children:Object(v.jsx)("button",{className:"delete-button",onClick:function(){return e=t.id,void c(n.filter((function(t){return t!==x[e]})));var e},children:Object(v.jsx)(f.b,{})})})]})}),Object(v.jsxs)(E.a.Body,{className:"card-body",children:[Object(v.jsxs)(E.a.Text,{children:["Credits: ",t.credits]}),Object(v.jsxs)(E.a.Text,{children:["From: ",t.timeStart," To: ",t.timeEnd]}),Object(v.jsxs)(E.a.Text,{children:["Days: ",t.schedule]}),Object(v.jsx)(h.a,{className:"column-dropdown"}),Object(v.jsx)(h.a,{className:"card-accordion",children:Object(v.jsx)(S.a,{children:Object(v.jsxs)(S.a.Item,{eventKey:"0",children:[Object(v.jsx)(S.a.Header,{children:"Details"}),Object(v.jsxs)(S.a.Body,{children:[Object(v.jsx)("button",{className:"edit-button",onClick:function(){},children:Object(v.jsx)(p.a,{})}),"Course description: ",t.description]})]})})})]})]})})}function Y(e){var t=e.SET_SAVE_BIN;return Object(v.jsx)("button",{onClick:function(){t([])},children:"Clear Bin"})}function J(e){var t=e.setBinVisible,c=e.binVisible,n=e.SET_SAVE_BIN,s=e.SAVE_BIN,i=e.SET_SEMESTER_MAP,r=e.SEMESTER_MAP,a=e.semesterSelect,l=s;function j(e){var t=Object(o.a)({},r);r[""+a].includes(x[e])?alert("".concat(x[e].name," is already added to this semester. Please select another course.")):6===r[""+a].length?alert("Max number of courses selected for semester."):(t[""+a].push(x[e]),i(t),function(e){n(s.filter((function(t){return t!==x[e]})))}(e))}return Object(v.jsx)("div",{children:Object(v.jsxs)(W.a,{className:"bin",show:c,onHide:function(){return t(!1)},placement:"bottom",scroll:!0,backdrop:!1,children:[Object(v.jsx)(W.a.Header,{closeButton:!0,children:Object(v.jsx)(W.a.Title,{children:"Save For Later"})}),Object(v.jsxs)(W.a.Body,{className:"bin-body",children:[Object(v.jsx)(Y,{SET_SAVE_BIN:n}),Object(v.jsx)(b.a,{children:Object(v.jsx)(u.a,{xs:1,md:3,children:Object(v.jsx)(_.a,{children:l.map((function(e){return Object(v.jsx)(N.a.div,{drag:!0,dragConstraints:{top:0,bottom:0,right:0,left:0},onDragEnd:function(){return j(e.id)},dragElastic:1,initial:{opacity:0,x:180},animate:{opacity:1,x:0},exit:{opacity:0,y:-200,x:180},transition:{ease:"easeInOut",duration:.4},children:Object(v.jsx)(h.a,{children:Object(v.jsx)(K,{course:e,SET_SAVE_BIN:n,SAVE_BIN:s})})},e.id)}))})})})]})]})})}function Q(e){var t=e.setNewCourseVisible,c=e.newCourseVisible,n=e.SET_SAVE_BIN,s=e.SAVE_BIN,i=e.SET_SEMESTER_MAP,r=e.SEMESTER_MAP,a=e.semesterSelect,l=s;function j(e){var t=Object(o.a)({},r);r[""+a].includes(x[e])?alert("".concat(x[e].name," is already added to this semester. Please select another course.")):6===r[""+a].length?alert("Max number of courses selected for semester."):(t[""+a].push(x[e]),i(t),function(e){n(s.filter((function(t){return t!==x[e]})))}(e))}return Object(v.jsx)("div",{children:Object(v.jsxs)(W.a,{className:"bin",show:c,onHide:function(){return t(!1)},placement:"bottom",scroll:!0,backdrop:!1,children:[Object(v.jsx)(W.a.Header,{closeButton:!0,children:Object(v.jsx)(W.a.Title,{children:"Create a New Course"})}),Object(v.jsxs)(W.a.Body,{className:"bin-body",children:[Object(v.jsx)(Y,{SET_SAVE_BIN:n}),Object(v.jsx)(b.a,{children:Object(v.jsx)(u.a,{xs:1,md:3,children:Object(v.jsx)(_.a,{children:l.map((function(e){return Object(v.jsx)(N.a.div,{drag:!0,dragConstraints:{top:0,bottom:0,right:0,left:0},onDragEnd:function(){return j(e.id)},dragElastic:1,initial:{opacity:0,x:180},animate:{opacity:1,x:0},exit:{opacity:0,y:-200,x:180},transition:{ease:"easeInOut",duration:.4},children:Object(v.jsx)(h.a,{children:Object(v.jsx)(K,{course:e,SET_SAVE_BIN:n,SAVE_BIN:s})})},e.id)}))})})})]})]})})}var U=function(e){var t=e.visibleView,c=e.setVisibleView,s=Object(n.useState)("1"),i=Object(a.a)(s,2),r=i[0],l=i[1],o=Object(n.useState)("Fall 1"),j=Object(a.a)(o,2),d=j[0],b=j[1],u=Object(n.useState)(!1),h=Object(a.a)(u,2),O=h[0],m=h[1],E=Object(n.useState)(!1),S=Object(a.a)(E,2),x=S[0],p=S[1],f=Object(n.useState)([]),C=Object(a.a)(f,2),T=C[0],R=C[1],M=Object(n.useState)({1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[]}),g=Object(a.a)(M,2),k=g[0],_=g[1];return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsxs)("header",{className:"App-header",children:["UD CIS Scheduler",Object(v.jsx)("p",{children:"Srinath Venkatesh, Elliot Tingey, Geoffrey Linderman"})]}),Object(v.jsxs)("section",{className:"cell-left",children:[Object(v.jsx)("p",{children:"Menu"}),Object(v.jsx)(B,{setVisibleView:c})]}),Object(v.jsxs)("section",{className:"cell-main",children:["2"===t&&Object(v.jsx)(y,{semesterHeader:d,setSemesterHeader:b,setSemesterSelect:l,semesterSelect:r,SET_SEMESTER_MAP:_,SEMESTER_MAP:k,SET_SAVE_BIN:R,SAVE_BIN:T,binVisible:x}),"3"===t&&Object(v.jsx)(D,{SET_SEMESTER_MAP:_,SEMESTER_MAP:k,setSemesterSelect:l,setSemesterHeader:b}),"4"===t&&Object(v.jsx)(w,{})]}),Object(v.jsx)("section",{className:"cell-right",children:("2"===t||"3"===t)&&Object(v.jsx)(P,{SET_SEMESTER_MAP:_,SEMESTER_MAP:k,semesterSelect:r,setBinVisible:p,binVisible:x,SET_SAVE_BIN:R,SAVE_BIN:T,newCourseVisible:O,setNewCourseVisible:m})}),Object(v.jsx)(J,{setBinVisible:p,binVisible:x,SET_SAVE_BIN:R,SAVE_BIN:T,SET_SEMESTER_MAP:_,SEMESTER_MAP:k,semesterSelect:r}),Object(v.jsx)(Q,{setNewCourseVisible:m,newCourseVisible:O,SET_SAVE_BIN:R,SAVE_BIN:T,SET_SEMESTER_MAP:_,SEMESTER_MAP:k,semesterSelect:r})]})};c(115);function z(e){var t=e.setVisibleView;return Object(v.jsx)("div",{className:"home",children:Object(v.jsxs)("div",{className:"centered",children:[Object(v.jsx)("h1",{children:"UD CIS Scheduler"}),Object(v.jsx)("h2",{children:"Start Building Your Plan"}),Object(v.jsx)("button",{onClick:function(){t("2")},children:"Enter"})]})})}var X=function(){var e=Object(n.useState)("0"),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(v.jsxs)("div",{children:["0"===c&&Object(v.jsx)(z,{setVisibleView:s}),"0"!==c&&Object(v.jsx)(U,{setVisibleView:s,visibleView:c})]})},Z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,137)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),i(e),r(e)}))};c(116);r.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(X,{})}),document.getElementById("root")),Z()},91:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){}},[[117,1,2]]]);
//# sourceMappingURL=main.5fc81e0f.chunk.js.map