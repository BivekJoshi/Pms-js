import { jwtDecode } from "jwt-decode";

export const getUser = () => {
  const auth = localStorage?.getItem("auth")
  if (auth) {
    const { authToken } = JSON.parse(auth)

    const decodedInfo = jwtDecode(authToken)
    return decodedInfo
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
