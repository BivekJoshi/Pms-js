import React from "react";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useSellForm } from "../../../form/calculator/Sell/useSellForm";

const SellCalculator = () => {
  const { formik } = useSellForm();
  function createData(heading, data) {
    return { heading, data };
  }

  const rows = [
    createData("Broker Commission", formik?.values?.brokerCommission),
    createData("Buy Price", formik?.values?.buyPrice),
    createData("Sebbon Fee Amount", formik?.values?.sebbonFeeAmount),
    createData("Sell Amount Receivable", formik?.values?.sellAmountReceivable),
    createData("Sell Price", formik?.values?.sellPrice),
    createData("Share Quantity", formik?.values?.shareQty),
  ];
  return (
    <>
      <Box sx={{ backgroundColor: "#fff", padding: " 0px 32px" }}>
        <Grid container spacing={3}>
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
              sx={{ ml: 1, textTransform: "none" }}
              color="success"
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

      <Box
        sx={{
          backgroundColor: "#fff",
          marginTop: "16px",
          padding: " 0px 32px",
        }}
      >
        <TableContainer borderRadius="4px 0">
          <Table aria-label="simple table">
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.heading}>
                  <TableCell>{row.heading}</TableCell>
                  <TableCell>{row.data}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default SellCalculator;
