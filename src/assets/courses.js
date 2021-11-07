const courseData =[
    {
        "id": 0,
        "name": "CISC 100",
        "timeStart": 1200,
        "timeEnd": 1300,
        "schedule": "MWF",
        "description": "This is Computer Science 100, section 10.",
        "credits": 3,
        "preReq": []
    },
    {
        "id": 1,
        "name": "CISC 200",
        "timeStart": 1400,
        "timeEnd": 1500,
        "schedule": "MWF",
        "description": "This is Computer Science 200, section 10.",
        "credits": 3,
        "preReq": ["CISC 100"]
    },
    {
        "id": 2,
        "name": "CISC 300",
        "timeStart": 1200,
        "timeEnd": 1300,
        "schedule": "TR",
        "description": "This is Computer Science 300, section 10.",
        "credits": 3,
        "preReq": ["CISC 200, MATH 100"]
    },
    {
        "id": 3,
        "name": "MATH 100",
        "timeStart": 1530,
        "timeEnd": 1630,
        "schedule": "MWF",
        "description": "This is Mathematics 100, section 10.",
        "credits": 3,
        "preReq": []
    },
    {
        "id": 4,
        "name": "MATH 200",
        "timeStart": 1330,
        "timeEnd": 1430,
        "schedule": "TR",
        "description": "This is Mathematics 200, section 10.",
        "credits": 3,
        "preReq": ["MATH 100"]
    },
    {
        "id": 5,
        "name": "ENGL 100",
        "timeStart": 1700,
        "timeEnd": 1800,
        "schedule": "MWF",
        "description": "This is English 100, section 10.",
        "credits": 3,
        "preReq": []
    },
    {
        "id": 6,
        "name": "CPEG 100",
        "timeStart": 1700,
        "timeEnd": 1800,
        "schedule": "TR",
        "description": "This is Compueter Engineering 100, section 10.",
        "credits": 3,
        "preReq": []
    }

];
export default courseData;