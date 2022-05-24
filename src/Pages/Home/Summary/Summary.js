import React from 'react';
import './Summary.css';
import {FaChartLine, FaCommentAlt, FaCode, FaUserFriends } from "react-icons/fa";
const Summary = () => {
    return (
        <div>
            <div>
                <h2 className='text-center text-3xl font-bold mb-12'>Millions Business Trust Us</h2>
            </div>
            <div className='counter-up'>

                <div className='content'>
                    <div className='box'>
                        <div class='icon'><FaUserFriends /></div>
                        <div class='counter'>300+</div>
                        <div class='text'>Customers</div>
                    </div>
                    <div className='box'>
                        <div class='icon'><FaChartLine /></div>
                        <div class='counter'>150M+</div>
                        <div class='text'>Annual revenue</div>
                    </div>
                    <div className='box'>
                        <div class='icon'><FaCommentAlt /></div>
                        <div class='counter'>20K+</div>
                        <div class='text'>Reviews</div>
                    </div>
                    <div className='box'>
                        <div class='icon'><FaCode /></div>
                        <div class='counter'>100+</div>
                        <div class='text'>Tools</div>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default Summary;
