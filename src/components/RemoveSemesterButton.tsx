import React from "react";
import courseData from "../assets/courses";
import { ButtonList } from "../interfaces/buttonList";
import { Course } from "../interfaces/course";

export default function RemoveSemesterButton({ SET_SEMESTER_MAP, SEMESTER_MAP, setSemesterCount, semesterCount, setButtonList, buttonList, setSemesterSelect, setSemesterHeader }: {
    SET_SEMESTER_MAP: (s: Record<string, Course[]>) => void, SEMESTER_MAP: Record<string, Course[]>,
    setSemesterCount: (c: number) => void, semesterCount: number,
    setButtonList: (b: ButtonList[]) => void, buttonList: ButtonList[],
    setSemesterSelect: (s: string | null) => void,
    setSemesterHeader: (h: string) => void
}): JSX.Element {
    
    function removeSemester() {
        let count = semesterCount;
        const NEW_SEMESTER_MAP = {...SEMESTER_MAP};

        if (count === 2) {
            alert("Can't remove more semesters");
        } else {

            // Default to render first semester since it will never be deleted.
            setSemesterSelect("1");
            setSemesterHeader(buttonList[0].name);

            // Clear last semester's courses before deletion
            removeAllCourses();

            // Remove last semester
            buttonList.pop();
            setButtonList(buttonList);

            delete NEW_SEMESTER_MAP[semesterCount-1];
            SET_SEMESTER_MAP(NEW_SEMESTER_MAP);

            count--;
            setSemesterCount(count);
        }
    }

    function removeAllCourses() {    
        for (const [key, value] of Object.entries(SEMESTER_MAP[semesterCount-1])) {
            console.log(key);
            removePreReq(value);
        }
        SET_SEMESTER_MAP({...SEMESTER_MAP, [semesterCount-1]: []}); // Set classList to an empty array to clear all selected courses
    }

    function removePreReq(course: Course) {
        for (const [key, value] of Object.entries(courseData)) {
            console.log([key,value]);
            Object.keys(value.preReq).forEach(courseName => {
                //console.log(courseName);
                if(courseName === course.name) {
                    console.log(courseName);
                    value.preReq[courseName] = false;
                }
            });
        }
        for (const [key, value] of Object.entries(SEMESTER_MAP)) {
            console.log([key,value]);
            SEMESTER_MAP[key].forEach(item => {
                if(Object.keys(item.preReq).length > 0) {
                    if (Object.values(item.preReq).every(course => course === true)){
                        item.preReqCheck = "black";
                    } else {
                        item.preReqCheck = "red";
                    }
                    updateColor(item);
                }
            });
        }
        
    }

    function updateColor(course: Course) {
        return course.preReqCheck;
    }

    return(
        <button onClick={() => removeSemester()}>Remove Semester</button>
    );
}