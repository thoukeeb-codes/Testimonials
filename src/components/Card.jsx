import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Card = ({ review }) => {
  return (
    <div className='bg-slate-700 p-6 rounded-lg shadow-lg text-center text-white w-96  '>
      <div className='flex justify-center mb-4'>
        <img
          src={review?.image}
          alt=""
          className='w-24 h-24 border-4 border-black bg-slate-200 shadow-2xl rounded-full'
        />
      </div>
      <div className='mb-2'>
        <p className='text-lg font-semibold'>{review?.name}</p>
        <p className='text-sm text-gray-400'>{review?.job}</p>
      </div>
      <div className='text-gray-200'>
        <FaQuoteLeft className='inline-block mr-2' />
        <p className='inline-block overflow-hidden text-ellipsis min-h-30'>{review?.text}</p>
        <FaQuoteRight className='inline-block ml-2' />
      </div>
    </div>
  );
};

export default Card;
