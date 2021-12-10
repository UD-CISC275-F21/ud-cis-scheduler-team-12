
export default function getSemesterName(count: number): string {
    let newCount = count;
    let season = "";
    if (count % 2 !== 0) {
        newCount = (count+1) / 2;
        season = "Fall";
    } else {
        newCount = count/2;
        season = "Spring";
    }

    return `${season} ${newCount}`;
}
