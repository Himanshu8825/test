const inputFields = [
  {
    label: "Bride/Groom - First Name",
    name: "firstName",
    type: "text",
  },
  {
    label: "Bride/Groom - Middle Name",
    name: "middleName",
    type: "text",
  },
  {
    label: "Bride/Groom - Last Name",
    name: "lastName",
    type: "text",
  },
  {
    label: "Date Of Birth",
    name: "dateOfBirth",
    type: "date",
  },
  {
    label: "Time Of Birth",
    name: "timeOfBirth",
    type: "time",
  },
];

const selectPlace = {
  India: {
    states: [
      {
        name: "Bihar",
        cities: [
          "Patna",
          "Aurangabad",
          "Samastipur",
          "Muzaffarpur",
          "Ara",
          "Chhapra",
          "Darbhanga",
        ],
      },
      {
        name: "Maharashtra",
        cities: [
          "Mumbai",
          "Pune",
          "Nagpur",
          "Nashik",
          "Aurangabad",
          "Solapur",
          "Thane",
        ],
      },
      {
        name: "Uttar Pradesh",
        cities: [
          "Lucknow",
          "Kanpur",
          "Varanasi",
          "Agra",
          "Meerut",
          "Allahabad",
          "Ghaziabad",
        ],
      },
      {
        name: "Kerala",
        cities: [
          "Thiruvananthapuram",
          "Kochi",
          "Kozhikode",
          "Thrissur",
          "Kollam",
          "Alappuzha",
          "Palakkad",
        ],
      },
      {
        name: "Rajasthan",
        cities: [
          "Jaipur",
          "Jodhpur",
          "Udaipur",
          "Ajmer",
          "Kota",
          "Bikaner",
          "Alwar",
        ],
      },
    ],
  },
  USA: {
    states: [
      {
        name: "California",
        cities: [
          "Los Angeles",
          "San Francisco",
          "San Diego",
          "Sacramento",
          "San Jose",
          "Fresno",
          "Oakland",
        ],
      },
      {
        name: "New York",
        cities: [
          "New York City",
          "Buffalo",
          "Rochester",
          "Syracuse",
          "Albany",
          "Yonkers",
          "Utica",
        ],
      },
      {
        name: "Texas",
        cities: [
          "Houston",
          "Dallas",
          "Austin",
          "San Antonio",
          "Fort Worth",
          "El Paso",
          "Arlington",
        ],
      },
      {
        name: "Florida",
        cities: [
          "Miami",
          "Orlando",
          "Tampa",
          "Jacksonville",
          "Fort Lauderdale",
          "Tallahassee",
          "Pensacola",
        ],
      },
      {
        name: "Illinois",
        cities: [
          "Chicago",
          "Aurora",
          "Rockford",
          "Joliet",
          "Naperville",
          "Springfield",
          "Peoria",
        ],
      },
    ],
  },
  Pakistan: {
    states: [
      {
        name: "Punjab",
        cities: [
          "Lahore",
          "Karachi",
          "Faisalabad",
          "Rawalpindi",
          "Multan",
          "Gujranwala",
          "Sargodha",
        ],
      },
      {
        name: "Sindh",
        cities: [
          "Karachi",
          "Hyderabad",
          "Sukkur",
          "Larkana",
          "Mirpur Khas",
          "Shikarpur",
          "Jacobabad",
        ],
      },
      {
        name: "Khyber Pakhtunkhwa",
        cities: [
          "Peshawar",
          "Abbottabad",
          "Mardan",
          "Swat",
          "Nowshera",
          "Kohat",
          "Dera Ismail Khan",
        ],
      },
      {
        name: "Balochistan",
        cities: [
          "Quetta",
          "Gwadar",
          "Turbat",
          "Khuzdar",
          "Chaman",
          "Sibi",
          "Nushki",
        ],
      },
      {
        name: "Gilgit-Baltistan",
        cities: [
          "Gilgit",
          "Skardu",
          "Chilas",
          "Astore",
          "Hunza",
          "Ghizer",
          "Diamer",
        ],
      },
    ],
  },
  Nepal: {
    states: [
      {
        name: "Province No. 1",
        cities: [
          "Biratnagar",
          "Birgunj",
          "Dharan",
          "Biratnagar",
          "Itahari",
          "Bhadrapur",
          "Inaruwa",
        ],
      },
      {
        name: "Province No. 2",
        cities: [
          "Janakpur",
          "Birgunj",
          "Biratnagar",
          "Hetauda",
          "Dharan",
          "Rajbiraj",
          "Lahan",
        ],
      },
      {
        name: "Bagmati Province",
        cities: [
          "Kathmandu",
          "Bhaktapur",
          "Lalitpur",
          "Kirtipur",
          "Madhyapur Thimi",
          "Banepa",
          "Dhulikhel",
        ],
      },
      {
        name: "Gandaki Province",
        cities: [
          "Pokhara",
          "Lamjung",
          "Baglung",
          "Beni",
          "Ghiring",
          "Bhirkot",
          "Khairenitar",
        ],
      },
      {
        name: "Lumbini Province",
        cities: [
          "Butwal",
          "Nepalgunj",
          "Bhairahawa",
          "Tansen",
          "Bardaghat",
          "Ghorahi",
          "Kapilvastu",
        ],
      },
    ],
  },
  Australia: {
    states: [
      {
        name: "New South Wales",
        cities: [
          "Sydney",
          "Newcastle",
          "Wollongong",
          "Central Coast",
          "Port Macquarie",
          "Coffs Harbour",
          "Tamworth",
        ],
      },
      {
        name: "Victoria",
        cities: [
          "Melbourne",
          "Geelong",
          "Ballarat",
          "Bendigo",
          "Shepparton",
          "Melton",
          "Mildura",
        ],
      },
      {
        name: "Queensland",
        cities: [
          "Brisbane",
          "Gold Coast",
          "Sunshine Coast",
          "Townsville",
          "Cairns",
          "Toowoomba",
          "Mackay",
        ],
      },
      {
        name: "Western Australia",
        cities: [
          "Perth",
          "Mandurah",
          "Bunbury",
          "Geraldton",
          "Albany",
          "Kalgoorlie",
          "Fremantle",
        ],
      },
      {
        name: "South Australia",
        cities: [
          "Adelaide",
          "Mount Gambier",
          "Whyalla",
          "Murray Bridge",
          "Port Pirie",
          "Port Augusta",
          "Port Lincoln",
        ],
      },
    ],
  },
};

