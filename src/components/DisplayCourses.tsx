import React, { useState } from "react";
import courseData from "../assets/courses";
import { MdAdd } from "react-icons/md";
import { Course } from "../interfaces/course";

import "../css/DisplayCourses.css";
import SearchBar from "./SearchBar";
import { Accordion, Col } from "react-bootstrap";

export default function DisplayCourses({ SET_SEMESTER_MAP, SEMESTER_MAP, semesterSelect }: {
    SET_SEMESTER_MAP: (m: Record<string, Course[]>) => void, SEMESTER_MAP: Record<string, Course[]>,
    semesterSelect: string | null
}): JSX.Element {

    const [query, setQuery] = useState<string>("");

    function addCourse(id: number) {
        const NEW_SEMESTER_MAP = {...SEMESTER_MAP};
        const foundCourse = findCourse(SEMESTER_MAP, id);
        
        // If there are less than 6 courses, add the selected course onto the end of the classList
        if (foundCourse) {
            alert(`${courseData[id].name} is already added to this semester. Please select another course.`);
        } else {
            //  DUPLICATE COURSES IN ANY SEMESTER
            // for (const [key, value] of Object.entries(SEMESTER_MAP)) {
            //     console.log(key,value);
            //     if (SEMESTER_MAP[key].includes(courseData[id])) {
            //         alert(`Warning: ${courseData[id].name} is already added to semester ${key}.`);
            //     }
            // }
            // 
            //          PREREQ MET IN PRIOR SEMESTER
            if (SEMESTER_MAP[""+semesterSelect].length < 6) {
                const preReq_Count = courseData[id].preReq.length;
                if (preReq_Count > 0) {
                    let preReqs_Met = 0;
                    for (let key = 0; SEMESTER_MAP[key] !== SEMESTER_MAP[""+semesterSelect]; key++) {
                        for (let i = 0; i < preReq_Count; i++) {
                            const preReqFound = findCourseInList(SEMESTER_MAP[""+key], courseData[id].preReqID[i]);
                            // if (SEMESTER_MAP[key].includes(courseData[id].preReqID[]))
                            if (preReqFound) {
                                preReqs_Met++;
                            }
                        }
                    }
                    if (preReqs_Met === preReq_Count) {
                        NEW_SEMESTER_MAP[""+semesterSelect].push(courseData[id]), SET_SEMESTER_MAP(NEW_SEMESTER_MAP);
                    } else {
                        alert(`${courseData[id].preReq} are required prerequisites to add this course.`);
                    }
                } else {
                    NEW_SEMESTER_MAP[""+semesterSelect].push(courseData[id]), SET_SEMESTER_MAP(NEW_SEMESTER_MAP);
                }
            } else {
                alert("Max number of courses selected for semester.");
            }
            
            // SEMESTER_MAP[""+semesterSelect].length === 6 ? alert("Max number of courses selected for semester.")
            //     : (NEW_SEMESTER_MAP[""+semesterSelect].push(courseData[id]), SET_SEMESTER_MAP(NEW_SEMESTER_MAP));
        }
    }

    function findCourse(record : Record<string, Course[]>, id: number) {
        return record[""+semesterSelect].includes(courseData[id]);
    }

    function findCourseInList(list : Course[], id: number) {
        // return list.includes(courseData[id]);
        let found = false;
        for (let i = 0; i < list.length; i++) {
            if (list[i].id == courseData[id].id) {
                found = true;
            }
        }
        return found;
    }
    

    return (
        <div>
            <p>Course Search</p>
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
                    </Col>
                </p>
            )}
        </div>
    );
}
