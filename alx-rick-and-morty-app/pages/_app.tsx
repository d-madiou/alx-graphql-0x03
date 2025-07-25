import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import ErrorBoundary from "@/components/ErrorBoundary";
import ErrorProneComponent from '@/components/ErrorProneComponent';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
      { <ErrorProneComponent /> }
    </ErrorBoundary>
  )
}