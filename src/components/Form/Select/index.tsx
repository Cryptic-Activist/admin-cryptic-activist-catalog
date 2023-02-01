import { FC } from "react";

import styles from "./styles.module.scss";
import { SelectProps } from "./types";

const Select: FC<SelectProps> = ({
  id,
  label,
  register,
  name,
  placeholder,
  options,
  required,
  min,
  max,
}) => (
  <div className={styles.container}>
    {label && (
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
    )}
    <select
      id={id}
      {...register(name, { required, min, max })}
      className={styles.select}
      placeholder={placeholder}
    >
      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  </div>
);

export default Select;
