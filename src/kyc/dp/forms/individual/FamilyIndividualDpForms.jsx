// import React, { useState } from "react";
// import { Grid, Button, useTheme, Typography } from "@mui/material";
// import { Formik } from "formik";
// import RenderInput from "../../../../components/renderInput/RenderInput";
// import { useKycFamilyForm } from "../../../../hooks/kyc/individual/family/usekycFamilyForm";

// const FamilyIndividualDpForms = () => {
//   const theme = useTheme();
//   const { formik } = useKycFamilyForm();
//   const familyFields = [
//     {
//       type: "dropDown",
//       name: "name",
//       label: "Relation",
//       required: true,
//       options: [
//         {
//           id: 1,
//           label: "Father In Law",
//           value: "",
//         },
//         {
//           id: 1,
//           label: "Mother In Law",
//           value: "",
//         },
//         {
//           id: 1,
//           label: "Son In Law",
//           value: "",
//         },
//         {
//           id: 1,
//           label: "Spouse",
//           value: "",
//         },
//       ],
//       col: 12,
//       xs: 12,
//       sm: 6,
//     },
//     {
//       type: "text",
//       name: "memberName",
//       label: "Name",
//       required: true,
//       col: 12,
//       xs: 12,
//       sm: 6,
//     },
//   ];
//   const [fields, setFields] = useState([
//     {
//       type: "text",
//       name: "relation",
//       label: "Referal Person",
//       required: true,
//       disabled: true,
//       col: 12,
//       xs: 12,
//       sm: 6,
//     },
//     {
//       type: "text",
//       name: "memberName",
//       label: "Referral Name",
//       required: true,
//       col: 12,
//       xs: 12,
//       sm: 6,
//     },
//     {
//       type: "text",
//       name: "email",
//       label: "Referral Email",
//       required: true,
//       col: 12,
//       xs: 12,
//       sm: 6,
//     },
//     {
//       type: "text",
//       name: "mobileNumber",
//       label: "Referral Mobile Number",
//       required: true,
//       col: 12,
//       xs: 12,
//       sm: 6,
//     },
//     {
//       type: "text",
//       name: "father",
//       label: "Father",
//       required: true,
//       disabled: true,
//       col: 12,
//       xs: 12,
//       sm: 6,
//     },
//     {
//       type: "text",
//       name: "name",
//       label: "Father's Name",
//       required: true,
//       col: 12,
//       xs: 12,
//       sm: 6,
//     },
//     {
//       type: "text",
//       name: "mother",
//       label: "Mother",
//       required: true,
//       disabled: true,
//       col: 12,
//       xs: 12,
//       sm: 6,
//     },
//     {
//       type: "text",
//       name: "father",
//       label: "Mother's name",
//       required: true,
//       col: 12,
//       xs: 12,
//       sm: 6,
//     },
//     {
//       type: "text",
//       name: "gFather",
//       label: "Grand Father",
//       required: true,
//       disabled: true,
//       col: 12,
//       xs: 12,
//       sm: 6,
//     },
//     {
//       type: "text",
//       name: "gFather",
//       label: "Grand Father's Name",
//       required: true,
//       col: 12,
//       xs: 12,
//       sm: 6,
//     },
//   ]);

//   const handleSubmit = () => {};

//   const handleAddMore = () => {
//     setFields([...fields, ...familyFields]);
//   };
//   const handleRemove = () => {
//     console.log("remove");
//   };

//   return (
//     <Grid container>
//       <Grid
//         item
//         sm={12}
//         md={12}
//         sx={{
//           marginBottom: "16px",
//           padding: { md: "12px", sm: "5px" },
//           borderLeft: `4px solid ${theme.palette.background.btn}`,
//         }}
//       >
//         <Typography
//           variant="h4"
//           style={{
//             color: theme.palette.text.light,
//             fontWeight: "800",
//           }}
//         >
//           Family Members
//         </Typography>
//       </Grid>
//       <form onSubmit={handleSubmit}>
//         <RenderInput inputField={fields} formik={formik} />
//         <Button onClick={handleAddMore} variant="contained" color="primary">
//           Add More
//         </Button>
//         <Button onClick={handleRemove} variant="contained" color="primary">
//           Remove
//         </Button>
//         <button type="submit">Submit</button>
//       </form>
//     </Grid>
//   );
// };

