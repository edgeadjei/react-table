All table styles are scoped using the `.react-table-component` prefix making it extremely easy to override the default styles.

You can alternatively override the basic styles using the theme prop.

```js
// React Modules
import React from "react";
import styled from "styled-components";

// Application Modules
import Table from "table.component.jsx";
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
      <Table data={data} {...props} theme={{primaryColor: "blue", secondaryColor: "grey", borderColor: "grey"}}/>
    </Style>
  )
}

export default Main;


```