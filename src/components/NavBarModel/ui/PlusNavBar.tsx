import { LinkStyle } from "@/ui/Button";
import Link from "next/link";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import styles from "./plus.module.scss";

export const PlusNavBar = () => {
  return (
    <Link href="/addPost" style={LinkStyle}>
      <button className={styles.btnUpload}>
        <AiOutlinePlus />
      </button>
    </Link>
  );
};
