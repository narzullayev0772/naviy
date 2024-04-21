import {Box, Divider, Typography} from "@mui/joy";
import {services} from "../../../../utils/service";
import {ServiceCard} from "../../../../components/service_card";


const Service = () => {
    return (<>
        <Box
            id={"service"}
            sx={{
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
                    paddingY: "5%", display: "grid", gap: "20px 40px", gridTemplateColumns: {
                        xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)',
                    },
                }}
            >
                {services.map((service, i) => <ServiceCard key={i}
                                                           service={service}
                />)}
            </Box>
        </Box>
        <Divider/>
    </>)
}

export default Service;