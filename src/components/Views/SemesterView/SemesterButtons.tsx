// Source Imports
import React from "react";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import { ButtonList } from "../../../interfaces/buttonList";
import { Course } from "../../../interfaces/course";

// Component Imports

// Design Imports
import "../../../css/board.css";

export default function SemesterButtons({ buttonList, SEMESTER_MAP, buttonToggle, setSemesterSelect, setSemesterHeader }: {
    buttonList: ButtonList[],
    SEMESTER_MAP: Record<string, Course[]>,
    buttonToggle: string,
    setSemesterHeader: (s: string) => void,
    setSemesterSelect: (s: string | null) => void
}): JSX.Element {

    function handleSelect (val: number) {
        setSemesterSelect(""+val);
        setSemesterHeader(buttonList[val-1].name);
    }

    function checkPreReqWarning(key: string) {
        let flag = false;
        SEMESTER_MAP[key].forEach(course => {
            if(course.preReqCheck === "red"){
                flag = true;
            }
        });
        return flag;
    }

    return(
        <div>
            <ToggleButtonGroup className="semester-button" name="options" value={+buttonToggle} onChange={handleSelect}>
                {buttonList.map((radio, idx) =>
                    <ToggleButton
                        data-testid="btn-semester"
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant={ checkPreReqWarning(""+radio.value) ? "outline-warning" : SEMESTER_MAP[""+radio.value].length > 0 ? "outline-success" :  "outline-danger" }
                        name="radio"
                        value={radio.value}
                    >
                        {radio.name}
                    </ToggleButton>
                )}
            </ToggleButtonGroup>
        </div>
    );
}
