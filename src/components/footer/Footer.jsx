import { Chip, Grid, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";

const Footer = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  return (
    <Grid
      width="100%"
      display="flex"
      p="0px 48px"
      height="63px"
      gap="22px"
      alignItems="center"
      justifyContent="space-between"
      bgcolor={theme.palette.background.alt}
      position="relative"
    >
      <Typography variant="h7">
        DG TRADE © DIGIHUB | Sumeru Securities Pvt. Ltd.
      </Typography>
      <Chip label="Version : 1.0" sx={{ fontSize: "13px" }} />
    </Grid>

    
  );
};

export default Footer;
