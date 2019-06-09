import React from "react";
import Autosuggest from "react-autosuggest";
import PropTypes from "prop-types";
import "./autoComplete.css";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import symbolsList from "../utils/symbolsList";

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : symbolsList.filter(
        lang => lang.id.toLowerCase().slice(0, inputLength) === inputValue
      );
};

const getSuggestionValue = suggestion => suggestion.id;

const renderSuggestion = suggestion => <div>{suggestion.id}</div>;

class AutoComplete extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      suggestions: [],
      isFocus: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { handleChange } = this.props;
    if (this.state.value !== prevState.value) {
      handleChange(this.state.value);
    }
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: method === "enter" ? "" : newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  handleFocus = () => {
    this.setState({
      isFocus: true
    });
  };

  handleBlur = () => {
    this.setState({
      isFocus: false
    });
  };

  handleClear = () => {
    this.setState({
      value: ""
    });
  };

  render() {
    const { value, suggestions, isFocus } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: "Search",
      value,
      onChange: this.onChange
    };

    const { handleSubmit } = this.props;

    return (
      <form
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        action=""
        onSubmit={handleSubmit}
        className="form-container active-form"
      >
        <Autosuggest
          suggestions={suggestions.slice(0, 10)}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          highlightFirstSuggestion
        />
        <button
          type="button"
          onMouseDown={this.handleClear}
          className="btn-clear"
          style={{ display: isFocus ? "block" : "none" }}
        >
          <ClearIcon className="clear-icon" />
        </button>
        <div className="btn-submit">
          <SearchIcon className="search-icon" />
        </div>
      </form>
    );
  }
}

AutoComplete.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default AutoComplete;
