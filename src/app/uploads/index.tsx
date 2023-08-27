import { Header } from "@/components/Header/Header";
import { Layout } from "@/layout/Layout";
import { LinkStyle } from "@/ui/Button";
import { Wrapper } from "@/ui/Wrraper";
import { Button, ButtonBase } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import styles from "../../styles/add.module.scss";

const InputFile = styled.input`
  border: none;
  width: 350px;
  heigth: 50px;
  border-radius: 20px;
  background: grey;
  padding: 0.5rem 1rem;
  color: #fff;
`;

const InputImage = styled(InputFile)`
  background: rebeccapurple;
`;
const InputGif = styled(InputFile)`
  background: green;
`;

const WrapperFlexColomn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
export default function Uploads() {
  const [videoPriv, setVideoPriv] = useState(
    "https://top-fon.com/uploads/posts/2023-01/1674696708_top-fon-com-p-kinolenta-fon-prezentatsii-199.jpg"
  );
  return (
    <Layout>
      <div className={styles.Wrapper}>
        <div className={styles.WrapperFlexColomn}>
          <Link href="/" style={LinkStyle}>
            <Button>Вернуться назад</Button>
          </Link>
          <img
            src="http://wstmn.ru/wp-content/uploads/2017/02/orig.jpg"
            alt="videoLoading"
          />

          <input
            className={styles.InputFile}
            placeholder="Загрузить Видео"
            type="file"
          />
          <input
            className={styles.InputImage}
            placeholder="Загрузить привью"
            type="file"
          />
          <h2>Загруженный Img</h2>
          <input
            className={styles.InputGif}
            placeholder="Загрузить gif"
            type="file"
          />
          <h2>Загруженная Gif</h2>

          <input className={styles.InputFile} placeholder="title" />
          <input className={styles.InputFile} placeholder="deskription" />
          <Link href="/" style={LinkStyle}>
          <button className="ButtonCategoryPage">Go Back</button>
          </Link>
          <Link href="/uploads/AddTitle" style={LinkStyle}>
          <button className="btnNext">Next</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
