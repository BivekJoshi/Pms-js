import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, Outlet, useNavigate } from "react-router-dom"
import { logout } from "../utility/logout"
import toast from "react-hot-toast"
import { getUserToken } from "../utility/userHelper"

const KycProtectedRoute = ({ redirectTo, allowedClientType, allowedFormNature }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const clientType = useSelector((state) => state.user?.clientType)
  const formNature = useSelector((state) => state.user?.formNature)
  const userStatus = useSelector((state) => state?.user?.status);

  const authToken = getUserToken()

  useEffect(() => {
    if (userStatus === "SUBMITTED") {
      navigate("/forbidden");
      return;
    }
    if (!clientType && !formNature && !authToken) {
      dispatch({ type: "LOGOUT" })
      logout()
      navigate("/login")
      toast.error("Some Error Has Occured. Try Again.")
    }
    // eslint-disable-next-line
  }, [])

  if (allowedClientType !== clientType && allowedFormNature !== formNature)
    return <Navigate exact to={redirectTo} />
  return <Outlet />
}

export default KycProtectedRoute
