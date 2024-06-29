import Select from 'react-select';
import './ReactSelect.css';

const options = [
  { value: 'USD', label: 'USD' },
  { value: 'EUR', label: 'EUR' },
  { value: 'AED', label: 'AED' },
];

function ReactSelect() {
  return (
    <Select
      options={options}
      className='react-select-container'
      classNamePrefix='react-select'
      defaultValue={options[2]}
      styles={{
        option: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: state.isSelected ? '#1bc339' : 'transparent',
          borderRadius: state.isSelected ? '10px' : 'transparent',
        }),
      }}
    />
  );
}

export default ReactSelect;

