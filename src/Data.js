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

const selectPlace = [
  {
    name: "country",
    label: "Country",
    options: ["India", "USA", "Pakistan", "Nepal", "Australia", "Bangladesh"],
  },
  {
    name: "state",
    label: "State",
    options: [
      "Bihar",
      "Jharkhand",
      "UP",
      "MP",
      "Kerala",
      "Maharashtra",
      "Nagpur",
    ],
  },
  {
    name: "city",
    label: "City",
    options: [
      "Patna",
      "Aurangabad",
      "Samastipur",
      "Muzaffarpur",
      "Ara",
      "Chhapra",
      "Darbhanga",
    ],
  },
];

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
    options: ["", "Doctor", "Engineer", "Advocate", "Gov Job"],
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

export {
  inputFields,
  selectPlace,
  radioGroups,
  additionalRadio,
  carrerData,
  faimilyData,
};
