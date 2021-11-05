import React from "react";
import { Course } from "../interfaces/course";

export default function ClearSemesterButton({ SET_SEMESTER_MAP, SEMESTER_MAP, semesterSelect }: {
    SET_SEMESTER_MAP: (m: Record<string, Course[]>) => void, 
    SEMESTER_MAP: Record<string, Course[]>, semesterSelect: string | null
}): JSX.Element {

    function removeAllCourses() {
        SET_SEMESTER_MAP({...SEMESTER_MAP, [""+semesterSelect]: []}); // Set classList to an empty array to clear all selected courses
    }

    return (
        <button onClick={removeAllCourses}>Clear All Courses</button>
    );
}
