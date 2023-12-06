import React from "react";
import { Autocomplete, Box, Button, Divider, Grid } from "@mui/material";
import { TextField, Typography, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useFeedbackForm } from "../../hooks/feedback/FeedbackForm/useFeedbackForm";

const FeedbackModal = ({ onClose }) => {
  const theme = useTheme();
  const top100Films = [{ label: "Bug" }, { label: "Feedback" }];
  const { formik } = useFeedbackForm({ onClose });
  const handleFormSubmit = () => {
    formik.handleSubmit();
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h4"
          style={{
            color: theme.palette.text.light,
            paddingBottom: ".5rem",
          }}
        >
          Problem Type
        </Typography>
        <CloseIcon onClick={onClose} sx={{ cursor: "pointer" }} />
      </div>
      <br />
      <Divider />
      <br />
      <Box component="form">
        <Autocomplete
          id="problemType"
          name="problemType"
          options={top100Films.map((film) => film.label)}
          required
          onChange={(event, newValue) =>
            formik.setFieldValue("problemType", newValue)
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label="Problem Type"
              value={formik.values.problemType}
              onChange={formik.handleChange}
              error={
                formik.touched.problemType && Boolean(formik.errors.problemType)
              }
              helperText={
                formik.touched.problemType && formik.errors.problemType
              }
            />
          )}
        />
      </Box>
      <Grid sx={{ paddingTop: "1.5rem" }}>
        <TextField
          id="description"
          name="description"
          label="Message"
          multiline
          rows={5}
          variant="filled"
          sx={{ width: "100%" }}
          required
          value={formik.values.description}
          onChange={formik.handleChange}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
        />
      </Grid>
      <br />
      <Divider />
      <br />
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <Button
          variant="contained"
          type="submit"
          onClick={handleFormSubmit}
          sx={{ ml: 1, textTransform: "none" }}
          color="success"
        >
          Submit
        </Button>
        <Button
          variant="contained"
          onClick={onClose}
          sx={{ ml: 1, textTransform: "none" }}
          color="error"
        >
          Cancel
        </Button>
      </Grid>
    </div>
  );
};

export default FeedbackModal;
