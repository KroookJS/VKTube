"use client";
import {
  AiFillHome,
  AiOutlineLogin,
  AiTwotoneThunderbolt,
} from "react-icons/ai";

import { MdOutlineFavoriteBorder } from "react-icons/md";

import Link from "next/link";
import { LinkStyle } from "@/ui/Button";
import { BiCategoryAlt } from "react-icons/bi";
import { PlusNavBar } from "../NavBarModel/ui/PlusNavBar";
import { useGlobalContext } from "@/app/store";
import React, { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/navigation";
import styles from "./NavBar.module.scss";

function NavBar() {
  const styleForPaper = {
    width: "30px",
    height: "30px",
  };

  const { likeArr } = useGlobalContext();
  const router = useRouter();
  return (
    <div className={styles.navBarContainer}>
      <div className={styles.navBarContent}>
        <div className={styles.flexText}>
          <Link href="/">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0 10px",
              }}
            >
              <h2 style={{ fontSize: 20, cursor: "pointer" }}>Tele</h2>
              <h2 className={styles.logoColor}>Porn</h2>
            </div>
          </Link>

          <div className={styles.navBarItem}>
            <Link href="/" style={LinkStyle}>
              <div className={styles.iconSearch}>
                <AiFillHome style={styleForPaper} />
                <p className={styles.navItemP}>Home</p>
              </div>
            </Link>
          </div>

          <div className={styles.navBarItem}>
            <Link href="/category">
              <div className={styles.iconSearch}>
                <BiCategoryAlt style={styleForPaper} />
                <p className={styles.navItemP}>Category</p>
              </div>
            </Link>
            <Link href="/model">
              <div className={styles.iconSearch}>
                <AiTwotoneThunderbolt style={styleForPaper} />
                <p className={styles.navItemP}>Models</p>
              </div>
            </Link>

            <Link href="/profile" style={LinkStyle}>
              <div className={styles.iconSearch}>
                <CgProfile style={styleForPaper} />
                <p className={styles.navItemP}>Profile</p>
              </div>
            </Link>

            <Link href="/favorite">
              <div className={styles.iconSearch}>
                <div style={{ position: "relative" }}>
                  <MdOutlineFavoriteBorder style={styleForPaper} />
                  <div className="iconCount">{likeArr.length}</div>
                </div>

                <p className={styles.navItemP}>Favorite</p>
              </div>
            </Link>
            <Link href="/addPost">
              <div className={styles.iconSearch}>
                <PlusNavBar />
                <p className={styles.navItemP}>Upload</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Можно убрать лишние дивы */}
        <div>
          <div onClick={() => router.push("/auth")}>
            <div className={styles.iconSearch}>
              <AiOutlineLogin
                style={{
                  fontSize: 35,
                  color: "var(--colors-btn)",
                  background: "#e3edf608",
                  boxShadow: "0 0 10px",
                  borderRadius: 30,
                  padding: 5,
                }}
              />
              <p className={styles.navItemP}>Login</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(NavBar);
