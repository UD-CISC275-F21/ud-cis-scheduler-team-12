import React from "react";
import { Card,Col, Row, Container, Accordion } from "react-bootstrap/";
import "../css/courses.css";
import "../assets/courses";
import { GrEdit } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import courseData from "../assets/courses";
import { Course } from "../interfaces/course";


export default function CourseCard({ course, SET_SAVE_BIN, SAVE_BIN }: {
    course: Course,
    SET_SAVE_BIN: (b: Course[]) => void, SAVE_BIN: Course[]
}): JSX.Element {
    
    function editDescription() {
        <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
        </form>;
    }

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
                                    <button className="edit-button" onClick={() => editDescription()}>
                                        <GrEdit></GrEdit></button>
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
