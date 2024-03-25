import {Box, Button, IconButton, useColorScheme} from "@mui/joy";
import {AppLogo} from "./app_logo";
import {NavigationBar} from "./navigationbar";
import {DarkMode, LightMode} from "@mui/icons-material";

const Header = () => {
    const {mode, setMode} = useColorScheme();
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                position: "sticky",
                top: 0,
                backdropFilter: "blur(10px)",
                zIndex: 100,
                paddingX: {
                    xs: "5%",
                    sm: "10%",
                },
            }}
        >
            <AppLogo/>
            <NavigationBar/>
            <Box
                sx={{
                    display: "flex",
                    gap: "20px",
                }}
            >
                <IconButton
                    size={"sm"}
                    onClick={() => {
                        setMode(mode === "light" ? "dark" : "light");
                    }}
                >
                    {mode === "light" ? <LightMode/> : <DarkMode/>}
                </IconButton>
                <Button
                    size={"sm"}
                    sx={{
                        borderRadius: "20px",
                    }}
                >
                    Download CV
                </Button>
            </Box>
        </Box>
    );
};

export default Header;
