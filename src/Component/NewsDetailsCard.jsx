 
import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
   // console.log(news)
    return (
        <div className='space-y-5'>
            <img className='w-full h-full' src={news.image} alt="" />
           <h2 className='text-2xl'>{news.title}</h2>
           <p>{news.details}</p>
           <p>{news.description}</p>
           <Link to={`/category/${news.plantId}`}
            className='btn hover:bg-amber-800 hover:text-amber-50'>Go back</Link>
        </div>
    );
};

export default NewsDetailsCard;