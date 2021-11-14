import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://calm-peak-97207.herokuapp.com/allProducts', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    };
    return (
        <div className="product-form">
            <h2>Add Product Here</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="name" />
                <textarea {...register("description")} placeholder="description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="img url" />
                <input style={{ backgroundColor: "#F5B041", color: "white", borderRadius: "5px", marginRight: "5px", border: 0, padding: "4px 0" }} type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;