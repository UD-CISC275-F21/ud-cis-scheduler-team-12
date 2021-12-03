// Source Imports
import React from "react";
import courseData from "../../assets/courses";
import { Course } from "../../interfaces/course";

// Breadcrumbs:
// Main Page / Board / ClearSemesterButton
export default function ClearSemesterButton({ SET_SEMESTER_MAP, SEMESTER_MAP, semesterSelect }: {
    SET_SEMESTER_MAP: (m: Record<string, Course[]>) => void, 
    SEMESTER_MAP: Record<string, Course[]>, semesterSelect: string | null
}): JSX.Element {

    function removeAllCourses() {    
        Object.values(SEMESTER_MAP[""+semesterSelect]).forEach(value => {
            removePreReq(value);
        }); 
        
        SET_SEMESTER_MAP({...SEMESTER_MAP, [""+semesterSelect]: []}); // Set classList to an empty array to clear all selected courses
    }

    function removePreReq(course: Course) {
        Object.values(courseData).forEach(value => {
            Object.keys(value.preReq).forEach(courseName => {
                if(courseName === course.name) {
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

    function updateColor(course: Course) {
        return course.preReqCheck;
    }

    return (
        <button onClick={removeAllCourses} data-testid="btn-clear-semester">Clear Current Semester</button>
    );
}
