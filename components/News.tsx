import React from 'react'
import NewsCard from './NewsCard'

const news = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-gray-800'>
        <h1 className='w-[80%] mx-auto md:text-[28px] text-[22px] lg:text-[34px] text-white'>Latest News</h1>
        <div className='mt-[2rem]'>
            <div className='grid grid-cols-1 md:grid-cols-6 gap-[3rem] w-[80%] mx-auto'>
                <NewsCard image='/images/g2.jpg' title='New Update News'/>
                <NewsCard image='/images/g4.jpg' title='check whats new'/>
                <NewsCard image='/images/g7.jpg' title='New Tournament'/>
            </div>
        </div>
    </div>
  )
}

export default news