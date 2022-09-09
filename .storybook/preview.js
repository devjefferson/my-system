import { createTheme } from '../src/styles/stitches.config';
import { Tiger, Heineken } from '../src/styles/Themes';

export const parameters = {
  layout: 'centered',
  multipleThemesStitches: {
    values: [
      {
        name: 'Amstel',
        theme: createTheme({}),
      },
      {
        name: 'Heineken',
        theme: createTheme({
          colors: Heineken,
        }),
      },
      {
        name: 'Tiger',
        theme: createTheme({
          colors: Tiger,
        }),
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
