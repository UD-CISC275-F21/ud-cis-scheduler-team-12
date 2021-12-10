// Source Imports
import React from "react";
import { Course } from "../../interfaces/course";

// Function Imports
import removePreReq from "../../utilities/removePreReq";

// Breadcrumbs:
// Main Page / Board / ClearSemesterButton
export default function ClearSemesterButton({ SET_SEMESTER_MAP, SEMESTER_MAP, semesterSelect, courseData }: {
    SET_SEMESTER_MAP: (m: Record<string, Course[]>) => void, SEMESTER_MAP: Record<string, Course[]>, 
    semesterSelect: string | null,
    courseData: Course[]
}): JSX.Element {

    function removeAllCourses() {    
        Object.values(SEMESTER_MAP[""+semesterSelect]).forEach(value => {
            removePreReq(value, SEMESTER_MAP, courseData);
        }); 
        
        SET_SEMESTER_MAP({...SEMESTER_MAP, [""+semesterSelect]: []}); // Set classList to an empty array to clear all selected courses
    }

    return (
        <button onClick={removeAllCourses} data-testid="btn-clear-semester">Clear Current Semester</button>
    );
}
