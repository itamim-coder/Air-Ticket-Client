import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/iwan-shimko-tCp2K2sYpFg-unsplash.jpg';
import banner2 from '../../../images/john-mcarthur-X_MOr6oa4-k-unsplash.jpg';
import banner3 from '../../../images/josue-isai-ramos-figueroa-n2NBgIx3A28-unsplash.jpg';


const Banner = () => {
    return (
        <div className="">
<Carousel className="h-100">
  <Carousel.Item>
    <img
      className="d-block w-100 banner"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption  >
    <div>
    <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 banner"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 banner"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
       
    );
};

export default Banner;
