import { Course } from "../interfaces/course";

export default function findCourseInEntirePlan(id: number, SEMESTER_MAP: Record<string, Course[]>): boolean {
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
