import './Button.css'

function Button({ props, children }) {
  return <button className='button-primary'>{children}</button>;
}

export default Button;
