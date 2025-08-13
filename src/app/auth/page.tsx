"use client"

import Card from "@/components/Card";
import queryClient from "@/query/queryClient";
import StoreProvider from "@/store/Provider";
import LoginForm from "@/ui/auth/LoginForm";
import { QueryClientProvider } from "@tanstack/react-query";

export default function Page() {
  return (
    <StoreProvider>
      <QueryClientProvider client={queryClient}>
        <Card>
          <h1>Login</h1>
          <LoginForm />
        </Card>
      </QueryClientProvider>
    </StoreProvider>
  );
}
