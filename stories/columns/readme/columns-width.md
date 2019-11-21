```js
import React from "react";

import Table from "react-table-component";
import data from "./table.mock.json";

const Default = () => {
  return (
    <Table
      data={data}
      columns={[
        { id: "balance", label: "Remaining Balance", minWidth: 100 },
        { id: "email", label: "Company email", width: 300 },
        { id: "age", label: "Current Age", minWidth: 100, width: 40, maxWidth: 100 }
      ]}/>
  )
}

export default Default;
```
