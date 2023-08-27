"use client";
import { getAllModel, getOneModel } from "@/api/categorys";

import React from "react";
import { Layout } from "@/layout/Layout";
import Link from "next/link";
import { LinkStyle } from "@/ui/Button";
import { GetStaticProps } from "next/types";
import { IPost } from "@/types/Post";
import { CartPost } from "@/components/Cart/CartPost/CartPost";

import { BiCategoryAlt } from "react-icons/bi";
import { useGlobalContext } from "@/app/store";
import { useRouter } from "next/router";
import styles from "../../styles/styles.module.scss";

export default function CatigoryPage({
  categories,
  model,
}: {
  categories: IPost[];
  model: IPost[];
}) {
  const { categoryText } = useGlobalContext();

  const router = useRouter();

  return (
    <>
      <Layout
        title={`${categoryText} Porn Videos - Verified Porn Star Profile &#124; TelePorn`}
        description={`Take a look at the best porn videos, photos and gifs in the playlist of pornstars ${categoryText}. View tons of nude photos that he uploaded to his verified account only on TelePorn.com . Subscribe to ${categoryText} and add him as a friend. Look at naked ${categoryText} in an amazing free compilation of hardcore sex.`}
      >
        <div className="flBlock">
          <BiCategoryAlt />

          <h3>Models</h3>
          <h3 style={{ color: "var(--colors-btn)" }}>{categoryText}</h3>
        </div>
        <div className={styles.blockDescCategoryAndModal}>
          {model.length ? (
            model.map((model: IPost) => {
              return (
                <Link
                  key={model._id}
                  href={`/details/${model._id}`}
                  style={LinkStyle}
                >
                  <CartPost key={model._id} {...model} />
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
              {/* <Link href="/category"> */}
              <button
                className={styles.backBtn}
                onClick={() => router.back()}
                style={{ width: "80%" }}
              >
                Go back
              </button>
              {/* </Link> */}
            </div>
          )}
        </div>
      </Layout>
    </>
  );
}

export const getStaticPaths = async () => {
  try {
    const data = await getAllModel();

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
    const mod = context.params ? context.params.id : "1";

    const model = await getOneModel(String(mod));

    if (!model) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        model,
      },
    };
  } catch {
    return {
      props: { socials: null },
    };
  }
};
