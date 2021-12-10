import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

import createRandomSemesterMap from "./utilities/createRandomSemesterMap";
import copySemesterMap from "./utilities/copySemesterMap";

describe("App", () => {
    beforeEach(() => {
        render(<App />);
    });

    // Because of Landing Page, all tests after the first require the "enter" fire event to access main page
    it("loads the landing page on start", () => {
        const element = screen.getByText("Start Building Your Plan");

        expect(element).toBeInTheDocument();
    });


    it("shows a single semester of courses", () => {
        const enter = screen.getByTestId("enter-main");
        act(() => {
            fireEvent.click(enter);
        });

        const element = screen.getByTestId("semester-view");
        const board = screen.getByTestId("board");
        expect(element).toBeInTheDocument();
        expect(board).toBeInTheDocument();
    });


    it("shows multiple semesters of courses", () => {
        const enter = screen.getByTestId("enter-main");
        act(() => {
            fireEvent.click(enter);
        });

        const changeView = screen.getByTestId("degree-view-nav");
        act(() => {
            fireEvent.click(changeView);
        });
        const semesterList = screen.getAllByTestId("semester-table");

        for (let i = 0; i < semesterList.length; i++) {
            expect(semesterList[i]).toBeInTheDocument();
        }
    });


    it("a course can be added to plan in Semester View", () => {
        const enter = screen.getByTestId("enter-main");
        act(() => {
            fireEvent.click(enter);
        });
        
        let course = screen.queryByTestId("course-card");
        expect(course).not.toBeInTheDocument();

        const addBtn = screen.getByTestId("CISC 100");
        act(() => {
            fireEvent.click(addBtn);
        });
        course = screen.getByTestId("course-card");
        expect(course).toBeInTheDocument();
    });


    // it("a course can be added to plan in Degree View", () => {
    //     const enter = screen.getByTestId("enter-main");
    //     act(() => {
    //         fireEvent.click(enter);
    //     });
        
    //     const changeView = screen.getByTestId("degree-view-nav");
    //     act(() => {
    //         fireEvent.click(changeView);
    //     });
    //     const semesterList = screen.getAllByTestId("semester-table");
    //     expect(semesterList[0]).toBeInTheDocument(); // valid semester exists, but is empty - not added

    //     let course = screen.queryByTestId("semester-comp-card");
    //     expect(course).not.toBeInTheDocument(); // no courses currently in any semester

    //     let addCourse = screen.getByTestId("MATH 100");
    //     act(() => {
    //         fireEvent.click(addCourse); // add course to semester (by default, semester 0)
    //     });

    //     course = screen.getByTestId("semester-comp-card");
    //     expect(course).toBeInTheDocument(); // course is added to semester

    //     const selectSemester = screen.getAllByTestId("select-button");
    //     act(() => {
    //         fireEvent.click(selectSemester[3]); // select semester 4 (Spring 2 by default)
    //     });

    //     addCourse = screen.getByTestId("HIST 100");
    //     act(() => {
    //         fireEvent.click(addCourse); // add course to semester (by default, semester 0)
    //     });

    //     const courseList = screen.getAllByTestId("semester-comp-card");
    //     expect(courseList[1]).toBeInTheDocument(); // a new course, HIST 100, is added to the document
    // });


    // it("can clear out all existing courses in a semester", () => {
    //     const enter = screen.getByTestId("enter-main");
    //     act(() => {
    //         fireEvent.click(enter);
    //     });
        
    //     const changeView = screen.getByTestId("degree-view-nav");
    //     act(() => {
    //         fireEvent.click(changeView);
    //     });
    //     // adding courses to semester
    //     const addCisc = screen.getByTestId("CISC 100");
    //     const addMath = screen.getByTestId("MATH 100");
    //     const addHist = screen.getByTestId("HIST 100");
    //     const addEngl = screen.getByTestId("ENGL 100");
    //     act(() => {
    //         fireEvent.click(addCisc);
    //         fireEvent.click(addMath);
    //         fireEvent.click(addHist);
    //         fireEvent.click(addEngl);
    //     });

    //     const courseList = screen.queryAllByTestId("semester-comp-card");
    //     for (let i = 0; i < courseList.length; i++) {
    //         expect(courseList[i]).toBeInTheDocument(); // courses in document
    //     }

    //     const removeCourses = screen.getByTestId("btn-remove-semesters");
    //     act(() => {
    //         fireEvent.click(removeCourses); // clear out semester
    //     });

    //     const courseCheck = screen.queryByTestId("semester-comp-card");
    //     expect(courseCheck).not.toBeInTheDocument();
    // });


    // it("can clear out all existing semesters in a plan", () => {
    //     const enter = screen.getByTestId("enter-main");
    //     act(() => {
    //         fireEvent.click(enter);
    //     });
        
    //     const changeView = screen.getByTestId("degree-view-nav");
    //     act(() => {
    //         fireEvent.click(changeView);
    //     });

    //     const course = screen.queryByTestId("semester-comp-card");
    //     expect(course).not.toBeInTheDocument(); // no courses currently in any semester

    //     let addCourse = screen.getByTestId("MATH 100");
    //     act(() => {
    //         fireEvent.click(addCourse); // add MATH 100 to semester (0 by default)
    //     });

    //     const selectSemester = screen.getAllByTestId("select-button");
    //     let courseName = "";
        
    //     for (let i = 1; i < 4; i++) {
    //         courseName = "CISC " + i + "00";
    //         addCourse=screen.getByTestId(courseName);
    //         act(() => {
    //             fireEvent.click(selectSemester[i]); // select semester new semester
    //             fireEvent.click(addCourse); // add course to semester
    //         });
    //     }

    //     const courseList = screen.getAllByTestId("semester-comp-card");
    //     for (let i = 0; i < 4; i++) {
    //         expect(courseList[i]).toBeInTheDocument(); // course is now in document
    //     }

    //     const removeSemesters = screen.getByTestId("btn-remove-semesters");
    //     act(() => {
    //         fireEvent.click(removeSemesters);
    //     });
    //     const checkForCourses = screen.queryByTestId("semester-comp-card");
    //     expect(checkForCourses).not.toBeInTheDocument(); // no courses in document
    // });


    // it("semesters can be removed", () => {
    //     const enter = screen.getByTestId("enter-main");
    //     act(() => {
    //         fireEvent.click(enter);
    //     });
        
    //     const semesterList = screen.getAllByTestId("btn-semester"); // 8 semesters by default
    //     expect(semesterList[7]).toBeInTheDocument();

    //     const spring4 = screen.getByText("Spring 4");
    //     expect(spring4).toBeInTheDocument();

    //     const removeSemester = screen.getByTestId("btn-remove-semester");
    //     act(() => {
    //         fireEvent.click(removeSemester);
    //     });

    //     const lastSemester = screen.queryByText("Spring 4");
    //     expect(lastSemester).not.toBeInTheDocument(); // removed spring 4 (last semester)

    //     const semesterListNew = screen.getAllByTestId("btn-semester"); // 7 semesters now
    //     expect(semesterList).not.toEqual(semesterListNew);
    // });


    // it("semesters can be added", () => {
    //     const enter = screen.getByTestId("enter-main");
    //     act(() => {
    //         fireEvent.click(enter);
    //     });
        
    //     const semesterList = screen.getAllByTestId("btn-semester"); // 8 semesters by default

    //     let fall5 = screen.queryByText("Fall 5");
    //     expect(fall5).not.toBeInTheDocument();

    //     const addSemester = screen.getByTestId("btn-add-semester");
    //     act(() => {
    //         fireEvent.click(addSemester);
    //     });

    //     fall5 = screen.queryByText("Fall 5");
    //     expect(fall5).toBeInTheDocument(); // added new semester

    //     const semesterListNew = screen.getAllByTestId("btn-semester"); // 9 semesters now
    //     expect(semesterList).not.toEqual(semesterListNew);
    // });
    

    // it("course name can be edited", () => {
    //     const enter = screen.getByTestId("enter-main");
    //     act(() => {
    //         fireEvent.click(enter);
    //     });
        
    //     const addBtn = screen.getByTestId("CISC 100");
    //     act(() => {
    //         fireEvent.click(addBtn);
    //     });
    //     const titleBtn = screen.getByTestId("title-edit-btn");
    //     act(() => {
    //         fireEvent.click(titleBtn);
    //     });

    //     const titleBox = screen.getByTestId("input-title");
    //     act(() => {
    //         fireEvent.change(titleBox, "New Name");
    //     });
        
    //     const checkTitle = screen.getByText("New Name");
    //     expect(checkTitle).toBeInTheDocument();
    // });

    it("Creates a deep clone of a semesterMap object", () => {
        const semesterMap = createRandomSemesterMap();
        const semesterMapCopy = copySemesterMap(semesterMap);

        expect(JSON.stringify(semesterMap) === JSON.stringify(semesterMapCopy));
    });
});
