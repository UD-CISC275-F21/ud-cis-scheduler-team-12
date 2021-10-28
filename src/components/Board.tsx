// import React, { useState } from "react";
import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import CourseComp from "./CourseComp";
import ClassList from "../assets/courses.js";
import ClearSemesterButton from "./ClearSemesterButton";


export function Board({ setNumberOfCourses, numberOfCourses, courseID }: {
    setNumberOfCourses: (s: number) => void,  numberOfCourses: number, courseID: number
}):  JSX.Element {
    // const [courses, setCourses] = useState(Array(9).fill(null));

    // function renderCourse({ i }: { i: number }):  JSX.Element {
    //     return (
    //         <CourseComp
    //             course1={ClassList[courseID]}
    //         ></CourseComp>
    //     );
    // }

    return (
        <div>
            <h2>Courses</h2>
            <Container>
                <Row className="course-row-1">
                    <Col>
                        { numberOfCourses > 0 && <CourseComp
                            course={ClassList[courseID]}
                            setNumberOfCourses={setNumberOfCourses}
                            numberOfCourses={numberOfCourses}
                        ></CourseComp> }
                    </Col>
                    <Col>
                        { numberOfCourses > 1 && <CourseComp
                            course={ClassList[courseID]}
                            setNumberOfCourses={setNumberOfCourses}
                            numberOfCourses={numberOfCourses}
                        ></CourseComp> }
                    </Col>
                    <Col>
                        { numberOfCourses > 2 && <CourseComp
                            course={ClassList[courseID]}
                            setNumberOfCourses={setNumberOfCourses}
                            numberOfCourses={numberOfCourses}
                        ></CourseComp> }
                    </Col>
                    <Col>
                        { numberOfCourses > 3 && <CourseComp
                            course={ClassList[courseID]}
                            setNumberOfCourses={setNumberOfCourses}
                            numberOfCourses={numberOfCourses}
                        ></CourseComp> }
                    </Col>
                    <Col>
                        { numberOfCourses > 4 && <CourseComp
                            course={ClassList[courseID]}
                            setNumberOfCourses={setNumberOfCourses}
                            numberOfCourses={numberOfCourses}
                        ></CourseComp> }
                    </Col>
                    <Col>
                        { numberOfCourses > 5 && <CourseComp
                            course={ClassList[courseID]}
                            setNumberOfCourses={setNumberOfCourses}
                            numberOfCourses={numberOfCourses}
                        ></CourseComp> } 
                    </Col>
                </Row>
            </Container>
            { numberOfCourses > 0 && <ClearSemesterButton
                setNumberOfCourses={setNumberOfCourses}
            ></ClearSemesterButton> }
        </div>
    );
}