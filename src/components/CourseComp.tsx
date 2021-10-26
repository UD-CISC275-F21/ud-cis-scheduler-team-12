import React from "react";
import { Card, Accordion } from "react-bootstrap/";
import "../css/courses.css";
import "../assets/courses";
import { Course } from "../interfaces/course";


function CourseComp({ course1 }: {
    course1: Course 
    }):  JSX.Element {
    
    return (
        <div>
            <Card className="card">
                <Card.Body>
                    <Card.Title>{course1.name}</Card.Title>
                    <Card.Text>
                    Course ID: {course1.id}
                    </Card.Text>

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