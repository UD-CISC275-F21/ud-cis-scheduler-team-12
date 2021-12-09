// Source Imports
import React from "react";
import { Card,Col, Row, Container, Accordion } from "react-bootstrap/";
import { MdDeleteForever } from "react-icons/md";
import { Course } from "../../interfaces/course";

// Design Imports
import "../../css/courses.css";

// Breadcrumbs:
// Main Page / SaveBin / BinCourseCard - card rendered to handle adding/removing from the "save later bin" (similar to CourseComp)
export default function BinCourseCard({ course, SET_SAVE_BIN, SAVE_BIN, courseData }: {
    course: Course,
    SET_SAVE_BIN: (b: Course[]) => void, SAVE_BIN: Course[],
    courseData: Course[]
}): JSX.Element {
    
    function removeCourse(id: number) {
        SET_SAVE_BIN(SAVE_BIN.filter(item => item !== courseData[id]));
    }

    return (
        <div>           
            <Card className="card" style={{ width: "19rem" }}>
                <Container>
                    <Row>
                        <Col>
                            <Card.Title>{course.name}</Card.Title>
                        </Col>
                        <Col>
                            <button className="delete-button" onClick={() => removeCourse(course.id)}>
                                <MdDeleteForever></MdDeleteForever></button>
                        </Col>                        

                    </Row>
                </Container>
                <Card.Body className="card-body">
                    <Card.Text>
                        Credits: {course.credits}
                    </Card.Text>
                    <Card.Text>
                        From: {course.timeStart} To: {course.timeEnd}
                    </Card.Text>

                    <Card.Text>
                        Days: {course.schedule}
                    </Card.Text>
                    <Col className="column-dropdown">
                    </Col>
                  
                    <Col className="card-accordion">
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Details</Accordion.Header>
                                <Accordion.Body>
                                    Course description: {course.description}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Card.Body>
            </Card>
        </div>
    );
}
