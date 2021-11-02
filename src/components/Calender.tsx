import React from "react";
import { Col, Row, Container} from "react-bootstrap";
import "../css/calender.css";
import { Weekday, Date } from "../interfaces/weekday";
import Weekdays from "../assets/weekdays";

/**
 * 
 * export function Calender({ setNumberOfCourses, numberOfCourses, courseID }: {
    setNumberOfCourses: (s: number) => void,  numberOfCourses: number, courseID: number
}):  JSX.Element {

 * at symbol returns 
 */
/**
export function Calender():  JSX.Element {
    return (
        <div>
            <Container fluid>
                <h2>Calender</h2>
                <Container className="cal-header">
                    <Row className="row justify-content-evenly no-gutters">
                        <Col className="col-1">
                            <h5>Hours</h5>
                            <div className="hours">
                                8:00
                            </div>
                        </Col>
                        <Col className="col-2">
                            <h5>Monday</h5>
                        </Col>
                        <Col className="col-2">
                            <h5>Tuesday</h5>
                        </Col>
                        <Col className="col-2">
                            <h5>Wednesday</h5>
                        </Col>
                        <Col className="col-2">
                            <h5>Thursday</h5>
                        </Col>
                        <Col className="col-2">
                            <h5>Friday</h5>
                        </Col>
                    </Row>
                </Container>
            </Container>    
        </div>
    );
}
*/

export function Calender():  JSX.Element {
    return (
        <Container>
            <h2>Calender</h2>
            <div className="cal-container">
            
                {Weekdays.map(day => 
                    <div key={day.id}>{day.name}</div>
                )}
            </div>
        </Container>
    );
}




export default Calender;