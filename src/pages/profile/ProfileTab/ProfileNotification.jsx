import { useTheme } from "@emotion/react";
import { Box, Button, Grid, List, ListItem } from "@mui/material";
import { Switch, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useGetNotification } from "../../../hooks/notificationConfiguration/useNotification";
import { useState } from "react";
import toast from "react-hot-toast";
import useNotificationForm from "../../../hooks/notificationConfiguration/useNotificationForm";
import Spinner from "../../../components/spinner/Spinner";

const ProfileNotification = () => {
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
    if (formik.isValid) {
      const formData = formik?.values;
    } else {
      toast.error("Please make sure you have filled the form correctly");
    }
  };

  const handleReset = () => {
    formik.handleSubmit();
    resetForm();
    const defaultSwitchStates = {
      ipoFpo: false,
      rightShare: false,
      dividend: false,
      auction: false,
      bondDebenture: false,
      agmSgm: false,
      mergerAcquisition: false,
      financialReports: false,
      newsLetter: false,
      general: false,
    };
    setSwitchStates(defaultSwitchStates);
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
            <Typography>IPO/FPO</Typography>(Announce, Opening date and Closing
            Date)
          </Grid>
          <Switch
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
        <ListItem className="notificationSwitch">
          <Grid display="flex" flexDirection="column">
            <Typography>Right Share</Typography>(Declare, a day before Book
            Close Date)
          </Grid>
          <Switch
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
        <ListItem className="notificationSwitch">
          <Grid display="flex" flexDirection="column">
            <Typography>Dividend</Typography>(Declare and a day before Book
            Close date)
          </Grid>
          <Switch
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
        <ListItem className="notificationSwitch">
          <Grid display="flex" flexDirection="column">
            <Typography>Auction </Typography>(Declare and Opening Date)
          </Grid>
          <Switch
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
        <ListItem className="notificationSwitch">
          <Grid display="flex" flexDirection="column">
            <Typography>Bond/Debenture </Typography>(Opening date and Closing
            Date){" "}
          </Grid>
          <Switch
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
        <ListItem className="notificationSwitch">
          <Grid display="flex" flexDirection="column">
            <Typography>AGM/SGM </Typography>(Announce and Joint Transaction
            date){" "}
          </Grid>{" "}
          <Switch
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
        <ListItem className="notificationSwitch">
          <Grid display="flex" flexDirection="column">
            <Typography>Merger/ Acquisition </Typography>(Announce and Joint
            Transaction date)
          </Grid>
          <Switch
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
        <ListItem className="notificationSwitch">
          <Grid display="flex" flexDirection="column">
            Financial Reports{" "}
          </Grid>
          <Switch
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
        <ListItem className="notificationSwitch">
          <Grid display="flex" flexDirection="column">
            Newsletter
          </Grid>
          <Switch
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
        <ListItem className="notificationSwitch">
          <Grid display="flex" flexDirection="column">
            <Typography>General </Typography>(New feature/ updates)
          </Grid>
          <Switch
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
          variant="outlined"
          style={{
            color: mode === "light" ? theme.palette.text.main : "white",
            border: mode === "light" ? "1px solid black" : "1px solid White",
          }}
          onClick={handleReset}
        >
          Reset
        </Button>
        <Button
          style={{
            background: "#6C49B4",
            color: mode === "light" ? "white" : theme.palette.text.main,
          }}
          onClick={handleFormSubmit}
        >
          Set Notification
        </Button>
      </Grid>
    </Box>
  );
};

export default ProfileNotification;
