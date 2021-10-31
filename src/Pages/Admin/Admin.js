import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './Admin.css'

const Admin = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        axios.post('https://shrieking-wizard-94110.herokuapp.com/flights', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })

    }
    return (
        <div className="add-service">
            <h1>add new service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("takeOff")} placeholder="Take Off" />
                <textarea {...register("lnading")} placeholder="Landing" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("image")} placeholder="image url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Admin;