// export default FamilyIndividualDpForms;




import React, { useState } from "react";
import { Grid, Button, Typography, useTheme } from "@mui/material";
import { Formik } from "formik";
import RenderInput from "../../../../components/renderInput/RenderInput";
import { useKycFamilyForm } from "../../../../hooks/kyc/individual/family/usekycFamilyForm";

const FamilyIndividualDpForms = () => {
  const theme = useTheme();
  const { formik } = useKycFamilyForm();

  const initialFields = [
        {
      type: "text",
      name: "referralPerson",
      label: "Referral Person",
      disabled: true,
      col: 12,
      xs: 12,
      sm: 6,
    },
    {
      type: "text",
      name: "referralName",
      label: "Referral Name",
      col: 12,
      xs: 12,
      sm: 6,
    },
    {
      type: "text",
      name: "email",
      label: "Referral Email",
      col: 12,
      xs: 12,
      sm: 6,
    },
    {
      type: "text",
      name: "mobileNumber",
      label: "Referral Mobile Number",
      col: 12,
      xs: 12,
      sm: 6,
    },
    {
      type: "text",
      name: "father",
      label: "Father",
      required: true,
      disabled: true,
      col: 12,
      xs: 12,
      sm: 6,
    },
    {
      type: "text",
      name: "fName",
      label: "Father's Name",
      required: true,
      col: 12,
      xs: 12,
      sm: 6,
    },
    {
      type: "text",
      name: "mother",
      label: "Mother",
      required: true,
      disabled: true,
      col: 12,
      xs: 12,
      sm: 6,
    },
    {
      type: "text",
      name: "mName",
      label: "Mother's name",
      required: true,
      col: 12,
      xs: 12,
      sm: 6,
    },
    {
      type: "text",
      name: "gFather",
      label: "Grand Father",
      required: true,
      disabled: true,
      col: 12,
      xs: 12,
      sm: 6,
    },
    {
      type: "text",
      name: "gFatherName",
      label: "Grand Father's Name",
      required: true,
      col: 12,
      xs: 12,
      sm: 6,
    },
  ];

  const [fields, setFields] = useState(initialFields);

  const familyFields = [
    {
      type: "dropDown",
      name: "name",
      label: "Relation",
      required: true,
      options: [
        { id: 1, label: "Father In Law", value: "fatherInLaw" },
        { id: 2, label: "Mother In Law", value: "motherInLaw" },
        { id: 3, label: "Son In Law", value: "sonInLaw" },
        { id: 4, label: "Spouse", value: "spouse" },
      ],
      col: 12,
      xs: 12,
      sm: 6,
    },
    {
      type: "text",
      name: "memberName",
      label: "Name",
      required: true,
      col: 12,
      xs: 12,
      sm: 6,
    },
  ];

  const handleAddMore = () => {
    setFields(prevFields => [...prevFields, ...familyFields]);
  };

  const handleRemove = () => {
    setFields(prevFields => prevFields.slice(0, - familyFields.length));
  };

  return (
    <Grid container>
      <Grid
        item
        sm={12}
        md={12}
        sx={{
          marginBottom: "16px",
          padding: { md: "12px", sm: "5px" },
          borderLeft: `4px solid ${theme.palette.background.btn}`,
        }}
      >
        <Typography
          variant="h4"
          style={{
            color: theme.palette.text.light,
            fontWeight: "800",
          }}
        >
          Family Members
        </Typography>
      </Grid>
      <form onSubmit={formik.handleSubmit}>
        <RenderInput inputField={fields} formik={formik} />
        <Button onClick={handleAddMore} variant="contained" color="primary">
          Add More
        </Button>
        <Button onClick={handleRemove} variant="contained" color="primary">
          Remove
        </Button>
        <button type="submit">Submit</button>
      </form>
    </Grid>
  );
};

export default FamilyIndividualDpForms;
