import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <img src="/EEP.png" alt="EEP Logo" className={styles.logo} />
        <div className={styles.text}>
          <p className={styles.orgName}>Tzu Chi High School</p>
          <p className={styles.orgSub}>Contentment &amp; Mutual Love Group</p>
        </div>
      </div>
      <p className={styles.credit}>Website created by Melinda Kuo</p>
    </footer>
  );
}
