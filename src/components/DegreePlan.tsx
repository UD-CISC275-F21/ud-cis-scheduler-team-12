import React, { useState } from "react";
import { Row, Col, Container} from "react-bootstrap";
import "../css/calender.css";
// import CourseComp from "./CourseComp";
import SemesterComp from "./SemesterComp";
// import ClearSemesterButton from "./ClearSemesterButton";
import { Course } from "../interfaces/course";
import SELECT_MAP_INIT from "../assets/radioToggle";

/**
 * 
 * export function Calender({ setNumberOfCourses, numberOfCourses, courseID }: {
    setNumberOfCourses: (s: number) => void,  numberOfCourses: number, courseID: number
}):  JSX.Element {

 * at symbol returns 
 */


export function DegreePlan({ SET_SEMESTER_MAP ,SEMESTER_MAP, setSemesterSelect, setSemesterHeader }: {
    SET_SEMESTER_MAP: (m: Record<string, Course[]>) => void, SEMESTER_MAP: Record<string, Course[]>,
    setSemesterSelect: (s: string | null) => void,
    setSemesterHeader: (s: string) => void
}):  JSX.Element {

    const [SELECT_MAP, SET_SELECT_MAP] = useState<Record<string, boolean>>(SELECT_MAP_INIT);
    const SEMESTER_MAP_TO_PRINT = {...SEMESTER_MAP};

    function removeAllSemesters() {
        const NEW_SEMESTER_MAP = {...SEMESTER_MAP}; 
        for (const [key] of Object.entries(NEW_SEMESTER_MAP)) {
            NEW_SEMESTER_MAP[key]=[];
            SET_SEMESTER_MAP(NEW_SEMESTER_MAP);
        }
    }

    return (
        <div>
            
            <h2>Degree Plan View</h2>

            <div>
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
                                ></SemesterComp>
                            </Col>
                        )}
                        
                    </Row>
                    
                </Container>
            </div>
            <div>
                <button onClick={removeAllSemesters}>Clear All Semesters</button>
            </div>
        </div>
    );
}

/**
 * 
 * 
 * DONT DELETE!!!!
export function Calender():  JSX.Element {
    return (
        <Container>
            <h2>Calender</h2>
            <Row>
                <div className="cal-container">
                    {Weekdays.map(day => 
                        <div key={day.id}>{day.name}</div>
                    )}
                </div>
            </Row>
            <Row>
                <div className = "cal-background">
                    <Col>
                        <div>
                            {Hours.map(value =>
                                <div key={value.id}>{value.time}</div>
                            )}
                        </div>
                    </Col>
                </div>
            </Row>
        </Container>
    );
}


*/

export default DegreePlan;
