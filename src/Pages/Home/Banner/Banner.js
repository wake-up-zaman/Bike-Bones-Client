import React from 'react';
import banner from '../../Images/banner.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className="hero bg-base-200">
            <div>
                <img className='banner-img' src={banner} alt=''/>
            </div>
            <div className='banner-text'>
                {/* <h2 className='banner-text-1'>Bike Bones Manufacturer</h2> */}
                <h2 className='banner-text-2'>Custom Your MotorCycle with Us</h2>
                <h2 className='banner-text-3'>We Provide the high quality Parts</h2>
            </div>
        </div>
    );
};

export default Banner;