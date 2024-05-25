import './Input.css';

function Input({ placeholder, type = 'text' }) {
  return (
    <>
      <input type={type} className='input-form' placeholder={placeholder} required></input>
    </>
  );
}

export default Input;

