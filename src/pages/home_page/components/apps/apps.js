import {Box, Button, Typography} from "@mui/joy";
import {apps} from "../../../../utils/apps";
import AppCard from "../../../../components/card";
import {AppsSharp} from "@mui/icons-material";

export const Apps = () => {
    return (<Box
        id={"apps"}
        sx={{
        paddingY: "5%",
    }}>
        <Typography
            level={"h5"}
            color={"primary"}>
            My Works
        </Typography>
        <Typography
            level={"h1"}
            fontSize={"xxx-large"}
        >
            Recent Works
        </Typography>
        <Box
            sx={{
                paddingY: "5%",
                display: "grid",
                gap: "20px 40px",
                gridTemplateColumns: {
                    xs: 'repeat(2, 1fr)',
                    xl: 'repeat(4, 1fr)',
                }
            }}
        >
            {apps.map(app => AppCard(app))}
        </Box>
        <Box
            sx={{
                display: "flex", justifyContent: "center"
            }}
        >
            <Button
                startDecorator={<AppsSharp/>}>
                Browse All
            </Button>
        </Box>
    </Box>)
}