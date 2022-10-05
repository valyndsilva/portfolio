import { ITestimonials } from "../types/typings";

const fetchTestimonials = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getTestimonials`
  );
  const data = await res.json();
  const testimonials: ITestimonials = data.testimonials;
  console.log(testimonials);
  return testimonials;
};

export default fetchTestimonials;
