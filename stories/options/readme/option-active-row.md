```js
import React from "react";

import Table from "@edgesyntax/react-table";
import data from "./table.mock.json";

const Default = () => {
  return (
    <Table
      data={data}
      showIndex
      activeRow={{id: "_id", value: "5844822b3e9c1401b8db0871"}}/>
  )
}

export default Default;
```
