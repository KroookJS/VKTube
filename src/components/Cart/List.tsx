import { TChildren } from "@/types/Product";
/* import { WrapperCart } from "@/ui/Wrraper"; */
import { FC } from "react";

export const List: FC<TChildren> = ({ children }) => {
  return <div>{children}</div>;
};
