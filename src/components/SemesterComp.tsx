import React from "react";
import { Card, Table } from "react-bootstrap/";
import "../css/courses.css";
import "../assets/courses";
import { Course } from "../interfaces/course";
import { MdDeleteForever } from "react-icons/md";
import { ImCross } from "react-icons/im";
import courseData from "../assets/courses";


// function SemesterComp({ course }: {
//     course: Course
// }):  JSX.Element {

function SemesterComp({ SET_SEMESTER_MAP, SEMESTER_MAP, courseList, semesterSelect }: {
    courseList: Course[], semesterSelect: string | null,
    SET_SEMESTER_MAP: (m: Record<string, Course[]>) => void, SEMESTER_MAP: Record<string, Course[]>
}):  JSX.Element {

    function removeCourse(id: number) {
        const NEW_SEMESTER_MAP = {...SEMESTER_MAP};
        
        NEW_SEMESTER_MAP[""+semesterSelect] = NEW_SEMESTER_MAP[""+semesterSelect].filter(item => item !== courseData[id]);
        SET_SEMESTER_MAP(NEW_SEMESTER_MAP);
    }

    function removeAllCourses() {
        SET_SEMESTER_MAP({...SEMESTER_MAP, [""+semesterSelect]: []}); // Set classList to an empty array to clear all selected courses
    }

    return (
        <div>
            <Card className="card" style={{ width: "30rem" }}>
                <button className="delete-button" onClick={removeAllCourses}>
                    <MdDeleteForever></MdDeleteForever>
                </button>
                <Card.Body className="card-body">
                    
                    <Table>
                        <thead>
                            <th className="semester-title">{semesterSelect}</th>
                            <tr>
                                <th>Course</th>
                                <th scope="col">Credit(s)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courseList.map((course, id) => {
                                return(
                                    <tr key={id}>
                                        <th>{course.name}</th>
                                        <td>{course.id}</td>
                                        <button className="delete-course" onClick={() => removeCourse(course.id)}>
                                            <ImCross></ImCross>
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
