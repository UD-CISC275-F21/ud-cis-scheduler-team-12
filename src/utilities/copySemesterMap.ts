import { Course } from "../interfaces/course";

export default function copySemesterMap(SEMESTER_MAP: Record<string, Course[]>): Record<string, Course[]> {
    const semesterMapCopy: Record<string, Course[]> = {};

    Object.keys(SEMESTER_MAP).forEach(semester => {
        semesterMapCopy[semester] = [];
        Object.values(SEMESTER_MAP[semester]).forEach(course => {
            semesterMapCopy[semester].push(course);
        });
    });

    return semesterMapCopy;
}
