import './Form.css';
import Button from '../Button/Button';
import Input from '../Input/Input';
import PhoneInterInput from '../PhoneInput/PhoneInput';

function RegisterForm() {
  return (
    <div className='form-auth-container'>
      <form className='form'>
        <h1 className='form-title'>Register</h1>
        <p className='form-subtitle'>Create your account</p>
        <Input placeholder='Username' type='text' />
        <PhoneInterInput></PhoneInterInput>
        <Input placeholder='E-mail' type='email' />
        <Input placeholder='Password' type='password' />
        <Input placeholder='Repeat password' type='password' />
        <Button>Create Account</Button>
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

