import React from "react";
import PropTypes from "prop-types";

export default function Search(props) {
  const { query, handleSubmit, handleChange } = props;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </>
  );
}

Search.propTypes = {
  query: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};
