```js
import React from "react";

import Table from "react-table-component";
import data from "./table.mock.json";

const Default = () => {
  return (
    <Table
      data={data}
      defaultSort={{ name: "DES" }} />
  )
}

export default Default;
```
