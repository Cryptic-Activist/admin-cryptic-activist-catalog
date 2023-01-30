import { useStore } from "@nanostores/react";

import { paymentMethodCategories, createPaymentMethodCategory } from "@/stores";
import { CreatePaymentMethodCategoryParams } from "./types";

const UsePaymentMethodCategories = () => {
  const $paymentMethodCategories = useStore(paymentMethodCategories);

  const handleCreatePaymentMethodCategory = (
    data: CreatePaymentMethodCategoryParams
  ) => {
    createPaymentMethodCategory(data);
  };

  return {
    handleCreatePaymentMethodCategory,
    paymentMethodCategories: $paymentMethodCategories,
  };
};

export default UsePaymentMethodCategories;
