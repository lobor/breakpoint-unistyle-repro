import { UnistylesRegistry } from "react-native-unistyles";

const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
} as const;

const theme = { colors: { background: "black" } };

UnistylesRegistry.addBreakpoints(breakpoints)
  .addThemes({
    light: theme,
    dark: theme,
  })
  .addConfig({
    initialTheme: "dark",
  });

type AppBreakpoints = typeof breakpoints;

type AppThemes = {
  light: typeof theme;
  dark: typeof theme;
};

declare module "react-native-unistyles" {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}
