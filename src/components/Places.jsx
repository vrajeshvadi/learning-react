import Card from './Card';
import place from './data';

export default function Places() {
  const cards = place.map(place =>{
    return (
      <Card key={place.id} place={place} />
    )
  })
  return (
    <section className='flex flex-wrap justify-center'>
      {cards}
    </section>
  );
}
