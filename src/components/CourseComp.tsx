import React from "react";
import { Card,Col, Row, Container, Accordion } from "react-bootstrap/";
import "../css/courses.css";
import "../assets/courses";
import { Course } from "../interfaces/course";
import { GrEdit } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";

import courseData from "../assets/courses";
import { motion } from "framer-motion";


function CourseComp({ course, SET_SEMESTER_MAP, SEMESTER_MAP, semesterSelect }: {
    course: Course,
    SET_SEMESTER_MAP: (m: Record<string, Course[]>) => void, SEMESTER_MAP: Record<string, Course[]>,
    semesterSelect: string | null
}):  JSX.Element {
    
    function removeCourse(id: number) {
        const NEW_SEMESTER_MAP = {...SEMESTER_MAP};
        
        NEW_SEMESTER_MAP[""+semesterSelect] = NEW_SEMESTER_MAP[""+semesterSelect].filter(item => item !== courseData[id]);
        SET_SEMESTER_MAP(NEW_SEMESTER_MAP);
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
            <motion.div
                drag
                dragConstraints={{
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0
                }}
                onDragEnd={() => removeCourse(course.id)}
                dragElastic={1}
                initial={{ opacity: 0, x: 180 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    ease: "easeInOut",
                    duration: 0.5,
                }}>
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
            </motion.div>
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
