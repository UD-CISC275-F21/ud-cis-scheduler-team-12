// import React, { useState } from "react";
import React from "react";
import { Col, Row, Container} from "react-bootstrap";

import "../css/calender.css";

/**
 * 
 * export function Calender({ setNumberOfCourses, numberOfCourses, courseID }: {
    setNumberOfCourses: (s: number) => void,  numberOfCourses: number, courseID: number
}):  JSX.Element {

 * @returns 
 */

export function Calender():  JSX.Element {


    return (
        <div>
            
            <Container fluid>

                <h2>4 - Year View</h2>
                
                <Row className="row justify-content-evenly no-gutters">
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
        </div>
    );
}

export default Calender;