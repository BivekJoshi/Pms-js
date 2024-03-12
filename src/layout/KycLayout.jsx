import {
  Box,
  CssBaseline,
  Drawer,
  Grid,
  IconButton,
  ThemeProvider,
  Tooltip,
  createTheme,
  useMediaQuery,
} from "@mui/material"
import React, { useEffect, useMemo, useState } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { themeSettings } from "../theme"
import { useDispatch, useSelector } from "react-redux"
import KycNavbar from "../components/navbar/KycNavbar"
import { useTranslation } from "react-i18next"
import "./layout.css"
import {
  corporateKycDematList,
  corporateKycTMSList,
  individualKycDematList,
  individualkycTmsList,
} from "./kycMenuList"
import { useGetTheme } from "../hooks/brokerTheme/useBrokerTheme"
import _ from "lodash"
import { useGetMetaData } from "../kyc/hooks/useMetaDataKyc"
import Spinner from "../components/spinner/Spinner"
import MenuIcon from "@mui/icons-material/Menu"
import KycSidebar from "./KycSidebar"
import { getUser, getUserToken } from "../utility/userHelper"

const KycLayout = () => {
  const mode = useSelector((state) => state?.theme?.mode)
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const [isHomePage, setIsHomePage] = useState(false)
  const navigate = useNavigate()
  const [menuList, setMenuList] = useState([])
  const [openDrawer, setOpenDrawer] = useState(false)
  const brokerId = useSelector((state) => state?.user.details?.brokerNo)

  const userDetails = useSelector((state) => state?.user)
  const { data, isLoading, refetch } = useGetTheme(brokerId)

  const { authToken } = getUserToken()
  const { id: userId } = getUser()
  useEffect(() => {
    if (!authToken) {
      navigate("/login")
    } else {
      refetch()
    }
    if (data) {
      dispatch({ type: "SET_BROKER_THEME", payload: data?.web })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isLoading, authToken])
  useEffect(() => {
    if (pathname && pathname.length > 2) {
      const isHome =
        pathname.split("/")[pathname.split("/").length - 1] === "home"
      setIsHomePage(isHome)
    }
  }, [pathname])

  const {
    data: userData,
    isLoading: userLoad,
    refetch: userRefetch,
  } = useGetMetaData(userId)

  useEffect(() => {
    if (_.isEmpty(userDetails)) {
      userRefetch()
    }
  }, [userData])

  useEffect(() => {
    if (!_.isEmpty(userDetails)) {
      if (userDetails.clientType) {
        if (userDetails.clientType === "I" && userDetails.nature === "DP") {
          setMenuList(individualKycDematList)
        } else if (
          userDetails.clientType === "I" &&
          userDetails.nature === "TMS"
        ) {
          setMenuList(individualkycTmsList)
        } else if (
          userDetails.clientType === "C" &&
          userDetails.nature === "DP"
        ) {
          setMenuList(corporateKycDematList)
        } else if (
          userDetails.clientType === "C" &&
          userDetails.nature === "TMS"
        ) {
          setMenuList(corporateKycTMSList)
        } else {
          setMenuList([])
        }
      }
    } else {
      setMenuList([])
    }
  }, [userDetails])
  const theme = useMemo(
    () => createTheme(themeSettings(mode, data?.web)),
    [mode, data, isLoading]
  )
  const isSm = useMediaQuery(theme.breakpoints.down("md"))

  const handleChange = (event, newValue) => {
    setOpenDrawer(false)
    window.scrollTo(0, 0)
  }

  const activeStyle = {
    color: theme.palette.text.main,
    backgroundColor: theme.palette.primary.main,
    borderRadius: ".5rem ",
    textTransform: "none",
    fontWeight: 700,
  }

  if (userLoad) {
    return <Spinner />
  }
  return (
    <ThemeProvider theme={theme} key={userData}>
      <CssBaseline />
      <KycNavbar />
      <section
        style={{
          padding: "16px",
          minHeight: "94dvh",
          position: "relative",
        }}
        // data-aos='fade-right'
      >
        <Box
          sx={{
            gridTemplateRows: isSm ? "4% 1fr" : "1fr",
            gridTemplateColumns: !isSm ? "2.5fr 10fr" : "1fr",
            minHeight: "94dvh",
          }}
          color={theme.palette.text.main}
          display="grid"
          gap="1rem"
        >
          <Grid
            display="flex"
            flexDirection="column"
            sx={{
              display: isSm ? "none" : "flex",
            }}
          >
            <Grid
              display="flex"
              flexDirection="column"
              gap="16px"
              sx={{
                borderRadius: "6px 0px 0px 6px",
                position: "sticky",
                top: "80px",
                bottom: 0,
                overflowY: "auto",
                maxHeight: "90vh",
              }}
            >
              <KycSidebar
                isHomePage={isHomePage}
                userDetails={userDetails}
                menuList={menuList}
                data={data}
                isLoading={isLoading}
                activeStyle={activeStyle}
              />
            </Grid>
          </Grid>

          <div
            style={{
              display: isSm ? "flex" : "none",
              justifyContent: "flex-start",
            }}
          >
            <IconButton type="button" onClick={() => setOpenDrawer(true)}>
              <Tooltip title="Profile Menu">
                <div style={{ display: "flex" }}>
                  <MenuIcon />
                </div>
              </Tooltip>
            </IconButton>
          </div>
          <Drawer
            open={openDrawer}
            anchor={"left"}
            onClose={() => setOpenDrawer(false)}
            PaperProps={{
              sx: { width: "320px" },
            }}
          >
            <Grid
              display="flex"
              flexDirection="column"
              gap="16px"
              sx={{
                borderRadius: "6px 0px 0px 6px",
                position: "sticky",
                overflowY: "auto",
                maxHeight: "100vh",
              }}
            >
              <KycSidebar
                isHomePage={isHomePage}
                userDetails={userDetails}
                menuList={menuList}
                data={data}
                isLoading={isLoading}
                activeStyle={activeStyle}
                handleChange={handleChange}
              />
            </Grid>
          </Drawer>

          <Box
            color={theme.palette.text.main}
            bgcolor={theme.palette.background.alt}
            sx={{
              borderRadius: "6px",
              padding: "16px",
              boxShadow:
                "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </section>
    </ThemeProvider>
  )
}

export default KycLayout
