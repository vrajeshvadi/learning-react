export default function Squre(props) {
  const styles = {
    backgroundColor: props.on ? '#333' : '#ccc',
  };

  return <div style={styles} className='w-full h-full bg-dark-secondary rounded' onClick={props.toggle}></div>;
}
