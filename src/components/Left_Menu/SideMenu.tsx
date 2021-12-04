import React from "react";
import { Nav } from "react-bootstrap/";

// Breadcrumbs:
// Main Page / SideMenu - left hand side menu to change views
export default function SideMenu( {setVisibleView} : {
    setVisibleView: (s: string | null) => void
}): JSX.Element {

    const handleSelect = (eventKey: string | null) => setVisibleView(eventKey);

    return (
        <Nav justify variant="pills" className="flex-column" defaultActiveKey="2" onSelect={handleSelect}>
            <Nav.Item>
                <Nav.Link eventKey="2">Semester View</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link data-testid="degree-view-nav" eventKey="3">Degree Plan View</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}
