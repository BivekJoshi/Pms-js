import { TabContext, TabPanel } from "@mui/lab";
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
  Radio,
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
  { id: "PUSH_NOTIFICATION", value: "Push Notification" },
  { id: "SMS", value: "SMS" },
  { id: "EMAIL", value: "Email" },
];

const Alert = (props) => {
  const [activeTab, setactiveTab] = useState("1");
  const theme = useTheme();
  const handleChange = (event, newValue) => setactiveTab(newValue);
  const themeMode = useSelector((state) => state.theme?.mode);
  const { formik, handleClear } = useAlertForm();
  const { data: listedCompanies } = useGetListedCompanies();

  const btnStyle = {
    backgroundColor: themeMode === "dark" ? "#fcfcfc" : "#6C49B4",
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

  const scriptFullName = symbolsArray.map((item)=>{
    return{ label:item?.companyInfo,id:item.id};
  });

  const scriptName = symbols.find(
    (d) => d.id === formik.values?.companyInfoId
  )?.label;

  const { data: companyData, isLoading } = useGetCompanyById(scriptName);

  const handleFormSubmit = () => {
    formik.handleSubmit();
  };
  const isSMSPresent = formik.values?.alertMethod?.includes("SMS");

  useEffect(() => {
    if (companyData?.script) {
      formik.setFieldValue("ltp", companyData.script?.ltp);
    }
  }, [companyData?.script]); //eslint-disable-line
  return (
    <>
      <div>
        <TabContext value={activeTab}>
          <div>
            <div
              style={{
                backgroundColor: theme.palette.background.alt,
                padding: "12px",
                borderRadius: "6px",
              }}
            >
              <Tabs onChange={handleChange} value={activeTab}>
                <Tab
                  sx={{
                    borderRadius: "5px",
                    p: 0,
                    px: "8px",
                    backgroundColor:
                      activeTab === "1" && btnStyle.backgroundColor,
                  }}
                  label="Create Alert"
                  value="1"
                />
                <Tab
                  sx={{
                    borderRadius: "5px",
                    p: 0,
                    px: "8px",
                    backgroundColor:
                      activeTab === "2" && btnStyle.backgroundColor,
                  }}
                  label="Manage Alert"
                  value="2"
                />
              </Tabs>
            </div>
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
                  style={{ color: theme.palette.text.light, fontWeight: "400" }}
                >
                  Create New Alert
                </Typography>
              </div>

              <div
                style={{ display: "flex", padding: "4rem 0" }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={6} sm={6} md={4} lg={2}>
                    <Autocomplete
                      name='companyInfoId'
                      options={scriptFullName}
                      getOptionLabel={(option) => option.label}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Select a Company"
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
                        />
                      )}
                      onChange={(e, value) => {
                        formik?.setFieldValue("companyInfoId", value?.id || ""); // Set the field value based on the selected option or an empty string if no option is selected
                      }}
                    />
                  </Grid>
                  <Grid item xs={6} sm={6} md={4} lg={2}>
                    <TextField
                      {...props}
                      sx={{
                        "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                          {
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
                      onChange={(e, value) => {
                        console.log(e);
                        formik?.setFieldValue("ltp", value || ""); // Set the field value based on the selected option or an empty string if no option is selected
                      }}
                      disabled
                      value={companyData?.script?.ltp}
                      inputProps={{
                        inputMode: "numeric",
                        min: 0,
                      }}
                    />
                  </Grid>
                  <Grid item xs={6} sm={6} md={4} lg={2}>
                    <Autocomplete
                      name="alertType"
                      getOptionLabel={(option) => option.label} // Specify how to display the option label
                      options={alertType}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Select an Alert Type"
                          placeholder="Select alert type"
                          variant="outlined"
                          size="small"
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
                  <Grid item xs={6} sm={6} md={4} lg={2}>
                    <TextField
                      {...props}
                      sx={{
                        "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                          {
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
                  <Grid item xs={12} sm={6} md={4} lg={2}>
                    <FormControl component="fieldset" style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                      <label>Alert For: </label>
                      <Box
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          marginLeft: "0.6rem",
                        }}
                      >
                        <Button
                          style={{
                            backgroundColor:
                              formik.values.transactionType === "PURCHASE"
                                ? btnStyle.backgroundColor
                                : "",
                                color:  formik.values.transactionType === "PURCHASE" ? theme.palette.text.alt : theme.palette.text.main,
                          }}
                          variant="outlined"
                          onClick={() => {
                            formik.setFieldValue("transactionType", "PURCHASE");
                          }}
                        >
                          Buy
                        </Button>
                        <Button
                          style={{
                            background:
                              formik.values.transactionType === "SELL"
                                ? btnStyle.backgroundColor
                                : "",
                                color:  formik.values.transactionType === "SELL" ? theme.palette.text.alt : theme.palette.text.main,
                          }}
                          variant="outlined"
                          
                          onClick={() => {
                            formik.setFieldValue("transactionType", "SELL");
                          }}
                        >
                          Sell
                        </Button>
                      </Box>
                      {/* <FormGroup
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          flexWrap: "wrap",
                        }}
                      >
                        <FormControlLabel
                          control={
                            <div style={{ marginLeft: "0.8rem" }}>
                              {" "}
                              <label
                                style={{
                                  color: theme.palette.text.light,
                                  fontWeight: "400",
                                  margin: "1rem",
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
                                  />
                                }
                              />
                              <label
                                style={{
                                  color: theme.palette.text.light,
                                  fontWeight: "400",
                                  margin: "0rem",
                                }}
                              >
                                Sell
                              </label>
                            </div>
                          }
                        />
                      </FormGroup> */}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={2} style={{ marginTop: "-2rem"}}>
                    <FormControl component="fieldset">
                      <label>Select Delivery Method</label>
                      <FormGroup
                        sx={{
                          display: "flex",
                          flexDirection: "column",
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
                                value={method?.id}
                                name="alertMethod" // Name of the field in initialValues
                                // checked={formik.values.alertMethod.includes(
                                //   method?.id
                                // )}
                                checked={
                                  formik.values.alertMethod === method?.id
                                }
                                onChange={(event) => {
                                  const selectedMethod = method?.id;
                                  if (event.target.checked) {
                                    formik.setFieldValue(
                                      "alertMethod",
                                      selectedMethod
                                    );
                                  } else {
                                    formik.setFieldValue("alertMethod", "");
                                  }
                                }}
                                style={{
                                  "&:checked": {
                                    backgroundColor: "#6C49B4",
                                  },
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
                  onClick={handleClear}
                  sx={{ mt: 3, ml: 1 }}
                  color="error"
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
                  }}
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
