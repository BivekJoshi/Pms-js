import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { useCagrForm } from "../../../form/calculator/cagr/useCagrForm";
import ReactApexChart from "react-apexcharts";
import CustomBox from "../CustomBox";

const CAGRCalculator = () => {
  const theme = useTheme();
  // compounded annual growth rate
  const { formik } = useCagrForm();

  const chartOptions = {
    series: [
      formik?.values?.initialInvestment,
      formik?.values?.finalInvestment,
    ],
    labels: ["Initial Investment", "Final Investment"],
    chart: {
      width: 240,
      type: "donut",
    },
    fill: {
      type: "gradient",
      hover: {
        opacity: 0.9,
      },
    },

    legend: {
      show: false,
    },
    dataLabels: {
      enabled: true,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

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
          title="CAGR Calculator"
          body={
            <Grid
              container
              spacing={2}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item xs={7}>
                <Typography variant="h6">Initial Investment</Typography>
              </Grid>
              <Grid item xs={5}>
                <TextField
                  id="initialInvestment"
                  name="initialInvestment"
                  label="Numbers Only"
                  type="number"
                  variant="outlined"
                  sx={{ width: "100%" }}
                  required
                  value={formik.values.initialInvestment}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    const numericValue = Number(inputValue);

                    if (!isNaN(numericValue) && numericValue <= 100000) {
                      formik.handleChange(e);
                    }
                  }}
                  error={
                    formik.touched.initialInvestment &&
                    Boolean(formik.errors.initialInvestment)
                  }
                  helperText={
                    formik.touched.initialInvestment &&
                    formik.errors.initialInvestment
                  }
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={7}>
                <Typography variant="h6">Final Investment</Typography>
              </Grid>
              <Grid item xs={5}>
                <TextField
                  id="finalInvestment"
                  name="finalInvestment"
                  label="Numbers Only"
                  type="number"
                  variant="outlined"
                  sx={{ width: "100%" }}
                  required
                  value={formik.values.finalInvestment}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    const numericValue = Number(inputValue);

                    if (!isNaN(numericValue) && numericValue <= 100000) {
                      formik.handleChange(e);
                    }
                  }}
                  error={
                    formik.touched.finalInvestment &&
                    Boolean(formik.errors.finalInvestment)
                  }
                  helperText={
                    formik.touched.finalInvestment &&
                    formik.errors.finalInvestment
                  }
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={7}>
                <Typography variant="h6">
                  Duration of Investment (in year)
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <TextField
                  id="durationOfInvestment"
                  name="durationOfInvestment"
                  label="Numbers Only"
                  type="number"
                  variant="outlined"
                  sx={{ width: "100%" }}
                  required
                  value={formik.values.durationOfInvestment}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    const numericValue = Number(inputValue);

                    if (!isNaN(numericValue) && numericValue <= 100000) {
                      formik.handleChange(e);
                    }
                  }}
                  error={
                    formik.touched.durationOfInvestment &&
                    Boolean(formik.errors.durationOfInvestment)
                  }
                  helperText={
                    formik.touched.durationOfInvestment &&
                    formik.errors.durationOfInvestment
                  }
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
          }
        />
        <br />
        <CustomBox
          title="Details :"
          body={
            formik?.values?.FinalPercent && (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ReactApexChart
                    options={chartOptions}
                    series={chartOptions.series}
                    labels={chartOptions.labels}
                    type={chartOptions.chart.type}
                    width={chartOptions.chart.width}
                  />
                </div>
                <br></br>
                {formik?.values?.FinalPercent && (
                  <Typography variant="h5" textAlign={"center"}>
                    Compounded Annual Growth Rate:
                    <span>
                      <b> {formik?.values?.FinalPercent}</b>
                    </span>
                  </Typography>
                )}
              </>
            )
          }
        />
      </Box>
    </div>
  );
};

export default CAGRCalculator;
