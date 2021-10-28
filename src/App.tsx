import React from "react";
import "./css/App.css";

import { Nav } from "react-bootstrap/";
import { Board } from "./components/Board";
import DisplayCourses from "./components/DisplayCourses";



function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CIS Scheduler
                <h1>CISC 275 Final Project</h1>
                <p>Srinath Venkatesh, Elliot Tingey, Geoffrey Linderman</p>
            </header>
            <section className="cell-left">
                <p>Menu</p>
                <Nav justify variant="pills" className="flex-column" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Nav1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Nav2</Nav.Link>
                    </Nav.Item>
                </Nav>
            </section>
            <section className="cell-main">
                <Board></Board>
            </section>
            <section className="cell-right">
                <p>Course Search</p>
                <DisplayCourses></DisplayCourses>                
            </section>
            

        </div>
    );
}

export default App;
