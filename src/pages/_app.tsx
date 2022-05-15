import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { NavBar } from "../components/Navbar";
import theme from "../theme";
import { isLocal, isStaging } from "../utils/isProd";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: isStaging
    ? "https://beta-ctl.vatsim.me/api/graphql"
    : isLocal
    ? "http://localhost:4000/api/graphql"
    : "https://ctl.vatsim.me/api/graphql",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <SessionProvider session={pageProps.session}>
        <ChakraProvider theme={theme}>
          <Head>
            <title>Cross The Land</title>
            <meta name="referrer" content="no-referrer" />
          </Head>
          <NavBar />
          <Component {...pageProps} />
        </ChakraProvider>
      </SessionProvider>
    </ApolloProvider>
  );
}

export default MyApp;
