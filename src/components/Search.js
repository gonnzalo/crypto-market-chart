import React from "react";
import PropTypes from "prop-types";
import searchIcon from "../images/search.svg";
import "./search.css";

export default function Search(props) {
  const { handleSubmit, handleChange } = props;

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          onChange={handleChange}
          className="input-search"
          placeholder="Search"
        />
        {/* <button type="submit" className="btn-search">
          <img src={searchIcon} alt="SearchIcon" className="search-icon" />
        </button> */}
      </form>
    </>
  );
}

Search.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};
