// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../lib/sanity.server";
import { educationQuery } from "../../utils/queries";
import { IEducation } from "../../types/typings";

interface Data {
  education: IEducation;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const education: IEducation = await sanityClient.fetch(educationQuery());
  education && res.status(200).json({ education });
}
