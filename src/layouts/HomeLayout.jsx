import React from 'react';
import Header from '../components/Header';
import Latest from '../components/Latest';
import Navbar from '../components/Navbar';

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

            <nav>
                <Navbar></Navbar>
            </nav>
            <main></main>
        </div>
    );
};

export default HomeLayout;