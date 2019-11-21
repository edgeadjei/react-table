```js
import React from "react";

import Table from "react-table-component";
import data from "./table.mock.json";

const Default = () => {
  return (
    <Table
      data={data}
      showIndex
      dynamicFooter />
  )
}

export default Default;
```

The `dynamicFooter` option hides the footer unless data length exceeds pageSize
