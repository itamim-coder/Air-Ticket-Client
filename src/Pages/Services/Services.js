import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('https://shrieking-wizard-94110.herokuapp.com/flights')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="service-container container">
           
           {
               services.map((service, index) => <Service
               key={service.id}
               service ={service}
               ></Service> )
           }
        </div>
    );
};

export default Services;