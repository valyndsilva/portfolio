// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../lib/sanity.server";
import { skillsQuery } from "../../utils/queries";
import { ISkills } from "../../types/typings";

interface Data {
  skills: ISkills;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const skills: ISkills = await sanityClient.fetch(skillsQuery());
  res.status(200).json({ skills });
}
