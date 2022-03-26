import React from 'react';

export default function Important() {
  const [ans, setAns] = React.useState(true);
  function toggle() {
    setAns((prev) => (prev = !prev));
  }
  let yesNo = ans ? 'Yes' : 'No';
  return (
    <div className='h-[100vh] bg-black flex flex-col justify-center items-center'>
      <h1 className='text-white text-2xl font-bold m-4'>Is state important to know?</h1>
      <div
        className='bg-white  text-lg font-semibold p-8 m-4 rounded-full cursor-pointer'
        onClick={toggle}
      >
        {yesNo}
      </div>
    </div>
  );
}
