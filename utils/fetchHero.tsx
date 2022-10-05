import { IHero } from "../types/typings";

const fetchHero = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getHero`);
  const data = await res.json();
  const hero: IHero = data.hero;
  console.log(hero);
  return hero;
};

export default fetchHero;
