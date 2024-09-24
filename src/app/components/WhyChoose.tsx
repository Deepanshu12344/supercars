import Image from 'next/image';
import React from 'react';

const WhyChoose = () => {
  return (
    <div className='bg-blue-100 w-full py-16 mb-20 flex flex-col items-center'>
      <div className='mb-12 text-3xl font-semibold text-gray-700'>
        Why Choose Us?
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-8 text-gray-600'>
        <div className='flex flex-col space-y-5'>
          <Image src='/sale.svg' alt='Special Financing Offers' height={40} width={40} />
          <h1 className='font-bold text-lg'>Special Financing Offers</h1>
          <p className='text-sm'>
            Our stress-free finance department can find financial solutions to save you money.
          </p>
        </div>
        <div className='flex flex-col space-y-5'>
          <Image src='/security.svg' alt='Trusted Car Dealership' height={40} width={40} />
          <h1 className='font-bold text-lg'>Trusted Car Dealership</h1>
          <p className='text-sm'>
            Our experienced team will ensure you get the best car-buying experience.
          </p>
        </div>
        <div className='flex flex-col space-y-5'>
          <Image src='/price.svg' alt='Transparent Pricing' height={40} width={40} />
          <h1 className='font-bold text-lg'>Transparent Pricing</h1>
          <p className='text-sm'>
            No hidden fees. We offer upfront pricing to ensure transparency in your car purchase.
          </p>
        </div>
        <div className='flex flex-col space-y-5'>
          <Image src='/service.svg' alt='Expert Car Service' height={40} width={40} />
          <h1 className='font-bold text-lg'>Expert Car Service</h1>
          <p className='text-sm'>
            Our certified technicians ensure your car is maintained to the highest standards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
