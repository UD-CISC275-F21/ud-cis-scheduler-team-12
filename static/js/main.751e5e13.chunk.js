(this["webpackJsonpfinal-project-starter"]=this["webpackJsonpfinal-project-starter"]||[]).push([[0],{21:function(e,s,t){},23:function(e,s,t){},33:function(e,s,t){},34:function(e,s,t){},39:function(e,s,t){},44:function(e,s,t){"use strict";t.r(s);var c=t(1),n=t.n(c),i=t(11),r=t.n(i),a=(t(33),t(7)),j=(t(34),t(46)),l=t(47),d=t(48),o=t(52),b=t(50),u=(t(21),[{id:0,name:"CISC 100",timeStart:1200,timeEnd:1300,schedule:"MWF",description:"This is Computer Science 100, section 10."},{id:1,name:"CISC 200",timeStart:1400,timeEnd:1500,schedule:"MWF",description:"This is Computer Science 200, section 10."},{id:2,name:"CISC 300",timeStart:1200,timeEnd:1300,schedule:"TR",description:"This is Computer Science 300, section 10."},{id:3,name:"MATH 100",timeStart:1530,timeEnd:1630,schedule:"MWF",description:"This is Mathematics 100, section 10."},{id:4,name:"MATH 200",timeStart:1330,timeEnd:1430,schedule:"TR",description:"This is Mathematics 200, section 10."},{id:5,name:"ENGL 100",timeStart:1700,timeEnd:1800,schedule:"MWF",description:"This is English 100, section 10."},{id:6,name:"CPEG 100",timeStart:1700,timeEnd:1800,schedule:"TR",description:"This is Compueter Engineering 100, section 10."}]),h=t(26),O=t(16),m=t(2);var x=function(e){var s=e.course,t=e.setNumberOfCourses,c=e.numberOfCourses,n=e.setClassList,i=e.classList;return Object(m.jsx)("div",{children:Object(m.jsxs)(o.a,{className:"card",style:{width:"15rem"},children:[Object(m.jsx)(j.a,{children:Object(m.jsxs)(l.a,{children:[Object(m.jsx)(d.a,{children:Object(m.jsx)(o.a.Title,{children:s.name})}),Object(m.jsx)(d.a,{children:Object(m.jsx)("button",{className:"delete-button",onClick:function(){return e=s.id,t(0===c?0:c-1),void n(i.filter((function(s){return s!==u[e]})));var e},children:Object(m.jsx)(O.b,{})})})]})}),Object(m.jsxs)(o.a.Body,{className:"card-body",children:[Object(m.jsxs)(o.a.Text,{children:["From: ",s.timeStart," To: ",s.timeEnd]}),Object(m.jsxs)(o.a.Text,{children:["Days: ",s.schedule]}),Object(m.jsx)(d.a,{className:"column-dropdown"}),Object(m.jsx)(d.a,{className:"card-accordion",children:Object(m.jsx)(b.a,{children:Object(m.jsxs)(b.a.Item,{eventKey:"0",children:[Object(m.jsx)(b.a.Header,{children:"Details"}),Object(m.jsxs)(b.a.Body,{children:[Object(m.jsx)("button",{className:"edit-button",onClick:function(){},children:Object(m.jsx)(h.a,{})}),"Course description: ",s.description]})]})})})]})]})})};function f(e){var s=e.setNumberOfCourses,t=e.setClassList;return Object(m.jsx)("button",{onClick:function(){s(0),t([])},children:"Clear All Courses"})}t(39);function C(e){var s=e.setNumberOfCourses,t=e.numberOfCourses,c=e.classList,n=e.setClassList,i=c;return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Semester View"}),Object(m.jsxs)("div",{children:[Object(m.jsx)(j.a,{children:Object(m.jsx)(l.a,{children:i.map((function(e){return Object(m.jsx)(d.a,{children:Object(m.jsx)(x,{course:e,setNumberOfCourses:s,numberOfCourses:t,setClassList:n,classList:c})},e.id)}))})}),t>0&&Object(m.jsx)(f,{setNumberOfCourses:s,setClassList:n})]})]})}var v=t(28);function p(e){var s=e.setCourseID,t=e.setNumberOfCourses,c=e.setClassList,n=e.numberOfCourses,i=e.classList;return Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:"Course Search"}),u.map((function(e){return Object(m.jsxs)("p",{children:[e.name,Object(m.jsx)("button",{onClick:function(){return r=e.id,void(i.includes(u[r])?alert("".concat(u[r].name," is already added to this semester. Please select another course.")):(6===n?(t(6),alert("Max number of courses selected for semester.")):(t(n+1),c([].concat(Object(v.a)(i),[u[r]]))),s(r)));var r},children:Object(m.jsx)(O.a,{})})]},e.id)}))]})}var N=t(51);function S(e){var s=e.setVisibleSelect;return Object(m.jsxs)(N.a,{justify:!0,variant:"pills",className:"flex-column",defaultActiveKey:"1",onSelect:function(e){return s(e)},children:[Object(m.jsx)(N.a.Item,{children:Object(m.jsx)(N.a.Link,{eventKey:"1",children:"Semester View"})}),Object(m.jsx)(N.a.Item,{children:Object(m.jsx)(N.a.Link,{eventKey:"2",children:"Degree Plan View"})}),Object(m.jsx)(N.a.Item,{children:Object(m.jsx)(N.a.Link,{eventKey:"3",children:"Calendar View"})})]})}t(23);var y=function(){return Object(m.jsx)("div",{children:Object(m.jsxs)(j.a,{fluid:!0,children:[Object(m.jsx)("h2",{children:"Calender"}),Object(m.jsx)(j.a,{className:"cal-header",children:Object(m.jsxs)(l.a,{className:"row justify-content-evenly no-gutters",children:[Object(m.jsx)(d.a,{className:"col-1",children:Object(m.jsx)("h5",{children:"Hours"})}),Object(m.jsx)(d.a,{className:"col-2",children:Object(m.jsx)("h5",{children:"Monday"})}),Object(m.jsx)(d.a,{className:"col-2",children:Object(m.jsx)("h5",{children:"Tuesday"})}),Object(m.jsx)(d.a,{className:"col-2",children:Object(m.jsx)("h5",{children:"Wednesday"})}),Object(m.jsx)(d.a,{className:"col-2",children:Object(m.jsx)("h5",{children:"Thursday"})}),Object(m.jsx)(d.a,{className:"col-2",children:Object(m.jsx)("h5",{children:"Friday"})})]})})]})})},L=t(49);var T=function(e){var s=e.courseList;return Object(m.jsx)("div",{children:Object(m.jsx)(o.a,{className:"card",style:{width:"15rem"},children:Object(m.jsx)(o.a.Body,{className:"card-body",children:Object(m.jsx)(L.a,{children:Object(m.jsx)("tbody",{children:s.map((function(e,s){return Object(m.jsx)("tr",{children:Object(m.jsx)("td",{children:e.name})},s)}))})})})})})};var g=function(e){var s=e.classList;return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Degree Plan View"}),Object(m.jsx)("div",{children:Object(m.jsx)(j.a,{children:Object(m.jsx)(l.a,{children:Object(m.jsx)(d.a,{children:Object(m.jsx)(T,{courseList:s})})})})})]})};var E=function(){var e=Object(c.useState)(0),s=Object(a.a)(e,2),t=s[0],n=s[1],i=Object(c.useState)(0),r=Object(a.a)(i,2),j=r[0],l=r[1],d=Object(c.useState)("1"),o=Object(a.a)(d,2),b=o[0],u=o[1],h=Object(c.useState)([]),O=Object(a.a)(h,2),x=O[0],f=O[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("header",{className:"App-header",children:["UD CIS Scheduler",Object(m.jsx)("p",{children:"Srinath Venkatesh, Elliot Tingey, Geoffrey Linderman"})]}),Object(m.jsxs)("section",{className:"cell-left",children:[Object(m.jsx)("p",{children:"Menu"}),Object(m.jsx)(S,{setVisibleSelect:u})]}),Object(m.jsxs)("section",{className:"cell-main",children:["1"===b&&Object(m.jsx)(C,{classList:x,setNumberOfCourses:l,numberOfCourses:j,courseID:t,setClassList:f}),"2"===b&&Object(m.jsx)(g,{classList:x}),"3"===b&&Object(m.jsx)(y,{})]}),Object(m.jsx)("section",{className:"cell-right",children:"1"===b&&Object(m.jsx)(p,{setClassList:f,setCourseID:n,setNumberOfCourses:l,classList:x,courseID:t,numberOfCourses:j})})]})},I=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,53)).then((function(s){var t=s.getCLS,c=s.getFID,n=s.getFCP,i=s.getLCP,r=s.getTTFB;t(e),c(e),n(e),i(e),r(e)}))};t(43);r.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(E,{})}),document.getElementById("root")),I()}},[[44,1,2]]]);
//# sourceMappingURL=main.751e5e13.chunk.js.map