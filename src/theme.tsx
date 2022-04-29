import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "75em",
});

const theme = extendTheme({
  breakpoints,
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    primary: {
      100: "#39e7be",
      200: "#21e4b6",
      300: "#08e1ae",
      400: "#07cb9d",
      500: "#06b48b",
      600: "#069e7a",
      700: "#058768",
      800: "#047157",
    },
    secondary: "#98de5b",
  },
});

export default theme;
