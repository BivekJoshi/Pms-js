import {
  Button,
  Dialog,
  Divider,
  Grid,
  MenuItem,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { useAlertForm } from "./useAlertForm";
import CloseIcon from "@mui/icons-material/Close";
import { useGetCompanyByIdNo } from "../../hooks/company/useCompany";

const ALERT_TYPE = [
  {
    value: "HIGHER_THAN",
    label: "Price Above",
  },
  {
    value: "LOWER_THAN",
    label: "Price Below",
  },
];
const TRANSACTION_TYPE = [
  {
    value: "P",
    label: "Purchase",
  },
  {
    value: "S",
    label: "Sell",
  },
];

const EditAlertForm = ({ onClose, rowData,handleReFetchData }) => {
  const theme = useTheme();
  const mode = theme.palette.mode;

  const { formik } = useAlertForm(rowData);
  const handleFormSubmit = () => {
    handleReFetchData();
    formik.handleSubmit();
    onClose();
  };

  const { data: companyinfo } = useGetCompanyByIdNo(formik.values.companyInfoId);

  return (
    <Grid container spacing={3} columnSpacing={{ xs: 1, sm: 3, md: 4 }}>
      <Grid item={12} sm={12}>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5">
            <b>Edit</b>
          </Typography>
          <CloseIcon
            onClick={onClose}
            sx={{
              fontSize: "24px",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.2)",
                transition: "transform 0.5s ease-in-out",
                backgroundColor: "#F85862",
                borderRadius: "50%",
              },
            }}
          />
        </div>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Divider />
      </Grid>
      <Grid item xs={12} sm={12}>
        <TextField
          id="companyInfoId"
          name="companyInfoId"
          label="Company Name"
          placeholder="Enter company name"
          fullWidth
          required
          value={companyinfo?.symbol}
          onChange={formik.handleChange}
          error={
            formik.touched.companyInfoId && Boolean(formik.errors.companyInfoId)
          }
          helperText={
            formik.touched.companyInfoId && formik.errors.companyInfoId
          }
          variant="outlined"
          // autoFocus
          InputLabelProps={{ shrink: true }}
          size="small"
          disabled                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <TextField
          id="alertType"
          name="alertType"
          select
          label="Alert Type"
          placeholder="Select alert type"
          fullWidth
          required
          value={formik.values.alertType}
          onChange={formik.handleChange}
          error={formik.touched.alertType && Boolean(formik.errors.alertType)}
          helperText={formik.touched.alertType && formik.errors.alertType}
          variant="outlined"
          // autoFocus
          InputLabelProps={{ shrink: true }}
          size="small"
        >
          {ALERT_TYPE.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              sx={{ bgcolor: mode === "light" ? "" : "#413e3e" }}
            >
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={12}>
        <TextField
          id="transactionType"
          name="transactionType"
          select
          label="Transaction Type"
          placeholder="Select transaction type"
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
          // autoFocus
          InputLabelProps={{ shrink: true }}
          size="small"
        >
          {TRANSACTION_TYPE.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              sx={{ bgcolor: mode === "light" ? "" : "#413e3e" }}
            >
              {option.label}
            </MenuItem>
          ))}
        </TextField>
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
          // autoFocus
          InputLabelProps={{ shrink: true }}
          size="small"
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <Divider />
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-end"
        display="flex"
        gap="16px"
        marginTop="6px"
      >
        <Button
          variant="contained"
          onClick={handleFormSubmit}
          style={{
            background: "#6C49B4",
            color: mode === "light" ? "white" : theme.palette.text.main,
            textTransform: "none",
          }}
        >
          Save
        </Button>
        <Button
          onClick={onClose}
          style={{
            color: mode === "light" ? theme.palette.text.main : "white",
            border: mode === "light" ? "1px solid black" : "1px solid White",
            textTransform: "none",
          }}
        >
          Cancel
        </Button>
      </Grid>
    </Grid>
  );
};

export default EditAlertForm;
