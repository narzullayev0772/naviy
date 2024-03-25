import {Link, useLocation} from "react-router-dom";
import {navigations} from "../../../../utils/navigations";
import {Box, Typography} from "@mui/joy";

export const NavigationBar = () => {
    const {hash} = useLocation();
    return (<Box
        sx={{
            display: {
                xs: "none",
                md: "flex",
            }, gap: "40px",
        }}
    >
        {navigations.map((e, i) => {
            const isCurrentPath = e.path === hash;
            return (<Link
                to={e.path}
                key={i}
                style={{
                    paddingBottom: isCurrentPath ? "5px" : 0,
                    borderBottom: isCurrentPath ? "4px dotted #0088cc" : "none",
                    transition: "all 0.3s",
                    textDecoration: "none",
                }}
            >
                <Typography>{e.label.toUpperCase()}</Typography>
            </Link>);
        })}
    </Box>);
};
