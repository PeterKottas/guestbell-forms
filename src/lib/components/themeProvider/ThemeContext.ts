import * as React from 'react';
import { PartialBy } from '../utils/Typescript';
import { Theme } from '../../types/Theme';

export type OmitThemeContext<P extends ThemeContextProps> = PartialBy<
  P,
  'theme'
>;

export interface ThemeContextProps {
  theme?: Theme;
}

const ThemeContext = React.createContext<Theme | undefined>(undefined);
export const ThemeContextProvider = ThemeContext.Provider;
export const ThemeContextConsumer = ThemeContext.Consumer;
