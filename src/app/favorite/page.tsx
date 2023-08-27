"use client";
import ComponentIsLoading from "@/components/isLoadingComponents/ComponentIsLoading";
import styles from "../../styles/favorite.module.scss";

import { useGlobalContext } from "@/app/store";
import { useActivePage } from "@/hooks/useActivePage";
import { useCast } from "@/hooks/useShortsAndPostsQuery";
import { Layout } from "@/layout/Layout";

import React, { useContext, useEffect } from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";

import { TopChart } from "@/components/Categories/TopChart";
import { ListFavorite } from "@/components/GetItem/ListFavorite";

export default function Favorite() {
  const isActivePage = useActivePage();

  const { likeArr, copy, getFavoriteFromLs } = useGlobalContext();

  const { data: favorite } = useCast(likeArr.join(","), "getfavorite");

  useEffect(() => {
    getFavoriteFromLs();
  }, []);

  return isActivePage ? (
    <Layout>
      <TopChart />
      <h3>Your saved videos</h3>
      {favorite ? (
        <ListFavorite favorite={favorite} />
      ) : (
        <div className={styles.BlockVideo}>
          <p className={styles.PText}>
            Add a video to your favorites to start watching here{" "}
            <MdOutlineFavoriteBorder
              style={{ color: "var(--colors-btn)", fontSize: 50 }}
            />
          </p>
        </div>
      )}
    </Layout>
  ) : (
    <ComponentIsLoading />
  );
}
