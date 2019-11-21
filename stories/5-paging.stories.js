import React from 'react';

// Application Modules
import Main from "./shared/main.jsx";

// Readme
import DefaultPageSizeReadme from "./paging/readme/paging-default-page-size.md";
import DefaultPageReadme from "./paging/readme/paging-default-page.md";
import CountReadme from "./paging/readme/paging-count.md";

export default {
  title: 'Paging',
};

export const defaultPageSize = () => <Main defaultPageSize={50} />
export const defaultPage = () => <Main pageSize={25} defaultPage={4} />
export const count = () => <Main pageSize={25} count={400} />

defaultPageSize.story = {
  name: "Default Page Size",
  parameters: {
    readme: {
      sidebar: DefaultPageSizeReadme
    }
  }
}
defaultPage.story = {
  name: "Default Page",
  parameters: {
    readme: {
      sidebar: DefaultPageReadme
    }
  }
}
count.story = {
  parameters: {
    readme: {
      sidebar: CountReadme
    }
  }
}