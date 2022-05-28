import React from 'react';
import {FaUserCircle } from "react-icons/fa";
import './Review.css';
import {FaShippingFast,FaHandshake,FaStar} from "react-icons/fa";
const Review = ({review}) => {
    return (
        <div class="card w-96 review shadow-xl mb-8 ">
            <div class="">
                <h2 class="card-title"> </h2>
                <div className=''>
                <div class='icon2'><FaUserCircle /></div>
                <h2 className='text-2xl text-bold text-center mb-8'>{review.name}</h2>
                </div>
                <p className='text-center des'>{review.review}</p>
                {(review.rating==='1' || review.rating===1) && <div class="rating  ml-16 mt-8 lg:ml-20 lg:mt-6">
                    <p className='block mr-2'><FaStar></FaStar></p>
                    <p className='faka mr-2'><FaStar></FaStar></p>
                    <p className='faka mr-2'><FaStar></FaStar></p>
                    <p className='faka mr-2'><FaStar></FaStar></p>
                    <p className='faka mr-2'><FaStar></FaStar></p>
                </div>}
                {(review.rating==='2' || review.rating===2) && <div class="rating ml-16 mt-8 lg:ml-24 lg:mt-6">
                <p className='block mr-2'><FaStar></FaStar></p>
                    <p className='block mr-2'><FaStar></FaStar></p>
                    <p className='block mr-2'><FaStar></FaStar></p>
                    <p className='faka mr-2'><FaStar></FaStar></p>
                    <p className='faka mr-2'><FaStar></FaStar></p>


                </div>}
                {(review.rating==='3' || review.rating===3) && <div class="rating ml-16 mt-8 lg:ml-24 lg:mt-6">
                    <p className='block mr-2'><FaStar></FaStar></p>
                    <p className='block mr-2'><FaStar></FaStar></p>
                    <p className='block mr-2'><FaStar></FaStar></p>
                    <p className='faka mr-2'><FaStar></FaStar></p>
                    <p className='faka mr-2'><FaStar></FaStar></p>
                </div>}
                {(review.rating==='4' || review.rating===4) && <div class="rating ml-16 mt-8  lg:ml-24 lg:mt-6">
                    <p className='block mr-2'><FaStar></FaStar></p>
                    <p className='block mr-2'><FaStar></FaStar></p>
                    <p className='block mr-2'><FaStar></FaStar></p>
                    <p className='block mr-2'><FaStar></FaStar></p>
                    <p className='faka mr-2'><FaStar></FaStar></p>
                </div>}
                {(review.rating==='5' || review.rating===5) && <div class="rating ml-16 mt-8 lg:ml-20 lg:mt-6">
                <p className='block mr-2'><FaStar></FaStar></p>
                    <p className='block mr-2'><FaStar></FaStar></p>
                    <p className='block mr-2'><FaStar></FaStar></p>
                    <p className='block mr-2'><FaStar></FaStar></p>
                    <p className='block mr-2'><FaStar></FaStar></p>
                    {/* <input type="radio" name="rating-1" class="mask mask-star" /> */}
                </div>}
            </div>
        </div>
    );
};

export default Review;