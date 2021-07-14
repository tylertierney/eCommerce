import { useState } from "react";
import SortFilterArray from "./SortFilterArray";
import { SortFiltersDiv } from "./StyledComponents";

const SortFilters = ({
  isFiltering,
  setIsFiltering,
  filterSelection,
  setFilterSelection,
  category
}) => {
  let caretIcon, visibleOrNot;
  let sortFilterArray = (
    <SortFilterArray
      filterSelection={filterSelection}
      setFilterSelection={setFilterSelection}
      isFiltering={isFiltering}
      setIsFiltering={setIsFiltering}
      category={category}
    />
  );
  if (isFiltering) {
    caretIcon = "\u003E";
    visibleOrNot = "visible";
  } else {
    caretIcon = "\u25BC";
    visibleOrNot = "hidden";
  }

  let downOrSideCaret;
  let hideOrShowFilters;

  downOrSideCaret = (
    <span className="downCaret">&nbsp;&nbsp;{caretIcon}&nbsp;&nbsp;</span>
  );
  hideOrShowFilters = (
    <div className={`sortFilters ${visibleOrNot}`}>{sortFilterArray}</div>
  );

  const changeFilteringOrNot = () => {
    setIsFiltering(!isFiltering);
  };

  return (
    <SortFiltersDiv className="productsContainerHeader">
      <span className="productsContainerHeaderText">{category}</span>
      <div className="sortFilters" onClick={() => changeFilteringOrNot()}>
        <span className="sortBy">Sort</span>
        {downOrSideCaret}
      </div>
      {hideOrShowFilters}
    </SortFiltersDiv>
  );
};

export default SortFilters;
