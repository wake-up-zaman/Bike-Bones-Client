import React from 'react';
import notFound from '../../Images/pageNotFound.jpg'
import './PageNotFound.css'
const PageNotFound = () => {
    return (
        <div className='notFound'>
            <img className='img-page' src={notFound} alt=''/>
        </div>
    );
};

export default PageNotFound;