import React from 'react';
import logo from '../assets/logo.png'
import moment from 'moment';


const Header = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-2 py-5'>
            <div>
                <img src={logo} alt="logo" className='w-64 md:w-96' />
            </div>

            <p className='text-gray-500 text-xs md:text-base'>Journalism Without Fear or Favour</p>
            <p className='text-gray-500 text-xs md:text-base'> {moment().format('dddd, MMMM Do, YYYY')} </p>

        </div>
    );
};

export default Header;