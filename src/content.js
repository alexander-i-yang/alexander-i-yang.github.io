import {ReactComponent as GithubIcon} from "./images/Icons/github.svg";
import {ReactComponent as LinkedInIcon} from "./images/Icons/linkedin.svg";
// import React from "react";


const Content = {
    "global": {
        "siteRepoURL": "https://github.com/alexander-i-yang/alexander-i-yang.github.io",
        "github": "https://github.com/alexander-i-yang",
        "email": "mailto:alexander.yang@yang2k.com",
        "linkedIn": "https://www.linkedin.com/in/alexander-i-yang/"
    },
    "icons": {
        "github": <GithubIcon/>,
        "linkedIn": <LinkedInIcon/>,
    },
    "skills": [
        {
            "title": "Data Science",
            "icon": "analytics",
            "image": "/images/Data Science Cardsplash.png",
            "darken": 0.8,
            "skills": [
                "TensorFlow",
                "SQL Server Management Studio",
                "NumPy",
                "Pandas",
                "Google BigQuery"
            ],
            "languages": [
                "Python",
                "SQL",
                // "Java",
                "C++"
            ],
            "projects": [
                "OneSupport Ltd.",
                "PicoCTF"
            ]
        }, {
            "title": "Web Dev",
            "icon": "code",
            "image": "/images/Web Dev Cardsplash.png",
            "darken": 0.5,
            "skills": [
                "React",
                "Material Design",
                "UI/UX Design",
                "Flask",
                // "React Native"
            ],
            "languages": [
                "JavaScript",
                // "SQL",
                // "Java",
                "HTML5/CSS3",
                // "Dart"
            ],
            "projects": [
                "This Website",
                "Crypto Curious",
                "PicoCTF",
                "Google Hangouts Redesign Concept"
            ]
        }, {
            "title": "Game Dev",
            "icon": "sports_esports",
            "image": "/images/Game Dev Cardsplash.png",
            "darken": 0.8,
            "skills": [
                "Game Design",
                "Level Design",
                "Unity",
                // "Tiled",
                "Pixel Art"
            ],
            "languages": [
                "C#",
                "C++"
            ],
            "projects": [
                "The Beta Tester's Guide to Gravity Manipulation",
                "Paravoid",
                "Side By Side",
                "Beam",
                "Cave Toss"
            ]
        }
    ]
};

Content.projects = {
    "dataScience": {
        "title": "Data Science",
        "flavor": "Integrating data, artificial intelligence, and humans.",
        "description": "I started programming at 13 with my middle school robotics team. I was fascinated by creating interactive " +
            "systems out of nothing but Legos, motors, and a computer. I've come a long way from Legos and block-based " +
            "programming languages, but my interest remains the same. I'm committed to shrinking the gap between data " +
            "and our machines by making it palatable through visualization or unearthing hidden patterns through" +
            "processing. I'm also extremely concerned about the ethics of data collection and analysis, and it's " +
            "something I've been cautious to avoid ever since my first foray into the field.",
        "skills": Content.skills[0].skills,
        "projectList": [
            {
                "title": "One Support Ltd.",
                "date": "Jun 2020 - Aug 2021",
                "flavor": "Automating Call Projection Forecasting at age 17",
                "description": "At OneSupport Ltd., I eliminated a manual forecasting process that relied mostly on intuition and the last month's numbers. I compared different forecasting methods, including an AI-powered ARIMA time series and a straight mathematical average. At first, the stakeholder wanted a Google-Cloud powered web app (which I prototyped by hosting Python/Flask on Google Cloud), but he eventually trusted me enough to integrate the SQL program directly into the company's Microsoft Management Studio backend. I developed all stages of the pipeline, including data processing, presentation, and visualization. I really enjoyed the work I did at OneSupport, and I would've stayed with them if I hadn't gone off to college. Unfortunately, I can't show images or share code because most of the project is proprietary.",
                "numbers": [
                    [
                        {
                            "number": "1000+",
                            "description": "hrs/yr eliminated"
                        },
                        {
                            "number": "24000+",
                            "description": "$/yr saved"
                        },
                    ], [
                        {
                            "number": "2300+",
                            "description": "Call representatives"
                        }, {
                            "number": "4",
                            "description": "Person team"
                        }, {
                            "number": "3",
                            "description": "Team members sorely missed"
                        }
                    ]
                ]
            },
            {
                "title": "Pico CTF",
                "date": "Oct 2019",
                "flavor": "White hat hacking",
                "description": "I was my team's lead and web development specialist in the international PicoCTF Cybersecurity hackathon. Although I mainly focused on finding web development vulnerabilities, I also worked on reverse engineering and file de-corruption."
            },
        ],
    },
    "webDev": "web dev",
    "gameDev": "game dev",
};

export default Content;