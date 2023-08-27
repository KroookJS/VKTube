import { TChildren } from "@/types/Product";
import styles from "./list.module.scss";
import React, { FC } from "react";

export const ListColumn: FC<TChildren> = ({ children }) => {
  return (
    <section className={styles.wrapperSliderRecomendation}>{children}</section>
  );
};
