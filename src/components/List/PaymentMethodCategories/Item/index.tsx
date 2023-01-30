import { FC } from "react";

import { formatDate } from "@/utils/date";

import styles from "./styles.module.scss";

import type { ItemProps } from "./types";

const Item: FC<ItemProps> = ({ item }) => {
  return (
    <li className={styles.item}>
      <div>{item.name}</div>
      <div>{formatDate(item.createdAt)}</div>
      <div>{formatDate(item.updatedAt)}</div>
    </li>
  );
};

export default Item;
