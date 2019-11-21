import React from 'react';

// Application Modules
import Main from "./shared/main.jsx";

// Readme
import FilterAllReadme from "./filtering/readme/filter-all-columns.md";
import FilterSpecificReadme from "./filtering/readme/filter-specific-columns.md";
import DefaultFilterReadme from "./filtering/readme/filter-default-filter.md";
import CustomComponentReadme from "./filtering/readme/filter-custom-component.md";
import CustomFilterMethodReadme from "./filtering/readme/filter-custom-filter-method.md";

export default {
  title: 'Filtering',
};

export const filterAllColumns = () => <Main filterable />
export const filterSpecificColumns = () => <Main filterable={["age"]} />
export const defaultFilter = () => <Main filterable defaultFilter={{ name: "brittany", age: 100 }} />
export const customFilterComponent = () => <Main
  onStateChange={(response) => console.log(response)}
  columns={[
    { id: "_id" },
    { id: "balance" },
    { id: "age" },
    { id: "name" },
    { id: "email" },
    {
      id: "isActive", label: "user status", filter: ({ columnName, onChange, value }) => (
        <select
          name={columnName}
          onChange={(event) => onChange(event)}
          value={value}>
          <option value="">Show All</option>
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>
      )
    }
  ]}
  filterable />
export const customFilterMethod = () => <Main
  columns={[
    { id: "_id" },
    { id: "balance" },
    { id: "age" },
    { id: "name" },
    { id: "email" },
    {
      id: "isActive", filterMethod: (value, filter) => {
        console.log(value, filter)
        return String(value) === filter
      }
    }
  ]}
  filterable />

filterAllColumns.story = {
  name: 'Filter all columns',
  parameters: {
    readme: {
      sidebar: FilterAllReadme
    }
  }
};
filterSpecificColumns.story = {
  name: 'Filter specific columns',
  parameters: {
    readme: {
      sidebar: FilterSpecificReadme
    }
  }
};
defaultFilter.story = {
  name: 'Default Filter',
  parameters: {
    readme: {
      sidebar: DefaultFilterReadme
    }
  }
};
customFilterComponent.story = {
  name: 'Custom Filter Component',
  parameters: {
    readme: {
      sidebar: CustomComponentReadme
    }
  }
};
customFilterMethod.story = {
  name: 'Custom Filter Method',
  parameters: {
    readme: {
      sidebar: CustomFilterMethodReadme
    }
  }
};
    

    