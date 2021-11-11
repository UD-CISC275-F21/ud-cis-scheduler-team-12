import React from "react";
import "../css/TextInput.css";


export default function TextInput({ setInput }: {
    setInput: (q: string) => void,
}): JSX.Element {
    return (
        <div>
            <input className="text_input" type="description" placeholder="Enter Description" onChange={event => setInput(event.target.value)}/>
        </div>
    );
}

