import React, { useState } from "react";
import "./css/App.css";

import { Course } from "./interfaces/course";

import { Board } from "./components/Board";
import DisplayCourses from "./components/DisplayCourses";
import SideMenu from "./components/SideMenu";
import Calender from "./components/Calender";
import DegreePlan from "./components/DegreePlan";

function App(): JSX.Element {
    const [visibleView, setVisibleView] = useState<string | null>("1"); // Changes the different board views
    const [semesterSelect, setSemesterSelect] = useState<string | null>("1");
    const [classList, setClassList] = useState<Course[]>([]); // Creating a list to store selected courses in dynamically
    
    const SEMESTER_MAP_INIT: Record<string, Course[]> = {
        "1": [],
        "1.2": [],
        "1.3": [],
        "1.4": [],
        "1.5": [],
        "1.6": [],
        "1.7": [],
        "1.8": [],
    };
    const [SEMESTER_MAP, SET_SEMESTER_MAP] = useState<Record<string, Course[]>>(SEMESTER_MAP_INIT);

    return (
        <div className="App">
            <header className="App-header">
                UD CIS Scheduler
                <p>Srinath Venkatesh, Elliot Tingey, Geoffrey Linderman</p>
            </header>
            <section className="cell-left">
                <p>Menu</p>
                <SideMenu
                    setVisibleView={setVisibleView}
                ></SideMenu>
            </section>
            <section className="cell-main">
                { visibleView === "1" && <Board
                    classList={SEMESTER_MAP[semesterSelect as string]}
                    setSemesterSelect={setSemesterSelect}
                    semesterSelect={semesterSelect}
                    setClassList={setClassList}
                    SET_SEMESTER_MAP={SET_SEMESTER_MAP}
                    SEMESTER_MAP={SEMESTER_MAP}
                ></Board> }
                
                { visibleView === "2" && <DegreePlan
                    classList={classList}
                ></DegreePlan> }

                { visibleView === "3" && <Calender></Calender> }

                
            </section>
            <section className="cell-right">
                { visibleView === "1" &&  <DisplayCourses
                    SET_SEMESTER_MAP={SET_SEMESTER_MAP}
                    SEMESTER_MAP={SEMESTER_MAP}
                    semesterSelect={semesterSelect}
                ></DisplayCourses> }                
            </section>
        </div>
    );
}

export default App;
