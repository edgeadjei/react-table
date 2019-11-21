```js
import React from "react";

import Table from "@edgesyntax/react-table";
import data from "./table.mock.json";

const Default = () => {
  return <Table 
    filterable
    pageSize={25} 
    onFilterChange={(response) => console.log(response)} />) />
}

export default Default;
```

Open browser console to view response
