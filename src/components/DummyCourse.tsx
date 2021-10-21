import React, { useState } from "react";
import ReactDOM from "react-dom";

/* Placeholder for a real Course object to be placed on Board */

export function DummyCourse({ value, onClick }) {
    return (
        <button className="course-card" onClick={onClick}>
            {value}
        </button>
    );
}