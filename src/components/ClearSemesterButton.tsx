import React from "react";

export default function ClearSemesterButton({ setNumberOfCourses }: {
    setNumberOfCourses: (s: number) => void
}): JSX.Element {

    function removeAllCourses() {
        setNumberOfCourses(0);
    }

    return (
        <button onClick={removeAllCourses}>Clear All Courses</button>
    );
}
