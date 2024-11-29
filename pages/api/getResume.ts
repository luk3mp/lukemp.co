import { sanityClient } from "../../sanity";
import { groq } from "next-sanity";
import { NextApiRequest, NextApiResponse } from "next";

const query = groq`
  *[_type == "resume"][0]{
    "url": file.asset->url
  }
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await sanityClient.fetch(query);

  if (!data) {
    return res.status(404).json({ message: "Resume not found" });
  }

  res.status(200).json({ resumeUrl: data.url });
}
