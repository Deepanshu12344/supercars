import React from 'react';
import { Browsertypes } from '../constants/browsertypes';

const BrowseType = () => {
  return (
    <div className='mb-20'>
      <p className='flex justify-center text-gray-500 text-xl font-bold pb-10'>Browse by Type</p>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-4'>
        {Browsertypes.map((item, key) => (
          <div 
            key={key} 
            className='flex justify-center items-center border-2 text-sm font-semibold rounded-lg h-28 '
          >
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowseType;
