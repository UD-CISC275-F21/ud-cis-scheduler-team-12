// import React, { useState } from "react";
import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import CourseComp from "./CourseComp";
import ClassList from "../assets/courses.js";


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
            <Container>
                <div className="label-board"><h4>Courses</h4></div>
                <Row className="course-row-1">
                    <Col>
                        {/* {renderCourse(0)}
                        {renderCourse(1)}
                        {renderCourse(2)} */}
                        <CourseComp
                            course1={ClassList[0]}
                        ></CourseComp>
                    </Col>
                    <Col>
                        <CourseComp
                            course1={ClassList[1]}
                        ></CourseComp>
                    </Col>
                    <Col>
                        <CourseComp
                            course1={ClassList[2]}
                        ></CourseComp>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CourseComp
                            course1={ClassList[3]}
                        ></CourseComp>
                    </Col>
                    <Col>
                        <CourseComp
                            course1={ClassList[4]}
                        ></CourseComp>
                    </Col>
                    <Col>
                        <CourseComp
                            course1={ClassList[5]}
                        ></CourseComp>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}