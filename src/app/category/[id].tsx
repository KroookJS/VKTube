"use client";
import { getAllCategorys, getOneCategory } from "@/api/categorys";

import React, { useContext } from "react";
import { Layout } from "@/layout/Layout";
import Link from "next/link";
import { LinkStyle } from "@/ui/Button";
import { GetStaticProps } from "next/types";
import { IPost } from "@/types/Post";
import { CartPost } from "@/components/Cart/CartPost/CartPost";

import { BiCategoryAlt } from "react-icons/bi";
import { useGlobalContext } from "@/app/store";

import { QueryClient, dehydrate } from "react-query";

import styles from "../../styles/category.module.scss";

export default function CatigoryPage(props: any) {
  const { categoryText } = useGlobalContext();
  const categories = props.dehydratedState.queries[0].state.data;

  return (
    <>
      <Layout
        title={`Porn Videos with Milfs: Free Sex Movies with ${categoryText} &#124; TelePorn`}
        description={`Porn with ${categoryText} is here! On TelePorn.com you will find free porn videos with mature women who love to fuck. Sexy nude milfs with big tits do blowjob and swallow cum. Hot porn videos with scenes of anal sex and cum filling of milf pussies will pleasantly surprise you with sexy mature crumbs!`}
      >
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <BiCategoryAlt />

          <h3 style={{ fontSize: 20, fontWeight: 400 }}>Category</h3>
          <h3
            style={{
              fontSize: 20,
              fontWeight: 400,
              color: "var(--colors-btn)",
            }}
          >
            {categoryText}
          </h3>
        </div>
        <div className={styles.blockDescCategoryAndModal}>
          {categories.length ? (
            categories.map((catigory: IPost) => {
              return (
                <Link
                  key={catigory._id}
                  href={`/details/${catigory._id}`}
                  style={LinkStyle}
                >
                  <CartPost key={catigory._id} {...catigory} />
                </Link>
              );
            })
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3>Unfortunately, there are no videos in this category</h3>
              <h3>
                You can become the first author of the category by clicking on +
              </h3>
              <Link href="/category">
                <button className={styles.backBtn} style={{ width: "80%" }}>
                  Go Back
                </button>
              </Link>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
}

export const getStaticPaths = async () => {
  try {
    const data = await getAllCategorys();

    const paths = data.map((el: any) => ({
      params: { id: el._id.toString() },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch {
    return {
      props: { socials: null },
    };
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const cat = context.params ? context.params.id : "1";
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery([`getOneCategory`, cat], async () =>
      getOneCategory(String(cat))
    );

    if (!dehydrate(queryClient)) {
      return {
        notFound: true,
      };
    }
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
};
