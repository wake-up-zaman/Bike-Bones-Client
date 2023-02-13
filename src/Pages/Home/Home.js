import React from 'react';
import Summary from './Summary/Summary';
import Banner from './Banner/Banner';
import Parts from './Parts/Parts';
import Reviews from './Reviews/Reviews';
import { useQuery } from 'react-query';
import Extra1 from './Extra1/Extra1';
import Extra2 from './Extra2/Extra2';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <Banner></Banner>
            <div className='text-center '>
                <h3 className='text-accent text-3xl p-8 font-bold uppercase'>Computer Parts</h3>
            </div>
            <Parts></Parts>
            <Summary></Summary>
            <Extra1></Extra1>
            <Extra2></Extra2>
            <section id='testimonials'>
                <div className='testimonial-heading'>
                    <h1>Customer Reviews</h1>
                </div>
            </section>
            <Reviews></Reviews>

        </div>
    );
};

export default Home;