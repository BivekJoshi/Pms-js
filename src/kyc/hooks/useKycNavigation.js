import React from "react";
import { getUser } from "../../utility/userHelper";
import { kycRoutes } from "../../routes/kycRoutes";
import { useDispatch, useSelector } from "react-redux";
import { SET_FORM } from "../../redux/types/types";

const useKycNavigation = () => {
  const isMinor = useSelector((state) => state.user?.isMinor);
  const dispatch = useDispatch();
  const nextFormPath = () => {
    const { H: clientType, I: formNature } = getUser();
    const location = window.location;
    const currentpath = location?.hash?.replace("#/kyc/", "");
    const routeList = kycRoutes(clientType, formNature, isMinor);
    const currentId = routeList?.find((d) => d.path === currentpath)?.id;
    const nextURLId = (currentId || 1) + 1;
    const nextUrl = routeList.find((item) => item.id === nextURLId);
    if (nextUrl) {
      dispatch({ type: SET_FORM, payload: nextURLId });

      return `/kyc/${nextUrl?.path}`;
    } else {
      return "";
    }
  };

  const previousFormPath = () => {
    const { H: clientType, I: formNature } = getUser();
    const location = window.location;
    const currentpath = location?.hash?.replace("#/kyc/", "");
    const routeList = kycRoutes(clientType, formNature, isMinor);
    const currentId = routeList?.find((d) => d.path === currentpath)?.id;
    const nextURLId = (currentId || 1) - 1;
    const nextUrl = routeList.find((item) => item.id === nextURLId);
    if (nextUrl) {
      dispatch({ type: SET_FORM, payload: nextURLId });
      return `/kyc/${nextUrl?.path}`;
    } else {
      return "";
    }
  };

  return { nextFormPath, previousFormPath }; // Return nextFormPath function
};

export default useKycNavigation;
