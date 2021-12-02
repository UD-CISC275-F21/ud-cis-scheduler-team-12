import React, { useState } from "react";
import CourseComp from "./Card_Components/CourseComp";


export default function PassEditedTitle({title, setTitle}:{
    setTitle: (s: string) => void, title: string,

}): JSX.Element {
    return (
        <div>{title}</div>
    );
}