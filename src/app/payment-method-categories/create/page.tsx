"use client";

import { useForm } from "react-hook-form";

import Input from "@/components/Form/Input";
import Submit from "@/components/Form/Submit";

import page from "./page.module.scss";

const PaymentMethodCategoriesPage = () => {
  const { register, getValues, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log({ data });
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
