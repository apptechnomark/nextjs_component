import React from "react";

const data = [
    {
      value: "+93",
      label: "+93",
      country: "Afghanistan",
      telLength: 9,
      JsxElement: <img
        src="https://flagcdn.com/af.svg"
        width="19"
        alt="India" />
    },
    {
      value: "+355",
      label: "+355",
      country: "Albania",
      telLength: 9,
      JsxElement: <img
      src="https://flagcdn.com/al.svg"
      width="19"
      alt="India" />
    },
    {
      value: "+213",
      label: "+213",
      country: "Algeria",
      telLength: 9
    },
    {
      value: "+1684",
      label: "+1684",
      country: "American Samoa",
      telLength: 7
    },
    {
      value: "+376",
      label: "+376",
      country: "Andorra",
      telLength: 6
    },
    {
      value: "+244",
      label: "+244",
      country: "Angola",
      telLength: 9
    },
    {
      value: "+1264",
      label: "+1264",
      country: "Anguilla",
      telLength: 7
    },
    {
      value: "+672",
      label: "+672",
      country: "Antarctica",
      telLength: 6
    },
    {
      value: "+1268",
      label: "+1268",
      country: "Antigua And Barbuda",
      telLength: 7
    },
    {
      value: "+54",
      label: "+54",
      country: "Argentina",
      telLength: 11
    },
    {
      value: "+374",
      label: "+374",
      country: "Armenia",
      telLength: 8
    },
    {
      value: "+297",
      label: "+297",
      country: "Aruba",
      telLength: 7
    },
    {
      value: "+61",
      label: "+61",
      country: "Australia",
      telLength: 10
    },
    {
      value: "+43",
      label: "+43",
      country: "Austria",
      telLength: 12
    },
    {
      value: "+994",
      label: "+994",
      country: "Azerbaijan",
      telLength: 9
    },
    {
      value: "+1242",
      label: "+1242",
      country: "Bahamas",
      telLength: 10
    },
    {
      value: "+973",
      label: "+973",
      country: "Bahrain",
      telLength: 8
    },
    {
      value: "+880",
      label: "+880",
      country: "Bangladesh",
      telLength: 10
    },
    {
      value: "+1246",
      label: "+1246",
      country: "Barbados",
      telLength: 10
    },
    {
      value: "+375",
      label: "+375",
      country: "Belarus",
      telLength: 9
    },
    {
      value: "+32",
      label: "+32",
      country: "Belgium",
      telLength: 10
    },
    {
      value: "+501",
      label: "+501",
      country: "Belize",
      telLength: 7
    },
    {
      value: "+229",
      label: "+229",
      country: "Benin",
      telLength: 8
    },
    {
      value: "+1441",
      label: "+1441",
      country: "Bermuda",
      telLength: 7
    },
    {
      value: "+975",
      label: "+975",
      country: "Bhutan",
      telLength: 8
    },
    {
      value: "+591",
      label: "+591",
      country: "Bolivia",
      telLength: 8
    },
    {
      value: "+387",
      label: "+387",
      country: "Bosnia And Herzegovina",
      telLength: 8
    },
    {
      value: "+267",
      label: "+267",
      country: "Botswana",
      telLength: 8
    },
    {
      value: "+55",
      label: "+55",
      country: "Brazil",
      telLength: 11
    },
    {
      value: "+246",
      label: "+246",
      country: "British Indian Ocean Territory",
      telLength: 7
    },
    {
      value: "+673",
      label: "+673",
      country: "Brunei Darussalam",
      telLength: 9
    },
    {
      value: "+359",
      label: "+359",
      country: "Bulgaria",
      telLength: 9
    },
    {
      value: "+226",
      label: "+226",
      country: "Burkina Faso",
      telLength: 8
    },
    {
      value: "+257",
      label: "+257",
      country: "Burundi",
      telLength: 8
    },
    {
      value: "+855",
      label: "+855",
      country: "Cambodia",
      telLength: 9
    },
    {
      value: "+237",
      label: "+237",
      country: "Cameroon",
      telLength: 9
    },
    {
      value: "+1",
      label: "+1",
      country: "Canada",
      telLength: 10
    },
    {
      value: "+238",
      label: "+238",
      country: "Cape Verde",
      telLength: 8
    },
    {
      value: "+1345",
      label: "+1345",
      country: "Cayman Islands",
      telLength: 7
    },
    {
      value: "+236",
      label: "+236",
      country: "Central African Republic",
      telLength: 8
    },
    {
      value: "+235",
      label: "+235",
      country: "Chad",
      telLength: 9
    },
    {
      value: "+56",
      label: "+56",
      country: "Chile",
      telLength: 11
    },
    {
      value: "+86",
      label: "+86",
      country: "China",
      telLength: 11
    },
    {
      value: "+57",
      label: "+57",
      country: "Colombia",
      telLength: 10
    },
    {
      value: "+269",
      label: "+269",
      country: "Comoros",
      telLength: 7
    },
    {
      value: "+242",
      label: "+242",
      country: "Congo",
      telLength: 8
    },
    {
      value: "+682",
      label: "+682",
      country: "Cook Islands",
      telLength: 6
    },
    {
      value: "+506",
      label: "+506",
      country: "Costa Rica",
      telLength: 8
    },
    {
      value: "+385",
      label: "+385",
      country: "Croatia",
      telLength: 9
    },
    {
      value: "+53",
      label: "+53",
      country: "Cuba",
      telLength: 9
    },
    {
      value: "+357",
      label: "+357",
      country: "Cyprus",
      telLength: 8
    },
    {
      value: "+420",
      label: "+420",
      country: "Czech Republic",
      telLength: 9
    },
    {
      value: "+45",
      label: "+45",
      country: "Denmark",
      telLength: 8
    },
    {
      value: "+253",
      label: "+253",
      country: "Djibouti",
      telLength: 8
    },
    {
      value: "+1767",
      label: "+1767",
      country: "Dominica",
      telLength: 7
    },
    {
      value: "+1809",
      label: "+1809",
      country: "Dominican Republic",
      telLength: 10
    },
    {
      value: "+593",
      label: "+593",
      country: "Ecuador",
      telLength: 9
    },
    {
      value: "+20",
      label: "+20",
      country: "Egypt",
      telLength: 9
    },
    {
      value: "+503",
      label: "+503",
      country: "El Salvador",
      telLength: 8
    },
    {
      value: "+240",
      label: "+240",
      country: "Equatorial Guinea",
      telLength: 7
    },
    {
      value: "+291",
      label: "+291",
      country: "Eritrea",
      telLength: 8
    },
    {
      value: "+372",
      label: "+372",
      country: "Estonia",
      telLength: 9
    },
    {
      value: "+251",
      label: "+251",
      country: "Ethiopia",
      telLength: 10
    },
    {
      value: "+500",
      label: "+500",
      country: "Falkland Islands (Malvinas)",
      telLength: 7
    },
    {
      value: "+298",
      label: "+298",
      country: "Faroe Islands",
      telLength: 8
    },
    {
      value: "+679",
      label: "+679",
      country: "Fiji",
      telLength: 7
    },
    {
      value: "+358",
      label: "+358",
      country: "Finland",
      telLength: 10
    },
    {
      value: "+33",
      label: "+33",
      country: "France",
      telLength: 11
    },
    {
      value: "+689",
      label: "+689",
      country: "French Polynesia",
      telLength: 8
    },
    {
      value: "+241",
      label: "+241",
      country: "Gabon",
      telLength: 8
    },
    {
      value: "+220",
      label: "+220",
      country: "Gambia",
      telLength: 8
    },
    {
      value: "+995",
      label: "+995",
      country: "Georgia",
      telLength: 9
    },
    {
      value: "+49",
      label: "+49",
      country: "Germany",
      telLength: 12
    },
    {
      value: "+233",
      label: "+233",
      country: "Ghana",
      telLength: 10
    },
    {
      value: "+350",
      label: "+350",
      country: "Gibraltar",
      telLength: 8
    },
    {
      value: "+30",
      label: "+30",
      country: "Greece",
      telLength: 10
    },
    {
      value: "+299",
      label: "+299",
      country: "Greenland",
      telLength: 6
    },
    {
      value: "+1473",
      label: "+1473",
      country: "Grenada",
      telLength: 7
    },
    {
      value: "+1671",
      label: "+1671",
      country: "Guam",
      telLength: 7
    },
    {
      value: "+502",
      label: "+502",
      country: "Guatemala",
      telLength: 8
    },
    {
      value: "+224",
      label: "+224",
      country: "Guinea",
      telLength: 8
    },
    {
      value: "+245",
      label: "+245",
      country: "Guinea-Bissau",
      telLength: 8
    },
    {
      value: "+592",
      label: "+592",
      country: "Guyana",
      telLength: 8
    },
    {
      value: "+509",
      label: "+509",
      country: "Haiti",
      telLength: 8
    },
    {
      value: "+39",
      label: "+39",
      country: "Italy",
      telLength: 9
    },
    {
      value: "+504",
      label: "+504",
      country: "Honduras",
      telLength: 8
    },
    {
      value: "+852",
      label: "+852",
      country: "Hong Kong",
      telLength: 8
    },
    {
      value: "+36",
      label: "+36",
      country: "Hungary",
      telLength: 9
    },
    {
      value: "+354",
      label: "+354",
      country: "Iceland",
      telLength: 7
    },
    {
      value: "+91",
      label: "+91",
      country: "India",
      telLength: 10
    },
    {
      value: "+62",
      label: "+62",
      country: "Indonesia",
      telLength: 11
    },
    {
      value: "+98",
      label: "+98",
      country: "Iran",
      telLength: 10
    },
    {
      value: "+964",
      label: "+964",
      country: "Iraq",
      telLength: 10
    },
    {
      value: "+353",
      label: "+353",
      country: "Ireland",
      telLength: 9
    },
    {
      value: "+972",
      label: "+972",
      country: "Israel",
      telLength: 10
    },
    {
      value: "+39",
      label: "+39",
      country: "Italy",
      telLength: 9
    },
    {
      value: "+225",
      label: "+225",
      country: "Ivory Coast",
      telLength: 9
    },
    {
      value: "+1876",
      label: "+1876",
      country: "Jamaica",
      telLength: 10
    },
    {
      value: "+81",
      label: "+81",
      country: "Japan",
      telLength: 10
    },
    {
      value: "+962",
      label: "+962",
      country: "Jordan",
      telLength: 9
    },
    {
      value: "+7",
      label: "+7",
      country: "Kazakhstan",
      telLength: 10
    },
    {
      value: "+254",
      label: "+254",
      country: "Kenya",
      telLength: 10
    },
    {
      value: "+686",
      label: "+686",
      country: "Kiribati",
      telLength: 8
    },
    {
      value: "+850",
      label: "+850",
      country: "Korea, Republic Of",
      telLength: 10
    },
    {
      value: "+82",
      label: "+82",
      country: "Korea",
      telLength: 10
    },
    {
      value: "+381",
      label: "+381",
      country: "Serbia",
      telLength: 8
    },
    {
      value: "+965",
      label: "+965",
      country: "Kuwait",
      telLength: 8
    },
    {
      value: "+996",
      label: "+996",
      country: "Kyrgyzstan",
      telLength: 9
    },
    {
      value: "+856",
      label: "+856",
      country: "Lao People's Democratic Republic",
      telLength: 9
    },
    {
      value: "+371",
      label: "+371",
      country: "Latvia",
      telLength: 8
    },
    {
      value: "+961",
      label: "+961",
      country: "Lebanon",
      telLength: 8
    },
    {
      value: "+266",
      label: "+266",
      country: "Lesotho",
      telLength: 8
    },
    {
      value: "+231",
      label: "+231",
      country: "Liberia",
      telLength: 7
    },
    {
      value: "+218",
      label: "+218",
      country: "Libyan Arab Jamahiriya",
      telLength: 9
    },
    {
      value: "+423",
      label: "+423",
      country: "Liechtenstein",
      telLength: 8
    },
    {
      value: "+370",
      label: "+370",
      country: "Lithuania",
      telLength: 8
    },
    {
      value: "+352",
      label: "+352",
      country: "Luxembourg",
      telLength: 8
    },
    {
      value: "+853",
      label: "+853",
      country: "Macao",
      telLength: 8
    },
    {
      value: "+389",
      label: "+389",
      country: "Macedonia",
      telLength: 8
    },
    {
      value: "+261",
      label: "+261",
      country: "Madagascar",
      telLength: 9
    },
    {
      value: "+265",
      label: "+265",
      country: "Malawi",
      telLength: 8
    },
    {
      value: "+60",
      label: "+60",
      country: "Malaysia",
      telLength: 10
    },
    {
      value: "+960",
      label: "+960",
      country: "Maldives",
      telLength: 8
    },
    {
      value: "+223",
      label: "+223",
      country: "Mali",
      telLength: 8
    },
    {
      value: "+356",
      label: "+356",
      country: "Malta",
      telLength: 8
    },
    {
      value: "+692",
      label: "+692",
      country: "Marshall Islands",
      telLength: 7
    },
    {
      value: "+222",
      label: "+222",
      country: "Mauritania",
      telLength: 8
    },
    {
      value: "+230",
      label: "+230",
      country: "Mauritius",
      telLength: 8
    },
    {
      value: "+262",
      label: "+262",
      country: "Mayotte",
      telLength: 8
    },
    {
      value: "+52",
      label: "+52",
      country: "Mexico",
      telLength: 10
    },
    {
      value: "+691",
      label: "+691",
      country: "Micronesia, Federated States Of",
      telLength: 7
    },
    {
      value: "+373",
      label: "+373",
      country: "Moldova",
      telLength: 8
    },
    {
      value: "+377",
      label: "+377",
      country: "Monaco",
      telLength: 8
    },
    {
      value: "+976",
      label: "+976",
      country: "Mongolia",
      telLength: 8
    },
    {
      value: "+382",
      label: "+382",
      country: "Montenegro",
      telLength: 8
    },
    {
      value: "+1664",
      label: "+1664",
      country: "Montserrat",
      telLength: 7
    },
    {
      value: "+212",
      label: "+212",
      country: "Morocco",
      telLength: 10
    },
    {
      value: "+258",
      label: "+258",
      country: "Mozambique",
      telLength: 9
    },
    {
      value: "+95",
      label: "+95",
      country: "Myanmar",
      telLength: 8
    },
    {
      value: "+264",
      label: "+264",
      country: "Namibia",
      telLength: 8
    },
    {
      value: "+674",
      label: "+674",
      country: "Nauru",
      telLength: 8
    },
    {
      value: "+977",
      label: "+977",
      country: "Nepal",
      telLength: 10
    },
    {
      value: "+31",
      label: "+31",
      country: "Netherlands",
      telLength: 10
    },
    {
      value: "+599",
      label: "+599",
      country: "Netherlands Antilles",
      telLength: 10
    },
    {
      value: "+687",
      label: "+687",
      country: "New Caledonia",
      telLength: 8
    },
    {
      value: "+64",
      label: "+64",
      country: "New Zealand",
      telLength: 10
    },
    {
      value: "+505",
      label: "+505",
      country: "Nicaragua",
      telLength: 8
    },
    {
      value: "+227",
      label: "+227",
      country: "Niger",
      telLength: 8
    },
    {
      value: "+234",
      label: "+234",
      country: "Nigeria",
      telLength: 10
    },
    {
      value: "+683",
      label: "+683",
      country: "Niue",
      telLength: 8
    },
    {
      value: "+1670",
      label: "+1670",
      country: "Northern Mariana Islands",
      telLength: 7
    },
    {
      value: "+47",
      label: "+47",
      country: "Norway",
      telLength: 8
    },
    {
      value: "+968",
      label: "+968",
      country: "Oman",
      telLength: 8
    },
    {
      value: "+92",
      label: "+92",
      country: "Pakistan",
      telLength: 10
    },
    {
      value: "+680",
      label: "+680",
      country: "Palau",
      telLength: 7
    },
    {
      value: "+970",
      label: "+970",
      country: "Palestinian Territory",
      telLength: 8
    },
    {
      value: "+507",
      label: "+507",
      country: "Panama",
      telLength: 8
    },
    {
      value: "+675",
      label: "+675",
      country: "Papua New Guinea",
      telLength: 8
    },
    {
      value: "+595",
      label: "+595",
      country: "Paraguay",
      telLength: 8
    },
    {
      value: "+51",
      label: "+51",
      country: "Peru",
      telLength: 9
    },
    {
      value: "+63",
      label: "+63",
      country: "Philippines",
      telLength: 10
    },
    {
      value: "+48",
      label: "+48",
      country: "Poland",
      telLength: 9
    },
    {
      value: "+351",
      label: "+351",
      country: "Portugal",
      telLength: 9
    },
    {
      value: "+1",
      label: "+1",
      country: "Canada",
      telLength: 10
    },
    {
      value: "+974",
      label: "+974",
      country: "Qatar",
      telLength: 8
    },
    {
      value: "+262",
      label: "+262",
      country: "Mayotte",
      telLength: 8
    },
    {
      value: "+40",
      label: "+40",
      country: "Romania",
      telLength: 9
    },
    {
      value: "+7",
      label: "+7",
      country: "Kazakhstan",
      telLength: 10
    },
    {
      value: "+250",
      label: "+250",
      country: "Rwanda",
      telLength: 9
    },
    {
      value: "+290",
      label: "+290",
      country: "Saint Helena",
      telLength: 8
    },
    {
      value: "+1869",
      label: "+1869",
      country: "Saint Kitts And Nevis",
      telLength: 7
    },
    {
      value: "+1758",
      label: "+1758",
      country: "Saint Lucia",
      telLength: 7
    },
    {
      value: "+508",
      label: "+508",
      country: "Saint Pierre And Miquelon",
      telLength: 8
    },
    {
      value: "+1784",
      label: "+1784",
      country: "Saint Vincent And The Grenadines",
      telLength: 7
    },
    {
      value: "+685",
      label: "+685",
      country: "Samoa",
      telLength: 7
    },
    {
      value: "+378",
      label: "+378",
      country: "San Marino",
      telLength: 8
    },
    {
      value: "+239",
      label: "+239",
      country: "Sao Tome And Principe",
      telLength: 8
    },
    {
      value: "+966",
      label: "+966",
      country: "Saudi Arabia",
      telLength: 9
    },
    {
      value: "+221",
      label: "+221",
      country: "Senegal",
      telLength: 9
    },
    {
      value: "+381",
      label: "+381",
      country: "Serbia",
      telLength: 8
    },
    {
      value: "+248",
      label: "+248",
      country: "Seychelles",
      telLength: 8
    },
    {
      value: "+232",
      label: "+232",
      country: "Sierra Leone",
      telLength: 8
    },
    {
      value: "+65",
      label: "+65",
      country: "Singapore",
      telLength: 8
    },
    {
      value: "+421",
      label: "+421",
      country: "Slovakia",
      telLength: 9
    },
    {
      value: "+386",
      label: "+386",
      country: "Slovenia",
      telLength: 8
    },
    {
      value: "+677",
      label: "+677",
      country: "Solomon Islands",
      telLength: 8
    },
    {
      value: "+252",
      label: "+252",
      country: "Somalia",
      telLength: 8
    },
    {
      value: "+27",
      label: "+27",
      country: "South Africa",
      telLength: 9
    },
    {
      value: "+34",
      label: "+34",
      country: "Spain",
      telLength: 9
    },
    {
      value: "+94",
      label: "+94",
      country: "Sri Lanka",
      telLength: 9
    },
    {
      value: "+249",
      label: "+249",
      country: "Sudan",
      telLength: 10
    },
    {
      value: "+597",
      label: "+597",
      country: "Suriname",
      telLength: 9
    },
    {
      value: "+268",
      label: "+268",
      country: "Swaziland",
      telLength: 8
    },
    {
      value: "+46",
      label: "+46",
      country: "Sweden",
      telLength: 9
    },
    {
      value: "+41",
      label: "+41",
      country: "Switzerland",
      telLength: 9
    },
    {
      value: "+963",
      label: "+963",
      country: "Syrian Arab Republic",
      telLength: 9
    },
    {
      value: "+886",
      label: "+886",
      country: "Taiwan",
      telLength: 9
    },
    {
      value: "+992",
      label: "+992",
      country: "Tajikistan",
      telLength: 9
    },
    {
      value: "+255",
      label: "+255",
      country: "Tanzania",
      telLength: 9
    },
    {
      value: "+66",
      label: "+66",
      country: "Thailand",
      telLength: 9
    },
    {
      value: "+670",
      label: "+670",
      country: "Timor-Leste",
      telLength: 8
    },
    {
      value: "+228",
      label: "+228",
      country: "Togo",
      telLength: 8
    },
    {
      value: "+690",
      label: "+690",
      country: "Tokelau",
      telLength: 7
    },
    {
      value: "+676",
      label: "+676",
      country: "Tonga",
      telLength: 8
    },
    {
      value: "+1868",
      label: "+1868",
      country: "Trinidad And Tobago",
      telLength: 7
    },
    {
      value: "+216",
      label: "+216",
      country: "Tunisia",
      telLength: 9
    },
    {
      value: "+90",
      label: "+90",
      country: "Turkey",
      telLength: 9
    },
    {
      value: "+993",
      label: "+993",
      country: "Turkmenistan",
      telLength: 8
    },
    {
      value: "+1649",
      label: "+1649",
      country: "Turks And Caicos Islands",
      telLength: 7
    },
    {
      value: "+688",
      label: "+688",
      country: "Tuvalu",
      telLength: 8
    },
    {
      value: "+256",
      label: "+256",
      country: "Uganda",
      telLength: 9
    },
    {
      value: "+380",
      label: "+380",
      country: "Ukraine",
      telLength: 10
    },
    {
      value: "+971",
      label: "+971",
      country: "United Arab Emirates",
      telLength: 9
    },
    {
      value: "+44",
      label: "+44",
      country: "United Kingdom",
      telLength: 10
    },
    {
      value: "+1",
      label: "+1",
      country: "Canada",
      telLength: 10
    },
    {
      value: "+598",
      label: "+598",
      country: "Uruguay",
      telLength: 9
    },
    {
      value: "+998",
      label: "+998",
      country: "Uzbekistan",
      telLength: 9
    },
    {
      value: "+678",
      label: "+678",
      country: "Vanuatu",
      telLength: 7
    },
    {
      value: "+58",
      label: "+58",
      country: "Venezuela",
      telLength: 11
    },
    {
      value: "+84",
      label: "+84",
      country: "Vietnam",
      telLength: 10
    },
    {
      value: "+1284",
      label: "+1284",
      country: "Virgin Islands, British",
      telLength: 10
    },
    {
      value: "+1340",
      label: "+1340",
      country: "Virgin Islands, U.s.",
      telLength: 10
    },
    {
      value: "+681",
      label: "+681",
      country: "Wallis And Futuna",
      telLength: 8
    },
    {
      value: "+967",
      label: "+967",
      country: "Yemen",
      telLength: 9
    },
    {
      value: "+260",
      label: "+260",
      country: "Zambia",
      telLength: 9
    },
    {
      value: "+263",
      label: "+263",
      country: "Zimbabwe",
      telLength: 9
    }
  ]
export default data;