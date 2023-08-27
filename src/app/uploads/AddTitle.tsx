import { Layout } from "@/layout/Layout";
import {  LinkStyle } from "@/ui/Button";
import { TextField, TextareaAutosize } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function addTitle() {
  return (
    <Layout>
      <TextareaAutosize />
      <TextField placeholder="Hi" />
      <Link href="/uploads" style={LinkStyle}>
        <button className="ButtonCategoryPage">Go Back</button>
      </Link>
      <Link href="/uploads/AddCatigory" style={LinkStyle}>
        <button className="btnNext">Next</button>
      </Link>
    </Layout>
  );
}
