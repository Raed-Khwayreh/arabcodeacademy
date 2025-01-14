import { getPageSize } from "@/app/ai-tools/utils/getPageSize";

export const fetchItems = async ({
  pageParam = 1,
  search,
  isFav,
}: {
  pageParam?: number;
  search: string;
  isFav: boolean;
}) => {
  const pageSize = getPageSize();
  const res = await fetch(
    `https://sitev2.arabcodeacademy.com/wp-json/aca/v1/aitools?page=${pageParam}&page_size=${pageSize}&search=${search}${
      isFav ? `&isFav=true` : ""
    }`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
