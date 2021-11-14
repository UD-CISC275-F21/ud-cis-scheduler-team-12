import React from "react";
import Swal from "sweetalert2";

export default function ClearSavedSemestersButton(): JSX.Element {
    
    function clearAllSavedSemesters() {
        Swal.fire({
            title: "Are you sure you want to delete all of your saved semesters?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Delete All",
            denyButtonText: "Don't delete",
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                localStorage.clear();
                console.log(localStorage);
                Swal.fire("All Saved Semesters Deleted!", "", "success");
            } else if (result.isDenied) {
                Swal.fire("Semesters are not Deleted.", "", "info");
            }
        });
        
    }

    return(
        <button onClick={() => clearAllSavedSemesters()}>Clear All Saved Semesters</button>
    );
}