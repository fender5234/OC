import './Form.css';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Input from '../Input/Input';
import login from '../../API/login.js';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';

function LoginForm() {
  const [userAuth, setUserAuth] = useState(false);
  const [userData, setUserData] = useState({ email: '', password: '' });

  function handleChangeInput(e, name) {
    setUserData({ ...userData, [name]: e.target.value });
  }

  const apiUrl = 'http://127.0.0.1:8000/auth/login';

  return (
    <>
      {userAuth ? (
        <Navigate to='/' replace={true} />
      ) : (
        <div className='form-auth-container'>
          <form
            className='form'
            onSubmit={(evt) => {
              login(evt, apiUrl, userData, setUserAuth);
            }}>
            <h1 className='form-title'>Login</h1>
            <p className='form-subtitle'>Sign in to your account</p>
            <Input placeholder='Username' type='text' data={userData.email} name='email' setUserData={handleChangeInput} />
            <Input placeholder='Password' type='password' data={userData.password} name='password' setUserData={handleChangeInput} />
            <Button>Login</Button>
            <Link to='/forgotpass' className='form-link'>
              Forgot password
            </Link>
            <Link to='/register' className='form-link-button'>
              Register now
            </Link>
            <p className='form-pact'>
              By filling out the form, I accept the terms of
              <a href='#' className='form-pact'>
                information transfer and consent to receive
              </a>
              information about products and services
            </p>
          </form>
        </div>
      )}
    </>
  );
}

export default LoginForm;

