"use client";

import { ReactNode } from "react";
import client from "@/app/services/graphql/graphql-client";
import { ApolloProvider } from "@apollo/client";

interface ApolloProviderClientProps {
  children: ReactNode;
}

const ApolloProviderClient = ({ children }: ApolloProviderClientProps) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloProviderClient;
