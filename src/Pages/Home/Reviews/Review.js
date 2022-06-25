import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import './Review.css';
import { FaShippingFast, FaHandshake, FaStar } from "react-icons/fa";
const Review = ({ review }) => {
    return (
        <>
            <div className='testimonial-box-container'>
                <div className='testimonial-box'>
                    <div className='box-top'>
                        <div className='profile2'>
                            <div className='profile-img'>
                                <FaUserCircle className='img'></FaUserCircle>
                            </div>
                            <div className='name-user'>
                                <strong>{review.name}</strong>
                                <span>{review.email}</span>
                            </div>



                        </div>


                    </div>
                    <div className='reviews'>
                            {(review.rating === '1' || review.rating === 1) && <div class="rating  ml-16 mt-8 lg:ml-20 lg:mt-6">
                                <p className='block mr-2'><FaStar></FaStar></p>
                                <p className='faka mr-2'><FaStar></FaStar></p>
                                <p className='faka mr-2'><FaStar></FaStar></p>
                                <p className='faka mr-2'><FaStar></FaStar></p>
                                <p className='faka mr-2'><FaStar></FaStar></p>
                            </div>}
                            {(review.rating === '2' || review.rating === 2) && <div class="rating ml-16 mt-8 lg:ml-24 lg:mt-6">
                                <p className='block mr-2'><FaStar></FaStar></p>
                                <p className='block mr-2'><FaStar></FaStar></p>
                                <p className='block mr-2'><FaStar></FaStar></p>
                                <p className='faka mr-2'><FaStar></FaStar></p>
                                <p className='faka mr-2'><FaStar></FaStar></p>


                            </div>}
                            {(review.rating === '3' || review.rating === 3) && <div class="rating ml-16 mt-8 lg:ml-24 lg:mt-6">
                                <p className='block mr-2'><FaStar></FaStar></p>
                                <p className='block mr-2'><FaStar></FaStar></p>
                                <p className='block mr-2'><FaStar></FaStar></p>
                                <p className='faka mr-2'><FaStar></FaStar></p>
                                <p className='faka mr-2'><FaStar></FaStar></p>
                            </div>}
                            {(review.rating === '4' || review.rating === 4) && <div class="rating ml-16 mt-8  lg:ml-24 lg:mt-6">
                                <p className='block mr-2'><FaStar></FaStar></p>
                                <p className='block mr-2'><FaStar></FaStar></p>
                                <p className='block mr-2'><FaStar></FaStar></p>
                                <p className='block mr-2'><FaStar></FaStar></p>
                                <p className='faka mr-2'><FaStar></FaStar></p>
                            </div>}
                            {(review.rating === '5' || review.rating === 5) && <div class="rating ml-16 mt-8 lg:ml-20 lg:mt-6">
                                <p className='block mr-2'><FaStar></FaStar></p>
                                <p className='block mr-2'><FaStar></FaStar></p>
                                <p className='block mr-2'><FaStar></FaStar></p>
                                <p className='block mr-2'><FaStar></FaStar></p>
                                <p className='block mr-2'><FaStar></FaStar></p>
                                {/* <input type="radio" name="rating-1" class="mask mask-star" /> */}
                            </div>}

                        </div>
                    <div className='client-comment'>
                            <p>{review.review.slice(0,200)}...</p>
                        </div>
                </div>

            </div>



        </>
    );
};

export default Review;