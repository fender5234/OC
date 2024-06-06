import './Form.css';
import Button from '../Button/Button';
import Input from '../Input/Input';
import PhoneInterInput from '../PhoneInput/PhoneInput';
import { useState } from 'react';

function RegisterForm() {
  const [userData, setUserData] = useState({ name: '', password: '', email: '' });

  const apiUrl = 'http://127.0.0.1:8000/auth/register';

  // Функция сбора данных из инпутов которая помещает их в state
  function handleChangeInput(e, name) {
    setUserData({ ...userData, [name]: e.target.value });
  }

  // Функция отправки данных на регистрацию
  async function registrationSend(event) {
    event.preventDefault();
    await fetch(apiUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  }

  return (
    <div className='form-auth-container'>
      <form className='form' onSubmit={registrationSend}>
        <h1 className='form-title'>Register</h1>
        <p className='form-subtitle'>Create your account</p>
        <Input placeholder='Username' type='text' data={userData.name} name='name' setUserData={handleChangeInput} />
        <PhoneInterInput></PhoneInterInput>
        <Input placeholder='E-mail' type='email' data={userData.email} name='email' setUserData={handleChangeInput} />
        <Input placeholder='Password' type='password' data={userData.password} name='password' setUserData={handleChangeInput} />
        <Input placeholder='Repeat password' type='password' />
        <Button type='submit'>Create Account</Button>
        <p className='form-pact'>
          By filling out the form, I accept the terms of
          <a href='#' className='form-pact'>
            information transfer and consent to receive
          </a>
          information about products and services
        </p>
      </form>
    </div>
  );
}

export default RegisterForm;

