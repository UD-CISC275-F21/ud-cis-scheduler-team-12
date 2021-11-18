import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
    beforeEach(() => {
        render(<App />);
        const enter = screen.getByTestId("enter-main");
        act(() => {
            fireEvent.click(enter);
        });
    });

    //          TESTING AUTOMATICALLY SKIPS LANDING PAGE
    // it("loads the landing page on start", () => {
    //     const element = screen.getByText("Start Building Your Plan");

    //     expect(element).toBeInTheDocument();
    // })

    it("shows a single semester of courses", () => {
        const element = screen.getByTestId("semester-view");
        const board = screen.getByTestId("board");
        expect(element).toBeInTheDocument();
        expect(board).toBeInTheDocument();
    });

    it("shows multiple semesters of courses", () => {
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
        let course = screen.queryByTestId("course-card");
        expect(course).not.toBeInTheDocument();

        const addBtn = screen.getByTestId("CISC 100");
        act(() => {
            fireEvent.click(addBtn);
        });
        course = screen.getByTestId("course-card");
        expect(course).toBeInTheDocument();
    });

    it("a course can be added to plan in Degree View", () => {
        const changeView = screen.getByTestId("degree-view-nav");
        act(() => {
            fireEvent.click(changeView);
        });
        const semesterList = screen.getAllByTestId("semester-table");
        expect(semesterList[0]).toBeInTheDocument(); // valid semester exists, but is empty - not added

        let course = screen.queryByTestId("semester-comp-card");
        expect(course).not.toBeInTheDocument(); // no courses currently in any semester

        let addCourse = screen.getByTestId("MATH 100");
        act(() => {
            fireEvent.click(addCourse); // add course to semester (by default, semester 0)
        });

        course = screen.getByTestId("semester-comp-card");
        expect(course).toBeInTheDocument(); // course is added to semester

        const selectSemester = screen.getAllByTestId("select-button");
        act(() => {
            fireEvent.click(selectSemester[3]); // select semester 4 (Spring 2 by default)
        });

        addCourse = screen.getByTestId("HIST 100");
        act(() => {
            fireEvent.click(addCourse); // add course to semester (by default, semester 0)
        });

        const courseList = screen.getAllByTestId("semester-comp-card");
        expect(courseList[1]).toBeInTheDocument(); // a new course, HIST 100, is added to the document
    });

    it("can clear out all existing courses in a semester", () => {
        // adding courses to semester
        let addBtn = screen.getByTestId("CISC 100");
        act(() => {
            fireEvent.click(addBtn);
        });
        addBtn = screen.getByTestId("MATH 100");
        act(() => {
            fireEvent.click(addBtn);
        });
        addBtn = screen.getByTestId("ENGL 100");
        act(() => {
            fireEvent.click(addBtn);
        });

        const courseList = screen.queryAllByTestId("course-card");
        for (let i = 0; i < courseList.length; i++) {
            expect(courseList[i]).toBeInTheDocument(); // courses in document
        }

        const removeBtn = screen.getByTestId("btn-clear-semester");
        act(() => {
            fireEvent.click(removeBtn);
        });

        const courseCheck = screen.queryByTestId("course-card");
        expect(courseCheck).not.toBeInTheDocument();
    });

    it("can clear out all existing semesters in a plan", () => {
        const changeView = screen.getByTestId("degree-view-nav");
        act(() => {
            fireEvent.click(changeView);
        });

        const course = screen.queryByTestId("semester-comp-card");
        expect(course).not.toBeInTheDocument(); // no courses currently in any semester

        let addCourse = screen.getByTestId("MATH 100");
        act(() => {
            fireEvent.click(addCourse); // add MATH 100 to semester (0 by default)
        });

        const selectSemester = screen.getAllByTestId("select-button");
        let courseName = "";
        
        for (let i = 1; i < 4; i++) {
            courseName = "CISC " + i + "00";
            addCourse=screen.getByTestId(courseName);
            act(() => {
                fireEvent.click(selectSemester[i]); // select semester new semester
                fireEvent.click(addCourse); // add course to semester
            });
        }

        const courseList = screen.getAllByTestId("semester-comp-card");
        for (let i = 0; i < 4; i++) {
            expect(courseList[i]).toBeInTheDocument(); // course is now in document
        }

        const removeSemesters = screen.getByTestId("btn-remove-semesters");
        act(() => {
            fireEvent.click(removeSemesters); // add course to semester (by default, semester 0)
        });
        const checkForCourses = screen.queryByTestId("semester-comp-card");
        expect(checkForCourses).not.toBeInTheDocument(); // no courses in document
    });

    // it("course name can be edited", () => {
    //     const 
    // });

});