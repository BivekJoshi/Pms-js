import {
  Autocomplete,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Switch,
  TextField,
} from "@mui/material";
import { Field, getIn } from "formik";
import React, { useEffect, useMemo, useRef, useState } from "react";
import AsyncDropDown from "./AsyncDropDown";
import { FormControl } from "@mui/base";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import mapIcon from "../../assets/marker-icon.png";
import L from "leaflet";
import DualDatePicker from "./DualDatePicker";
import DropZoneUploadFile from "../dropZone/DropZoneUploadFile";
import { DatePicker } from "@mui/x-date-pickers";
import { useSelector } from "react-redux";
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
}) => {
  const [latLong, setLatLong] = useState([0, 0]); // state for map latitude and longtitude
  const mode = useSelector((state) => state?.theme?.mode);

  const getComponentToRender = (element) => {
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
            label={element?.label}
            value={formVaues}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            fullWidth
            required={element.required}
            variant="outlined"
            disabled={element.disabled}
            error={formTouched && Boolean(formError)}
            helperText={formTouched && formError}
            sx={{ width: "100%" }}
          />
        );
      case "fieldArraySwitch":
        return (
          <FormControl>
            <FormControlLabel
              name={element?.name}
              label={element?.label}
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
            name={element.name}
            options={element?.options}
            getOptionLabel={(option) => option?.label || ""}
            value={element?.options.find(
              (option) => option?.value === formVaues
            )}
            onChange={(event, newValue) => {
              formik.setFieldValue(element.name, newValue?.value || ""); // Set value to newValue's value property or empty string if undefined
            }}
            fullWidth
            renderInput={(params) => {
              return (
                <TextField
                  {...params}
                  label={element.label}
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
            label={element?.label}
            value={formVaues}
            onChange={formik.handleChange}
            fullWidth
            type="number"
            required={element.required}
            variant="outlined"
            error={formTouched && Boolean(formError)}
            helperText={formTouched && formError}
          />
        );
      case "switch":
        return (
          <FormControlLabel
            control={
              <Switch
                disabled={element?.isDisabled}
                checked={formik.values[element?.name]}
                onChange={formik.handleChange}
                name={element?.name}
              />
            }
            label={element?.label}
          />
        );
      case "switchWithFields":
        return (
          <>
            <FormControlLabel
              control={
                <Switch
                  checked={Boolean(formik.values[element?.name])}
                  onChange={formik.handleChange}
                  name={element?.name}
                />
              }
              label={element?.label}
            />
            {formik.values[element?.name] && (
              <Grid container spacing={2} alignItems="flex-end">
                {element.newFields?.map((element, index) => {
                  return (
                    <Grid
                      item
                      sm={element?.sm}
                      xs={element?.xs || element?.sm}
                      md={element?.md}
                      lg={element?.lg}
                      key={index}
                      sx={{
                        marginBottom:
                          element.customMarginBottom &&
                          element.customMarginBottom,
                      }}
                    >
                      {getComponentToRender(element)}
                    </Grid>
                  );
                })}
              </Grid>
            )}
          </>
        );

      case "radio":
        return (
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              {element.label}
            </FormLabel>
            <RadioGroup row onChange={formik.handleChange} name={element?.name}>
              {element.radio.map((radio, i) => (
                <FormControlLabel
                  value={radio.value}
                  control={<Radio />}
                  key={i}
                  label={radio.label}
                  disabled={
                    element.name === "accountStatementPeriod" &&
                    formik.values.isStandingInstructionForAutomaticTxn ===
                      "false"
                  }
                />
              ))}
            </RadioGroup>
          </FormControl>
        );
      case "datePicker":
        return (
          <Grid display={"flex"} gap={2}>
            <DatePicker
              sx={{ width: "100%" }}
              name={element?.name}
              label={element.label}
              value={formik.values || ""}
              onChange={formik.handleChange}
              required={element.required}
              error={formTouched && Boolean(formError)}
              helperText={formTouched && formError}
            />
          </Grid>
        );

      case "dualDate":
        return <DualDatePicker element={element} formik={formik} />;

      case "asyncDropDown":
        return <AsyncDropDown element={element} formik={formik} />;

      case "documentUpload":
        return <DropZoneUploadFile title={element?.title} />;

      default:
        return <TextField name={element?.name} label={element?.label} />;
    }
  };

  return (
    <div>
      <Grid container spacing={2} alignItems="flex-end">
        {inputField?.map((element, index) => {
          return (
            <Grid
              item
              sm={element?.sm}
              xs={element?.xs || element?.sm}
              md={element?.md}
              lg={element?.lg}
              key={index}
              sx={{
                marginBottom:
                  element.customMarginBottom && element.customMarginBottom,
              }}
            >
              {getComponentToRender(element)}
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default RenderInput;
