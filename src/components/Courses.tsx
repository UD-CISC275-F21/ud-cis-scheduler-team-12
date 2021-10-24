import React from "react";
import { Card } from "react-bootstrap/";
import "../css/courses.css";
import "../assets/courses.json";
import { Course } from "../interfaces/course";


function CourseComp({ course1 }: {
    course1: Course
    }):  JSX.Element {
    
    return (
        <Card className="card" >
            <Card.Body>
                <Card.Title>{ course1.name }</Card.Title>
                <Card.Text>
                Course ID: {course1.id}
                From: {course1.timeStart} To: {course1.timeEnd}
                Days: {course1.schedule}
                </Card.Text>
            </Card.Body>
        </Card>
    
    );
}

export default CourseComp;
