// Source Imports
import React from "react";
import courseData from "../../assets/courses";
import { Course } from "../../interfaces/course";

// Function Imports
import updateColor from "../../utilities/updateColor";

export default function ClearAllSemesterButton({ SET_SEMESTER_MAP, SEMESTER_MAP}: {
    SET_SEMESTER_MAP: (m: Record<string, Course[]>) => void, SEMESTER_MAP: Record<string, Course[]>
}): JSX.Element {
    
    function removeAllSemesters() {
        const NEW_SEMESTER_MAP = {...SEMESTER_MAP}; 
        for (const [key] of Object.entries(NEW_SEMESTER_MAP)) {
            Object.values(NEW_SEMESTER_MAP[key]).forEach(course => {
                removePreReq(course);
            });
            NEW_SEMESTER_MAP[key]=[];
            SET_SEMESTER_MAP(NEW_SEMESTER_MAP);
        }
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

    return (
        <button style={{margin: "5%"}} onClick={removeAllSemesters}>Clear All Semesters</button>
    );
}
