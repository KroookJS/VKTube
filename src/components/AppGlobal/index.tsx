"use client";
import { useState } from "react";

import { Layout } from "@/layout/Layout";

import { dehydrate, QueryClient } from "react-query";

import { TopTes } from "@/components/HeaderContentPage/IndexTopTest";
import { RenderPostsTest } from "../RenderPostsTest";
import { getAllProducts } from "@/api/products";

export default function AppGlobal() {

  const [search, setSearch] = useState("");
  return (
    <>
      <Layout>
        <TopTes search={search} />
        <RenderPostsTest />
      </Layout>
    </>
  );
}

export async function getServerSideProps(context: any) {
  try {
    let page = "";
    if (context.query.page) {
      page = context.query.page;
    }
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery(["getPosts", page], async () =>
      getAllProducts(page)
    );

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch {
    return {
      props: { socials: null },
    };
  }
}
