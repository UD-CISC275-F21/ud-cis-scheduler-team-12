import React from "react";
import { Card, Dropdown, DropdownButton, Col, Row, Container } from "react-bootstrap/";
import "../css/courses.css";
import "../assets/courses";
import { Course } from "../interfaces/course";



function CourseComp({ course1 }: {
    course1: Course 
    }):  JSX.Element {
    
    return (
        <div>
            <Card className="card">
                <Container>
                    <Row>
                        <Col>
                            <Card.Title>{course1.name}: {course1.id}</Card.Title>
                        </Col>
                        <Col className="column-dropdown">
                            <Card.Header className="card-header">
                                <DropdownButton id="dropdown-button" title="" className="dropdown-button">
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </DropdownButton>
                            </Card.Header>
                        </Col>
                        
                    </Row>
                </Container>
                <Card.Body className="card-body">

                    <Card.Text>
                    From: {course1.timeStart} To: {course1.timeEnd}
                    </Card.Text>

                    <Card.Text>
                    Days: {course1.schedule}
                    </Card.Text>
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