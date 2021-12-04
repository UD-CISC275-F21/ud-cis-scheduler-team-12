import updateColor from "./updateColor";
import Swal from "sweetalert2";
import SpiderMan from "../assets/images/spiderman_meme.jpeg";
import { Course } from "../interfaces/course";


export function isCourseInCourseData(name: string, courseData: Course[]): boolean {
    let flag = false;
    Object.values(courseData).forEach(course => {
        if (course.name.toLowerCase().replace(/\s/g, "") === name.toLowerCase().replace(/\s/g, "")) {
            flag = true;
        }
    });
    return flag;
}

export function changeName(id: number, enteredName: string, 
    SEMESTER_MAP: Record<string, Course[]>, SET_SEMESTER_MAP: (m: Record<string, Course[]>) => void, 
    setTitleEditMode: (t: boolean) => void, courseData: Course[], setCourseData: (d: Course[]) => void): void {

    const NEW_SEMESTER_MAP = {...SEMESTER_MAP};
    const duplicateCourse = isCourseInCourseData(enteredName, courseData);
    
    if (!duplicateCourse) {
        // Removing Pre-Req for all other courses
        Object.values(courseData).forEach(item => {
            Object.keys(item.preReq).forEach(req => {
                if (req === enteredName) {
                    item.preReq[req] = true;
                } else if (req === courseData[id].name) {
                    item.preReq[req] = false;
                }
            });
            if (Object.values(item.preReq).every(course => course === true)){
                item.preReqCheck = "black";
            } else {
                item.preReqCheck = "red";
            }
            updateColor(item);
        });
        courseData[id].name = enteredName;
        setCourseData(courseData);
        SET_SEMESTER_MAP(NEW_SEMESTER_MAP);
        setTitleEditMode(false);
    } else {
        Swal.fire({
            title: "Course Already Exists!",
            text: `${enteredName} already exists. Please enter another course name.`,
            icon: "error",
            imageUrl: SpiderMan
        });
    }
}

export function changeDescription(id: number, enteredDescription: string, SEMESTER_MAP: Record<string, Course[]>, SET_SEMESTER_MAP: (m: Record<string, Course[]>) => void, 
    setDescriptionEditMode: (d: boolean) => void, courseData: Course[], setCourseData: (d: Course[]) => void): void {
        
    const NEW_SEMESTER_MAP = {...SEMESTER_MAP};
    
    courseData[id].description = enteredDescription;
    setCourseData(courseData);
    SET_SEMESTER_MAP(NEW_SEMESTER_MAP);
    setDescriptionEditMode(false);
}

export function changeCredits(id: number, enteredCredits: string, SEMESTER_MAP: Record<string, Course[]>, SET_SEMESTER_MAP: (m: Record<string, Course[]>) => void, 
    setCreditsEditMode: (c: boolean) => void, courseData: Course[], setCourseData: (d: Course[]) => void): void {

    const NEW_SEMESTER_MAP = {...SEMESTER_MAP};
    
    courseData[id].credits = +enteredCredits;
    setCourseData(courseData);
    SET_SEMESTER_MAP(NEW_SEMESTER_MAP);
    setCreditsEditMode(false);
}
