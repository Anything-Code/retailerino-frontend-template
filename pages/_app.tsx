import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';

export const graphqlClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: 'http://localhost:4000/graphql',
    }),
    ssrMode: typeof window === 'undefined',
});

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={graphqlClient}>
            <Component {...pageProps} />
        </ApolloProvider>
    );
}
