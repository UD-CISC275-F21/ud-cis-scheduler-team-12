import React from "react";
import { Col, Row, Container, ToggleButtonGroup, ToggleButton } from "react-bootstrap";

import CourseComp from "./CourseComp";
import ClearSemesterButton from "./ClearSemesterButton";
import "../css/board.css";
import { Course } from "../interfaces/course";
import courseData from "../assets/courses";

import buttonList from "../assets/buttonList";
import { AnimatePresence, motion } from "framer-motion";

export function Board({ setSemesterSelect, semesterSelect, SET_SEMESTER_MAP, SEMESTER_MAP, setSemesterHeader, semesterHeader, SET_SAVE_BIN, SAVE_BIN, binVisible }: {
    setSemesterSelect: (s: string | null) => void, semesterSelect: string | null,
    SET_SEMESTER_MAP: (m: Record<string, Course[]>) => void, SEMESTER_MAP: Record<string, Course[]>,
    setSemesterHeader: (s: string) => void, semesterHeader: string,
    SET_SAVE_BIN: (s: Course[]) => void, SAVE_BIN: Course[],
    binVisible: boolean
}):  JSX.Element {

    // const list variable to map out classList useState variable
    const classListToPrint = SEMESTER_MAP[""+semesterSelect];

    const buttonToggle = ""+semesterSelect;

    function removeCourse(id: number) {
        const NEW_SEMESTER_MAP = {...SEMESTER_MAP};
        
        if (binVisible){
            if (SAVE_BIN.includes(courseData[id])) {
                alert(`${courseData[id].name} is already added to your bin. It will now be removed from the semester.`);
            } else {
                SET_SAVE_BIN([...SAVE_BIN, courseData[id]]);
            }
        }
        for (const [key, value] of Object.entries(courseData)) {
            console.log([key,value]);
            Object.keys(value.preReq).forEach(courseName => {
                // console.log(courseName);
                if(courseName === courseData[id].name) {
                    console.log(courseName);
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

    function handleSelect (val: number) {
        setSemesterSelect(""+val);
        setSemesterHeader(buttonList[val-1].name);
    }

    function checkPreReqWarning(key: string) {
        let flag = false;
        SEMESTER_MAP[key].forEach(course => {
            if(course.preReqCheck === "red"){
                flag = true;
            }
        });
        return flag;
    }

    function updateColor(course: Course) {
        return course.preReqCheck;
    }

    return (
        <div data-testid="semester-view">
            <div>
                <h2>Semester View - {semesterHeader}</h2>
                <ToggleButtonGroup className="semester-button" name="options" value={+buttonToggle} onChange={handleSelect}>
                    {buttonList.map((radio, idx) =>
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant={ checkPreReqWarning(""+radio.value) ? "outline-warning" : SEMESTER_MAP[""+radio.value].length > 0 ? "outline-success" :  "outline-danger" }
                            name="radio"
                            value={radio.value}
                        >
                            {radio.name}
                        </ToggleButton>
                    )}
                </ToggleButtonGroup>
            </div>

            <div>
                <Container data-testid="board">
                    <Row data-testid="board-row-1" xs={1} md={3}>
                        <AnimatePresence>
                            {classListToPrint.map(classListToPrint =>
                                <motion.div
                                    key={classListToPrint.id}
                                    drag
                                    dragConstraints={{
                                        top: 0,
                                        bottom: 0,
                                        right: 0,
                                        left: 0
                                    }}
                                    onDragEnd={() => removeCourse(classListToPrint.id)}
                                    dragElastic={1}
                                    initial={{ opacity: 0, x: 180 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, y: -200, x: 180 }}
                                    transition={{
                                        ease: "easeInOut",
                                        duration: 0.4
                                    }}>
                                    <Col >
                                        <CourseComp
                                            course={classListToPrint}
                                            SET_SEMESTER_MAP={SET_SEMESTER_MAP}
                                            SEMESTER_MAP={SEMESTER_MAP}
                                            semesterSelect={semesterSelect}
                                        ></CourseComp>
                                    </Col>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Row>
                </Container>
                { SEMESTER_MAP[""+semesterSelect].length > 0 && <ClearSemesterButton
                    SET_SEMESTER_MAP={SET_SEMESTER_MAP}
                    SEMESTER_MAP={SEMESTER_MAP}
                    semesterSelect={semesterSelect}
                ></ClearSemesterButton> }
            </div>

        </div>
    );
}