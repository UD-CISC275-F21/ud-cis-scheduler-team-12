import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import CourseComp from "./CourseComp";
import ClearSemesterButton from "./ClearSemesterButton";
import "../css/board.css";
import { Course } from "../interfaces/course";



export function Board({ setNumberOfCourses, numberOfCourses, classList, setClassList }: {
    setNumberOfCourses: (s: number) => void,  numberOfCourses: number, courseID: number,
    setClassList: (l: Course[]) => void, classList: Course[]
}):  JSX.Element {

    // const [courses, setCourses] = useState(Array(9).fill(null));
    // function renderCourse({ i }: { i: number }):  JSX.Element {
    //     return (
    //         <CourseComp
    //             course1={ClassList[courseID]}
    //         ></CourseComp>
    //     );
    // }


    // const list variable to map out classList useState variable
    const classListToPrint = classList;


    return (
        <div>
            
            <h2>Semester View</h2>

            <div>
                <Container>
                    <Row>
                        {classListToPrint.map(classListToPrint =>
                            <Col key={classListToPrint.id}>
                                <CourseComp
                                    course={classListToPrint}
                                    setNumberOfCourses={setNumberOfCourses}
                                    numberOfCourses={numberOfCourses}
                                    setClassList={setClassList}
                                    classList={classList}
                                ></CourseComp>
                            </Col>
                        )}
                    </Row>
                </Container>
                { numberOfCourses > 0 && <ClearSemesterButton
                    setNumberOfCourses={setNumberOfCourses}
                    setClassList={setClassList}
                ></ClearSemesterButton> }
            </div>

        </div>
    );
}