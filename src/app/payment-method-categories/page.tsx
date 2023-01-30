"use client";

import List from "@/components/List/PaymentMethodCategories";

import usePaymentMethodCategories from "@/hooks/usePaymentMethodCategories";

const PaymentMethodCategories = () => {
  const { paymentMethodCategories } = usePaymentMethodCategories(true);

  return (
    <div>
      <List items={paymentMethodCategories.data} />
    </div>
  );
};

export default PaymentMethodCategories;
