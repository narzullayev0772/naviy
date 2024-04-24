import {Box, Card} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import {Link} from "react-router-dom";
import {contacts} from "../../../../utils/contact";
import {HoverCard} from "../../../../components/hover_card";

export const Footer = () => {
    return <Box
        id={"contact"}
        sx={{
            paddingY: "2.5%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px"
        }}>
        <Box sx={{
            display: "flex", flexDirection: "row", gap: "10px"
        }}>
            {contacts.map((contact, i) => {
                return <Link to={contact.url} key={i}>
                    <HoverCard>
                        <Card size={"sm"} sx={{
                            display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"
                        }}>
                            {contact.icon}
                            <Typography level={"body-md"}>{contact.label}</Typography>
                        </Card>
                    </HoverCard>
                </Link>
            })}
        </Box>
        <Box sx={{
            display: "flex", flexDirection: "row", alignItems: "center"
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