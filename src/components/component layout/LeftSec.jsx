import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

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
            <div className='flex flex-col  gap-2 mt-2'>
                {
                    categories.map((category) => (
                        <NavLink id='cat' to={`/category/${category.category_id}`} className='btn text-xs justify-start rounded-none' key={category.category_id}>
                            {category.category_name}
                        </NavLink>
                    ))
                }
            </div>
        </div>
    );
};

export default LeftSec;