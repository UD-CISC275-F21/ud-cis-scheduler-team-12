// Source Imports
import React from "react";
import { Course } from "../../interfaces/course";

// Function Imports
import removePreReq from "../../utilities/removePreReq";

export default function ClearAllSemesterButton({ SET_SEMESTER_MAP, SEMESTER_MAP}: {
    SET_SEMESTER_MAP: (m: Record<string, Course[]>) => void, SEMESTER_MAP: Record<string, Course[]>
}): JSX.Element {
    
    function removeAllSemesters() {
        const NEW_SEMESTER_MAP = {...SEMESTER_MAP}; 
        for (const [key] of Object.entries(NEW_SEMESTER_MAP)) {
            Object.values(NEW_SEMESTER_MAP[key]).forEach(course => {
                removePreReq(course, SEMESTER_MAP);
            });
            NEW_SEMESTER_MAP[key]=[];
            SET_SEMESTER_MAP(NEW_SEMESTER_MAP);
        }
    }

    return (
        <button style={{margin: "5%"}} onClick={removeAllSemesters}>Clear All Semesters</button>
    );
}
