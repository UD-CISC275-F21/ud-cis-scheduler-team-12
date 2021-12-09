// Source Imports
import React from "react";
import Swal from "sweetalert2";

import "../../css/AccessSaved.css";

// Breadcrumbs:
// Main Page / AccessSavedSemesterButton / ClearSavedSemestersButton
export default function ClearSavedSemestersButton(): JSX.Element {
    
    function clearAllSavedSemesters() {
        Swal.fire({
            title: "Are you sure you want to delete all of your saved semesters?",
            showDenyButton: true,
            confirmButtonText: "Delete All Saves",
            denyButtonText: "Don't delete All Saves",
            icon: "warning"
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                localStorage.clear();
                console.log(localStorage);
                Swal.fire("All Saved Semesters Deleted 😁!", "", "success");
            } else if (result.isDenied) {
                Swal.fire("Semesters are not Deleted 😮‍💨.", "", "info");
            }
        });
        
    }

    return(
        <button className="clear_all" onClick={() => clearAllSavedSemesters()}>Clear All Saved Semesters</button>
    );
}
