// Source Imports
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Col, Row, Container } from "react-bootstrap";
import { Course } from "../../../interfaces/course";
import courseData from "../../../assets/courses";

// Function Imports
import removePreReq from "../../../utilities/removePreReq";

// Component Imports
import CourseComp from "../../Card_Components/CourseComp";

// Design Imports
import "../../../css/board.css";
import duplicateCourseAlert from "../../../utilities/duplicateCourse";

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
                    duplicateCourseAlert(id, "bin");
                } else {
                    SET_SAVE_BIN([...SAVE_BIN, courseData[id]]);
                }
            }
            removePreReq(courseData[id], SEMESTER_MAP);
        }
        NEW_SEMESTER_MAP[""+semesterSelect] = NEW_SEMESTER_MAP[""+semesterSelect].filter(item => item !== courseData[id]);
        SET_SEMESTER_MAP(NEW_SEMESTER_MAP);
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
