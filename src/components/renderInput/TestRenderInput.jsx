import { ErrorMessage, Field } from "formik";
import {
  Grid,
  TextField,
  Typography,
  Autocomplete,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Switch,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import mapIcon from "../../assets/marker-icon.png";
import { DatePicker } from "@mui/x-date-pickers";
import { axiosInstance } from '../../api/axiosInterceptor';
import { PROVINCE_OPTIONS } from '../../kyc/dp/forms/individual/basicInputData';

const icon = L.icon({ iconUrl: mapIcon });
const LocationMarker = ({
  position,
  setPosition,
  setValue,
  name,
  setValueField,
  fieldArrayName,
  index,
  watch,
}) => {
  const markerRef = useRef();
  const map = useMap();
  const getLatitudeValue = watch(
    fieldArrayName + "." + index + "." + "latitude"
  );
  const getLongitude = watch(fieldArrayName + "." + index + "." + "longitude");

  useEffect(() => {
    map.panTo(position);
  }, [map, position]);

  const fieldValueSet = (value, dirty) => {
    for (let i = 0; i < setValueField?.length; i++) {
      if (index > -1) {
        const toSetField = setValueField[i];
        const fieldName = fieldArrayName + "." + index + "." + toSetField;
        setValue(fieldName, value[toSetField], { shouldDirty: dirty });
      }
    }
  };

  useEffect(() => {
    if (getLatitudeValue && getLatitudeValue) {
      setPosition([getLatitudeValue, getLongitude]);
    } else map.locate({ setView: true });
    map.on("locationfound", (e) => {
      const { latitude, longitude } = e;
      const value = { latitude: latitude, longitude: longitude };
      setPosition([latitude, longitude]);
      setValue(`${fieldArrayName + "." + index + "." + name}`, {
        latitude: latitude,
        longitude: longitude,
      });
      fieldValueSet(value, true);
    });
  }, [map, setPosition]);

  const onMarkerChange = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          const { lat, lng } = marker.getLatLng();
          marker.getLatLng();
          setValue(`${fieldArrayName + "." + index + "." + name}`, {
            latitude: lat,
            longitude: lng,
          });
          setPosition([lat, lng]);
          const value = { latitude: lat, longitude: lng };
          fieldValueSet(value, true);
        }
      },
    }),
    [setPosition]
  );

  return position === null ? null : (
    <Marker
      icon={icon}
      position={position}
      draggable={true}
      eventHandlers={onMarkerChange}
      ref={markerRef}
    >
      <Popup>You are here</Popup>
    </Marker>
  );
};

