// Source Imports
import React from "react";
import { Dropdown } from "react-bootstrap";
import { ImCross } from "react-icons/im";
import Swal from "sweetalert2";
import courseData from "../../assets/courses";
import { ButtonList } from "../../interfaces/buttonList";
import { Course } from "../../interfaces/course";

// Function Imports
import updateColor from "../../utilities/updateColor";
import removePreReq from "../../utilities/removePreReq";
import getSemesterName from "../../utilities/getSemesterName";
import preReqAlert from "../../utilities/preReqAlert";
import maxNumberOfCoursesAlert from "../../utilities/maxNumberOfCourses";

// Component Imports
import ClearSavedSemestersButton from "./ClearSavedSemestersButton";

// Breadcrumbs:
// Main Page / AccessSavedSemesterButton
export default function AccessSavedSemesters({ SET_SEMESTER_MAP, SEMESTER_MAP, setSemesterCount, semesterCount, setButtonList, buttonList, setSelectedSave }: {
    SET_SEMESTER_MAP: (s: Record<string, Course[]>) => void, SEMESTER_MAP: Record<string, Course[]>,
    setSemesterCount: (c: number) => void, semesterCount: number,
    setButtonList: (b: ButtonList[]) => void, buttonList: ButtonList[],
    setSelectedSave: (s: string) => void
}): JSX.Element {

    // Main Load Function
    function loadSave(key: string) {
        // Remove all courses and remove pre-req markers.
        removeAllCourses();
        
        // Retrieve Object from localStorage
        const retrievedObject = localStorage.getItem(key);
        const parsedObject = JSON.parse(""+retrievedObject) as Record<string, Course[]>;

        // add necessary amount of semesters and courses respectively
        getNumberOfSemesters(parsedObject);

        setSelectedSave(key);
    }

    function addLoadedSave(parsedObject: Record<string, Course[]>) {
        Object.keys(parsedObject).forEach(key => {
            Object.values(parsedObject[key]).forEach(course => {
                addCourse(course.id, key);
            });
        }); 
    }

    function getNumberOfSemesters(parsedObject: Record<string, Course[]>) {
        const count = Object.keys(parsedObject).length;
        const numberOfVisibleSemesters = semesterCount - 1;
        const semesterCountBuffer: number[] = [];
        
        if (numberOfVisibleSemesters < count) {
            for (let i = numberOfVisibleSemesters; i < count; i++){
                semesterCountBuffer.push(i+1);
                // console.log(`NUMBER: ${semesterCountBuffer}`);
            }
            addSemester(semesterCountBuffer, parsedObject);
            setSemesterCount(count+1);

        } else {
            addLoadedSave(parsedObject);
        }
        
        return semesterCountBuffer;
    }

    function addSemester(semesterCountBuffer: number[], parsedObject: Record<string, Course[]>) {
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
                                addCourses(course, mapKey, NEW_SEMESTER_MAP);
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

    function addCourse(id: number, key: string) {
        const NEW_SEMESTER_MAP = {...SEMESTER_MAP};
        
        //  PREREQ MET IN PRIOR SEMESTER
        if (Object.keys(courseData[id].preReq).length > 0){
            console.log(courseData[id].preReq);
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

    function addCourses(course: Course, mapKey: string, NEW_SEMESTER_MAP: Record<string, Course[]>) {
        //  PREREQ MET IN PRIOR SEMESTER
        if (Object.keys(courseData[course.id].preReq).length > 0){
            console.log(courseData[course.id].preReq);
            if (Object.values(courseData[course.id].preReq).every(course => course === true)){
                courseData[course.id].preReqCheck = "black";
            } else {
                // alert("Warning: Pre-Reqs not met.");
                courseData[course.id].preReqCheck = "red";
            }
            updateColor(courseData[course.id]);
        }
        NEW_SEMESTER_MAP[mapKey].push(course);

        for (const [key, value] of Object.entries(NEW_SEMESTER_MAP)) {
            console.log([key,value]);
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
        }
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
                removePreReq(course, SEMESTER_MAP);
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


