import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { logout } from "../utility/logout";
import toast from "react-hot-toast";

const KycProtectedRoute = ({ redirectTo, allowedClientType }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const clientType = useSelector((state) => state.user?.clientType);

  useEffect(() => {
    if (!clientType) {
      dispatch({ type: "LOGOUT" });
      logout();
      navigate("/login");
      toast.error("Some Error Has Occured. Try Again.");
    }
    // eslint-disable-next-line
  }, []);

  if (allowedClientType !== clientType)
    return <Navigate exact to={redirectTo} />;
  return <Outlet />;
};

export default KycProtectedRoute;
