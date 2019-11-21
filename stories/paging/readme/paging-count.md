```js
import React from "react";

import Table from "react-table-component";
import data from "./table.mock.json";

const Default = () => {
  return <Table count={400} />
}

export default Default;
```

Used to override the table generated row count.

*Mainly used for server rendered tables*
