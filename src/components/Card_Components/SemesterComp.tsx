// Source Imports
import React from "react";
import { Card, Table, OverlayTrigger, Popover } from "react-bootstrap/";
import { BsEraserFill } from "react-icons/bs";
import { ImCross, ImRadioChecked, ImRadioUnchecked } from "react-icons/im";
import courseData from "../../assets/courses";
import { ButtonList } from "../../interfaces/buttonList";
import { Course } from "../../interfaces/course";

// Design Imports
import "../../css/courses.css";

// Breadcrumbs:
// Main Page / DegreePlan / SemesterComp - card that holds all courses in a semester in table form
function SemesterComp({ SET_SEMESTER_MAP, SEMESTER_MAP, courseList, setSemesterSelect, semesterSelect, setSemesterHeader, SET_SELECT_MAP, SELECT_MAP, buttonList }: {
    courseList: Course[],
    setSemesterSelect: (s: string | null) => void, semesterSelect: string | null,
    SET_SEMESTER_MAP: (m: Record<string, Course[]>) => void, SEMESTER_MAP: Record<string, Course[]>,
    setSemesterHeader: (s: string) => void,
    SET_SELECT_MAP: (s: Record<string, boolean>) => void, SELECT_MAP: Record<string, boolean>,
    buttonList: ButtonList[]
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

    function updateColor(course: Course) {
        return course.preReqCheck;
    }

    function removeCourse(id: number) {
        const NEW_SEMESTER_MAP = {...SEMESTER_MAP};

        if (courseData[id].name === "") {
            NEW_SEMESTER_MAP[""+semesterSelect] = NEW_SEMESTER_MAP[""+semesterSelect].filter(item => item !== courseData[id]);
            delete courseData[id];
        } else {
            Object.values(courseData).forEach(value => {
                Object.keys(value.preReq).forEach(courseName => {
                    if(courseName === courseData[id].name) {
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
        
        NEW_SEMESTER_MAP[""+semesterSelect] = NEW_SEMESTER_MAP[""+semesterSelect].filter(item => item !== courseData[id]);
        SET_SEMESTER_MAP(NEW_SEMESTER_MAP);
        setSemesterSelect(semesterSelect);
    }

    function removeAllCourses() {
        const NEW_SEMESTER_MAP = {...SEMESTER_MAP};
        
        Object.values(NEW_SEMESTER_MAP[""+semesterSelect]).forEach(course => {
            removeCourse(course.id);
        });

        SET_SEMESTER_MAP({...NEW_SEMESTER_MAP, [""+semesterSelect]: []}); // Set classList to an empty array to clear all selected courses
    }

    return (
        <div>
            <Card className="card" style={{ width: "100%" }}>
                <button className="delete-button" onClick={removeAllCourses}>
                    <BsEraserFill></BsEraserFill>
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
                                    <OverlayTrigger trigger={["hover", "focus"]} show={ Object.values(course.preReq).every(course => course === true) ? false : true } placement={ SEMESTER_MAP[""+semesterSelect].indexOf(course) > 2 ? "bottom" : "top" } overlay={
                                        <Popover className="popover" id="tooltip-preReq">Missing: {Object.keys(course.preReq).filter(courseName => 
                                            course.preReq[courseName] === false).map(course => 
                                            <div key={course}>{course}</div>)} </Popover>}>
                                        <th style={{color: course.preReqCheck}}>{course.name}</th>
                                    </OverlayTrigger>
                                    <td>{course.credits}</td>
                                    <button className="delete-course" onClick={() => removeCourse(course.id)}>
                                        <ImCross></ImCross>
                                    </button>
                                </tr>

                            )}
                            <tr>
                                <th>Total Credits: </th>
                                <td>{Object.values(courseList).reduce((acc, val) => acc + val.credits, 0)}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
    );
}

export default SemesterComp;
