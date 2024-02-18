import {
  Autocomplete,
  Box,
  FormControl,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
} from "@mui/material";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Field, FormikProvider } from "formik";
import { FieldArray } from "formik";
import { useAddressForm } from "./useAddressForm";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import mapIcon from "../../../../../assets/marker-icon.png";
import L from "leaflet";

const icon = L.icon({ iconUrl: mapIcon });
const MarkerLocation = ({
  latLong,
  setLatLong,
  setValue,
  setValueField,
  index,
  fieldArrayName,
}) => {
  const markerRef = useRef();
  const map = useMap();

  useEffect(() => {
    map.panTo(latLong);
  }, [map, latLong]);

  const fieldValueSet = (value, dirty) => {
    for (let i = 0; i < setValueField?.length; i++) {
      if (index > -1) {
        const toSetField = setValueField[i];
        const fieldName = `${fieldArrayName}.${index}.${toSetField}`;
        console.log(fieldName);
        if (value) {
          setValue(fieldName, value?.[toSetField], { shouldDirty: dirty });
        }
      }
    }
  };

  useEffect(() => {
    map.locate({ setView: true });
    map.on("locationfound", (e) => {
      const { latitude, longitude } = e;
      const value = { latitude: latitude, longitude: longitude };
      setLatLong([latitude, longitude]);
      fieldValueSet(value, true);
    });
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
  return (
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

const AddressIndividualDp = () => {
  const { formik } = useAddressForm();
  const [latLong, setLatLong] = useState([0, 0]); // state for map latitude and longtitude
  console.log(formik.values);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
        borderRadius: "6px",
        margin: "5rem",
        border: "1px solid #dee2e6",
        boxShadow:
          "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
      }}
    >
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <FieldArray name="addresses">
            {({ push, remove }) => (
              <div>
                {formik.values.addresses &&
                  formik.values?.addresses.map((address, index) => (
                    <Grid container spacing={3.5} key={index}>
                      <Grid item xs={12} sm={6} md={3} lg={4}>
                        <Autocomplete
                          name={`addresses.${index}.country`}
                          options={["Nepal"]}
                          onChange={formik.handleChange}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              name={`addresses.${index}.country`}
                              label="Country (देश)"
                              value={address.country}
                              variant="outlined"
                              size="small"
                              required
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={3} lg={4}>
                        <Autocomplete
                          name={`addresses.${index}.provience`}
                          options={["Nepal"]}
                          value={address.province}
                          onChange={formik.handleChange}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              name={`addresses.${index}.provience`}
                              label="Province (प्रदेश)"
                              variant="outlined"
                              size="small"
                              required
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={3} lg={4}>
                        <Autocomplete
                          name={`addresses.${index}.district`}
                          options={["Nepal"]}
                          onChange={formik.handleChange}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              name="district"
                              label="District (जिल्ला)"
                              variant="outlined"
                              size="small"
                              required
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={3} lg={4}>
                        <Autocomplete
                          name={`addresses.${index}.municipality`}
                          options={["Nepal"]}
                          onChange={formik.handleChange}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              name="municipality"
                              label="Rural Municipality/Municipality/Sub Metropolitan City/Metropolitan City (गा.पा/न.पा/ उ.म .न.पा / म.न .पा) "
                              variant="outlined"
                              size="small"
                              required
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={3} lg={4}>
                        <TextField
                          name={`addresses.${index}.wardNo`}
                          label="Ward No. (वडा नं.)"
                          variant="outlined"
                          value={address.wardNo}
                          onChange={formik.handleChange}
                          size="small"
                          required
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={3} lg={4}>
                        <TextField
                          name={`addresses.${index}.tole`}
                          label="Tole (टोल)"
                          variant="outlined"
                          value={address.tole}
                          onChange={formik.handleChange}
                          size="small"
                          required
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={3} lg={4}>
                        <TextField
                          name={`addresses.${index}.houseNo`}
                          label="House Number (घर नम्बर)"
                          variant="outlined"
                          value={address.houseNo}
                          onChange={formik.handleChange}
                          size="small"
                          fullWidth
                        />
                      </Grid>{" "}
                      <Grid item xs={12} sm={6} md={3} lg={4}>
                        <TextField
                          name={`addresses.${index}.mobileNo`}
                          label="Mobile Number (मोबाइल नम्बर) "
                          variant="outlined"
                          value={address.mobileNo}
                          size="small"
                          onChange={formik.handleChange}
                          fullWidth
                        />
                      </Grid>{" "}
                      <Grid item xs={12} sm={6} md={3} lg={4}>
                        <TextField
                          name={`addresses.${index}.telephoneNo`}
                          label="Telephone number (टेलिफोन नम्बर)"
                          variant="outlined"
                          value={address.telephoneNo}
                          size="small"
                          onChange={formik.handleChange}
                          fullWidth
                        />
                      </Grid>{" "}
                      <Grid item xs={12} sm={6} md={3} lg={4}>
                        <TextField
                          name={`addresses.${index}.email`}
                          label="Email Address (इ-मेल ठेगाना) "
                          variant="outlined"
                          value={address.email}
                          size="small"
                          onChange={formik.handleChange}
                          required
                          fullWidth
                        />
                      </Grid>{" "}
                      <Grid item xs={12} sm={6} md={3} lg={4}>
                        <TextField
                          name={`addresses.${index}.website`}
                          label="Website (वेबसाइट)"
                          variant="outlined"
                          size="small"
                          value={address.website}
                          onChange={formik.handleChange}
                          fullWidth
                        />
                      </Grid>{" "}
                      <Grid item xs={12} sm={6} md={3} lg={4}>
                        <TextField
                          name={`addresses.${index}.latitude`}
                          label="Latitude"
                          variant="outlined"
                          value={address.latitude}
                          onChange={formik.handleChange}
                          size="small"
                          required
                          fullWidth
                        />
                      </Grid>{" "}
                      <Grid item xs={12} sm={6} md={3} lg={4}>
                        <TextField
                          name={`addresses.${index}.longitude`}
                          label="Longitude"
                          variant="outlined"
                          value={address.longitude}
                          onChange={formik.handleChange}
                          size="small"
                          required
                          fullWidth
                        />
                      </Grid>
                      <Grid items xs={12}>
                        <div key={index}>
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
                              <MarkerLocation
                                latLong={latLong}
                                setLatLong={setLatLong}
                                setValue={formik?.setFieldValue}
                                setValueField={["longitude", "latitude"]}
                                index={index}
                                fieldArrayName={"addresses"}
                                name={`addresses.${index}.map`}
                              />
                            </MapContainer>
                          </div>
                        </div>
                      </Grid>
                      {index === 0 && (
                        <Grid item xs={12}>
                          <FormControl>
                            <FormControlLabel
                              control={
                                <Switch
                                  checked={
                                    address.have_different_permanent_address
                                  }
                                  onChange={(e, value) => {
                                    if (value) {
                                      push({
                                        country: "",
                                        province: "",
                                        district: "",
                                        municipality: "",
                                        wardNo: "",
                                        tole: "",
                                        streetNo: "",
                                        mobileNo: "",
                                        telephoneNo: "",
                                        email: "",
                                        website: "",
                                        longitude: "",
                                        latitude: "",
                                        houseNo: "",
                                      });
                                    } else {
                                      remove();
                                    }
                                    formik.handleChange(e);
                                  }}
                                  name={`addresses.${index}.have_different_permanent_address`}
                                />
                              }
                              label="Do you have different Temporary Address? (के तपाइँको फरक अस्थायी ठेगाना छ?)"
                            />
                          </FormControl>
                        </Grid>
                      )}
                    </Grid>
                  ))}
              </div>
            )}
          </FieldArray>
        </form>
      </FormikProvider>
    </Box>
  );
};

export default AddressIndividualDp;
