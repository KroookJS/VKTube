"use client";
import React, { FC, useContext } from "react";
import { AiFillHome, AiTwotoneThunderbolt } from "react-icons/ai";

import { MdOutlineFavoriteBorder } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

import Link from "next/link";
import { LinkStyle } from "@/ui/Button";
import { useGlobalContext } from "@/app/store";
import { PlusNavBar } from "./ui/PlusNavBar";

import styles from "./NavBarModel.module.scss";

const iconStyle = {
  width: "35px",
  fontSize: "24px",
  color: "#ccc",
};

type TProps = {
  count?: number;
};
const NavBarModelMemo: FC<TProps> = () => {
  const { likeArr } = useGlobalContext();
  return (
    <div className={styles.navBarModelConrainer}>
      <Link href="/" style={LinkStyle}>
        <AiFillHome style={iconStyle} />
      </Link>
      <Link href="/category">
        <AiTwotoneThunderbolt style={iconStyle} />
      </Link>
      <PlusNavBar />
      <Link href="/favorite">
        <div style={{ position: "relative" }}>
          <MdOutlineFavoriteBorder style={iconStyle} />
          <div className="iconCount">{likeArr.length}</div>
        </div>
      </Link>
      <Link href="/profile" style={LinkStyle}>
        <CgProfile style={iconStyle} />
      </Link>
    </div>
  );
};

export const NavBarModel = React.memo(NavBarModelMemo);
