// Source Imports
import React, { SyntheticEvent, useState } from "react";
import { parse, ParseResult } from "papaparse";
import courseData from "../../assets/courses";
import { Course } from "../../interfaces/course";
import { ImportedCourse } from "../../interfaces/importedCourse";

// Function Imports
import updateColor from "../../utilities/updateColor";
import getSemesterName from "../../utilities/getSemesterName";
import { ButtonList } from "../../interfaces/buttonList";
import removePreReq from "../../utilities/removePreReq";

export default function ImportCSV({ SET_SEMESTER_MAP, SEMESTER_MAP, setSemesterCount, semesterCount,setButtonList, buttonList }: {
    SET_SEMESTER_MAP: (s: Record<string, Course[]>) => void, SEMESTER_MAP: Record<string, Course[]>,
    setSemesterCount: (c: number) => void, semesterCount: number,
    setButtonList: (b: ButtonList[]) => void, buttonList: ButtonList[]
}): JSX.Element {
    
    const [importedCourses, setImportedCourses] = useState<ImportedCourse[]>([]);

    function handleFile (element: HTMLInputElement) {
        removeAllCourses();
        const NEW_SEMESTER_MAP = {...SEMESTER_MAP};
        setImportedCourses([]);
        if (!element.files) {
            alert("Error: invalid file!");
            return;
        }
        const csvFile = element.files[0];
        parse(csvFile, {
            header: true,
            complete : (results : ParseResult<ImportedCourse>) => {
                setImportedCourses(results.data as ImportedCourse[]);
            },
        });
        importedCourses.map((course) => {
            if (course.name != "") {
                addCourse(course.name, course.semester, NEW_SEMESTER_MAP);
            }
        });
        SET_SEMESTER_MAP(NEW_SEMESTER_MAP);
        // Object.keys(SEMESTER_MAP).forEach(key => {
        //     SEMESTER_MAP[key].forEach(item => {
        //         if(Object.keys(item.preReq).length > 0) {
        //             if (Object.values(item.preReq).every(course => course === true)){
        //                 item.preReqCheck = "black";
        //             } else {
        //                 item.preReqCheck = "red";
        //             }
        //             updateColor(item);
        //         }
        //     });
        // });
    }

    
    function addCourse(name: string, semesterSelect: number, NEW_SEMESTER_MAP : Record<string, Course[]>) {
        let id = -1;
        for (let i = 0; i < courseData.length; i++) {
            if (courseData[i].name === name) {
                id = courseData[i].id;
            }
        }
        // Imported course not found in course data
        if (id === -1) {
            courseData.push({ 
                id: courseData.length,
                name: name,
                timeStart: 1300,
                timeEnd: 1400,
                schedule: "MWF",
                description: "Warning: this course was not found.",
                credits: 0,
                preReq: {},
                preReqCheck: "black" });
            id = courseData.length-1;
        }else {
            if (Object.keys(courseData[id].preReq).length > 0){
                if (Object.values(courseData[id].preReq).every(course => course === true)){
                    courseData[id].preReqCheck = "black";
                } else {
                    courseData[id].preReqCheck = "red";
                }
                updateColor(courseData[id]);
            }
        }
        // while (semesterSelect > semesterCount) {
        //     addSemester();
        //     setSemesterCount(semesterCount++);
        // }
        NEW_SEMESTER_MAP["" + semesterSelect].push(courseData[id]);
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

    // function addSemester() {
    //     let count = semesterCount;
    //     const NEW_SEMESTER_MAP = {...SEMESTER_MAP};

    //     buttonList.push({name: getSemesterName(semesterCount), value: semesterCount});
    //     setButtonList(buttonList);

    //     NEW_SEMESTER_MAP[""+semesterCount] = [];
    //     SET_SEMESTER_MAP(NEW_SEMESTER_MAP);
    //     count++;
    //     setSemesterCount(count);
    // }
    
    return(
        <input
            type="file"
            accept=".csv"
            onChange={(e: SyntheticEvent) => handleFile(e.currentTarget as HTMLInputElement)}
            // onChange={handleFile(this.currentTarget as HTMLInputElement)}
        />
    );
}