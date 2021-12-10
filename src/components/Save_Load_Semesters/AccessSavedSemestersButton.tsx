// Source Imports
import React from "react";
import { Dropdown } from "react-bootstrap";
import { ImCross } from "react-icons/im";
import Swal from "sweetalert2";
import { ButtonList } from "../../interfaces/buttonList";
import { Course } from "../../interfaces/course";

// Function Imports
import updateColor from "../../utilities/updateColor";
import removePreReq from "../../utilities/removePreReq";
import getSemesterName from "../../utilities/getSemesterName";
import preReqAlert from "../../utilities/preReqAlert";
import maxNumberOfCoursesAlert from "../../utilities/maxNumberOfCourses";
import { findAnyCourseInEntirePlan } from "../../utilities/findCourseInEntirePlan";

// Component Imports
import ClearSavedSemestersButton from "./ClearSavedSemestersButton";

import "../../css/AccessSaved.css";

// Breadcrumbs:
// Main Page / AccessSavedSemesterButton
export default function AccessSavedSemesters({ SET_SEMESTER_MAP, SEMESTER_MAP, setSemesterCount, semesterCount, setButtonList, buttonList, setSelectedSave, setCourseData, courseData }: {
    SET_SEMESTER_MAP: (s: Record<string, Course[]>) => void, SEMESTER_MAP: Record<string, Course[]>,
    setSemesterCount: (c: number) => void, semesterCount: number,
    setButtonList: (b: ButtonList[]) => void, buttonList: ButtonList[],
    setSelectedSave: (s: string) => void,
    setCourseData: (d: Course[]) => void, courseData: Course[]
}): JSX.Element {

    // Main Load Function
    function loadSaveHandler(key: string) {

        if (findAnyCourseInEntirePlan(SEMESTER_MAP) || courseData.length > 20){
            Swal.fire({
                title: "Overwrite Warning!",
                text: "Your current schedule and custom courses will be overwritten. Please go back and save your current plan if you wish to use it again.",
                showDenyButton: true,
                confirmButtonText: "Continue",
                denyButtonText: "Go Back",
                icon: "warning"
            }).then((result) => {
                if (result.isConfirmed) {
                    loadSave(key);
                } else if (result.isDenied) {
                    Swal.fire(`"${key}" was not Loaded 😮‍💨.`, "", "info");
                }
            });
        } else {
            loadSave(key);
        }
    }

    function loadSave(key: string) {
        // Remove all courses and remove pre-req markers.
        removeAllCourses();
        
        // Retrieve Object from localStorage
        const retrievedObject = localStorage.getItem(key);
        const parsedObject = JSON.parse(""+retrievedObject);

        const parsedSemesterMap = parsedObject["semesterMap"] as Record<string, Course[]>;
        const courseData = parsedObject["courseData"] as Course[];
        setCourseData(courseData);

        // add necessary amount of semesters and courses respectively
        getNumberOfSemesters(parsedSemesterMap, courseData);

        setSelectedSave(key);
    }

    function addLoadedSave(parsedObject: Record<string, Course[]>, courseData: Course[]) {
        Object.keys(parsedObject).forEach(key => {
            Object.values(parsedObject[key]).forEach(course => {
                addCourse(course.id, key, courseData);
            });
        }); 
    }

    function getNumberOfSemesters(parsedObject: Record<string, Course[]>, courseData: Course[]) {
        const count = Object.keys(parsedObject).length;
        const numberOfVisibleSemesters = semesterCount - 1;
        const semesterCountBuffer: number[] = [];
        
        if (numberOfVisibleSemesters < count) {
            for (let i = numberOfVisibleSemesters; i < count; i++){
                semesterCountBuffer.push(i+1);
                // console.log(`NUMBER: ${semesterCountBuffer}`);
            }
            addSemester(semesterCountBuffer, parsedObject, courseData);
            setSemesterCount(count+1);

        } else {
            addLoadedSave(parsedObject, courseData);
        }
        
        return semesterCountBuffer;
    }

    function addSemester(semesterCountBuffer: number[], parsedObject: Record<string, Course[]>, courseData: Course[]) {
        const NEW_SEMESTER_MAP = {...SEMESTER_MAP};

        semesterCountBuffer.forEach(key => {
            // Create each new Semester
            buttonList.push({name: getSemesterName(key), value: key});
            NEW_SEMESTER_MAP[""+key] = [];
            Object.keys(NEW_SEMESTER_MAP).forEach(mapKey => {
                Object.keys(parsedObject).forEach(objKey => {
                    if (""+mapKey === objKey) {
                        // While in the same semester for both the current and saved semester
                        Object.values(parsedObject[objKey]).forEach(course => {
                            if (!NEW_SEMESTER_MAP[mapKey].includes(course)){
                                /* If the course in the saved semester is not present in 
                                the current semester then AddCourse */
                                addCourses(course, mapKey, NEW_SEMESTER_MAP, courseData);
                            }
                        });
                    }
                });
            });
        });

        setButtonList(buttonList);
        SET_SEMESTER_MAP(NEW_SEMESTER_MAP);
        
        return NEW_SEMESTER_MAP;
    }

    function addCourse(id: number, key: string, courseData: Course[]) {
        const NEW_SEMESTER_MAP = {...SEMESTER_MAP};
        
        //  PREREQ MET IN PRIOR SEMESTER
        if (Object.keys(courseData[id].preReq).length > 0){
            // console.log(courseData[id].preReq);
            if (Object.values(courseData[id].preReq).every(course => course === true)){
                courseData[id].preReqCheck = "black";
            } else {
                preReqAlert();
                courseData[id].preReqCheck = "red";
            }
            updateColor(courseData[id]);
        }

        if (SEMESTER_MAP[key].length === 6) {
            maxNumberOfCoursesAlert();
        } else {
            Object.values(courseData).forEach(value => {
                Object.keys(value.preReq).forEach(courseName => {
                    if(courseName === courseData[id].name) {
                        value.preReq[courseName] = true;
                    }
                });
            });

            NEW_SEMESTER_MAP[key].push(courseData[id]);
            SET_SEMESTER_MAP(NEW_SEMESTER_MAP);
        }

        Object.keys(SEMESTER_MAP).forEach(key => {
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
        }); 
    }

    function addCourses(course: Course, mapKey: string, NEW_SEMESTER_MAP: Record<string, Course[]>, courseData: Course[]) {
        //  PREREQ MET IN PRIOR SEMESTER
        if (Object.keys(courseData[course.id].preReq).length > 0){
            // console.log(courseData[course.id].preReq);
            if (Object.values(courseData[course.id].preReq).every(course => course === true)){
                courseData[course.id].preReqCheck = "black";
            } else {
                // alert("Warning: Pre-Reqs not met.");
                courseData[course.id].preReqCheck = "red";
            }
            updateColor(courseData[course.id]);
        }
        NEW_SEMESTER_MAP[mapKey].push(course);

        Object.keys(NEW_SEMESTER_MAP).forEach(key => {
            NEW_SEMESTER_MAP[key].forEach(item => {
                if(Object.keys(item.preReq).length > 0) {
                    if (Object.values(item.preReq).every(course => course === true)){
                        item.preReqCheck = "black";
                    } else {
                        item.preReqCheck = "red";
                    }
                    updateColor(item);
                }
            });
        }); 
    }

    function deleteSavedSemester(key: string) {
        Swal.fire({
            title: `Are you sure you want to delete "${key}"?`,
            showDenyButton: true,
            confirmButtonText: `Delete "${key}"`,
            denyButtonText: "Don't delete",
            icon: "warning"
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                localStorage.removeItem(key);
                Swal.fire(`"${key}" Deleted 😁!`, "", "success");
            } else if (result.isDenied) {
                Swal.fire(`"${key}" was not Deleted 😮‍💨.`, "", "info");
            }
        });
    }

    function removeAllCourses() {
        const NEW_SEMESTER_MAP = {...SEMESTER_MAP}; 
        for (const [key] of Object.entries(NEW_SEMESTER_MAP)) {
            Object.values(NEW_SEMESTER_MAP[key]).forEach(course => {
                removePreReq(course, NEW_SEMESTER_MAP, courseData);
                NEW_SEMESTER_MAP[key].pop();
            });
            NEW_SEMESTER_MAP[key]=[];
        }
        SET_SEMESTER_MAP(NEW_SEMESTER_MAP);
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
                            onClick={() => loadSaveHandler(key)}
                        >{key}
                            
                        </Dropdown.Item>
                        <button className="delete_save" onClick={() => deleteSavedSemester(key)}>
                            <ImCross></ImCross>
                        </button>
                    </div>
                )}
                <ClearSavedSemestersButton></ClearSavedSemestersButton>
            </Dropdown.Menu>
        </Dropdown>
    );
}


