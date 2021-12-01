// Source Imports
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Col, Container, Offcanvas, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import { Course } from "../interfaces/course";

// Component Imports
import courseData from "../assets/courses";
import BinCourseCard from "./BinCourseCard";
import ClearBinButton from "./ClearBinButton";

// Design Imports
import "../css/SaveBin.css";
import SpiderMan from "../assets/images/spiderman_meme.jpeg";

export default function SaveBin({ setBinVisible, binVisible, SET_SAVE_BIN, SAVE_BIN, SET_SEMESTER_MAP, SEMESTER_MAP, semesterSelect }: {
    setBinVisible: (b: boolean) => void, binVisible: boolean,
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
            Swal.fire({
                title: "Duplicate Course!",
                text: `${courseData[id].name} is already added to this semester. Please select another course.`,
                icon: "error",
                imageUrl: SpiderMan
            });
        } else {
            // After adding course to the semester, remove it from the save-later bin
            SEMESTER_MAP[""+semesterSelect].length === 6 ? 
                Swal.fire(
                    "Getting Studious!",
                    "Warning: Max number of courses selected for semester 📚.",
                    "error"
                )
                : (NEW_SEMESTER_MAP[""+semesterSelect].push(courseData[id]), SET_SEMESTER_MAP(NEW_SEMESTER_MAP),
                removeCourse(id));
        }

        

    }

    function removeCourse(id: number) {
        SET_SAVE_BIN(SAVE_BIN.filter(item => item !== courseData[id]));
    }
    
    return(
        <div>
            <Offcanvas className="bin" show={binVisible} onHide={() => setBinVisible(false)} placement="bottom" scroll={true} backdrop={false}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Save For Later</Offcanvas.Title>
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
                                            <BinCourseCard
                                                course={binListToPrint}
                                                SET_SAVE_BIN={SET_SAVE_BIN}
                                                SAVE_BIN={SAVE_BIN}
                                            ></BinCourseCard>
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
