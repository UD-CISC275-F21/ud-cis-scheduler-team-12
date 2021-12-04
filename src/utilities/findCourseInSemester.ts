import courseData from "../assets/courses";
import { Course } from "../interfaces/course";

export default function findCourseInSemester(id: number, semesterSelect: string | null, SEMESTER_MAP: Record<string, Course[]>): boolean {
    return SEMESTER_MAP[""+semesterSelect].includes(courseData[id]);
}
