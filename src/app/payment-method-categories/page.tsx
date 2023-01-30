import { usePaymentMethodCategories } from "@/hooks";

const PaymentMethodCategories = () => {
  const { paymentMethodCategories } = usePaymentMethodCategories();

  return (
    <div>
      {paymentMethodCategories.data.map((paymentMethodCategory) => (
        <p>{paymentMethodCategory.name}</p>
      ))}
    </div>
  );
};

export default PaymentMethodCategories;
