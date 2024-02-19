export const PROVINCE = [
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
    value: "Sudurpashchim Pradesh",
    label: "Sudurpashchim Pradesh",
    id: 7,
  },
];
export const AddressField = [
  {
    name: "country",
    label: "Country",
    md: 3,
    sm: 6,
    lg: 4,
    xs: 12,
    required: true,
    type: "dropDown",
    options: [{ id: 1, value: "Nepal", label: "Nepal" }],
  },
  {
    name: "province",
    label: "Province",
    md: 3,
    sm: 6,
    lg: 4,
    xs: 12,
    required: true,
    type: "dropDown",
    options: PROVINCE,
  },
  {
    name: "district",
    label: "District",
    md: 3,
    sm: 6,
    lg: 4,
    xs: 12,
    required: true,
    type: "dropDown",
    options: PROVINCE,
  },
  {
    name: "municipality",
    label: "Rural Municipality/Municipality/Metropolitan",
    md: 3,
    sm: 6,
    lg: 4,
    xs: 12,
    required: true,
    type: "dropDown",
    options: PROVINCE,

  },
  {
    name: "wardNo",
    label: "Ward No.",
    md: 3,
    sm: 6,
    lg: 4,
    xs: 12,
    type: "number",
    required: true,

  },
  {
    name: "tole",
    label: "Tole",
    md: 3,
    sm: 6,
    lg: 4,
    xs: 12,
    type: "text",
    required: true,

  },
  {
    name: "houseNo",
    label: "House Number",
    md: 3,
    sm: 6,
    lg: 4,
    xs: 12,
    type: "number",
  },
  {
    name: "mobileNo",
    label: "Mobile Number",
    md: 3,
    sm: 6,
    lg: 4,
    xs: 12,
    type: "number",
    required: true,

  },
  {
    name: "telephoneNo",
    label: "Telephone Number",
    md: 3,
    sm: 6,
    lg: 4,
    xs: 12,
    type: "number",
  },
  {
    name: "email",
    label: "Email",
    md: 3,
    sm: 6,
    lg: 4,
    xs: 12,
    type: "text",
    required: true,

  },
  {
    name: "website",
    label: "Website",
    md: 3,
    sm: 6,
    lg: 4,
    xs: 12,
    type: "text",
  },
  {
    name: "latitude",
    label: "Latitude",
    md: 3,
    sm: 6,
    lg: 4,
    xs: 12,
    type: "text",
    disabled: true,
    required: true,
  },
  {
    name: "longitude",
    label: "Longitude",
    md: 3,
    sm: 6,
    lg: 4,
    xs: 12,
    type: "text",
    disabled: true,
    required: true,
  },

  {
    sm: 12,
    lg: 12,
    type: "fieldArrayMap",
    setValueField: ["longitude", "latitude"],
  },
  {
    name: "have_different_permanent_address",
    label: "Do you have different Temporary Address?",
    md: 12,
    sm: 6,
    lg: 4,
    xs: 12,
    type: "fieldArraySwitch",
  },
];