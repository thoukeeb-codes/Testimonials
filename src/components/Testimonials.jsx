import React, { useState } from 'react';
import Card from './Card';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = ({ reviews }) => {
  const [index, setIndex] = useState(0);

  const leftShiftHandler = () => {
    if (index - 1 < 0) {
      let length = reviews.length;
      setIndex(length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const rightShiftHandler = () => {
    let length = reviews.length;
    if (index + 1 >= length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const surpriseHandler = () => {
    const randIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randIndex);
  };

  return (
    <div className="flex flex-col items-center">
      <Card review={reviews[index]} />
      <div className="flex w-52 justify-between mt-4">
        <button
          className="bg-gray-50 px-4 py-2 rounded shadow"
          onClick={leftShiftHandler}
        >
          <FaChevronLeft />
        </button>
        <button
          className="bg-gray-50 px-4 py-2 rounded shadow"
          onClick={rightShiftHandler}
        >
          <FaChevronRight />
        </button>
      </div>
      <div className="mt-4">
        <button
          className="bg-gray-50 px-4 py-2 rounded shadow"
          onClick={surpriseHandler}
        >
          Surprise Me!
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
