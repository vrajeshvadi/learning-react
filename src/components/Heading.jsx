import { ReactComponent as Earth } from './earth-americas.svg';

export default function Heading() {
  return (
    <header className='bg-red-500 text-white flex items-center p-4'>
      <Earth className='w-8 h-8 text-white mx-4' />
      <span className='font-semibold text-lg'>Travel Journal</span>
    </header>
  );
}
