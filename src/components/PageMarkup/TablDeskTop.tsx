import { TMarkup } from "@/types/Product";
import React, { FC } from "react";
import styles from "./styles.module.scss";

export const TableDeskTop: FC<TMarkup> = ({ children, typePage }) => {
  const renderFavoritePage = (
    <section className={styles.wrapperFavorite}>{children}</section>
  );
  const renderPage = (
    <section className={styles.wraaperDeskTop}>{children}</section>
  );
  return typePage ? renderFavoritePage : renderPage;
};
