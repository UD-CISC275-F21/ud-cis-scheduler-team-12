import React from "react";
import { Course } from "../../interfaces/course";

let urlLink = "";

export default function exportCSV({ SEMESTER_MAP }: { SEMESTER_MAP: Record<string, Course[]> }): JSX.Element {

    function exportResult () {
        let joined = "semester,name,credits,schedule,prerequisites";
        Object.keys(SEMESTER_MAP).forEach(key => {
            SEMESTER_MAP[key].forEach(item => {
                joined = joined.concat("\n", 
                    key, ",",
                    item.name, ",",
                    "" + item.credits, ",",
                    item.schedule, ",",
                    JSON.stringify(item.preReq)
                );
            });
        });
        download(joined, "team12-schedule.csv", "text/csv");
    }

    function download (content : string, filename : string, contentType : string) {
        const blob = new Blob([content], { type: contentType });
        const url = URL.createObjectURL(blob);

        const pom = document.createElement("a");
        pom.href = url;
        urlLink = url;
        pom.setAttribute("download", filename);
        pom.click();
    }

    return(
        <div className="file-export">
            <button
                onClick={exportResult}
            > Export as CSV </button>
        </div>
        
    );
}