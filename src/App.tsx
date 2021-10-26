import React from "react";
import "./css/App.css";
import courseData from "./assets/courses.js";
import CourseComp from "./components/CourseComp";
import { Nav } from "react-bootstrap/";


function App(): JSX.Element {
    return (
        <div className="App">
            <Nav justify variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Nav1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Nav2</Nav.Link>
                </Nav.Item>
            </Nav>
            <header className="App-header">
                UD CIS Scheduler
                <h1>CISC 275 Final Project</h1>
                <p>Srinath Venkatesh, Elliot Tingey, Geoffrey Linderman</p>
                <CourseComp course1={courseData[1]} ></CourseComp>
            </header>   
        </div>
    );
}

export default App;
