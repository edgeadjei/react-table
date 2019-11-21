import React from 'react';

// Application Modules
import Main from "./shared/main.jsx";
import tableJSON from "./shared/tableJSON.json";

// Stories
import StylingComponent from "./welcome/components/styling.jsx";
import ServerSideDataComponent from "./welcome/components/server-side-data.jsx";

// Readme
import DefaultReadme from "./welcome/readme/main.md";
import JSONReadme from "./welcome/readme/json.md";
import StylingReadme from "./welcome/readme/styling.md";
import ServerSideDataReadme from "./welcome/readme/server-side-data.md";


export default {
  title: 'Welcome',
};

export const Default = () => <Main />
export const Json = () => <Main data={tableJSON} />
export const Styling = () => <StylingComponent />
export const ServerSideData = () => <ServerSideDataComponent />

Default.story = {
  parameters: {
    readme: {
      sidebar: DefaultReadme
    }
  }
}
Json.story = {
  parameters: {
    readme: {
      sidebar: JSONReadme
    }
  }
}
Styling.story = {
  parameters: {
    readme: {
      sidebar: StylingReadme
    }
  }
}
ServerSideData.story = {
  name: 'Server Side data',
  parameters: {
    readme: {
      sidebar: ServerSideDataReadme,
    },
  },
};


  