import {Box, Typography} from "@mui/joy";
import {services} from "../../../../utils/service";
import {ServiceCard} from "../../../../components/service_card";


const Service = () => {
    return (<Box sx={{
        paddingY: "5%",
    }}>
        <Typography
            level={"h5"}
            color={"primary"}>
            My Services
        </Typography>
        <Typography
            level={"h1"}
            fontSize={"xxx-large"}
        >
            What I Do
        </Typography>
        <Box
            sx={{
                paddingY: "5%",
                display: "grid",
                gap: "20px 40px",
                gridTemplateColumns: {
                    xs: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    lg: 'repeat(4, 1fr)',
                },
            }}
        >
            {services.map((e, i) => ServiceCard(e))}
        </Box>
    </Box>)
}

export default Service;