let isReq;
const TestRenderInput = ({
  inputField,
  formik,
  isFieldArray,
  fieldArrayName,
  indexLength,
}) => {
  const {
    watchFor,
    type,
    placeholder,
    name,
    label,
    options,
    col,
    dualDate,
    isBoid,
    pattern,
    engPlaceholder,
    required,
    maxDate,
    minLength,
    maxLength,
    dependentAction,
    sm,
    onChangeClearValue,
    index,
    future,
    engLabel,
    customOnChange,
    disabled,
    action,
    id,
    radio,
    description,
    able,
    validate,
    setValueField,
  } = inputField;

  //This is to incorporate field array as in field array field names are as 'fieldArrayName.index.fieldName'
  let finalWatch =
    index > -1 && watchFor
      ? fieldArrayName + "." + index + "." + watchFor
      : watchFor;
  const [isDisabled, setIsDisabled] = useState(false);

  const [latLong, setLatLong] = useState([0, 0]); // state for map latitude and longtitude

  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  useEffect(() => {
    if (userDetails?.approvedBy && isBoid) {
      setIsDisabled(true);
    }
  }, [userDetails]);

  //If watchFor is present, then watch for the field else keep it undefined.
  const dpv = watchFor ? watch(finalWatch) : "";
  const [dropDown, setDropDown] = useState();
  const [loading, setLoading] = useState(false);
  const [hidden, sethidden] = useState(false);
  const [disable, setDisable] = useState(false);
  //If the field that is dependent changes and has fetch property then call api
  useMemo(() => {
    if (dpv && dependentAction?.fetch) {
      setLoading(true);
      let replaceBy = dpv;
      if (dependentAction.staticField === "PROVINCE")
        replaceBy = PROVINCE_OPTIONS.find((d) => d.value === dpv)?.id;
      const apiPath = dependentAction.api.replace("#", replaceBy);
      axiosInstance
        .get(apiPath)
        .then((response) => {
          const dd = response.data?.map((d) => {
            return {
              value: d?.name,
              label: d?.name,
            };
          });
          setDropDown(dd);
        })
        .catch((error) => setDropDown())
        .finally(() => setLoading(false));
    } else if (dependentAction?.fetch) {
      axiosInstance
        .get(dependentAction?.api)
        .then((response) => {
          const dd = response.data?.map((d) => {
            return {
              value: d?.code,
              label: d?.name,
            };
          });
          setDropDown(dd);
        })
        .catch((error) => setDropDown())
        .finally(() => setLoading(false));
    }
  }, [dpv]);

  //Disable Dependent Fiels with disable propert
  useEffect(() => {
    if (watchFor && dependentAction?.type === "DISABLE" && dpv === "true") {
      setDisable(false);
    } else if (
      watchFor &&
      dependentAction?.type === "DISABLE" &&
      dpv === "false"
    ) {
      setDisable(true);
    } else if (
      (watchFor &&
        dependentAction?.type === "DISABLE" &&
        dependentAction?.condition1 === dpv) ||
      dependentAction?.condition2 === dpv ||
      dependentAction?.condition3 === dpv
    ) {
      setIsDisabled(true);
    } else if (watchFor === "dob") {
      if (watchFor === "dob") {
        // const adDate = dateConverter(dpv, "BS_AD");
        const ageInMs = Date.now() - new Date(adDate).getTime();
        const ageInDate = new Date(ageInMs);
        const age = Math.abs(ageInDate.getUTCFullYear() - 1970);
        if (age < 16) {
          setIsDisabled(true);
          isReq = true;
        } else {
          setIsDisabled(true);
          isReq = false;
        }
      }
    } else if (
      (watchFor &&
        dependentAction?.type === "DISABLE" &&
        dependentAction?.condition1 !== dpv) ||
      dependentAction?.condition2 !== dpv ||
      dependentAction?.condition3 === dpv
    ) {
      setIsDisabled(false);
    }
  }, [dpv]);

  //Hide Dependent Field with hidden property
  useEffect(() => {
    if (
      watchFor &&
      dependentAction?.type === "HIDDEN" &&
      dependentAction?.condition === !!dpv
    ) {
      sethidden(true);
    } else if (
      watchFor &&
      dependentAction?.type === "HIDDEN" &&
      dependentAction?.condition === dpv
    ) {
      sethidden(true);
    } else if (
      watchFor &&
      dependentAction?.type === "HIDDEN" &&
      dependentAction?.condition !== dpv
    ) {
      sethidden(false);
    }
  }, [dpv]);

  //Show Dependent Field with SHOW property
  useEffect(() => {
    if (
      watchFor &&
      dependentAction?.type === "SHOW" &&
      dependentAction?.condition === dpv
    ) {
      sethidden(false);
    } else if (
      watchFor &&
      dependentAction?.type === "SHOW" &&
      dependentAction?.condition !== dpv
    ) {
      sethidden(true);
    }
  }, [dpv]);

  if (
    dependentAction?.type === "HIDDEN" &&
    dependentAction?.condition === "index" &&
    index === dependentAction?.value
  )
    return <></>;
  else if (
    dependentAction?.type === "SHOW" &&
    dependentAction?.condition === "INDEX_LENGTH"
  ) {
    if (index < indexLength - 1)
      return <Grid span={col} sm={sm}></Grid>;
  } else if (
    dependentAction?.type === "SHOW" &&
    dependentAction?.condition === "INDEX_LENGTH_VALUE"
  ) {
    if (index < dependentAction?.value - 1)
      return <Grid span={col} sm={sm}></Grid>;
  }

  const renderFields = (element) => {
    const formVaues = isFieldArray
    ? getIn(formik.values, element.name)
    : formik.values[element.name];
  const formError = isFieldArray
    ? getIn(formik.errors, element.name)
    : formik.errors[element.name];

  const formTouched = isFieldArray
    ? getIn(formik.touched, element.name)
    : formik.touched[element.name];

    switch (element?.type) {
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
          sx={{width: "100%"}}
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
                <div style={{ height: "400px", display: "flex" }}>
                  <MapContainer
                    style={{
                      width: "100%",
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
            sx={{ textAlign: "left" }}
            control={
              <Switch
                sx={{ textAlign: "left" }}
                checked={formik.values[element?.name]}
                onChange={formik.handleChange}
                name={element?.name}
              />
            }
            label={element?.label}
          />
        );
      case "radio":
        return (
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              {element.label}
            </FormLabel>
            <RadioGroup row onChange={formik.handleChange} name={element?.name}>
              {element.radio.map((radio) => (
                <FormControlLabel
                  value={radio.value}
                  control={<Radio />}
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
              label={element.label}
              value={formik.values || ""}
              onChange={formik.handleChange}
            />
          </Grid>
        );

      case "dualDate":
        return <DualDatePicker element={element} formik={formik} />;

      case "asyncDropDown":
        return <AsyncDropDown element={element} formik={formik} />;
      case "toggle":
        return <ToggleSwitchForm element={element} formik={formik} />;
      default:
        return <TextField name={element?.name} label={element?.label} />;   
    }
  };

  return (
    <>
        {inputField.map((element, index) => {
            return (                
                <Grid  item
                sm={element?.sm}
                xs={element?.xs || element?.sm}
                md={element?.md}
                lg={element?.lg}
                key={index}
                sx={{
                  marginBottom:
                    element.customMarginBottom && element.customMarginBottom,
                }}>
                {!hidden && renderFields(element)}
                </Grid>
            )
        })}
    </>
  );
};

export default TestRenderInput;
