// React Modules
import React from "react";
import PropTypes from "prop-types";

// Application Modules
import Td from "./td.component.jsx";
import * as Styles from "./table.stylesheet.js";

const Tr = ({ columns, showIndex, selectable, selectRow, row, index, activeRow}) => {
  const renderTd = () => columns.map((column, index) => <Td key={index} td={row[column.id]} {...column} row={row}/>)

  return (
    <Styles.Tr className={(activeRow ? "tc-tr active" : "tc-tr")} activeRow={activeRow}>
      {selectable ?
        <Td className="index" index maxWidth={20}>
          <input type="checkbox" onChange={() => selectRow(row)}/>
        </Td>
      : null}
      {showIndex ? <Td td={index + 1} className="index" index maxWidth={65}/> : null}
      {row && columns && renderTd()}
    </Styles.Tr>
  );
}

Tr.propTypes = {
  showIndex: PropTypes.bool,
  row: PropTypes.object,
  index: PropTypes.number,
  activeRow: PropTypes.bool
}

export default Tr;
