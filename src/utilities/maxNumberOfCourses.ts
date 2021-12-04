import Swal from "sweetalert2";

export default function maxNumberOfCoursesAlert(): void {
    Swal.fire(
        "Getting Studious!",
        "Warning: Max number of courses selected for semester 📚.",
        "error"
    );
}
