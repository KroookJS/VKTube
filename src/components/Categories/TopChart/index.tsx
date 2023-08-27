import React from "react";

import { CategortiesImgList } from "./TopList";

import { TopVideosItem } from "../TopVideo/TopVideosItem";
import { IPost } from "@/types/Post";
import { getTopViews } from "@/api/products";

import TestIsLoading from "@/components/TestIsLoading";
import { getTopViewsFetch } from "@/app/actions/categoryFetch";
/* import { useShortsQuery } from "@/hooks/useShortsAndPostsQuery"; */

const TopChartMemo = () => {
  /* const { data: topPost } = useShortsQuery(getTopViews, "getTop"); */

  const getTopViews = getTopViewsFetch();

  const arr = React.useMemo(() => {
    return [...Array(4)].map((_, i) => <TestIsLoading key={i} />);
  }, []);

  return (
    <CategortiesImgList>
      {getTopViews !== undefined
        ? getTopViews.map((top: IPost, idex: number) => {
            return (
              <TopVideosItem
                index={idex + 1}
                image={top.privUrl}
                title={top.title}
                href={top._id}
              />
            );
          })
        : arr}
    </CategortiesImgList>
  );
};

export const TopChart = React.memo(TopChartMemo);
