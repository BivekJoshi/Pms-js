import React, { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate, useLocation } from "react-router-dom";
import { checkIfExpired } from "../../../api/axiosInterceptor";
const initialValue = {
  id: "",
  name: "",
  DN: "",
  CT: "",
  isAuth: false,
  nature: "",
  currentForm: 0,
  maxForm: 0,
};
const Context = createContext(initialValue);

export const useAuthContext = () => useContext(Context);

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(initialValue);
  useEffect(() => {
    const token = window.localStorage.getItem("regToken");
    if (checkIfExpired(token)) {
      localStorage.clear();
      navigate("/");
    }
    if (token) {
      const userToken = jwtDecode(token);
      const userDetails = JSON.parse(
        window.localStorage.getItem("userDetails")
      );
      const statusData = JSON.parse(window.localStorage.getItem("userStatus"));
      const { CT, DN, id, name, nature } = userToken;
      setUser({
        CT,
        DN,
        id,
        name,
        status: statusData,
        isAuth: true,
        tempPassword: userDetails?.tempPassword,
        nature: nature,
        currentForm: userDetails?.currentForm,
        maxForm: userDetails?.maxFormSaved,
        videoId: userDetails?.videoId,
      });
      navigate(
        userDetails?.tempPassword
          ? "change-password"
          : (userDetails?.status === "PENDING" ||
              userDetails?.status === "REJECTED") &&
            userDetails?.nature === "DP"
          ? "/demat-registration"
          : (userDetails?.status === "PENDING" ||
              userDetails?.status === "REJECTED") &&
            userDetails?.nature === "TMS"
          ? "/kyc-registration"
          : "/kyc-submitted"
      );
    }
  }, []);
  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
};

export default AuthContextProvider;
