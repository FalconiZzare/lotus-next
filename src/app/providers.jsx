"use client";

import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";

const Providers = ({ children }) => {
  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache()
  });

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ApolloProvider client={client}>
        <ThemeProvider
          defaultTheme={"system"}
          attribute={"class"}
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster position={"bottom-right"} closeButton />
        </ThemeProvider>
      </ApolloProvider>
    </QueryClientProvider>
  );
};

export default Providers;
