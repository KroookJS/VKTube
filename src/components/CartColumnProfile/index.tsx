import React from "react";
import Link from "next/link";
import { IPost } from "@/types/Post";

import { MdVideoLibrary } from "react-icons/md";
import { IoMdVideocam } from "react-icons/io";

import { NewShorts } from "../Shorts/NewShorts";
import { PlusNavBar } from "../NavBarModel/ui/PlusNavBar";

import styles from "../../styles/profile.module.scss";
import { LinkStyle } from "@/ui/Button";

export const CartColumnProfileMem = ({
  publicate,
}: {
  publicate?: IPost[];
}) => {
  const renderPost = publicate ? (
    <main className={styles.wrapperProfileColumn}>
      {publicate.map((post: IPost) => {
        return (
          <Link key={post._id} href={`/details/${post._id}`} style={LinkStyle}>
            <img
              className={styles.imgPost}
              src={`http://37.1.219.168:4444${post.privUrl}`}
              alt="photo Profile"
            />
          </Link>
        );
      })}
    </main>
  ) : (
    <h2>Loading...</h2>
  );

  const renderAddPostText = (
    <div className={styles.blockAddText}>
      <h2>
        You don't have any posts yet. Can you add your favorite 18+ videos?
      </h2>
      <PlusNavBar />
    </div>
  );

  return (
    <>
      <div className={styles.containerProfileBody}>
        <div className={styles.blockPriveteTitle}>
          <h5 className={styles.publicTitle}>Publicate </h5>
          <h5 className={styles.publicTitle} style={{ border: "none" }}>
            Private
          </h5>
        </div>
        <div className="titleIconBlock">
          <MdVideoLibrary />
          <h3>Shorts</h3>
        </div>
        <NewShorts />
        <div className="titleIconBlock" style={{ margin: "15px 0" }}>
          <IoMdVideocam />
          <h3>Videos</h3>
        </div>
        {publicate?.length ? renderPost : renderAddPostText}
      </div>
    </>
  );
};

const CartColumnProfile = React.memo(CartColumnProfileMem);

export default CartColumnProfile;
