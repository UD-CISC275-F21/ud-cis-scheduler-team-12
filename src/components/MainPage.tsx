import React, { useState } from "react";
import "../css/App.css";

import { Course } from "../interfaces/course";

import { Board } from "../components/Board";
import DisplayCourses from "../components/DisplayCourses";
import SideMenu from "../components/SideMenu";
import Calender from "../components/Calender";
import DegreePlan from "../components/DegreePlan";
import SaveBin from "./SaveBin";

import ReactJoyride from "react-joyride";

function MainPage({ visibleView, setVisibleView }: {
    setVisibleView: (s: string | null) => void, visibleView: string | null
}): JSX.Element {

    const state = {
        steps: [
            {
                target: ".App-header",
                disableBeacon: true,
                title: "Welcome!",
                content: "Welcome to your personal Course Scheduler! To take the tour of the features, hit 'next'. Or you can skip the tour by hitting 'skip'.",
            },
            {
                target: ".cell-main",
                title: "Main Board",
                content: "This where all your planning will happen. This board will change views depending on which view option you select in the left menu.",
            },
            {
                target: ".semester-step",
                title: "Semester View",
                content: "This is the semester view. You can toggle between semesters and it will change colors based on the status of the semester.\nGreen - courses added have no conflicts.\nRed - no courses are added.\nYellow - there are conflicts with certain courses.",
            },
            {
                target: ".menu-step",
                title: "Menu",
                content: "Here you can either see your selected courses in the semester view or degree view.",
            },
            {
                target: ".right-menu-step",
                title: "Search Bar/Bin",
                content: <><iframe src="https://gifer.com/embed/5SM"></iframe><p><a href="https://gifer.com">via GIFER</a></p></>,
            },
        ]
    };


    const [semesterSelect, setSemesterSelect] = useState<string | null>("1");
    const [semesterHeader, setSemesterHeader] = useState<string>("Fall 1");

    //Pre-req Check Variables
    
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
            <ReactJoyride
                steps={state.steps}
                continuous
                showProgress
                showSkipButton
                disableOverlayClose
                spotlightClicks
                styles={{
                    options: {
                        arrowColor: "white",
                        backgroundColor: "white",
                        overlayColor: "rgba(0,0,0,0.6)",
                        primaryColor: "#000",
                        textColor: "black",
                        width: 900,
                        zIndex: 1000,
                    }
                }}
            />
            <header className="App-header">
                <div className="intro-step">
                    UD CIS Scheduler
                    <p>Srinath Venkatesh, Elliot Tingey, Geoffrey Linderman</p>
                </div>
            </header>
            <section className="cell-left">
                <div className="menu-step">
                    <p>Menu</p>
                    <SideMenu
                        setVisibleView={setVisibleView}
                    ></SideMenu>
                </div>
            </section>
            <section className="cell-main">
                
                <div className="semester-step">
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
                </div>

                
                { visibleView === "3" && <DegreePlan
                    SET_SEMESTER_MAP={SET_SEMESTER_MAP}
                    SEMESTER_MAP={SEMESTER_MAP}
                    setSemesterSelect={setSemesterSelect}
                    setSemesterHeader={setSemesterHeader}
                ></DegreePlan> }
                

                { visibleView === "4" && <Calender></Calender> }

                
            </section>
            <section className="cell-right">
                <div className="right-menu-step">
                    { (visibleView === "2" || visibleView === "3") &&  <DisplayCourses
                        SET_SEMESTER_MAP={SET_SEMESTER_MAP}
                        SEMESTER_MAP={SEMESTER_MAP}
                        semesterSelect={semesterSelect}
                        setBinVisible={setBinVisible}
                        binVisible={binVisible}
                        SET_SAVE_BIN={SET_SAVE_BIN}
                        SAVE_BIN={SAVE_BIN}
                    ></DisplayCourses> }            
                </div>
            </section>
            
            <div className="save-bin">
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
        </div>
    );
}

export default MainPage;
