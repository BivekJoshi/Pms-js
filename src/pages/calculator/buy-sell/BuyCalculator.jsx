import React from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useBuySellForm } from "../../../form/calculator/buySell/useBuySellForm";
import { DetailsBox } from "../DetailsBox";

const BuyCalculator = () => {
  const { formik } = useBuySellForm();
  const theme = useTheme();
  function createData(heading, data, isBold) {
    return { heading, data, isBold };
  }

  const rows = [
    createData("Total Amount", formik?.values?.buyTotalAmount),
    createData("Broker Commission", formik?.values?.brokerCommission),
    createData("Sebbon Fee Amount", formik?.values?.sebbonFeeAmount),
    createData("DP Fee", formik?.values?.dp_Fee),
    createData("Amount Payable", formik?.values?.buyAmountPayable, true),
    createData("Cost Per Share", formik?.values?.costPerShare),
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

      {/* <Table>
          <TableBody>
            {Object.entries(formik.values).map(([key, value]) => (
              <TableRow key={key}>

                <TableCell>{key}</TableCell>
                <TableCell>{value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table> */}
    </>
  );
};

export default BuyCalculator;
