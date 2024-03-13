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
]

export const CitizenshipField = [
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
    name: "issuedDatebs",
    label: "Citizenship Issued Date (B.S)",
    engMd: 4,
    engSm: 12,
    nepMd: 6,
    nepSm: 12,
    md: 12,
    sm: 12,
    engLabel: "Citizenship Issued Date (A.D.)",
    nepaliLabel: "Citizenship Issued Date (B.S.)",
    required: true,
    type: "dualDate",
  },
  {
    md: 6,
    sm: 6,
    lg: 6,
    xs: 12,
    required: true,
    type: "documentUpload",
    title: "Front Side",
    name: "citizenshipFront",
  },
  {
    md: 6,
    sm: 6,
    lg: 6,
    xs: 12,
    required: true,
    type: "documentUpload",
    title: "Back Side",
    name: "citizenshipBack",
  },
]

export const PassportField = [
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
]

export const PanCardField = [
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
    name: "panDocument",
    type: "documentUpload",
    title: "Pan Card Photo",
  },
]

export const BirthCertificateField = [
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
]
