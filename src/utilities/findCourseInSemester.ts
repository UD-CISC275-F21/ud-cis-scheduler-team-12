import { Course } from "../interfaces/course";

export default function findCourseInSemester(id: number, semesterSelect: string | null, SEMESTER_MAP: Record<string, Course[]>, courseData: Course[]): boolean {
    return SEMESTER_MAP[""+semesterSelect].includes(courseData[id]);
}
