import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { BlogPost } from "../../typings";

const query = groq`*[_type == "blogPost"] {
  _id,
  title,
  slug,
  publishedAt,
  mainImage,
  "author": author->name,
  "authorImage": author->image,
  content
} | order(publishedAt desc)`; // Fetching the blog posts, with related author info and ordering by date

type Data = {
  blogPosts: BlogPost[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const blogPosts: BlogPost[] = await sanityClient.fetch(query);
  res.status(200).json({ blogPosts });
}
