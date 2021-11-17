import React, { useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { ImCross } from "react-icons/im";
import Swal from "sweetalert2";
import { Course } from "../interfaces/course";
import ClearSavedSemestersButton from "./ClearSavedSemestersButton";
import courseData from "../assets/courses";
import { ButtonList } from "../interfaces/buttonList";

export default function AccessSavedSemesters({ SET_SEMESTER_MAP, SEMESTER_MAP, setSemesterCount, semesterCount, setButtonList, buttonList }: {
    SET_SEMESTER_MAP: (s: Record<string, Course[]>) => void, SEMESTER_MAP: Record<string, Course[]>,
    setSemesterCount: (c: number) => void, semesterCount: number,
    setButtonList: (b: ButtonList[]) => void, buttonList: ButtonList[]
}): JSX.Element {

    function loadSave(key: string) {
        // Remove all courses and remove pre-req markers.
        removeAllCourses();
        
        // Retrieve Object from localStorage
        const retrievedObject = localStorage.getItem(key);
        const parsedObject = JSON.parse(""+retrievedObject) as Record<string, Course[]>;

        // add necessary amount of semesters
        const semesterCountBuffer = getNumberOfSemesters(parsedObject);
        setSemesterCount(semesterCountBuffer);

        // Initialize all pre-reqs and add courses
        //addLoadedSave(parsedObject);
    }

    function addLoadedSave(parsedObject: Record<string, Course[]>) {
        for (const [key, value] of Object.entries(parsedObject)) {
            console.log(value);
            Object.values(parsedObject[key]).forEach(course => {
                addCourse(course.id, key);
            });
        }
    }

    function getNumberOfSemesters(parsedObject: Record<string, Course[]>) {
        const count = Object.keys(parsedObject).length;
        const numberOfVisibleSemesters = semesterCount - 1;
        let semesterCountBuffer = semesterCount;

        if (numberOfVisibleSemesters < count) {
            for (let i = numberOfVisibleSemesters; i < count; i++){
                addSemester(semesterCountBuffer);
                semesterCountBuffer++;
                console.log(`NUMBER: ${semesterCountBuffer}`);
                
            }
        }

        return semesterCountBuffer;

    }

    function addSemester(semesterCountBuffer: number) {
        //let count = semesterCount;
        const NEW_SEMESTER_MAP = {...SEMESTER_MAP};

        buttonList.push({name: getSemesterName(semesterCountBuffer), value: semesterCountBuffer});
        setButtonList(buttonList);

        NEW_SEMESTER_MAP[""+semesterCount] = [];
        SET_SEMESTER_MAP(NEW_SEMESTER_MAP);
        
        return buttonList;
    }

    function getSemesterName(count: number) {
        let newCount = count;
        let season = "";
        if (count % 2 !== 0) {
            newCount = (count+1) / 2;
            season = "Fall";
        } else {
            newCount = count/2;
            season = "Spring";
        }

        return `${season} ${newCount}`;

    }

    function addCourse(id: number, key: string) {
        const NEW_SEMESTER_MAP = {...SEMESTER_MAP};
        
        //  PREREQ MET IN PRIOR SEMESTER
        if (Object.keys(courseData[id].preReq).length > 0){
            console.log(courseData[id].preReq);
            if (Object.values(courseData[id].preReq).every(course => course === true)){
                courseData[id].preReqCheck = "black";
            } else {
                alert("Warning: Pre-Reqs not met.");
                courseData[id].preReqCheck = "red";
            }
            updateColor(courseData[id]);
        }

        if (SEMESTER_MAP[key].length === 6) {
            alert("Max number of courses selected for semester.");
        } else {
            for (const [key, value] of Object.entries(courseData)) {
                console.log([key,value]);
                Object.keys(value.preReq).forEach(courseName => {
                    //console.log(courseName);
                    if(courseName === courseData[id].name) {
                        console.log(courseName);
                        value.preReq[courseName] = true;
                    }
                });
            }
            NEW_SEMESTER_MAP[key].push(courseData[id]);
            SET_SEMESTER_MAP(NEW_SEMESTER_MAP);
        }

        for (const [key, value] of Object.entries(SEMESTER_MAP)) {
            console.log([key,value]);
            SEMESTER_MAP[key].forEach(item => {
                if(Object.keys(item.preReq).length > 0) {
                    if (Object.values(item.preReq).every(course => course === true)){
                        item.preReqCheck = "black";
                    } else {
                        item.preReqCheck = "red";
                    }
                    updateColor(item);
                }
            });
        }
    }

    function deleteSavedSemester(key: string) {
        Swal.fire({
            title: `Are you sure you want to delete "${key}"?`,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `Delete "${key}"`,
            denyButtonText: "Don't delete",
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                localStorage.removeItem(key);
                Swal.fire(`"${key}" Deleted!`, "", "success");
            } else if (result.isDenied) {
                Swal.fire(`"${key}" was not Deleted.`, "", "info");
            }
        });
    }

    function removeAllCourses() {
        const NEW_SEMESTER_MAP = {...SEMESTER_MAP}; 
        for (const [key] of Object.entries(NEW_SEMESTER_MAP)) {
            Object.values(NEW_SEMESTER_MAP[key]).forEach(course => {
                removePreReq(course);
                NEW_SEMESTER_MAP[key].pop();
            });
            NEW_SEMESTER_MAP[key]=[];
        }
        SET_SEMESTER_MAP(NEW_SEMESTER_MAP);
    }

    function removePreReq(course: Course) {
        for (const [key, value] of Object.entries(courseData)) {
            console.log([key,value]);
            Object.keys(value.preReq).forEach(courseName => {
                //console.log(courseName);
                if(courseName === course.name) {
                    console.log(courseName);
                    value.preReq[courseName] = false;
                }
            });
        }
        for (const [key, value] of Object.entries(SEMESTER_MAP)) {
            console.log([key,value]);
            SEMESTER_MAP[key].forEach(item => {
                if(Object.keys(item.preReq).length > 0) {
                    if (Object.values(item.preReq).every(course => course === true)){
                        item.preReqCheck = "black";
                    } else {
                        item.preReqCheck = "red";
                    }
                    updateColor(item);
                }
            });
        }
    }

    function updateColor(course: Course) {
        return course.preReqCheck;
    }

    return(
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Saved Semesters
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {Object.keys(localStorage).map(key =>
                    <div 
                        style={{display: "inline-flex"}} 
                        key={key}>
                        <Dropdown.Item 
                            onClick={() => loadSave(key)}
                        >{key}
                            
                        </Dropdown.Item>
                        <button onClick={() => deleteSavedSemester(key)}>
                            <ImCross></ImCross>
                        </button>
                    </div>
                )}
                <ClearSavedSemestersButton></ClearSavedSemestersButton>
            </Dropdown.Menu>
        </Dropdown>
    );
}


