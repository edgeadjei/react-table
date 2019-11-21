import React from 'react';

// Application Modules
import Main from "./shared/main.jsx";

// Readme
import EventSortReadme from "./events/readme/event-sort.md";
import EventFilterReadme from "./events/readme/event-filter.md";
import EventLimitReadme from "./events/readme/event-limit.md";
import EventPageReadme from "./events/readme/event-page.md";
import EventStateChangeReadme from "./events/readme/event-state-change.md";

export default {
  title: 'Events'
};

export const sort = () => <Main pageSize={25} onSortChange={(response) => console.log(response)} />
export const filter = () => <Main pageSize={25} filterable onFilterChange={(response) => console.log(response)} />
export const pageSize = () => <Main pageSize={25} onPageSizeChange={(response) => console.log(response)} />
export const page = () => <Main pageSize={25} onPageChange={(response) => console.log(response)} />
export const stateChange = () => <Main pageSize={25} filterable onStateChange={(response) => console.log(response)} />

sort.story = {
  parameters: {
    readme: {
      sidebar: EventSortReadme
    }
  }
};
filter.story = {
  parameters: {
    readme: {
      sidebar: EventFilterReadme
    }
  }
}
pageSize.story = {
  name: "Page Size",
  parameters: {
    readme: {
      sidebar: EventLimitReadme
    }
  }
}
page.story = {
  parameters: {
    readme: {
      sidebar: EventPageReadme
    }
  }
}
stateChange.story = {
  name: "State Change",
  parameters: {
    readme: {
      sidebar: EventStateChangeReadme
    }
  }
}