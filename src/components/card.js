import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';

export default function AppCard(app) {
    return (<Card
        key={app.title}
        variant="plain"
        sx={{
            bgcolor: 'initial', p: 0,
        }}
    >
        <Box sx={{position: 'relative'}}>
            <AspectRatio ratio="4/3">
                <figure>
                    <img
                        src="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?auto=format&fit=crop&w=300"
                        srcSet="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?auto=format&fit=crop&w=300&dpr=2 2x"
                        loading="lazy"
                        alt="Yosemite by Casey Horner"
                    />
                </figure>
            </AspectRatio>
            <CardCover
                className="gradient-cover"
                sx={{
                    '&:hover, &:focus-within': {
                        opacity: 1,
                    },
                    opacity: 0,
                    transition: '0.1s ease-in',
                    background: 'linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)',
                }}
            >
                <div>
                    <Box
                        sx={{
                            p: 2, display: 'flex', alignItems: 'center', gap: 1.5, flexGrow: 1, alignSelf: 'flex-end',
                        }}
                    >
                        {app.used.map(((technology, i) => {
                            return <IconButton
                                key={i}
                                size="sm"
                                variant="solid"
                                color="neutral"
                                sx={{ml: 'auto', bgcolor: 'rgba(0 0 0 / 0.2)'}}
                            >
                                {technology}
                            </IconButton>
                        }))}
                    </Box>
                </div>
            </CardCover>
        </Box>
        <Box sx={{
            display: 'flex', justifyContent: "space-between", gap: 1, alignItems: 'center'
        }}>
            <Typography sx={{fontSize: 'md', fontWeight: 'md'}}>
                {app.title}
            </Typography>
            <IconButton
                variant={"soft"}
                sx={{
                    borderRadius: "xl"
                }}
            >
                {app.type}
            </IconButton>

        </Box>
    </Card>);
}