import React from 'react';
import img1 from '../../../assets/bistro-b.png'
import img2 from '../../../assets/bistro-baaa.png'
import img3 from '../../../assets/bistro-bu.png'

const Details = () => {
    return (
        <div className='w-full'>
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
                    <li>There will be no navbar and footer in the login and sign up page</li>
                    <li>You can login and sign up with email password and google</li>
                    <li>In the home page navbar are fixed</li>
                    <li>In the menu section user can add food in the cart if user is not login he will be directed to the login page</li>
                    <li>In the dashboard section, there will be 2 types of dashboard will show Adminhome and Userhome</li>
                    <li>User can see his added food and he can payment with his card</li>
                    <li>Admin Can see his dashboard: All users,He can add an item ,He can make anyone admin or remove any user</li>
                </ul>
                <h2 className='text-center'>That was all about my <span className='text-2xl  font-bold'>Bistro Boss Restaurent</span> </h2>
            </div>
        </div>
    );
};

export default Details;