import {Box, Card, Typography} from "@mui/joy";
import {HoverCard} from "./hover_card";

export function ServiceCard({service}) {
    return (<HoverCard>
        <Card sx={{
            height: "100%",
        }}>
            {service.icon}
            <Typography level={"h4"}>{service.title}</Typography>
            <Typography level={"body-sm"}>{service.description}</Typography>
            <Box
                sx={{
                    display: "flex", gap: "5%", paddingY: "5%",
                }}
            >
                {service.languages.map(e => e)}
            </Box>
        </Card>
    </HoverCard>);
}
