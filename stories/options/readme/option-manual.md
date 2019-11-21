```js
import React from "react";

import Table from "@edgesyntax/react-table";
import data from "./table.mock.json";

const Default = () => {
  return <Table manual />
}

export default Default;
```
**Prevents table from managing internal state i.e, Filtering, Sorting, Page Size, Pagination**

*Mainly used for server rendered tables*
