import { useTheme } from "@emotion/react";
import { Grid, Typography } from "@mui/material";
import React from "react";
import { useGetProfileDetail } from "../../../hooks/watchList/useWatchList";

const ProfileInfo = () => {
  const theme = useTheme();
  const { data: profileData } = useGetProfileDetail();
  console.log(profileData);

  return (
    <Grid
      display="inline-flex"
      flexDirection="column"
      alignItems="flex-start"
      gap="50px"
      width="100%"
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
            {profileData?.clientName}
          </Typography>
          <Typography className="profileItem" variant="h6">
            {profileData?.mobileNo}
          </Typography>
          <Typography className="profileItem" variant="h6">
            {profileData?.email}
          </Typography>
          <Typography className="profileItem" variant="h6">
            Secured Security Limited [11600]
          </Typography>
          <Typography className="profileItem" variant="h6">
          {profileData?.dematNo}
          </Typography>
          <Typography className="profileItem" variant="h6">
          {profileData?.nepseCode}
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
          <Grid display="flex" flexDirection="column" gap="18px" width="100%">
            <Typography className="profileItem" variant="h6">
            {profileData?.bankName}
            </Typography>
            <Typography className="profileItem" variant="h6">
            {profileData?.accountNo}
            </Typography>
            <Typography className="profileItem" variant="h6">
              Verified
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfileInfo;
