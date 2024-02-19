import {
    FormControlLabel,
    Grid,
    styled,
    Switch,
    TextField,
  } from "@mui/material";
  import React, { useState } from "react";
  import RenderInput from "../renderInput/RenderInput";
  
  const ToggleSwitchForm = ({ element, formik }) => {
    const [openModal, setOpenModal] = useState(false);
  
    const Android12Switch = styled(Switch)(({ theme }) => ({
      padding: 8,
      "& .MuiSwitch-track": {
        borderRadius: 22 / 2,
        "&::before, &::after": {
          content: '""',
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          width: 16,
          height: 16,
        },
        "&::before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
            theme.palette.getContrastText(theme.palette.primary.main)
          )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
          left: 12,
        },
        "&::after": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
            theme.palette.getContrastText(theme.palette.primary.main)
          )}" d="M19,13H5V11H19V13Z" /></svg>')`,
          right: 12,
        },
      },
      "& .MuiSwitch-thumb": {
        boxShadow: "none",
        width: 16,
        height: 16,
        margin: 2,
      },
    }));
  
    const handleChange = (e) => {
      setOpenModal(e.target.checked);
      // formik.setFieldValue('fieldType', e.target.checked ? 'isMinor' : '');
    };
   
    return (
      <Grid container spacing={2} alignItems={"center"}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <FormControlLabel
            name={element?.name}
            label={element?.label}
            value={formik.values[element.name]}
            control={
              <Android12Switch
                defaultChecked={openModal}
                onChange={handleChange}
              />
            }
          />
        </Grid>
      </Grid>
    );
  };
  
  export default ToggleSwitchForm;
  