import {Code, Storage, TabletAndroid, Web} from "@mui/icons-material";
import {
    SiDart,
    SiDocker,
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
    SiTelegram,
    SiTypescript,
} from "react-icons/si";

export const services = [
    {
        title: "Mobile App Development",
        description:
            "Cross-platform apps with Flutter: Clean Architecture, Bloc/Cubit, push notifications, localization, Remote Config and automated store releases.",
        icon: <TabletAndroid/>,
        languages: [
            <SiFlutter color={"#02569B"}/>,
            <SiDart color={"#0175C2"}/>,
            <SiGithubactions color={"#2088FF"}/>,
        ],
    },
    {
        title: "Backend Development",
        description:
            "APIs and SaaS backends with NestJS, Prisma, PostgreSQL and Redis, plus Dart backends with Serverpod. Multi-tenant design, auth and payments.",
        icon: <Storage/>,
        languages: [
            <SiNestjs color={"#E0234E"}/>,
            <SiPrisma/>,
            <SiPostgresql color={"#4169E1"}/>,
            <SiRedis color={"#DC382D"}/>,
            <SiDocker color={"#2496ED"}/>,
        ],
    },
    {
        title: "Web Development",
        description:
            "Admin panels, dashboards and landing pages with Next.js, React, TypeScript, Tailwind and shadcn/ui.",
        icon: <Web/>,
        languages: [
            <SiNextdotjs/>,
            <SiReact color={"#61DAFB"}/>,
            <SiTypescript color={"#3178C6"}/>,
            <SiTailwindcss color={"#06B6D4"}/>,
        ],
    },
    {
        title: "Developer Tooling & Automation",
        description:
            "CLI tools, IDE plugins, code generators, CI/CD pipelines, AI-assisted delivery workflows and Telegram bots that remove repetitive work.",
        icon: <Code/>,
        languages: [
            <SiDart color={"#0175C2"}/>,
            <SiIntellijidea/>,
            <SiNodedotjs color={"#5FA04E"}/>,
            <SiTelegram color={"#26A5E4"}/>,
        ],
    },
];
