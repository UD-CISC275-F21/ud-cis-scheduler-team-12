// Source Imports
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Col, Container, Offcanvas, Row } from "react-bootstrap";
import { Course } from "../../interfaces/course";

// Function Imports
import updateColor from "../../utilities/updateColor";
import removeCourseFromBin from "../../utilities/removeCourseFromBin";
import findCourseInSemester from "../../utilities/findCourseInSemester";
import findCourseInEntirePlan from "../../utilities/findCourseInEntirePlan";
import preReqAlert from "../../utilities/preReqAlert";
import duplicateCourseAlert from "../../utilities/duplicateCourse";

// Component Imports
import BinCourseCard from "../Card_Components/BinCourseCard";
import ClearBinButton from "./ClearBinButton";

// Design Imports
import "../../css/SaveBin.css";
import maxNumberOfCoursesAlert from "../../utilities/maxNumberOfCourses";

// Breadcrumbs:
// Main Page / SaveBin - bin that pops up to save courses for later
export default function SaveBin({ setBinVisible, binVisible, SET_SAVE_BIN, SAVE_BIN, SET_SEMESTER_MAP, SEMESTER_MAP, semesterSelect, courseData }: {
    setBinVisible: (b: boolean) => void, binVisible: boolean,
    SET_SAVE_BIN: (s: Course[]) => void, SAVE_BIN: Course[],
    SET_SEMESTER_MAP: (m: Record<string, Course[]>) => void, SEMESTER_MAP: Record<string, Course[]>,
    semesterSelect: string | null,
    courseData: Course[]
}): JSX.Element {

    // const list variable to map out SAVE_BIN useState variable
    const binListToPrint = SAVE_BIN;

    function addCourse(id: number) {
        const NEW_SEMESTER_MAP = {...SEMESTER_MAP};
        const foundCourse = findCourseInSemester(id, semesterSelect, SEMESTER_MAP, courseData);
        const foundCourseInPlan = findCourseInEntirePlan(id, SEMESTER_MAP);
        
        // If there are less than 6 courses, add the selected course onto the end of the classList
        if (foundCourse || foundCourseInPlan) {
            foundCourse ? duplicateCourseAlert(id, "semester", courseData) : duplicateCourseAlert(id, "plan", courseData);
        } else {
            //  PREREQ MET IN PRIOR SEMESTER
            if (Object.keys(courseData[id].preReq).length > 0){
                if (Object.values(courseData[id].preReq).every(course => course === true)){
                    courseData[id].preReqCheck = "black";
                } else {
                    preReqAlert();
                    courseData[id].preReqCheck = "red";
                }
                updateColor(courseData[id]);
            }

            if (SEMESTER_MAP["" + semesterSelect].length === 6) {
                maxNumberOfCoursesAlert();
            } else {
                Object.values(courseData).forEach(value => {
                    Object.keys(value.preReq).forEach(courseName => {
                        if(courseName === courseData[id].name) {
                            value.preReq[courseName] = true;
                        }
                    });
                });
                
                NEW_SEMESTER_MAP["" + semesterSelect].push(courseData[id]);
                SET_SEMESTER_MAP(NEW_SEMESTER_MAP);
                removeCourseFromBin(id, SET_SAVE_BIN, SAVE_BIN, courseData);
            }

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
                                                courseData={courseData}
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
