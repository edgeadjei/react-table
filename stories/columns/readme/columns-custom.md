```js
import React from "react";

import Table, {Tr, Td, tableStylesheet} from "../dist/table.js";
import data from "./table.mock.json";

class Custom extends React.Component{
  render(){
    return <Table 
      data={data} 
      columns={[
        { id: "_id" },
        { id: "balance" },
        { id: "age", render: (value, row) => <span style={{color: "red"}}>{value}</span> },
        { id: "name" },
        { id: "email" },
        { id: "isActive", label: "status", render: (value, row) => <span>{value === true ? "Active" : value === false ? "Inactive" : ""}</span>},
        { id: "action", render: (value, row) => {
          return (
            <center>
              <button> edit </button>
              <button> delete </button>
            </center>
          )
        }}
      ]}/>
  }
}

export default Custom;

```
