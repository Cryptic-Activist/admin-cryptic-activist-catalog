import { FC } from "react";

import styles from "./styles.module.scss";
import { InputProps } from "./types";

const Input: FC<InputProps> = ({
  id,
  label,
  register,
  name,
  placeholder,
  min,
  max,
  required,
}) => (
  <div className={styles.container}>
    {label && (
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
    )}
    <input
      type="text"
      id={id}
      {...register(name, { required, min, max })}
      className={styles.input}
      placeholder={placeholder}
    />
  </div>
);

export default Input;
