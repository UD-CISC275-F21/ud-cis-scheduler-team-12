import React from "react";
import { Card, Col, Row, Container, CardGroup} from "react-bootstrap/";
import "./BoardComp.css";



function BoardComp(): JSX.Element {
    return (
        <CardGroup className="cardGroup">
            <Row xs={3}>
                <Card className="card" >
                    <Card.Body>
                        <Card.Title>Course 1</Card.Title>
                        <Card.Text>
                        Course Information 
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card className="card">
                    <Card.Body>
                        <Card.Title>Course 2</Card.Title>
                        <Card.Text>
                        Course Information 
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card className="card">
                    <Card.Body>
                        <Card.Title>Course 3</Card.Title>
                        <Card.Text>
                        Course Information 
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card className="card">
                    <Card.Body>
                        <Card.Title>Course 4</Card.Title>
                        <Card.Text>
                        Course Information 
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card className="card">
                    <Card.Body>
                        <Card.Title>Course 5</Card.Title>
                        <Card.Text>
                        Course Information 
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card className="card">
                    <Card.Body>
                        <Card.Title>Course 6</Card.Title>
                        <Card.Text>
                        Course Information 
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </CardGroup>
    
    );
}

export default BoardComp;
