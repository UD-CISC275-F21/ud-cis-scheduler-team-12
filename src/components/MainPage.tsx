// Source Imports
import React, { useState } from "react";
import { Course } from "../interfaces/course";
import { ButtonList } from "../interfaces/buttonList";
import SEMESTER_MAP_INIT from "../assets/stateInitializers/semesterMap";
import buttonListInit from "../assets/stateInitializers/buttonList";
import SELECT_MAP_INIT from "../assets/stateInitializers/radioToggle";
import courseDataInit from "../assets/courses";

// Component Imports
import { Board } from "./Views/Board";
import DisplayCourses from "./Right_Menu/DisplayCourses";
import SideMenu from "./Left_Menu/SideMenu";
import DegreePlan from "./Views/DegreePlan";
import SaveBin from "./Save_Later_Bin/SaveBin";
import SaveButton from "./Save_Load_Semesters/SaveButton";
import AccessSavedSemestersButton from "./Save_Load_Semesters/AccessSavedSemestersButton";
import AddSemesterButton from "./Add_Remove_Semesters/AddSemesterButton";
import RemoveSemesterButton from "./Add_Remove_Semesters/RemoveSemesterButton";
import SelectedSaveHeader from "./Save_Load_Semesters/SelectedSaveHeader";

// Design Imports
import "../css/App.css";

// Breadcrumbs:
// Main Page
function MainPage({ visibleView, setVisibleView }: {
    setVisibleView: (s: string | null) => void, visibleView: string | null,
}): JSX.Element {
    const [semesterSelect, setSemesterSelect] = useState<string | null>("1");
    const [semesterHeader, setSemesterHeader] = useState<string>("Fall 1");

    // Selected Save Variable
    const [selectedSave, setSelectedSave] = useState<string>("No Save Selected");
    
    // Bin Variables
    const [binVisible, setBinVisible] = useState<boolean>(false);
    const SAVE_BIN_INIT: Course[] = [];
    const [SAVE_BIN, SET_SAVE_BIN] = useState<Course[]>(SAVE_BIN_INIT);

    // Is one value above the current semesters
    const [semesterCount, setSemesterCount] = useState<number>(9);
    
    const [buttonList, setButtonList] = useState<ButtonList[]>(buttonListInit);
    const [SELECT_MAP, SET_SELECT_MAP] = useState<Record<string, boolean>>(SELECT_MAP_INIT);
   
    // SEMESTER_MAP: useState to modify each semester and its courses
    const [SEMESTER_MAP, SET_SEMESTER_MAP] = useState<Record<string, Course[]>>(SEMESTER_MAP_INIT);
    const [courseData, setCourseData] = useState<Course[]>(courseDataInit);

    return (
        <div className="App">
            <header className="App-header">
                UD CIS Scheduler
                <p>Srinath Venkatesh, Elliot Tingey, Geoffrey Linderman</p>

                <SaveButton
                    SEMESTER_MAP={SEMESTER_MAP}
                    courseData={courseData}
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
                        setCourseData={setCourseData}
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
                    SET_SELECT_MAP={SET_SELECT_MAP}
                    SELECT_MAP={SELECT_MAP}
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
                    setCourseData={setCourseData}
                    courseData={courseData}
                ></Board> }
                
                { visibleView === "3" && <DegreePlan
                    SET_SEMESTER_MAP={SET_SEMESTER_MAP}
                    SEMESTER_MAP={SEMESTER_MAP}
                    setSemesterSelect={setSemesterSelect}
                    setSemesterHeader={setSemesterHeader}
                    buttonList={buttonList}
                    SET_SELECT_MAP={SET_SELECT_MAP}
                    SELECT_MAP={SELECT_MAP}
                    setCourseData={setCourseData}
                    courseData={courseData}
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
                    setCourseData={setCourseData}
                    courseData={courseData}
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
                courseData={courseData}
            ></SaveBin>
        </div>
    );
}

export default MainPage;
