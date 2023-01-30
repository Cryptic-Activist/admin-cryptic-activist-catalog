import { map } from "nanostores";
import { fetchPost } from "@/services/axios";

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

export const createPaymentMethodCategory = async (
  dataParams: CreatePaymentMethodCategoryParams
) => {
  paymentMethodCategories.set({
    data: [],
    loading: true,
    fetched: false,
    errors: [],
  });
  const created = await fetchCreatePaymentMethodCategory(dataParams);

  if (!created) {
    paymentMethodCategories.set({
      data: [],
      loading: false,
      fetched: true,
      errors: [],
    });
    return null;
  }

  paymentMethodCategories.set({
    data: created,
    loading: false,
    fetched: true,
    errors: [],
  });
};
