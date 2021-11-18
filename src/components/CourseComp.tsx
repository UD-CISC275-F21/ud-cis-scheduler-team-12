import React, { useState } from "react";
import { Card,Col, Row, Container, Accordion, OverlayTrigger, Popover } from "react-bootstrap/";
import "../css/courses.css";
import "../assets/courses";
import { GrEdit } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import courseData from "../assets/courses";
import TextInput from "./TextInput";
import TitleInput from "./TitleInput";
import { Course } from "../interfaces/course";

export default function CourseComp({ course, SET_SEMESTER_MAP, SEMESTER_MAP, semesterSelect }: {
    course: Course,
    SET_SEMESTER_MAP: (m: Record<string, Course[]>) => void, SEMESTER_MAP: Record<string, Course[]>,
    semesterSelect: string | null
}):  JSX.Element {
    
    const [input, setInput] = useState<string>("");
    const [visable, setVisable] = useState<number>(0);
    const [description, setDescription] = useState<string>(course.description);
    const [title, setTitle] = useState<string>(course.name);
    const [titleVisable, setTitleVisable] = useState<number>(0);

 
    function editTitle() {
        setTitleVisable(1);
    }

    function submitTitle() {
        setTitle(input);
        setTitleVisable(0);
    }

    function editDescription() {

        setVisable(1);
        //alert(input);
    }

    function submitDescription() {
        setDescription(input);
        setVisable(0);
    }
    
    function removeCourse(id: number) {
        const NEW_SEMESTER_MAP = {...SEMESTER_MAP};
        
        for (const [key, value] of Object.entries(courseData)) {
            console.log([key,value]);
            Object.keys(value.preReq).forEach(courseName => {
                //console.log(courseName);
                if(courseName === courseData[id].name) {
                    console.log(`found ${courseName}`);
                    value.preReq[courseName] = false;
                }
            });
        }
        for (const [key, value] of Object.entries(SEMESTER_MAP)) {
            console.log([key,value]);
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

    function updateColor(course: Course) {
        return course.preReqCheck;
    }

    return (
        <div>           
            <OverlayTrigger trigger="hover" show={ Object.values(course.preReq).every(course => course === true) ? false : true } placement={ SEMESTER_MAP[""+semesterSelect].indexOf(course) > 2 ? "bottom" : "top" } overlay={
                <Popover className="popover" id="tooltip-preReq">Missing: {Object.keys(course.preReq).filter(courseName => 
                    course.preReq[courseName] === false).map(course => 
                    <div key={course}>{course}</div>)} </Popover>}>
                <Card className="card" style={{ width: "100%", color: updateColor(course) }}>
                    <Container>
                        <Row>
                            <Col>
                                <Card.Title>{title}</Card.Title>
                                { titleVisable === 1 && <TitleInput 
                                    setInput={setInput}
                                ></TitleInput> }
                                {titleVisable === 1 && <button onClick={() => submitTitle()}>Submit</button>
                                }
                            
                                <button className="delete-button" onClick={() => removeCourse(course.id)}>
                                    <MdDeleteForever></MdDeleteForever></button>
                                <button className="edit-button" onClick={() => editTitle()}><GrEdit></GrEdit></button>
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
                                        {description}
                                        { visable === 1 && <TextInput 
                                            setInput={setInput}
                                        ></TextInput>}
                                        
                                        { visable === 0 && <button className="edit-desc-button" onClick={() => editDescription()}><GrEdit></GrEdit></button> }
                                        { visable === 1 && <button className="" onClick={() => submitDescription()}>Enter</button> }   
                                        
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