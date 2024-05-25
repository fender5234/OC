import './Form.css';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Input from '../Input/Input';

function LoginForm() {
  return (
    <div className='form-auth-container'>
      <form className='form'>
        <h1 className='form-title'>Login</h1>
        <p className='form-subtitle'>Sign in to your account</p>
        <Input placeholder='Username' type='text' />
        <Input placeholder='Password' type='password' />
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
  );
}

export default LoginForm;

