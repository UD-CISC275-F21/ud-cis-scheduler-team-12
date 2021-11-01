import React, { useState } from "react";
import "./css/App.css";

import { Board } from "./components/Board";
import DisplayCourses from "./components/DisplayCourses";
import SideMenu from "./components/SideMenu";


function App(): JSX.Element {
    const [courseID, setCourseID] = useState<number>(0);
    const [numberOfCourses, setNumberOfCourses] = useState<number>(0);


    return (
        <div className="App">
            <header className="App-header">
                UD CIS Scheduler
                <h1>CISC 275 Final Project</h1>
                <p>Srinath Venkatesh, Elliot Tingey, Geoffrey Linderman</p>
            </header>
            <section className="cell-left">
                <p>Menu</p>
                <SideMenu></SideMenu>
            </section>
            <section className="cell-main">
                <Board
                    setNumberOfCourses={setNumberOfCourses}
                    numberOfCourses={numberOfCourses}
                    courseID={courseID}
                ></Board>
            </section>
            <section className="cell-right">
                <p>Course Search</p>
                <DisplayCourses
                    setCourseID={setCourseID}
                    setNumberOfCourses={setNumberOfCourses}
                    courseID={courseID}
                    numberOfCourses={numberOfCourses}
                ></DisplayCourses>                
            </section>
            

        </div>
    );
}

export default App;
