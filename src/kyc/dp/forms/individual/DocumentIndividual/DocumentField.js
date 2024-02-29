export const DocumentField = [
  {
    name: "docType",
    label: "Select Document Type",
    md: 3,
    sm: 6,
    lg: 4,
    xs: 12,
    required: true,
    type: "dropDown",
    options: [
      { id: 1, value: "citizenship", label: "Citizenship" },
      { id: 2, value: "panCard", label: "Pan Card" },
      { id: 3, value: "passport", label: "Passport" },
      { id: 4, value: "birthCertificate", label: "Birth Certificate" },
    ],
  },
];

export const CitizenshipFiled = [
  {
    name: "docType",
    label: "Select Document Type",
    md: 4,
    sm: 6,
    lg: 4,
    xs: 12,
    required: true,
    type: "dropDown",
    options: [
      { id: 1, value: "citizenship", label: "Citizenship" },
      { id: 2, value: "panCard", label: "Pan Card" },
      { id: 3, value: "passport", label: "Passport" },
      { id: 4, value: "birthCertificate", label: "Birth Certificate" },
    ],
  },
  {
    name: "citizenshipNo",
    label: "Citizenship No.",
    md: 4,
    sm: 6,
    lg: 4,
    xs: 12,
    required: true,
    type: "text",
  },
  {
    name: "issuedDatebs",
    label: "Citizenship Issued Date (B.S)",
    md: 4,
    sm: 6,
    lg: 4,
    xs: 12,
    required: true,
    type: "text",
  },
  {
    name: "issuedDatead",
    label: "Citizenship Issued Date (A.D)",
    md: 4,
    sm: 6,
    lg: 4,
    xs: 12,
    required: true,
    type: "text",
  },
  {
    name: "issuedDistrict",
    label: "Citizenship Issued District",
    md: 4,
    sm: 12,
    lg: 4,
    xs: 12,
    required: true,
    type: "text",
  },
  {
    md: 6,
    sm: 6,
    lg: 6,
    xs: 12,
    required: true,
    type: "documentUpload",
    title: "Front Side",
  },
  {
    md: 6,
    sm: 6,
    lg: 6,
    xs: 12,
    required: true,
    type: "documentUpload",
    title: "Back Side",
  },
];

export const PassportFiled = [
  {
    name: "docType",
    label: "Select Document Type",
    md: 3,
    sm: 6,
    lg: 4,
    xs: 12,
    required: true,
    type: "dropDown",
    options: [
      { id: 1, value: "citizenship", label: "Citizenship" },
      { id: 2, value: "panCard", label: "Pan Card" },
      { id: 3, value: "passport", label: "Passport" },
      { id: 4, value: "birthCertificate", label: "Birth Certificate" },
    ],
  },
  {
    name: "issuedDistrict",
    label: "Passport Number",
    md: 4,
    sm: 12,
    lg: 4,
    xs: 12,
    required: true,
    type: "text",
  },
  {
    name: "issuedDistrict",
    label: "Passport Issued District",
    md: 4,
    sm: 12,
    lg: 4,
    xs: 12,
    required: true,
    type: "text",
  },
  {
    name: "issuedDistrict",
    label: "Passport Issued Date",
    md: 4,
    sm: 12,
    lg: 4,
    xs: 12,
    required: true,
    type: "text",
  },
  {
    name: "issuedDistrict",
    label: "Passport Expiry Date",
    md: 4,
    sm: 12,
    lg: 4,
    xs: 12,
    required: true,
    type: "text",
  },
  {
    md: 12,
    sm: 12,
    lg: 12,
    xs: 12,
    required: true,
    type: "documentUpload",
    title: "Passport Photo",
  },
];

export const PanCardFiled = [
    {
      name: "docType",
      label: "Select Document Type",
      md: 3,
      sm: 6,
      lg: 4,
      xs: 12,
      required: true,
      type: "dropDown",
      options: [
        { id: 1, value: "citizenship", label: "Citizenship" },
        { id: 2, value: "panCard", label: "Pan Card" },
        { id: 3, value: "passport", label: "Passport" },
        { id: 4, value: "birthCertificate", label: "Birth Certificate" },
      ],
    },
    {
      md: 12,
      sm: 12,
      lg: 12,
      xs: 12,
      required: true,
      type: "documentUpload",
      title: "Pan Card Photo",
    },
  ];

  export const BirthCertificateFiled = [
    {
      name: "docType",
      label: "Select Document Type",
      md: 3,
      sm: 6,
      lg: 4,
      xs: 12,
      required: true,
      type: "dropDown",
      options: [
        { id: 1, value: "citizenship", label: "Citizenship" },
        { id: 2, value: "panCard", label: "Pan Card" },
        { id: 3, value: "passport", label: "Passport" },
        { id: 4, value: "birthCertificate", label: "Birth Certificate" },
      ],
    },
    {
      md: 12,
      sm: 12,
      lg: 12,
      xs: 12,
      required: true,
      type: "documentUpload",
      title: "Birth certificate Photo",
    },
  ];