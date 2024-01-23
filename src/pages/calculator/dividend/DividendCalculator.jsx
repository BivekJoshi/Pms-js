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
import React from "react";
import { useDividendForm } from "../../../form/calculator/dividend/useDividendForm";

const DividendCalculator = () => {
  const theme = useTheme();
  const { formik } = useDividendForm();
  function createData(heading, data) {
    return { heading, data };
  }
  console.log(formik?.values, "formikkkkkkkkkkkkkk ma chai ");
  const rows = [
    createData("Cash Amount", formik?.values?.cashAmount),
    createData("Bonus Share Tax(5%)", formik?.values?.bonusShareTax),
    createData("Cash Amounut Tax(5%)", formik?.values?.cashAmountTax),
    createData("Total Payable Tax", formik?.values?.totalPayableTax),
    createData("Receivable Bonus Quantity", formik?.values?.receivableBonusQuantity),
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <Box>
        <Box
          sx={{
            backgroundColor: "#fff",
            padding: " 16px 32px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                style={{
                  color: theme.palette.text.light,
                  fontWeight: "800",
                  marginBottom: "16px",
                }}
              >
                Dividend Calculator
              </Typography>
              <Divider />
            </Grid>
            <br />
            <Grid item xs={6}>
              <Typography variant="h6">Share Quanatity</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="shareQuantity"
                name="shareQuantity"
                label="Investment Period"
                type="number"
                variant="outlined"
                sx={{ width: "100%" }}
                required
                value={formik.values.shareQuantity}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  const numericValue = Number(inputValue);

                  if (!isNaN(numericValue) && numericValue <= 100000) {
                    formik.handleChange(e);
                  }
                }}
                error={
                  formik.touched.shareQuantity &&
                  Boolean(formik.errors.shareQuantity)
                }
                helperText={
                  formik.touched.shareQuantity && formik.errors.shareQuantity
                }
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">% of Bonus Dividend</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="bonusDividend"
                name="bonusDividend"
                label="Numbers Only"
                type="number"
                variant="outlined"
                sx={{ width: "100%" }}
                required
                value={formik.values.bonusDividend}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  const numericValue = Number(inputValue);

                  if (!isNaN(numericValue) && numericValue <= 100000) {
                    formik.handleChange(e);
                  }
                }}
                error={
                  formik.touched.bonusDividend &&
                  Boolean(formik.errors.bonusDividend)
                }
                helperText={
                  formik.touched.bonusDividend && formik.errors.bonusDividend
                }
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">% of Cash Dividend</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="cashDividend"
                name="cashDividend"
                label="Numbers Only"
                type="number"
                variant="outlined"
                sx={{ width: "100%" }}
                required
                value={formik.values.cashDividend}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  const numericValue = Number(inputValue);

                  if (!isNaN(numericValue) && numericValue <= 100000) {
                    formik.handleChange(e);
                  }
                }}
                error={
                  formik.touched.cashDividend &&
                  Boolean(formik.errors.cashDividend)
                }
                helperText={
                  formik.touched.cashDividend && formik.errors.cashDividend
                }
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Paid up Value per Share</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="paidUpValue"
                name="paidUpValue"
                label="Numbers Only"
                select
                variant="outlined"
                sx={{ width: "100%" }}
                required
                value={formik.values.paidUpValue}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  const numericValue = Number(inputValue);

                  if (!isNaN(numericValue) && numericValue <= 100000) {
                    formik.handleChange(e);
                  }
                }}
                error={
                  formik.touched.paidUpValue &&
                  Boolean(formik.errors.paidUpValue)
                }
                helperText={
                  formik.touched.paidUpValue && formik.errors.paidUpValue
                }
                size="small"
              >
                <MenuItem key="paidUpValue" value="10">
                  10
                </MenuItem>
                <MenuItem key="paidUpValue" value="100">
                  100
                </MenuItem>
              </TextField>
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
      </Box>
    </div>
  );
};

export default DividendCalculator;
