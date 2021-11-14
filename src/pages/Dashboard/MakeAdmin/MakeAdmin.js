import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleMakeAdmin = e => {
        const user = { email };
        fetch('https://calm-peak-97207.herokuapp.com/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        e.preventDefault();
    }
    return (
        <div>
            <h2>make a admin</h2>
            <form onSubmit={handleMakeAdmin}>
                <TextField
                    // id="standard-basic" 
                    label="email"
                    onBlur={handleOnBlur}
                    type="email"
                    variant="standard"
                />
            </form>
            <br />
            <Button type="submit" variant="contained">Make Admin</Button>
        </div>
    );
};

export default MakeAdmin;