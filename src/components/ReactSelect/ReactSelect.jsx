import Select from 'react-select';
import './ReactSelect.css';

const options = [
  { value: 'USD', label: 'USD' },
  { value: 'EUR', label: 'EUR' },
  { value: 'AED', label: 'AED' },
];

function ReactSelect() {
  return <Select options={options} className='react-select-container' classNamePrefix='react-select' defaultValue={options[2]}/>;
}

export default ReactSelect;

