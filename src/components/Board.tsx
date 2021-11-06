import React from "react";
import { Col, Row, Container, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import CourseComp from "./CourseComp";
import ClearSemesterButton from "./ClearSemesterButton";
import "../css/board.css";
import { Course } from "../interfaces/course";

import buttonList from "../assets/buttonList";

export function Board({ setSemesterSelect, semesterSelect, SET_SEMESTER_MAP, SEMESTER_MAP, setSemesterHeader, semesterHeader }: {
    setSemesterSelect: (s: string | null) => void, semesterSelect: string | null,
    SET_SEMESTER_MAP: (m: Record<string, Course[]>) => void, SEMESTER_MAP: Record<string, Course[]>,
    setSemesterHeader: (s: string) => void, semesterHeader: string
}):  JSX.Element {

    // const list variable to map out classList useState variable
    const classListToPrint = SEMESTER_MAP[""+semesterSelect];

    const buttonToggle = ""+semesterSelect;

    function handleSelect (val: number) {
        setSemesterSelect(""+val);
        setSemesterHeader(buttonList[val-1].name);
    }

    return (
        <div>
            <div>
                <h2>Semester View - {semesterHeader}</h2>
                <ToggleButtonGroup className="semester-button" name="options" value={+buttonToggle} onChange={handleSelect}>
                    {buttonList.map((radio, idx) =>
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant={ SEMESTER_MAP[""+radio.value].length > 0 ? "outline-success" : "outline-danger"}
                            name="radio"
                            value={radio.value}
                        >
                            {radio.name}
                        </ToggleButton>
                    )}
                </ToggleButtonGroup>
            </div>

            <div>
                <Container>
                    <Row xs={1} md={3}>
                        {classListToPrint.map(classListToPrint =>
                            <Col key={classListToPrint.id}>
                                <CourseComp
                                    course={classListToPrint}
                                    SET_SEMESTER_MAP={SET_SEMESTER_MAP}
                                    SEMESTER_MAP={SEMESTER_MAP}
                                    semesterSelect={semesterSelect}
                                ></CourseComp>
                            </Col>
                        )}
                    </Row>
                </Container>
                { SEMESTER_MAP[""+semesterSelect].length > 0 && <ClearSemesterButton
                    SET_SEMESTER_MAP={SET_SEMESTER_MAP}
                    SEMESTER_MAP={SEMESTER_MAP}
                    semesterSelect={semesterSelect}
                ></ClearSemesterButton> }
            </div>

        </div>
    );
}