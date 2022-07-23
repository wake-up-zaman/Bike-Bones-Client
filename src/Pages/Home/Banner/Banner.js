import React from 'react';
// import banner from '../../Images/banner.png'
import banner from '../../Images/ba5.jpeg'
import ban6 from '../../Images/ban6.jpg'
import down from '../../Images/download.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-back">
            <div>
                <img className='banner-img' src={banner} alt='' />
                <img className='banner-img-mobile' src={banner} alt='' />
            </div>
            <div className='banner-text'>
                {/* <h2 className='banner-text-1'>Bike Bones Manufacturer</h2> */}
                {/* <p className='banner-text-21'>40 years of experience we provide services</p> */}
                <h2 className='banner-text-2'>Industry A variety of high<br/> quality bike products </h2>
                <div class="form-control bike">
                    <div class="input-group">
                        <input type="text" placeholder="Search your desired Parts" class="input lg:w-72 input-bordered" />
                        <button class="btn btn-square h-12 w-16">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;