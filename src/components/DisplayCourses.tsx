import React from "react";
import courseData from "../assets/courses";
import { MdAdd } from "react-icons/md";
import { Course } from "../interfaces/course";

export default function DisplayCourses({ SET_SEMESTER_MAP, SEMESTER_MAP, semesterSelect }: {
    SET_SEMESTER_MAP: (m: Record<string, Course[]>) => void, SEMESTER_MAP: Record<string, Course[]>,
    semesterSelect: string | null
}): JSX.Element {

    function addCourse(id: number) {
        const NEW_SEMESTER_MAP = {...SEMESTER_MAP};
        // If there are less than 6 courses, add the selected course onto the end of the classList
        if (SEMESTER_MAP[""+semesterSelect].includes(courseData[id])) {
            alert(`${courseData[id].name} is already added to this semester. Please select another course.`);
        } else {
            SEMESTER_MAP[""+semesterSelect].length === 6 ? alert("Max number of courses selected for semester.")
                : (NEW_SEMESTER_MAP[""+semesterSelect].push(courseData[id]), SET_SEMESTER_MAP(NEW_SEMESTER_MAP));
        }
    }

    return (
        <div>
            <p>Course Search</p>
            {courseData.map(courseData => 
                <p key={courseData.id}>{courseData.name}
                    <button onClick={() => addCourse(courseData.id)}>
                        <MdAdd />
                    </button>
                </p>
            )}
        </div>
    );
}
