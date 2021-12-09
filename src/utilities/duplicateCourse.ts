import Swal from "sweetalert2";
import SpiderMan from "../assets/images/spiderman_meme.jpeg";
import { Course } from "../interfaces/course";


export default function duplicateCourseAlert(id: number, duplicateReason: string, courseData: Course[]): void {
    switch(duplicateReason){
    case "bin":
        Swal.fire({
            title: "Duplicate Course!",
            text: `${courseData[id].name} is already added to your bin. Please select another course.`,
            icon: "error",
            imageUrl: SpiderMan
        });
        break;
    case "semester":
        Swal.fire({
            title: "Duplicate Course!",
            text: `${courseData[id].name} is already added to this semester. Please select another course.`,
            icon: "error",
            imageUrl: SpiderMan
        });
        break;
    case "plan":
        Swal.fire({
            title: "Duplicate Course!",
            text: `${courseData[id].name} is already added to your plan. Please select another course.`,
            icon: "error",
            imageUrl: SpiderMan
        });
    }
}
