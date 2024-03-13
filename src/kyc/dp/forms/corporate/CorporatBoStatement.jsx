import React from "react";
import BoIndividualDetails from '../individual/BoIndividual/BoIndividualDetails';

const CorporateBoStatement = () => {
  return (
    <BoIndividualDetails />
  );
};

export default CorporateBoStatement;


// import React, { useEffect, useState } from "react";
// import { useGetBoCorporate } from "../../../../hooks/Kyc/corporate/BodCorporate/useBodCorporate";
// import { nanoid } from "@reduxjs/toolkit";
// import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
// import RenderInput from "../../../../components/renderInput/RenderInput";
// import {  useKycBocorporateForm } from "../individual/BoIndividual/useKycBoIndividualForm";

// const bodFields = [
//   {
//     name: "isStandingInstructionForAutomaticTxn",
//     label: "Do you want Standing Instruction For The Automatic Transaction?",
//     type: "switch",
   
//     col: 12,
//     id: nanoid(),
//   required: true,
//     display: "flex",
//     direction: "column",
//     justify: "start",
//     hasRadio: true,
//     radioName: "accountStatementPeriod",
//     radioLabel: "Account Statement Period",
//     radioDisplay: "flex",
//     radioDirection: "row",
//     radioAlign: "center",
//     radioGap: "16px",
//     radio: [
//       {
//         value: "DAILY",
//         label: "Daily",
//         id: nanoid(),
//       },
//       {
//         value: "WEEKLY",
//         label: "Weekly",
//         id: nanoid(),
//       },
//       {
//         value: "15DAYS",
//         label: "15 Days",
//         id: nanoid(),
//       },
//       {
//         value: "MONTHLY",
//         label: "Monthly",
//         id: nanoid(),
//       },
//     ],
//   },
// ];

// const CorporateBoStatement = () => {
//   const [fields, setFields] = useState(bodFields);
//   const theme = useTheme();
//   const { data: boData } = useGetBoCorporate();
//   console.log("boData", boData);
//   const data = boData && boData?.data
//   const { formik } = useKycBocorporateForm(data);

//   useEffect(() => {
//     setFields(bodFields)
//   }, []);

//   return (
//     <div data-aos="zoom-in-right">
//       <Box
//         sx={{
//           marginBottom: "16px",
//           padding: { md: "12px", sm: "5px" },
//           borderRadius: "0 6px 6px 0",
//           borderLeft: `4px solid ${theme.palette.secondary.main}`,
//         }}
//       >
//         <Typography
//           variant="h4"
//           style={{
//             color: theme.palette.text.light,
//             fontWeight: "800",
//           }}
//         >
//           BO Details
//         </Typography>
//       </Box>

//       <Box
//         color={theme.palette.text.main}
//         bgcolor={theme.palette.background.alt}
//         sx={{
//           borderRadius: "0 6px 6px 0",
//           padding: "16px",
//           boxShadow:
//             "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
//         }}
//       >
//         <RenderInput inputField={fields} formik={formik} />
//         <Grid sx={{ display: "flex", justifyContent: "flex-end" }}>
//           <Button
//             onClick={formik.handleSubmit}
//             variant="contained"
//             color="secondary"
//           >
//             Next
//           </Button>
//         </Grid>
//       </Box>
//     </div>
//   );
// };

// export default CorporateBoStatement;
