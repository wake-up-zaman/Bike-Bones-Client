import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import './MyProfile.css'
const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);

    const handleBooking = event => {
        event.preventDefault();
        const info= {
            email:event.target.email.value,
            education: event.target.education.value,
            location: event.target.location.value,
            phone:event.target.phone.value,
            linkedin:event.target.linkedin.value,
            bike:event.target.bike.value
        }

        fetch(`https://desolate-stream-53633.herokuapp.com/myProfile`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(result => {
                if(result){
                    toast.success("Information Added !");
                }
                else{
                    toast.error("Updating does not Successful !");
                }               
            });
        }
    return (
        <div>
            <div className='flex myProfile'>
                <div class='icon'><FaUserCircle /></div>
                <div>
                    <h2 className='text-2xl text-bold'>{user.displayName}</h2>
                    <h2 className='text-xl text-bold'>{user.email}</h2>
                </div>
            </div>
            <div className='lg:ml-48  mt-2 flex align-items-center'>

                <form onSubmit={handleBooking} className='profile review mt-2 form'>
                    <h2 className=' mb-4 text-3xl  text-primary text-center text-bold'>Complete/Update Profile</h2>
                    <label className="label">
                        <span className="label-text">Education</span>
                    </label>
                    <textarea type="text" name="education" className="input input-bordered w-full max-w-xs mb-2" />
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <textarea type="text" name="location" placeholder="location" className="input input-bordered w-full max-w-xs  mb-2" />
                    <label className="label">
                        <span className="label-text">Phone</span>
                    </label>
                    <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs  mb-2" />
                    <label className="label">
                    <span className="label-text">Email</span>
                </label>
                    <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs  mb-2" />
                    <label className="label">
                        <span className="label-text">LinkedIn Profile</span>
                    </label>
                    <textarea type="text" name="linkedin" placeholder="Your Linkedin link" className="input input-bordered w-full max-w-xs mb-2" />
                    <label className="label">
                        <span className="label-text">Bike Model</span>
                    </label>
                    <textarea type="text" name="bike" placeholder="Your bike model" className="input input-bordered w-full max-w-xs mb-2" />

                    <label className="label">
                        <span className="label-text"></span>
                    </label>
                    <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                </form>
            </div>

        </div>
    );
};

export default MyProfile;