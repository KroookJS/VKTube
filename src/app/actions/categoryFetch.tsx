import { getAllCategorys } from "@/api/categorys";
import { getTopViews } from "@/api/products";
import { getAllShorts } from "@/api/shorts";

export const categoryFetch = async () => {
    const newData = await getAllCategorys();
    return newData
}
export const shortsFetch = async () => {
    const newData = await getAllShorts();
    return newData
}

export const getTopViewsFetch = async () => {
    const newData = await getTopViews()
    return newData
}