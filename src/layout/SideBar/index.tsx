import Link from "next/link";

import styles from "./styles.module.scss";

const SideBar = () => {
  return (
    <aside className={styles.aside}>
      <ul className={styles.asideList}>
        <li className={styles.asideListItem}>
          <Link href="/users">Users</Link>
        </li>
        <li className={styles.asideListItem}>
          <Link href="/offers">Offers</Link>
        </li>
        <li className={styles.asideListItem}>
          <Link href="/trades">Trades</Link>
        </li>
        <li className={styles.asideListItem}>
          <Link href="/payment-methods">Payment Methods</Link>
        </li>
        <li className={styles.asideListItem}>
          <Link href="/payment-method-categories">
            Payment Method Categories
          </Link>
        </li>
        <li className={styles.asideListItem}>
          <Link href="/chats">Chats</Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
