import styles from './ProfileNav.module.css';

console.log(styles);
function ProfileNav() {
  return (
    <nav className={styles.profileNavContainer}>
      <a className={styles.profileNavLink} href='#'>
        Opportunities
      </a>
      <a className={styles.profileNavLink} href='#'>
        Tariffs
      </a>
      <a className={styles.profileNavLink} href='#'>
        Partners
      </a>
      <a className={styles.profileNavLink} href='#'>
        Application
      </a>
    </nav>
  );
}

export default ProfileNav;

