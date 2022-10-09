// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../lib/sanity.server";
import { testimonialsQuery } from "../../utils/queries";
import { ITestimonials } from "../../types/typings";

interface Data {
  testimonials: ITestimonials;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const testimonials: ITestimonials = await sanityClient.fetch(
    testimonialsQuery()
  );
  testimonials && res.status(200).json({ testimonials });
}
