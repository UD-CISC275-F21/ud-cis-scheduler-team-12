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
    
    const SEMESTER_MAP_INIT: Record<string, Course[]> = {
        "1": [],
        "2": [],
        "3": [],
        "4": [],
        "5": [],
        "6": [],
        "7": [],
        "8": [],
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
                    setSemesterSelect={setSemesterSelect}
                    semesterSelect={semesterSelect}
                    SET_SEMESTER_MAP={SET_SEMESTER_MAP}
                    SEMESTER_MAP={SEMESTER_MAP}
                ></Board> }
                
                { visibleView === "2" && <DegreePlan
                    SET_SEMESTER_MAP={SET_SEMESTER_MAP}
                    SEMESTER_MAP={SEMESTER_MAP}
                    setSemesterSelect={setSemesterSelect}
                ></DegreePlan> }

                { visibleView === "3" && <Calender></Calender> }

                
            </section>
            <section className="cell-right">
                { (visibleView === "1" &&  <DisplayCourses
                    SET_SEMESTER_MAP={SET_SEMESTER_MAP}
                    SEMESTER_MAP={SEMESTER_MAP}
                    semesterSelect={semesterSelect}
                ></DisplayCourses>) ||
                (visibleView === "2" &&  <DisplayCourses
                    SET_SEMESTER_MAP={SET_SEMESTER_MAP}
                    SEMESTER_MAP={SEMESTER_MAP}
                    semesterSelect={semesterSelect}
                ></DisplayCourses>) }                 
            </section>
        </div>
    );
}

export default App;
