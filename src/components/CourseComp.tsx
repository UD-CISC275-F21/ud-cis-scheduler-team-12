import React from "react";
import { Card, Dropdown, DropdownButton, Col, Row, Container, Accordion } from "react-bootstrap/";
import "../css/courses.css";
import "../assets/courses";
import { Course } from "../interfaces/course";
import { MdDeleteForever } from "react-icons/md";
import courseData from "../assets/courses";


function CourseComp({ course, setNumberOfCourses, numberOfCourses, setClassList, classList }: {
    course: Course, setNumberOfCourses: (s: number) => void, numberOfCourses: number,
    setClassList: (l: Course[]) => void, classList: Course[]
}):  JSX.Element {
    
    function removeCourse(id: number) {
        numberOfCourses === 0 ? setNumberOfCourses(0) : setNumberOfCourses(numberOfCourses-1);
        setClassList(classList.filter(classList => classList !== courseData[id])); // Removing course based on course id
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
                            <button className="delete-button" onClick={() => removeCourse(course.id)}>
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
