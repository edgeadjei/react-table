import React from 'react';

// Application Modules
import Main from "./shared/main.jsx";

// Readme
import RenderedColumnsReadme from "./columns/readme/columns-rendered.md";
import CustomLabelsReadme from "./columns/readme/columns-custom-labels.md";
import AccessorReadme from "./columns/readme/columns-accessor.md";
import CustomWidthReadme from "./columns/readme/columns-width.md";
import CustomColumnCellReadme from "./columns/readme/columns-custom.md";

export default {
  title: 'Columns',
};
export const renderedColumns = () => <Main columns={[
    { id: "balance" },
    { id: "email" },
    { id: "age" }
  ]} />
export const customLables = () => <Main
  columns={[
    { id: "balance", label: "Remaining Balance" },
    { id: "email", label: "Company email" },
    { id: "age", label: "Current Age" }
  ]} />
export const Accessor = () => <Main
  data={[
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
  ]}
  filterable
  columns={[
    { id: "balance", label: "Remaining Balance", accessor: (row) => row.accounts[0].balance },
    { id: "user", accessor: (row) => row.user.name },
    { id: "isActive", label: "Active" }
  ]} />
export const customWidth = () => < Main
  columns={[
    { id: "balance", label: "Remaining Balance", minWidth: 100 },
    { id: "email", label: "Company email", width: 300 },
    { id: "age", label: "Current Age", minWidth: 100, width: 40, maxWidth: 100 }
  ]} />
export const customColumnCell = () => <Main columns={[
  { id: "_id" },
  { id: "balance" },
  {
    id: "age", render: (value, row) => <span style={{ color: "red" }}>{value}</span>
  },
  { id: "name" },
  { id: "email" },
  { id: "isActive", label: "status", render: (value, row) => <span>{value === true ? "Active" : value === false ? "Inactive" : ""}</span> },
  {
    id: "action", render: (value, row) => {
      return (
        <center>
          <button> edit </button>
          <button> delete </button>
        </center>
      )
    }
  }
  ]} />

renderedColumns.story = {
  name: 'Rendered Columns',
  parameters: {
    readme: {
      sidebar: RenderedColumnsReadme
    }
  }
};
customLables.story = {
  name: 'Custom Lables',
  parameters: {
    readme: {
      sidebar: CustomLabelsReadme
    }
  }
};
Accessor.story = {
  parameters: {
    readme: {
      sidebar: AccessorReadme
    }
  }
};
customWidth.story = {
  name: 'Custom Width',
  parameters: {
    readme: {
      sidebar: CustomWidthReadme
    }
  }
};
customColumnCell.story = {
  name: 'Custom Column Cell',
  parameters: {
    readme: {
      sidebar: CustomColumnCellReadme
    }
  }
};
