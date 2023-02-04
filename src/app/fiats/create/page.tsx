"use client";
import React from "react";
import { useForm } from "react-hook-form";
import useFiats from "@/hooks/useFiats";

import page from "./page.module.scss";
import { Input, Submit } from "@/components/Form";
import Button from "@/components/Buttons/Button";

const UsersCreatePage = () => {
  const { register, handleSubmit } = useForm();
  const { handleCreateFiat, handleCreateAllFiats } = useFiats(false);

  const onSubmit = (data: any) => {
    handleCreateFiat(data);
  };

  const createAllFiats = () => {
    handleCreateAllFiats();
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
        <Input
          id="symbol"
          name="symbol"
          register={register}
          label="Symbol"
          placeholder="Symbol"
          required
        />
        <Submit type="submit">Submit</Submit>
      </form>
      <Button onClick={createAllFiats} text="Create All Fiats" />
    </div>
  );
};

export default UsersCreatePage;
