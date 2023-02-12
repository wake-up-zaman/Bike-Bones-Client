import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './AddReview.css'


const AddReview = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleBooking = event => {
        event.preventDefault();
        const review = {
            email: user.email,
            name: user.displayName,
            rating: event.target.rating.value,
            review: event.target.description.value,
        }

        fetch('https://bike-bones.onrender.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    toast.success("Update Review Successful !");
                }
                else {
                    toast.error("Updating does not Successful !");
                }
            });
    }
    return (
        <div>
            {/* <div>
                <h2 className='text-3xl text-bold lg:ml-72 mt-5'>Add Review Here</h2>
            </div> */}
            <div className='lg:ml-48 mt-4 flex  align-items-center'>

                <form onSubmit={handleBooking} className=' review mt-3 form'>
                    <h2 className=' mb-8 text-3xl text-center text-bold'>Your Valuable Comments</h2>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs mb-2" />
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs  mb-2" />
                    <label className="label">
                        <span className="label-text">Rating   ( Max Star 5)</span>
                    </label>
                    <input className='mb-3 border-2 rounded-lg input-quantity h-12' type='number' name='rating' placeholder='   Rate the item' required />
                    <label className="label">
                        <span className="label-text">Review </span>
                    </label>
                    <textarea type="text" name="description" placeholder="Add your review" className="input input-bordered w-full max-w-xs inputField-des  mb-2" />
                    <label className="label">
                        <span className="label-text"></span>
                    </label>
                    <input type="submit" value="Add" className="btn btn-secondary w-full max-w-xs" />
                </form>
            </div>
        </div>

    );
};

export default AddReview;