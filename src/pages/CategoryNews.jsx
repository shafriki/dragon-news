import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {

    const {data: news} = useLoaderData();
    return (
        <div>
            <h1 className='font-semibold mb-3'>Dragon News Home</h1>

            {/* news card */}
            <div>
                {
                    news.map((singleNews) =>(
                        <NewsCard key={singleNews._id} news={singleNews}></NewsCard>
                    ))
                }
            </div>
        </div>
    );
};

export default CategoryNews;