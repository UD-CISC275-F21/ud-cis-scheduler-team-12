import React from "react";
import Swal from "sweetalert2";
import { Course } from "../interfaces/course";


export default function SaveButton({ SEMESTER_MAP }: {
    SEMESTER_MAP: Record<string, Course[]>
}): JSX.Element {
    
    function saveSemester() {
        Swal.fire({
            title: "Give your saved plan a name!",
            text: "Name:",
            input: "text",
            showCancelButton: true        
        }).then((result) => {
            if (result.value) {
                localStorage.setItem(result.value, JSON.stringify(SEMESTER_MAP));
                const retrievedObject = localStorage.getItem(result.value);
                console.log("retrievedObject: ", JSON.parse(""+retrievedObject));

                Swal.fire(
                    "Saved!",
                    `${result.value} is now saved 🚀.`,
                    "success"
                );

            } else {
                Swal.fire(
                    "Canceled Save",
                    "You did not save your plan 😅.",
                    "info"
                );
            }
        });
    }

    return(
        <button onClick={() => saveSemester()}>Save Semester</button>
    );
}