import React from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useBuySellForm } from "../../../form/calculator/buySell/useBuySellForm";

const BuyCalculator = () => {
  const { formik } = useBuySellForm();
  function createData(heading, data) {
    return { heading, data };
  }

  const rows = [
    createData("Broker Commission", formik?.values?.brokerCommission),
    createData("Amount Payable", formik?.values?.buyAmountPayable),
    createData("Buy Price", formik?.values?.buyPrice),
    createData("Total Amount", formik?.values?.buyTotalAmount),
    createData("Sebbon Fee Amount", formik?.values?.sebbonFeeAmount),
    createData("Share Quantity", formik?.values?.shareQty),
  ];
  return (
    <>
      <Box sx={{ backgroundColor: "#fff", padding: " 0px 32px" }}>
        <Grid container spacing={3} alignItems="center">
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
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={7}>
            <Typography variant="h6">Purchase Price(Rs.)</Typography>
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
              sx={{ ml: 1, textTransform: "none" }}
              color="success"
            >
              Submit
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
        {/* <Table>
          <TableBody>
            {Object.entries(formik.values).map(([key, value]) => (
              <TableRow key={key}>
                {console.log(key)}

                <TableCell>{key}</TableCell>
                <TableCell>{value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table> */}
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

export default BuyCalculator;
