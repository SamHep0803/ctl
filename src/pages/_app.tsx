import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { NavBar } from "../components/NavBar";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
