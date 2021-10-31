import React, {useEffect, useState}  from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import  useAuth  from '../../contexts/useAuth'
import './Booking.css'
import Service from '../Service/Service';

const Booking = () => {

const {index} = Service;
    const {serviceId} = useParams();
    const [service, setService] = useState({});
  
 
    
    const handleAdd = (index) =>{
        // const datam = (service)
        console.log(index)
      
    }
        
  
  
   

        const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data =>{ 
        
        

       

        fetch('https://shrieking-wizard-94110.herokuapp.com/orders',{
            method: 'POST',
            headers:{
                'content-type':'application/json' 
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result)
        })
       
    };
  


    useEffect(()=>{
     fetch(`https://shrieking-wizard-94110.herokuapp.com/flights/${serviceId}`)
     .then(res => res.json())
     .then(data => setService(data));
    },[])


    
    return (
        <div className="row container m-5">
            <div className="col-lg-6">
                <img className="w-100" src={service.image} alt="" />
                <h2>{service.name}</h2>
            </div>
            <div className="col-lg-6">
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

<input defaultValue={user.displayName} {...register("name")} />
<fieldset disabled>
<input  defaultValue={service.name} {...register("order")} />
</fieldset>

<input defaultValue={user.email} {...register("email", { required: true })} />
{errors.email && <span className="error">This field is required</span>}

<input placeholder="Address" defaultValue="" {...register("address")} />
<input placeholder="City" defaultValue="" {...register("city")} />
<input placeholder="phone number" defaultValue="" {...register("phone")} />

<input onClick={()=>handleAdd(index)}  type="submit" />
</form>
                
            </div>
        </div>
    );
};

export default Booking;<h3>book</h3>