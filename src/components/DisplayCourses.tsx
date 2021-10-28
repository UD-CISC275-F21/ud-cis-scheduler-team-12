import React from "react";
import courseData from "../assets/courses";


import { MdAdd } from "react-icons/md";

export default function DisplayCourses({ setCourseID , setNumberOfCourses, numberOfCourses }: {
    setCourseID: (s: number) => void, courseID: number,
    setNumberOfCourses: (n: number) => void, numberOfCourses: number
}): JSX.Element {
    
    function addCourse(id: number) {
        numberOfCourses === 6 ? (setNumberOfCourses(6), alert("Max number of courses selected for semester.")) : setNumberOfCourses(numberOfCourses+1);
        setCourseID(id);
    }

    return (
        <div>
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
