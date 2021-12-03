// Source Imports
import React from "react";
import courseData from "../../assets/courses";
import { ButtonList } from "../../interfaces/buttonList";
import { Course } from "../../interfaces/course";
import Swal from "sweetalert2";

// Design Imports
import "../../css/AddRemoveSemester.css";

// Breadcrumbs:
// Main Page / RemoveSemesterButton - clears courses and removes semester
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
            Swal.fire(
                "Invalid Operation!",
                "Cannot remove any more semesters 😅.",
                "warning"
            );
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
        Object.values(SEMESTER_MAP[semesterCount-1]).forEach(course => {
            removePreReq(course);
        });
        SET_SEMESTER_MAP({...SEMESTER_MAP, [semesterCount-1]: []}); // Set classList to an empty array to clear all selected courses
    }

    function removePreReq(course: Course) {
        Object.values(courseData).forEach(value => {
            Object.keys(course.preReq).forEach(courseName => {
                if(courseName === course.name) {
                    value.preReq[courseName] = false;
                }
            });
        });

        Object.keys(SEMESTER_MAP).forEach(key => {
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
        });
        
    }

    function updateColor(course: Course) {
        return course.preReqCheck;
    }

    return(
        <button className="remove_button" data-testid="btn-remove-semester" onClick={() => removeSemester()}>Remove Semester</button>
    );
}