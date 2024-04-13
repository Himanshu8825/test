// Slider.jsx
import React from "react";
import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import {
  updateHeight,
  updateWeight,
} from "../redux/Reducers/AdditionalDetailsReducers";

const iOSBoxShadow =
  "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

const IOSSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#0a84ff" : "#A92525",
  height: 5,
  padding: "15px 0",
  "& .MuiSlider-thumb": {
    height: 10,
    width: 10,
    backgroundColor: "#A92525",
    boxShadow: "0 0 2px 0px rgba(0, 0, 0, 0.1)",
    "&:focus, &:hover, &.Mui-active": {
      boxShadow: "0px 0px 3px 1px rgba(0, 0, 0, 0.1)",
      "@media (hover: none)": {
        boxShadow: iOSBoxShadow,
      },
    },
    "&:before": {
      boxShadow:
        "0px 0px 1px 0px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 1px 0px rgba(0,0,0,0.12)",
    },
  },
  "& .MuiSlider-valueLabel": {
    fontSize: 12,
    fontWeight: "normal",
    top: -6,
    backgroundColor: "unset",
    color: theme.palette.text.primary,
    "&::before": {
      display: "none",
    },
    "& *": {
      background: "transparent",
      color: theme.palette.mode === "dark" ? "#fff" : "#fff ",
      backgroundColor: "#A92525",
      height: 30,
      width: 30,
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px 0",
    },
  },
  "& .MuiSlider-track": {
    border: "none",
    height: 5,
  },
  "& .MuiSlider-rail": {
    opacity: 0.5,
    boxShadow: "inset 0px 0px 4px -2px #000",
    backgroundColor: "#d0d0d0",
  },
}));

const CustomizedSlider = ({ label, value }) => {
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    if (label === "Height") {
      dispatch(updateHeight(newValue));
    } else if (label === "Weight (KGs)") {
      dispatch(updateWeight(newValue));
    }
  };

  return (
    <Box sx={{ width: 480 }}>
      <h2 className="text-lg font-semibold font-montserrat  pb-2">{label}</h2>
      <IOSSlider
        aria-label={`${label} Slider`}
        value={value}
        valueLabelDisplay="on"
        onChange={handleChange}
      />
    </Box>
  );
};

export default CustomizedSlider;
