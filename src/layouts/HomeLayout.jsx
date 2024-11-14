import React from 'react';
import Header from '../components/Header';
import Latest from '../components/Latest';
import Navbar from '../components/Navbar';
import LeftSec from '../components/component layout/LeftSec';
import RightSec from '../components/component layout/RightSec';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='font-poppins'>
            {/* header content */}
            <header> 
                <Header></Header>
                <section className=''>
                    <Latest></Latest>
                </section>
            </header>

            {/* navbar content */}
            <nav>
                <Navbar></Navbar>
            </nav>

            {/* main section ceontent */}
            <main className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 justify-between my-12  gap-5 '>
                <aside className='col-span-3 mx-3 md:mx-0'> <LeftSec></LeftSec> </aside>
                <section className='col-span-6 mx-3 md:mx-0'><Outlet></Outlet></section>
                <aside className='col-span-3 mx-3 md:mx-0'><RightSec></RightSec></aside>

            </main>
            
        </div>
    );
};

export default HomeLayout;