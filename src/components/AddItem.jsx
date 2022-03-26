import React from 'react';

export default function AddItem() {
  const [item, setItem] = React.useState(['Item 1', 'Item 2']);

  const items = item.map((itm) => <li key={itm}>{itm}</li>);

  function add() {
    setItem((prev) => (prev = [...prev, `Item ${prev.length + 1}`]));
  }

  return (
    <div className='bg-dark-primary h-[100vh] text-dark-text flex flex-col items-center justify-center'>
      <button
        className='border rounded-full px-8 py-4 bg-dark-secondary hover:bg-dark-surface mb-4'
        onClick={add}
      >
        Add Item
      </button>
      {items}
    </div>
  );
}
