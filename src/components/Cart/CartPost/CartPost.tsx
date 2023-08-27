"use client";

import React, { FC, useContext, useRef, useState, useEffect } from "react";

import { BiDotsHorizontalRounded } from "react-icons/bi";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";

import Link from "next/link";
import { IPost } from "@/types/Post";
import { useGlobalContext } from "@/app/store";
import { AvatarBlock } from "../AvatarBlock";
import styles from "./CartPost.module.scss";

const CartPostMemo: FC<IPost> = ({
  userAvatar,
  _id,
  title,
  privVideoUrl,
  text,
  privUrl,
  userName,
  user,
}) => {
  const { likeArr, setLikeArr, handelDizLike, handelLike } =
  useGlobalContext();

  const [isLike, setIsLike] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const playerRef = useRef<any>(null);

  const styleIcon = {
    fontSize: "30px",
    color: "grey",
  };

  useEffect(() => {
    if (isTouch) {
      setTimeout(() => {
        setIsTouch(false);
      }, 10000);
    }
  }, [isTouch]);

  const onChangeTauch = () => {
    if (isTouch) {
      setIsTouch(false);
    }
    setIsTouch(true);
  };

  const numberReitingRandom = Math.ceil(Math.random() * (99 - 69) + 69);

  return (
    <div className={styles.wrapperArticleRecomendation}>
      <div className={styles.cartHeader}>
        <div className={styles.cartHeaderContainer}>
          <AvatarBlock
            userAvatar={userAvatar}
            userName={userName}
            user={user}
          />
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button className={styles.cartBlockDisplay}>
              {numberReitingRandom}%
            </button>
            <div className={styles.iconBox}>
              <BiDotsHorizontalRounded style={{ color: "var(--colors-btn)" }} />
            </div>
          </div>
        </div>
      </div>
      <Link href={`/details/${_id}`}>
        <div className={styles.blockVideoCart} ref={playerRef}>
          <img
            style={{ maxHeight: 202 }}
            onTouchStart={onChangeTauch}
            alt={title}
            className="kaif"
            src={`http://37.1.219.168:4444${privUrl}`}
          />
          <video
            style={{ maxHeight: 202, background: "black" }}
            loop
            muted
            autoPlay
            className={isTouch ? "active" : ""}
            src={`http://37.1.219.168:4444${privVideoUrl}`}
          />
        </div>
      </Link>
      <div className={styles.cartBlock}>
        <div className={styles.cartBlockDirection}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardDesk}>{text}</p>
        </div>

        <div className={styles.cartBlockDisplay} style={styleIcon}>
          {isLike ? (
            <MdFavorite
              /* onClick={() => handelDizLike(_id, setIsLike)} */
              style={{ color: "orange" }}
            />
          ) : (
            <MdOutlineFavoriteBorder
              onClick={() => handelLike(_id, setIsLike)}
              style={{ color: "var(--colors-btn)" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export const CartPost = React.memo(CartPostMemo);
