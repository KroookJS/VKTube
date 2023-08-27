import { TChildren } from "@/types/Product";

import React, { FC } from "react";
import { BiCategoryAlt } from "react-icons/bi";
import styles from "./topChart.module.scss";

export const CategortiesImgListMem: FC<TChildren> = ({ children }) => {
  return (
    <main className={styles.newWrapperTopChart}>
      <div className={styles.helpedDiv} />
      <div className="titleIconBlock" style={{ marginBottom: 10 }}>
        <BiCategoryAlt />
        <h3>Top 5 one for the week</h3>
      </div>
      <section className="wrapperTopChart">{children}</section>
    </main>
  );
};

export const CategortiesImgList = React.memo(CategortiesImgListMem);
