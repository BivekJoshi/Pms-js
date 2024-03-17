import { jwtDecode } from "jwt-decode"
import { kycRoutes } from "../routes/kycRoutes"

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
  return JSON.parse(localStorage.getItem("auth"))
}

export const nextFormPath = (toForm) => {
  const { H: clientType, I: formNature } = getUser()
  const routeList = kycRoutes(clientType, "DP")
  const nextUrl = routeList.find((item) => item.id === toForm)
  if (nextUrl) {
    return `/kyc/${nextUrl?.path}`
  } else {
    return ""
  }
}
