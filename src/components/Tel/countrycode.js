const country6digit = ['+376', '+672', '+682', '+299'];
const country7digit = ['+1684', '+1264', '+1268', '+297', '+501', '+1441', '+246', '+1345', '+269', '+1767', '+240', '+500', '+679', '+1473', '+1671', '+354', '+231', '+692', '+691', '+1664', '+1670', '+680', '+1869', '+1758', '+1784', '+685', '+690', '+1868', '+1649', '+678'];
const country8digit = ['+374', '+973', '+229', '+975', '+591', '+387', '+267', '+226', '+257', '+238', '+236', '+242', '+506', '+357', '+45', '+253', '+503', '+291', '+298', '+689', '+241', '+220', '+350', '+502', '+224', '+245', '+592', '+509', '+379', '+504', '+852', '+686', '+383', '+965', '+371', '+961', '+266', '+423', '+370', '+352', '+853', '+389', '+265', '+960', '+223', '+356', '+222', '+230', '+262', '+373', '+377', '+976', '+382', '+95', '+264', '+674', '+687', '+505', '+227', '+683', '+47', '+968', '+970', '+507', '+675', '+595', '+974', '+262', '+290', '+508', '+378', '+239', '+381', '+248', '+232', '+65', '+386', '+677', '+252', '+268', '+670', '+228', '+676', '+993', '+688', '+681'];
const country9digit = ['+93', '+355', '+213', '+244', '+994', '+375', '+673', '+359', '+855', '+237', '+235', '+385', '+53', '+420', '+593', '+20', '+372', '+995', '+36', '+353', '+39', '+225', '+962', '+996', '+856', '+218', '+261', '+258', '+51', '+48', '+351', '+40', '+250', '+966', '+221', '+421', '+27', '+34', '+94', '+597', '+46', '+41', '+963', '+886', '+992', '+255', '+66', '+216', '+90', '+256', '+971', '+598', '+998', '+967', '+260', '+263'];
const country10digit = ['+61', '+1242', '+880', '+1246', '+32', '+1', '+57', '+1809', '+251', '+358', '+233', '+30', '+91', '+98', '+964', '+972', '+1876', '+81', '+7', '+254', '+82', '+850', '+60', '+52', '+212', '+977', '+31', '+599', '+64', '+234', '+92', '+63', '+1787', '+7', '+249', '+380', '+44', '+1', '+84', '+1284', '+1340'];
const country11digit = ['+54', '+55', '+56', '+86', '+33', '+62', '+58'];
const country12digit = ['+43', '+49'];

