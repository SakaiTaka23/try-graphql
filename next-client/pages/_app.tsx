import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
