import courseData from "../assets/courses";
import updateColor from "./updateColor";
import findCourseInEntirePlan from "./findCourseInEntirePlan";
import findCourseInSemester from "./findCourseInSemester";
import { Course } from "../interfaces/course";
import preReqAlert from "./preReqAlert";
import maxNumberOfCoursesAlert from "./maxNumberOfCourses";
import duplicateCourseAlert from "./duplicateCourse";

export default function checkIfCourseCanBeAdded(id: number, semesterSelect: string | null, SEMESTER_MAP: Record<string, Course[]>): void {
    const foundCourse = findCourseInSemester(id, semesterSelect, SEMESTER_MAP);
    const foundCourseInPlan = findCourseInEntirePlan(id, SEMESTER_MAP);

    if (foundCourse || foundCourseInPlan) {
        foundCourse ? duplicateCourseAlert(id, "semester") : duplicateCourseAlert(id, "plan");
    } else {
        //  PREREQ MET IN PRIOR SEMESTER
        if (Object.keys(courseData[id].preReq).length > 0){
            if (Object.values(courseData[id].preReq).every(course => course === true)){
                courseData[id].preReqCheck = "black";
            } else {
                preReqAlert();
                courseData[id].preReqCheck = "red";
            }
            updateColor(courseData[id]);
        }

        if (SEMESTER_MAP["" + semesterSelect].length === 6) {
            maxNumberOfCoursesAlert();
        } else {
            Object.values(courseData).forEach(value => {
                Object.keys(value.preReq).forEach(courseName => {
                    if(courseName === courseData[id].name) {
                        value.preReq[courseName] = true;
                    }
                });
            });
        }
    }
}
