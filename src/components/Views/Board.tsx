// Source Imports
import React from "react";
import { ButtonList } from "../../interfaces/buttonList";
import { Course } from "../../interfaces/course";

// Component Imports
import ClearSemesterButton from "./ClearSemesterButton";

// Design Imports
import "../../css/board.css";
import ClearAllSemesterButton from "./ClearAllSemesterButton";
import SemesterButtons from "./SemesterView/SemesterButtons";
import CourseCardContainer from "./SemesterView/CourseCardContainer";

// Breadcrumbs:
// Main Page / Board - renders each semester and its classes
export function Board({ setSemesterSelect, semesterSelect, SET_SEMESTER_MAP, SEMESTER_MAP, setSemesterHeader, semesterHeader, SET_SAVE_BIN, SAVE_BIN, binVisible, buttonList, setCourseData, courseData }: {
    setSemesterSelect: (s: string | null) => void, semesterSelect: string | null,
    SET_SEMESTER_MAP: (m: Record<string, Course[]>) => void, SEMESTER_MAP: Record<string, Course[]>,
    setSemesterHeader: (s: string) => void, semesterHeader: string,
    SET_SAVE_BIN: (s: Course[]) => void, SAVE_BIN: Course[],
    binVisible: boolean,
    buttonList: ButtonList[],
    setCourseData: (d: Course[]) => void, courseData: Course[]
}):  JSX.Element {

    return (
        <div data-testid="semester-view">
            <div>
                <h2>Semester View - {semesterHeader}</h2>
                <SemesterButtons
                    buttonList={buttonList}
                    SEMESTER_MAP={SEMESTER_MAP}
                    buttonToggle={""+semesterSelect}
                    setSemesterSelect={setSemesterSelect}
                    setSemesterHeader={setSemesterHeader}
                ></SemesterButtons>
            </div>

            <div>
                {/* Area where the course cards are placed + animations are handled */}
                <CourseCardContainer
                    SET_SEMESTER_MAP={SET_SEMESTER_MAP}
                    SEMESTER_MAP={SEMESTER_MAP}
                    SET_SAVE_BIN={SET_SAVE_BIN}
                    SAVE_BIN={SAVE_BIN}
                    semesterSelect={semesterSelect}
                    binVisible={binVisible}
                    setCourseData={setCourseData}
                    courseData={courseData}
                ></CourseCardContainer>
                <div>
                    <div>
                        { SEMESTER_MAP[""+semesterSelect].length > 0 && <ClearSemesterButton
                            SET_SEMESTER_MAP={SET_SEMESTER_MAP}
                            SEMESTER_MAP={SEMESTER_MAP}
                            semesterSelect={semesterSelect}
                            courseData={courseData}
                        ></ClearSemesterButton> }
                    </div>
                    <div>
                        <ClearAllSemesterButton
                            SET_SEMESTER_MAP={SET_SEMESTER_MAP}
                            SEMESTER_MAP={SEMESTER_MAP}
                            courseData={courseData}
                        ></ClearAllSemesterButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
