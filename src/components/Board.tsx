import React from "react";
import { Col, Row, Container, ToggleButtonGroup, ToggleButton } from "react-bootstrap";

import CourseComp from "./CourseComp";
import ClearSemesterButton from "./ClearSemesterButton";
import "../css/board.css";
import { Course } from "../interfaces/course";
import courseData from "../assets/courses";

import buttonList from "../assets/buttonList";
import { AnimatePresence, motion } from "framer-motion";

export function Board({ setSemesterSelect, semesterSelect, SET_SEMESTER_MAP, SEMESTER_MAP, setSemesterHeader, semesterHeader }: {
    setSemesterSelect: (s: string | null) => void, semesterSelect: string | null,
    SET_SEMESTER_MAP: (m: Record<string, Course[]>) => void, SEMESTER_MAP: Record<string, Course[]>,
    setSemesterHeader: (s: string) => void, semesterHeader: string
}):  JSX.Element {

    // const list variable to map out classList useState variable
    const classListToPrint = SEMESTER_MAP[""+semesterSelect];

    const buttonToggle = ""+semesterSelect;

    function removeCourse(id: number) {
        const NEW_SEMESTER_MAP = {...SEMESTER_MAP};
        
        NEW_SEMESTER_MAP[""+semesterSelect] = NEW_SEMESTER_MAP[""+semesterSelect].filter(item => item !== courseData[id]);
        SET_SEMESTER_MAP(NEW_SEMESTER_MAP);
    }

    function handleSelect (val: number) {
        setSemesterSelect(""+val);
        setSemesterHeader(buttonList[val-1].name);
    }

    return (
        <div>
            <div>
                <h2>Semester View - {semesterHeader}</h2>
                <ToggleButtonGroup className="semester-button" name="options" value={+buttonToggle} onChange={handleSelect}>
                    {buttonList.map((radio, idx) =>
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant={ SEMESTER_MAP[""+radio.value].length > 0 ? "outline-success" : "outline-danger"}
                            name="radio"
                            value={radio.value}
                        >
                            {radio.name}
                        </ToggleButton>
                    )}
                </ToggleButtonGroup>
            </div>

            <div>
                <Container>
                    <Row xs={1} md={3}>
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