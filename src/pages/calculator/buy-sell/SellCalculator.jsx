import React from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useSellForm } from "../../../form/calculator/Sell/useSellForm";
import { DetailsBox } from "../DetailsBox";

const SellCalculator = () => {
  const theme = useTheme();
  const { formik } = useSellForm();
  function createData(heading, data) {
    return { heading, data };
  }

  const rows = [
    createData("Total Amount", formik?.values?.totalAmount),
    createData("Broker Commission", formik?.values?.brokerCommission),
    createData("Sebbon Fee Amount", formik?.values?.sebbonFeeAmount),
    createData("DP Fee", formik?.values?.dp_Fee),
    createData("Capital Gain Tax", formik?.values?.capitalGainTax),
    createData("Total Amount Receivable", formik?.values?.sellAmountReceivable),
    createData("Profit / Loss", formik?.values?.profitLoss),
  ];
  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.background.alt,
          padding: " 0px 32px",
        }}
      >
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={7}>
            <Typography variant="h6">Investor Type</Typography>
          </Grid>
          <Grid item xs={5}>
            <TextField
              id="investorType"
              name="investorType"
              label="Investor Type"
              select
              variant="outlined"
              sx={{ width: "100%" }}
              required
              onChange={(e) => {
                formik.handleChange(e);
              }}
              value={formik.values.investorType}
              error={
                formik.touched.investorType &&
                Boolean(formik.errors.investorType)
              }
              helperText={
                formik.touched.investorType && formik.errors.investorType
              }
              InputLabelProps={{ shrink: Boolean(formik.values.investorType) }}
              size="small"
            >
              <MenuItem key="individual" value="individual">
                Individual
              </MenuItem>
              <MenuItem key="institution" value="institution">
                Institution
              </MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          {formik.values.investorType === "individual" && (
            <>
              <Grid item xs={7}>
                <Typography variant="h6">Holding Period</Typography>
              </Grid>
              <Grid item xs={5}>
                <TextField
                  id="holdingPeriod"
                  name="holdingPeriod"
                  label="Holding Period"
                  select
                  variant="outlined"
                  sx={{ width: "100%" }}
                  required
                  onChange={(e) => {
                    formik.handleChange(e);
                  }}
                  value={formik.values.holdingPeriod}
                  error={
                    formik.touched.holdingPeriod &&
                    Boolean(formik.errors.holdingPeriod)
                  }
                  InputLabelProps={{
                    shrink: Boolean(formik.values.holdingPeriod),
                  }}
                  helperText={
                    formik.touched.holdingPeriod && formik.errors.holdingPeriod
                  }
                  size="small"
                >
                  <MenuItem key="short-period" value="short-period">
                    Short Period
                  </MenuItem>
                  <MenuItem key="long-period" value="long-period">
                    Long Period
                  </MenuItem>
                </TextField>
              </Grid>
            </>
          )}

          <Grid item xs={7}>
            <Typography variant="h6">Share Quantity</Typography>
          </Grid>
          <Grid item xs={5}>
            <TextField
              id="shareQty"
              name="shareQty"
              label="Share Quantity"
              type="number"
              variant="outlined"
              sx={{ width: "100%" }}
              required
              InputLabelProps={{ shrink: Boolean(formik.values.shareQty) }}
              value={formik.values.shareQty}
              onChange={(e) => {
                const inputValue = e.target.value;
                const numericValue = Number(inputValue);

                if (!isNaN(numericValue) && numericValue <= 100000) {
                  formik.handleChange(e);
                }
              }}
              error={formik.touched.shareQty && Boolean(formik.errors.shareQty)}
              helperText={formik.touched.shareQty && formik.errors.shareQty}
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={7}>
            <Typography variant="h6">Buy Price</Typography>
          </Grid>
          <Grid item xs={5}>
            <TextField
              id="buyPrice"
              name="buyPrice"
              label="Buy Price"
              type="number"
              variant="outlined"
              InputLabelProps={{ shrink: Boolean(formik.values.buyPrice) }}
              sx={{ width: "100%" }}
              required
              onChange={(e) => {
                const inputValue = e.target.value;
                const numericValue = Number(inputValue);
                if (!isNaN(numericValue) && numericValue <= 100000) {
                  formik.handleChange(e);
                }
              }}
              value={formik.values.buyPrice}
              error={formik.touched.buyPrice && Boolean(formik.errors.buyPrice)}
              helperText={formik.touched.buyPrice && formik.errors.buyPrice}
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={7}>
            <Typography variant="h6">Sell Price</Typography>
          </Grid>
          <Grid item xs={5}>
            <TextField
              id="sellPrice"
              name="sellPrice"
              label="Sell Price"
              type="number"
              variant="outlined"
              sx={{ width: "100%" }}
              InputLabelProps={{ shrink: Boolean(formik.values.sellPrice) }}
              required
              onChange={(e) => {
                const inputValue = e.target.value;
                const numericValue = Number(inputValue);

                if (!isNaN(numericValue) && numericValue <= 100000) {
                  formik.handleChange(e);
                }
              }}
              value={formik.values.sellPrice}
              error={
                formik.touched.sellPrice && Boolean(formik.errors.sellPrice)
              }
              helperText={formik.touched.sellPrice && formik.errors.sellPrice}
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-end"
            margin={"16px 0px"}
          >
            <Button
              variant="contained"
              type="submit"
              onClick={() => formik.handleSubmit()}
              sx={{
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.text.alt,
                textTransform: "none",
              }}
            >
              Calculate
            </Button>
            <Button
              variant="contained"
              sx={{ ml: 1, textTransform: "none" }}
              color="error"
              onClick={() => formik.resetForm()}
            >
              Clear
            </Button>
          </Grid>
        </Grid>
      </Box>
      <br />
      <DetailsBox rows={rows} />
    </>
  );
};

export default SellCalculator;
