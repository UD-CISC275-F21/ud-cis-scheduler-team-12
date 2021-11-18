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
                if (Object.keys(courseData[id].preReq).length > 0){
                    console.log(courseData[id].preReq);
                    if (Object.values(courseData[id].preReq).every(course => course === true)){
                        courseData[id].preReqCheck = "black";
                    } else {
                        alert("Warning: Pre-Reqs not met.");
                        courseData[id].preReqCheck = "red";
                    }
                    updateColor(courseData[id]);
                }

                if (SEMESTER_MAP["" + semesterSelect].length === 6) {
                    alert("Max number of courses selected for semester.");
                } else {
                    for (const [key, value] of Object.entries(courseData)) {
                        console.log([key,value]);
                        Object.keys(value.preReq).forEach(courseName => {
                            //console.log(courseName);
                            if(courseName === courseData[id].name) {
                                console.log(courseName);
                                value.preReq[courseName] = true;
                            }
                        });
                    }
                    NEW_SEMESTER_MAP["" + semesterSelect].push(courseData[id]);
                    SET_SEMESTER_MAP(NEW_SEMESTER_MAP);
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

                // SEMESTER_MAP[""+semesterSelect].length === 6 ? alert("Max number of courses selected for semester.")
                //     : (NEW_SEMESTER_MAP[""+semesterSelect].push(courseData[id]), 
                //     SET_SEMESTER_MAP(NEW_SEMESTER_MAP));

            
            }
        }   
    }
    
    function updateColor(course: Course) {
        return course.preReqCheck;
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
                    <Dropdown.Item as="button" onClick={() => showBin()}>Save Courses for Later</Dropdown.Item>
                </DropdownButton>
            </div>
            <SearchBar
                setQuery={setQuery}
            ></SearchBar>
            <ul className="list-group">
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
                        <li className="course" key={courseData.id}>{courseData.name}
                            <button className="add-button" data-testid={courseData.name} onClick={() => addCourse(courseData.id)}>
                                <MdAdd />
                            </button>
                            { Object.keys(courseData.preReq).length > 0 && <Col className="prereq-accordion">
                                <Accordion flush>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Prerequisites</Accordion.Header>
                                        <Accordion.Body>
                                            {Object.keys(courseData.preReq).map(course => 
                                                <div key={course}>{course}</div>
                                            )}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <p></p>
                            </Col> }
                        </li>
                    </motion.div>
                )}
            </ul>
        </div>
    );
}
