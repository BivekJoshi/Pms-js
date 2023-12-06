import React from "react";
import {
  Autocomplete,
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const FeedbackModal = ({ onClose }) => {
  const theme = useTheme();
  const top100Films = [{ label: "Bug" }, { label: "Feedback" }];
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
      </div>{" "}
      <br />
      <Divider />
      <br />
      <Box component="form">
        <Autocomplete
          disableCloseOnSelect
          id="checkboxes-tags-demo"
          options={top100Films}
          renderInput={(params) => (
            <TextField {...params} label="Problem Type" />
          )}
        />
      </Box>
      <Grid sx={{ paddingTop: "1.5rem" }}>
        <TextField
          id="filled-multiline-static"
          label="Message"
          multiline
          rows={5}
          variant="filled"
          sx={{ width: "100%" }}
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
          // onClick={handleFormSubmit}
          sx={{ ml: 1, textTransform: "none" }}
          color="success"
        >
          Submit
        </Button>
      </Grid>
    </div>
  );
};

export default FeedbackModal;
