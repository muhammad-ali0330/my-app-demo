import React from "react";
import PropTypes from "prop-types";
import { alpha, styled } from "@mui/material/styles";
import { pink, orange, purple } from "@mui/material/colors";
import Switch from "@mui/material/Switch";
// import { Link } from "react-router-dom";

// Purple Switch Styles
const PurpleSwitch = styled(Switch)(({ theme }) => ({
  // Unchecked state
  "& .MuiSwitch-thumb": {
    backgroundColor: purple[500], // Thumb color when unchecked
  },
  "& .MuiSwitch-track": {
    backgroundColor: alpha(purple[500], 0.3), // Track color when unchecked
  },
  // Checked state
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: purple[100], // Thumb color when checked (lighter)
    "&:hover": {
      backgroundColor: alpha(purple[500], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: purple[500], // Track color when checked
  },
}));

// Orange Switch Styles
const OrangeSwitch = styled(Switch)(({ theme }) => ({
  // Unchecked state
  "& .MuiSwitch-thumb": {
    backgroundColor: orange[500], // Thumb color when unchecked
  },
  "& .MuiSwitch-track": {
    backgroundColor: alpha(orange[500], 0.3), // Track color when unchecked
  },
  // Checked state
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: orange[100], // Thumb color when checked (lighter)
    "&:hover": {
      backgroundColor: alpha(orange[500], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: orange[500], // Track color when checked
  },
}));

const PinkSwitch = styled(Switch)(({ theme }) => ({
  // Unchecked state
  "& .MuiSwitch-thumb": {
    backgroundColor: pink[500], // Thumb color when unchecked
  },
  "& .MuiSwitch-track": {
    backgroundColor: alpha(pink[500], 0.3), // Track color when unchecked (lighter)
  },
  // Checked state
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: pink[100], // Thumb color when checked (lighter)
    "&:hover": {
      backgroundColor: alpha(pink[500], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: pink[500], // Track color when checked
  },
}));

const label = { inputProps: { "aria-label": "Color switch demo" } };

export default function Navbar(props) {
  const handleColorPurple = () => {
    props.togglePurple();
  };

  const handleColorOrange = () => {
    props.toggleOrange();
  };
  const handleColorPink = () => {
    props.togglePink();
  };
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg bg-body-tertiary bg-${props.mode} border-bottom border-body `}
        data-bs-theme={`${props.mode}`}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="/"
            style={{
              color: "",
            }}
          >
            <strong>{props.title}</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
            </ul>
            <h4 style={{ color: props.mode === "dark" ? "white" : "black" }}>
              Color Themes
            </h4>
            <div>
              <PurpleSwitch
                {...label}
                color="secondary"
                checked={props.themeColor === "purple"}
                onClick={handleColorPurple}
              />
              <OrangeSwitch
                {...label}
                color="warning"
                checked={props.themeColor === "orange"}
                onClick={handleColorOrange}
              />
              {/* <Switch {...label} defaultChecked color="default" /> */}
              <PinkSwitch
                {...label}
                checked={props.themeColor === "pink"}
                onClick={handleColorPink}
              />
            </div>
            <div
              className={`form-check form-switch mx-3 text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = { title: PropTypes.string.isRequired };
