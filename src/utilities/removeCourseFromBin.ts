import { Course } from "../interfaces/course";

function removeCourseFromBin(id: number, SET_SAVE_BIN: (s: Course[]) => void, SAVE_BIN: Course[], courseData: Course[]): void {

    SET_SAVE_BIN(SAVE_BIN.filter(item => item !== courseData[id]));
}
export default removeCourseFromBin;
