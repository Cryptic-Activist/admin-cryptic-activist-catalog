"use client";

import { useForm } from "react-hook-form";

import { usePaymentMethodCategories } from "@/hooks";

import { Input, Submit } from "@/components/Form";

import { createPaymentMethodCategory } from "@/stores";

import page from "./page.module.scss";

const PaymentMethodCategoriesPage = () => {
  const { register, handleSubmit } = useForm();
  const { handleCreatePaymentMethodCategory } = usePaymentMethodCategories();

  const onSubmit = (data: any) => {
    handleCreatePaymentMethodCategory(data);
  };

  return (
    <div className={page.container}>
      <form
        action="POST"
        className={page.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          id="name"
          name="category.name"
          register={register}
          label="Category Name"
        />
        <Submit type="submit">Submit</Submit>
      </form>
    </div>
  );
};

export default PaymentMethodCategoriesPage;
