// React Modules
import React from "react";
import PropTypes from "prop-types";

// Application Modules
import Th from "./th.component.jsx";
import * as Styles from "./table.stylesheet.js";

const Thead = ({ columns, showIndex, selectable, sort, sortable, filter, filterable, filterTable, sortTable, height, selectAllRows}) => {
  if (!columns || !columns.length) return null;
  
  const renderThead = () => {
    if (!columns || !columns.length) return null;
    return columns.map((column, index) => {
      const shouldSort = sortable && sortable.length && sortable.indexOf(column.id) !== -1 ? 1 : !sortable || !sortable.length ? 1 : 0;
      return <Th 
        name="sort"
        key={index}
        {...column}
        sort={sort}
        sortable={shouldSort}
        sortTable={sortTable}
        isLastColumn={columns && index + 1 === columns.length}/>
    });
  }
  const renderFilters = () => {
    if(!columns || !columns.length) return null;
    return columns.map((column, index) => {
      const filterValue = column && filter && filter[column.id];
      const shouldFilter = filterable && filterable.length && filterable.indexOf(column.id) !== -1 ? 1 : !filterable || !filterable.length ? 1 : 0;
      return <Th 
        name="filter"
        key={index}
        {...column}
        isLastColumn={columns && index + 1 === columns.length}>
        {shouldFilter && !column.filter? 
          <input
            name={column.id}
            type="text"
            value={(String(filterValue) !== "undefined" ? filterValue : "")}
            onChange={filterTable}
            className="tc-filter" />
        : null }
        {shouldFilter && column.filter ? <column.filter 
          columnName={column.id}
          onChange={filterTable} 
          filter={filterValue}/> : null}
        </Th>
    });
  }
  
  return(
    <Styles.Thead className="tc-thead" data-height={height}>
      <Styles.Tr className="tc-tr">
        {selectable ?
          <Th className="index" index maxWidth={20}>
            <input type="checkbox" onChange={() => selectAllRows()}/>
          </Th>
        : null}
        {showIndex ? <Th className="index" index maxWidth={65}/> : null}
        {renderThead()}
      </Styles.Tr>
      {filterable ? 
        <Styles.Tr className="tc-tr">
          {selectable ?
            <Th className="index" index maxWidth={20}></Th>
          : null}
          {showIndex ? <Th className="index" index maxWidth={65}/> : null}
          {renderFilters()}
        </Styles.Tr> 
      : null}
    </Styles.Thead>
  )
}

Thead.propTypes = {
  columns: PropTypes.array,
  showIndex: PropTypes.bool,
  sort: PropTypes.object,
  sortable: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  filter: PropTypes.object,
  filterable: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  filterTable: PropTypes.func,
  sortTable: PropTypes.func
}

export default Thead;
