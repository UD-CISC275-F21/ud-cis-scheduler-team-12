import React from "react";
import courseData from "../assets/courses";
import { MdAdd } from "react-icons/md";
import { Course } from "../interfaces/course";

export default function DisplayCourses({ setCourseID , setNumberOfCourses, setClassList, numberOfCourses, classList }: {
    setCourseID: (s: number) => void, courseID: number,
    setNumberOfCourses: (n: number) => void, numberOfCourses: number,
    setClassList: (l: Course[]) => void, classList: Course[]
}): JSX.Element {
    
    function addCourse(id: number) {
        // If there are less than 6 courses, add the selected course onto the end of the classList
        if (classList.includes(courseData[id])) {
            alert(`${courseData[id].name} is already added to this semester. Please select another course.`);
        } else {
            numberOfCourses === 6 ? (setNumberOfCourses(6), alert("Max number of courses selected for semester.")) : (setNumberOfCourses(numberOfCourses+1), setClassList([...classList, courseData[id]]));
            setCourseID(id);
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
