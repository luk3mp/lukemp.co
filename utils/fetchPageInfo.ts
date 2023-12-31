import { PageInfo } from "../typings";

console.log("Base URL:", process.env.NEXT_PUBLIC_BASE_URL);

export const fetchPageInfo = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
  );

  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;

  return pageInfo;
};
