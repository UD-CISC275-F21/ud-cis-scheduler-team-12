import React from "react";
import { Nav } from "react-bootstrap/";

export default function SideMenu(): JSX.Element {
    return (
        <Nav justify variant="pills" className="flex-column" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link eventKey="link-1">Nav1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Nav2</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}