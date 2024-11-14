import React, { useEffect, useState } from 'react';

const LeftSec = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() =>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then((res) => res.json())
        .then((data) => setCategories(data.data.news_category));
    }, [])
    return (
        <div>
            <h1 className='font-semibold'>All Category ({categories.length}) </h1>
            <div className='flex flex-col items-start gap-2 mt-2'>
                {
                    categories.map((category) => (
                        <button className='btn text-xs w-40 rounded-none' key={category.category_id}>
                            {category.category_name}
                        </button>
                    ))
                }
            </div>
        </div>
    );
};

export default LeftSec;