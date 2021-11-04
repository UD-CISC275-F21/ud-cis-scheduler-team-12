import React from "react";
import { Card, Table } from "react-bootstrap/";
import "../css/courses.css";
import "../assets/courses";
import { Course } from "../interfaces/course";


// function SemesterComp({ course }: {
//     course: Course
// }):  JSX.Element {

function SemesterComp({ courseList }: {
    courseList: Course[]
}):  JSX.Element {

    return (
        <div>
            <Card className="card" style={{ width: "15rem" }}>
                <Card.Body className="card-body">
                    <Table>
                        <tbody>
                            {courseList.map((course, id) => {
                                return(
                                    <tr key={id}>
                                        <td>{course.name}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
    );
}

export default SemesterComp;
