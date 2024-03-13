import { jwtDecode } from "jwt-decode"
 
export const getUser = () => {
  const authDataString = localStorage.getItem("auth")
  if (authDataString) {
    return jwtDecode(authDataString)
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
 
