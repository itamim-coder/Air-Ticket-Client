import React from 'react';
import './Team.css';
import img1 from '../images/agent-1.jpg'
import img2 from '../images/agent-2.jpg'
import img3 from '../images/agent-3.jpg'
import img4 from '../images/agent-4.jpg'

const Team = () => {
    return (
        <div className="team m-5">
            
<div class="flip-card ">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={img1} alt="" />
    </div>
    <div class="flip-card-back">
      <h1>Mikel</h1> 
      <p>CEO</p> 
     
    </div>
  </div>
</div>
<div class="flip-card ">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={img2} alt="" />
    </div>
    <div class="flip-card-back">
      <h1>John Jha</h1> 
      <p>Travel Agent</p> 
     
    </div>
  </div>
</div>
<div class="flip-card ">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={img3} alt="" />
    </div>
    <div class="flip-card-back">
      <h1>Doe</h1> 
      <p>Travel Agent</p> 
     
    </div>
  </div>
</div>
<div class="flip-card ">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={img4} alt="" />
    </div>
    <div class="flip-card-back">
      <h1>Hussy</h1> 
      <p>Travel Driver</p> 
      
    </div>
  </div>
</div>

        </div>
    );
};

export default Team;