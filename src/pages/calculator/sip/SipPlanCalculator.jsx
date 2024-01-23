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
import { useSipForm } from "../../../form/calculator/sip/useSipForm";
import CustomBox from "../CustomBox";

const SipPlanCalulator = () => {
  const theme = useTheme();
  const { formik } = useSipForm();
  function createData(heading, data) {
    return { heading, data };
  }

  const rows = [
    createData("Total Amount Expected", formik?.values?.futureValue),
    createData("Total Amount Invested", formik?.values?.totalAmountInvested),
    createData("Total Gain", formik?.values?.totalGain),
    createData("Total Gain %", formik?.values?.totalGainPercent),
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
        <CustomBox
          title="Systematic Investment Plan (SIP) Calculator"
          body={
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="h6">Investment Period</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="investmentPeriod"
                  name="investmentPeriod"
                  label="Investment Period"
                  select
                  variant="outlined"
                  sx={{ width: "100%" }}
                  required
                  value={formik.values.investmentPeriod}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    const numericValue = Number(inputValue);

                    if (!isNaN(numericValue) && numericValue <= 100000) {
                      formik.handleChange(e);
                    }
                  }}
                  error={
                    formik.touched.investmentPeriod &&
                    Boolean(formik.errors.investmentPeriod)
                  }
                  helperText={
                    formik.touched.investmentPeriod &&
                    formik.errors.investmentPeriod
                  }
                  size="small"
                >
                  <MenuItem key="timePeriod" value="12">
                    Monthly
                  </MenuItem>
                  <MenuItem key="timePeriod" value="4">
                    Quarterly
                  </MenuItem>
                  <MenuItem key="timePeriod" value="2">
                    Semi Annually
                  </MenuItem>
                  <MenuItem key="timePeriod" value="1">
                    Annually
                  </MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">Investment Amount</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="investedAmount"
                  name="investedAmount"
                  label="Numbers Only"
                  type="number"
                  variant="outlined"
                  sx={{ width: "100%" }}
                  required
                  value={formik.values.investedAmount}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    const numericValue = Number(inputValue);

                    if (!isNaN(numericValue) && numericValue <= 100000) {
                      formik.handleChange(e);
                    }
                  }}
                  error={
                    formik.touched.investedAmount &&
                    Boolean(formik.errors.investedAmount)
                  }
                  helperText={
                    formik.touched.investedAmount &&
                    formik.errors.investedAmount
                  }
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">Expected Annual Return (%)</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="expectedAnnualReturn"
                  name="expectedAnnualReturn"
                  label="Numbers Only"
                  type="number"
                  variant="outlined"
                  sx={{ width: "100%" }}
                  required
                  value={formik.values.expectedAnnualReturn}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    const numericValue = Number(inputValue);

                    if (!isNaN(numericValue) && numericValue <= 100000) {
                      formik.handleChange(e);
                    }
                  }}
                  error={
                    formik.touched.expectedAnnualReturn &&
                    Boolean(formik.errors.expectedAnnualReturn)
                  }
                  helperText={
                    formik.touched.expectedAnnualReturn &&
                    formik.errors.expectedAnnualReturn
                  }
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">Years</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="years"
                  name="years"
                  label="Numbers Only"
                  type="number"
                  variant="outlined"
                  sx={{ width: "100%" }}
                  required
                  value={formik.values.years}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    const numericValue = Number(inputValue);

                    if (!isNaN(numericValue) && numericValue <= 100000) {
                      formik.handleChange(e);
                    }
                  }}
                  error={formik.touched.years && Boolean(formik.errors.years)}
                  helperText={formik.touched.years && formik.errors.years}
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
                    backgroundColor: theme.palette.background.btn,
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
          }
        />
        <CustomBox
          title="Details :"
          body={
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
          }
        />
      </Box>
    </div>
  );
};

export default SipPlanCalulator;
