import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service,index}) => {
    const {_id, name, image, takeOff, lnading} = service;
    const handleAddToCart = (index) => {
        console.log(index)
    }
    return (
        
        <div>
           
            <div className="service">
            <img src={image} alt=""  />
            <h3>{name}</h3>
            <h6>Take Off : {takeOff}</h6>
            <h6>Landing : {lnading}</h6>
            <Link to={`/booking/${_id}`}>
            <button className="buy-btn" onClick={()=>handleAddToCart(index)}> Buy Ticket</button>
            </Link>
            

            </div>
            
        </div>
    );
};

export default Service;