import React from "react";
import { Card,Col, Row, Container, Accordion } from "react-bootstrap/";
import "../css/courses.css";
import "../assets/courses";
import { Course } from "../interfaces/course";
import { GrEdit } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";

import courseData from "../assets/courses";


function CourseComp({ course, setClassList, classList, SET_SEMESTER_MAP, SEMESTER_MAP, semesterSelect }: {
    course: Course,
    setClassList: (l: Course[]) => void, classList: Course[],
    SET_SEMESTER_MAP: (m: Record<string, Course[]>) => void, SEMESTER_MAP: Record<string, Course[]>,
    semesterSelect: string | null
}):  JSX.Element {
    
    function removeCourse(id: number) {
        setClassList(classList.filter(classList => classList !== courseData[id])); // Removing course based on course id
        //SET_SEMESTER_MAP(SEMESTER_MAP[""+semesterSelect].filter(SEMESTER_MAP[""+semesterSelect] => SEMESTER_MAP[""+semesterSelect] !== courseData));
    }

    function editDescription() {
        <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
        </form>;
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
