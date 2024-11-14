import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import userIcon from '../assets/user.png';


const Navbar = () => {
    return (
        <div className='flex items-center justify-between max-w-screen-xl mx-auto my-2'>
            
            {/* empty div */}
            <div></div>

            {/* navlink */}
            <div className='flex items-center gap-5 text-xs md:text-base'>
                <NavLink to='/'>Home</NavLink>
                <NavLink>About</NavLink>
                <NavLink>Career</NavLink>
            </div>

            {/* login */}
            <div className='flex  items-center gap-2 mx-3 md:mx-0'>
                <img src={userIcon} alt="user" className='w-10' />
                <Link to='/auth/login' className='btn text-xs md:text-base bg-[#403F3F] text-white md:px-8 rounded-none'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;