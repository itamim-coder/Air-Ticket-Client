import React from 'react';
import Team from '../../../Team/Team';
import ExtraService from '../../ExtraService/ExtraService';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2 className="text-center m-5">Service</h2>
            <Services></Services>
            <h2 className="text-center m-5">Our Extra Services</h2>
            <ExtraService></ExtraService>
            <h2 className="text-center m-5">Our Team</h2>
            <Team></Team>
        </div>
    );
};

export default Home;