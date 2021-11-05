import React, { useState } from "react";
import { Col, Row, Container, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import CourseComp from "./CourseComp";
import ClearSemesterButton from "./ClearSemesterButton";
import "../css/board.css";
import { Course } from "../interfaces/course";



export function Board({ setSemesterSelect, semesterSelect, SET_SEMESTER_MAP, SEMESTER_MAP }: {
    setSemesterSelect: (s: string | null) => void, semesterSelect: string | null,
    SET_SEMESTER_MAP: (m: Record<string, Course[]>) => void, SEMESTER_MAP: Record<string, Course[]>
}):  JSX.Element {

    
    // const list variable to map out classList useState variable
    const classListToPrint = SEMESTER_MAP[""+semesterSelect];

    const [semesterHeader, setSemesterHeader] = useState<string>("Fall 1");

    function handleSelect (val: string) {
        setSemesterSelect(""+val);
        switch(val+"") {
        case "1":
            setSemesterHeader("Fall 1");
            return semesterHeader;
        case "1.2":
            setSemesterHeader("Spring 1");
            return semesterHeader;
        case "1.3":
            setSemesterHeader("Fall 2");
            return semesterHeader;
        case "1.4":
            setSemesterHeader("Spring 2");
            return semesterHeader;
        case "1.5":
            setSemesterHeader("Fall 3");
            return semesterHeader;
        case "1.6":
            setSemesterHeader("Spring 3");
            return semesterHeader;
        case "1.7":
            setSemesterHeader("Fall 4");
            return semesterHeader;
        case "1.8":
            setSemesterHeader("Spring 4");
            return semesterHeader;
        }
    }

    return (
        <div>
            <div>
                <h2>Semester View - {semesterHeader}</h2>
                <ToggleButtonGroup type="radio" name="options" value={semesterSelect} onChange={handleSelect}>
                    <ToggleButton id="tbg-radio-1" value={1}>
                    Fall 1
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-2" value={1.2}>
                    Spring 1
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={1.3}>
                    Fall 2
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-4" value={1.4}>
                    Spring 2
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-5" value={1.5}>
                    Fall 3
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-6" value={1.6}>
                    Spring 3
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-7" value={1.7}>
                    Fall 4
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-8" value={1.8}>
                    Spring 4
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>

            <div>
                <Container>
                    <Row>
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