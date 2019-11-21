```js
import React from "react";

import Table from "react-table-component";
import data from "./table.mock.json";

const Default = () => {
  return <Table
    filterable
    pageSize={25} 
    onStateChange={(response) => console.log(response)} />) />
}

export default Default;
```

the `onStateChange` prop returns the current state of the table after performing either sorting, paging, filtering etc 

Open browser console to view response
