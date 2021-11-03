import React, { useState } from "react";
import "./css/App.css";

import { Course } from "./interfaces/course";

import { Board } from "./components/Board";
import DisplayCourses from "./components/DisplayCourses";
import SideMenu from "./components/SideMenu";
import Calender from "./components/Calender";
import DegreePlan from "./components/DegreePlan";

function App(): JSX.Element {
    const [courseID, setCourseID] = useState<number>(0);
    const [numberOfCourses, setNumberOfCourses] = useState<number>(0);
    const [visibleSelect, setVisibleSelect] = useState<string | null>("1");
    const [classList, setClassList] = useState<Course[]>([]); // Creating a list to store selected courses in dynamically

    return (
        <div className="App">
            <header className="App-header">
                
                <h1>UD Course Scheduler</h1>
                <p>Srinath Venkatesh, Elliot Tingey, Geoffrey Linderman</p>
            </header>
            <section className="cell-left">
                <p>Menu</p>
                <SideMenu
                    setVisibleSelect={setVisibleSelect}
                ></SideMenu>
            </section>
            <section className="cell-main">
                { visibleSelect === "1" && <Board
                    classList={classList}
                    setNumberOfCourses={setNumberOfCourses}
                    numberOfCourses={numberOfCourses}
                    courseID={courseID}
                    setClassList={setClassList}
                ></Board> }
                
                { visibleSelect === "2" && <DegreePlan
                    classList={classList}
                    setNumberOfCourses={setNumberOfCourses}
                    numberOfCourses={numberOfCourses}
                    courseID={courseID}
                    setClassList={setClassList}></DegreePlan> }

                { visibleSelect === "3" && <Calender></Calender> }

                
            </section>
            <section className="cell-right">
                { visibleSelect === "1" &&  <DisplayCourses
                    setClassList={setClassList}
                    setCourseID={setCourseID}
                    setNumberOfCourses={setNumberOfCourses}
                    classList={classList}
                    courseID={courseID}
                    numberOfCourses={numberOfCourses}
                ></DisplayCourses> }                
            </section>
        </div>
    );
}

export default App;
