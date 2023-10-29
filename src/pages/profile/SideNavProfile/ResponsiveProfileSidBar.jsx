import { Button, Tab, Tabs } from "@mui/base";
import { Box, Drawer, Grid, Typography } from "@mui/material";
import React from "react";
import profile from "../../../assets/profilePicture.png";
import Camera from "../../../assets/camera.png";
import UpdateProfile from "../../../assets/UpdateProfile.png";
import Notification from "../../../assets/Notification.png";
import Subscription from "../../../assets/Subscription.png";
import Security from "../../../assets/Security.png";
import Transaction from "../../../assets/Transaction.png";
import Bills from "../../../assets/Bill.png";
import Statements from "../../../assets/Statement.png";
import Payment from "../../../assets/Payment.png";
import Terms from "../../../assets/Terms.png";
import Update from "../../../assets/Update.png";
import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";
import { TabContext } from "@mui/lab";

const ResponsiveProfileSidBar = ({
  userInfoData,
  value,
  handleChange,
  isMenuOpen,
}) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <Grid display="flex" flexDirection="column" gap="24px">
          <Grid
            display="flex"
            color={theme.palette.text.main}
            bgcolor={theme.palette.background.alt}
            alignItems="center"
            gap="16px"
            justifyContent="space-evenly"
            borderRadius="6px"
            position="relative"
            padding="16px"
          >
            <img
              src={profile}
              alt="statusSuccess.png"
              height="135px"
              style={{ borderRadius: "50%" }}
            />
            <img
              src={Camera}
              alt="Camera"
              style={{ position: "absolute", bottom: "22%", left: "19%" }}
            />
            <Grid display="flex" flexDirection="column" gap="8px">
              <Typography variant="h4">{userInfoData?.clientName}</Typography>
              <Typography variant="h7">{userInfoData?.email}</Typography>
              <Typography variant="h7">{userInfoData?.mobileNo}</Typography>
              <Button
                sx={{
                  bgcolor: "#FFDCBC",
                  border: "1px solid #7A757F",
                  borderRadius: "4px",
                  padding: "2px 4px",
                  color: "black",
                  width: "fit-content",
                }}
              >
                {t("Basic")}
              </Button>
            </Grid>
          </Grid>
          <Grid
            p="24px"
            bgcolor={theme.palette.background.alt}
            display="flex"
            flexDirection="column"
            gap="20px"
            borderRadius="8px"
            width="100%"
          >
            <Grid display="flex" flexDirection="column">
              <Typography variant="h4" p="12px 0">
                {t("General")}
              </Typography>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="lab API tabs example"
                sx={{ display: "flex", flexDirection: "column" }}
                orientation="vertical"
              >
             <Tab
                  label={
                    <Grid className="profileIcon">
                      <img src={UpdateProfile} alt="UpdateProfile" />
                      <Typography variant="h7">
                        {t("UPDATE PROFILE")}
                      </Typography>
                    </Grid>
                  }
                  value="1"
                  style={{
                    color: theme.palette.text.main,
                    height: "0",
                    alignItems: "flex-start",
                    padding: ".2",
                    backgroundColor:
                      value === "1"
                        ? theme.palette.primary.main
                        : "transparent",
                    borderRadius: ".5rem",
                  }}
                />

                {/* <Tab
                  label={
                    <Grid className="profileIcon">
                      <img src={Notification} alt="UpdateProfile" />
                      <Typography variant="h7">
                        {t("NOTIFICATION CONFIGURATION")}
                      </Typography>
                    </Grid>
                  }
                  value="2"
                  style={{
                    color: theme.palette.text.main,
                    height: "0",
                    alignItems: "flex-start",
                    padding: ".2",
                    backgroundColor:
                      value === "2"
                        ? theme.palette.primary.main
                        : "transparent",
                    borderRadius: ".5rem",
                  }}
                />
                <Tab
                  label={
                    <Grid className="profileIcon">
                      <img src={Subscription} alt="UpdateProfile" />
                      <Typography variant="h7">{t("SUBSCRIPTION")}</Typography>
                    </Grid>
                  }
                  value="3"
                  style={{
                    color: theme.palette.text.main,
                    height: "0",
                    alignItems: "flex-start",
                    padding: ".2",
                    backgroundColor:
                      value === "3"
                        ? theme.palette.primary.main
                        : "transparent",
                    borderRadius: ".5rem",
                  }}
                />
                <Tab
                  label={
                    <Grid className="profileIcon">
                      <img src={Security} alt="UpdateProfile" />
                      <Typography variant="h7">
                        {t("CHANGE PASSWORD")}
                      </Typography>
                    </Grid>
                  }
                  value="4"
                  style={{
                    color: theme.palette.text.main,
                    height: "0",
                    alignItems: "flex-start",
                    padding: ".2",
                    backgroundColor:
                      value === "4"
                        ? theme.palette.primary.main
                        : "transparent",
                    borderRadius: ".5rem",
                  }}
                />  */}
              </Tabs>
            </Grid>
            <Grid display="flex" flexDirection="column">
              <Typography variant="h4" p="12px 0">
                {t("Activities")}
              </Typography>
              {/* <Tabs
                value={value}
                orientation="vertical"
                onChange={handleChange}
                aria-label="lab API tabs example"
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Tab
                  label={
                    <Grid className="profileIcon">
                      <img src={Transaction} alt="UpdateProfile" />
                      <Typography variant="h7">{t("TRANSACTION")}</Typography>
                    </Grid>
                  }
                  value="5"
                  style={{
                    color: theme.palette.text.main,
                    height: "0",
                    alignItems: "flex-start",
                    backgroundColor:
                      value === "5"
                        ? theme.palette.primary.main
                        : "transparent",
                    borderRadius: ".5rem",
                  }}
                />
                <Tab
                  label={
                    <Grid className="profileIcon">
                      <img src={Bills} alt="UpdateProfile" />
                      <Typography variant="h7">{t("BILL")}</Typography>
                    </Grid>
                  }
                  value="6"
                  style={{
                    color: theme.palette.text.main,
                    height: "0",
                    alignItems: "flex-start",
                    padding: ".2",
                    backgroundColor:
                      value === "6"
                        ? theme.palette.primary.main
                        : "transparent",
                    borderRadius: ".5rem",
                  }}
                />
                <Tab
                  label={
                    <Grid className="profileIcon">
                      <img src={Statements} alt="UpdateProfile" />
                      <Typography variant="h7">{t("STATEMENT")}</Typography>
                    </Grid>
                  }
                  value="7"
                  style={{
                    color: theme.palette.text.main,
                    height: "0",
                    alignItems: "flex-start",
                    padding: ".2",
                    backgroundColor:
                      value === "7"
                        ? theme.palette.primary.main
                        : "transparent",
                    borderRadius: ".5rem",
                  }}
                />
                <Tab
                  label={
                    <Grid className="profileIcon">
                      <img src={Payment} alt="UpdateProfile" />
                      <Typography variant="h7">
                        {t("RECEIPT/PAYMENT")}
                      </Typography>
                    </Grid>
                  }
                  value="8"
                  style={{
                    color: theme.palette.text.main,
                    height: "0",
                    alignItems: "flex-start",
                    padding: ".2",
                    backgroundColor:
                      value === "8"
                        ? theme.palette.primary.main
                        : "transparent",
                    borderRadius: ".5rem",
                  }}
                />
              </Tabs> */}
            </Grid>
            <Grid>
              <Typography variant="h4" p="12px 0">
                {t("More")}
              </Typography>
              {/* <Tabs
                value={value}
                orientation="vertical"
                onChange={handleChange}
                aria-label="lab API tabs example"
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Tab
                  label={
                    <Grid className="profileIcon">
                      <img src={Terms} alt="UpdateProfile" />
                      <Typography variant="h7">
                        {t("TERMS & CONDITION")}
                      </Typography>
                    </Grid>
                  }
                  value="9"
                  style={{
                    color: theme.palette.text.main,
                    height: "0",
                    alignItems: "flex-start",
                    padding: ".2",
                    backgroundColor:
                      value === "9"
                        ? theme.palette.primary.main
                        : "transparent",
                    borderRadius: ".5rem",
                  }}
                />
                <Tab
                  label={
                    <Grid className="profileIcon">
                      <img src={Update} alt="UpdateProfile" />
                      <Typography variant="h7">
                        {t("PRIVACY POLICY")}
                      </Typography>
                    </Grid>
                  }
                  value="10"
                  style={{
                    color: theme.palette.text.main,
                    height: "0",
                    alignItems: "flex-start",
                    padding: ".2",
                    backgroundColor:
                      value === "10"
                        ? theme.palette.primary.main
                        : "transparent",
                    borderRadius: ".5rem",
                  }}
                />
              </Tabs> */}
            </Grid>
          </Grid>
        </Grid>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ResponsiveProfileSidBar;
