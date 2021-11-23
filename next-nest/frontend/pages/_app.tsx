import { ApolloClient, InMemoryCache } from '@apollo/client';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: 'http://127.0.0.1:5000',
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });
  return <Component {...pageProps} />;
}

export default MyApp;
