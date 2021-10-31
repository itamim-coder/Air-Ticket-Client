import React from 'react';
import './Extraservice.css'
import img1 from '../../images/offers03.jpg'
import img2 from '../../images/offers01.jpg'
import img3 from '../../images/offers04.jpg'


const ExtraService = () => {
    return (
<div className=" extraservice m-5">
<div class="card ">
 
 <img src={img1} alt="" />
  <div class="container">
    <h4><b>Book Hotel</b></h4> 
    <p>Architect & Engineer</p> 
  </div>
</div>
<div class="card ">
 
 <img src={img2} alt="" />
  <div class="container">
    <h4><b>Book Flights</b></h4> 
    <p>Architect & Engineer</p> 
  </div>
</div>
<div class="card ">
 
 <img src={img3} alt="" />
  <div class="container">
    <h4><b>Hire Cars</b></h4> 
    <p>Architect & Engineer</p> 
  </div>
</div>
</div>
    );
};

export default ExtraService;