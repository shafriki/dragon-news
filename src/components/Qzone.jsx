import React from 'react';
import swim from '../assets/swimming.png';
import school from '../assets/class.png';
import play from '../assets/playground.png'

const Qzone = () => {
    return (
        <div className='mt-8 bg-gray-200 p-2'>
            <h1 className='font-semibold'>Q-zone</h1>
            <div className='p-1 flex flex-col items-center gap-2'>
                <img src={swim} alt="" />
                <img src={school} alt="" />
                <img src={play} alt="" />

            </div>
        </div>
    );
};

export default Qzone;