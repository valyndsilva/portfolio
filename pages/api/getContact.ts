// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../lib/sanity.server";
import { contactQuery } from "../../utils/queries";
import { IContact } from "../../types/typings";

interface Data {
  contact: IContact;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const contact: IContact = await sanityClient.fetch(contactQuery());
  res.status(200).json({ contact });
}
