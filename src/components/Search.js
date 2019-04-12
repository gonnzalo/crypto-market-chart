import React from "react";

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
