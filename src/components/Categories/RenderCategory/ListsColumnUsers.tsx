import { TChildren } from "@/types/Product";
import React, { FC } from "react";

import styles from './list.module.scss'

export const ListsColumnUsers: FC<TChildren> = ({ children }) => {
  return <section className={styles.wrapperSliderRecomendation}>{children}</section>;
};
