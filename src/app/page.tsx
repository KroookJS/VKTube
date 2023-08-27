"use client";
import React from "react";

import { QueryClientProvider, QueryClient } from "react-query";
const queryClient = new QueryClient();

import AppGlobal from "@/components/AppGlobal";
import "@/styles/globals.scss";

export default function page() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppGlobal />
      </QueryClientProvider>
    </>
  );
}
