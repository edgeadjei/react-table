```js
import React from "react";

import Table from "react-table-component";
import data from "./table.mock.json";

const Default = () => {
  return (
    <Table
      data={data}
      columns={[
        { id: "_id" },
        { id: "balance" },
        { id: "age", sortMethod: (a, b, sortDirection) => console.log(a, b, sortDirection)},
        { id: "name" },
        { id: "email" },
        { id: "isActive"}
      ]} />
  )
}

export default Default;
```

Open browser console for insight on the sortMethod variables a and b after sorting the age column.
