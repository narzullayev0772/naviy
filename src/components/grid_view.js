import {Box, Card, CardContent, Chip, IconButton, Typography} from "@mui/joy";
import AspectRatio from "@mui/joy/AspectRatio";
import {OpenInNew} from "@mui/icons-material";


export function GridView({apps}) {
    return <Box
        sx={{
            display: "grid", gap: "16px", gridTemplateColumns: {
                xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)',
            },
        }}
    >
        {apps.map((app, i) => {
            return <CardComponent app={app} key={i}/>;
        })}
    </Box>
}

const CardComponent = ({app}) => {
    return <Card
        variant="outlined"
        sx={{
            height: "100%", transition: "transform 0.2s, box-shadow 0.2s", "&:hover": {
                transform: "translateY(-4px)", boxShadow: "lg",
            },
        }}
    >
        <AspectRatio ratio="16/9" sx={{borderRadius: "sm"}}>
            {app.img ? <img
                src={app.img}
                loading="lazy"
                alt={app.title}
                style={{
                    objectFit: 'cover', objectPosition: 'left top',
                }}
            /> : <Box sx={{
                background: "linear-gradient(135deg, #0088cc 0%, #6a3de8 100%)",
                color: "#fff",
                fontSize: "56px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
                {app.type}
            </Box>}
        </AspectRatio>
        <CardContent sx={{gap: "8px"}}>
            <Box sx={{display: 'flex', justifyContent: "space-between", alignItems: 'center', gap: 1}}>
                <Typography level={"title-lg"} startDecorator={app.type}>
                    {app.title}
                </Typography>
                {app.url && <IconButton
                    component={"a"}
                    href={app.url}
                    target={"_blank"}
                    rel={"noreferrer"}
                    size={"sm"}
                    variant={"soft"}
                    aria-label={`Open ${app.title}`}
                >
                    <OpenInNew/>
                </IconButton>}
            </Box>
            <Typography level={"body-xs"} color={"primary"}>
                {app.caption} · {app.year}
            </Typography>
            <Typography level={"body-sm"}>{app.description}</Typography>
            <Box sx={{display: "flex", gap: "12px", fontSize: "20px", mt: "auto", pt: "8px", opacity: 0.8}}>
                {app.stack.map((technology, i) => <span key={i}>{technology}</span>)}
            </Box>
        </CardContent>
    </Card>
}

export function ChipList({items}) {
    return <Box sx={{display: "flex", flexWrap: "wrap", gap: "8px"}}>
        {items.map(item => <Chip key={item} variant={"soft"}>{item}</Chip>)}
    </Box>
}