const countryCodes = [
    {
        "countryCode": "+93",
        "length": 9
    },
    {
        "countryCode": "+355",
        "length": 9
    },
    {
        "countryCode": "+213",
        "length": 9
    },
    {
        "countryCode": "+1684",
        "length": 7
    },
    {
        "countryCode": "+376",
        "length": 6
    },
    {
        "countryCode": "+244",
        "length": 9
    },
    {
        "countryCode": "+1264",
        "length": 7
    },
    {
        "countryCode": "+672",
        "length": 6
    },
    {
        "countryCode": "+1268",
        "length": 7
    },
    {
        "countryCode": "+54",
        "length": 11
    },
    {
        "countryCode": "+374",
        "length": 8
    },
    {
        "countryCode": "+297",
        "length": 7
    },
    {
        "countryCode": "+61",
        "length": 9
    },
    {
        "countryCode": "+43",
        "length": 12
    },
    {
        "countryCode": "+994",
        "length": 9
    },
    {
        "countryCode": "+1242",
        "length": 10
    },
    {
        "countryCode": "+973",
        "length": 8
    },
    {
        "countryCode": "+880",
        "length": 10
    },
    {
        "countryCode": "+1246",
        "length": 10
    },
    {
        "countryCode": "+375",
        "length": 9
    },
    {
        "countryCode": "+32",
        "length": 10
    },
    {
        "countryCode": "+501",
        "length": 7
    },
    {
        "countryCode": "+229",
        "length": 8
    },
    {
        "countryCode": "+1441",
        "length": 7
    },
    {
        "countryCode": "+975",
        "length": 8
    },
    {
        "countryCode": "+591",
        "length": 8
    },
    {
        "countryCode": "+387",
        "length": 8
    },
    {
        "countryCode": "+267",
        "length": 8
    },
    {
        "countryCode": "+55",
        "length": 11
    },
    {
        "countryCode": "+246",
        "length": 7
    },
    {
        "countryCode": "+673",
        "length": 9
    },
    {
        "countryCode": "+359",
        "length": 9
    },
    {
        "countryCode": "+226",
        "length": 8
    },
    {
        "countryCode": "+257",
        "length": 8
    },
    {
        "countryCode": "+855",
        "length": 9
    },
    {
        "countryCode": "+237",
        "length": 9
    },
    {
        "countryCode": "+1",
        "length": 10
    },
    {
        "countryCode": "+238",
        "length": 8
    },
    {
        "countryCode": "+1345",
        "length": 7
    },
    {
        "countryCode": "+236",
        "length": 8
    },
    {
        "countryCode": "+235",
        "length": 9
    },
    {
        "countryCode": "+56",
        "length": 11
    },
    {
        "countryCode": "+86",
        "length": 11
    },
    {
        "countryCode": "+57",
        "length": 10
    },
    {
        "countryCode": "+269",
        "length": 7
    },
    {
        "countryCode": "+242",
        "length": 8
    },
    {
        "countryCode": "+682",
        "length": 6
    },
    {
        "countryCode": "+506",
        "length": 8
    },
    {
        "countryCode": "+385",
        "length": 9
    },
    {
        "countryCode": "+53",
        "length": 9
    },
    {
        "countryCode": "+357",
        "length": 8
    },
    {
        "countryCode": "+420",
        "length": 9
    },
    {
        "countryCode": "+45",
        "length": 8
    },
    {
        "countryCode": "+253",
        "length": 8
    },
    {
        "countryCode": "+1767",
        "length": 7
    },
    {
        "countryCode": "+1809",
        "length": 10
    },
    {
        "countryCode": "+593",
        "length": 9
    },
    {
        "countryCode": "+20",
        "length": 9
    },
    {
        "countryCode": "+503",
        "length": 8
    },
    {
        "countryCode": "+240",
        "length": 7
    },
    {
        "countryCode": "+291",
        "length": 8
    },
    {
        "countryCode": "+372",
        "length": 9
    },
    {
        "countryCode": "+251",
        "length": 10
    },
    {
        "countryCode": "+500",
        "length": 7
    },
    {
        "countryCode": "+298",
        "length": 8
    },
    {
        "countryCode": "+679",
        "length": 7
    },
    {
        "countryCode": "+358",
        "length": 10
    },
    {
        "countryCode": "+33",
        "length": 11
    },
    {
        "countryCode": "+689",
        "length": 8
    },
    {
        "countryCode": "+241",
        "length": 8
    },
    {
        "countryCode": "+220",
        "length": 8
    },
    {
        "countryCode": "+995",
        "length": 9
    },
    {
        "countryCode": "+49",
        "length": 12
    },
    {
        "countryCode": "+233",
        "length": 10
    },
    {
        "countryCode": "+350",
        "length": 8
    },
    {
        "countryCode": "+30",
        "length": 10
    },
    {
        "countryCode": "+299",
        "length": 6
    },
    {
        "countryCode": "+1473",
        "length": 7
    },
    {
        "countryCode": "+1671",
        "length": 7
    },
    {
        "countryCode": "+502",
        "length": 8
    },
    {
        "countryCode": "+224",
        "length": 8
    },
    {
        "countryCode": "+245",
        "length": 8
    },
    {
        "countryCode": "+592",
        "length": 8
    },
    {
        "countryCode": "+509",
        "length": 8
    },
    {
        "countryCode": "+379",
        "length": 8
    },
    {
        "countryCode": "+504",
        "length": 8
    },
    {
        "countryCode": "+852",
        "length": 8
    },
    {
        "countryCode": "+36",
        "length": 9
    },
    {
        "countryCode": "+354",
        "length": 7
    },
    {
        "countryCode": "+91",
        "length": 10
    },
    {
        "countryCode": "+62",
        "length": 11
    },
    {
        "countryCode": "+98",
        "length": 10
    },
    {
        "countryCode": "+964",
        "length": 10
    },
    {
        "countryCode": "+353",
        "length": 9
    },
    {
        "countryCode": "+972",
        "length": 10
    },
    {
        "countryCode": "+39",
        "length": 9
    },
    {
        "countryCode": "+225",
        "length": 9
    },
    {
        "countryCode": "+1876",
        "length": 10
    },
    {
        "countryCode": "+81",
        "length": 10
    },
    {
        "countryCode": "+962",
        "length": 9
    },
    {
        "countryCode": "+7",
        "length": 10
    },
    {
        "countryCode": "+254",
        "length": 10
    },
    {
        "countryCode": "+686",
        "length": 8
    },
    {
        "countryCode": "+82",
        "length": 10
    },
    {
        "countryCode": "+850",
        "length": 10
    },
    {
        "countryCode": "+383",
        "length": 8
    },
    {
        "countryCode": "+965",
        "length": 8
    },
    {
        "countryCode": "+996",
        "length": 9
    },
    {
        "countryCode": "+856",
        "length": 9
    },
    {
        "countryCode": "+371",
        "length": 8
    },
    {
        "countryCode": "+961",
        "length": 8
    },
    {
        "countryCode": "+266",
        "length": 8
    },
    {
        "countryCode": "+231",
        "length": 7
    },
    {
        "countryCode": "+218",
        "length": 9
    },
    {
        "countryCode": "+423",
        "length": 8
    },
    {
        "countryCode": "+370",
        "length": 8
    },
    {
        "countryCode": "+352",
        "length": 8
    },
    {
        "countryCode": "+853",
        "length": 8
    },
    {
        "countryCode": "+389",
        "length": 8
    },
    {
        "countryCode": "+261",
        "length": 9
    },
    {
        "countryCode": "+265",
        "length": 8
    },
    {
        "countryCode": "+60",
        "length": 10
    },
    {
        "countryCode": "+960",
        "length": 8
    },
    {
        "countryCode": "+223",
        "length": 8
    },
    {
        "countryCode": "+356",
        "length": 8
    },
    {
        "countryCode": "+692",
        "length": 7
    },
    {
        "countryCode": "+222",
        "length": 8
    },
    {
        "countryCode": "+230",
        "length": 8
    },
    {
        "countryCode": "+262",
        "length": 8
    },
    {
        "countryCode": "+52",
        "length": 10
    },
    {
        "countryCode": "+691",
        "length": 7
    },
    {
        "countryCode": "+373",
        "length": 8
    },
    {
        "countryCode": "+377",
        "length": 8
    },
    {
        "countryCode": "+976",
        "length": 8
    },
    {
        "countryCode": "+382",
        "length": 8
    },
    {
        "countryCode": "+1664",
        "length": 7
    },
    {
        "countryCode": "+212",
        "length": 10
    },
    {
        "countryCode": "+258",
        "length": 9
    },
    {
        "countryCode": "+95",
        "length": 8
    },
    {
        "countryCode": "+264",
        "length": 8
    },
    {
        "countryCode": "+674",
        "length": 8
    },
    {
        "countryCode": "+977",
        "length": 10
    },
    {
        "countryCode": "+31",
        "length": 10
    },
    {
        "countryCode": "+599",
        "length": 10
    },
    {
        "countryCode": "+687",
        "length": 8
    },
    {
        "countryCode": "+64",
        "length": 10
    },
    {
        "countryCode": "+505",
        "length": 8
    },
    {
        "countryCode": "+227",
        "length": 8
    },
    {
        "countryCode": "+234",
        "length": 10
    },
    {
        "countryCode": "+683",
        "length": 8
    },
    {
        "countryCode": "+1670",
        "length": 7
    },
    {
        "countryCode": "+47",
        "length": 8
    },
    {
        "countryCode": "+968",
        "length": 8
    },
    {
        "countryCode": "+92",
        "length": 10
    },
    {
        "countryCode": "+680",
        "length": 7
    },
    {
        "countryCode": "+970",
        "length": 8
    },
    {
        "countryCode": "+507",
        "length": 8
    },
    {
        "countryCode": "+675",
        "length": 8
    },
    {
        "countryCode": "+595",
        "length": 8
    },
    {
        "countryCode": "+51",
        "length": 9
    },
    {
        "countryCode": "+63",
        "length": 10
    },
    {
        "countryCode": "+48",
        "length": 9
    },
    {
        "countryCode": "+351",
        "length": 9
    },
    {
        "countryCode": "+1787",
        "length": 10
    },
    {
        "countryCode": "+974",
        "length": 8
    },
    {
        "countryCode": "+262",
        "length": 8
    },
    {
        "countryCode": "+40",
        "length": 9
    },
    {
        "countryCode": "+7",
        "length": 10
    },
    {
        "countryCode": "+250",
        "length": 9
    },
    {
        "countryCode": "+290",
        "length": 8
    },
    {
        "countryCode": "+1869",
        "length": 7
    },
    {
        "countryCode": "+1758",
        "length": 7
    },
    {
        "countryCode": "+508",
        "length": 8
    },
    {
        "countryCode": "+1784",
        "length": 7
    },
    {
        "countryCode": "+685",
        "length": 7
    },
    {
        "countryCode": "+378",
        "length": 8
    },
    {
        "countryCode": "+239",
        "length": 8
    },
    {
        "countryCode": "+966",
        "length": 9
    },
    {
        "countryCode": "+221",
        "length": 9
    },
    {
        "countryCode": "+381",
        "length": 8
    },
    {
        "countryCode": "+248",
        "length": 8
    },
    {
        "countryCode": "+232",
        "length": 8
    },
    {
        "countryCode": "+65",
        "length": 8
    },
    {
        "countryCode": "+421",
        "length": 9
    },
    {
        "countryCode": "+386",
        "length": 8
    },
    {
        "countryCode": "+677",
        "length": 8
    },
    {
        "countryCode": "+252",
        "length": 8
    },
    {
        "countryCode": "+27",
        "length": 9
    },
    {
        "countryCode": "+34",
        "length": 9
    },
    {
        "countryCode": "+94",
        "length": 9
    },
    {
        "countryCode": "+249",
        "length": 10
    },
    {
        "countryCode": "+597",
        "length": 9
    },
    {
        "countryCode": "+268",
        "length": 8
    },
    {
        "countryCode": "+46",
        "length": 9
    },
    {
        "countryCode": "+41",
        "length": 9
    },
    {
        "countryCode": "+963",
        "length": 9
    },
    {
        "countryCode": "+886",
        "length": 9
    },
    {
        "countryCode": "+992",
        "length": 9
    },
    {
        "countryCode": "+255",
        "length": 9
    },
    {
        "countryCode": "+66",
        "length": 9
    },
    {
        "countryCode": "+670",
        "length": 8
    },
    {
        "countryCode": "+228",
        "length": 8
    },
    {
        "countryCode": "+690",
        "length": 7
    },
    {
        "countryCode": "+676",
        "length": 8
    },
    {
        "countryCode": "+1868",
        "length": 7
    },
    {
        "countryCode": "+216",
        "length": 9
    },
    {
        "countryCode": "+90",
        "length": 9
    },
    {
        "countryCode": "+993",
        "length": 8
    },
    {
        "countryCode": "+1649",
        "length": 7
    },
    {
        "countryCode": "+688",
        "length": 8
    },
    {
        "countryCode": "+256",
        "length": 9
    },
    {
        "countryCode": "+380",
        "length": 10
    },
    {
        "countryCode": "+971",
        "length": 9
    },
    {
        "countryCode": "+44",
        "length": 10
    },
    {
        "countryCode": "+598",
        "length": 9
    },
    {
        "countryCode": "+998",
        "length": 9
    },
    {
        "countryCode": "+678",
        "length": 7
    },
    {
        "countryCode": "+58",
        "length": 11
    },
    {
        "countryCode": "+84",
        "length": 10
    },
    {
        "countryCode": "+1284",
        "length": 10
    },
    {
        "countryCode": "+1340",
        "length": 10
    },
    {
        "countryCode": "+681",
        "length": 8
    },
    {
        "countryCode": "+967",
        "length": 9
    },
    {
        "countryCode": "+260",
        "length": 9
    },
    {
        "countryCode": "+263",
        "length": 9
    }
]
export default countryCodes;