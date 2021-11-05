import React from "react";
import { Row, Col, Container} from "react-bootstrap";
import "../css/calender.css";
// import CourseComp from "./CourseComp";
import SemesterComp from "./SemesterComp";
// import ClearSemesterButton from "./ClearSemesterButton";
import { Course } from "../interfaces/course";


/**
 * 
 * export function Calender({ setNumberOfCourses, numberOfCourses, courseID }: {
    setNumberOfCourses: (s: number) => void,  numberOfCourses: number, courseID: number
}):  JSX.Element {

 * at symbol returns 
 */
// export function DegreePlan({ setNumberOfCourses, numberOfCourses, classList, setClassList }: {
//     setNumberOfCourses: (s: number) => void,  numberOfCourses: number, courseID: number,
//     setClassList: (l: Course[]) => void, classList: Course[]
//     }):  JSX.Element {

export function DegreePlan({ SEMESTER_MAP, semesterSelect }: {
    SEMESTER_MAP: Record<string, Course[]>, semesterSelect: string | null
}):  JSX.Element {

    const SEMESTER_MAP_TO_PRINT = {...SEMESTER_MAP};

    return (
        <div>
            
            <h2>Degree Plan View</h2>

            <div>
                <Container>
                    <Row>
                        {SEMESTER_MAP_TO_PRINT[""+semesterSelect].map(SEMESTER_MAP_TO_PRINT =>
                            <Col key={SEMESTER_MAP_TO_PRINT.id}>
                                <SemesterComp
                                    courseList={SEMESTER_MAP[""+semesterSelect]}
                                ></SemesterComp>
                            </Col>
                        )}
                    </Row>
                </Container>
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
