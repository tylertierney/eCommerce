import { useState } from "react";

const SortFilterArray = ({
  isFiltering,
  setIsFiltering,
  filterSelection,
  setFilterSelection,
  category
}) => {
  const setFilters = (e) => {
    if (e.target.value === "reset") {
      setIsFiltering(false);
    }
    setFilterSelection(e.target.value);
  };

  return (
    <div className="filtersArray">
      <input
        value="rating"
        name={`filtersInputs${category}`}
        id={`rating${category}`}
        type="radio"
        className="displayNone"
        onChange={(e) => setFilters(e)}
      />
      <label htmlFor={`rating${category}`} className="filtersArrayLabels">
        Rating
      </label>

      <input
        value="pricelow"
        name={`filtersInputs${category}`}
        id={`pricelow${category}`}
        type="radio"
        className="displayNone"
        onChange={(e) => setFilters(e)}
      />
      <label htmlFor={`pricelow${category}`} className="filtersArrayLabels">
        Price: Low
      </label>

      <input
        value="pricehigh"
        name={`filtersInputs${category}`}
        id={`pricehigh${category}`}
        type="radio"
        className="displayNone"
        onChange={(e) => setFilters(e)}
      />
      <label htmlFor={`pricehigh${category}`} className="filtersArrayLabels">
        Price: High
      </label>
      <input
        value="reset"
        name={`filtersInputs${category}`}
        id={`reset${category}`}
        type="radio"
        className="displayNone"
        onChange={(e) => setFilters(e)}
      />
      <label htmlFor={`reset${category}`} className="filtersArrayLabels">
        X
      </label>
    </div>
  );
};

export default SortFilterArray;
