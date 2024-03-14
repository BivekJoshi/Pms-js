import { Box, Button, Grid, Typography, useTheme } from '@mui/material';
import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import RenderInput from '../../../../../components/renderInput/RenderInput';
import { useBranchCorporateForm } from './useBranchCorporateForm';
import { useGetBranchDetail } from '../../../../../hooks/Kyc/branch/useBranchDetail';

const BranchCorporateForm = () => {
  const theme = useTheme();
  const{data: branchDetail} = useGetBranchDetail()
  const data = branchDetail;
  const { formik } = useBranchCorporateForm(data);
console.log(formik);
  const BRANCHFIELDs=[
    {
        name:"otherBranch",
        label:"Do you have other branch?",
        type:"switchWithFields",
        display: "flex",
        direction: "column",
        align: "start",    
        id:nanoid(),
        sm:12,
        newFields:[
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
                label: "Telephone No",
                type: "text",
                required: true,
                id: nanoid(),
                md: 4,
                sm: 12,
              },
              {
                name: "mobileNo",
                label: "Mobile No",
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

    }
  ];
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
          Branch Details
        </Typography>
      </Box>
      <RenderInput inputField={BRANCHFIELDs} formik={formik} data={data}/>
      <Grid sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          onClick={formik.handleSubmit}
          variant="contained"
          color="secondary"
        >
          Next
        </Button>
      </Grid>
    </div>
  );
}

export default BranchCorporateForm;
