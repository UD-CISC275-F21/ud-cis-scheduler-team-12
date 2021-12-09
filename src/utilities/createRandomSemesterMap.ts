import { Course } from "../interfaces/course";
import courseDataInit from "../assets/courses";

export default function createRandomSemesterMap(): Record<string, Course[]> {
    const semesterMap: Record<string, Course[]> = {};
    const randomNumberOfSemesters = Array.from({length: Math.random() * (30 - 1) + 1}, (_, i) => i + 1);

    Object.values(randomNumberOfSemesters).forEach(semester => {
        semesterMap[""+semester] = [];
        
        const randomNumberOfCourses = Array.from({length: Math.random() * (6 - 1) + 1}, (_, i) => i + 1);
        const randomCourses: number[] = [];

        // for each index in randomNumberOfCourses, add a random course from the
        // courseData to the current semester in the semesterMap
        Object.values(randomNumberOfCourses).forEach(index => {
            randomCourses[index] = Math.floor(Math.random() * (19-0) + 0);
        });
        Object.values(randomCourses).forEach(randomCourse => {
            semesterMap[""+semester].push(courseDataInit[randomCourse]);
        });
    });

    return semesterMap;
}
