import React from 'react';
import './Extra2.css'
const Extra2 = () => {
    return (
        <div className='extra2-main'>
             <div className='extra2-banner'>
                 <h2 className='text-3xl text-center COLOR1'>More Products Coming Soon</h2>
                 <h2 className='text-3xl text-center'>News Letter</h2>
                 
             </div>
             <div className='extra-form'>
             <input className='mb-3 input-form' type='email' name='email' placeholder='                           Enter Your Email' required />
             
             </div>
             <div className='extra-form2'>
             <button className='text-xl text-center COLOR3'>Get in Touch !</button>
             </div>
            
             
        </div>
    );
};

export default Extra2;