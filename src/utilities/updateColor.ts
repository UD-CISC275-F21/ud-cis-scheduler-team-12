import { Course } from "../interfaces/course";

export default function updateColor(course: Course): string {
    return course.preReqCheck;
}
