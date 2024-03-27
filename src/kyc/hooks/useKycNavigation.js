import React from "react";
import { getUser } from "../../utility/userHelper";
import { kycRoutes } from "../../routes/kycRoutes";
import { useSelector } from "react-redux";

const useKycNavigation = () => {
  const isMinor = useSelector((state) => state.user?.isMinor);

  const nextFormPath = () => {
    const { H: clientType, I: formNature } = getUser();
    const location = window.location;
    const currentpath = location?.hash?.replace("#/kyc/", "");
    const routeList = kycRoutes(clientType, formNature, isMinor);
    const currentId = routeList?.find((d) => d.path === currentpath)?.id;
    const nextURLId = (currentId || 1) + 1;
    const nextUrl = routeList.find((item) => item.id === nextURLId);
    if (nextUrl) {
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
      return `/kyc/${nextUrl?.path}`;
    } else {
      return "";
    }
  };

  return { nextFormPath, previousFormPath }; // Return nextFormPath function
};

export default useKycNavigation;
