import { Link } from 'react-router-dom';
import Logo from '../../images/trustypay.svg';

function LogoLink() {
  return (
    <Link to='/' className='logo-link'>
      <img src={Logo} alt='logo' width='175' height='38' />
    </Link>
  );
}

export default LogoLink;

