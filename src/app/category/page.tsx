"use client";
import { getAllCategorys } from "@/api/categorys";

import { Layout } from "@/layout/Layout";

import { CategoryTemplates } from "@/components/templates/CategoryTemplates";

import ComponentIsLoading from "@/components/isLoadingComponents/ComponentIsLoading";
/* import { QueryClient, dehydrate, useQuery } from "react-query"; */
import { TopChart } from "@/components/Categories/TopChart";
import { categoryFetch } from "../actions/categoryFetch";

export default function CategoriesPage() {
  /* const { data, isSuccess } = useQuery(
    ["getCategory"],
    async () => await getAllCategorys(),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: true,
    }
  );

  const queryClient = new QueryClient();
  queryClient.prefetchQuery(["getPosts"], async () => getAllCategorys());
  const newCat = isSuccess ? data : [];
  const isActivePage = useActivePage(); */

  const data = categoryFetch();
  
  console.log(data);
  
  return data !== undefined ? (
    <Layout
      title="TelePorn Category: Find Your Favorite Free Hardcore Porn Videos"
      description="TelePort has the best hardcore porn videos. Discover the latest XXX videos in your favorite sex category. Watch the hottest videos with pornstars starring."
    >
      <TopChart />
      {/* <CategoryTemplates categories={editData} /> */}
    </Layout>
  ) : (
    <ComponentIsLoading />
  );
}
/* export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["getPosts"], async () => getAllCategorys());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
} */
