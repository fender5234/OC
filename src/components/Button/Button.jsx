import './Button.css'

function Button({ type, children }) {
  return <button type={type} className='button-primary'>{children}</button>;
}

export default Button;
