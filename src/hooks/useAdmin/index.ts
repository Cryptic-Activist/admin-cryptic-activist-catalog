"use client";
"use client";
import { useStore } from "@nanostores/react";
import { useEffect } from "react";

import {
  decodeAccessToken as handleDecodeAccessToken,
  admin,
  handleLoginAdmin,
} from "@/stores/admin";
import { CreateUserParams } from "./types";

let counter: number = 0;

const useUsers = () => {
  const $admin = useStore(admin);

  const loginAdmin = async (data: CreateUserParams) => {
    await handleLoginAdmin(data);
  };

  const decodeAccessToken = async () => {
    console.log("decoding...");
    await handleDecodeAccessToken();
  };

  useEffect(() => {
    if (counter === 0) {
      decodeAccessToken();
      counter += 1;
    }
  }, []);

  return { loginAdmin, handleDecodeAccessToken, admin: $admin };
};

export default useUsers;
