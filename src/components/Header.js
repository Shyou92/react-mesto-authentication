import logo from '../images/Vector.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header header__line'>
      <img src={logo} className='header__logo' alt="Логотип сайта 'Место'." />
      <Link className='header__link' to='sign-in'>
        Войти
      </Link>
    </header>
  );
}

export default Header;
