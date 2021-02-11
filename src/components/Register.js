import { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [data, setData] = useState({
    userEmail: '',
    userPassword: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.userPassword) {
      let { userEmail, userPassword } = data;
      console.log({ userEmail, userPassword });
    }
  };
  return (
    <div className='register'>
      <h2 className='register__heading'>Регистрация</h2>
      <form className='register__form' onSubmit={handleSubmit}>
        <input
          className='popup__input popup__input_dark'
          type='email'
          name='userEmail'
          placeholder='Email'
          value={data.userEmail}
          onChange={handleChange}
          noValidate
        />
        <input
          className='popup__input popup__input_dark'
          type='password'
          name='userPassword'
          placeholder='Пароль'
          value={data.userPassword}
          onChange={handleChange}
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
