"use client";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

import SceletonShorts from "../isLoadingComponents/SceletonShorts";
import { getAllShorts } from "@/api/shorts";
import { IShorts } from "@/types/Shorts";
/* import { useShortsQuery } from "@/hooks/useShortsAndPostsQuery"; */
import styles from "./Shorts.module.scss";
import { shortsFetch } from "@/app/actions/categoryFetch";

const NewShortsMem = async () => {
  let windowWidth;
  const router = useRouter();
  // make sure your function is being called in client side only

  if (typeof window !== "undefined") {
    windowWidth = useRef(window.innerWidth);
  }
  const isWidthWindow = windowWidth ? windowWidth : { current: 0 };
  /* const { data: shorts, isLoading } = useShortsQuery(getAllShorts, "getShorts"); */

  const data = await shortsFetch()

  const arr =
    isWidthWindow.current < 450
      ? [...Array(3)].map((_, i) => <SceletonShorts key={i} />)
      : [...Array(6)].map((_, i) => <SceletonShorts key={i} isHeight={true} />);

  return (
    <>
      <main className="containerStoris">
        {data !== undefined && data
          ? data.map((short: IShorts) => {
              if (short.type === "video") {
                return (
                  <video
                    className={styles.sortsImg}
                    key={short._id}
                    src={`http://37.1.219.168:4444${short.url}`}
                    onClick={() => router.push(`/stories`)}
                  />
                );
              } else {
                return (
                  <img
                    key={short._id}
                    className={styles.sortsNewImg}
                    src={`http://37.1.219.168:4444${short.url}`}
                    onClick={() => router.push(`/stories`)}
                  />
                );
              }
            })
          : arr}
      </main>
    </>
  );
};

export const NewShorts = React.memo(NewShortsMem);
