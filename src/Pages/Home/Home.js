import React from 'react';
import Summary from './Summary/Summary';
import Banner from './Banner/Banner';
import Parts from './Parts/Parts';
import Reviews from './Reviews/Reviews';
import { useQuery } from 'react-query';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Summary></Summary>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;