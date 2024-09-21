"use client";

import React from 'react';
import { mostSearched } from '../constants/mostsearched';
import Image from 'next/image';
import Link from 'next/link';

const MostSearched = () => {
  return (
    <div className="mb-20 text-gray-500">
      <p className="flex justify-center text-xl font-bold pb-10">Most Searched Cars</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {mostSearched.map((item, index) => (
          <div 
            key={index} 
            className="border-2 text-sm font-semibold rounded-lg h-[300px] grid grid-rows-2"
          >
            <div className="relative row-span-1">
              {item.tag && (
                <div className="absolute bg-green-700 text-white text-sm font-light rounded-full px-3 py-1 m-2">
                  {item.tag}
                </div>
              )}

              <button className="absolute w-[30px] h-[30px] rounded-full bg-white flex justify-center items-center m-2 right-0">
                <Image src="/14182513331543238863.svg" alt="favorite icon" width={25} height={25} />
              </button>

              <Image 
                src={item.image} 
                alt={item.name} 
                width={400} 
                height={300} 
                className="object-cover w-full h-full rounded-t-lg" 
              />
            </div>

            <div className="grid grid-rows-3 p-3 space-y-4">
              <div>
                {item.name}
                <br />
                <span className="text-xs">{item.desc}</span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <CarDetail icon="/7680335161554469028.svg" detail={item.type} />
                <CarDetail icon="/796878521644665008.svg" detail={item.driveTrains} />
                <CarDetail icon="/9714804041667321407.svg" detail={item.average} />
              </div>

              <div className="flex justify-between pt-3">
                <div>{item.cost}</div>
                <Link href="/" className="text-gray-500 underline">View details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CarDetail = ({ icon, detail }) => (
  <div className="flex items-center">
    <Image src={icon} alt="icon" width={20} height={20} className="mr-2" />
    {detail}
  </div>
);

export default MostSearched;
