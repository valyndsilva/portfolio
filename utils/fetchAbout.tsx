import { IAbout } from "../types/typings";

const fetchAbout = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getAbout`);
  const data = await res.json();
  const about: IAbout = data.about;
  console.log(about);
  return about;
};

export default fetchAbout;
