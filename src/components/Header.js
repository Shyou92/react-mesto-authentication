import logo from '../images/Vector.svg';
import { Link, Route } from 'react-router-dom';

function Header() {
  return (
    <header className='header header__line'>
      <img src={logo} className='header__logo' alt="Логотип сайта 'Место'." />
      <Route exact path='/'>
        <div className='header__container'>
          <p className='header__container-text'>email@mail.com</p>
          <Link className='header__link' to='sign-in'>
            Выход
          </Link>
        </div>
      </Route>
      <Route path='/sign-up'>
        <Link className='header__link' to='sign-in'>
          Войти
        </Link>
      </Route>
      <Route path='/sign-in'>
        <Link className='header__link' to='sign-up'>
          Регистрация
        </Link>
      </Route>
    </header>
  );
}

export default Header;
