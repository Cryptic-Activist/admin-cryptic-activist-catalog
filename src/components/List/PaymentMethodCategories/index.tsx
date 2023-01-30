import React, { FC } from "react";

import type { ListProps } from "./types";

import styles from "./styles.module.scss";
import Item from "./Item";

const PaymentMethodCategories: FC<ListProps> = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <Item item={item} />
      ))}
    </ul>
  );
};

export default PaymentMethodCategories;
