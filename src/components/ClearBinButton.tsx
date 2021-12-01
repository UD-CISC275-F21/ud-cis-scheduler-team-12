// Source Imports
import React from "react";
import { Course } from "../interfaces/course";

// Breadcrumbs:
// Main Page / SaveBin / ClearBinButton
export default function ClearBinButton({ SET_SAVE_BIN }: {
    SET_SAVE_BIN: (b: Course[]) => void
}): JSX.Element {

    function ClearBin() {
        SET_SAVE_BIN([]);
    }
    
    return(
        <button onClick={() => ClearBin()}>Clear Bin</button>
    );
}
