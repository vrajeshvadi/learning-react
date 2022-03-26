import React from 'react';
import { ReactComponent as Star } from './star_light.svg';
import { ReactComponent as StarFilled } from './star_solid.svg';
import { ReactComponent as User } from './user_solid.svg';

export default function Card() {
  const [contact, setContact] = React.useState({
    firstName: 'Vrajesh',
    lastName: 'Vadi',
    phone: '+91 9726264163',
    email: 'vrajeshvadi@gmail.com',
    isFav: true,
  });

  function toggle() {
    setContact(prev => prev = {...prev,isFav : !prev.isFav});
  }

  let star = contact.isFav ? (
    <StarFilled width='1.2rem' fill='currentColor' onClick={toggle}/>
  ) : (
    <Star width='1.2rem' fill='currentColor' onClick={toggle}/>
  );

  return (
    <div className='bg-dark-primary h-[100vh] flex items-center justify-center text-white'>
      <div className='bg-dark-secondary rounded p-4 flex  flex-col items-center justify-center'>
        <User fill='currentColor' width='6rem' />
        <div className='mt-2'>
          <div>{star}</div>
          <div className='text-xl font-bold'>{contact.firstName} {contact.lastName}</div>
          <div>{contact.phone}</div>
          <div>{contact.email}</div>
        </div>
      </div>
    </div>
  );
}
