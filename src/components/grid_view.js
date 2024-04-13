import { Sheet, styled} from "@mui/joy";
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
            display: "grid",
            gap:"10px",
            gridTemplateAreas:
                "x x y" +
                "x x y"
        }}
    >
        <Item>1</Item>
        <Item>1</Item>
        <Item>1</Item>
        <Item>1</Item>
        <Item>1</Item>
    </Box>
}