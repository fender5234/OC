import LoginForm from '../components/Forms/LoginForm';
import LogoLink from '../components/LogoLink/LogoLink';

import PhoneInput from 'react-phone-input-international';
import 'react-phone-input-international/lib/style.css';

function Login() {
  return (
    <>
      <LogoLink />
      <LoginForm />
    </>
  );
}

export default Login;

