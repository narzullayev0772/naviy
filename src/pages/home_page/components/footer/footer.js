import {Box} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import {Link} from "react-router-dom";

export const Footer = () => {
    return <Box sx={{
        paddingY: "2.5%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px"
    }}>
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
        }}>
            <Typography
                fontStyle={"italic"}
                fontWeight={"bolder"}
                fontSize={"32px"}
            >
                N
            </Typography>
            <img src={"/assets/logo.svg"} alt={"logo"} width={"50px"}/>
            <Typography
                fontStyle={"italic"}
                fontWeight={"bolder"}
                fontSize={"32px"}
            >
                I
            </Typography>
        </Box>
        <Typography
            level={"body-sm"}
        >
            © All Rights Reserved By <Link to={"https://t.me/navi_acc"}>navi</Link>
        </Typography>
    </Box>
}