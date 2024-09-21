"use client";
import React from 'react';
import { QACards } from '../constants/qaCards';
import Custombtn from './Custombtn'; // Adjust the path as necessary

const QACard = () => {
  return (
    <div className='grid md:grid-cols-2 gap-10 mb-20'>
      {QACards.map((item, key) => (
        <div key={key} className="bg-fuchsia-100 p-10 rounded-xl space-y-5">
          <h1 className='text-xl font-semibold'>{item.title}</h1>
          {item.content.map((value, index) => (
            <div key={index} className="qa-content space-y-5">
                <div>
              <p className='text-gray-500'>{value.desc}</p>
                </div>
              {/* Render the button */}
              <div className='flex justify-between items-center'>
              <Custombtn
                text={value.button.text}
                className={value.button.className}
                disabled={value.button.disabled}
                onClick={value.button.onClick}
              />
              {value.icon && <img src={value.icon} alt="icon" className={value.iconclass}/>}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default QACard;
