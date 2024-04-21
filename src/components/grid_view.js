import {CardContent, Sheet, styled, CardCover, Card, Typography, Box} from "@mui/joy";

const Item = styled(Sheet)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.level1 : '#fff', ...theme.typography['body-sm'],
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: 4,
    color: theme.vars.palette.text.secondary,
}));

export function GridView() {
    const defaultPath = "assets/img/pic.jpg";
    const sxForRight = {
        gridRow: {
            xs: "auto", lg: "1/span 2"
        }, gridColumn: {
            xs: "auto", lg: "3/span 1"
        }
    };
    const sxForLeft = {
        gridRow: {
            xs: "auto", lg: "3/span 2"
        }, gridColumn: {
            xs: "auto", lg: "1/span 1"
        }
    };
    return <Box
        sx={{
            display: "grid", gap: "10px", gridTemplateColumns: {
                xs: 'repeat(1, 1fr)', sm: 'repeat(3, 1fr)'
            },
        }}
    >
        {Array(10).fill(0).map((_, i) => {
            let sx = {};
            if (i === 2) {
                sx = sxForRight;
            } else if (i === 5) {
                sx = sxForLeft;
            }
            return <Item
                key={i}
                sx={sx}
            >
                <Card component="li" sx={{flexGrow: 1}}>
                    <CardCover>
                        <img
                            src={defaultPath}
                            srcSet={defaultPath}
                            loading="lazy"
                            alt=""
                        />
                    </CardCover>
                    <CardContent>
                        <Typography
                            level="body-lg"
                            fontWeight="lg"
                            textColor="#fff"
                            mt={{xs: 12, sm: 18}}
                        >
                            Image
                        </Typography>
                    </CardContent>
                </Card>
            </Item>
        })}
    </Box>
}