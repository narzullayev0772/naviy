import {Box, Divider, Typography} from "@mui/joy";
import Links from "./links";
import Stats from "./stats";
import {Logo3d} from "../../../../components/logo_3d";
import {Suspense} from "react";

const About = () => {
    return (<>
        <Box
            id={"about"}
            sx={{
                mt: "5%", display: "flex", flexDirection: {
                    xs: "column-reverse", md: "row",
                },
            }}
        >
            <Box
                sx={{
                    display: "flex", flexDirection: "column", flex: 1, gap: "10px",
                }}
            >
                <Typography
                    level={"h5"}
                    color={"primary"}>
                    Hello, I'm
                </Typography>

                <Typography level={"h1"}>
                    Alisher Narzullayev
                </Typography>
                <Typography level={"h4"}>Mobile & Fullstack Engineer from Tashkent, Uzbekistan</Typography>
                <Typography paddingY={"20px"}>
                    I build products end to end: Flutter apps, NestJS and PostgreSQL backends, and
                    Next.js dashboards. Lately I have been working on SaaS for education and HR, and
                    open-source tools that help Flutter teams ship faster, like deploykit, Clean Gen
                    and cubit_base. I care about clean architecture, spec-driven development and
                    automating everything that can be automated.
                </Typography>
                <Typography paddingY={"20px"} level={"h5"} fontWeight={"bold"}>
                    FIND ME ON
                </Typography>
                <Links/>
                <Stats/>
            </Box>
            <Box
                sx={{
                    display: "flex", flex: 1, justifyContent: "center", alignItems: "center",
                }}
            >

                <Suspense
                    fallback={<img
                        src={"/assets/logo.svg"}
                        alt={"logo"}
                        width={"60%"}
                    />}
                >
                    <Logo3d/>
                </Suspense>
            </Box>
        </Box>
        <Divider/>
    </>);
};

export default About;
