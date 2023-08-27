"use client";
import React, { useContext, useState } from "react";

import { useRouter } from "next/navigation";
import Link from "next/link";

import { LinkStyle } from "@/ui/Button";
import styles from "./Header.module.scss";

import { AiOutlineLogin } from "react-icons/ai";

export const Header = () => {
  const router = useRouter();

  const [search, setSearch] = useState("");
  return (
    <header className={styles.headerEl}>
      <main className={styles.container}>
        <div className={styles.wrapperHeader}>
          <Link style={LinkStyle} href="/">
            <div style={{ display: "flex", alignItems: "center" }}>
              <h2 style={{ fontSize: 20, cursor: "pointer" }}>VK</h2>
              <h2 className={styles.logoColor}>Hub</h2>
            </div>
          </Link>

          <input
            className={styles.inputSearch}
            placeholder="search for...."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              paddingRight: 7,
            }}
          >
            <AiOutlineLogin
              onClick={() => router.push("/auth")}
              style={{
                fontSize: 35,
                color: "var(--colors-btn)",
                background: "#e3edf608",
                boxShadow: "0 0 10px",
                borderRadius: 30,
                padding: 5,
              }}
            />
          </div>
        </div>
      </main>
    </header>
  );
};
