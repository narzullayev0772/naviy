import {Card, Typography, Box} from "@mui/joy";
import AspectRatio from "@mui/joy/AspectRatio";


export function GridView({apps}) {
    return <Box
        sx={{
            display: "grid", gap: "10px", gridTemplateColumns: {
                xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)',
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
        variant="plain"
    >
        <Box sx={{position: 'relative'}}>
            <AspectRatio ratio="4/3">
                <figure>
                    <img
                        src={app.img}
                        srcSet={app.img}
                        loading="lazy"
                        alt={app.title}
                        style={{
                            objectFit: 'cover', objectPosition: 'left top',
                        }}
                    />
                </figure>
            </AspectRatio>
        </Box>
        <Box sx={{display: 'flex', gap: 1, alignItems: 'center'}}>
            <Typography sx={{fontSize: 'md', fontWeight: 'md'}}
                        startDecorator={app.type}
            >
                {app.title}
            </Typography>

        </Box>
    </Card>
}