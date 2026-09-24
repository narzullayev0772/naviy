import {
    SiDart,
    SiFlutter,
    SiGithubactions,
    SiIntellijidea,
    SiNestjs,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiPrisma,
    SiReact,
    SiRedis,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";
import {AiOutlineMobile} from "react-icons/ai";
import {BsGlobe} from "react-icons/bs";
import {DesktopWindows} from "@mui/icons-material";
import {TbTerminal2} from "react-icons/tb";

// Featured work, newest first. `img` and `url` are optional: cards without a
// screenshot render a gradient tile with the project type icon instead.
export const apps = [{
    title: "189",
    caption: "Test & contest platform",
    year: "2026",
    description: "Exam-prep platform for university applicants in Uzbekistan: DTM-style and block tests, timed contests with prizes, and student profiles. Flutter app for students, Next.js admin panel, NestJS API.",
    stack: [<SiFlutter/>, <SiNestjs/>, <SiPrisma/>, <SiPostgresql/>, <SiNextdotjs/>],
    type: <AiOutlineMobile/>
}, {
    title: "ImpulseHR",
    caption: "HR management SaaS",
    year: "2026",
    description: "HR management SaaS with a web dashboard and a mobile app on top of a NestJS API.",
    stack: [<SiNestjs/>, <SiPrisma/>, <SiPostgresql/>, <SiRedis/>, <SiNextdotjs/>, <SiFlutter/>],
    type: <BsGlobe/>
}, {
    title: "TeachUs / EduCRM",
    caption: "SaaS for learning centers",
    year: "2026",
    description: "Multi-tenant management system for learning centers: students, groups, teachers, payments and marketing in one place. Turborepo monorepo with clean architecture end to end.",
    stack: [<SiNextdotjs/>, <SiNestjs/>, <SiPostgresql/>, <SiRedis/>, <SiTypescript/>, <SiTailwindcss/>],
    type: <BsGlobe/>
}, {
    title: "deploykit",
    caption: "Open-source Dart CLI",
    year: "2026",
    description: "Deploy Flutter apps to Google Play and App Store Connect from a single deploy.yaml. No Python, no fastlane, and a doctor command that catches broken keys and configs before the build.",
    stack: [<SiDart/>, <SiFlutter/>, <SiGithubactions/>],
    type: <TbTerminal2/>,
    url: "https://github.com/narzullayev0772/deploykit"
}, {
    title: "Clean Gen",
    caption: "CLI + IntelliJ plugin",
    year: "2025",
    description: "Generates Clean Architecture features for Flutter (data, domain and presentation layers, Retrofit API services, models from JSON, Cubits and DI) from a JSON/YAML config or straight from the IDE.",
    stack: [<SiDart/>, <SiFlutter/>, <SiIntellijidea/>],
    type: <TbTerminal2/>,
    url: "https://github.com/narzullayev0772/clean_gen_cli"
}, {
    title: "cubit_base",
    caption: "Flutter package",
    year: "2025",
    description: "Lightweight library that standardizes loading, success, error and pagination states for Bloc/Cubit and removes fetch boilerplate from Clean Architecture features.",
    stack: [<SiDart/>, <SiFlutter/>],
    type: <TbTerminal2/>,
    url: "https://github.com/narzullayev0772/cubit_base"
}, {
    title: "SportUp",
    caption: "Sport centers app",
    year: "2025",
    description: "App for finding sport centers by location and facilities, built full-stack in Dart with Flutter and Serverpod.",
    stack: [<SiFlutter/>, <SiDart/>, <SiPostgresql/>],
    type: <AiOutlineMobile/>
}, {
    title: "Navi TV",
    caption: "Mobile app",
    year: "2024",
    description: "Free, ad-free anime streaming app with 1000+ titles across 10+ categories.",
    img: "/assets/screenshots/navitv/img.png",
    stack: [<SiFlutter/>, <SiNodedotjs/>],
    type: <AiOutlineMobile/>
}, {
    title: "Navime",
    caption: "Mobile app",
    year: "2024",
    description: "Free, ad-free live TV app with about 500 channels across 10+ categories.",
    img: "/assets/screenshots/navime/img.png",
    stack: [<SiFlutter/>, <SiNodedotjs/>],
    type: <AiOutlineMobile/>
}, {
    title: "Scaner Desktop",
    caption: "Desktop app",
    year: "2023",
    description: "Desktop admin for managing files, staff, categories and goals, with statistics dashboards.",
    img: "/assets/screenshots/scaner/img.png",
    stack: [<SiFlutter/>, <SiNodedotjs/>],
    type: <DesktopWindows/>
}, {
    title: "Amiko Offers",
    caption: "Mobile app",
    year: "2023",
    description: "Internal app where Amiko staff submit and track improvement offers, with role-based access.",
    img: "/assets/screenshots/amiko_offers/img.png",
    stack: [<SiReact/>, <SiNodedotjs/>],
    type: <AiOutlineMobile/>
}, {
    title: "Amiko Official Website",
    caption: "Corporate website",
    year: "2023",
    description: "Official company website for Amiko.",
    img: "/assets/screenshots/amiko/img.png",
    stack: [<SiReact/>, <SiNodedotjs/>],
    type: <BsGlobe/>
}, {
    title: "UzPartnerCargo",
    caption: "Website + CRM",
    year: "2023",
    description: "Website and CRM for a cargo company.",
    img: "/assets/screenshots/uzpartnercargo/img.png",
    stack: [<SiReact/>, <SiNodedotjs/>],
    type: <BsGlobe/>
}];

// Smaller and internal projects, shown as a compact list under the grid.
export const otherWorks = ["Amiko Stock", "Amiko Trade CRM", "Amiko Client CRM", "Amiko Plan Factory", "Amiko Power BI", "Bonus CRM", "InSell", "InSell Admin", "Investor CRM", "Investor Bot", "Oyliklar Bot", "Oylik va Jarimalar Bot", "IDCam Smart HR"];
