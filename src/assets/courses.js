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
        "credits": 4,
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
        "preReq": ["CISC 200", "MATH 100"]
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
        "name": "ENGL 110",
        "timeStart": 1700,
        "timeEnd": 1800,
        "schedule": "MWF",
        "description": "This is English 110, section 10.",
        "credits": 3,
        "preReq": []
    },
    {
        "id": 6,
        "name": "CPEG 100",
        "timeStart": 1700,
        "timeEnd": 1800,
        "schedule": "TR",
        "description": "This is Computer Engineering 100, section 10.",
        "credits": 3,
        "preReq": []
    },
    {
        "id": 7,
        "name": "CPEG 200",
        "timeStart": 1100,
        "timeEnd": 1230,
        "schedule": "TR",
        "description": "This is Computer Engineering 200, section 10.",
        "credits": 4,
        "preReq": ["CPEG 100", "MATH 100"]
    },
    {
        "id": 8,
        "name": "CPEG 300",
        "timeStart": 900,
        "timeEnd": 955,
        "schedule": "MWF",
        "description": "This is Computer Engineering 300, section 10.",
        "credits": 4,
        "preReq": ["CPEG 200", "MATH 100"]
    },
    {
        "id": 9,
        "name": "CPEG 400",
        "timeStart": 1600,
        "timeEnd": 1730,
        "schedule": "TR",
        "description": "This is Computer Engineering 400, section 10.",
        "credits": 3,
        "preReq": ["CPEG 300", "MATH 200"]
    },
    {
        "id": 10,
        "name": "MATH 300",
        "timeStart": 1100,
        "timeEnd": 1230,
        "schedule": "TR",
        "description": "This is Mathematics 300, section 10.",
        "credits": 3,
        "preReq": ["MATH 200"]
    },
    {
        "id": 11,
        "name": "MATH 400",
        "timeStart": 1300,
        "timeEnd": 1355,
        "schedule": "MWF",
        "description": "This is Mathematics 400, section 10.",
        "credits": 3,
        "preReq": ["MATH 300"]
    },
    {
        "id": 12,
        "name": "CPEG 355",
        "timeStart": 1100,
        "timeEnd": 1230,
        "schedule": "TR",
        "description": "This is Computer Engineering 355, section 10.",
        "credits": 4,
        "preReq": ["CPEG 300", "CISC 200"]
    },
    {
        "id": 13,
        "name": "CISC 400",
        "timeStart": 1000,
        "timeEnd": 1055,
        "schedule": "MWF",
        "description": "This is Computer Science 400, section 10.",
        "credits": 3,
        "preReq": ["CISC 300"]
    },
    {
        "id": 14,
        "name": "ENGL 200",
        "timeStart": 1100,
        "timeEnd": 1230,
        "schedule": "TR",
        "description": "This is English 200, section 10.",
        "credits": 3,
        "preReq": ["ENGL 100"]
    },
    {
        "id": 15,
        "name": "ENGL 300",
        "timeStart": 1300,
        "timeEnd": 1355,
        "schedule": "MWF",
        "description": "This is English 300, section 10.",
        "credits": 3,
        "preReq": ["ENGL 200"]
    },
    {
        "id": 16,
        "name": "ENGL 400",
        "timeStart": 1530,
        "timeEnd": 1625,
        "schedule": "MWF",
        "description": "This is English 400, section 10.",
        "credits": 3,
        "preReq": ["ENGL 300"]
    },
    {
        "id": 17,
        "name": "HIST 100",
        "timeStart": 1000,
        "timeEnd": 1130,
        "schedule": "TR",
        "description": "This is History 100, section 10.",
        "credits": 3,
        "preReq": []
    },
    {
        "id": 18,
        "name": "PHYS 100",
        "timeStart": 1300,
        "timeEnd": 1430,
        "schedule": "TR",
        "description": "This is Physics 100, section 10.",
        "credits": 4,
        "preReq": []
    },
    {
        "id": 19,
        "name": "PHYS 200",
        "timeStart": 1100,
        "timeEnd": 1155,
        "schedule": "MWF",
        "description": "This is Physics 200, section 10.",
        "credits": 4,
        "preReq": ["PHYS 100", "MATH 200"]
    }

];
export default courseData;