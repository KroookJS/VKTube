import React from "react";
import Link from "next/link";

import Stories from "react-insta-stories";
import { useRouter } from "next/router";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from './Shorts.module.scss'

const styleIconClose = {
  fontSize: "30px",
  zIndex: 1002,
};

export default function Slider({ myStories }: { myStories: any }) {
  const router = useRouter();

  return (
    <>
      <main className={styles.storisWrapper}>
        <Link href="/">
          <div className={styles.contanerClose}>
            <AiOutlineCloseCircle style={styleIconClose} />
          </div>
        </Link>
        <Stories
          stories={myStories}
          defaultInterval={3500}
          width={"100%"}
          height={"101vh"}
          onAllStoriesEnd={() => router.push("/")}
        />
      </main>
    </>
  );
}
