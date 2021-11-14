import React from 'react';
import Grid from '@mui/material/Grid';
import Express from './Express';
import { Container, Typography } from '@mui/material';

const expresses = [
    {
        name: 'CC Camera Installation',
        img: 'https://i.ibb.co/sqGzYtZ/cctv-installation-resized.jpg',
        description: 'Video recordings or direct broadcasts of what is happening in your business, details here! A full end-to-end solution for the customer to monitor their premises and branches.'
    },
    {
        name: 'How to CC Camera Work',
        img: 'https://i.ibb.co/6HkNxPX/how-to-work.jpg',
        description: 'CCTV works by the camera or cameras taking a constant sequence of images that are then transmitted by cable or wirelessly to the recording device.'
    },
    {
        name: 'How To Recording Watch',
        img: 'https://i.ibb.co/hDfK4sy/Password-on-screen.jpg',
        description: 'That depends entirely on what type of camera you have and how you record it. Usually, you can connect a monitor to the recorder to see all videos and know how to look.'
    },
]

const OurExpress = () => {
    return (
        <Container sx={{ flexGrow: 1, mb: -5 }}>
            <Typography sx={{ fontWeight: 'medium', p: 4 }} style={{ fontWeight: 400 }} variant="h6" component="h6">
                OUR EXPRESS
            </Typography>
            <Typography sx={{ fontWeight: '550', pb: 4 }} style={{ color: 'rgba(7,7,25, 0.8)' }} variant="h4" component="h5">
                Video Surveillance Systems
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    expresses.map(express => <Express
                        key={express.name}
                        express={express}
                    ></Express>)
                }
            </Grid>
        </Container>
    );
};

export default OurExpress;