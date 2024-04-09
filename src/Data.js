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

export { inputFields, selectPlace, radioGroups };
