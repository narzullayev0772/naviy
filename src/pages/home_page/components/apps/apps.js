import {Box, Divider, Typography} from "@mui/joy";
import {apps, otherWorks} from "../../../../utils/apps";
import {ChipList, GridView} from "../../../../components/grid_view";

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
            <GridView apps={apps}/>
        </Box>
        <Typography level={"h4"} paddingBottom={"16px"}>
            Also built
        </Typography>
        <ChipList items={otherWorks}/>
    </Box>
        <Divider/>
    </>)
}
