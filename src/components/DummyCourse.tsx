import React, { useState } from "react";
import ReactDOM from "react-dom";

export function DummyCourse({ value, onClick }) {
    return (
        <button className="course" onClick={onClick}>
            {value}
        </button>
    );
}