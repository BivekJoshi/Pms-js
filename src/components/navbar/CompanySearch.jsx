import { Autocomplete, Dialog, Grid, Slide, TextField } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="bottom" ref={ref} {...props} />;
});
const CompanySearch = ({ setScriptValue, symbols, scriptValue }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);

  const handleAutocompleteClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Grid
        sx={{
          width: "100%",
          maxWidth: "300px",
          display: { md: "block", xs: "none" },
          margin: { md: "0 32px", sm: "0px" },
        }}
      >
        {!open && (
          <TextField
            fullWidth
            placeholder="Company name or symbol"
            variant="outlined"
            size="small"
            InputLabelProps={{ shrink: true }}
            style={{
              minWidth: "150px",
            }}
            onClick={handleAutocompleteClick}
          />
        )}
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        TransitionComponent={Transition}
        position={{ top: 0 }}
        PaperProps={{
          sx: {
            position: "absolute",
            top: "-25px", // Adjust top position
            maxWidth: "75vw",
          },
        }}
      >
        <Autocomplete
          name="script"
          fullWidth
          options={symbols}
          getOptionLabel={(option) => option?.companyInfo}
          value={scriptValue ? scriptValue : null}
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              placeholder={t("Company name or symbol")}
              variant="outlined"
              // autoFocus
              InputLabelProps={{ shrink: true }}
              style={{
                minWidth: "150px",
                // backgroundColor: theme.palette.background.default,
              }}
            />
          )}
          onChange={(event, value) => {
            if (value) {
              setScriptValue(value);
              navigate(`/company/${value?.symbol}`);
            }
          }}
        />
      </Dialog>
    </>
  );
};

export default CompanySearch;
