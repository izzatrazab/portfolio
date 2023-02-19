import LogoSvelte from "./svelte.svg";
import LogoVue from "./vue-logo.svg"
import LogoVuetify from "./vuetify-logo.svg"
import LogoNodejs from "./node js.svg"
import LogoMysql from "./mysql-logo.svg"
import LogoCss from "./css-3-logo.svg"
import LogoReact from "./react-logo.svg"
import LogoJest from "./jest-logo.svg"
import LogoSpringBoot from "./spring-boot-logo.svg"
import LogoFirebase from "./firebase-logo.svg"
import ModalVue from "./../routes/sections/modals/vue-modal.svelte"
export let db = {
    confidentTools: [{
        name: "Vue 2",
        logo: LogoVue,
        description: "I used vue 2 for my final year project. This is the front end framework that I used the longest",
    },
    {
        name: "Vuetify",
        logo: LogoVuetify,
        description: "Vuetify is one of the component framework for Vue, I used this along with Vue 2 for my final year project",
    },
    {
        name: "CSS",
        logo: LogoCss,
        description: "As off now, I only use CSS to customize styles",
    },
    {
        name: "Node Js",
        logo: LogoNodejs,
        description: "Node js is the backend that I used for my final year project my final year project",
    },
    {
        name: "MySQL",
        logo: LogoMysql,
        description: "I mainly use Mysql for database.",
    }

    ],
    lessExperienceTools: [
        {
            name: "React",
            logo: LogoReact,
            description: "I used react before for fun. I wanted to create a typing test mini app."
        },
        {
            name: "React Native",
            logo: LogoReact,
            description: "I learn a bit of react native during internship and when I was competing in MAMPU CHIPTA Hackathon."
        },
        {
            name: "Svelte",
            logo: LogoSvelte,
            description: ""
        },
        {
            name: "Jest",
            logo: LogoJest,
            description: ""
        },
        {
            name: "Spring Boot",
            logo: LogoSpringBoot,
            description: ""
        },
        {
            name: "Firebase",
            logo: LogoFirebase,
            description: "",
        }
    ]
}