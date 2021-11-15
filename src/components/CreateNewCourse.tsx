import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Col, Container, Offcanvas, Row } from "react-bootstrap";

import "../css/SaveBin.css";

import courseData from "../assets/courses";
import CreateNewCourseCard from "./BinCourseCard";
import ClearBinButton from "./ClearBinButton";
import Course from "../interfaces/course";

export default function CreateNewCourse({ setNewCourseVisible, newCourseVisible, SET_SAVE_BIN, SAVE_BIN, SET_SEMESTER_MAP, SEMESTER_MAP, semesterSelect }: 
    {
    setNewCourseVisible: (b: boolean) => void, newCourseVisible: boolean,
    SET_SAVE_BIN: (s: Course[]) => void, SAVE_BIN: Course[],
    SET_SEMESTER_MAP: (m: Record<string, Course[]>) => void, SEMESTER_MAP: Record<string, Course[]>,
    semesterSelect: string | null
}): JSX.Element {

    // const list variable to map out SAVE_BIN useState variable
    const binListToPrint = SAVE_BIN;

    function addCourse(id: number) {
        const NEW_SEMESTER_MAP = {...SEMESTER_MAP};
        
        // If there are less than 6 courses, add the selected course onto the end of the classList
        if (SEMESTER_MAP[""+semesterSelect].includes(courseData[id])) {
            alert(`${courseData[id].name} is already added to this semester. Please select another course.`);
        } else {
            // for (const [key, value] of Object.entries(SEMESTER_MAP)) {
            //     console.log(key,value);
            //     if (SEMESTER_MAP[key].includes(courseData[id])) {
            //         alert(`Warning: ${courseData[id].name} is already added to semester ${key}.`);
            //     }
            // }

            // After adding course to the semester, remove it from the save-later bin
            SEMESTER_MAP[""+semesterSelect].length === 6 ? alert("Max number of courses selected for semester.")
                : (NEW_SEMESTER_MAP[""+semesterSelect].push(courseData[id]), SET_SEMESTER_MAP(NEW_SEMESTER_MAP),
                removeCourse(id));
        }

        

    }

    function removeCourse(id: number) {
        SET_SAVE_BIN(SAVE_BIN.filter(item => item !== courseData[id]));
    }
    return(
        <div>
            <Offcanvas className="bin" show={newCourseVisible} onHide={() => setNewCourseVisible(false)} placement="bottom" scroll={true} backdrop={false}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Create a New Course</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="bin-body">
                    <ClearBinButton
                        SET_SAVE_BIN={SET_SAVE_BIN}
                    ></ClearBinButton>
                    <Container>
                        <Row xs={1} md={3}>
                            <AnimatePresence>
                                {binListToPrint.map(binListToPrint =>
                                    <motion.div
                                        key={binListToPrint.id}
                                        drag
                                        dragConstraints={{
                                            top: 0,
                                            bottom: 0,
                                            right: 0,
                                            left: 0
                                        }}
                                        onDragEnd={() => addCourse(binListToPrint.id)}
                                        dragElastic={1}
                                        initial={{ opacity: 0, x: 180 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, y: -200, x: 180 }}
                                        transition={{
                                            ease: "easeInOut",
                                            duration: 0.4
                                        }}>
                                        <Col >
                                            <CreateNewCourseCard
                                                course={binListToPrint}
                                                SET_SAVE_BIN={SET_SAVE_BIN}
                                                SAVE_BIN={SAVE_BIN}
                                            ></CreateNewCourseCard>
                                        </Col>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </Row>
                    </Container>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}
