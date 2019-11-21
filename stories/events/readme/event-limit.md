```js
import React from "react";

import Table from "react-table-component";
import data from "./table.mock.json";

const Default = () => {
  return <Table 
    pageSize={25} 
    onPageSizeChange={(response) => console.log(response)} />) />
}

export default Default;
```

Open browser console to view response
