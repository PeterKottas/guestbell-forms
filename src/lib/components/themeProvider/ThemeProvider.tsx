// Libs
import * as React from 'react';
import { Theme } from '../../types/Theme';

// Misc
import { ThemeContextProvider } from './ThemeContext';

export interface ThemeProviderProps {
  theme: Theme;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = props => {
  return (
    <ThemeContextProvider value={props.theme}>
      {props.children}
    </ThemeContextProvider>
  );
};

export default ThemeProvider;
