import { IHero } from "../types/typings";
// Fetch Hero info from getHero to use into App
const fetchHero = async () => {
  // Make a REST API call to backend
  // Call an external API endpoint to get Hero info
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getHero`);
  const data = await res.json();
  const hero: IHero = data.hero;
  console.log(hero);
  return hero;
};

export default fetchHero;
