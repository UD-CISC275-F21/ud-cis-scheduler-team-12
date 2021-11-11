import React from "react";
import { Card,Col, Row, Container, Accordion, OverlayTrigger, Tooltip, Popover } from "react-bootstrap/";
import "../css/courses.css";
import "../assets/courses";
import { Course } from "../interfaces/course";
import { GrEdit } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";

import courseData from "../assets/courses";


function CourseComp({ course, SET_SEMESTER_MAP, SEMESTER_MAP, semesterSelect }: {
    course: Course,
    SET_SEMESTER_MAP: (m: Record<string, Course[]>) => void, SEMESTER_MAP: Record<string, Course[]>,
    semesterSelect: string | null
}):  JSX.Element {
    
    function removeCourse(id: number) {
        const NEW_SEMESTER_MAP = {...SEMESTER_MAP};
        
        for (const [key, value] of Object.entries(courseData)) {
            //console.log([key,value]);
            Object.keys(value.preReq).forEach(courseName => {
                //console.log(courseName);
                if(courseName === courseData[id].name) {
                    console.log(courseName);
                    value.preReq[courseName] = false;
                }
            });
        }
        for (const [key, value] of Object.entries(SEMESTER_MAP)) {
            SEMESTER_MAP[key].forEach(item => {
                if(Object.keys(item.preReq).length > 0) {
                    if (Object.values(item.preReq).every(course => course === true)){
                        item.preReqCheck = "black";
                    } else {
                        item.preReqCheck = "red";
                    }
                    updateColor(item);
                }
            });
        }
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

    function updateColor(course: Course) {
        return course.preReqCheck;
    }

    // function getMissingPreReq(course: Course) {
    //     Object.keys(course.preReq).forEach(course => {
            
    //     });
    // }


    return (
        <div>           
            <OverlayTrigger trigger="hover" show={ Object.values(course.preReq).every(course => course === true) ? false : true } placement={ SEMESTER_MAP[""+semesterSelect].indexOf(course) > 2 ? "bottom" : "top" } overlay={
                <Popover className="popover" id="tooltip-preReq">Missing: {Object.keys(course.preReq).filter(courseName => 
                    course.preReq[courseName] === false).map(course => 
                    <div key={course}>{course}</div>)} </Popover>}>
                <Card className="card" style={{ width: "19rem", color: updateColor(course) }}>
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
            </OverlayTrigger>
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
