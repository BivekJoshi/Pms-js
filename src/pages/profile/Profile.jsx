import React, { useState } from "react";
import {
  Box,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Tab,
  Tabs,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import UpdateProfile from "../../assets/UpdateProfile.png";
import Notification from "../../assets/Notification.png";
import Subscription from "../../assets/Subscription.png";
import Security from "../../assets/Security.png";
import Transaction from "../../assets/Transaction.png";
import Bills from "../../assets/Bill.png";
import Statements from "../../assets/Statement.png";
import Payment from "../../assets/Payment.png";
import Terms from "../../assets/Terms.png";
import ProfileInfo from "./ProfileTab/ProfileInfo";
import ChangePassword from "./ProfileTab/changePassword/ChangePassword";
import ProfileNotification from "./ProfileTab/ProfileNotification";
import SubscriptionTab from "./SubscriptionTab/SubscriptionTab";
import Transactions from "./transaction/Transactions";
import Bill from "./bill/Bill";
import ReceiptPayment from "./receipt-payment/ReceiptPayment";
import Statement from "./statement/Statement";
import {
  useGetUserInfo,
  useGetUserTransactionDate,
} from "../../hooks/portfolio/usePortfolio";
import { TabContext, TabPanel } from "@mui/lab";
import { useTranslation } from "react-i18next";
import MenuIcon from "@mui/icons-material/Menu";
import ProfileImage from "./ProfileImage";
import ProfileButton from "./Button/ProfileButton";
import TermsCondition from "./TermsCondition/TermsCondition";
import PrivacyPolicy from "./privacyPolicy/PrivacyPolicy";

const Profile = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);
  const { t } = useTranslation();

  const { data: userInfoData, isLoading: loading } = useGetUserInfo();
  const { data: tradeDates } = useGetUserTransactionDate();
  const isSm = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setOpenDrawer(false);
    window.scrollTo(0, 0);
  };

  const sideBarMenuItems = [
    {
      id: "head-1",
      name: "General",
      items: [
        {
          title: "Update Profile",
          id: 0,
          icon: UpdateProfile,
        },
        {
          title: "Notification Configuration",
          id: 1,
          icon: Notification,
        },
        {
          title: "Subscription",
          id: 2,
          icon: Subscription,
        },
        {
          title: "Change Password",
          id: 3,
          icon: Security,
        },
      ],
    },
    {
      id: "head-2",
      name: "Activities",
      items: [
        {
          title: "Transaction",
          id: 4,
          icon: Transaction,
        },
        {
          title: "Bill",
          id: 5,
          icon: Bills,
        },
        {
          title: "Statement",
          id: 6,
          icon: Statements,
        },
        {
          title: "Receipt / Payment",
          id: 7,
          icon: Payment,
        },
      ],
    },
    {
      id: "head-3",
      name: "More",
      items: [
        {
          title: "Terms & Conditions",
          id: 8,
          icon: Terms,
        },
        {
          title: "Privacy Policy",
          id: 9,
          icon: Terms,
        },
      ],
    },
  ];

  const componentList = [
    {
      id: 0,
      component: <ProfileInfo data={userInfoData} />,
    },
    {
      id: 1,
      component: <ProfileNotification />,
    },
    {
      id: 2,
      component: <SubscriptionTab />,
    },
    {
      id: 3,
      component: <ChangePassword />,
    },
    {
      id: 4,
      component: <Transactions tradeDate={tradeDates?.lastTransactionDate} />,
    },
    {
      id: 5,
      component: <Bill tradeDate={tradeDates?.lastBillDate} />,
    },
    {
      id: 6,
      component: <Statement tradeDate={tradeDates?.lastStatementDate} />,
    },
    {
      id: 7,
      component: <ReceiptPayment tradeDate={tradeDates?.lastStatementDate} />,
    },
    {
      id: 8,
      component: <TermsCondition />,
    },
    {
      id: 9,
      component: <PrivacyPolicy />,
    },
  ];

  return (
    <Box
      display="grid"
      gap="1rem"
      sx={{
        gridTemplateRows: isSm ? "4% 1fr" : "1fr",
        gridTemplateColumns: !isSm ? "2fr 10fr" : "1fr",
      }}
      color={theme.palette.text.main}
    >
      <TabContext value={value}>
        <Grid
          display="flex"
          flexDirection="column"
          gap="24px"
          sx={{
            display: isSm ? "none" : "flex",
          }}
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
              <ProfileImage userInfoData={userInfoData} loading={loading} />

              <Grid display="flex" flexDirection="column" gap="8px">
                <Typography variant="h5">{userInfoData?.clientName}</Typography>
                <Typography variant="h7">{userInfoData?.email}</Typography>
                <Typography variant="h7">{userInfoData?.mobileNo}</Typography>
                <ProfileButton userInfoData={userInfoData?.subscription} />
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
              {sideBarMenuItems.map((menuItem, i) => {
                return (
                  <Grid display="flex" flexDirection="column" key={i}>
                    <Typography variant="h4" p="12px 0" key={i}>
                      {t(`${menuItem?.name}`)}
                    </Typography>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                      sx={{ display: "flex", flexDirection: "column" }}
                      orientation="vertical"
                    >
                      {menuItem.items.map((item, i) => {
                        return (
                          <Tab
                            key={i}
                            label={
                              <Grid className="profileIcon">
                                <img src={item.icon} alt="UpdateProfile" />
                                <Typography variant="h7">
                                  {t(`${item.title}`)}
                                </Typography>
                              </Grid>
                            }
                            value={item?.id}
                            style={{
                              color: theme.palette.text.main,
                              height: "0",
                              alignItems: "flex-start",
                              padding: ".2",
                              backgroundColor:
                                value === item?.id
                                  ? theme.palette.primary.main
                                  : "transparent",
                              borderRadius: ".5rem 0 0 .5rem ",
                              textTransform: "none",
                            }}
                          />
                        );
                      })}
                    </Tabs>
                    <Divider />
                  </Grid>
                );
              })}
            </Grid>
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
              <MenuIcon />
            </Tooltip>
          </IconButton>
        </div>

        <Drawer
          open={openDrawer}
          anchor={"left"}
          onClose={() => setOpenDrawer(false)}
          PaperProps={{
            sx: { width: "400px" },
          }}
          className="profileNavBar"
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
              <ProfileImage userInfoData={userInfoData} loading={loading} />
              <Grid display="flex" flexDirection="column" gap="8px">
                <Typography variant="h5">{userInfoData?.clientName}</Typography>
                <Typography variant="h7">{userInfoData?.email}</Typography>
                <Typography variant="h7">{userInfoData?.mobileNo}</Typography>
                <ProfileButton userInfoData={userInfoData?.subscription} />
              </Grid>
            </Grid>

            <Grid
              p="0 24px 24px"
              bgcolor={theme.palette.background.alt}
              display="flex"
              flexDirection="column"
              gap="20px"
              borderRadius="8px"
              width="100%"
            >
              {sideBarMenuItems.map((menuItem, i) => {
                return (
                  <Grid display="flex" flexDirection="column" key={i}>
                    <Typography variant="h4" p="12px 0" key={i}>
                      {t(`${menuItem?.name}`)}
                    </Typography>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                      sx={{ display: "flex", flexDirection: "column" }}
                      orientation="vertical"
                    >
                      {menuItem.items.map((item, i) => {
                        return (
                          <Tab
                            key={i}
                            label={
                              <Grid className="profileIcon">
                                <img src={item.icon} alt="UpdateProfile" />
                                <Typography variant="h7">
                                  {t(`${item.title}`)}
                                </Typography>
                              </Grid>
                            }
                            value={item?.id}
                            style={{
                              color: theme.palette.text.main,
                              height: "0",
                              alignItems: "flex-start",
                              padding: ".2",
                              backgroundColor:
                                value === item?.id
                                  ? theme.palette.primary.main
                                  : "transparent",
                              borderRadius: ".5rem 0 0 .5rem ",
                              textTransform: "none",
                            }}
                          />
                        );
                      })}
                    </Tabs>
                    <Divider />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Drawer>

        {componentList.map((item, i) => {
          return (
            <TabPanel sx={{ p: 0 }} value={i} key={i}>
              {item?.component}
            </TabPanel>
          );
        })}
      </TabContext>
    </Box>
  );
};

export default Profile;
