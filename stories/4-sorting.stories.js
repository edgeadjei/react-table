import React from 'react';

// Application Modules
import Main from "./shared/main.jsx";

// Readme
import FilterAllReadme from "./filtering/readme/filter-all-columns.md";
import SortableReadme from "./sorting/readme/sorting-sortable.md";
import DefaultSortReadme from "./sorting/readme/sorting-default-sort.md";
import CustomSortMethodReadme from "./sorting/readme/sorting-custom-sort-method.md";

export default {
  title: 'Sorting'
};

export const Sortable = () => <Main sortable={["name", "balance"]} />
export const defaultSort = () => <Main defaultSort={{ name: "DES" }} />
export const customSortMethod = () => <Main
  columns={[
    { id: "_id" },
    { id: "balance" },
    { id: "age", sortMethod: (a, b, sortDirection) => console.log(a, b, sortDirection) },
    { id: "name" },
    { id: "email" },
    { id: "isActive" }
  ]} />

Sortable.story = {
  parameters: {
    readme: {
      sidebar: SortableReadme
    }
  }
}
defaultSort.story = {
  name: "Default Sort",
  parameters: {
    readme: {
      sidebar: DefaultSortReadme
    }
  }
}
customSortMethod.story = {
  name: "Custom Sort Method",
  parameters: {
    readme: {
      sidebar: CustomSortMethodReadme
    }
  }
}

