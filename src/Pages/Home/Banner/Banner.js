import React from 'react';
import banner from '../../Images/banner.jpg'
import ban6 from '../../Images/ban6.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className="hero bg-base-200">
            <div>
                <img className='banner-img' src={banner} alt='' />
                <img className='banner-img-mobile' src={ban6} alt='' />
            </div>
            <div className='banner-text'>
                {/* <h2 className='banner-text-1'>Bike Bones Manufacturer</h2> */}
                <h2 className='banner-text-2'>Custom Your MotorCycle with Us</h2>

            </div>
        </div>
    );
};

export default Banner;