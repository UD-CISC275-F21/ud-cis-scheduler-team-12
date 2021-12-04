// Source Imports
import React from "react";
import { Row, Col, Container} from "react-bootstrap";
import { ButtonList } from "../../interfaces/buttonList";
import { Course } from "../../interfaces/course";

// Component Imports
import SemesterComp from "../Card_Components/SemesterComp";
import ClearAllSemesterButton from "./ClearAllSemesterButton";

// Design Imports
import "../../css/calender.css";

// Breadcrumbs:
// Main Page / DegreePlan - shows all semesters at once in the Degree Plan View
export function DegreePlan({ SET_SEMESTER_MAP ,SEMESTER_MAP, setSemesterSelect, setSemesterHeader, buttonList, SET_SELECT_MAP, SELECT_MAP }: {
    SET_SEMESTER_MAP: (m: Record<string, Course[]>) => void, SEMESTER_MAP: Record<string, Course[]>,
    setSemesterSelect: (s: string | null) => void,
    setSemesterHeader: (s: string) => void,
    buttonList: ButtonList[],
    SET_SELECT_MAP: (s: Record<string, boolean>) => void, SELECT_MAP: Record<string, boolean>
}):  JSX.Element {

    const SEMESTER_MAP_TO_PRINT = {...SEMESTER_MAP};

    return (
        <div>
            <h2>Degree Plan View</h2>
            
            <div data-testid="degree-view">
                <Container>
                    
                    <Row xs={2} md={2}>
                        
                        {Object.entries(SEMESTER_MAP_TO_PRINT).map(([key, value]) =>
                            <Col key={key}>
                                <SemesterComp
                                    SET_SEMESTER_MAP={SET_SEMESTER_MAP}
                                    SEMESTER_MAP={SEMESTER_MAP}
                                    courseList={value}
                                    setSemesterSelect={setSemesterSelect}
                                    semesterSelect={key}
                                    setSemesterHeader={setSemesterHeader}
                                    SET_SELECT_MAP={SET_SELECT_MAP}
                                    SELECT_MAP={SELECT_MAP}
                                    buttonList={buttonList}
                                ></SemesterComp>
                            </Col>
                        )}
                        
                    </Row>
                    
                </Container>
            </div>
            <div>
                <ClearAllSemesterButton
                    SET_SEMESTER_MAP={SET_SEMESTER_MAP}
                    SEMESTER_MAP={SEMESTER_MAP}
                ></ClearAllSemesterButton>
            </div>
        </div>
    );
}

export default DegreePlan;
