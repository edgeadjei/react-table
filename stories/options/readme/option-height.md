```js
import React from "react";

import Table from "@edgesyntax/react-table";
import data from "./table.mock.json";

const Default = () => {
  return (
    <Table
      data={data}
      height={400}/>
  )
}

export default Default;
```

The `height` option allows you to have a fixed header and footer with a vertical scroll body
