import React from "react";
import { Nav } from "react-bootstrap/";

export default function SideMenu( {setVisibleSelect} : {
    setVisibleSelect: (s: string | null) => void
}): JSX.Element {

    const handleSelect = (eventKey: string | null) => setVisibleSelect(eventKey);

    return (
        <Nav justify variant="pills" className="flex-column" defaultActiveKey="1" onSelect={handleSelect}>
            <Nav.Item>
                <Nav.Link eventKey="1">Semester View</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="2">Degree Plan View</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="3">Calendar View</Nav.Link>
            </Nav.Item>
  
        </Nav>
    );
}