import {Box} from "@mui/joy";
import AppCard from "../../components/card";
import Header from "../home_page/components/header/header";

export default function DetailPage() {
    const cards = [1, 2, 3, 4, 5, 6, 7];
    return (
        <>
            <Header/>
            <Box
                display={"grid"}
                gridTemplateColumns={"repeat(auto-fill, minmax(320px, 1fr))"}
                gap={4}>
                {cards.map((e, _) => {
                    return AppCard(e);
                })}
            </Box>
        </>
    );
}
