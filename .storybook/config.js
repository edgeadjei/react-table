import { addParameters, configure, addDecorator } from '@storybook/react';
import { addReadme } from 'storybook-readme';

addParameters({
  options: {
    theme: {
      brandTitle: 'table component',
      brandUrl: 'https://github.com/Edgesyntax/table-component',
    },
    showPanel: true,
    panelPosition: "right"
  }
});

// Add readme decorator
addDecorator(addReadme);

configure(require.context('../stories', true, /\.stories\.js$/), module);
