import React, { useState, useEffect } from "react"
import axios from "axios"
import { Autocomplete, Grid, TextField, CircularProgress } from "@mui/material"
import "./nepaliInputText.css"
import { debounce } from "lodash"
import { useTranslation } from "react-i18next"
import { getIn } from "formik"

const NepaliInputText = ({
  element,
  formik,
  formTouched,
  formError,
  isFieldArray,
}) => {
  const [options, setOptions] = useState([])
  const [busy, setBusy] = useState(false)
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const debouncedOnSearch = debounce(fetchRemote, 150)
    return () => {
      debouncedOnSearch.cancel()
    }
  }, [])

  const fetchRemote = async (firstWords, lastWord) => {
    try {
      setBusy(true)
      const response = await axios.get(
        `https://corsproxy.io?https://inputtools.google.com/request?text=${lastWord}&itc=ne-t-i0-und&num=8&cp=0&cs=1&ie=utf-8&oe=utf-8`
      )
      convertIntoOptions(firstWords, response.data)
      setOpen(true)
    } catch (err) {
      console.error(err)
    } finally {
      setBusy(false)
    }
  }

  const convertIntoOptions = (firstWords, data) => {
    try {
      if (data && data[0] === "SUCCESS") {
        const optionsData = data[1][0][1].map((item) =>
          firstWords ? `${firstWords} ${item}` : item
        )
        setOptions(optionsData)
      }
    } catch (e) {
      console.error(e)
    }
  }

  const handleKeyUpDebounced = (e) => {
    const { value } = e.target
    if (value.length >= 2 && e.keyCode !== 40 && e.keyCode !== 38) {
      const searchKey = value.trim()
      const searchArray = searchKey.split(" ")
      const lastWord = searchArray.pop()
      const firstWords = searchArray.join(" ")
      fetchRemote(firstWords, lastWord)
      setOpen(true) // Open the Autocomplete dropdown when fetching data
    } else if (value.trim() === "") {
      setOpen(false) // Close the Autocomplete dropdown if search value is empty
    }
  }

  const handleAutocompleteChange = (event, value) => {
    formik.setFieldValue(element.name, value)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const formValues = isFieldArray
    ? getIn(formik.values, element.name)
    : formik.values[element.name]

  return (
    <Grid container>
      <Grid item xs={12} md={12} lg={12}>
        <Autocomplete
          // key={options} // Set key prop
          options={options}
          open={open}
          value={formValues}
          onKeyUp={handleKeyUpDebounced}
          filterOptions={(x) => x}
          onBlur={formik.handleBlur}
          onChange={handleAutocompleteChange}
          onClose={handleClose}
          loading={busy}
          renderInput={(params) => (
            <TextField
              {...params}
              {...element}
              placeholder={t(element?.label)}
              onBlur={formik.handleBlur}
              variant="outlined"
              error={formTouched && Boolean(formError)}
              helperText={formTouched && formError}
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
  )
}

export default NepaliInputText
