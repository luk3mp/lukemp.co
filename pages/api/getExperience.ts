import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Experience } from "../../typings";

const query = groq`*[_type == "experience"] | order(sortOrder asc)`;

type Data = {
  experiences: Experience[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Fetch the experiences from Sanity using the provided query
  const experiences: Experience[] = await sanityClient.fetch(query);

  // Log the fetched experiences to the console to inspect the order
  // console.log("Fetched Experiences:", experiences);

  // Send the experiences back in the response
  res.status(200).json({ experiences });
}
