// React Modules
import React from "react";
import PropTypes from "prop-types";

// Application Modules
import Resize from "./resize.component.jsx";
import DownArrow from "../icons/mdArrowDropdown.component.jsx";
import UpArrow from "../icons/mdArrowDropup.component.jsx";
import * as Styles from "./table.stylesheet.js";

const Th = ({ id, label, name, sort, sortTable, sortable, children, minWidth, width = 100, maxWidth, isLastColumn, index }) => {
  
  // Sort table using index
  var transformTh = (label ? label.toString() : id ? id.toString() : "");

  const sortColumn = sort && Object.keys(sort)[0]
  var currentSortDirection = sort && Object.values(sort)[0];
  switch (currentSortDirection) {
    case "ASC":
      currentSortDirection = 1
      break;
    case "DES":
      currentSortDirection = -1
      break;
    case "INI":
      currentSortDirection = 0
      break;
  }
  
  var sortDirection = 1; // Set default sort to 1 on `sortTable`
  
  // Check if sorting is in dec order
  if (sort && sortColumn === id && currentSortDirection === -1) sortDirection = 0;
  // Check if sorting is in reset order
  else if (sort && sortColumn === id && currentSortDirection === 0) sortDirection = 1;
  // Check if sorting is in asc order
  else if (sort && sortColumn === id && currentSortDirection === 1) sortDirection = -1;

  const renderTh = () => {
    if (name === "filter") return null;
    if (sortable){
      return (
        <button
          name={name}
          value={(sortDirection ? JSON.stringify({ [id]: sortDirection }) : "{}")}
          onClick={sortTable}
          style={{ width: "100%" }}>
          {transformTh}
          {sortColumn === id && currentSortDirection === -1 ? <DownArrow className="icon" /> : null}
          {sortColumn === id && currentSortDirection === 1 ? <UpArrow className="icon" /> : null}
        </button>
      )
    }
    return transformTh
  }
  return(
    <Styles.Th className="tc-th" index={index} style={{ flex: `${width} 0 auto`, width: `${width}px`, minWidth: `${minWidth}px`, maxWidth: `${maxWidth}px` }}>
      <React.Fragment>
        {renderTh()}

        {children}
      </React.Fragment>
      {!isLastColumn ? <Resize id={id} /> : null }
    </Styles.Th>
  );
}

Th.propTypes = {
  th: PropTypes.object,
  name: PropTypes.string,
  id: PropTypes.any,
  sort: PropTypes.object,
  sortTable: PropTypes.func,
  sortable: PropTypes.number,
  children: PropTypes.node
}

export default Th;
