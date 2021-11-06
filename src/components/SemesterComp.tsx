import React, { useState } from "react";
import { Card, Table } from "react-bootstrap/";
import "../css/courses.css";
import "../assets/courses";
import { Course } from "../interfaces/course";
import { MdDeleteForever } from "react-icons/md";
import { ImCross, ImRadioChecked, ImRadioUnchecked } from "react-icons/im";
import courseData from "../assets/courses";

import buttonList from "../assets/buttonList";

function SemesterComp({ SET_SEMESTER_MAP, SEMESTER_MAP, courseList, setSemesterSelect, semesterSelect, setSemesterHeader }: {
    courseList: Course[],
    setSemesterSelect: (s: string | null) => void, semesterSelect: string | null,
    SET_SEMESTER_MAP: (m: Record<string, Course[]>) => void, SEMESTER_MAP: Record<string, Course[]>,
    setSemesterHeader: (s: string) => void
}):  JSX.Element {

    const semesterIndex = ""+semesterSelect;

    // const SELECT_MAP_INIT: Record<string, boolean> = {
    //     "1": false,
    //     "2": false,
    //     "3": false,
    //     "4": false,
    //     "5": false,
    //     "6": false,
    //     "7": false,
    //     "8": false,
    // };
    // const [SELECT_MAP, SET_SELECT_MAP] = useState<Record<string, boolean>>(SELECT_MAP_INIT);
    const [isToggle, setIsToggle] = useState<boolean>(false);

    function selectToggle(key: string) {
        // const NEW_SELECT_MAP = {...SELECT_MAP};
        
        // Object.keys(NEW_SELECT_MAP).forEach(item => {
        //     item === key ? (NEW_SELECT_MAP[item] = true, SET_SELECT_MAP(NEW_SELECT_MAP), setIsToggle(NEW_SELECT_MAP[item])) 
        //         : (NEW_SELECT_MAP[item] = false, SET_SELECT_MAP(NEW_SELECT_MAP));
        // });


        // Object.keys(NEW_SELECT_MAP).forEach(item => {
        //     setIsToggle(NEW_SELECT_MAP[item]); 
        // });

        // NEW_SELECT_MAP[key] = true;
        // SET_SELECT_MAP(NEW_SELECT_MAP);
        
        // Object.keys(NEW_SELECT_MAP).forEach(item => {
        //     setIsToggle(NEW_SELECT_MAP[item].valueOf()); 
        // });
        // console.log(NEW_SELECT_MAP);

        setIsToggle(!isToggle);
        setSemesterSelect(key);
        handleSelect(key);
        // console.log(semesterSelect);
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
            <Card className="card" style={{ width: "30rem" }}>
                <button className="delete-button" onClick={removeAllCourses}>
                    <MdDeleteForever></MdDeleteForever>
                </button>
                { !isToggle && <button className="select-button-off" onClick={() => selectToggle(""+semesterSelect)}>
                    <ImRadioUnchecked></ImRadioUnchecked> 
                </button>}
                { isToggle && <button className="select-button-on" onClick={() => selectToggle(""+semesterSelect)}>
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
                        <tbody>
                            {courseList.map((course, id) => {
                                return(
                                    <tr key={id}>
                                        <th>{course.name}</th>
                                        <td>{course.id}</td>
                                        <button className="delete-course" onClick={() => removeCourse(course.id)}>
                                            <ImCross></ImCross>
                                        </button>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
    );
}

export default SemesterComp;
