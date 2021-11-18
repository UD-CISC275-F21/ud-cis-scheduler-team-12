import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function AddCourseAlert(): JSX.Element {

    MySwal.fire({
        title: "Enter Course Information",
        html: `<input type="text" id="courseTitle" class="Swal2-input" placeholder="Course Title">
        <input type="number" id="courseCredits" class="Swal2-input" placeholder="Course Credits">
        <input type="text" id="courseDescrip" class="Swal2-input" placeholder="Course Description">`,
        confirmButtonText: "Save",
        cancelButtonText: "Cancel",
        focusConfirm: false,
        allowOutsideClick: true,
        allowEscapeKey: true,
        showCancelButton: true,

        preConfirm: () => {
            
            const title = MySwal.getPopup().querySelector("#courseTitle").value;
            const credits: number = MySwal.getPopup().querySelector("#courseCredits").value;
            const description:string = MySwal.getPopup().querySelector("#courseDescrip").value;
            
        
            if (!title) {
                MySwal.showValidationMessage("Please enter course name");
            }
            if (credits <= 0) {
                MySwal.showValidationMessage("Please enter a valid number of credits");
            }
            if (!description) {
                MySwal.showValidationMessage("Please enter course description");
            }
            return { title: title, credits: credits, description: description};
        }
    }).then((result) => {
        if (result.value){
            MySwal.fire(`
            Course Name: ${result.value.title}
            Course Credits: ${result.value.credits}
            Course Description: ${result.value.description}
            `.trim());
        } else{
            "please enter info";
        }
    });
    return (
        <div>
            {}
        </div>
    );

}




