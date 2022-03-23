import Joke from './components/Joke';

export default function App() {
  return (
    <div>
      <Joke setup='How did hacker escape the police?' punchline='He just ransomeware' />
      <Joke setup='What did the ocean says to other ocean' punchline='they just wave.' />
    </div>
  );
}
