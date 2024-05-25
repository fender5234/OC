import './Form.css';
import Button from '../Button/Button';
import Input from '../Input/Input';

function ForgotPassForm() {
  return (
    <div className='form-auth-container'>
      <form className='form'>
        <h1 className='form-title'>Forgot Your Password</h1>
        <p className='form-subtitle'>we'll send forget password link on your email.</p>
        <Input placeholder='E-mail' type='email' />
        <Button>Reset Password</Button>
      </form>
    </div>
  );
}

export default ForgotPassForm;

