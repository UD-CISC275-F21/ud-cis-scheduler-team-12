import { Course } from "../interfaces/course";

import updateColor from "./updateColor";

export default function removePreReq(course: Course, SEMESTER_MAP: Record<string, Course[]>, courseData: Course[]): void {
    Object.values(courseData).forEach(value => {
        Object.keys(value.preReq).forEach(courseName => {
            if(courseName === course.name) {
                value.preReq[courseName] = false;
            }
        });
    });
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
