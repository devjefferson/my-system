import { defaltTheme } from '../src/styles/stitches.config';

export const parameters = {
  multipleThemesStitches: {
    values: [
      {
        name: 'default',
        theme: defaltTheme,
      },
    ],
  },
  layout: 'centered',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
