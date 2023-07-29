import React from 'react';
import img1 from '../../../assets/car-login.png'
import img2 from '../../../assets/car-service.png'
import img3 from '../../../assets/car-s-b.png'

const Details2 = () => {
    return (
        <div className='w-full mb-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-3/4 justify-center items-center mx-auto'>
                <div>
                    <img src={img1} alt="" />
                </div>
                <div>
                    <img src={img2} alt="" />
                </div>
                <div >
                    <img src={img3} alt="" />
                </div>
            </div>
            <div className='mb-5'>
                <h1 className='text-3xl text-center'>Description  </h1>
                <ul className='list-disc w-3/4 my-5 mx-auto'>
                    <li>You can login and sign up with email password and google</li>
                    <li>User can search service by name </li>
                    <li>User can align the service with price high to low and low to high </li>
                    <li>User can book a service</li>
                    <li>User can see the book details</li>
                </ul>
                <h2 className='text-center'>That was all about my <span className='text-2xl  font-bold'>Car Doctor</span> </h2>
            </div>
        </div>
    );
};

export default Details2;