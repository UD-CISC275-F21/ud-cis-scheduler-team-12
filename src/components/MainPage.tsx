import React, { useState } from "react";
import "../css/App.css";

import { Course } from "../interfaces/course";

import { Board } from "../components/Board";
import DisplayCourses from "../components/DisplayCourses";
import SideMenu from "../components/SideMenu";
import Calender from "../components/Calender";
import DegreePlan from "../components/DegreePlan";
import SaveBin from "./SaveBin";

function MainPage({ visibleView, setVisibleView }: {
    setVisibleView: (s: string | null) => void, visibleView: string | null
}): JSX.Element {
    const [semesterSelect, setSemesterSelect] = useState<string | null>("1");
    const [semesterHeader, setSemesterHeader] = useState<string>("Fall 1");
    
    // Bin Variables
    const [binVisible, setBinVisible] = useState<boolean>(false);
    const SAVE_BIN_INIT: Course[] = [];
    const [SAVE_BIN, SET_SAVE_BIN] = useState<Course[]>(SAVE_BIN_INIT);
   
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
                { visibleView === "2" && <Board
                    semesterHeader={semesterHeader}
                    setSemesterHeader={setSemesterHeader}
                    setSemesterSelect={setSemesterSelect}
                    semesterSelect={semesterSelect}
                    SET_SEMESTER_MAP={SET_SEMESTER_MAP}
                    SEMESTER_MAP={SEMESTER_MAP}
                    SET_SAVE_BIN={SET_SAVE_BIN}
                    SAVE_BIN={SAVE_BIN}
                    binVisible={binVisible}
                ></Board> }
                
                { visibleView === "3" && <DegreePlan
                    SET_SEMESTER_MAP={SET_SEMESTER_MAP}
                    SEMESTER_MAP={SEMESTER_MAP}
                    setSemesterSelect={setSemesterSelect}
                    setSemesterHeader={setSemesterHeader}
                ></DegreePlan> }

                { visibleView === "4" && <Calender></Calender> }

                
            </section>
            <section className="cell-right">
                { (visibleView === "2" || visibleView === "3") &&  <DisplayCourses
                    SET_SEMESTER_MAP={SET_SEMESTER_MAP}
                    SEMESTER_MAP={SEMESTER_MAP}
                    semesterSelect={semesterSelect}
                    setBinVisible={setBinVisible}
                    binVisible={binVisible}
                    SET_SAVE_BIN={SET_SAVE_BIN}
                    SAVE_BIN={SAVE_BIN}
                ></DisplayCourses> }            
            </section>

            <SaveBin
                setBinVisible={setBinVisible}
                binVisible={binVisible}
                SET_SAVE_BIN={SET_SAVE_BIN}
                SAVE_BIN={SAVE_BIN}
                SET_SEMESTER_MAP={SET_SEMESTER_MAP}
                SEMESTER_MAP={SEMESTER_MAP}
                semesterSelect={semesterSelect}
            ></SaveBin>
        </div>
    );
}

export default MainPage;
