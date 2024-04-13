import {Box, Divider, Typography} from "@mui/joy";
import {services} from "../../../../utils/service";
import {ServiceCard} from "../../../../components/service_card";
import {languages} from "../../../../utils/langs";
import IconButton from "@mui/joy/IconButton";


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
            <Box sx={{
                display: "grid", gap: "20px 0px", gridTemplateColumns: {
                    xs: 'repeat(6, 1fr)', lg: 'repeat(12, 1fr)',
                },
            }}>
                {languages.map((lan, i) => {
                    return <IconButton
                        key={i}
                        disabled={true}
                    >
                        {lan}
                    </IconButton>;
                })}
            </Box>
        </Box>
        <Divider/>
    </>)
}

export default Service;