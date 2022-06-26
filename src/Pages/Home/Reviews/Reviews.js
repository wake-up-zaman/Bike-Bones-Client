import React, { useEffect, useState } from 'react';
import Review from './Review';
import './Review.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://desolate-stream-53633.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div className='my-16 review_main'>
            <section id='testimonials'>
                <div className='testimonial-heading'>
                    <h1>Customer Reviews</h1>
                </div>
            </section>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:ml-24 lg:mr-24 '>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;