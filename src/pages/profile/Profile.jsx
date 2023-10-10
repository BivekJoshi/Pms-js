import React from "react";
import { Box, Button, Chip, Grid, Typography, useTheme } from "@mui/material";
import profile from "../../assets/profilePicture.png";
import UpdateProfile from "../../assets/UpdateProfile.png";
import Notification from "../../assets/Notification.png";
import Subscription from "../../assets/Subscription.png";
import Security from "../../assets/Security.png";
import Transaction from "../../assets/Transaction.png";
import Bill from "../../assets/Bill.png";
import Statement from "../../assets/Statement.png";
import Payment from "../../assets/Payment.png";
import Terms from "../../assets/Terms.png";
import Update from "../../assets/Update.png";
import Camera from "../../assets/camera.png";

const Profile = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box
        display="grid"
        gridTemplateColumns="2fr 7fr"
        gap="4rem"
        mt="2rem"
        color={theme.palette.text.main}
      >
        <Grid display="flex" flexDirection="column" gap="24px" width="344px">
          <Grid
            display="flex"
            flexDirection="row"
            bgcolor={theme.palette.background.alt}
            color={theme.palette.text.main}
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
          <Grid
            p="24px"
            bgcolor={theme.palette.background.alt}
            display="flex"
            flexDirection="column"
            gap="20px"
            borderRadius="8px"
          >
            <Grid>
              <Typography variant="h4" p="12px 0">
                General
              </Typography>
              <Grid className="profileIcon">
                <img src={UpdateProfile} alt="UpdateProfile" />
                <Typography variant="h7">Update Profile</Typography>
              </Grid>
              <Grid className="profileIcon">
                <img src={Notification} alt="UpdateProfile" />
                <Typography variant="h7">Notification Configuration</Typography>
              </Grid>
              <Grid className="profileIcon">
                <img src={Subscription} alt="UpdateProfile" />
                <Typography variant="h7">Subscription</Typography>
              </Grid>
              <Grid className="profileIcon">
                <img src={Security} alt="UpdateProfile" />
                <Typography variant="h7">Change Password</Typography>
              </Grid>
            </Grid>
            <Grid>
              <Typography variant="h4" p="12px 0">
                Activities
              </Typography>
              <Grid className="profileIcon">
                <img src={Transaction} alt="UpdateProfile" />
                <Typography variant="h7">Transaction</Typography>
              </Grid>
              <Grid className="profileIcon">
                <img src={Bill} alt="UpdateProfile" />
                <Typography variant="h7">Bill</Typography>
              </Grid>
              <Grid className="profileIcon">
                <img src={Statement} alt="UpdateProfile" />
                <Typography variant="h7">Statement</Typography>
              </Grid>
              <Grid className="profileIcon">
                <img src={Payment} alt="UpdateProfile" />
                <Typography variant="h7">Receipt/Payment</Typography>
              </Grid>
            </Grid>
            <Grid>
              <Typography variant="h4" p="12px 0">
                More
              </Typography>
              <Grid className="profileIcon">
                <img src={Terms} alt="UpdateProfile" />
                <Typography variant="h7">Terms & Conditions </Typography>
              </Grid>
              <Grid className="profileIcon">
                <img src={Update} alt="UpdateProfile" />
                <Typography variant="h7">Update Profile</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          display="inline-flex"
          flexDirection="column"
          alignItems="flex-start"
          gap="50px"
        >
          <Grid
            display="flex"
            bgcolor={theme.palette.background.alt}
            p="16px"
            width="100%"
          >
            <Grid
              display="flex"
              flexDirection="column"
              gap="18px"
              width="20%"
              className="profileWidth"
            >
              <Typography className="profilePageItem" variant="h6">
                Name <span>:</span>
              </Typography>
              <Typography className="profilePageItem" variant="h6">
                Mobile Number <span>:</span>
              </Typography>
              <Typography className="profilePageItem" variant="h6">
                E-Mail <span>:</span>
              </Typography>
              <Typography className="profilePageItem" variant="h6">
                Depositary participation <span>:</span>
              </Typography>
              <Typography className="profilePageItem" variant="h6">
                Demat Number <span>:</span>
              </Typography>
              <Typography className="profilePageItem" variant="h6">
                NEPSE code <span>:</span>
              </Typography>
            </Grid>
            <Grid display="flex" flexDirection="column" gap="18px" width="100%">
              <Typography className="profileItem" variant="h6">
                Bipin Joshi
              </Typography>
              <Typography className="profileItem" variant="h6">
                +977 980000000
              </Typography>
              <Typography className="profileItem" variant="h6">
                Bipin Joshi
              </Typography>
              <Typography className="profileItem" variant="h6">
                Secured Security Limited [11600]
              </Typography>
              <Typography className="profileItem" variant="h6">
                0972837461837465
              </Typography>
              <Typography className="profileItem" variant="h6">
                0972837461837465
              </Typography>
            </Grid>
          </Grid>
          <Grid display="flex" gap="30px" flexDirection="column" width="100%">
            <Typography fontWeight="500" variant="h5">
              Bank Details
            </Typography>
            <Grid
              display="flex"
              bgcolor={theme.palette.background.alt}
              p="16px"
              width="100%"
            >
              <Grid
                display="flex"
                flexDirection="column"
                gap="18px"
                width="20%"
                className="profileWidth"
              >
                <Typography className="profilePageItem" variant="h6">
                  Bank Name <span>:</span>
                </Typography>
                <Typography className="profilePageItem" variant="h6">
                  Account Number <span>:</span>
                </Typography>
                <Typography className="profilePageItem" variant="h6">
                  Verify Status <span>:</span>
                </Typography>
              </Grid>
              <Grid
                display="flex"
                flexDirection="column"
                gap="18px"
                width="100%"
              >
                <Typography className="profileItem" variant="h6">
                  NIC Aisa Bank Pvt Ltd
                </Typography>
                <Typography className="profileItem" variant="h6">
                  0972837461837465
                </Typography>
                <Typography className="profileItem" variant="h6">
                  Verified
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {/* <Grid
      width="100%"
        display="flex"
        // p="0px 48px"
        height="63px"
        gap="22px"
        alignItems="center"
        justifyContent="space-between"
        bgcolor={theme.palette.background.alt}
      >
        <Typography variant="h7">
          DG TRADE © DIGIHUB | Sumeru Securities Pvt. Ltd.
        </Typography>
        <Chip label="Version : 1.0" sx={{ fontSize: "13px" }} />
      </Grid> */}
    </Box>
  );
};

export default Profile;
