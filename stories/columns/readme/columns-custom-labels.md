```js
import React from "react";

import Table from "@edgesyntax/react-table";
import data from "./table.mock.json";

const Default = () => {
  return (
    <Table
      data={data}
      columns={[
        {id: "balance", label: "Remaining Balance"},
        {id: "email", label: "Company email"},
        {id: "age", label: "Current Age"}
      ]}/>
  )
}

export default Default;
```
