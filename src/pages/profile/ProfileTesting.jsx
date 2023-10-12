import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Grid, useTheme } from "@mui/material";
import profile from "../../assets/profilePicture.png";
import Camera from "../../assets/camera.png";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
const ProfileTesting = () => {
  const theme = useTheme();
  const [value, setValue] = useState();
  const [generalValue, setGeneralValue] = useState();
  const [activitiesValue, setActivitiesValue] = useState();
  const [moreValue, setMoreValue] = useState();

  return (
    <Box
      display="grid"
      gridTemplateColumns="2fr 7fr"
      gap="4rem"
      mt="2rem"
      color={theme.palette.text.main}
    >
      <Box display="flex" flexDirection="column" gap="2rem" width="22rem">
        <Grid
          display="flex"
          flexDirection="row"
          color={theme.palette.text.main}
          bgcolor={theme.palette.background.alt}
          alignItems="center"
          gap="2rem"
          height="136px"
          justifyContent="space-evenly"
          borderRadius="4px"
          position="relative"
        >
          <img
            src={profile}
            alt="statusSuccess.png"
            height="135px"
            width="135px"
            style={{ borderRadius: "312.5px" }}
          />
          <img
            src={Camera}
            alt="Camera"
            style={{ position: "absolute", bottom: "1rem", left: "3.7rem" }}
          />
          <Grid display="flex" flexDirection="column" gap="8px">
            <Typography variant="h4">Bipeen Joshi</Typography>
            <Typography variant="h7">Bipeenaa23@gmail.com</Typography>
            <Typography variant="h7">9876543210</Typography>
            <Button
              sx={{
                bgcolor: "#FFDCBC",
                border: "1px solid #7A757F",
                borderRadius: "4px",
                width: "60px",
                height: "20px",
                color: "black",
              }}
            >
              Basic
            </Button>
          </Grid>
        </Grid>
        <Grid bgcolor={theme.palette.background.alt} p="1rem 2rem">
          <Grid display="flex" flexDirection="column">
            <Typography variant="h4">General</Typography>
            <Tabs
              orientation="vertical"
              value={generalValue}
              onChange={(event, newValue) => setGeneralValue(newValue)}
              aria-label="General Tabs"
            >
              <Tab label="Update Profile" {...a11yProps(0)} />
              <Tab label="Notification Configuration" {...a11yProps(1)} />
              <Tab label="Subscription" {...a11yProps(2)} />
            </Tabs>
          </Grid>

          <Grid display="flex" flexDirection="column">
            <Typography variant="h4">Activities</Typography>
            <Tabs
              orientation="vertical"
              value={activitiesValue}
              onChange={(event, newValue) => setActivitiesValue(newValue)}
              aria-label="Activities Tabs"
            >
              <Tab label="Change Password" {...a11yProps(3)} />
              <Tab label="Activities" {...a11yProps(4)} />
              <Tab label="Transaction" {...a11yProps(5)} />
            </Tabs>
          </Grid>

          <Grid display="flex" flexDirection="column">
            <Typography variant="h4">More</Typography>
            <Tabs
              orientation="vertical"
              value={moreValue}
              onChange={(event, newValue) => setMoreValue(newValue)}
              aria-label="More Tabs"
            >
              <Tab label="Bill" {...a11yProps(6)} />
              <Tab label="Statement" {...a11yProps(7)} />
              <Tab label="Receipt/Payment" {...a11yProps(8)} />
            </Tabs>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <TabPanel value={generalValue} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={generalValue} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={generalValue} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={activitiesValue} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={activitiesValue} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={activitiesValue} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={moreValue} index={6}>
          Item Seven
        </TabPanel>
        <TabPanel value={moreValue} index={7}>
          Item Eight
        </TabPanel>
        <TabPanel value={moreValue} index={8}>
          Item Nine
        </TabPanel>
      </Box>
    </Box>
  );
};
export default ProfileTesting;
