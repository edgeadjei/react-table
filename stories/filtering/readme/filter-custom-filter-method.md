```js
import React from "react";

import Table from "@edgesyntax/react-table";
import data from "./table.mock.json";

const Default = () => {
  return (
    <Table
      data={data}
      columns={[
        { id: "_id" },
        { id: "balance" },
        { id: "age" },
        { id: "name" },
        { id: "email" },
        { id: "isActive", filterMethod:(value, filter) => {
          console.log(value, filter)
          return String(value) === filter
        }}
      ]}
      filterable />
  )
}

export default Default;
```
`value` is the current table value

`filter` is the current filter value

Open browser console for insight on the filterMethod variables value and filter after filtering the isActive column.
