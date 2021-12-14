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
    "github": <GithubIcon />,
    "linkedIn": <LinkedInIcon />,
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
  ],
  projects: {
    "dataScience": "dataScience",
    "webDev": "web dev",
    "gameDev": "game dev",
  }
};

export default Content;