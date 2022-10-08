// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../lib/sanity.server";
import { aboutQuery } from "../../utils/queries";
import { IAbout } from "../../types/typings";

interface Data {
  about: IAbout;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const about: IAbout = await sanityClient.fetch(aboutQuery());
  res.status(200).json({ about });
}
