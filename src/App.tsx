import React, { useState } from "react";
import "./css/App.css";

import { Course } from "./interfaces/course";

import { Board } from "./components/Board";
import DisplayCourses from "./components/DisplayCourses";
import SideMenu from "./components/SideMenu";
import Calender from "./components/Calender";
import DegreePlan from "./components/DegreePlan";

function App(): JSX.Element {
    const [numberOfCourses, setNumberOfCourses] = useState<number>(0);
    const [visibleView, setVisibleView] = useState<string | null>("1");
    const [semesterSelect, setSemesterSelect] = useState<string | null>("1");
    const [classList, setClassList] = useState<Course[]>([]); // Creating a list to store selected courses in dynamically
    const [classList1, setClassList1] = useState<Course[]>([]); // Creating a list to store selected courses in dynamically
    
    const COURSES_MAP: Record<string, Course[]> = {
        "1": [],
        "1.2": []
    };

    const SEMESTER_MAP: Record<string, Course[]> = {
        "1": classList,
        "1.2": classList1,
    };

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
                    setNumberOfCourses={setNumberOfCourses}
                    numberOfCourses={numberOfCourses}
                    setClassList={setClassList}
                ></Board> }
                
                { visibleView === "2" && <DegreePlan
                    classList={classList}
                ></DegreePlan> }

                { visibleView === "3" && <Calender></Calender> }

                
            </section>
            <section className="cell-right">
                { visibleView === "1" &&  <DisplayCourses
                    setClassList={setClassList}
                    setNumberOfCourses={setNumberOfCourses}
                    classList={classList}
                    numberOfCourses={numberOfCourses}
                ></DisplayCourses> }                
            </section>
        </div>
    );
}

export default App;
