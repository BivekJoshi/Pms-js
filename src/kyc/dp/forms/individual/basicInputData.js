import { nanoid } from "nanoid";

export const COUNTRIES = [
  { label: "Afghanistan", value: "Afghanistan" },
  { label: "Albania", value: "Albania" },
  { label: "Algeria", value: "Algeria" },
  { label: "Andorra", value: "Andorra" },
  { label: "Angola", value: "Angola" },
  { label: "Antigua and Barbuda", value: "Antigua and Barbuda" },
  { label: "Argentina", value: "Argentina" },
  { label: "Armenia", value: "Armenia" },
  { label: "Aruba", value: "Aruba" },
  { label: "Australia", value: "Australia" },
  { label: "Austria", value: "Austria" },
  { label: "Azerbaijan", value: "Azerbaijan" },
  { label: "Bahamas", value: "Bahamas" },
  { label: "Bahrain", value: "Bahrain" },
  { label: "Bangladesh", value: "Bangladesh" },
  { label: "Barbados", value: "Barbados" },
  { label: "Belarus", value: "Belarus" },
  { label: "Belgium", value: "Belgium" },
  { label: "Belize", value: "Belize" },
  { label: "Benin", value: "Benin" },
  { label: "Bermuda", value: "Bermuda" },
  { label: "Bhutan", value: "Bhutan" },
  { label: "Bolivia", value: "Bolivia" },
  { label: "Bosnia and Herzegovina", value: "Bosnia and Herzegovina" },
  { label: "Botswana", value: "Botswana" },
  { label: "Bouvet Island", value: "Bouvet Island" },
  { label: "Brazil", value: "Brazil" },
  { label: "Brunei Darussalam", value: "Brunei Darussalam" },
  { label: "Bulgaria", value: "Bulgaria" },
  { label: "Burkina Faso", value: "Burkina Faso" },
  { label: "Burundi", value: "Burundi" },
  { label: "Cambodia", value: "Cambodia" },
  { label: "Cameroon", value: "Cameroon" },
  { label: "Canada", value: "Canada" },
  { label: "Cape Verde", value: "Cape Verde" },
  { label: "Central African Republic", value: "Central African Republic" },
  { label: "Chad", value: "Chad" },
  { label: "Chile", value: "Chile" },
  { label: "China", value: "China" },
  { label: "Colombia", value: "Colombia" },
  { label: "Comoros", value: "Comoros" },
  { label: "Congo", value: "Congo" },
  {
    label: "Democratic Republic of the Congo",
    value: "Democratic Republic of the Congo",
  },
  { label: "Costa Rica", value: "Costa Rica" },
  { label: "Côte d'Ivoire", value: "Côte d'Ivoire" },
  { label: "Croatia", value: "Croatia" },
  { label: "Cuba", value: "Cuba" },
  { label: "Cyprus", value: "Cyprus" },
  { label: "Czech Republic", value: "Czech Republic" },
  { label: "Denmark", value: "Denmark" },
  { label: "Djibouti", value: "Djibouti" },
  { label: "Dominica", value: "Dominica" },
  { label: "Dominican Republic", value: "Dominican Republic" },
  { label: "Ecuador", value: "Ecuador" },
  { label: "Egypt", value: "Egypt" },
  { label: "El Salvador", value: "El Salvador" },
  { label: "Equatorial Guinea", value: "Equatorial Guinea" },
  { label: "Eritrea", value: "Eritrea" },
  { label: "Estonia", value: "Estonia" },
  { label: "Ethiopia", value: "Ethiopia" },
  { label: "Fiji", value: "Fiji" },
  { label: "Finland", value: "Finland" },
  { label: "France", value: "France" },
  { label: "Gabon", value: "Gabon" },
  { label: "Gambia", value: "Gambia" },
  { label: "Georgia", value: "Georgia" },
  { label: "Germany", value: "Germany" },
  { label: "Ghana", value: "Ghana" },
  { label: "Greece", value: "Greece" },
  { label: "Greenland", value: "Greenland" },
  { label: "Grenada", value: "Grenada" },
  { label: "Guam", value: "Guam" },
  { label: "Guatemala", value: "Guatemala" },
  { label: "Guernsey", value: "Guernsey" },
  { label: "Guinea", value: "Guinea" },
  { label: "Guinea-Bissau", value: "Guinea-Bissau" },
  { label: "Guyana", value: "Guyana" },
  { label: "Haiti", value: "Haiti" },
  {
    label: "Holy See (Vatican City State)",
    value: "Holy See (Vatican City State)",
  },
  { label: "Honduras", value: "Honduras" },
  { label: "Hong Kong", value: "Hong Kong" },
  { label: "Hungary", value: "Hungary" },
  { label: "Iceland", value: "Iceland" },
  { label: "India", value: "India" },
  { label: "Indonesia", value: "Indonesia" },
  { label: "Iran, Islamic Republic of", value: "Iran, Islamic Republic of" },
  { label: "Iraq", value: "Iraq" },
  { label: "Ireland", value: "Ireland" },
  { label: "Israel", value: "Israel" },
  { label: "Italy", value: "Italy" },
  { label: "Jamaica", value: "Jamaica" },
  { label: "Japan", value: "Japan" },
  { label: "Jersey", value: "Jersey" },
  { label: "Jordan", value: "Jordan" },
  { label: "Kazakhstan", value: "Kazakhstan" },
  { label: "Kenya", value: "Kenya" },
  { label: "Kiribati", value: "Kiribati" },
  { label: "South Korea", value: "South Korea" },
  { label: "North Korea", value: "North Korea" },
  { label: "Kuwait", value: "Kuwait" },
  { label: "Kyrgyzstan", value: "Kyrgyzstan" },
  {
    label: "Laos",
    value: "Laos",
  },
  { label: "Latvia", value: "Latvia" },
  { label: "Lebanon", value: "Lebanon" },
  { label: "Lesotho", value: "Lesotho" },
  { label: "Liberia", value: "Liberia" },
  { label: "Libyan Arab Jamahiriya", value: "Libyan Arab Jamahiriya" },
  { label: "Liechtenstein", value: "Liechtenstein" },
  { label: "Lithuania", value: "Lithuania" },
  { label: "Luxembourg", value: "Luxembourg" },
  { label: "Macao", value: "Macao" },
  { label: "North Macedonia", value: "North Macedonia" },
  { label: "Madagascar", value: "Madagascar" },
  { label: "Malawi", value: "Malawi" },
  { label: "Malaysia", value: "Malaysia" },
  { label: "Maldives", value: "Maldives" },
  { label: "Mali", value: "Mali" },
  { label: "Malta", value: "Malta" },
  { label: "Marshall Islands", value: "Marshall Islands" },
  { label: "Mauritania", value: "Mauritania" },
  { label: "Mauritius", value: "Mauritius" },
  { label: "Mexico", value: "Mexico" },
  {
    label: "Micronesia, Federated States of",
    value: "Micronesia, Federated States of",
  },
  { label: "Moldova, Republic of", value: "Moldova, Republic of" },
  { label: "Monaco", value: "Monaco" },
  { label: "Mongolia", value: "Mongolia" },
  { label: "Montenegro", value: "Montenegro" },
  { label: "Montserrat", value: "Montserrat" },
  { label: "Morocco", value: "Morocco" },
  { label: "Mozambique", value: "Mozambique" },
  { label: "Myanmar", value: "Myanmar" },
  { label: "Namibia", value: "Namibia" },
  { label: "Nauru", value: "Nauru" },
  // { label: 'Nepal', value: 'Nepal' },
  { label: "Netherlands", value: "Netherlands" },
  { label: "New Zealand", value: "New Zealand" },
  { label: "Nicaragua", value: "Nicaragua" },
  { label: "Niger", value: "Niger" },
  { label: "Nigeria", value: "Nigeria" },
  { label: "Norway", value: "Norway" },
  { label: "Oman", value: "Oman" },
  { label: "Pakistan", value: "Pakistan" },
  { label: "Palau", value: "Palau" },
  {
    label: "Palestinian Territory, Occupied",
    value: "Palestinian Territory, Occupied",
  },
  { label: "Panama", value: "Panama" },
  { label: "Papua New Guinea", value: "Papua New Guinea" },
  { label: "Paraguay", value: "Paraguay" },
  { label: "Peru", value: "Peru" },
  { label: "Philippines", value: "Philippines" },
  { label: "Pitcairn", value: "Pitcairn" },
  { label: "Poland", value: "Poland" },
  { label: "Portugal", value: "Portugal" },
  { label: "Puerto Rico", value: "Puerto Rico" },
  { label: "Qatar", value: "Qatar" },
  { label: "Romania", value: "Romania" },
  { label: "Russia", value: "Russia" },
  { label: "Rwanda", value: "Rwanda" },
  { label: "Saint Kitts and Nevis", value: "Saint Kitts and Nevis" },
  { label: "Saint Lucia", value: "Saint Lucia" },
  { label: "Samoa", value: "Samoa" },
  { label: "San Marino", value: "San Marino" },
  { label: "Sao Tome and Principe", value: "Sao Tome and Principe" },
  { label: "Saudi Arabia", value: "Saudi Arabia" },
  { label: "Senegal", value: "Senegal" },
  { label: "Serbia", value: "Serbia" },
  { label: "Seychelles", value: "Seychelles" },
  { label: "Sierra Leone", value: "Sierra Leone" },
  { label: "Singapore", value: "Singapore" },
  { label: "Slovakia", value: "Slovakia" },
  { label: "Slovenia", value: "Slovenia" },
  { label: "Solomon Islands", value: "Solomon Islands" },
  { label: "Somalia", value: "Somalia" },
  { label: "South Africa", value: "South Africa" },
  { label: "South Sudan", value: "South Sudan" },
  { label: "Spain", value: "Spain" },
  { label: "Sri Lanka", value: "Sri Lanka" },
  { label: "Sudan", value: "Sudan" },
  { label: "Suriname", value: "Suriname" },
  { label: "Swaziland", value: "Swaziland" },
  { label: "Sweden", value: "Sweden" },
  { label: "Switzerland", value: "Switzerland" },
  { label: "Taiwan", value: "Taiwan" },
  { label: "Tajikistan", value: "Tajikistan" },
  { label: "Tanzania", value: "Tanzania" },
  { label: "Thailand", value: "Thailand" },
  { label: "Timor-Leste", value: "Timor-Leste" },
  { label: "Togo", value: "Togo" },
  { label: "Tokelau", value: "Tokelau" },
  { label: "Tonga", value: "Tonga" },
  { label: "Trinidad and Tobago", value: "Trinidad and Tobago" },
  { label: "Tunisia", value: "Tunisia" },
  { label: "Turkey", value: "Turkey" },
  { label: "Turkmenistan", value: "Turkmenistan" },
  { label: "Tuvalu", value: "Tuvalu" },
  { label: "Uganda", value: "Uganda" },
  { label: "Ukraine", value: "Ukraine" },
  { label: "United Arab Emirates", value: "United Arab Emirates" },
  { label: "United Kingdom", value: "United Kingdom" },
  { label: "United States", value: "United States" },
  { label: "Uruguay", value: "Uruguay" },
  { label: "Uzbekistan", value: "Uzbekistan" },
  { label: "Vanuatu", value: "Vanuatu" },
  { label: "Venezuela", value: "Venezuela" },
  { label: "Vietnam", value: "Vietnam" },
  { label: "Yemen", value: "Yemen" },
  { label: "Zambia", value: "Zambia" },
  { label: "Zimbabwe", value: "Zimbabwe" },
];
export const DISTRICTS = [
  { label: "Achham", value: "achham" },
  { label: "Arghakhanchi", value: "arghakhanchi" },
  { label: "Baglung", value: "baglung" },
  { label: "Baitadi", value: "baitadi" },
  { label: "Bajhang", value: "bajhang" },
  { label: "Bajura", value: "bajura" },
  { label: "Banke", value: "banke" },
  { label: "Bara", value: "bara" },
  { label: "Bardiya", value: "bardiya" },
  { label: "Bhaktapur", value: "bhaktapur" },
  { label: "Bhojpur", value: "bhojpur" },
  { label: "Chitwan", value: "chitwan" },
  { label: "Dadeldhura", value: "dadeldhura" },
  { label: "Dailekh", value: "dailekh" },
  { label: "Dang", value: "dang" },
  { label: "Darchula", value: "darchula" },
  { label: "Dhading", value: "dhading" },
  { label: "Dhankuta", value: "dhankuta" },
  { label: "Dhanusa", value: "dhanusa" },
  { label: "Dholkha", value: "dholkha" },
  { label: "Dolpa", value: "dolpa" },
  { label: "Doti", value: "doti" },
  { label: "Eastern Rukum", value: "eastern-rukum" },
  { label: "Gorkha", value: "gorkha" },
  { label: "Gulmi", value: "gulmi" },
  { label: "Humla", value: "humla" },
  { label: "Ilam", value: "ilam" },
  { label: "Jajarkot", value: "jajarkot" },
  { label: "Jhapa", value: "jhapa" },
  { label: "Jumla", value: "jumla" },
  { label: "Kailali", value: "kailali" },
  { label: "Kalikot", value: "kalikot" },
  { label: "Kanchanpur", value: "kanchanpur" },
  { label: "Kapilvastu", value: "kapilvastu" },
  { label: "Kaski", value: "kaski" },
  { label: "Kathmandu", value: "kathmandu" },
  { label: "Kavrepalanchok", value: "kavrepalanchok" },
  { label: "Khotang", value: "khotang" },
  { label: "Lalitpur", value: "lalitpur" },
  { label: "Lamjung", value: "lamjung" },
  { label: "Mahottari", value: "mahottari" },
  { label: "Makwanpur", value: "makwanpur" },
  { label: "Manang", value: "manang" },
  { label: "Morang", value: "morang" },
  { label: "Mugu", value: "mugu" },
  { label: "Mustang", value: "mustang" },
  { label: "Myagdi", value: "myagdi" },
  { label: "Nawalpur", value: "nawalpur" },
  { label: "Nuwakot", value: "nuwakot" },
  { label: "Okhaldhunga", value: "okhaldhunga" },
  { label: "Palpa", value: "palpa" },
  { label: "Panchthar", value: "panchthar" },
  { label: "Parasi", value: "parasi" },
  { label: "Parbat", value: "parbat" },
  { label: "Parsa", value: "parsa" },
  { label: "Pyuthan", value: "pyuthan" },
  { label: "Ramechhap", value: "ramechhap" },
  { label: "Rasuwa", value: "rasuwa" },
  { label: "Rautahat", value: "rautahat" },
  { label: "Rolpa", value: "rolpa" },
  { label: "Rupandehi", value: "rupandehi" },
  { label: "Salyan", value: "salyan" },
  { label: "Sankhuwasabha", value: "sankhuwasabha" },
  { label: "Saptari", value: "saptari" },
  { label: "Sarlahi", value: "sarlahi" },
  { label: "Sindhuli", value: "sindhuli" },
  { label: "Sindhupalchok", value: "sindhupalchok" },
  { label: "Siraha", value: "siraha" },
  { label: "Solukhumbu", value: "solukhumbu" },
  { label: "Sunsari", value: "sunsari" },
  { label: "Surkhet", value: "surkhet" },
  { label: "Syangja", value: "syangja" },
  { label: "Tanahun", value: "tanahun" },
  { label: "Taplejung", value: "taplejung" },
  { label: "Terhathum", value: "terhathum" },
  { label: "Udayapur", value: "udayapur" },
  { label: "Western Rukum", value: "western rukum" },
];
export const NATIONALITY = [
  { label: "Afghan", value: "Afghan", country: "Afghanistan" },
  { label: "Albanian", value: "Albanian", country: "Albania" },
  { label: "Algerian", value: "Algerian", country: "Algeria" },
  { label: "American", value: "American", country: "United States" },
  { label: "Andorran", value: "Andorran", country: "Andorra" },
  { label: "Angolan", value: "Angolan", country: "Angola" },
  { label: "Antiguans", value: "Antiguans", country: "Antigua and Barbuda" },
  { label: "Argentinean", value: "Argentinean", country: "Argentina" },
  { label: "Armenian", value: "Armenian", country: "Armenia" },
  { label: "Australian", value: "Australian", country: "Australia" },
  { label: "Austrian", value: "Austrian", country: "Austria" },
  { label: "Azerbaijani", value: "Azerbaijani", country: "Azerbaijan" },
  { label: "Bahamian", value: "Bahamian", country: "Bahamas" },
  { label: "Bahraini", value: "Bahraini", country: "Bahrain" },
  { label: "Bangladeshi", value: "Bangladeshi", country: "Bangladesh" },
  { label: "Barbadian", value: "Barbadian", country: "Barbados" },
  { label: "Belarusian", value: "Belarusian", country: "Belarus" },
  { label: "Belgian", value: "Belgian", country: "Belgium" },
  { label: "Belizean", value: "Belizean", country: "Belize" },
  { label: "Beninese", value: "Beninese", country: "Benin" },
  { label: "Bhutanese", value: "Bhutanese", country: "Bhutan" },
  { label: "Bolivian", value: "Bolivian", country: "Bolivia" },
  { label: "Bosnian", value: "Bosnian", country: "Bosnia and Herzegovina" },
  { label: "Botswanan", value: "Botswanan", country: "Botswana" },
  { label: "Brazilian", value: "Brazilian", country: "Brazil" },
  { label: "British", value: "British", country: "United Kingdom" },
  { label: "Bruneian", value: "Bruneian", country: "Brunei" },
  { label: "Bulgarian", value: "Bulgarian", country: "Bulgaria" },
  { label: "Burkinabe", value: "Burkinabe", country: "Burkina Faso" },
  { label: "Burmese", value: "Burmese", country: "Myanmar" },
  { label: "Burundian", value: "Burundian", country: "Burundi" },
  { label: "Cambodian", value: "Cambodian", country: "Cambodia" },
  { label: "Cameroonian", value: "Cameroonian", country: "Cameroon" },
  { label: "Canadian", value: "Canadian", country: "Canada" },
  { label: "Cape Verdean", value: "Cape Verdean", country: "Cape Verde" },
  {
    label: "Central African",
    value: "Central African",
    country: "Central African Republic",
  },
  { label: "Chadian", value: "Chadian", country: "Chad" },
  { label: "Chilean", value: "Chilean", country: "Chile" },
  { label: "Chinese", value: "Chinese", country: "China" },
  { label: "Colombian", value: "Colombian", country: "Colombia" },
  { label: "Comoran", value: "Comoran", country: "Comoros" },
  {
    label: "Congolese",
    value: "Congolese",
    country: "Democratic Republic of the Congo",
  },
  {
    label: "Congolese",
    value: "Congolese",
    country: "Congo",
  },
  { label: "Costa Rican", value: "Costa Rican", country: "Costa Rica" },
  { label: "Croatian", value: "Croatian", country: "Croatia" },
  { label: "Cuban", value: "Cuban", country: "Cuba" },
  { label: "Cypriot", value: "Cypriot", country: "Cyprus" },
  { label: "Czech", value: "Czech", country: "Czech Republic" },
  { label: "Danish", value: "Danish", country: "Denmark" },
  { label: "Djiboutian", value: "Djiboutian", country: "Djibouti" },
  { label: "Dominican", value: "Dominican", country: "Dominican Republic" },
  { label: "Dutch", value: "Dutch", country: "Netherlands" },
  { label: "East Timorese", value: "East Timorese", country: "East Timor" },
  { label: "Ecuadorean", value: "Ecuadorean", country: "Ecuador" },
  { label: "Egyptian", value: "Egyptian", country: "Egypt" },
  { label: "Emirian", value: "Emirian", country: "United Arab Emirates" },
  {
    label: "Equatorial Guinean",
    value: "Equatorial Guinean",
    country: "Equatorial Guinea",
  },
  { label: "Eritrean", value: "Eritrean", country: "Eritrea" },
  { label: "Estonian", value: "Estonian", country: "Estonia" },
  { label: "Ethiopian", value: "Ethiopian", country: "Ethiopia" },
  { label: "Fijian", value: "Fijian", country: "Fiji" },
  { label: "Filipino", value: "Filipino", country: "Philippines" },
  { label: "Finnish", value: "Finnish", country: "Finland" },
  { label: "French", value: "French", country: "France" },
  { label: "Gabonese", value: "Gabonese", country: "Gabon" },
  { label: "Gambian", value: "Gambian", country: "Gambia" },
  { label: "Georgian", value: "Georgian", country: "Georgia" },
  { label: "German", value: "German", country: "Germany" },
  { label: "Ghanaian", value: "Ghanaian", country: "Ghana" },
  { label: "Greek", value: "Greek", country: "Greece" },
  { label: "Greenlander", value: "Greenlander", country: "Greenland" },

  { label: "Grenadian", value: "Grenadian", country: "Grenada" },
  { label: "Guatemalan", value: "Guatemalan", country: "Guatemala" },
  {
    label: "Guinea-Bissauan",
    value: "Guinea-Bissauan",
    country: "Guinea-Bissau",
  },
  { label: "Guinean", value: "Guinean", country: "Guinea" },
  { label: "Guyanese", value: "Guyanese", country: "Guyana" },
  { label: "Haitian", value: "Haitian", country: "Haiti" },
  {
    label: "Herzegovinian",
    value: "Herzegovinian",
    country: "Bosnia and Herzegovina",
  },
  { label: "Honduran", value: "Honduran", country: "Honduras" },
  { label: "Hungarian", value: "Hungarian", country: "Hungary" },
  { label: "I-Kiribati", value: "I-Kiribati", country: "Kiribati" },
  { label: "Icelander", value: "Icelander", country: "Iceland" },
  { label: "Indian", value: "Indian", country: "India" },
  { label: "Indonesian", value: "Indonesian", country: "Indonesia" },
  { label: "Iranian", value: "Iranian", country: "Iran, Islamic Republic of" },
  { label: "Iraqi", value: "Iraqi", country: "Iraq" },
  { label: "Irish", value: "Irish", country: "Ireland" },
  { label: "Israeli", value: "Israeli", country: "Israel" },
  { label: "Italian", value: "Italian", country: "Italy" },
  { label: "Ivorian", value: "Ivorian", country: "Côte d'Ivoire" },
  { label: "Jamaican", value: "Jamaican", country: "Jamaica" },
  { label: "Japanese", value: "Japanese", country: "Japan" },
  { label: "Jordanian", value: "Jordanian", country: "Jordan" },
  { label: "Kazakhstani", value: "Kazakhstani", country: "Kazakhstan" },
  { label: "Kenyan", value: "Kenyan", country: "Kenya" },
  {
    label: "Kittian and Nevisian",
    value: "Kittian and Nevisian",
    country: "Saint Kitts and Nevis",
  },
  { label: "Kuwaiti", value: "Kuwaiti", country: "Kuwait" },
  { label: "Kyrgyz", value: "Kyrgyz", country: "Kyrgyzstan" },
  { label: "Laotian", value: "Laotian", country: "Laos" },
  { label: "Latvian", value: "Latvian", country: "Latvia" },
  { label: "Lebanese", value: "Lebanese", country: "Lebanon" },
  { label: "Liberian", value: "Liberian", country: "Liberia" },
  { label: "Libyan", value: "Libyan", country: "Libyan Arab Jamahiriya" },
  {
    label: "Liechtensteiner",
    value: "Liechtensteiner",
    country: "Liechtenstein",
  },
  { label: "Lithuanian", value: "Lithuanian", country: "Lithuania" },
  { label: "Luxembourger", value: "Luxembourger", country: "Luxembourg" },
  { label: "Macedonian", value: "Macedonian", country: "North Macedonia" },
  { label: "Malagasy", value: "Malagasy", country: "Madagascar" },
  { label: "Malawian", value: "Malawian", country: "Malawi" },
  { label: "Malaysian", value: "Malaysian", country: "Malaysia" },
  { label: "Maldivan", value: "Maldivan", country: "Maldives" },
  { label: "Malian", value: "Malian", country: "Mali" },
  { label: "Maltese", value: "Maltese", country: "Malta" },
  { label: "Marshallese", value: "Marshallese", country: "Marshall Islands" },
  { label: "Mauritanian", value: "Mauritanian", country: "Mauritania" },
  { label: "Mauritian", value: "Mauritian", country: "Mauritius" },
  { label: "Mexican", value: "Mexican", country: "Mexico" },
  {
    label: "Micronesian",
    value: "Micronesian",
    country: "Micronesia, Federated States of",
  },
  { label: "Moldovan", value: "Moldovan", country: "Moldova" },
  { label: "Monacan", value: "Monacan", country: "Monaco" },
  { label: "Mongolian", value: "Mongolian", country: "Mongolia" },
  { label: "Moroccan", value: "Moroccan", country: "Morocco" },
  { label: "Mosotho", value: "Mosotho", country: "Lesotho" },
  { label: "Motswana", value: "Motswana", country: "Botswana" },
  { label: "Mozambican", value: "Mozambican", country: "Mozambique" },
  { label: "Namibian", value: "Namibian", country: "Namibia" },
  { label: "Nauruan", value: "Nauruan", country: "Nauru" },
  { label: "Nepalese", value: "Nepalese", country: "Nepal" },
  { label: "New Zealander", value: "New Zealander", country: "New Zealand" },
  { label: "Nicaraguan", value: "Nicaraguan", country: "Nicaragua" },
  { label: "Nigerian", value: "Nigerian", country: "Nigeria" },
  { label: "Nigerien", value: "Nigerien", country: "Niger" },
  { label: "North Korean", value: "North Korean", country: "North Korea" },
  {
    label: "Northern Irish",
    value: "Northern Irish",
    country: "Northern Ireland",
  },
  { label: "Norwegian", value: "Norwegian", country: "Norway" },
  { label: "Omani", value: "Omani", country: "Oman" },
  { label: "Pakistani", value: "Pakistani", country: "Pakistan" },
  {
    label: "Palestinian",
    value: "Palestinian",
    country: "Palestinian Territory, Occupied",
  },
  { label: "Palauan", value: "Palauan", country: "Palau" },
  { label: "Panamanian", value: "Panamanian", country: "Panama" },
  {
    label: "Papua New Guinean",
    value: "Papua New Guinean",
    country: "Papua New Guinea",
  },
  { label: "Paraguayan", value: "Paraguayan", country: "Paraguay" },
  { label: "Peruvian", value: "Peruvian", country: "Peru" },
  { label: "Polish", value: "Polish", country: "Poland" },
  { label: "Portuguese", value: "Portuguese", country: "Portugal" },
  { label: "Qatari", value: "Qatari", country: "Qatar" },
  { label: "Romanian", value: "Romanian", country: "Romania" },
  { label: "Russian", value: "Russian", country: "Russia" },
  { label: "Rwandan", value: "Rwandan", country: "Rwanda" },
  { label: "Saint Lucian", value: "Saint Lucian", country: "Saint Lucia" },
  { label: "Salvadoran", value: "Salvadoran", country: "El Salvador" },
  { label: "Samoan", value: "Samoan", country: "Samoa" },
  { label: "San Marinese", value: "San Marinese", country: "San Marino" },
  {
    label: "Sao Tomean",
    value: "Sao Tomean",
    country: "Sao Tome and Principe",
  },
  { label: "Saudi", value: "Saudi", country: "Saudi Arabia" },
  { label: "Scottish", value: "Scottish", country: "Scotland" },
  { label: "Senegalese", value: "Senegalese", country: "Senegal" },
  { label: "Serbian", value: "Serbian", country: "Serbia" },
  { label: "Seychellois", value: "Seychellois", country: "Seychelles" },
  { label: "Sierra Leonean", value: "Sierra Leonean", country: "Sierra Leone" },
  { label: "Singaporean", value: "Singaporean", country: "Singapore" },
  { label: "Slovakian", value: "Slovakian", country: "Slovakia" },
  { label: "Slovenian", value: "Slovenian", country: "Slovenia" },
  {
    label: "Solomon Islander",
    value: "Solomon Islander",
    country: "Solomon Islands",
  },
  { label: "Somali", value: "Somali", country: "Somalia" },
  { label: "South African", value: "South African", country: "South Africa" },
  { label: "South Korean", value: "South Korean", country: "South Korea" },
  { label: "Spanish", value: "Spanish", country: "Spain" },
  { label: "Sri Lankan", value: "Sri Lankan", country: "Sri Lanka" },
  { label: "Sudanese", value: "Sudanese", country: "Sudan" },
  { label: "Surinamer", value: "Surinamer", country: "Suriname" },
  { label: "Swazi", value: "Swazi", country: "Eswatini" },
  { label: "Swedish", value: "Swedish", country: "Sweden" },
  { label: "Swiss", value: "Swiss", country: "Switzerland" },
  { label: "Syrian", value: "Syrian", country: "Syria" },
  { label: "Taiwanese", value: "Taiwanese", country: "Taiwan" },
  { label: "Tajik", value: "Tajik", country: "Tajikistan" },
  { label: "Tanzanian", value: "Tanzanian", country: "Tanzania" },
  { label: "Thai", value: "Thai", country: "Thailand" },
  { label: "Togolese", value: "Togolese", country: "Togo" },
  { label: "Tongan", value: "Tongan", country: "Tonga" },
  {
    label: "Trinidadian or Tobagonian",
    value: "Trinidadian or Tobagonian",
    country: "Trinidad and Tobago",
  },
  { label: "Tunisian", value: "Tunisian", country: "Tunisia" },
  { label: "Turkish", value: "Turkish", country: "Turkey" },
  { label: "Turkmen", value: "Turkmen", country: "Turkmenistan" },
  { label: "Tuvaluan", value: "Tuvaluan", country: "Tuvalu" },
  { label: "Ugandan", value: "Ugandan", country: "Uganda" },
  { label: "Ukrainian", value: "Ukrainian", country: "Ukraine" },
  { label: "Uruguayan", value: "Uruguayan", country: "Uruguay" },
  { label: "Uzbekistani", value: "Uzbekistani", country: "Uzbekistan" },
  { label: "Vanuatuan", value: "Vanuatuan", country: "Vanuatu" },
  { label: "Venezuelan", value: "Venezuelan", country: "Venezuela" },
  { label: "Vietnamese", value: "Vietnamese", country: "Vietnam" },
  {
    label: "Vatican",
    value: "Vatican",
    country: "Holy See (Vatican City State)",
  },
  { label: "Welsh", value: "Welsh", country: "Wales" },
  { label: "Yemenite", value: "Yemenite", country: "Yemen" },
  { label: "Zambian", value: "Zambian", country: "Zambia" },
  { label: "Zimbabwean", value: "Zimbabwean", country: "Zimbabwe" },
];
export const FAMILY_RELATION = [
  {
    label: "Father",
    value: "Father",
  },
  {
    label: "Mother",
    value: "Mother",
  },
  {
    label: "Grand Father",
    value: "GrandFather",
  },
];

