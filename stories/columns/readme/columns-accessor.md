The `accessor` column property enables the selection of values from embedded data structures.
The returned value will then be used for rendering, sorting and filtering.

```js
import React from "react";

import Table from "react-table-component";
const data = {[
  {
    "_id": "5844822be1ea02fe2b261ab1",
    "accounts": [
      {
        "balance": "$3,422.52"
      }
    ],
    "user": {
      "age": 100,
      "name": "Brittany Torres",
      "email": "brittanytorres@zenolux.com"
    },
    "isActive": false
  },
  {
    "_id": "5844822b3e9c1401b8db0871",
    "accounts": [
      {
        "balance": "$2,122.79"
      },
      {
        "balance": "$1,162.92"
      }
    ],
    "user": {
      "age": 34,
      "name": "Dorothy Phillips",
      "email": "dorothyphillips@quilm.com"
    },
    "isActive": false
  },
  {
    "_id": "5844822b26f2fd9d3a0e02db",
    "accounts": [
      {
        "balance": "$3,519.32"
      }
    ],
    "user": {
      "age": 32,
      "name": "Stacie Vasquez",
      "email": "stacievasquez@frosnex.com"
    },
    "isActive": true
  }
]};

const Accessor = () => {
  return <Table 
    data={data}
    filterable
    columns={[
      { id: "balance", label: "Remaining Balance", accessor: (row) => row.accounts[0].balance},
      { id: "user", accessor: (row) => row.user.name },
      { id: "isActive", label: "Active" }
    ]} />
}

export default Accessor;
```
