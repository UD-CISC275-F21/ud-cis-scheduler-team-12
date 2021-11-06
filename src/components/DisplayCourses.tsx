import React, { useState } from "react";
import courseData from "../assets/courses";
import { MdAdd } from "react-icons/md";
import { Course } from "../interfaces/course";

import "../css/DisplayCourses.css";
import SearchBar from "./SearchBar";

export default function DisplayCourses({ SET_SEMESTER_MAP, SEMESTER_MAP, semesterSelect }: {
    SET_SEMESTER_MAP: (m: Record<string, Course[]>) => void, SEMESTER_MAP: Record<string, Course[]>,
    semesterSelect: string | null
}): JSX.Element {

    const [query, setQuery] = useState<string>("");

    function addCourse(id: number) {
        const NEW_SEMESTER_MAP = {...SEMESTER_MAP};
        const foundCourse = findCourse(id);
        
        // If there are less than 6 courses, add the selected course onto the end of the classList
        if (foundCourse) {
            alert(`${courseData[id].name} is already added to this semester. Please select another course.`);
        } else {
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

    function findCourse(id: number) {
        return SEMESTER_MAP[""+semesterSelect].includes(courseData[id]);
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
                </p>
            )}
        </div>
    );
}
