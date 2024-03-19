import React from 'react';
import Data from '../lib/data';

const arrow = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>


const DataMap = ({ data }) => (
  <div className="flex flex-wrap my-10 mx-[3rem] justify-center items-center space-x-2 space-y-2 px-[6rem]">
    <img src={data.photo} alt={data.name} className='w-[5rem] h-[5rem] '/>
    <h2 className='font-bold text-2xl font-serif'>{data.name}</h2>
    <p className='text-xl'>{data.description}</p>
    <a href={data.url} className='text-[#4C5FD5] hover:underline hover:scale-110'>Learn More {arrow}</a>
  </div>
);

const dataMap = () => {
  return (
    <div className='grid grid-cols-2 my-[7rem] '>
      {Object.keys(Data).map((key) =>
        Data[key].map((item, index) => (
          <DataMap key={index} data={item} />
        ))
      )}
    </div>
  );
};

export default dataMap;
