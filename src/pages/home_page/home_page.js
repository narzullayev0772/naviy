import Header from "./components/header/header";
import About from "./components/about/about";
import Service from "./components/service/service";
import {Box, Divider} from "@mui/joy";
import {Apps} from "./components/apps/apps";
import {Resume} from "./components/resume/resume";
import {Footer} from "./components/footer/footer";

const HomePage = () => {
    return (<>
        <Header/>
        <Box sx={{
            paddingX: {
                xs: "2%", sm: "10%",
            }
        }}>

            <About/>
            <Divider/>
            <Service/>
            <Divider/>
            <Apps/>
            <Divider/>
            <Resume/>
            <Divider/>
            <Footer/>
        </Box>

    </>);
};

export default HomePage;
