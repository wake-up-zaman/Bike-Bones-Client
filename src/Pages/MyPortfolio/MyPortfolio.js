import React from 'react';
import hadi from '../../Pages/Images/last 4.jpg'
import './MyPortfolio.css'
const MyPortfolio = () => {
    return (
        <div>
            <div className='title mb-16'>
                <div class="card  bg-base-100 shadow-xl ">
                    <figure class="px-10 pt-10">
                        <img src={hadi} alt="" class="rounded-xl title-img " />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 className='text-3xl font-bold'>Md Hadiuzzaman</h2>
                        <h3 className='text-2xl '>hadiuzzaman527@gmail.com</h3>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h2 className='mt-16 text-center text-3xl font-bold text-primary mb-8'>Educational Background</h2>
                    <div className=' grid grid-cols-1 lg:grid-cols-3 gap-5 lg:ml-8'>
                        <div class="card w-full-lg shadow-xl">
                            <div class="card-body bg-slate-400">
                                <h2 class="card-title text-2xl">Secondary School Certificate</h2>
                                <p className='text-xl border-3 rounded-lg bg-zinc-100'>Pirganj Govt. High School</p>
                                <h2 className='font-bold text-xl'>Group:Science</h2>
                                <p className='text-xl border-3 rounded-lg  '>GPA: 5.00</p>
                            </div>
                        </div>
                        <div class="card w-full-lg bg-base-100 shadow-xl">
                            <div class="card-body bg-slate-400">
                                <h2 class="card-title text-2xl">Higher Secondary Certificate</h2>
                                <p className='text-xl border-3 rounded-lg bg-zinc-100'>Cantonment Public School and College,Rangpur</p>
                                <h2 className='font-bold text-xl'>Group:Science</h2>
                                <p className='text-xl border-3 rounded-lg '>GPA: 5.00 </p>
                            </div>
                        </div>
                        <div class="card  w-full-lg bg-base-100 shadow-xl lg:mr-8">
                            <div class="card-body bg-slate-400">
                                <h2 class="card-title text-2xl">Bachelor of Science</h2>
                                <p className='text-xl border-3 rounded-lg bg-zinc-100'>Bangladesh University of Professionals</p>
                                <h2 className='font-bold text-xl'>Program: BSc in Information and Communication Engineering</h2>
                                <p className='text-xl border-3 rounded-lg  '>CGPA: 3.25</p>

                            </div>
                        </div>
                    </div>
                </div>
                <h2 className='text-3xl text-center font-bold mb-16 mt-16'>Skills</h2>
                <div className='skill'>

                    <div className=''>
                        <h3 className='text-xl font-bold'>HTML5</h3>
                        <input type="range" min="0" max="100" value="90" class="range range-primary " />
                    </div>
                    <div className=''>
                        <h3 className='text-xl  font-bold '>CSS3</h3>
                        <input type="range" min="0" max="100" value="90" class="range range-primary" />
                    </div>
                    <div className='mb-4'>
                        <h3 className='text-xl font-bold'>Bootstrap</h3>
                        <input type="range" min="0" max="100" value="80" class="range range-primary " />
                    </div>
                    <div className=' mb-4'>
                        <h3 className='text-xl font-bold'>Tailwind</h3>
                        <input type="range" min="0" max="100" value="80" class="range range-primary " />
                    </div>
                    <div className='mb-4'>
                        <h3 className='text-xl font-bold'>JavaScript</h3>
                        <input type="range" min="0" max="100" value="70" class="range range-primary" />
                    </div>
                    <div className=' mb-4'>
                        <h3 className='text-xl font-bold '>React.js</h3>
                        <input type="range" min="0" max="100" value="80" class="range range-primary " />
                    </div>
                    <div className='mb-4'>
                        <h3 className='text-xl font-bold'>Node.js</h3>
                        <input type="range" min="0" max="100" value="40" class="range range-primary " />
                    </div>
                    <div className=' mb-4'>
                        <h3 className=' text-xl font-bold '>Express.js</h3>
                        <input type="range" min="0" max="100" value="40" class="range range-primary " />
                    </div>
                    <div className=' mb-4'>
                        <h3 className='text-xl font-bold'>Firebase</h3>
                        <input type="range" min="0" max="100" value="60" class="range range-primary" />
                    </div>
                </div>
                <div>
                <div className='mb-16'>
                    <h2 className='mt-16 text-center text-3xl font-bold text-primary mb-8'>Projects</h2>
                    <div className=' grid grid-cols-1 lg:grid-cols-3 gap-5 lg:ml-8'>
                        <div class="card w-full-lg shadow-xl">
                            <div class="card-body bg-gradient-to-r from-secondary to-primary ">
                                <h2 class=" text-2xl text-center font-bold">Tech Review</h2>
                                <button class="btn btn-outline"><a href="https://glowing-jalebi-853180.netlify.app/">Visit Tech Review</a></button>
                            </div>
                        </div>
                        <div class="card w-full-lg bg-base-100 shadow-xl">
                            <div class="card-body bg-gradient-to-r from-cyan-500 to-blue-500">
                                <h2 class=" text-2xl text-center font-bold">Xplore Wild</h2>
                                <button class="btn btn-outline"> <a href="https://zaman-wild-life.web.app/">Visit Xplore Wild</a></button>
                            </div>
                        </div>
                        <div class="card  w-full-lg bg-base-100 shadow-xl lg:mr-8">
                            <div class="card-body bg-gradient-to-r from-secondary to-primary">
                                <h2 class=" text-2xl text-center font-bold">Rock Electronics</h2>
                                <button class="btn btn-outline"><a href="https://warehouse-management-33fdd.web.app/">Visit Rock Electronics</a></button>

                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;