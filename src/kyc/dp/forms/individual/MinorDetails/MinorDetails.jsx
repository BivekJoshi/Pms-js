import React from "react";
import RenderInput from "../../../../../components/renderInput/RenderInput";
import { nanoid } from "nanoid";
import { FAMILY_RELATION } from "../basicInputData";

const isMinor = [
  {
    name: "isMinor",
    label: "Are you Minor? (के तपाईं नाबालिग हुनुहुन्छ?)",
    type: "switch",
    required: true,

    col: 12,
    id: nanoid(),
    watchFor: "dob",
    dependentAction: {
      type: "DISABLED",
      condition: true,
    },
    isBoid: true,
    details: [
      {
        name: "birthCertificateNo",
        label: "Birth Certificate No. (जन्म प्रमाणपत्र नं.)",
        placeholder: "Enter birth certificate no.",
        required: "Please enter birth certificate number",
        type: "text",
        col: 12,
        isBoid: true,
        sm: 4,
        id: nanoid(),
      },
      {
        name: "birthCertificateDate",
        label:
          "Birth Certificate Issued Date (जन्म प्रमाणपत्र जारी गरिएको मिति) (B.S.)",
        type: "date-picker-citizen",
        placeholder: "Select Birth Certificate Issued Date",
        col: 12,
        sm: 8,
        dualDate: true,
        engLabel:
          "Birth Certificate Issued Date (जन्म प्रमाणपत्र जारी गरिएको मिति) (A.D.)",
        engPlaceholder: "Select Birth Certificate Issued Date (A.D.)",
        maxDate: true,
        required: true,
        isBoid: true,
        id: nanoid(),
      },
      {
        name: "guardianName",
        label: "Guardian Name (अभिभावकको नाम)",
        placeholder: "Enter guardian name",
        required: "Please enter guardian name",
        col: 12,
        sm: 4,
        type: "text",
        maxLength: 75,
        id: nanoid(),
      },

      {
        name: "relationship",
        label: "Relationship with applicant (आवेदक संग सम्बन्ध)",
        placeholder: "Enter relationship with applicant",
        required: "Please enter relationship with applicant",
        col: 12,
        sm: 4,
        options: FAMILY_RELATION,
        type: "select",
        id: nanoid(),
        maxLength: 75,
      },
      {
        name: "guardianAddress",
        label: "Address (ठेगाना)",
        placeholder: "Enter address",
        required: "Please enter address",
        col: 12,
        sm: 4,
        type: "text",
        maxLength: 75,
        id: nanoid(),
      },
      {
        name: "guardianProvince",
        label: "Province (प्रदेश)",
        type: "select",
        placeholder: "Select province",
        required: "Please select province",
        col: 12,
        sm: 4,
        id: nanoid(),

        options: [
          {
            value: "Koshi Pradesh",
            label: "Koshi Pradesh",
            id: 1,
          },
          {
            value: "Madhesh Pradesh",
            label: "Madhesh Pradesh",
            id: 2,
          },
          {
            value: "Bagmati Pradesh",
            label: "Bagmati Pradesh",
            id: 3,
          },
          {
            value: "Gandaki Pradesh",
            label: "Gandaki Pradesh",
            id: 4,
          },
          {
            value: "Lumbini Pradesh",
            label: "Lumbini Pradesh",
            id: 5,
          },
          {
            value: "Karnali Pradesh",
            label: "Karnali Pradesh",
            id: 6,
          },
          {
            value: "Mahakali Pradesh",
            label: "Mahakali Pradesh",
            id: 7,
          },
        ],
        onChangeClearValue: ["guardianDistrict", "guardianMunci"],
      },
      {
        name: "guardianDistrict",
        label: "District (जिल्ला)",
        placeholder: "Select district",
        required: "Please select district",
        col: 12,
        sm: 4,
        type: "select",
        mapId: "district",
        options: [],
        id: nanoid(),
        watchFor: "guardianProvince",
        dependentAction: {
          fetch: true,
          api: "/utility/district?province=#",
          method: "GET",
          staticField: "PROVINCE",
        },
        onChangeClearValue: ["municipality"],
      },
      {
        name: "guardianMunci",
        label:
          "Rural Municipality/Municipality/Sub Metropolitan City/Metropolitan City (गा.पा/न.पा/ उ.म .न.पा / म.न .पा ) ",
        placeholder:
          "Select rural municipality/municipality/sub metropolitan city/metropolitan city",
        required:
          "Please select rural municipality/municipality/sub metropolitan city/metropolitan city",
        col: 12,
        sm: 4,
        type: "select",
        mapId: "municipality",
        options: [],
        id: nanoid(),
        watchFor: "guardianDistrict",
        dependentAction: {
          fetch: true,
          api: "/utility/municipal?district=#",
          method: "GET",
        },
      },
      {
        name: "guardianWard",
        label: "Ward No. (वडा नं.)",
        placeholder: "Enter ward no.",
        required: "Please enter ward no.",
        col: 12,
        sm: 4,
        type: "text",
        maxLength: 2,
        id: nanoid(),
      },
      {
        name: "guardianFax",
        label: "Fax No. (फ्याक्स नं.)",
        placeholder: "Enter fax no.",
        col: 12,
        sm: 4,
        type: "text",
        id: nanoid(),
        maxLength: 30,
      },
      {
        name: "guardianEmail",
        label: "Email Address (इ-मेल ठेगाना)",
        placeholder: "Enter email address",
        required: "Please enter email address",
        col: 12,
        sm: 4,
        type: "email",
        id: nanoid(),
        maxLength: 254,
      },
      {
        name: "guardianMob",
        label: "Mobile Number (मोबाइल नम्बर)",
        placeholder: "Enter mobile number",
        required: "Please enter mobile number",
        col: 12,
        sm: 4,
        type: "mobileNo",
        maxLength: 21,
        minLength: 10,
        id: nanoid(),
      },
    ],
  },
];
const MinorDetails = () => {
  const { formik } = formik;
  return (
    <div>
      <RenderInput
        inputField={isMinor}
        formik={formik}
        index={index}
        isFieldArray={true}
        fieldArrayName="personDetail"
      />
    </div>
  );
};

export default MinorDetails;
