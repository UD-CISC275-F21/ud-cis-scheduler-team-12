import React from "react";
import { Dropdown } from "react-bootstrap";
import { ImCross } from "react-icons/im";
import Swal from "sweetalert2";
import ClearSavedSemestersButton from "./ClearSavedSemestersButton";



export default function AccessSavedSemesters(): JSX.Element {

    function showSave(key: string) {
        const retrievedObject = localStorage.getItem(key);
        console.log("retrievedObject: ", JSON.parse(""+retrievedObject));
        alert(retrievedObject);
    }

    function deleteSavedSemester(key: string) {
        Swal.fire({
            title: `Are you sure you want to delete "${key}"?`,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `Delete "${key}"`,
            denyButtonText: "Don't delete",
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                localStorage.removeItem(key);
                Swal.fire(`"${key}" Deleted!`, "", "success");
            } else if (result.isDenied) {
                Swal.fire(`"${key}" was not Deleted.`, "", "info");
            }
        });
    }

    return(
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Saved Semesters
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {Object.keys(localStorage).map(key =>
                    <div 
                        style={{display: "inline-flex"}} 
                        key={key}>
                        <Dropdown.Item 
                            onClick={() => showSave(key)}
                        >{key}
                            
                        </Dropdown.Item>
                        <button onClick={() => deleteSavedSemester(key)}>
                            <ImCross></ImCross>
                        </button>
                    </div>
                )}
                <ClearSavedSemestersButton></ClearSavedSemestersButton>
            </Dropdown.Menu>
        </Dropdown>
    );
}