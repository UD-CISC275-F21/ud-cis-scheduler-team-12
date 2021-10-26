import React, { useState } from "react";
import { Course } from "../interfaces/course";
import { Col, Row, Container, Card } from "react-bootstrap";
import CourseComp from "./Courses";
import ClassList from "../assets/courses.json";


// export function Board():  JSX.Element {
//     const [courses, setCourses] = useState(Array(9).fill(null));

//     function renderCourse({ i }: { i: number }):  JSX.Element {
//         return (
//             <CourseComp
//                 course1={ClassList[i]}
//             ></CourseComp>
//         );
//     }

//     return (
//         <div>
//             <Container>
//                 <Row className="courses">
//                     <Col className="course-board">
//                         <div className="label-board"><h4>Courses</h4></div>
//                         <div className="board-row">
//                             {renderCourse(0)}
//                             {renderCourse(1)}
//                             {renderCourse(2)}
//                         </div>
//                         <div className="board-row"> 
//                             {renderCourse(3)}
//                             {renderCourse(4)}
//                             {renderCourse(5)}
//                         </div>
//                         <div className="board-row">
//                         </div>
//                     </Col>
//                 </Row>
//             </Container>
//         </div>
//     );
// }