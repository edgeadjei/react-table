// React Modules
import React from "react";
import styled from "styled-components";

// Application Modules
import Table from "../../../src/table/table.component.jsx";
import data from "../../shared/table.mock.json";

const Style = styled.span`
  .tc-th, .tc-tfoot .tc-td {
    background-color: #d1f2f4;
  }
  .tc-tr:hover {
    color: white
  }
`;

const Main = (props) => {
  return (
    <Style>
      <Table data={data} {...props} theme={{primaryColor: "blue", secondaryColor: "grey"}}/>
    </Style>
  )
}

export default Main;
