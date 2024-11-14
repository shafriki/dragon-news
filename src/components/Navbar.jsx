import React from 'react';
import { NavLink } from 'react-router-dom';
import userIcon from '../assets/user.png';


const Navbar = () => {
    return (
        <div className='flex items-center justify-between max-w-screen-xl mx-auto my-2'>
            
            {/* empty div */}
            <div></div>

            {/* navlink */}
            <div className='flex items-center gap-5'>
                <NavLink>Home</NavLink>
                <NavLink>About</NavLink>
                <NavLink>Career</NavLink>
            </div>

            {/* login */}
            <div className='flex  items-center gap-2'>
                <img src={userIcon} alt="user" className='w-10' />
                <button className='btn bg-[#403F3F] text-white px-8 rounded-none'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;