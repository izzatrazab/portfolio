import LogoSvelte from "./svelte.svg"
import LogoVue from "./vue-logo.svg"
import LogoVuetify from "./vuetify-logo.svg"
import LogoNodejs from "./node js.svg"
import LogoMysql from "./mysql-logo.svg"
import LogoCSS from "./css-3-logo.svg"
import LogoReact from "./react-logo.svg"
import LogoJest from "./jest-logo.svg"
import LogoSpringBoot from "./spring-boot-logo.svg"
import LogoFirebase from "./firebase-logo.svg"
import LogoAngular from "./logo/angular-logo.svg"
import LogoPHP from "./logo/php-logo.svg"

import kakitangan1 from "./Intern/Kakitangan 01.jpg"
import kakitangan2 from "./Intern/Kakitangan 02.jpg"
import kakitangan3 from "./Intern/Kakitangan 03.jpg"
import hearseBooking1 from "./Intern/hearseBooking01.svg"

import jomTaip from "./personal/JomTaip.png"

export const tools = {
    androidStudioEmulator: { name: "Android Studio Emulator" },
    angular: {
        name: "Angular",
        logo: LogoAngular,
        description: "I know Angular from a Spring Boot project that uses Angular for its front end. It was for my group project last semester. In my opinion Angular file structure is a mess. As a beginner, I found it was hard to understand. But I will go back and explore it again. I believe there must be hidden potentials that I didn't realize yet because why would Google still actively maintain this framework right."
    },
    bootstrap: { name: "Bootstrap" },
    chartJs: { name: "Chart.js" },
    css: {
        name: "CSS",
        logo: LogoCSS,
        description: "As of now, I only use CSS to customize styles. It suits my use cases up until now. I might transition to others like Sass if css does not fulfil my needs."
    },
    firebase: {
        name: "Firebase",
        logo: LogoFirebase,
        description: "During Hackathon MAMPU - CHIPTA, my friend suggested to use firebase. From there I started to know more about firebase and NoSQL database."
    },
    html: { name: "HTML" },
    jest: {
        name: "Jest",
        logo: LogoJest,
        description: "I used Jest for testing the backend (Node Js) of my final year project but I'm still not fully master it. I'm definitely going to explore more of Jest as it can test many other frameworks."
    },
    jQuery: { name: "jQuery" },
    JavaScript: { name: "JavaScript" },
    mySQL: {
        name: "MySQL",
        logo: LogoMysql,
        description: "I mainly use MySQL for database. I started to learn MySQL during my 3rd semester in Web Programming course. I really like relational database, it is a really clean way to save data. But unfortunately, it is not easy to do real-time with MySQL. Currently I am looking a new real time database to learn such as Firebase or PocketBase."
    },
    nodeJs: {
        name: "Node Js",
        logo: LogoNodejs,
        description: "Node js is the backend that I used for my final year project my final year project. I used it with express and sequelize."
    },
    php: {
        name: "PHP",
        logo: LogoPHP,
        description: "PHP is the first language that I used for backend, I used this during internship as well. Unfortunately, I did not use any structure or good practice using PHP. Now that I am more concern about structure and best practice. I will go back to learn proper PHP good practices or even learn php framework such as Laravel."
    },
    react: {
        name: "React",
        logo: LogoReact,
        description: "I started to use react during internship for Hearse Booking project. I watched several youtube tutorials on react to improve my understanding on react. After internship, I created a typing test mini app. Now that I finished studying, I might start using it again with Next.js"
    },
    reactMaterialUi: { name: "React Material UI" },
    reactNative: {
        name: "React Native",
        logo: LogoReact,
        description: "I was introduced to react native from a friend when we were competing in a Hackathon (organized by MAMPU JPM called 'Hackathon MAMPU - CHIPTA). We were required to build an app. I also used react native for Hearse Booking app during internship at HSNZ."
    },
    reactNativePaper: { name: "React Native Paper" },
    svelte: {
        name: "Svelte",
        logo: LogoSvelte,
        description: "Svelte would be at the top of my learning list at the moment. For some reason I like its structure compared to other frameworks. For start, I build this portfolio page using svelte and I'm loving it."
    },
    springBoot: {
        name: "Spring Boot",
        logo: LogoSpringBoot,
        description: "I know Spring Boot from Component Based Software Engineering course in my last semester of University. In a team, we are required to improve a project (any public project in the Internet) using Spring Boot. I am amazed how Spring Boot makes development faster and easier."
    },
    vue2: {
        name: "Vue 2",
        logo: LogoVue,
        description: "I used Vue 2 for my final year project (Teledentistry system). This is the front end framework that I used the longest and I'm confident with it. Though I might switch to Vue 3."
    },
    vuetify: {
        name: "Vuetify",
        logo: LogoVuetify,
        description: "Vuetify is one of the component framework for Vue, I used this along with Vue 2 for my final year project."
    }
};

export let db = {
    biodata: {
        name: "Muhammad Izzat bin Abd Razab",
        age: 23,
        phone: "01113048308",
        email: "izzatrazab@gmail.com",
        github: "izzatrazab",
        from:"Kuala Terengganu - Malaysia",
        education:
            "Bachelor of Computer Science (Software Engineering)  University of Malaya (cgpa: 3.72). I already finished all semesters and expected to officially graduate early next year.",
    },
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
        description: ["This system aims to digitalize the physical process of hearse booking at HSNZ. It consist of a website and a mobile app.", "The website is for admin (manage bookings and drivers) and client (booking hearse) while the mobile app is for the hearse drivers."],
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
        jomTaip: {
            name: "JomTaip",
            img: jomTaip,
            description: "JomTaip is a simple typing test I created using react right after my internship.",
            tools: [
                tools.react
            ]
        },
    }
};

export let lessExperienceTools = {
    description: "These are the framework/database that I am less experience with. Nevertheless, I am still going to check them out again in the future to explore their potential. Click the icon to see the details.",
    tools: [
        tools.react,
        tools.reactNative,
        tools.svelte,
        tools.jest,
        tools.springBoot,
        tools.firebase,
        tools.angular,
    ]
}

export let experienceTools = {
    description: "These are the framework/database that I'm confident with. As far as I remember, I used them the longest if compared to others. Click the icon to see the details.",
    tools: [
        tools.vue2,
        tools.vuetify,
        tools.css,
        tools.nodeJs,
        tools.mySQL,
        tools.php
    ]
}