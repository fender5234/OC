import Input from '../Input/Input';
import ReactSelect from '../ReactSelect/ReactSelect';
import Button from '../Button/Button';
import styles from './DealForm.module.css';
function DealForm() {
  return (
    <form className={styles.DealForm}>
      <label className={styles.DealFormLabel}>
        <span className={styles.DealFormSpan}>Deal name</span>
        <Input placeholder='Official company (individual entrepreneur) name, legal form'></Input>
      </label>
      <label className={styles.DealFormLabel}>
        <span className={styles.DealFormSpan}>Country of incorporation</span>
        <ReactSelect></ReactSelect>
      </label>
      <label className={styles.DealFormLabel}>
        <span className={styles.DealFormSpan}>Company TaxID</span>
        <Input type='text' placeholder='e.g. VAT or other' />
      </label>
      <label className={styles.DealFormLabel}>
        <span className={styles.DealFormSpan}>Registration ID</span>
        <Input type='text' placeholder='e.g. EIN or other' />
      </label>
      <label className={styles.DealFormLabel}>
        <span className={styles.DealFormSpan}>Company full address</span>
        <Input type='text' placeholder='State, city, street, building#, apt.#' />
      </label>
      <label className={styles.DealFormLabel}>
        <span className={styles.DealFormSpan}>Ultimate beneficial owner</span>
        <Input type='text' placeholder='State, city, street, building#, apt.#' />
      </label>
      <label className={styles.DealFormLabel}>
        <span className={styles.DealFormSpan}>Beneficial owner country of residence</span>
        <Input type='text' placeholder='First and last name' />
      </label>
      <label className={styles.DealFormLabel}>
        <span className={styles.DealFormSpan}>Documents</span>
        <input type='file' placeholder='First and last name' multiple accept='image/*,image/jpeg' />
      </label>
      <button type='submit' className={styles.DealFormButton}>Add children</button>
    </form>
  );
}

export default DealForm;

