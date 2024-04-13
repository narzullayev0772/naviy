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
                mt: "5%", display: "flex",
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
                <Typography level={"h4"}>Developer From Uzbekistan</Typography>
                <Typography paddingY={"20px"}>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </Typography>
                <Typography paddingY={"20px"} level={"h5"} fontWeight={"bold"}>
                    FIND ME ON
                </Typography>
                <Links/>
                <Stats/>
            </Box>
            <Box
                sx={{
                    display: {
                        xs: "none", md: "flex",
                    }, flex: 1, justifyContent: "center", alignItems: "center",
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
