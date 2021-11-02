(this["webpackJsonpfinal-project-starter"]=this["webpackJsonpfinal-project-starter"]||[]).push([[0],{59:function(e,s,c){},60:function(e,s,c){},61:function(e,s,c){},65:function(e,s,c){},68:function(e,s,c){},70:function(e,s,c){"use strict";c.r(s);var t=c(0),r=c.n(t),n=c(19),i=c.n(n),j=(c(59),c(6)),a=(c(60),c(76)),l=c(77),o=c(78),d=c(82),u=c(79),b=c(54),h=c(80),O=(c(61),[{id:0,name:"CISC 100",timeStart:1200,timeEnd:1300,schedule:"MWF",description:"This is Computer Science 100, section 10."},{id:1,name:"CISC 200",timeStart:1400,timeEnd:1500,schedule:"MWF",description:"This is Computer Science 200, section 10."},{id:2,name:"CISC 300",timeStart:1200,timeEnd:1300,schedule:"TR",description:"This is Computer Science 300, section 10."},{id:3,name:"MATH 100",timeStart:1530,timeEnd:1630,schedule:"MWF",description:"This is Mathematics 100, section 10."},{id:4,name:"MATH 200",timeStart:1330,timeEnd:1430,schedule:"TR",description:"This is Mathematics 200, section 10."},{id:5,name:"ENGL 100",timeStart:1700,timeEnd:1800,schedule:"MWF",description:"This is English 100, section 10."}]),m=c(45),x=c(1);var f=function(e){var s=e.course,c=e.setNumberOfCourses,t=e.numberOfCourses;function r(){c(0===t?0:t-1)}return Object(x.jsx)("div",{children:Object(x.jsxs)(d.a,{className:"card",style:{width:"15rem"},children:[Object(x.jsx)(a.a,{children:Object(x.jsxs)(l.a,{children:[Object(x.jsx)(o.a,{children:Object(x.jsx)(d.a.Title,{children:s.name})}),Object(x.jsx)(o.a,{children:Object(x.jsx)("button",{className:"delete-button",onClick:r,children:Object(x.jsx)(m.b,{})})})]})}),Object(x.jsxs)(d.a.Body,{className:"card-body",children:[Object(x.jsxs)(d.a.Text,{children:["From: ",s.timeStart," To: ",s.timeEnd]}),Object(x.jsxs)(d.a.Text,{children:["Days: ",s.schedule]}),Object(x.jsx)(o.a,{className:"column-dropdown",children:Object(x.jsx)(d.a.Header,{className:"card-header",children:Object(x.jsxs)(u.a,{id:"dropdown-button",title:"",className:"dropdown-button",children:[Object(x.jsx)("button",{onClick:r,children:"Remove Course"}),Object(x.jsx)(b.a.Item,{href:"#/action-1",children:"Action"}),Object(x.jsx)(b.a.Item,{href:"#/action-2",children:"Another action"}),Object(x.jsx)(b.a.Item,{href:"#/action-3",children:"Something else"})]})})}),Object(x.jsx)(o.a,{className:"card-accordion",children:Object(x.jsx)(h.a,{children:Object(x.jsxs)(h.a.Item,{eventKey:"0",children:[Object(x.jsx)(h.a.Header,{children:"Details"}),Object(x.jsxs)(h.a.Body,{children:["Course description: ",s.description]})]})})})]})]})})};function C(e){var s=e.setNumberOfCourses;return Object(x.jsx)("button",{onClick:function(){s(0)},children:"Clear All Courses"})}c(65);function N(e){var s=e.setNumberOfCourses,c=e.numberOfCourses,t=e.courseID;return Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:"Courses"}),Object(x.jsx)(a.a,{children:Object(x.jsxs)(l.a,{className:"course-row-1",children:[Object(x.jsx)(o.a,{children:c>0&&Object(x.jsx)(f,{course:O[t],setNumberOfCourses:s,numberOfCourses:c})}),Object(x.jsx)(o.a,{children:c>1&&Object(x.jsx)(f,{course:O[t],setNumberOfCourses:s,numberOfCourses:c})}),Object(x.jsx)(o.a,{children:c>2&&Object(x.jsx)(f,{course:O[t],setNumberOfCourses:s,numberOfCourses:c})}),Object(x.jsx)(o.a,{children:c>3&&Object(x.jsx)(f,{course:O[t],setNumberOfCourses:s,numberOfCourses:c})}),Object(x.jsx)(o.a,{children:c>4&&Object(x.jsx)(f,{course:O[t],setNumberOfCourses:s,numberOfCourses:c})}),Object(x.jsx)(o.a,{children:c>5&&Object(x.jsx)(f,{course:O[t],setNumberOfCourses:s,numberOfCourses:c})})]})}),c>0&&Object(x.jsx)(C,{setNumberOfCourses:s})]})}function p(e){var s=e.setCourseID,c=e.setNumberOfCourses,t=e.numberOfCourses;return Object(x.jsx)("div",{children:O.map((function(e){return Object(x.jsxs)("p",{children:[e.name,Object(x.jsx)("button",{onClick:function(){return r=e.id,6===t?(c(6),alert("Max number of courses selected for semester.")):c(t+1),void s(r);var r},children:Object(x.jsx)(m.a,{})})]},e.id)}))})}var S=c(81);function v(e){var s=e.setVisibleSelect;return Object(x.jsxs)(S.a,{justify:!0,variant:"pills",className:"flex-column",defaultActiveKey:"1",onSelect:function(e){return s(e)},children:[Object(x.jsx)(S.a.Item,{children:Object(x.jsx)(S.a.Link,{eventKey:"1",children:"Semester View"})}),Object(x.jsx)(S.a.Item,{children:Object(x.jsx)(S.a.Link,{eventKey:"2",children:"Calendar"})})]})}c(68);var y=function(){return Object(x.jsx)("div",{children:Object(x.jsxs)(a.a,{fluid:!0,children:[Object(x.jsx)("h2",{children:"Calender"}),Object(x.jsxs)(l.a,{className:"row justify-content-evenly no-gutters",children:[Object(x.jsx)(o.a,{className:"col-2",children:Object(x.jsx)("h5",{children:"Monday"})}),Object(x.jsx)(o.a,{className:"col-2",children:Object(x.jsx)("h5",{children:"Tuesday"})}),Object(x.jsx)(o.a,{className:"col-2",children:Object(x.jsx)("h5",{children:"Wednesday"})}),Object(x.jsx)(o.a,{className:"col-2",children:Object(x.jsx)("h5",{children:"Thursday"})}),Object(x.jsx)(o.a,{className:"col-2",children:Object(x.jsx)("h5",{children:"Friday"})})]})]})})};var T=function(){var e=Object(t.useState)(0),s=Object(j.a)(e,2),c=s[0],r=s[1],n=Object(t.useState)(0),i=Object(j.a)(n,2),a=i[0],l=i[1],o=Object(t.useState)("1"),d=Object(j.a)(o,2),u=d[0],b=d[1];return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsxs)("header",{className:"App-header",children:["UD CIS Scheduler",Object(x.jsx)("h1",{children:"CISC 275 Final Project"}),Object(x.jsx)("p",{children:"Srinath Venkatesh, Elliot Tingey, Geoffrey Linderman"})]}),Object(x.jsxs)("section",{className:"cell-left",children:[Object(x.jsx)("p",{children:"Menu"}),Object(x.jsx)(v,{setVisibleSelect:b})]}),Object(x.jsxs)("section",{className:"cell-main",children:["1"===u&&Object(x.jsx)(N,{setNumberOfCourses:l,numberOfCourses:a,courseID:c}),"2"===u&&Object(x.jsx)(y,{})]}),Object(x.jsxs)("section",{className:"cell-right",children:[Object(x.jsx)("p",{children:"Course Search"}),Object(x.jsx)(p,{setCourseID:r,setNumberOfCourses:l,courseID:c,numberOfCourses:a})]})]})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,83)).then((function(s){var c=s.getCLS,t=s.getFID,r=s.getFCP,n=s.getLCP,i=s.getTTFB;c(e),t(e),r(e),n(e),i(e)}))};c(69);i.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(T,{})}),document.getElementById("root")),I()}},[[70,1,2]]]);
//# sourceMappingURL=main.8fad3386.chunk.js.map