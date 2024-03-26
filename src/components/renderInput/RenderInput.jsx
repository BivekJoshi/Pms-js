import {
  Alert,
  Autocomplete,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Switch,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { Field, getIn } from "formik";
import React, { useEffect, useMemo, useRef, useState } from "react";
import AsyncDropDown from "./AsyncDropDown";
import { FormControl } from "@mui/base";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import mapIcon from "../../assets/marker-icon.png";
import L from "leaflet";
import { PickDate, DualDatePicker } from "./DualDatePicker";
import DropZoneUploadFile from "../dropZone/DropZoneUploadFile";
import { DatePicker } from "@mui/x-date-pickers";
import { useSelector } from "react-redux";
import NepaliInputText from "../inputType/NepaliInputText";
import { useTranslation } from "react-i18next";
import AsyncDropDownOption from "./AsyncDropDownOption";
import VerificationDropZone from "../dropZone/VerificationDropZone";
import OptionalRender from "./OptionalRender";
const icon = L.icon({ iconUrl: mapIcon });

const MarkerLocationFieldArray = ({
  formValue,
  latLong,
  setLatLong,
  setValue,
  setValueField,
  index,
  fieldArrayName,
}) => {
  const markerRef = useRef();
  const map = useMap();

  const getLatitudeValue = getIn(
    formValue,
    fieldArrayName + "." + index + "." + "latitude"
  );
  const getLongitude = getIn(
    formValue,
    fieldArrayName + "." + index + "." + "longitude"
  );

  useEffect(() => {
    map.panTo(latLong);
  }, [map, latLong]);

  const fieldValueSet = (value, dirty) => {
    for (let i = 0; i < setValueField?.length; i++) {
      if (index > -1) {
        const toSetField = setValueField[i];
        const fieldName = `${fieldArrayName}.${index}.${toSetField}`;
        if (value) {
          setValue(fieldName, value?.[toSetField], { shouldDirty: dirty });
        }
      }
    }
  };

  useEffect(() => {
    if (getLongitude && getLatitudeValue) {
      setLatLong([getLatitudeValue, getLongitude]);
    } else {
      map.locate({ setView: true });
      map.on("locationfound", (e) => {
        const { latitude, longitude } = e;
        const value = { latitude: latitude, longitude: longitude };
        setLatLong([latitude, longitude]);
        fieldValueSet(value, true);
      });
    }
  }, [map]); // eslint-disable-line

  const onChange = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          const { lat, lng } = marker.getLatLng();
          marker.getLatLng();
          setLatLong([lat, lng]);
          const value = { latitude: lat, longitude: lng };
          fieldValueSet(value, true);
        }
      },
    }),
    [setLatLong] // eslint-disable-line
  );
  return latLong === null ? null : (
    <Marker
      icon={icon}
      position={latLong}
      draggable={true}
      ref={markerRef}
      eventHandlers={onChange}
    >
      <Popup>You are here</Popup>
    </Marker>
  );
};

