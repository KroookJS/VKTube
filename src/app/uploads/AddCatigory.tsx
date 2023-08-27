import { Layout } from "@/layout/Layout";
import { LinkStyle } from "@/ui/Button";

import Link from "next/link";
import React from "react";

export default function AddCatigory() {
  return (
    <Layout>
      <h2>Тут будет Select</h2>
      <Link href="/uploads/AddTitle" style={LinkStyle}>
        <button className="ButtonCategoryPage">Назад</button>
      </Link>
      <Link href="/" style={LinkStyle}>
        <button className="btnNext">Загрузить</button>
      </Link>
      </Layout>
  );
}
