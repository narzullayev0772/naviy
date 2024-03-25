import {Box, Card} from "@mui/joy";
import {Link} from "react-router-dom";
import {links} from "../../../../utils/links";

const Links = () => {
    return (<Box
        sx={{
            display: "flex", gap: "10px",
        }}
    >
        {links.map((e, i) => {
            return (<Link to={e.url} target={"_blank"} key={i}>
                <Card size={"sm"}>
                    {e.icon}
                </Card>
            </Link>);
        })}
    </Box>);
};

export default Links;
