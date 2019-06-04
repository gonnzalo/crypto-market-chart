import React from "react";
import Switch from "react-switch";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const BtnSwitch = ({ toggleTheme, theme }) => {
  return (
    <div>
      <Switch
        onChange={toggleTheme}
        checked={theme === "dark" && true}
        offColor="#254b6e"
        onColor="#222"
        className="switch-toggle"
        activeBoxShadow="0 0 2px 3px #2fb0c7"
        uncheckedIcon={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 15,
              paddingRight: 2
            }}
          >
            <FontAwesomeIcon icon={faSun} style={{ color: "#f9fb5a" }} />
          </div>
        }
        checkedIcon={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 15,
              paddingRight: 2
            }}
          >
            <FontAwesomeIcon icon={faMoon} style={{ color: "#f9fb5a" }} />
          </div>
        }
      />
    </div>
  );
};

BtnSwitch.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired
};

export default BtnSwitch;
