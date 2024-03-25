import {Box, Typography} from "@mui/joy";
import ResumeStepper from "./resume_stepper";
import {educationSteps, workSteps} from "../../../../utils/resume_steps";

export const Resume = () => {
    return <Box sx={{
        paddingY: "5%",
    }}>
        <Typography
            level={"h5"}
            color={"primary"}>
            Years of Experience
        </Typography>
        <Typography
            level={"h1"}
            fontSize={"xxx-large"}
        >
            My Resume
        </Typography>
        <Box sx={{
            display: "flex", flexDirection: {
                xs: "column", md: "row",
            }, paddingTop: "2.5%",
            gap: "50px"
        }}>
            <Box>
                <Typography
                    level={"h3"}
                >
                    Education
                </Typography>
                <ResumeStepper steps={educationSteps}/>
            </Box>
            <Box>
                <Typography
                    level={"h3"}>
                    Work
                </Typography>
                <ResumeStepper steps={workSteps}/>
            </Box>
        </Box>
    </Box>
}