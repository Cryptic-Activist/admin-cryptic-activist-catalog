import React from "react";
import { PaymentMethodCategoriesLayoutProps } from "./types";

const PaymentMethodCategoriesLayout = ({
  children,
}: PaymentMethodCategoriesLayoutProps) => {
  return (
    <>
      <head />
      {children}
    </>
  );
};

export default PaymentMethodCategoriesLayout;
