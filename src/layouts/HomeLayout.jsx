import React from 'react';
import Header from '../components/Header';
import Latest from '../components/Latest';

const HomeLayout = () => {
    return (
        <div>
            {/* header content */}
            <header> 
                <Header></Header>
                <section className=''>
                    <Latest></Latest>
                </section>
            </header>

            <nav></nav>
            <main></main>
        </div>
    );
};

export default HomeLayout;