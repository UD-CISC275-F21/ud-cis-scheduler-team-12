// Source Imports
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Col, Row, Container } from "react-bootstrap";
import { Course } from "../../../interfaces/course";
import courseData from "../../../assets/courses";
import Swal from "sweetalert2";

// Component Imports
import CourseComp from "../../Card_Components/CourseComp";

// Design Imports
import "../../../css/board.css";
import SpiderMan from "../../../assets/images/spiderman_meme.jpeg";

// Breadcrumbs:
// Main Page / Board / CourseCardContainer
export default function CourseCardContainer({ SET_SEMESTER_MAP, SEMESTER_MAP, semesterSelect, SET_SAVE_BIN, SAVE_BIN, binVisible }: {
    SET_SEMESTER_MAP: (m: Record<string, Course[]>) => void, SEMESTER_MAP: Record<string, Course[]>,
    semesterSelect: string | null,
    SET_SAVE_BIN: (s: Course[]) => void, SAVE_BIN: Course[],
    binVisible: boolean
}): JSX.Element {

    // const list variable to map out classList useState variable
    const classListToPrint = SEMESTER_MAP[""+semesterSelect];


    function removeCourse(id: number) {
        const NEW_SEMESTER_MAP = {...SEMESTER_MAP};
        
        if (courseData[id].name === "") {
            NEW_SEMESTER_MAP[""+semesterSelect] = NEW_SEMESTER_MAP[""+semesterSelect].filter(item => item !== courseData[id]);
            delete courseData[id];
        } else {
            if (binVisible){
                if (SAVE_BIN.includes(courseData[id])) {
                    Swal.fire({
                        title: "Duplicate Course!",
                        text: `${courseData[id].name} is already added to your bin. It will now be removed from the semester.`,
                        icon: "error",
                        imageUrl: SpiderMan
                    });
                } else {
                    SET_SAVE_BIN([...SAVE_BIN, courseData[id]]);
                }
            }
            Object.values(courseData).forEach(value => {
                Object.keys(value.preReq).forEach(courseName => {
                    if(courseName === courseData[id].name) {
                        value.preReq[courseName] = false;
                    }
                });
            });
            Object.keys(SEMESTER_MAP).forEach(key => {
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
            });
        }
        NEW_SEMESTER_MAP[""+semesterSelect] = NEW_SEMESTER_MAP[""+semesterSelect].filter(item => item !== courseData[id]);
        SET_SEMESTER_MAP(NEW_SEMESTER_MAP);
    }

    function updateColor(course: Course) {
        return course.preReqCheck;
    }

    return(
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
                                    {/* Course Card Component */}
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
        </div>
    );
}
