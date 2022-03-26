import React from 'react';
import { ReactComponent as Minus } from './minus_solid.svg';
import { ReactComponent as Plus } from './plus_solid.svg';

export default function Important() {
  const [count, setCount] = React.useState(0);

  function add() {
    setCount((prev) => prev + 1);
  }

  function substract() {
    setCount((prev) => prev - 1);
  }

  return (
    <div className='h-[100vh] bg-dark-primary flex justify-center items-center'>
      <div className='w-8 h-8 flex items-center justify-center bg-dark-secondary text-white rounded-full cursor-pointer' onClick={substract}>
        <Minus width='1rem' fill='currentColor' />
      </div>
      <div className='w-16 h-16 bg-dark-surface text-dark-text text-lg font-semibold m-4 rounded-full flex items-center justify-center'>
        {count}
      </div>
      <div className='w-8 h-8 flex items-center justify-center bg-dark-secondary text-white rounded-full cursor-pointer' onClick={add}>
        <Plus width={'1rem'} fill='currentColor' />
      </div>
    </div>
  );
}
