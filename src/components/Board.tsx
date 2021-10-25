import React, { useState } from "react";
import { Col, Row, Container} from "react-bootstrap";
import CourseComp from "./Courses";


export function Board(): JSX.Element {
    const [courses, setCourses] = useState(Array(9).fill(null));

    // function renderCourse(i: number): JSX.Element {
    //     return (
    //         <CourseComp
    //             value={courses[i]}
    //             onClick={() => {
    //                 return;
    //             }}
    //         />
    //     );
    // }

    return (
        <div>text</div>
        // <Container>
        //     <Row className="courses">
        //         <Col className="course-board">
        //             <div className="label-board"><h4>Courses</h4></div>
        //             <div className="board-row">
        //                 {renderCourse(0)}
        //                 {renderCourse(1)}
        //                 {renderCourse(2)}
        //             </div>
        //             <div className="board-row"> 
        //                 {renderCourse(3)}
        //                 {renderCourse(4)}
        //                 {renderCourse(5)}
        //             </div>
        //             <div className="board-row">
        //                 {renderCourse(6)}
        //                 {renderCourse(7)}
        //                 {renderCourse(8)}
        //             </div>
        //         </Col>
        //     </Row>
        // </Container>
    );
}