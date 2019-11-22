// React Modules
import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import * as Styles from "./table.stylesheet.js";

const Resize = ({ id, resizeTable }) => {
  const [resize, setResize] = useState({column: id, resizing: false});
  useEffect(() => {
    if(resize.resizing) {
      document.addEventListener('mousemove', resizing);
      document.addEventListener('mouseup', stopResize);
    } else {
      document.removeEventListener('mousemove', resizing);
      document.removeEventListener('mouseup', stopResize);
    }
    return () => {
      document.removeEventListener('mousemove', resizing);
      document.removeEventListener('mouseup', stopResize);
    }
  }, [resize.resizing])
  const startResize = (event) => {
    const initialWidth = event.target.parentElement.getBoundingClientRect().width;
    setResize({...resize, resizing: true, initialPos: event.clientX, initialWidth});
  }
  const resizing = (event) => {
    const {resizing, initialWidth, initialPos} = resize;
    if(resizing){
      const width = Math.max(initialWidth + event.pageX - initialPos, 13);
      resizeTable({...resize, width})
    }
  }
  const stopResize = () => setResize({...resize, resizing: false});
  return (
    <Styles.Resizer
      className="tc-th-resizer"
      onMouseDown={startResize} />
  );
}

Resize.propTypes = {
  id: PropTypes.string
}

export default Resize;