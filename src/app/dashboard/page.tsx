"use client";

import StoreProvider from "@/store/Provider";
import Dashboard from "@/ui/dashboard/Dashboard";

export default function Page() {
  return (
    <StoreProvider>
      <Dashboard />
    </StoreProvider>
  );
}
