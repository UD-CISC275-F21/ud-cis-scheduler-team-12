import React from "react";
import { Course } from "../interfaces/course";

export default function ClearSemesterButton({ setNumberOfCourses, setClassList }: {
    setNumberOfCourses: (s: number) => void, setClassList: (l: Course[]) => void
}): JSX.Element {

    function removeAllCourses() {
        setNumberOfCourses(0); // Set numberOfCourses variable to 0 for conditionals
        setClassList([]); // Set classList to an empty array to clear all selected courses
    }

    return (
        <button onClick={removeAllCourses}>Clear All Courses</button>
    );
}
