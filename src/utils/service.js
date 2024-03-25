import {Storage, TabletAndroid, Web} from "@mui/icons-material";
import {ImCss3, ImHtmlFive} from "react-icons/im";
import {GrReactjs} from "react-icons/gr";
import {SiExpress, SiFlutter, SiJavascript, SiMongodb, SiTelegram} from "react-icons/si";
import {
    TbBrandNodejs,
    TbBrandReactNative,
    TbBrandTypescript,
} from "react-icons/tb";

export const services = [
    {
        title: "Frontend Development",
        description:
            "I have experience building websites and chrome extensions using JavaScript, React, HTML, and CSS.",
        icon: <Web/>,
        languages: [
            <ImHtmlFive color={"orange"}/>,
            <ImCss3 color={"blue"}/>,
            <SiJavascript color={"yellow"}/>,
            <GrReactjs color={"skyblue"}/>,
        ],
    },
    {
        title: "Mobile App Development",
        description:
            "I have experience building mobile applications using Flutter and React Native.",
        icon: <TabletAndroid/>,
        languages: [
            <SiFlutter color={"#0088cc"}/>,
            <TbBrandReactNative color={"skyblue"}/>,
        ],
    },
    {
        title: "Backend Development",
        description:
            "I have experience building backend services using Node.js, Express.js, and MongoDB.",
        icon: <Storage/>,
        languages: [
            <TbBrandTypescript color={"#007acc"}/>,
            <TbBrandNodejs color={"#3e863d"}/>,
            <SiExpress/>,
            <SiMongodb color={"#4DB33D"}/>,
        ],
    },
    {
        title: "Telegram Bot Development",
        description: "I have experience building telegram bots using Node.js, Telegraph.js,GrammyJs and others",
        icon: <SiTelegram/>,
        languages: [
            <TbBrandTypescript color={"#007acc"}/>,
            <TbBrandNodejs color={"#3e863d"}/>,
            <SiExpress/>,
            <SiMongodb color={"#4DB33D"}/>,
        ],
    },
];
