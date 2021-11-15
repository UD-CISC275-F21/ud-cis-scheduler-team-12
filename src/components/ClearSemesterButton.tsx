import React from "react";
import courseData from "../assets/courses";
import Course from "../interfaces/course";

export default function ClearSemesterButton({ SET_SEMESTER_MAP, SEMESTER_MAP, semesterSelect }: {
    SET_SEMESTER_MAP: (m: Record<string, Course[]>) => void, 
    SEMESTER_MAP: Record<string, Course[]>, semesterSelect: string | null
}): JSX.Element {

    function removeAllCourses() {    
        for (const [key, value] of Object.entries(SEMESTER_MAP[""+semesterSelect])) {
            console.log(key);
            removePreReq(value);
        }
        SET_SEMESTER_MAP({...SEMESTER_MAP, [""+semesterSelect]: []}); // Set classList to an empty array to clear all selected courses
    }

    function removePreReq(course: Course) {
        for (const [key, value] of Object.entries(courseData)) {
            console.log([key,value]);
            Object.keys(value.preReq).forEach(courseName => {
                //console.log(courseName);
                if(courseName === course.name) {
                    console.log(courseName);
                    value.preReq[courseName] = false;
                }
            });
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
    }

    function updateColor(course: Course) {
        return course.preReqCheck;
    }

    return (
        <button onClick={removeAllCourses}>Clear All Courses</button>
    );
}
