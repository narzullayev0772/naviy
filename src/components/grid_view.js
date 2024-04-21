import {Sheet, styled} from "@mui/joy";
import Box from "@mui/joy/Box";

const Item = styled(Sheet)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.level1 : '#fff', ...theme.typography['body-sm'],
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: 4,
    color: theme.vars.palette.text.secondary,
}));

export function GridView() {
    return <Box
        sx={{
            display: "grid", gap: "10px", gridTemplateColumns: "repeat(3,1fr)",
        }}
    >
        <Item>1</Item>
        <Item>2</Item>
        <Item
            sx={{
                gridRow: "1/span 2", gridColumn: "3/span 1"
            }}
        >3</Item>
        <Item>4</Item>
        <Item>5</Item>
        <Item sx={{
            gridRow: "3/span 2", gridColumn: "1/span 1"
        }}>6</Item>
        <Item>7</Item>
        <Item>8</Item>
        <Item>9</Item>
        <Item>10</Item>
    </Box>
}