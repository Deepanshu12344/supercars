import React from 'react'
import { mostSearched } from '../constants/mostsearched';

const MostSearched = () => {
    return (
        <div className='mb-20'>
          <p className='flex justify-center text-gray-500 text-xl font-bold pb-10'>Most Searched Cars</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4'>
            {mostSearched.map((item, key) => (
              <div 
                key={key} 
                className='flex justify-center items-center border-2 text-sm font-semibold rounded-lg h-[300px] '
              >
                <h4>{item.name}</h4>
              </div>
            ))}
          </div>
        </div>
      );
}

export default MostSearched