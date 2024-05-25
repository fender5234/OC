import './PhoneInterInput.css';
import PhoneInput from 'react-phone-input-international';
import 'react-phone-input-international/lib/style.css';

function PhoneInterInput() {
  return (
    <>
      <PhoneInput
        className='custom-input'
        country='ae'
        inputClass='phone-input'
        containerClass='phone-input-container'
        dropdownClass='drop-container'
        inputProps={{
          name: 'phone',
          required: true,
          autoFocus: true,
        }}
      />
    </>
  );
}

export default PhoneInterInput;

