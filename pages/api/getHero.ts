// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../lib/sanity.server";
import { heroQuery } from "../../utils/queries";
import { IHero } from "../../types/typings";

type Data = {
  hero: IHero;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const hero: IHero = await sanityClient.fetch(heroQuery());
  res.status(200).json({ hero });
}
