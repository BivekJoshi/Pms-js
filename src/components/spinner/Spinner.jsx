import React from 'react';

const Spinner = () => {
  return (
    <div className='w-56 h-56 grid border-4.5 border-solid border-black rounded-full border-[#b2bbc8 #0000] animate-spinner-e04l1k'>
      <div className='content grid-area[1/1] m-2.2 border-[inherit] rounded-full'></div>
      <div className='m-8.9'></div>
    </div>
  );
};

export default Spinner;
