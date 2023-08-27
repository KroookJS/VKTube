import React, { useRef, useState } from "react";

import styled from "styled-components";
import { UploadVideo } from "@/api/upload";

import { ButtonNext } from "@/ui/Button";
import axios from "axios";

import styles from "../../styles/add.module.scss";

export default function addShort() {
  const [shorts, setShorts] = useState<string>("");

  const [isImage, setIsImage] = useState(false);

  const handleChangeFileShorts = async (event: any) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append("image", file);
      UploadVideo(formData).then((res) => setShorts(res));
    } catch (error) {
      console.log(error);
    }
  };

  const addShortFn = () => {
    axios.post("http://37.1.219.168:4444/shorts", {
      url: shorts,
      type: isImage ? "img" : "video",
    });
  };

  const imputFileShortRef = useRef<any>(null);

  const ButtonDow = styled.button`
    width: 200px;
    height: 50px;
    border: none;
    border-radius: 20px;
    color: #fff;
    background: blue;
    padding: 10px 15px;

    font-size: 18px;
    font-wight: 400;
  `;

  const BtnIsImage = styled(ButtonDow)`
    background: black;
    border: 2px solid green;
    width: 200px;
  `;

  const ContainerAdd = styled.div`
    min-width: 300px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
  `;
  return (
    <div className={styles.ContainerAdd}>
      <h3>Загрузите {isImage ? "Фото" : "Видео"} </h3>
      <button
        className={styles.ButtonDow}
        onClick={() => imputFileShortRef.current.click()}
      >
        Download shorts
      </button>

      <input
        ref={imputFileShortRef}
        type="file"
        onChange={handleChangeFileShorts}
        hidden
      />
      <button
        className={styles.BtnIsImage}
        onClick={() => setIsImage(!isImage)}
      >
        Click is {!isImage ? "Images" : "Videos"}
      </button>

      <button className="btnNext" onClick={() => addShortFn()}>
        Создать Shorts
      </button>
    </div>
  );
}
