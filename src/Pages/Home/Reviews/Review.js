import React from 'react';
import {FaUserCircle } from "react-icons/fa";
import './Review.css';
const Review = ({review}) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl mb-8">
            <div class="card-body">
                <h2 class="card-title"> </h2>
                <div className='flex '>
                <div class='icon2'><FaUserCircle /></div>
                <h2 className='text-2xl text-bold'>{review.name}</h2>
                </div>
                <p>{review.review}</p>
                <p className='text-center text-xl text-bold'>Rating: {review.rating}</p>
            </div>
        </div>
    );
};

export default Review;