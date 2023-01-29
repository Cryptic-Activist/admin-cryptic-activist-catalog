import { ReactNode } from "react";

export type ButtonProps = {
  icon?: ReactNode;
  text?: string;
  href?: string;
  onClick?: () => void;
};
