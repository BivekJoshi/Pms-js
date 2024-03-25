import { Box, Button, Grid, Typography, useTheme } from '@mui/material';
import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import RenderInput from '../../../../../components/renderInput/RenderInput';
import { useBranchCorporateForm } from './useBranchCorporateForm';
import { useGetBranchDetail } from '../../../../../hooks/Kyc/branch/useBranchDetail';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { nextFormPath } from '../../../../../utility/userHelper';
import { SET_FORM } from '../../../../../redux/types/types';
import { useTranslation } from 'react-i18next';

const BranchCorporateForm = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { data: branchDetail } = useGetBranchDetail()
  const data = branchDetail;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { formik, loading } = useBranchCorporateForm(data);

  const BRANCHFIELDs = [
    {
      name: "otherBranch",
      label: "Do you have other branch?",
      type: "switchWithFields",
      display: "flex",
      direction: "column",
      align: "start",
      id: nanoid(),
      sm: 12,
      newFields: [
        {
          name: "area",
          label: "Area name",
          type: "text",
          required: true,
          id: nanoid(),
          md: 4,
          sm: 12,
        },
        {
          name: "mainBranch",
          label: "Main branch/office",
          type: "text",
          required: true,
          id: nanoid(),
          md: 4,
          sm: 12,
        },
        {
          name: "address",
          label: "Branch Address",
          type: "text",
          required: true,
          id: nanoid(),
          md: 4,
          sm: 12,
        },
        {
          name: "telephoneNo",
          label: "Telephone No.",
          type: "text",
          required: true,
          id: nanoid(),
          md: 4,
          sm: 12,
        },
        {
          name: "mobileNo",
          label: "Mobile No.",
          type: "text",
          required: true,
          id: nanoid(),
          md: 4,
          sm: 12,
        },
        {
          name: "contactPerson",
          label: "Contact Person",
          type: "text",
          required: true,
          id: nanoid(),
          md: 4,
          sm: 12,
        },
      ],
    },
  ];

  const handleBack = () => {
    navigate(nextFormPath(3));
    dispatch({ type: SET_FORM, payload: 3 });
  }
  return (
    <div data-aos="zoom-in-right">
      <Box
        sx={{
          marginBottom: "16px",
          padding: { md: "12px", sm: "5px" },
          borderLeft: `4px solid ${theme.palette.secondary.main}`,
        }}
      >
        <Typography
          variant="h4"
          style={{
            color: theme.palette.text.light,
            fontWeight: "800",
          }}
        >
          {t("Branch Details")}
        </Typography>
      </Box>
      <RenderInput inputField={BRANCHFIELDs} formik={formik} data={data} loading={loading} />
      <Grid sx={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}>
        <Button
          onClick={handleBack}
          variant="outlined"
          color="secondary"
        >
          {t("Back")}
        </Button>
        <Button
          onClick={formik.handleSubmit}
          variant="contained"
          color="secondary"
        >
          {t("Next")}
        </Button>
      </Grid>
    </div>
  );
};

export default BranchCorporateForm;
