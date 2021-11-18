import React from "react";
import { Card, Table } from "react-bootstrap/";
import "../css/courses.css";
import "../assets/courses";
import { Course } from "../interfaces/course";
import { MdDeleteForever } from "react-icons/md";
import { ImCross, ImRadioChecked, ImRadioUnchecked } from "react-icons/im";

import courseData from "../assets/courses";
import buttonList from "../assets/buttonList";

function SemesterComp({ SET_SEMESTER_MAP, SEMESTER_MAP, courseList, setSemesterSelect, semesterSelect, setSemesterHeader, SET_SELECT_MAP, SELECT_MAP }: {
    courseList: Course[],
    setSemesterSelect: (s: string | null) => void, semesterSelect: string | null,
    SET_SEMESTER_MAP: (m: Record<string, Course[]>) => void, SEMESTER_MAP: Record<string, Course[]>,
    setSemesterHeader: (s: string) => void,
    SET_SELECT_MAP: (s: Record<string, boolean>) => void, SELECT_MAP: Record<string, boolean>
}):  JSX.Element {

    const semesterIndex = ""+semesterSelect;

    function selectToggle(key: string) {
        const NEW_SELECT_MAP = {...SELECT_MAP};
        
        Object.keys(NEW_SELECT_MAP).forEach(item => {
            item === key ? NEW_SELECT_MAP[+item] = true : NEW_SELECT_MAP[+item] = false;
            SET_SELECT_MAP(NEW_SELECT_MAP);
        });

        setSemesterSelect(key);
        handleSelect(key);
    }

    function handleSelect (val: string) {
        setSemesterHeader(buttonList[+val-1].name);
    }

    function removeCourse(id: number) {
        const NEW_SEMESTER_MAP = {...SEMESTER_MAP};
        
        NEW_SEMESTER_MAP[""+semesterSelect] = NEW_SEMESTER_MAP[""+semesterSelect].filter(item => item !== courseData[id]);
        SET_SEMESTER_MAP(NEW_SEMESTER_MAP);
        setSemesterSelect(semesterSelect);
    }

    function removeAllCourses() {
        SET_SEMESTER_MAP({...SEMESTER_MAP, [""+semesterSelect]: []}); // Set classList to an empty array to clear all selected courses
    }

    return (
        <div>
            <Card className="card" style={{ width: "100%" }}>
                <button className="delete-button" onClick={removeAllCourses}>
                    <MdDeleteForever></MdDeleteForever>
                </button>
                { !SELECT_MAP[+semesterIndex] && <button className="select-button-off" data-testid="select-button" onClick={() => selectToggle(""+semesterSelect)}>
                    <ImRadioUnchecked></ImRadioUnchecked> 
                </button>}
                { SELECT_MAP[+semesterIndex] && <button className="select-button-on" onClick={() => selectToggle(""+semesterSelect)}>
                    <ImRadioChecked></ImRadioChecked>
                </button>}
                <Card.Body className="card-body">
                    
                    <Table>
                        <thead>
                            <th className="semester-title">{buttonList[+semesterIndex-1].name}</th>
                            <tr>
                                <th>Course</th>
                                <th scope="col">Credit(s)</th>
                            </tr>
                        </thead>
                        <tbody data-testid="semester-table">
                            {courseList.map((course, id) =>

                                <tr key={id} data-testid="semester-comp-card">
                                    <th>{course.name}</th>
                                    <td>{course.credits}</td>
                                    <button className="delete-course" onClick={() => removeCourse(course.id)}>
                                        <ImCross></ImCross>
                                    </button>
                                </tr>

                            )}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
    );
}

export default SemesterComp;
