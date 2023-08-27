"use client";
import React, { FC, useState } from "react";
import { BiCategoryAlt } from "react-icons/bi";

import { ImgMyTestKategory } from "../Categories/ImgMyTestKategory";
import { ICategory } from "@/types/Catigories";
import { ListColumn } from "../Categories/RenderCategory/ListColumn";

type TPropsCategory = {
  categories: ICategory[];
};

const CategoryTemplatesMem: FC<TPropsCategory> = ({ categories }) => {
  const [isActivePage, setIsActivePage] = useState(true);

  const modelRender = categories ? (
    categories.map((catigory: ICategory) => {
      return (
        <ImgMyTestKategory
          title={catigory.category}
          image={catigory.imageCategoryUrl}
          href={catigory._id}
          isCategory={true}
        />
      );
    })
  ) : (
    <p>Loading....</p>
  );
  return (
    <>
      <div style={{ display: "flex", gap: 15 }}>
        <BiCategoryAlt />
        <h3 style={{ fontSize: 20, fontWeight: 400 }}>
          {isActivePage ? "Category" : "Models"}
        </h3>
      </div>
      <ListColumn>{modelRender}</ListColumn>
    </>
  );
};

export const CategoryTemplates = React.memo(CategoryTemplatesMem);
