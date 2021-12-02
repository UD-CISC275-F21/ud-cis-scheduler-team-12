// Source Imports
import React, { useState } from "react";
import courseData from "../../assets/courses";
import { MdAdd } from "react-icons/md";
import { Accordion, Col, Dropdown, DropdownButton } from "react-bootstrap";
import { motion } from "framer-motion";
import { Course } from "../../interfaces/course";
import Swal from "sweetalert2";


// Component Imports
import SearchBar from "./SearchBar";

// Design Imports
import "../../css/DisplayCourses.css";
import SpiderMan from "../../assets/images/spiderman_meme.jpeg";

// Breadcrumbs:
// Main Page / DisplayCourses - displays list of scrollable courses on right hand side
export default function DisplayCourses({ SET_SEMESTER_MAP, SEMESTER_MAP, semesterSelect, setBinVisible, binVisible, SET_SAVE_BIN, SAVE_BIN, courseTitle, setCourseTitle }: {
    SET_SEMESTER_MAP: (m: Record<string, Course[]>) => void, SEMESTER_MAP: Record<string, Course[]>,
    semesterSelect: string | null,
    setBinVisible: (b: boolean) => void, binVisible: boolean,
    SET_SAVE_BIN: (s: Course[]) => void, SAVE_BIN: Course[],
    setCourseTitle: (s: string) => void, courseTitle: string,

}): JSX.Element {

    const [query, setQuery] = useState<string>("");
    

    function addCourse(id: number) {
        const NEW_SEMESTER_MAP = {...SEMESTER_MAP};
        const foundCourse = findCourseInSemester(id);
        const foundCourseInPlan = findCourseInEntirePlan(id);
        
        // If bin is open, add courses to bin
        if (binVisible){
            if (SAVE_BIN.includes(courseData[id])) {
                Swal.fire({
                    title: "Duplicate Course!",
                    text: `${courseData[id].name} is already added to your bin. Please select another course.`,
                    icon: "error",
                    imageUrl: SpiderMan
                });
            } else {
                SET_SAVE_BIN([...SAVE_BIN, courseData[id]]);
            }
        } else {
            if (foundCourse || foundCourseInPlan) {
                foundCourse ?
                    Swal.fire({
                        title: "Duplicate Course!",
                        text: `${courseData[id].name} is already added to this semester. Please select another course.`,
                        icon: "error",
                        imageUrl: SpiderMan
                    }) :
                    Swal.fire({
                        title: "Duplicate Course!",
                        text: `${courseData[id].name} is already added to your plan. Please select another course.`,
                        icon: "error",
                        imageUrl: SpiderMan
                    });
            } else {
                //  PREREQ MET IN PRIOR SEMESTER
                if (Object.keys(courseData[id].preReq).length > 0){
                    console.log(courseData[id].preReq);
                    if (Object.values(courseData[id].preReq).every(course => course === true)){
                        courseData[id].preReqCheck = "black";
                    } else {
                        Swal.fire(
                            "Pre-Req Error!",
                            "Warning: Pre-Reqs not met 🤔.",
                            "error"
                        );
                        courseData[id].preReqCheck = "red";
                    }
                    updateColor(courseData[id]);
                }

                if (SEMESTER_MAP["" + semesterSelect].length === 6) {
                    Swal.fire(
                        "Getting Studious!",
                        "Warning: Max number of courses selected for semester 📚.",
                        "error"
                    );
                } else {
                    for (const [key, value] of Object.entries(courseData)) {
                        //console.log([key,value]);
                        Object.keys(value.preReq).forEach(courseName => {
                            //console.log(courseName);
                            if(courseName === courseData[id].name) {
                                console.log(courseName);
                                value.preReq[courseName] = true;
                            }
                        });
                    }
                    NEW_SEMESTER_MAP["" + semesterSelect].push(courseData[id]);
                    SET_SEMESTER_MAP(NEW_SEMESTER_MAP);
                }

                for (const [key, value] of Object.entries(SEMESTER_MAP)) {
                    //console.log([key,value]);
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
        }   
    }
    
    function updateColor(course: Course) {
        return course.preReqCheck;
    }
    
    function findCourseInSemester(id: number) {
        return SEMESTER_MAP[""+semesterSelect].includes(courseData[id]);
    }

    function findCourseInEntirePlan(id: number) {
        let flag = false;
        Object.keys(SEMESTER_MAP).forEach(key => {
            SEMESTER_MAP[key].forEach(course => {
                if (course.id === id) {
                    flag = true;
                }
            });
        });

        return flag;
    }
    


    function test2(numEnter: number) {
        //const semester_array = Object.values(SEMESTER_MAP);

        //select desired spot in semester map array
        //const bruh3 = Object.keys(semester_array)[3];

        //select key for double array


        // const bruh3 = Object.keys(Object.values(SEMESTER_MAP));
        // const bruh4 = Object.keys(Object.values(SEMESTER_MAP))[numEnter];

        // const bruh5 = Object.entries(SEMESTER_MAP);
        // const bruh6 = Object.entries(SEMESTER_MAP)[numEnter];
        // const bruh7 = Object.entries(SEMESTER_MAP)[0][0];


        // console.log("keys, values of SEMESTER_MAP",  bruh3);
        // console.log("keys, values of SEMESTER_MAP at position id", bruh4);
        // console.log("entries of SEMESTER_MAP", bruh5);
        // console.log("entries of SEMESTER_MAP at position id", bruh6);
        // console.log(bruh7);
        const fuckOff = numEnter;

        const bruh1 = Object.keys(courseData[0]);
        const bruh2 = Object.values(courseData[0]);


        //ok so i can get the key of the object to get id
        const bruh3 = Object.keys(courseData[0])[1];
        

        //doesnt work
        // Object.values(courseData[0])[1] = "newName";
  
        
        // console.log("keys ", bruh1);
        // console.log("values fuck", bruh2);
        // console.log(bruh3);

        // console.log("ur a dumbass",bruh4);

        // console.log( Object.values(courseData[1])[1]);



        // let man1 = courseData[1].name;
        // man1 = "bruh";

        // console.log("man1 value:", man1);
        // console.log(Object.values(courseData[1])[1]);
    }



    function test() {
        //const bruh4 = Object.values(courseData[0])[1];
        //console.log(bruh4);
        //if (bruh4 !== courseData.name){
        //  console.log("yes fucking finally it should be ", bruh4);
        //}
        // for (const [key, value] of Object.entries(courseData)) {
        //     console.log([key,value]);
        //     Object.keys(value.preReq).forEach(courseName => {
        //         // console.log(courseName);
        //         if(courseName === courseData[0].name) {
        //             console.log(courseName);
        //             value.preReq[courseName] = false;
        //         }
        //     });
        // }
        console.log(Object.values(courseData[0])[1]);
    }

    function showBin() {
        setBinVisible(!binVisible);
    }
    
    return (

        <div>
            <div className="menu-button">
                <DropdownButton id="dropdown-basic-button" title="Course Options">
                    <Dropdown.Item as="button" onClick={() => showBin()}>Save Later Bin</Dropdown.Item>
                </DropdownButton>
            </div>
            <div>
                <button onClick={() => test()}> SEMESTER_MAP </button>
                <button onClick={() => test2(0)}> bruh </button>
            </div>

            <SearchBar
                setQuery={setQuery}
            ></SearchBar>
            <ul className="list-group">
                {courseData.filter(post => {
                    if (query === "") {
                        return post;
                    } else if (post.name.toLowerCase().includes(query.toLowerCase())) {
                        return post;
                    }
                }).map(courseData => 
                    <motion.div
                        drag
                        dragConstraints={{
                            top: 0,
                            bottom: 0,
                            right: 0,
                            left: 0
                        }}
                        onDragEnd={() => addCourse(courseData.id)}
                        dragElastic={1}
                        key={courseData.id}
                        initial={{ opacity: 0, x: 180 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            ease: "easeInOut",
                            duration: 1,
                        }}>
                        {console.log(courseData.name)}
                        <li className="course" key={courseData.id}>{courseData.name}
                            <button className="add-button" data-testid={courseData.name} onClick={() => addCourse(courseData.id)}>
                                <MdAdd />
                            </button>
                            { Object.keys(courseData.preReq).length > 0 && <Col className="prereq-accordion">
                                <Accordion flush>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Prerequisites</Accordion.Header>
                                        <Accordion.Body>
                                            {Object.keys(courseData.preReq).map(course => 
                                                <div key={course}>{course}</div>
                                            )}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <p></p>
                            </Col> }
                        </li>
                    </motion.div>
                )}
            </ul>
        </div>
    );
}
