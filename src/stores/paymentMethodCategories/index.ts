import { map } from "nanostores";
import { fetchGet, fetchPost } from "@/services/axios";

import type {
  CreatePaymentMethodCategoryParams,
  PaymentMethodCategoryState,
} from "./types";
import { OFFER_API_ENDPOINT } from "@/constants/envs";

export const paymentMethodCategories = map<PaymentMethodCategoryState>({
  data: [],
  loading: false,
  fetched: false,
  errors: [],
});

const fetchCreatePaymentMethodCategory = async (
  data: CreatePaymentMethodCategoryParams
) => {
  const response = await fetchPost(
    `${OFFER_API_ENDPOINT}/payment-method/categories/create`,
    data
  );

  if (response.status !== 200) {
    return null;
  }

  return response.data.results;
};

const fetchListPaymentMethodCategory = async () => {
  const response = await fetchGet(
    `${OFFER_API_ENDPOINT}/payment-method/categories`
  );

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
  paymentMethodCategories.set({
    data,
    loading,
    fetched,
    errors,
  });
};

export const createPaymentMethodCategory = async (
  dataParams: CreatePaymentMethodCategoryParams
) => {
  setter([], true, false, []);
  const created = await fetchCreatePaymentMethodCategory(dataParams);

  if (!created) {
    setter([], false, true, []);
    return null;
  }

  setter([], false, true, []);
};

export const listPaymentMethodCategory = async () => {
  setter([], true, false, []);
  const list = await fetchListPaymentMethodCategory();

  if (!list) {
    setter([], false, true, []);
    return null;
  }

  setter(list, false, true, []);
};
