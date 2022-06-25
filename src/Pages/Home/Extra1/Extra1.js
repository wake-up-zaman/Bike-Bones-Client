import React from 'react';
import './Extra1.css';
import {FaShippingFast,FaHandshake,FaStar} from "react-icons/fa";
const Extra1 = () => {
    return (
        <div className='extra mb-16'>
            <div>
                <h2 className='text-center mt-12 mb-4 text-4xl text-dark text-bold'>Why Choose Us?</h2>
            </div>
            <div className='extra-text text-center'>
                <p className='extra_text'>We’ve been Selling Genuine Motorcycle Parts and Accessories for the last 3 years. We present The Best Shopping site to Buy Motorcycle Parts online in Bangladesh. If you  choose  our  website for Buy Motorcycle Parts you not mistaken, and we always treat customers with respect.</p>
            </div>
            <div className='flex mb-8 extra-below'>
                <div className='extra-below1'>
                    <p className='extra-logo'><FaShippingFast/></p>
                    <h2 className='text-3xl text-center'>Fast Shipping</h2>
                </div>
                <div className='extra-below2'>
                    <p className='extra-logo'><FaHandshake></FaHandshake></p>
                    <h2 className='text-3xl text-center'>Outstanding Support</h2>
                </div>
                <div className='extra-below3'>
                    <p className='extra-logo'><FaStar></FaStar></p>
                    <h2 className='text-3xl text-center'>Our Reputation</h2>
                </div>
            </div>
        </div>
    );
};

export default Extra1;