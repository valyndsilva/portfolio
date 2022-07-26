// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../lib/sanity.server";
import { portfolioQuery } from "../../utils/queries";
import { IPortfolio } from "../../types/typings";

interface Data {
  portfolio: IPortfolio[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const portfolio: IPortfolio[] = await sanityClient.fetch(portfolioQuery());
  // res.status(200).json({ portfolio });
  try {
    res.status(200).json({ portfolio });
  } catch (err: any) {
    console.log("Error: ", err.message);
  }
}
