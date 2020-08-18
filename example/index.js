"use strict";

const CodeMentor = require("../lib");

CodeMentor.mentorProfile("johnnyb", (err, { data }) => {
    console.log(JSON.stringify(data, null, 4));
    // =>
    // {
    //     "reviews": [
    //         {
    //             "avatar": "https://www.gravatar.com/avatar/a4ad...",
    //             "content": "Fantastic Mentor. Highly recommend",
    //             "name": "Tony",
    //             "date": "May 12, 2016"
    //         },
    //         ...
    //     ],
    //     "description": "Full Stack Developer (Node.js & JavaScript)",
    //     "timezone": "Bucharest (+03:00 DST)",
    //     "languages": [
    //         "Romanian",
    //         "English"
    //     ],
    //     "skills": [
    //         "JavaScript",
    //         "HTML/CSS",
    //         "Node.js",
    //         "jQuery",
    //         "Git",
    //         "MongoDB",
    //         "Html",
    //         "CSS",
    //         "Security",
    //         "Shell",
    //         "Vim",
    //         "Command line",
    //         "SVG",
    //         "Google api",
    //         "Cobol"
    //     ],
    //     "ratings": {
    //         "five": 333,
    //         "four": 0,
    //         "three": 0,
    //         "two": 0,
    //         "one": 0
    //     },
    //     "name": "Ionică Bizău (Johnny B.)",
    //     "about": "Hi! My name is Ionică Bizău. If ...",
    //     "rate": 15,
    //     "hourRate": 60,
    //     "averateRating": 5,
    //     "sessionCount": 359,
    //     "signUpDate": "2015-10-15T21:00:00.000Z",
    //     "responseTime": "within an hour",
    //     "likehoodOfReply": "100%",
    //     "expertise": [
    //         {
    //             "name": "JavaScript",
    //             "years_experience": 4,
    //             "description": "I write everyday lot of JS code. ...",
    //             "tags": [
    //                 "jQuery",
    //                 "jQuery UI",
    //                 "jQuery Ajax",
    //                 "Jquery plugins",
    //                 "Javascript plugins"
    //             ]
    //         },
    //         ...
    //     ]
    // }
});
