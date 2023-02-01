"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Submit, Select, Input } from "@/components/Form";

import page from "./page.module.scss";
import { usePaymentMethodCategories, usePaymentMethods } from "@/hooks";
import { mapPaymentMethodCategories } from "@/utils/map/paymentMethodCategories";

const PaymentMethodsCreate = () => {
  const { register, handleSubmit } = useForm();
  const { paymentMethodCategories } = usePaymentMethodCategories(true);
  const { handleCreatePaymentMethod } = usePaymentMethods();
  const categories = mapPaymentMethodCategories(paymentMethodCategories.data);

  const onSubmit = (data: any) => {
    handleCreatePaymentMethod(data);
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
          name="name"
          register={register}
          label="Name"
          placeholder="Name"
          required
        />
        <Select
          id="paymentMethodCategory.id"
          name="paymentMethodCategory.id"
          options={categories}
          register={register}
          label="Payment Method Category"
          required
        />
        <Submit type="submit">Submit</Submit>
      </form>
    </div>
  );
};

export default PaymentMethodsCreate;
