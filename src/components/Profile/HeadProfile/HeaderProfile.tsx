"use client";
import { useGlobalContext } from "@/app/store";
import React, { FC, useContext } from "react";
import { BsPostcard } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";

import styles from "../../styles/profile.module.scss";

type TProps = {
  avatarUser?: string;
  loginUsers?: string;
  videoLength?: number;
};

export const HeaderProfile: FC<TProps> = ({
  avatarUser,
  loginUsers,
  videoLength,
}) => {
  const { userCook } = useGlobalContext();

  return (
    <>
      <div className={styles.containerProfileHead}>
        <div className={styles.column}>
          <div className={styles.leftBlockSave}>
            <div className={styles.blockInfoStatick}>
              <h5 className={styles.TextStatickBorder}>
                {videoLength
                  ? videoLength
                  : userCook
                  ? userCook.videos.length
                  : 0}
              </h5>
              <h5 className={styles.textStatickBorder}>Post</h5>
              <h5 className={styles.blockIconLeft}>
                <BsPostcard style={{ color: "#000000" }} />
              </h5>
            </div>
          </div>
          <img
            className={styles.avaCenter}
            src={
              avatarUser
                ? "http://37.1.219.168:4444" + avatarUser
                : userCook
                ? userCook.avatarUrl
                : "https://www.photoweb.ru/wp-content/uploads/2022/12/photo_2022-11-28_10-19-32.jpg"
            }
            alt="avatar"
          />

          <div className={styles.rightBlockLike}>
            <div className={styles.blockInfoStatick}>
              <h5 className={styles.blockInfoStatick}>20k</h5>
              <h5 className={styles.TextStatick}>Views</h5>
              <div className={styles.BlockIconRight}>
                <MdFavorite style={{ color: "white" }} />
              </div>
            </div>
          </div>
        </div>
        <h5 className={styles.NameProfile}>
          {loginUsers
            ? loginUsers
            : userCook
            ? userCook.fullName
            : "Your Profile"}
        </h5>
        <h5 className={styles.TagName}>@telePorn</h5>
      </div>
    </>
  );
};
