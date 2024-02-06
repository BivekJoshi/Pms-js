import { Chip, Grid, Typography, useTheme } from "@mui/material";

const Footer = () => {
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
        DG TRADE © DIGIHUB | Demo Securities Pvt. Ltd.
      </Typography>
      <Chip label="Version : 1.0" sx={{ fontSize: "13px" }} />
    </Grid>
  );
};

export default Footer;
