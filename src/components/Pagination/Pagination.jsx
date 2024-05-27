import styles from './Pagination.module.css';
import { NavLink } from 'react-router-dom';

function Pagination() {
  return (
    <div className={styles.PaginationContainer}>
      <h1 className={styles.PaginationTitle}>Title</h1>
      <NavLink className={styles.PaginationLink}>PrevSide</NavLink>
      <NavLink className={styles.PaginationLinkActive}>\ CurrentSide</NavLink>
    </div>
  );
}

export default Pagination;

