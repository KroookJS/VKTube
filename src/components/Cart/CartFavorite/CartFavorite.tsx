"use client";
/* import { WrapperArticleRecomendation } from "@/ui/Wrraper"; */
import React, { FC, useContext, useState } from "react";

import styles from "./Cartfavorit.module.scss";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

import Link from "next/link";
import { IPost } from "@/types/Post";
import ReactPlayer from "react-player";
import { useGlobalContext } from "@/app/store";

import { AvatarBlock } from "../AvatarBlock";

/* const CardTitle = styled.h3`
  margin: 0 13px;
  
  font-weight: var(--fw-middle);
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #fff;
`;

const CardDesk = styled.p`
  margin: 0;
  font-size: var(--fs-md);
  font-weight: var(--fw-me);
  color: gray;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CartAvar = styled.img`
  border: 1px solid #fff;
  border-radius: 50px;
  width: 39px;
  height: 39px;
  object-fit: cover;
`;

const CartBlock = styled.div`
  padding: 0.5rem 0.6rem;
  display: flex;
  justify-content: space-between;
`;

const CartBlockDirection = styled.div`
  display: flex;
  flex-direction: column;
  
`;

const CartBlockDisplay = styled(CartBlockDirection)`
  flex-direction: unset;
`;

const PlayBnt = styled.button`
  min-width: 79px;
  padding: 0.5rem 0.6rem;
  border: none;
  border-radius: 15px;
  color: var(--colors-bg-cart);
  color: var(--colors-bg-cart);
  background-image: var(--colors-line);
`;

const CartHeader = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
`;
const CartHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0 0;
`;

const CartHeaderName = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;

  gap: 10px;
`; */

export const CartFavorite: FC<IPost> = ({
  title,
  videoUrl,
  _id,
  userAvatar,
  userName,
  user,
}) => {
  const styleIcon = {
    fontSize: "30px",
    color: "grey",
  };
  const [isLike, setIsLike] = useState(true);
  const { likeArr, setLikeArr, handelDizLike } = useGlobalContext();

  return (
    <div className={styles.WrapperArticle}>
     {/*  <div className={styles.CartHeader}>
        <div className={styles.CartHeaderContainer}>
          <div className={styles.CartHeaderName}>
            <AvatarBlock
              userAvatar={userAvatar}
              userName={userName}
              user={user}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <ButtonCategoryPage>Open a Post</ButtonCategoryPage>
          </div>
        </div>
      </div>
      <ReactPlayer
        height={"77%"}
        width={"100%"}
        controls={true}
        playsinline={true}
        url={`http://37.1.219.168:4444${videoUrl}`}
      />
      <CartBlock>
        <CartBlockDirection>
          <CardTitle>{title}</CardTitle>
        </CartBlockDirection>
        <CartBlockDisplay style={styleIcon}>
          {isLike ? (
            <MdFavorite
              onClick={() => handelDizLike(_id, setIsLike)}
              style={{ color: "orange" }}
            />
          ) : (
            <MdOutlineFavoriteBorder
              onClick={() => handelDizLike(_id, setIsLike)}
            />
          )}
        </CartBlockDisplay>
      </CartBlock> */}

      тут были стили в стулед компонентс 
    </div>
  );
};
