import React, { useState } from "react";
import { Box, Button, Grid, Tab } from "@mui/material";
import { Tabs, Typography, useTheme } from "@mui/material";
import profile from "../../assets/profilePicture.png";
import Camera from "../../assets/camera.png";
import UpdateProfile from "../../assets/UpdateProfile.png";
import Notification from "../../assets/Notification.png";
import Subscription from "../../assets/Subscription.png";
import Security from "../../assets/Security.png";
import Transaction from "../../assets/Transaction.png";
import Bills from "../../assets/Bill.png";
import Statements from "../../assets/Statement.png";
import Payment from "../../assets/Payment.png";
import Terms from "../../assets/Terms.png";
import Update from "../../assets/Update.png";
import ProfileInfo from "./ProfileTab/ProfileInfo";
import ChangePassword from "./ProfileTab/ChangePassword";
import SubscriptionTab from "./SubscriptionTab/SubscriptionTab";
import Transactions from "./transaction/Transactions";
import Bill from "./bill/Bill";
import ReceiptPayment from "./receipt-payment/ReceiptPayment";
import Statement from "./statement/Statement";
import { useGetUserInfo } from "../../hooks/portfolio/usePortfolio";
import { TabContext, TabPanel } from "@mui/lab";
import { useTranslation } from "react-i18next";
import MenuIcon from "@mui/icons-material/Menu";
import ResponsiveProfileSidBar from "./SideNavProfile/ResponsiveProfileSidBar";

const Profile = () => {
  const theme = useTheme();
  const [value, setValue] = useState("1");
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: userInfoData, isLoading: loading } = useGetUserInfo();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      className="profileGrid"
      display="grid"
      gap="1rem"
      mt="1.8rem"
      color={theme.palette.text.main}
    >
      <TabContext value={value}>
        <Grid display="flex" flexDirection="column" gap="24px">
          {/* <MenuIcon
            className="smallIcon"
            sx={{ width: "24px", height: "24px" }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          /> */}
          <ResponsiveProfileSidBar
            value={value}
            userInfoData={userInfoData}
            handleChange={handleChange}
            MenuIcon={MenuIcon}
          />
          <Grid className="smallScreen">
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
                // width="135px"
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
                  <Tab
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
                        <Typography variant="h7">
                          {t("SUBSCRIPTION")}
                        </Typography>
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
                  />
                </Tabs>
              </Grid>
              <Grid display="flex" flexDirection="column">
                <Typography variant="h4" p="12px 0">
                  {t("Activities")}
                </Typography>
                <Tabs
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
                </Tabs>
              </Grid>
              <Grid>
                <Typography variant="h4" p="12px 0">
                  {t("More")}
                </Typography>
                <Tabs
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
                </Tabs>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <TabPanel sx={{ p: 0 }} value="1">
          <ProfileInfo data={userInfoData} />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value="2">
          Notification
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value="3">
          <SubscriptionTab />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value="4">
          <ChangePassword />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value="5">
          <Transactions />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value="6">
          <Bill />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value="7">
          <Statement />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value="8">
          <ReceiptPayment />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value="9">
          Terms & Conditions
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value="10">
          Privacy & Policy
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default Profile;
