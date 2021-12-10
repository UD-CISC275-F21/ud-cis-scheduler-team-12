import Swal from "sweetalert2";

export default function preReqAlert(): void {
    Swal.fire(
        "Pre-Req Error!",
        "Warning: Pre-Reqs not met 🤔.",
        "error"
    );
}
