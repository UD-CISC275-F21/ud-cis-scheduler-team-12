// Source Imports
import React from "react";
import { Course } from "../../interfaces/course";
import { ButtonList } from "../../interfaces/buttonList";

// Function Imports
import getSemesterName from "../../utilities/getSemesterName";

// Design Imports
import "../../css/AddRemoveSemester.css";

// Breadcrumbs:
// Main Page / AddSemesterButton - appends new semester
export default function AddSemesterButton({ SET_SEMESTER_MAP, SEMESTER_MAP, setSemesterCount, semesterCount, setButtonList, buttonList, SET_SELECT_MAP, SELECT_MAP }: {
    SET_SEMESTER_MAP: (s: Record<string, Course[]>) => void, SEMESTER_MAP: Record<string, Course[]>,
    setSemesterCount: (c: number) => void, semesterCount: number,
    setButtonList: (b: ButtonList[]) => void, buttonList: ButtonList[],
    SET_SELECT_MAP: (s: Record<string, boolean>) => void, SELECT_MAP: Record<string, boolean>
}): JSX.Element {
    
    function addSemester() {
        let count = semesterCount;
        const NEW_SEMESTER_MAP = {...SEMESTER_MAP};
        const SELECT_MAP_BUFFER = {...SELECT_MAP};

        buttonList.push({name: getSemesterName(semesterCount), value: semesterCount});
        setButtonList(buttonList);

        SELECT_MAP_BUFFER[""+semesterCount] = false;
        SET_SELECT_MAP(SELECT_MAP_BUFFER);

        NEW_SEMESTER_MAP[""+semesterCount] = [];
        SET_SEMESTER_MAP(NEW_SEMESTER_MAP);
        count++;
        setSemesterCount(count);
    }

    return(
        <button className="add_button" data-testid="btn-add-semester" onClick={() => addSemester()}>Add Semester</button>
    );
}
