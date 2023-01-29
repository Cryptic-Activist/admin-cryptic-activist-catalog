import { FC } from "react";
import Link from "next/link";

import { ButtonProps } from "./types";

import styles from "./styles.module.scss";

const Button: FC<ButtonProps> = ({ href, icon, text, onClick }) => {
  return (
    <>
      {href ? (
        <Link href={href} className={styles.container}>
          {text}
          {icon}
        </Link>
      ) : (
        <button onClick={onClick} className={styles.container}>
          {text}
          {icon}
        </button>
      )}
    </>
  );
};

export default Button;
