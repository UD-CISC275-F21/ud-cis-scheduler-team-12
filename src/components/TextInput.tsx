import React from "react";
import { Form, Button } from "react-bootstrap/";
import "../css/TextInput.css";


export default function TextInput({ setInput }: {
    setInput: (q: string) => void,
}): JSX.Element {
    return (
        <div>
            <input className="form__field" type="description" placeholder="Enter Description" onChange={event => setInput(event.target.value)}/>
        </div>
    );
}

