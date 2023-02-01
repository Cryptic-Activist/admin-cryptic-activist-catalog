"use client";
import { useEffect } from "react";
import { useStore } from "@nanostores/react";

import {
  paymentMethods,
  createPaymentMethod,
  listPaymentMethod,
} from "@/stores";
import { CreatePaymentMethodParams, UsePaymentMethodsParams } from "./types";

const UsePaymentMethods = (fetchData?: UsePaymentMethodsParams) => {
  const $paymentMethods = useStore(paymentMethods);

  const handleCreatePaymentMethod = async (data: CreatePaymentMethodParams) => {
    await createPaymentMethod(data);
  };

  const handleListPaymentMethod = async () => {
    await listPaymentMethod();
  };

  useEffect(() => {
    if (fetchData) {
      handleListPaymentMethod();
    }
  }, [fetchData]);

  return {
    handleCreatePaymentMethod,
    handleListPaymentMethod,
    paymentMethods: $paymentMethods,
  };
};

export default UsePaymentMethods;
