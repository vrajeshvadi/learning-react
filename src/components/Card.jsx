import { ReactComponent as Location } from './location-dot.svg';

export default function Card(props) {
  return (
    <div className='flex p-4 items-center w-[35rem]'>
      <img
        src={props.place.imageUrl}
        alt={props.place.title}
        className='h-48 w-32 rounded object-cover '
      />
      <div className='px-4'>
        <div className='flex items-center'>
          <Location className='w-3 h-3 text-red-500' />
          <div className='uppercase tracking-widest mr-4 ml-1'>{props.place.location}</div>
          <a href={props.place.googleMapsUrl} className='text-gray-500 underline'>
            View on Google Maps
          </a>
        </div>
        <div className='font-bold text-2xl my-2'>{props.place.title}</div>
        <div className='font-semibold'>
          {props.place.startDate} - {props.place.endDate}
        </div>
        <div className='text-xs my-1'>{props.place.description}</div>
      </div>
    </div>
  );
}
