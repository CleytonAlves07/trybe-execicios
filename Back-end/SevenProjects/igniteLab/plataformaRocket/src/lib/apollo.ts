import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pq1r1322xq01xxgx0f7c6y/master',
  cache: new InMemoryCache()
})