// React Modules
import React from "react";
import JsonTree from "react-json-tree";
import PropTypes from "prop-types";
import * as Styles from "./table.stylesheet.js";

const Td = ({ td, children, render, accessor, row, minWidth, width, maxWidth, index }) => {
  var transformTd;
  if (!width) width = 100;

  const renderTd = (data) => <Styles.Td 
      className={index ? "tc-td index" : "tc-td"}
      index={index}
      style={{ flex: `${width} 0 auto`, width: `${width}px`, minWidth: `${minWidth}px`, maxWidth: `${maxWidth}px` }}>{data}</Styles.Td>
  
  if (render && accessor) return renderTd(render(accessor(row), row))
  else if (render) return renderTd(render(td, row))

  const renderObject = () => <JsonTree data={td} hideRoot={true} theme={{
    tree: ({style}) => ({ style: {...style, backgroundColor: undefined}}),
    label: ({style}) => {},
    arrowSign: {color: "inherit"},
    nestedNodeItemString: () => ({ style: {color: "#999"}}),
    valueText: () => ({ style: {color: "#c0392b"}})
  }}/>

  // Apply Accessor
  if (accessor) td = accessor(row);

  // Check td type
  if (td && React.isValidElement(td)) transformTd = td;
  else if (td && typeof td === "object") transformTd = renderObject();
  else if (td != null || typeof td === "boolean") transformTd = td.toString();
  else if (children) transformTd = children;
  
  return renderTd(transformTd);
}

Td.propTypes = {
  td: PropTypes.any
}

export default Td;
