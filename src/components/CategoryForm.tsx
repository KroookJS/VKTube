"use client"
import React from "react";
import { SelecctReactCategory } from "./SelecctReactCategory";


import { ICategory, IModel } from "@/types/Catigories";
import { useGlobalContext } from "@/app/store";
import { getAllCategorys, getAllModel } from "@/api/categorys";
import { colourOptions } from "@/utils/dataCategory";
import styles from "../styles/add.module.scss";

export const CategoryForm = ({
  onSubmitVideoPriv,
  onSubmitVideoPrivResult,
}: {
  onSubmitVideoPriv: any;
  onSubmitVideoPrivResult: any;
}) => {
  const [categoryesServer, setCategoryesServer] = React.useState<ICategory[]>();
  const [modelServer, setModelServer] = React.useState<IModel[]>();
  const { setCategoryFile, setModelFile } = useGlobalContext();

  React.useEffect(() => {
    const resCatServer = async () => {
      return await getAllCategorys().then((res) => setCategoryesServer(res));
    };
    const resModServer = async () => {
      return await getAllModel().then((res) => setModelServer(res));
    };
    resCatServer();
    resModServer();
  }, []);

  const newArrCategory =
    categoryesServer || categoryesServer !== undefined
      ? categoryesServer.map((el: ICategory) => {
          return { value: el.category, label: el.category, id: el._id };
        })
      : colourOptions;

  const newArrModel =
    modelServer || modelServer !== undefined
      ? modelServer.map((el: IModel) => {
          return { value: el.model, label: el.model, id: el._id };
        })
      : colourOptions;
  return (
    <>
      <div>
        <h2 className={styles.Title}>Выбирете Категории</h2>
        <SelecctReactCategory
          newArr={newArrCategory}
          setFile={setCategoryFile}
        />
        <h2 className={styles.Title}>Выбирете Моель</h2>
        <SelecctReactCategory newArr={newArrModel} setFile={setModelFile} />

        <div style={{ margin: "20px 0", rowGap: 30 }}>
          <h2 className={styles.Title}>Сгенирировать Гиф обязательно!</h2>
          {/* <SelecctReactModel /> */}
          <button className="ButtonCategoryPage" onClick={onSubmitVideoPriv}>
            подготовить Gif!
          </button>
          <button className="btnPorn" onClick={onSubmitVideoPrivResult}>
            Сделать Gif!
          </button>
        </div>
      </div>
    </>
  );
};
