import { useTheme } from "@emotion/react";
import { Box, Button, Divider, Grid, List, ListItem } from "@mui/material";
import { Switch, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useGetNotification } from "../../../hooks/notificationConfiguration/useNotification";
import { useState } from "react";
import toast from "react-hot-toast";
import useNotificationForm from "../../../hooks/notificationConfiguration/useNotificationForm";
import Spinner from "../../../components/spinner/Spinner";
import CustomizedSwitches from "../../../components/switch/NotificationSwitch";
import { useTranslation } from "react-i18next";

const ProfileNotification = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const mode = theme.palette.mode;
  const {
    data: notificationData,
    isLoading: loadingNotification,
  } = useGetNotification();

  const [switchStates, setSwitchStates] = useState(notificationData);

  const { formik, updateFormikValues, resetForm } = useNotificationForm(
    switchStates
  );
  useEffect(() => {
    setSwitchStates(notificationData);
    updateFormikValues(notificationData);
  }, [notificationData]);

  const handleFormSubmit = () => {
    formik.handleSubmit();
  };

  const handleReset = () => {
    formik.handleSubmit();
    resetForm();
    // const defaultSwitchStates = {
    //   ipoFpo: false,
    //   rightShare: false,
    //   dividend: false,
    //   auction: false,
    //   bondDebenture: false,
    //   agmSgm: false,
    //   mergerAcquisition: false,
    //   financialReports: false,
    //   newsLetter: false,
    //   general: false,
    // };
    // setSwitchStates(defaultSwitchStates);
  };

  if (loadingNotification) {
    return <Spinner />;
  }
  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start">
      <List
        sx={{
          width: "100%",
          bgcolor: theme.palette.background.alt,
          paddingTop: "0",
        }}
        // color={theme.palette.text.main}
      >
        <ListItem className="notificationBg">
          <Typography color="white" pr="16px">
            Website
          </Typography>
        </ListItem>
        <ListItem className="notificationSwitch">
          <Grid display="flex" flexDirection="column">
            <Typography>{t("IPO/FPO")}</Typography>
            {t("Announce, Opening date and Closing Date")}
          </Grid>
          <CustomizedSwitches
            checked={switchStates?.ipoFpo}
            onChange={(event) => {
              const newState = {
                ...switchStates,
                ipoFpo: event.target.checked,
              };
              setSwitchStates(newState);
              formik.handleChange(event);
            }}
            name="ipoFpo"
            id="ipoFpo"
          />
        </ListItem>
        <Divider />
        <ListItem className="notificationSwitch">
          <Grid display="flex" flexDirection="column">
            <Typography>{t("Right Share")}</Typography>
            {t("Declare, a day before Book Close Date")}
          </Grid>
          <CustomizedSwitches
            checked={switchStates?.rightShare}
            onChange={(event) => {
              const newState = {
                ...switchStates,
                rightShare: event.target.checked,
              };
              setSwitchStates(newState);
              formik.handleChange(event);
            }}
            name="rightShare"
            id="rightShare"
          />
        </ListItem>
        <Divider />
        <ListItem className="notificationSwitch">
          <Grid display="flex" flexDirection="column">
            <Typography>{t("Dividend")}</Typography>
            {t("Declare and a day before Book Close date")}
          </Grid>
          <CustomizedSwitches
            checked={switchStates?.dividend}
            onChange={(event) => {
              const newState = {
                ...switchStates,
                dividend: event.target.checked,
              };
              setSwitchStates(newState);
              formik.handleChange(event);
            }}
            name="dividend"
            id="dividend"
          />
        </ListItem>
        <Divider />
        <ListItem className="notificationSwitch">
          <Grid display="flex" flexDirection="column">
            <Typography>{t("Auction")}</Typography>
            {t("Declare and Opening Date")}
          </Grid>
          <CustomizedSwitches
            checked={switchStates?.auction}
            onChange={(event) => {
              const newState = {
                ...switchStates,
                auction: event.target.checked,
              };
              setSwitchStates(newState);
              formik.handleChange(event);
            }}
            name="auction"
            id="auction"
          />
        </ListItem>
        <Divider />
        <ListItem className="notificationSwitch">
          <Grid display="flex" flexDirection="column">
            <Typography>{t("Bond/Debenture")}</Typography>
            {t("Opening date and ClosingDate")}{" "}
          </Grid>
          <CustomizedSwitches
            checked={switchStates?.bondDebenture}
            onChange={(event) => {
              const newState = {
                ...switchStates,
                bondDebenture: event.target.checked,
              };
              setSwitchStates(newState);
              formik.handleChange(event);
            }}
            name="bondDebenture"
            id="bondDebenture"
          />
        </ListItem>
        <Divider />
        <ListItem className="notificationSwitch">
          <Grid display="flex" flexDirection="column">
            <Typography>{t("AGM/SGM")}</Typography>
            {t("Announce and Joint Transaction date")}{" "}
          </Grid>{" "}
          <CustomizedSwitches
            checked={switchStates?.agmSgm}
            onChange={(event) => {
              const newState = {
                ...switchStates,
                agmSgm: event.target.checked,
              };
              setSwitchStates(newState);
              formik.handleChange(event);
            }}
            name="agmSgm"
            id="agmSgm"
          />
        </ListItem>
        <Divider />
        <ListItem className="notificationSwitch">
          <Grid display="flex" flexDirection="column">
            <Typography>{t("Merger/ Acquisition")}</Typography>
            {t("Announce and Joint Transaction date")}
          </Grid>
          <CustomizedSwitches
            checked={switchStates?.mergerAcquisition}
            onChange={(event) => {
              const newState = {
                ...switchStates,
                mergerAcquisition: event.target.checked,
              };
              setSwitchStates(newState);
              formik.handleChange(event);
            }}
            name="mergerAcquisition"
            id="mergerAcquisition"
          />
        </ListItem>
        <Divider />
        <ListItem className="notificationSwitch">
          <Grid display="flex" flexDirection="column">
            {t("Financial Reports")}{" "}
          </Grid>
          <CustomizedSwitches
            checked={switchStates?.financialReports}
            onChange={(event) => {
              const newState = {
                ...switchStates,
                financialReports: event.target.checked,
              };
              setSwitchStates(newState);
              formik.handleChange(event);
            }}
            name="financialReports"
            id="dinancialReports"
          />
        </ListItem>
        <Divider />
        <ListItem className="notificationSwitch">
          <Grid display="flex" flexDirection="column">
            {t("Newsletter")}
          </Grid>
          <CustomizedSwitches
            checked={switchStates?.newsLetter}
            onChange={(event) => {
              const newState = {
                ...switchStates,
                newsLetter: event.target.checked,
              };
              setSwitchStates(newState);
              formik.handleChange(event);
            }}
            name="newsLetter"
            id="newsLetter"
          />
        </ListItem>
        <Divider />
        <ListItem className="notificationSwitch">
          <Grid display="flex" flexDirection="column">
            <Typography>{t("General")} </Typography>{t("New feature/ updates")}
          </Grid>
          <CustomizedSwitches
            checked={switchStates?.general}
            onChange={(event) => {
              const newState = {
                ...switchStates,
                general: event.target.checked,
              };
              setSwitchStates(newState);
              formik.handleChange(event);
            }}
            name="general"
            id="general"
          />
        </ListItem>
      </List>
      <Grid
        display="flex"
        flexDirection="row"
        justifyContent="right"
        p="32px 6px"
        gap="16px"
        alignSelf="end"
      >
        <Button
          style={{
            color: mode === "light" ? theme.palette.text.main : "white",
            border: mode === "light" ? "1px solid black" : "1px solid White",
            textTransform: "none",
          }}
          onClick={handleFormSubmit}
        >
          Set Notification
        </Button>
        <Button
          variant="outlined"
          style={{
            background: "#6C49B4",
            color: mode === "light" ? "white" : theme.palette.text.main,
            textTransform: "none",
          }}
          onClick={handleReset}
        >
          Reset
        </Button>
      </Grid>
    </Box>
  );
};

export default ProfileNotification;
