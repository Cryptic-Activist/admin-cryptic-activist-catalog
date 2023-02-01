import { map } from "nanostores";
import { fetchGet, fetchPost } from "@/services/axios";

import type { CreatePaymentMethodParams, PaymentMethodState } from "./types";
import { OFFER_API_ENDPOINT } from "@/constants/envs";

export const paymentMethods = map<PaymentMethodState>({
  data: [],
  loading: false,
  fetched: false,
  errors: [],
});

const fetchCreatePaymentMethod = async (data: CreatePaymentMethodParams) => {
  const response = await fetchPost(
    `${OFFER_API_ENDPOINT}/payment-methods/create`,
    data
  );

  if (response.status !== 200) {
    return null;
  }

  return response.data.results;
};

const fetchListPaymentMethod = async () => {
  const response = await fetchGet(`${OFFER_API_ENDPOINT}/payment-methods`);

  if (response.status !== 200) {
    return null;
  }

  return response.data.results;
};

const setter = (
  data: any[],
  loading: boolean,
  fetched: boolean,
  errors: string[]
) => {
  paymentMethods.set({
    data,
    loading,
    fetched,
    errors,
  });
};

export const createPaymentMethod = async (
  dataParams: CreatePaymentMethodParams
) => {
  setter([], true, false, []);
  const created = await fetchCreatePaymentMethod(dataParams);

  if (!created) {
    setter([], false, true, []);
    return null;
  }

  setter([], false, true, []);
};

export const listPaymentMethod = async () => {
  setter([], true, false, []);
  const list = await fetchListPaymentMethod();

  if (!list) {
    setter([], false, true, []);
    return null;
  }

  setter(list, false, true, []);
};
