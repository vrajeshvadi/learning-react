import logo from '../images/v.png';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className='nav'>
      <div className='logo'>
        <img src={logo} alt='logo' className='logo-img' />
        <div className='logo-txt'>Vadi</div>
      </div>
      <div className='project-txt'>React - Project 1</div>
    </nav>
  );
}
