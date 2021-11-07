(this["webpackJsonpfinal-project-starter"]=this["webpackJsonpfinal-project-starter"]||[]).push([[0],{26:function(e,t,c){},28:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),r=c(13),i=c.n(r),a=(c(39),c(7)),l=(c(40),c(61)),j=c(33),d=c(54),o=c(55),b=c(56),u=c(3),h=c(62),O=c(59),m=(c(26),[{id:0,name:"CISC 100",timeStart:1200,timeEnd:1300,schedule:"MWF",description:"This is Computer Science 100, section 10.",credits:3},{id:1,name:"CISC 200",timeStart:1400,timeEnd:1500,schedule:"MWF",description:"This is Computer Science 200, section 10.",credits:3},{id:2,name:"CISC 300",timeStart:1200,timeEnd:1300,schedule:"TR",description:"This is Computer Science 300, section 10.",credits:3},{id:3,name:"MATH 100",timeStart:1530,timeEnd:1630,schedule:"MWF",description:"This is Mathematics 100, section 10.",credits:3},{id:4,name:"MATH 200",timeStart:1330,timeEnd:1430,schedule:"TR",description:"This is Mathematics 200, section 10.",credits:3},{id:5,name:"ENGL 100",timeStart:1700,timeEnd:1800,schedule:"MWF",description:"This is English 100, section 10.",credits:3},{id:6,name:"CPEG 100",timeStart:1700,timeEnd:1800,schedule:"TR",description:"This is Compueter Engineering 100, section 10.",credits:3}]),S=c(31),x=c(15),E=c(58),f=c(2);var M=function(e){var t=e.course,c=e.SET_SEMESTER_MAP,s=e.SEMESTER_MAP,n=e.semesterSelect;function r(e){var t=Object(u.a)({},s);t[""+n]=t[""+n].filter((function(t){return t!==m[e]})),c(t)}return Object(f.jsx)("div",{children:Object(f.jsx)(E.a.div,{drag:!0,dragConstraints:{top:0,bottom:0,right:0,left:0},onDragEnd:function(){return r(t.id)},dragElastic:1,initial:{opacity:0,x:180},animate:{opacity:1,x:0},transition:{ease:"easeInOut",duration:.5},children:Object(f.jsxs)(h.a,{className:"card",style:{width:"19rem"},children:[Object(f.jsx)(d.a,{children:Object(f.jsxs)(o.a,{children:[Object(f.jsx)(b.a,{children:Object(f.jsx)(h.a.Title,{children:t.name})}),Object(f.jsx)(b.a,{children:Object(f.jsx)("button",{className:"delete-button",onClick:function(){return r(t.id)},children:Object(f.jsx)(x.b,{})})})]})}),Object(f.jsxs)(h.a.Body,{className:"card-body",children:[Object(f.jsxs)(h.a.Text,{children:["From: ",t.timeStart," To: ",t.timeEnd]}),Object(f.jsxs)(h.a.Text,{children:["Days: ",t.schedule]}),Object(f.jsx)(b.a,{className:"column-dropdown"}),Object(f.jsx)(b.a,{className:"card-accordion",children:Object(f.jsx)(O.a,{children:Object(f.jsxs)(O.a.Item,{eventKey:"0",children:[Object(f.jsx)(O.a.Header,{children:"Details"}),Object(f.jsxs)(O.a.Body,{children:[Object(f.jsx)("button",{className:"edit-button",onClick:function(){},children:Object(f.jsx)(S.a,{})}),"Course description: ",t.description]})]})})})]})]})})})},T=c(8);function v(e){var t=e.SET_SEMESTER_MAP,c=e.SEMESTER_MAP,s=e.semesterSelect;return Object(f.jsx)("button",{onClick:function(){t(Object(u.a)(Object(u.a)({},c),{},Object(T.a)({},""+s,[])))},children:"Clear All Courses"})}c(45);var p=[{name:"Fall 1",value:1},{name:"Spring 1",value:2},{name:"Fall 2",value:3},{name:"Spring 2",value:4},{name:"Fall 3",value:5},{name:"Spring 3",value:6},{name:"Fall 4",value:7},{name:"Spring 4",value:8}];function _(e){var t=e.setSemesterSelect,c=e.semesterSelect,s=e.SET_SEMESTER_MAP,n=e.SEMESTER_MAP,r=e.setSemesterHeader,i=e.semesterHeader,a=n[""+c],u=""+c;return Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{children:[Object(f.jsxs)("h2",{children:["Semester View - ",i]}),Object(f.jsx)(l.a,{className:"semester-button",name:"options",value:+u,onChange:function(e){t(""+e),r(p[e-1].name)},children:p.map((function(e,t){return Object(f.jsx)(j.a,{id:"radio-".concat(t),type:"radio",variant:n[""+e.value].length>0?"outline-success":"outline-danger",name:"radio",value:e.value,children:e.name},t)}))})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)(d.a,{children:Object(f.jsx)(o.a,{xs:1,md:3,children:a.map((function(e){return Object(f.jsx)(b.a,{children:Object(f.jsx)(M,{course:e,SET_SEMESTER_MAP:s,SEMESTER_MAP:n,semesterSelect:c})},e.id)}))})}),n[""+c].length>0&&Object(f.jsx)(v,{SET_SEMESTER_MAP:s,SEMESTER_MAP:n,semesterSelect:c})]})]})}c(46);function C(e){var t=e.setQuery;return Object(f.jsx)("div",{children:Object(f.jsx)("input",{placeholder:"Search For Course",onChange:function(e){return t(e.target.value)}})})}function A(e){var t=e.SET_SEMESTER_MAP,c=e.SEMESTER_MAP,n=e.semesterSelect,r=Object(s.useState)(""),i=Object(a.a)(r,2),l=i[0],j=i[1];function d(e){var s=Object(u.a)({},c),r=function(e){return c[""+n].includes(m[e])}(e);r?alert("".concat(m[e].name," is already added to this semester. Please select another course.")):6===c[""+n].length?alert("Max number of courses selected for semester."):(s[""+n].push(m[e]),t(s))}return Object(f.jsxs)("div",{children:[Object(f.jsx)("p",{children:"Course Search"}),Object(f.jsx)(C,{setQuery:j}),m.filter((function(e){return""===l||e.name.toLowerCase().includes(l.toLowerCase())?e:void 0})).map((function(e){return Object(f.jsx)(E.a.div,{drag:!0,dragConstraints:{top:0,bottom:0,right:0,left:0},onDragEnd:function(){return d(e.id)},dragElastic:1,initial:{opacity:0,x:180},animate:{opacity:1,x:0},transition:{ease:"easeInOut",duration:1},children:Object(f.jsxs)("p",{className:"course",children:[e.name,Object(f.jsx)("button",{className:"add-button",onClick:function(){return d(e.id)},children:Object(f.jsx)(x.a,{})})]})},e.id)}))]})}var g=c(60);function P(e){var t=e.setVisibleView;return Object(f.jsxs)(g.a,{justify:!0,variant:"pills",className:"flex-column",defaultActiveKey:"1",onSelect:function(e){return t(e)},children:[Object(f.jsx)(g.a.Item,{children:Object(f.jsx)(g.a.Link,{eventKey:"1",children:"Semester View"})}),Object(f.jsx)(g.a.Item,{children:Object(f.jsx)(g.a.Link,{eventKey:"2",children:"Degree Plan View"})}),Object(f.jsx)(g.a.Item,{children:Object(f.jsx)(g.a.Link,{eventKey:"3",children:"Calendar View"})})]})}c(28);var y=function(){return Object(f.jsx)("div",{children:Object(f.jsxs)(d.a,{fluid:!0,children:[Object(f.jsx)("h2",{children:"Calender"}),Object(f.jsx)(d.a,{className:"cal-header",children:Object(f.jsxs)(o.a,{className:"row justify-content-evenly no-gutters",children:[Object(f.jsx)(b.a,{className:"col-1",children:Object(f.jsx)("h5",{children:"Hours"})}),Object(f.jsx)(b.a,{className:"col-2",children:Object(f.jsx)("h5",{children:"Monday"})}),Object(f.jsx)(b.a,{className:"col-2",children:Object(f.jsx)("h5",{children:"Tuesday"})}),Object(f.jsx)(b.a,{className:"col-2",children:Object(f.jsx)("h5",{children:"Wednesday"})}),Object(f.jsx)(b.a,{className:"col-2",children:Object(f.jsx)("h5",{children:"Thursday"})}),Object(f.jsx)(b.a,{className:"col-2",children:Object(f.jsx)("h5",{children:"Friday"})})]})})]})})},N=c(57),R=c(24);var k=function(e){var t=e.SET_SEMESTER_MAP,c=e.SEMESTER_MAP,s=e.courseList,n=e.setSemesterSelect,r=e.semesterSelect,i=e.setSemesterHeader,a=e.SET_SELECT_MAP,l=e.SELECT_MAP,j=""+r;function d(e){var t=Object(u.a)({},l);Object.keys(t).forEach((function(c){t[+c]=c===e,a(t)})),n(e),i(p[+e-1].name)}return Object(f.jsx)("div",{children:Object(f.jsxs)(h.a,{className:"card",style:{width:"30rem"},children:[Object(f.jsx)("button",{className:"delete-button",onClick:function(){t(Object(u.a)(Object(u.a)({},c),{},Object(T.a)({},""+r,[])))},children:Object(f.jsx)(x.b,{})}),!l[+j]&&Object(f.jsx)("button",{className:"select-button-off",onClick:function(){return d(""+r)},children:Object(f.jsx)(R.c,{})}),l[+j]&&Object(f.jsx)("button",{className:"select-button-on",onClick:function(){return d(""+r)},children:Object(f.jsx)(R.b,{})}),Object(f.jsx)(h.a.Body,{className:"card-body",children:Object(f.jsxs)(N.a,{children:[Object(f.jsxs)("thead",{children:[Object(f.jsx)("th",{className:"semester-title",children:p[+j-1].name}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"Course"}),Object(f.jsx)("th",{scope:"col",children:"Credit(s)"})]})]}),Object(f.jsx)("tbody",{children:s.map((function(e,s){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:e.name}),Object(f.jsx)("td",{children:e.id}),Object(f.jsx)("button",{className:"delete-course",onClick:function(){return function(e){var s=Object(u.a)({},c);s[""+r]=s[""+r].filter((function(t){return t!==m[e]})),t(s),n(r)}(e.id)},children:Object(f.jsx)(R.a,{})})]},s)}))})]})})]})})};var F=function(e){var t=e.SET_SEMESTER_MAP,c=e.SEMESTER_MAP,n=e.setSemesterSelect,r=e.setSemesterHeader,i=Object(s.useState)({1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1}),l=Object(a.a)(i,2),j=l[0],h=l[1],O=Object(u.a)({},c);return Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"Degree Plan View"}),Object(f.jsx)("div",{children:Object(f.jsx)(d.a,{children:Object(f.jsx)(o.a,{xs:2,md:2,children:Object.entries(O).map((function(e){var s=Object(a.a)(e,2),i=s[0],l=s[1];return Object(f.jsx)(b.a,{children:Object(f.jsx)(k,{SET_SEMESTER_MAP:t,SEMESTER_MAP:c,courseList:l,setSemesterSelect:n,semesterSelect:i,setSemesterHeader:r,SET_SELECT_MAP:h,SELECT_MAP:j})},i)}))})})}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{onClick:function(){for(var e=Object(u.a)({},c),s=0,n=Object.entries(e);s<n.length;s++){e[Object(a.a)(n[s],1)[0]]=[],t(e)}},children:"Clear All Semesters"})})]})};var w=function(){var e=Object(s.useState)("1"),t=Object(a.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)("1"),i=Object(a.a)(r,2),l=i[0],j=i[1],d=Object(s.useState)("Fall 1"),o=Object(a.a)(d,2),b=o[0],u=o[1],h=Object(s.useState)({1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[]}),O=Object(a.a)(h,2),m=O[0],S=O[1];return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsxs)("header",{className:"App-header",children:["UD CIS Scheduler",Object(f.jsx)("p",{children:"Srinath Venkatesh, Elliot Tingey, Geoffrey Linderman"})]}),Object(f.jsxs)("section",{className:"cell-left",children:[Object(f.jsx)("p",{children:"Menu"}),Object(f.jsx)(P,{setVisibleView:n})]}),Object(f.jsxs)("section",{className:"cell-main",children:["1"===c&&Object(f.jsx)(_,{semesterHeader:b,setSemesterHeader:u,setSemesterSelect:j,semesterSelect:l,SET_SEMESTER_MAP:S,SEMESTER_MAP:m}),"2"===c&&Object(f.jsx)(F,{SET_SEMESTER_MAP:S,SEMESTER_MAP:m,setSemesterSelect:j,setSemesterHeader:u}),"3"===c&&Object(f.jsx)(y,{})]}),Object(f.jsx)("section",{className:"cell-right",children:"1"===c&&Object(f.jsx)(A,{SET_SEMESTER_MAP:S,SEMESTER_MAP:m,semesterSelect:l})||"2"===c&&Object(f.jsx)(A,{SET_SEMESTER_MAP:S,SEMESTER_MAP:m,semesterSelect:l})})]})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,63)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),r(e),i(e)}))};c(50);i.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(w,{})}),document.getElementById("root")),L()}},[[51,1,2]]]);
//# sourceMappingURL=main.6c460c49.chunk.js.map