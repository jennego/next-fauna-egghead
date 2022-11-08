import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/nav";
import { ApolloProvider } from "@apollo/client";
import { client } from "../gglClient";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <Nav />
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}
