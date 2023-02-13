import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import Loading2 from '../../Shared/Loading/Loading2';
import Review from './Review';
import './Review.css'

const Reviews = () => {
    // const [reviews, setReviews] = useState([]);
    // useEffect(() => {
    //     fetch('https://bike-bones.onrender.com/reviews')
    //         .then(res => res.json())
    //         .then(data => setReviews(data));
    // }, [])

    const {
        data: reviews,
        isLoading,
        refetch,
      } = useQuery("reviews", () =>
        fetch(`https://bike-bones.onrender.com/reviews`).then((res) =>
          res.json()
        )
      );
    
      if (isLoading) {
        return <Loading2></Loading2>;
      }
    return (
        <div className='review_main'>

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