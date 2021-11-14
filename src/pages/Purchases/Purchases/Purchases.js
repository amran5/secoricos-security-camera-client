import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Purchases = () => {
    const { allProductId } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`https://calm-peak-97207.herokuapp.com/allProducts/${allProductId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);
    return (
        <div>
            <h2>{product._id}</h2>
        </div>
    );
};

export default Purchases;