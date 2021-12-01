// Source Imports
import React, { useState } from "react";
import { Row, Col, Container} from "react-bootstrap";
import SELECT_MAP_INIT from "../assets/stateInitializers/radioToggle";
import courseData from "../assets/courses";
import { ButtonList } from "../interfaces/buttonList";
import { Course } from "../interfaces/course";

// Component Imports
import SemesterComp from "./SemesterComp";

// Design Imports
import "../css/calender.css";


export function DegreePlan({ SET_SEMESTER_MAP ,SEMESTER_MAP, setSemesterSelect, setSemesterHeader, buttonList }: {
    SET_SEMESTER_MAP: (m: Record<string, Course[]>) => void, SEMESTER_MAP: Record<string, Course[]>,
    setSemesterSelect: (s: string | null) => void,
    setSemesterHeader: (s: string) => void,
    buttonList: ButtonList[]
}):  JSX.Element {

    const [SELECT_MAP, SET_SELECT_MAP] = useState<Record<string, boolean>>(SELECT_MAP_INIT);
    const SEMESTER_MAP_TO_PRINT = {...SEMESTER_MAP};

    function removeAllSemesters() {
        const NEW_SEMESTER_MAP = {...SEMESTER_MAP}; 
        for (const [key] of Object.entries(NEW_SEMESTER_MAP)) {
            Object.values(NEW_SEMESTER_MAP[key]).forEach(course => {
                removePreReq(course);
            });
            NEW_SEMESTER_MAP[key]=[];
            SET_SEMESTER_MAP(NEW_SEMESTER_MAP);
        }
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



    return (
        <div>
            <h2>Degree Plan View</h2>
            
            <div data-testid="degree-view">
                <Container>
                    
                    <Row xs={2} md={2}>
                        
                        {Object.entries(SEMESTER_MAP_TO_PRINT).map(([key, value]) =>
                            <Col key={key}>
                                <SemesterComp
                                    SET_SEMESTER_MAP={SET_SEMESTER_MAP}
                                    SEMESTER_MAP={SEMESTER_MAP}
                                    courseList={value}
                                    setSemesterSelect={setSemesterSelect}
                                    semesterSelect={key}
                                    setSemesterHeader={setSemesterHeader}
                                    SET_SELECT_MAP={SET_SELECT_MAP}
                                    SELECT_MAP={SELECT_MAP}
                                    buttonList={buttonList}
                                ></SemesterComp>
                            </Col>
                        )}
                        
                    </Row>
                    
                </Container>
            </div>
            <div>
                <button style={{margin: "5%"}} onClick={removeAllSemesters} data-testid="btn-remove-semesters">Clear All Semesters</button>
            </div>
        </div>
    );
}

export default DegreePlan;
