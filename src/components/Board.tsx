// import React, { useState } from "react";
import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import CourseComp from "./CourseComp";
import ClassList from "../assets/courses.js";
import "../css/board.css";


export function Board():  JSX.Element {
    // const [courses, setCourses] = useState(Array(9).fill(null));

    // function renderCourse({ i }: { i: number }):  JSX.Element {
    //     return (
    //         <CourseComp
    //             course1={ClassList[i]}
    //         ></CourseComp>
    //     );
    // }

    return (
        <div>
            <h2>Courses</h2>
            <Container id="board">
                <Row className="board-row" id="board-row-1">
                    <Col className="board-col">
                        {/* {renderCourse(0)}
                        {renderCourse(1)}
                        {renderCourse(2)} */}
                        <CourseComp
                            course1={ClassList[0]}
                        ></CourseComp>
                    </Col>
                    <Col className="board-col">
                        <CourseComp
                            course1={ClassList[1]}
                        ></CourseComp>
                    </Col>
                    <Col className="board-col">
                        <CourseComp
                            course1={ClassList[2]}
                        ></CourseComp>
                    </Col>
                </Row>
                <Row className="board-row" id="board-row-1">
                    <Col className="board-col">
                        <CourseComp
                            course1={ClassList[3]}
                        ></CourseComp>
                    </Col>
                    <Col className="board-col">
                        <CourseComp
                            course1={ClassList[4]}
                        ></CourseComp>
                    </Col>
                    <Col className="board-col">
                        <CourseComp
                            course1={ClassList[5]}
                        ></CourseComp>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}