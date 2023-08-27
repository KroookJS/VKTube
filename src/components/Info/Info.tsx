import GetItem from "../GetItem";

import React, { useEffect, useState } from "react";

import styles from "./Info.module.scss";
import { IPost } from "@/types/Post";

import ReactPlayer from "react-player";
import { getOneCategoryByName } from "@/api/categorys";

import { useRouter } from "next/router";
import { getRecommendationByCategory } from "@/api/recommendations";
import { AvatarBlock } from "../Cart/AvatarBlock";

import { MdOndemandVideo, MdOutlineTextRotateUp } from "react-icons/md";

const InfoMem = (props: IPost) => {
  const {
    title,
    text,
    videoUrl,
    viewsCount,
    category,
    tags,
    model,
    _id,
    user,
    userAvatar,
    userName,
  } = props || {};

  const [post, setPost] = useState<IPost[]>();
  const [isCategoryId, setIsCategoryId] = useState<any>("");

  const router = useRouter();

  useEffect(() => {
    if (!post) {
      const resProduct = async () => {
        return await getRecommendationByCategory(category[0]).then((res) =>
          setPost(res.filter((el) => el._id !== _id))
        );
      };
      resProduct();
    }

    if (isCategoryId) {
      router.push(`/category/${isCategoryId}`);
    }
  }, [isCategoryId]);

  const findIdCategory = async (name: string) => {
    try {
      await getOneCategoryByName(name).then((res) => setIsCategoryId(res));
    } catch (error) {
      console.log("Ошибка перехода в категорию");
    }
  };

  return (
    <>
      <section className={styles.Wrapper}>
        <div className={styles.ImageBlock}>
          <ReactPlayer
            height={232}
            width={"100vw"}
            /* playing={true} */
            controls={true}
            loop={true}
            playsinline={true}
            url={`http://37.1.219.168:4444${videoUrl}`}
          />
        </div>

        <div className={styles.BlockInfoShadow}>
          <h1 className={styles.InfoTitle}>
            <MdOutlineTextRotateUp />
            {title}
          </h1>
          <div className={styles.ListGroup}>
            <ul className={styles.List}>
              <li className={styles.ListItem}>
                <b>Views:</b> {viewsCount}
              </li>

              <li className={styles.ListItem}>
                <b>Category:</b>
                {category
                  ? category.map((el, index) => {
                      return (
                        <span
                          className={styles.ModelStyles}
                          onClick={() => findIdCategory(el)}
                          key={index}
                        >
                          {el && el}
                        </span>
                      );
                    })
                  : "Category"}
              </li>
              <li className={styles.ListItem}>
                <b>Model:</b>
                {model
                  ? model.map((el, index) => {
                      return (
                        <span className={styles.ModelStyles} key={index}>
                          {el}
                        </span>
                      );
                    })
                  : "Model"}
              </li>
              <li className={styles.ListItem}>
                <b>Description:</b> {text}
              </li>
              <li className={styles.ListItem}>
                <b>Tegs:</b>

                {tags
                  ? tags.map((el, index) => {
                      return (
                        <span className={styles.TagsStyles} key={index}>
                          {el}
                        </span>
                      );
                    })
                  : "tags"}
              </li>
              <div className={styles.UserFolowBlock}>
                <AvatarBlock
                  user={user}
                  userAvatar={userAvatar}
                  userName={userName}
                  isInfoBlock={true}
                />
                <button className="btnPorn">Subscribe</button>
              </div>
            </ul>
          </div>
        </div>
        <div>
          <h1 className={styles.InfoTitle}>
            <MdOndemandVideo />
            Related videos
          </h1>
          {post?.length ? (
            <GetItem post={post} />
          ) : (
            <p
              style={{
                textAlign: "center",
                fontSize: 20,
                fontWeight: 400,
                marginBottom: 80,
              }}
            >
              Unfortunately, there is no similar video for this video! But we
              are working on it!
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export const Info = React.memo(InfoMem);
