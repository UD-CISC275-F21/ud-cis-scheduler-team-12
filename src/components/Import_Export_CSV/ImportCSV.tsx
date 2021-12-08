// Source Imports
import React, { SyntheticEvent, useState } from "react";
import * as XLSX from "xlsx";
import { parse, ParseResult } from "papaparse";
import courseData from "../../assets/courses";
import { Course } from "../../interfaces/course";
import { ImportedCourse } from "../../interfaces/importedCourse";

// Function Imports
import updateColor from "../../utilities/updateColor";

export default function ImportCSV({ SET_SEMESTER_MAP, SEMESTER_MAP, setSemesterCount, semesterCount }: {
    SET_SEMESTER_MAP: (s: Record<string, Course[]>) => void, SEMESTER_MAP: Record<string, Course[]>,
    setSemesterCount: (c: number) => void, semesterCount: number
}): JSX.Element {
    
    const NEW_SEMESTER_MAP = {...SEMESTER_MAP};
    const [importedCourses, setImportedCourses] = useState<ImportedCourse[]>([]);
    
    // function importFile(element: HTMLInputElement) {

    //     if (!element.files) {
    //         alert("Error: invalid file!");
    //         return;
    //     }
    //     const file = element.files[0];



        
    //     Array.from(element.files)
    //         .forEach(async (f) => {
    //             const text = await f.text();
    //             const result : ImportedCourse = parse(text, { header : true});
    //             console.log(result);
    //             // const newImportedCourses = {...importedCourses};
    //             // newImportedCourses.push(result);
    //             setImportedCourses(existing => [...existing, ...result.data]);
    //         });



    //     const text = await file.text();
    //     const result = parse(text, { header : true});


    //     const reader = new FileReader();
    //     reader.onload = () => {
    //         /* Parse data */
    //         const bstr = reader.result;
    //         const wb = XLSX.read(bstr, { type: "binary" });
    //         /* Get first worksheet */
    //         const wsname = wb.SheetNames[0];
    //         const ws = wb.Sheets[wsname];
    //         /* Convert array of arrays */
    //         const data = XLSX.utils.sheet_to_csv(ws);
    //         // processData(data);
    //     };
    //     reader.readAsBinaryString(file);

    //     Object.keys(SEMESTER_MAP).forEach(key => {
    //         SEMESTER_MAP[key].forEach(item => {
    //             if(Object.keys(item.preReq).length > 0) {
    //                 if (Object.values(item.preReq).every(course => course === true)){
    //                     item.preReqCheck = "black";
    //                 } else {
    //                     item.preReqCheck = "red";
    //                 }
    //                 updateColor(item);
    //             }
    //         });
    //     });
    //     SET_SEMESTER_MAP(NEW_SEMESTER_MAP);
    // }

    function parseFile (element: HTMLInputElement) {
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
        console.log(importedCourses);
    }

    
    function addCourse(name: string, semesterSelect: number) {
        let id = -1;
        for (let i = 0; i < courseData.length; i++) {
            if (courseData[i].name == name) {
                id = courseData[i].id;
            }
        }
        // Imported course not found in course data
        if (id == -1) {
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
            id = courseData.length;
        } else {
            if (Object.keys(courseData[id].preReq).length > 0){
                if (Object.values(courseData[id].preReq).every(course => course === true)){
                    courseData[id].preReqCheck = "black";
                } else {
                    courseData[id].preReqCheck = "red";
                }
                updateColor(courseData[id]);
            }
        }
        NEW_SEMESTER_MAP["" + semesterSelect].push(courseData[id]);
    }
    
    return(
        <input
            type="file"
            accept=".csv"
            onChange={(e: SyntheticEvent) => parseFile(e.currentTarget as HTMLInputElement)}
        />
    );
}