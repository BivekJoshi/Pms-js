import { jwtDecode } from "jwt-decode"

export const getUser = () => {
  const { authToken } = JSON.parse(localStorage.getItem("auth"))
  if (authToken) {
    const decodedInfo = jwtDecode(authToken)
    return decodedInfo
  } else {
    return {}
  }
}

export const setUser = (token) => {
  if (token) {
    window.localStorage.setItem(
      "auth",
      JSON.stringify({
        authToken: token,
      })
    )
  }
}

export const getUserToken = () => {
  return JSON.parse(localStorage.getItem("auth"))
}
