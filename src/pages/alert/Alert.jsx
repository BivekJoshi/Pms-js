import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  Switch,
  Tab,
  Tabs,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useGetListedCompanies } from "../../hooks/watchList/useWatchList";
import { useAlertForm } from "./useAlertForm";
import ManageAlert from "./ManageAlert";
import AlertScriptDetails from "./AlertScriptDetails";
import { useGetCompanyById } from "../../hooks/company/useCompany";

const alertType = [
  {
    id: "HIGHER_THAN",
    label: "Price Rise",
  },
  {
    id: "LOWER_THAN",
    label: "Price Below",
  },
];
const deliveryMethods = [
  { id: "notification", value: "Push Notification" },
  { id: "SMS", value: "SMS" },
  { id: "EMAIL", value: "Email" },
];

const Alert = (props) => {
  const [value, setValue] = useState("1");
  const theme = useTheme();
  const handleChange = (event, newValue) => setValue(newValue);
  const themeMode = useSelector((state) => state.theme?.mode);
  const { formik, handleClear } = useAlertForm();
  const { data: listedCompanies } = useGetListedCompanies();

  const btnStyle = {
    backgroundColor: themeMode === "dark" ? "#8496ff" : "#ebebeb",
  };

  const symbolsArray = [];
  for (const key in listedCompanies) {
    if (Object.hasOwnProperty.call(listedCompanies, key)) {
      symbolsArray.push({ index: key, ...listedCompanies[key] });
    }
  }
  const symbols = symbolsArray.map((item) => {
    return { label: item.symbol, id: item.id };
  });

  const scriptFullName = symbolsArray.map((item) => {
    return { label: item?.companyInfo, id: item.id };
  });

  const scriptName = symbols.find((d) => d.id === formik.values?.companyInfoId)
    ?.label;

  const { data: companyData, isLoading } = useGetCompanyById(scriptName);

  const handleFormSubmit = async () => {
    formik.handleSubmit();
  };
  const isSMSPresent = formik.values?.alertMethod?.includes("SMS");

  useEffect(() => {
    if (companyData?.script) {
      formik.setFieldValue("ltp", companyData.script?.ltp);
    } else {
      formik.setFieldValue("ltp", "");
    }
  }, [companyData?.script]); //eslint-disable-line

  const labelStyle = {
    backgroundColor: "#EBEDEF",
    marginLeft: ".5rem",
    textTransform: "none",
    borderRadius: ".5rem",
    color: "black",
  };
  const activeLabelStyle = {
    ...labelStyle,
    backgroundColor: "#329EF4",
  };
  return (
    <>
      <div>
        <TabContext value={value}>
            <div
              style={{
                backgroundColor: theme.palette.background.alt,
                padding: "12px",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
               <Typography
              variant="h5"
              style={{
                color: theme.palette.text.light,
                fontWeight: "800",
              }}
            >
              Alert :
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
            <TabList onChange={handleChange} indicatorColor="secondary" textColor={theme.palette.text.main}>
            <Tab
                  label="Create Alert"
                  value="1"
                  style={value === "1" ? activeLabelStyle : labelStyle}
                />
                <Tab
                  label="Manage Alert"
                  value="2"
                  style={value === "2" ? activeLabelStyle : labelStyle}
                />
            </TabList>
            </Box>
            </div>
            <TabPanel sx={{ p: 0, pt: "16px" }} value="1">
            <div
              style={{
                backgroundColor: theme.palette.background.alt,
                padding: "16px 24px",
              }}
            >
              <div>
                {" "}
                <Typography
                  variant="h5"
                  style={{ color: theme.palette.text.main, fontWeight: "400" }}
                >
                  Create New Alert
                </Typography>
              </div>

              <div
                style={{ display: "flex", gap: "16px", padding: "24px 0px" }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={3} lg={3}>
                    <Autocomplete
                      name="companyInfoId"
                      options={scriptFullName}
                      getOptionLabel={(option) => option.label}
                      value={scriptFullName.find((option) => option.id === formik.values.companyInfoId) || null}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Select a Company"
                          name="companyInfoId"
                          placeholder="Select a Company"
                          variant="outlined"
                          autoFocus
                          size="small"
                          InputLabelProps={{ shrink: true }}
                          onChange={formik.handleChange}
                          required
                          error={
                            formik.touched.companyInfoId &&
                            Boolean(formik.errors.companyInfoId)
                          }
                          helperText={
                            formik.touched.companyInfoId &&
                            formik.errors.companyInfoId
                          }
                          value={formik.values.companyInfoId}
                        />
                      )}
                      onChange={(e, value) => {
                        if (value != null) {
                          formik.setFieldValue(
                            "companyInfoId",
                            value?.id || ""
                          ); // Set the field value based on the selected option or an empty string if no option is selected
                        } else {
                          formik.setFieldValue("companyInfoId", ""); // Reset the value when no option is selected
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} lg={3}>
                    <TextField
                      {...props}
                      sx={{
                        "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                          display: "none",
                        },
                        "& input[type=number]": {
                          MozAppearance: "textfield",
                        },
                        width: "100%",
                      }}
                      type="number"
                      name="ltp"
                      InputLabelProps={{ shrink: true }}
                      variant="outlined"
                      size="small"
                      label="LTP"
                      // onChange={(e, value) => {
                      //   console.log({"value console": value})
                      //   formik?.setFieldValue("ltp", value); // Set the field value based on the selected option or an empty string if no option is selected
                      // }}
                      disabled
                      value={formik.values.ltp}
                      inputProps={{
                        inputMode: "numeric",
                        min: 0,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} lg={3}>
                    <Autocomplete
                      name="alertType"
                      getOptionLabel={(option) => option.label} // Specify how to display the option label
                      options={alertType}
                      value={alertType.find((option) => option.id === formik.values.alertType) || null}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Select an Alert Type"
                          placeholder="Select alert type"
                          variant="outlined"
                          size="small"
                          value={formik.values.alertType}
                          InputLabelProps={{ shrink: true }}
                          error={
                            formik.touched.alertType &&
                            Boolean(formik.errors.alertType)
                          }
                          helperText={
                            formik.touched.alertType && formik.errors.alertType
                          }
                          required
                        />
                      )}
                      onChange={(e, value) => {
                        formik.setFieldValue(
                          "alertType",
                          value ? value?.id : ""
                        ); // Set the field value based on the selected option
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} lg={3}>
                    <TextField
                      {...props}
                      sx={{
                        "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                          display: "none",
                        },
                        "& input[type=number]": {
                          MozAppearance: "textfield",
                        },
                        width: "100%",
                      }}
                      type="number"
                      name="triggerPrice"
                      InputLabelProps={{ shrink: true }}
                      variant="outlined"
                      size="small"
                      label="Enter Trigger Price"
                      placeholder="Enter Trigger Price"
                      value={formik.values.triggerPrice}
                      error={
                        formik.touched.triggerPrice &&
                        Boolean(formik.errors.triggerPrice)
                      }
                      helperText={
                        formik.touched.triggerPrice &&
                        formik.errors.triggerPrice
                      }
                      onChange={formik.handleChange}
                      required
                      inputProps={{
                        inputMode: "numeric",
                        min: 0,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} lg={2} className="d-flex ">
                    <FormControl component="fieldset">
                      <label>Alert For </label>
                      <FormGroup
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          flexWrap: "wrap",
                        }}
                      >
                        <FormControlLabel
                          control={
                            <div style={{ marginLeft: "10px" }}>
                              {" "}
                              <label
                                style={{
                                  color: theme.palette.text.light,
                                  fontWeight: "400",
                                  marginRight: "20px",
                                }}
                              >
                                Buy
                              </label>
                              <FormControlLabel
                                control={
                                  <Switch
                                    checked={
                                      formik.values?.transactionType === "SELL"
                                    }
                                    onChange={(e) => {
                                      formik.setFieldValue(
                                        "transactionType",
                                        e.target.checked ? "SELL" : "PURCHASE"
                                      );
                                    }}
                                    name="transactionType"
                                    style={{
                                      color:
                                        formik.values?.transactionType ===
                                        "SELL"
                                          ? "red"
                                          : "green",
                                    }}
                                  />
                                }
                              />
                              <label
                                style={{
                                  color: theme.palette.text.light,
                                  fontWeight: "400",
                                  marginRight: "15px",
                                }}
                              >
                                Sell
                              </label>
                            </div>
                          }
                        />
                      </FormGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6} className="d-flex ">
                    <FormControl component="fieldset">
                      <label>Select Delivery Method</label>
                      <FormGroup
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          flexWrap: "wrap",
                        }}
                      >
                        {/* {deliveryMethods.map((method) => (
                          <FormControlLabel
                          
                            key={method.id}
                            label={method?.value}
                            control={
                              <Radio
                              
                                value={method?.id}
                                name='alertMethod' // Name of the field in initialValues
                                // checked={formik.values?.alertMethod?.includes(
                                //   method.id
                                // )}
                                
                                checked={formik.values.alertMethod === method?.id}
                                onChange={formik.handleChange}
                                // disabled={
                                //   method.id === 'SMS' &&
                                //   method.id === 'notification'
                                // }
                              />
                            }
                          />
                        ))} */}

                        {deliveryMethods.map((method) => (
                          <FormControlLabel
                            key={method?.id}
                            label={method?.value}
                            control={
                              <Checkbox
                                value={method.id}
                                name="alertMethod" // Name of the field in initialValues
                                checked={formik.values?.alertMethod?.includes(
                                  method.id
                                )}
                                onChange={formik.handleChange}
                                disabled={
                                  method.id === "SMS" &&
                                  method.id === "notification"
                                }
                                style={{
                                  color: formik.values?.alertMethod?.includes(
                                    method.id
                                  )
                                    ? "blue"
                                    : "inherit",
                                }}
                              />
                            }
                          />
                        ))}
                        {formik.touched.alertMethod &&
                          formik.errors.alertMethod && (
                            <FormHelperText error>
                              {formik.errors.alertMethod}
                            </FormHelperText>
                          )}
                      </FormGroup>
                    </FormControl>
                  </Grid>
                </Grid>
              </div>
              <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-end"
              >
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleClear}
                  sx={{
                    mt: 3,
                    ml: 1,
                    // backgroundColor: "#6C49B4",
                    themeMode,
                    color: "error",
                    textTransform: "none",
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  type="submit"
                  onClick={handleFormSubmit}
                  sx={{
                    mt: 3,
                    ml: 1,
                    backgroundColor: "#6C49B4",
                    themeMode,
                    color: "#fcfcfc",
                    textTransform: "none",
                  }}
                  disabled={!formik.isValid}
                >
                  Create Alert
                </Button>
              </Grid>
              {isSMSPresent && (
                <Grid
                  sx={{
                    padding: "10px",
                    justifyContent: "center",
                    fontSize: "12px",
                  }}
                >
                  Note :- In order to receive SMS notification, you must have
                  subscribed to the SMS service.
                </Grid>
              )}
            </div>
            {scriptName && (
              <div style={{ paddingTop: "16px" }}>
                <AlertScriptDetails data={companyData} isLoading={isLoading} />
              </div>
            )}
            </TabPanel>
          <TabPanel sx={{ p: 0, pt: "16px" }} value="2">
            <ManageAlert
              script={symbols}
              alertType={alertType}
              companyList={symbolsArray}
            />
          </TabPanel>
        </TabContext>
      </div>
    </>
  );
};

export default Alert;
