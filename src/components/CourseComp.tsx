import React from "react";
import { Card, Dropdown, DropdownButton, Col, Row, Container, Accordion } from "react-bootstrap/";
import "../css/courses.css";
import "../assets/courses";
import { Course } from "../interfaces/course";
import { MdDeleteForever } from "react-icons/md";


function CourseComp({ course, setNumberOfCourses, numberOfCourses }: {
    course: Course, setNumberOfCourses: (s: number) => void, numberOfCourses: number
}):  JSX.Element {
    
    function removeCourse() {
        numberOfCourses === 0 ? setNumberOfCourses(0) : setNumberOfCourses(numberOfCourses-1);
    }


    return (
        <div>
            <Card className="card" style={{ width: "15rem" }}>
                <Container>
                    <Row>
                        <Col>
                            <Card.Title>{course.name}</Card.Title>
                        </Col>
                        <Col>
                            <button className="delete-button" onClick={removeCourse}>
                                <MdDeleteForever></MdDeleteForever></button>
                        </Col>                        

                    </Row>
                </Container>
                <Card.Body className="card-body">

                    <Card.Text>
                    From: {course.timeStart} To: {course.timeEnd}
                    </Card.Text>

                    <Card.Text>
                    Days: {course.schedule}
                    </Card.Text>
                    <Col className="column-dropdown">
                        <Card.Header className="card-header">
                            <DropdownButton id="dropdown-button" title="" className="dropdown-button">
                                <button onClick={removeCourse}>Remove Course</button>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </DropdownButton>
                        </Card.Header>
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

export default CourseComp;

/*
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                        bruh
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
*/