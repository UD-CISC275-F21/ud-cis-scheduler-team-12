import React, { useState } from "react";
import courseData from "../assets/courses";
import { MdAdd } from "react-icons/md";
import { Course } from "../interfaces/course";

import "../css/DisplayCourses.css";
import SearchBar from "./SearchBar";
import { Accordion, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { Dropdown, DropdownButton } from "react-bootstrap";


export default function DisplayCourses({ SET_SEMESTER_MAP, SEMESTER_MAP, semesterSelect, setBinVisible, binVisible, SET_SAVE_BIN, SAVE_BIN }: {
    SET_SEMESTER_MAP: (m: Record<string, Course[]>) => void, SEMESTER_MAP: Record<string, Course[]>,
    semesterSelect: string | null,
    setBinVisible: (b: boolean) => void, binVisible: boolean,
    SET_SAVE_BIN: (s: Course[]) => void, SAVE_BIN: Course[],
}): JSX.Element {

    const [query, setQuery] = useState<string>("");

    function addCourse(id: number) {
        const NEW_SEMESTER_MAP = {...SEMESTER_MAP};
        const foundCourse = findCourse(id);
        const semesterValue = ""+semesterSelect;
        const preReqCount = courseData[id].preReq.length;
        let preReqCheckCount = 0;
        
        // If bin is open, add courses to bin
        if (binVisible){
            if (SAVE_BIN.includes(courseData[id])) {
                alert(`${courseData[id].name} is already added to your bin. Please select another course.`);
            } else {
                SET_SAVE_BIN([...SAVE_BIN, courseData[id]]);
            }
        } else {
            if (foundCourse) {
                alert(`${courseData[id].name} is already added to this semester. Please select another course.`);
            } else {
                //  PREREQ MET IN PRIOR SEMESTER
                for (const [key, value] of Object.entries(SEMESTER_MAP)) {
                    console.log([key,value]);
                    SEMESTER_MAP[key].forEach(item => {
                        if(courseData[id].preReq.includes(item.name)) {
                            preReqCheckCount++;
                        }
                    });
                    if(+key+1 === +semesterValue) {
                        break;
                    }
                }
                if (preReqCount !== preReqCheckCount) {
                    alert("Warning: Pre-Reqs not met.");
                }

                //  DUPLICATE COURSES IN ANY SEMESTER
                // for (const [key, value] of Object.entries(SEMESTER_MAP)) {
                //     console.log(key,value);
                //     if (SEMESTER_MAP[key].includes(courseData[id])) {
                //         alert(`Warning: ${courseData[id].name} is already added to semester ${key}.`);
                //     }
                // }

                SEMESTER_MAP[""+semesterSelect].length === 6 ? alert("Max number of courses selected for semester.")
                    : (NEW_SEMESTER_MAP[""+semesterSelect].push(courseData[id]), SET_SEMESTER_MAP(NEW_SEMESTER_MAP));

            }
        }
    }

    function findCourse(id: number) {
        return SEMESTER_MAP[""+semesterSelect].includes(courseData[id]);
    }
    

    function showBin() {
        setBinVisible(!binVisible);
    }

    return (
        <div>
            <div className="menu-button">
                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                    <Dropdown.Item as="button">Search Course</Dropdown.Item>
                    <Dropdown.Item as="button">Degree Requirements</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={() => showBin()}>Save Courses for Later</Dropdown.Item>
                </DropdownButton>
            </div>
            <SearchBar
                setQuery={setQuery}
            ></SearchBar>
            {courseData.filter(post => {
                if (query === "") {
                    return post;
                } else if (post.name.toLowerCase().includes(query.toLowerCase())) {
                    return post;
                }
            }).map(courseData => 
                <motion.div
                    drag
                    dragConstraints={{
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0
                    }}
                    onDragEnd={() => addCourse(courseData.id)}
                    dragElastic={1}
                    key={courseData.id}
                    initial={{ opacity: 0, x: 180 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        ease: "easeInOut",
                        duration: 1,
                    }}>
                    <p className="course" key={courseData.id}>{courseData.name}
                        <button className="add-button" onClick={() => addCourse(courseData.id)}>
                            <MdAdd />
                        </button>
                        <Col className="prereq-accordion">
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Prerequisites</Accordion.Header>
                                    <Accordion.Body>
                                        Prerequisites: {courseData.preReq}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <p></p>
                        </Col>
                    </p>
                </motion.div>
            )}
        </div>
    );
}
