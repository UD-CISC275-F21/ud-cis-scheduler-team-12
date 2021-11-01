import React from "react";
import courseData from "../assets/courses";
import { MdAdd } from "react-icons/md";

export default function DisplayCourses(): JSX.Element {
    return (
        <div>
            {courseData.map(courseData => 
                <p key={courseData.id}>{courseData.name}
                    <a href="https:://facebook.com" target="_blank" rel="noreferrer">
                        <MdAdd />
                    </a>
                </p>
            )}
        </div>
    );
}