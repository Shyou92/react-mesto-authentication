import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className='register'>
      <h2 className='register__heading'>Регистрация</h2>
      <form className='register__form'>
        <input
          className='popup__input popup__input_dark'
          type='email'
          name='userEmail'
          placeholder='Email'
          noValidate
        />
        <input
          className='popup__input popup__input_dark'
          type='password'
          name='userPassword'
          placeholder='Пароль'
          noValidate
        />
        <button className='register__form-submit' type='submit'>
          Зарегистрироваться
        </button>
      </form>
      <p className='register__text'>
        Уже зарегистрированы?
        <Link className='register__link' to='sign-in'>
          Войти
        </Link>
      </p>
    </div>
  );
}

export default Register;
