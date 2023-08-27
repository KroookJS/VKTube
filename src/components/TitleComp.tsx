import React, { FC } from "react";
import { AiOutlineFire } from "react-icons/ai";

type TProps = {
  title: string;
};
const TitleCompMemo: FC<TProps> = ({ title }) => {
  return (
    <>
      <div className="titleIconBlock">
        <AiOutlineFire />
        <h3> {title}</h3>
      </div>
    </>
  );
};

export const TitleComp = React.memo(TitleCompMemo);
