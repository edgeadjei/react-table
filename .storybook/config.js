import { addParameters, configure, addDecorator } from '@storybook/react';
import { addReadme } from 'storybook-readme';

addParameters({
  options: {
    theme: {
      brandTitle: '@edgesyntax/react-table',
      brandUrl: 'https://github.com/Edgesyntax/react-table',
    },
    showPanel: true,
    panelPosition: "right"
  }
});

// Add readme decorator
addDecorator(addReadme);

configure(require.context('../stories', true, /\.stories\.js$/), module);
