"use client";
import React from "react";
import useCryptocurrencies from "@/hooks/useCryptocurrencies";
import { CryptocurrenciesList as List } from "@/components/List";

const Users = () => {
  const { cryptocurrencies } = useCryptocurrencies(true);

  return <List items={cryptocurrencies.data} />;
};

export default Users;
