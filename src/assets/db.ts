import LogoSvelte from "./svelte.svg";
import LogoVue from "./vue-logo.svg";
import LogoVuetify from "./vuetify-logo.svg";
import LogoNodejs from "./node js.svg";
import LogoMysql from "./mysql-logo.svg";
import LogoCss from "./css-3-logo.svg";
import LogoReact from "./react-logo.svg";
import LogoJest from "./jest-logo.svg";
import LogoSpringBoot from "./spring-boot-logo.svg";
import LogoFirebase from "./firebase-logo.svg";

import kakitangan1 from "./Intern/Kakitangan 01.jpg";
import kakitangan2 from "./Intern/Kakitangan 02.jpg";
import kakitangan3 from "./Intern/Kakitangan 03.jpg";
import hearseBooking1 from "./Intern/hearseBooking01.svg";

import jomTaip from "./personal/JomTaip.png"

export const tools = {
    php: {name: "PHP"},
    html: {name: "HTML"},
    JavaScript: {name: "JavaScript"},
    jQuery: {name: "jQuery"},
    chartJs: {name: "Chart.js"},
    bootstrap:{name: "Bootstrap"},
    react: {name: "React"},
    reactMaterialUi: { name: "React Material UI" },
    reactNative: { name: "React Native" },
    androidStudioEmulator: {name:"Android Studio Emulator"},
    reactNativePaper: { name: "React Native Paper" },
};

export let db = {
    biodata: {
        name: "Muhammad Izzat bin Abd Razab",
        age: 23,
        phone: "01113048308",
        email: "izzatrazab@gmail.com",
        github: "izzatrazab",
        education:
            "Bachelor of Computer Science (Software Engineering)  University of Malaya (cgpa: 3.72). I already finished all semesters and expected to officially graduate early next year.",
    },
    confidentTools: [
        {
            name: "Vue 2",
            logo: LogoVue,
            description:
                "I used vue 2 for my final year project. This is the front end framework that I used the longest",
        },
        {
            name: "Vuetify",
            logo: LogoVuetify,
            description:
                "Vuetify is one of the component framework for Vue, I used this along with Vue 2 for my final year project",
        },
        {
            name: "CSS",
            logo: LogoCss,
            description: "As off now, I only use CSS to customize styles",
        },
        {
            name: "Node Js",
            logo: LogoNodejs,
            description:
                "Node js is the backend that I used for my final year project my final year project",
        },
        {
            name: "MySQL",
            logo: LogoMysql,
            description: "I mainly use Mysql for database.",
        },
    ],
    lessExperienceTools: [
        {
            name: "React",
            logo: LogoReact,
            description:
                "I used react before for fun. I wanted to create a typing test mini app.",
        },
        {
            name: "React Native",
            logo: LogoReact,
            description:
                "I learn a bit of react native during internship and when I was competing in MAMPU CHIPTA Hackathon.",
        },
        {
            name: "Svelte",
            logo: LogoSvelte,
            description: "",
        },
        {
            name: "Jest",
            logo: LogoJest,
            description: "",
        },
        {
            name: "Spring Boot",
            logo: LogoSpringBoot,
            description: "",
        },
        {
            name: "Firebase",
            logo: LogoFirebase,
            description: "",
        },
    ],
    kakitangan: {
        img: [kakitangan1, kakitangan2, kakitangan3],
        tools: [
            tools.html,
            tools.php,
            tools.JavaScript,
            tools.jQuery,
            tools.bootstrap,
            tools.chartJs,
        ],
    },
    hearseBooking: {
        img: [hearseBooking1],
        description:["This system aims to digitalize the physical process of hearse booking at HSNZ. It consist of a website and a mobile app."," The website is for admin (manage bookings and drivers) and client (booking hearse) which mobile app is for the hearse drivers."],
        tools: [
            tools.react,
            tools.reactMaterialUi,
            tools.reactNative,
            tools.androidStudioEmulator,
            tools.reactNativePaper,
            tools.php
        ],
    },
    personalProject: {
        jomTaip:{
            name:"JomTaip",
            img:jomTaip,
            description:"JomTaip is a simple typing test I created using react right after my internship.",
            tools:[
                tools.react
            ]
        },
    }
};
