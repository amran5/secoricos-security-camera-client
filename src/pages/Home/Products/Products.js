import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Product from '../Product/Product';
import { Box } from '@mui/system';
import './Products.css';


const products = [
    {
        name: "Reolink Argus 3 Pro",
        img: "https://i.ibb.co/bJ2XvY2/Reolink-Argus.png",
        description: "We love the Reolink Argus 3 Pro because it performs on nearly the same level as Arlo Pro 4 for 70% of the price, making it an easy choice to top our rankings as the best wireless camera.",
        price: "$134.00"
    },
    {
        name: "Wyze Cam v3",
        img: "https://i.ibb.co/r0bm0sm/Wyze-Cam-v3.jpg",
        description: "The Wyze Cam v3 builds on the foundation of Wyze's original sleeper hit by introducing outdoor capabilities, a built-in siren, improved night vision, this is a good products",
        price: "$35.99"
    },
    {
        name: "Arlo Pro 4",
        img: "https://i.ibb.co/FKjrFrM/Arlo-Pro-4.jpg",
        description: "The Arlo Pro 4 offers compatibility with more smart home platforms than any other entry on our list. It works with Amazon Alexa, Google Assistant, Apple HomeKit, Samsung Smart things.",
        price: "$199.50"
    },
    {
        name: "Google Nest Cam",
        img: "https://i.ibb.co/hsy3wJt/Google-Nest-Cam-Battery.jpg",
        description: "The Google Nest Cam (Battery) is awesome when it comes to image, video, and sound quality. Plus, it fixes one of our biggest complaints about the Nest Cam IQ by opening up most of its smart.",
        price: "$179.99"
    },
    {
        name: "Ring Stick Up Cam Battery",
        img: "https://i.ibb.co/Jn9byNT/Ring-Stick-Up-Cam-Battery.jpg",
        description: "We love the Reolink Argus 3 Pro because it performs on nearly the same level as Arlo Pro 4 for 70% of the price, making it an easy choice to top our rankings as the best wireless camera.",
        price: "$99.99"
    },
    {
        name: "Amcrest 4MP UltraHD Indoor",
        img: "https://i.ibb.co/D8RLhHH/Amcrest-4-MP-Ultra-HD-Indoor.jpg",
        description: "At SafeWise, we’re Amcrest fans, and this wireless indoor security camera doesn’t disappoint. Its remote pan-and-tilt function, easy setupand variety of video storage options.",
        price: "$69.60"
    }
]
const Products = () => {
    return (
        <Box className="product-bg">
            <Container>
                <Typography sx={{ fontWeight: 'medium', p: 4 }} style={{ fontWeight: 400 }} variant="h6" component="h6">
                    OUR PRODUCTS
                </Typography>
                <Typography sx={{ fontWeight: '550', pb: 4 }} style={{ color: 'rgba(7,7,25, 0.8)' }} variant="h4" component="h5">
                    Product We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.map(product => <Product
                            key={product.name}
                            product={product}
                        ></Product>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Products;