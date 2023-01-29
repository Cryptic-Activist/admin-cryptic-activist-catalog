import Link from "next/link";

import styles from "./styles.module.scss";

const NavigationBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.brand}>
          <div className={styles.brandPrimary}>
            <h1>Cryptic</h1>
            <h2>Activist</h2>
          </div>
          <div className={styles.sep}></div>
          <div className={styles.brandSecondary}>
            <h3>Admin</h3>
          </div>
        </Link>
        <ul className={styles.menu}>
          <li>
            <Link href="/" className={styles.menuItem}>
              Home
            </Link>
          </li>
          <li>
            <button className={styles.userButton}>Login</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
