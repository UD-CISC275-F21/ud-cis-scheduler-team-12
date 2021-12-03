// Source Imports
import React, { useState } from "react";
import { Card,Col, Row, Container, Accordion, OverlayTrigger, Popover, Form } from "react-bootstrap/";
import { MdDeleteForever } from "react-icons/md";
import courseData from "../../assets/courses";
import { Course } from "../../interfaces/course";
import Swal from "sweetalert2";

// Design Imports
import "../../css/courses.css";
import { motion } from "framer-motion";
import SpiderMan from "../../assets/images/spiderman_meme.jpeg";

// Breadcrumbs:
// Main Page / Board / CourseComp - Course Card that holds information on course
export default function CourseComp({ course, SET_SEMESTER_MAP, SEMESTER_MAP, semesterSelect }: {
    course: Course,
    SET_SEMESTER_MAP: (m: Record<string, Course[]>) => void, SEMESTER_MAP: Record<string, Course[]>,
    semesterSelect: string | null
}):  JSX.Element {
    
    //visibility states for courses
    const [titleEditMode, setTitleEditMode] = useState<boolean>(false);
    const [descriptionEditMode, setDescriptionEditMode] = useState<boolean>(false);
    const [creditsEditMode, setCreditsEditMode] = useState<boolean>(false);
    
    function removeCourse(id: number) {
        const NEW_SEMESTER_MAP = {...SEMESTER_MAP};

        if (courseData[id].name === "") {
            NEW_SEMESTER_MAP[""+semesterSelect] = NEW_SEMESTER_MAP[""+semesterSelect].filter(item => item !== courseData[id]);
            delete courseData[id];
        } else {
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
        }
        NEW_SEMESTER_MAP[""+semesterSelect] = NEW_SEMESTER_MAP[""+semesterSelect].filter(item => item !== courseData[id]);
        SET_SEMESTER_MAP(NEW_SEMESTER_MAP);
    }

    function updateColor(course: Course) {
        return course.preReqCheck;
    }

    function isCourseInCourseData(name: string) {
        let flag = false;
        Object.values(courseData).forEach(course => {
            if (course.name.toLowerCase().replace(/\s/g, "") === name.toLowerCase().replace(/\s/g, "")) {
                flag = true;
            }
        });
        return flag;
    }

    function changeName(id: number, enteredName: string) {
        const NEW_SEMESTER_MAP = {...SEMESTER_MAP};
        const duplicateCourse = isCourseInCourseData(enteredName);
        
        if (!duplicateCourse) {
            // Removing Pre-Req for all other courses
            Object.values(courseData).forEach(item => {
                Object.keys(item.preReq).forEach(req => {
                    if (req === enteredName) {
                        item.preReq[req] = true;
                    } else if (req === courseData[id].name) {
                        item.preReq[req] = false;
                    }
                });
                if (Object.values(item.preReq).every(course => course === true)){
                    item.preReqCheck = "black";
                } else {
                    item.preReqCheck = "red";
                }
                updateColor(item);
            });
            courseData[id].name = enteredName;
            SET_SEMESTER_MAP(NEW_SEMESTER_MAP);
            setTitleEditMode(false);
        } else {
            Swal.fire({
                title: "Course Already Exists!",
                text: `${enteredName} already exists. Please enter another course name.`,
                icon: "error",
                imageUrl: SpiderMan
            });
        }
    }

    function changeDescription(id: number, enteredDescription: string) {
        const NEW_SEMESTER_MAP = {...SEMESTER_MAP};
        
        courseData[id].description = enteredDescription;
        SET_SEMESTER_MAP(NEW_SEMESTER_MAP);
        setDescriptionEditMode(false);
    }

    function changeCredits(id: number, enteredCredits: string) {
        const NEW_SEMESTER_MAP = {...SEMESTER_MAP};
        
        courseData[id].credits = +enteredCredits;
        SET_SEMESTER_MAP(NEW_SEMESTER_MAP);
        setCreditsEditMode(false);
    }

    const handleSubmit = (id: number, cardProperty: string) => (event: { preventDefault: () => void; stopPropagation: () => void; currentTarget: HTMLFormElement; }) => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget;
        
        switch(cardProperty){
        case "name":
            changeName(id, form.floatingInput.value);
            break;
        case "credits":
            changeCredits(id, form.floatingInput.value);
            break;
        case "description":
            changeDescription(id, form.floatingInput.value);
            break;
        }
    };


    return (
        <div>
            
            <OverlayTrigger trigger={["hover", "focus"]} show={ Object.values(course.preReq).every(course => course === true) ? false : true } placement={ SEMESTER_MAP[""+semesterSelect].indexOf(course) > 2 ? "bottom" : "top" } overlay={
                <Popover className="popover" id="tooltip-preReq">Missing: {Object.keys(course.preReq).filter(courseName => 
                    course.preReq[courseName] === false).map(course => 
                    <div key={course}>{course}</div>)} </Popover>}>
                <Card className="card" data-testid="course-card" style={{ width: "100%", color: updateColor(course) }}>
                    <Container>
                        <Row>
                            <Col>
                                <motion.div
                                    onClick={() => setTitleEditMode(!titleEditMode)}
                                >
                                    <Card.Title className="card-title">
                                        { !titleEditMode && course.name}
                                        { (course.name === "" || titleEditMode) && <Form onSubmit={handleSubmit(course.id, "name")}>
                                            <Form.Control 
                                                style={{
                                                    color: "black",
                                                    outline: "0",
                                                    border: "1px solid #fff",
                                                    boxShadow: "none",
                                                    textAlign: "center",
                                                    
                                                }}
                                                autoFocus
                                                size="lg" 
                                                id="floatingInput" 
                                                type="task" 
                                                placeholder={ course.name === "" ? "Enter Name" : course.name }
                                            />
                                        </Form> }
                                    </Card.Title>
                                </motion.div>                
                                <button className="delete-button" onClick={() => removeCourse(course.id)}>
                                    <MdDeleteForever></MdDeleteForever>
                                </button>
                            </Col>                        
                        </Row>
                    </Container>
                    <Card.Body className="card-body">
                        <motion.div
                            onClick={() => setCreditsEditMode(!creditsEditMode)}
                        >
                            <Card.Text>
                                Credits: { (!creditsEditMode && course.credits !== 0) && course.credits}
                                { (course.credits === 0 || creditsEditMode) && <Form onSubmit={handleSubmit(course.id, "credits")}>
                                    <Form.Control 
                                        style={{
                                            color: "black",
                                            outline: "0",
                                            border: "1px solid #fff",
                                            boxShadow: "none",
                                            textAlign: "center",
                                            
                                        }}
                                        autoFocus
                                        size="sm" 
                                        id="floatingInput" 
                                        type="task" 
                                        placeholder={ course.credits === 0 ? "Enter Credit Hours" : ""+course.credits }
                                    />
                                </Form> }
                            </Card.Text>
                        </motion.div>
                        <Card.Text>
                            From: {course.timeStart} To: {course.timeEnd}
                        </Card.Text>
                        

                        <Card.Text>
                            Days: {course.schedule}
                        </Card.Text>
                        <Col className="column-dropdown">
                        </Col>
                    
                        <Col className="card-accordion">
                            <Accordion defaultActiveKey={course.description === "" ? "0" : "1"}>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header onClick={() => setDescriptionEditMode(false)}>Details</Accordion.Header>
                                    <motion.div
                                        onClick={() => setDescriptionEditMode(!descriptionEditMode)}
                                    >
                                        <Accordion.Body className="card-description">
                                            { !descriptionEditMode && course.description}
                                            { (course.description === "" || descriptionEditMode) && <Form onSubmit={handleSubmit(course.id, "description")}>
                                                <Form.Control 
                                                    style={{
                                                        color: "black",
                                                        outline: "0",
                                                        border: "1px solid #fff",
                                                        boxShadow: "none",
                                                        textAlign: "center",
                                                        
                                                    }}
                                                    autoFocus
                                                    size="sm" 
                                                    id="floatingInput" 
                                                    type="task" 
                                                    placeholder={ course.description === "" ? "Enter Description" : course.description }
                                                />
                                            </Form> }
                                        </Accordion.Body>
                                    </motion.div>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    </Card.Body>
                </Card>
            </OverlayTrigger>
        </div>    
    );
}
