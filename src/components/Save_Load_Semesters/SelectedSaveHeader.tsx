import React from "react";

import "../../css/SelectedSave.css";

// Breadcrumbs:
// Main Page / SelectedSaveHeader
export default function SelectedSaveHeader({ selectedSave }: {
    selectedSave: string
}): JSX.Element {
    return(
        <h3 className="save-header">{selectedSave}</h3>
    );
}