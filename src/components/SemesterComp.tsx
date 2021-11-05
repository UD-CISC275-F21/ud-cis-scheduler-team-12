import React from "react";
import { Card, Table } from "react-bootstrap/";
import "../css/courses.css";
import "../assets/courses";
import { Course } from "../interfaces/course";
import { MdDeleteForever } from "react-icons/md";



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
                                        <button className="delete-button">
                                            <MdDeleteForever></MdDeleteForever>
                                        </button>
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
