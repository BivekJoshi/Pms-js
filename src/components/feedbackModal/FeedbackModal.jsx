import React from "react";
import {
  Autocomplete,
  Box,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

const FeedbackModal = ({ onClose }) => {
  const theme = useTheme();
  const top100Films = [{ label: "Bug" }, { label: "Feedback" }];
  return (
    <div>
      <Typography
        variant="h6"
        style={{
          color: theme.palette.text.light,
          paddingBottom:".5rem"
        }}
      >
        Problem Type :
      </Typography>
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
      <TextField
          id="filled-multiline-static"
          label="Message"
          multiline
          rows={5}
          variant="filled"
          sx={{width:"100%",paddingTop:"1.5rem"}}
        />
    </div>
  );
};

export default FeedbackModal;
