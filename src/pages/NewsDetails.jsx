import React, { useEffect, useState } from 'react';
 
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from '../Component/NewsDetailsCard';

const NewsDetails = () => {
    const data = useLoaderData();
    const {id} = useParams()  

    const [news, setNews] =useState({});
   // console.log(data, id)

    useEffect(()=>{
    const newsDetails = data.find((singleNews) => singleNews.id == id);
    setNews(newsDetails);
    },[data, id])
    return (
        <div>
            
            <main className='w-11/12 mx-auto grid grid-cols-12  gap-5 py-10'>
              <section className='col-span-9'>
                <h2 className='font-bold mb-5'> News Details</h2>
                <NewsDetailsCard news={news}></NewsDetailsCard>
              </section>
            
            </main>
        </div>
    );
};

export default NewsDetails;