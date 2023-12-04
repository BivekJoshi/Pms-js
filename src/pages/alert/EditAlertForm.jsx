import { Button, Dialog, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useAlertForm } from "./useAlertForm";

const EditAlertForm = ({ onClose, rowData }) => {
//   console.log(rowData, "rowData ma chao at edit");

  const { formik } = useAlertForm(rowData);
  const handleFormSubmit = () => {
    formik.handleSubmit();
  };

  return (
    <Grid container spacing={3} columnSpacing={{ xs: 1, sm: 3, md: 4 }}>
      <div>
        <Typography >Edit</Typography>
      </div>
      <Grid item xs={12} sm={12}>
        <TextField
          id="companyInfoId"
          name="companyInfoId"
          label="Company Name"
          placeholder="Enter company name"
          fullWidth
          required
          value={formik.values.companyInfoId}
          onChange={formik.handleChange}
          error={
            formik.touched.companyInfoId && Boolean(formik.errors.companyInfoId)
          }
          helperText={
            formik.touched.companyInfoId && formik.errors.companyInfoId
          }
          variant="outlined"
          autoFocus
          InputLabelProps={{ shrink: true }}
          size="small"
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <TextField
          id="alertType"
          name="alertType"
          label="Alert Type"
          placeholder="Enter company name"
          fullWidth
          required
          value={formik.values.alertType}
          onChange={formik.handleChange}
          error={formik.touched.alertType && Boolean(formik.errors.alertType)}
          helperText={formik.touched.alertType && formik.errors.alertType}
          variant="outlined"
          autoFocus
          InputLabelProps={{ shrink: true }}
          size="small"
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <TextField
          id="transactionType"
          name="transactionType"
          label="transaction Type"
          placeholder="Enter company name"
          fullWidth
          required
          value={formik.values.transactionType}
          onChange={formik.handleChange}
          error={
            formik.touched.transactionType &&
            Boolean(formik.errors.transactionType)
          }
          helperText={
            formik.touched.transactionType && formik.errors.transactionType
          }
          variant="outlined"
          autoFocus
          InputLabelProps={{ shrink: true }}
          size="small"
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <TextField
          id="triggerPrice"
          name="triggerPrice"
          label="Trigger Price"
          placeholder="Enter company name"
          fullWidth
          required
          value={formik.values.triggerPrice}
          onChange={formik.handleChange}
          error={
            formik.touched.triggerPrice && Boolean(formik.errors.triggerPrice)
          }
          helperText={formik.touched.triggerPrice && formik.errors.triggerPrice}
          variant="outlined"
          autoFocus
          InputLabelProps={{ shrink: true }}
          size="small"
        />
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <Button
          variant="contained"
          onClick={handleFormSubmit}
          sx={{ mt: 3, ml: 1 }}
        >
          Save
        </Button>
        <Button
          variant="contained"
          onClick={onClose}
          sx={{ mt: 3, ml: 1 }}
          color="error"
        >
          Cancel
        </Button>
      </Grid>
    </Grid>
  );
};

export default EditAlertForm;
