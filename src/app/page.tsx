"use client"

import StoreProvider from "@/store/Provider";
import WelcomeCard from "@/ui/WelcomeCard";

export default function Home() {
  return (
    <StoreProvider>
      <WelcomeCard />
    </StoreProvider>
  );
}
