import React from 'react';
import boxes from './boxes';
import Square from './Square';

export default function Box() {
  const [sqr, setSqr] = React.useState(boxes);

  function toggle(id) {
    setSqr((prevSquare) => {
      return prevSquare.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }

  let squares = sqr.map((item) => (
    <Square key={item.id} on={item.on} toggle={() => toggle(item.id)} />
  ));

  return <div className='h-[100vh] p-8 bg-dark-primary grid grid-cols-3 gap-8'>{squares}</div>;
}
