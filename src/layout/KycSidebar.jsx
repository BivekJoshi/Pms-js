import { Grid, Typography, createTheme } from "@mui/material";
import React from "react";
import KycProfileCard from "../kyc/components/KycProfileCard";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { themeSettings } from "../theme";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../utility/logout";

const KycSidebar = ({
  isHomePage,
  userDetails,
  menuList,
  activeStyle,
  handleChange,
}) => {
  const { t } = useTranslation();
  const mode = useSelector((state) => state?.theme?.mode);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentForm = useSelector((state) => state?.user?.currentForm);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <>
      <KycProfileCard
        isHomePage={isHomePage}
        clientName={userDetails?.name}
        clientType={userDetails?.clientType}
        nature={userDetails?.nature}
        formStatus={userDetails?.status}
      />
      <Grid
        p="12px"
        bgcolor={theme.palette.background.alt}
        display="flex"
        flexDirection="column"
        borderRadius="6px 0px 0px 6px"
        width="100%"
      >
        <Grid display="flex" flexDirection="column">
          {menuList.map((item, i) => {
            const path =
              userDetails?.nature === "TMS"
                ? item.path.replace("demat-registration", "tms-registration")
                : item.path;
            const getIcon = () => {
              if (currentForm < i + 1) {
                return theme.palette.mode === "dark" ? item?.disabledIconDark : item?.disabledIcon;
              } else if (currentForm > i + 1) {
                return item?.successIcon;
              } else {
                return item?.icon;
              }
            };

            return (
              <NavLink
                className="navlinks-list"
                to={!isHomePage && path}
                key={i}
                style={({ isActive }) =>
                  isActive && !isHomePage
                    ? activeStyle
                    : {
                      color: theme.palette.text.main,
                      ...(currentForm < i + 1 && {
                        pointerEvents: "none",
                        cursor: "not-allowed",
                        color: theme.palette.mode === "dark" ? "rgb(175, 188, 196)" : "#1C1B1E50",
                        backgroundColor: "transparent",
                        borderRadius: ".5rem ",
                        textTransform: "none",
                        fontWeight: 700,
                      }),
                      ...(currentForm > i + 1 && {
                        color: "#66BB6A",
                      }),
                    }
                }
                onClick={handleChange}
              >
                <Grid className="profileIcon">
                  <Typography variant="h7">{getIcon()}</Typography>
                  <Typography sx={{ width: "100%" }} variant="h7">
                    {t(`${item.title}`)}
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      width: "100%",
                    }}
                  >
                    {currentForm > i + 1 && (
                      <svg
                        width="15"
                        height="16"
                        viewBox="0 0 15 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="0.5"
                          width="15"
                          height="15"
                          rx="7.5"
                          fill="#2E7D32"
                        />
                        <path
                          d="M6.17794 10.3117L3.80728 7.82401L3 8.66517L6.17794 12L13 4.84116L12.1984 4L6.17794 10.3117Z"
                          fill="white"
                        />
                      </svg>
                    )}
                  </div>
                </Grid>
              </NavLink>
            );
          })}
        </Grid>
      </Grid>
      <Grid
        p="12px"
        bgcolor={theme.palette.background.alt}
        display="flex"
        flexDirection="column"
        borderRadius="6px 0px 0px 6px"
        width="100%"
      >
        <Grid display="flex" flexDirection="column">
          <div
            className="navlinks-list"
            onClick={() => {
              dispatch({ type: "LOGOUT" });
              logout();
              navigate("/login");
            }}
          >
            <Grid className="profileIcon" style={{ textDecoration: "none" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="27"
                  height="27"
                  rx="3.5"
                  fill="#EADDFF"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="27"
                  height="27"
                  rx="3.5"
                  stroke="#25005A"
                />
                <path
                  d="M16.7708 17.5625C16.6181 17.3819 16.5417 17.1772 16.5417 16.9483C16.5417 16.7194 16.6181 16.5283 16.7708 16.375L18.3125 14.8333H12.3333C12.0972 14.8333 11.8992 14.7533 11.7392 14.5933C11.5792 14.4333 11.4994 14.2356 11.5 14C11.5 13.7639 11.58 13.5658 11.74 13.4058C11.9 13.2458 12.0978 13.1661 12.3333 13.1667H18.3125L16.7708 11.625C16.6042 11.4583 16.5208 11.2603 16.5208 11.0308C16.5208 10.8014 16.6042 10.6036 16.7708 10.4375C16.9236 10.2708 17.1147 10.1875 17.3442 10.1875C17.5736 10.1875 17.7644 10.2639 17.9167 10.4167L20.9167 13.4167C21 13.5 21.0592 13.5903 21.0942 13.6875C21.1292 13.7847 21.1464 13.8889 21.1458 14C21.1458 14.1111 21.1286 14.2153 21.0942 14.3125C21.0597 14.4097 21.0006 14.5 20.9167 14.5833L17.9167 17.5833C17.7361 17.7639 17.5381 17.8439 17.3225 17.8233C17.1069 17.8028 16.9231 17.7158 16.7708 17.5625ZM8.16667 21.5C7.70833 21.5 7.31583 21.3367 6.98917 21.01C6.6625 20.6833 6.49945 20.2911 6.5 19.8333V8.16667C6.5 7.70833 6.66333 7.31583 6.99 6.98917C7.31667 6.6625 7.70889 6.49945 8.16667 6.5H13.1667C13.4028 6.5 13.6008 6.58 13.7608 6.74C13.9208 6.9 14.0006 7.09778 14 7.33333C14 7.56945 13.92 7.7675 13.76 7.9275C13.6 8.0875 13.4022 8.16722 13.1667 8.16667H8.16667V19.8333H13.1667C13.4028 19.8333 13.6008 19.9133 13.7608 20.0733C13.9208 20.2333 14.0006 20.4311 14 20.6667C14 20.9028 13.92 21.1008 13.76 21.2608C13.6 21.4208 13.4022 21.5006 13.1667 21.5H8.16667Z"
                  fill="#25005A"
                />
              </svg>
              <Typography
                variant="h7"
                style={{ textDecoration: "none", color: theme.palette.mode === "dark" ? "white" : "black" }}
              >
                {t("Logout")}
              </Typography>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default KycSidebar;