const RenderInput = ({
  inputField,
  formik,
  index,
  isFieldArray,
  pushArray,
  removeArray,
  fieldArrayName,
  align,
}) => {
  const [latLong, setLatLong] = useState([0, 0]); // state for map latitude and longtitude
  const mode = useSelector((state) => state?.theme?.mode);
  const { t } = useTranslation();

  const getComponentToRender = (element, disableField) => {
    if (!element) return null;
    // console.log(element, "elem")
    const formVaues = isFieldArray
      ? getIn(formik.values, element.name)
      : formik.values[element.name];
    const formError = isFieldArray
      ? getIn(formik.errors, element.name)
      : formik.errors[element.name];
    const formTouched = isFieldArray
      ? getIn(formik.touched, element.name)
      : formik.touched[element.name];

    switch (element.type) {
      case "text":
        return (
          <TextField
            name={element?.name}
            label={t(element?.label)}
            value={formVaues}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            fullWidth
            required={element.required}
            variant="outlined"
            disabled={element.isDisabled}
            error={formTouched && Boolean(formError)}
            helperText={formTouched && formError}
            sx={{ width: "100%" }}
            InputLabelProps={{ shrink: Boolean(formVaues) }}
          />
        );
      case "toggleButton":
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div>{element.label}</div>
            <ToggleButtonGroup
              color="primary"
              name={element.name}
              value={formik.values[element.name]}
              exclusive
              onChange={(event, value) => {
                formik.handleChange(element.name)(value); // Manually update Formik state
              }}
            >
              {element.options.map((item, index) => {
                return (
                  <ToggleButton
                    key={index}
                    sx={{
                      borderRadius: "14px",
                      borderColor: formTouched && formError && "red",
                      color: formTouched && formError && "red",
                    }}
                    value={item.value}
                  >
                    {item.label}
                  </ToggleButton>
                );
              })}
            </ToggleButtonGroup>
            {formTouched && Boolean(formError) && (
              <Typography color="error" fontSize="12px" marginBottom={0.1}>
                {formTouched && formError}
              </Typography>
            )}
          </div>
        );

      case "nepaliTypeText":
        return (
          <NepaliInputText
            element={element}
            formik={formik}
            formTouched={formTouched}
            formError={formError}
            isFieldArray={isFieldArray}
          />
        );
      case "dropDownWithValue":
        return (
          <Autocomplete
            id={element.name}
            name={element.name}
            disabled={element?.isDisabled}
            options={element?.options}
            getOptionLabel={(option) => option?.label || element?.label}
            value={element?.options[0]}
            onChange={formik.handleChange}
            fullWidth
            renderInput={(params) => {
              return (
                <TextField
                  {...params}
                  label={t(element.label)}
                  error={formTouched && Boolean(formError)}
                  required={element.required}
                  helperText={formTouched && formError}
                />
              );
            }}
          />
        );
      case "fieldArraySwitch":
        return (
          <FormControl>
            <FormControlLabel
              name={element?.name}
              label={t(element?.label)}
              sx={{
                display: element?.display,
                flexDirection: element?.direction,
                margin: element?.margin,
                justifyContent: element?.justify,
              }}
              control={<Switch checked={formVaues} />}
              onChange={(e, value) => {
                if (value) {
                  pushArray();
                } else removeArray();
                formik.handleChange(e);
              }}
            />
          </FormControl>
        );
      case "fieldArrayMap":
        return (
          <Field name="map">
            {() => (
              <>
                <div style={{ textAlign: "center" }}>
                  <label
                    style={{
                      fontFamily:
                        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
                      fontSize: "14px",
                      fontWeight: "500",
                      lineHeight: "21.7px",
                    }}
                  >
                    Choose a location
                  </label>
                </div>
                <div style={{ height: "400px", display: "flex" }} key={mode}>
                  <MapContainer
                    style={{
                      width: "100%",
                      ...(mode === "dark" && {
                        filter:
                          "invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%)",
                      }),
                    }}
                    id="map"
                    center={{ lat: latLong[0], lng: latLong[1] }}
                    zoom={13}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <MarkerLocationFieldArray
                      latLong={latLong}
                      setLatLong={setLatLong}
                      setValue={formik?.setFieldValue}
                      setValueField={element?.setValueField}
                      index={index}
                      fieldArrayName={fieldArrayName}
                      formValue={formik.values}
                    />
                  </MapContainer>
                </div>
              </>
            )}
          </Field>
        );
      case "dropDown":
        return (
          <Autocomplete
            id={element.name}
            key={formVaues}
            name={element.name}
            disabled={element?.isDisabled}
            options={element?.options}
            getOptionLabel={(option) => t(option?.label) || ""}
            value={
              element?.options?.find((option) => option?.value === formVaues) ||
              ""
            }
            onChange={(event, newValue) => {
              if (element?.customOnChange) {
                element.customOnChange(event, newValue);
              } else {
                formik.setFieldValue(
                  element.name,
                  newValue?.value || newValue?.code || ""
                ); // Set value to newValue's value property or empty string if undefined
                if (element.clearField) {
                  for (let i = 0; i < element.clearField?.length; i++) {
                    formik.setFieldValue(element.clearField[i], "");
                  }
                }
              }
            }}
            fullWidth
            renderInput={(params) => {
              return (
                <TextField
                  {...params}
                  label={t(element.label)}
                  disabled={element?.isDisabled}
                  error={formTouched && Boolean(formError)}
                  required={element.required}
                  helperText={formTouched && formError}
                  variant="outlined"
                />
              );
            }}
          />
        );
      case "number":
        return (
          <TextField
            name={element?.name}
            label={t(element?.label)}
            value={formVaues}
            onChange={formik.handleChange}
            InputLabelProps={{ shrink: Boolean(formVaues) }}
            fullWidth
            type={element?.type}
            required={element.required}
            inputProps={{ min: element?.min, max: element?.max }}
            variant="outlined"
            error={formTouched && Boolean(formError)}
            helperText={formTouched && formError}
          />
        );
      case "switch":
        return (
          <div
            style={{
              display: element?.display,
              flexDirection: element?.direction,
              justifyContent: element?.justify,
            }}
          >
            <FormControlLabel
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                marginLeft: "0px",
                justifyContent: element?.justify,
              }}
              control={
                <Switch
                  disabled={element?.isDisabled}
                  checked={formik.values[element?.name]}
                  onChange={formik.handleChange}
                  name={element?.name}
                />
              }
              label={t(element?.label)}
            />
            {element?.infoAlert && !formik.values[element?.name] && (
              <Alert
                variant="standard"
                sx={{ bgcolor: "background.default" }}
                severity="info"
              >
                {t(element.infoAlert)}
              </Alert>
            )}
            {element?.hasRadio && formik.values[element.name] && (
              <FormControl
                style={{
                  display: element?.radioDisplay,
                  flexDirection: element?.radioDirection,
                  alignItems: element?.radioAlign,
                  gap: element?.radioGap,
                }}
              >
                <FormLabel id="demo-radio-buttons-group-label">
                  {t(element.radioLabel)}
                </FormLabel>
                <RadioGroup
                  row
                  name={element?.radioName}
                  value={formik.values[element.radioName]}
                  onChange={(event, value) => {
                    formik.setFieldValue(
                      element?.radioName,
                      event.target.value
                    );
                    formik.handleChange(element.radioName)(value); // Manually update Formik state
                  }}
                >
                  {element.radio.map((radio, i) => (
                    <FormControlLabel
                      value={radio.value}
                      control={<Radio />}
                      key={i}
                      label={t(radio.label)}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            )}
            {element?.hasTrueRadio && formik.values[element.name] && (
              <FormControl
                style={{
                  display: element?.radioDisplay,
                  flexDirection: element?.radioDirection,
                  alignItems: element?.radioAlign,
                  gap: element?.radioGap,
                }}
              >
                <FormLabel id="demo-radio-buttons-group-label">
                  {t(element.radioLabel)}
                </FormLabel>
                <RadioGroup
                  row
                  name={element?.radioName}
                  value={formik.values[element.radioName]}
                  onChange={(event, value) => {
                    formik.setFieldValue(
                      element?.radioName,
                      event.target.value
                    );
                    formik.handleChange(element.radioName)(value);
                  }}
                >
                  {element.radio.map((radio, i) => (
                    <FormControlLabel
                      value={radio.value}
                      control={<Radio />}
                      key={i}
                      label={radio.label}
                      checked={formik.values[element.radioName]?.includes(
                        radio.value
                      )}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            )}
          </div>
        );
      case "switchWithFields":
        return (
          <div
            style={{
              display: element?.display,
              flexDirection: element?.direction,
              alignItems: element?.align,
            }}
          >
            <FormControlLabel
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                marginLeft: "0px",
              }}
              control={
                <Switch
                  checked={Boolean(formik.values[element?.name])}
                  onChange={formik.handleChange}
                  name={element?.name}
                  disabled={disableField}
                />
              }
              labelPlacement={align ? align : "end"}
              label={t(element.label)}
            />
            {formik.values[element?.name] && (
              <div style={{ width: "100%" }}>
                <RenderInput inputField={element.newFields} formik={formik} />
              </div>
            )}
          </div>
        );

      case "radio":
        return (
          <>
            <FormControl
              style={{
                display: element?.display,
                alignItems: element?.align,
                gap: element?.gap,
              }}
            >
              <FormLabel id="demo-radio-buttons-group-label">
                <Typography
                  color={formTouched && Boolean(formError) && "error"}
                >
                  {t(element.label)}
                </Typography>
              </FormLabel>
              <RadioGroup
                row
                name={element?.name}
                value={formik.values[element.name]}
                onChange={(event, value) => {
                  formik.handleChange(element.name)(value); // Manually update Formik state
                }}
                onError={formTouched && Boolean(formError)}
              >
                {element.radio.map((radio, i) => (
                  <FormControlLabel
                    value={radio.value}
                    control={<Radio />}
                    key={i}
                    label={t(radio.label)}
                    disabled={
                      element.name === "accountStatementPeriod" &&
                      formik.values.isStandingInstructionForAutomaticTxn ===
                        "false"
                    }
                  />
                ))}
              </RadioGroup>

              {formTouched && Boolean(formError) && (
                <Typography color="error" fontSize="12px" marginBottom={1}>
                  {formTouched && formError}
                </Typography>
              )}
            </FormControl>

            {element.isDependent && formik.values[element?.name] === "true" ? (
              <RenderInput inputField={element.trueNewFields} formik={formik} />
            ) : (
              <RenderInput
                inputField={element.falseNewFields}
                formik={formik}
              />
            )}
          </>
        );

      case "datePicker":
        return <PickDate element={element} formik={formik} />;
      case "dualDate":
        return <DualDatePicker element={element} formik={formik} />;

      case "asyncDropDownOption":
        return (
          <AsyncDropDownOption
            element={element}
            formik={formik}
            isFieldArray={isFieldArray}
          />
        );
      case "asyncDropDown":
        return (
          <div>
            <AsyncDropDown
              element={element}
              formik={formik}
              formVaues={formVaues}
            />
            <div>
              {element.isDependent &&
              formik.values[element?.name] &&
              !element?.isNeutral ? (
                <RenderInput
                  inputField={element.trueNewFields}
                  formik={formik}
                />
              ) : !element.isDependent &&
                formik.values[element?.name] &&
                !element?.isNeutral ? (
                <RenderInput
                  inputField={element?.falseNewFields}
                  formik={formik}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        );

      case "documentUpload":
        return <DropZoneUploadFile title={element?.title} element={element} />;
      case "verificationDocumentUpload":
        return (
          <VerificationDropZone title={element?.title} element={element} />
        );
      case "optionalRender":
        return <OptionalRender element={element} formik={formik} />;
      default:
        return <TextField name={element?.name} label={t(element?.label)} />;
    }
  };

  return (
    <div>
      <Grid container spacing={2} alignItems="flex-end">
        {inputField?.map((element, index) => {
          const isDisabled = element?.disableOnChange?.name.some(
            (item, i) =>
              element.disableOnChange.value[i] === formik.values[item]
          );

          return (
            <Grid
              item
              sm={element?.sm}
              xs={element?.xs || element?.sm}
              md={element?.md}
              lg={element?.lg}
              key={index}
              // sx={{
              //   marginBottom:
              //     element.customMarginBottom && element.customMarginBottom,
              // }}
            >
              {getComponentToRender(element, isDisabled)}
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default RenderInput;
