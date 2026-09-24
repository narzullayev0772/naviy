import {School} from "@mui/icons-material";
import {TbBrandFlutter, TbCode} from "react-icons/tb";
import {GiTeacher} from "react-icons/gi";
import {BiLogoJavascript} from "react-icons/bi";
import {SiUdemy} from "react-icons/si";

export const educationSteps = [{
    title: "Bachelor · TUIT (2021-2024)",
    description: "Tashkent University of Information Technologies.",
    indicator: <School/>,
    completed: true
}, {
    title: "Online courses",
    description: "Self-taught web, mobile and backend development through Udemy courses, documentation and open-source code.",
    indicator: <SiUdemy/>,
    completed: true
}];
export const workSteps = [{
    title: "Mentor · Business Start Academy (2021-2022)",
    description: "Taught web development and mentored students while working as a fullstack developer.",
    indicator: <GiTeacher size={24}/>,
    completed: true,
}, {
    title: "Fullstack Developer (2022-2024)",
    description: "Built CRMs, internal tools, websites and Telegram bots with React, Node.js and MongoDB, including products for Amiko.",
    indicator: <BiLogoJavascript size={24}/>,
    completed: true
}, {
    title: "Flutter Developer (2023-2024)",
    description: "Shipped mobile and desktop apps with Flutter: Navi TV, Navime, Amiko Stock and Scaner Desktop.",
    indicator: <TbBrandFlutter/>,
    completed: true
}, {
    title: "Mobile & Fullstack Engineer (2024-present)",
    description: "Building SaaS products end to end with Flutter, NestJS and Next.js (189, ImpulseHR, TeachUs), and open-source developer tools for Flutter teams.",
    indicator: <TbCode size={24}/>,
    completed: true
},];
