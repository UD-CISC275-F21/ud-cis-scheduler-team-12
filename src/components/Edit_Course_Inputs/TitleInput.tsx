import React from "react";
import "../../css/TextInput.css";


export default function TitleInput({ setInput }: {
    setInput: (q: string) => void,
}): JSX.Element {
    return (
        <div>
            <input className="text_input" data-testId="input-title" type="title" placeholder="Enter Title" onChange={event => setInput(event.target.value)}/>
        </div>
    );
}

