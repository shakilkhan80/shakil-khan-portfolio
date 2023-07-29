import React from 'react';
import imgbistro from '../../../assets/banner.jpg'
import imgnews from '../../../assets/news.jpeg'
import imgcar from '../../../assets/2.jpg'
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div id='projects' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-20 mr-16 '>
            <div className="card w-96 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={imgbistro} className="rounded-xl" />
                </figure>
                <div className="card-body my-5">
                    <h2 className="card-title">Bistro Boss Restaurant</h2>
                    <ul className='text-start list-disc ml-5'>
                        <li>You can payment</li>
                        <li>User and Admin DashBoard</li>
                        <li>JWT token check</li>
                    </ul>
                    <div className="card-actions mt-14 flex justify-between">
                        <div>
                            <a href="https://bistro-boss-23ef8.web.app/"> <button className="btn shadow-2xl border-none text-white bg-[#378c86] ">Visit Website </button></a>
                        </div>
                        <div>
                            <Link to='/details'><button className="btn shadow-2xl border-none text-white bg-[#23514e] ">See Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card w-96 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={imgcar} className="rounded-xl" />
                </figure>
                <div className="card-body  my-5 text-center">
                    <h2 className="card-title">Car Doctors</h2>
                    <ul className='text-start list-disc ml-5'>
                        <li>Search Orders</li>
                        <li>Private Route</li>
                        <li>Login Sign Up</li>
                    </ul>
                    <div className="card-actions mt-7 flex justify-between">
                        <div>
                            <a href="https://cars-doctors-6387a.web.app/"> <button className="btn shadow-2xl border-none text-white bg-[#378c86] ">Visit Website </button></a>
                        </div>
                        <div>
                            <Link to='/details2'><button className="btn shadow-2xl border-none text-white bg-[#23514e] ">See Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card w-96  shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={imgnews} className="rounded-xl" />
                </figure>
                <div className="card-body  text-center">
                    <h2 className="card-title">The Dragon News</h2>
                    <ul className='text-start list-disc ml-5'>
                        <li>Private Route</li>
                        <li>Ratings </li>
                        <li>Different Data search</li>
                    </ul>
                    <div className="card-actions mt-10 flex justify-between">
                        <div>
                            <a href="https://the-news-dragon-b00c9.web.app/"> <button className="btn shadow-2xl border-none text-white bg-[#378c86] ">Visit Website </button></a>
                        </div>
                        <div>
                            <Link to='/details3'><button className="btn shadow-2xl border-none text-white bg-[#23514e] ">See Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;