const radioGroups = [
  {
    label: "Manglik Status",
    name: "manglikStatus",
    options: [
      { id: "manglikYes", value: "Yes", label: "Yes" },
      { id: "manglikNo", value: "No", label: "No" },
      { id: "manglikPartials", value: "Partials", label: "Partials" },
      { id: "manglikNotSure", value: "Not Sure", label: "Not Sure" },
    ],
  },
  {
    label: "Horoscope Matching",
    name: "horoscopeMatching",
    options: [
      { id: "horoscopeRequired", value: "Required", label: "Required" },
      {
        id: "horoscopeNotRequired",
        value: "Not Required",
        label: "Not Required",
      },
      {
        id: "horoscopeNotImportant",
        value: "Not Important",
        label: "Not Important",
      },
    ],
  },
];

const additionalRadio = [
  {
    title: "Open/Plan to Relocate in Future",
    name: "relocate",
    options: ["Yes", "No", "Not Sure"],
  },
  {
    title: "Diet Type",
    name: "dietType",
    options: [
      "Vegetarian",
      "Non - Vegetarian",
      "Occasionally Non - Vegetarian",
      "Eggetarian",
      "Vegan",
    ],
  },
  {
    title: "Alcohol Consumption Preference",
    name: "alcoholPreference",
    options: ["Regular", "Occasional", "Social", "Not at all"],
  },
  {
    title: "Smoking Preference",
    name: "smokingPreference",
    options: ["Regular", "Occasional", "Social", "Not at all"],
  },
  {
    title: "Martial Status",
    name: "maritalStatus",
    options: ["Single", "Divorced", "Awaiting Divorce", "Widow or Widower"],
  },
];

const carrerData = [
  {
    label: "Education",
    type: "radio",
    options: [
      "High School and Below",
      "Associate / Diploma",
      "Bachelor's Degree",
      "Master's Degree",
      "Doctorate",
    ],
    name: "education",
  },
  {
    label: "Highest Qualification",
    type: "text",
    name: "highestQualification",
  },
  {
    label: "School / University",
    type: "text",
    name: "schoolOrUniversity",
  },
  {
    label: "Profession",
    type: "select",
    options: ["Profession", "Doctor", "Engineer", "Advocate", "Gov Job"],
    name: "profession",
  },
  {
    label: "Current Designation",
    type: "text",
    name: "currentDesignation",
  },
  {
    label: "Previous Occupation",
    type: "text",
    name: "previousOccupation",
  },
  {
    label: "Approximate Annual Income",
    type: "radio",
    options: [
      "Indian Rupee (INR)",
      "United States Dollar (USD)",
      "United Arab Emirates Dirham (AED)",
      "United Kingdom Pound (GBP)",
    ],
    name: "annualIncomeType",
  },
  {
    label: "Annual Income",
    type: "text",
    name: "annualIncome",
  },
];

const faimilyData = [
  {
    label: "Father’s Name",
    names: ["fatherFirstName", "fatherMiddleName", "fatherLastName"],
    placeholders: ["First Name", "Middle Name", "Last Name"],
  },
  {
    label: "Father’s Occupation",
    name: "fatherOccupation",
    placeholder: "Father’s Occupation",
  },
  {
    label: "Mother’s Name",
    names: ["motherFirstName", "motherMiddleName", "motherLastName"],
    placeholders: ["First Name", "Middle Name", "Last Name"],
  },
  {
    label: "Mother’s Occupation",
    name: "motherOccupation",
    placeholder: "Mother’s Occupation",
  },
];

const profileData = [
  {
    age: "40yrs , 5’7”",
    caste: "Brahmin , Hindu",
  },
  {
    dob: "03/10/1993",
    birthPlace: "Delhi, India",
  },
  {
    education: "B-tech, M-tech",
    maritalStatus: "Never Married",
  },
  {
    occupation: "Software Engineer",
    diet: "Vegetarian",
  },
];



export {
  inputFields,
  selectPlace,
  radioGroups,
  additionalRadio,
  carrerData,
  faimilyData,
  profileData,
  
};
