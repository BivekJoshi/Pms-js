import React, { useEffect, useState } from "react";
import CustomBox from "../CustomBox";
import { Button, Divider, Grid } from "@mui/material";
import { MenuItem, TextField, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import WeightAveCalForm from "../../../form/calculator/WeightAveCal/WeightAveCalForm";
import { FieldArray, FormikProvider } from "formik";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

const WeightedAveCal = () => {
  const theme = useTheme();
  const { formik, handleAddSection, handleBlur } = WeightAveCalForm();
  const [weightedAveragePrice, setWeightedAveragePrice] = useState(0); // State to manage weighted average

  const calculateWeightedAverage = () => {
    if (formik.values.totalQuantity !== 0) {
      return formik.values.totalWeightedAmount
        ? (
            formik.values.totalWeightedAmount / formik.values.totalQuantity
          ).toFixed(2)
        : 0;
    }
    return 0;
  };
  useEffect(() => {
    // Update weighted average whenever formik values change
    const weightedAverage = calculateWeightedAverage();
    setWeightedAveragePrice(weightedAverage);
  }, [formik.values]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <CustomBox
        title="Weighted Average Calculator"
        body={
          <FormikProvider value={formik}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Select Face Value</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="faceValue"
                  name="faceValue"
                  label="Numbers Only"
                  select
                  variant="outlined"
                  sx={{ width: "100%" }}
                  required
                  value={formik.values.faceValue}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    const numericValue = Number(inputValue);

                    if (!isNaN(numericValue) && numericValue <= 100000) {
                      formik.handleChange(e);

                      // Update faceValue for all wegCal entries
                      const updatedWegCal = formik.values.wegCal.map(
                        (entry) => ({
                          ...entry,
                          faceValue: inputValue,
                        })
                      );
                      formik.setFieldValue("wegCal", updatedWegCal);
                    }
                  }}
                  error={
                    formik.touched.faceValue && Boolean(formik.errors.faceValue)
                  }
                  helperText={
                    formik.touched.faceValue && formik.errors.faceValue
                  }
                  size="small"
                >
                  <MenuItem key="10" value="10">
                    10
                  </MenuItem>
                  <MenuItem key="100" value="100">
                    100
                  </MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Share Details</Typography>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item md={2} sm={2} xs={6}>
                <Typography variant="h6">Share Type</Typography>
              </Grid>
              <Grid item md={3} sm={2} xs={6}>
                <Typography variant="h6">Quantity</Typography>
              </Grid>
              <Grid item md={3} sm={2} xs={6}>
                <Typography variant="h6">Rate (Rs.)</Typography>
              </Grid>
              <Grid item md={3} xs={6}>
                <Typography variant="h6">Total (Rs.)</Typography>
              </Grid>
              <Grid item md={1} sm={2} xs={0}>
                <Typography variant="h6"></Typography>
              </Grid>
            </Grid>
            <FieldArray
              name="wegCal"
              render={(arrayHelpers) => (
                <>
                  {formik?.values?.wegCal?.map((section, index) => (
                    <Grid
                      container
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      spacing={2}
                      mt={1}
                    >
                      <Grid item md={2} sm={2} xs={6}>
                        <TextField
                          id={`wegCal[${index}].shareType`}
                          name={`wegCal[${index}].shareType`}
                          value={section.shareType}
                          onChange={formik.handleChange}
                          label="Share Type"
                          select
                          variant="outlined"
                          sx={{ width: "100%" }}
                          required
                          size="small"
                        >
                          <MenuItem key="IPO" value="IPO">
                            IPO
                          </MenuItem>
                          <MenuItem key="Secondary" value="Secondary">
                            Secondary
                          </MenuItem>
                          <MenuItem key="FPO" value="FPO">
                            FPO
                          </MenuItem>
                          <MenuItem key="Right" value="Right">
                            Right
                          </MenuItem>
                          <MenuItem key="Bonus" value="Bonus">
                            Bonus
                          </MenuItem>
                          <MenuItem key="Auction" value="Auction">
                            Auction
                          </MenuItem>
                        </TextField>
                      </Grid>
                      <Grid item md={3} sm={2} xs={6}>
                        <TextField
                          id={`wegCal[${index}].quantity`}
                          name={`wegCal[${index}].quantity`}
                          value={section.quantity}
                          onChange={formik.handleChange}
                          onBlur={() => handleBlur(index)}
                          label="Quantity"
                          variant="outlined"
                          sx={{ width: "100%" }}
                          required
                          type="number"
                          size="small"
                        />
                      </Grid>
                      <Grid item md={3} sm={2} xs={6}>
                        {section.shareType === "Right" ||
                        section.shareType === "Bonus" ? (
                          <TextField
                            id={`wegCal[${index}].faceValue`}
                            name={`wegCal[${index}].faceValue`}
                            value={formik.values.faceValue}
                            onChange={(e) => {
                              const { value } = e.target;
                              formik.setFieldValue(
                                `wegCal[${index}].shareType`,
                                value
                              );

                              let updatedFaceValue = ""; // Define default faceValue here
                              if (value === "Right" || value === "Bonus") {
                                updatedFaceValue = formik.values.faceValue; // Use formik's faceValue here
                              }
                              formik.setFieldValue(
                                `wegCal[${index}].faceValue`,
                                updatedFaceValue
                              );
                            }}
                            onBlur={() => handleBlur(index)}
                            label="Face Value"
                            variant="outlined"
                            sx={{ width: "100%" }}
                            required
                            type="number"
                            size="small"
                            disabled
                          />
                        ) : (
                          <TextField
                            id={`wegCal[${index}].rate`}
                            name={`wegCal[${index}].rate`}
                            value={section.rate}
                            onChange={formik.handleChange}
                            onBlur={() => handleBlur(index)}
                            label="Rate (Rs.)"
                            variant="outlined"
                            sx={{ width: "100%" }}
                            required
                            type="number"
                            size="small"
                          />
                        )}
                      </Grid>
                      <Grid item sm={3} xs={6}>
                        {section.shareType === "IPO" ? (
                          <TextField
                            className="total(Rs)"
                            id={`wegCal[${index}].iop`}
                            name={`wegCal[${index}].iop`}
                            label="Total (Rs.)"
                            variant="outlined"
                            sx={{ width: "100%" }}
                            value={section.ipo}
                            disabled
                            size="small"
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        ) : section.shareType === "Secondary" ? (
                          <TextField
                            className="total(Rs)"
                            id={`wegCal[${index}].secondary`}
                            name={`wegCal[${index}].secondary`}
                            label="Total (Rs.)"
                            variant="outlined"
                            sx={{ width: "100%" }}
                            value={section.secondary}
                            disabled
                            size="small"
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        ) : section.shareType === "FPO" ? (
                          <TextField
                            className="total(Rs)"
                            id={`wegCal[${index}].fpo`}
                            name={`wegCal[${index}].fpo`}
                            label="Total (Rs.)"
                            variant="outlined"
                            sx={{ width: "100%" }}
                            value={section.fpo}
                            disabled
                            size="small"
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        ) : section.shareType === "Right" ? (
                          <TextField
                            className="total(Rs)"
                            id={`wegCal[${index}].right`}
                            name={`wegCal[${index}].right`}
                            label="Total (Rs.)"
                            variant="outlined"
                            sx={{ width: "100%" }}
                            value={(
                              section.quantity * section.faceValue
                            ).toFixed(2)}
                            // value={section.right}
                            onBlur={() => handleBlur(index)}
                            disabled
                            size="small"
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        ) : section.shareType === "Bonus" ? (
                          <TextField
                            className="total(Rs)"
                            id={`wegCal[${index}].bonus`}
                            name={`wegCal[${index}].bonus`}
                            label="Total (Rs.)"
                            variant="outlined"
                            sx={{ width: "100%" }}
                            value={(
                              section.quantity * section.faceValue
                            ).toFixed(2)}
                            // value={section.bonus}
                            onBlur={() => handleBlur(index)}
                            disabled
                            size="small"
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        ) : section.shareType === "Auction" ? (
                          <TextField
                            className="total(Rs)"
                            id={`wegCal[${index}].auction`}
                            name={`wegCal[${index}].auction`}
                            label="Total (Rs.)"
                            variant="outlined"
                            sx={{ width: "100%" }}
                            value={section.auction}
                            disabled
                            size="small"
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        ) : (
                          <TextField
                            className="total(Rs)"
                            label="Total (Rs.)"
                            variant="outlined"
                            sx={{ width: "100%" }}
                            disabled
                            size="small"
                          />
                        )}
                      </Grid>
                      <Grid item md={1} sm={2} xs={12}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                          }}
                        >
                          <Button
                            onClick={() => handleAddSection()}
                            // onClick={() => formik.handleSubmit()}
                            disabled={index !== formik.values.wegCal.length - 1}
                            sx={{
                              color: theme.palette.secondary.main,
                              textTransform: "none",
                            }}
                          >
                            <AddIcon style={{ width: "2rem" }} />
                          </Button>

                          {formik.values.wegCal.length > 1 && (
                            <Button
                              type="button"
                              onClick={() => {
                                arrayHelpers.remove(index);
                                // Recalculate the weighted average after removing the section
                                const weightedAverage =
                                  calculateWeightedAverage();
                                setWeightedAveragePrice(weightedAverage);
                              }}
                            >
                              <DeleteIcon
                                style={{ width: "2rem", color: "red" }}
                              />
                            </Button>
                          )}
                        </div>
                      </Grid>
                    </Grid>
                  ))}
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
                      onClick={() => {
                        formik.handleSubmit();
                      }}
                      sx={{
                        backgroundColor: theme.palette.secondary.main,
                        color: theme.palette.text.alt,
                        textTransform: "none",
                      }}
                    >
                      Calculate
                    </Button>
                  </Grid>
                </>
              )}
            />
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              mt={4}
              p={2}
              sx={{
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.text.alt,
                textTransform: "none",
              }}
            >
              <Typography variant="h5" fontWeight={600}>
                The weighted average price of the stock: {weightedAveragePrice}
              </Typography>
            </Grid>
          </FormikProvider>
        }
      />
    </div>
  );
};

export default WeightedAveCal;
