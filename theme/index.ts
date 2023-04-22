import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { colors } from './colors';
import { fonts } from './fonts';
import { letterSpacings } from './letterSpacings';
import { components } from './components';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  colors,
  fonts,
  letterSpacings,
  components,
});