export const PROVINCE_OPTIONS = [
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

export const basicData = [
  {
    name: "firstName",
    label: "First Name",
    placeholder: "Enter First Name",
    type: "text",
    required: "Please enter first name",
    sm: 12,
    md: 4,
    id: nanoid(),
  },
  {
    name: "middleName",
    label: "Middle Name",
    placeholder: "Enter middle name",
    type: "text",
    sm: 12,
    md: 4,
    id: nanoid(),
  },
  {
    name: "lastName",
    label: "Last Name",
    placeholder: "Enter last name",
    type: "text",
    required: "Please enter last name",
    sm: 12,
    md: 4,
    id: nanoid(),
  },
  {
    name: "clientNameNepali",
    label: "Name (Devnagari)",
    type: "nepaliTypeText",
    sm: 12,
    md: 4,
    id: nanoid(),
  },

  {
    name: "dob",
    label: "Date of Birth (B.S.) (जन्म मिति) (B.S.)",
    type: "dualDate",
    placeholder: "Select date of birth (B.S)",
    engMd: 6,
    engSm: 12,
    nepMd: 6,
    nepSm: 12,
    md: 8,
    sm: 12,
    engLabel: "Date of Birth (A.D.)",
    required: true,
    id: nanoid(),
  },
  {
    name: "gender",
    label: "Gender",
    type: "dropDown",
    placeholder: "Please select gender",
    sm: 12,
    md: 4,
    id: nanoid(),
    options: [
      { value: "M", label: "Male", id: 1 },
      { value: "F", label: "Female", id: 2 },
      { value: "O", label: "Others", id: 3 },
    ],
    required: "Please select gender",
  },
  {
    name: "isNrn",
    label: "Are you NRN?",
    placeholder: "Are you NRN?",
    type: "switch",
    required: true,
    col: 12,
    sm: 12,
    id: nanoid(),
  },

  {
    name: "isMinor",
    label: "Are you Minor?",
    type: "switch",
    required: true,
    isDisabled: true,
    sm: 12,
    col: 12,
    id: nanoid(),
    infoAlert: "Will be enabled when DOB is less than 16 years!",
  },
];
