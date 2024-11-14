import React from 'react';
import { FaFacebook, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

const Social = () => {
    return (
        <div className='mt-8'>
            <h1 className='font-semibold'>Find Us On</h1>
            <div className='flex flex-col  gap-1'>
                <button className="btn rounded-none border-gray-500 justify-start"><FaFacebook className='text-blue-600'/>Facebook</button>
                <button className="btn rounded-none border-gray-500 justify-start"><FaTwitterSquare className='text-blue-600'/>Twiter</button>
                <button className="btn rounded-none border-gray-500 justify-start"><FaInstagramSquare className='text-rose-500 bg-amber-300' />Instagram</button>
            </div>
        </div>
    );
};

export default Social;