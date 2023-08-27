"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { useGlobalContext } from "@/app/store";

import styles from "./styles.module.scss";

const ImgMyTestKategoryMem = ({
  image,
  title,
  href,
  isCategory = false,
}: {
  href: string;
  image: string;
  title: string;
  isCategory?: boolean;
}) => {
  const { setCategoryText } = useGlobalContext();
  return (
    <Link href={isCategory ? `category/${href}` : `model/${href}`}>
      <div
        className={styles.WrapperArticleNewCategory}
        onClick={() => setCategoryText(title)}
      >
        <img className={styles.CardImageCategpry} alt={image} src={image} />
        {!isCategory ? (
          <h3 className={styles.TitleCategory}>{title}</h3>
        ) : (
          <h3 className={styles.NewTitleCategory}>{title}</h3>
        )}
      </div>
    </Link>
  );
};

export const ImgMyTestKategory = React.memo(ImgMyTestKategoryMem);
