// Source Imports
import React, { useState } from "react";
import { Course } from "../interfaces/course";
import { ButtonList } from "../interfaces/buttonList";
import SEMESTER_MAP_INIT from "../assets/stateInitializers/semesterMap";
import buttonListInit from "../assets/stateInitializers/buttonList";

// Component Imports
import { Board } from "./Board";
import DisplayCourses from "./DisplayCourses";
import SideMenu from "./SideMenu";
import DegreePlan from "./DegreePlan";
import SaveBin from "./SaveBin";
import SaveButton from "./SaveButton";
import AccessSavedSemestersButton from "./AccessSavedSemestersButton";
import AddSemesterButton from "./AddSemesterButton";
import RemoveSemesterButton from "./RemoveSemesterButton";
import SelectedSaveHeader from "./SelectedSaveHeader";

// Design Imports
import "../css/App.css";

// Breadcrumbs:
// Main Page
function MainPage({ visibleView, setVisibleView }: {
    setVisibleView: (s: string | null) => void, visibleView: string | null
}): JSX.Element {
    const [semesterSelect, setSemesterSelect] = useState<string | null>("1");
    const [semesterHeader, setSemesterHeader] = useState<string>("Fall 1");


    // Selected Save Variable
    const [selectedSave, setSelectedSave] = useState<string>("No Save Selected");
    
    // Bin Variables
    const [binVisible, setBinVisible] = useState<boolean>(false);
    const SAVE_BIN_INIT: Course[] = [];
    const [SAVE_BIN, SET_SAVE_BIN] = useState<Course[]>(SAVE_BIN_INIT);

    const [semesterCount, setSemesterCount] = useState<number>(9);
    const [buttonList, setButtonList] = useState<ButtonList[]>(buttonListInit);
   
    // SEMESTER_MAP: useState to modify each semester and its courses
    const [SEMESTER_MAP, SET_SEMESTER_MAP] = useState<Record<string, Course[]>>(SEMESTER_MAP_INIT);

    return (
        <div className="App">
            <header className="App-header">
                UD CIS Scheduler
                <p>Srinath Venkatesh, Elliot Tingey, Geoffrey Linderman</p>

                <SaveButton
                    SEMESTER_MAP={SEMESTER_MAP}
                ></SaveButton>
                { localStorage.length > 0 && 
                <div>
                    <AccessSavedSemestersButton
                        SET_SEMESTER_MAP={SET_SEMESTER_MAP}
                        SEMESTER_MAP={SEMESTER_MAP}
                        setSemesterCount={setSemesterCount}
                        semesterCount={semesterCount}
                        setButtonList={setButtonList}
                        buttonList={buttonList}
                        setSelectedSave={setSelectedSave}
                    ></AccessSavedSemestersButton> 
                    <SelectedSaveHeader
                        selectedSave={selectedSave}
                    ></SelectedSaveHeader>
                </div>
                }
                
            </header>
            <section className="cell-left">
                <p>Menu</p>
                <SideMenu
                    setVisibleView={setVisibleView}
                ></SideMenu>
            </section>
            <section className="cell-main">

                <RemoveSemesterButton
                    setSemesterSelect={setSemesterSelect}
                    setSemesterHeader={setSemesterHeader}
                    SET_SEMESTER_MAP={SET_SEMESTER_MAP}
                    SEMESTER_MAP={SEMESTER_MAP}
                    setSemesterCount={setSemesterCount}
                    semesterCount={semesterCount}
                    setButtonList={setButtonList}
                    buttonList={buttonList}
                ></RemoveSemesterButton>
                
                <AddSemesterButton
                    SET_SEMESTER_MAP={SET_SEMESTER_MAP}
                    SEMESTER_MAP={SEMESTER_MAP}
                    setSemesterCount={setSemesterCount}
                    semesterCount={semesterCount}
                    setButtonList={setButtonList}
                    buttonList={buttonList}
                ></AddSemesterButton>

                
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
                    buttonList={buttonList}
                ></Board> }
                
                { visibleView === "3" && <DegreePlan
                    SET_SEMESTER_MAP={SET_SEMESTER_MAP}
                    SEMESTER_MAP={SEMESTER_MAP}
                    setSemesterSelect={setSemesterSelect}
                    setSemesterHeader={setSemesterHeader}
                    buttonList={buttonList}
                ></DegreePlan> }
                
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
