import React from 'react';

// Application Modules
import Main from "./shared/main.jsx";

// Readme
import ActiveRowReadme from "./options/readme/option-active-row.md";
import DynamicFooterReadme from "./options/readme/option-dynamic-footer.md";
import HeightReadme from "./options/readme/option-height.md";
import LoadingReadme from "./options/readme/option-loading.md";
import ManualReadme from "./options/readme/option-manual.md";
import NoDataTextReadme from "./options/readme/option-no-data-text.md";
import ShowIndexReadme from "./options/readme/option-show-index.md";

export default {
  title: 'Other Props',
};

export const activeRow = () => <Main showIndex activeRow={{ id: "_id", value: "5844822b3e9c1401b8db0871" }} />
export const dynamicFooter = () => <Main data={[
    {
      "_id": "5844822be1ea02fe2b261ab1",
      "balance": "$3,422.52",
      "age": 100,
      "name": "Brittany Torres",
      "email": "brittanytorres@zenolux.com",
      "isActive": false
    }, {
      "_id": "5844822b3e9c1401b8db0871",
      "balance": "$2,122.79",
      "age": 34,
      "name": "Dorothy Phillips",
      "email": "dorothyphillips@quilm.com",
      "isActive": false
    }, {
      "_id": "5844822b26f2fd9d3a0e02db",
      "balance": "$3,519.32",
      "age": 65,
      "name": "Stacie Vasquez",
      "email": "stacievasquez@frosnex.com",
      "isActive": true
    }
  ]} dynamicFooter />
export const height = () => <Main height={400} />
export const loading = () => <Main loading={true} loadingText="Loading Users..." pageSize={25} />
export const manual = () => <Main pageSize={25} manual />
export const noDataText = () => <Main
    data={[]}
    columns={[
      { id: "balance" },
      { id: "email" },
      { id: "age" }
    ]}
    noDataText="Error finding matching records." />
// export const selectable = () => <Main showIndex selectable onSelectAllRows={(rows) => console.log(rows)} onRowSelection={(row) => console.log(row)}/>
export const showIndex = () => <Main showIndex />

activeRow.story = {
  name: "Active Row",
  parameters: {
    readme: {
      sidebar: ActiveRowReadme
    }
  }
}
dynamicFooter.story = {
  name: "Dynamic Footer",
  parameters: {
    readme: {
      sidebar: DynamicFooterReadme
    }
  }
}
height.story = {
  parameters: {
    readme: {
      sidebar: HeightReadme
    }
  }
}
loading.story = {
  parameters: {
    readme: {
      sidebar: LoadingReadme
    }
  }
}
manual.story = {
  parameters: {
    readme: {
      sidebar: ManualReadme
    }
  }
}
noDataText.story = {
  name: "No matching records",
  parameters: {
    readme: {
      sidebar: NoDataTextReadme
    }
  }
}
// selectable.story = {
//   parameters: {
//     readme: {
//       sidebar: DefaultPageSizeReadme
//     }
//   }
// }
showIndex.story = {
  name: "Show Index",
  parameters: {
    readme: {
      sidebar: ShowIndexReadme
    }
  }
}