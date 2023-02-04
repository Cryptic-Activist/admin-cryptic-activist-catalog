import { map } from "nanostores";
import { USER_API_ENDPOINT } from "@/constants/envs";
import { fetchGet, fetchPost } from "@/services/axios";
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from "@/utils/browser/storage";
import {
  GetAdminInfoReturn,
  GetTokensReturn,
  LoginAdminParams,
  AdminState,
  CreateAdminParams,
  Admin,
} from "./types";

export const admin = map<AdminState>({
  // @ts-ignore
  data: {},
  loading: false,
  fetched: false,
  errors: [],
});

const getToken = async (
  adminData: LoginAdminParams
): Promise<GetTokensReturn | null> => {
  const response = await fetchPost(
    `${USER_API_ENDPOINT}/admins/auth/login`,
    adminData
  );

  if (response.status !== 200) {
    return null;
  }

  return response.data.results;
};

const getAdminInfoFromToken = async (
  token: string
): Promise<GetAdminInfoReturn | null> => {
  const response = await fetchGet(
    `${USER_API_ENDPOINT}/admins/auth/login/decode/token/${token}`,
    { Authorization: `Bearer ${token}` }
  );

  if (response.status !== 200) {
    return null;
  }

  return response.data;
};

const loginAdmin = async (adminData: LoginAdminParams) => {
  try {
    const tokens = await getToken(adminData);

    if (!tokens) {
      return null;
    }

    if (getLocalStorage("accessToken") !== undefined) {
      removeLocalStorage("accessToken");
    }

    setLocalStorage("accessToken", tokens.accessToken);
    setLocalStorage("refreshToken", tokens.refreshToken);

    const adminInfo = await getAdminInfoFromToken(tokens.accessToken);

    if (!adminInfo) {
      return null;
    }

    return adminInfo;
  } catch (err) {}
};

export const decodeAccessToken = async () => {
  try {
    const accessToken = getLocalStorage("accessToken");

    if (!accessToken) {
      return null;
    }

    const adminInfo = await getAdminInfoFromToken(accessToken);

    if (!adminInfo) {
      return null;
    }

    return adminInfo;
  } catch (err) {}
};

const setter = (
  data: Admin | object,
  loading: boolean,
  fetched: boolean,
  errors: string[]
) => {
  admin.set({
    data,
    loading,
    fetched,
    errors,
  });
};

export const handleLoginAdmin = async (dataParams: LoginAdminParams) => {
  setter({}, true, false, []);
  const loggedIn = await loginAdmin(dataParams);

  if (!loggedIn) {
    setter({}, false, true, []);
    return null;
  }

  setter(loggedIn, false, true, []);
};
