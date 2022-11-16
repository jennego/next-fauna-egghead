import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/nav";
import { ApolloProvider } from "@apollo/client";
import { client } from "../gglClient";
import { UserProvider } from "@auth0/nextjs-auth0";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <UserProvider>
        <ApolloProvider client={client}>
          <Nav />
          <Component {...pageProps} />
        </ApolloProvider>
      </UserProvider>
    </>
  );
}
