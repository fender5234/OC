import './Input.css';

function Input({ name, placeholder, type = 'text', setUserData, data }) {
  return (
    <>
      <input type={type} className='input-form' placeholder={placeholder} value={data} onChange={(e) => setUserData(e, name)}></input>
    </>
  );
}

export default Input;

