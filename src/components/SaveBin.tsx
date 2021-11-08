import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Col, Container, Offcanvas, Row } from "react-bootstrap";

import "../css/SaveBin.css";
import { Course } from "../interfaces/course";
import courseData from "../assets/courses";
import BinCourseCard from "./BinCourseCard";
import ClearBinButton from "./ClearBinButton";

export default function SaveBin({ setBinVisible, binVisible, SET_SAVE_BIN, SAVE_BIN }: {
    setBinVisible: (b: boolean) => void, binVisible: boolean,
    SET_SAVE_BIN: (s: Course[]) => void, SAVE_BIN: Course[],
}): JSX.Element {

    // const list variable to map out SAVE_BIN useState variable
    const binListToPrint = SAVE_BIN;

    function removeCourse(id: number) {
        SET_SAVE_BIN(SAVE_BIN.filter(item => item !== courseData[id]));
    }
    
    return(
        <div>
            <Offcanvas className="bin" show={binVisible} onHide={() => setBinVisible(false)} placement="bottom" scroll={true} backdrop={false}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Save For Later</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="bin-body">
                    <ClearBinButton
                        SET_SAVE_BIN={SET_SAVE_BIN}
                    ></ClearBinButton>
                    <Container>
                        <Row xs={1} md={3}>
                            <AnimatePresence>
                                {binListToPrint.map(binListToPrint =>
                                    <motion.div
                                        key={binListToPrint.id}
                                        drag
                                        dragConstraints={{
                                            top: 0,
                                            bottom: 0,
                                            right: 0,
                                            left: 0
                                        }}
                                        onDragEnd={() => removeCourse(binListToPrint.id)}
                                        dragElastic={1}
                                        initial={{ opacity: 0, x: 180 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, y: -200, x: 180 }}
                                        transition={{
                                            ease: "easeInOut",
                                            duration: 0.4
                                        }}>
                                        <Col >
                                            <BinCourseCard
                                                course={binListToPrint}
                                                SET_SAVE_BIN={SET_SAVE_BIN}
                                                SAVE_BIN={SAVE_BIN}
                                            ></BinCourseCard>
                                        </Col>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </Row>
                    </Container>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}
