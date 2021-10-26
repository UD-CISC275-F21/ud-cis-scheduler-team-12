import React from "react";
import "./css/App.css";
// import courseData from "./assets/courses.js";
// import CourseComp from "./components/CourseComp";
import { Board } from "./components/Board";


function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CIS Scheduler
                <h1>CISC 275 Final Project</h1>
                <p>Srinath Venkatesh, Elliot Tingey, Geoffrey Linderman</p>
                {/* <CourseComp course1={courseData[1]} ></CourseComp> */}
                <Board></Board>
            </header>

            
        </div>
    );
}

export default App;
