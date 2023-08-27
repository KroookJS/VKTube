import React, { FC } from "react";
import { TopChart } from "../Categories/TopChart";
import { NewShorts } from "../Shorts/NewShorts";
import styles from "./index.module.scss";
import { TitleComp } from "../TitleComp";

type TProps = {
  search?: string | null;
};

const TopTesMem: FC<TProps> = ({ search }) => {
  return !search ? (
    <>
      <TopChart />
      <NewShorts />
      <main className={styles.mainApp}>
        <TitleComp title="Today's video" />
      </main>
    </>
  ) : (
    <p className={styles.titleSearch}>
      According to your request"{search && search}" Found
    </p>
  );
};

export const TopTes = React.memo(TopTesMem);
