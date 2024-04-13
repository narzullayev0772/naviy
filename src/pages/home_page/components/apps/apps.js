import {Box, Button, Divider, Typography} from "@mui/joy";
import {apps} from "../../../../utils/apps";
import {AppsSharp} from "@mui/icons-material";
import {GridView} from "../../../../components/grid_view";

export const Apps = () => {
    return (<><Box
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
            }}
        >
            <GridView/>
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
    </Box>
        <Divider/>
    </>)
}