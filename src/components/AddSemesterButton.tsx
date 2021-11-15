import React from "react";
import { Course } from "../interfaces/course";
import { ButtonList } from "../interfaces/buttonList";

export default function AddSemesterButton({ SET_SEMESTER_MAP, SEMESTER_MAP, setSemesterCount, semesterCount, setButtonList, buttonList }: {
    SET_SEMESTER_MAP: (s: Record<string, Course[]>) => void, SEMESTER_MAP: Record<string, Course[]>,
    setSemesterCount: (c: number) => void, semesterCount: number,
    setButtonList: (b: ButtonList[]) => void, buttonList: ButtonList[]
}): JSX.Element {
    
    function addSemester() {
        let count = semesterCount;
        const NEW_SEMESTER_MAP = {...SEMESTER_MAP};

        buttonList.push({name: getSemesterName(semesterCount), value: semesterCount});
        setButtonList(buttonList);

        NEW_SEMESTER_MAP[""+semesterCount] = [];
        SET_SEMESTER_MAP(NEW_SEMESTER_MAP);
        count++;
        setSemesterCount(count);
    }

    function getSemesterName(count: number) {
        let newCount = count;
        let season = "";
        if (count % 2 !== 0) {
            newCount = (count+1) / 2;
            season = "Fall";
        } else {
            newCount = count/2;
            season = "Spring";
        }

        return `${season} ${newCount}`;

    }

    return(
        <button onClick={() => addSemester()}>Add Semester</button>
    );
}