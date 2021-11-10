import React, { useState } from "react";
import { Card,Col, Row, Container, Accordion } from "react-bootstrap/";
import "../css/courses.css";
import "../assets/courses";
import { Course } from "../interfaces/course";
import { GrEdit } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import courseData from "../assets/courses";
import TextInput from "./TextInput";
import TitleInput from "./TitleInput";


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
        NEW_SEMESTER_MAP[""+semesterSelect] = NEW_SEMESTER_MAP[""+semesterSelect].filter(item => item !== courseData[id]);
        SET_SEMESTER_MAP(NEW_SEMESTER_MAP);
    }


    return (
        <div>           
            <Card className="card" style={{ width: "19rem" }}>
                <Container>
 
                    <Row>
                        <Col>
                            <Card.Title>{title}</Card.Title>
                            { titleVisable === 1 && <TitleInput 
                                setInput={setInput}
                            ></TitleInput> }
                            {titleVisable === 1 && <button onClick={() => submitTitle()}>Submit</button>
                            }
                        </Col>
                        <Col>
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
                  
                    <Col>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Details</Accordion.Header>
                                <Accordion.Body>
                                    {description}
                                    { visable === 1 && <TextInput 
                                        setInput={setInput}
                                    ></TextInput>}
                                    
                                    <button className="" onClick={() => editDescription()}>Edit</button>
                                    <button className="" onClick={() => submitDescription()}>Enter</button>    
                                    
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>


                    </Col>
                </Card.Body>
            </Card>
        </div>
    );
}