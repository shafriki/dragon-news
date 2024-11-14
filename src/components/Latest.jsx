import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const Latest = () => {
    return (
        <div className='flex items-center max-w-screen-xl mx-auto gap-2 bg-base-200 p-2 text-xs md:text-base'>
            <p className='bg-[#D72050] px-4 py-2 text-white'>Latest</p>

            <Marquee autoFill='ture' pauseOnHover='ture'>
                <Link to='/news' className='ml-10'>Match Highlights: Germany vs Spain — as it happened   !</Link>
                <Link to='/news'>Match Highlights: Germany vs Spain as...</Link>
            </Marquee>
        </div>
    );
};

export default Latest;