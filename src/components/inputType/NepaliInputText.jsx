import React, { useState, useEffect } from "react";
import axios from "axios";
import { Autocomplete, Grid, TextField, CircularProgress } from "@mui/material";
import "./nepaliInputText.css";
import { debounce } from "lodash";

const NepaliInputText = ({ element, formik }) => {
  const [options, setOptions] = useState([]);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const debouncedOnSearch = debounce(fetchRemote, 150);
    return () => {
      debouncedOnSearch.cancel();
    };
  }, []);

  const fetchRemote = async (firstWords, lastWord) => {
    try {
      setBusy(true);
      const response = await axios.get(
        `https://corsproxy.io?https://inputtools.google.com/request?text=${lastWord}&itc=ne-t-i0-und&num=8&cp=0&cs=1&ie=utf-8&oe=utf-8`
      );
      convertIntoOptions(firstWords, response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setBusy(false);
    }
  };

  const convertIntoOptions = (firstWords, data) => {
    try {
      if (data && data[0] === "SUCCESS") {
        const optionsData = data[1][0][1].map((item) =>
          firstWords ? `${firstWords} ${item}` : item
        );
        setOptions(optionsData);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleKeyUpDebounced = (e) => {
    const { value, onChange } = e.target;
    if (value.length >= 2 && e.keyCode !== 40 && e.keyCode !== 38) {
      if (e.keyCode === 32) {
        if (options.length >= 1) onChange(options[0] + " ");
        else onChange(value);
        return;
      }
      const searchKey = value.trim();
      const searchArray = searchKey.split(" ");
      const lastWord = searchArray.pop();
      const firstWords = searchArray.join(" ");
      fetchRemote(firstWords, lastWord);
    }
  };

  return (
    <Grid container>
      <Grid item xs={12} md={12} lg={12}>
        <Autocomplete
          // key={options} // Set key prop
          options={options}
          value={formik.values[element.name]}
          onKeyUp={handleKeyUpDebounced}
          open={options.length > 0} // Open dropdown when options are available
          filterOptions={(x) => x}
          onChange={formik.handleChange}
          loading={busy}
          renderInput={(params) => (
            <TextField
              {...params}
              {...element}
              placeholder={element?.label}
              onBlur={formik.handleBlur}
              variant="outlined"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {busy ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          )}
        />
      </Grid>
    </Grid>
  );
};

export default NepaliInputText;
