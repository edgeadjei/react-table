```js
import React from "react";

import Table from "@edgesyntax/react-table";
import data from "./table.mock.json";

const Default = () => {
  return (
    <Table
      data={data}
      columns={[
        {id: "balance"},
        {id: "email"},
        {id: "age"}
      ]}/>
  )
}

export default Default;
```

Only the specified column ids will be rendered