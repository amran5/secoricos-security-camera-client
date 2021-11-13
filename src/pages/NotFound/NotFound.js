import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/notFound.png';

const NotFound = () => {
    return (
        <div className="mt-3">
            <div>
                <img style={{ width: "100%", height: "500px" }} src={notFound} alt="" />
            </div>
            <Link style={{ textDecoration: "none" }} to="/">
                <Button style={{ backgroundColor: "#F5B041" }} variant="contained">back home</Button>
            </Link>
        </div>
    );
};

export default NotFound;