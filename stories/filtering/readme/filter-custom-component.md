```js
import React from "react";

import Table from "@edgesyntax/react-table";
import data from "./table.mock.json";

const Default = () => {
  return (
    <Table
      data={data}
      columns={[
        { id: "_id"},
        { id: "balance" },
        { id: "age" },
        { id: "name" },
        { id: "email"},
        {
          id: "isActive", label: "user status", filter: ({columnName, onChange, value}) => (
          <select
            name={columnName}
            onChange={(event) => onChange(event)}
            value={value}>
            <option value="">Show All</option>
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
        )}
      ]}
      filterable />
  )
}

export default Default;
```
