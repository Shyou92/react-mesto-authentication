function Login() {
  return (
    <div className='register'>
      <h2 className='register__heading'>Вход</h2>
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
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
