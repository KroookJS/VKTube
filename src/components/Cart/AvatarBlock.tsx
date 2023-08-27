import Link from "next/link";
import React from "react";

import styles from "./CartPost/CartPost.module.scss";

export const AvatarBlock = ({
  userAvatar,
  user,
  userName,
  isInfoBlock,
}: {
  userAvatar?: string;
  user?: string;
  userName?: string;
  isInfoBlock?: boolean;
}) => {
  let styleBlock = isInfoBlock ? { padding: "10px 0" } : {};

  return (
    <div className={styles.avaNameBlock} style={styleBlock}>
      <Link href={`/profile/${user}`}>
        <div className={styles.avaNameBlock}>
          <img
            className={styles.cartAvar}
            src={
              userAvatar
                ? "http://37.1.219.168:4444" + userAvatar
                : "https://static4.tgstat.ru/channels/_0/19/198d4555a01171d3b94bb61a37ba9aaf.jpg"
            }
          />
          <p className={styles.cardDesk} style={{ margin: 0 }}>
            {userName ? userName : "@Tele_Porn"}
          </p>
        </div>
      </Link>
    </div>
  );
};
