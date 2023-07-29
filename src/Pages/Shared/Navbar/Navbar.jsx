import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

    const location = useLocation();

    const navbar = <>

        <li><Link to='/'>Home</Link></li>
        {
            location.pathname === '/' && <>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
            </>
        }
        <li><a href="#contact">Contact</a></li>
        <li><Link to='/blogs'>Blogs</Link></li>
    </>
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu font-medium text-xl menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#15726f] rounded-box w-52">
                        {navbar}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case font-bold text-3xl">Shakil Khan</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal  font-medium text-xl px-1">
                    {navbar}
                </ul>
            </div>
            <div className="navbar-end mr-5">
                <a className="btn btn-ghost bg-[#226d6d] font-semibold text-white">Resume</a>
            </div>
        </div>
    );
};

export default Navbar;