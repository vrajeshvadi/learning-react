import './Header.css';
import logo from './logo.svg';

function Header() {
  return (
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <ul className='nav-items'>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </header>
  );
}

export default Header;
