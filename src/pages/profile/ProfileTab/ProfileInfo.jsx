import { useTheme } from "@emotion/react";
import { Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const ProfileInfo = ({data}) => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Grid
      display='inline-flex'
      flexDirection='column'
      alignItems='flex-start'
      gap='50px'
      width='100%'
    >
      <Grid
        display='flex'
        bgcolor={theme.palette.background.alt}
        p='16px'
        width='100%'
      >
        <Grid
          display='flex'
          flexDirection='column'
          gap='18px'
          width='20%'
          className='profileWidth'
        >
          <Typography className="profilePageItem" variant="h6">
            {t("Name")} <span>:</span>
          </Typography>
          <Typography className="profilePageItem" variant="h6">
            {t("Mobile Number")} <span>:</span>
          </Typography>
          <Typography className="profilePageItem" variant="h6">
            {t("E-Mail")} <span>:</span>
          </Typography>
          <Typography className="profilePageItem" variant="h6">
            {t("Depositary participation")} <span>:</span>
          </Typography>
          <Typography className="profilePageItem" variant="h6">
            {t("Demat Number")} <span>:</span>
          </Typography>
          <Typography className="profilePageItem" variant="h6">
            {t("NEPSE code")} <span>:</span>
          </Typography>
        </Grid>
        <Grid display="flex" flexDirection="column" gap="18px" width="100%">
          <Typography className="profileItem" variant="h6">
            {data?.clientName}
          </Typography>
          <Typography className="profileItem" variant="h6">
            {data?.mobileNo}
          </Typography>
          <Typography className="profileItem" variant="h6">
            {data?.email}
          </Typography>
          <Typography className="profileItem" variant="h6">
            {data?.dpName||"-"}
          </Typography>
          <Typography className="profileItem" variant="h6">
            {data?.dematNo}
          </Typography>
          <Typography className="profileItem" variant="h6">
            {data?.nepseCode}
          </Typography>
        </Grid>
      </Grid>
      <Grid display="flex" gap="30px" flexDirection="column" width="100%">
        <Typography fontWeight="500" variant="h5">
          {t("Bank Details")}
        </Typography>
        <Grid
          display='flex'
          bgcolor={theme.palette.background.alt}
          p='16px'
          width='100%'
        >
          <Grid
            display='flex'
            flexDirection='column'
            gap='18px'
            width='20%'
            className='profileWidth'
          >
            <Typography className="profilePageItem" variant="h6">
              {t("Bank Name")} <span>:</span>
            </Typography>
            <Typography className="profilePageItem" variant="h6">
              {t("Account Number")} <span>:</span>
            </Typography>
            <Typography className="profilePageItem" variant="h6">
              {t("Verify Status")} <span>:</span>
            </Typography>
          </Grid>
          <Grid display="flex" flexDirection="column" gap="18px" width="100%">
            <Typography className="profileItem" variant="h6">
              {data?.bankName}
            </Typography>
            <Typography className="profileItem" variant="h6">
              {data?.accountNo}
            </Typography>
            <Typography className='profileItem' variant='h6'>
              Verified
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfileInfo;
