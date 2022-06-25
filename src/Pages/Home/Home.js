import React from 'react';
import Summary from './Summary/Summary';
import Banner from './Banner/Banner';
import Parts from './Parts/Parts';
import Reviews from './Reviews/Reviews';
import { useQuery } from 'react-query';
import Extra1 from './Extra1/Extra1';
import Extra2 from './Extra2/Extra2';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Summary></Summary>
            <Extra1></Extra1>
            <Reviews></Reviews>
            <Extra2></Extra2>
        </div>
    );
};

export default Home;