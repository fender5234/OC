import styles from './SuccesPopup.module.css';
import tick from '../../images/icons8-tick.svg';
import cross from '../../images/icons8-cross.svg';

import { Link } from 'react-router-dom';

function SuccesPopup({ responseStatus, responseFinally }) {
  return responseStatus ? (
    <div className={styles.modal}>
      <div className={styles.modalWrapper}>
        <img className={styles.modalImage} src={tick} alt='image tick' />
        <h1 className={styles.modalTitle}>Succes!</h1>
        <p className={styles.modalSubTitle}>Your account has been created successfully!</p>
        <Link className={styles.modalLink} to='/login'>
          to Login
        </Link>
      </div>
    </div>
  ) : (
    <div className={styles.modal}>
      <div className={styles.modalWrapper}>
        <img className={styles.modalImage} src={cross} alt='image tick' />
        <h1 className={styles.modalTitleAgain}>Sorry :(</h1>
        <p className={styles.modalSubTitle}>Something went wrong please try again.</p>
        <Link className={styles.modalLinkAgain} to='/register' onClick={() => responseFinally(false)}>
          TRY AGAIN
        </Link>
      </div>
    </div>
  );
}

export default SuccesPopup;

