import { jwtDecode } from "jwt-decode";
import { kycRoutes } from "../routes/kycRoutes";
import { useLocation } from "react-router";

export const getUser = () => {
  const auth = localStorage?.getItem("auth");
  if (auth) {
    const { authToken } = JSON.parse(auth);
    const decodedInfo = jwtDecode(authToken);
    return decodedInfo;
  } else {
    return {};
  }
};

export const setUser = (token) => {
  if (token) {
    window.localStorage.setItem(
      "auth",
      JSON.stringify({
        authToken: token,
      })
    );
  }
};

export const getUserToken = () => {
  return JSON.parse(localStorage.getItem("auth"));
};

export const nextFormPath = () => {
  const { H: clientType, I: formNature } = getUser();
  const location = window.location;
  const currentpath = location?.hash?.replace("#/kyc/", "");
  const routeList = kycRoutes(clientType, formNature);
  const currentId = routeList?.find((d) => d.path === currentpath)?.id;
  const nextURLId = (currentId || 1) + 1;
  const nextUrl = routeList.find((item) => item.id === nextURLId);
  if (nextUrl) {
    return `/kyc/${nextUrl?.path}`;
  } else {
    return "";
  }
};

export const previousFormPath = () => {
  const { H: clientType, I: formNature } = getUser();
  const location = window.location;
  const currentpath = location?.hash?.replace("#/kyc/", "");
  const routeList = kycRoutes(clientType, formNature);
  const currentId = routeList?.find((d) => d.path === currentpath)?.id;
  const nextURLId = (currentId || 1) - 1;
  const nextUrl = routeList.find((item) => item.id === nextURLId);
  if (nextUrl) {
    return `/kyc/${nextUrl?.path}`;
  } else {
    return "";
  }
};
