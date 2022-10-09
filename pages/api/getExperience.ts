// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../lib/sanity.server";
import { experienceQuery } from "../../utils/queries";
import { IExperience } from "../../types/typings";

interface Data {
  experience: IExperience;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const experience: IExperience = await sanityClient.fetch(experienceQuery());
  // res.status(200).json({ experience });
  try {
    res.status(200).json({experience});
  } catch (err: any) {
    console.log("Error: ", err.message);
  }
}
