import React from "react";
import "./css/App.css";
import ClassList from "./assets/courses.json";

import CourseComp from "./components/Courses";


function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CIS Scheduler
                <h1>CISC 275 Final Project</h1>
                <p>Srinath Venkatesh, Elliot Tingey, Geoffrey Linderman</p>
                <CourseComp
                    course1={ClassList[0]}></CourseComp>
            </header>

            
        </div>
    );
}

export default App;
