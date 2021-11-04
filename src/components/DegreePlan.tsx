import React from "react";
import { Row, Col, Container} from "react-bootstrap";
import "../css/calender.css";
import CourseComp from "./CourseComp";
import ClearSemesterButton from "./ClearSemesterButton";
import { Course } from "../interfaces/course";

/**
 * 
 * export function Calender({ setNumberOfCourses, numberOfCourses, courseID }: {
    setNumberOfCourses: (s: number) => void,  numberOfCourses: number, courseID: number
}):  JSX.Element {

 * at symbol returns 
 */
export function DegreePlan({ setNumberOfCourses, numberOfCourses, classList, setClassList }: {
    setNumberOfCourses: (s: number) => void,  numberOfCourses: number, courseID: number,
    setClassList: (l: Course[]) => void, classList: Course[]
    }):  JSX.Element {

    const semesterListToPrint = classList;
    return (
        <div>
            
            <h2>Degree Plan View</h2>

            <div>
                <Container>
                    <Row>
                        {semesterListToPrint.map(semesterListToPrint =>
                            <Col key={semesterListToPrint.id}>
                                <CourseComp
                                    course={semesterListToPrint}
                                    setNumberOfCourses={setNumberOfCourses}
                                    numberOfCourses={numberOfCourses}
                                    setClassList={setClassList}
                                    classList={classList}
                                ></CourseComp>
                            </Col>
                        )}
                    </Row>
                </Container>
                { numberOfCourses > 0 && <ClearSemesterButton
                    setNumberOfCourses={setNumberOfCourses}
                    setClassList={setClassList}
                ></ClearSemesterButton> }
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