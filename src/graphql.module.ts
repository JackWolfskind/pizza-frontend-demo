import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS, Apollo } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { OperationDefinitionNode } from 'graphql';


const uri = 'http://localhost:3000/graphql'; // <-- add the URL of the GraphQL server here
const wsUri = 'ws://localhost:3000/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(
  httpLink: HttpLink
) {

  const http = httpLink.create({
    uri
  });

  const ws = new WebSocketLink({
    uri: wsUri,
    options: {
      reconnect: true,
    },
  });
  const link = split(
    // split based on operation type
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query) as OperationDefinitionNode;
      return kind === 'OperationDefinition' && operation === 'subscription';
    },
    ws,
    http,
  );

  return {
    link,
    cache: new InMemoryCache(),

  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule { }
